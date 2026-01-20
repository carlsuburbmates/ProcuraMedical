export default function FaqPage() {
  return (
    <div className="bg-[#F2F3F1] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-medium text-[#171a20] mb-6 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-[#393c41] leading-relaxed mb-10">
          Clear answers for the most common procurement questions.
        </p>

        <div className="space-y-4">
          {[
            {
              q: "Do you support carts or multi-item orders?",
              a: "No. This prototype enforces single-item purchase to keep compliance and funding logic deterministic.",
            },
            {
              q: "Where does invoice generation happen?",
              a: "Only inside checkout (the /buy/[slug] flow). Browsing and product pages avoid invoice language.",
            },
            {
              q: "Is NDIA-managed supported?",
              a: "No. The funding step includes a hard gate: NDIA-managed is disabled by design.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-[#171a20] mb-3">{item.q}</h2>
              <p className="text-sm text-[#393c41] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
