"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { useProcurementModal } from "@/lib/modal-store";
import { cn } from "@/lib/utils";

export function ProcurementModal() {
  const { isOpen, closeModal, productName, price, code } = useProcurementModal();
  const [activeTab, setActiveTab] = useState<"plan" | "self">("plan");

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const generatePDF = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation
    alert(`SUCCESS:\n\nTax Invoice for ${productName} (NDIS: ${code})...\n\nThis would now download a PDF formatted for Plan Manager submission.`);
    closeModal();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-[5px] animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-10 rounded-[4px] w-[90%] max-w-[550px] shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#171a20] tracking-tight">Configure Procurement</h3>
          <button onClick={closeModal} className="text-gray-400 hover:text-black transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Summary */}
        <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-[#171a20]">{productName}</span>
            <span className="text-sm font-medium text-[#171a20]">${price}</span>
          </div>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>NDIS Code: {code}</span>
            <span className="text-green-600 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span> Approved
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button 
            onClick={() => setActiveTab("plan")}
            className={cn(
              "flex-1 pb-3 text-xs uppercase tracking-wide transition-colors font-bold",
              activeTab === "plan" ? "border-b-2 border-[#171a20] text-[#171a20]" : "border-b-2 border-transparent text-gray-400 hover:text-gray-600 font-medium"
            )}
          >
            Plan Managed (Invoice)
          </button>
          <button 
            onClick={() => setActiveTab("self")}
            className={cn(
              "flex-1 pb-3 text-xs uppercase tracking-wide transition-colors font-bold",
              activeTab === "self" ? "border-b-2 border-[#171a20] text-[#171a20]" : "border-b-2 border-transparent text-gray-400 hover:text-gray-600 font-medium"
            )}
          >
            Self Managed / Private
          </button>
        </div>

        {/* Forms */}
        {activeTab === "plan" ? (
          <form className="space-y-4" onSubmit={generatePDF}>
            <p className="text-xs text-gray-500 mb-4 bg-blue-50 p-3 rounded border border-blue-100">
              <span className="font-bold text-blue-800">Next Step:</span> We will generate a compliant Tax Invoice PDF and email it to you (or your Plan Manager). Stock is reserved for 7 days pending payment.
            </p>
            <div>
              <input required type="text" className="w-full bg-white border-b border-gray-300 py-3 text-sm focus:border-black outline-none transition-colors placeholder-gray-400" placeholder="Participant Full Name" />
            </div>
            <div>
              <input required type="text" className="w-full bg-white border-b border-gray-300 py-3 text-sm focus:border-black outline-none transition-colors placeholder-gray-400" placeholder="NDIS Number (9 Digits)" />
            </div>
            <div>
              <input required type="email" className="w-full bg-white border-b border-gray-300 py-3 text-sm focus:border-black outline-none transition-colors placeholder-gray-400" placeholder="Email for Invoice Delivery" />
            </div>
            <div className="pt-6">
              <button type="submit" className="w-full btn-tesla-dark py-4 text-sm font-bold uppercase tracking-wide shadow-xl hover:shadow-2xl">
                Generate Invoice & Reserve
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Redirecting to Stripe..."); closeModal(); }}>
            <p className="text-xs text-gray-500 mb-4 bg-gray-50 p-3 rounded border border-gray-100">
              <span className="font-bold text-gray-800">Direct Payment:</span> Secure credit card processing via Stripe. An official receipt will be issued immediately for your reimbursement claim.
            </p>
            <div>
              <input required type="text" className="w-full bg-white border-b border-gray-300 py-3 text-sm focus:border-black outline-none transition-colors placeholder-gray-400" placeholder="Card Number" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input required type="text" className="w-full bg-white border-b border-gray-300 py-3 text-sm focus:border-black outline-none transition-colors placeholder-gray-400" placeholder="MM / YY" />
              <input required type="text" className="w-full bg-white border-b border-gray-300 py-3 text-sm focus:border-black outline-none transition-colors placeholder-gray-400" placeholder="CVC" />
            </div>
            <div className="pt-6">
              <button type="submit" className="w-full btn-tesla-dark py-4 text-sm font-bold uppercase tracking-wide shadow-xl hover:shadow-2xl">
                Pay Securely
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
