interface LogoProps {
  size?: number;
  variant?: "full" | "icon";
  className?: string;
  light?: boolean;
}

export default function Logo({
  size = 32,
  variant = "full",
  className = "",
  light = false,
}: LogoProps) {
  const blueColor = "rgb(var(--lumi-primary, 204 0 0))";
  const stoneColor = light ? "var(--background)" : "var(--text-primary)";

  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="20" cy="20" r="18" stroke={stoneColor} strokeWidth="3" opacity={light ? 0.3 : 0.15} />
      
      {/* Dynamic interlocking orbits */}
      <path
        d="M20 5A15 15 0 0 1 35 20"
        stroke={blueColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 35A15 15 0 0 1 5 20"
        stroke={blueColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Center core */}
      <circle cx="20" cy="20" r="5" fill={stoneColor} />
    </svg>
  );

  if (variant === "icon") return <span className={className}>{icon}</span>;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {icon}
      <span
        style={{
          fontSize: size * 0.65,
          lineHeight: 1,
          fontFamily: "var(--font-display, Outfit), sans-serif",
          fontWeight: 700,
          letterSpacing: "-0.03em",
        }}
        className={light ? "text-[var(--text-inverse)]" : "text-[var(--text-primary)] dark:text-stone-50"}
      >
        Lumisync
      </span>
    </span>
  );
}
