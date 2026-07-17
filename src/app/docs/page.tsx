import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Code2, Database, ShieldAlert, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation | Lumisync",
  description: "Read details on integrating datasets, configuring university providers, and scaling Lumisync at your campus.",
};

const docSections = [
  {
    icon: Code2,
    title: "Getting Started",
    desc: "Understand what Lumisync is, how our frontend application works, and how it retrieves university data feeds.",
    links: [
      { label: "Introduction to Lumisync", href: "#introduction" },
      { label: "Architecture Overview", href: "#architecture" },
    ],
  },
  {
    icon: Database,
    title: "University Providers",
    desc: "Configure localized providers to ingest dining menus, parking lots coordinates, events directories, and staff directory records.",
    links: [
      { label: "Provider Specification", href: "#provider-spec" },
      { label: "Onboarding a New Campus", href: "#onboarding" },
    ],
  },
  {
    icon: Cpu,
    title: "API & Integrations",
    desc: "Future roadmap for administrative tools, SSO configurations, and direct HR / student affairs integrations.",
    links: [
      { label: "Future API Access (Planned)", href: "#api-access" },
      { label: "SSO Integrations (SAML/OAuth)", href: "#sso" },
    ],
  },
];

export default function DocsPage() {
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
            <span className="section-label mb-4">Developers & IT</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Lumisync Documentation.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Learn how to implement data providers, configure university settings, and deploy Lumisync at your institution.
            </p>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="section-py border-b border-[--border]">
          <div className="section-max px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {docSections.map((sec, i) => {
                const Icon = sec.icon;
                return (
                  <div key={i} className="card p-8 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-850 text-blue-600 flex items-center justify-center border border-stone-250/20 mb-5 flex-shrink-0">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-bold text-lg font-display text-stone-900 dark:text-stone-50 mb-2">{sec.title}</h3>
                      <p className="text-xs text-[--text-secondary] leading-relaxed mb-6">{sec.desc}</p>
                    </div>

                    <div className="border-t border-[--border] pt-4 flex flex-col gap-2">
                      {sec.links.map((link, j) => (
                        <a key={j} href={link.href} className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Markdown-style Docs */}
        <section className="section-py">
          <div className="section-max px-6 max-w-3xl">
            <div className="prose mx-auto">
              <h2 id="introduction" className="text-3xl font-bold font-display text-stone-900 dark:text-stone-50 mb-6">Introduction to Lumisync</h2>
              <p className="text-sm leading-relaxed mb-4">
                Lumisync is built to serve as the single interface shell for university students. Rather than replacing existing student records, LMS tools, or dining software, we simply overlay a unified client on top of them.
              </p>
              <p className="text-sm leading-relaxed mb-6">
                Students access all resources—real-time menus, map wayfinding, calendar schedules—from a single client screen, reducing cognitive friction and IT support tickets.
              </p>

              <h2 id="architecture" className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mt-10 mb-4">Provider Architecture</h2>
              <p className="text-sm leading-relaxed mb-4">
                Lumisync implements a modular <strong>Provider Pattern</strong>. Each university has a designated provider file, such as <code>texasTechProvider.ts</code>, which implements the interface matching the schema below:
              </p>
              
              <pre className="bg-stone-50 dark:bg-stone-900 p-4 rounded-xl border border-[--border] overflow-x-auto text-[11px] leading-relaxed font-mono text-stone-700 dark:text-stone-300">
{`interface UniversityDataProvider {
  getDiningHalls(): Promise<DiningHall[]>;
  getParkingLots(): Promise<ParkingLot[]>;
  getFacultyMembers(): Promise<FacultyMember[]>;
  getCampusEvents(): Promise<CampusEvent[]>;
  getBuildings(): Promise<Building[]>;
}`}
              </pre>

              <h2 id="onboarding" className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mt-10 mb-4">Onboarding a Campus</h2>
              <p className="text-sm leading-relaxed mb-4">
                To onboard a new university campus, follow this lifecycle:
              </p>
              <ol className="list-decimal pl-6 text-sm text-[--text-secondary] space-y-2 mb-6">
                <li>Create a data provider implementing the interface above under <code>src/providers/</code>.</li>
                <li>Verify mapping coordinate lists with precise GPS latitudes and longitudes.</li>
                <li>Import and bind the provider inside the app's provider router configuration.</li>
                <li>Verify build succeeds with <code>npm run build</code>.</li>
              </ol>

              <div className="flex gap-4 p-5 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-[--border] mt-10">
                <ShieldAlert className="text-blue-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm font-display text-stone-900 dark:text-stone-50 mb-1">Developer Notice</h4>
                  <p className="text-xs text-[--text-secondary] leading-relaxed">
                    We are currently refactoring API integrations to use standard REST routes. Sign up for the developer newsletter inside contact form if you want to get notified when public documentation releases.
                  </p>
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
