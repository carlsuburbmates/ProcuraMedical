"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When transparent (on home, top), use mix-blend-difference for readability
  // against ANY background lightness.
  const isTransparent = isHome && !isScrolled && !isMobileOpen;

  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
          isTransparent 
            ? "bg-transparent border-transparent py-6" 
            : "bg-white/95 backdrop-blur-md border-[#E5E5E5] py-4 shadow-sm"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          
          {/* Brand */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <div className={cn(
              "w-10 h-10 flex items-center justify-center font-black text-xl rounded-full transition-all duration-500",
              isTransparent ? "bg-white text-black" : "bg-black text-white"
            )}>
              P
            </div>
            <span className={cn(
              "text-xs font-bold tracking-[0.25em] uppercase transition-all duration-500",
              isTransparent ? "text-white" : "text-[#050505]"
            )}>
              Procura
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {[
              { label: "Mobility", href: "/systems/mobility" },
              { label: "Hygiene", href: "/systems/hygiene" },
              { label: "Rehab", href: "/systems/rehab" },
              { label: "Guidance", href: "/guidance" },
            ].map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className={cn(
                  "text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-70",
                  isTransparent ? "text-white" : "text-[#050505]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link 
              href="/contact" 
              className={cn(
                "hidden md:flex text-[11px] font-bold uppercase tracking-widest border rounded-full px-6 py-2.5 transition-all hover:scale-105",
                isTransparent 
                  ? "border-white/40 text-white hover:bg-white hover:text-black" 
                  : "border-black/10 text-[#050505] hover:bg-black hover:text-white"
              )}
            >
              Support
            </Link>
            
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                "md:hidden p-2 transition-colors relative z-50",
                isTransparent && !isMobileOpen ? "text-white" : "text-[#050505]"
              )}
            >
              {isMobileOpen ? <X className="w-6 h-6 text-[#050505]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Robust Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-[#F4F5F4] z-40 flex flex-col justify-center px-8 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
          isMobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="flex flex-col gap-8 max-w-md mx-auto w-full">
          {[
            { label: "Mobility Systems", href: "/systems/mobility" },
            { label: "Hygiene Essentials", href: "/systems/hygiene" },
            { label: "Rehabilitation", href: "/systems/rehab" },
            { label: "Guidance Hub", href: "/guidance" },
          ].map((link, i) => (
            <Link 
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-3xl font-light text-black border-b border-gray-200 pb-4 flex justify-between items-center group"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
              <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          ))}
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Link 
              href="/contact" 
              onClick={() => setIsMobileOpen(false)}
              className="btn-primary w-full"
            >
              Contact Support
            </Link>
            <Link 
              href="/login" 
              onClick={() => setIsMobileOpen(false)}
              className="btn-secondary w-full"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
