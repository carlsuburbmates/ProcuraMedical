"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GUIDES_DB } from "@/lib/decision-framework";

export function DecisionFramework() {
  const pillars = [
    {
      id: "fit-and-clearance",
      title: "Fit & Clearance",
      summary: "Measurements that prevent the wrong order.",
      image: "/images/guidance/fit-clearance.jpg",
      href: "/guidance/fit-and-clearance"
    },
    {
      id: "safety-and-load",
      title: "Safety & Load",
      summary: "Load ratings, stability, braking, surfaces.",
      image: "/images/guidance/safety-load.jpg",
      href: "/guidance/safety-and-load"
    },
    {
      id: "daily-use",
      title: "Daily Use",
      summary: "Cleaning, access, routine handling, setup.",
      image: "/images/guidance/daily-use.jpg",
      href: "/guidance/daily-use"
    },
    {
      id: "delivery-and-setup",
      title: "Delivery & Setup",
      summary: "Lead time, assembly, space, handoff.",
      image: "/images/guidance/delivery-setup.jpg",
      href: "/guidance/delivery-and-setup"
    }
  ];

  return (
    <section className="min-h-dvh w-full relative flex flex-col items-center justify-center py-20 overflow-hidden bg-[var(--bg-alabaster)] snap-start">
      <div className="container-wide w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-medium text-[#050505] mb-6 tracking-tighter">
            Decision Framework
          </h2>
          <p className="text-lg text-[#555] font-light max-w-lg leading-relaxed">
            Confirm the basics before procurement.
          </p>
        </div>
        <Link href="/guidance" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#050505] hover:opacity-50 transition-opacity">
          View Decision Framework <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Static Pillar Grid - No Zoom, Clickable Tiles */}
      <div className="container-wide w-full grid grid-cols-1 md:grid-cols-4 gap-2 h-[60vh]">
        {pillars.map((pillar, i) => (
          <Link
            key={i}
            href={pillar.href}
            className="group relative bg-[#e5e5e5] flex flex-col justify-end overflow-hidden h-full grayscale hover:grayscale-0 transition-all duration-500"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: `url(${pillar.image})` }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

            {/* Content */}
            <div className="relative z-10 p-8 w-full bg-linear-to-t from-black/60 to-transparent">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white mb-2 block opacity-80">0{i + 1}</span>
              <h3 className="text-2xl font-medium text-white mb-2">{pillar.title}</h3>
              <p className="text-white/80 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {pillar.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
