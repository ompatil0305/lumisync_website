"use client";

import { motion } from "framer-motion";
import {
  Map,
  Sparkles,
  Utensils,
  Car,
  Calendar,
  Users,
  Briefcase,
  Building2,
  Bus,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    name: "Lumi AI",
    desc: "Natural language campus assistant powered by Gemini",
    wide: true,
    tall: false,
    accent: "#1D4ED8",
  },
  {
    icon: Map,
    name: "Campus Map",
    desc: "Interactive indoor/outdoor navigation",
    wide: false,
    tall: true,
    accent: "#15803D",
  },
  {
    icon: Utensils,
    name: "Dining",
    desc: "Real-time dining hours, menus, and availability",
    wide: false,
    tall: false,
    accent: "#B48F2A",
  },
  {
    icon: Car,
    name: "Parking",
    desc: "Find available lots and navigate to them",
    wide: false,
    tall: false,
    accent: "#57534E",
  },
  {
    icon: Calendar,
    name: "Events",
    desc: "Never miss a campus event or deadline",
    wide: false,
    tall: false,
    accent: "#15803D",
  },
  {
    icon: Users,
    name: "Faculty",
    desc: "Find any professor's office, hours, and contact",
    wide: true,
    tall: false,
    accent: "#57534E",
  },
  {
    icon: Briefcase,
    name: "Jobs",
    desc: "On-campus jobs and work-study opportunities",
    wide: false,
    tall: false,
    accent: "#B48F2A",
  },
  {
    icon: Building2,
    name: "Organizations",
    desc: "Discover student clubs and organizations",
    wide: false,
    tall: false,
    accent: "#1D4ED8",
  },
  {
    icon: Bus,
    name: "Shuttle",
    desc: "Real-time shuttle tracking and schedules",
    wide: false,
    tall: false,
    accent: "#15803D",
  },
];

export default function Features() {
  return (
    <section className="section-py" style={{ background: "var(--background)" }}>
      <div className="section-max px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 block">Features</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
            }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Everything campus, unified.
          </h2>
          <p
            className="mt-4 text-lg max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Nine powerful modules. One seamless experience.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gridAutoRows: "160px",
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card p-6 flex flex-col justify-between group cursor-default"
                style={{
                  gridColumn: f.wide ? "span 2" : "span 1",
                  gridRow: f.tall ? "span 2" : "span 1",
                  minHeight: f.tall ? 332 : 160,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#F5F5F4",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                >
                  <Icon size={18} style={{ color: f.accent }} />
                </div>

                {/* Text */}
                <div>
                  <p
                    className="font-semibold text-base mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {f.name}
                  </p>
                  <p
                    className="text-sm leading-snug"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
