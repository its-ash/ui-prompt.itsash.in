# Neo-Grid Bold

- Source: <https://designmd.app/library/neo-grid-bold>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:28.320Z

Brutalismo2020s Neo-Brutalist

# Neo-Grid Bold

Neo-Grid Bold — Editorial neo-brutalism with a single neon yellow accent on off-white paper. Space Grotesk typography. off-white paper background, ink black, signature neon yellow accent used sparing. Best for product launch, design review, founder pitch. AI-ready design system.

Neon yellowneo-brutalistBebas Neueeditorialoff-whiteconfidentgraphicstat-heavy

Use case: product launch, design review, founder pitch, brand deck, consulting findings, conference talk

![Neo-Grid Bold](https://designmd.app/images/library/440.png)

## Historical Context

Neo-brutalism didn't emerge from nowhere — it's the rebellious grandchild of Swiss modernism filtered through 90s rave flyers and early-web geocities chaos. When designers got tired of the same rounded-corner, soft-shadow SaaS aesthetic dominating every landing page from 2016 onward, they reached back to Brutalist architecture's raw concrete honesty and slammed it into digital interfaces. The movement gained real traction around 2019-2021 when studios like Locomotive and agencies tired of "clean" started shipping work with hard edges, visible grids, and colors that hurt. Neo-Grid Bold takes this lineage and pushes the structural obsession further. Where early neo-brutalism was often chaotic — overlapping elements, broken layouts — this approach imposes a rigid, thick-bordered grid system that contains the energy without killing it. Bebas Neue isn't decorative here; it's architectural. Each letterform becomes a structural column. The neon yellow isn't accent — it's load-bearing. You're looking at punk rock that learned drafting.

## When to Use

When your client's brand needs to scream in a room full of whispers. Neo-Grid Bold works for creative studios launching portfolios, experimental product brands that want zero confusion about their positioning, and any startup whose founders said "we are NOT doing another gradient mesh hero." It falls apart for healthcare, finance, or anything requiring trust signals over personality. This is a system for brands that already have conviction — it won't manufacture it for you.

## Design Principles

- Structure is the rebellion — the thick grid isn't decoration, it's the entire point. Every element earns its cell or it doesn't exist.
- Neon yellow is structural, never decorative — use it to define boundaries, highlight active states, and create visual load-bearing walls. Never as a "fun accent."
- Typography at architectural scale — Bebas Neue set large enough to feel like signage, not headlines. If it could fit on a building facade, you're in the right range.
- No comfort radius — zero border-radius, no easing on transitions, no soft anything. Corners are sharp because decisions should be too.
- Density over whitespace — neo-brutalism earns its impact through compression. Pack the grid tight, let elements breathe only through border thickness, not empty space.

## DESIGN.md

```
---
version: "alpha"
name: "Neo-Grid Bold"
description: "Neo-Grid Bold — Editorial neo-brutalism with a single neon yellow accent on off-white paper. Space Grotesk typography. off-white paper background, ink black, signature neon yellow accent used sparing. Best for product launch, design review, founder pitch. AI-ready design system."
colors:
primary: "#ECECE8"
secondary: "#0A0A0A"
tertiary: "#F5F4EF"
neutral: "#E6FF3D"
surface: "#8A8A85"
typography:
h1:
fontFamily: Bebas Neue
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Bebas Neue
fontSize: 1rem
fontWeight: 400
spacing:
sm: 1.0rem
md: 2.0rem
lg: 4.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Neo-Grid Bold — Editorial neo-brutalism with a single neon yellow accent on off-white paper. Space Grotesk typography. off-white paper background, ink black, signature neon yellow accent used sparing. Best for product launch, design review, founder pitch. AI-ready design system. Neo-brutalism didn't emerge from nowhere — it's the rebellious grandchild of Swiss modernism filtered through 90s rave flyers and early-web geocities chaos. When designers got tired of the same rounded-corner, soft-shadow SaaS aesthetic dominating every landing page from 2016 onward, they reached back to Brutalist architecture's raw concrete honesty and slammed it into digital interfaces. The movement gained real traction around 2019-2021 when studios like Locomotive and agencies tired of "clean" started shipping work with hard edges, visible grids, and colors that hurt.

Neo-Grid Bold takes this lineage and pushes the structural obsession further. Where early neo-brutalism was often chaotic — overlapping elements, broken layouts — this approach imposes a rigid, thick-bordered grid system that contains the energy without killing it. Bebas Neue isn't decorative here; it's architectural. Each letterform becomes a structural column. The neon yellow isn't accent — it's load-bearing. You're looking at punk rock that learned drafting.

- Density: 8/10 — Dense
- Variance: 5/10 — Moderate
- Motion: 7/10 — Kinetic

- **Style:** Neo-Brutalist, Editorial, Neon-Accent, Graphic
- **Keywords:** Neon yellow, neo-brutalist, Bebas Neue, editorial, off-white, confident, graphic, stat-heavy
- **Era:** 2020s Neo-Brutalist
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Bg** (#ECECE8) — Primary surface or dominant color
- **Ink** (#0A0A0A) — Accent highlight, links and focus states
- **Paper** (#F5F4EF) — Secondary accent
- **Accent** (#E6FF3D) — Accent color, emphasis elements
- **Muted** (#8A8A85) — Extended palette, decorative use

## Typography

- **Display / Hero:** Space Grotesk — Weight 700, tight tracking, used for headline impact
- **Body:** Space Grotesk — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Space Grotesk — 0.875rem, weight 500, slight letter-spacing
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

display font Space Grotesk for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, neon-yellow single accent on off-white, thick border columns, high-contrast stats, dense grid, compact 1.2rem gaps

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** 0px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 0px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Space Grotesk display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Brutalist borders 2-3px solid applied
- Do Offset box-shadow on cards
- Do Mobile responsive layout (stack below 768px)

## Use Case

product launch, design review, founder pitch, brand deck, consulting findings, conference talk
```

[Download DESIGN.md](https://designmd.app/library/neo-grid-bold/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Bebas Neue', sans-serif; background: #F5F5EE; color: #111111; --accent: #D4E000; border: 2px solid #111111; text-transform: uppercase
```

### Variables

```
--bg: #ECECE8, --fg: #0A0A0A, --accent: #0A0A0A, --font-display: 'Space Grotesk', --font-body: 'Space Grotesk', --radius: 0px, --spacing: 1rem
```

### Checklist

☐ Space Grotesk display font loaded via Google Fonts, ☐ Color palette variables applied consistently, ☐ Typography scale: hero clamp(2.5rem,5vw,4rem), H1 2.25rem, body 1rem/1.6, ☐ WCAG AA contrast ratio verified (4.5:1 body text), ☐ Brutalist borders 2-3px solid applied, ☐ Offset box-shadow on cards, ☐ Mobile responsive layout (stack below 768px)

## Colors

Primary

#ECECE8

#0A0A0A

#F5F4EF

Secondary

#E6FF3D

#8A8A85

### Effects

display font Space Grotesk for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, neon-yellow single accent on off-white, thick border columns, high-contrast stats, dense grid, compact 1.2rem gaps

### Light/Dark

✓ Full / ✗ None

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Neo-Grid Bold
- **Type:** Neo-Brutalist, Editorial, Neon-Accent, Graphic
- **Keywords:** Neon yellow, neo-brutalist, Bebas Neue, editorial, off-white, confident, graphic, stat-heavy
- **Era:** 2020s Neo-Brutalist
- **Light/Dark:** ✓ Full / ✗ None

## Color Palette

- **Primary:** Bg #ECECE8, Ink #0A0A0A, Paper #F5F4EF
- **Secondary:** Accent #E6FF3D, Muted #8A8A85

## Visual Effects

display font Space Grotesk for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, neon-yellow single accent on off-white, thick border columns, high-contrast stats, dense grid, compact 1.2rem gaps

## AI Visual Direction

Design an editorial neo-brutalist layout. Use: off-white paper (#F5F5EE), neon yellow (#D4E000) as ONLY accent, Bebas Neue uppercase display, 2px black borders on columns, thick rule lines. High-density stat slides. Confident graphic voice.

## CSS Technical

```css
font-family: 'Bebas Neue', sans-serif; background: #F5F5EE; color: #111111; --accent: #D4E000; border: 2px solid #111111; text-transform: uppercase
```

## Design System Variables

```css
--bg: #ECECE8, --fg: #0A0A0A, --accent: #0A0A0A, --font-display: 'Space Grotesk', --font-body: 'Space Grotesk', --radius: 0px, --spacing: 1rem
```

## Implementation Checklist

- ☐ Space Grotesk display font loaded via Google Fonts
- ☐ Color palette variables applied consistently
- ☐ Typography scale: hero clamp(2.5rem,5vw,4rem)
- H1 2.25rem
- body 1rem/1.6
- ☐ WCAG AA contrast ratio verified (4.5:1 body text)
- ☐ Brutalist borders 2-3px solid applied
- ☐ Offset box-shadow on cards
- ☐ Mobile responsive layout (stack below 768px)

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

[![Brutalism](https://designmd.app/images/library/4.png) Brutalismo ### Brutalism](https://designmd.app/library/brutalism-4)[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)[![Swiss Modernism 2.0](https://designmd.app/images/library/50.png) Minimalismo & Swiss ### Swiss Modernism 2.0](https://designmd.app/library/swiss-modernism-2-0)[![E-Ink / Paper](https://designmd.app/images/library/56.png) Minimalismo & Swiss ### E-Ink / Paper](https://designmd.app/library/e-ink-paper)[![Brutalist Web Design](https://designmd.app/images/library/115.png) Brutalismo ### Brutalist Web Design](https://designmd.app/library/brutalist-web-design)

Last synced: 5/6/2026
