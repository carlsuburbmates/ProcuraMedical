"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProcurementStepper } from "./procurement-stepper";
import { DeliveryForm, type DeliveryDetails } from "./delivery-form";
import { FundingSelector, type FundingType } from "./funding-selector";
import { PlanManagedForm, type PlanDetails } from "./plan-managed-form";
import { ArrowLeft } from "lucide-react";

type Step = "delivery" | "funding" | "plan_form" | "card_payment";

interface ProcurementLogicContainerProps {
  product: {
    id: string;
    name: string;
    price: number;
    slug: string;
  };
}

export function ProcurementLogicContainer({ product }: ProcurementLogicContainerProps) {
  const router = useRouter();
  const [step, setStep] = useState<Step>("delivery");
  const [deliveryData, setDeliveryData] = useState<DeliveryDetails | null>(null);
  const [fundingType, setFundingType] = useState<FundingType | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // STEP 1: Delivery
  const handleDeliverySubmit = (data: DeliveryDetails) => {
    setDeliveryData(data);
    setStep("funding");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // STEP 2: Funding Selection
  const handleFundingSelect = (type: FundingType) => {
    if (type === "ndia_managed") return; // Blocked

    setFundingType(type);
    if (type === "plan_managed") {
      setStep("plan_form");
    } else {
      setStep("card_payment");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // STEP 3A: Plan Managed Actions
  const handlePlanSubmit = async (planData: PlanDetails) => {
    setIsProcessing(true);
    
    // MOCK ACTION: Create Order (Simulated delay)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real build, we would POST to /api/orders here
    console.log("Creating Plan Managed Order:", { product, deliveryData, fundingType, planData });
    
    // Redirect to Order ID (Mocked ID 12345)
    router.push("/order/12345");
  };

  // STEP 3B: Card Payment Actions (Placeholder)
  const handleCardPayment = async () => {
    setIsProcessing(true);
    // Mock Stripe
    await new Promise(resolve => setTimeout(resolve, 1500));
    router.push("/order/67890"); // Paid order ID
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Context */}
      <div className="mb-8 text-center">
        <h1 className="h1 text-3xl mb-2">Proceed to Purchase</h1>
        <p className="text-muted text-sm">
          {product.name} — ${product.price.toLocaleString()}
        </p>
      </div>

      <ProcurementStepper 
        currentStep={step === "delivery" ? 1 : step === "funding" ? 2 : 3} 
      />

      {/* Logic Switch */}
      <div className="relative">
        {step !== "delivery" && (
           <button 
             onClick={() => setStep(step === "plan_form" || step === "card_payment" ? "funding" : "delivery")}
             className="absolute -top-16 left-0 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 hover:opacity-60"
           >
             <ArrowLeft className="w-3 h-3" /> Back
           </button>
        )}

        {step === "delivery" && (
          <DeliveryForm initialData={deliveryData || {}} onSubmit={handleDeliverySubmit} />
        )}

        {step === "funding" && (
          <FundingSelector onSelect={handleFundingSelect} />
        )}

        {step === "plan_form" && (
          <PlanManagedForm onSubmit={handlePlanSubmit} isProcessing={isProcessing} />
        )}

        {step === "card_payment" && (
          <div className="max-w-xl mx-auto bg-white border border-black/5 p-8 text-center animate-fade-in-up">
            <h2 className="h2 text-xl mb-4">Secure Card Payment</h2>
            <p className="text-sm text-muted mb-8">
              Stripe integration is pending. This is a placeholder for the Self-Managed/Private flow.
            </p>
            <button 
              onClick={handleCardPayment} 
              disabled={isProcessing}
              className="btn-primary w-full"
            >
              {isProcessing ? "Processing..." : "Pay Now (Test Mode)"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
