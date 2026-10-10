# E-Ink / Paper

- Source: <https://designmd.app/library/e-ink-paper>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:12:53.341Z

Minimalismo & Swiss2020s Digital Well-being

# E-Ink / Paper

Design an e-ink/paper style interface. Ideal for landing pages, saas. AI-ready template.

Paper-likemattehigh contrasttexturereadingcalmslow techmonochrome

Use case: Landing pages, SaaS

![E-Ink / Paper](https://designmd.app/images/library/56.png)

## Historical Context

E-ink changed how we think about screens. Not by adding pixels — by removing everything that made screens exhausting. When Amazon shipped the Kindle in 2007, it wasn't just a reading device. It was a quiet argument: maybe interfaces don't need to glow. The reMarkable tablet pushed this further. A $400 device that deliberately couldn't do most things. No color. No apps. No notifications. Just paper-like texture under a stylus. Designers noticed. If people were paying premium prices for *less*, something had shifted. By the early 2020s, digital well-being wasn't a niche concern — it was a design constraint. Screen Time reports made overuse visible. Grayscale mode became a wellness hack. And slowly, web designers started borrowing the vocabulary of paper: matte surfaces, generous whitespace, typography that breathes. Calm technology — Amber Case's term from 2015 — finally had a visual language. Not retro. Not skeuomorphic. Just... quiet. Interfaces that respect the reader's attention as a finite resource.

## When to Use

Reach for this when the content matters more than the container. Reading-heavy apps, documentation sites, note-taking tools, journaling interfaces — anywhere sustained attention is the goal. It works beautifully for digital well-being products that need to practice what they preach. Also strong for long-form editorial, knowledge bases, and any context where users spend 10+ minutes per session. Skip it for dashboards, e-commerce, or anything requiring quick scanning across many data points.

## Design Principles

- Content is the interface — strip chrome until only the words remain. If a UI element doesn't serve the reader, it's noise.
- Matte over luminance — favor warm whites (#FAFAF8, not #FFFFFF), subtle texture, and backgrounds that don't compete with text. Screens should feel like paper, not lightboxes.
- Typographic hierarchy does the heavy lifting — with minimal color and no decorative elements, your type system must be impeccable. Size, weight, and spacing become your only tools. Use them precisely.
- Respect temporal attention — no autoplay, no infinite scroll traps, no engagement dark patterns. Design for sessions that end. Progress indicators, bookmarks, estimated read times.
- High contrast where it counts — pare the palette to near-monochrome, then use contrast strategically. Black text on warm white. One accent color, used sparingly, only for actionable elements.

## DESIGN.md

```
---
version: "alpha"
name: "E-Ink / Paper"
description: "Design an e-ink/paper style interface. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#FDFBF7"
secondary: "#F5F5F5"
tertiary: "#1A1A1A"
neutral: "#4A4A4A"
surface: "#FFFF00"
typography:
h1:
fontFamily: serif for reading
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: serif for reading
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: serif for reading
fontSize: 0.75rem
fontWeight: 500
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an e-ink/paper style interface. Ideal for landing pages, saas. AI-ready template. E-ink changed how we think about screens. Not by adding pixels — by removing everything that made screens exhausting. When Amazon shipped the Kindle in 2007, it wasn't just a reading device. It was a quiet argument: maybe interfaces don't need to glow.

The reMarkable tablet pushed this further. A $400 device that deliberately couldn't do most things. No color. No apps. No notifications. Just paper-like texture under a stylus. Designers noticed. If people were paying premium prices for *less*, something had shifted.

By the early 2020s, digital well-being wasn't a niche concern — it was a design constraint. Screen Time reports made overuse visible. Grayscale mode became a wellness hack. And slowly, web designers started borrowing the vocabulary of paper: matte surfaces, generous whitespace, typography that breathes. Calm technology — Amber Case's term from 2015 — finally had a visual language. Not retro. Not skeuomorphic. Just... quiet. Interfaces that respect the reader's attention as a finite resource.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** Paper-Like, Minimal, Calm, Readable
- **Keywords:** Paper-like, matte, high contrast, texture, reading, calm, slow tech, monochrome
- **Era:** 2020s Digital Well-being
- **Light/Dark:** ✓ Full / ✗ Low (inverted only)

## Colors

- **Off-White** (#FDFBF7) — Light surface, card backgrounds
- **Paper White** (#F5F5F5) — Light surface, card backgrounds
- **Ink Black** (#1A1A1A) — Dark surface, primary background
- **Pencil Grey** (#4A4A4A) — Secondary text, borders, muted elements
- **Highlighter Yellow** (#FFFF00) — Warning states, attention indicators

## Typography

- **Display / Hero:** serif for reading — Weight 700, tight tracking, used for headline impact
- **Body:** serif for reading — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** serif for reading — 0.875rem, weight 500, slight letter-spacing
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

No motion blur, distinct page turns, grain/noise texture, sharp transitions (no fade)

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Paper background color
- Do High contrast text
- Do No animations
- Do Reading optimized
- Do Distraction-free
- Do Print-friendly

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/e-ink-paper/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FDFBF7 (paper white), color: #1A1A1A, transition: none, font-family: serif for reading, no gradients, border: 1px solid #E0E0E0, texture overlay (noise)
```

### Variables

```
--paper-bg: #FDFBF7, --ink-color: #1A1A1A, --pencil-grey: #4A4A4A, --border-color: #E0E0E0, --font-reading: Georgia, --transition: none
```

### Checklist

☐ Paper background color, ☐ High contrast text, ☐ No animations, ☐ Reading optimized, ☐ Distraction-free, ☐ Print-friendly

## Colors

Primary

#FDFBF7

#F5F5F5

#1A1A1A

Secondary

#4A4A4A

#FFFF00

### Effects

No motion blur, distinct page turns, grain/noise texture, sharp transitions (no fade)

### Light/Dark

✓ Full / ✗ Low (inverted only)

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** E-Ink / Paper
- **Type:** Paper-Like, Minimal, Calm, Readable
- **Keywords:** Paper-like, matte, high contrast, texture, reading, calm, slow tech, monochrome
- **Era:** 2020s Digital Well-being
- **Light/Dark:** ✓ Full / ✗ Low (inverted only)

## Color Palette

- **Primary:** Off-White #FDFBF7, Paper White #F5F5F5, Ink Black #1A1A1A
- **Secondary:** Pencil Grey #4A4A4A, Highlighter Yellow #FFFF00 (accent)

## Visual Effects

No motion blur, distinct page turns, grain/noise texture, sharp transitions (no fade)

## AI Visual Direction

Design an e-ink/paper style interface. Use: high contrast black on off-white, paper texture, no animations (instant transitions), reading-focused, minimal UI chrome, distraction-free, calm aesthetic, monochrome.

## CSS Technical

```css
background: #FDFBF7 (paper white), color: #1A1A1A, transition: none, font-family: serif for reading, no gradients, border: 1px solid #E0E0E0, texture overlay (noise)
```

## Design System Variables

```css
--paper-bg: #FDFBF7, --ink-color: #1A1A1A, --pencil-grey: #4A4A4A, --border-color: #E0E0E0, --font-reading: Georgia, --transition: none
```

## Implementation Checklist

- ☐ Paper background color
- ☐ High contrast text
- ☐ No animations
- ☐ Reading optimized
- ☐ Distraction-free
- ☐ Print-friendly

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

[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)[![Inclusive Design](https://designmd.app/images/library/17.png) Temas & Verticais ### Inclusive Design](https://designmd.app/library/inclusive-design)[![Brutalism](https://designmd.app/images/library/4.png) Brutalismo ### Brutalism](https://designmd.app/library/brutalism-4)[![Dark Mode (OLED)](https://designmd.app/images/library/7.png) Temas & Verticais ### Dark Mode (OLED)](https://designmd.app/library/dark-mode-oled)[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)

Last synced: 4/1/2026
