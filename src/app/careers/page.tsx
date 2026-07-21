import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, Compass, Users, Sparkles, Building, Code } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the team building the digital infrastructure and AI campus operating system for colleges worldwide.",
};

const openPositions = [
  {
    title: "Full-Stack Engineer (React/TypeScript)",
    dept: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    desc: "Scale the Lumisync web client and dynamic provider infrastructure to ingest thousands of campus data endpoints.",
  },
  {
    title: "University Partnerships Manager",
    dept: "Growth & Sales",
    location: "Remote (US)",
    type: "Full-time",
    desc: "Build institutional relationships with Student Affairs and IT departments to deploy Lumisync at campuses across the US.",
  },
  {
    title: "Product Designer",
    dept: "Design",
    location: "Remote",
    type: "Full-time",
    desc: "Oversee the design system, mobile responsive layouts, and wayfinding user flows to ensure an Apple-quality experience.",
  },
];

export default function CareersPage() {
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
            <span className="section-label mb-4">Careers</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Build the future of campus life.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              We are a remote-first, student-centric team building the digital companion for higher education. Explore open roles.
            </p>
          </div>
        </section>

        {/* Culture / Why Join */}
        <section className="section-py border-b border-[--border]">
          <div className="section-max px-6">
            <SectionHeader
              title="Why work at Lumisync?"
              subtext="We value autonomy, transparency, and building tools that make a real difference."
              align="center"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Direct Student Impact",
                  desc: "Every feature you build will be used by thousands of college students to make their daily campus routines less stressful.",
                },
                {
                  icon: Code,
                  title: "Modern Tech Stack",
                  desc: "Develop with React, TypeScript, Tailwind CSS, Next.js, and state-of-the-art LLM tools like Google Gemini APIs.",
                },
                {
                  icon: Users,
                  title: "Async & Autonomous",
                  desc: "We prioritize clean documentation, clear communication, and async execution over endless sync meetings.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card p-8 flex flex-col gap-5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] text-blue-600 flex items-center justify-center border border-[var(--border)]/20 flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-lg font-display text-[var(--text-primary)] dark:text-stone-50">{item.title}</h3>
                    <p className="text-sm text-[--text-secondary] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Roles list */}
        <section className="section-py">
          <div className="section-max px-6 max-w-3xl">
            <SectionHeader
              title="Active Positions"
              subtext="All roles are remote-first. Applications are reviewed on a rolling basis."
              align="center"
              className="mb-14"
            />

            <div className="flex flex-col gap-6">
              {openPositions.map((pos, i) => (
                <div key={i} className="card p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-[var(--text-muted)] dark:text-[var(--text-muted)] uppercase tracking-wider">{pos.dept}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700" />
                      <span className="text-xs text-[var(--text-muted)] dark:text-[var(--text-muted)]">{pos.location}</span>
                    </div>
                    <h3 className="text-lg font-bold font-display text-[var(--text-primary)] dark:text-stone-50">{pos.title}</h3>
                    <p className="text-xs text-[--text-secondary] mt-2 leading-relaxed max-w-xl">{pos.desc}</p>
                  </div>

                  <span className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-stone-150 text-[var(--text-secondary)] dark:bg-[var(--surface-3)] dark:text-stone-350 rounded-full border border-[var(--border)]/20">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-sm text-[--text-secondary]">
                Don't see your role? We'd still love to meet you. Send your resume and a short note to{" "}
                <a href="mailto:careers@lumisync.app" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                  careers@lumisync.app
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
