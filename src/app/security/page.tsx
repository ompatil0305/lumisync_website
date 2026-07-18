import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Trust",
  description: "Learn about Lumisync's security practices, FERPA awareness, data handling, and privacy-first architecture.",
};

export default function SecurityPage() {
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
            <span className="section-label mb-4">Trust Center</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Security & Privacy at Lumisync.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              We design our digital campus operating system with privacy as a first-class citizen. Here is how we safeguard student and university data.
            </p>
          </div>
        </section>

        {/* Security Pillars */}
        <section className="section-py border-b border-[--border]">
          <div className="section-max px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Privacy-First Design",
                  desc: "We do not store student IDs or require invasive personal profiles. Campus data is cached locally or queried on the fly.",
                },
                {
                  icon: Lock,
                  title: "Single Sign-On (SSO)",
                  desc: "SSO support (SAML 2.0 / OpenID Connect) is currently in development. Students log in directly through their university credentials; Lumisync never sees passwords.",
                },
                {
                  icon: Eye,
                  title: "AI Transparency",
                  desc: "Lumi AI queries are anonymized before being sent to the Gemini API. We do not store conversation logs permanently, nor do we sell student dialog data.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card p-8 flex flex-col gap-5">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 text-blue-600 flex items-center justify-center border border-stone-200/20 flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-lg font-display text-stone-900 dark:text-stone-50">{item.title}</h3>
                    <p className="text-sm text-[--text-secondary] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deep Dive FERPA & SSO */}
        <section className="section-py">
          <div className="section-max px-6 max-w-3xl">
            <div className="prose mx-auto">
              <h2 className="text-3xl font-bold font-display text-stone-900 dark:text-stone-50 mb-6">Compliance & FERPA</h2>
              <p className="text-sm leading-relaxed mb-6">
                The Family Educational Rights and Privacy Act (FERPA) protects the privacy of student education records. Lumisync is built specifically to operate without needing access to student grades, transcripts, or financial details.
              </p>
              
              <div className="flex gap-4 p-5 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-[--border] mb-8">
                <AlertCircle className="text-blue-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm font-display text-stone-900 dark:text-stone-50 mb-1">FERPA Awareness Statement</h4>
                  <p className="text-xs text-[--text-secondary] leading-relaxed">
                    Lumisync only displays public campus directories, menu listings, parking guidelines, and calendar schedules. We do not store or process personally identifiable educational records (PII).
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mt-10 mb-4">SSO Authentication</h2>
              <p className="text-sm leading-relaxed mb-4">
                To support secure features such as saving dining favorites, joining student club chats, or applying to on-campus jobs, Lumisync utilizes university Identity Providers (IdP).
              </p>
              <p className="text-sm leading-relaxed mb-6">
                Authentication flows follow standard OAuth 2.0 and SAML protocols, allowing universities to keep full control over user credentials, password policies, and multi-factor authentication (MFA).
              </p>

              <h2 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mt-10 mb-4">Responsible AI & Gemini</h2>
              <p className="text-sm leading-relaxed mb-6">
                Lumi AI leverages state-of-the-art models via Google Gemini APIs. Our data pipelines use structured schemas to feed correct local context (like dining hours or maps) to the model. We strictly follow Google's Responsible AI guidelines and verify search responses before presenting them to students.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
