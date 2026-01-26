import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Minimal Product Interface for the grid
interface ProductSummary {
  id: string;
  name: string;
  slug: string;
  price_base: number;
  lead_time: string;
  image_placeholder: string;
}

interface CuratedProductGridProps {
  products: ProductSummary[];
}

export function CuratedProductGrid({ products }: CuratedProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <Link 
          key={product.id} 
          href={`/p/${product.slug}`}
          className="group block bg-white border border-black/5 p-6 transition-all duration-300 hover:border-black/20"
        >
          <div className="aspect-[4/5] bg-alabaster mb-6 flex items-center justify-center relative overflow-hidden">
             <span className="text-muted text-[11px] uppercase tracking-widest z-10">
               {product.image_placeholder}
             </span>
             {/* Hover overlay hint */}
             <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-black group-hover:underline decoration-1 underline-offset-4">
                {product.name}
              </h3>
              <p className="text-[13px] text-muted mt-1">
                {product.lead_time}
              </p>
            </div>

            <div className="flex items-end justify-between">
              <span className="text-sm font-medium text-black">
                ${product.price_base.toLocaleString()}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-black flex items-center gap-1">
                View Details <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
