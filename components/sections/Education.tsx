"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { viewportSettings } from "@/lib/animations";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Title row — same style as Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
          <h2
            className="shrink-0 uppercase tracking-tighter text-[#e5e2e3]"
            style={{ fontSize: "clamp(1.3rem,4vw,32px)", fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Education
          </h2>
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-5 md:gap-6">

            {/* Icon */}
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#00DFD8]/10 border border-[#00DFD8]/20 flex items-center justify-center">
              <GraduationCap size={26} className="text-[#00DFD8]" />
            </div>

            {/* Main info */}
            <div className="flex-1 min-w-0">
              <h3
                className="text-[#e5e2e3] mb-1"
                style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}
              >
                Bachelor of Information Technology
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                <span
                  className="flex items-center gap-1.5 text-[#c1c6d7]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" }}
                >
                  <MapPin size={12} className="text-[#8b90a0]" />
                  University of Information Technology — VNU Ho Chi Minh City
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
              <span
                className="px-3 py-1.5 rounded-full border border-[#00DFD8]/25 bg-[#00DFD8]/8 text-[#00DFD8] whitespace-nowrap"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", background: "rgba(0,223,216,0.08)" }}
              >
                GPA&nbsp;7.66 / 10
              </span>
              <span
                className="flex items-center gap-1.5 text-[#8b90a0] whitespace-nowrap"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}
              >
                <CalendarDays size={11} />
                Expected Sep 2026
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
