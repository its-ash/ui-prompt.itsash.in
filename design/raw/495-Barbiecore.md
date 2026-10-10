# Barbiecore

- Source: <https://designmd.app/library/barbiecore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:38.318Z

Claude Artisan · Subculturas & estéticas de nicho2022–present

# Barbiecore

Reference for subculturas & estéticas de nicho Barbiecore. 2023 Barbie film revived hot-pink maximal femininity.

BarbiecoreBarbie pinkSaturated hot/bubblegum pink everywhereGlossy plastic, glam, playfulBold sans display typeFun, femme, unapologeticniche

Use case: hero, superfície, conteúdo e grade responsiva; Saturated hot/bubblegum pink everywhere; Glossy plastic, glam, playful

![Barbiecore](https://designmd.app/images/library/584.png)

## Historical Context

2023 Barbie film revived hot-pink maximal femininity. Example: Barbie (2023) marketing..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Barbiecore"
description: "Barbiecore visual system, translated from the Claude Artisan catalog for use in digital products. Saturated hot/bubblegum pink everywhere; Glossy plastic, glam, playful"
colors:
primary: "#ff0080"
background: "#ff2e93"
surface: "#ffffff"
text: "#3a0021"
accent: "#ffe600"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Baloo 2', 'Poppins', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Poppins', 'Baloo 2', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Poppins', 'Baloo 2', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "12px"
md: "20px"
lg: "32px"
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

Barbiecore visual system, translated from the Claude Artisan catalog for use in digital products. Saturated hot/bubblegum pink everywhere; Glossy plastic, glam, playful

- **Category:** niche
- **Era:** 2022–present
- **Origin:** 2023 Barbie film revived hot-pink maximal femininity.
- **Reference:** Barbie (2023) marketing.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Saturated hot/bubblegum pink everywhere
- Glossy plastic, glam, playful
- Bold sans display type
- Fun, femme, unapologetic

## Colors

- **bg** — #ff2e93
- **surface** — #ffffff
- **surface-strong** — #ffd6ec
- **border** — #ffffff
- **text** — #3a0021
- **text-muted** — #7a0a45
- **primary** — #ff0080
- **accent** — #ffe600

## Typography

- Display: 'Baloo 2', 'Poppins', system-ui, sans-serif
- Body: 'Poppins', 'Baloo 2', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Saturated hot/bubblegum pink everywhere; Glossy plastic, glam, playful; Bold sans display type; Fun, femme, unapologetic; sombras e elevação

## Shapes

- Radius scale: 12px, 20px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/barbiecore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Barbiecore — design tokens */
/* 2022–present | 2023 Barbie film revived hot-pink maximal femininity, condensed */
:root {
/* color */
--color-bg: #ff2e93;
--color-surface: #ffffff;
--color-surface-strong: #ffd6ec;
--color-border: #ffffff;
--color-text: #3a0021;
--color-text-muted: #7a0a45;
--color-primary: #ff0080;
--color-accent: #ffe600;
/* radius — glossy plastic pill shapes everywhere */
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 4px 10px rgba(122,10,69,0.25);
--shadow-md: 0 10px 26px rgba(122,10,69,0.3);
--shadow-lg: 0 20px 46px rgba(122,10,69,0.34);
/* font */
--font-sans: 'Poppins', 'Baloo 2', system-ui, sans-serif;
--font-display: 'Baloo 2', 'Poppins', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra — signature glossy plastic shine: a diagonal white highlight sweep */
--gloss-shine: linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%);
}

/* ============================================================
Base component classes — Barbiecore
Signature move: a diagonal glossy shine overlay (--gloss-shine) on every
raised plastic-pink surface, plus full pill radius everywhere. Repeated on
nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--gloss-shine), var(--color-primary); border-radius: var(--radius-pill);
margin: var(--space-4); box-shadow: var(--shadow-md); }
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: #ffffff;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--gloss-shine), var(--color-primary); border: 2px solid #ffffff;
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.03); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--gloss-shine), var(--color-primary); color: #fff; }
.card { background: var(--gloss-shine), var(--color-surface); color: var(--color-text); border-radius: var(--radius-lg);
border: 3px solid #ffffff; box-shadow: var(--shadow-lg); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-pill); background: var(--color-surface);
border: 2px solid var(--color-primary); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(255,230,0,0.4); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #3a0021; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/barbiecore.md */
```

### Variables

```
--bg: #ff2e93, --fg: #3a0021, --accent: #ff0080, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'Baloo 2', 'Poppins', system-ui, sans-serif, --font-body: 'Poppins', 'Baloo 2', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ff2e93

