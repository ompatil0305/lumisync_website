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
                    <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-[#CC0000] flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-2 font-display text-stone-900 dark:text-stone-50">
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

            {/* Embedded Live Map Section */}
            <div className="card p-4 bg-stone-50 border border-[--border] rounded-3xl shadow-xl max-w-4xl mx-auto overflow-hidden">
              <div className="bg-stone-900 text-white px-5 py-3 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-semibold tracking-wider opacity-85">MAP MODULE LIVE</span>
                <span className="text-xs opacity-50">lumisync.app/map</span>
              </div>
              <div className="w-full aspect-video min-h-[380px] bg-white rounded-b-2xl overflow-hidden relative">
                <iframe
                  src="https://lumisync.vercel.app/map"
                  title="Embedded Live Map"
                  className="w-full h-full border-none"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-center text-[10px] text-stone-500 dark:text-stone-400 mt-3 font-medium">
              Map rendering and routing powered by Leaflet, OpenStreetMap, and OSRM project. © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-700 dark:hover:text-stone-300">OpenStreetMap contributors</a>.
            </p>
          </div>
        </section>

        {/* Action CTA */}
        <section className="bg-stone-100 dark:bg-stone-900 py-16 border-t border-[--border]">
          <div className="section-max px-6 text-center">
            <h3 className="text-2xl font-bold mb-4 font-display">Need custom campus maps?</h3>
            <p className="text-stone-600 dark:text-stone-400 max-w-md mx-auto mb-6 text-sm">
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
