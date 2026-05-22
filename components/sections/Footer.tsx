"use client";

import { motion } from "framer-motion";

const LINKS = [
  { label: "GitHub",   href: "https://github.com/TanDuong123" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tanduong" },
  { label: "Resume",   href: "/files/DuongNhutTan_Fullstack_Developer.pdf" },
];

export default function Footer() {
  const monoStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "14px",
    letterSpacing: "0.05em",
    fontWeight: 500,
  } as const;

  return (
    <footer
      className="border-t px-4 sm:px-8 py-10 md:py-16"
      style={{ background: "#020203", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 max-w-7xl mx-auto w-full">
        {/* Left — name + subtitle */}
        <div className="flex flex-col items-center md:items-start">
          <span
            className="text-[#e5e2e3] mb-2"
            style={{ fontSize: "clamp(1.3rem,4vw,48px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            Duong Nhut Tan
          </span>
          <p
            className="text-[#8b90a0] uppercase tracking-widest"
            style={monoStyle}
          >
            Fullstack ERP Specialist
          </p>
        </div>

        {/* Centre — links */}
        <div className="flex gap-8">
          {LINKS.map((l) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[#8b90a0] uppercase tracking-widest transition-colors duration-300"
              style={monoStyle}
              whileHover={{ color: "#00DFD8" }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>

        {/* Right — copyright */}
        <div className="text-center md:text-right">
          <p className="text-[#8b90a0] uppercase tracking-widest" style={monoStyle}>
            © 2025 Built for Performance
          </p>
          <p
            className="mt-1"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "rgba(255,255,255,0.1)" }}
          >
            Nexus Terminal v2.0
          </p>
        </div>
      </div>
    </footer>
  );
}
