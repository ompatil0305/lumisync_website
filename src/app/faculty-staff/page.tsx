import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Search, MapPin, Calendar, Clock, BookOpen, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faculty & Staff",
  description: "Help students locate your office, view office hours, and discover resources with Lumisync for Faculty & Staff.",
};

export default function FacultyStaffPage() {
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
            <span className="section-label mb-4">Faculty & Staff</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Unified directory for modern campuses.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Help students locate office hours, offices, and contact details with zero friction.
            </p>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="section-py border-b border-[--border]">
          <div className="section-max px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  title: "Instant Directory Lookup",
                  desc: "Students can search by name, department, or office room. Our fuzzy search handles typos and outputs correct contact info immediately.",
                },
                {
                  icon: MapPin,
                  title: "Office Location Mapping",
                  desc: "Direct linking from directory lookup to high-precision campus coordinates, offering door-to-door indoor and outdoor routes.",
                },
                {
                  icon: Clock,
                  title: "Office Hours Display",
                  desc: "Keep office hours up to date automatically, showing students when you're available for drop-ins or scheduled meetings.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card p-8 flex flex-col gap-5">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 text-blue-600 flex items-center justify-center border border-stone-200/20 flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 font-display text-stone-900 dark:text-stone-50">{item.title}</h3>
                      <p className="text-sm text-[--text-secondary] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Department Administrators Deep Dive */}
        <section className="section-py">
          <div className="section-max px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">For Department Administrators</span>
                <h3 className="text-3xl font-bold mb-5 font-display text-stone-900 dark:text-stone-50">
                  Keep directories up to date.
                </h3>
                <p className="text-sm text-[--text-secondary] leading-relaxed mb-4">
                  Maintaining directories across university websites is a nightmare. Lumisync integrates with your HR records or allows department heads to update listings from one single panel.
                </p>
                <p className="text-sm text-[--text-secondary] leading-relaxed">
                  Students find the right advisors, contact details, and locations immediately, leading to a massive decrease in support requests and confusion during advising cycles.
                </p>
              </div>

              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-3xl border border-[--border] flex flex-col gap-4">
                <h4 className="font-bold text-lg font-display text-stone-900 dark:text-stone-50">Features at a Glance</h4>
                {[
                  "Fuzzy name and department search",
                  "Verified office hours mapping",
                  "Direct campus map wayfinding routes",
                  "Academic department directory grouping",
                  "Research interest listings (Coming Soon)",
                  "Online scheduling link integration (Coming Soon)",
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

        {/* Call to action */}
        <section className="bg-stone-100 dark:bg-stone-900 py-16 border-t border-[--border]">
          <div className="section-max px-6 text-center">
            <h3 className="text-2xl font-bold mb-4 font-display">Onboard your department</h3>
            <p className="text-stone-600 dark:text-stone-400 max-w-md mx-auto mb-6 text-sm">
              Contact us to verify your directory listings, update office hours, or request integration details.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary rounded-full px-8">
                Get in Touch
              </Link>
              <Link href="/docs" className="btn btn-secondary rounded-full px-8">
                View Integration Docs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
