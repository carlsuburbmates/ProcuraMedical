"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GuidanceIndex() {
  return (
    <div className="bg-[#F2F3F1] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-medium text-[#171a20] mb-6 tracking-tight">
          Guidance for informed choices.
        </h1>
        <p className="text-lg text-[#393c41] max-w-2xl font-normal leading-relaxed">
          These guides are designed to help you think through suitability, safety, and long-term use.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Choosing mobility equipment safely",
            slug: "choosing-mobility-safely"
          },
          {
            title: "Hygiene equipment considerations",
            slug: "hygiene-considerations"
          },
          {
            title: "Planning for long-term use",
            slug: "planning-long-term"
          }
        ].map((guide, i) => (
          <Link 
            key={i} 
            href={`/guidance/${guide.slug}`}
            className="group block bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 h-64 flex flex-col justify-between"
          >
             <div>
               <span className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-4 block">Guide {i + 1}</span>
               <h3 className="text-2xl font-bold text-[#171a20] group-hover:underline decoration-1 underline-offset-4">
                 {guide.title}
               </h3>
             </div>
             
             <span className="text-sm font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all text-[#108e66]">
               Read Guide <ArrowRight className="w-4 h-4" />
             </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
