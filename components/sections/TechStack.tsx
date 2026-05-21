"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Monitor, Terminal, Database, Server } from "lucide-react";
import { staggerContainer, fadeUp, viewportSettings } from "@/lib/animations";

const CATEGORIES = [
  {
    Icon: Monitor,
    iconColor: "#00DFD8",
    label: "Frontend",
    techs: ["JavaScript", "TypeScript", "Angular", "HTML5 / CSS3", "SCSS"],
  },
  {
    Icon: Terminal,
    iconColor: "#BD00FF",
    label: "Backend",
    techs: ["Laravel 10.x", "PHP 8.2", "RESTful API", "FastAPI"],
  },
  {
    Icon: Database,
    iconColor: "#facc15",
    label: "Data",
    techs: ["MySQL", "Query Optimization", "DB Design", "Eloquent ORM"],
  },
  {
    Icon: Server,
    iconColor: "#4ade80",
    label: "DevOps",
    techs: ["GitHub", "Linux", "Apache", "LAMP Stack", "Swagger"],
  },
];

function TiltCard({ cat }: { cat: (typeof CATEGORIES)[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleTilt = (e: React.MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = (y - cy) / 10;
    const rotY = (cx - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.04,1.04,1.04)`;
  };

  const resetTilt = () => {
    if (ref.current)
      ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)";
  };

  return (
    <div
      ref={ref}
      className="tilt-card glass-card p-5 sm:p-6 md:p-8 rounded-2xl transition-all duration-200"
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
    >
      <cat.Icon size={36} style={{ color: cat.iconColor }} className="mb-4" />
      <h3
        className="text-[#e5e2e3] mb-4"
        style={{ fontSize: "20px", fontWeight: 600 }}
      >
        {cat.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {cat.techs.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[#c1c6d7]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="py-16 md:py-24 lg:py-[160px] bg-[#0e0e0f]/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[#e5e2e3] mb-10 md:mb-16 lg:mb-20"
          style={{ fontSize: "clamp(1.5rem,5vw,48px)", fontWeight: 600, letterSpacing: "-0.02em" }}
        >
          Production-Ready Stack
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
            >
              <TiltCard cat={cat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
