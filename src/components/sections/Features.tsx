"use client";

import { motion } from "framer-motion";
import { Map, Utensils, CalendarDays, BriefcaseBusiness, Building2, Sparkles, Bus, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Lumi AI Assistant",
    desc: "Ask Lumi anything about your campus — dining hours, event details, shuttle schedules, or career advice. Powered by Gemini.",
    gradient: "from-indigo-500 to-purple-500",
    badge: "AI-Powered",
  },
  {
    icon: Map,
    title: "Live Campus Map",
    desc: "Navigate your campus with an interactive map featuring real-time building info, walking routes, and points of interest.",
    gradient: "from-sky-500 to-cyan-400",
    badge: "Real-Time",
  },
  {
    icon: Utensils,
    title: "Dining & Menus",
    desc: "Check what's open right now, browse today's menu, see hours, and get alerts when your favorite spot closes soon.",
    gradient: "from-orange-400 to-amber-500",
    badge: "Live Updates",
  },
  {
    icon: CalendarDays,
    title: "Campus Events",
    desc: "Discover lectures, club meetups, career fairs, and social events — personalized to your interests and schedule.",
    gradient: "from-rose-500 to-pink-400",
    badge: "Personalized",
  },
  {
    icon: BriefcaseBusiness,
    title: "Jobs & Internships",
    desc: "Find on-campus jobs, local internships, and research positions — curated for your university.",
    gradient: "from-emerald-500 to-teal-400",
    badge: "Career",
  },
  {
    icon: Building2,
    title: "Building Directory",
    desc: "Find any building, room, or department instantly. Includes accessibility info, hours, and faculty offices.",
    gradient: "from-violet-500 to-indigo-400",
    badge: "Directory",
  },
  {
    icon: Bus,
    title: "Shuttle Tracker",
    desc: "See real-time shuttle positions, estimated arrivals, and route maps — never miss your ride again.",
    gradient: "from-blue-500 to-sky-400",
    badge: "Live Tracking",
  },
  {
    icon: Users,
    title: "Faculty Directory",
    desc: "Search professors and staff by name, department, or research area. Find office hours and contact info instantly.",
    gradient: "from-fuchsia-500 to-pink-500",
    badge: "Directory",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="section-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4 border border-indigo-100">
            Everything You Need
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            One app. Every campus need.
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-xl mx-auto">
            Lumisync replaces a dozen different apps and websites with one
            beautiful, intelligent campus companion.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="feature-card group relative bg-white rounded-2xl border border-[--border] p-6 overflow-hidden cursor-default"
              >
                {/* Subtle gradient bg on hover */}
                <div className="absolute inset-0 lumi-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} mb-4 shadow-lg`}>
                    <Icon size={20} className="text-white" strokeWidth={1.8} />
                  </div>

                  {/* Badge */}
                  <span className="block text-[10px] font-bold text-[--text-muted] uppercase tracking-widest mb-2">
                    {f.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold mb-2 text-[--text-primary]">{f.title}</h3>

                  {/* Desc */}
                  <p className="text-sm text-[--text-secondary] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
