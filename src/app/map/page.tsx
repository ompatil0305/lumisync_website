import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Map, Compass, Navigation as NavIcon, Accessibility, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campus Map",
  description: "Navigate indoor and outdoor university spaces with Lumisync's high-accuracy campus map and route locator.",
};

const mapFeatures = [
  {
    icon: Search,
    title: "Instant Room & Office Locator",
    desc: "Search by building abbreviations or name, office room numbers, or departments. Get exact room levels, maps, and directions without hunting through corridors.",
  },
  {
    icon: NavIcon,
    title: "Outdoor Route Navigation",
    desc: "Seamless routing across campus sidewalks, roads, and trails. Easily find walkways between residence halls, lecture theaters, and administrative centers.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Options",
    desc: "Locate elevators, ramp entries, wheelchair-friendly paths, and automatic door access coordinates. Engineered for inclusive campus wayfinding.",
  },
  {
    icon: Compass,
    title: "Parking Lot Locator",
    desc: "Meticulous maps of all commuter, visitor, residence, and staff parking lots. Links instantly with Google Maps for easy driving navigation.",
  },
];

export default function CampusMapPage() {
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
            <span className="section-label mb-4">Map & Navigation</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              The smartest campus map ever built.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Search any classroom, faculty office, or parking lot. Get high-precision indoor and outdoor directions immediately.
            </p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="section-py">
          <div className="section-max px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {mapFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="card p-8 flex gap-6 items-start">
                    <div className="p-3 rounded-xl bg-[var(--surface-2)] text-[#CC0000] flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-2 font-display text-[var(--text-primary)] dark:text-stone-50">
                        {feat.title}
                      </h2>
                      <p className="text-sm text-[--text-secondary] leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Preview Screenshots: Dual Mobile Mockups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16 items-center justify-items-center">
              {/* Card 1: Vector GIS Campus Map */}
              <div className="flex flex-col items-center text-center w-full">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#CC0000] bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                    Live Campus Engine
                  </span>
                  <h3 className="text-xl font-bold font-display mt-2 text-[var(--text-primary)]">
                    Vector Footprints & Location Pin
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-xs">
                    Precise building contours with active GPS positioning and category filters.
                  </p>
                </div>
                
                {/* Mobile Phone Mockup */}
                <div 
                  className="relative overflow-hidden bg-black border-[8px] border-[#18181b] rounded-[2.8rem] shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    width: 290,
                    height: 590,
                    boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-5 z-30 flex justify-center items-center pointer-events-none">
                    <div className="w-20 h-3.5 bg-[#18181b] rounded-b-lg" />
                  </div>
                  <img
                    src="/app_map_screenshot.jpg"
                    alt="Campus Map Vector Footprints"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 inset-x-0 h-3 flex justify-center items-center z-30 pointer-events-none">
                    <div className="w-28 h-1 bg-white/40 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Card 2: Building Detail & Access */}
              <div className="flex flex-col items-center text-center w-full">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Inclusive Navigation
                  </span>
                  <h3 className="text-xl font-bold font-display mt-2 text-[var(--text-primary)]">
                    Indoor Access & Directions
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-xs">
                    Restrooms, elevators, bike racks, and walking/cycling route modes.
                  </p>
                </div>

                {/* Mobile Phone Mockup */}
                <div 
                  className="relative overflow-hidden bg-black border-[8px] border-[#18181b] rounded-[2.8rem] shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    width: 290,
                    height: 590,
                    boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="absolute top-0 inset-x-0 h-5 z-30 flex justify-center items-center pointer-events-none">
                    <div className="w-20 h-3.5 bg-[#18181b] rounded-b-lg" />
                  </div>
                  <img
                    src="/app_map_detail_screenshot.jpg"
                    alt="Building Details and Restroom Locations"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 inset-x-0 h-3 flex justify-center items-center z-30 pointer-events-none">
                    <div className="w-28 h-1 bg-white/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action CTA */}
        <section className="section-py bg-[var(--surface-2)] dark:bg-[var(--surface-3)] border-t border-[--border]">
          <div className="section-max px-6 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4 font-display text-center">Need custom campus maps?</h3>
            <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] max-w-md mx-auto mb-6 text-sm text-center">
              We can map and digitize your entire campus, parking lots, and building floor plans in days.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/join" className="btn btn-primary rounded-full px-8">
                Join Beta
              </Link>
              <Link href="/contact" className="btn btn-secondary rounded-full px-8">
                Request Onboarding
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
