"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

export default function JoinBeta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status !== "idle") return;
    setStatus("loading");
    // Simulate API call — replace with your actual endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("done");
  };

  return (
    <section id="join" className="py-24 lg:py-32">
      <div className="section-max">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="lumi-gradient p-16 text-center relative">
            {/* Ambient dots pattern */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 border border-white/30">
                ✦ Limited Early Access
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight max-w-2xl">
                Be the first on your campus.
              </h2>
              <p className="text-lg text-white/80 max-w-lg mb-10 leading-relaxed">
                Join the waitlist and get early access when Lumisync launches at
                your university. No spam — just updates that matter.
              </p>

              {/* Email form */}
              {status === "done" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white font-semibold"
                >
                  <CheckCircle size={20} className="text-emerald-300" />
                  You&apos;re on the list! We&apos;ll be in touch.
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
                >
                  <input
                    id="early-access-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@university.edu"
                    className="flex-1 px-5 py-3.5 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/50 text-sm font-medium outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                  <button
                    type="submit"
                    id="early-access-submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-indigo-700 font-bold text-sm hover:bg-white/90 transition-all disabled:opacity-70 flex-shrink-0"
                  >
                    {status === "loading" ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>
                        Get Access
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}

              <p className="mt-5 text-white/50 text-xs">
                By joining, you agree to our Privacy Policy. We will never share your email.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
