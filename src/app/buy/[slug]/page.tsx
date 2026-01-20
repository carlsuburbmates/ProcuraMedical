import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";
import { CheckoutFlow } from "@/components/checkout/checkout-flow";
import { CheckoutSummary } from "@/components/checkout/checkout-summary";
import Link from "next/link";
import { Lock } from "lucide-react";

export default async function BuyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#F2F3F1]">
      {/* Checkout Header (Minimal) */}
      <header className="h-24 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 md:px-12 fixed w-full top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-[#171a20] text-white font-[900] text-[18px] rounded-[2px]">P</div>
          <span className="text-[14px] font-bold tracking-widest text-[#171a20] uppercase">Procura</span>
        </Link>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#108e66] bg-green-50 px-4 py-2 rounded-full border border-green-100">
          <Lock className="w-3 h-3" /> Secure Checkout
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Flow */}
          <div className="lg:col-span-7">
            <CheckoutFlow />
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-32">
              <CheckoutSummary product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
