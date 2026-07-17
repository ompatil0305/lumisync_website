"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqGroups = [
  {
    title: "General Questions",
    items: [
      {
        q: "What is Lumisync?",
        a: "Lumisync is an AI-powered Digital Campus Operating System. We unify scattered college data streams—dining hours, menus, parking lots coordinates, events directories, and faculty offices—into a single seamless client dashboard and conversational assistant.",
      },
      {
        q: "Is Lumisync free for students?",
        a: "Yes. All core student features, including mapping, dining status, events calendars, and the Lumi AI conversational assistant, will always be 100% free with no ads or user tracking.",
      },
      {
        q: "Which universities are currently supported?",
        a: "Lumisync is currently running in an early access phase supporting Texas Tech University (TTU). We are building local providers to roll out support at UT Austin, Texas A&M, ASU, and the University of Florida in upcoming releases.",
      },
      {
        q: "Who built Lumisync?",
        a: "Lumisync was founded by Om Patil, a Texas Tech student, who got tired of cross-checking multiple outdated administrative sites to find simple details like meal periods and classroom locations.",
      },
    ],
  },
  {
    title: "Lumi AI Assistant",
    items: [
      {
        q: "What is Lumi AI?",
        a: "Lumi is the conversational campus assistant integrated directly into Lumisync. Powered by Google Gemini and structured university database contexts, Lumi answers campus questions in natural language.",
      },
      {
        q: "What kind of questions can I ask Lumi?",
        a: "You can ask natural language questions like: 'What dining halls are open right now?', 'Where is Dr. Smith's office?', 'Where can I park with a commuter permit?', or 'What events are happening this Friday?'",
      },
      {
        q: "How accurate is Lumi's information?",
        a: "Highly accurate. Unlike generic AI search engines that crawl the public web, Lumi pulls context details straight from our verified local database providers—dining databases, campus mapping coordinate sets, and academic records feeds.",
      },
    ],
  },
  {
    title: "Privacy & Compliance",
    items: [
      {
        q: "What student data does Lumisync collect?",
        a: "Lumisync is designed with privacy as a first-class citizen. We do not store personal student IDs, grade history, or financial records. Caching is handled locally on your device, and location coordinates are only processed while using maps.",
      },
      {
        q: "Is Lumisync FERPA compliant?",
        a: "Yes. Lumisync operates entirely using public university listings—directories, menus, calendar items, and maps. Because we do not store, process, or transmit private student educational records (PII), our software is fully compliant with FERPA regulations.",
      },
    ],
  },
  {
    title: "Universities & Partnerships",
    items: [
      {
        q: "How can my university get on Lumisync?",
        a: "Administrators and IT departments can onboard their campuses by implementing our modular data provider interfaces. We integrate with your existing databases or HR records. Reach out via our Contact page to get started.",
      },
      {
        q: "How long does onboarding take?",
        a: "Because of our Provider Architecture, onboarding a new university campus typically takes less than 14 days, requiring minimal support from your local IT operations teams.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

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
            <span className="section-label mb-4">Support</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Frequently Asked Questions.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Common questions about Lumisync, Lumi AI, data security, and how universities can onboard their campuses.
            </p>
          </div>
        </section>

        {/* Accordions */}
        <section className="section-py">
          <div className="section-max px-6 max-w-3xl">
            <div className="flex flex-col gap-12">
              {faqGroups.map((group, gIndex) => (
                <div key={gIndex}>
                  <h2 className="text-xl font-bold font-display text-stone-900 dark:text-stone-50 mb-6 border-b border-[--border] pb-3">
                    {group.title}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {group.items.map((item, iIndex) => {
                      const id = `${gIndex}-${iIndex}`;
                      const isOpen = openItem === id;
                      return (
                        <div
                          key={id}
                          className="card overflow-hidden"
                          style={{
                            background: isOpen ? "var(--surface-2)" : "var(--surface)",
                          }}
                        >
                          <button
                            onClick={() => toggleItem(id)}
                            className="w-full text-left p-6 flex items-center justify-between gap-4 font-semibold text-sm text-stone-900 dark:text-stone-100 font-display transition-colors"
                          >
                            <span className="flex items-center gap-3">
                              <HelpCircle size={16} className="text-blue-650 flex-shrink-0" />
                              {item.q}
                            </span>
                            <ChevronDown
                              size={16}
                              className={`text-stone-400 flex-shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="px-6 pb-6 text-xs text-[--text-secondary] leading-relaxed border-t border-[--border] pt-4 bg-white dark:bg-stone-850 animate-fade-in">
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-stone-100 dark:bg-stone-900 py-16 border-t border-[--border]">
          <div className="section-max px-6 text-center">
            <h3 className="text-2xl font-bold mb-4 font-display">Still have questions?</h3>
            <p className="text-stone-600 dark:text-stone-400 max-w-md mx-auto mb-6 text-sm">
              We're here to help. Reach out directly to our support team and we will get back to you shortly.
            </p>
            <Link href="/contact" className="btn btn-primary rounded-full px-8">
              Contact Support
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
