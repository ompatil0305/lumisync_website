import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CreditCard, Check, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Lumisync is free for students. Learn about our future plans for university partnerships.",
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 bg-[--background]">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 text-center border-b border-[--border]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(29,78,216,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="section-max px-6 flex flex-col items-center">
            <span className="section-label mb-4">Pricing</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance animate-fade-in">
              Simple, transparent pricing.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Lumisync is free and live for students. Sustainable institutional partnerships for universities are coming soon.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-py">
          <div className="section-max px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Free Tier */}
              <div className="card p-8 flex flex-col justify-between min-h-[400px]">
                <div>
                  <span className="text-xs font-bold text-red-600 dark:text-red-500 uppercase tracking-widest block mb-2">For Students</span>
                  <h3 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mb-1">Student Access</h3>
                  <div className="flex items-baseline gap-1 mt-4 mb-6">
                    <span className="text-4xl font-bold font-display text-stone-900 dark:text-stone-50">$0</span>
                    <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider">forever</span>
                  </div>
                  <p className="text-sm text-[--text-secondary] leading-relaxed mb-6">
                    Get full access to the Lumisync web client, mapping, dining lists, events feeds, parking lot views, and the Lumi conversational AI helper.
                  </p>
                </div>

                <div className="border-t border-[--border] pt-6 flex flex-col gap-4">
                  <div className="flex gap-2.5 items-center text-xs text-[--text-secondary]">
                    <Check className="text-green-600 w-4 h-4 flex-shrink-0" />
                    Complete mapping & search modules
                  </div>
                  <div className="flex gap-2.5 items-center text-xs text-[--text-secondary]">
                    <Check className="text-green-600 w-4 h-4 flex-shrink-0" />
                    Lumi AI Assistant access
                  </div>
                  <div className="flex gap-2.5 items-center text-xs text-[--text-secondary]">
                    <Check className="text-green-600 w-4 h-4 flex-shrink-0" />
                    Dining hours & menus finder
                  </div>
                  <Link href="/join" className="btn btn-secondary w-full text-center mt-4 rounded-full">
                    Create Free Account
                  </Link>
                </div>
              </div>

              {/* University Tier */}
              <div className="card p-8 flex flex-col justify-between min-h-[400px] border-2 border-red-600 dark:border-red-500 relative">
                <span className="absolute -top-3.5 left-6 bg-red-600 dark:bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles size={10} />
                  Coming Soon
                </span>

                <div>
                  <span className="text-xs font-bold text-red-600 dark:text-red-500 uppercase tracking-widest block mb-2">For Administrators</span>
                  <h3 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mb-1">University Partner</h3>
                  <div className="flex items-baseline gap-1 mt-4 mb-6">
                    <span className="text-3xl font-bold font-display text-stone-900 dark:text-stone-50">Custom Quote</span>
                  </div>
                  <p className="text-sm text-[--text-secondary] leading-relaxed mb-6">
                    Deploy a custom branding layer for your campus. Includes SSO integrations, secure private databases mapping, departmental dashboards, and operations analytics.
                  </p>
                </div>

                <div className="border-t border-[--border] pt-6 flex flex-col gap-4">
                  <div className="flex gap-2.5 items-center text-xs text-[--text-secondary]">
                    <Check className="text-red-600 dark:text-red-500 w-4 h-4 flex-shrink-0" />
                    Custom subdomain & branding layer
                  </div>
                  <div className="flex gap-2.5 items-center text-xs text-[--text-secondary]">
                    <Check className="text-red-600 dark:text-red-500 w-4 h-4 flex-shrink-0" />
                    Banner / Ellucian HR integrations
                  </div>
                  <div className="flex gap-2.5 items-center text-xs text-[--text-secondary]">
                    <Check className="text-red-600 dark:text-red-500 w-4 h-4 flex-shrink-0" />
                    SSO Auth (SAML 2.0 / OpenID Connect)
                  </div>
                  <Link href="/contact?role=it" className="btn btn-primary w-full text-center mt-4 rounded-full">
                    Request Onboarding Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
