"use client";

import { useCheckoutStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, CreditCard, FileText, Ban } from "lucide-react";

export function StepFunding() {
  const { setFundingType, setStep, fundingType } = useCheckoutStore();

  const handleSelect = (type: "plan-managed" | "self-managed") => {
    setFundingType(type);
    // Add small delay for visual feedback before auto-advancing
    setTimeout(() => {
        setStep(3);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-[#171a20] mb-2 tracking-tight">How are you paying?</h2>
        <p className="text-[#393c41] text-sm">Select your funding source to proceed.</p>
      </div>

      <div className="space-y-4">
        {/* Plan Managed */}
        <button
          onClick={() => handleSelect("plan-managed")}
          className={cn(
            "w-full text-left p-6 rounded-md border-2 transition-all duration-300 flex items-start gap-4 group hover:shadow-md",
            fundingType === "plan-managed" 
              ? "border-[#171a20] bg-gray-50" 
              : "border-gray-100 bg-white hover:border-gray-300"
          )}
        >
          <div className={cn(
            "h-12 w-12 rounded-full flex items-center justify-center shrink-0 transition-colors",
            fundingType === "plan-managed" ? "bg-[#171a20] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
          )}>
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#171a20]">Plan Managed (NDIS)</h3>
            <p className="text-[#393c41] text-sm mt-1 leading-relaxed">
              We send the invoice directly to your Plan Manager. You pay nothing upfront.
            </p>
          </div>
          {fundingType === "plan-managed" && <Check className="ml-auto w-6 h-6 text-[#171a20]" />}
        </button>

        {/* Self Managed */}
        <button
          onClick={() => handleSelect("self-managed")}
          className={cn(
            "w-full text-left p-6 rounded-md border-2 transition-all duration-300 flex items-start gap-4 group hover:shadow-md",
            fundingType === "self-managed" 
              ? "border-[#171a20] bg-gray-50" 
              : "border-gray-100 bg-white hover:border-gray-300"
          )}
        >
          <div className={cn(
            "h-12 w-12 rounded-full flex items-center justify-center shrink-0 transition-colors",
            fundingType === "self-managed" ? "bg-[#171a20] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
          )}>
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#171a20]">Private / Self-Managed</h3>
            <p className="text-[#393c41] text-sm mt-1 leading-relaxed">
              Pay securely via Credit Card. We provide a compliant invoice for your reimbursement.
            </p>
          </div>
          {fundingType === "self-managed" && <Check className="ml-auto w-6 h-6 text-[#171a20]" />}
        </button>

        {/* NDIA Managed (Disabled) */}
        <div className="w-full text-left p-6 rounded-md border border-gray-100 bg-gray-50/50 flex items-start gap-4 opacity-60 cursor-not-allowed">
          <div className="h-12 w-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0">
            <Ban className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-400">NDIA Managed</h3>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
              We are currently unable to process NDIA-managed payments directly through the portal.
            </p>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setStep(1)}
        className="text-xs font-bold uppercase tracking-wide text-gray-400 hover:text-[#171a20] transition-colors"
      >
        ← Back to delivery details
      </button>
    </motion.div>
  );
}
