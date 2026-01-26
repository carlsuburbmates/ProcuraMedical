import Link from "next/link";
import { ArrowRight, Ruler, ShieldAlert, Clock, RefreshCw } from "lucide-react";

import { GUIDES_DB } from "@/lib/decision-framework";

export function PillarGrid() {
  const pillars = Object.values(GUIDES_DB);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {pillars.map((pillar) => (
        <Link
          key={pillar.id}
          href={`/guidance/${pillar.id}`}
          className="group block bg-white border border-black/5 overflow-hidden transition-all hover:border-black/20"
        >
          <div className="h-32 bg-gray-100 relative grayscale group-hover:grayscale-0 transition-all duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${pillar.image})` }}
            />
          </div>
          <div className="p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-2 text-[#050505]">{pillar.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">{pillar.summary}</p>
            <span className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all text-[#050505]">
              Read Guide <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

interface GuideTileProps {
  title: string;
  summary: string;
  slug: string;
}

export function GuideTile({ title, summary, slug }: GuideTileProps) {
  return (
    <Link href={`/guidance/${slug}`} className="group block bg-white border border-black/5 p-8 transition-all hover:border-black">
      <h3 className="text-lg font-medium mb-2 group-hover:underline decoration-1 underline-offset-4">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6">{summary}</p>
      <span className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
        Read Guide <ArrowRight className="w-3 h-3" />
      </span>
    </Link>
  );
}
