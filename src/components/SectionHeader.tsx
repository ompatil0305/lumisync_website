import React from "react";

interface SectionHeaderProps {
  title: string;
  subtext?: string;
  label?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  title,
  subtext,
  label,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  
  return (
    <div className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {label && <span className="section-label mb-4">{label}</span>}
      <h2 className="text-3xl font-bold font-display text-stone-900 dark:text-stone-50 leading-tight">
        {title}
      </h2>
      {subtext && (
        <p className={`text-stone-500 dark:text-stone-400 mt-3 text-sm max-w-xl ${isCenter ? "mx-auto text-center" : "mr-auto text-left"}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
