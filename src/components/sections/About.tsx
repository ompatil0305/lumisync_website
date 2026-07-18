"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section-py" style={{ background: "var(--background)" }}>
      <div className="section-max px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="section-label mb-6 block">Our Story</span>

          {/* Open-quote */}
          <div
            aria-hidden
            style={{
              fontSize: "5rem",
              lineHeight: 0.6,
              color: "#E7E5E4",
              fontFamily: "Georgia, serif",
              marginBottom: 24,
              userSelect: "none",
            }}
          >
            "
          </div>

          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              lineHeight: 1.75,
              color: "var(--text-primary)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Lumisync was built by a student who got tired of navigating 12
            different university websites to find one dining hall's hours.
          </blockquote>

          <p
            className="mt-6 text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            As a <span className="text-[#CC0000] dark:text-[#FF453A] font-semibold">Texas Tech</span> student, I watched classmates struggle daily with
            fragmented campus information, such as missing events because they weren't
            on the right mailing list, wasting 20 minutes hunting for parking,
            or showing up to a professor's office during the wrong hours.
          </p>

          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Lumisync changes that.{" "}
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              One platform. One experience.
            </strong>{" "}
            For every student, at every university.
          </p>

          {/* Byline + Avatar */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <img
              src="/founder_avatar.jpg"
              alt="Om Patil"
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                border: "2px solid #CC0000",
                objectFit: "cover",
              }}
            />
            <p
              className="text-sm font-bold mt-1"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              Om Patil
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Founder, Lumisync · <span className="text-[#CC0000] dark:text-[#FF453A] font-medium">Texas Tech University</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
