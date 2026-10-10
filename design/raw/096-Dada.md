# Dada

- Source: <https://designmd.app/library/dada>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:49.296Z

Claude Artisan · Movimentos históricos1916–1924

# Dada

Reference for movimentos históricos Dada. Zurich (Cabaret Voltaire), Berlin, NY (Tzara, Höch, Heartfield).

DadaDadaismPhotomontage and chance compositionRansom-note mixed typographyAnti-art, absurd, provocativeCollage of found mediahistorical

Use case: composição editorial com grade tipográfica; Photomontage and chance composition; Ransom-note mixed typography

![Dada](https://designmd.app/images/library/613.png)

## Historical Context

Zurich (Cabaret Voltaire), Berlin, NY (Tzara, Höch, Heartfield). Example: Hannah Höch photomontages; Heartfield political montage..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Dada"
description: "Dada visual system, translated from the Claude Artisan catalog for use in digital products. Photomontage and chance composition; Ransom-note mixed typography"
colors:
primary: "#c21807"
background: "#eae4d6"
surface: "#f5f1e6"
text: "#16151a"
accent: "#e8b700"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Times New Roman', Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Courier New', ui-monospace, monospace"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Courier New', ui-monospace, monospace"
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

Dada visual system, translated from the Claude Artisan catalog for use in digital products. Photomontage and chance composition; Ransom-note mixed typography

- **Category:** historical
- **Era:** 1916–1924
- **Origin:** Zurich (Cabaret Voltaire), Berlin, NY (Tzara, Höch, Heartfield).
- **Reference:** Hannah Höch photomontages; Heartfield political montage.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Photomontage and chance composition
- Ransom-note mixed typography
- Anti-art, absurd, provocative
- Collage of found media

## Colors

- **bg** — #eae4d6
- **surface** — #f5f1e6
- **surface-strong** — #ded4b8
- **border** — #16151a
- **text** — #16151a
- **text-muted** — #4a473f
- **primary** — #c21807
- **accent** — #e8b700
- **newsprint** — rgba(22, 21, 26, 0.06)

## Typography

- Display: 'Times New Roman', Georgia, serif
- Body: 'Courier New', ui-monospace, monospace
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Photomontage and chance composition; Ransom-note mixed typography; Anti-art, absurd, provocative; Collage of found media; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/dada/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Dada — design tokens */
/* 1916–1924 | Zurich (Cabaret Voltaire), Berlin, NY (Tzara, Höch, Heartfield), condensed */
:root {
/* color */
--color-bg: #eae4d6;
--color-surface: #f5f1e6;
--color-surface-strong: #ded4b8;
--color-border: #16151a;
--color-text: #16151a;
--color-text-muted: #4a473f;
--color-primary: #c21807;
--color-accent: #e8b700;
--color-newsprint: rgba(22, 21, 26, 0.06);
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: 2px 2px 0 var(--color-border);
--shadow-md: 4px 3px 0 var(--color-border);
--shadow-lg: 6px 5px 0 var(--color-border);
/* font */
--font-sans: 'Courier New', ui-monospace, monospace;
--font-display: 'Times New Roman', Georgia, serif;
--font-stencil: 'Arial Black', Impact, sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
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
/* extra: ransom-note mixed type + torn-paper offset rotation */
--tear-rotate-a: rotate(-1.4deg);
--tear-rotate-b: rotate(0.9deg);
--newsprint-texture: repeating-linear-gradient(115deg, var(--color-newsprint) 0 2px, transparent 2px 5px);
}

/* ============================================================
Base component classes — Dada
Signature move: mixed ransom-note typography + slight torn-paper
rotation on every rectangle, repeated on nav, card and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg);
background-image: var(--newsprint-texture); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 2px solid var(--color-border); box-shadow: var(--shadow-sm); transform: var(--tear-rotate-a); }
.btn {
font: 700 var(--text-base)/1 var(--font-stencil); color: var(--color-text); text-transform: uppercase;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .12s var(--ease-standard);
}
.btn:hover { transform: var(--tear-rotate-b) translateY(-1px); }
.btn:active { transform: none; }
.btn:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f5f1e6; font-family: var(--font-display); text-transform: none; font-style: italic; }
.card {
background: var(--color-surface); background-image: var(--newsprint-texture);
border: 2px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
padding: var(--space-6); transform: var(--tear-rotate-b);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-accent);
color: var(--color-text); border: 2px solid var(--color-border); transform: rotate(-2deg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dada.md */
```

### Variables

```
--bg: #eae4d6, --fg: #16151a, --accent: #c21807, --surface: #f5f1e6, --radius: 0px, --spacing: 16px, --font-display: 'Times New Roman', Georgia, serif, --font-body: 'Courier New', ui-monospace, monospace
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#eae4d6

#f5f1e6

#ded4b8

#16151a

Secondary

#16151a

#4a473f

#c21807

#e8b700

### Effects

Photomontage and chance composition, Ransom-note mixed typography, Anti-art, absurd, provocative, Collage of found media, shadow

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

- **Name:** Dada
- **Type:** claude-artisan/historical
- **Keywords:** Dada, Dadaism, Photomontage and chance composition, Ransom-note mixed typography, Anti-art, absurd, provocative, Collage of found media, historical
- **Era:** 1916–1924
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #eae4d6, surface: #f5f1e6, surface-strong: #ded4b8, border: #16151a
- **Secondary:** text: #16151a, text-muted: #4a473f, primary: #c21807, accent: #e8b700, newsprint: rgba(22, 21, 26, 0.06)

## Visual Effects

Photomontage and chance composition, Ransom-note mixed typography, Anti-art, absurd, provocative, Collage of found media, shadow

## AI Visual Direction

Dada, Photomontage and chance composition, Ransom-note mixed typography, Anti-art, absurd, provocative, Collage of found media, Hannah Höch photomontages; Heartfield political montage.

## CSS Technical

```css
/* Dada — design tokens */
/* 1916–1924 | Zurich (Cabaret Voltaire), Berlin, NY (Tzara, Höch, Heartfield), condensed */
:root {
/* color */
--color-bg: #eae4d6;
--color-surface: #f5f1e6;
--color-surface-strong: #ded4b8;
--color-border: #16151a;
--color-text: #16151a;
--color-text-muted: #4a473f;
--color-primary: #c21807;
--color-accent: #e8b700;
--color-newsprint: rgba(22, 21, 26, 0.06);
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: 2px 2px 0 var(--color-border);
--shadow-md: 4px 3px 0 var(--color-border);
--shadow-lg: 6px 5px 0 var(--color-border);
/* font */
--font-sans: 'Courier New', ui-monospace, monospace;
--font-display: 'Times New Roman', Georgia, serif;
--font-stencil: 'Arial Black', Impact, sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
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
/* extra: ransom-note mixed type + torn-paper offset rotation */
--tear-rotate-a: rotate(-1.4deg);
--tear-rotate-b: rotate(0.9deg);
--newsprint-texture: repeating-linear-gradient(115deg, var(--color-newsprint) 0 2px, transparent 2px 5px);
}

/* ============================================================
Base component classes — Dada
Signature move: mixed ransom-note typography + slight torn-paper
rotation on every rectangle, repeated on nav, card and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg);
background-image: var(--newsprint-texture); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 2px solid var(--color-border); box-shadow: var(--shadow-sm); transform: var(--tear-rotate-a); }
.btn {
font: 700 var(--text-base)/1 var(--font-stencil); color: var(--color-text); text-transform: uppercase;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .12s var(--ease-standard);
}
.btn:hover { transform: var(--tear-rotate-b) translateY(-1px); }
.btn:active { transform: none; }
.btn:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f5f1e6; font-family: var(--font-display); text-transform: none; font-style: italic; }
.card {
background: var(--color-surface); background-image: var(--newsprint-texture);
border: 2px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
padding: var(--space-6); transform: var(--tear-rotate-b);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-accent);
color: var(--color-text); border: 2px solid var(--color-border); transform: rotate(-2deg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dada.md */
```

## Design System Variables

```css
--bg: #eae4d6, --fg: #16151a, --accent: #c21807, --surface: #f5f1e6, --radius: 0px, --spacing: 16px, --font-display: 'Times New Roman', Georgia, serif, --font-body: 'Courier New', ui-monospace, monospace
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

[![Dadaist / Collage Web](https://designmd.app/images/library/614.png) Claude Artisan · Brutalismo & anti-design ### Dadaist / Collage Web](https://designmd.app/library/dadaist-web)[![Punk Zine / Cut-and-Paste](https://designmd.app/images/library/705.png) Claude Artisan · Movimentos históricos ### Punk Zine / Cut-and-Paste](https://designmd.app/library/punk-zine)

Last synced: 8/30/2026
