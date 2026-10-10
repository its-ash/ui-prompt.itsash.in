# Brutalist Minimalism

- Source: <https://designmd.app/library/editorial-brutalist-minimal>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:14.316Z

Claude Artisan · Minimal, maximal & orgânico2018–present

# Brutalist Minimalism

Reference for minimal, maximal & orgânico Brutalist Minimalism. Cross of brutalism's honesty with minimalism's restraint.

Brutalist Minimalismminimal brutalismBig type, hairline rules, monospace accentsLots of whitespace, few colorsExposed structure without decorationCold, confident, editorialminimal-organic

Use case: composição editorial com grade tipográfica; Big type, hairline rules, monospace accents; Lots of whitespace, few colors

![Brutalist Minimalism](https://designmd.app/images/library/628.png)

## Historical Context

Cross of brutalism's honesty with minimalism's restraint. Example: Fashion/agency portfolios; type-foundry sites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Brutalist Minimalism"
description: "Brutalist Minimalism visual system, translated from the Claude Artisan catalog for use in digital products. Big type, hairline rules, monospace accents; Lots of whitespace, few colors"
colors:
primary: "#0a0a0a"
background: "#ffffff"
surface: "#ffffff"
text: "#0a0a0a"
accent: "#ff3b1f"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', 'Arial', sans-serif"
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
lg: "40px"
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

Brutalist Minimalism visual system, translated from the Claude Artisan catalog for use in digital products. Big type, hairline rules, monospace accents; Lots of whitespace, few colors

- **Category:** minimal-organic
- **Era:** 2018–present
- **Origin:** Cross of brutalism's honesty with minimalism's restraint.
- **Reference:** Fashion/agency portfolios; type-foundry sites.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Big type, hairline rules, monospace accents
- Lots of whitespace, few colors
- Exposed structure without decoration
- Cold, confident, editorial

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #f2f2f0
- **border** — #111111
- **text** — #0a0a0a
- **text-muted** — #6b6b6b
- **primary** — #0a0a0a
- **accent** — #ff3b1f

## Typography

- Display: 'Helvetica Neue', 'Arial', sans-serif
- Body: 'Helvetica Neue', 'Arial', sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Big type, hairline rules, monospace accents; Lots of whitespace, few colors; Exposed structure without decoration; Cold, confident, editorial; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/editorial-brutalist-minimal/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Brutalist Minimalism — design tokens */
/* 2018–present | Cross of brutalism's honesty with minimalism's restraint, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #f2f2f0;
--color-border: #111111;
--color-text: #0a0a0a;
--color-text-muted: #6b6b6b;
--color-primary: #0a0a0a;
--color-accent: #ff3b1f;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: 'Helvetica Neue', 'Arial', sans-serif;
--font-display: 'Helvetica Neue', 'Arial', sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 4rem;
--text-5xl: 5.5rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 40px;
--space-12: 64px;
--space-16: 96px;
--space-24: 144px;
/* ease */
--ease-standard: linear;
/* extra: signature = single 1px hairline rule under every heading/label + monospace tag */
--hairline: 1px solid var(--color-border);
--tag-font: 700 var(--text-xs) var(--font-mono);
}

/* ============================================================
Base component classes — Brutalist Minimalism
Signature move: a single hairline rule appears under the nav, above
card titles, and beneath the input — exposed structure, no decoration.
Monospace uppercase labels tag every interactive element.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-6); align-items: center; padding: var(--space-4) var(--space-6);
border-bottom: var(--hairline); }
.btn { font: var(--tag-font); text-transform: uppercase; letter-spacing: .08em; color: var(--color-text);
background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6); cursor: pointer; transition: background .1s var(--ease-standard), color .1s var(--ease-standard); }
.btn:hover { background: var(--color-text); color: var(--color-bg); }
.btn:active { background: var(--color-text); color: var(--color-bg); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: var(--color-bg); }
.btn--primary:hover { background: var(--color-accent); color: var(--color-bg); }
.card { background: var(--color-surface); padding: var(--space-6); border-top: var(--hairline); }
.card h3 { border-bottom: var(--hairline); padding-bottom: var(--space-2); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: transparent; border: none; border-bottom: 1px solid var(--color-border); border-radius: 0;
padding: var(--space-3) 0; }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: 2px solid var(--color-accent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: var(--tag-font); text-transform: uppercase;
color: var(--color-text); border: 1px solid var(--color-border); border-radius: 0; padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/editorial-brutalist-minimal.md */
```

### Variables

```
--bg: #ffffff, --fg: #0a0a0a, --accent: #0a0a0a, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Helvetica Neue', 'Arial', sans-serif, --font-body: 'Helvetica Neue', 'Arial', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffffff

