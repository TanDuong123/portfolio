"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportSettings } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-[160px]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Big glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-[24px] md:rounded-[40px] p-8 sm:p-12 md:p-20 relative overflow-hidden text-center"
        >
          {/* Top-right glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"
            style={{ background: "rgba(0,223,216,0.1)", filter: "blur(100px)" }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="relative z-10 mb-5 md:mb-8 text-[#e5e2e3]"
              style={{ fontSize: "clamp(1.6rem,6vw,56px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Let&apos;s build something
              <br />
              <span style={{ color: "#00DFD8" }}>scalable</span>.
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="relative z-10 text-[#c1c6d7] max-w-2xl mx-auto mb-8 md:mb-12"
              style={{ fontSize: "clamp(15px,3vw,18px)", lineHeight: 1.6 }}
            >
              Looking for a technical partner to help build or scale your next
              enterprise platform? I&apos;m currently open to new collaborations.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-6"
            >
              <motion.a
                href="mailto:tanduong969@gmail.com"
                className="w-full sm:w-auto px-7 sm:px-10 py-4 sm:py-5 rounded-full font-bold tracking-widest uppercase text-[#020203] transition-colors duration-300 flex items-center justify-center gap-2"
                style={{
                  background: "#ffffff",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                }}
                whileHover={{
                  backgroundColor: "#00DFD8",
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
              >
                GET IN TOUCH
                <ArrowRight size={16} />
              </motion.a>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/TanDuong123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1c6d7] hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "14px" }}
                >
                  Github
                </a>
                <a
                  href="https://linkedin.com/in/tanduong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1c6d7] hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "14px" }}
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
