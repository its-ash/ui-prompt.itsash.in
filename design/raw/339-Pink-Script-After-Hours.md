# Pink Script — After Hours

- Source: <https://designmd.app/library/pink-script>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:33.385Z

Editorial & Tipografia2020s Design Studio

# Pink Script — After Hours

Pink Script — After Hours — Black canvas, hot pink accent, pearl-cream paper, Instrument Serif headlines: late-night editorial luxury. Instrument Serif typography. near-black canvas with one saturated hot pink accent and a pearl-cream paper for. Best for fashion brand deck, creator personal brand, after-hours product (nightlife / dating / spirits). AI-ready design system.

Hot pinknear-black canvasInstrument Serif italicnocturnalluxemagazinelow density

Use case: fashion brand deck, creator personal brand, after-hours product (nightlife / dating / spirits), luxury launch, editorial feature

![Pink Script — After Hours](https://designmd.app/images/library/443.png)

## Historical Context

Hot pink as a typographic color has always been confrontational. It refuses to sit quietly on a page. The pairing with near-black backgrounds traces back to 1980s nightclub flyers and punk zines — spaces where legibility was secondary to attitude. Designers like Neville Brody and the Face magazine era understood that fluorescent hues against dark fields created an almost phosphorescent glow, mimicking neon signage viewed through rain-slicked streets. Instrument Serif in italic carries a specific weight here. Unlike the overwrought script faces that dominate nightlife branding, it maintains editorial credibility while still moving. The italic slant suggests forward motion, late nights, momentum. It's the difference between a cocktail menu that looks like a wedding invitation and one that looks like it belongs in a dimly lit room where interesting people gather. This combination — hot pink, near-black canvas, serif italic — is essentially a distillation of after-hours culture into typographic form. It's the visual equivalent of a whispered invitation to somewhere better.

## When to Use

Deploy this when the brand lives after sunset. Cocktail bars with no signage. Members-only lounges. Late-night editorial. Feminine luxury that isn't precious — think Rihanna's Fenty, not Tiffany's. It works for event invitations, menu design, social content for nightlife venues, and editorial mastheads that want to signal sophistication without stuffiness. Avoid it for anything that needs to function before 9pm or communicate trustworthiness to a broad audience.

## Design Principles

- Let the pink breathe — never fill more than 15% of the canvas. Scarcity creates desire. The near-black does the heavy lifting; pink is the punctuation.
- Italic only for display. The moment you set body copy in Instrument Serif italic on a dark background, you've killed readability and the entire mood collapses into a parody of itself.
- Reject pure black (#000). Use a warm near-black (think #0D0A0B or #1A1118) that carries a subtle warmth — it makes the pink feel intentional rather than slapped on.
- Scale creates hierarchy, not weight. At display sizes, let the serif's thin strokes do their work. Going bold defeats the elegance. Think 72pt minimum for headlines, whisper-thin.
- Pair with restraint. One sans-serif for utility text, nothing decorative. The script-like quality of the italic serif is your single indulgence — everything else serves it silently.

## DESIGN.md

```
---
version: "alpha"
name: "Pink Script — After Hours"
description: "Pink Script — After Hours — Black canvas, hot pink accent, pearl-cream paper, Instrument Serif headlines: late-night editorial luxury. Instrument Serif typography. near-black canvas with one saturated hot pink accent and a pearl-cream paper for. Best for fashion brand deck, creator personal brand, after-hours product (nightlife / dating / spirits). AI-ready design system."
colors:
primary: "#060507"
secondary: "#F5EDF1"
tertiary: "#ED3D8C"
neutral: "#FF66A8"
surface: "#B81D67"
typography:
h1:
fontFamily: Instrument Serif
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Instrument Serif
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

Pink Script — After Hours — Black canvas, hot pink accent, pearl-cream paper, Instrument Serif headlines: late-night editorial luxury. Instrument Serif typography. near-black canvas with one saturated hot pink accent and a pearl-cream paper for. Best for fashion brand deck, creator personal brand, after-hours product (nightlife / dating / spirits). AI-ready design system. Hot pink as a typographic color has always been confrontational. It refuses to sit quietly on a page. The pairing with near-black backgrounds traces back to 1980s nightclub flyers and punk zines — spaces where legibility was secondary to attitude. Designers like Neville Brody and the Face magazine era understood that fluorescent hues against dark fields created an almost phosphorescent glow, mimicking neon signage viewed through rain-slicked streets.

Instrument Serif in italic carries a specific weight here. Unlike the overwrought script faces that dominate nightlife branding, it maintains editorial credibility while still moving. The italic slant suggests forward motion, late nights, momentum. It's the difference between a cocktail menu that looks like a wedding invitation and one that looks like it belongs in a dimly lit room where interesting people gather.

This combination — hot pink, near-black canvas, serif italic — is essentially a distillation of after-hours culture into typographic form. It's the visual equivalent of a whispered invitation to somewhere better.

- Density: 2/10 — Airy
- Variance: 6/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Nocturnal Luxury, Italic-Serif, High-Contrast, Editorial
- **Keywords:** Hot pink, near-black canvas, Instrument Serif italic, nocturnal, luxe, magazine, low density
- **Era:** 2020s Design Studio
- **Light/Dark:** ✗ None / ✓ Full

## Colors

- **Ink** (#060507) — Primary surface or dominant color
- **Paper** (#F5EDF1) — Accent highlight, links and focus states
- **Pink** (#ED3D8C) — Secondary accent
- **Pink 2** (#FF66A8) — Accent color, emphasis elements
- **Pink Deep** (#B81D67) — Extended palette, decorative use

## Typography

- **Display / Hero:** Instrument Serif — Weight 700, tight tracking, used for headline impact
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

display font Instrument Serif for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, dark canvas with glow/shadow accents, hot-pink italic accent on near-black canvas, pearl-cream paper slides, generous whitespace, clamp(4rem,8vw,8rem) section gaps

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** 4px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 4px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Instrument Serif display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Dark background contrast ≥ 7:1 for body text
- Do Mobile responsive layout (stack below 768px)

## Use Case

fashion brand deck, creator personal brand, after-hours product (nightlife / dating / spirits), luxury launch, editorial feature
```

[Download DESIGN.md](https://designmd.app/library/pink-script/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Instrument Serif', serif; font-style: italic; background: #111111; color: #E8E0D0; --accent: #E820A0; border-bottom: 2px solid #E820A0
```

### Variables

```
--bg: #F5EDF1, --fg: #060507, --accent: #060507, --font-display: 'Instrument Serif', --font-body: 'Inter', --radius: 4px, --spacing: 2rem
```

### Checklist

☐ Instrument Serif display font loaded via Google Fonts, ☐ Color palette variables applied consistently, ☐ Typography scale: hero clamp(2.5rem,5vw,4rem), H1 2.25rem, body 1rem/1.6, ☐ WCAG AA contrast ratio verified (4.5:1 body text), ☐ Dark background contrast ≥ 7:1 for body text, ☐ Mobile responsive layout (stack below 768px)

## Colors

Primary

#060507

#F5EDF1

#ED3D8C

Secondary

#FF66A8

#B81D67

### Effects

display font Instrument Serif for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, dark canvas with glow/shadow accents, hot-pink italic accent on near-black canvas, pearl-cream paper slides, generous whitespace, clamp(4rem,8vw,8rem) section gaps

### Light/Dark

✗ None / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Pink Script — After Hours
- **Type:** Nocturnal Luxury, Italic-Serif, High-Contrast, Editorial
- **Keywords:** Hot pink, near-black canvas, Instrument Serif italic, nocturnal, luxe, magazine, low density
- **Era:** 2020s Design Studio
- **Light/Dark:** ✗ None / ✓ Full

## Color Palette

- **Primary:** Ink #060507, Paper #F5EDF1, Pink #ED3D8C
- **Secondary:** Pink 2 #FF66A8, Pink Deep #B81D67

## Visual Effects

display font Instrument Serif for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, dark canvas with glow/shadow accents, hot-pink italic accent on near-black canvas, pearl-cream paper slides, generous whitespace, clamp(4rem,8vw,8rem) section gaps

## AI Visual Direction

Design a nocturnal luxury editorial layout. Use: near-black canvas (#111111), pearl-cream content areas (#E8E0D0), hot-pink accent (#E820A0) for italic highlights ONLY, Instrument Serif italic for headlines. Low-density, few words per section, maximum atmosphere.

## CSS Technical

```css
font-family: 'Instrument Serif', serif; font-style: italic; background: #111111; color: #E8E0D0; --accent: #E820A0; border-bottom: 2px solid #E820A0
```

## Design System Variables

```css
--bg: #F5EDF1, --fg: #060507, --accent: #060507, --font-display: 'Instrument Serif', --font-body: 'Inter', --radius: 4px, --spacing: 2rem
```

## Implementation Checklist

- ☐ Instrument Serif display font loaded via Google Fonts
- ☐ Color palette variables applied consistently
- ☐ Typography scale: hero clamp(2.5rem,5vw,4rem)
- H1 2.25rem
- body 1rem/1.6
- ☐ WCAG AA contrast ratio verified (4.5:1 body text)
- ☐ Dark background contrast ≥ 7:1 for body text
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
