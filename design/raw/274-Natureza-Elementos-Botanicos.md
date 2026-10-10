# Natureza / Elementos Botânicos

- Source: <https://designmd.app/library/natureza-elementos-botanicos>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:21:31.309Z

Dados & InfograficoNature-Inspired

# Natureza / Elementos Botânicos

Nature botanical infographic. Ideal for landing pages, modern websites. AI-ready template.

Botanical illustrationsfloral ornamentsorganic shapesleaf motifsnature-inspiredeco-friendlyfreshnatural flow

Use case: Landing pages, Modern websites

![Natureza / Elementos Botânicos](https://designmd.app/images/library/90.png)

## Historical Context

Long before the sustainability wave hit corporate reporting, botanical illustration had already proven itself as a bridge between science and emotion. Think of Ernst Haeckel's radiolaria drawings — data rendered through organic form, making the invisible tangible. That lineage matters. The modern resurgence is pragmatic, not decorative. ESG mandates forced companies to communicate environmental data to non-technical audiences. Pie charts felt cold. Bar graphs felt corporate. Designers reached for leaves, root systems, tree rings — visual metaphors people already understood intuitively. A carbon footprint shaped like mycelium networks reads faster than a stacked area chart ever could. What's interesting now is the tension. Botanical infographics walk a razor's edge between clarity and ornament. The best ones use organic shapes structurally — vein patterns as flow diagrams, petal arrangements as proportional comparisons — rather than just wrapping conventional charts in floral borders. That structural honesty is what separates data visualization from decoration.

## When to Use

Reach for botanical elements when your data needs to feel alive rather than extracted. Environmental reports, obviously. Sustainability dashboards where stakeholders aren't analysts. Wellness brands communicating health metrics. Nature-adjacent nonprofits. They work beautifully when the audience resists traditional chart formats — when you need someone to linger rather than scan. Skip them for financial data, engineering specs, or anything where perceived precision matters more than emotional resonance.

## Design Principles

- Structure first, ornament second — use organic shapes as data containers, not decorative afterthoughts
- Maintain readable data ratios; a leaf can encode proportion, but never sacrifice legibility for botanical accuracy
- Limit your palette to what nature actually produces — oversaturated greens and neon florals break the metaphor instantly
- Let whitespace breathe like negative space in a garden; density kills the organic feeling you're trying to achieve
- Pair hand-drawn botanical textures with precise typographic data labels — the contrast creates credibility

## DESIGN.md

```
---
version: "alpha"
name: "Natureza / Elementos Botânicos"
description: "Nature botanical infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#FFFFFF"
secondary: "#2B5F2B"
tertiary: "#27AE60"
neutral: "#F39C12"
surface: "#3498DB"
accent: "#9B59B6"
typography:
h1:
fontFamily: System UI stack
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: System UI stack
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: System UI stack
fontSize: 0.75rem
fontWeight: 500
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Nature botanical infographic. Ideal for landing pages, modern websites. AI-ready template. Long before the sustainability wave hit corporate reporting, botanical illustration had already proven itself as a bridge between science and emotion. Think of Ernst Haeckel's radiolaria drawings — data rendered through organic form, making the invisible tangible. That lineage matters.

The modern resurgence is pragmatic, not decorative. ESG mandates forced companies to communicate environmental data to non-technical audiences. Pie charts felt cold. Bar graphs felt corporate. Designers reached for leaves, root systems, tree rings — visual metaphors people already understood intuitively. A carbon footprint shaped like mycelium networks reads faster than a stacked area chart ever could.

What's interesting now is the tension. Botanical infographics walk a razor's edge between clarity and ornament. The best ones use organic shapes structurally — vein patterns as flow diagrams, petal arrangements as proportional comparisons — rather than just wrapping conventional charts in floral borders. That structural honesty is what separates data visualization from decoration.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Botanical illustrations, floral ornaments, organic shapes, leaf motifs, nature-inspired, eco-friendly, fresh, natural flow
- **Era:** Nature-Inspired
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **White** (#FFFFFF) — Light surface, card backgrounds
- **Forest Green** (#2B5F2B) — Secondary surface or text color
- **Emerald** (#27AE60) — Supporting palette color
- **Amber** (#F39C12) — Warning states, attention indicators
- **Blue** (#3498DB) — Secondary accent
- **Purple** (#9B59B6) — Accent color, emphasis elements
- **Red** (#E74C3C) — Error states, destructive actions
- **Cool Grey** (#95A5A6) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

Warm natural lighting, soft diffuse, leaf sway animations, floral border reveals, organic shape morphing, nature-inspired transitions

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Botanical elements present
- Do Floral borders
- Do Organic shapes
- Do Green palette dominant
- Do Natural flow layout
- Do Eco-friendly feel

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/natureza-elementos-botanicos/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #2B5F2B, SVG botanical illustrations, clip-path for organic shapes, border: floral SVG patterns, animation: leaf sway, font: elegant serif or rounded sans, natural flow layout
```

### Variables

```
--forest-green: #2B5F2B, --emerald: #27AE60, --amber: #F39C12, --leaf-sway: 3s ease-in-out, --organic-radius: varied, --floral-opacity: 0.8
```

### Checklist

☐ Botanical elements present, ☐ Floral borders, ☐ Organic shapes, ☐ Green palette dominant, ☐ Natural flow layout, ☐ Eco-friendly feel

## Colors

Primary

#FFFFFF

#2B5F2B

#27AE60

#F39C12

Secondary

#3498DB

#9B59B6

#E74C3C

#95A5A6

### Effects

Warm natural lighting, soft diffuse, leaf sway animations, floral border reveals, organic shape morphing, nature-inspired transitions

### Light/Dark

✓ Full / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Natureza / Elementos Botânicos
- **Type:** Infographic
- **Keywords:** Botanical illustrations, floral ornaments, organic shapes, leaf motifs, nature-inspired, eco-friendly, fresh, natural flow
- **Era:** Nature-Inspired
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** White #FFFFFF, Forest Green #2B5F2B, Emerald #27AE60, Amber #F39C12
- **Secondary:** Blue #3498DB, Purple #9B59B6, Red #E74C3C, Cool Grey #95A5A6, organic textures

## Visual Effects

Warm natural lighting, soft diffuse, leaf sway animations, floral border reveals, organic shape morphing, nature-inspired transitions

## AI Visual Direction

Design a nature botanical infographic. Use: botanical illustrations (leaves, flowers, branches), floral ornaments as borders, organic flowing shapes, leaf motifs, nature-inspired color palette (greens, earth tones), eco-friendly aesthetic, circular/flowing arrangements.

## CSS Technical

```css
background: #FFFFFF, color: #2B5F2B, SVG botanical illustrations, clip-path for organic shapes, border: floral SVG patterns, animation: leaf sway, font: elegant serif or rounded sans, natural flow layout
```

## Design System Variables

```css
--forest-green: #2B5F2B, --emerald: #27AE60, --amber: #F39C12, --leaf-sway: 3s ease-in-out, --organic-radius: varied, --floral-opacity: 0.8
```

## Implementation Checklist

- ☐ Botanical elements present
- ☐ Floral borders
- ☐ Organic shapes
- ☐ Green palette dominant
- ☐ Natural flow layout
- ☐ Eco-friendly feel

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

[![Radial Diagram / Donut Chart](https://designmd.app/images/library/87.png) Dados & Infografico ### Radial Diagram / Donut Chart](https://designmd.app/library/radial-diagram-donut-chart)[![Timeline Horizontal Corporativo](https://designmd.app/images/library/88.png) Dados & Infografico ### Timeline Horizontal Corporativo](https://designmd.app/library/timeline-horizontal-corporativo)[![Z-Shape](https://designmd.app/images/library/89.png) Dados & Infografico ### Z-Shape](https://designmd.app/library/z-shape)[![Elementos Musicais](https://designmd.app/images/library/91.png) Dados & Infografico ### Elementos Musicais](https://designmd.app/library/elementos-musicais)[![Degraded Colorful / Vibrant Gradient](https://designmd.app/images/library/92.png) Dados & Infografico ### Degraded Colorful / Vibrant Gradient](https://designmd.app/library/degraded-colorful-vibrant-gradient)

Last synced: 4/1/2026
