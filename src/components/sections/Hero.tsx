"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { SITE_TAGLINE } from "@/config/site";

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
  { label: "AI Engine", value: "Gemini 3.1 Flash-Lite" },
];

function CountUpNumber({ value }: { value: string }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  
  const numMatch = value.match(/[\d.]+/);
  const numVal = numMatch ? parseFloat(numMatch[0]) : 0;
  const isDecimal = numMatch && numMatch[0].includes(".");
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (isDecimal) {
      return latest.toFixed(1);
    }
    return Math.floor(latest).toString();
  });
  
  useEffect(() => {
    if (inView && !prefersReducedMotion && numVal > 0) {
      const controls = animate(count, numVal, {
        duration: 1.5,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [inView, count, numVal, prefersReducedMotion]);

  if (prefersReducedMotion || numVal === 0) {
    return <span ref={ref}>{value}</span>;
  }

  const numStr = numMatch ? numMatch[0] : "";
  const parts = value.split(numStr);
  
  return (
    <span ref={ref}>
      {parts[0]}
      <motion.span>{rounded}</motion.span>
      {parts[1]}
    </span>
  );
}

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
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 0, 0, 0.15) 0%, transparent 80%)`,
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
              <span className="section-label">{SITE_TAGLINE}</span>
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
              Lumisync unifies campus data, including dining, events, maps, parking, faculty,
              and more, into one AI-powered experience built for universities
              worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full"
            >
              <motion.div
                onMouseMove={handleMagMouseMove}
                onMouseLeave={handleMagMouseLeave}
                animate={prefersReducedMotion ? {} : { x: magOffset.x, y: magOffset.y }}
                whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.03, boxShadow: "0 12px 30px -5px rgba(204, 0, 0, 0.3)" }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Link href="/join" className="btn btn-primary btn-lg w-full text-center">
                  Get Early Access
                </Link>
              </motion.div>
              <motion.a
                href="#app-preview"
                whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.03, boxShadow: "0 12px 30px -5px rgba(0, 0, 0, 0.15)" }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="btn btn-secondary btn-lg"
              >
                View the App
              </motion.a>
            </motion.div>

            {/* Part 1 Fix: Clear 40px margin before divider */}
            <div className="w-full mt-16 mb-0 border-t border-border/40" />

            {/* Stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 w-full"
              style={{ paddingTop: "2.5rem" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start gap-0.5">
                  <span
                    className="text-2xl font-bold font-display text-foreground"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <CountUpNumber value={s.value} />
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
              className="w-full max-w-[400px] relative group cursor-pointer"
            >
              {/* Bold glowing shape backdrop */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-[#CC0000]/20 to-transparent rounded-[2.5rem] blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500"
              />

              <img
                src="/app_hero_interactive.png"
                alt="Lumisync Interactive App Preview"
                className="w-full h-auto object-contain"
                style={{
                  filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.3))"
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
