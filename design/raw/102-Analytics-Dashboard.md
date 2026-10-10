# Analytics Dashboard

- Source: <https://designmd.app/library/dashboard-analytics>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:58.317Z

Claude Artisan · Flat, material & plataformasOngoing

# Analytics Dashboard

Reference for flat, material & plataformas Analytics Dashboard. Conventional data-product UI patterns.

Analytics Dashboardadmin dashboarddata dashboardCard grids, KPI tiles, charts, tablesNeutral surfaces, one or two accent colorsDense but scannable, clear hierarchyFunction-first legibilityflat-platform

Use case: shell de aplicação com navegação e cartões; Card grids, KPI tiles, charts, tables; Neutral surfaces, one or two accent colors

![Analytics Dashboard](https://designmd.app/images/library/619.png)

## Historical Context

Conventional data-product UI patterns. Example: Stripe Dashboard; Vercel Analytics; admin panels..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Analytics Dashboard"
description: "Analytics Dashboard visual system, translated from the Claude Artisan catalog for use in digital products. Card grids, KPI tiles, charts, tables; Neutral surfaces, one or two accent colors"
colors:
primary: "#4f46e5"
background: "#f5f6f8"
surface: "#ffffff"
text: "#1b2130"
accent: "#16a34a"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Inter', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Inter', 'Helvetica Neue', system-ui, -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Inter', 'Helvetica Neue', system-ui, -apple-system, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "10px"
lg: "14px"
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

Analytics Dashboard visual system, translated from the Claude Artisan catalog for use in digital products. Card grids, KPI tiles, charts, tables; Neutral surfaces, one or two accent colors

- **Category:** flat-platform
- **Era:** Ongoing
- **Origin:** Conventional data-product UI patterns.
- **Reference:** Stripe Dashboard; Vercel Analytics; admin panels.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Card grids, KPI tiles, charts, tables
- Neutral surfaces, one or two accent colors
- Dense but scannable, clear hierarchy
- Function-first legibility

## Colors

- **bg** — #f5f6f8
- **surface** — #ffffff
- **surface-strong** — #eef0f4
- **border** — #e2e5eb
- **text** — #1b2130
- **text-muted** — #5b6274
- **primary** — #4f46e5
- **accent** — #16a34a
- **negative** — #dc2626

## Typography

- Display: 'Inter', system-ui, sans-serif
- Body: 'Inter', 'Helvetica Neue', system-ui, -apple-system, sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Card grids, KPI tiles, charts, tables; Neutral surfaces, one or two accent colors; Dense but scannable, clear hierarchy; Function-first legibility; sombras e elevação

## Shapes

- Radius scale: 6px, 10px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/dashboard-analytics/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Analytics Dashboard — design tokens */
/* Ongoing | Conventional data-product UI patterns, condensed */
:root {
/* color */
--color-bg: #f5f6f8;
--color-surface: #ffffff;
--color-surface-strong: #eef0f4;
--color-border: #e2e5eb;
--color-text: #1b2130;
--color-text-muted: #5b6274;
--color-primary: #4f46e5;
--color-accent: #16a34a;
--color-negative: #dc2626;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(16,24,40,0.06);
--shadow-md: 0 2px 8px rgba(16,24,40,0.08);
--shadow-lg: 0 8px 24px rgba(16,24,40,0.10);
/* font */
--font-sans: 'Inter', 'Helvetica Neue', system-ui, -apple-system, sans-serif;
--font-display: 'Inter', system-ui, sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
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
/* extra: signature = hairline grid rules + small-caps KPI label */
--kpi-label-color: var(--color-text-muted);
--hairline: 1px solid var(--color-border);
--tabular: 'tnum' 1, 'lnum' 1;
}

/* ============================================================
Base component classes — Analytics Dashboard
Signature move: thin 1px hairline borders on every surface (nav, card,
input, table-like rows) paired with an uppercase, letter-spaced KPI
label style. Function-first legibility over decoration.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); font-feature-settings: var(--tabular); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--hairline); }
.btn { font: 600 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: var(--hairline); border-radius: var(--radius-md);
padding: var(--space-2) var(--space-4); cursor: pointer;
transition: background .15s var(--ease-standard), border-color .15s var(--ease-standard); }
.btn:hover { background: var(--color-surface-strong); }
.btn:active { background: var(--color-border); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card { background: var(--color-surface); border: var(--hairline); border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.card h3 { text-transform: uppercase; letter-spacing: .06em; font-size: var(--text-xs); color: var(--kpi-label-color); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: var(--hairline); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 20%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 600 var(--text-xs) var(--font-mono);
text-transform: uppercase; letter-spacing: .04em; color: var(--color-accent);
background: color-mix(in srgb, var(--color-accent) 12%, white); border: 1px solid color-mix(in srgb, var(--color-accent) 30%, white);
border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dashboard-analytics.md */
```

### Variables

```
--bg: #f5f6f8, --fg: #1b2130, --accent: #4f46e5, --surface: #ffffff, --radius: 10px, --spacing: 16px, --font-display: 'Inter', system-ui, sans-serif, --font-body: 'Inter', 'Helvetica Neue', system-ui, -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f5f6f8

#ffffff

#eef0f4

#e2e5eb

Secondary

#1b2130

#5b6274

#4f46e5

#16a34a

#dc2626

### Effects

Card grids, KPI tiles, charts, tables, Neutral surfaces, one or two accent colors, Dense but scannable, clear hierarchy, Function-first legibility, shadow

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

- **Name:** Analytics Dashboard
- **Type:** claude-artisan/flat-platform
- **Keywords:** Analytics Dashboard, admin dashboard, data dashboard, Card grids, KPI tiles, charts, tables, Neutral surfaces, one or two accent colors, Dense but scannable, clear hierarchy, Function-first legibility, flat-platform
- **Era:** Ongoing
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f5f6f8, surface: #ffffff, surface-strong: #eef0f4, border: #e2e5eb
- **Secondary:** text: #1b2130, text-muted: #5b6274, primary: #4f46e5, accent: #16a34a, negative: #dc2626

## Visual Effects

Card grids, KPI tiles, charts, tables, Neutral surfaces, one or two accent colors, Dense but scannable, clear hierarchy, Function-first legibility, shadow

## AI Visual Direction

Analytics Dashboard, Card grids, KPI tiles, charts, tables, Neutral surfaces, one or two accent colors, Dense but scannable, clear hierarchy, Function-first legibility, Stripe Dashboard; Vercel Analytics; admin panels.

## CSS Technical

```css
/* Analytics Dashboard — design tokens */
/* Ongoing | Conventional data-product UI patterns, condensed */
:root {
/* color */
--color-bg: #f5f6f8;
--color-surface: #ffffff;
--color-surface-strong: #eef0f4;
--color-border: #e2e5eb;
--color-text: #1b2130;
--color-text-muted: #5b6274;
--color-primary: #4f46e5;
--color-accent: #16a34a;
--color-negative: #dc2626;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(16,24,40,0.06);
--shadow-md: 0 2px 8px rgba(16,24,40,0.08);
--shadow-lg: 0 8px 24px rgba(16,24,40,0.10);
/* font */
--font-sans: 'Inter', 'Helvetica Neue', system-ui, -apple-system, sans-serif;
--font-display: 'Inter', system-ui, sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
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
/* extra: signature = hairline grid rules + small-caps KPI label */
--kpi-label-color: var(--color-text-muted);
--hairline: 1px solid var(--color-border);
--tabular: 'tnum' 1, 'lnum' 1;
}

/* ============================================================
Base component classes — Analytics Dashboard
Signature move: thin 1px hairline borders on every surface (nav, card,
input, table-like rows) paired with an uppercase, letter-spaced KPI
label style. Function-first legibility over decoration.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); font-feature-settings: var(--tabular); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--hairline); }
.btn { font: 600 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: var(--hairline); border-radius: var(--radius-md);
padding: var(--space-2) var(--space-4); cursor: pointer;
transition: background .15s var(--ease-standard), border-color .15s var(--ease-standard); }
.btn:hover { background: var(--color-surface-strong); }
.btn:active { background: var(--color-border); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card { background: var(--color-surface); border: var(--hairline); border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.card h3 { text-transform: uppercase; letter-spacing: .06em; font-size: var(--text-xs); color: var(--kpi-label-color); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: var(--hairline); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 20%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 600 var(--text-xs) var(--font-mono);
text-transform: uppercase; letter-spacing: .04em; color: var(--color-accent);
background: color-mix(in srgb, var(--color-accent) 12%, white); border: 1px solid color-mix(in srgb, var(--color-accent) 30%, white);
border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dashboard-analytics.md */
```

## Design System Variables

```css
--bg: #f5f6f8, --fg: #1b2130, --accent: #4f46e5, --surface: #ffffff, --radius: 10px, --spacing: 16px, --font-display: 'Inter', system-ui, sans-serif, --font-body: 'Inter', 'Helvetica Neue', system-ui, -apple-system, sans-serif
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

[![Bento Grid](https://designmd.app/images/library/316.png) Editorial & Tipografia ### Bento Grid](https://designmd.app/library/bento-grid)[![Material Design 3 / Material You](https://designmd.app/images/library/679.png) Claude Artisan · Flat, material & plataformas ### Material Design 3 / Material You](https://designmd.app/library/material-design-3)[![Carbon Design System](https://designmd.app/images/library/594.png) Claude Artisan · Flat, material & plataformas ### Carbon Design System](https://designmd.app/library/carbon-design)

Last synced: 8/30/2026
