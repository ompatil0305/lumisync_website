"use client";

import { motion } from "framer-motion";
import { Sparkles, Send } from "lucide-react";
import { useState } from "react";

const DEMO_MESSAGES = [
  { role: "user", text: "What's open for lunch right now?" },
  { role: "lumi", text: "Right now, the Main Dining Hall, Commons Café, and Einstein's Bagels are all open. The dining hall closes at 2:30 PM — you have 45 minutes. Want me to show you the menu?" },
  { role: "user", text: "Yes! What's the best option today?" },
  { role: "lumi", text: "Based on today's menu, I'd recommend the Grilled Salmon Bowl at the Main Dining Hall — it's highly rated. Commons Café also has a great Caprese Panini if you prefer something lighter. 🍽️" },
];

export default function LumiDemo() {
  const [step, setStep] = useState(0);

  const visible = DEMO_MESSAGES.slice(0, step + 1);

  return (
    <section id="lumi" className="py-24 lg:py-32 bg-[--surface-2]">
      <div className="section-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[--surface-2] border border-[--border] text-[--text-secondary] text-xs font-semibold mb-5 shadow-sm tracking-widest uppercase">
              <Sparkles size={12} className="text-[--lumi-accent]" />
              Meet Lumi
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight text-[--text-primary]">
              Your campus
              <br />
              <span className="text-[--text-muted]">AI assistant.</span>
            </h2>
            <p className="text-lg text-[--text-secondary] leading-relaxed mb-8">
              Lumi knows your campus inside out. Ask it anything — dining hours,
              shuttle ETAs, event details, or where to find your professor.
              Powered by Gemini, with real-time campus data.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Answers in natural language, not search results",
                "Connected to live dining, events, and map data",
                "Gets smarter the more your campus uses it",
                "Available 24/7 — even during finals week",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[--text-secondary]">
                  <span className="w-5 h-5 rounded-full bg-[--lumi-primary] flex-shrink-0 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5L4 7.5L8 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#join"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[--lumi-primary] text-white font-medium hover:bg-[--lumi-primary-hover] transition-all"
            >
              Get Early Access
            </a>
          </motion.div>

          {/* Right: chat demo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="relative"
          >
            {/* Chat card */}
            <div className="bg-[--surface] rounded-3xl border border-[--border] shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-[--border] flex items-center gap-3 bg-[--background]">
                <div className="w-9 h-9 rounded-xl bg-[--lumi-primary] flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[--text-primary]">Lumi</div>
                  <div className="text-xs text-[--text-muted] flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Online • Knows your campus
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[280px]">
                {visible.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[--lumi-primary] text-white rounded-br-sm shadow-sm"
                          : "bg-[--surface-2] text-[--text-primary] rounded-bl-sm border border-[--border]"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-3 bg-[--surface-2] border border-[--border] rounded-2xl px-4 py-3">
                  <span className="text-sm text-[--text-muted] flex-1">Ask Lumi anything…</span>
                  <button
                    id="lumi-demo-btn"
                    onClick={() => setStep((s) => Math.min(s + 1, DEMO_MESSAGES.length - 1))}
                    disabled={step >= DEMO_MESSAGES.length - 1}
                    className="w-9 h-9 rounded-full bg-[--lumi-primary] flex items-center justify-center disabled:opacity-40 transition-opacity"
                    aria-label="Send demo message"
                  >
                    <Send size={14} className="text-white -ml-0.5" />
                  </button>
                </div>
                <p className="text-center text-xs text-[--text-muted] mt-3">
                  Click send ↑ to play the demo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
