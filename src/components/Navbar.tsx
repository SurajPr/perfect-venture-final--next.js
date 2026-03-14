"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/sales", label: "Sales" },
    { href: "/hiring", label: "Hiring" },
    { href: "/#story", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090f]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#7C3AED] rounded-lg flex items-center justify-center shadow-lg shadow-[#7C3AED]/40">
              <span className="text-white font-heading font-extrabold text-xs tracking-wide">PV</span>
            </div>
            <span className="font-heading font-extrabold text-lg text-white tracking-tight">
              Perfect Ventures
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="bg-[#7C3AED] hover:bg-[#8B5CF6] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-[#7C3AED]/30 transition-all"
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111118] border-t border-white/[0.06] px-4 pb-5 pt-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-semibold text-white/60 hover:text-white border-b border-white/[0.04] last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="block mt-4 bg-[#7C3AED] text-white text-sm font-bold px-5 py-3 rounded-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Talk to Us
          </Link>
        </div>
      )}
    </nav>
  );
}
