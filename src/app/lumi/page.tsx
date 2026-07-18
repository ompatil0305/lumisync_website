import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, MessageSquare, Shield, HelpCircle, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet Lumi AI | Lumisync",
  description: "Lumi is your conversational campus assistant powered by Google Gemini, helping you navigate university life in natural language.",
};

const capabilities = [
  {
    title: "Dining Status & Menus",
    example: '"What is open for lunch right now?"',
    desc: "Lumi checks all live dining halls, parses their current hours, filters by active meal period, and lists open locations. It can even search menus for specific dishes.",
  },
  {
    title: "Office Hours & Locations",
    example: '"Where is Dr. Smith\'s office?"',
    desc: "Lumi queries the faculty directory, retrieves office numbers, cross-references with the mapping coordinate database, and drops directions to their door.",
  },
  {
    title: "Parking Zone Information",
    example: '"Where can I park with a commuter permit?"',
    desc: "Lumi checks active parking permit zones, identifies compatible lots near your current target location, and provides navigation instructions.",
  },
  {
    title: "Event RSVP & Discoveries",
    example: '"Are there any events happening this Friday?"',
    desc: "Lumi scans student activities calendars, highlights key details (time, location, pizza availability), and lets you save them directly to your device.",
  },
];

export default function LumiAIPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 bg-[--background]">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-20 text-center border-b border-[--border]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(29,78,216,0.07) 0%, transparent 70%)",
            }}
          />
          <div className="section-max px-6 flex flex-col items-center">
            <span className="section-label mb-4">Lumi Assistant</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Meet Lumi. Your AI campus assistant.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Lumi unifies your campus's databases into a single, intuitive conversation. No links, no searches — just immediate answers.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/join" className="btn btn-primary rounded-full px-8">
                Get Early Access
              </Link>
              <a href="#how-it-works" className="btn btn-secondary rounded-full px-8">
                How It Works
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="section-py border-b border-[--border]">
          <div className="section-max px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display">Intelligence with speed.</h2>
              <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm max-w-sm mx-auto">
                How Lumi processes and answers your questions in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Natural Request",
                  desc: "Ask any question in plain English, just like you would text a classmate. Lumi understands natural intent, typos, and abbreviations.",
                },
                {
                  step: "02",
                  title: "Live Database Check",
                  desc: "Instead of searching the web, Lumi queries our verified university databases—dining menus, building map coords, schedules, and active feeds.",
                },
                {
                  step: "03",
                  title: "Immediate Answer",
                  desc: "Lumi compiles the response into a concise text block with links. Need directions? It generates navigation routes immediately.",
                },
              ].map((s, i) => (
                <div key={i} className="card p-8 border-t-4 border-t-[#CC0000]">
                  <div className="text-xs font-bold text-[#CC0000] mb-2">{s.step}</div>
                  <h3 className="text-lg font-bold mb-2 font-display">{s.title}</h3>
                  <p className="text-sm text-[--text-secondary] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="section-py">
          <div className="section-max px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display">What Lumi knows</h2>
              <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm max-w-sm mx-auto">
                Directly connected to verified university data feeds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((c, i) => (
                <div key={i} className="card p-8 flex gap-6 items-start">
                  <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-850 text-[#CC0000] flex-shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 font-display text-stone-900 dark:text-stone-50">
                      {c.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#CC0000] mb-3 italic font-mono">
                      {c.example}
                    </p>
                    <p className="text-sm text-[--text-secondary] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Privacy */}
        <section className="section-py bg-stone-100 dark:bg-stone-900 border-t border-[--border]">
          <div className="section-max px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-2">
                <div className="flex items-center gap-2 text-[#CC0000] mb-4">
                  <Shield size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">Privacy First</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Your conversations are yours alone.</h3>
                <p className="text-sm text-[--text-secondary] leading-relaxed">
                  Lumi is designed with strict student privacy guidelines. We do not store personal student IDs, track your location when the app is closed, or sell conversation histories. Information requested from Gemini is anonymized.
                </p>
              </div>
              <div className="bg-white dark:bg-stone-850 p-6 rounded-2xl border border-[--border] flex flex-col gap-3">
                <div className="flex gap-2.5 items-center text-xs text-stone-700 dark:text-stone-300 font-semibold">
                  <Check className="text-green-600 w-4 h-4" />
                  No tracking when idle
                </div>
                <div className="flex gap-2.5 items-center text-xs text-stone-700 dark:text-stone-300 font-semibold">
                  <Check className="text-green-600 w-4 h-4" />
                  No student ads, ever
                </div>
                <div className="flex gap-2.5 items-center text-xs text-stone-700 dark:text-stone-300 font-semibold">
                  <Check className="text-green-600 w-4 h-4" />
                  FERPA-aware design
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
