import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-blue": "#00DFD8",
        "hyper-purple": "#BD00FF",
        "bg-obsidian": "#020203",
        "surface": "#131314",
        "surface-dim": "#131314",
        "surface-container": "#201f20",
        "surface-container-low": "#1c1b1c",
        "surface-container-lowest": "#0e0e0f",
        "surface-container-high": "#2a2a2b",
        "surface-bright": "#3a393a",
        "surface-glass": "rgba(10,10,11,0.7)",
        "border-muted": "rgba(255,255,255,0.08)",
        "on-surface": "#e5e2e3",
        "on-surface-variant": "#c1c6d7",
        "outline": "#8b90a0",
        "outline-variant": "#414754",
        "primary": "#aec6ff",
        "primary-container": "#0070f3",
        "on-primary-container": "#ffffff",
        "secondary": "#dbb8ff",
        "secondary-container": "#6807ba",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      spacing: {
        "section-gap-desktop": "160px",
        "section-gap-mobile": "80px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        "gutter": "32px",
        "container-max": "1200px",
        "margin-mobile": "20px",
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-xl-mobile": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-mono": ["14px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "500" }],
      },
      animation: {
        "float-slow": "floatSlow 4s ease-in-out infinite",
        "float-slower": "floatSlow 6s ease-in-out infinite",
        "ping-slow": "ping 2s cubic-bezier(0,0,0.2,1) infinite",
        "gradient-x": "gradientX 8s ease infinite",
      },
      keyframes: {
        floatSlow: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientX: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
