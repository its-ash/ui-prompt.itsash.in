# Constructivism

- Source: <https://designmd.app/library/constructivism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:30.311Z

Claude Artisan · Movimentos históricos1915–1930s

# Constructivism

Reference for movimentos históricos Constructivism. Russia/USSR (Alexander Rodchenko, El Lissitzky, Stenberg brothers).

ConstructivismRussian ConstructivismSoviet designBold diagonals and dynamic asymmetryRed, black, cream; heavy sans/slab typePhotomontage, geometric shapes as propagandaIndustrial, purposeful, revolutionaryhistorical

Use case: composição editorial com grade tipográfica; Bold diagonals and dynamic asymmetry; Red, black, cream; heavy sans/slab type

![Constructivism](https://designmd.app/images/library/603.png)

## Historical Context

Russia/USSR (Alexander Rodchenko, El Lissitzky, Stenberg brothers). Example: Rodchenko posters; El Lissitzky 'Beat the Whites with the Red Wedge'..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Constructivism"
description: "Constructivism visual system, translated from the Claude Artisan catalog for use in digital products. Bold diagonals and dynamic asymmetry; Red, black, cream; heavy sans/slab type"
colors:
primary: "#d7261e"
background: "#f0ece1"
surface: "#ffffff"
text: "#141414"
accent: "#141414"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Anton', 'Oswald', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Alternate Gothic', 'Oswald', 'Anton', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Alternate Gothic', 'Oswald', 'Anton', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
spacing:
sm: "16px"
md: "32px"
lg: "64px"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "32px"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "32px"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "48px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "32px"
---
## Overview

Constructivism visual system, translated from the Claude Artisan catalog for use in digital products. Bold diagonals and dynamic asymmetry; Red, black, cream; heavy sans/slab type

- **Category:** historical
- **Era:** 1915–1930s
- **Origin:** Russia/USSR (Alexander Rodchenko, El Lissitzky, Stenberg brothers).
- **Reference:** Rodchenko posters; El Lissitzky 'Beat the Whites with the Red Wedge'.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Bold diagonals and dynamic asymmetry
- Red, black, cream; heavy sans/slab type
- Photomontage, geometric shapes as propaganda
- Industrial, purposeful, revolutionary

## Colors

- **bg** — #f0ece1
- **surface** — #ffffff
- **text** — #141414
- **text-muted** — #3a3a3a
- **primary** — #d7261e
- **accent** — #141414
- **cream** — #f0ece1

## Typography

- Display: 'Anton', 'Oswald', sans-serif
- Body: 'Alternate Gothic', 'Oswald', 'Anton', sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold diagonals and dynamic asymmetry; Red, black, cream; heavy sans/slab type; Photomontage, geometric shapes as propaganda; Industrial, purposeful, revolutionary; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/constructivism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Constructivism — design tokens (generated from style_catalog.json) */
/* 1915–1930s | Russia/USSR (Alexander Rodchenko, El Lissitzky, Stenberg brothers). */
:root {
/* color */
--color-bg: #f0ece1;
--color-surface: #ffffff;
--color-text: #141414;
--color-text-muted: #3a3a3a;
--color-primary: #d7261e;
--color-accent: #141414;
--color-cream: #f0ece1;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-none: none;
/* font */
--font-sans: 'Alternate Gothic', 'Oswald', 'Anton', sans-serif;
--font-display: 'Anton', 'Oswald', sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.3rem;
--text-xl: 1.9rem;
--text-2xl: 2.8rem;
--text-3xl: 4rem;
--text-4xl: 5.6rem;
--text-5xl: 8rem;
/* space */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;
--space-12: 96px;
--space-16: 128px;
/* ease */
--ease-standard: linear;
/* extra (signature gradients, composite borders, filters) */
--diagonal: -15deg;
--red-black: #d7261e #141414;
}

/* ============================================================
Base component classes — Constructivism (token-driven).
Signature move lives in references/00-flagship-implementation-specs/constructivism.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-none);
padding: var(--space-6, 24px); border: 2px solid var(--color-text); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
border-bottom: 2px solid var(--color-text); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-none); cursor: pointer; border: 2px solid var(--color-text);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-text); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 2px solid var(--color-text); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #ffffff; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/constructivism.md */
```

### Variables

```
--bg: #f0ece1, --fg: #141414, --accent: #d7261e, --surface: #ffffff, --radius: 0px, --spacing: 32px, --font-display: 'Anton', 'Oswald', sans-serif, --font-body: 'Alternate Gothic', 'Oswald', 'Anton', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f0ece1

#ffffff

#141414

#3a3a3a

Secondary

#d7261e

#141414

#f0ece1

### Effects

Bold diagonals and dynamic asymmetry, Red, black, cream; heavy sans/slab type, Photomontage, geometric shapes as propaganda, Industrial, purposeful, revolutionary, shadow, blur

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

- **Name:** Constructivism
- **Type:** claude-artisan/historical
- **Keywords:** Constructivism, Russian Constructivism, Soviet design, Bold diagonals and dynamic asymmetry, Red, black, cream; heavy sans/slab type, Photomontage, geometric shapes as propaganda, Industrial, purposeful, revolutionary, historical
- **Era:** 1915–1930s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f0ece1, surface: #ffffff, text: #141414, text-muted: #3a3a3a
- **Secondary:** primary: #d7261e, accent: #141414, cream: #f0ece1

## Visual Effects

Bold diagonals and dynamic asymmetry, Red, black, cream; heavy sans/slab type, Photomontage, geometric shapes as propaganda, Industrial, purposeful, revolutionary, shadow, blur

## AI Visual Direction

Constructivism, Bold diagonals and dynamic asymmetry, Red, black, cream; heavy sans/slab type, Photomontage, geometric shapes as propaganda, Industrial, purposeful, revolutionary, Rodchenko posters; El Lissitzky 'Beat the Whites with the Red Wedge'.

## CSS Technical

```css
/* Constructivism — design tokens (generated from style_catalog.json) */
/* 1915–1930s | Russia/USSR (Alexander Rodchenko, El Lissitzky, Stenberg brothers). */
:root {
/* color */
--color-bg: #f0ece1;
--color-surface: #ffffff;
--color-text: #141414;
--color-text-muted: #3a3a3a;
--color-primary: #d7261e;
--color-accent: #141414;
--color-cream: #f0ece1;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-none: none;
/* font */
--font-sans: 'Alternate Gothic', 'Oswald', 'Anton', sans-serif;
--font-display: 'Anton', 'Oswald', sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.3rem;
--text-xl: 1.9rem;
--text-2xl: 2.8rem;
--text-3xl: 4rem;
--text-4xl: 5.6rem;
--text-5xl: 8rem;
/* space */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;
--space-12: 96px;
--space-16: 128px;
/* ease */
--ease-standard: linear;
/* extra (signature gradients, composite borders, filters) */
--diagonal: -15deg;
--red-black: #d7261e #141414;
}

/* ============================================================
Base component classes — Constructivism (token-driven).
Signature move lives in references/00-flagship-implementation-specs/constructivism.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-none);
padding: var(--space-6, 24px); border: 2px solid var(--color-text); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
border-bottom: 2px solid var(--color-text); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-none); cursor: pointer; border: 2px solid var(--color-text);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-text); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 2px solid var(--color-text); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #ffffff; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/constructivism.md */
```

## Design System Variables

```css
--bg: #f0ece1, --fg: #141414, --accent: #d7261e, --surface: #ffffff, --radius: 0px, --spacing: 32px, --font-display: 'Anton', 'Oswald', sans-serif, --font-body: 'Alternate Gothic', 'Oswald', 'Anton', sans-serif
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

[![Suprematism](https://designmd.app/images/library/729.png) Claude Artisan · Movimentos históricos ### Suprematism](https://designmd.app/library/suprematism)[![Bauhaus](https://designmd.app/images/library/310.png) Arte & Ilustracao ### Bauhaus](https://designmd.app/library/bauhaus)[![Futurism (Italian)](https://designmd.app/images/library/644.png) Claude Artisan · Movimentos históricos ### Futurism (Italian)](https://designmd.app/library/futurism-italian)

Last synced: 8/30/2026
