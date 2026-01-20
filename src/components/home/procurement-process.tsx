"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export function ProcurementProcess() {
  return (
    <section className="min-h-screen w-full relative flex flex-col items-center justify-center py-24 overflow-hidden bg-[#F4F5F4] snap-start">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Wizard / Steps */}
        <div className="space-y-16">
           <div>
             <h2 className="text-4xl md:text-5xl font-medium text-[#050505] mb-8 tracking-tight">
               Procurement <br/> Simplified.
             </h2>
             <p className="text-lg text-[#555] leading-relaxed max-w-md">
               No jargon. No fine print. A streamlined workflow designed for NDIS participants and plan managers.
             </p>
           </div>

           <div className="space-y-8">
              {[
                { title: "Select System", desc: "Choose a product that fits your clinical needs." },
                { title: "Choose Funding", desc: "Plan Managed (Invoice) or Self Managed (Card)." },
                { title: "We Handle The Rest", desc: "We generate compliant paperwork and dispatch." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 group">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 text-[#050505] flex items-center justify-center font-bold text-lg group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                     {i + 1}
                   </div>
                   <div className="pt-2">
                     <h4 className="text-lg font-medium text-[#050505] mb-1">{step.title}</h4>
                     <p className="text-sm text-[#555]">{step.desc}</p>
                   </div>
                </div>
              ))}
           </div>

           <div>
             <Link 
               href="/contact"
               className="btn-secondary w-fit px-10"
             >
               Speak with Support
             </Link>
           </div>
        </div>

        {/* Right: Featured Visual / "Featured Systems" box replacement */}
        <div className="relative h-[600px] bg-white rounded-sm overflow-hidden shadow-2xl">
           <img 
             src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" 
             alt="Medical Design Process"
             className="w-full h-full object-cover opacity-90"
           />
           <div className="absolute inset-0 bg-black/20" />
           <div className="absolute bottom-8 left-8 text-white">
             <h3 className="text-2xl font-medium mb-2">Clinical Precision</h3>
             <p className="text-white/80 text-sm max-w-xs">
               Every product in our catalogue is vetted for long-term reliability and compliance.
             </p>
           </div>
        </div>

      </div>

      <div className="absolute bottom-0 w-full py-6 bg-white border-t border-gray-100 flex justify-between px-8 text-[10px] uppercase tracking-widest text-[#999]">
        <span>Procura © 2026</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-black">Privacy</Link>
          <Link href="/terms" className="hover:text-black">Terms</Link>
        </div>
      </div>
    </section>
  );
}
