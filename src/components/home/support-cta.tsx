import Link from "next/link";

export function SupportCTA() {
  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6">
          Procurement shouldn't be a guess.
        </h2>
        <p className="text-lg text-zinc-500 mb-10 leading-relaxed">
          Our team includes clinical specialists who can verify NDIS compliance and product suitability before you buy.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/contact" 
            className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800"
          >
            Contact Support
          </Link>
          <Link 
            href="/faq" 
            className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-8 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
          >
            Read FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
