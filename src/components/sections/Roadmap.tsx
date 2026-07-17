"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ListTodo, Lightbulb } from "lucide-react";

type Phase = {
  status: "launched" | "in-progress" | "planned" | "future";
  label: string;
  date: string;
  icon: typeof CheckCircle2;
  items: string[];
};

const phases: Phase[] = [
  {
    status: "launched",
    label: "Launched",
    date: "2025",
    icon: CheckCircle2,
    items: [
      "Campus Map (indoor + outdoor)",
      "Lumi AI (Gemini-powered assistant)",
      "Dining halls — hours & menus",
      "Events calendar",
      "On-campus Jobs board",
      "Faculty directory",
    ],
  },
  {
    status: "in-progress",
    label: "In Progress",
    date: "Q2–Q3 2025",
    icon: Loader2,
    items: [
      "Advanced Lumi AI (memory + context)",
      "Campus shuttle real-time tracking",
      "Mobile app — Android & iOS",
    ],
  },
  {
    status: "planned",
    label: "Planned",
    date: "Q3 2025",
    icon: ListTodo,
    items: [
      "Student organizations directory",
      "SSO login (university accounts)",
      "Multi-university support",
    ],
  },
  {
    status: "future",
    label: "Future",
    date: "2026+",
    icon: Lightbulb,
    items: [
      "Research discovery engine",
      "Alumni network integration",
      "Enterprise dashboard for universities",
      "Global expansion",
    ],
  },
];

const statusStyles: Record<Phase["status"], { dot: string; badge: string; text: string }> = {
  launched: {
    dot: "#15803D",
    badge: "rgba(21,128,61,0.1)",
    text: "#15803D",
  },
  "in-progress": {
    dot: "#1D4ED8",
    badge: "rgba(29,78,216,0.1)",
    text: "#1D4ED8",
  },
  planned: {
    dot: "#B48F2A",
    badge: "rgba(180,143,42,0.1)",
    text: "#B48F2A",
  },
  future: {
    dot: "#A8A29E",
    badge: "rgba(168,162,158,0.1)",
    text: "#57534E",
  },
};

export default function Roadmap() {
  return (
    <section className="section-py" style={{ background: "var(--surface)" }}>
      <div className="section-max px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Roadmap</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
            }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Built in the open. Growing fast.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 2,
              background: "var(--border)",
              marginLeft: 19,
            }}
          />

          <div className="flex flex-col gap-10">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              const s = statusStyles[phase.status];
              return (
                <motion.div
                  key={phase.status}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-8 items-start"
                  style={{ paddingLeft: 52 }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: 6,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: s.badge,
                      border: `2px solid ${s.dot}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 16,
                    }}
                  >
                    <Icon size={12} style={{ color: s.dot }} />
                  </div>

                  {/* Card */}
                  <div className="card p-6 flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: s.text,
                          background: s.badge,
                          padding: "3px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {phase.label}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {phase.date}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {phase.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              background: s.dot,
                              flexShrink: 0,
                              marginTop: 7,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
