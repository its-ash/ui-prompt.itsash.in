# Cobalt Grid

- Source: <https://designmd.app/library/cobalt-grid>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:14.314Z

Editorial & Tipografia2010s Editorial

# Cobalt Grid

Cobalt Grid — Electric cobalt italic serifs on a graph-paper canvas, anchored by stair-stepped pixel-glitch decorations and slim hairline rules. Newsreader (italic) typography. warm cream / ivory paper canvas with one strict accent of electric cobalt royal . Best for design trend or research report, studio annual or seasonal bulletin, creative agency capabilities deck. AI-ready design system.

Graph-paper gridelectric cobaltbichromaticdesign researchNewsreader italicstair-step pixelstudious

Use case: design trend or research report, studio annual or seasonal bulletin, creative agency capabilities deck, art or architecture publication, academic / curatorial publication, newsletter or zine pitch

![Cobalt Grid](https://designmd.app/images/library/432.png)

## Historical Context

The graph-paper grid didn't start as a design choice — it started as an engineering necessity. Millimeter paper, isometric sheets, the blue-lined notebooks that aerospace engineers filled with thrust calculations in the 1960s. That substrate wasn't decorative. It was infrastructure for precision thinking. Cobalt Grid takes that lineage seriously. The electric cobalt isn't arbitrary — it descends from the cyanotype process, the original blueprinting method where ferric ammonium citrate met UV light and produced that unmistakable Prussian blue. Engineers didn't choose blue; chemistry chose it for them. What we're doing here is acknowledging that constraint as aesthetic heritage. The bichromatic restriction is the real statement. Two colors force hierarchy through weight, density, and spatial rhythm rather than chromatic variety. It's the typographic equivalent of proving your argument without raising your voice. Every technical publication worth remembering — from Tufte's work to the original Braun manuals — understood that restraint communicates competence.

## When to Use

Deploy Cobalt Grid when your product speaks to people who read datasheets for fun. Developer tools, engineering platforms, scientific instrumentation interfaces, fintech dashboards where precision isn't a feature — it's the entire value proposition. This system falls apart the moment you need warmth or approachability. That's not a flaw. It's a filter. If your brand needs to feel human and friendly, walk away. If it needs to feel correct, you're home.

## Design Principles

- Precision over decoration — every grid line serves spatial logic, never ornament. If a line doesn't help the eye measure or align, delete it.
- Bichromatic discipline — two colors maximum. Hierarchy lives in weight, opacity, and density. The moment you reach for a third hue, you've lost the plot.
- Typography carries the load — with color restrained, type size contrast does the heavy lifting. Set your scale ratio aggressive: 1.414 minimum. Timid scales disappear against the grid.
- The grid is content, not background — treat the graph-paper substrate as a first-class design element. It participates in composition. It's not wallpaper behind your layout; it IS your layout's skeleton made visible.
- Engineered whitespace — space isn't empty, it's measured. Margins and gutters should feel calculated, not comfortable. This system rewards mathematical spacing over optical balancing.

## DESIGN.md

```
---
version: "alpha"
name: "Cobalt Grid"
description: "Cobalt Grid — Electric cobalt italic serifs on a graph-paper canvas, anchored by stair-stepped pixel-glitch decorations and slim hairline rules. Newsreader (italic) typography. warm cream / ivory paper canvas with one strict accent of electric cobalt royal . Best for design trend or research report, studio annual or seasonal bulletin, creative agency capabilities deck. AI-ready design system."
colors:
primary: "#F0EBDE"
secondary: "#1F2BE0"
tertiary: "#5560E5"
typography:
h1:
fontFamily: Newsreader
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Newsreader
fontSize: 1rem
fontWeight: 400
spacing:
sm: 1.5rem
md: 3.0rem
lg: 6.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
padding: 12px
---

## Overview

Cobalt Grid — Electric cobalt italic serifs on a graph-paper canvas, anchored by stair-stepped pixel-glitch decorations and slim hairline rules. Newsreader (italic) typography. warm cream / ivory paper canvas with one strict accent of electric cobalt royal . Best for design trend or research report, studio annual or seasonal bulletin, creative agency capabilities deck. AI-ready design system. The graph-paper grid didn't start as a design choice — it started as an engineering necessity. Millimeter paper, isometric sheets, the blue-lined notebooks that aerospace engineers filled with thrust calculations in the 1960s. That substrate wasn't decorative. It was infrastructure for precision thinking.

Cobalt Grid takes that lineage seriously. The electric cobalt isn't arbitrary — it descends from the cyanotype process, the original blueprinting method where ferric ammonium citrate met UV light and produced that unmistakable Prussian blue. Engineers didn't choose blue; chemistry chose it for them. What we're doing here is acknowledging that constraint as aesthetic heritage.

The bichromatic restriction is the real statement. Two colors force hierarchy through weight, density, and spatial rhythm rather than chromatic variety. It's the typographic equivalent of proving your argument without raising your voice. Every technical publication worth remembering — from Tufte's work to the original Braun manuals — understood that restraint communicates competence.

- Density: 5/10 — Balanced
- Variance: 8/10 — Complex
- Motion: 4/10 — Subtle

- **Style:** Design-Research, Bichromatic, Grid-Based, Editorial
- **Keywords:** Graph-paper grid, electric cobalt, bichromatic, design research, Newsreader italic, stair-step pixel, studious
- **Era:** 2010s Editorial
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Paper** (#F0EBDE) — Primary surface or dominant color
- **Ink** (#1F2BE0) — Accent highlight, links and focus states
- **Ink-Soft** (#5560E5) — Secondary accent

## Typography

- **Display / Hero:** Newsreader (italic) — Weight 700, tight tracking, used for headline impact
- **Body:** Hanken Grotesk — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Hanken Grotesk — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** DM Mono — Used for code, metadata, and technical values

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

display font Newsreader (italic) for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, graph-paper grid overlay (10% cobalt), stair-step pixel decorations, hairline rules

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

- Do Newsreader (italic) display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Grid overlay or texture applied
- Do Whitespace generous — section gaps ≥ 5rem
- Do Mobile responsive layout (stack below 768px)

## Use Case

design trend or research report, studio annual or seasonal bulletin, creative agency capabilities deck, art or architecture publication, academic / curatorial publication, newsletter or zine pitch
```

[Download DESIGN.md](https://designmd.app/library/cobalt-grid/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Newsreader', serif; font-style: italic; background: #F0EBDE; color: #1F2BE0; border: 1px solid rgba(31,43,224,0.2); background-image: linear-gradient(rgba(31,43,224,0.08) 1px, transparent 1px)
```

### Variables

```
--bg: #F0EBDE, --fg: #1F2BE0, --accent: #1F2BE0, --font-display: 'Newsreader (italic)', --font-body: 'Hanken Grotesk', --radius: 0px, --spacing: 1.5rem
```

### Checklist

☐ Newsreader (italic) display font loaded via Google Fonts, ☐ Color palette variables applied consistently, ☐ Typography scale: hero clamp(2.5rem,5vw,4rem), H1 2.25rem, body 1rem/1.6, ☐ WCAG AA contrast ratio verified (4.5:1 body text), ☐ Grid overlay or texture applied, ☐ Whitespace generous — section gaps ≥ 5rem, ☐ Mobile responsive layout (stack below 768px)

## Colors

Primary

#F0EBDE

#1F2BE0

#5560E5

### Effects

display font Newsreader (italic) for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, graph-paper grid overlay (10% cobalt), stair-step pixel decorations, hairline rules

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

- **Name:** Cobalt Grid
- **Type:** Design-Research, Bichromatic, Grid-Based, Editorial
- **Keywords:** Graph-paper grid, electric cobalt, bichromatic, design research, Newsreader italic, stair-step pixel, studious
- **Era:** 2010s Editorial
- **Light/Dark:** ✓ Full / ✗ None

## Color Palette

- **Primary:** Paper #F0EBDE, Ink #1F2BE0, Ink-Soft #5560E5
- **Secondary:** Tints/shades of primary, keeping the deck strictly bichromatic

## Visual Effects

display font Newsreader (italic) for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, graph-paper grid overlay (10% cobalt), stair-step pixel decorations, hairline rules

## AI Visual Direction

Design a design-research bulletin on warm cream (#F0EBDE). Use: electric cobalt (#1F2BE0) as ONLY accent, graph-paper grid overlay (1px cobalt lines at 10% opacity), Newsreader italic for headers, Hanken Grotesk for body, DM Mono for data, stair-step pixel decorations in cobalt. Strictly bichromatic.

## CSS Technical

```css
font-family: 'Newsreader', serif; font-style: italic; background: #F0EBDE; color: #1F2BE0; border: 1px solid rgba(31,43,224,0.2); background-image: linear-gradient(rgba(31,43,224,0.08) 1px, transparent 1px)
```

## Design System Variables

```css
--bg: #F0EBDE, --fg: #1F2BE0, --accent: #1F2BE0, --font-display: 'Newsreader (italic)', --font-body: 'Hanken Grotesk', --radius: 0px, --spacing: 1.5rem
```

## Implementation Checklist

- ☐ Newsreader (italic) display font loaded via Google Fonts
- ☐ Color palette variables applied consistently
- ☐ Typography scale: hero clamp(2.5rem,5vw,4rem)
- H1 2.25rem
- body 1rem/1.6
- ☐ WCAG AA contrast ratio verified (4.5:1 body text)
- ☐ Grid overlay or texture applied
- ☐ Whitespace generous — section gaps ≥ 5rem
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

[![Inclusive Design](https://designmd.app/images/library/17.png) Temas & Verticais ### Inclusive Design](https://designmd.app/library/inclusive-design)[![Feature-Rich Showcase](https://designmd.app/images/library/22.png) Editorial & Tipografia ### Feature-Rich Showcase](https://designmd.app/library/feature-rich-showcase)[![Real-Time Monitoring](https://designmd.app/images/library/31.png) Dados & Infografico ### Real-Time Monitoring](https://designmd.app/library/real-time-monitoring)[![Vaporwave](https://designmd.app/images/library/45.png) Retro & Pop ### Vaporwave](https://designmd.app/library/vaporwave-45)[![Voice-First Multimodal](https://designmd.app/images/library/63.png) Temas & Verticais ### Voice-First Multimodal](https://designmd.app/library/voice-first-multimodal)

Last synced: 5/6/2026
