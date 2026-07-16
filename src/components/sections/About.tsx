"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "App Screens" },
  { value: "AI", label: "Gemini Powered" },
  { value: "∞", label: "Universities Supported" },
  { value: "24/7", label: "Lumi Online" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="section-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: story */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-5 border border-indigo-100">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              Built by students,
              <br />
              <span className="lumi-gradient-text">for every student.</span>
            </h2>
            <div className="space-y-4 text-[--text-secondary] leading-relaxed">
              <p>
                Lumisync started from a simple frustration: why do students need
                five different apps, three websites, and a posted schedule to
                figure out what&apos;s open for lunch?
              </p>
              <p>
                We believe your campus experience should be seamless, smart, and
                personal. So we built Lumisync — a single intelligent platform
                that knows your campus as well as you do.
              </p>
              <p>
                Designed to work at any university, anywhere in the world.
                Premium experience. Zero university lock-in.
              </p>
            </div>
          </motion.div>

          {/* Right: stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="stat-card p-8 text-center"
              >
                <div className="text-4xl font-black lumi-gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-[--text-secondary] font-medium">{stat.label}</div>
              </motion.div>
            ))}

            {/* Mission card — spans 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="col-span-2 rounded-2xl p-6 lumi-gradient text-white text-center"
            >
              <p className="text-lg font-bold leading-snug">
                &ldquo;Every student deserves a campus that works as hard as they do.&rdquo;
              </p>
              <p className="text-sm opacity-75 mt-2">— The Lumisync Team</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
