"use client";

import { motion } from "framer-motion";

export function ProductGallery({ images }: { images: string[] }) {
  return (
    <div className="space-y-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-50" />
        {/* Real image would go here */}
        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium">
          Product Visualization
        </div>
      </motion.div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <div key={i} className="aspect-square bg-zinc-50 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
