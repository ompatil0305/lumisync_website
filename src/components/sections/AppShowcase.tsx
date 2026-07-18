"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Map, Sparkles, Compass, Users } from "lucide-react";

const tabs = [
  {
    id: "home",
    label: "Home Dashboard",
    icon: Home,
    path: "/",
    desc: "Your personalized campus hub at a glance",
  },
  {
    id: "map",
    label: "Campus Map",
    icon: Map,
    path: "/map",
    desc: "Interactive indoor & outdoor navigation",
  },
  {
    id: "lumi",
    label: "Lumi AI",
    icon: Sparkles,
    path: "/lumi",
    desc: "Natural language campus assistant",
  },
  {
    id: "explore",
    label: "Explore",
    icon: Compass,
    path: "/explore",
    desc: "Discover dining, events, jobs and more",
  },
  {
    id: "faculty",
    label: "Faculty",
    icon: Users,
    path: "/faculty",
    desc: "Find professors, offices and office hours",
  },
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="app-preview" className="section-py" style={{ background: "var(--background)" }}>
      <div className="section-max px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 block">Live Preview</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
            }}
            className="text-4xl sm:text-5xl font-bold"
          >
            Every screen. Crafted with care.
          </h2>
          <p
            className="mt-4 text-lg max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore every part of Lumisync live, in real-time.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-10 justify-center">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 w-full lg:w-72 shrink-0"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab.id === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    borderRadius: 12,
                    border: active
                      ? "1px solid var(--border)"
                      : "1px solid transparent",
                    background: active ? "#fff" : "transparent",
                    boxShadow: active
                      ? "0 2px 12px rgba(0,0,0,0.06)"
                      : "none",
                    borderLeft: active
                      ? "3px solid #CC0000"
                      : "3px solid transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: active ? "#FEF2F2" : "#F5F5F4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: active ? "#CC0000" : "#A8A29E" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: active
                          ? "var(--text-primary)"
                          : "var(--text-muted)",
                      }}
                    >
                      {tab.label}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {tab.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Phone Frame */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ flexShrink: 0 }}
          >
            <div
              style={{
                width: 320,
                height: 640,
                borderRadius: "2.5rem",
                border: "10px solid #1C1917",
                background: "#1C1917",
                boxShadow: "0 24px 80px rgba(0,0,0,0.20)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Notch */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 100,
                  height: 24,
                  background: "#1C1917",
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  zIndex: 10,
                }}
              />
              <motion.iframe
                key={activeTab.id}
                src={`https://lumisync.vercel.app${activeTab.path}`}
                title={`Lumisync ${activeTab.label}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
