"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function JoinBetaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    year: "freshman",
    website: "", // Honeypot
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.university.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      // Re-use the contact API with waitlist subject
      const payload = {
        name: formData.name,
        email: formData.email,
        university: formData.university,
        role: "student",
        subject: `Waitlist Signup - ${formData.year}`,
        message: `Student waitlist signup.\nYear: ${formData.year}\nUniversity: ${formData.university}`,
        website: formData.website,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Failed to join waitlist. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to connect to waitlist server. Please try again.");
    }
  };

  return (
    <>
      <Navigation />
      <main className="flex-1 bg-[--background] pt-28 pb-20">
        <div className="section-max px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column copywriting */}
            <div>
              <span className="section-label mb-4 block">Early Access</span>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-display mb-6 text-stone-900 dark:text-stone-50">
                Join the waitlist.
              </h1>
              <p className="text-[14px] text-[--text-secondary] leading-relaxed mb-6">
                Be the first to experience the unified campus operating system. Early beta access is free for students, faculty, and university administrators.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  "Complete mapping & navigation modules",
                  "Lumi AI Gemini assistant updates",
                  "Verified dining status & event calendars",
                  "Early access to native mobile app builds",
                ].map((item, index) => (
                  <div key={index} className="flex gap-2.5 items-center text-xs text-[--text-secondary]">
                    <CheckCircle2 className="text-blue-600 w-4 h-4 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Form */}
            <div className="card p-8 bg-white dark:bg-stone-900 border border-[--border]">
              {status === "success" ? (
                <div className="text-center py-10 flex flex-col items-center">
                  <CheckCircle2 size={48} className="text-green-600 mb-4" />
                  <h3 className="text-xl font-bold font-display text-stone-900 dark:text-stone-50 mb-2">You're on the list!</h3>
                  <p className="text-xs text-[--text-secondary] max-w-xs">
                    We have sent a confirmation email to you. We'll be in touch as soon as we open up the next wave of accounts.
                  </p>
                  <a
                    href="https://lumisync.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-full mt-6 text-xs px-6 py-2.5"
                  >
                    Open Live App Demo
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {status === "error" && (
                    <div className="flex gap-2.5 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <div>{errorMsg}</div>
                    </div>
                  )}

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ display: "none" }}
                    placeholder="Website"
                  />

                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                      placeholder="Om Patil"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="university" className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase mb-2">
                      University <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      required
                      value={formData.university}
                      onChange={handleChange}
                      className="input"
                      placeholder="Texas Tech University"
                    />
                  </div>

                  <div>
                    <label htmlFor="year" className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase mb-2">
                      Current Year <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="year"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleChange}
                      className="input select bg-white dark:bg-stone-900"
                    >
                      <option value="freshman">Freshman</option>
                      <option value="sophomore">Sophomore</option>
                      <option value="junior">Junior</option>
                      <option value="senior">Senior</option>
                      <option value="graduate">Graduate Student</option>
                      <option value="faculty-staff">Faculty / Staff Member</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-primary rounded-full py-3.5 mt-2 flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin inline-block" />
                        Joining waitlist...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
