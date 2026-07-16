"use client";

import { motion } from "framer-motion";
import { CheckCircle, Circle, Zap } from "lucide-react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "done",
    quarter: "Q2 2025",
    items: [
      "Core app architecture (React + Vite + FastAPI)",
      "Campus map with Leaflet + building data",
      "Dining, events, parking integrations",
      "Faculty & building directory",
    ],
  },
  {
    phase: "Phase 2",
    title: "AI Layer",
    status: "active",
    quarter: "Q3 2025",
    items: [
      "Lumi AI assistant (Gemini + RAG pipeline)",
      "Contextual campus knowledge base",
      "Natural language campus Q&A",
      "Push notifications for dining & events",
    ],
  },
  {
    phase: "Phase 3",
    title: "University Rollout",
    status: "upcoming",
    quarter: "Q4 2025",
    items: [
      "University partner integrations",
      "Custom branding per institution",
      "Admin dashboard for campus teams",
      "SSO / university login support",
    ],
  },
  {
    phase: "Phase 4",
    title: "Scale & Expand",
    status: "upcoming",
    quarter: "2026",
    items: [
      "Multi-university platform",
      "Student community features",
      "Course & GPA tools",
      "iOS & Android native apps",
    ],
  },
];

const statusConfig = {
  done: { label: "Completed", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100", icon: CheckCircle },
  active: { label: "In Progress", color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100", icon: Zap },
  upcoming: { label: "Upcoming", color: "text-[--text-muted]", bg: "bg-[--surface-2] border-[--border]", icon: Circle },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-[--surface-2]">
      <div className="section-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4 border border-indigo-100">
            What&apos;s Next
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Building in public.
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-xl mx-auto">
            Lumisync is growing fast. Here&apos;s what we&apos;ve shipped, what
            we&apos;re building now, and where we&apos;re headed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roadmap.map((item, i) => {
            const cfg = statusConfig[item.status as keyof typeof statusConfig];
            const StatusIcon = cfg.icon;
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" as const }}
                className="bg-white rounded-2xl border border-[--border] p-6 relative overflow-hidden"
              >
                {/* Active glow */}
                {item.status === "active" && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 lumi-gradient" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[--text-muted] uppercase tracking-widest">{item.phase}</span>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-semibold ${cfg.bg} ${cfg.color}`}>
                    <StatusIcon size={12} />
                    {cfg.label}
                  </span>
                </div>

                <h3 className="text-lg font-black mb-1">{item.title}</h3>
                <p className="text-xs text-[--text-muted] mb-4">{item.quarter}</p>

                <ul className="space-y-2.5">
                  {item.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-[--text-secondary]">
                      <span className={`mt-0.5 flex-shrink-0 ${item.status === "done" ? "text-emerald-500" : item.status === "active" ? "text-indigo-500" : "text-[--text-muted]"}`}>
                        {item.status === "done" ? "✓" : "·"}
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
