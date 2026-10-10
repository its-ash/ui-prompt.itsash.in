# Deconstructivism (Graphic)

- Source: <https://designmd.app/library/deconstructivism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:01.318Z

Claude Artisan · Brutalismo & anti-design1980s–1990s

# Deconstructivism (Graphic)

Reference for brutalismo & anti-design Deconstructivism (Graphic). Cranbrook Academy; influenced by Derrida; Katherine McCoy, Edward Fella.

Deconstructivism (Graphic)deconstructionfragmented typeFragmented, layered, exploded typographyRejection of the grid; ambiguous reading pathsOverlap, rotation, and collision of elementsTheory-driven, questions legibilitybrutalist

Use case: composição editorial com grade tipográfica; Fragmented, layered, exploded typography; Rejection of the grid; ambiguous reading paths

![Deconstructivism (Graphic)](https://designmd.app/images/library/621.png)

## Historical Context

Cranbrook Academy; influenced by Derrida; Katherine McCoy, Edward Fella. Example: Cranbrook design work; Emigre magazine..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Deconstructivism (Graphic)"
description: "Deconstructivism (Graphic) visual system, translated from the Claude Artisan catalog for use in digital products. Fragmented, layered, exploded typography; Rejection of the grid; ambiguous reading paths"
colors:
primary: "#ff2d1f"
background: "#f0efe9"
surface: "#ffffff"
text: "#16151a"
accent: "#1c3fff"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Univers', 'Franklin Gothic', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
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

Deconstructivism (Graphic) visual system, translated from the Claude Artisan catalog for use in digital products. Fragmented, layered, exploded typography; Rejection of the grid; ambiguous reading paths

- **Category:** brutalist
- **Era:** 1980s–1990s
- **Origin:** Cranbrook Academy; influenced by Derrida; Katherine McCoy, Edward Fella.
- **Reference:** Cranbrook design work; Emigre magazine.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Fragmented, layered, exploded typography
- Rejection of the grid; ambiguous reading paths
- Overlap, rotation, and collision of elements
- Theory-driven, questions legibility

## Colors

- **bg** — #f0efe9
- **surface** — #ffffff
- **surface-strong** — #e6e3d8
- **border** — #16151a
- **text** — #16151a
- **text-muted** — #4a4854
- **primary** — #ff2d1f
- **accent** — #1c3fff

## Typography

- Display: 'Univers', 'Franklin Gothic', system-ui, sans-serif
- Body: 'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif
- Mono: 'OCR A Std', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Fragmented, layered, exploded typography; Rejection of the grid; ambiguous reading paths; Overlap, rotation, and collision of elements; Theory-driven, questions legibility; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/deconstructivism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Deconstructivism (Graphic) — design tokens */
/* 1980s–1990s | Cranbrook Academy; influenced by Derrida; Katherine McCoy, Edward Fella, condensed */
:root {
/* color */
--color-bg: #f0efe9;
--color-surface: #ffffff;
--color-surface-strong: #e6e3d8;
--color-border: #16151a;
--color-text: #16151a;
--color-text-muted: #4a4854;
--color-primary: #ff2d1f;
--color-accent: #1c3fff;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 6px 6px 0 var(--color-border);
--shadow-lg: 10px 10px 0 var(--color-border);
/* font */
--font-sans: 'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Univers', 'Franklin Gothic', system-ui, sans-serif;
--font-mono: 'OCR A Std', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: signature = rotated/offset panels colliding with a hard black outline */
--tilt-a: -1.4deg;
--tilt-b: 1.1deg;
--collide-offset: -8px;
}

/* ============================================================
Base component classes — Deconstructivism
Signature move: every raised surface is slightly rotated and offset,
colliding with a hard-edged sibling shadow (no blur, no gradient) —
the grid is rejected, elements overlap and read out of alignment.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: 2px solid var(--color-border); transform: rotate(var(--tilt-a));
box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-sm)/1 var(--font-display); color: var(--color-text); text-transform: uppercase;
letter-spacing: .02em; background: var(--color-surface); border: 2px solid var(--color-border);
border-radius: var(--radius-md); padding: var(--space-3) var(--space-6); cursor: pointer;
box-shadow: var(--shadow-sm); transform: rotate(var(--tilt-b));
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: rotate(0deg) translate(-2px, -2px); box-shadow: var(--shadow-md); }
.btn:active { transform: rotate(0deg) translate(0,0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card { background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; transform: rotate(var(--tilt-a));
margin-left: var(--collide-offset); }
.card:nth-of-type(2n) { transform: rotate(calc(var(--tilt-b) * -1)); margin-left: 0; margin-top: calc(var(--collide-offset) * -1); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); transform: rotate(calc(var(--tilt-a) * 0.6)); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; transform: rotate(0deg); border-color: var(--color-accent);
box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-mono);
text-transform: uppercase; color: #ffffff; background: var(--color-accent);
border: 2px solid var(--color-border); border-radius: var(--radius-pill); padding: .3em .8em;
transform: rotate(var(--tilt-b)); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: rotate(var(--tilt-b)); } }

/* Especificação de referência: references/00-flagship-implementation-specs/deconstructivism.md */
```

### Variables

```
--bg: #f0efe9, --fg: #16151a, --accent: #ff2d1f, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Univers', 'Franklin Gothic', system-ui, sans-serif, --font-body: 'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f0efe9

#ffffff

#e6e3d8

#16151a

Secondary

#16151a

#4a4854

#ff2d1f

#1c3fff

### Effects

Fragmented, layered, exploded typography, Rejection of the grid; ambiguous reading paths, Overlap, rotation, and collision of elements, Theory-driven, questions legibility, shadow

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

- **Name:** Deconstructivism (Graphic)
- **Type:** claude-artisan/brutalist
- **Keywords:** Deconstructivism (Graphic), deconstruction, fragmented type, Fragmented, layered, exploded typography, Rejection of the grid; ambiguous reading paths, Overlap, rotation, and collision of elements, Theory-driven, questions legibility, brutalist
- **Era:** 1980s–1990s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f0efe9, surface: #ffffff, surface-strong: #e6e3d8, border: #16151a
- **Secondary:** text: #16151a, text-muted: #4a4854, primary: #ff2d1f, accent: #1c3fff

## Visual Effects

Fragmented, layered, exploded typography, Rejection of the grid; ambiguous reading paths, Overlap, rotation, and collision of elements, Theory-driven, questions legibility, shadow

## AI Visual Direction

Deconstructivism (Graphic), Fragmented, layered, exploded typography, Rejection of the grid; ambiguous reading paths, Overlap, rotation, and collision of elements, Theory-driven, questions legibility, Cranbrook design work; Emigre magazine.

## CSS Technical

```css
/* Deconstructivism (Graphic) — design tokens */
/* 1980s–1990s | Cranbrook Academy; influenced by Derrida; Katherine McCoy, Edward Fella, condensed */
:root {
/* color */
--color-bg: #f0efe9;
--color-surface: #ffffff;
--color-surface-strong: #e6e3d8;
--color-border: #16151a;
--color-text: #16151a;
--color-text-muted: #4a4854;
--color-primary: #ff2d1f;
--color-accent: #1c3fff;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 6px 6px 0 var(--color-border);
--shadow-lg: 10px 10px 0 var(--color-border);
/* font */
--font-sans: 'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Univers', 'Franklin Gothic', system-ui, sans-serif;
--font-mono: 'OCR A Std', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: signature = rotated/offset panels colliding with a hard black outline */
--tilt-a: -1.4deg;
--tilt-b: 1.1deg;
--collide-offset: -8px;
}

/* ============================================================
Base component classes — Deconstructivism
Signature move: every raised surface is slightly rotated and offset,
colliding with a hard-edged sibling shadow (no blur, no gradient) —
the grid is rejected, elements overlap and read out of alignment.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: 2px solid var(--color-border); transform: rotate(var(--tilt-a));
box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-sm)/1 var(--font-display); color: var(--color-text); text-transform: uppercase;
letter-spacing: .02em; background: var(--color-surface); border: 2px solid var(--color-border);
border-radius: var(--radius-md); padding: var(--space-3) var(--space-6); cursor: pointer;
box-shadow: var(--shadow-sm); transform: rotate(var(--tilt-b));
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: rotate(0deg) translate(-2px, -2px); box-shadow: var(--shadow-md); }
.btn:active { transform: rotate(0deg) translate(0,0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card { background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; transform: rotate(var(--tilt-a));
margin-left: var(--collide-offset); }
.card:nth-of-type(2n) { transform: rotate(calc(var(--tilt-b) * -1)); margin-left: 0; margin-top: calc(var(--collide-offset) * -1); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); transform: rotate(calc(var(--tilt-a) * 0.6)); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; transform: rotate(0deg); border-color: var(--color-accent);
box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-mono);
text-transform: uppercase; color: #ffffff; background: var(--color-accent);
border: 2px solid var(--color-border); border-radius: var(--radius-pill); padding: .3em .8em;
transform: rotate(var(--tilt-b)); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: rotate(var(--tilt-b)); } }

/* Especificação de referência: references/00-flagship-implementation-specs/deconstructivism.md */
```

## Design System Variables

```css
--bg: #f0efe9, --fg: #16151a, --accent: #ff2d1f, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Univers', 'Franklin Gothic', system-ui, sans-serif, --font-body: 'Franklin Gothic', 'Helvetica Neue', system-ui, sans-serif
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

[![Swiss Punk / New Wave](https://designmd.app/images/library/731.png) Claude Artisan · Brutalismo & anti-design ### Swiss Punk / New Wave](https://designmd.app/library/swiss-punk)[![Grunge Design](https://designmd.app/images/library/655.png) Claude Artisan · Brutalismo & anti-design ### Grunge Design](https://designmd.app/library/grunge)

Last synced: 8/30/2026
