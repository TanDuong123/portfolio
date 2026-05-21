"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportSettings } from "@/lib/animations";

const BULLETS = [
  "Developed and maintained ERP systems and business web applications using Laravel, JavaScript, TypeScript, and MySQL.",
  "Built responsive management interfaces and reusable frontend components using HTML5, CSS3, SCSS, and Angular.",
  "Developed RESTful APIs and integrated operational workflows across 21 branches.",
  "Supported debugging, bug fixing, deployment, and production operations on Linux environments.",
  "Designed and optimized MySQL queries to improve system performance, maintainability, and data consistency.",
  "Developed Laravel Blade templates and automated email workflows for customer registration, quotation, and order notifications.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-[160px] relative">
      <div className="container mx-auto px-6">
        {/* Section title with horizontal lines */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
          <motion.h2
            variants={fadeUp}
            className="shrink-0 uppercase tracking-tighter text-[#e5e2e3]"
            style={{ fontSize: "clamp(2rem,5vw,48px)", fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Experience
          </motion.h2>
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative pl-12 md:pl-20">
          {/* Vertical gradient line */}
          <div className="absolute left-[21px] md:left-[29px] top-0 bottom-0 w-[2px] timeline-line" />

          {/* Current Job */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 relative"
          >
            {/* Dot */}
            <div className="absolute -left-[32px] md:-left-[40px] top-0 w-6 h-6 rounded-full bg-[#020203] border-2 border-[#00DFD8] z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#00DFD8] animate-ping" />
            </div>

            {/* Card */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3
                    className="text-[#00DFD8] mb-1"
                    style={{ fontSize: "32px", fontWeight: 600, lineHeight: 1.3 }}
                  >
                    Software Engineer
                  </h3>
                  <p
                    className="text-[#c1c6d7]"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "14px" }}
                  >
                    Tedfast Company Limited
                  </p>
                </div>
                <span
                  className="px-4 py-1.5 rounded-full border border-[#00DFD8]/20 bg-[#00DFD8]/5 text-[#00DFD8] text-xs self-start md:self-auto whitespace-nowrap"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Sep 2023 — PRESENT
                </span>
              </div>

              <ul className="space-y-4 text-[#c1c6d7]" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                {BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <ChevronRight
                      size={16}
                      className="text-[#00DFD8] mt-1 flex-shrink-0"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
