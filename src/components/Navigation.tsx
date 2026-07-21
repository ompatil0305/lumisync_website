"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sparkles, Map, Compass, Calendar, Users, Building, Shield, FileText, HelpCircle, Mail, BookOpen, Clock, Briefcase, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navGroups = [
  {
    label: "Product",
    items: [
      { href: "/features", label: "Features", desc: "Explore the campus companion suite", icon: Compass },
      { href: "/map", label: "Campus Map", desc: "Interactive indoor/outdoor finder", icon: Map },
      { href: "/lumi", label: "Lumi AI", desc: "Campus assistant powered by Gemini", icon: Sparkles },
      { href: "/roadmap", label: "Roadmap", desc: "See what features are coming next", icon: Clock },
    ],
  },
  {
    label: "For",
    items: [
      { href: "/students", label: "Students", desc: "Supercharge your daily campus life", icon: GraduationCap },
      { href: "/faculty-staff", label: "Faculty & Staff", desc: "Help students locate your office", icon: Users },
      { href: "/universities", label: "Universities", desc: "Provider architecture onboarding", icon: Building },
      { href: "/enterprise", label: "Enterprise", desc: "Scale to thousands of students", icon: Building },
    ],
  },
  {
    label: "Company",
    items: [
      { href: "/about", label: "About Us", desc: "Why we are building Lumisync", icon: Users },
      { href: "/blog", label: "Blog", desc: "Product news and campus technology", icon: BookOpen },
      { href: "/careers", label: "Careers", desc: "Join our student-first team", icon: Briefcase },
      { href: "/press", label: "Press", desc: "Media kit and brand assets", icon: FileText },
    ],
  },
  {
    label: "Resources",
    items: [
      { href: "/docs", label: "Docs", desc: "API integrations and setup guides", icon: FileText },
      { href: "/faq", label: "FAQ", desc: "Common questions answered", icon: HelpCircle },
      { href: "/contact", label: "Contact", desc: "Send us a message directly", icon: Mail },
      { href: "/security", label: "Security", desc: "Privacy-first & FERPA-aware", icon: Shield },
    ],
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
          scrolled ? "nav-scrolled" : "bg-transparent"
        }`}
        style={{ height: "var(--nav-height, 68px)" }}
      >
        <div className="section-max h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Lumisync home" className="flex items-center">
            <Logo size={32} variant="full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main navigation">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium rounded-full transition-colors ${
                    activeDropdown === group.label
                      ? "bg-stone-200/50 dark:bg-[var(--surface-3)]/50 text-[var(--text-primary)] dark:text-stone-50"
                      : "text-[var(--text-secondary)] dark:text-[var(--text-muted)] hover:text-[var(--text-primary)] dark:hover:text-stone-50"
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === group.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === group.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-80 bg-white dark:bg-[var(--surface-3)] border border-[var(--border)] dark:border-[var(--border)] rounded-2xl shadow-xl p-3 grid gap-1.5 animate-scale-in">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-stone-100/70 dark:hover:bg-[var(--surface-3)]/70 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-[var(--surface-2)] text-[var(--text-secondary)] dark:text-[var(--text-muted)] group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-[var(--text-primary)] dark:text-stone-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.label}
                            </div>
                            <div className="text-[11px] text-[var(--text-muted)] dark:text-[var(--text-muted)] mt-0.5 leading-normal">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/join"
              className="btn btn-primary btn-sm rounded-full text-[13px]"
              id="nav-cta"
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-stone-100 dark:hover:bg-[var(--surface-3)] text-[var(--text-secondary)] dark:text-[var(--text-muted)] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            id="mobile-menu-toggle"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background"
          >
            <div className="flex flex-col h-full pt-[68px] overflow-y-auto px-6 pb-8">
              <div className="grid gap-6 mt-6">
                {navGroups.map((group) => (
                  <div key={group.label} className="grid gap-2.5">
                    <div className="text-[11px] font-bold text-[var(--text-muted)] dark:text-[var(--text-muted)] uppercase tracking-widest px-2">
                      {group.label}
                    </div>
                    <div className="grid gap-1">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 py-2.5 px-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-[var(--surface-3)] text-[14px] font-medium text-[var(--text-secondary)] dark:text-[var(--text-muted)]"
                          >
                            <Icon size={16} className="text-[var(--text-muted)]" />
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-[var(--border)] dark:border-[var(--border)] grid gap-3">
                <Link
                  href="/join"
                  className="btn btn-primary w-full text-center py-3 rounded-full"
                >
                  Get Early Access
                </Link>
                <a
                  href="https://lumisync.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full text-center py-3 rounded-full"
                >
                  Open Application
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
