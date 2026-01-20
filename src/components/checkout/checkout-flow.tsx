"use client";

import { useCheckoutStore } from "@/lib/store";
import { StepDelivery } from "./step-delivery";
import { StepFunding } from "./step-funding";
import { StepPayment } from "./step-payment";
import { AnimatePresence } from "framer-motion";

export function CheckoutFlow() {
  const { step } = useCheckoutStore();

  return (
    <div>
      {/* Stepper Indicator */}
      <div className="flex items-center gap-2 mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
             <div 
               className={`h-1 w-12 rounded-full transition-colors duration-500 ${step >= s ? "bg-[#171a20]" : "bg-gray-200"}`} 
             />
          </div>
        ))}
        <span className="text-xs font-bold uppercase tracking-wide text-gray-400 ml-4">
          Step {step} of 3
        </span>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && <StepDelivery key="step1" />}
        {step === 2 && <StepFunding key="step2" />}
        {step === 3 && <StepPayment key="step3" />}
      </AnimatePresence>
    </div>
  );
}
