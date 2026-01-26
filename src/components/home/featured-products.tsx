"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  return (
    <section className="min-h-[80vh] w-full relative flex flex-col items-center justify-center py-24 overflow-hidden bg-white snap-start">
      <div className="z-10 text-center fade-in mb-20 max-w-2xl px-6">
        <h2 className="text-4xl md:text-5xl font-medium text-[#050505] mb-4 tracking-tight">
          Featured products
        </h2>
        <p className="text-lg text-[#555] font-normal">
          A small selection of commonly chosen systems.
        </p>
      </div>

      <div className="z-10 w-full px-6 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Apex Carbon Series",
            price: "$4,500",
            image: "https://images.unsplash.com/photo-1542840843-3349799cded6?q=80&w=1000&auto=format&fit=crop", // Clean chair
            slug: "apex-carbon-chair"
          },
          {
            name: "Aquatec Ocean Ergo",
            price: "$1,850",
            image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop", // White aesthetic
            slug: "aquatec-ocean-vip"
          },
          {
            name: "Thera-Active Trainer",
            price: "$3,200",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop", // Lab aesthetic
            slug: "thera-active-trainer"
          }
        ].map((product, i) => (
          <Link key={i} href={`/p/${product.slug}`} className="group block">
            <div className="bg-[#F4F5F4] aspect-[4/5] rounded-sm mb-6 overflow-hidden relative">
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
               />
            </div>
            <div className="flex justify-between items-start border-t border-gray-100 pt-4">
              <div>
                <h3 className="font-medium text-[#050505] text-lg mb-1">{product.name}</h3>
                <span className="text-sm text-[#555]">From {product.price}</span>
              </div>
              <div className="h-8 px-4 rounded-full border border-gray-200 flex items-center justify-center gap-2 group-hover:bg-black group-hover:border-black transition-colors">
                 <span className="text-xs font-bold uppercase tracking-wider text-black group-hover:text-white transition-colors">View details</span>
                 <ArrowRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
