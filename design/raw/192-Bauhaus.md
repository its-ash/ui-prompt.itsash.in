# Bauhaus

- Source: <https://designmd.app/library/bauhaus>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:05:44.280Z

Arte & Ilustracao1919-1933 Bauhaus School

# Bauhaus

Bauhaus-inspired landing page with strict primary colors and bold geometric shapes. Ideal for identidade de marca, layouts em grade para editorial, web design geométrico, pôsteres. AI-ready template.

Bauhausprimary colorsgeometric shapesboldminimal ornamentform follows functiongridcircle triangle squaremodernist

Use case: Identidade de marca, Layouts em grade para editorial, Web design geométrico, Pôsteres

![Bauhaus](https://designmd.app/images/library/310.png)

## Historical Context

The Bauhaus wasn't just a school — it was a declaration of war against ornament. Founded by Walter Gropius in Weimar in 1919, it collapsed the hierarchy between fine art and craft, insisting that a well-designed chair held as much intellectual weight as a painting. The faculty reads like a modernist hall of fame: Kandinsky, Klee, Moholy-Nagy, each bringing rigor to what had previously been intuition. What makes Bauhaus endure isn't nostalgia — it's that the core thesis remains undefeated. Strip away decoration, respect materials, let structure speak. The preliminary course (Vorkurs) forced students to unlearn everything decorative and rebuild from pure form: the circle, the square, the triangle. Primary colors weren't a stylistic choice; they were a reduction to essentials, a visual grammar anyone could read regardless of language or class. The Nazis shuttered it in 1933, which only accelerated its influence. Diaspora faculty seeded modernism across America and beyond. Every grid system, every sans-serif logotype, every product where form follows function — that's Bauhaus DNA still replicating.

## When to Use

Reach for Bauhaus when the brief demands clarity over charm. It's the right foundation for design education materials, architectural identity systems, museum exhibitions, and any product where function must be immediately legible. Works beautifully when you need to communicate universality — no cultural baggage, no decorative noise. Avoid it when warmth or narrative complexity matters more than structural honesty. Bauhaus is a scalpel, not a paintbrush.

## Design Principles

- Form follows function — every element earns its place or gets cut. Decoration is debt.
- Primary color palette as universal language: red, blue, yellow, black, white. No gradients, no ambiguity.
- Geometric primitives (circle, square, triangle) as the atomic units of all composition.
- Material honesty — never make one thing pretend to be another. Glass looks like glass, steel like steel.
- Unity of art and technology — aesthetic decisions and engineering constraints are the same conversation, not separate departments.

## DESIGN.md

```
---
version: "alpha"
name: "Bauhaus"
description: "Bauhaus-inspired landing page with strict primary colors and bold geometric shapes. Ideal for identidade de marca, layouts em grade para editorial, web design geométrico, pôsteres. AI-ready template."
colors:
primary: "#E63946"
secondary: "#1D3557"
tertiary: "#F4D35E"
neutral: "#000000"
surface: "#000000"
accent: "#E8E8E8"
typography:
h1:
fontFamily: Josefin Sans
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Josefin Sans
fontSize: 1rem
fontWeight: 400
rounded:
sm: 2px
md: 4px
lg: 8px
spacing:
sm: 2.0rem
md: 4.0rem
lg: 8.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
button-accent:
backgroundColor: "{colors.accent}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Bauhaus-inspired landing page with strict primary colors and bold geometric shapes. Ideal for identidade de marca, layouts em grade para editorial, web design geométrico, pôsteres. AI-ready template. The Bauhaus wasn't just a school — it was a declaration of war against ornament. Founded by Walter Gropius in Weimar in 1919, it collapsed the hierarchy between fine art and craft, insisting that a well-designed chair held as much intellectual weight as a painting. The faculty reads like a modernist hall of fame: Kandinsky, Klee, Moholy-Nagy, each bringing rigor to what had previously been intuition.

What makes Bauhaus endure isn't nostalgia — it's that the core thesis remains undefeated. Strip away decoration, respect materials, let structure speak. The preliminary course (Vorkurs) forced students to unlearn everything decorative and rebuild from pure form: the circle, the square, the triangle. Primary colors weren't a stylistic choice; they were a reduction to essentials, a visual grammar anyone could read regardless of language or class.

The Nazis shuttered it in 1933, which only accelerated its influence. Diaspora faculty seeded modernism across America and beyond. Every grid system, every sans-serif logotype, every product where form follows function — that's Bauhaus DNA still replicating.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Geometric, Primary Colors, Functional, Form-Follows-Function
- **Keywords:** Bauhaus, primary colors, geometric shapes, bold, minimal ornament, form follows function, grid, circle triangle square, modernist
- **Era:** 1919-1933 Bauhaus School
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Primary Red** (#E63946) — Primary accent, CTAs and interactive elements
- **Primary Blue** (#1D3557) — Primary accent, CTAs and interactive elements
- **Primary Yellow** (#F4D35E) — Primary accent, CTAs and interactive elements
- **Pure White** (#FFFFFF) — Light surface, card backgrounds
- **Black** (#000000) — Deep contrast surface
- **Light Grey** (#E8E8E8) — Secondary text, borders, muted elements
- **Warm Beige** (#F5F0E1) — Extended palette, decorative use
- **Deep Grey** (#2B2B2B) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Josefin Sans — Weight 700, tight tracking, used for headline impact
- **Body:** Josefin Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Josefin Sans — 0.875rem, weight 500, slight letter-spacing
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

Bold geometric shapes (circles, triangles, squares) as decorative elements via CSS, strict grid layouts, minimal ornamentation, primary color blocks, clean sharp transitions (200ms), geometric hover effects (rotate, scale)

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Primary colors only (red
- Do blue
- Do yellow
- Do B&W)
- Do Bold geometric shapes (circle
- Do triangle
- Do square)
- Do Strict grid layout
- Do Minimal ornamentation
- Do Geometric sans-serif typography
- Do No gradients or shadows
- Do Form follows function
- Do Responsive grid

## Use Case

Identidade de marca, Layouts em grade para editorial, Web design geométrico, Pôsteres
```

[Download DESIGN.md](https://designmd.app/library/bauhaus/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Josefin Sans', sans-serif, background: #FFFFFF, color: #000000, border: 3px solid #000000, border-radius: 0px or 50%, clip-path: polygon() for triangles, no box-shadow, no gradients, display: grid with strict columns, font-weight: 700
```

### Variables

```
--color-red: #E63946, --color-blue: #1D3557, --color-yellow: #F4D35E, --color-white: #FFFFFF, --color-black: #000000, --font-primary: 'Josefin Sans', --border: 3px solid #000000, --border-radius: 0px, --spacing: 2rem
```

### Checklist

☐ Primary colors only (red, blue, yellow, B&W), ☐ Bold geometric shapes (circle, triangle, square), ☐ Strict grid layout, ☐ Minimal ornamentation, ☐ Geometric sans-serif typography, ☐ No gradients or shadows, ☐ Form follows function, ☐ Responsive grid

## Colors

Primary

#E63946

#1D3557

#F4D35E

#FFFFFF

Secondary

#000000

#E8E8E8

#F5F0E1

#2B2B2B

### Effects

Bold geometric shapes (circles, triangles, squares) as decorative elements via CSS, strict grid layouts, minimal ornamentation, primary color blocks, clean sharp transitions (200ms), geometric hover effects (rotate, scale)

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

- **Name:** Bauhaus
- **Type:** Geometric, Primary Colors, Functional, Form-Follows-Function
- **Keywords:** Bauhaus, primary colors, geometric shapes, bold, minimal ornament, form follows function, grid, circle triangle square, modernist
- **Era:** 1919-1933 Bauhaus School
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Primary Red #E63946, Primary Blue #1D3557, Primary Yellow #F4D35E, Pure White #FFFFFF
- **Secondary:** Black #000000, Light Grey #E8E8E8, Warm Beige #F5F0E1, Deep Grey #2B2B2B

## Visual Effects

Bold geometric shapes (circles, triangles, squares) as decorative elements via CSS, strict grid layouts, minimal ornamentation, primary color blocks, clean sharp transitions (200ms), geometric hover effects (rotate, scale)

## AI Visual Direction

Design a Bauhaus-inspired landing page with strict primary colors and bold geometric shapes. Use red, blue, yellow, black and white only. Apply circles, triangles and squares as decorative CSS elements, strict grid layouts, minimal ornamentation. Typography should be geometric sans-serif (like Futura). Form follows function — every element has purpose. Clean, bold, modernist aesthetic.

## CSS Technical

```css
font-family: 'Josefin Sans', sans-serif, background: #FFFFFF, color: #000000, border: 3px solid #000000, border-radius: 0px or 50%, clip-path: polygon() for triangles, no box-shadow, no gradients, display: grid with strict columns, font-weight: 700
```

## Design System Variables

```css
--color-red: #E63946, --color-blue: #1D3557, --color-yellow: #F4D35E, --color-white: #FFFFFF, --color-black: #000000, --font-primary: 'Josefin Sans', --border: 3px solid #000000, --border-radius: 0px, --spacing: 2rem
```

## Implementation Checklist

- ☐ Primary colors only (red
- blue
- yellow
- B&W)
- ☐ Bold geometric shapes (circle
- triangle
- square)
- ☐ Strict grid layout
- ☐ Minimal ornamentation
- ☐ Geometric sans-serif typography
- ☐ No gradients or shadows
- ☐ Form follows function
- ☐ Responsive grid

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

[![Japandi](https://designmd.app/images/library/298.png) Minimalismo & Swiss ### Japandi](https://designmd.app/library/japandi)[![Brutalism](https://designmd.app/images/library/311.png) Brutalismo ### Brutalism](https://designmd.app/library/brutalism-311)[![Neoclassical Art](https://designmd.app/images/library/288.png) Arte & Ilustracao ### Neoclassical Art](https://designmd.app/library/neoclassical-art)[![Bauhaus](https://designmd.app/images/library/310.png) Arte & Ilustracao ### Bauhaus](https://designmd.app/library/bauhaus)[![Bento Grid](https://designmd.app/images/library/316.png) Editorial & Tipografia ### Bento Grid](https://designmd.app/library/bento-grid)

Last synced: 4/1/2026
