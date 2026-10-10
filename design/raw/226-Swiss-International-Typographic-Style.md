# Swiss / International Typographic Style

- Source: <https://designmd.app/library/swiss-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:16.272Z

Claude Artisan · Movimentos históricos1950s–1960s

# Swiss / International Typographic Style

Reference for movimentos históricos Swiss / International Typographic Style. Switzerland (Josef Müller-Brockmann, Armin Hofmann); Basel & Zurich schools.

Swiss / International Typographic StyleInternational StyleSwiss Stylegrid designMathematical grid systems and rigorous alignmentHelvetica/Akzidenz-Grotesk, flush-left ragged-rightObjective, neutral, hierarchy via size/weightGenerous whitespace, photography over illustrationhistorical

Use case: composição editorial com grade tipográfica; Mathematical grid systems and rigorous alignment; Helvetica/Akzidenz-Grotesk, flush-left ragged-right

![Swiss / International Typographic Style](https://designmd.app/images/library/730.png)

## Historical Context

Switzerland (Josef Müller-Brockmann, Armin Hofmann); Basel & Zurich schools. Example: Müller-Brockmann concert posters; Helvetica..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Swiss / International Typographic Style"
description: "Swiss / International Typographic Style visual system, translated from the Claude Artisan catalog for use in digital products. Mathematical grid systems and rigorous alignment; Helvetica/Akzidenz-Grotesk, flush-left ragged-right"
colors:
primary: "#e2001a"
background: "#ffffff"
surface: "#ffffff"
text: "#111111"
accent: "#000000"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Helvetica Neue', Arial, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif"
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

Swiss / International Typographic Style visual system, translated from the Claude Artisan catalog for use in digital products. Mathematical grid systems and rigorous alignment; Helvetica/Akzidenz-Grotesk, flush-left ragged-right

- **Category:** historical
- **Era:** 1950s–1960s
- **Origin:** Switzerland (Josef Müller-Brockmann, Armin Hofmann); Basel & Zurich schools.
- **Reference:** Müller-Brockmann concert posters; Helvetica.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Mathematical grid systems and rigorous alignment
- Helvetica/Akzidenz-Grotesk, flush-left ragged-right
- Objective, neutral, hierarchy via size/weight
- Generous whitespace, photography over illustration

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-2** — #f2f2f2
- **text** — #111111
- **text-muted** — #555555
- **primary** — #e2001a
- **accent** — #000000
- **grid** — #d9d9d9

## Typography

- Display: 'Helvetica Neue', Arial, sans-serif
- Body: 'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Mathematical grid systems and rigorous alignment; Helvetica/Akzidenz-Grotesk, flush-left ragged-right; Objective, neutral, hierarchy via size/weight; Generous whitespace, photography over illustration; sombras e elevação; transparência e blur

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

[Download DESIGN.md](https://designmd.app/library/swiss-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Swiss / International Typographic Style — design tokens (generated from style_catalog.json) */
/* 1950s–1960s | Switzerland (Josef Müller-Brockmann, Armin Hofmann); Basel & Zurich schools. */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-2: #f2f2f2;
--color-text: #111111;
--color-text-muted: #555555;
--color-primary: #e2001a;
--color-accent: #000000;
--color-grid: #d9d9d9;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-none: none;
/* font */
--font-sans: 'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif;
--font-display: 'Helvetica Neue', Arial, sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.333rem;
--text-xl: 1.777rem;
--text-2xl: 2.369rem;
--text-3xl: 3.157rem;
--text-4xl: 4.209rem;
--text-5xl: 5.61rem;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--baseline: 8px;
--columns: 12;
}

/* ============================================================
Base component classes — Swiss / International Typographic Style (token-driven).
Signature move lives in references/00-flagship-implementation-specs/swiss-design.md;
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

/* Especificação de referência: references/00-flagship-implementation-specs/swiss-design.md */
```

### Variables

```
--bg: #ffffff, --fg: #111111, --accent: #e2001a, --surface: #ffffff, --radius: 0px, --spacing: 32px, --font-display: 'Helvetica Neue', Arial, sans-serif, --font-body: 'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffffff

#f2f2f2

#111111

Secondary

#555555

#e2001a

#000000

#d9d9d9

### Effects

Mathematical grid systems and rigorous alignment, Helvetica/Akzidenz-Grotesk, flush-left ragged-right, Objective, neutral, hierarchy via size/weight, Generous whitespace, photography over illustration, shadow, blur

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

- **Name:** Swiss / International Typographic Style
- **Type:** claude-artisan/historical
- **Keywords:** Swiss / International Typographic Style, International Style, Swiss Style, grid design, Mathematical grid systems and rigorous alignment, Helvetica/Akzidenz-Grotesk, flush-left ragged-right, Objective, neutral, hierarchy via size/weight, Generous whitespace, photography over illustration, historical
- **Era:** 1950s–1960s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffffff, surface: #ffffff, surface-2: #f2f2f2, text: #111111
- **Secondary:** text-muted: #555555, primary: #e2001a, accent: #000000, grid: #d9d9d9

## Visual Effects

Mathematical grid systems and rigorous alignment, Helvetica/Akzidenz-Grotesk, flush-left ragged-right, Objective, neutral, hierarchy via size/weight, Generous whitespace, photography over illustration, shadow, blur

## AI Visual Direction

Swiss / International Typographic Style, Mathematical grid systems and rigorous alignment, Helvetica/Akzidenz-Grotesk, flush-left ragged-right, Objective, neutral, hierarchy via size/weight, Generous whitespace, photography over illustration, Müller-Brockmann concert posters; Helvetica.

## CSS Technical

```css
/* Swiss / International Typographic Style — design tokens (generated from style_catalog.json) */
/* 1950s–1960s | Switzerland (Josef Müller-Brockmann, Armin Hofmann); Basel & Zurich schools. */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-2: #f2f2f2;
--color-text: #111111;
--color-text-muted: #555555;
--color-primary: #e2001a;
--color-accent: #000000;
--color-grid: #d9d9d9;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-none: none;
/* font */
--font-sans: 'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif;
--font-display: 'Helvetica Neue', Arial, sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.333rem;
--text-xl: 1.777rem;
--text-2xl: 2.369rem;
--text-3xl: 3.157rem;
--text-4xl: 4.209rem;
--text-5xl: 5.61rem;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--baseline: 8px;
--columns: 12;
}

/* ============================================================
Base component classes — Swiss / International Typographic Style (token-driven).
Signature move lives in references/00-flagship-implementation-specs/swiss-design.md;
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

/* Especificação de referência: references/00-flagship-implementation-specs/swiss-design.md */
```

## Design System Variables

```css
--bg: #ffffff, --fg: #111111, --accent: #e2001a, --surface: #ffffff, --radius: 0px, --spacing: 32px, --font-display: 'Helvetica Neue', Arial, sans-serif, --font-body: 'Helvetica Neue', 'Akzidenz-Grotesk', Arial, sans-serif
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

[![Bauhaus](https://designmd.app/images/library/310.png) Arte & Ilustracao ### Bauhaus](https://designmd.app/library/bauhaus)[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)[![Flat Design](https://designmd.app/images/library/12.png) Flat & Soft UI ### Flat Design](https://designmd.app/library/flat-design)

Last synced: 8/30/2026
