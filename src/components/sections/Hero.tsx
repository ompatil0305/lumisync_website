"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[120px]"
          style={{ background: "rgb(79,70,229)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: "rgb(14,165,233)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgb(79,70,229) 1px, transparent 1px), linear-gradient(90deg, rgb(79,70,229) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="section-max relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-semibold text-indigo-700">
              <Sparkles size={14} className="text-indigo-500" />
              Powered by Gemini AI
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black leading-[1.05] tracking-tight max-w-4xl"
          >
            Your campus,{" "}
            <span className="lumi-gradient-text">supercharged.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[--text-secondary] max-w-xl leading-relaxed"
          >
            Lumisync brings dining, events, maps, parking, jobs, and an AI
            assistant into one seamless campus experience — built for
            universities worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mt-2"
          >
            <a
              href="#join"
              id="hero-cta-primary"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl lumi-gradient text-white font-semibold text-base shadow-xl shadow-indigo-500/25 hover:opacity-90 transition-all active:scale-95"
            >
              Get Early Access
              <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white border border-[--border] text-[--text-primary] font-semibold text-base hover:bg-[--surface-2] transition-all"
            >
              See Features
            </a>
          </motion.div>

          {/* Social proof pill */}
          <motion.p
            variants={fadeUp}
            className="text-sm text-[--text-muted] mt-2"
          >
            ✦ &nbsp; Designed for higher education &nbsp; ✦ &nbsp; University-agnostic &nbsp; ✦ &nbsp; AI-native
          </motion.p>
        </motion.div>

        {/* Hero mockup */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" as const }}
          className="mt-20 relative"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 -z-10 blur-3xl opacity-40 scale-110 rounded-full"
            style={{ background: "linear-gradient(135deg, rgb(79,70,229), rgb(14,165,233))" }}
          />

          {/* Phone trio */}
          <div className="flex items-end justify-center gap-4">
            {/* Left phone — Explore */}
            <div
              className="phone-mockup scale-[0.82] opacity-70 -mb-8 hidden sm:block"
              style={{ background: "linear-gradient(160deg, #1e1b4b, #0f172a)" }}
            >
              <div className="absolute inset-0 top-12 p-4 overflow-hidden">
                <div className="text-white text-xs font-bold mb-3 font-display opacity-80">Explore</div>
                {["🍕 Dining", "🅿️ Parking", "📅 Events", "💼 Jobs"].map((item) => (
                  <div key={item} className="mb-2 px-3 py-2 rounded-xl bg-white/10 text-white/80 text-[10px] font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Center phone — Home */}
            <div
              className="phone-mockup"
              style={{ background: "linear-gradient(160deg, #1e1b4b, #0f172a)" }}
            >
              <div className="absolute inset-0 top-14 p-4 overflow-hidden">
                <div className="text-white/50 text-[9px] mb-1">Wednesday</div>
                <div className="text-white text-sm font-bold mb-4 font-display">Good morning, Alex 👋</div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { label: "Open Dining", val: "8", color: "bg-emerald-500/20 text-emerald-300" },
                    { label: "Today's Events", val: "4", color: "bg-indigo-500/20 text-indigo-300" },
                  ].map((s) => (
                    <div key={s.label} className={`rounded-xl p-2 ${s.color}`}>
                      <div className="text-xl font-black">{s.val}</div>
                      <div className="text-[9px] opacity-80">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Lumi chat bubble */}
                <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 p-3">
                  <div className="text-[9px] text-white/80 mb-1">✦ Lumi</div>
                  <div className="text-white text-[10px] leading-snug">
                    The dining hall is closing in 30 mins. Want me to find another option?
                  </div>
                </div>
              </div>
            </div>

            {/* Right phone — Map */}
            <div
              className="phone-mockup scale-[0.82] opacity-70 -mb-8 hidden sm:block"
              style={{ background: "linear-gradient(160deg, #0c1a2e, #0f172a)" }}
            >
              <div className="absolute inset-0 top-12 p-4 overflow-hidden">
                <div className="text-white text-xs font-bold mb-3 font-display opacity-80">Campus Map</div>
                <div className="rounded-xl bg-[#1a2744] h-40 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: "linear-gradient(rgba(79,70,229,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.4) 1px, transparent 1px)",
                      backgroundSize: "16px 16px"
                    }}
                  />
                  <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
