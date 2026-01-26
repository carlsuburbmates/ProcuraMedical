export default function ShippingPage() {
  return (
    <div className="container-wide py-12 md:py-24 max-w-[800px] mx-auto">
      <h1 className="h1 mb-8">Shipping Policy</h1>
      
      <div className="prose prose-neutral max-w-none space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Dispatch Standards</h2>
          <p>
            Orders are dispatched only after payment is confirmed or a valid plan-managed invoice is approved. 
            Standard dispatch time is 2-5 business days for in-stock items. Lead times for specific configuratons 
            are noted on the product page.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Delivery Methods</h2>
          <p>
            We utilize specialized freight partners for bulky rehabilitation equipment. 
            Tailgate delivery is standard for residential addresses. Setup and installation 
            are not included unless explicitly specified in the order confirmation.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Damages & Transit Insurance</h2>
          <p>
            All shipments are insured for transit damage. You must inspect the package upon arrival. 
            Report any visible damage to the courier immediately and contact Procura Medical support 
            within 24 hours of receipt.
          </p>
        </section>

        <section>
           <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Blind Shipping</h2>
           <p>
             All orders are shipped with neutral packaging documentation. Procura Medical acts as the primary 
             vendor of record for all NDIS documentation purposes.
           </p>
        </section>
      </div>
    </div>
  );
}
