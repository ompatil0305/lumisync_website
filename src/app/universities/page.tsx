import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, Globe, Database, Cpu, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Universities",
  description: "Learn about Lumisync's dynamic provider architecture that allows fast onboarding of any university worldwide.",
};

const plannedUniversities = [
  { name: "Texas Tech University", state: "Lubbock, TX", status: "Active Now", active: true },
  { name: "Texas A&M University", state: "College Station, TX", status: "Planned Q3 25", active: false },
  { name: "UT Austin", state: "Austin, TX", status: "Planned Q3 25", active: false },
  { name: "Arizona State University", state: "Tempe, AZ", status: "Planned Q4 25", active: false },
  { name: "University of Florida", state: "Gainesville, FL", status: "Planned Q4 25", active: false },
  { name: "Stanford University", state: "Stanford, CA", status: "Planned 2026", active: false },
];

export default function UniversitiesPage() {
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
            <span className="section-label mb-4">Institutions</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Built to support every university.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Lumisync's scalable architecture separates core logic from local campus data, allowing fast deployments at any campus.
            </p>
          </div>
        </section>

        {/* Current & Planned list */}
        <section className="section-py border-b border-[--border]">
          <div className="section-max px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold font-display">Supported Campuses</h2>
              <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm max-w-sm mx-auto">
                Explore active university integrations and our current deployment schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {plannedUniversities.map((uni, i) => (
                <div
                  key={i}
                  className={`card p-6 flex flex-col justify-between min-h-[160px] border-t-4 ${
                    uni.active ? "border-t-green-600" : "border-t-stone-300 dark:border-t-stone-700"
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-base font-display text-stone-900 dark:text-stone-50">{uni.name}</h3>
                    <p className="text-xs text-stone-400 font-medium">{uni.state}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                        uni.active ? "bg-green-50 text-green-700 border border-green-200" : "bg-stone-100 text-stone-600 border border-stone-200 dark:bg-stone-800 dark:text-stone-350 dark:border-stone-700"
                      }`}
                    >
                      {uni.status}
                    </span>
                    {uni.active && <span className="text-xs font-semibold text-green-650 flex items-center gap-1">Live ✓</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Provider Architecture explanation */}
        <section className="section-py">
          <div className="section-max px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">Architectural Scalability</span>
                <h3 className="text-3xl font-bold mb-5 font-display text-stone-900 dark:text-stone-50">
                  How the Provider Model works
                </h3>
                <p className="text-sm text-[--text-secondary] leading-relaxed mb-4">
                  Each university integration is defined by a modular <strong>University Data Provider</strong>. This provider structure implements standard TypeScript interfaces for dining, maps, events, parking, and faculty lists.
                </p>
                <p className="text-sm text-[--text-secondary] leading-relaxed">
                  By isolating the campus data parsing layer from the core UI shell, we can easily onboard other campuses by simply implementing a new data provider file, leaving the application core unchanged and completely bug-free.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: Database,
                    title: "Decoupled Data Layer",
                    desc: "Campus details are pulled from static local arrays or university REST APIs, dynamically bound to page states.",
                  },
                  {
                    icon: Cpu,
                    title: "Universal UI Templates",
                    desc: "The dashboard, detail screens, lists, and search queries use the exact same layouts regardless of campus location.",
                  },
                  {
                    icon: Globe,
                    title: "Geographical Agility",
                    desc: "Coordinates mapping automatically centres active maps on the local campus based on the select-provider setting.",
                  },
                ].map((item, j) => {
                  const Icon = item.icon;
                  return (
                    <div key={j} className="card p-6 flex gap-4 items-start">
                      <div className="p-2.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-blue-600 flex-shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1 font-display text-stone-900 dark:text-stone-50">{item.title}</h4>
                        <p className="text-xs text-[--text-secondary] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* IT administrator contact */}
        <section className="bg-stone-100 dark:bg-stone-900 py-16 border-t border-[--border]">
          <div className="section-max px-6 text-center">
            <h3 className="text-2xl font-bold mb-4 font-display">University IT & Administrators</h3>
            <p className="text-stone-600 dark:text-stone-400 max-w-lg mx-auto mb-6 text-sm">
              Learn how easy it is to onboard your campus, integrate with student affairs data, and provide a unified mobile experience for your student body.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary rounded-full px-8">
                Partner with us
              </Link>
              <Link href="/docs" className="btn btn-secondary rounded-full px-8">
                Read Provider Docs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
