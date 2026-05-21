"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportSettings } from "@/lib/animations";

// ── Project mockup images (CSS art) ────────────────────
function ERPMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0a1628] to-[#061020] flex flex-col p-5 gap-3 font-mono text-[11px]">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-1">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400/50" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" /><div className="w-2.5 h-2.5 rounded-full bg-[#00DFD8]/50" /></div>
        <div className="flex-1 mx-3 h-5 rounded-md bg-white/5 border border-white/5 flex items-center px-2"><span className="text-white/20 text-[9px]">edfast.vn/dashboard</span></div>
      </div>
      <div className="flex gap-3 flex-1">
        {/* Sidebar */}
        <div className="w-10 flex flex-col gap-2">
          {[...Array(5)].map((_,i) => (
            <div key={i} className={`h-8 rounded-md ${i===0?"bg-[#00DFD8]/20 border border-[#00DFD8]/30":"bg-white/[0.03] border border-white/5"}`} />
          ))}
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[["Branches","21+","#00DFD8"],["Modules","50+","#BD00FF"],["Users","300+","#e5e2e3"]].map(([l,v,c],i) => (
              <div key={i} className="rounded-lg bg-white/[0.04] border border-white/5 p-2.5">
                <div className="text-white/30 text-[8px] mb-1">{l}</div>
                <div className="font-bold text-[13px]" style={{color:c}}>{v}</div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 p-3">
            <div className="text-white/25 text-[8px] mb-2 uppercase tracking-wider">Attendance Overview</div>
            <div className="flex items-end gap-1 h-16">
              {[55,80,45,90,60,75,88,65,92,70,85,95].map((h,i) => (
                <div key={i} className="flex-1 rounded-sm"
                  style={{height:`${h}%`, background:`linear-gradient(to top, ${i%3===0?"#00DFD8":"#00DFD8"}44, ${i%3===0?"#BD00FF":"#00DFD8"}22)`}} />
              ))}
            </div>
          </div>
          {/* Table rows */}
          <div className="space-y-1">
            {[...Array(3)].map((_,i) => (
              <div key={i} className="flex items-center gap-2 h-5">
                <div className="w-3 h-3 rounded-sm bg-[#00DFD8]/20" />
                <div className="flex-1 h-1.5 rounded-full bg-white/5" />
                <div className="w-8 h-1.5 rounded-full bg-white/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CMSMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#12082a] to-[#0a0520] flex flex-col p-5 gap-3 font-mono text-[11px]">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-1">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400/50" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" /><div className="w-2.5 h-2.5 rounded-full bg-[#BD00FF]/50" /></div>
        <div className="flex-1 mx-3 h-5 rounded-md bg-white/5 border border-white/5 flex items-center px-2"><span className="text-white/20 text-[9px]">livetocode.io.vn/cms</span></div>
      </div>
      <div className="flex gap-3 flex-1">
        <div className="flex-1 flex flex-col gap-3">
          {/* Lang selector */}
          <div className="flex flex-wrap gap-1.5">
            {["VI","EN","JP","DE","FR","ES","KO","ZH","TH","ID"].map((l,i) => (
              <span key={i} className="px-1.5 py-0.5 rounded text-[7px] font-bold"
                style={{background: i<2?"rgba(189,0,255,0.25)":"rgba(255,255,255,0.04)", color: i<2?"#BD00FF":"rgba(255,255,255,0.3)", border: i<2?"1px solid rgba(189,0,255,0.3)":"1px solid rgba(255,255,255,0.05)"}}>
                {l}
              </span>
            ))}
          </div>
          {/* Content area */}
          <div className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 p-3 space-y-2">
            <div className="h-2 rounded-full bg-white/10 w-3/4" />
            <div className="h-1.5 rounded-full bg-white/6 w-full" />
            <div className="h-1.5 rounded-full bg-white/6 w-5/6" />
            <div className="h-1.5 rounded-full bg-white/6 w-4/5" />
            {/* AI indicator */}
            <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/5">
              <div className="w-5 h-5 rounded bg-[#BD00FF]/20 border border-[#BD00FF]/30 flex items-center justify-center flex-shrink-0">
                <span className="text-[6px] font-bold text-[#BD00FF]">AI</span>
              </div>
              <div className="flex-1">
                <div className="text-[8px] text-white/30 mb-1">Translating VI → EN…</div>
                <div className="h-1 rounded-full bg-[#BD00FF]/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-[#BD00FF]"
                    animate={{ width: ["20%","85%","20%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Status row */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/25 text-[9px]">M2M100 — Hugging Face connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    title: "Enterprise Education Management ERP",
    subtitle: "edfast.vn",
    description:
      "Enterprise ERP platform supporting scheduling, attendance tracking, reporting, and operational workflows across 21 branches. Built with a team of 6–9 engineers.",
    tags: ["PHP / Laravel", "Angular", "MySQL"],
    badges: [
      { label: "Live Production", bg: "rgba(0,223,216,0.2)", border: "rgba(0,223,216,0.3)", color: "#00DFD8" },
      { label: "ERP",           bg: "rgba(255,255,255,0.1)", border: "rgba(255,255,255,0.2)", color: "#e5e2e3" },
    ],
    arrowColor: "#00DFD8",
    link: "https://edfast.vn",
    Mockup: ERPMockup,
    offset: false,
  },
  {
    title: "AI-Powered Multilingual CMS",
    subtitle: "livetocode.io.vn",
    description:
      "Multilingual CMS platform supporting automated Vietnamese-English content workflows with AI translation via FastAPI and Hugging Face M2M100.",
    tags: ["PHP / Laravel", "FastAPI", "MySQL"],
    badges: [
      { label: "Open Source", bg: "rgba(189,0,255,0.2)", border: "rgba(189,0,255,0.3)", color: "#BD00FF" },
      { label: "AI CMS",     bg: "rgba(255,255,255,0.1)", border: "rgba(255,255,255,0.2)", color: "#e5e2e3" },
    ],
    arrowColor: "#BD00FF",
    link: "https://livetocode.io.vn",
    Mockup: CMSMockup,
    offset: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-[160px] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 lg:mb-20 gap-6 md:gap-8"
        >
          <div className="max-w-2xl">
            <motion.h2
              variants={fadeUp}
              className="text-[#e5e2e3] leading-tight mb-4 md:mb-6"
              style={{ fontSize: "clamp(1.5rem,5vw,48px)", fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              SOLVING BUSINESS
              <br />
              PUZZLES THROUGH CODE
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#c1c6d7]" style={{ fontSize: "clamp(15px,3vw,18px)", lineHeight: 1.6 }}>
              Focusing on high-availability systems that transform internal operations
              from chaotic spreadsheets to streamlined digital workflows.
            </motion.p>
          </div>

          {/* Vertical label */}
          <div
            className="hidden lg:block text-white/20 uppercase tracking-[0.2em] shrink-0"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              writingMode: "vertical-lr",
            }}
          >
            Featured Works
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative glass-card rounded-3xl overflow-hidden ${p.offset ? "lg:mt-20" : ""}`}
            >
              {/* Image / Mockup */}
              <div className="h-[240px] sm:h-[320px] md:h-[400px] overflow-hidden relative">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent z-10 pointer-events-none" />

                {/* Mockup */}
                <div className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700">
                  <p.Mockup />
                </div>

                {/* Badges */}
                <div className="absolute top-6 left-6 z-20 flex gap-2 flex-wrap">
                  {p.badges.map((b, j) => (
                    <span
                      key={j}
                      className="backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase"
                      style={{
                        background: b.bg,
                        border: `1px solid ${b.border}`,
                        color: b.color,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3
                  className="text-[#e5e2e3] mb-1"
                  style={{ fontSize: "clamp(1.1rem, 3vw, 24px)", fontWeight: 600 }}
                >
                  {p.title}
                </h3>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: p.arrowColor,
                    opacity: 0.7,
                  }}
                >
                  {p.subtitle}
                </p>
                <p className="text-[#c1c6d7] mb-8" style={{ fontSize: "16px", lineHeight: 1.6 }}>
                  {p.description}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex gap-4 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-white/40"
                        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:scale-110 active:scale-95 flex-shrink-0 ml-4"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = p.arrowColor)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                  >
                    <ArrowUpRight size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
