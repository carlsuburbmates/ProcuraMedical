import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { GUIDES_DB } from "@/lib/decision-framework";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function GuidePage(props: Props) {
  const params = await props.params;
  const guide = GUIDES_DB[params.slug];

  if (!guide) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 bg-white min-h-screen">
      <Link href="/guidance" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#888] hover:text-[#050505] mb-12 transition-colors">
        <ArrowLeft className="w-3 h-3 mr-2" /> Back to Framework
      </Link>

      <div className="mb-16 border-b border-[#050505]/5 pb-8">
        <h1 className="text-4xl md:text-5xl font-medium text-[#050505] mb-4 tracking-tighter">{guide.title}</h1>
        <p className="text-lg text-[#555] font-light leading-relaxed max-w-2xl">{guide.summary}</p>
      </div>

      <div className="grid grid-cols-1 gap-12">

        {/* SECTION 1: What to confirm */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#050505] mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-[#050505]"></span>
            What to confirm
          </h3>
          <ul className="space-y-4">
            {guide.sections.what_to_confirm.map((item, i) => (
              <li key={i} className="flex gap-4 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#050505] shrink-0 mt-2" />
                <span className="text-sm text-[#333] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION 2: Common mistakes */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#050505] mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-[#050505]"></span>
            Common mistakes
          </h3>
          <ul className="space-y-4">
            {guide.sections.common_mistakes.map((item, i) => (
              <li key={i} className="flex gap-4 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d00] opacity-40 shrink-0 mt-2" />
                <span className="text-sm text-[#333] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION 3: Next Step (CTA) */}
        <div className="flex flex-col items-start py-8 border-t border-[#050505]/10 mt-8">
          <Link href="/systems" className="btn-primary inline-flex items-center gap-3 px-8 py-3 text-xs tracking-widest">
            Explore Systems <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Footer: Disclaimer */}
        <p className="text-[10px] text-[#999] uppercase tracking-widest pt-8 border-t border-[#050505]/5">
          Information only. For complex needs, consult an appropriate clinician.
        </p>

      </div>
    </div>
  );
}
