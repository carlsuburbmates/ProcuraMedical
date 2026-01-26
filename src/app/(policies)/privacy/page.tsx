export default function PrivacyPage() {
  return (
    <div className="container-wide py-12 md:py-24 max-w-[800px] mx-auto">
      <h1 className="h1 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-neutral max-w-none space-y-8 text-sm leading-relaxed text-muted">
        <p>Last Updated: October 2025</p>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Data Collection</h2>
          <p>
            We collect personal information necessary for order fulfilment and NDIS compliance. 
            This includes participant details (Name, NDIS Number), delivery addresses, and plan manager contacts. 
            We do not sell this data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">NDIS Data Handling</h2>
          <p>
            Information related to NDIS participants is handled with strict confidentiality. 
            It is shared only with registered Plan Managers for invoice processing and with 
            logistics partners for delivery purposes (shipping address only).
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Security</h2>
          <p>
            We employ industry-standard encryption for data storage and transmission. 
            Payment processing is handled by secure third-party gateways (Stripe); we do not 
            store credit card information on our servers.
          </p>
        </section>
      </div>
    </div>
  );
}
