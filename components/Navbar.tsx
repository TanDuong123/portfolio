"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Edu", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) current = el.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Wrapper handles centering — framer-motion không conflict với translate-x */}
      <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-[2.5%]">
      <motion.nav
        id="top-nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-7xl"
      >
        <div
          className="rounded-full border border-[rgba(255,255,255,0.08)] flex justify-between items-center px-8 py-3 shadow-2xl shadow-[rgba(0,223,216,0.05)] transition-all duration-300"
          style={{
            background: scrolled
              ? "rgba(10,10,11,0.85)"
              : "rgba(10,10,11,0.6)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-[#e5e2e3] font-semibold text-[20px] tracking-tighter leading-none hover:opacity-80 transition-opacity"
            style={{ fontFamily: "var(--font-inter, Inter)" }}
          >
            Duong Nhut Tan
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              const isHovered = hoveredLink === l.href;
              const lit = isActive || isHovered;
              return (
                <motion.button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  onMouseEnter={() => setHoveredLink(l.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                  className="text-[11px] lg:text-[13px] xl:text-[14px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.04em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: lit ? "#00DFD8" : "rgba(193,198,215,0.7)",
                    borderBottom: isActive ? "2px solid #00DFD8" : "2px solid transparent",
                    paddingBottom: "2px",
                    transition: "color 0.25s, border-color 0.25s",
                  }}
                >
                  {l.label}
                </motion.button>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="hidden xl:flex gap-2">
              <span className="material-symbols-outlined text-[#414754] hover:text-[#00DFD8] cursor-pointer transition-colors duration-300 text-[20px]">code</span>
              <span className="material-symbols-outlined text-[#414754] hover:text-[#00DFD8] cursor-pointer transition-colors duration-300 text-[20px]">terminal</span>
            </div>
            <motion.a
              href="/files/DuongNhutTan_Fullstack_Developer.pdf"
              download
              className="bg-[#0070f3] text-white px-4 py-1.5 lg:px-6 lg:py-2 rounded-full font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-[rgba(0,112,243,0.2)]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.06em",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden lg:inline">Download </span>CV
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-[#c1c6d7] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl border border-[rgba(255,255,255,0.08)] overflow-hidden"
              style={{ background: "rgba(10,10,11,0.95)", backdropFilter: "blur(16px)" }}
            >
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="w-full text-left px-8 py-4 text-[13px] uppercase tracking-widest text-[#c1c6d7] hover:text-[#00DFD8] hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {l.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      </div>
    </>
  );
}
