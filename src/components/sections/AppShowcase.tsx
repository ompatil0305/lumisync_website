"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Home, Map, Compass, Sparkles } from "lucide-react";

const tabs = [
  { id: "home", title: "Home", path: "/", icon: Home, desc: "Your daily brief, tailored to you." },
  { id: "explore", title: "Explore", path: "/explore", icon: Compass, desc: "Discover dining, events, and parking." },
  { id: "map", title: "Campus Map", path: "/map", icon: Map, desc: "Never get lost on campus again." },
  { id: "lumi", title: "Lumi AI", path: "/lumi", icon: Sparkles, desc: "Your personal campus assistant." },
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="showcase" className="py-24 lg:py-32 overflow-hidden bg-[--surface-2]">
      <div className="section-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1.5 rounded-full bg-[--surface] text-[--text-secondary] text-xs font-semibold mb-4 border border-[--border] shadow-sm tracking-widest uppercase">
            Live Preview
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[--text-primary] tracking-tight">
            Beautifully designed.
            <br className="hidden sm:block" />
            <span className="text-[--text-muted]"> Functional by nature.</span>
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-xl mx-auto mt-4">
            Experience the real Lumisync application below. No mockups, no fictional interfaces. Just the tools you need, beautifully executed.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Tabs */}
          <div className="flex-1 flex flex-col gap-4 w-full max-w-md">
            {tabs.map((tab) => {
              const isActive = activeTab.id === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-5 p-5 rounded-2xl transition-all text-left w-full border ${
                    isActive
                      ? "bg-[--surface] border-[--border] shadow-lg scale-[1.02]"
                      : "bg-transparent border-transparent hover:bg-[--surface]/50 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className={`p-3 rounded-xl transition-colors ${isActive ? "bg-[--lumi-primary] text-white" : "bg-[--border] text-[--text-secondary]"}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors ${isActive ? "text-[--text-primary]" : "text-[--text-secondary]"}`}>
                      {tab.title}
                    </h3>
                    <p className="text-sm text-[--text-muted] mt-1">{tab.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Phone Iframe */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-[320px] h-[640px] rounded-[3rem] border-[12px] border-[--lumi-primary] bg-[--surface] shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-6 bg-[--lumi-primary] z-20 rounded-b-2xl mx-16" /> {/* Notch */}
              <iframe
                src={`https://lumisync.vercel.app${activeTab.path}`}
                className="w-full h-full border-none relative z-10"
                title={`${activeTab.title} Preview`}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
