# De Stijl / Neoplasticism

- Source: <https://designmd.app/library/de-stijl>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:01.314Z

Claude Artisan · Movimentos históricos1917–1931

# De Stijl / Neoplasticism

Reference for movimentos históricos De Stijl / Neoplasticism. Netherlands (Theo van Doesburg, Piet Mondrian).

De Stijl / NeoplasticismNeoplasticismMondrian styleOnly horizontals and verticals; thick black rulesPrimary colors + white/gray/blackAsymmetric rectangular compositionsPure abstraction, universal harmonyhistorical

Use case: hero, superfície, conteúdo e grade responsiva; Only horizontals and verticals; thick black rules; Primary colors + white/gray/black

![De Stijl / Neoplasticism](https://designmd.app/images/library/620.png)

## Historical Context

Netherlands (Theo van Doesburg, Piet Mondrian). Example: Mondrian 'Composition' paintings; Rietveld Schröder House..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "De Stijl / Neoplasticism"
description: "De Stijl / Neoplasticism visual system, translated from the Claude Artisan catalog for use in digital products. Only horizontals and verticals; thick black rules; Primary colors + white/gray/black"
colors:
primary: "#d40000"
background: "#f7f7f2"
surface: "#ffffff"
text: "#0d0d0d"
accent: "#0000c8"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Archivo Black', 'Futura', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Futura', 'Century Gothic', 'Poppins', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Futura', 'Century Gothic', 'Poppins', sans-serif"
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

De Stijl / Neoplasticism visual system, translated from the Claude Artisan catalog for use in digital products. Only horizontals and verticals; thick black rules; Primary colors + white/gray/black

- **Category:** historical
- **Era:** 1917–1931
- **Origin:** Netherlands (Theo van Doesburg, Piet Mondrian).
- **Reference:** Mondrian 'Composition' paintings; Rietveld Schröder House.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Only horizontals and verticals; thick black rules
- Primary colors + white/gray/black
- Asymmetric rectangular compositions
- Pure abstraction, universal harmony

## Colors

- **bg** — #f7f7f2
- **surface** — #ffffff
- **text** — #0d0d0d
- **text-muted** — #333333
- **primary** — #d40000
- **accent** — #0000c8
- **yellow** — #ffd500
- **black** — #0d0d0d

## Typography

- Display: 'Archivo Black', 'Futura', sans-serif
- Body: 'Futura', 'Century Gothic', 'Poppins', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Only horizontals and verticals; thick black rules; Primary colors + white/gray/black; Asymmetric rectangular compositions; Pure abstraction, universal harmony; sombras e elevação; transparência e blur

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

[Download DESIGN.md](https://designmd.app/library/de-stijl/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* De Stijl / Neoplasticism — design tokens (generated from style_catalog.json) */
/* 1917–1931 | Netherlands (Theo van Doesburg, Piet Mondrian). */
:root {
/* color */
--color-bg: #f7f7f2;
--color-surface: #ffffff;
--color-text: #0d0d0d;
--color-text-muted: #333333;
--color-primary: #d40000;
--color-accent: #0000c8;
--color-yellow: #ffd500;
--color-black: #0d0d0d;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-none: none;
/* font */
--font-sans: 'Futura', 'Century Gothic', 'Poppins', sans-serif;
--font-display: 'Archivo Black', 'Futura', sans-serif;
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
--rule: 6px solid #0d0d0d;
--primaries: #d40000 #ffd500 #0000c8;
}

/* ============================================================
Base component classes — De Stijl / Neoplasticism (token-driven).
Signature move lives in references/00-flagship-implementation-specs/de-stijl.md;
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

/* Especificação de referência: references/00-flagship-implementation-specs/de-stijl.md */
```

### Variables

```
--bg: #f7f7f2, --fg: #0d0d0d, --accent: #d40000, --surface: #ffffff, --radius: 0px, --spacing: 32px, --font-display: 'Archivo Black', 'Futura', sans-serif, --font-body: 'Futura', 'Century Gothic', 'Poppins', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f7f7f2

#ffffff

#0d0d0d

#333333

Secondary

#d40000

#0000c8

#ffd500

#0d0d0d

### Effects

Only horizontals and verticals; thick black rules, Primary colors + white/gray/black, Asymmetric rectangular compositions, Pure abstraction, universal harmony, shadow, blur

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

- **Name:** De Stijl / Neoplasticism
- **Type:** claude-artisan/historical
- **Keywords:** De Stijl / Neoplasticism, Neoplasticism, Mondrian style, Only horizontals and verticals; thick black rules, Primary colors + white/gray/black, Asymmetric rectangular compositions, Pure abstraction, universal harmony, historical
- **Era:** 1917–1931
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f7f7f2, surface: #ffffff, text: #0d0d0d, text-muted: #333333
- **Secondary:** primary: #d40000, accent: #0000c8, yellow: #ffd500, black: #0d0d0d

## Visual Effects

Only horizontals and verticals; thick black rules, Primary colors + white/gray/black, Asymmetric rectangular compositions, Pure abstraction, universal harmony, shadow, blur

## AI Visual Direction

De Stijl / Neoplasticism, Only horizontals and verticals; thick black rules, Primary colors + white/gray/black, Asymmetric rectangular compositions, Pure abstraction, universal harmony, Mondrian 'Composition' paintings; Rietveld Schröder House.

## CSS Technical

```css
/* De Stijl / Neoplasticism — design tokens (generated from style_catalog.json) */
/* 1917–1931 | Netherlands (Theo van Doesburg, Piet Mondrian). */
:root {
/* color */
--color-bg: #f7f7f2;
--color-surface: #ffffff;
--color-text: #0d0d0d;
--color-text-muted: #333333;
--color-primary: #d40000;
--color-accent: #0000c8;
--color-yellow: #ffd500;
--color-black: #0d0d0d;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-none: none;
/* font */
--font-sans: 'Futura', 'Century Gothic', 'Poppins', sans-serif;
--font-display: 'Archivo Black', 'Futura', sans-serif;
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
--rule: 6px solid #0d0d0d;
--primaries: #d40000 #ffd500 #0000c8;
}

/* ============================================================
Base component classes — De Stijl / Neoplasticism (token-driven).
Signature move lives in references/00-flagship-implementation-specs/de-stijl.md;
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

/* Especificação de referência: references/00-flagship-implementation-specs/de-stijl.md */
```

## Design System Variables

```css
--bg: #f7f7f2, --fg: #0d0d0d, --accent: #d40000, --surface: #ffffff, --radius: 0px, --spacing: 32px, --font-display: 'Archivo Black', 'Futura', sans-serif, --font-body: 'Futura', 'Century Gothic', 'Poppins', sans-serif
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

[![Bauhaus](https://designmd.app/images/library/310.png) Arte & Ilustracao ### Bauhaus](https://designmd.app/library/bauhaus)[![Constructivism](https://designmd.app/images/library/603.png) Claude Artisan · Movimentos históricos ### Constructivism](https://designmd.app/library/constructivism)

Last synced: 8/30/2026
