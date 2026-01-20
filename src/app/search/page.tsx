"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/data";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.system.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <div className="bg-[#F2F3F1] min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-medium text-[#171a20] mb-6 tracking-tight">
          Search Products
        </h1>
        <p className="text-lg text-[#393c41] leading-relaxed mb-8">
          Find a product by name, system, or a key phrase.
        </p>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 w-full rounded-md border border-black/10 px-4"
            placeholder="Search (e.g. shower commode, rehab, walker)"
            aria-label="Search"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((p) => (
            <Link
              key={p.slug}
              href={`/p/${p.slug}`}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[#393c41] mb-3">
                {p.system}
              </div>
              <div className="text-xl font-semibold text-[#171a20] mb-2 group-hover:underline decoration-1 underline-offset-4">
                {p.name}
              </div>
              <p className="text-sm text-[#393c41] leading-relaxed">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
