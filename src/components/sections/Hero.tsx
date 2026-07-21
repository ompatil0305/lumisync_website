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
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full mb-8"
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

            {/* Balanced Divider Line */}
            <div className="w-full my-6 border-t border-[var(--border)] opacity-60" />

            {/* Stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 w-full mt-4"
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

          {/* Right Column: Multi-Layered Interactive 3D Phone & Red Geometric Crystal Wireframe */}
          <div className="lg:col-span-5 flex items-center justify-center w-full relative py-2">
            <motion.div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: prefersReducedMotion ? 0 : 2,
                rotateX: prefersReducedMotion ? 0 : tilt.x,
                rotateY: prefersReducedMotion ? 0 : tilt.y
              }}
              transition={{ duration: 0.65, delay: 0.3 }}
              style={{
                perspective: 1200,
                transformStyle: "preserve-3d",
              }}
              className="w-full max-w-[290px] relative group cursor-pointer flex flex-col items-center"
            >
              {/* Glowing Red Wireframe Geometric Crystal SVG Backdrop */}
              <div aria-hidden className="absolute -inset-8 flex items-center justify-center pointer-events-none -z-10">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-65 animate-pulse"
                  style={{ filter: "drop-shadow(0 0 16px rgba(204, 0, 0, 0.4))" }}
                >
                  <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="#CC0000" strokeWidth="1" strokeDasharray="3 3" />
                  <polygon points="100,35 155,67 155,133 100,165 45,133 45,67" stroke="#FF3333" strokeWidth="0.75" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#CC0000" strokeWidth="0.5" opacity="0.4" />
                  <line x1="30" y1="60" x2="170" y2="140" stroke="#CC0000" strokeWidth="0.5" opacity="0.4" />
                  <line x1="30" y1="140" x2="170" y2="60" stroke="#CC0000" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>

              {/* Ambient Glow Backdrop */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-[#CC0000]/30 via-red-500/10 to-transparent rounded-[3.5rem] blur-3xl -z-10 group-hover:scale-110 transition-transform duration-500"
              />

              {/* Main Sleek Mobile Device Container */}
              <div
                className="relative overflow-hidden bg-[#09090b] border-[8px] border-[#18181b] shadow-2xl w-full"
                style={{
                  borderRadius: "2.75rem",
                  boxShadow: "0 25px 60px -16px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255,255,255,0.12)",
                  aspectRatio: "9/18",
                }}
              >
                {/* Dynamic Island / Camera Bar */}
                <div className="absolute top-0 inset-x-0 h-5 z-30 flex justify-center items-center pointer-events-none">
                  <div className="w-20 h-3.5 bg-[#18181b] rounded-b-xl flex justify-center items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#09090b]" />
                    <div className="w-6 h-1 rounded-full bg-[#09090b]" />
                  </div>
                </div>

                {/* Real App Screen Screenshot */}
                <img
                  src="/app_home_screenshot.jpg"
                  alt="Lumisync Home Dashboard"
                  className="w-full h-full object-cover object-top"
                />

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-2 inset-x-0 h-4 flex justify-center items-center z-30 pointer-events-none">
                  <div className="w-28 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
