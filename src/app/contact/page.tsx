import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container-wide py-12 md:py-24 max-w-[800px] mx-auto">
      <h1 className="h1 mb-2">Support</h1>
      <p className="text-lg text-black font-medium mb-12">
        Operational support for orders, invoices, and returns.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-8 border border-black/5 bg-white">
          <Mail className="w-6 h-6 text-black mb-6" />
          <h2 className="text-[13px] font-medium uppercase tracking-wide mb-2 text-black">General Enquiries</h2>
          <p className="text-sm text-muted mb-6">
            For assistance with product specifications, order status, or invoice modifications.
          </p>
          <a href="mailto:support@procuramedical.com" className="text-sm font-medium border-b border-black text-black hover:opacity-70 transition-opacity pb-0.5">
            support@procuramedical.com
          </a>
        </div>

        <div className="p-8 border border-black/5 bg-white">
          <div className="mb-6 h-6 w-6 flex items-center justify-center border border-black rounded-full">
            <span className="text-xs font-bold">i</span>
          </div>
          <h2 className="text-[13px] font-medium uppercase tracking-wide mb-2 text-black">Clinical Disclaimer</h2>
          <p className="text-sm text-muted">
            Procura Medical support staff cannot provide clinical advice or functional assessments. 
            please consult your Occupational Therapist for participant-specific suitability questions.
          </p>
        </div>
      </div>
    </div>
  );
}
