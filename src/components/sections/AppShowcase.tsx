"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Map, Sparkles, Navigation, Users } from "lucide-react";
import SectionHeader from "../SectionHeader";

const tabs = [
  {
    id: "home",
    label: "Home Dashboard",
    icon: Home,
    image: "/app_home_screenshot.jpg",
    desc: "Personalized schedule, weather & quick actions",
  },
  {
    id: "map",
    label: "Campus Map",
    icon: Map,
    image: "/app_map_screenshot.jpg",
    desc: "Building footprints & vector navigation",
  },
  {
    id: "lumi",
    label: "Lumi AI",
    icon: Sparkles,
    image: "/app_chat_screenshot.jpg",
    desc: "Natural language campus assistant & RAG",
  },
  {
    id: "detail",
    label: "Building & Access",
    icon: Navigation,
    image: "/app_map_detail_screenshot.jpg",
    desc: "Restroom, elevator & accessibility details",
  },
  {
    id: "faculty",
    label: "Faculty Directory",
    icon: Users,
    image: "/app_faculty_screenshot.jpg",
    desc: "Office hours, emails & map locations",
  },
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="app-preview" className="section-py relative overflow-hidden" style={{ background: "var(--background)" }}>
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
            title="Every screen. Crafted for modern campus life."
            subtext="Experience real-time navigation, AI support, and campus discovery."
            label="App Preview"
            align="center"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 justify-center">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 w-full lg:w-80 shrink-0"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab.id === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className="w-full text-left transition-all duration-200"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px 20px",
                    borderRadius: 16,
                    border: active
                      ? "1px solid rgba(204, 0, 0, 0.3)"
                      : "1px solid var(--border)",
                    background: active
                      ? "var(--surface-2)"
                      : "var(--surface-1)",
                    boxShadow: active
                      ? "0 4px 20px rgba(0,0,0,0.12)"
                      : "none",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: active ? "rgba(204, 0, 0, 0.12)" : "var(--surface-3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: active ? "#CC0000" : "var(--text-muted)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm font-display"
                      style={{
                        color: active
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                      }}
                    >
                      {tab.label}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)", lineHeight: 1.4 }}
                    >
                      {tab.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Interactive Mobile Device Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative shrink-0 flex items-center justify-center"
          >
            {/* Ambient Backlight Glow */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-[#CC0000]/20 via-transparent to-red-500/10 rounded-[3.5rem] blur-3xl -z-10 transform scale-110" 
            />

            {/* Mobile Phone Shell */}
            <div
              className="relative overflow-hidden bg-[#09090b] border-[10px] border-[#18181b] shadow-2xl"
              style={{
                width: 320,
                height: 660,
                borderRadius: "3.2rem",
                boxShadow: "0 32px 80px -16px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              {/* Top Dynamic Notch / Speaker */}
              <div className="absolute top-0 inset-x-0 h-6 z-30 flex justify-center items-center pointer-events-none">
                <div className="w-24 h-4 bg-[#18181b] rounded-b-xl flex justify-center items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#09090b]" />
                  <div className="w-8 h-1.5 rounded-full bg-[#09090b]" />
                </div>
              </div>

              {/* Screen Image Transition */}
              <div className="w-full h-full relative overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    src={activeTab.image}
                    alt={activeTab.label}
                    className="w-full h-full object-cover object-top"
                  />
                </AnimatePresence>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="absolute bottom-2 inset-x-0 h-4 flex justify-center items-center z-30 pointer-events-none">
                <div className="w-32 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
