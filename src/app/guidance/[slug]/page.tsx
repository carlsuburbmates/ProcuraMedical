import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function GuidanceArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Title formatting for demo purposes
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="bg-[#F2F3F1] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          href="/guidance"
          className="inline-flex items-center text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-[#171a20] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Guidance
        </Link>

        {/* Header */}
        <div className="bg-white p-12 rounded-lg shadow-sm mb-12 border border-gray-100">
           <h1 className="text-4xl md:text-5xl font-bold text-[#171a20] mb-6 tracking-tight leading-tight">
             {title}
           </h1>
           <div className="flex gap-4 text-sm font-medium text-[#393c41] bg-gray-50 p-4 rounded border border-gray-100">
             <span className="uppercase tracking-wide text-xs font-bold text-gray-500">Who this is for:</span>
             Participants · Carers · Clinicians
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-8 space-y-12">
             
             {/* Best for / Not ideal for */}
             <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div>
                     <h3 className="text-sm font-bold uppercase tracking-wide text-[#108e66] mb-4">Best For</h3>
                     <ul className="space-y-2 list-disc pl-4 text-[#393c41]">
                       <li>Scenarios requiring [Benefit A]</li>
                       <li>Users needing [Feature B]</li>
                       <li>Environments with [Condition C]</li>
                     </ul>
                   </div>
                   <div>
                     <h3 className="text-sm font-bold uppercase tracking-wide text-red-600 mb-4">Not Ideal For</h3>
                     <ul className="space-y-2 list-disc pl-4 text-[#393c41]">
                       <li>Situations involving [Risk A]</li>
                       <li>Users with [Constraint B]</li>
                       <li>Temporary use cases</li>
                     </ul>
                   </div>
                </div>
             </section>

             {/* Decision Factors */}
             <section className="space-y-8">
               <h2 className="text-2xl font-bold text-[#171a20]">Decision Factors</h2>
               
               <div className="space-y-4">
                 <h3 className="text-lg font-bold text-[#171a20]">Physical Considerations</h3>
                 <p className="text-[#393c41] leading-relaxed">
                   Consider the user's range of motion, strength, and fatigue levels. [Placeholder content for physical factors specific to this guide].
                 </p>
               </div>

               <div className="space-y-4">
                 <h3 className="text-lg font-bold text-[#171a20]">Environment</h3>
                 <p className="text-[#393c41] leading-relaxed">
                   Assess doorway widths, turning circles, and floor surfaces. [Placeholder content for environmental factors].
                 </p>
               </div>

               <div className="space-y-4">
                 <h3 className="text-lg font-bold text-[#171a20]">Care Context</h3>
                 <p className="text-[#393c41] leading-relaxed">
                   Who is operating the equipment? Is formal training required? [Placeholder content for care context].
                 </p>
               </div>
             </section>

             {/* Specs to Prioritise */}
             <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
               <h3 className="text-lg font-bold text-[#171a20] mb-4">Specs to Prioritise</h3>
               <ul className="space-y-3">
                 <li className="flex justify-between border-b border-gray-100 pb-2">
                   <span className="font-medium text-[#171a20]">Safe Working Load</span>
                   <span className="text-gray-500 text-sm">Must exceed user weight + 20% buffer</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-100 pb-2">
                   <span className="font-medium text-[#171a20]">Overall Width</span>
                   <span className="text-gray-500 text-sm">Critical for doorway access</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-100 pb-2">
                   <span className="font-medium text-[#171a20]">Adjustability Range</span>
                   <span className="text-gray-500 text-sm">Ensures long-term fit</span>
                 </li>
               </ul>
             </section>

             {/* Disclaimer */}
             <p className="text-xs text-gray-400 italic">
               Information only. Not a substitute for professional assessment.
             </p>
           </div>

           {/* Sidebar: Related Systems */}
           <div className="lg:col-span-4">
             <div className="sticky top-32 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
               <h4 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-6">Related Systems</h4>
               <ul className="space-y-4">
                 <li>
                   <Link href="/systems/mobility" className="group block">
                     <span className="text-sm font-bold text-[#171a20] group-hover:underline">Mobility Systems</span>
                     <p className="text-xs text-gray-500 mt-1">Wheelchairs & Transfer Aids</p>
                   </Link>
                 </li>
                 <li className="border-t border-gray-100 pt-4">
                   <Link href="/systems/hygiene" className="group block">
                     <span className="text-sm font-bold text-[#171a20] group-hover:underline">Hygiene Essentials</span>
                     <p className="text-xs text-gray-500 mt-1">Commodes & Bath Lifts</p>
                   </Link>
                 </li>
               </ul>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
