---
name: Nexus Terminal
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#8b90a0'
  outline-variant: '#414754'
  surface-tint: '#aec6ff'
  primary: '#aec6ff'
  on-primary: '#002e6b'
  primary-container: '#0070f3'
  on-primary-container: '#ffffff'
  inverse-primary: '#0059c5'
  secondary: '#dbb8ff'
  on-secondary: '#470083'
  secondary-container: '#6807ba'
  on-secondary-container: '#d0a6ff'
  tertiary: '#ffb1c5'
  on-tertiary: '#65002f'
  tertiary-container: '#e60073'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#aec6ff'
  on-primary-fixed: '#001a43'
  on-primary-fixed-variant: '#004397'
  secondary-fixed: '#efdbff'
  secondary-fixed-dim: '#dbb8ff'
  on-secondary-fixed: '#2b0052'
  on-secondary-fixed-variant: '#6600b7'
  tertiary-fixed: '#ffd9e1'
  tertiary-fixed-dim: '#ffb1c5'
  on-tertiary-fixed: '#3f001b'
  on-tertiary-fixed-variant: '#8f0045'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
  bg-obsidian: '#020203'
  surface-glass: rgba(10, 10, 11, 0.7)
  border-muted: rgba(255, 255, 255, 0.08)
  electric-blue: '#00DFD8'
  hyper-purple: '#BD00FF'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  container-max: 1200px
  gutter: 32px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is engineered for a high-level Fullstack Developer portfolio, targeting enterprise SaaS recruiters and technical stakeholders. The brand personality is **authoritative, technical, and forward-leaning**, mirroring the precision of high-performance developer tools like Linear and Vercel.

The visual style is **High-Contrast Modern Dark Mode**. It utilizes a deep "Obsidian" foundation to allow for electric color accents and glassmorphic layers to stand out. The aesthetic prioritizes clarity and "production-ready" vibes through:
- **Glassmorphism:** Strategic use of backdrop blurs and semi-transparent surfaces to create depth without clutter.
- **Minimalism:** Aggressive use of whitespace (breathing room) to signal premium quality.
- **SaaS Professionalism:** Elements are structured, aligned to a rigorous grid, and rely on subtle animations to feel "alive" rather than static.

## Colors

The palette is rooted in a pure dark spectrum to achieve an "infinite depth" effect. 

- **Core Background:** The deepest black (`#020203`) serves as the canvas, preventing any gray-wash in high-end displays.
- **Accent Gradients:** Primary (Electric Blue) and Secondary (Purple) are used for "Glows" and "Beams"—thin, high-intensity light paths that guide the eye toward CTAs and key metrics.
- **Glassmorphic Neutral:** A semi-transparent surface color is used for cards and overlays, utilizing `backdrop-filter: blur(12px)` to create a frosted-glass aesthetic.
- **Semantic Text:** Pure white is reserved for high-level headings, while a muted gray (`#A1A1AA`) is used for body text to reduce eye strain in dark mode.

## Typography

The typography strategy balances "Technical Precision" with "Enterprise Modernity."

- **Headlines (Geist):** Chosen for its geometric, high-tech aesthetic that feels synonymous with modern developer tools. Large display sizes use negative letter spacing for a tight, editorial look.
- **Body (Inter):** The industry standard for SaaS for a reason; it provides maximum legibility for long-form project descriptions and ERP workflow explanations.
- **Labels (JetBrains Mono):** Used for technical metadata, tech stack tags, and small "eyebrow" titles. This monospaced font immediately signals "code" and "engineering" to the user.

## Layout & Spacing

This design system uses a **Fixed Grid with Fluid Padding**. 

- **Grid:** A 12-column grid is used for desktop layouts, with large 32px gutters to maintain a feeling of "premium air."
- **Rhythm:** Vertical rhythm is controlled via a modular scale. Section gaps are intentionally large (160px) to give each part of the portfolio (Experience, Projects, Tech Stack) its own moment, preventing the "cluttered" look of amateur sites.
- **Mobile Adaptivity:** On mobile, sections collapse to a single column with 20px side margins. Large typography scales down significantly to ensure headings remain on 2-3 lines maximum.

## Elevation & Depth

Visual hierarchy is achieved through **Luminous Layers** rather than traditional shadows.

- **Level 0 (Base):** The obsidian background.
- **Level 1 (Cards):** Glassmorphic surfaces with a 1px white border at 8% opacity. This "Ghost Border" defines the shape without adding visual weight.
- **Level 2 (Active/Hover):** When interacted with, cards gain a "Subtle Inner Glow" (a very soft primary color drop shadow with 0 offset and large blur) and the border opacity increases to 20%.
- **Background Depth:** Large, soft radial gradients (20-30% opacity) of blue and purple are placed far behind the content to create a sense of a 3D environment.

## Shapes

The design system uses **"Modern Radius"** logic. Elements are rounded to feel approachable and modern, but not "bubbly."

- **Standard Elements:** 8px (0.5rem) for buttons and inputs.
- **Large Containers:** 16px (1rem) for project cards and dashboard previews.
- **Full Rounding:** Reserved only for status pills and small category tags (Tech Stack badges).

## Components

### Buttons
- **Primary:** Solid background with a subtle linear gradient (Electric Blue to Hyper Purple). Use a slight outer glow on hover.
- **Secondary:** "Ghost" style. Transparent background with a 1px border. Text in white.
- **Tertiary/Icon:** No border or background. High-contrast white icon that scales 1.1x on hover.

### Project Cards
- **Structure:** Large image/mockup area at the top (60%) with technical details below (40%). 
- **Effect:** Apply `overflow: hidden`. Images should have a slight zoom-in effect on hover. Use the "Label Mono" font for tech-stack chips inside the card.

### Tech Stack Chips
- **Style:** Small, dark backgrounds (slightly lighter than base). Left-aligned icons (colored) with monospaced text. 
- **Animation:** Staggered "fade-in-up" animation when the section enters the viewport.

### Input Fields (Contact Form)
- **Style:** Underline-only or subtle glassmorphic fill. Focus state triggers a 1px Electric Blue bottom border and a subtle glow.
- **Feedback:** Success states should use the Electric Blue accent; error states use a sharp Tertiary Red.

### Timeline (Experience)
- **Style:** A vertical 2px line using a gradient from top to bottom. The "Active" node (current job) should be a pulsing Electric Blue dot.