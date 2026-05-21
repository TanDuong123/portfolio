"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const terminalLines = [
  { type: "cmd", text: "$ composer install --optimize-autoloader" },
  { type: "info", text: "Installing dependencies from lock file" },
  { type: "cmd", text: "> php artisan optimize:clear" },
  { type: "info", text: "> php artisan migrate --force" },
  { type: "info", text: "> php artisan db:seed --class=BranchSeeder" },
  { type: "success", text: "✓ 21 branches seeded successfully" },
  { type: "success", text: "Production deployment successful!" },
];

const lineColors: Record<string, string> = {
  cmd: "text-white/80",
  info: "text-white/40",
  success: "text-green-400",
  error: "text-red-400",
};

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const timer = setTimeout(
      () => setVisibleLines((v) => v + 1),
      visibleLines === 0 ? 800 : 400 + Math.random() * 400
    );
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <motion.div
      className="relative w-full max-w-[480px] animate-float"
      style={{ animationDelay: "0.5s" }}
    >
      {/* Outer glow */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/10 blur-xl opacity-60" />

      {/* Card */}
      <div className="relative rounded-xl border border-white/10 bg-[#0c0c0f]/90 backdrop-blur-xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 text-center text-[11px] text-white/25 font-mono tracking-wider">
            terminal — deploy.sh
          </div>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-[12.5px] leading-relaxed space-y-1 min-h-[200px]">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={lineColors[line.type]}
            >
              {line.text}
            </motion.div>
          ))}
          {visibleLines < terminalLines.length && (
            <span className="inline-block w-2 h-3.5 bg-cyan-400/80 cursor-blink" />
          )}
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.012] to-transparent" />
        </div>

        {/* Status bar */}
        <div className="border-t border-white/5 px-5 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            <span className="text-[10px] text-white/30 tracking-wider">CONNECTED</span>
          </div>
          <span className="text-[10px] text-white/20 font-mono">prod-server-01</span>
        </div>
      </div>
    </motion.div>
  );
}
