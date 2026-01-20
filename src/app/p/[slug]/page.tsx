import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, SYSTEMS } from "@/lib/data";
import { ArrowLeft, Clock } from "lucide-react";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  const system = SYSTEMS.find(s => s.id === product.system);

  return (
    <div className="bg-[#F4F5F4] min-h-screen pt-32 pb-24">
      {/* Sticky Mobile Buy Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-40 md:hidden flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div>
          <span className="block text-xs text-gray-500 uppercase">Total</span>
          <span className="font-bold text-lg text-[#050505]">${product.price.toLocaleString()}</span>
        </div>
        <Link 
          href={`/buy/${product.slug}`}
          className="btn-primary h-10 px-6 text-xs"
        >
          Purchase
        </Link>
      </div>

      <div className="container-wide">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href={system ? `/systems/${system.id}` : "/systems"}
            className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3 h-3 mr-2" />
            Back to {system?.title || "Systems"}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Gallery (Sticky) */}
          <div className="lg:col-span-7">
            <div className="sticky top-32 space-y-2">
               <div className="aspect-[4/3] bg-white rounded-sm overflow-hidden relative shadow-sm">
                  {/* Subtle Grain Texture Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
                  
                  {product.images[0] && (
                     <img 
                       src={product.images[0]} 
                       alt={product.name} 
                       className="w-full h-full object-cover mix-blend-multiply opacity-95 transition-transform duration-700 hover:scale-105" 
                     />
                  )}
               </div>
               <div className="grid grid-cols-2 gap-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="aspect-[4/3] bg-white rounded-sm overflow-hidden relative shadow-sm opacity-60 hover:opacity-100 transition-opacity">
                       <div className="absolute inset-0 bg-gray-50" />
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-5 space-y-10 pb-20 md:pb-0">
             
             <div>
               {product.ndisCode && (
                 <span className="inline-block px-3 py-1 border border-gray-200 rounded-full text-[10px] font-mono text-gray-500 mb-6 bg-white">
                   NDIS: {product.ndisCode}
                 </span>
               )}
               <h1 className="text-4xl md:text-5xl font-medium text-[#050505] mb-6 tracking-tight leading-[1.1]">
                 {product.name}
               </h1>
               <p className="text-lg text-[#555] leading-relaxed font-light">
                 {product.description}
               </p>
             </div>

             {/* Purchase Module */}
             <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <div className="flex items-baseline justify-between mb-8">
                   <span className="text-3xl font-medium text-[#050505]">
                     ${product.price.toLocaleString()}
                   </span>
                   <span className="text-xs text-green-700 uppercase tracking-widest font-bold bg-green-50 px-2 py-1 rounded">GST Free</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-[#555] mb-8 bg-[#F9F9F9] p-4 rounded-sm border border-gray-100">
                  <Clock className="w-4 h-4 text-[#050505]" />
                  <span>Lead Time: <span className="font-bold text-black">{product.leadTime}</span></span>
                </div>

                <Link 
                  href={`/buy/${product.slug}`}
                  className="btn-primary w-full h-14 text-sm mb-4"
                >
                  Proceed to Purchase
                </Link>
                
                <p className="text-[11px] text-center text-gray-400 uppercase tracking-wide">
                  Secure Checkout • Invoice Available
                </p>
             </div>

             {/* Specs */}
             <div className="pt-8 border-t border-gray-200">
               <h3 className="text-sm font-bold text-[#050505] uppercase tracking-widest mb-6">Key Specifications</h3>
               <dl className="space-y-4">
                 {Object.entries(product.specs).map(([key, value]) => (
                   <div key={key} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                     <dt className="text-sm font-medium text-gray-500">{key}</dt>
                     <dd className="text-sm font-bold text-[#050505]">{value}</dd>
                   </div>
                 ))}
               </dl>
             </div>

             {/* Fit Guardrails (New Section) */}
             {product.fitGuardrails && (
               <div className="pt-8 border-t border-gray-200">
                 <h3 className="text-sm font-bold text-[#050505] uppercase tracking-widest mb-6 text-red-700">Suitability Check</h3>
                 <div className="bg-red-50 p-6 rounded-sm border border-red-100">
                   <p className="text-xs font-bold text-red-800 mb-3 uppercase tracking-wide">May not be suitable if:</p>
                   <ul className="space-y-2">
                     {product.fitGuardrails.map((point, i) => (
                       <li key={i} className="flex items-start gap-3 text-sm text-red-900/80">
                         <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-red-400 shrink-0" />
                         {point}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             )}

             {/* Support */}
             <div className="bg-[#F9F9F9] p-6 rounded-sm border border-gray-200 flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">?</div>
               <div>
                 <h4 className="text-sm font-bold text-[#050505] mb-1">Clinical Assessment Required?</h4>
                 <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                   Unsure if this fits your NDIS plan goals? Our team can help verify suitability.
                 </p>
                 <Link href="/contact" className="text-xs font-bold underline">Contact Support</Link>
               </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
}
