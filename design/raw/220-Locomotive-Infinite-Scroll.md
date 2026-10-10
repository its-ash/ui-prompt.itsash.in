# Locomotive Infinite Scroll

- Source: <https://designmd.app/library/locomotive-infinite-scroll>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:06:25.305Z

General2020s Modern Scroll-Driven

# Locomotive Infinite Scroll

Design an immersive infinite scroll landing page inspired by Locomotive Scroll v5 and Lenis. Ideal for landing pages imersivas, storytelling digital, portfolios criativos, sites de agências, apresentações de produto premium, one-page narrativas. AI-ready template.

smooth scrollparallaxinfinite scrolllocomotive scrolllenisscroll-driven animationsviewport detectionkinetic motionscroll progressCSS variablesdata attributeslerp interpolationscroll speedscroll hijackingimmersive storytelling

Use case: Landing pages imersivas, Storytelling digital, Portfolios criativos, Sites de agencies, Presentations de produto premium, One-page narrativas

![Locomotive Infinite Scroll](https://designmd.app/images/library/336.png)

## Historical Context

Locomotive Scroll emerged from the Montreal-based creative studio Locomotive around 2019, at a time when the web was rediscovering scroll as a narrative device rather than a mere navigation mechanic. The library gave developers a clean abstraction over smooth scrolling — virtual scroll containers, parallax layers, and scroll-triggered animations — without requiring a physics degree or a week of debugging IntersectionObserver edge cases. What made it stick wasn't just the tech. It was the philosophy: scrolling should feel intentional. Before Locomotive, smooth scroll implementations were either janky hacks (hijacking the wheel event, fighting the browser) or heavyweight frameworks that demanded you restructure your entire DOM. Locomotive found the middle ground — opinionated enough to enforce good defaults, flexible enough to let you art-direct every pixel of the journey. The library's influence is visible across award-winning portfolios and agency sites from 2020 onward. It essentially codified a generation's expectation of what a 'premium' scroll experience feels like. Even as native CSS scroll-driven animations gain traction, Locomotive's design language — that buttery, slightly decoupled momentum — remains the reference point for crafted scrolling.

## When to Use

Reach for Locomotive when scroll IS the experience — not just a way to get from section A to section B. Portfolio sites where each project reveal is choreographed. Long-form storytelling where parallax layers build atmosphere. Creative agency homepages that need to feel like a directed sequence, not a document. If your content benefits from controlled pacing and spatial depth, this is your tool. Skip it for dashboards, apps, or anything where users need to scan quickly — hijacked scroll frustrates utility-first interfaces.

## Design Principles

- Scroll as narrative device — every scroll position should communicate spatial progress through a story, not just vertical distance
- Momentum with intent — the decoupled smooth scroll should feel like gliding through a curated space, never like fighting the browser or losing control
- Parallax as depth cue, not decoration — layer movement must reinforce visual hierarchy and spatial relationships, not just look cool in a portfolio
- Progressive disclosure through pacing — control the rhythm of content reveals so information lands with impact rather than flooding the viewport
- Respect the exit — always provide clear scroll progress indicators and let users bail to specific sections; a beautiful cage is still a cage

## DESIGN.md

```
---
version: "alpha"
name: "Locomotive Infinite Scroll"
description: "Design an immersive infinite scroll landing page inspired by Locomotive Scroll v5 and Lenis. Ideal for landing pages imersivas, storytelling digital, portfolios criativos, sites de agências, apresentações de produto premium, one-page narrativas. AI-ready template."
colors:
primary: "#1A1A2E"
secondary: "#16213E"
tertiary: "#FFFFFF"
neutral: "#6C63FF"
surface: "#A29BFE"
accent: "#FF6B6B"
typography:
h1:
fontFamily: Inter
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Inter
fontSize: 1rem
fontWeight: 400
rounded:
sm: 16px
md: 32px
lg: 48px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Design an immersive infinite scroll landing page inspired by Locomotive Scroll v5 and Lenis. Ideal for landing pages imersivas, storytelling digital, portfolios criativos, sites de agências, apresentações de produto premium, one-page narrativas. AI-ready template. Locomotive Scroll emerged from the Montreal-based creative studio Locomotive around 2019, at a time when the web was rediscovering scroll as a narrative device rather than a mere navigation mechanic. The library gave developers a clean abstraction over smooth scrolling — virtual scroll containers, parallax layers, and scroll-triggered animations — without requiring a physics degree or a week of debugging IntersectionObserver edge cases.

What made it stick wasn't just the tech. It was the philosophy: scrolling should feel intentional. Before Locomotive, smooth scroll implementations were either janky hacks (hijacking the wheel event, fighting the browser) or heavyweight frameworks that demanded you restructure your entire DOM. Locomotive found the middle ground — opinionated enough to enforce good defaults, flexible enough to let you art-direct every pixel of the journey.

The library's influence is visible across award-winning portfolios and agency sites from 2020 onward. It essentially codified a generation's expectation of what a 'premium' scroll experience feels like. Even as native CSS scroll-driven animations gain traction, Locomotive's design language — that buttery, slightly decoupled momentum — remains the reference point for crafted scrolling.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Smooth Scroll, Parallax, Kinetic, Immersive, Scroll-Driven
- **Keywords:** smooth scroll, parallax, infinite scroll, locomotive scroll, lenis, scroll-driven animations, viewport detection, kinetic motion, scroll progress, CSS variables, data attributes, lerp interpolation, scroll speed, scroll hijacking, immersive storytelling
- **Era:** 2020s Modern Scroll-Driven
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Deep Charcoal** (#1A1A2E) — Dark surface, primary background
- **Midnight Blue** (#16213E) — Dark surface, primary background
- **Pure White** (#FFFFFF) — Light surface, card backgrounds
- **Electric Indigo** (#6C63FF) — Accent color, emphasis elements
- **Soft Lavender** (#A29BFE) — Extended palette, decorative use
- **Warm Coral** (#FF6B6B) — Extended palette, decorative use
- **Mint Glow** (#00D2FF) — Extended palette, decorative use
- **Pale Smoke** (#F0F0F5) — Extended palette, decorative use

## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
- **Accent:** Space Grotesk — Used for decorative or emphasis text
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, and technical values

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem

## Layout

- **Grid:** CSS Grid primary. Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Smooth scroll via Lenis (lerp: 0.1, duration: 1.2), parallax layers com data-scroll-speed (0.1 a 0.8), scroll progress como CSS variable (--progress 0-1), viewport detection com IntersectionObserver, fade-in/slide-up on scroll (translate3d + opacity), staggered reveal (delay incremental 100ms), horizontal scroll sections, scroll-triggered counters, kinetic typography com velocidades diferentes, sticky sections com scroll progress, easing customizado (exponential ease-out)

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 16px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (16px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (16px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.

## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Locomotive Scroll v5 CDN incluído (JS + CSS)
- Do new LocomotiveScroll() inicializado
- Do data-scroll em todos os elementos animados
- Do data-scroll-speed com valores variados (0.1-0.8)
- Do data-scroll-css-progress para barra de progresso
- Do Parallax layers no hero (mínimo 3 camadas)
- Do Reveal animations (fade-in + slide-up) com is-inview
- Do Staggered reveals com delay incremental
- Do Seção horizontal scroll
- Do Sticky section com scroll progress
- Do Kinetic typography com velocidades diferentes
- Do GPU-accelerated transforms (translate3d)
- Do Dark palette #1A1A2E verificada
- Do Contraste WCAG AA 4.5:1
- Do Responsivo mobile (parallax desabilitado em touch)

## Use Case

Landing pages imersivas, Storytelling digital, Portfolios criativos, Sites de agencies, Presentations de produto premium, One-page narrativas
```

[Download DESIGN.md](https://designmd.app/library/locomotive-infinite-scroll/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
scroll-behavior: smooth; --progress: 0; transform: translate3d(0, var(--y), 0); will-change: transform, opacity; transition: opacity 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); position: sticky; top: 0; overflow: hidden; backdrop-filter: blur(10px); font-family: 'Inter', sans-serif; background: #1A1A2E; color: #FFFFFF; [data-scroll] { opacity: 0; transform: translateY(60px); } [data-scroll].is-inview { opacity: 1; transform: translateY(0); }
```

### Variables

```
--color-bg: #1A1A2E; --color-bg-alt: #16213E; --color-text: #FFFFFF; --color-text-muted: #A0A0B0; --color-accent: #6C63FF; --color-accent-soft: #A29BFE; --color-coral: #FF6B6B; --color-cyan: #00D2FF; --color-surface: rgba(255,255,255,0.05); --font-body: 'Inter', sans-serif; --font-display: 'Space Grotesk', sans-serif; --lerp: 0.1; --duration: 1.2; --scroll-speed-slow: 0.2; --scroll-speed-medium: 0.5; --scroll-speed-fast: 0.8; --reveal-distance: 60px; --reveal-duration: 0.8s; --reveal-easing: cubic-bezier(0.16, 1, 0.3, 1); --stagger-delay: 100ms; --border-radius: 16px; --glass-bg: rgba(255,255,255,0.05); --glass-border: 1px solid rgba(255,255,255,0.1); --glass-blur: blur(10px);
```

### Checklist

☐ Locomotive Scroll v5 CDN incluído (JS + CSS), ☐ new LocomotiveScroll() inicializado, ☐ data-scroll em todos os elementos animados, ☐ data-scroll-speed com valores variados (0.1-0.8), ☐ data-scroll-css-progress para barra de progresso, ☐ Parallax layers no hero (mínimo 3 camadas), ☐ Reveal animations (fade-in + slide-up) com is-inview, ☐ Staggered reveals com delay incremental, ☐ Seção horizontal scroll, ☐ Sticky section com scroll progress, ☐ Kinetic typography com velocidades diferentes, ☐ GPU-accelerated transforms (translate3d), ☐ Dark palette #1A1A2E verificada, ☐ Contraste WCAG AA 4.5:1, ☐ Responsivo mobile (parallax desabilitado em touch)

## Colors

Primary

#1A1A2E

#16213E

#FFFFFF

Secondary

#6C63FF

#A29BFE

#FF6B6B

#00D2FF

#F0F0F5

### Effects

Smooth scroll via Lenis (lerp: 0.1, duration: 1.2), parallax layers com data-scroll-speed (0.1 a 0.8), scroll progress como CSS variable (--progress 0-1), viewport detection com IntersectionObserver, fade-in/slide-up on scroll (translate3d + opacity), staggered reveal (delay incremental 100ms), horizontal scroll sections, scroll-triggered counters, kinetic typography com velocidades diferentes, sticky sections com scroll progress, easing customizado (exponential ease-out)

### Light/Dark

✓ Full / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Locomotive Infinite Scroll
- **Type:** Smooth Scroll, Parallax, Kinetic, Immersive, Scroll-Driven
- **Keywords:** smooth scroll, parallax, infinite scroll, locomotive scroll, lenis, scroll-driven animations, viewport detection, kinetic motion, scroll progress, CSS variables, data attributes, lerp interpolation, scroll speed, scroll hijacking, immersive storytelling
- **Era:** 2020s Modern Scroll-Driven
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Deep Charcoal #1A1A2E, Midnight Blue #16213E, Pure White #FFFFFF
- **Secondary:** Electric Indigo #6C63FF, Soft Lavender #A29BFE, Warm Coral #FF6B6B, Mint Glow #00D2FF, Pale Smoke #F0F0F5

## Visual Effects

Smooth scroll via Lenis (lerp: 0.1, duration: 1.2), parallax layers com data-scroll-speed (0.1 a 0.8), scroll progress como CSS variable (--progress 0-1), viewport detection com IntersectionObserver, fade-in/slide-up on scroll (translate3d + opacity), staggered reveal (delay incremental 100ms), horizontal scroll sections, scroll-triggered counters, kinetic typography com velocidades diferentes, sticky sections com scroll progress, easing customizado (exponential ease-out)

## AI Visual Direction

Design an immersive infinite scroll landing page inspired by Locomotive Scroll v5 and Lenis. Use smooth scrolling with lerp interpolation (0.1), parallax layers at different speeds (data-scroll-speed), scroll progress CSS variables (--progress 0 to 1), viewport detection with IntersectionObserver for reveal animations. Include: sticky hero with scroll-driven parallax, sections that fade-in and slide-up on scroll entry, horizontal scroll section for features, kinetic typography with different scroll speeds, staggered card reveals, scroll-triggered number counters, progress bar tied to page scroll. Dark immersive palette with electric indigo accents. Use translate3d for GPU-accelerated transforms. Include Locomotive Scroll CDN (https://cdn.jsdelivr.net/npm/locomotive-scroll/bundled/locomotive-scroll.min.js and locomotive-scroll.css). Initialize with new LocomotiveScroll() and use data-scroll, data-scroll-speed, data-scroll-css-progress, data-scroll-repeat, data-scroll-offset, data-scroll-position attributes.

## CSS Technical

```css
scroll-behavior: smooth; --progress: 0; transform: translate3d(0, var(--y), 0); will-change: transform, opacity; transition: opacity 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); position: sticky; top: 0; overflow: hidden; backdrop-filter: blur(10px); font-family: 'Inter', sans-serif; background: #1A1A2E; color: #FFFFFF; [data-scroll] { opacity: 0; transform: translateY(60px); } [data-scroll].is-inview { opacity: 1; transform: translateY(0); }
```

## Design System Variables

```css
--color-bg: #1A1A2E; --color-bg-alt: #16213E; --color-text: #FFFFFF; --color-text-muted: #A0A0B0; --color-accent: #6C63FF; --color-accent-soft: #A29BFE; --color-coral: #FF6B6B; --color-cyan: #00D2FF; --color-surface: rgba(255,255,255,0.05); --font-body: 'Inter', sans-serif; --font-display: 'Space Grotesk', sans-serif; --lerp: 0.1; --duration: 1.2; --scroll-speed-slow: 0.2; --scroll-speed-medium: 0.5; --scroll-speed-fast: 0.8; --reveal-distance: 60px; --reveal-duration: 0.8s; --reveal-easing: cubic-bezier(0.16, 1, 0.3, 1); --stagger-delay: 100ms; --border-radius: 16px; --glass-bg: rgba(255,255,255,0.05); --glass-border: 1px solid rgba(255,255,255,0.1); --glass-blur: blur(10px);
```

## Implementation Checklist

- ☐ Locomotive Scroll v5 CDN incluído (JS + CSS)
- ☐ new LocomotiveScroll() inicializado
- ☐ data-scroll em todos os elementos animados
- ☐ data-scroll-speed com valores variados (0.1-0.8)
- ☐ data-scroll-css-progress para barra de progresso
- ☐ Parallax layers no hero (mínimo 3 camadas)
- ☐ Reveal animations (fade-in + slide-up) com is-inview
- ☐ Staggered reveals com delay incremental
- ☐ Seção horizontal scroll
- ☐ Sticky section com scroll progress
- ☐ Kinetic typography com velocidades diferentes
- ☐ GPU-accelerated transforms (translate3d)
- ☐ Dark palette #1A1A2E verificada
- ☐ Contraste WCAG AA 4.5:1
- ☐ Responsivo mobile (parallax desabilitado em touch)

## Execution Rules

1. Strictly follow the defined visual style.
2. Use high-quality inline SVG icons (Heroicons or Lucide style) — NEVER use emojis as icons.
3. Add `cursor-pointer` and smooth `hover` states (transition-all) on all interactive elements.
4. Required Page Structure:
   - Navbar (Logo + Links + CTA)
   - Hero Section (Impactful Headline + Subtitle + 2 buttons + 3D/Abstract visual element via CSS)
   - Features (3 cards with icons)
   - Testimonials (3 cards)
   - Pricing (3 tiers, highlight the middle one)
   - Final CTA
   - Full Footer with social links, privacy policy, terms of use, contact and SEO links.
5. All text content must be in English.
6. The visual must be CLEARLY distinct — do not create a "default Bootstrap" design. Force the use of the provided design system variables.
7. Use `<style>` tags in the head for custom classes (especially for complex backdrop-filter effects and animations) that Tailwind CDN doesn't cover.
8. Full Responsiveness: Layout must adapt perfectly to Mobile, Tablet and Desktop (vertical stack on mobile).
9. Include basic SEO, Viewport and Open Graph meta tags in `<head>`.
10. Footer must contain: Copyright 2026, Secondary navigation links and Social media icons.
11. Make the creative decisions needed to deliver the complete, functional result now.
```

Copy Prompt

## Related

[![Motion-Driven](https://designmd.app/images/library/15.png) Futurista & Tech ### Motion-Driven](https://designmd.app/library/motion-driven)[![Kinetic Typography](https://designmd.app/images/library/48.png) Futurista & Tech ### Kinetic Typography](https://designmd.app/library/kinetic-typography)[![Parallax Storytelling](https://designmd.app/images/library/49.png) Futurista & Tech ### Parallax Storytelling](https://designmd.app/library/parallax-storytelling)[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)[![Sumi-e Tech Scroll](https://designmd.app/images/library/159.png) Arte & Ilustracao ### Sumi-e Tech Scroll](https://designmd.app/library/sumi-e-tech-scroll)

Last synced: 4/1/2026
