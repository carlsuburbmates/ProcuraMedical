import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-lg font-bold tracking-tight">Procura Medical</span>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium procurement platform for NDIS participants. 
              Simplifying access to world-class healthcare systems.
            </p>
          </div>

          {/* Systems */}
          <div>
            <h4 className="font-medium mb-6">Systems</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/systems/mobility" className="hover:text-primary transition-colors">Mobility</Link></li>
              <li><Link href="/systems/hygiene" className="hover:text-primary transition-colors">Hygiene</Link></li>
              <li><Link href="/systems/rehab" className="hover:text-primary transition-colors">Rehab Tech</Link></li>
              <li><Link href="/systems" className="hover:text-primary transition-colors">View All</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="/track-order" className="hover:text-primary transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-6">Policies</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-primary transition-colors">Returns & Faults</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Procura Medical. All rights reserved.</p>
          <p>ABN: XX XXX XXX XXX</p>
        </div>
      </div>
    </footer>
  );
}
