import Link from "next/link";
import Logo from "./Logo";
import { SITE_FOUNDING_YEAR } from "@/config/site";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Campus Map", href: "/map" },
  { label: "Lumi AI", href: "/lumi" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Press Kit", href: "/press" },
  { label: "Contact Us", href: "/contact" },
];

const forLinks = [
  { label: "Students", href: "/students" },
  { label: "Faculty & Staff", href: "/faculty-staff" },
  { label: "Universities", href: "/universities" },
  { label: "Enterprise", href: "/enterprise" },
];

const resourceLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "FAQ", href: "/faq" },
  { label: "Security & Trust", href: "/security" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--surface-3)] text-[var(--text-muted)] border-t border-[var(--border)] pt-20 pb-12">
      <div className="section-max">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Logo size={28} variant="full" className="text-[var(--text-inverse)] fill-white" />
            </Link>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[280px]">
              Lumisync is the AI-powered operating system for university campuses, unifying scattered resources into one elegant interface.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/ompatil0305/lumisync"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-[var(--surface-3)] hover:bg-[var(--surface-3)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-inverse)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4">Product</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] hover:text-[var(--text-inverse)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Audience Links */}
          <div>
            <h3 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4">For</h3>
            <ul className="space-y-2.5">
              {forLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] hover:text-[var(--text-inverse)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {resourceLinks.concat(companyLinks.slice(3)).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] hover:text-[var(--text-inverse)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[var(--border)] text-xs text-[var(--text-muted)]">
          <p>© {SITE_FOUNDING_YEAR} Lumisync. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-[var(--text-muted)]">About</Link>
            <Link href="/contact" className="hover:text-[var(--text-muted)]">Contact</Link>
            <Link href="/privacy" className="hover:text-[var(--text-muted)]">Privacy</Link>
          </div>
          <p className="flex items-center gap-1">
            Built with ✦ for universities worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
