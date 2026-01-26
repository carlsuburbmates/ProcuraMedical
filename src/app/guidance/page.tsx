import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PillarGrid } from "@/components/guidance/guidance-components";

export default function GuidanceIndex() {
  return (
    <div className="container-wide py-12 md:py-24 bg-alabaster min-h-screen">
      <div className="max-w-3xl mb-16">
        <h1 className="h1 text-4xl mb-6">Decision Framework</h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Procura Medical defines infrastructure by constraints, not claims.
          Use these frameworks to confirm requirements before proceeding.
        </p>
      </div>

      <PillarGrid />

      {/* How to use this (Micro Block) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/5 pt-12 mb-16">
         <div>
           <h3 className="text-sm font-bold uppercase tracking-widest mb-4">How to use this</h3>
           <ul className="space-y-3">
             <li className="text-sm text-black flex items-center gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
               Review constraints
             </li>
             <li className="text-sm text-black flex items-center gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
               Confirm requirements
             </li>
             <li className="text-sm text-black flex items-center gap-3">
               <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
               Proceed when ready
             </li>
           </ul>
         </div>

         <div className="flex flex-col justify-end items-start md:items-end">
            <Link href="/systems" className="btn-primary inline-flex items-center gap-2">
              Explore Systems <ArrowRight className="w-4 h-4" />
            </Link>
         </div>
      </div>
      
      <div className="bg-white border border-black/5 p-8 text-center max-w-xl mx-auto">
        <p className="text-sm text-muted mb-4">Need clarification?</p>
        <Link href="/contact" className="text-xs font-bold uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
