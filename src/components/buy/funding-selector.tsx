"use client";

import { FileText, CreditCard, Ban } from "lucide-react";

export type FundingType = "plan_managed" | "self_managed" | "ndia_managed";

interface FundingSelectorProps {
  onSelect: (type: FundingType) => void;
}

export function FundingSelector({ onSelect }: FundingSelectorProps) {
  return (
    <div className="max-w-xl mx-auto space-y-4 animate-fade-in-up">
      <h2 className="h2 text-xl text-center mb-8">How will this order be funded?</h2>

      {/* Option 1: Plan Managed (Primary) */}
      <button
        onClick={() => onSelect("plan_managed")}
        className="w-full bg-white border border-black/5 p-6 flex items-center gap-6 hover:border-black transition-all group text-left"
      >
        <div className="w-12 h-12 bg-alabaster flex items-center justify-center rounded-full border border-black/5 group-hover:bg-black group-hover:text-white transition-colors">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-medium text-black">Plan Managed NDIS</h3>
          <p className="text-sm text-muted">We generate an invoice for your Plan Manager.</p>
        </div>
      </button>

      {/* Option 2: Self Managed / Private */}
      <button
        onClick={() => onSelect("self_managed")}
        className="w-full bg-white border border-black/5 p-6 flex items-center gap-6 hover:border-black transition-all group text-left"
      >
        <div className="w-12 h-12 bg-alabaster flex items-center justify-center rounded-full border border-black/5 group-hover:bg-black group-hover:text-white transition-colors">
          <CreditCard className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-medium text-black">Self Managed / Private</h3>
          <p className="text-sm text-muted">Pay by card now. Invoice provided instantly.</p>
        </div>
      </button>

      {/* Option 3: NDIA Managed (BLOCKED) */}
      <div className="w-full bg-alabaster border border-dashed border-black/10 p-6 flex items-center gap-6 opacity-60 cursor-not-allowed">
        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full border border-black/5">
          <Ban className="w-5 h-5 text-muted" />
        </div>
        <div>
          <h3 className="font-medium text-muted">NDIA Managed (Agency)</h3>
          <p className="text-sm text-muted">Not supported on this platform.</p>
        </div>
      </div>
    </div>
  );
}
