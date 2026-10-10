# Bold Poster

- Source: <https://designmd.app/library/bold-poster>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:07.245Z

Editorial & Tipografia2020s Design Studio

# Bold Poster

Bold Poster — Editorial poster aesthetic with massive Shrikhand display and a single fire-engine red accent. Shrikhand typography. white and warm-cream paper with deep almost-black ink, lifted by a single satura. Best for brand manifesto, creative-led pitch, magazine / editorial. AI-ready design system.

Magazine posterShrikhandfire-engine rededitorialloudconfidenthigh typographic contrastmanifesto

Use case: brand manifesto, creative-led pitch, magazine / editorial, founder vision deck, art / culture

![Bold Poster](https://designmd.app/images/library/428.png)

## Historical Context

The oversized poster tradition owes everything to the reckless confidence of 1960s Swiss Punk and the Italian manifesti that plastered cinema walls with type so large you could read it from a moving Vespa. Shrikhand — a typeface born from Gujarati calligraphic traditions — carries that same unapologetic weight. Its thick strokes and high contrast weren't designed for body copy; they were designed to stop traffic. Fire-engine red as a background choice isn't decorative. It's confrontational. The combination references Constructivist propaganda posters, punk zine covers, and the raw energy of letterpress broadsides where ink pooled heavy in the counters. When you pair that red with display type scaled beyond reason, you're not designing a layout — you're engineering a physical reaction. The viewer doesn't read it. They feel it hit them. This template exists in the lineage of designers who understood that restraint is a choice, not a default. Sometimes the brief demands volume.

## When to Use

Deploy this when subtlety would be a disservice. Event announcements that need to cut through urban visual noise. Album drops. Protest graphics. Brand campaigns where the entire strategy is "be impossible to ignore." It works for magazine covers competing on newsstands, festival posters fighting for attention on wheat-pasted walls, and any moment where your client says "make it louder" and actually means it. Not for the faint-hearted or the committee-driven.

## Design Principles

- Scale is the message — if the type doesn't feel uncomfortably large in your design tool, it's not large enough for the street
- Red demands commitment: use it as a flood, never as an accent — half-measures read as indecision
- Let Shrikhand's weight do the work; never add strokes, shadows, or effects to a typeface that already commands the room
- Negative space is structural, not decorative — it exists to give the eye exactly one place to land
- Hierarchy through scale alone: two sizes maximum, because three choices means you made no choice at all

## DESIGN.md

```
---
version: "alpha"
name: "Bold Poster"
description: "Bold Poster — Editorial poster aesthetic with massive Shrikhand display and a single fire-engine red accent. Shrikhand typography. white and warm-cream paper with deep almost-black ink, lifted by a single satura. Best for brand manifesto, creative-led pitch, magazine / editorial. AI-ready design system."
colors:
primary: "#FFFFFF"
secondary: "#1C1410"
tertiary: "#D8000F"
neutral: "#F5F2EF"
typography:
h1:
fontFamily: Shrikhand
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Shrikhand
fontSize: 1rem
fontWeight: 400
spacing:
sm: 2.0rem
md: 4.0rem
lg: 8.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Bold Poster — Editorial poster aesthetic with massive Shrikhand display and a single fire-engine red accent. Shrikhand typography. white and warm-cream paper with deep almost-black ink, lifted by a single satura. Best for brand manifesto, creative-led pitch, magazine / editorial. AI-ready design system. The oversized poster tradition owes everything to the reckless confidence of 1960s Swiss Punk and the Italian manifesti that plastered cinema walls with type so large you could read it from a moving Vespa. Shrikhand — a typeface born from Gujarati calligraphic traditions — carries that same unapologetic weight. Its thick strokes and high contrast weren't designed for body copy; they were designed to stop traffic.

Fire-engine red as a background choice isn't decorative. It's confrontational. The combination references Constructivist propaganda posters, punk zine covers, and the raw energy of letterpress broadsides where ink pooled heavy in the counters. When you pair that red with display type scaled beyond reason, you're not designing a layout — you're engineering a physical reaction. The viewer doesn't read it. They feel it hit them.

This template exists in the lineage of designers who understood that restraint is a choice, not a default. Sometimes the brief demands volume.

- Density: 2/10 — Airy
- Variance: 5/10 — Moderate
- Motion: 7/10 — Kinetic

- **Style:** Editorial Poster, High-Contrast, Manifesto, Typographic
- **Keywords:** Magazine poster, Shrikhand, fire-engine red, editorial, loud, confident, high typographic contrast, manifesto
- **Era:** 2020s Design Studio
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Bg** (#FFFFFF) — Primary surface or dominant color
- **Dark** (#1C1410) — Accent highlight, links and focus states
- **Red** (#D8000F) — Secondary accent
- **Light** (#F5F2EF) — Accent color, emphasis elements

## Typography

- **Display / Hero:** Shrikhand — Weight 700, tight tracking, used for headline impact
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

display font Shrikhand for hero headlines, bold hover color shift (150ms), high-contrast active states, massive Shrikhand display text, fire-engine red single accent, poster-scale type, generous whitespace, clamp(4rem,8vw,8rem) section gaps

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

- Do Shrikhand display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)

## Use Case

brand manifesto, creative-led pitch, magazine / editorial, founder vision deck, art / culture
```

[Download DESIGN.md](https://designmd.app/library/bold-poster/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Shrikhand', cursive; background: #FFFFFF; color: #1C1410; --accent: #D8000F; font-size: clamp(3rem,8vw,7rem); letter-spacing: -0.02em
```

### Variables

```
--bg: #FFFFFF, --fg: #111111, --accent: #D8000F, --font-display: 'Shrikhand', --font-body: 'Space Grotesk', --radius: 0px, --spacing: 2rem
```

### Checklist

☐ Shrikhand display font loaded via Google Fonts, ☐ Color palette variables applied consistently, ☐ Typography scale: hero clamp(2.5rem,5vw,4rem), H1 2.25rem, body 1rem/1.6, ☐ WCAG AA contrast ratio verified (4.5:1 body text), ☐ Mobile responsive layout (stack below 768px)

## Colors

Primary

#FFFFFF

#1C1410

#D8000F

Secondary

#F5F2EF

### Effects

display font Shrikhand for hero headlines, bold hover color shift (150ms), high-contrast active states, massive Shrikhand display text, fire-engine red single accent, poster-scale type, generous whitespace, clamp(4rem,8vw,8rem) section gaps

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

- **Name:** Bold Poster
- **Type:** Editorial Poster, High-Contrast, Manifesto, Typographic
- **Keywords:** Magazine poster, Shrikhand, fire-engine red, editorial, loud, confident, high typographic contrast, manifesto
- **Era:** 2020s Design Studio
- **Light/Dark:** ✓ Full / ✗ None

## Color Palette

- **Primary:** Bg #FFFFFF, Dark #1C1410, Red #D8000F
- **Secondary:** Light #F5F2EF

## Visual Effects

display font Shrikhand for hero headlines, bold hover color shift (150ms), high-contrast active states, massive Shrikhand display text, fire-engine red single accent, poster-scale type, generous whitespace, clamp(4rem,8vw,8rem) section gaps

## AI Visual Direction

Design an editorial poster layout with massive Shrikhand display headlines. Use: white/cream backgrounds, deep almost-black ink (#1C1410), single fire-engine red accent (#D8000F), clamp(3rem,8vw,7rem) hero type, minimal copy per 'slide'. Feel: magazine cover, not a data deck.

## CSS Technical

```css
font-family: 'Shrikhand', cursive; background: #FFFFFF; color: #1C1410; --accent: #D8000F; font-size: clamp(3rem,8vw,7rem); letter-spacing: -0.02em
```

## Design System Variables

```css
--bg: #FFFFFF, --fg: #111111, --accent: #D8000F, --font-display: 'Shrikhand', --font-body: 'Space Grotesk', --radius: 0px, --spacing: 2rem
```

## Implementation Checklist

- ☐ Shrikhand display font loaded via Google Fonts
- ☐ Color palette variables applied consistently
- ☐ Typography scale: hero clamp(2.5rem,5vw,4rem)
- H1 2.25rem
- body 1rem/1.6
- ☐ WCAG AA contrast ratio verified (4.5:1 body text)
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
