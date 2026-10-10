# Islamic Geometric

- Source: <https://designmd.app/library/islamic-geometric>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:13.284Z

Claude Artisan · Movimentos históricos8th century-present

# Islamic Geometric

Reference for movimentos históricos Islamic Geometric. Geometric ornament traditions across the Islamic world, built through repeated stars, polygons, and interlaced bands.

Islamic Geometricgirihgeometric arabesqueMeasured star and polygon tessellationsInk, lapis, turquoise, and warm parchmentSymmetry and repetition used as structural rhythmhistorical

Use case: grade modular responsiva; Measured star and polygon tessellations; Ink, lapis, turquoise, and warm parchment

![Islamic Geometric](https://designmd.app/images/library/662.png)

## Historical Context

Geometric ornament traditions across the Islamic world, built through repeated stars, polygons, and interlaced bands. Example: Girih tilework at the Darb-i Imam shrine and Moorish geometric decoration at the Alhambra..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Islamic Geometric"
description: "Islamic Geometric visual system, translated from the Claude Artisan catalog for use in digital products. Measured star and polygon tessellations; Ink, lapis, turquoise, and warm parchment"
colors:
primary: "#066c72"
background: "#f6eddb"
surface: "#fffaf0"
text: "#173a3a"
accent: "#c69332"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Arial, Helvetica, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Arial, Helvetica, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "2px"
lg: "4px"
spacing:
sm: "8px"
md: "16px"
lg: "32px"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "16px"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "16px"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "24px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "16px"
---
## Overview

Islamic Geometric visual system, translated from the Claude Artisan catalog for use in digital products. Measured star and polygon tessellations; Ink, lapis, turquoise, and warm parchment

- **Category:** historical
- **Era:** 8th century-present
- **Origin:** Geometric ornament traditions across the Islamic world, built through repeated stars, polygons, and interlaced bands.
- **Reference:** Girih tilework at the Darb-i Imam shrine and Moorish geometric decoration at the Alhambra.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Measured star and polygon tessellations
- Ink, lapis, turquoise, and warm parchment
- Symmetry and repetition used as structural rhythm

## Colors

- **bg** — #f6eddb
- **surface** — #fffaf0
- **surface-2** — #e6d9be
- **text** — #173a3a
- **text-muted** — #49625e
- **primary** — #066c72
- **accent** — #c69332
- **lapis** — #214f87

## Typography

- Display: Georgia, serif
- Body: Arial, Helvetica, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Measured star and polygon tessellations; Ink, lapis, turquoise, and warm parchment; Symmetry and repetition used as structural rhythm; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/islamic-geometric/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Islamic Geometric — design tokens (generated from style_catalog.json) */
/* 8th century-present | Geometric ornament traditions across the Islamic world, built through repeated stars, polygons, and interlaced bands. */
:root {
/* color */
--color-bg: #f6eddb;
--color-surface: #fffaf0;
--color-surface-2: #e6d9be;
--color-text: #173a3a;
--color-text-muted: #49625e;
--color-primary: #066c72;
--color-accent: #c69332;
--color-lapis: #214f87;
/* radius */
--radius-sm: 0;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-tile: 0 1px 0 #fffaf0 inset, 0 6px 18px rgba(23,58,58,.14);
--shadow-inlay: 0 0 0 2px #c69332 inset;
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: Georgia, serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: .75rem;
--text-sm: .875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 4rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
/* ease */
--ease-standard: cubic-bezier(.2,.7,.2,1);
/* extra (signature gradients, composite borders, filters) */
--star-grid: conic-gradient(from 30deg at 50% 50%, #066c72 0 30deg, transparent 31deg 60deg, #c69332 61deg 90deg, transparent 91deg 120deg, #214f87 121deg 150deg, transparent 151deg 180deg);
}

/* Reusable component primitives: Islamic Geometric. */
body { margin:0; min-height:100vh; color:var(--color-text); background:var(--color-bg); font-family:var(--font-sans); }
.wrap { max-width:880px; margin:0 auto; padding:var(--space-16) var(--space-6); display:grid; gap:var(--space-8); }
.nav { display:flex; align-items:center; gap:var(--space-4); padding:var(--space-4) var(--space-6); background:var(--color-surface); position:relative; z-index:1; }
.nav a { color:var(--color-text-muted); text-decoration:none; font-size:var(--text-sm); }.nav a:hover { color:var(--color-text); }
.btn { appearance:none; border:1px solid var(--color-text); border-radius:var(--radius-md); background:var(--color-surface-2); color:var(--color-text); padding:var(--space-3) var(--space-6); font:700 var(--text-sm)/1 var(--font-sans); cursor:pointer; transition:transform .18s var(--ease-standard),background .18s var(--ease-standard); }
.btn:hover { transform:translateY(-2px); background:var(--color-accent); }.btn:active { transform:translateY(0); }.btn:focus-visible,.input:focus-visible { outline:3px solid var(--color-accent); outline-offset:3px; }.btn[disabled] { opacity:.5; cursor:not-allowed; transform:none; }
.input { width:min(100%,500px); box-sizing:border-box; padding:var(--space-3) var(--space-4); border:1px solid var(--color-text-muted); border-radius:var(--radius-sm); background:var(--color-surface); color:var(--color-text); font:var(--text-base) var(--font-sans); }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:var(--space-4); }.card { background:var(--color-surface); padding:var(--space-6); position:relative; z-index:1; }.card h3 { margin:0 0 var(--space-2); font:700 var(--text-xl)/1.15 var(--font-display); }.card p { margin:0; color:var(--color-text-muted); }.row { display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-3); position:relative; z-index:1; }.badge { display:inline-flex; align-items:center; padding:var(--space-2) var(--space-3); border-radius:var(--radius-pill); background:var(--color-surface-2); font-size:var(--text-xs); }
@media (max-width:620px){.wrap{padding:var(--space-8) var(--space-4)}.nav{flex-wrap:wrap}.nav strong{width:100%}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.wrap{position:relative}.wrap::before{content:"";position:absolute;right:3%;top:1rem;width:150px;height:150px;background:var(--star-grid);border-radius:50%;opacity:.32}.card,.nav{box-shadow:var(--shadow-tile);border:1px solid var(--color-primary)}.btn--primary{background:var(--color-primary);color:#fffaf0}.badge{color:var(--color-primary);border:1px solid var(--color-accent)}

/* Especificação de referência: references/00-flagship-implementation-specs/islamic-geometric.md */
```

### Variables

```
--bg: #f6eddb, --fg: #173a3a, --accent: #066c72, --surface: #fffaf0, --radius: 2px, --spacing: 16px, --font-display: Georgia, serif, --font-body: Arial, Helvetica, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f6eddb

#fffaf0

#e6d9be

#173a3a

Secondary

#49625e

#066c72

#c69332

#214f87

### Effects

Measured star and polygon tessellations, Ink, lapis, turquoise, and warm parchment, Symmetry and repetition used as structural rhythm, shadow, blur

### Light/Dark

Fonte não declara modos; validar em light e dark antes de publicar

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Islamic Geometric
- **Type:** claude-artisan/historical
- **Keywords:** Islamic Geometric, girih, geometric arabesque, Measured star and polygon tessellations, Ink, lapis, turquoise, and warm parchment, Symmetry and repetition used as structural rhythm, historical
- **Era:** 8th century-present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f6eddb, surface: #fffaf0, surface-2: #e6d9be, text: #173a3a
- **Secondary:** text-muted: #49625e, primary: #066c72, accent: #c69332, lapis: #214f87

## Visual Effects

Measured star and polygon tessellations, Ink, lapis, turquoise, and warm parchment, Symmetry and repetition used as structural rhythm, shadow, blur

## AI Visual Direction

Islamic Geometric, Measured star and polygon tessellations, Ink, lapis, turquoise, and warm parchment, Symmetry and repetition used as structural rhythm, Girih tilework at the Darb-i Imam shrine and Moorish geometric decoration at the Alhambra.

## CSS Technical

```css
/* Islamic Geometric — design tokens (generated from style_catalog.json) */
/* 8th century-present | Geometric ornament traditions across the Islamic world, built through repeated stars, polygons, and interlaced bands. */
:root {
/* color */
--color-bg: #f6eddb;
--color-surface: #fffaf0;
--color-surface-2: #e6d9be;
--color-text: #173a3a;
--color-text-muted: #49625e;
--color-primary: #066c72;
--color-accent: #c69332;
--color-lapis: #214f87;
/* radius */
--radius-sm: 0;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-tile: 0 1px 0 #fffaf0 inset, 0 6px 18px rgba(23,58,58,.14);
--shadow-inlay: 0 0 0 2px #c69332 inset;
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: Georgia, serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: .75rem;
--text-sm: .875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 4rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
/* ease */
--ease-standard: cubic-bezier(.2,.7,.2,1);
/* extra (signature gradients, composite borders, filters) */
--star-grid: conic-gradient(from 30deg at 50% 50%, #066c72 0 30deg, transparent 31deg 60deg, #c69332 61deg 90deg, transparent 91deg 120deg, #214f87 121deg 150deg, transparent 151deg 180deg);
}

/* Reusable component primitives: Islamic Geometric. */
body { margin:0; min-height:100vh; color:var(--color-text); background:var(--color-bg); font-family:var(--font-sans); }
.wrap { max-width:880px; margin:0 auto; padding:var(--space-16) var(--space-6); display:grid; gap:var(--space-8); }
.nav { display:flex; align-items:center; gap:var(--space-4); padding:var(--space-4) var(--space-6); background:var(--color-surface); position:relative; z-index:1; }
.nav a { color:var(--color-text-muted); text-decoration:none; font-size:var(--text-sm); }.nav a:hover { color:var(--color-text); }
.btn { appearance:none; border:1px solid var(--color-text); border-radius:var(--radius-md); background:var(--color-surface-2); color:var(--color-text); padding:var(--space-3) var(--space-6); font:700 var(--text-sm)/1 var(--font-sans); cursor:pointer; transition:transform .18s var(--ease-standard),background .18s var(--ease-standard); }
.btn:hover { transform:translateY(-2px); background:var(--color-accent); }.btn:active { transform:translateY(0); }.btn:focus-visible,.input:focus-visible { outline:3px solid var(--color-accent); outline-offset:3px; }.btn[disabled] { opacity:.5; cursor:not-allowed; transform:none; }
.input { width:min(100%,500px); box-sizing:border-box; padding:var(--space-3) var(--space-4); border:1px solid var(--color-text-muted); border-radius:var(--radius-sm); background:var(--color-surface); color:var(--color-text); font:var(--text-base) var(--font-sans); }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:var(--space-4); }.card { background:var(--color-surface); padding:var(--space-6); position:relative; z-index:1; }.card h3 { margin:0 0 var(--space-2); font:700 var(--text-xl)/1.15 var(--font-display); }.card p { margin:0; color:var(--color-text-muted); }.row { display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-3); position:relative; z-index:1; }.badge { display:inline-flex; align-items:center; padding:var(--space-2) var(--space-3); border-radius:var(--radius-pill); background:var(--color-surface-2); font-size:var(--text-xs); }
@media (max-width:620px){.wrap{padding:var(--space-8) var(--space-4)}.nav{flex-wrap:wrap}.nav strong{width:100%}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.wrap{position:relative}.wrap::before{content:"";position:absolute;right:3%;top:1rem;width:150px;height:150px;background:var(--star-grid);border-radius:50%;opacity:.32}.card,.nav{box-shadow:var(--shadow-tile);border:1px solid var(--color-primary)}.btn--primary{background:var(--color-primary);color:#fffaf0}.badge{color:var(--color-primary);border:1px solid var(--color-accent)}

/* Especificação de referência: references/00-flagship-implementation-specs/islamic-geometric.md */
```

## Design System Variables

```css
--bg: #f6eddb, --fg: #173a3a, --accent: #066c72, --surface: #fffaf0, --radius: 2px, --spacing: 16px, --font-display: Georgia, serif, --font-body: Arial, Helvetica, sans-serif
```

## Implementation Checklist

- Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

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

[![Art Nouveau](https://designmd.app/images/library/305.png) Arte & Ilustracao ### Art Nouveau](https://designmd.app/library/art-nouveau)[![Art Deco](https://designmd.app/images/library/304.png) Arte & Ilustracao ### Art Deco](https://designmd.app/library/art-deco)

Last synced: 8/30/2026
