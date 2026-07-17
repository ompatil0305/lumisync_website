"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { label: "Features", value: "15+" },
  { label: "University", value: "1" },
  { label: "Powered by", value: "Gemini AI" },
];

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center text-center overflow-hidden"
      style={{
        background: "var(--background)",
        paddingTop: "clamp(6rem, 14vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 7rem)",
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(29,78,216,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="section-max relative z-10 flex flex-col items-center gap-8 px-6">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <span className="section-label">AI-Powered Campus Operating System</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "var(--text-primary)",
          }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold max-w-4xl"
        >
          The intelligence layer for modern universities.
        </motion.h1>

        {/* Sub */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-lg max-w-xl"
          style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
        >
          Lumisync unifies campus data — dining, events, maps, parking, faculty,
          and more — into one AI-powered experience built for universities
          worldwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/join" className="btn btn-primary btn-lg">
            Get Early Access
          </Link>
          <a href="#app-preview" className="btn btn-secondary btn-lg">
            See It Live
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-8 mt-2"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <span
                className="text-2xl font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--text-primary)",
                }}
              >
                {s.value}
              </span>
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Device Frame */}
        <motion.div
          id="app-preview"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 relative"
          style={{ width: 340, maxWidth: "100%" }}
        >
          <div
            style={{
              borderRadius: "2.5rem",
              border: "10px solid #1C1917",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08)",
              background: "#1C1917",
              overflow: "hidden",
              width: "100%",
              aspectRatio: "9/19",
              position: "relative",
            }}
          >
            {/* Notch */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: 120,
                height: 28,
                background: "#1C1917",
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                zIndex: 10,
              }}
            />
            <iframe
              src="https://lumisync.vercel.app/"
              title="Lumisync Live Preview"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
              loading="lazy"
            />
          </div>

          {/* Shadow reflection */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: -32,
              left: "50%",
              transform: "translateX(-50%)",
              width: "70%",
              height: 32,
              background:
                "radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 80%)",
              filter: "blur(8px)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
