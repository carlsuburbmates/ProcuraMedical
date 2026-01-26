"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "glass-header py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50">
          <span className="text-xl font-medium tracking-tight text-black">
            Procura Medical
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Systems Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-[13px] font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">
              Systems
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-black/5 p-4 min-w-[200px] shadow-lg flex flex-col gap-2">
                <Link
                  href="/systems/hygiene"
                  className="text-[13px] text-muted hover:text-black transition-colors"
                >
                  Hygiene
                </Link>
                <Link
                  href="/systems/mobility"
                  className="text-[13px] text-muted hover:text-black transition-colors"
                >
                  Mobility
                </Link>
                <Link
                  href="/systems/rehab"
                  className="text-[13px] text-muted hover:text-black transition-colors"
                >
                  Rehab
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/guidance"
            className="text-[13px] font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
          >
            Guidance
          </Link>
          <Link
            href="/how-it-works"
            className="text-[13px] font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
          >
            How it works
          </Link>
          <Link
            href="/contact"
            className="text-[13px] font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
          >
            Support
          </Link>

          <button className="text-black hover:opacity-70 transition-opacity">
            <Search className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-black" />
          ) : (
            <Menu className="w-5 h-5 text-black" />
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-6">
               <div className="flex flex-col gap-4 border-l border-black/10 pl-4">
                  <span className="text-[11px] text-muted uppercase tracking-widest font-semibold">Systems</span>
                  <Link href="/systems/hygiene" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Hygiene</Link>
                  <Link href="/systems/mobility" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Mobility</Link>
                  <Link href="/systems/rehab" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Rehab</Link>
               </div>
               <Link href="/guidance" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Guidance</Link>
               <Link href="/how-it-works" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>How it works</Link>
               <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
