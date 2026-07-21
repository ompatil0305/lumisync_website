"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinBeta() {
  return (
    <section
      className="section-py"
      style={{ background: "#1C1917" }}
    >
      <div className="section-max px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Subtle top line accent */}
          <div
            aria-hidden
            style={{
              width: 48,
              height: 3,
              borderRadius: 999,
              background: "#CC0000",
            }}
          />

          <h2
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#FAFAF9",
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-3xl"
          >
            Join the next generation of campus navigation.
          </h2>

          <p
            className="text-lg max-w-md text-center mx-auto"
            style={{ color: "#A8A29E", lineHeight: 1.7 }}
          >
            Be among the first students to experience Lumisync. Early access is
            free.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/join"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 999,
                background: "#FAFAF9",
                color: "#1C1917",
                fontWeight: 600,
                fontSize: "0.95rem",
                fontFamily: "var(--font-display)",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#FAFAF9";
              }}
            >
              Get Early Access
            </Link>

            <Link
              href="/lumi"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "14px 24px",
                borderRadius: 999,
                border: "1px solid #3D3B39",
                background: "transparent",
                color: "#A8A29E",
                fontWeight: 500,
                fontSize: "0.95rem",
                fontFamily: "var(--font-display)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#6B6966";
                el.style.color = "#FAFAF9";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#3D3B39";
                el.style.color = "#A8A29E";
              }}
            >
              Learn more about Lumi →
            </Link>
          </div>

          {/* Fine print */}
          <p
            className="text-xs"
            style={{ color: "#6B6966", letterSpacing: "0.02em" }}
          >
            Currently available at Texas Tech University · More universities
            coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
