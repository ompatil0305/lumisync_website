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
  const gradId = `logo-g-${Math.random().toString(36).slice(2, 6)}`;

  const icon = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgb(79,70,229)" />
          <stop offset="100%" stopColor="rgb(14,165,233)" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="19" fill={light ? "rgba(255,255,255,0.12)" : "rgba(79,70,229,0.1)"} />
      <path d="M10 20 A10 10 0 0 1 20 10" stroke={`url(#${gradId})`} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <path d="M30 20 A10 10 0 0 1 20 30" stroke={`url(#${gradId})`} strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="20" r="4.5" fill={`url(#${gradId})`} />
      <line x1="20" y1="7" x2="20" y2="12" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="28" x2="20" y2="33" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="20" x2="12" y2="20" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="20" x2="33" y2="20" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  if (variant === "icon") return <span className={className}>{icon}</span>;

  const textColor = light ? "text-white" : "";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {icon}
      <span
        style={{
          fontSize: size * 0.625,
          lineHeight: 1,
          fontFamily: "var(--font-display, Outfit), sans-serif",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
        className={light ? textColor : "lumi-gradient-text"}
      >
        Lumisync
      </span>
    </span>
  );
}
