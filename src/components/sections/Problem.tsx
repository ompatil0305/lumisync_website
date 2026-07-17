"use client";

import { motion } from "framer-motion";
import { Globe, Clock, Bell } from "lucide-react";

const problems = [
  {
    icon: Globe,
    title: "Information is everywhere — and nowhere",
    desc: "Students bounce between 10+ websites and apps just to answer basic questions about campus life.",
  },
  {
    icon: Clock,
    title: "Simple tasks waste precious time",
    desc: "Finding a dining hall, a professor's office, or an available parking spot takes far longer than it should.",
  },
  {
    icon: Bell,
    title: "Opportunities slip through the cracks",
    desc: "Campus events, application deadlines, and student opportunities are buried in emails nobody reads.",
  },
];

export default function Problem() {
  return (
    <section
      className="section-py"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-max px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">The Problem</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
            }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Why students struggle
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8 flex flex-col gap-5"
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#F5F5F4",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} style={{ color: "var(--text-secondary)" }} />
                </div>
                <div>
                  <h3
                    className="font-semibold text-lg mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "20px 36px",
              borderRadius: 999,
              background: "#1D4ED8",
              color: "#fff",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Lumisync brings everything together.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
