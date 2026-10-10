# Tactile 3D Neumorphism

- Source: <https://designmd.app/library/tactile-3d-neumorphism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:04:54.306Z

Flat & Soft UI2020s Modern / Skeuomorphic Revival

# Tactile 3D Neumorphism

Tactile 3D neumorphic interface with inflated, puffy shapes that look extruded from the background. Ideal for modern apps, dashboards, premium interfaces, produtos digitais, fintech. AI-ready template.

neumorphism3Dtactileinflatedglossysoft shadowsextrudedpuffyroundedsquishy

Use case: Modern apps, Dashboards, Premium interfaces, Digital products, Fintech

![Tactile 3D Neumorphism](https://designmd.app/images/library/283.png)

## Historical Context

Neumorphism emerged around 2019-2020 as a direct rebellion against the flatness that had dominated UI since iOS 7. Designers were bored. Flat design solved legibility but killed personality — every app looked like the same Figma template. Alexander Plyuto's Dribbble shot of a soft, extruded calculator UI went viral and suddenly everyone was experimenting with inner shadows and subtle gradients that made elements look physically pressed into or raised from their background. The style draws from real-world industrial design — think Braun knobs, Dieter Rams' radio dials, the satisfying click of a physical toggle switch. It's skeuomorphism's quieter, more refined cousin. Where Apple's old leather textures were loud and literal, neumorphism abstracts physicality into light behavior alone. Two shadows — one light, one dark — create the illusion of depth without any texture mapping. The movement faced immediate criticism around accessibility. Low contrast between element and background made boundaries hard to perceive. The best implementations learned from this: they pair the soft dimensional effect with clear state changes, color accents on interaction, and sufficient contrast ratios. The style works when you treat it as a lighting system, not a gimmick.

## When to Use

Neumorphism shines in interfaces where users expect physical feedback — smart home dashboards with dials and toggles, audio mixing apps, thermostat controls, IoT device panels. Anywhere the mental model is 'I'm pressing a real button.' It works best with limited element counts: a control panel with 6-12 interactive elements, not a dense data table. The moment you need to scan lots of information quickly, step away. This style is for deliberate, focused interaction — one knob at a time.

## Design Principles

- Light source consistency is non-negotiable — pick one global light direction (typically top-left) and never break it. The moment shadows contradict each other, the illusion collapses and you're left with visual noise.
- States must be dramatically different. Resting, pressed, and active can't be subtle variations — extrude for idle, inset for pressed, add a color glow for active. Users need to feel the click even without haptics.
- Background and element share the same hue. This is the core trick: neumorphism only works on monochromatic or near-monochromatic surfaces. The depth comes from shadow, not color difference. Break this and you're just doing regular card UI with extra shadows.
- Limit your interactive density. More than 10-12 neumorphic elements on screen creates visual fatigue — every piece demands attention equally. Use flat or minimal styles for secondary content and reserve the tactile treatment for primary controls.
- Pair with generous spacing and large touch targets. The dimensional effect needs breathing room to read correctly. Cramped neumorphic elements merge into an indistinct blob. Minimum 16px gap between raised surfaces, minimum 48px touch targets.

## DESIGN.md

```
---
version: "alpha"
name: "Tactile 3D Neumorphism"
description: "Tactile 3D neumorphic interface with inflated, puffy shapes that look extruded from the background. Ideal for modern apps, dashboards, premium interfaces, produtos digitais, fintech. AI-ready template."
colors:
primary: "#E8E0F0"
secondary: "#F0F0F3"
tertiary: "#E8F5E9"
neutral: "#F8BBD0"
surface: "#B3C7E6"
accent: "#FFDAB9"
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
rounded:
sm: 24px
md: 48px
lg: 72px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Tactile 3D neumorphic interface with inflated, puffy shapes that look extruded from the background. Ideal for modern apps, dashboards, premium interfaces, produtos digitais, fintech. AI-ready template. Neumorphism emerged around 2019-2020 as a direct rebellion against the flatness that had dominated UI since iOS 7. Designers were bored. Flat design solved legibility but killed personality — every app looked like the same Figma template. Alexander Plyuto's Dribbble shot of a soft, extruded calculator UI went viral and suddenly everyone was experimenting with inner shadows and subtle gradients that made elements look physically pressed into or raised from their background.

The style draws from real-world industrial design — think Braun knobs, Dieter Rams' radio dials, the satisfying click of a physical toggle switch. It's skeuomorphism's quieter, more refined cousin. Where Apple's old leather textures were loud and literal, neumorphism abstracts physicality into light behavior alone. Two shadows — one light, one dark — create the illusion of depth without any texture mapping.

The movement faced immediate criticism around accessibility. Low contrast between element and background made boundaries hard to perceive. The best implementations learned from this: they pair the soft dimensional effect with clear state changes, color accents on interaction, and sufficient contrast ratios. The style works when you treat it as a lighting system, not a gimmick.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Soft 3D, Inflated, Glossy, Extruded
- **Keywords:** neumorphism, 3D, tactile, inflated, glossy, soft shadows, extruded, puffy, rounded, squishy
- **Era:** 2020s Modern / Skeuomorphic Revival
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Soft Lavender** (#E8E0F0) — Primary surface or dominant color
- **Cloud White** (#F0F0F3) — Light surface, card backgrounds
- **Mint Cream** (#E8F5E9) — Light surface, card backgrounds
- **Bubblegum Pink** (#F8BBD0) — Primary text color
- **Sky Periwinkle** (#B3C7E6) — Primary text color
- **Soft Peach** (#FFDAB9) — Extended palette, decorative use
- **Lilac** (#CE93D8) — Extended palette, decorative use

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

Multi-layer neumorphic shadows (convex + concave), glossy highlight gradient on top edge, inflated/puffy 3D appearance via border-radius 20-30px, smooth press animation (scale 0.97), subtle inner glow for glass-like finish, 200ms transitions

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 24px. See rounded tokens in front matter for the full scale.

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

- Do Multi-layer neumorphic shadows
- Do Large border-radius 20-30px
- Do Glossy highlight on top edges
- Do Inflated/puffy appearance
- Do Press animation on interactive elements
- Do Pastel color palette consistent

## Use Case

Modern apps, Dashboards, Premium interfaces, Digital products, Fintech
```

[Download DESIGN.md](https://designmd.app/library/tactile-3d-neumorphism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
border-radius: 24px, box-shadow: -8px -8px 20px rgba(255,255,255,0.8), 8px 8px 20px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.6), background: linear-gradient(135deg, lighter, base) for glossy top, transform: scale(0.97) on active, transition: all 200ms ease
```

### Variables

```
--border-radius: 24px, --shadow-light: -8px -8px 20px rgba(255,255,255,0.8), --shadow-dark: 8px 8px 20px rgba(0,0,0,0.1), --glossy-highlight: inset 0 2px 4px rgba(255,255,255,0.6), --press-scale: 0.97, --transition: 200ms
```

### Checklist

☐ Multi-layer neumorphic shadows, ☐ Large border-radius 20-30px, ☐ Glossy highlight on top edges, ☐ Inflated/puffy appearance, ☐ Press animation on interactive elements, ☐ Pastel color palette consistent

## Colors

Primary

#E8E0F0

#F0F0F3

#E8F5E9

Secondary

#F8BBD0

#B3C7E6

#FFDAB9

#CE93D8

### Effects

Multi-layer neumorphic shadows (convex + concave), glossy highlight gradient on top edge, inflated/puffy 3D appearance via border-radius 20-30px, smooth press animation (scale 0.97), subtle inner glow for glass-like finish, 200ms transitions

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

- **Name:** Tactile 3D Neumorphism
- **Type:** Soft 3D, Inflated, Glossy, Extruded
- **Keywords:** neumorphism, 3D, tactile, inflated, glossy, soft shadows, extruded, puffy, rounded, squishy
- **Era:** 2020s Modern / Skeuomorphic Revival
- **Light/Dark:** ✓ Full / ◐ Partial

## Color Palette

- **Primary:** Soft Lavender #E8E0F0, Cloud White #F0F0F3, Mint Cream #E8F5E9
- **Secondary:** Bubblegum Pink #F8BBD0, Sky Periwinkle #B3C7E6, Soft Peach #FFDAB9, Lilac #CE93D8

## Visual Effects

Multi-layer neumorphic shadows (convex + concave), glossy highlight gradient on top edge, inflated/puffy 3D appearance via border-radius 20-30px, smooth press animation (scale 0.97), subtle inner glow for glass-like finish, 200ms transitions

## AI Visual Direction

Design a tactile 3D neumorphic interface with inflated, puffy shapes that look extruded from the background. Use soft multi-layer shadows for depth, glossy highlights on top edges, large border-radius (20-30px) for squishy feel. Elements should look like they can be pressed. Pastel color palette with subtle gradients. Add inner glow for glass-like finish on cards and buttons.

## CSS Technical

```css
border-radius: 24px, box-shadow: -8px -8px 20px rgba(255,255,255,0.8), 8px 8px 20px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.6), background: linear-gradient(135deg, lighter, base) for glossy top, transform: scale(0.97) on active, transition: all 200ms ease
```

## Design System Variables

```css
--border-radius: 24px, --shadow-light: -8px -8px 20px rgba(255,255,255,0.8), --shadow-dark: 8px 8px 20px rgba(0,0,0,0.1), --glossy-highlight: inset 0 2px 4px rgba(255,255,255,0.6), --press-scale: 0.97, --transition: 200ms
```

## Implementation Checklist

- ☐ Multi-layer neumorphic shadows
- ☐ Large border-radius 20-30px
- ☐ Glossy highlight on top edges
- ☐ Inflated/puffy appearance
- ☐ Press animation on interactive elements
- ☐ Pastel color palette consistent

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

[![Neumorphism](https://designmd.app/images/library/2.png) Flat & Soft UI ### Neumorphism](https://designmd.app/library/neumorphism)[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)[![3D & Hyperrealism](https://designmd.app/images/library/5.png) Futurista & Tech ### 3D & Hyperrealism](https://designmd.app/library/3d-hyperrealism)[![Spatial UI (VisionOS)](https://designmd.app/images/library/55.png) Futurista & Tech ### Spatial UI (VisionOS)](https://designmd.app/library/spatial-ui-visionos)[![Soft UI Evolution](https://designmd.app/images/library/19.png) Flat & Soft UI ### Soft UI Evolution](https://designmd.app/library/soft-ui-evolution)

Last synced: 4/1/2026
