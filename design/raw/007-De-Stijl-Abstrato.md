# De Stijl Abstrato

- Source: <https://designmd.app/library/de-stijl-abstrato>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:57:43.292Z

Arte & IlustracaoEarly 20th Century, Neoplasticism

# De Stijl Abstrato

De Stijl abstract landing page. Ideal for landing pages, saas. AI-ready template.

de stijlabstractgeometricminimaliststructuredprimary colorsgridbold linesasymmetricalneoplasticism

Use case: Landing pages, SaaS

![De Stijl Abstrato](https://designmd.app/images/library/104.png)

## Historical Context

In 1917, a group of Dutch artists and architects decided that art had too much ego. Theo van Doesburg launched De Stijl magazine, and alongside Piet Mondrian, proposed something radical: reduce everything to horizontals, verticals, and the three primary colors plus black and white. That's it. No curves, no gradients, no compromise. They believed this vocabulary was universal — a visual Esperanto that needed no cultural translation. Mondrian's compositions look deceptively simple. A black grid, rectangles of red, yellow, blue, white. But spend time with them and you notice the tension. The asymmetry is deliberate. Weight shifts. Proportions breathe. He was solving the same problem we solve today: how to create dynamic balance within a rigid structure. The movement's DNA runs through everything we build now. CSS Grid is, at its core, a De Stijl machine. The 12-column layout, the modular spacing system, the idea that constraint breeds creativity — Mondrian figured that out a century before we wrote our first media query. Gerrit Rietveld's furniture and architecture proved the system worked in three dimensions. The Bauhaus absorbed it. Swiss typography refined it. And every time you align elements to a baseline grid, you're channeling Utrecht, 1917.

## When to Use

Reach for De Stijl when the brief demands intellectual rigor without coldness. Art galleries and museum interfaces love it — the grid honors the work without competing. Architecture firms get it immediately; the language already lives in their buildings. Design education platforms benefit from the inherent teachability: every element has a reason. Modern art brands that want to signal sophistication without pretension land here naturally. It's also surprisingly effective for data-heavy layouts where you need strict hierarchy but refuse to be boring about it.

## Design Principles

- Only primary colors plus black and white — every hue must earn its place through contrast and spatial tension, never decoration
- Strict orthogonal geometry — horizontals and verticals only, with asymmetric balance creating energy within the grid
- Reduction as philosophy — strip every element to its essential form; if it doesn't serve structure or rhythm, remove it
- Dynamic equilibrium through proportion — no centered symmetry, instead use unequal divisions that feel resolved but alive
- Universal over personal — the system speaks louder than any individual element; consistency is the aesthetic

## DESIGN.md

```
---
version: "alpha"
name: "De Stijl Abstrato"
description: "De Stijl abstract landing page. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#FF0000"
secondary: "#0000FF"
tertiary: "#FFFF00"
neutral: "#000000"
surface: "#FFFFFF"
accent: "#808080"
typography:
h1:
fontFamily: Helvetica
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Helvetica
fontSize: 1rem
fontWeight: 400
spacing:
sm: 10.0px
md: 20.0px
lg: 40.0px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

De Stijl abstract landing page. Ideal for landing pages, saas. AI-ready template. In 1917, a group of Dutch artists and architects decided that art had too much ego. Theo van Doesburg launched De Stijl magazine, and alongside Piet Mondrian, proposed something radical: reduce everything to horizontals, verticals, and the three primary colors plus black and white. That's it. No curves, no gradients, no compromise. They believed this vocabulary was universal — a visual Esperanto that needed no cultural translation.

Mondrian's compositions look deceptively simple. A black grid, rectangles of red, yellow, blue, white. But spend time with them and you notice the tension. The asymmetry is deliberate. Weight shifts. Proportions breathe. He was solving the same problem we solve today: how to create dynamic balance within a rigid structure.

The movement's DNA runs through everything we build now. CSS Grid is, at its core, a De Stijl machine. The 12-column layout, the modular spacing system, the idea that constraint breeds creativity — Mondrian figured that out a century before we wrote our first media query. Gerrit Rietveld's furniture and architecture proved the system worked in three dimensions. The Bauhaus absorbed it. Swiss typography refined it. And every time you align elements to a baseline grid, you're channeling Utrecht, 1917.

- Density: 3/10 — Airy
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Geometric, Minimalist, Structured
- **Keywords:** de stijl, abstract, geometric, minimalist, structured, primary colors, grid, bold lines, asymmetrical, neoplasticism
- **Era:** Early 20th Century, Neoplasticism
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Primary Red** (#FF0000) — Primary accent, CTAs and interactive elements
- **Primary Blue** (#0000FF) — Primary accent, CTAs and interactive elements
- **Primary Yellow** (#FFFF00) — Primary accent, CTAs and interactive elements
- **Black** (#000000) — Dark surface, primary background
- **White** (#FFFFFF) — Secondary surface
- **Grey** (#808080) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Helvetica — Weight 700, tight tracking, used for headline impact
- **Body:** Helvetica — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Helvetica — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Strong grid layout, bold black lines, blocks of primary colors, asymmetrical balance, minimalist typography, focus on composition, no decorative elements, sharp corners

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
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
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Strong grid layout
- Do Bold black lines
- Do Blocks of primary colors
- Do Asymmetrical balance
- Do Minimalist typography
- Do Sharp corners

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/de-stijl-abstrato/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, display: grid, grid-template-columns: repeat(12, 1fr), grid-gap: 10px, font-family: 'Helvetica', sans-serif, border: 2px solid #000000, .red-block { background-color: #FF0000; }, .blue-block { background-color: #0000FF; }, .yellow-block { background-color: #FFFF00; }
```

### Variables

```
--primary-red-destijl: #FF0000, --primary-blue-destijl: #0000FF, --primary-yellow-destijl: #FFFF00, --black-destijl: #000000, --grid-gap-destijl: 10px, --font-destijl: 'Helvetica', sans-serif
```

### Checklist

☐ Strong grid layout, ☐ Bold black lines, ☐ Blocks of primary colors, ☐ Asymmetrical balance, ☐ Minimalist typography, ☐ Sharp corners

## Colors

Primary

#FF0000

#0000FF

#FFFF00

#000000

Secondary

#FFFFFF

#808080

### Effects

Strong grid layout, bold black lines, blocks of primary colors, asymmetrical balance, minimalist typography, focus on composition, no decorative elements, sharp corners

### Light/Dark

✓ Full / ✗ No

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** De Stijl Abstrato
- **Type:** Geometric, Minimalist, Structured
- **Keywords:** de stijl, abstract, geometric, minimalist, structured, primary colors, grid, bold lines, asymmetrical, neoplasticism
- **Era:** Early 20th Century, Neoplasticism
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Primary Red #FF0000, Primary Blue #0000FF, Primary Yellow #FFFF00, Black #000000
- **Secondary:** White #FFFFFF, Grey #808080

## Visual Effects

Strong grid layout, bold black lines, blocks of primary colors, asymmetrical balance, minimalist typography, focus on composition, no decorative elements, sharp corners

## AI Visual Direction

Design a De Stijl abstract landing page. Use: primary red, blue, and yellow, strong grid layout, bold black lines, blocks of primary colors, asymmetrical balance, minimalist typography, sharp corners, no decorative elements.

## CSS Technical

```css
background: #FFFFFF, display: grid, grid-template-columns: repeat(12, 1fr), grid-gap: 10px, font-family: 'Helvetica', sans-serif, border: 2px solid #000000, .red-block { background-color: #FF0000; }, .blue-block { background-color: #0000FF; }, .yellow-block { background-color: #FFFF00; }
```

## Design System Variables

```css
--primary-red-destijl: #FF0000, --primary-blue-destijl: #0000FF, --primary-yellow-destijl: #FFFF00, --black-destijl: #000000, --grid-gap-destijl: 10px, --font-destijl: 'Helvetica', sans-serif
```

## Implementation Checklist

- ☐ Strong grid layout
- ☐ Bold black lines
- ☐ Blocks of primary colors
- ☐ Asymmetrical balance
- ☐ Minimalist typography
- ☐ Sharp corners

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

[![Swiss Design Gráfico](https://designmd.app/images/library/107.png) Minimalismo & Swiss ### Swiss Design Gráfico](https://designmd.app/library/swiss-design-grafico)[![Flat Design Corporativo](https://designmd.app/images/library/102.png) Flat & Soft UI ### Flat Design Corporativo](https://designmd.app/library/flat-design-corporativo)[![Bossa Nova Lounge](https://designmd.app/images/library/240.png) Brasil ### Bossa Nova Lounge](https://designmd.app/library/bossa-nova-lounge)[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)[![Happy Art Tropical](https://designmd.app/images/library/236.png) Brasil ### Happy Art Tropical](https://designmd.app/library/happy-art-tropical)

Last synced: 4/1/2026
