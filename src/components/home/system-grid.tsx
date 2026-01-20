"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
  delay?: number;
}

function SystemCard({ title, description, href, className, delay = 0 }: SystemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500",
        className
      )}
    >
      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">{title}</h3>
        <p className="text-zinc-500 max-w-sm">{description}</p>
      </div>

      <div className="relative z-10 flex items-end justify-between mt-12">
        <span className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 group-hover:decoration-zinc-900 transition-all">
          View Collection
        </span>
        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center border border-zinc-200 group-hover:border-zinc-900 transition-colors">
          <ArrowUpRight className="w-5 h-5 text-zinc-900" />
        </div>
      </div>
      
      <Link href={href} className="absolute inset-0 z-20" aria-label={`View ${title}`} />
    </motion.div>
  );
}

export function SystemGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Curated Systems</h2>
          <p className="text-zinc-500 max-w-2xl text-lg">
            We don't sell catalogs. We curate complete healthcare systems designed for reliability and NDIS compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Main Feature - Mobility */}
          <SystemCard 
            title="Mobility Systems"
            description="High-performance wheelchairs and power-assist devices engineered for daily independence."
            href="/systems/mobility"
            className="md:col-span-2 bg-zinc-100"
          />
          
          {/* Secondary - Hygiene */}
          <SystemCard 
            title="Hygiene"
            description="Shower and toileting systems that prioritize dignity and safety."
            href="/systems/hygiene"
            className="md:col-span-1"
            delay={0.1}
          />

          {/* Secondary - Rehab */}
          <SystemCard 
            title="Rehab Tech"
            description="Therapeutic equipment for home-based rehabilitation."
            href="/systems/rehab"
            className="md:col-span-1"
            delay={0.2}
          />

          {/* Secondary - Transfer */}
          <SystemCard 
            title="Patient Transfer"
            description="Hoists and transfer aids reducing strain for caregivers."
            href="/systems/transfer"
            className="md:col-span-2 bg-zinc-100"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
