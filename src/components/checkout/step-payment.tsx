"use client";

import { useState } from "react";
import { useCheckoutStore } from "@/lib/store";
import { planDetailsSchema, PlanDetails } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function StepPayment() {
  const { fundingType, setStep, setPlanDetails, planDetails } = useCheckoutStore();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState<PlanDetails>(planDetails || {
    participantName: "",
    ndisNumber: "",
    planManagerEmail: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handlePlanManagedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = planDetailsSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach(err => {
        if (err.path[0]) newErrors[err.path[0].toString()] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    setIsProcessing(true);
    setPlanDetails(result.data);
    
    // Simulate API call to generate invoice
    setTimeout(() => {
      setIsProcessing(false);
      // Navigate to success page (mock order ID)
      const mockOrderId = "ORD-" + Math.floor(Math.random() * 1000000);
      router.push(`/order/${mockOrderId}`);
    }, 2000);
  };

  const handlePrivatePayment = () => {
    setIsProcessing(true);
    // Simulate Stripe
    setTimeout(() => {
      setIsProcessing(false);
      const mockOrderId = "ORD-" + Math.floor(Math.random() * 1000000);
      router.push(`/order/${mockOrderId}`);
    }, 2000);
  };

  if (fundingType === "plan-managed") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-[#171a20] mb-6 tracking-tight">Plan Details</h2>
        <form onSubmit={handlePlanManagedSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Participant Name</label>
            <input
              name="participantName"
              value={formData.participantName}
              onChange={handleChange}
              className={cn(
                "w-full p-4 bg-[#F2F3F1] border-b-2 border-transparent focus:border-[#171a20] outline-none transition-all placeholder-gray-400 text-sm font-medium",
                errors.participantName ? "border-red-500 bg-red-50" : ""
              )}
              placeholder="Full name of NDIS participant"
            />
            {errors.participantName && <p className="text-xs text-red-500 font-bold">{errors.participantName}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">NDIS Number</label>
            <input
              name="ndisNumber"
              value={formData.ndisNumber}
              onChange={handleChange}
              className={cn(
                "w-full p-4 bg-[#F2F3F1] border-b-2 border-transparent focus:border-[#171a20] outline-none transition-all placeholder-gray-400 text-sm font-medium",
                errors.ndisNumber ? "border-red-500 bg-red-50" : ""
              )}
              placeholder="430xxxxx"
            />
            {errors.ndisNumber && <p className="text-xs text-red-500 font-bold">{errors.ndisNumber}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Plan Manager Email</label>
            <input
              name="planManagerEmail"
              type="email"
              value={formData.planManagerEmail || ""}
              onChange={handleChange}
              className={cn(
                "w-full p-4 bg-[#F2F3F1] border-b-2 border-transparent focus:border-[#171a20] outline-none transition-all placeholder-gray-400 text-sm font-medium",
                errors.planManagerEmail ? "border-red-500 bg-red-50" : ""
              )}
              placeholder="invoices@planmanager.com.au"
            />
            {errors.planManagerEmail && <p className="text-xs text-red-500 font-bold">{errors.planManagerEmail}</p>}
          </div>

          <button 
            type="submit"
            disabled={isProcessing}
            className="w-full mt-8 btn-tesla-dark py-4 text-sm font-bold uppercase tracking-wide shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Generating Invoice...
              </>
            ) : (
              "Generate Tax Invoice"
            )}
          </button>
        </form>
        <button 
          onClick={() => setStep(2)}
          className="mt-6 text-xs font-bold uppercase tracking-wide text-gray-400 hover:text-[#171a20] transition-colors"
        >
          ← Change funding method
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
      >
      <h2 className="text-2xl font-bold text-[#171a20] mb-6 tracking-tight">Secure Payment</h2>
      <div className="p-6 bg-gray-50 border border-gray-100 rounded-md mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium text-[#171a20]">Total to pay</span>
          <span className="font-bold text-lg text-[#171a20]">$4,500.00</span>
        </div>
        <div className="h-12 bg-white rounded border border-gray-200 animate-pulse w-full flex items-center px-4 text-gray-400 text-sm">
           Card Number (Stripe Element Placeholder)
        </div> 
      </div>

      <button 
        onClick={handlePrivatePayment}
        disabled={isProcessing}
        className="w-full btn-tesla-dark py-4 text-sm font-bold uppercase tracking-wide shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
         {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Processing...
            </>
          ) : (
            "Pay and Place Order"
          )}
      </button>
      
      <button 
          onClick={() => setStep(2)}
          className="mt-6 text-xs font-bold uppercase tracking-wide text-gray-400 hover:text-[#171a20] transition-colors"
        >
          ← Change funding method
        </button>
    </motion.div>
  );
}
