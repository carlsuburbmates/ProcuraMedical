"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SYSTEMS } from "@/lib/data";

export default function SystemsIndex() {
  return (
    <div className="bg-[#F2F3F1] min-h-screen pt-32 pb-24">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-medium text-[#171a20] mb-6 tracking-tight">
          Systems, not shelves.
        </h1>
        <p className="text-lg text-[#393c41] max-w-2xl font-normal leading-relaxed">
          Each system groups products by function and use-case.
          We keep ranges small so decisions stay clear.
        </p>
      </div>

      {/* System Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SYSTEMS.map((system) => (
          <Link 
            key={system.id} 
            href={`/systems/${system.id}`}
            className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image Area */}
            <div className="aspect-[16/9] bg-gray-200 relative overflow-hidden">
               {/* Placeholder for system image - using a generic medical gradient or specific image if available */}
               <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-6 left-6">
                 <h2 className="text-2xl font-bold text-[#171a20] mb-1">{system.title}</h2>
               </div>
            </div>
            
            {/* Content Area */}
            <div className="p-8">
              <p className="text-[#393c41] text-sm leading-relaxed mb-6">
                {system.description}
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <span className="text-xs font-bold uppercase tracking-wide text-[#171a20]">
                  For: Daily Use & Clinical Care
                </span>
                <span className="text-sm font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all text-[#108e66]">
                  View System <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
