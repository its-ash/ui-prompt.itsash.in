# Blueprint / Technical Drawing

- Source: <https://designmd.app/library/blueprint>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:11.320Z

Claude Artisan · Textura, material & renderizaçãoDrafting heritage

# Blueprint / Technical Drawing

Reference for textura, material & renderização Blueprint / Technical Drawing. Architectural/engineering cyanotype drawings.

Blueprint / Technical Drawingschematicwireframe aestheticdraftWhite line-work on cyan/blue groundGrid paper, dimension lines, calloutsMonospace annotationsPrecise, technical, honesttexture

Use case: grade modular responsiva; White line-work on cyan/blue ground; Grid paper, dimension lines, callouts

![Blueprint / Technical Drawing](https://designmd.app/images/library/591.png)

## Historical Context

Architectural/engineering cyanotype drawings. Example: Product 'how it works' sections; engineering brand sites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Blueprint / Technical Drawing"
description: "Blueprint / Technical Drawing visual system, translated from the Claude Artisan catalog for use in digital products. White line-work on cyan/blue ground; Grid paper, dimension lines, callouts"
colors:
primary: "#ffffff"
background: "#0d3b66"
surface: "#0f4a7d"
text: "#eaf4ff"
accent: "#ffb703"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Archivo', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Archivo', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Archivo', 'Helvetica Neue', system-ui, sans-serif"
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

Blueprint / Technical Drawing visual system, translated from the Claude Artisan catalog for use in digital products. White line-work on cyan/blue ground; Grid paper, dimension lines, callouts

- **Category:** texture
- **Era:** Drafting heritage
- **Origin:** Architectural/engineering cyanotype drawings.
- **Reference:** Product 'how it works' sections; engineering brand sites.
- **Structural base:** grade modular responsiva

**Defining traits:**
- White line-work on cyan/blue ground
- Grid paper, dimension lines, callouts
- Monospace annotations
- Precise, technical, honest

## Colors

- **bg** — #0d3b66
- **surface** — #0f4a7d
- **surface-strong** — #135a96
- **border** — #bcd9f0
- **text** — #eaf4ff
- **text-muted** — #9fc4e6
- **primary** — #ffffff
- **accent** — #ffb703

## Typography

- Display: 'Archivo', system-ui, sans-serif
- Body: 'Archivo', 'Helvetica Neue', system-ui, sans-serif
- Mono: 'IBM Plex Mono', 'Courier New', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- White line-work on cyan/blue ground; Grid paper, dimension lines, callouts; Monospace annotations; Precise, technical, honest; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/blueprint/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Blueprint / Technical Drawing — design tokens */
/* Drafting heritage | Architectural/engineering cyanotype drawings, condensed */
:root {
/* color */
--color-bg: #0d3b66;
--color-surface: #0f4a7d;
--color-surface-strong: #135a96;
--color-border: #bcd9f0;
--color-text: #eaf4ff;
--color-text-muted: #9fc4e6;
--color-primary: #ffffff;
--color-accent: #ffb703;
/* radius: drafting is all straight edges */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 2px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(255,255,255,0.15);
--shadow-md: 0 2px 8px rgba(0,0,0,0.35);
--shadow-lg: 0 6px 18px rgba(0,0,0,0.4);
/* font: monospace annotations over a technical sans */
--font-sans: 'Archivo', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Archivo', system-ui, sans-serif;
--font-mono: 'IBM Plex Mono', 'Courier New', ui-monospace, monospace;
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
--ease-standard: linear;
/* extra: grid paper background + dashed dimension lines */
--grid-line: rgba(234,244,255,0.14);
--bg-grid: linear-gradient(var(--grid-line) 1px, transparent 1px),
linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
--dim-line: 1px dashed var(--color-text-muted);
}

/* ============================================================
Base component classes — Blueprint
Signature move: white/cyan line-work on a cyanotype-blue ground, drawn
with hairline dashed "dimension" borders and monospace callout labels
repeated across nav, card, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--bg-grid);
background-size: 24px 24px; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: transparent;
border-bottom: var(--dim-line); }
.nav strong { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.08em; }
.btn {
font: 600 var(--text-sm)/1 var(--font-mono); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-text);
text-transform: uppercase; letter-spacing: 0.06em;
cursor: pointer; transition: background-color .15s var(--ease-standard), color .15s var(--ease-standard);
}
.btn:hover { background: rgba(255,255,255,0.08); }
.btn:active { background: rgba(255,255,255,0.16); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: var(--color-bg); border-color: var(--color-primary); }
.card { background: rgba(255,255,255,0.03); color: var(--color-text);
border: var(--dim-line); border-radius: var(--radius-lg); padding: var(--space-6);
position: relative; }
.card h3 { font-family: var(--font-mono); text-transform: uppercase; font-size: var(--text-base); letter-spacing: 0.04em; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: transparent; border: 1px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 1px var(--color-accent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-family: var(--font-mono); font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: transparent;
border: 1px dashed var(--color-accent); color: var(--color-accent); text-transform: uppercase; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/blueprint.md */
```

### Variables

```
--bg: #0d3b66, --fg: #eaf4ff, --accent: #ffffff, --surface: #0f4a7d, --radius: 0px, --spacing: 16px, --font-display: 'Archivo', system-ui, sans-serif, --font-body: 'Archivo', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0d3b66

#0f4a7d

#135a96

#bcd9f0

Secondary

#eaf4ff

#9fc4e6

#ffffff

#ffb703

### Effects

White line-work on cyan/blue ground, Grid paper, dimension lines, callouts, Monospace annotations, Precise, technical, honest, shadow

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

- **Name:** Blueprint / Technical Drawing
- **Type:** claude-artisan/texture
- **Keywords:** Blueprint / Technical Drawing, schematic, wireframe aesthetic, draft, White line-work on cyan/blue ground, Grid paper, dimension lines, callouts, Monospace annotations, Precise, technical, honest, texture
- **Era:** Drafting heritage
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0d3b66, surface: #0f4a7d, surface-strong: #135a96, border: #bcd9f0
- **Secondary:** text: #eaf4ff, text-muted: #9fc4e6, primary: #ffffff, accent: #ffb703

## Visual Effects

White line-work on cyan/blue ground, Grid paper, dimension lines, callouts, Monospace annotations, Precise, technical, honest, shadow

## AI Visual Direction

Blueprint / Technical Drawing, White line-work on cyan/blue ground, Grid paper, dimension lines, callouts, Monospace annotations, Precise, technical, honest, Product 'how it works' sections; engineering brand sites.

## CSS Technical

```css
/* Blueprint / Technical Drawing — design tokens */
/* Drafting heritage | Architectural/engineering cyanotype drawings, condensed */
:root {
/* color */
--color-bg: #0d3b66;
--color-surface: #0f4a7d;
--color-surface-strong: #135a96;
--color-border: #bcd9f0;
--color-text: #eaf4ff;
--color-text-muted: #9fc4e6;
--color-primary: #ffffff;
--color-accent: #ffb703;
/* radius: drafting is all straight edges */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 2px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(255,255,255,0.15);
--shadow-md: 0 2px 8px rgba(0,0,0,0.35);
--shadow-lg: 0 6px 18px rgba(0,0,0,0.4);
/* font: monospace annotations over a technical sans */
--font-sans: 'Archivo', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Archivo', system-ui, sans-serif;
--font-mono: 'IBM Plex Mono', 'Courier New', ui-monospace, monospace;
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
--ease-standard: linear;
/* extra: grid paper background + dashed dimension lines */
--grid-line: rgba(234,244,255,0.14);
--bg-grid: linear-gradient(var(--grid-line) 1px, transparent 1px),
linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
--dim-line: 1px dashed var(--color-text-muted);
}

/* ============================================================
Base component classes — Blueprint
Signature move: white/cyan line-work on a cyanotype-blue ground, drawn
with hairline dashed "dimension" borders and monospace callout labels
repeated across nav, card, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--bg-grid);
background-size: 24px 24px; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: transparent;
border-bottom: var(--dim-line); }
.nav strong { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.08em; }
.btn {
font: 600 var(--text-sm)/1 var(--font-mono); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-text);
text-transform: uppercase; letter-spacing: 0.06em;
cursor: pointer; transition: background-color .15s var(--ease-standard), color .15s var(--ease-standard);
}
.btn:hover { background: rgba(255,255,255,0.08); }
.btn:active { background: rgba(255,255,255,0.16); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: var(--color-bg); border-color: var(--color-primary); }
.card { background: rgba(255,255,255,0.03); color: var(--color-text);
border: var(--dim-line); border-radius: var(--radius-lg); padding: var(--space-6);
position: relative; }
.card h3 { font-family: var(--font-mono); text-transform: uppercase; font-size: var(--text-base); letter-spacing: 0.04em; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: transparent; border: 1px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 1px var(--color-accent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-family: var(--font-mono); font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: transparent;
border: 1px dashed var(--color-accent); color: var(--color-accent); text-transform: uppercase; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/blueprint.md */
```

## Design System Variables

```css
--bg: #0d3b66, --fg: #eaf4ff, --accent: #ffffff, --surface: #0f4a7d, --radius: 0px, --spacing: 16px, --font-display: 'Archivo', system-ui, sans-serif, --font-body: 'Archivo', 'Helvetica Neue', system-ui, sans-serif
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

[![ASCII / Terminal / TUI](https://designmd.app/images/library/579.png) Claude Artisan · Textura, material & renderização ### ASCII / Terminal / TUI](https://designmd.app/library/ascii-terminal)[![Isometric](https://designmd.app/images/library/663.png) Claude Artisan · Textura, material & renderização ### Isometric](https://designmd.app/library/isometric)

Last synced: 8/30/2026