#f2f2f0

#111111

Secondary

#0a0a0a

#6b6b6b

#ff3b1f

### Effects

Big type, hairline rules, monospace accents, Lots of whitespace, few colors, Exposed structure without decoration, Cold, confident, editorial, shadow

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

- **Name:** Brutalist Minimalism
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Brutalist Minimalism, minimal brutalism, Big type, hairline rules, monospace accents, Lots of whitespace, few colors, Exposed structure without decoration, Cold, confident, editorial, minimal-organic
- **Era:** 2018–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffffff, surface: #ffffff, surface-strong: #f2f2f0, border: #111111
- **Secondary:** text: #0a0a0a, text-muted: #6b6b6b, primary: #0a0a0a, accent: #ff3b1f

## Visual Effects

Big type, hairline rules, monospace accents, Lots of whitespace, few colors, Exposed structure without decoration, Cold, confident, editorial, shadow

## AI Visual Direction

Brutalist Minimalism, Big type, hairline rules, monospace accents, Lots of whitespace, few colors, Exposed structure without decoration, Cold, confident, editorial, Fashion/agency portfolios; type-foundry sites.

## CSS Technical

```css
/* Brutalist Minimalism — design tokens */
/* 2018–present | Cross of brutalism's honesty with minimalism's restraint, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #f2f2f0;
--color-border: #111111;
--color-text: #0a0a0a;
--color-text-muted: #6b6b6b;
--color-primary: #0a0a0a;
--color-accent: #ff3b1f;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: 'Helvetica Neue', 'Arial', sans-serif;
--font-display: 'Helvetica Neue', 'Arial', sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 4rem;
--text-5xl: 5.5rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 40px;
--space-12: 64px;
--space-16: 96px;
--space-24: 144px;
/* ease */
--ease-standard: linear;
/* extra: signature = single 1px hairline rule under every heading/label + monospace tag */
--hairline: 1px solid var(--color-border);
--tag-font: 700 var(--text-xs) var(--font-mono);
}

/* ============================================================
Base component classes — Brutalist Minimalism
Signature move: a single hairline rule appears under the nav, above
card titles, and beneath the input — exposed structure, no decoration.
Monospace uppercase labels tag every interactive element.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-6); align-items: center; padding: var(--space-4) var(--space-6);
border-bottom: var(--hairline); }
.btn { font: var(--tag-font); text-transform: uppercase; letter-spacing: .08em; color: var(--color-text);
background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6); cursor: pointer; transition: background .1s var(--ease-standard), color .1s var(--ease-standard); }
.btn:hover { background: var(--color-text); color: var(--color-bg); }
.btn:active { background: var(--color-text); color: var(--color-bg); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: var(--color-bg); }
.btn--primary:hover { background: var(--color-accent); color: var(--color-bg); }
.card { background: var(--color-surface); padding: var(--space-6); border-top: var(--hairline); }
.card h3 { border-bottom: var(--hairline); padding-bottom: var(--space-2); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: transparent; border: none; border-bottom: 1px solid var(--color-border); border-radius: 0;
padding: var(--space-3) 0; }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: 2px solid var(--color-accent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: var(--tag-font); text-transform: uppercase;
color: var(--color-text); border: 1px solid var(--color-border); border-radius: 0; padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/editorial-brutalist-minimal.md */
```

## Design System Variables

```css
--bg: #ffffff, --fg: #0a0a0a, --accent: #0a0a0a, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Helvetica Neue', 'Arial', sans-serif, --font-body: 'Helvetica Neue', 'Arial', sans-serif
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

[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)[![Swiss / International Typographic Style](https://designmd.app/images/library/730.png) Claude Artisan · Movimentos históricos ### Swiss / International Typographic Style](https://designmd.app/library/swiss-design)

Last synced: 8/30/2026
