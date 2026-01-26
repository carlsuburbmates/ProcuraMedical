export default function FAQPage() {
  return (
    <div className="container-wide py-12 md:py-24 max-w-[800px] mx-auto">
      <h1 className="h1 mb-12">Frequently Asked Questions</h1>
      
      <div className="space-y-12">
        <FAQItem 
          question="How do I pay with NDIS funding?" 
          answer="Select 'Plan Managed' at the funding step. We will generate a compliant tax invoice and email it to you and your Plan Manager. The order is processed once payment is received."
        />
        <FAQItem 
          question="Can I pay by card?" 
          answer="Yes. For self-managed participants or private purchases, credit card payment is available. This is the fastest way to dispatch."
        />
        <FAQItem 
          question="Is shipping included?" 
          answer="Shipping costs are calculated at the confirmation stage based on the volumetric weight of the equipment and your delivery location."
        />
        <FAQItem 
          question="Do you support NDIA Managed participants?" 
          answer="Not at this time. We support Plan Managed and Self Managed participants only."
        />
        <FAQItem 
          question="What happens if the item doesn't fit?" 
          answer="Please check all specifications carefully before ordering. Due to hygiene reasons, we cannot accept returns for bathroom aids that have been unboxed. Refer to our Returns Policy for full details."
        />
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-black/5 pb-8 last:border-0">
      <h3 className="text-[15px] font-medium text-black mb-2">{question}</h3>
      <p className="text-sm text-muted leading-relaxed max-w-2xl">{answer}</p>
    </div>
  );
}
