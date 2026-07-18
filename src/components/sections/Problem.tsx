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
      className="section-py border-b border-[--border]"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-max px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Heading & Problem Cards List */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="section-label mb-4 block">The Problem</span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.025em",
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                }}
                className="text-4xl sm:text-5xl font-bold"
              >
                Why students struggle
              </h2>
              <p className="text-sm text-stone-500 mt-2">
                University information systems are fragmented and outdated.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {problems.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="card p-6 flex gap-5 items-start shadow-sm border border-border/50"
                  >
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
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Icon size={18} style={{ color: "var(--text-secondary)" }} />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base mb-1"
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
          </div>

          {/* Right: Real Campus Photography Visual */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border/40 group cursor-default"
            >
              {/* Image */}
              <div
                style={{
                  backgroundImage: "url('/campus_bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
                className="group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold text-[#CC0000] uppercase tracking-widest mb-1">Campus Grounding</span>
                <p className="text-white text-sm font-semibold">Bridging the gap between physical campus spaces and digital systems.</p>
              </div>
            </motion.div>

            {/* Solution Statement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full text-center"
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  padding: "16px 28px",
                  borderRadius: 999,
                  background: "#CC0000",
                  color: "#fff",
                  boxShadow: "0 10px 30px rgba(204, 0, 0, 0.15)",
                }}
                className="w-full sm:w-auto"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Lumisync brings everything together.
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
