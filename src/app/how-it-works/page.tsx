import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="bg-[#F2F3F1] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-medium text-[#171a20] mb-6 tracking-tight">
          How Procurement Works
        </h1>
        <p className="text-lg text-[#393c41] leading-relaxed mb-10">
          This prototype is built around a single-item purchase flow. Browsing stays clean;
          funding logic happens only in checkout.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Browse systems",
              desc: "Start with a functional system and narrow to a shortlist.",
            },
            {
              title: "Review suitability",
              desc: "On each product page, check specifications and fit guardrails.",
            },
            {
              title: "Proceed to purchase",
              desc: "Checkout collects delivery and funding details and generates the correct next step.",
            },
          ].map((step, i) => (
            <div key={step.title} className="bg-white rounded-lg p-8 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-[#393c41] mb-3">
                Step {i + 1}
              </div>
              <h2 className="text-xl font-semibold text-[#171a20] mb-2">{step.title}</h2>
              <p className="text-sm text-[#393c41] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <Link href="/systems" className="btn-primary">View Systems</Link>
          <Link href="/guidance" className="btn-secondary">Read Guidance</Link>
        </div>
      </div>
    </div>
  );
}
