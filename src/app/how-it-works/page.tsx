import Link from "next/link";
import { Check, ClipboardList, CreditCard, Truck } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="container-wide py-12 md:py-24 bg-alabaster min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="h1 text-4xl mb-6">How it works</h1>
        <p className="text-xl text-muted leading-relaxed">
          Procura Medical enables procurement without forcing upfront payment for plan-managed orders.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Step 1 */}
        <div className="flex gap-6">
          <div className="w-12 h-12 bg-white flex items-center justify-center border border-black/10 shrink-0">
            <span className="font-bold text-lg">1</span>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Select</h3>
            <p className="text-muted text-sm leading-relaxed">Browse systems and review specifications.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-6">
           <div className="w-12 h-12 bg-white flex items-center justify-center border border-black/10 shrink-0">
             <span className="font-bold text-lg">2</span>
           </div>
           <div>
             <h3 className="text-lg font-medium mb-2">Confirm</h3>
             <p className="text-muted text-sm leading-relaxed">Confirm fit, clearance, and load requirements.</p>
           </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-6">
           <div className="w-12 h-12 bg-white flex items-center justify-center border border-black/10 shrink-0">
             <span className="font-bold text-lg">3</span>
           </div>
           <div>
             <h3 className="text-lg font-medium mb-2">Choose Funding</h3>
             <p className="text-muted text-sm leading-relaxed">Plan-managed invoice or self-managed/private payment.</p>
           </div>
        </div>

        {/* Step 4 */}
        <div className="flex gap-6">
           <div className="w-12 h-12 bg-white flex items-center justify-center border border-black/10 shrink-0">
             <span className="font-bold text-lg">4</span>
           </div>
           <div>
             <h3 className="text-lg font-medium mb-2">Complete</h3>
             <p className="text-muted text-sm leading-relaxed">Plan-managed: invoice issued immediately. Card: payment confirms the order.</p>
           </div>
        </div>
      </div>

      <div className="text-center border-t border-black/5 pt-12">
        <p className="text-sm text-muted mb-8">
          Procura Medical supplies infrastructure, not clinical advice.
        </p>
        <Link href="/systems" className="btn-primary inline-flex">
          Explore Systems
        </Link>
      </div>
    </div>
  );
}
