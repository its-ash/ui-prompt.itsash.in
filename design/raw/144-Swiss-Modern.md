# Swiss Modern

- Source: <https://designmd.app/library/swiss-modern>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:04:27.315Z

Minimalismo & Swiss1920s Bauhaus + 2024 Modern

# Swiss Modern

Clean, precise, Bauhaus-inspired landing page with Swiss Modern aesthetic. Ideal for agências de design, architecture, art galleries, portfolios minimalistas. AI-ready template.

swissmodernbauhauscleanpreciseArchivoNunitovisible gridasymmetricgeometric shapesred accentblack white

Use case: Design agencies, Architecture, Art galleries, Minimalist portfolios

![Swiss Modern](https://designmd.app/images/library/268.png)

## Historical Context

Swiss Modern doesn't exist in a vacuum — it's the direct descendant of the International Typographic Style that emerged from Basel and Zürich in the 1950s. Müller-Brockmann, Ruder, and the crew at Neue Grafik weren't decorating. They were engineering communication. The grid wasn't a suggestion; it was the entire philosophy. Every element earned its place through function, not aesthetics. What we call Swiss Modern today takes that ruthless clarity and strips away the last traces of nostalgia. No Akzidenz-Grotesk worship for its own sake. The Bauhaus connection is real but often overstated — where Bauhaus married art to industry, Swiss design divorced art from communication entirely. The grid became law. White space became structure, not absence. The modern interpretation keeps the bones — mathematical grids, sans-serif hierarchy, asymmetric balance — but acknowledges that screens aren't posters. We have scroll depth, viewport constraints, and users who won't read your manifesto. Swiss Modern respects that reality while refusing to compromise on precision.

## When to Use

When the work needs to disappear behind the message. Design agencies proving they understand restraint. Law firms, consultancies, and financial services where visual noise signals incompetence. Corporate identities that need to survive ten years without a rebrand. Any context where the client's first instinct is 'make it pop' and your job is to show them why silence is louder. Not for brands that need warmth, personality, or approachability — Swiss Modern is deliberately impersonal, and that's the point.

## Design Principles

- The grid is non-negotiable — every element aligns to a mathematical system, never to gut feeling or 'what looks right'
- Typography carries the entire hierarchy — if you need color or decoration to establish importance, your type system has failed
- White space is structural, not decorative — it defines relationships between elements as precisely as the elements themselves
- Reduce until removing anything further would destroy meaning — then stop, because you've arrived
- Asymmetric balance over centered symmetry — tension creates visual interest without ornament

## DESIGN.md

```
---
version: "alpha"
name: "Swiss Modern"
description: "Clean, precise, Bauhaus-inspired landing page with Swiss Modern aesthetic. Ideal for agências de design, architecture, art galleries, portfolios minimalistas. AI-ready template."
colors:
primary: "#ffffff"
secondary: "#000000"
tertiary: "#ff3300"
neutral: "#f5f5f5"
surface: "#cccccc"
accent: "#333333"
typography:
h1:
fontFamily: Archivo
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Archivo
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Clean, precise, Bauhaus-inspired landing page with Swiss Modern aesthetic. Ideal for agências de design, architecture, art galleries, portfolios minimalistas. AI-ready template. Swiss Modern doesn't exist in a vacuum — it's the direct descendant of the International Typographic Style that emerged from Basel and Zürich in the 1950s. Müller-Brockmann, Ruder, and the crew at Neue Grafik weren't decorating. They were engineering communication. The grid wasn't a suggestion; it was the entire philosophy. Every element earned its place through function, not aesthetics.

What we call Swiss Modern today takes that ruthless clarity and strips away the last traces of nostalgia. No Akzidenz-Grotesk worship for its own sake. The Bauhaus connection is real but often overstated — where Bauhaus married art to industry, Swiss design divorced art from communication entirely. The grid became law. White space became structure, not absence.

The modern interpretation keeps the bones — mathematical grids, sans-serif hierarchy, asymmetric balance — but acknowledges that screens aren't posters. We have scroll depth, viewport constraints, and users who won't read your manifesto. Swiss Modern respects that reality while refusing to compromise on precision.

- Density: 3/10 — Airy
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Clean, Precise, Bauhaus-Inspired, Geometric
- **Keywords:** swiss, modern, bauhaus, clean, precise, Archivo, Nunito, visible grid, asymmetric, geometric shapes, red accent, black white
- **Era:** 1920s Bauhaus + 2024 Modern
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Pure White** (#ffffff) — Light surface, card backgrounds
- **Pure Black** (#000000) — Dark surface, primary background
- **Red Accent** (#ff3300) — Primary accent, CTAs and interactive elements
- **Light Grey** (#f5f5f5) — Secondary text, borders, muted elements
- **Medium Grey** (#cccccc) — Secondary text, borders, muted elements
- **Dark Grey** (#333333) — Deep contrast surface

## Typography

- **Display / Hero:** Archivo — Weight 700, tight tracking, used for headline impact
- **Accent:** Nunito — Used for decorative or emphasis text
- **Body:** Archivo — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Archivo — 0.875rem, weight 500, slight letter-spacing
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

Visible grid lines, asymmetric layouts, geometric shapes (circles, rectangles, lines), red accent as focal point, precise typography hierarchy, clean transitions 200ms

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (50%) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (50%) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Archivo + Nunito carregados
- Do Pure white/black/red palette
- Do Visible grid lines
- Do Asymmetric layouts
- Do Geometric shapes CSS
- Do Red accent como focal point
- Do Typography hierarchy precisa
- Do Responsivo mobile/tablet/desktop

## Use Case

Design agencies, Architecture, Art galleries, Minimalist portfolios
```

[Download DESIGN.md](https://designmd.app/library/swiss-modern/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Archivo' for headings, 'Nunito' for body, background: #ffffff, color: #000000, .accent-red { color: #ff3300 }, .grid-visible { background-image: linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px); background-size: 60px 60px }, .geo-shape { position: absolute }, .geo-circle { border: 2px solid #000; border-radius: 50% }, .geo-rect { border: 2px solid #ff3300 }
```

### Variables

```
--bg-white: #ffffff, --text-black: #000000, --accent-red: #ff3300, --grid-size: 60px, --font-display: 'Archivo', --font-body: 'Nunito', --font-weight-display: 800, --font-weight-body: 400, --border-width: 2px
```

### Checklist

☐ Archivo + Nunito carregados, ☐ Pure white/black/red palette, ☐ Visible grid lines, ☐ Asymmetric layouts, ☐ Geometric shapes CSS, ☐ Red accent como focal point, ☐ Typography hierarchy precisa, ☐ Responsivo mobile/tablet/desktop

## Colors

Primary

#ffffff

#000000

#ff3300

Secondary

#f5f5f5

#cccccc

#333333

### Effects

Visible grid lines, asymmetric layouts, geometric shapes (circles, rectangles, lines), red accent as focal point, precise typography hierarchy, clean transitions 200ms

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

- **Name:** Swiss Modern
- **Type:** Clean, Precise, Bauhaus-Inspired, Geometric
- **Keywords:** swiss, modern, bauhaus, clean, precise, Archivo, Nunito, visible grid, asymmetric, geometric shapes, red accent, black white
- **Era:** 1920s Bauhaus + 2024 Modern
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Pure White #ffffff, Pure Black #000000, Red Accent #ff3300
- **Secondary:** Light Grey #f5f5f5, Medium Grey #cccccc, Dark Grey #333333

## Visual Effects

Visible grid lines, asymmetric layouts, geometric shapes (circles, rectangles, lines), red accent as focal point, precise typography hierarchy, clean transitions 200ms

## AI Visual Direction

Design a clean, precise, Bauhaus-inspired landing page with Swiss Modern aesthetic. Pure white background, pure black text, red accent (#ff3300). Use Archivo (800) for bold display and Nunito (400) for body. Include visible grid lines. Create asymmetric layouts with geometric shapes (circles, rectangles, lines). Red accent as focal point. Precise typography hierarchy.

## CSS Technical

```css
font-family: 'Archivo' for headings, 'Nunito' for body, background: #ffffff, color: #000000, .accent-red { color: #ff3300 }, .grid-visible { background-image: linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px); background-size: 60px 60px }, .geo-shape { position: absolute }, .geo-circle { border: 2px solid #000; border-radius: 50% }, .geo-rect { border: 2px solid #ff3300 }
```

## Design System Variables

```css
--bg-white: #ffffff, --text-black: #000000, --accent-red: #ff3300, --grid-size: 60px, --font-display: 'Archivo', --font-body: 'Nunito', --font-weight-display: 800, --font-weight-body: 400, --border-width: 2px
```

## Implementation Checklist

- ☐ Archivo + Nunito carregados
- ☐ Pure white/black/red palette
- ☐ Visible grid lines
- ☐ Asymmetric layouts
- ☐ Geometric shapes CSS
- ☐ Red accent como focal point
- ☐ Typography hierarchy precisa
- ☐ Responsivo mobile/tablet/desktop

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

[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)[![Swiss Modernism 2.0](https://designmd.app/images/library/50.png) Minimalismo & Swiss ### Swiss Modernism 2.0](https://designmd.app/library/swiss-modernism-2-0)[![Bauhaus / Risograph Modern](https://designmd.app/images/library/77.png) Arte & Ilustracao ### Bauhaus / Risograph Modern](https://designmd.app/library/bauhaus-risograph-modern)[![Brutalism](https://designmd.app/images/library/4.png) Brutalismo ### Brutalism](https://designmd.app/library/brutalism-4)[![Vintage Editorial](https://designmd.app/images/library/265.png) Editorial & Tipografia ### Vintage Editorial](https://designmd.app/library/vintage-editorial)

Last synced: 4/1/2026
