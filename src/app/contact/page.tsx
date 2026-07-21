"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Globe, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    role: "student",
    subject: "",
    message: "",
    website: "", // Honeypot
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (formData.name.length < 2) {
      setStatus("error");
      setErrorMsg("Name must be at least 2 characters.");
      return;
    }

    if (formData.message.length < 20) {
      setStatus("error");
      setErrorMsg("Message must be at least 20 characters.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          university: "",
          role: "student",
          subject: "",
          message: "",
          website: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to connect to the server. Please try again later.");
    }
  };

  return (
    <>
      <Navigation />
      <main className="flex-1 bg-[--background] pt-28 pb-20">
        <div className="section-max px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="section-label mb-4">Connect</span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-display text-stone-905 dark:text-stone-50">
              Get in touch.
            </h1>
            <p className="mt-4 text-sm text-[--text-secondary] max-w-md mx-auto">
              Whether you are a student, an IT administrator, or representing a university, we would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div className="card p-6 flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-2)] text-blue-600 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm font-display text-[var(--text-primary)] dark:text-stone-50">General Support</h3>
                  <a href="mailto:hello@lumisync.app" className="text-xs text-[--text-secondary] hover:text-blue-600 mt-0.5 block">
                    hello@lumisync.app
                  </a>
                </div>
              </div>

              <div className="card p-6 flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-2)] text-blue-600 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm font-display text-[var(--text-primary)] dark:text-stone-50">Headquarters</h3>
                  <p className="text-xs text-[--text-secondary] mt-0.5">
                    Lubbock, Texas
                  </p>
                </div>
              </div>

              <div className="card p-6 flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-2)] text-blue-600 flex-shrink-0">
                  <Globe size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm font-display text-[var(--text-primary)] dark:text-stone-50">Open Source</h3>
                  <a
                    href="https://github.com/ompatil0305/lumisync"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[--text-secondary] hover:text-blue-600 mt-0.5 block"
                  >
                    github.com/ompatil0305
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-2 card p-8 bg-white dark:bg-[var(--surface-3)] border border-[--border]">
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-10">
                  <CheckCircle2 size={48} className="text-green-600 mb-4" />
                  <h3 className="text-xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mb-2">Message Sent!</h3>
                  <p className="text-xs text-[--text-secondary] max-w-sm">
                    Thank you for reaching out. We have sent a confirmation email to you, and our support team will respond shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn btn-secondary rounded-full mt-6 text-xs px-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {status === "error" && (
                    <div className="flex gap-2.5 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      <div>{errorMsg}</div>
                    </div>
                  )}

                  {/* Honeypot field (hidden from screen readers & users) */}
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[var(--text-secondary)] dark:text-[var(--text-muted)] uppercase mb-2">
                        Your Name <span className="text-red-500">*</span>
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
                      <label htmlFor="email" className="block text-xs font-bold text-[var(--text-secondary)] dark:text-[var(--text-muted)] uppercase mb-2">
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="university" className="block text-xs font-bold text-[var(--text-secondary)] dark:text-[var(--text-muted)] uppercase mb-2">
                        University <span className="text-[var(--text-muted)] text-[10px] lowercase font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        className="input"
                        placeholder="Texas Tech University"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-xs font-bold text-[var(--text-secondary)] dark:text-[var(--text-muted)] uppercase mb-2">
                        Your Role <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="input select bg-white dark:bg-[var(--surface-3)]"
                      >
                        <option value="student">Student</option>
                        <option value="faculty">Faculty Member</option>
                        <option value="staff">Staff Member</option>
                        <option value="it">IT Administrator</option>
                        <option value="administrator">University Administrator</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-[var(--text-secondary)] dark:text-[var(--text-muted)] uppercase mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[var(--text-secondary)] dark:text-[var(--text-muted)] uppercase mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input min-h-[120px] leading-relaxed resize-y"
                      placeholder="Detail your request..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn-primary rounded-full py-3.5 mt-2 flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin inline-block" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
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
