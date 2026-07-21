"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const LumiAIIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 12.5 7.5 14.5 9.5C16.5 11.5 22 12 22 12C22 12 16.5 12.5 14.5 14.5C12.5 16.5 12 22 12 22C12 22 11.5 16.5 9.5 14.5C7.5 12.5 2 12 2 12C2 12 7.5 11.5 9.5 9.5C11.5 7.5 12 2 12 2Z" fill="var(--lumi-primary-hex, #CC0000)"/>
  </svg>
);

const CampusMapIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5.5L9 3L15 5.5L21 3V18.5L15 21L9 18.5L3 21V5.5Z" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 3V18.5" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 5.5V21" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DiningIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V22" stroke="#B48F2A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M17 5V13C17 14.5 16 15 14.5 15H12" stroke="#B48F2A" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M7 5V11C7 12 8 13 9.5 13H12" stroke="#B48F2A" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 15V22" stroke="#B48F2A" strokeWidth="2"/>
  </svg>
);

const ParkingIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="#57534E" strokeWidth="2"/>
    <path d="M9 17V7H12.5C13.88 7 15 8.12 15 9.5C15 10.88 13.88 12 12.5 12H9" stroke="#57534E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EventsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="17" rx="3" stroke="#15803D" strokeWidth="2"/>
    <path d="M16 2V6" stroke="#15803D" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 2V6" stroke="#15803D" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 10H21" stroke="#15803D" strokeWidth="2"/>
    <circle cx="8" cy="14" r="1.5" fill="#15803D"/>
    <circle cx="16" cy="14" r="1.5" fill="#15803D"/>
  </svg>
);

const FacultyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#57534E" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="#57534E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="#57534E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const JobsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="#B48F2A" strokeWidth="2"/>
    <path d="M16 7V5C16 3.89 15.11 3 14 3H10C8.89 3 8 3.89 8 5V7" stroke="#B48F2A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 11V15" stroke="#B48F2A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const OrganizationsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="var(--lumi-primary-hex, #CC0000)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="11" r="3" stroke="var(--lumi-primary-hex, #CC0000)" strokeWidth="2"/>
  </svg>
);

const ShuttleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="16" height="15" rx="3" stroke="#15803D" strokeWidth="2"/>
    <circle cx="8" cy="14" r="2" stroke="#15803D" strokeWidth="2"/>
    <circle cx="16" cy="14" r="2" stroke="#15803D" strokeWidth="2"/>
    <path d="M4 10H20" stroke="#15803D" strokeWidth="2"/>
  </svg>
);

const features = [
  {
    icon: LumiAIIcon,
    name: "Lumi AI",
    desc: "Natural language campus assistant powered by Gemini",
    wide: true,
    tall: false,
    accent: "#CC0000",
  },
  {
    icon: CampusMapIcon,
    name: "Campus Map",
    desc: "Interactive indoor/outdoor navigation",
    wide: false,
    tall: true,
    accent: "#15803D",
  },
  {
    icon: DiningIcon,
    name: "Dining",
    desc: "Real-time dining hours, menus, and availability",
    wide: false,
    tall: false,
    accent: "#B48F2A",
  },
  {
    icon: ParkingIcon,
    name: "Parking",
    desc: "Find available lots and navigate to them",
    wide: false,
    tall: false,
    accent: "#57534E",
  },
  {
    icon: EventsIcon,
    name: "Events",
    desc: "Never miss a campus event or deadline",
    wide: false,
    tall: false,
    accent: "#15803D",
  },
  {
    icon: FacultyIcon,
    name: "Faculty",
    desc: "Find any professor's office, hours, and contact",
    wide: true,
    tall: false,
    accent: "#57534E",
  },
  {
    icon: JobsIcon,
    name: "Jobs",
    desc: "On-campus jobs and work-study opportunities",
    wide: false,
    tall: false,
    accent: "#B48F2A",
  },
  {
    icon: OrganizationsIcon,
    name: "Organizations",
    desc: "Discover student clubs and organizations",
    wide: false,
    tall: false,
    accent: "#CC0000",
  },
  {
    icon: ShuttleIcon,
    name: "Shuttle",
    desc: "Real-time shuttle tracking and schedules",
    wide: false,
    tall: false,
    accent: "#15803D",
  },
];

export default function Features() {
  return (
    <section className="section-py" style={{ background: "var(--background)" }}>
      <div className="section-max px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <SectionHeader
            title="Everything campus, unified."
            subtext="Nine powerful modules. One seamless experience."
            label="Features"
            align="center"
          />
        </motion.div>

        {/* Bento Grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gridAutoRows: "160px",
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card p-6 flex flex-col justify-between group cursor-default shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{
                  gridColumn: f.wide ? "span 2" : "span 1",
                  gridRow: f.tall ? "span 2" : "span 1",
                  minHeight: f.tall ? 332 : 160,
                }}
              >
                {/* Icon Wrapper */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#F5F5F4",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                >
                  <Icon />
                </div>

                {/* Text */}
                <div>
                  <p
                    className="font-semibold text-base mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {f.name}
                  </p>
                  <p
                    className="text-sm leading-snug"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
