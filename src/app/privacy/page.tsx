import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Lumisync's policy details on data collection, student privacy, and AI queries handling.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 bg-[--background] pt-28 pb-20">
        <div className="section-max px-6 max-w-3xl">
          <div className="prose mx-auto">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-3">Legal</span>
            <h1 className="text-4xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mb-2">Privacy Policy</h1>
            <p className="text-xs text-[var(--text-muted)] font-medium mb-10">Last Updated: July 2025</p>

            <h2 className="text-xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mb-4">1. Overview</h2>
            <p className="text-sm leading-relaxed mb-6">
              Lumisync (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) builds products designed to remove daily friction from campus life. We believe privacy is a fundamental student right. We build Lumisync so that students can access maps, dining halls, schedules, and AI helpers without compromising personal information.
            </p>

            <h2 className="text-xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mt-8 mb-4">2. What We Collect</h2>
            <p className="text-sm leading-relaxed mb-4">
              Lumisync core operations do not require students to input grades, transcripts, or financial details. We only process the following data:
            </p>
            <ul className="list-disc pl-6 text-sm text-[--text-secondary] space-y-2 mb-6">
              <li><strong>Local Settings:</strong> Preferences like Dark Mode, selected university, or saved dining hall favorites are stored locally on your device's storage.</li>
              <li><strong>Map Location:</strong> Geolocation coordinates are only used while mapping is active to center the viewport. Location is not stored or shared.</li>
              <li><strong>Contact Info:</strong> Names, emails, and university roles submitted via waitlist or support form inputs are stored securely to send emails.</li>
            </ul>

            <h2 className="text-xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mt-8 mb-4">3. AI Data Handling</h2>
            <p className="text-sm leading-relaxed mb-6">
              Lumi AI uses state-of-the-art models via Google Gemini API. Questions submitted to Lumi are sent securely with generic campus context (like dining hours or directory logs) but without personal student records or PII. Conversations are anonymized and not used for ad profiling.
            </p>

            <h2 className="text-xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mt-8 mb-4">4. Compliance & FERPA</h2>
            <p className="text-sm leading-relaxed mb-6">
              Lumisync displays public university information (directories, dining hours, calendar dates, parking lot categories). Because our systems do not store or process student educational records, our platform is fully compliant with Family Educational Rights and Privacy Act (FERPA) requirements.
            </p>

            <h2 className="text-xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mt-8 mb-4">5. Contact Info</h2>
            <p className="text-sm leading-relaxed">
              If you have any questions or concerns regarding our privacy practices, please contact us at{" "}
              <a href="mailto:privacy@lumisync.app" className="text-blue-600 hover:underline">
                privacy@lumisync.app
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
