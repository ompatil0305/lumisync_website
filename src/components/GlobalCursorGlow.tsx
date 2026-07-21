"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export default function GlobalCursorGlow() {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Check if device supports hover and fine pointer
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;
    if (!hasFinePointer || !canHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion, isVisible]);

  if (prefersReducedMotion || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(204, 0, 0, 0.12) 0%, transparent 80%)`,
      }}
    />
  );
}