#ffffff

#ffd6ec

Secondary

#3a0021

#7a0a45

#ff0080

#ffe600

### Effects

Saturated hot/bubblegum pink everywhere, Glossy plastic, glam, playful, Bold sans display type, Fun, femme, unapologetic, shadow

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

- **Name:** Barbiecore
- **Type:** claude-artisan/niche
- **Keywords:** Barbiecore, Barbie pink, Saturated hot/bubblegum pink everywhere, Glossy plastic, glam, playful, Bold sans display type, Fun, femme, unapologetic, niche
- **Era:** 2022–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ff2e93, surface: #ffffff, surface-strong: #ffd6ec, border: #ffffff
- **Secondary:** text: #3a0021, text-muted: #7a0a45, primary: #ff0080, accent: #ffe600

## Visual Effects

Saturated hot/bubblegum pink everywhere, Glossy plastic, glam, playful, Bold sans display type, Fun, femme, unapologetic, shadow

## AI Visual Direction

Barbiecore, Saturated hot/bubblegum pink everywhere, Glossy plastic, glam, playful, Bold sans display type, Fun, femme, unapologetic, Barbie (2023) marketing.

## CSS Technical

```css
/* Barbiecore — design tokens */
/* 2022–present | 2023 Barbie film revived hot-pink maximal femininity, condensed */
:root {
/* color */
--color-bg: #ff2e93;
--color-surface: #ffffff;
--color-surface-strong: #ffd6ec;
--color-border: #ffffff;
--color-text: #3a0021;
--color-text-muted: #7a0a45;
--color-primary: #ff0080;
--color-accent: #ffe600;
/* radius — glossy plastic pill shapes everywhere */
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 4px 10px rgba(122,10,69,0.25);
--shadow-md: 0 10px 26px rgba(122,10,69,0.3);
--shadow-lg: 0 20px 46px rgba(122,10,69,0.34);
/* font */
--font-sans: 'Poppins', 'Baloo 2', system-ui, sans-serif;
--font-display: 'Baloo 2', 'Poppins', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra — signature glossy plastic shine: a diagonal white highlight sweep */
--gloss-shine: linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%);
}

/* ============================================================
Base component classes — Barbiecore
Signature move: a diagonal glossy shine overlay (--gloss-shine) on every
raised plastic-pink surface, plus full pill radius everywhere. Repeated on
nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--gloss-shine), var(--color-primary); border-radius: var(--radius-pill);
margin: var(--space-4); box-shadow: var(--shadow-md); }
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: #ffffff;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--gloss-shine), var(--color-primary); border: 2px solid #ffffff;
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.03); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--gloss-shine), var(--color-primary); color: #fff; }
.card { background: var(--gloss-shine), var(--color-surface); color: var(--color-text); border-radius: var(--radius-lg);
border: 3px solid #ffffff; box-shadow: var(--shadow-lg); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-pill); background: var(--color-surface);
border: 2px solid var(--color-primary); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(255,230,0,0.4); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #3a0021; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/barbiecore.md */
```

## Design System Variables

```css
--bg: #ff2e93, --fg: #3a0021, --accent: #ff0080, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'Baloo 2', 'Poppins', system-ui, sans-serif, --font-body: 'Poppins', 'Baloo 2', system-ui, sans-serif
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

[![Coquette](https://designmd.app/images/library/324.png) Arte & Ilustracao ### Coquette](https://designmd.app/library/coquette)[![McBling](https://designmd.app/images/library/681.png) Claude Artisan · Retrofuturismo & ficção especulativa ### McBling](https://designmd.app/library/mcbling)[![Maximalism](https://designmd.app/images/library/680.png) Claude Artisan · Minimal, maximal & orgânico ### Maximalism](https://designmd.app/library/maximalism)

Last synced: 8/30/2026
