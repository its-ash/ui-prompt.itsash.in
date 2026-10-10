# Filigree

- Source: <https://designmd.app/library/filigree>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:05:10.374Z

Arte & IlustracaoRenaissance Craftsmanship

# Filigree

Filigree-inspired landing page with intricate lace-like patterns. Ideal for convites de casamento, tipografia sofisticada, embalagens de luxo, joalherias. AI-ready template.

Filigreeintricate patternslace metalworkmarblewoodarabesqueswirling flourishesornatedelicateluxury

Use case: Wedding invitations, Sophisticated typography, Luxury packaging, Jewelry stores

![Filigree](https://designmd.app/images/library/292.png)

## Historical Context

Filigree is one of the oldest known metalworking techniques, dating back to Mesopotamia around 3000 BCE. The word itself comes from the Latin 'filum' (thread) and 'granum' (grain) — and that etymology tells you everything about what makes it special. Craftsmen twisted impossibly thin metal wire into ornamental patterns, soldering tiny beads at intersections. It spread through the Mediterranean, became a signature of Portuguese and Indian goldsmithing, and defined what 'precious' meant for millennia. What's remarkable is how filigree anticipated modern design thinking. It's structure as decoration — the ornament IS the construction. There's no applied surface treatment here; the pattern emerges from the material logic itself. Every curl and spiral serves both aesthetic and structural purpose, distributing stress across the lattice while creating visual rhythm. The technique nearly died in the industrial age, which tells you something important: filigree resists mass production. It demands patience, skill, and an acceptance that beauty takes time. That tension between fragility and permanence — metal made to look like lace — remains its most powerful quality for contemporary design applications.

## When to Use

Reach for filigree patterns when you need to communicate craftsmanship without saying the word. It works when your brand occupies the space between 'luxury' and 'artisanal' — where things are expensive because someone cared, not because of a logo. Wedding stationery, high-end packaging, jewelry branding, perfume houses, heritage fashion labels. Avoid it for anything that needs to feel fast, modern, or minimal. Filigree demands breathing room and rewards close inspection. If your layout is already busy, filigree will collapse into noise.

## Design Principles

- Maintain consistent wire weight throughout — varying stroke thickness destroys the illusion of metalwork and makes patterns read as generic decoration rather than craft
- Design from the center outward using radial or bilateral symmetry; filigree without structural logic looks like tangled wire, not intentional ornament
- Leave generous negative space — filigree's power comes from the tension between density and openness, the lace-like quality of seeing through the pattern
- Limit your palette to one or two metallic tones; filigree communicates material truth, and adding color fights against its fundamental identity as shaped metal
- Scale matters enormously — too small and detail collapses, too large and it loses delicacy. Test at final reproduction size before committing to complexity level

## DESIGN.md

```
---
version: "alpha"
name: "Filigree"
description: "Filigree-inspired landing page with intricate lace-like patterns. Ideal for convites de casamento, tipografia sofisticada, embalagens de luxo, joalherias. AI-ready template."
colors:
primary: "#C9A84C"
secondary: "#FFF8E7"
tertiary: "#2C2C2C"
neutral: "#B76E79"
surface: "#C0C0C0"
accent: "#F5ECD7"
typography:
h1:
fontFamily: Cormorant
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Cormorant
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

Filigree-inspired landing page with intricate lace-like patterns. Ideal for convites de casamento, tipografia sofisticada, embalagens de luxo, joalherias. AI-ready template. Filigree is one of the oldest known metalworking techniques, dating back to Mesopotamia around 3000 BCE. The word itself comes from the Latin 'filum' (thread) and 'granum' (grain) — and that etymology tells you everything about what makes it special. Craftsmen twisted impossibly thin metal wire into ornamental patterns, soldering tiny beads at intersections. It spread through the Mediterranean, became a signature of Portuguese and Indian goldsmithing, and defined what 'precious' meant for millennia.

What's remarkable is how filigree anticipated modern design thinking. It's structure as decoration — the ornament IS the construction. There's no applied surface treatment here; the pattern emerges from the material logic itself. Every curl and spiral serves both aesthetic and structural purpose, distributing stress across the lattice while creating visual rhythm.

The technique nearly died in the industrial age, which tells you something important: filigree resists mass production. It demands patience, skill, and an acceptance that beauty takes time. That tension between fragility and permanence — metal made to look like lace — remains its most powerful quality for contemporary design applications.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Intricate, Lace-like, Luxurious, Arabesque
- **Keywords:** Filigree, intricate patterns, lace metalwork, marble, wood, arabesque, swirling flourishes, ornate, delicate, luxury
- **Era:** Renaissance Craftsmanship
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Antique Gold** (#C9A84C) — Premium accent, decorative highlights
- **Cream** (#FFF8E7) — Light surface, card backgrounds
- **Deep Charcoal** (#2C2C2C) — Dark surface, primary background
- **Rose Gold** (#B76E79) — Premium accent, decorative highlights
- **Soft Silver** (#C0C0C0) — Extended palette, decorative use
- **Warm Ivory** (#F5ECD7) — Secondary surface
- **Burgundy** (#722F37) — Extended palette, decorative use
- **Sage** (#8A9A5B) — Extended palette, decorative use

## Typography

- **Display / Hero:** Cormorant — Weight 700, tight tracking, used for headline impact
- **Body:** Cormorant — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cormorant — 0.875rem, weight 500, slight letter-spacing
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

SVG filigree border patterns, intricate corner ornaments, thin decorative lines (0.5-1px), subtle metallic shimmer on hover, elegant scroll-reveal animations (500ms), lace-like overlay patterns

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

- Do Intricate SVG border patterns
- Do Corner ornaments on key sections
- Do Gold and cream color palette
- Do Sophisticated serif typography
- Do Lace-like decorative overlays
- Do Responsive with simplified ornaments on mobile

## Use Case

Wedding invitations, Sophisticated typography, Luxury packaging, Jewelry stores
```

[Download DESIGN.md](https://designmd.app/library/filigree/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Cormorant', serif, border-image: url(filigree-pattern.svg), color: #2C2C2C, background: #FFF8E7, border: 1px solid #C9A84C, box-shadow: 0 2px 15px rgba(201,168,76,0.15), letter-spacing: 0.06em, line-height: 1.8
```

### Variables

```
--color-gold: #C9A84C, --color-cream: #FFF8E7, --color-charcoal: #2C2C2C, --color-rose-gold: #B76E79, --font-display: 'Cormorant', --border-ornate: 1px solid #C9A84C, --shadow-gold: rgba(201,168,76,0.15), --spacing: 2rem
```

### Checklist

☐ Intricate SVG border patterns, ☐ Corner ornaments on key sections, ☐ Gold and cream color palette, ☐ Sophisticated serif typography, ☐ Lace-like decorative overlays, ☐ Responsive with simplified ornaments on mobile

## Colors

Primary

#C9A84C

#FFF8E7

#2C2C2C

#B76E79

Secondary

#C0C0C0

#F5ECD7

#722F37

#8A9A5B

### Effects

SVG filigree border patterns, intricate corner ornaments, thin decorative lines (0.5-1px), subtle metallic shimmer on hover, elegant scroll-reveal animations (500ms), lace-like overlay patterns

### Light/Dark

✓ Full / ◐ Partial

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Filigree
- **Type:** Intricate, Lace-like, Luxurious, Arabesque
- **Keywords:** Filigree, intricate patterns, lace metalwork, marble, wood, arabesque, swirling flourishes, ornate, delicate, luxury
- **Era:** Renaissance Craftsmanship
- **Light/Dark:** ✓ Full / ◐ Partial

## Color Palette

- **Primary:** Antique Gold #C9A84C, Cream #FFF8E7, Deep Charcoal #2C2C2C, Rose Gold #B76E79
- **Secondary:** Soft Silver #C0C0C0, Warm Ivory #F5ECD7, Burgundy #722F37, Sage #8A9A5B

## Visual Effects

SVG filigree border patterns, intricate corner ornaments, thin decorative lines (0.5-1px), subtle metallic shimmer on hover, elegant scroll-reveal animations (500ms), lace-like overlay patterns

## AI Visual Direction

Design a filigree-inspired landing page with intricate lace-like patterns. Use SVG ornamental borders, arabesque corner decorations, swirling flourishes, antique gold and cream palette. Typography should be sophisticated with decorative ligatures. Create a luxurious, handcrafted feel with delicate metalwork-inspired details throughout.

## CSS Technical

```css
font-family: 'Cormorant', serif, border-image: url(filigree-pattern.svg), color: #2C2C2C, background: #FFF8E7, border: 1px solid #C9A84C, box-shadow: 0 2px 15px rgba(201,168,76,0.15), letter-spacing: 0.06em, line-height: 1.8
```

## Design System Variables

```css
--color-gold: #C9A84C, --color-cream: #FFF8E7, --color-charcoal: #2C2C2C, --color-rose-gold: #B76E79, --font-display: 'Cormorant', --border-ornate: 1px solid #C9A84C, --shadow-gold: rgba(201,168,76,0.15), --spacing: 2rem
```

## Implementation Checklist

- ☐ Intricate SVG border patterns
- ☐ Corner ornaments on key sections
- ☐ Gold and cream color palette
- ☐ Sophisticated serif typography
- ☐ Lace-like decorative overlays
- ☐ Responsive with simplified ornaments on mobile

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

[![Acanthus](https://designmd.app/images/library/293.png) Arte & Ilustracao ### Acanthus](https://designmd.app/library/acanthus)[![Neoclassical Art](https://designmd.app/images/library/288.png) Arte & Ilustracao ### Neoclassical Art](https://designmd.app/library/neoclassical-art)[![Baroque](https://designmd.app/images/library/289.png) Arte & Ilustracao ### Baroque](https://designmd.app/library/baroque)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)[![Ethereal](https://designmd.app/images/library/291.png) Arte & Ilustracao ### Ethereal](https://designmd.app/library/ethereal)

Last synced: 4/1/2026
