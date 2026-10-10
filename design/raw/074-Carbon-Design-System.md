# Carbon Design System

- Source: <https://designmd.app/library/carbon-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:14.292Z

Claude Artisan · Flat, material & plataformas2017–present

# Carbon Design System

Reference for flat, material & plataformas Carbon Design System. IBM.

Carbon Design SystemCarbonIBM Carbon2x grid, IBM Plex typefaceRestrained, enterprise, data-denseProductive vs expressive themesStrong accessibility standardsflat-platform

Use case: shell de aplicação com navegação e cartões; 2x grid, IBM Plex typeface; Restrained, enterprise, data-dense

![Carbon Design System](https://designmd.app/images/library/594.png)

## Historical Context

IBM. Example: IBM Cloud; enterprise dashboards..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Carbon Design System"
description: "Carbon Design System visual system, translated from the Claude Artisan catalog for use in digital products. 2x grid, IBM Plex typeface; Restrained, enterprise, data-dense"
colors:
primary: "#4589ff"
background: "#161616"
surface: "#262626"
text: "#f4f4f4"
accent: "#08bdba"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'IBM Plex Sans', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'IBM Plex Sans', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'IBM Plex Sans', 'Helvetica Neue', system-ui, sans-serif"
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

Carbon Design System visual system, translated from the Claude Artisan catalog for use in digital products. 2x grid, IBM Plex typeface; Restrained, enterprise, data-dense

- **Category:** flat-platform
- **Era:** 2017–present
- **Origin:** IBM.
- **Reference:** IBM Cloud; enterprise dashboards.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- 2x grid, IBM Plex typeface
- Restrained, enterprise, data-dense
- Productive vs expressive themes
- Strong accessibility standards

## Colors

- **bg** — #161616
- **surface** — #262626
- **surface-strong** — #393939
- **border** — #525252
- **text** — #f4f4f4
- **text-muted** — #c6c6c6
- **primary** — #4589ff
- **accent** — #08bdba

## Typography

- Display: 'IBM Plex Sans', system-ui, sans-serif
- Body: 'IBM Plex Sans', 'Helvetica Neue', system-ui, sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- 2x grid, IBM Plex typeface; Restrained, enterprise, data-dense; Productive vs expressive themes; Strong accessibility standards; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/carbon-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Carbon Design System — design tokens */
/* 2017–present | IBM, condensed */
:root {
/* color */
--color-bg: #161616;
--color-surface: #262626;
--color-surface-strong: #393939;
--color-border: #525252;
--color-text: #f4f4f4;
--color-text-muted: #c6c6c6;
--color-primary: #4589ff;
--color-accent: #08bdba;
/* radius: enterprise, near-flat */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 2px;
/* shadow: restrained, almost none */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
--shadow-md: 0 2px 6px rgba(0,0,0,0.35);
--shadow-lg: 0 4px 12px rgba(0,0,0,0.4);
/* font: IBM Plex family */
--font-sans: 'IBM Plex Sans', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'IBM Plex Sans', system-ui, sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 2.875rem;
--text-5xl: 3.75rem;
/* space: 2x grid discipline */
--space-1: 4px;
--space-2: 8px;
--space-3: 16px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
/* ease */
--ease-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
/* extra: 2px bottom border as interactive underline, IBM Plex data grid tint */
--underline-active: 2px solid var(--color-primary);
--grid-tint: rgba(255,255,255,0.02);
}

/* ============================================================
Base component classes — Carbon Design System
Signature move: flat, near-zero-radius panels with a 1px hairline
border and a 2px solid bottom-border used as the interactive/focus
accent — repeated on input, nav (active link), and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-6); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); }
.btn {
font: 400 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-4) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: none;
cursor: pointer; transition: background-color .11s var(--ease-standard);
}
.btn:hover { background: #4c4c4c; }
.btn:active { background: #6f6f6f; }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: -2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.btn--primary:hover { background: #619eff; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border-top: var(--underline-active); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: none; border-bottom: 1px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: var(--underline-active);
box-shadow: inset 0 -1px 0 var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #003835; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/carbon-design.md */
```

### Variables

```
--bg: #161616, --fg: #f4f4f4, --accent: #4589ff, --surface: #262626, --radius: 0px, --spacing: 16px, --font-display: 'IBM Plex Sans', system-ui, sans-serif, --font-body: 'IBM Plex Sans', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#161616

#262626

#393939

#525252

Secondary

#f4f4f4

#c6c6c6

#4589ff

#08bdba

### Effects

2x grid, IBM Plex typeface, Restrained, enterprise, data-dense, Productive vs expressive themes, Strong accessibility standards, shadow

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

- **Name:** Carbon Design System
- **Type:** claude-artisan/flat-platform
- **Keywords:** Carbon Design System, Carbon, IBM Carbon, 2x grid, IBM Plex typeface, Restrained, enterprise, data-dense, Productive vs expressive themes, Strong accessibility standards, flat-platform
- **Era:** 2017–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #161616, surface: #262626, surface-strong: #393939, border: #525252
- **Secondary:** text: #f4f4f4, text-muted: #c6c6c6, primary: #4589ff, accent: #08bdba

## Visual Effects

2x grid, IBM Plex typeface, Restrained, enterprise, data-dense, Productive vs expressive themes, Strong accessibility standards, shadow

## AI Visual Direction

Carbon Design System, 2x grid, IBM Plex typeface, Restrained, enterprise, data-dense, Productive vs expressive themes, Strong accessibility standards, IBM Cloud; enterprise dashboards.

## CSS Technical

```css
/* Carbon Design System — design tokens */
/* 2017–present | IBM, condensed */
:root {
/* color */
--color-bg: #161616;
--color-surface: #262626;
--color-surface-strong: #393939;
--color-border: #525252;
--color-text: #f4f4f4;
--color-text-muted: #c6c6c6;
--color-primary: #4589ff;
--color-accent: #08bdba;
/* radius: enterprise, near-flat */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 2px;
/* shadow: restrained, almost none */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
--shadow-md: 0 2px 6px rgba(0,0,0,0.35);
--shadow-lg: 0 4px 12px rgba(0,0,0,0.4);
/* font: IBM Plex family */
--font-sans: 'IBM Plex Sans', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'IBM Plex Sans', system-ui, sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 2.875rem;
--text-5xl: 3.75rem;
/* space: 2x grid discipline */
--space-1: 4px;
--space-2: 8px;
--space-3: 16px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
/* ease */
--ease-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
/* extra: 2px bottom border as interactive underline, IBM Plex data grid tint */
--underline-active: 2px solid var(--color-primary);
--grid-tint: rgba(255,255,255,0.02);
}

/* ============================================================
Base component classes — Carbon Design System
Signature move: flat, near-zero-radius panels with a 1px hairline
border and a 2px solid bottom-border used as the interactive/focus
accent — repeated on input, nav (active link), and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-6); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); }
.btn {
font: 400 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-4) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: none;
cursor: pointer; transition: background-color .11s var(--ease-standard);
}
.btn:hover { background: #4c4c4c; }
.btn:active { background: #6f6f6f; }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: -2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.btn--primary:hover { background: #619eff; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border-top: var(--underline-active); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: none; border-bottom: 1px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: var(--underline-active);
box-shadow: inset 0 -1px 0 var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #003835; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/carbon-design.md */
```

## Design System Variables

```css
--bg: #161616, --fg: #f4f4f4, --accent: #4589ff, --surface: #262626, --radius: 0px, --spacing: 16px, --font-display: 'IBM Plex Sans', system-ui, sans-serif, --font-body: 'IBM Plex Sans', 'Helvetica Neue', system-ui, sans-serif
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

[![Ant Design](https://designmd.app/images/library/574.png) Claude Artisan · Flat, material & plataformas ### Ant Design](https://designmd.app/library/ant-design)[![Shopify Polaris](https://designmd.app/images/library/698.png) Claude Artisan · Flat, material & plataformas ### Shopify Polaris](https://designmd.app/library/polaris)

Last synced: 8/30/2026
