"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { staggerContainer, fadeUp, viewportSettings } from "@/lib/animations";

const STATS = [
  { target: 2,  suffix: "+",  label: "Years Experience",       color: "#00DFD8", barColor: "#00DFD8" },
  { target: 21, suffix: "+", label: "Global Branches Managed", color: "#BD00FF", barColor: "#BD00FF" },
  { target: 50, suffix: "+", label: "ERP Modules Deployed",    color: "#e5e2e3", barColor: "#e5e2e3" },
];

function Counter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const speed = 200 / target;
    let current = 0;
    const tick = () => {
      if (current < target) {
        current++;
        setCount(current);
        setTimeout(tick, speed);
      }
    };
    tick();
  }, [inView, target]);

  return (
    <span ref={ref} style={{ color }}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-[160px] bg-[#020203] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="max-w-4xl mx-auto text-center mb-10 md:mb-16 lg:mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="mb-4 md:mb-6 text-[#e5e2e3]"
            style={{ fontSize: "clamp(1.8rem, 6vw, 48px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            Built for Reliability
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#c1c6d7]"
            style={{ fontSize: "clamp(15px, 3vw, 18px)", lineHeight: 1.6 }}
          >
            Over two years of engineering complex business logic and scalable database
            architectures for rapidly growing Vietnamese enterprises.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass-card p-6 md:p-10 rounded-2xl text-center group"
            >
              {/* Number */}
              <div
                className="font-bold mb-2"
                style={{ fontSize: "clamp(2rem, 5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                <Counter target={s.target} suffix={s.suffix} color={s.color} />
              </div>

              {/* Label */}
              <div
                className="text-[#c1c6d7] uppercase tracking-widest"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" }}
              >
                {s.label}
              </div>

              {/* Hover underline */}
              <div className="mt-4 mx-auto rounded-full overflow-hidden" style={{ height: "4px", background: "rgba(255,255,255,0.05)" }}>
                <div
                  className="h-full rounded-full hover-underbar"
                  style={{ background: s.barColor }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
