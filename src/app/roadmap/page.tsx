import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "Explore the development progress, active items, and future roadmap of Lumisync.",
};

const items = [
  {
    phase: "2025 - Mid 2026",
    status: "launched",
    title: "Core Release (Launched)",
    desc: "Established the foundations of the campus operating system shell.",
    bullets: [
      "High-accuracy campus map interface",
      "Lumi AI Gemini conversational agent",
      "Dining hours and menu lookup indexes",
      "Campus student assistant jobs board",
      "Faculty directory search & email details",
    ],
    color: "border-l-green-600",
    dot: "bg-green-600",
  },
  {
    phase: "Q3 2026",
    status: "active",
    title: "Advanced Lumi & Transit (Active)",
    desc: "Enhancing AI intelligence and rolling out transport trackers.",
    bullets: [
      "Context memory & structured query outputs for Lumi AI",
      "Live campus shuttle location routing overlays",
      "PWA offline loading and caching updates",
      "Saved favorites (menus, events, buildings)",
    ],
    color: "border-l-[#CC0000]",
    dot: "bg-[#CC0000]",
  },
  {
    phase: "Q4 2026",
    status: "planned",
    title: "Organizations & Login (Planned)",
    desc: "Adding administrative tools and community spaces.",
    bullets: [
      "Student clubs & organizations directory",
      "SSO university authentication (SAML/OpenID)",
      "Multi-campus select dropdown support",
      "Push notification systems for calendar changes",
    ],
    color: "border-l-amber-600",
    dot: "bg-amber-600",
  },
  {
    phase: "2027+",
    status: "future",
    title: "Analytics & Enterprise (Future)",
    desc: "Long term scaling for institutional partners.",
    bullets: [
      "Departmental directories administrative panels",
      "Campus dining & parking aggregate analytics",
      "Native iOS and Android mobile wrappers",
      "Global onboarding system for universities",
    ],
    color: "border-l-stone-300 dark:border-l-stone-700",
    dot: "bg-stone-300 dark:bg-stone-700",
  },
];

export default function RoadmapPage() {
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
            <span className="section-label mb-4">Product Lifecycle</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              What we're building.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Lumisync is built in the open. Explore our ongoing development timeline and see what is next.
            </p>
          </div>
        </section>

        {/* Timeline Grid */}
        <section className="section-py">
          <div className="section-max px-6 max-w-3xl">
            <div className="flex flex-col gap-10">
              {items.map((item, i) => (
                <div key={i} className={`card p-8 border-l-4 ${item.color} flex flex-col md:flex-row gap-6 justify-between`}>
                  <div className="md:w-1/3 flex-shrink-0">
                    <span className="text-xs font-bold text-[var(--text-muted)] dark:text-[var(--text-muted)] uppercase tracking-widest">{item.phase}</span>
                    <h3 className="text-xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mt-1">{item.title}</h3>
                    <p className="text-xs text-[--text-secondary] mt-2 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-[--border] pt-6 md:pt-0 md:pl-8">
                    <ul className="space-y-3">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-[--text-secondary]">
                          <span className={`w-2 h-2 rounded-full ${item.dot} flex-shrink-0 mt-1.5`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
