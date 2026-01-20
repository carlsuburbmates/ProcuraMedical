"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useProcurementModal } from "@/lib/modal-store";

export function Hero() {
  const { scrollY } = useScroll();
  const { openModal } = useProcurementModal();
  
  // Stronger Parallax effect for visibility
  // Image moves slower than scroll (0 -> 400px down as you scroll 1000px)
  const y = useTransform(scrollY, [0, 1000], [0, 400]); 
  
  // Content fades out faster
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="min-h-[100dvh] w-full relative flex flex-col items-center justify-between pb-24 pt-32 overflow-hidden bg-black snap-start z-10">
      {/* Background Layer with Parallax Y */}
      <motion.div 
        style={{ y, opacity: 1 }} // Keep image opaque, only move it
        className="absolute inset-0 z-0 h-[120%]" // Taller than screen for parallax room
      >
         <img 
           src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=2500&auto=format&fit=crop" 
           className="w-full h-full object-cover opacity-60 filter grayscale contrast-125"
           alt="Hero Background"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      {/* Top Content (Header) */}
      <motion.div style={{ opacity }} className="z-10 text-center fade-in pt-16 max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-medium text-white mb-3 tracking-tight drop-shadow-lg">
          Procura Medical
        </h1>
        <p className="text-sm md:text-xl text-gray-200 font-normal tracking-wide drop-shadow-md">
          Advanced Care Infrastructure
        </p>
      </motion.div>

      {/* Bottom Content (Buttons) */}
      <motion.div style={{ opacity }} className="z-10 w-full px-6 fade-in delay-500">
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
          <button 
            onClick={() => openModal('C101 Seating Platform', '1450.00', '05_123_0103_1_2')} 
            className="w-full md:w-64 py-3 text-sm font-bold uppercase tracking-wide bg-white text-[#171a20] border-2 border-white rounded-[4px] transition-all duration-200 hover:bg-[#e2e2e2] hover:border-[#e2e2e2] hover:scale-[1.02]"
          >
            Start Procurement
          </button>
          
          <button 
            className="w-full md:w-64 py-3 text-sm font-bold uppercase tracking-wide bg-black/40 text-white backdrop-blur-xl border-2 border-white/30 rounded-[4px] transition-all duration-200 hover:bg-[#1e1e1e]/60 hover:border-white hover:scale-[1.02]"
          >
            View Specifications
          </button>
        </div>
        <p className="text-[11px] text-center text-gray-300 mt-8 font-medium tracking-wide">
          Instant NDIS Invoicing & Card Payment Available. Code <span className="text-white font-bold">05_123_0103</span>.
        </p>
      </motion.div>
    </section>
  );
}
