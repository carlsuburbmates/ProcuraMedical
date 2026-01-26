import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SystemCardProps {
  name: string;
  descriptor: string;
  href: string;
  // In a real build, we'd have images. For now, we use authoritative placeholders.
}

export function SystemCard({ name, descriptor, href }: SystemCardProps) {
  return (
    <Link href={href} className="group block border border-black/5 bg-white p-8 transition-all duration-300 hover:border-black/20 hover:shadow-sm">
      <div className="h-64 bg-alabaster mb-8 flex items-center justify-center">
        {/* Placeholder for System Image - Stark, minimalist */}
        <span className="text-muted text-[11px] uppercase tracking-widest">Image: {name}</span>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="h2 text-xl">{name}</h3>
          <ArrowRight className="w-5 h-5 text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
        <p className="text-[15px] leading-relaxed text-muted max-w-sm">
          {descriptor}
        </p>
      </div>
    </Link>
  );
}
