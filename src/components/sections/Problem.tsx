"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, MapPin, Search } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "Information Fragmentation",
    desc: "Dining hours on a PDF, events on social media, bus routes on a separate app. Finding what you need shouldn't be a scavenger hunt.",
  },
  {
    icon: Clock,
    title: "Stale Data",
    desc: "Walking across campus only to find the dining hall closed or the event canceled. Static websites can't keep up with real-time campus life.",
  },
  {
    icon: MapPin,
    title: "Getting Lost",
    desc: "Campus maps are notoriously hard to read. Finding a specific professor's office on the 4th floor of a complex building is unnecessarily hard.",
  },
  {
    icon: AlertCircle,
    title: "Generic Experiences",
    desc: "Most university apps feel like a portal to web links. They aren't personalized, they aren't smart, and they certainly aren't beautiful.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32">
      <div className="section-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Campus life is <span className="text-[--text-muted]">too complex.</span>
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-xl mx-auto">
            Students juggle 4+ apps just to navigate their daily lives. We believe there&apos;s a better way.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="bg-[--surface-2] rounded-3xl p-6 border border-[--border] hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[--surface] shadow-sm flex items-center justify-center text-primary mb-5 border border-[--border]">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[--text-secondary] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
