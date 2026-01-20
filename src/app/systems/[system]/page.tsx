import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, SYSTEMS } from "@/lib/data";
import { ArrowRight, Filter } from "lucide-react";

export default async function SystemPage({ params }: { params: Promise<{ system: string }> }) {
  const { system: systemId } = await params;
  
  const system = SYSTEMS.find((s) => s.id === systemId);
  if (!system) {
    return notFound();
  }

  const products = PRODUCTS.filter((p) => p.system === systemId);

  return (
    <div className="bg-[#F2F3F1] min-h-screen pt-32 pb-24">
      {/* 1. System Intro */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="mb-4">
           <Link href="/systems" className="text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-black transition-colors">
             Systems
           </Link>
           <span className="mx-2 text-gray-400">/</span>
           <span className="text-xs font-bold uppercase tracking-wide text-[#171a20]">{system.title}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-medium text-[#171a20] mb-6 tracking-tight">
          {system.title}
        </h1>
        <p className="text-lg text-[#393c41] max-w-3xl font-normal leading-relaxed">
          This system includes products designed to support {system.description.toLowerCase()}.
          Selections prioritise safety, adjustability, and real-world use.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
        {/* 3. Light Filters (Sidebar) */}
        <aside className="w-full lg:w-64 flex-shrink-0">
           <div className="sticky top-32 space-y-8">
             <div className="flex items-center gap-2 text-sm font-bold text-[#171a20] border-b border-gray-200 pb-2">
               <Filter className="w-4 h-4" /> Refine Selection
             </div>
             
             {/* Filter Groups */}
             <div className="space-y-2">
               <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">By Load Capacity</h4>
               <label className="flex items-center gap-2 text-sm text-[#393c41] cursor-pointer hover:text-black">
                 <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-0" /> Standard (up to 120kg)
               </label>
               <label className="flex items-center gap-2 text-sm text-[#393c41] cursor-pointer hover:text-black">
                 <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-0" /> Bariatric (150kg+)
               </label>
             </div>

             <div className="space-y-2">
               <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">By Size</h4>
               <label className="flex items-center gap-2 text-sm text-[#393c41] cursor-pointer hover:text-black">
                 <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-0" /> Paediatric
               </label>
               <label className="flex items-center gap-2 text-sm text-[#393c41] cursor-pointer hover:text-black">
                 <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-0" /> Adult
               </label>
             </div>
           </div>
        </aside>

        {/* 2. Curated Product List */}
        <div className="flex-grow">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {products.length > 0 ? (
               products.map((product) => (
                 <Link 
                   key={product.id} 
                   href={`/p/${product.slug}`}
                   className="group bg-white rounded-lg p-6 shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col"
                 >
                   <div className="aspect-square bg-gray-100 rounded-md mb-6 overflow-hidden relative">
                     {/* Placeholder Image */}
                     <div className="absolute inset-0 bg-gray-200 mix-blend-multiply opacity-50" />
                     {product.images[0] && (
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:scale-105" 
                        />
                     )}
                   </div>
                   
                   <div className="flex-grow">
                      <h3 className="text-xl font-bold text-[#171a20] mb-2 group-hover:underline decoration-1 underline-offset-4">{product.name}</h3>
                      {/* Key Spec Highlight */}
                      <p className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide">
                        {Object.entries(product.specs)[0]?.[0]}: {Object.entries(product.specs)[0]?.[1]}
                      </p>
                   </div>
                   
                   <div className="flex items-end justify-between mt-4 border-t border-gray-100 pt-4">
                     <span className="text-lg font-medium text-[#171a20]">
                       ${product.price.toLocaleString()}
                     </span>
                     <span className="text-xs font-bold uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                       View Details <ArrowRight className="w-3 h-3" />
                     </span>
                   </div>
                 </Link>
               ))
             ) : (
               <div className="col-span-full py-24 text-center border-2 border-dashed border-gray-200 rounded-lg">
                 <p className="text-gray-400">No curated products available in this system yet.</p>
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
