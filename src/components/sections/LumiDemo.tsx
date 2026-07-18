"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
    text: "Head north from the Student Union, past the library. Main Dining Hall is the brick building on your left, about a 3-minute walk. 🗺️",
  },
];

const bullets = [
  "Real-time dining hours and menus",
  "Campus map and turn-by-turn directions",
  "Professor schedules and office locations",
  "Upcoming events, deadlines, and more",
];

export default function LumiDemo() {
  const prefersReducedMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const rX = -(mouseY / (height / 2)) * 6;
    const rY = (mouseX / (width / 2)) * 6;
    setTilt({ x: rX, y: rY });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const advance = () => {
    if (visibleCount >= messages.length || isTyping) return;

    const nextMsg = messages[visibleCount];
    if (nextMsg.role === "lumi") {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setVisibleCount((v) => v + 1);
      }, 1000);
    } else {
      setVisibleCount((v) => v + 1);
    }
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
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Lumi is your AI campus assistant powered by Google Gemini. It
              knows your dining hours, campus map, professor schedules, events,
              and more, all in natural language.
            </p>

            <div className="flex items-center gap-2 mb-8 bg-[#FAFAF9] dark:bg-stone-900 border border-border/60 rounded-xl px-3 py-2 w-max">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 12.5 7.5 14.5 9.5C16.5 11.5 22 12 22 12C22 12 16.5 12.5 14.5 14.5C12.5 16.5 12 22 12 22C12 22 11.5 16.5 9.5 14.5C7.5 12.5 2 12 2 12C2 12 7.5 11.5 9.5 9.5C11.5 7.5 12 2 12 2Z" fill="url(#gemini-gradient)"/>
                <defs>
                  <linearGradient id="gemini-gradient" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CC0000"/>
                    <stop offset="1" stopColor="#FF453A"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xs font-bold text-stone-700 dark:text-stone-300">Powered by Google Gemini</span>
            </div>

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
            <motion.div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              animate={{
                rotateX: prefersReducedMotion ? 0 : tilt.x,
                rotateY: prefersReducedMotion ? 0 : tilt.y,
              }}
              style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="card overflow-hidden transition-shadow duration-300 hover:shadow-xl"
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
                    background: "#CC0000",
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
                            msg.role === "user" ? "#CC0000" : "#fff",
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

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <div style={{
                      padding: "10px 16px",
                      borderRadius: "18px 18px 18px 4px",
                      background: "#fff",
                      border: "1px solid var(--border)",
                      display: "flex",
                      gap: 5,
                      alignItems: "center"
                    }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}

                {visibleCount < messages.length && (
                  <button
                    onClick={advance}
                    disabled={isTyping}
                    className="text-xs self-center mt-2 disabled:opacity-50"
                    style={{ color: "var(--text-muted)", cursor: isTyping ? "not-allowed" : "pointer" }}
                  >
                    {isTyping ? "Lumi is typing..." : "Click to continue conversation ↓"}
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
                    background: "#CC0000",
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
