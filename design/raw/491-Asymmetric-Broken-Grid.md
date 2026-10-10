# Asymmetric / Broken Grid

- Source: <https://designmd.app/library/asymmetric-layout>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:31.325Z

Claude Artisan · Minimal, maximal & orgânico2017–present

# Asymmetric / Broken Grid

Reference for minimal, maximal & orgânico Asymmetric / Broken Grid. Reaction to templated symmetric layouts.

Asymmetric / Broken Gridbroken gridoffset layoutIntentional off-grid, overlapping elementsDynamic tension and asymmetryLayered z-depth, diagonal flowEditorial, expressiveminimal-organic

Use case: composição editorial com grade tipográfica; Intentional off-grid, overlapping elements; Dynamic tension and asymmetry

![Asymmetric / Broken Grid](https://designmd.app/images/library/580.png)

## Historical Context

Reaction to templated symmetric layouts. Example: Awwwards agency sites; fashion lookbooks..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Asymmetric / Broken Grid"
description: "Asymmetric / Broken Grid visual system, translated from the Claude Artisan catalog for use in digital products. Intentional off-grid, overlapping elements; Dynamic tension and asymmetry"
colors:
primary: "#ff3d1a"
background: "#f5f4f0"
surface: "#ffffff"
text: "#101010"
accent: "#1a1aff"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
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

Asymmetric / Broken Grid visual system, translated from the Claude Artisan catalog for use in digital products. Intentional off-grid, overlapping elements; Dynamic tension and asymmetry

- **Category:** minimal-organic
- **Era:** 2017–present
- **Origin:** Reaction to templated symmetric layouts.
- **Reference:** Awwwards agency sites; fashion lookbooks.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Intentional off-grid, overlapping elements
- Dynamic tension and asymmetry
- Layered z-depth, diagonal flow
- Editorial, expressive

## Colors

- **bg** — #f5f4f0
- **surface** — #ffffff
- **surface-strong** — #101010
- **border** — #101010
- **text** — #101010
- **text-muted** — #55534c
- **primary** — #ff3d1a
- **accent** — #1a1aff

## Typography

- Display: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
- Body: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Intentional off-grid, overlapping elements; Dynamic tension and asymmetry; Layered z-depth, diagonal flow; Editorial, expressive; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/asymmetric-layout/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Asymmetric / Broken Grid — design tokens */
/* 2017–present | Reaction to templated symmetric layouts, condensed */
:root {
/* color */
--color-bg: #f5f4f0;
--color-surface: #ffffff;
--color-surface-strong: #101010;
--color-border: #101010;
--color-text: #101010;
--color-text-muted: #55534c;
--color-primary: #ff3d1a;
--color-accent: #1a1aff;
/* radius — hard edges, no rounding: tension comes from position, not softness */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 4px 4px 0 rgba(16,16,16,0.9);
--shadow-md: 8px 8px 0 rgba(16,16,16,0.9);
--shadow-lg: 14px 14px 0 rgba(16,16,16,0.9);
/* font */
--font-sans: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif;
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
--ease-standard: cubic-bezier(0.7, 0, 0.3, 1);
/* extra — signature offset: elements rotate/skew slightly off-axis and overlap via negative margin */
--tilt-1: rotate(-1.4deg);
--tilt-2: rotate(1.1deg);
--overlap: -14px;
}

/* ============================================================
Base component classes — Asymmetric / Broken Grid
Signature move: hard offset shadow (no blur) + slight rotation/overlap so
elements sit intentionally off-axis. Repeated on card, btn, and nav.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 3px solid var(--color-border);
transform: skewX(-1deg); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
transform: var(--tilt-1);
}
.btn:hover { transform: translate(-2px,-2px) var(--tilt-1); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0) var(--tilt-1); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #101010; border-color: var(--color-border); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 3px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); transform: var(--tilt-2); }
.card:nth-of-type(2n) { transform: var(--tilt-1); margin-top: var(--overlap); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); background: var(--color-surface);
border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 4px 4px 0 rgba(26,26,255,0.4); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #fff;
transform: var(--tilt-1); }
@media (prefers-reduced-motion: reduce) { .btn, .nav, .card, .badge { transition: none; transform: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/asymmetric-layout.md */
```

### Variables

```
--bg: #f5f4f0, --fg: #101010, --accent: #ff3d1a, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif, --font-body: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f5f4f0

#ffffff

#101010

Secondary

#101010

#55534c

#ff3d1a

#1a1aff

### Effects

Intentional off-grid, overlapping elements, Dynamic tension and asymmetry, Layered z-depth, diagonal flow, Editorial, expressive, shadow

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

- **Name:** Asymmetric / Broken Grid
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Asymmetric / Broken Grid, broken grid, offset layout, Intentional off-grid, overlapping elements, Dynamic tension and asymmetry, Layered z-depth, diagonal flow, Editorial, expressive, minimal-organic
- **Era:** 2017–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f5f4f0, surface: #ffffff, surface-strong: #101010, border: #101010
- **Secondary:** text: #101010, text-muted: #55534c, primary: #ff3d1a, accent: #1a1aff

## Visual Effects

Intentional off-grid, overlapping elements, Dynamic tension and asymmetry, Layered z-depth, diagonal flow, Editorial, expressive, shadow

## AI Visual Direction

Asymmetric / Broken Grid, Intentional off-grid, overlapping elements, Dynamic tension and asymmetry, Layered z-depth, diagonal flow, Editorial, expressive, Awwwards agency sites; fashion lookbooks.

## CSS Technical

```css
/* Asymmetric / Broken Grid — design tokens */
/* 2017–present | Reaction to templated symmetric layouts, condensed */
:root {
/* color */
--color-bg: #f5f4f0;
--color-surface: #ffffff;
--color-surface-strong: #101010;
--color-border: #101010;
--color-text: #101010;
--color-text-muted: #55534c;
--color-primary: #ff3d1a;
--color-accent: #1a1aff;
/* radius — hard edges, no rounding: tension comes from position, not softness */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 4px 4px 0 rgba(16,16,16,0.9);
--shadow-md: 8px 8px 0 rgba(16,16,16,0.9);
--shadow-lg: 14px 14px 0 rgba(16,16,16,0.9);
/* font */
--font-sans: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif;
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
--ease-standard: cubic-bezier(0.7, 0, 0.3, 1);
/* extra — signature offset: elements rotate/skew slightly off-axis and overlap via negative margin */
--tilt-1: rotate(-1.4deg);
--tilt-2: rotate(1.1deg);
--overlap: -14px;
}

/* ============================================================
Base component classes — Asymmetric / Broken Grid
Signature move: hard offset shadow (no blur) + slight rotation/overlap so
elements sit intentionally off-axis. Repeated on card, btn, and nav.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 3px solid var(--color-border);
transform: skewX(-1deg); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
transform: var(--tilt-1);
}
.btn:hover { transform: translate(-2px,-2px) var(--tilt-1); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0) var(--tilt-1); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #101010; border-color: var(--color-border); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 3px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); transform: var(--tilt-2); }
.card:nth-of-type(2n) { transform: var(--tilt-1); margin-top: var(--overlap); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); background: var(--color-surface);
border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 4px 4px 0 rgba(26,26,255,0.4); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #fff;
transform: var(--tilt-1); }
@media (prefers-reduced-motion: reduce) { .btn, .nav, .card, .badge { transition: none; transform: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/asymmetric-layout.md */
```

## Design System Variables

```css
--bg: #f5f4f0, --fg: #101010, --accent: #ff3d1a, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif, --font-body: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
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

[![Editorial / Magazine](https://designmd.app/images/library/629.png) Claude Artisan · Minimal, maximal & orgânico ### Editorial / Magazine](https://designmd.app/library/editorial-layout)[![Swiss Punk / New Wave](https://designmd.app/images/library/731.png) Claude Artisan · Brutalismo & anti-design ### Swiss Punk / New Wave](https://designmd.app/library/swiss-punk)

Last synced: 8/30/2026
