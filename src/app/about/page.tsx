import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Compass, Users, Sparkles, Building, Code2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the mission, values, and story behind Lumisync, the campus operating system built by students.",
};

const values = [
  {
    icon: Compass,
    title: "Students First",
    desc: "Every feature we build starts with a simple query: 'Will this make a student's daily life slightly easier or less confusing?'",
  },
  {
    icon: Code2,
    title: "Open & Transparent",
    desc: "We build in public. Our progress timeline is public, and we're open about where our datasets originate and how they're updated.",
  },
  {
    icon: Globe,
    title: "University-Agnostic",
    desc: "We build Lumisync as a scalable framework designed to accommodate any college campus in the world, with local providers.",
  },
];

export default function AboutPage() {
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
            <span className="section-label mb-4">About Lumisync</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              The campus operating system.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Removing fragmentation and friction from campus life for students, faculty, and administrators.
            </p>
          </div>
        </section>

        {/* Vision & Story */}
        <section className="section-py border-b border-[--border]">
          <div className="section-max px-6 max-w-3xl">
            <div className="prose mx-auto">
              <h2 className="text-3xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mb-6">Why Lumisync Exists</h2>
              <p className="text-sm leading-relaxed mb-6">
                Universities have massive, fragmented technology footprints. To answer simple daily questions, like finding what dining halls are open, where a professor's office is, how to get parking permit zones, or where club meetings are held, students must bounce between 10+ different outdated sites and portals.
              </p>
              <p className="text-sm leading-relaxed mb-6">
                Lumisync changes that. We unify all campus data streams into a single, clean user interface and conversational assistant (Lumi) so you can get immediate, verified updates in a fraction of a second.
              </p>

              <h2 className="text-2xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mt-10 mb-4">The Founder Story</h2>
              <p className="text-sm leading-relaxed mb-4">
                Lumisync was started by <strong>Om Patil</strong>, a student at Texas Tech University. Frustrated by the daily friction of hunting down meal schedules and classroom office codes across confusing administrative sites, he built the prototype to solve his own problems.
              </p>
              <p className="text-sm leading-relaxed mb-6">
                Realizing that classmates faced the exact same issues, Lumisync grew into a scalable platform designed to support college campuses everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="section-py">
          <div className="section-max px-6">
            <SectionHeader
              title="Our Core Values"
              subtext="The principles directing our design and technology choices."
              align="center"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="card p-8 flex flex-col gap-5">
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] text-blue-600 flex items-center justify-center border border-[var(--border)]/20 flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-lg font-display text-[var(--text-primary)] dark:text-stone-50">{v.title}</h3>
                    <p className="text-sm text-[--text-secondary] leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
