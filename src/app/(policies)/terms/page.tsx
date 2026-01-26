export default function TermsPage() {
  return (
    <div className="container-wide py-12 md:py-24 max-w-[800px] mx-auto">
      <h1 className="h1 mb-8">Terms of Service</h1>
      
      <div className="prose prose-neutral max-w-none space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Agreement</h2>
          <p>
            By using Procura Medical, you agree to these Terms. We provide a platform for procuring 
            assistive technology. We act as the vendor of record.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">No Clinical Advice</h2>
          <p>
            Procura Medical provides infrastructure and specifications, not clinical advice. 
            You must ensure that any product purchased is suitable for the user&apos;s condition. 
            Consult an Occupational Therapist or appropriate clinician prior to purchase if unsure.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Pricing & NDIS</h2>
          <p>
            Prices are set to comply with NDIS price limits where applicable. 
            We reserve the right to cancel orders if typographic errors result in incorrect pricing 
            or if stock is unavailable.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Jurisdiction</h2>
          <p>
            These terms are governed by the laws of Victoria, Australia.
          </p>
        </section>
      </div>
    </div>
  );
}
