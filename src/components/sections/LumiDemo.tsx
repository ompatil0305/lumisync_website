"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const messages = [
  { role: "user" as const, text: "Where can I get lunch right now?" },
  {
    role: "lumi" as const,
    text: "The Main Dining Hall and Commons Café are both open until 2:30 PM. There's also Einstein's Bagels on the south end. Would you like directions?",
  },
  { role: "user" as const, text: "Directions to Main Dining Hall please" },
  {
    role: "lumi" as const,
    text: "Head north from the Student Union, past the library. Main Dining Hall is the brick building on your left — about a 3-minute walk. 🗺️",
  },
];

const bullets = [
  "Real-time dining hours and menus",
  "Campus map and turn-by-turn directions",
  "Professor schedules and office locations",
  "Upcoming events, deadlines, and more",
];

export default function LumiDemo() {
  const [visibleCount, setVisibleCount] = useState(1);

  const advance = () => {
    if (visibleCount < messages.length) setVisibleCount((v) => v + 1);
  };

  return (
    <section className="section-py" style={{ background: "var(--surface)" }}>
      <div className="section-max px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label mb-4 block">Meet Lumi</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.025em",
                color: "var(--text-primary)",
                lineHeight: 1.1,
              }}
              className="text-4xl sm:text-5xl font-bold mb-5"
            >
              Ask anything about your campus.
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Lumi is your AI campus assistant powered by Google Gemini. It
              knows your dining hours, campus map, professor schedules, events,
              and more — all in natural language.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: "#15803D", marginTop: 2, flexShrink: 0 }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>{b}</span>
                </li>
              ))}
            </ul>

            <Link href="/lumi" className="btn btn-primary">
              Try Lumi Now
            </Link>
          </motion.div>

          {/* Right: Chat Window */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div
              className="card overflow-hidden"
              style={{
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                maxWidth: 480,
                marginLeft: "auto",
              }}
            >
              {/* Chat Header */}
              <div
                style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#1D4ED8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={16} color="#fff" />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Lumi
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#15803D",
                      }}
                    />
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div
                style={{
                  padding: "20px",
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  background: "#FAFAF9",
                }}
              >
                <AnimatePresence>
                  {messages.slice(0, visibleCount).map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: "flex",
                        justifyContent:
                          msg.role === "user" ? "flex-end" : "flex-start",
                      }}
                    >
                      <div
                        style={{
                          maxWidth: "78%",
                          padding: "10px 14px",
                          borderRadius:
                            msg.role === "user"
                              ? "18px 18px 4px 18px"
                              : "18px 18px 18px 4px",
                          background:
                            msg.role === "user" ? "#1D4ED8" : "#fff",
                          color: msg.role === "user" ? "#fff" : "var(--text-primary)",
                          fontSize: "0.875rem",
                          lineHeight: 1.5,
                          border:
                            msg.role === "lumi"
                              ? "1px solid var(--border)"
                              : "none",
                          boxShadow:
                            msg.role === "lumi"
                              ? "0 1px 4px rgba(0,0,0,0.05)"
                              : "none",
                        }}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {visibleCount < messages.length && (
                  <button
                    onClick={advance}
                    className="text-xs self-center mt-2"
                    style={{ color: "var(--text-muted)", cursor: "pointer" }}
                  >
                    Click to continue conversation ↓
                  </button>
                )}
              </div>

              {/* Input Bar */}
              <div
                style={{
                  padding: "12px 16px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  background: "#fff",
                }}
              >
                <input
                  readOnly
                  placeholder="Ask Lumi anything…"
                  className="input flex-1 text-sm"
                  style={{ padding: "10px 14px", fontSize: "0.875rem" }}
                />
                <button
                  onClick={advance}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "#1D4ED8",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <Send size={14} color="#fff" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
