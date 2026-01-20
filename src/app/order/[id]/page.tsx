import Link from "next/link";
import { OrderTimeline } from "@/components/order/order-timeline";
import { Download, Mail, Package } from "lucide-react";

export default async function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#F2F3F1] pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12 text-center">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#171a20] text-white text-xs font-bold tracking-wider uppercase mb-4">
              Order Confirmed
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#171a20] mb-2 tracking-tight">Thank you, Order #{id}</h1>
            <p className="text-[#393c41] font-medium">
              We have sent a confirmation email to your provided address.
            </p>
          </div>

          <OrderTimeline />

          <div className="bg-[#F2F3F1] rounded-lg p-8 text-left border border-gray-100 mb-8">
            <h3 className="font-bold text-lg text-[#171a20] mb-4">Next Steps: Plan Managed Payment</h3>
            <ol className="list-decimal pl-5 space-y-4 text-[#393c41] mb-8 text-sm leading-relaxed">
              <li>We have generated your NDIS compliant tax invoice.</li>
              <li>This invoice has been emailed to your <strong>Plan Manager</strong> (if provided) and yourself.</li>
              <li>Once funds are released (usually 2-3 business days), we will dispatch your order immediately.</li>
            </ol>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 h-12 px-6 bg-[#171a20] text-white rounded-[4px] text-sm font-bold uppercase tracking-wide hover:bg-black transition-colors shadow-lg">
                <Download className="w-4 h-4" /> Download Invoice PDF
              </button>
              <Link 
                href="/contact"
                className="flex items-center justify-center gap-2 h-12 px-6 bg-white border border-gray-200 text-[#171a20] rounded-[4px] text-sm font-bold uppercase tracking-wide hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-4 h-4" /> Contact Support
              </Link>
            </div>
          </div>

          {/* Tracking Block Placeholder */}
          <div className="border-t border-gray-100 pt-8 text-left">
             <div className="flex items-start gap-4 opacity-50">
               <div className="p-3 bg-gray-100 rounded-full">
                 <Package className="w-6 h-6 text-gray-400" />
               </div>
               <div>
                 <h4 className="font-bold text-[#171a20]">Tracking Information</h4>
                 <p className="text-sm text-gray-500">Tracking details will appear here once your order is dispatched.</p>
               </div>
             </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link href="/" className="text-xs font-bold uppercase tracking-wide text-gray-400 hover:text-[#171a20] transition-colors">
            Return to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
