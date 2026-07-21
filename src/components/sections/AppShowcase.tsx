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
    image: "/app_dining_screenshot.jpg",
    desc: "Discover dining, events, jobs and more",
  },
  {
    id: "faculty",
    label: "Faculty",
    icon: Users,
    image: "/app_faculty_screenshot.jpg",
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
            subtext="Explore every screen of Lumisync."
            label="App Preview"
            align="center"
          />
        </motion.div>

        <div className="w-full max-w-5xl mx-auto flex justify-center mt-10">
          <motion.img
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            src="/app_showcase_new.png"
            alt="App Showcase Screens"
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
