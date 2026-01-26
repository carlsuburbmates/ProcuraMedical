export default function ReturnsPage() {
  return (
    <div className="container-wide py-12 md:py-24 max-w-[800px] mx-auto">
      <h1 className="h1 mb-8">Returns & Refunds</h1>
      
      <div className="prose prose-neutral max-w-none space-y-8 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Consumer Guarantees</h2>
          <p>
            Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. 
            You are entitled to a replacement or refund for a major failure and compensation for any other 
            reasonably foreseeable loss or damage. You are also entitled to have the goods repaired or 
            replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Change of Mind</h2>
          <p>
            Due to the hygiene and clinical nature of our products, we typically do not offer refunds for change of mind 
            once an item has been dispatched or used. Ensure you have engaged with the Guidance Hub or a clinician 
            to verify fit and suitability before purchase.
          </p>
        </section>

        <section>
          <h2 className="text-black font-medium mb-3 uppercase tracking-wide text-xs">Return Process</h2>
          <p>
            To initiate a return for a defective item:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Contact Support with your order number and photo evidence of the fault.</li>
            <li>Wait for a Return Authorization (RA) number.</li>
            <li>Ship the item back using the provided instructions.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
