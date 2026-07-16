"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#lumi", label: "Meet Lumi" },
  { href: "#showcase", label: "App" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
        style={{ height: "var(--nav-height, 72px)" }}
      >
        <div className="section-max h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Lumisync home">
            <Logo size={34} variant="full" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[--text-secondary] hover:text-[--text-primary] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#join"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl lumi-gradient text-white shadow-lg shadow-indigo-500/25 hover:opacity-90 transition-all active:scale-95"
              id="nav-cta"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-black/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            id="mobile-menu-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <nav className="absolute top-[72px] left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-[--text-primary] py-2 border-b border-[--border] last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-2 text-center text-sm font-semibold px-5 py-3 rounded-xl lumi-gradient text-white"
            >
              Get Early Access
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
