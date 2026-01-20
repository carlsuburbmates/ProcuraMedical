"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WellnessGuidance() {
  return (
    <section className="min-h-[100dvh] w-full relative flex flex-col items-center justify-center py-20 overflow-hidden bg-[#F4F5F4] snap-start">
      <div className="container-wide w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-medium text-[#050505] mb-6 tracking-tighter">
            Decision Framework
          </h2>
          <p className="text-lg text-[#555] font-light max-w-lg leading-relaxed">
            Clinical guidance structured for safety and longevity.
          </p>
        </div>
        <Link href="/guidance" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#050505] hover:opacity-50 transition-opacity">
          View All Guides <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Modern Bento Grid - Height Matched to Viewport Logic */}
      <div className="container-wide w-full grid grid-cols-1 md:grid-cols-4 gap-2 h-[60vh]">
        {[
          {
            title: "Physical Function",
            desc: "Posture, Load & Safety",
            link: "/guidance/physical",
            image: "https://images.unsplash.com/photo-1544367563-12123d832d34?q=80&w=1200&auto=format&fit=crop" // Abstract Anatomy/Movement
          },
          {
            title: "Psychological Comfort",
            desc: "Dignity & Confidence",
            link: "/guidance/psychological",
            image: "https://images.unsplash.com/photo-1499244571973-2e245a938d16?q=80&w=1200&auto=format&fit=crop" // Calm/Light Abstract
          },
          {
            title: "Cognitive Load",
            desc: "Simplicity & Fatigue",
            link: "/guidance/cognitive",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop" // Focus/Structure Abstract
          },
          {
            title: "Long-term Value",
            desc: "Durability & Adaptability",
            link: "/guidance/investment",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" // Material/Texture Abstract
          }
        ].map((pillar, i) => (
          <Link 
            key={i} 
            href={pillar.link}
            className="group relative bg-[#e5e5e5] flex flex-col justify-between overflow-hidden h-full"
          >
             {/* Background Image */}
             <div 
               className="absolute inset-0 bg-cover bg-center transition-all duration-[1.2s] ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
               style={{ backgroundImage: `url(${pillar.image})` }}
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

             {/* Content */}
             <div className="relative z-10 p-8 h-full flex flex-col justify-between">
               <div className="flex justify-end">
                 <div className="w-2 h-2 bg-[#050505] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               </div>
               
               <div className="mt-auto transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#050505] mb-4 block opacity-50">0{i + 1}</span>
                  <h3 className="text-2xl font-medium text-[#050505] mb-2">{pillar.title}</h3>
                  <p className="text-sm text-[#050505] opacity-60 group-hover:opacity-100 transition-opacity duration-500 font-medium">
                    {pillar.desc}
                  </p>
               </div>
             </div>
          </Link>
        ))}
      </div>

      {/* Mini Triage - Minimalist Bar */}
      <div className="container-wide w-full mt-8">
        <div className="border-t border-[#E5E5E5] pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
           <span className="text-sm font-medium text-[#050505]">Unsure where to start?</span>
           <button className="flex items-center gap-4 group">
             <span className="text-sm text-[#555] group-hover:text-[#050505] transition-colors">Start Assessment</span>
             <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center group-hover:bg-[#050505] group-hover:border-[#050505] transition-all">
               <ArrowRight className="w-4 h-4 text-[#050505] group-hover:text-white transition-colors" />
             </div>
           </button>
        </div>
      </div>
    </section>
  );
}
