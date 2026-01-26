import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-black/5 py-16 mt-auto">
      <div className="container-wide grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="text-lg font-medium tracking-tight text-black">
            Procura Medical
          </span>
          <p className="text-[13px] leading-relaxed max-w-xs">
            Advanced infrastructure for hygiene, mobility, and rehabilitation. 
            Procurement-ready for NDIS participants.
          </p>
        </div>

        {/* Systems */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] uppercase tracking-widest font-semibold text-black mb-1">Systems</h4>
          <Link href="/systems/hygiene" className="text-[13px] text-muted hover:text-black transition-colors">Hygiene</Link>
          <Link href="/systems/mobility" className="text-[13px] text-muted hover:text-black transition-colors">Mobility</Link>
          <Link href="/systems/rehab" className="text-[13px] text-muted hover:text-black transition-colors">Rehab</Link>
        </div>

        {/* Support & Company */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] uppercase tracking-widest font-semibold text-black mb-1">Company</h4>
          <Link href="/about" className="text-[13px] text-muted hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="text-[13px] text-muted hover:text-black transition-colors">Support</Link>
          <Link href="/how-it-works" className="text-[13px] text-muted hover:text-black transition-colors">How it works</Link>
          <Link href="/faq" className="text-[13px] text-muted hover:text-black transition-colors">FAQ</Link>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] uppercase tracking-widest font-semibold text-black mb-1">Legal</h4>
          <Link href="/shipping" className="text-[13px] text-muted hover:text-black transition-colors">Shipping</Link>
          <Link href="/returns" className="text-[13px] text-muted hover:text-black transition-colors">Returns</Link>
          <Link href="/privacy" className="text-[13px] text-muted hover:text-black transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-[13px] text-muted hover:text-black transition-colors">Terms of Service</Link>
        </div>
      </div>

      <div className="container-wide mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-[11px] text-muted">
          © {currentYear} Procura Medical. All rights reserved. ABN [PENDING].
        </p>
        <p className="text-[11px] text-muted">
          Australian Owned & Operated.
        </p>
      </div>
    </footer>
  );
}
