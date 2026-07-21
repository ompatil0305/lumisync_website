import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Compass, Map, Sparkles, Utensils, Car, Calendar, Users, Briefcase, Building2, Bus, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the nine powerful modules that make up the Lumisync AI campus operating system.",
};

const featureDetails = [
  {
    icon: Compass,
    title: "Campus Discovery",
    tagline: "Your entry point to the campus ecosystem.",
    desc: "A unified feed and search experience tailored to your day. See open dining halls, ongoing events, shuttle updates, and get personalized recommendations from Lumi AI all in one dashboard.",
    benefits: ["Dynamic morning brief tailored to you", "Unified global search bar across all data", "Real-time alerts and campus notices"],
    color: "text-blue-600",
  },
  {
    icon: Map,
    title: "Campus Map",
    tagline: "Navigate indoor and outdoor spaces seamlessly.",
    desc: "A comprehensive mapping engine with precise GPS coordinates for buildings, parking lots, and dining facilities. Features indoor navigation help to locate offices, classrooms, and study hubs without getting lost.",
    benefits: ["High-accuracy indoor room and office locator", "Real-time building hours and details", "Integrated parking lot availability view"],
    color: "text-green-600",
  },
  {
    icon: Sparkles,
    title: "Lumi AI Assistant",
    tagline: "Your personal campus operating companion.",
    desc: "A powerful assistant powered by Google Gemini and real-time university datasets. Ask anything about menus, office hours, event details, or directions in natural language and get immediate, correct answers.",
    benefits: ["Answers in natural language, not web links", "Connected to all database modules live", "Intelligent recommendations (e.g. dietary suggestions)"],
    color: "text-blue-600",
  },
  {
    icon: Utensils,
    title: "Dining Finder",
    tagline: "Never show up to a closed dining hall again.",
    desc: "Real-time dining statuses, daily menus, operating hours, and locations across campus. Filter by dietary restrictions, allergies, and check which venues are open for breakfast, lunch, or late-night study snacks.",
    benefits: ["Live 'Open/Closed' status indicators", "Full menu and nutritional listings", "Filter by Vegan, Vegetarian, Gluten-Free, and more"],
    color: "text-amber-600",
  },
  {
    icon: Car,
    title: "Parking & Transit",
    tagline: "Save time finding a spot.",
    desc: "Explore commuter lots, residence parking, visitor garages, and transit options. Access details on permit requirements, parking regulations, and navigate directly to any lot or garage on campus.",
    benefits: ["Categorized parking zones (Commuter, Residence, etc.)", "Direct mapping and navigation links", "SSO integration planned for permit management"],
    color: "text-[var(--text-secondary)]",
  },
  {
    icon: Calendar,
    title: "Events & Deadlines",
    tagline: "Stay connected to the campus pulse.",
    desc: "A centralized events directory compiling career fairs, club meetings, guest lectures, student breaks, and official academic calendar deadlines. Save events to your favorites and get reminders.",
    benefits: ["One single source of truth for all campus events", "Filter by department, category, or date", "Add events directly to your personal calendar"],
    color: "text-green-600",
  },
  {
    icon: Users,
    title: "Faculty Directory",
    tagline: "Connect with professors and staff easily.",
    desc: "Quickly locate any faculty member, view their department, role, official office room number, office hours, and email. Integrated directly with the campus map so you can route straight to their door.",
    benefits: ["Exact office room lookup and location mapping", "Verified office hours and contact info", "Filter by department or research interest"],
    color: "text-[var(--text-secondary)]",
  },
  {
    icon: Briefcase,
    title: "Jobs & Careers",
    tagline: "Find opportunities to work where you study.",
    desc: "On-campus job listings, work-study openings, internships, and student assistant positions. View detailed requirements, pay rates, locations, and apply directly via official portals.",
    benefits: ["Centralized feed of student jobs", "Work-study eligibility filtering", "Direct application links for active postings"],
    color: "text-amber-600",
  },
  {
    icon: Bus,
    title: "Shuttle Tracker",
    tagline: "Live transit updates in the palm of your hand.",
    desc: "Never miss the shuttle again. Real-time arrival predictions, transit routes, and shuttle stop listings. Plan your commute across campus with confidence, even in bad weather.",
    benefits: ["Real-time arrival estimates", "Color-coded route map overlays", "Quick access to holiday schedules"],
    color: "text-blue-600",
  },
];

export default function FeaturesPage() {
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
            <span className="section-label mb-4">Platform Overview</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Every feature your campus needs.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Lumisync is a complete campus operating system. Explore the modules built to unify student life.
            </p>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="section-py">
          <div className="section-max px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureDetails.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="card p-8 flex flex-col justify-between min-h-[380px]">
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-[var(--surface-2)] flex items-center justify-center border border-[var(--border)]/20 mb-6">
                        <Icon className={`w-6 h-6 ${f.color}`} />
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-[var(--text-primary)] dark:text-stone-50 mb-1 font-display">
                        {f.title}
                      </h2>
                      <p className="text-xs text-[var(--text-muted)] font-medium tracking-wide uppercase mb-4">
                        {f.tagline}
                      </p>
                      
                      {/* Desc */}
                      <p className="text-sm text-[--text-secondary] leading-relaxed mb-6">
                        {f.desc}
                      </p>
                    </div>

                    {/* Benefits List */}
                    <div className="border-t border-[--border] pt-5">
                      <ul className="space-y-2">
                        {f.benefits.map((b, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-xs text-[--text-secondary]">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="section-py bg-[var(--surface-2)] dark:bg-[var(--surface-3)] border-t border-[--border]">
          <div className="section-max px-6 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4 font-display text-center">Ready to streamline your campus?</h3>
            <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] max-w-md mx-auto mb-6 text-sm text-center">
              Join the beta waitlist to get early access to all Lumisync features for your university.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/join" className="btn btn-primary rounded-full px-8">
                Join Beta
              </Link>
              <Link href="/contact" className="btn btn-secondary rounded-full px-8">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
