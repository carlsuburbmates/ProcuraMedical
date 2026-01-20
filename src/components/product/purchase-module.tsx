"use client";

import Link from "next/link";
import { Check, Clock } from "lucide-react";

interface PurchaseModuleProps {
  price: number;
  leadTime: string;
  slug: string;
}

export function PurchaseModule({ price, leadTime, slug }: PurchaseModuleProps) {
  return (
    <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 space-y-6">
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-bold tracking-tight text-zinc-900">
          ${price.toLocaleString()}
        </span>
        <span className="text-sm text-zinc-500">GST-free (NDIS)</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-zinc-600 bg-white p-3 rounded-lg border border-zinc-100">
        <Clock className="w-4 h-4 text-emerald-600" />
        <span>Lead time: <span className="font-medium text-zinc-900">{leadTime}</span></span>
      </div>

      <div className="space-y-3">
        <Link 
          href={`/buy/${slug}`}
          className="block w-full text-center py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200"
        >
          Proceed to Purchase
        </Link>
        <p className="text-xs text-center text-zinc-400">
          Plan-Managed Invoice / Credit Card / Private
        </p>
      </div>

      <div className="pt-6 border-t border-zinc-200">
        <ul className="space-y-3 text-sm text-zinc-600">
          <li className="flex gap-2">
            <Check className="w-4 h-4 text-zinc-900 shrink-0" />
            <span>Official NDIS Provider</span>
          </li>
          <li className="flex gap-2">
            <Check className="w-4 h-4 text-zinc-900 shrink-0" />
            <span>Clinical Support Available</span>
          </li>
          <li className="flex gap-2">
            <Check className="w-4 h-4 text-zinc-900 shrink-0" />
            <span>Nationwide Shipping</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
