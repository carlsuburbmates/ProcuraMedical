export default function AboutPage() {
  return (
    <div className="bg-[#F2F3F1] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-medium text-[#171a20] mb-6 tracking-tight">
          About Procura
        </h1>
        <p className="text-lg text-[#393c41] leading-relaxed mb-10">
          Procura Medical is a storefront-first procurement platform designed to make it easier
          to identify suitable equipment, validate fit considerations, and proceed through a
          clear purchase flow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#171a20] mb-3">Systems, not shelves</h2>
            <p className="text-sm text-[#393c41] leading-relaxed">
              We organise products by function and use-case so decisions stay clear.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#171a20] mb-3">Built for accountability</h2>
            <p className="text-sm text-[#393c41] leading-relaxed">
              Funding and invoice logic stays inside the checkout container, not across the
              browsing experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
