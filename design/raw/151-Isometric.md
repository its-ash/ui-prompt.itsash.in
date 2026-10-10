# Isometric

- Source: <https://designmd.app/library/isometric>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:16.324Z

Claude Artisan · Textura, material & renderização2015–present

# Isometric

Reference for textura, material & renderização Isometric. Flat 2.5D illustration trend.

Isometriciso illustration2.5DParallel projection, no perspective vanishing30° axonometric gridsCutaway rooms/cities, tiny detailed scenesClean vector or soft 3Dtexture

Use case: grade modular responsiva; Parallel projection, no perspective vanishing; 30° axonometric grids

![Isometric](https://designmd.app/images/library/663.png)

## Historical Context

Flat 2.5D illustration trend. Example: Tech explainer illustrations; game art..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Isometric"
description: "Isometric visual system, translated from the Claude Artisan catalog for use in digital products. Parallel projection, no perspective vanishing; 30° axonometric grids"
colors:
primary: "#6d5ef5"
background: "#eef1fb"
surface: "#ffffff"
text: "#1c2340"
accent: "#14b8a6"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Poppins', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Poppins', 'Inter', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Poppins', 'Inter', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "10px"
lg: "16px"
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

Isometric visual system, translated from the Claude Artisan catalog for use in digital products. Parallel projection, no perspective vanishing; 30° axonometric grids

- **Category:** texture
- **Era:** 2015–present
- **Origin:** Flat 2.5D illustration trend.
- **Reference:** Tech explainer illustrations; game art.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Parallel projection, no perspective vanishing
- 30° axonometric grids
- Cutaway rooms/cities, tiny detailed scenes
- Clean vector or soft 3D

## Colors

- **bg** — #eef1fb
- **surface** — #ffffff
- **surface-strong** — #e2e7f9
- **border** — #c7d0f0
- **text** — #1c2340
- **text-muted** — #5b6486
- **primary** — #6d5ef5
- **accent** — #14b8a6
- **iso-shadow-a** — #4c46c9
- **iso-shadow-b** — #8f89ff

## Typography

- Display: 'Poppins', system-ui, sans-serif
- Body: 'Poppins', 'Inter', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Parallel projection, no perspective vanishing; 30° axonometric grids; Cutaway rooms/cities, tiny detailed scenes; Clean vector or soft 3D; sombras e elevação

## Shapes

- Radius scale: 6px, 10px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/isometric/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Isometric — design tokens */
/* 2015–present | Flat 2.5D illustration trend, condensed */
:root {
/* color */
--color-bg: #eef1fb;
--color-surface: #ffffff;
--color-surface-strong: #e2e7f9;
--color-border: #c7d0f0;
--color-text: #1c2340;
--color-text-muted: #5b6486;
--color-primary: #6d5ef5;
--color-accent: #14b8a6;
--color-iso-shadow-a: #4c46c9;
--color-iso-shadow-b: #8f89ff;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 3px 0 var(--color-iso-shadow-a);
--shadow-md: 6px 6px 0 var(--color-iso-shadow-a);
--shadow-lg: 10px 10px 0 var(--color-iso-shadow-a);
/* font */
--font-sans: 'Poppins', 'Inter', system-ui, sans-serif;
--font-display: 'Poppins', system-ui, sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: isometric grid + extruded-block shadow are the signature move */
--iso-grid: repeating-linear-gradient(30deg, rgba(109,94,245,0.07) 0 2px, transparent 2px 26px),
repeating-linear-gradient(150deg, rgba(20,184,166,0.07) 0 2px, transparent 2px 26px);
--iso-facet: linear-gradient(155deg, #ffffff 0%, var(--color-surface-strong) 100%);
}

/* ============================================================
Base component classes — isometric
Signature move: a 30° axonometric grid tint behind every surface, plus a
hard offset "extruded block" shadow (no blur) that reads as a side face.
Repeats on nav, card, and btn so the whole page feels axonometric.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--iso-grid), var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--iso-facet), var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--iso-facet), var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-lg); }
.btn:active { transform: translate(0, 0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: var(--shadow-sm); }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-iso-shadow-a);
box-shadow: var(--shadow-md); }
.card { background: var(--iso-facet), var(--color-surface); border-radius: var(--radius-lg);
border: 1px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #ffffff;
box-shadow: 2px 2px 0 var(--color-iso-shadow-a); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/isometric.md */
```

### Variables

```
--bg: #eef1fb, --fg: #1c2340, --accent: #6d5ef5, --surface: #ffffff, --radius: 10px, --spacing: 16px, --font-display: 'Poppins', system-ui, sans-serif, --font-body: 'Poppins', 'Inter', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#eef1fb

#ffffff

#e2e7f9

#c7d0f0

Secondary

#1c2340

#5b6486

#6d5ef5

#14b8a6

#4c46c9

#8f89ff

### Effects

Parallel projection, no perspective vanishing, 30° axonometric grids, Cutaway rooms/cities, tiny detailed scenes, Clean vector or soft 3D, shadow

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

- **Name:** Isometric
- **Type:** claude-artisan/texture
- **Keywords:** Isometric, iso illustration, 2.5D, Parallel projection, no perspective vanishing, 30° axonometric grids, Cutaway rooms/cities, tiny detailed scenes, Clean vector or soft 3D, texture
- **Era:** 2015–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #eef1fb, surface: #ffffff, surface-strong: #e2e7f9, border: #c7d0f0
- **Secondary:** text: #1c2340, text-muted: #5b6486, primary: #6d5ef5, accent: #14b8a6, iso-shadow-a: #4c46c9, iso-shadow-b: #8f89ff

## Visual Effects

Parallel projection, no perspective vanishing, 30° axonometric grids, Cutaway rooms/cities, tiny detailed scenes, Clean vector or soft 3D, shadow

## AI Visual Direction

Isometric, Parallel projection, no perspective vanishing, 30° axonometric grids, Cutaway rooms/cities, tiny detailed scenes, Clean vector or soft 3D, Tech explainer illustrations; game art.

## CSS Technical

```css
/* Isometric — design tokens */
/* 2015–present | Flat 2.5D illustration trend, condensed */
:root {
/* color */
--color-bg: #eef1fb;
--color-surface: #ffffff;
--color-surface-strong: #e2e7f9;
--color-border: #c7d0f0;
--color-text: #1c2340;
--color-text-muted: #5b6486;
--color-primary: #6d5ef5;
--color-accent: #14b8a6;
--color-iso-shadow-a: #4c46c9;
--color-iso-shadow-b: #8f89ff;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 3px 0 var(--color-iso-shadow-a);
--shadow-md: 6px 6px 0 var(--color-iso-shadow-a);
--shadow-lg: 10px 10px 0 var(--color-iso-shadow-a);
/* font */
--font-sans: 'Poppins', 'Inter', system-ui, sans-serif;
--font-display: 'Poppins', system-ui, sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: isometric grid + extruded-block shadow are the signature move */
--iso-grid: repeating-linear-gradient(30deg, rgba(109,94,245,0.07) 0 2px, transparent 2px 26px),
repeating-linear-gradient(150deg, rgba(20,184,166,0.07) 0 2px, transparent 2px 26px);
--iso-facet: linear-gradient(155deg, #ffffff 0%, var(--color-surface-strong) 100%);
}

/* ============================================================
Base component classes — isometric
Signature move: a 30° axonometric grid tint behind every surface, plus a
hard offset "extruded block" shadow (no blur) that reads as a side face.
Repeats on nav, card, and btn so the whole page feels axonometric.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--iso-grid), var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--iso-facet), var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--iso-facet), var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-lg); }
.btn:active { transform: translate(0, 0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: var(--shadow-sm); }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-iso-shadow-a);
box-shadow: var(--shadow-md); }
.card { background: var(--iso-facet), var(--color-surface); border-radius: var(--radius-lg);
border: 1px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #ffffff;
box-shadow: 2px 2px 0 var(--color-iso-shadow-a); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/isometric.md */
```

## Design System Variables

```css
--bg: #eef1fb, --fg: #1c2340, --accent: #6d5ef5, --surface: #ffffff, --radius: 10px, --spacing: 16px, --font-display: 'Poppins', system-ui, sans-serif, --font-body: 'Poppins', 'Inter', system-ui, sans-serif
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

[![Low Poly](https://designmd.app/images/library/671.png) Claude Artisan · Textura, material & renderização ### Low Poly](https://designmd.app/library/low-poly)[![Soft 3D Illustration](https://designmd.app/images/library/718.png) Claude Artisan · Morphism & profundidade tátil ### Soft 3D Illustration](https://designmd.app/library/soft-3d)

Last synced: 8/30/2026
