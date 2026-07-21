"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Map, Sparkles, Compass, Users } from "lucide-react";
import SectionHeader from "../SectionHeader";

const tabs = [
  {
    id: "home",
    label: "Home Dashboard",
    icon: Home,
    image: "/app_home_screenshot.jpg",
    desc: "Your personalized campus hub at a glance",
  },
  {
    id: "map",
    label: "Campus Map",
    icon: Map,
    image: "/app_map_screenshot.jpg",
    desc: "Interactive indoor & outdoor navigation",
  },
  {
    id: "lumi",
    label: "Lumi AI",
    icon: Sparkles,
    image: "/app_chat_screenshot.jpg",
    desc: "Natural language campus assistant",
  },
  {
    id: "explore",
    label: "Explore",
    icon: Compass,
    image: "/app_home_screenshot.jpg",
    desc: "Discover dining, events, jobs and more",
  },
  {
    id: "faculty",
    label: "Faculty",
    icon: Users,
    image: "/app_chat_screenshot.jpg",
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
          className="mb-14"
        >
          <SectionHeader
            title="Every screen. Crafted with care."
            subtext="Explore every part of Lumisync live, in real-time."
            label="Live Preview"
            align="center"
          />
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
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${activeTab.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
