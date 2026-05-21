"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ElectricMonster from "@/components/ElectricMonster";

const ROLES = ["Laravel Engineer", "ERP Builder", "Database Optimizer", "System Architect"];

function TypingText() {
  const [displayText, setDisplayText] = useState("");
  const roleIdxRef    = useRef(0);
  const charIdxRef    = useRef(0);
  const isDeletingRef = useRef(false);
  const timerRef      = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function tick() {
      const current  = ROLES[roleIdxRef.current];
      const deleting = isDeletingRef.current;

      if (!deleting) {
        charIdxRef.current++;
        setDisplayText(current.slice(0, charIdxRef.current));
      } else {
        charIdxRef.current--;
        setDisplayText(current.slice(0, charIdxRef.current));
      }

      let delay = deleting ? 50 : 150;

      if (!deleting && charIdxRef.current === current.length) {
        isDeletingRef.current = true;
        delay = 2000;
      } else if (deleting && charIdxRef.current === 0) {
        isDeletingRef.current = false;
        roleIdxRef.current = (roleIdxRef.current + 1) % ROLES.length;
        delay = 500;
      }

      timerRef.current = setTimeout(tick, delay);
    }

    timerRef.current = setTimeout(tick, 800);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <span
      className="typing-container text-[#e5e2e3]"
      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(13px, 3.5vw, 18px)", lineHeight: 1 }}
    >
      {displayText}
    </span>
  );
}

const TERMINAL_LINES = [
  { type: "cmd",     text: "composer install --optimize-autoloader" },
  { type: "info",    text: "Installing laravel/framework (v10.x)..." },
  { type: "cmd",     text: "php artisan migrate --force" },
  { type: "blue",    text: "Migrating: 2024_03_15_create_enterprise_nodes_table" },
  { type: "blue",    text: "Migrated:  2024_03_15_create_enterprise_nodes_table" },
  { type: "success", text: "Production deployment successful." },
];

function TerminalWindow() {
  const [visible, setVisible] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (visible >= TERMINAL_LINES.length) return;
    const delay = visible === 0 ? 900 : 320 + Math.random() * 280;
    timerRef.current = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [visible]);

  return (
    <div className="glass-card rounded-xl overflow-hidden shadow-2xl translate-x-4 translate-y-4">
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/40" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
          <div className="w-3 h-3 rounded-full bg-[#00DFD8]/40" />
        </div>
        <span className="mx-auto text-white/40 text-[10px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          deploy_erp_v2.0.sh
        </span>
      </div>

      <div className="p-4 md:p-6 space-y-2 min-h-[160px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" }}>
        {TERMINAL_LINES.slice(0, visible).map((line, i) => {
          if (line.type === "cmd") return (
            <motion.div key={i} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="flex gap-2">
              <span className="text-[#00DFD8]">$</span>
              <span className="text-[#e5e2e3] break-all">{line.text}</span>
            </motion.div>
          );
          if (line.type === "info") return (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="text-white/40">
              {line.text}
            </motion.div>
          );
          if (line.type === "blue") return (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="text-[#aec6ff]/60 break-all">
              {line.text}
            </motion.div>
          );
          return (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="flex gap-2 text-green-400">
              <span className="material-symbols-outlined text-sm leading-none mt-[1px]">check_circle</span>
              <span>{line.text}</span>
            </motion.div>
          );
        })}
        {visible < TERMINAL_LINES.length && (
          <span className="inline-block w-[9px] h-[15px] bg-[#00DFD8]/80 typing-cursor align-text-bottom" />
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 animated-grid pointer-events-none opacity-20" />
      <ElectricMonster />
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#00DFD8] hero-glow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-[#BD00FF] hero-glow pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center z-10 py-12 lg:py-0"
      >
        {/* ── LEFT ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          className="space-y-6 lg:space-y-8"
        >
          {/* Badge */}
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00DFD8]/20 bg-[#00DFD8]/5">
              <span className="w-2 h-2 rounded-full bg-[#00DFD8] animate-pulse" />
              <span className="uppercase tracking-widest text-[#00DFD8] text-[10px] sm:text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Available for Enterprise Projects
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}>
            <h1
              className="text-[#e5e2e3] leading-none"
              style={{ fontSize: "clamp(2.4rem, 8vw, 72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              ENGINEERING
              <br />
              <span className="gradient-text-hero">SYSTEMS</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
            className="text-[#c1c6d7] max-w-xl"
            style={{ fontSize: "clamp(15px, 3vw, 18px)", lineHeight: 1.6 }}
          >
            Fullstack Developer specializing in architecting mission-critical ERP
            solutions and high-performance Laravel applications. Bridging technical
            complexity with elegant user experiences.
          </motion.p>

          {/* Typing row */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
            className="flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-[#00DFD8] text-[20px] leading-none flex-shrink-0">terminal</span>
            <TypingText />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
            className="flex items-center gap-4 pt-2 flex-wrap"
          >
            <motion.button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold tracking-widest uppercase text-[#020203]"
              style={{ background: "linear-gradient(90deg, #00DFD8, #BD00FF)", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,223,216,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              START PROJECT
            </motion.button>
            <motion.button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 hover:border-white/20 tracking-widest text-[#e5e2e3] transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              VIEW WORK
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── RIGHT — hidden on mobile ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <TerminalWindow />

          {/* Float card top-right */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute -top-10 -right-4 glass-card p-4 rounded-lg w-48"
            style={{ animation: "bounce 4s ease-in-out infinite" }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/40 text-[10px] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>Load Balance</span>
              <span className="text-[#00DFD8] text-[10px] font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>98.2%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div className="h-full bg-[#00DFD8] rounded-full" initial={{ width: 0 }} animate={{ width: "98%" }} transition={{ delay: 1.8, duration: 1, ease: "easeOut" }} />
            </div>
          </motion.div>

          {/* Float card bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="absolute bottom-10 -left-10 glass-card p-4 rounded-lg w-56 transition-transform duration-300 hover:rotate-0"
            style={{ transform: "rotate(-3deg)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#BD00FF]/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[#BD00FF] text-sm leading-none">database</span>
              </div>
              <div>
                <div className="text-white/40 text-[10px] uppercase mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>Query Performance</div>
                <div className="text-[#e5e2e3] text-xs font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>0.42ms Average</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
