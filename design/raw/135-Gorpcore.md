# Gorpcore

- Source: <https://designmd.app/library/gorpcore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:49.310Z

Claude Artisan · Subculturas & estéticas de nicho2017–present

# Gorpcore

Reference for subculturas & estéticas de nicho Gorpcore. Fashion trend elevating technical outdoor gear ('GORP').

Gorpcoreoutdoorsytechwear-liteTechnical outdoor apparel as everyday styleEarthy + hi-vis accent paletteFunctional, rugged, utilitarianTrail/mountain aestheticniche

Use case: shell de aplicação com navegação e cartões; Technical outdoor apparel as everyday style; Earthy + hi-vis accent palette

![Gorpcore](https://designmd.app/images/library/649.png)

## Historical Context

Fashion trend elevating technical outdoor gear ('GORP'). Example: Arc'teryx/Salomon-driven fashion..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Gorpcore"
description: "Gorpcore visual system, translated from the Claude Artisan catalog for use in digital products. Technical outdoor apparel as everyday style; Earthy + hi-vis accent palette"
colors:
primary: "#3c5a3e"
background: "#e8e4d8"
surface: "#f2efe6"
text: "#24221b"
accent: "#e8630a"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Bebas Neue', 'Oswald', Arial, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', 'Inter', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', 'Inter', Arial, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "6px"
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

Gorpcore visual system, translated from the Claude Artisan catalog for use in digital products. Technical outdoor apparel as everyday style; Earthy + hi-vis accent palette

- **Category:** niche
- **Era:** 2017–present
- **Origin:** Fashion trend elevating technical outdoor gear ('GORP').
- **Reference:** Arc'teryx/Salomon-driven fashion.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Technical outdoor apparel as everyday style
- Earthy + hi-vis accent palette
- Functional, rugged, utilitarian
- Trail/mountain aesthetic

## Colors

- **bg** — #e8e4d8
- **surface** — #f2efe6
- **surface-strong** — #ddd7c4
- **border** — #4a4638
- **text** — #24221b
- **text-muted** — #565243
- **primary** — #3c5a3e
- **accent** — #e8630a
- **hi-vis** — #d7ff3f

## Typography

- Display: 'Bebas Neue', 'Oswald', Arial, sans-serif
- Body: 'Helvetica Neue', 'Inter', Arial, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Technical outdoor apparel as everyday style; Earthy + hi-vis accent palette; Functional, rugged, utilitarian; Trail/mountain aesthetic; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/gorpcore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Gorpcore — design tokens */
/* 2017–present | Fashion trend elevating technical outdoor gear ("GORP"), condensed */
:root {
/* color */
--color-bg: #e8e4d8;
--color-surface: #f2efe6;
--color-surface-strong: #ddd7c4;
--color-border: #4a4638;
--color-text: #24221b;
--color-text-muted: #565243;
--color-primary: #3c5a3e;
--color-accent: #e8630a;
--color-hi-vis: #d7ff3f;
/* radius: minimal, technical, functional */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(36,34,27,0.2);
--shadow-md: 0 4px 12px rgba(36,34,27,0.24);
--shadow-lg: 0 10px 24px rgba(36,34,27,0.28);
/* font */
--font-sans: 'Helvetica Neue', 'Inter', Arial, sans-serif;
--font-display: 'Bebas Neue', 'Oswald', Arial, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
/* extra: a dashed "stitch line" seam plus a ripstop grid weave — the two
signature moves borrowed from technical outerwear construction,
repeated on nav, card and input as a functional-looking seam */
--stitch-line: repeating-linear-gradient(90deg, var(--color-hi-vis) 0 6px, transparent 6px 12px);
--ripstop: repeating-linear-gradient(0deg, rgba(36,34,27,0.035) 0 1px, transparent 1px 8px),
repeating-linear-gradient(90deg, rgba(36,34,27,0.035) 0 1px, transparent 1px 8px);
}

/* ============================================================
Base component classes — gorpcore
Signature move: a hi-vis dashed "stitch line" seam (--stitch-line) used
as a top accent bar, plus a subtle ripstop-fabric grid texture, repeated
on nav, card and btn for a technical-outerwear, function-first read.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--ripstop);
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-border); position: relative;
}
.nav::before { content: ""; display: block; position: absolute; top: 0; left: 0; right: 0; height: 3px;
background-image: var(--stitch-line); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1.5px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer; text-transform: uppercase;
transition: transform .16s var(--ease-standard), box-shadow .16s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #eef4ea; border-color: var(--color-border); }
.card {
background: var(--color-surface); background-image: var(--ripstop);
border: 1.5px solid var(--color-border); border-top: 4px solid transparent;
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
position: relative;
}
.card::before { content: ""; display: block; position: absolute; top: -4px; left: 0; right: 0; height: 4px;
background-image: var(--stitch-line); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1.5px dashed var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(232,99,10,0.24); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-hi-vis); color: #1c2308; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/gorpcore.md */
```

### Variables

```
--bg: #e8e4d8, --fg: #24221b, --accent: #3c5a3e, --surface: #f2efe6, --radius: 4px, --spacing: 16px, --font-display: 'Bebas Neue', 'Oswald', Arial, sans-serif, --font-body: 'Helvetica Neue', 'Inter', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#e8e4d8

#f2efe6

#ddd7c4

#4a4638

Secondary

#24221b

#565243

#3c5a3e

#e8630a

#d7ff3f

### Effects

Technical outdoor apparel as everyday style, Earthy + hi-vis accent palette, Functional, rugged, utilitarian, Trail/mountain aesthetic, shadow

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

- **Name:** Gorpcore
- **Type:** claude-artisan/niche
- **Keywords:** Gorpcore, outdoorsy, techwear-lite, Technical outdoor apparel as everyday style, Earthy + hi-vis accent palette, Functional, rugged, utilitarian, Trail/mountain aesthetic, niche
- **Era:** 2017–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #e8e4d8, surface: #f2efe6, surface-strong: #ddd7c4, border: #4a4638
- **Secondary:** text: #24221b, text-muted: #565243, primary: #3c5a3e, accent: #e8630a, hi-vis: #d7ff3f

## Visual Effects

Technical outdoor apparel as everyday style, Earthy + hi-vis accent palette, Functional, rugged, utilitarian, Trail/mountain aesthetic, shadow

## AI Visual Direction

Gorpcore, Technical outdoor apparel as everyday style, Earthy + hi-vis accent palette, Functional, rugged, utilitarian, Trail/mountain aesthetic, Arc'teryx/Salomon-driven fashion.

## CSS Technical

```css
/* Gorpcore — design tokens */
/* 2017–present | Fashion trend elevating technical outdoor gear ("GORP"), condensed */
:root {
/* color */
--color-bg: #e8e4d8;
--color-surface: #f2efe6;
--color-surface-strong: #ddd7c4;
--color-border: #4a4638;
--color-text: #24221b;
--color-text-muted: #565243;
--color-primary: #3c5a3e;
--color-accent: #e8630a;
--color-hi-vis: #d7ff3f;
/* radius: minimal, technical, functional */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(36,34,27,0.2);
--shadow-md: 0 4px 12px rgba(36,34,27,0.24);
--shadow-lg: 0 10px 24px rgba(36,34,27,0.28);
/* font */
--font-sans: 'Helvetica Neue', 'Inter', Arial, sans-serif;
--font-display: 'Bebas Neue', 'Oswald', Arial, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
/* extra: a dashed "stitch line" seam plus a ripstop grid weave — the two
signature moves borrowed from technical outerwear construction,
repeated on nav, card and input as a functional-looking seam */
--stitch-line: repeating-linear-gradient(90deg, var(--color-hi-vis) 0 6px, transparent 6px 12px);
--ripstop: repeating-linear-gradient(0deg, rgba(36,34,27,0.035) 0 1px, transparent 1px 8px),
repeating-linear-gradient(90deg, rgba(36,34,27,0.035) 0 1px, transparent 1px 8px);
}

/* ============================================================
Base component classes — gorpcore
Signature move: a hi-vis dashed "stitch line" seam (--stitch-line) used
as a top accent bar, plus a subtle ripstop-fabric grid texture, repeated
on nav, card and btn for a technical-outerwear, function-first read.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--ripstop);
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-border); position: relative;
}
.nav::before { content: ""; display: block; position: absolute; top: 0; left: 0; right: 0; height: 3px;
background-image: var(--stitch-line); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1.5px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer; text-transform: uppercase;
transition: transform .16s var(--ease-standard), box-shadow .16s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #eef4ea; border-color: var(--color-border); }
.card {
background: var(--color-surface); background-image: var(--ripstop);
border: 1.5px solid var(--color-border); border-top: 4px solid transparent;
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
position: relative;
}
.card::before { content: ""; display: block; position: absolute; top: -4px; left: 0; right: 0; height: 4px;
background-image: var(--stitch-line); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1.5px dashed var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(232,99,10,0.24); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-hi-vis); color: #1c2308; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/gorpcore.md */
```

## Design System Variables

```css
--bg: #e8e4d8, --fg: #24221b, --accent: #3c5a3e, --surface: #f2efe6, --radius: 4px, --spacing: 16px, --font-display: 'Bebas Neue', 'Oswald', Arial, sans-serif, --font-body: 'Helvetica Neue', 'Inter', Arial, sans-serif
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

[![Normcore](https://designmd.app/images/library/690.png) Claude Artisan · Subculturas & estéticas de nicho ### Normcore](https://designmd.app/library/normcore)[![Techwear](https://designmd.app/images/library/733.png) Claude Artisan · Subculturas & estéticas de nicho ### Techwear](https://designmd.app/library/techwear)

Last synced: 8/30/2026
