# Cyberpunk UI

- Source: <https://designmd.app/library/cyberpunk-ui>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:08:35.250Z

Futurista & Tech2020s Cyberpunk

# Cyberpunk UI

Cyberpunk interface. Ideal for landing pages, saas. AI-ready template.

Neondark modeterminalHUDsci-figlitchdystopianfuturisticmatrixtech noir

Use case: Landing pages, SaaS

![Cyberpunk UI](https://designmd.app/images/library/41.png)

## Historical Context

The cyberpunk visual language didn't start in UI design. It started in rain-soaked cinematography — Ridley Scott's Blade Runner in 1982 gave us the blueprint: neon bleeding through fog, kanji stacked on megastructures, CRT glow on wet pavement. For decades it stayed in film and illustration. Then something shifted. The gaming industry legitimized it as interaction design. Deus Ex: Human Revolution introduced HUD overlays as a coherent UI system — not decoration, but functional information architecture rendered in amber and black. CD Projekt's Cyberpunk 2077 pushed further: scanlines, glitch transitions, data streams as navigation. Suddenly designers had a reference library for building real interfaces this way. What makes cyberpunk work as UI (not just aesthetic) is its roots in terminal culture. Monospace type, high-contrast color on dark backgrounds, information density — these aren't just vibes. They're the same principles that make developer tools readable at 2am. The style found its audience because the audience was already living in dark mode.

## When to Use

Reach for cyberpunk UI when your product lives in the space between technology and subculture. Crypto dashboards, blockchain explorers, game launchers, dev tools with personality — these are natural fits. It works when your users expect density over whitespace, when dark mode isn't a toggle but the entire identity. Skip it for anything requiring warmth, trust signals for mainstream audiences, or contexts where accessibility needs to come before atmosphere. This style rewards technical users who read interfaces like code.

## Design Principles

- Dark-first, always — pure black or near-black backgrounds with neon accents at 10-15% surface coverage maximum. The glow means nothing if everything glows.
- Information as aesthetic — treat data density as a feature. HUD overlays, stat readouts, coordinate displays. If it looks like a cockpit, you're on track.
- Controlled glitch — chromatic aberration, scanlines, and noise are seasoning, not the meal. One glitch effect per view. Two and you're a MySpace page.
- Monospace hierarchy — use terminal typefaces for data and system text, pair with a geometric sans for headings. The contrast between human and machine type creates tension.
- Color as signal — neon cyan, magenta, electric green aren't palette choices, they're semantic. Each color means something. Assign them to states and never break the mapping.

## DESIGN.md

```
---
version: "alpha"
name: "Cyberpunk UI"
description: "Cyberpunk interface. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#00FF00"
secondary: "#FF00FF"
tertiary: "#00FFFF"
neutral: "#0D0D0D"
typography:
h1:
fontFamily: monospace
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: monospace
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: monospace
fontSize: 0.75rem
fontWeight: 500
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Cyberpunk interface. Ideal for landing pages, saas. AI-ready template. The cyberpunk visual language didn't start in UI design. It started in rain-soaked cinematography — Ridley Scott's Blade Runner in 1982 gave us the blueprint: neon bleeding through fog, kanji stacked on megastructures, CRT glow on wet pavement. For decades it stayed in film and illustration. Then something shifted.

The gaming industry legitimized it as interaction design. Deus Ex: Human Revolution introduced HUD overlays as a coherent UI system — not decoration, but functional information architecture rendered in amber and black. CD Projekt's Cyberpunk 2077 pushed further: scanlines, glitch transitions, data streams as navigation. Suddenly designers had a reference library for building real interfaces this way.

What makes cyberpunk work as UI (not just aesthetic) is its roots in terminal culture. Monospace type, high-contrast color on dark backgrounds, information density — these aren't just vibes. They're the same principles that make developer tools readable at 2am. The style found its audience because the audience was already living in dark mode.

- Density: 8/10 — Dense
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Neon, Dark, Dystopian, High-Tech
- **Keywords:** Neon, dark mode, terminal, HUD, sci-fi, glitch, dystopian, futuristic, matrix, tech noir
- **Era:** 2020s Cyberpunk
- **Light/Dark:** ✗ No / ✓ Only

## Colors

- **#00FF00** (#00FF00) — Primary surface or dominant color
- **#FF00FF** (#FF00FF) — Secondary surface or text color
- **#00FFFF** (#00FFFF) — Supporting palette color
- **#0D0D0D** (#0D0D0D) — Supporting palette color

## Typography

- **Display / Hero:** monospace — Weight 700, tight tracking, used for headline impact
- **Body:** monospace — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** monospace — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** monospace — Used for code, metadata, and technical values

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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Neon glow (text-shadow), glitch animations (skew/offset), scanlines (::before overlay), terminal fonts

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Subtly rounded (0.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Subtly rounded (0.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.

## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Dark background only
- Do Neon accents visible
- Do Glitch effect subtle
- Do Scanlines optional
- Do Monospace font
- Do Terminal aesthetic

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/cyberpunk-ui/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #0D0D0D, color: #00FF00 or #FF00FF, font-family: monospace, text-shadow: 0 0 10px neon, animation: glitch (transform skew), ::before scanlines (repeating-linear-gradient)
```

### Variables

```
--bg-dark: #0D0D0D, --neon-green: #00FF00, --neon-magenta: #FF00FF, --neon-cyan: #00FFFF, --scanline-opacity: 0.1, --glitch-duration: 0.3s
```

### Checklist

☐ Dark background only, ☐ Neon accents visible, ☐ Glitch effect subtle, ☐ Scanlines optional, ☐ Monospace font, ☐ Terminal aesthetic

## Colors

Primary

#00FF00

#FF00FF

#00FFFF

#0D0D0D

### Effects

Neon glow (text-shadow), glitch animations (skew/offset), scanlines (::before overlay), terminal fonts

### Light/Dark

✗ No / ✓ Only

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Cyberpunk UI
- **Type:** Neon, Dark, Dystopian, High-Tech
- **Keywords:** Neon, dark mode, terminal, HUD, sci-fi, glitch, dystopian, futuristic, matrix, tech noir
- **Era:** 2020s Cyberpunk
- **Light/Dark:** ✗ No / ✓ Only

## Color Palette

- **Primary:** #00FF00 (Matrix Green), #FF00FF (Magenta), #00FFFF (Cyan), #0D0D0D (Dark)
- **Secondary:** Neon gradients, scanline overlays, glitch colors, terminal green accents

## Visual Effects

Neon glow (text-shadow), glitch animations (skew/offset), scanlines (::before overlay), terminal fonts

## AI Visual Direction

Design a cyberpunk interface. Use: neon colors on dark (#0D0D0D), terminal/HUD aesthetic, glitch effects, scanlines overlay, matrix green accents, monospace fonts, angular shapes, dystopian tech feel.

## CSS Technical

```css
background: #0D0D0D, color: #00FF00 or #FF00FF, font-family: monospace, text-shadow: 0 0 10px neon, animation: glitch (transform skew), ::before scanlines (repeating-linear-gradient)
```

## Design System Variables

```css
--bg-dark: #0D0D0D, --neon-green: #00FF00, --neon-magenta: #FF00FF, --neon-cyan: #00FFFF, --scanline-opacity: 0.1, --glitch-duration: 0.3s
```

## Implementation Checklist

- ☐ Dark background only
- ☐ Neon accents visible
- ☐ Glitch effect subtle
- ☐ Scanlines optional
- ☐ Monospace font
- ☐ Terminal aesthetic

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

[![Chromatic Aberration / RGB Split](https://designmd.app/images/library/67.png) Futurista & Tech ### Chromatic Aberration / RGB Split](https://designmd.app/library/chromatic-aberration-rgb-split)[![Vaporwave](https://designmd.app/images/library/45.png) Retro & Pop ### Vaporwave](https://designmd.app/library/vaporwave-45)[![HUD / Sci-Fi FUI](https://designmd.app/images/library/51.png) Futurista & Tech ### HUD / Sci-Fi FUI](https://designmd.app/library/hud-sci-fi-fui)[![Cyber-Tribal](https://designmd.app/images/library/105.png) Futurista & Tech ### Cyber-Tribal](https://designmd.app/library/cyber-tribal)[![Afrofuturismo Digital](https://designmd.app/images/library/111.png) Temas & Verticais ### Afrofuturismo Digital](https://designmd.app/library/afrofuturismo-digital)

Last synced: 4/1/2026
