"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SystemsOverview() {
  return (
    <section id="systems-overview" className="min-h-[100dvh] w-full relative flex flex-col items-center justify-center py-20 overflow-hidden bg-[#F4F5F4] snap-start">
      <div className="container-wide w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-medium text-[#050505] mb-6 tracking-tighter">
            Systems
          </h2>
          <p className="text-lg text-[#555] font-light max-w-xl leading-relaxed">
            Healthcare systems designed for reliability and compliance.
          </p>
        </div>
        <Link href="/systems" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#050505] hover:opacity-50 transition-opacity">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="container-wide w-full grid grid-cols-1 md:grid-cols-3 gap-2 h-[60vh]">
        {[
          {
            title: "Mobility",
            desc: "Transfers & Posture",
            href: "/systems/mobility",
            // Clean, architectural chair leg/detail - very abstract
            image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop"
          },
          {
            title: "Hygiene",
            desc: "Dignity & Access",
            href: "/systems/hygiene",
            // Minimalist white bathroom texture/stone - replacing previous one if it failed
            image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop" 
          },
          {
            title: "Rehab Tech",
            desc: "Recovery & Training",
            href: "/systems/rehab",
            // Dark technical equipment detail
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
          }
        ].map((system, i) => (
          <Link 
            key={i} 
            href={system.href}
            className="group relative h-full overflow-hidden block bg-[#e5e5e5]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-[1.2s] ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              style={{ backgroundImage: `url(${system.image})` }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white z-10 mix-blend-difference">
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-70">0{i + 1}</span>
              <h3 className="text-4xl font-medium mb-2 tracking-tight">{system.title}</h3>
              <p className="text-white/80 text-sm font-light tracking-wide group-hover:text-white transition-colors">
                {system.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
