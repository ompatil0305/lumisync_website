"use client";

import { motion } from "framer-motion";

const screens = [
  {
    title: "Home",
    emoji: "🏠",
    color: "from-indigo-600 to-violet-600",
    items: [
      { label: "Good morning, Alex 👋", bold: true },
      { label: "8 dining halls open" },
      { label: "4 events today" },
      { label: "Lumi tip: Dining closes in 30 min!" },
    ],
  },
  {
    title: "Campus Map",
    emoji: "🗺️",
    color: "from-sky-500 to-cyan-500",
    items: [
      { label: "Interactive campus map" },
      { label: "Real-time building info" },
      { label: "Find any room or office" },
      { label: "Route navigation" },
    ],
  },
  {
    title: "Dining",
    emoji: "🍽️",
    color: "from-orange-500 to-amber-500",
    items: [
      { label: "Main Hall: Open ✓", bold: true },
      { label: "Today's special: Salmon Bowl" },
      { label: "Closes at 2:30 PM" },
      { label: "Allergy filters available" },
    ],
  },
  {
    title: "Events",
    emoji: "📅",
    color: "from-rose-500 to-pink-500",
    items: [
      { label: "Career Fair — 10 AM" },
      { label: "Free Pizza Study Break" },
      { label: "Guest Lecture: AI & Society" },
      { label: "Intramural Sign-ups Due" },
    ],
  },
];

export default function AppShowcase() {
  return (
    <section id="showcase" className="py-24 lg:py-32 overflow-hidden">
      <div className="section-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4 border border-indigo-100">
            See It In Action
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Beautiful by design.
            <br />
            <span className="lumi-gradient-text">Fast by nature.</span>
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-xl mx-auto">
            Every screen in Lumisync is crafted for speed and clarity. No
            clutter. No noise. Just your campus, at a glance.
          </p>
        </motion.div>

        {/* App screen cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" as const }}
              className="group"
            >
              {/* Fake phone screen */}
              <div className="relative bg-[#0F172A] rounded-3xl overflow-hidden aspect-[9/16] max-h-[420px] border-[6px] border-[#1E293B] shadow-2xl group-hover:scale-[1.02] transition-transform duration-300">
                {/* Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1E293B] rounded-full z-10" />

                {/* Header gradient */}
                <div className={`absolute top-0 left-0 right-0 h-28 bg-gradient-to-b ${screen.color}`} />

                {/* Content */}
                <div className="absolute inset-0 top-10 px-4 pt-8">
                  <div className="text-white/60 text-[9px] uppercase tracking-widest mb-1">{screen.title}</div>
                  <div className="text-2xl mb-4">{screen.emoji}</div>

                  <div className="space-y-2 mt-6">
                    {screen.items.map((item, j) => (
                      <div
                        key={j}
                        className={`rounded-xl bg-white/10 px-3 py-2 text-white text-[10px] leading-snug ${item.bold ? "font-bold" : "font-normal opacity-80"}`}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom nav bar */}
                <div className="absolute bottom-4 left-4 right-4 h-8 bg-white/10 rounded-2xl flex items-center justify-around px-3">
                  {["🏠", "🧭", "🗺️", "✦", "👤"].map((icon) => (
                    <span key={icon} className="text-[10px]">{icon}</span>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-[--text-primary]">{screen.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
