import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Download, FileText, Image, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Press Kit | Lumisync",
  description: "Access Lumisync media resources, brand assets, standard descriptions, and contact coordinates.",
};

export default function PressKitPage() {
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
            <span className="section-label mb-4">Press Room</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Press & Media Resources.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Access standard company profiles, key facts, color palettes guidelines, and direct contact options.
            </p>
          </div>
        </section>

        {/* Press Details */}
        <section className="section-py border-b border-[--border]">
          <div className="section-max px-6 max-w-3xl">
            <div className="prose mx-auto">
              <h2 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mb-4">About Lumisync</h2>
              <p className="text-sm leading-relaxed mb-6">
                Lumisync is a digital campus operating system that consolidates scattered college resources—dining menus, campus maps, parking lot directories, events calendars, and faculty office coordinates—into a single web client and conversational helper (Lumi). By unifying directories and services under a clean interface layer, we remove friction from campus navigation and increase student engagement.
              </p>

              <h2 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mt-10 mb-4">Key Facts</h2>
              <ul className="list-disc pl-6 text-sm text-[--text-secondary] space-y-2 mb-6">
                <li><strong>Founded:</strong> 2025</li>
                <li><strong>Founder:</strong> Om Patil (Texas Tech University student)</li>
                <li><strong>Headquarters:</strong> Lubbock, Texas</li>
                <li><strong>First Campus Integrated:</strong> Texas Tech University</li>
                <li><strong>Platform Stack:</strong> React, Next.js, Tailwind CSS, Google Gemini APIs</li>
              </ul>

              <h2 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mt-10 mb-4">Brand Guidelines</h2>
              <p className="text-sm leading-relaxed mb-4">
                The Lumisync logo uses our standard Deep Blue (<code>#1D4ED8</code>) accent paired with Charcoal (<code>#1C1917</code>) text. When writing or referencing the brand name, format it as <strong>Lumisync</strong> (with a capital L, no space).
              </p>
              <p className="text-sm leading-relaxed mb-6">
                Avoid applying heavy gradients, rotating the symbol, or altering brand spacing. The Outfit display font is preferred for headlines, paired with Inter for body text.
              </p>

              <h2 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mt-10 mb-4">Media Contact</h2>
              <p className="text-sm leading-relaxed">
                For interviews, custom asset requests, or media inquiries, reach out to our team at{" "}
                <a href="mailto:press@lumisync.app" className="text-blue-600 hover:text-blue-700 font-semibold underline">
                  press@lumisync.app
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
