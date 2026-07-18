import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building, ShieldCheck, Database, BarChart3, Users, Zap, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Solutions",
  description: "Secure, scalable, and dynamic digital campus platform for universities, student affairs, and operations.",
};

const benefits = [
  {
    icon: Landmark,
    title: "Institutional Value",
    desc: "Unify fragmented student experiences, boost event attendance, and help students find resources without wasting time on 20+ disconnected systems.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "Designed to meet FERPA requirements. Integrates with existing university single sign-on (SSO) systems (SAML 2.0, OAuth 2.0).",
  },
  {
    icon: Database,
    title: "Onboarding & Providers",
    desc: "Flexible data providers parse dining feeds, schedules, maps, and events from existing CSV exports, REST APIs, or database mirrors.",
  },
  {
    icon: BarChart3,
    title: "Campus Operations Analytics",
    desc: "Coming soon: aggregate analytics on dining peaks, parking utilization, event engagement, and student search behavior.",
  },
];

export default function EnterprisePage() {
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
            <span className="section-label mb-4">Enterprise</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              The AI digital campus platform.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Scale to thousands of students, unify campus operations, and reduce IT overhead with one robust system.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-py border-b border-[--border]">
          <div className="section-max px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="card p-8 flex gap-6 items-start">
                    <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-blue-600 flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 font-display text-stone-900 dark:text-stone-50">{b.title}</h3>
                      <p className="text-sm text-[--text-secondary] leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deep Dive IT & Integration */}
        <section className="section-py">
          <div className="section-max px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">For IT & Security Teams</span>
                <h3 className="text-3xl font-bold mb-5 font-display text-stone-900 dark:text-stone-50">
                  Integration Roadmap & SSO
                </h3>
                <p className="text-sm text-[--text-secondary] leading-relaxed mb-4">
                  We understand that campus technology stacks are complex. Lumisync's provider architecture is built to ingest data from existing systems without forcing you to re-platform.
                </p>
                <p className="text-sm text-[--text-secondary] leading-relaxed">
                  We are building native integrations with Banner, Ellucian, Workday HR, and modern LMS software. Standard SAML 2.0 and OpenID Connect single sign-on authentication allows students to log in with their university accounts securely.
                </p>
              </div>

              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-3xl border border-[--border] flex flex-col gap-4">
                <h4 className="font-bold text-lg font-display text-stone-900 dark:text-stone-50">Enterprise Features</h4>
                {[
                  "Multi-campus support architecture",
                  "Single Sign-On (SAML/OAuth) - Coming Soon",
                  "Dedicated hosting options (AWS/Vercel)",
                  "FERPA compliance and data privacy protection",
                  "Integrations with Banner, Ellucian, Workday - Coming Soon",
                  "Custom database / API data provider mapping",
                ].map((item, index) => (
                  <div key={index} className="flex gap-2.5 items-start text-xs text-[--text-secondary]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact sales CTA */}
        <section className="bg-stone-100 dark:bg-stone-900 py-16 border-t border-[--border]">
          <div className="section-max px-6 text-center">
            <h3 className="text-2xl font-bold mb-4 font-display">Start your integration</h3>
            <p className="text-stone-600 dark:text-stone-400 max-w-md mx-auto mb-6 text-sm">
              Speak with our onboarding team to discuss pricing, custom features, data integrations, and campus security.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact?role=administrator" className="btn btn-primary rounded-full px-8">
                Contact Partnerships
              </Link>
              <Link href="/security" className="btn btn-secondary rounded-full px-8">
                Security Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
