"use client";

import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

interface PurchaseModuleProps {
  productSlug: string;
  price: number;
  leadTime: string;
  ndisCode?: string | null;
}

export function PurchaseModule({ productSlug, price, leadTime, ndisCode }: PurchaseModuleProps) {
  return (
    <div className="bg-white border border-black/5 p-8 sticky top-24">
      {/* Price Block */}
      <div className="mb-6 border-b border-black/5 pb-6">
        <span className="text-3xl font-medium tracking-tight block mb-2">
          ${price.toLocaleString()}
        </span>
        <span className="text-sm text-muted uppercase tracking-wide font-medium">
          GST Exempt (Medical)
        </span>
      </div>

      {/* Compliance Badges */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex items-center gap-2 text-[13px] text-muted">
          <Check className="w-4 h-4 text-black" />
          <span>{leadTime}</span>
        </div>
        {ndisCode && (
           <div className="flex items-center gap-2 text-[13px] text-muted">
             <ShieldCheck className="w-4 h-4 text-black" />
             <span>NDIS Code: {ndisCode}</span>
           </div>
        )}
      </div>

      {/* PRIMARY ACTION - SINGLE ITEM FLOW ONLY */}
      <Link 
        href={`/buy/${productSlug}`}
        className="btn-primary w-full mb-4"
      >
        Proceed to Purchase <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
      
      {/* Mandatory Regulatory Text */}
      <p className="text-[11px] text-center text-muted">
        Funding method is selected in the next step.
      </p>
    </div>
  );
}
