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
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-[--background]"
    >
      <div className="section-max relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[--surface] border border-[--border] text-xs font-semibold text-[--text-secondary] shadow-sm uppercase tracking-widest">
              <Sparkles size={12} className="text-[--lumi-accent]" />
              Powered by Lumi AI
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-[--text-primary] max-w-4xl"
          >
            Your campus, <br className="hidden sm:block" />
            <span className="text-[--text-muted]">beautifully synced.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[--text-secondary] max-w-2xl leading-relaxed mt-2"
          >
            Lumisync brings dining, events, maps, parking, jobs, and an AI
            assistant into one seamless experience — built for
            universities worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <a
              href="#join"
              id="hero-cta-primary"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[--lumi-primary] text-white font-medium text-base hover:bg-[--lumi-primary-hover] transition-all active:scale-95"
            >
              Get Early Access
            </a>
            <a
              href="#features"
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[--surface] border border-[--border] text-[--text-primary] font-medium text-base hover:bg-[--surface-2] transition-all"
            >
              See Features
            </a>
          </motion.div>
        </motion.div>

        {/* Hero mockup - Live iframe */}
        <motion.div
          initial={{ opacity: 0, y: 64 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
          className="mt-24 relative w-full max-w-[340px] sm:max-w-[380px] mx-auto h-[680px] sm:h-[760px] rounded-[3rem] border-[12px] border-[--lumi-primary] bg-[--surface] shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-6 bg-[--lumi-primary] z-20 rounded-b-2xl mx-16" /> {/* Notch */}
          <iframe 
            src="https://lumisync.vercel.app/" 
            className="w-full h-full border-none relative z-10"
            title="Lumisync Live Preview"
          />
        </motion.div>
      </div>
    </section>
  );
}
