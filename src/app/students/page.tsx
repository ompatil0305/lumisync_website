import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Compass, Sparkles, MapPin, Calendar, Clock, Smile } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Students",
  description: "Learn how Lumisync unifies student life, dining, parking, and campus events in one modern operating system.",
};

const studentProblems = [
  {
    icon: Clock,
    title: "Save 30 Minutes Every Day",
    desc: "Stop cross-checking 12 different university websites just to find dining hall hours, parking rules, or job listings. Everything is loaded in under a second.",
  },
  {
    icon: Calendar,
    title: "Never Miss Campus Events",
    desc: "From free pizza study breaks to official career fairs, get all listings in a personalized feed. Add them straight to your calendar with one tap.",
  },
  {
    icon: Compass,
    title: "Navigate with Confidence",
    desc: "Route to any building, classroom, professor's office, or parking lot. Indoor maps help you locate rooms without getting lost on the first day of class.",
  },
];

export default function StudentsPage() {
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
            <span className="section-label mb-4">For Students</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Built by students. Built for students.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Lumisync brings all your daily campus information together into one clean, lightning-fast application.
            </p>
          </div>
        </section>

        {/* Benefits Detail */}
        <section className="section-py border-b border-[--border]">
          <div className="section-max px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentProblems.map((item, i) => {
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

        {/* Highlight features */}
        <section className="section-py">
          <div className="section-max px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-display text-stone-900 dark:text-stone-50">Why you'll love it</h2>
                <div className="flex flex-col gap-4">
                  {[
                    "Unified home feed with dining updates & daily briefs",
                    "Ask Lumi AI questions in natural language",
                    "Complete map navigation with room and office locator",
                    "On-campus job listings and student clubs directory",
                    "Dark mode, light mode, and system preferences",
                    "PWA-ready: install on your phone directly",
                  ].map((text, j) => (
                    <div key={j} className="flex gap-3 items-start text-sm text-[--text-secondary]">
                      <span className="w-5 h-5 rounded-full bg-red-50 dark:bg-red-950/30 text-[#CC0000] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 dark:bg-stone-900 p-8 rounded-3xl border border-[--border] flex flex-col gap-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950 text-[#CC0000] flex items-center justify-center mx-auto">
                  <Smile size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-stone-900 dark:text-stone-50">Free for all students</h3>
                  <p className="text-xs text-[--text-secondary] leading-relaxed mt-2">
                    Lumisync core features, including maps, dining, events, jobs, and Lumi AI, will always be 100% free for students with no subscription required.
                  </p>
                </div>
                <Link href="/join" className="btn btn-primary rounded-full w-full py-3">
                  Get Early Access
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
