# Swiss Design Gráfico

- Source: <https://designmd.app/library/swiss-design-grafico>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:57:57.319Z

Minimalismo & SwissMid-20th Century, International Typographic Style

# Swiss Design Gráfico

Swiss graphic design landing page. Ideal for landing pages, saas. AI-ready template.

swiss designinternational stylecleanstructuredtypographicgridminimalistobjectivefunctionalasymmetrical

Use case: Landing pages, SaaS

![Swiss Design Gráfico](https://designmd.app/images/library/107.png)

## Historical Context

Swiss Graphic Design didn't emerge from tech startups or UI kits. It came from Basel and Zürich in the 1950s — from letterpress workshops, lithographic posters, and a near-obsessive belief that typography could carry meaning without decoration. Armin Hofmann taught his students to strip away. Emil Ruder wrote the book — literally — on typographic rhythm, proving that whitespace wasn't emptiness but structure. Their posters weren't minimal for aesthetic reasons. They were minimal because every element had to earn its place. This is fundamentally different from what people now call 'Swiss Modernism 2.0' — that Dribbble-friendly aesthetic of geometric sans-serifs on pastel backgrounds. The original movement was rougher, more intellectual. Hofmann's work had tension. Ruder's grids weren't decorative scaffolding; they were argumentative frameworks. Translating this to screens means understanding what survived and what didn't. The grid translated beautifully. The typographic hierarchy — large, confident, unapologetic — works even better at screen scale. But the texture of ink on uncoated stock, the slight registration misalignment of overprinted colors? That's gone. What remains is the discipline: let the grid do the talking, let type breathe, and never add what you can't justify.

## When to Use

Reach for this when the content itself is the product. Design agencies presenting portfolios. Cultural institutions that need authority without shouting. Typography tools where the interface must disappear behind the letterforms. Print studios whose digital presence should feel like an extension of their craft. It works poorly for playful consumer apps or anything requiring emotional warmth — this system is confident, cool, and deliberately restrained. If your brand needs a hug, look elsewhere.

## Design Principles

- The grid is non-negotiable — every element aligns to a mathematical structure, not to 'what feels right'
- Typography is the primary visual material — if your layout doesn't work in black and white with only type, it doesn't work
- Whitespace is active, not leftover — margins and gutters carry as much intent as the content they frame
- Objectivity over expression — the designer's hand recedes; the information speaks
- Reduction until it breaks — remove elements until the communication fails, then add back exactly one thing

## DESIGN.md

```
---
version: "alpha"
name: "Swiss Design Gráfico"
description: "Swiss graphic design landing page. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#D82C2C"
secondary: "#1A1A1A"
tertiary: "#FFFFFF"
neutral: "#A9B2B1"
surface: "#0033A0"
accent: "#F2F2F2"
typography:
h1:
fontFamily: Helvetica Neue
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Helvetica Neue
fontSize: 1rem
fontWeight: 400
spacing:
sm: 20.0px
md: 40.0px
lg: 80.0px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Swiss graphic design landing page. Ideal for landing pages, saas. AI-ready template. Swiss Graphic Design didn't emerge from tech startups or UI kits. It came from Basel and Zürich in the 1950s — from letterpress workshops, lithographic posters, and a near-obsessive belief that typography could carry meaning without decoration. Armin Hofmann taught his students to strip away. Emil Ruder wrote the book — literally — on typographic rhythm, proving that whitespace wasn't emptiness but structure. Their posters weren't minimal for aesthetic reasons. They were minimal because every element had to earn its place.

This is fundamentally different from what people now call 'Swiss Modernism 2.0' — that Dribbble-friendly aesthetic of geometric sans-serifs on pastel backgrounds. The original movement was rougher, more intellectual. Hofmann's work had tension. Ruder's grids weren't decorative scaffolding; they were argumentative frameworks.

Translating this to screens means understanding what survived and what didn't. The grid translated beautifully. The typographic hierarchy — large, confident, unapologetic — works even better at screen scale. But the texture of ink on uncoated stock, the slight registration misalignment of overprinted colors? That's gone. What remains is the discipline: let the grid do the talking, let type breathe, and never add what you can't justify.

- Density: 3/10 — Airy
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Clean, Structured, Typographic
- **Keywords:** swiss design, international style, clean, structured, typographic, grid, minimalist, objective, functional, asymmetrical
- **Era:** Mid-20th Century, International Typographic Style
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Signal Red** (#D82C2C) — Error states, destructive actions
- **Black** (#1A1A1A) — Dark surface, primary background
- **White** (#FFFFFF) — Light surface, card backgrounds
- **Cool Grey** (#A9B2B1) — Secondary text, borders, muted elements
- **Deep Blue** (#0033A0) — Secondary accent
- **Light Grey** (#F2F2F2) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Helvetica Neue — Weight 700, tight tracking, used for headline impact
- **Body:** Helvetica Neue — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Helvetica Neue — 0.875rem, weight 500, slight letter-spacing
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

Strong grid system, sans-serif typography (Helvetica), asymmetrical layout, clean lines, focus on negative space, objective photography, no ornamentation, flush left rag right text

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

- Do Strong grid system
- Do Sans-serif typography
- Do Asymmetrical layout
- Do Clean lines
- Do Focus on negative space
- Do Objective photography

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/swiss-design-grafico/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #1A1A1A, font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif, display: grid, grid-template-columns: repeat(12, 1fr), grid-gap: 20px, text-align: left, .red-accent { color: #D82C2C; }
```

### Variables

```
--signal-red-swiss: #D82C2C, --black-swiss: #1A1A1A, --white-swiss: #FFFFFF, --cool-grey-swiss: #A9B2B1, --grid-gap-swiss: 20px, --font-swiss: "'Helvetica Neue', Helvetica, Arial, sans-serif"
```

### Checklist

☐ Strong grid system, ☐ Sans-serif typography, ☐ Asymmetrical layout, ☐ Clean lines, ☐ Focus on negative space, ☐ Objective photography

## Colors

Primary

#D82C2C

#1A1A1A

#FFFFFF

#A9B2B1

Secondary

#0033A0

#F2F2F2

### Effects

Strong grid system, sans-serif typography (Helvetica), asymmetrical layout, clean lines, focus on negative space, objective photography, no ornamentation, flush left rag right text

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

- **Name:** Swiss Design Gráfico
- **Type:** Clean, Structured, Typographic
- **Keywords:** swiss design, international style, clean, structured, typographic, grid, minimalist, objective, functional, asymmetrical
- **Era:** Mid-20th Century, International Typographic Style
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Signal Red #D82C2C, Black #1A1A1A, White #FFFFFF, Cool Grey #A9B2B1
- **Secondary:** Deep Blue #0033A0, Light Grey #F2F2F2

## Visual Effects

Strong grid system, sans-serif typography (Helvetica), asymmetrical layout, clean lines, focus on negative space, objective photography, no ornamentation, flush left rag right text

## AI Visual Direction

Design a Swiss graphic design landing page. Use: signal red and black, strong grid system, sans-serif typography (Helvetica), asymmetrical layout, clean lines, focus on negative space, objective photography, no ornamentation.

## CSS Technical

```css
background: #FFFFFF, color: #1A1A1A, font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif, display: grid, grid-template-columns: repeat(12, 1fr), grid-gap: 20px, text-align: left, .red-accent { color: #D82C2C; }
```

## Design System Variables

```css
--signal-red-swiss: #D82C2C, --black-swiss: #1A1A1A, --white-swiss: #FFFFFF, --cool-grey-swiss: #A9B2B1, --grid-gap-swiss: 20px, --font-swiss: "'Helvetica Neue', Helvetica, Arial, sans-serif"
```

## Implementation Checklist

- ☐ Strong grid system
- ☐ Sans-serif typography
- ☐ Asymmetrical layout
- ☐ Clean lines
- ☐ Focus on negative space
- ☐ Objective photography

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

[![De Stijl Abstrato](https://designmd.app/images/library/104.png) Arte & Ilustracao ### De Stijl Abstrato](https://designmd.app/library/de-stijl-abstrato)[![Flat Design Corporativo](https://designmd.app/images/library/102.png) Flat & Soft UI ### Flat Design Corporativo](https://designmd.app/library/flat-design-corporativo)[![Bossa Nova Lounge](https://designmd.app/images/library/240.png) Brasil ### Bossa Nova Lounge](https://designmd.app/library/bossa-nova-lounge)[![Swiss Modernism 2.0](https://designmd.app/images/library/50.png) Minimalismo & Swiss ### Swiss Modernism 2.0](https://designmd.app/library/swiss-modernism-2-0)[![Bento Grids](https://designmd.app/images/library/53.png) Flat & Soft UI ### Bento Grids](https://designmd.app/library/bento-grids)

Last synced: 4/1/2026
