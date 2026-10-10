# Daguerreotype

- Source: <https://designmd.app/library/daguerreotype>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:52.237Z

Claude Artisan · Movimentos históricos1839–1860s

# Daguerreotype

Reference for movimentos históricos Daguerreotype. Earliest commercially viable photographic process, invented by Louis Daguerre; formal studio portraiture in silver-plated copper.

Daguerreotypedaguerrean portrait styleearly photographic platetintype-adjacentSilvery monochrome tonal range with warm sepia-silver undertoneSoft vignette falloff darkening toward the edgesOval or gilt-edge framing motifs around portraits and cardsQuiet, formal stillness — no grain, scratches, or VHS/CRT artifactshistorical

Use case: hero, superfície, conteúdo e grade responsiva; Silvery monochrome tonal range with warm sepia-silver undertone; Soft vignette falloff darkening toward the edges

![Daguerreotype](https://designmd.app/images/library/615.png)

## Historical Context

Earliest commercially viable photographic process, invented by Louis Daguerre; formal studio portraiture in silver-plated copper. Example: Southworth & Hawes studio portraits; early 1840s American daguerreotype cases..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Daguerreotype"
description: "Daguerreotype visual system, translated from the Claude Artisan catalog for use in digital products. Silvery monochrome tonal range with warm sepia-silver undertone; Soft vignette falloff darkening toward the edges"
colors:
primary: "#4a4238"
background: "#d9d2c4"
surface: "#eae5da"
text: "#2b2621"
accent: "#8a6d3a"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Playfair Display', 'Cormorant', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant', 'EB Garamond', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant', 'EB Garamond', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "10px"
lg: "40px"
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

Daguerreotype visual system, translated from the Claude Artisan catalog for use in digital products. Silvery monochrome tonal range with warm sepia-silver undertone; Soft vignette falloff darkening toward the edges

- **Category:** historical
- **Era:** 1839–1860s
- **Origin:** Earliest commercially viable photographic process, invented by Louis Daguerre; formal studio portraiture in silver-plated copper.
- **Reference:** Southworth & Hawes studio portraits; early 1840s American daguerreotype cases.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Silvery monochrome tonal range with warm sepia-silver undertone
- Soft vignette falloff darkening toward the edges
- Oval or gilt-edge framing motifs around portraits and cards
- Quiet, formal stillness — no grain, scratches, or VHS/CRT artifacts

## Colors

- **bg** — #d9d2c4
- **surface** — #eae5da
- **surface-2** — #c9c0ac
- **text** — #2b2621
- **text-muted** — #5c5347
- **primary** — #4a4238
- **accent** — #8a6d3a
- **silver** — #b8b2a0
- **sepia** — #6b5a3f

## Typography

- Display: 'Playfair Display', 'Cormorant', serif
- Body: 'Cormorant', 'EB Garamond', serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Silvery monochrome tonal range with warm sepia-silver undertone; Soft vignette falloff darkening toward the edges; Oval or gilt-edge framing motifs around portraits and cards; Quiet, formal stillness — no grain, scratches, or VHS/CRT artifacts; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 10px, 40px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/daguerreotype/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Daguerreotype — design tokens */
/* 1839–1860s | Earliest commercially viable photographic process */
:root {
/* color */
--color-bg: #d9d2c4;
--color-surface: #eae5da;
--color-surface-2: #c9c0ac;
--color-text: #2b2621;
--color-text-muted: #5c5347;
--color-primary: #4a4238;
--color-accent: #8a6d3a;
--color-silver: #b8b2a0;
--color-sepia: #6b5a3f;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 40px;
--radius-pill: 999px;
/* shadow */
--shadow-vignette: inset 0 0 60px rgba(20,16,10,0.45);
--shadow-plate: 0 6px 20px rgba(20,16,10,0.30);
/* blur */
--blur-soft-focus: 6px;
/* font */
--font-sans: 'Cormorant', 'EB Garamond', serif;
--font-display: 'Playfair Display', 'Cormorant', serif;
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
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
/* extra: soft radial vignette + gilt-edge oval frame */
--vignette-gradient: radial-gradient(ellipse at center, transparent 40%, rgba(20,16,10,0.55) 100%);
--gilt-edge: 0 0 0 3px #8a6d3a, 0 0 0 5px #d9d2c4;
}

/* ============================================================
Base component classes — Daguerreotype
Signature move: silvery sepia tonal range, soft vignette
falloff, gilt-edge/oval framing, formal quiet stillness.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-sepia);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-accent);
cursor: pointer; transition: box-shadow .3s var(--ease-standard), transform .3s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-plate); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-surface); font-weight: 700;
border: 1px solid var(--color-accent); box-shadow: var(--shadow-plate);
}
.card {
background: var(--color-surface); border-radius: var(--radius-md);
padding: var(--space-6); box-shadow: var(--gilt-edge), var(--shadow-plate);
position: relative; overflow: hidden;
}
.card::after {
content: ""; position: absolute; inset: 0; background: var(--vignette-gradient); pointer-events: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-sepia);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 2px rgba(138,109,58,0.35); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .9em; border-radius: var(--radius-pill);
background: var(--color-surface-2); box-shadow: var(--gilt-edge); color: var(--color-sepia);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/daguerreotype.md */
```

### Variables

```
--bg: #d9d2c4, --fg: #2b2621, --accent: #4a4238, --surface: #eae5da, --radius: 10px, --spacing: 16px, --font-display: 'Playfair Display', 'Cormorant', serif, --font-body: 'Cormorant', 'EB Garamond', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#d9d2c4

#eae5da

#c9c0ac

#2b2621

Secondary

#5c5347

#4a4238

#8a6d3a

#b8b2a0

#6b5a3f

### Effects

Silvery monochrome tonal range with warm sepia-silver undertone, Soft vignette falloff darkening toward the edges, Oval or gilt-edge framing motifs around portraits and cards, Quiet, formal stillness — no grain, scratches, or VHS/CRT artifacts, shadow, blur

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

- **Name:** Daguerreotype
- **Type:** claude-artisan/historical
- **Keywords:** Daguerreotype, daguerrean portrait style, early photographic plate, tintype-adjacent, Silvery monochrome tonal range with warm sepia-silver undertone, Soft vignette falloff darkening toward the edges, Oval or gilt-edge framing motifs around portraits and cards, Quiet, formal stillness — no grain, scratches, or VHS/CRT artifacts, historical
- **Era:** 1839–1860s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #d9d2c4, surface: #eae5da, surface-2: #c9c0ac, text: #2b2621
- **Secondary:** text-muted: #5c5347, primary: #4a4238, accent: #8a6d3a, silver: #b8b2a0, sepia: #6b5a3f

## Visual Effects

Silvery monochrome tonal range with warm sepia-silver undertone, Soft vignette falloff darkening toward the edges, Oval or gilt-edge framing motifs around portraits and cards, Quiet, formal stillness — no grain, scratches, or VHS/CRT artifacts, shadow, blur

## AI Visual Direction

Daguerreotype, Silvery monochrome tonal range with warm sepia-silver undertone, Soft vignette falloff darkening toward the edges, Oval or gilt-edge framing motifs around portraits and cards, Quiet, formal stillness — no grain, scratches, or VHS/CRT artifacts, Southworth & Hawes studio portraits; early 1840s American daguerreotype cases.

## CSS Technical

```css
/* Daguerreotype — design tokens */
/* 1839–1860s | Earliest commercially viable photographic process */
:root {
/* color */
--color-bg: #d9d2c4;
--color-surface: #eae5da;
--color-surface-2: #c9c0ac;
--color-text: #2b2621;
--color-text-muted: #5c5347;
--color-primary: #4a4238;
--color-accent: #8a6d3a;
--color-silver: #b8b2a0;
--color-sepia: #6b5a3f;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 40px;
--radius-pill: 999px;
/* shadow */
--shadow-vignette: inset 0 0 60px rgba(20,16,10,0.45);
--shadow-plate: 0 6px 20px rgba(20,16,10,0.30);
/* blur */
--blur-soft-focus: 6px;
/* font */
--font-sans: 'Cormorant', 'EB Garamond', serif;
--font-display: 'Playfair Display', 'Cormorant', serif;
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
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
/* extra: soft radial vignette + gilt-edge oval frame */
--vignette-gradient: radial-gradient(ellipse at center, transparent 40%, rgba(20,16,10,0.55) 100%);
--gilt-edge: 0 0 0 3px #8a6d3a, 0 0 0 5px #d9d2c4;
}

/* ============================================================
Base component classes — Daguerreotype
Signature move: silvery sepia tonal range, soft vignette
falloff, gilt-edge/oval framing, formal quiet stillness.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-sepia);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-accent);
cursor: pointer; transition: box-shadow .3s var(--ease-standard), transform .3s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-plate); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-surface); font-weight: 700;
border: 1px solid var(--color-accent); box-shadow: var(--shadow-plate);
}
.card {
background: var(--color-surface); border-radius: var(--radius-md);
padding: var(--space-6); box-shadow: var(--gilt-edge), var(--shadow-plate);
position: relative; overflow: hidden;
}
.card::after {
content: ""; position: absolute; inset: 0; background: var(--vignette-gradient); pointer-events: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-sepia);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 2px rgba(138,109,58,0.35); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .9em; border-radius: var(--radius-pill);
background: var(--color-surface-2); box-shadow: var(--gilt-edge); color: var(--color-sepia);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/daguerreotype.md */
```

## Design System Variables

```css
--bg: #d9d2c4, --fg: #2b2621, --accent: #4a4238, --surface: #eae5da, --radius: 10px, --spacing: 16px, --font-display: 'Playfair Display', 'Cormorant', serif, --font-body: 'Cormorant', 'EB Garamond', serif
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

[![Grunge Design](https://designmd.app/images/library/655.png) Claude Artisan · Brutalismo & anti-design ### Grunge Design](https://designmd.app/library/grunge)

Last synced: 8/30/2026
