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
    <section id="experience" className="py-16 md:py-24 lg:py-[160px] relative">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Title */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex items-center gap-4 mb-10 md:mb-16"
        >
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
          <motion.h2
            variants={fadeUp}
            className="shrink-0 uppercase tracking-tighter text-[#e5e2e3]"
            style={{ fontSize: "clamp(1.5rem, 5vw, 48px)", fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Experience
          </motion.h2>
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative pl-8 sm:pl-12 md:pl-20">
          {/* Vertical gradient line */}
          <div className="absolute left-[14px] sm:left-[21px] md:left-[29px] top-0 bottom-0 w-[2px] timeline-line" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Dot */}
            <div className="absolute -left-[26px] sm:-left-[32px] md:-left-[40px] top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#020203] border-2 border-[#00DFD8] z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00DFD8] animate-ping" />
            </div>

            {/* Card */}
            <div className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 mb-5 md:mb-6">
                <div>
                  <h3
                    className="text-[#00DFD8] mb-1"
                    style={{ fontSize: "clamp(1.3rem, 4vw, 32px)", fontWeight: 600, lineHeight: 1.3 }}
                  >
                    Software Engineer
                  </h3>
                  <p className="text-[#c1c6d7]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" }}>
                    Tedfast Company Limited
                  </p>
                </div>
                <span
                  className="px-3 py-1.5 rounded-full border border-[#00DFD8]/20 bg-[#00DFD8]/5 text-[#00DFD8] text-[11px] self-start whitespace-nowrap"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Sep 2023 — PRESENT
                </span>
              </div>

              <ul className="space-y-3 md:space-y-4 text-[#c1c6d7]" style={{ fontSize: "clamp(14px, 2.5vw, 16px)", lineHeight: 1.6 }}>
                {BULLETS.map((b, i) => (
                  <li key={i} className="flex gap-2 md:gap-3 items-start">
                    <ChevronRight size={15} className="text-[#00DFD8] mt-[3px] flex-shrink-0" />
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
