# Azulejo Português

- Source: <https://designmd.app/library/azulejo-portugues>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:59:01.344Z

Arte & Ilustracao16th-18th Century Portuguese Heritage

# Azulejo Português

Portuguese azulejo landing page. Ideal for landing pages, saas. AI-ready template.

azulejoportuguese tilestraditionalornamentalmediterraneancobalt bluehandpaintedceramicpattern-richcultural heritage

Use case: Landing pages, SaaS

![Azulejo Português](https://designmd.app/images/library/114.png)

## Historical Context

The azulejo didn't start Portuguese. It arrived through Moorish craftsmen in the 15th century — geometric, repetitive, hypnotic. But Portugal did what Portugal does: absorbed it, obsessed over it, made it entirely theirs. By the 17th century, blue-and-white tin-glazed tiles covered everything. Churches, train stations, ordinary apartment facades. The pattern became the architecture. What makes azulejos fascinating for design systems is the underlying logic. Each tile is a module. Four tiles make a larger pattern. Sixteen tiles reveal the full composition. It's component thinking, centuries before we had the vocabulary for it. The Moors understood something we keep rediscovering: constraint breeds coherence. Translating this to digital means respecting that modularity. A single element feels incomplete — intentionally so. The system only breathes when repeated, when tiled across surfaces. That's the tension worth preserving: individual restraint serving collective richness.

## When to Use

Reach for this when the brief demands cultural weight without stuffiness. Portuguese brands that want roots showing. Tourism campaigns that need to feel located, not generic. Hospitality projects — boutique hotels, wine labels, restaurant identities — where heritage is the product. Cultural institutions that refuse to look like a museum gift shop. It works when you need pattern density that still reads as elegant, not busy. Skip it if the brand has no connection to the tradition. Borrowed heritage reads hollow fast.

## Design Principles

- Module-first composition — design the single tile, trust the repetition to build complexity
- Chromatic discipline — the blue-white constraint isn't limitation, it's identity. Resist adding color unless you're breaking the system intentionally
- Geometric over organic — azulejo patterns are constructed, not drawn. Use rulers, not brushes
- Density as texture — let pattern fill space generously. Negative space is for other systems; this one earns its richness through accumulation
- Imperfection as proof of craft — slight irregularities in stroke weight or alignment reference the handmade ceramic origin. Pixel-perfect sterility kills the warmth

## DESIGN.md

```
---
version: "alpha"
name: "Azulejo Português"
description: "Portuguese azulejo landing page. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#003399"
secondary: "#F5F5F0"
tertiary: "#C9A84C"
neutral: "#1A1A4E"
surface: "#B7472A"
accent: "#556B2F"
typography:
h1:
fontFamily: Playfair Display
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: Playfair Display
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: Playfair Display
fontSize: 0.75rem
fontWeight: 500
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Portuguese azulejo landing page. Ideal for landing pages, saas. AI-ready template. The azulejo didn't start Portuguese. It arrived through Moorish craftsmen in the 15th century — geometric, repetitive, hypnotic. But Portugal did what Portugal does: absorbed it, obsessed over it, made it entirely theirs. By the 17th century, blue-and-white tin-glazed tiles covered everything. Churches, train stations, ordinary apartment facades. The pattern became the architecture.

What makes azulejos fascinating for design systems is the underlying logic. Each tile is a module. Four tiles make a larger pattern. Sixteen tiles reveal the full composition. It's component thinking, centuries before we had the vocabulary for it. The Moors understood something we keep rediscovering: constraint breeds coherence.

Translating this to digital means respecting that modularity. A single element feels incomplete — intentionally so. The system only breathes when repeated, when tiled across surfaces. That's the tension worth preserving: individual restraint serving collective richness.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Traditional, Ornamental, Mediterranean
- **Keywords:** azulejo, portuguese tiles, traditional, ornamental, mediterranean, cobalt blue, handpainted, ceramic, pattern-rich, cultural heritage
- **Era:** 16th-18th Century Portuguese Heritage
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Cobalt Blue** (#003399) — Accent highlight, links and focus states
- **Tile White** (#F5F5F0) — Light surface, card backgrounds
- **Warm Gold** (#C9A84C) — Premium accent, decorative highlights
- **Deep Navy** (#1A1A4E) — Supporting palette color
- **Terracotta** (#B7472A) — Extended palette, decorative use
- **Olive Green** (#556B2F) — Success states, positive indicators
- **Sun Yellow** (#F4D03F) — Warning states, attention indicators
- **Cream** (#FFFFF0) — Secondary surface

## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Body:** Playfair Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Playfair Display — 0.875rem, weight 500, slight letter-spacing
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

Repeating tile patterns as backgrounds, hand-painted blue illustrations, ornamental dividers, ceramic texture overlays, intricate geometric borders, shadow depth on tiles, delicate scroll motifs, warm Mediterranean gradients

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Repeating tile patterns
- Do Hand-painted blue illustrations
- Do Ornamental dividers
- Do Ceramic texture overlays
- Do Intricate geometric borders
- Do Delicate scroll motifs

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/azulejo-portugues/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #F5F5F0, color: #1A1A4E, font-family: 'Playfair Display', serif, border: 3px double #003399, box-shadow: 0 4px 16px rgba(0,51,153,0.15), background-image: url('azulejo-pattern.svg'), background-size: 120px 120px, background-repeat: repeat, text-shadow: none, animation: tile-fade 1s ease-in
```

### Variables

```
--cobalt-blue-azulejo: #003399, --tile-white-azulejo: #F5F5F0, --warm-gold-azulejo: #C9A84C, --deep-navy-azulejo: #1A1A4E, --tile-pattern-size: 120px, --font-azulejo: 'Playfair Display', serif
```

### Checklist

☐ Repeating tile patterns, ☐ Hand-painted blue illustrations, ☐ Ornamental dividers, ☐ Ceramic texture overlays, ☐ Intricate geometric borders, ☐ Delicate scroll motifs

## Colors

Primary

#003399

#F5F5F0

#C9A84C

#1A1A4E

Secondary

#B7472A

#556B2F

#F4D03F

#FFFFF0

### Effects

Repeating tile patterns as backgrounds, hand-painted blue illustrations, ornamental dividers, ceramic texture overlays, intricate geometric borders, shadow depth on tiles, delicate scroll motifs, warm Mediterranean gradients

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

- **Name:** Azulejo Português
- **Type:** Traditional, Ornamental, Mediterranean
- **Keywords:** azulejo, portuguese tiles, traditional, ornamental, mediterranean, cobalt blue, handpainted, ceramic, pattern-rich, cultural heritage
- **Era:** 16th-18th Century Portuguese Heritage
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Cobalt Blue #003399, Tile White #F5F5F0, Warm Gold #C9A84C, Deep Navy #1A1A4E
- **Secondary:** Terracotta #B7472A, Olive Green #556B2F, Sun Yellow #F4D03F, Cream #FFFFF0

## Visual Effects

Repeating tile patterns as backgrounds, hand-painted blue illustrations, ornamental dividers, ceramic texture overlays, intricate geometric borders, shadow depth on tiles, delicate scroll motifs, warm Mediterranean gradients

## AI Visual Direction

Design a Portuguese azulejo landing page. Use: cobalt blue and tile white, repeating tile patterns, hand-painted blue illustrations, ornamental dividers, ceramic texture overlays, intricate geometric borders, delicate scroll motifs, warm Mediterranean gradients.

## CSS Technical

```css
background: #F5F5F0, color: #1A1A4E, font-family: 'Playfair Display', serif, border: 3px double #003399, box-shadow: 0 4px 16px rgba(0,51,153,0.15), background-image: url('azulejo-pattern.svg'), background-size: 120px 120px, background-repeat: repeat, text-shadow: none, animation: tile-fade 1s ease-in
```

## Design System Variables

```css
--cobalt-blue-azulejo: #003399, --tile-white-azulejo: #F5F5F0, --warm-gold-azulejo: #C9A84C, --deep-navy-azulejo: #1A1A4E, --tile-pattern-size: 120px, --font-azulejo: 'Playfair Display', serif
```

## Implementation Checklist

- ☐ Repeating tile patterns
- ☐ Hand-painted blue illustrations
- ☐ Ornamental dividers
- ☐ Ceramic texture overlays
- ☐ Intricate geometric borders
- ☐ Delicate scroll motifs

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

[![Art Deco / Golden Age](https://designmd.app/images/library/69.png) Arte & Ilustracao ### Art Deco / Golden Age](https://designmd.app/library/art-deco-golden-age)[![Cerâmica Wabi-Sabi](https://designmd.app/images/library/112.png) Temas & Verticais ### Cerâmica Wabi-Sabi](https://designmd.app/library/ceramica-wabi-sabi)[![Terracota Mediterrâneo](https://designmd.app/images/library/119.png) Temas & Verticais ### Terracota Mediterrâneo](https://designmd.app/library/terracota-mediterraneo)[![Tropicalismo Indígena Autêntico](https://designmd.app/images/library/245.png) Brasil ### Tropicalismo Indígena Autêntico](https://designmd.app/library/tropicalismo-indigena-autentico)[![Culinária Afetiva Brasileira](https://designmd.app/images/library/251.png) Brasil ### Culinária Afetiva Brasileira](https://designmd.app/library/culinaria-afetiva-brasileira)

Last synced: 4/1/2026
