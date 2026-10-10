# Steampunk Nebula Explorer

- Source: <https://designmd.app/library/steampunk-nebula-explorer>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:01:47.298Z

Futurista & TechRetro-Future

# Steampunk Nebula Explorer

Steampunk space landing page, nebula background, brass and copper gears, vintage sci-fi aesthetic, explorer style, cosmic industrial. Ideal for landing pages, modern websites. AI-ready template.

steampunkspacenebulagearbrasscoppercosmicvintage sci-fi

Use case: Landing pages, Modern websites

![Steampunk Nebula Explorer](https://designmd.app/images/library/167.png)

## Historical Context

Before NASA, before radio telescopes and satellite arrays, there were people in wool coats squinting through brass tubes at infinity. Victorian astronomers mapped the cosmos with hand-ground lenses and obsessive patience — their observatories were temples of gears, copper fittings, and hand-drawn star charts inked on vellum. That tension between the impossibly vast and the painstakingly handmade is where steampunk-meets-space lives. The aesthetic pulls from a real moment in history: the 1800s, when nebulae were first sketched (not photographed) by people who had no idea what they were actually looking at. Lord Rosse built a 72-inch telescope — a monster of riveted iron and speculum metal — just to peer at the Whirlpool Galaxy. The drawings that came out of those sessions look like fever dreams. Swirling, organic, deeply human interpretations of cosmic structure. Steampunk Nebula Explorer channels that energy. Mechanical precision meeting cosmic chaos. Brass against the void. It's not retro-futurism for nostalgia's sake — it's a reminder that wonder and craft used to be the same thing.

## When to Use

Reach for this when your project needs to feel both ancient and infinite. Space games that want texture beyond clean sci-fi. Astronomy apps that need warmth and personality instead of sterile dark-mode dashboards. Sci-fi brands building worlds where technology is tactile, not invisible. Educational platforms teaching kids (or adults) that the universe was explored by hand before it was explored by algorithm. If your UI should feel like opening a leather-bound atlas of impossible places — this is it.

## Design Principles

- Mechanical honesty — expose the structure. Visible joints, layered panels, riveted edges. Nothing floats without reason.
- Cosmic depth through layering — nebula gradients sit behind brass UI elements. Foreground is tactile, background is infinite.
- Warm metallics over cold chrome — copper, aged brass, tarnished gold. This is handcraft, not factory line.
- Controlled chaos in color — deep purples, burnt oranges, teal gas clouds. Let the nebula palette breathe but anchor it with neutral mechanical tones.
- Typography with weight — serif faces for headers, monospace for data. Nothing thin or weightless. Every letterform should feel engraved.

## DESIGN.md

```
---
version: "alpha"
name: "Steampunk Nebula Explorer"
description: "Steampunk space landing page, nebula background, brass and copper gears, vintage sci-fi aesthetic, explorer style, cosmic industrial. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#0d1b33"
secondary: "#2b1d0e"
tertiary: "#cd7f32"
neutral: "#b5a642"
surface: "#b87333"
accent: "#5d3a9b"
typography:
h1:
fontFamily: Rye
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Rye
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Steampunk space landing page, nebula background, brass and copper gears, vintage sci-fi aesthetic, explorer style, cosmic industrial. Ideal for landing pages, modern websites. AI-ready template. Before NASA, before radio telescopes and satellite arrays, there were people in wool coats squinting through brass tubes at infinity. Victorian astronomers mapped the cosmos with hand-ground lenses and obsessive patience — their observatories were temples of gears, copper fittings, and hand-drawn star charts inked on vellum. That tension between the impossibly vast and the painstakingly handmade is where steampunk-meets-space lives.

The aesthetic pulls from a real moment in history: the 1800s, when nebulae were first sketched (not photographed) by people who had no idea what they were actually looking at. Lord Rosse built a 72-inch telescope — a monster of riveted iron and speculum metal — just to peer at the Whirlpool Galaxy. The drawings that came out of those sessions look like fever dreams. Swirling, organic, deeply human interpretations of cosmic structure.

Steampunk Nebula Explorer channels that energy. Mechanical precision meeting cosmic chaos. Brass against the void. It's not retro-futurism for nostalgia's sake — it's a reminder that wonder and craft used to be the same thing.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Adventurous, Industrial, Imaginative
- **Keywords:** steampunk, space, nebula, gear, brass, copper, cosmic, vintage sci-fi
- **Era:** Retro-Future
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Background** (#0d1b33) — Primary background surface
- **Text** (#2b1d0e) — Primary text color
- **Accent** (#cd7f32) — Primary accent, CTAs and interactive elements
- **Brass** (#b5a642) — Extended palette, decorative use
- **Copper** (#b87333) — Metallic accent, decorative detail
- **Nebula Purple** (#5d3a9b) — Accent color, emphasis elements
- **Star White** (#ffffff) — Secondary surface

## Typography

- **Display / Hero:** Rye — Weight 700, tight tracking, used for headline impact
- **Body:** Rye — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Rye — 0.875rem, weight 500, slight letter-spacing
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

Interlocking brass gears, copper piping, torn parchment containers, weathered paper grain, brushed bronze metal, cosmic void.

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

- Do Deep blue/space background
- Do Brass/Copper metallic accents
- Do Gear/Machine visuals
- Do Vintage display typography
- Do Glowing nebula effects

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/steampunk-nebula-explorer/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background-color: #0d1b33; color: #b5a642; font-family: 'Rye', cursive; border: 2px solid #cd7f32; box-shadow: 0 0 15px #5d3a9b;
```

### Variables

```
--bg-space: #0d1b33, --brass: #b5a642, --copper: #cd7f32, --nebula-glow: #5d3a9b, --font-display: 'Rye', cursive
```

### Checklist

☐ Deep blue/space background, ☐ Brass/Copper metallic accents, ☐ Gear/Machine visuals, ☐ Vintage display typography, ☐ Glowing nebula effects

## Colors

Primary

#0d1b33

#2b1d0e

#cd7f32

Secondary

#b5a642

#b87333

#5d3a9b

#ffffff

### Effects

Interlocking brass gears, copper piping, torn parchment containers, weathered paper grain, brushed bronze metal, cosmic void.

### Light/Dark

✗ No / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Steampunk Nebula Explorer
- **Type:** Adventurous, Industrial, Imaginative
- **Keywords:** steampunk, space, nebula, gear, brass, copper, cosmic, vintage sci-fi
- **Era:** Retro-Future
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** Background #0d1b33, Text #2b1d0e, Accent #cd7f32
- **Secondary:** Brass #b5a642, Copper #b87333, Nebula Purple #5d3a9b, Star White #ffffff

## Visual Effects

Interlocking brass gears, copper piping, torn parchment containers, weathered paper grain, brushed bronze metal, cosmic void.

## AI Visual Direction

steampunk space landing page, nebula background, brass and copper gears, vintage sci-fi aesthetic, explorer style, cosmic industrial.

## CSS Technical

```css
background-color: #0d1b33; color: #b5a642; font-family: 'Rye', cursive; border: 2px solid #cd7f32; box-shadow: 0 0 15px #5d3a9b;
```

## Design System Variables

```css
--bg-space: #0d1b33, --brass: #b5a642, --copper: #cd7f32, --nebula-glow: #5d3a9b, --font-display: 'Rye', cursive
```

## Implementation Checklist

- ☐ Deep blue/space background
- ☐ Brass/Copper metallic accents
- ☐ Gear/Machine visuals
- ☐ Vintage display typography
- ☐ Glowing nebula effects

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

[![Steampunk Vitoriano](https://designmd.app/images/library/103.png) Futurista & Tech ### Steampunk Vitoriano](https://designmd.app/library/steampunk-vitoriano)[![PCB Schematic Architecture](https://designmd.app/images/library/151.png) Futurista & Tech ### PCB Schematic Architecture](https://designmd.app/library/pcb-schematic-architecture)[![Denim and Industrial Craft](https://designmd.app/images/library/155.png) Futurista & Tech ### Denim and Industrial Craft](https://designmd.app/library/denim-and-industrial-craft)[![Afrofuturismo Digital](https://designmd.app/images/library/111.png) Temas & Verticais ### Afrofuturismo Digital](https://designmd.app/library/afrofuturismo-digital)[![Aurora Boreal Nórdica](https://designmd.app/images/library/116.png) Futurista & Tech ### Aurora Boreal Nórdica](https://designmd.app/library/aurora-boreal-nordica)

Last synced: 4/1/2026
