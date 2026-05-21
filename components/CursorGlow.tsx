"use client";

import { useEffect, useRef } from "react";

// Lerp: smoothly interpolate from `a` toward `b` at speed `t`
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Current rendered position (starts off-screen)
    let cx = -400;
    let cy = -400;

    // Raw mouse target
    let mx = -400;
    let my = -400;

    let rafId: number;
    let hasEntered = false;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!hasEntered) {
        // Snap to cursor on first move so it doesn't fly in from corner
        cx = mx;
        cy = my;
        hasEntered = true;
      }
    };

    const animate = () => {
      cx = lerp(cx, mx, 0.15);
      cy = lerp(cy, my, 0.15);

      // GPU-composited transform (no layout thrash)
      el.style.transform = `translate(${cx}px, ${cy}px)`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        // Position origin at top-left; translate moves it so center tracks cursor
        position: "fixed",
        top: "-400px",
        left: "-400px",
        width: "800px",
        height: "800px",
        borderRadius: "9999px",
        background:
          "radial-gradient(circle, rgba(0,223,216,0.05) 0%, rgba(189,0,255,0.03) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform",
      }}
    />
  );
}
