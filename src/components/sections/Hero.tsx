"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { label: "Modules Shipped", value: "9" },
  { label: "First Campus", value: "Texas Tech" },
  { label: "AI Engine", value: "Gemini 2.5" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Spotlight effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic button offset
  const [magOffset, setMagOffset] = useState({ x: 0, y: 0 });

  // 3D Card tilt offset
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Max tilt: 8 degrees
    const rX = -(mouseY / (height / 2)) * 8;
    const rY = (mouseX / (width / 2)) * 8;
    setTilt({ x: rX, y: rY });
  };

  const handleCardMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleMagMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const mouseX = e.clientX - (rect.left + rect.width / 2);
    const mouseY = e.clientY - (rect.top + rect.height / 2);
    setMagOffset({ x: mouseX * 0.35, y: mouseY * 0.35 });
  };

  const handleMagMouseLeave = () => {
    setMagOffset({ x: 0, y: 0 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "var(--background)",
        paddingTop: "clamp(7rem, 15vw, 11rem)",
        paddingBottom: "clamp(6rem, 12vw, 9rem)",
      }}
    >
      {/* Spotlight overlay (follows cursor) */}
      {!prefersReducedMotion && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 0, 0, 0.05) 0%, transparent 80%)`,
            zIndex: 1,
          }}
        />
      )}

      {/* Global subtle radial fallback */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(204,0,0,0.06) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div className="section-max relative z-10 w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mb-4"
            >
              <span className="section-label">AI-Powered Campus Operating System</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--text-primary)",
              }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
            >
              The intelligence layer for modern universities.
            </motion.h1>

            {/* Sub */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="text-lg max-w-xl mb-8"
              style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
            >
              Lumisync unifies campus data — dining, events, maps, parking, faculty,
              and more — into one AI-powered experience built for universities
              worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full"
            >
              <motion.div
                onMouseMove={handleMagMouseMove}
                onMouseLeave={handleMagMouseLeave}
                animate={prefersReducedMotion ? {} : { x: magOffset.x, y: magOffset.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              >
                <Link href="/join" className="btn btn-primary btn-lg shadow-lg shadow-[#CC0000]/15">
                  Get Early Access
                </Link>
              </motion.div>
              <a href="#app-preview" className="btn btn-secondary btn-lg">
                See It Live
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 w-full pt-4 border-t border-border/40"
            >
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start gap-0.5">
                  <span
                    className="text-2xl font-bold font-display text-foreground"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Angled Product Card (Asymmetric visual element) */}
          <div className="lg:col-span-5 flex items-center justify-center w-full relative">
            <motion.div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: prefersReducedMotion ? 0 : 3,
                rotateX: prefersReducedMotion ? 0 : tilt.x,
                rotateY: prefersReducedMotion ? 0 : tilt.y
              }}
              transition={{ duration: 0.65, delay: 0.4 }}
              style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
              className="w-full max-w-[340px] aspect-[3/4] relative group cursor-pointer"
            >
              {/* Bold glowing shape backdrop */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-[#CC0000]/10 to-transparent rounded-[2.5rem] blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500"
              />

              <div
                style={{
                  borderRadius: "2.5rem",
                  border: "10px solid #1C1917",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08)",
                  background: "#1C1917",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  backgroundImage: "url('/app_hero_mockup.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold text-[#CC0000] uppercase tracking-widest mb-1.5">Lumisync App</span>
                  <h3 className="text-white text-lg font-bold font-display leading-snug">Synced to Texas Tech University</h3>
                  <p className="text-stone-300 text-xs mt-1">Live routing, Gemini Chat threads, and menus.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
