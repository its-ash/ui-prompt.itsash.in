# Claymorphism

- Source: <https://designmd.app/library/claymorphism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:21:30.280Z

Flat & Soft UI2020s Modern

# Claymorphism

Playful, toy-like interface with soft 3D, chunky elements, bubbly aesthetic, rounded edges (16-24px), thick borders (3-4px), double shadows (inner + outer), pastel colors, smooth animations. Ideal for apps infantis, creative tools, education, jogos interativos. AI-ready template.

Soft 3Dchunkyplayfultoy-likebubblythick borders (3-4px)double shadowsrounded (16-24px)

Use case: Kids apps, Creative tools, Education, Interactive games

![Claymorphism](https://designmd.app/images/library/9.png)

## Historical Context

Claymorphism emerged around 2021 as designers got bored with flat UI and started pulling visual language from 3D illustration tools. The Clay.io aesthetic, combined with the explosion of Blender and Cinema4D artists creating chunky, inflated characters for tech brands, gave UI designers permission to make interfaces feel tactile again. People were rendering soft, squishy objects and thinking: why can't buttons feel like this? It's worth distinguishing this from neumorphism, which tried (and mostly failed) to simulate realistic depth through subtle light and shadow on monochrome surfaces. Claymorphism doesn't pretend to be realistic. It's deliberately toy-like, exaggerated, cartoonish. The shadows are colored. The shapes are puffy. Nothing here is trying to fool your eye into thinking it's a real object on your desk. By 2026, claymorphism has settled into a comfortable niche. You see it in educational platforms, creative tools, and anywhere the brand voice skews young or playful. It never took over enterprise UI (thankfully), but it proved that depth and whimsy have a place in digital product design when the context is right.

## When to Use

Claymorphism works when your audience expects delight over efficiency. Children's apps, gamified learning platforms, creative tools where the interface itself should feel like a toy. It signals approachability and low stakes. But be careful: applied to the wrong context, it reads as condescending. A banking app with puffy 3D buttons tells users you don't take their money seriously. Same goes for productivity tools where speed matters more than charm. The line between playful and infantilizing is thinner than most designers think.

## Design Principles

- Exaggerate border-radius beyond what feels 'correct.' Claymorphism lives in the 20-40px range where shapes start feeling inflated rather than merely rounded.
- Use colored, diffused shadows instead of neutral grays. A pink card gets a deeper pink shadow. This sells the 3D-object illusion without photorealism.
- Keep surface colors in the pastel-to-saturated range. Claymorphism dies on dark backgrounds because the soft dimensionality needs light to breathe.
- Add micro-animations with overshoot easing (spring physics). Static clay elements feel like dead plastic. A slight bounce on interaction sells the squishiness.
- Maintain generous padding and spacing. Cramped layouts kill the inflated aesthetic instantly. Every element needs room to feel puffy.

## DESIGN.md

```
---
version: "alpha"
name: "Claymorphism"
description: "Playful, toy-like interface with soft 3D, chunky elements, bubbly aesthetic, rounded edges (16-24px), thick borders (3-4px), double shadows (inner + outer), pastel colors, smooth animations. Ideal for apps infantis, creative tools, education, jogos interativos. AI-ready template."
colors:
primary: "#FDBCB4"
secondary: "#ADD8E6"
tertiary: "#98FF98"
neutral: "#E6E6FA"

typography:
h1:
fontFamily: -apple-system, sans-serif
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: -apple-system, sans-serif
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: -apple-system, sans-serif
fontSize: 0.75rem
fontWeight: 500
rounded:
sm: 20px
md: 40px
lg: 60px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Playful, toy-like interface with soft 3D, chunky elements, bubbly aesthetic, rounded edges (16-24px), thick borders (3-4px), double shadows (inner + outer), pastel colors, smooth animations. Ideal for apps infantis, creative tools, education, jogos interativos. AI-ready template. Claymorphism emerged around 2021 as designers got bored with flat UI and started pulling visual language from 3D illustration tools. The Clay.io aesthetic, combined with the explosion of Blender and Cinema4D artists creating chunky, inflated characters for tech brands, gave UI designers permission to make interfaces feel tactile again. People were rendering soft, squishy objects and thinking: why can't buttons feel like this?

It's worth distinguishing this from neumorphism, which tried (and mostly failed) to simulate realistic depth through subtle light and shadow on monochrome surfaces. Claymorphism doesn't pretend to be realistic. It's deliberately toy-like, exaggerated, cartoonish. The shadows are colored. The shapes are puffy. Nothing here is trying to fool your eye into thinking it's a real object on your desk.

By 2026, claymorphism has settled into a comfortable niche. You see it in educational platforms, creative tools, and anywhere the brand voice skews young or playful. It never took over enterprise UI (thankfully), but it proved that depth and whimsy have a place in digital product design when the context is right.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Soft, Playful, Rounded, Colorful
- **Keywords:** Soft 3D, chunky, playful, toy-like, bubbly, thick borders (3-4px), double shadows, rounded (16-24px)
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Soft Peach** (#FDBCB4) — Primary surface or dominant color
- **Baby Blue** (#ADD8E6) — Accent highlight, links and focus states
- **Mint** (#98FF98) — Supporting palette color
- **Lilac** (#E6E6FA) — Supporting palette color

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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Inner+outer shadows (subtle, no hard lines), soft press (200ms ease-out), fluffy elements, smooth transitions

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 20px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Generously rounded (1.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Generously rounded (1.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Border-radius 16-24px
- Do Thick borders 3-4px
- Do Double shadows (inner+outer)
- Do Pastel colors used
- Do Soft bounce animations
- Do Playful interactions

## Use Case

Kids apps, Creative tools, Education, Interactive games
```

[Download DESIGN.md](https://designmd.app/library/claymorphism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
border-radius: 16-24px, border: 3-4px solid, box-shadow: inset -2px -2px 8px, 4px 4px 8px, background: pastel-gradient, animation: soft bounce (cubic-bezier 0.34, 1.56)
```

### Variables

```
--border-radius: 20px, --border-width: 3-4px, --shadow-inner: inset -2px -2px 8px, --shadow-outer: 4px 4px 8px, --color-palette: pastels, --animation: bounce
```

### Checklist

☐ Border-radius 16-24px, ☐ Thick borders 3-4px, ☐ Double shadows (inner+outer), ☐ Pastel colors used, ☐ Soft bounce animations, ☐ Playful interactions

## Colors

Primary

#FDBCB4

#ADD8E6

#98FF98

#E6E6FA

### Effects

Inner+outer shadows (subtle, no hard lines), soft press (200ms ease-out), fluffy elements, smooth transitions

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

- **Name:** Claymorphism
- **Type:** Soft, Playful, Rounded, Colorful
- **Keywords:** Soft 3D, chunky, playful, toy-like, bubbly, thick borders (3-4px), double shadows, rounded (16-24px)
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ◐ Partial

## Color Palette

- **Primary:** Pastel: Soft Peach #FDBCB4, Baby Blue #ADD8E6, Mint #98FF98, Lilac #E6E6FA, light BG
- **Secondary:** Soft gradients (pastel-to-pastel), light/dark variations (20-30%), gradient subtle

## Visual Effects

Inner+outer shadows (subtle, no hard lines), soft press (200ms ease-out), fluffy elements, smooth transitions

## AI Visual Direction

Design a playful, toy-like interface with soft 3D, chunky elements, bubbly aesthetic, rounded edges (16-24px), thick borders (3-4px), double shadows (inner + outer), pastel colors, smooth animations. Perfect for children's apps and creative tools.

## CSS Technical

```css
border-radius: 16-24px, border: 3-4px solid, box-shadow: inset -2px -2px 8px, 4px 4px 8px, background: pastel-gradient, animation: soft bounce (cubic-bezier 0.34, 1.56)
```

## Design System Variables

```css
--border-radius: 20px, --border-width: 3-4px, --shadow-inner: inset -2px -2px 8px, --shadow-outer: 4px 4px 8px, --color-palette: pastels, --animation: bounce
```

## Implementation Checklist

- ☐ Border-radius 16-24px
- ☐ Thick borders 3-4px
- ☐ Double shadows (inner+outer)
- ☐ Pastel colors used
- ☐ Soft bounce animations
- ☐ Playful interactions

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

[![Vibrant & Block-based](https://designmd.app/images/library/6.png) Temas & Verticais ### Vibrant & Block-based](https://designmd.app/library/vibrant-block-based)[![Neubrutalism](https://designmd.app/images/library/38.png) Brutalismo ### Neubrutalism](https://designmd.app/library/neubrutalism)[![Claymation 3D](https://designmd.app/images/library/86.png) Retro & Pop ### Claymation 3D](https://designmd.app/library/claymation-3d)[![Kawaii / Sweet Pastel](https://designmd.app/images/library/74.png) Retro & Pop ### Kawaii / Sweet Pastel](https://designmd.app/library/kawaii-sweet-pastel)[![Rococó Delicado](https://designmd.app/images/library/106.png) Arte & Ilustracao ### Rococó Delicado](https://designmd.app/library/rococo-delicado)

Last synced: 4/1/2026
