export default function AboutPage() {
  return (
    <div className="container-wide py-12 md:py-24 max-w-[800px] mx-auto">
      <h1 className="h1 mb-2">About Procura Medical</h1>
      <p className="text-lg text-black font-medium mb-12">
        Advanced infrastructure for safe, compliant care environments.
      </p>
      
      <div className="space-y-12 text-[15px] leading-relaxed text-muted">
        <section>
          <p>
            Procura Medical simplifies the procurement of complex assistive technology. 
            We bridge the gap between clinical specification and efficient supply, ensuring 
            that NDIS participants and healthcare providers can access required infrastructure 
            without administrative friction.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-4 uppercase tracking-wide text-xs">Our Function</h2>
          <p>
            We operate as a specialized procurement platform. We vet suppliers for compliance, 
            quality, and stock reliability. We provide a single interface for managing funding 
            approval, documentation, and logistics, removing the complexity of multi-vendor management.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-4 uppercase tracking-wide text-xs">Guided by Standards</h2>
          <p>
            Our catalogue is curated based on technical specification, safety load ratings, and 
            regulatory compliance. We prioritize equipment that meets Australian Standards and 
            demonstrates long-term durability in daily care settings.
          </p>
        </section>
      </div>
    </div>
  );
}
