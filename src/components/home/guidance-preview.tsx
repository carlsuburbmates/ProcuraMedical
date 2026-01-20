"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

export function GuidancePreview() {
  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-sm font-semibold tracking-wider text-zinc-500 uppercase mb-2 block">Guidance Hub</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">Education, Not Sales.</h2>
          </div>
          <Link href="/guidance" className="text-zinc-900 font-medium hover:text-zinc-600 transition-colors flex items-center gap-2">
            View all guides <BookOpen className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Understanding NDIS Consumables",
              category: "Funding",
              readTime: "5 min read",
            },
            {
              title: "Choosing the Right Power Wheelchair",
              category: "Mobility",
              readTime: "8 min read",
            },
            {
              title: "Home Modifications Checklist",
              category: "Living",
              readTime: "12 min read",
            },
          ].map((guide, i) => (
            <Link 
              key={i} 
              href={`/guidance/article-${i}`}
              className="group block"
            >
              <article className="h-full flex flex-col justify-between border-l-2 border-zinc-200 pl-6 hover:border-zinc-900 transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-3 mb-3 text-xs font-medium text-zinc-500">
                    <span className="uppercase tracking-wider">{guide.category}</span>
                    <span>•</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors mb-4">
                    {guide.title}
                  </h3>
                </div>
                <span className="text-sm font-medium underline decoration-transparent group-hover:decoration-zinc-400 underline-offset-4 transition-all">
                  Read Article
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
