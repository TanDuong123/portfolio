"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Client-only: cursor glow needs window
const CursorGlow = dynamic(() => import("@/components/CursorGlow"), { ssr: false });

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#020203", color: "#e5e2e3" }}
    >
      {/* Cursor follow glow */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <Hero />
      <Stats />
      <Experience />
      <TechStack />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
