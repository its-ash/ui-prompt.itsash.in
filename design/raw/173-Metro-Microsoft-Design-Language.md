# Metro / Microsoft Design Language

- Source: <https://designmd.app/library/metro>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:50.368Z

Claude Artisan · Flat, material & plataformas2010–2017

# Metro / Microsoft Design Language

Reference for flat, material & plataformas Metro / Microsoft Design Language. Microsoft, Windows Phone 7 (2010), Windows 8.

Metro / Microsoft Design LanguageMetro UIModern UIWindows Phone designLive Tiles grid; content over chromeBold Segoe typography, edge-to-edgeMotion and typographic hierarchyFlat, colorful, no skeuomorphismflat-platform

Use case: composição editorial com grade tipográfica; Live Tiles grid; content over chrome; Bold Segoe typography, edge-to-edge

![Metro / Microsoft Design Language](https://designmd.app/images/library/683.png)

## Historical Context

Microsoft, Windows Phone 7 (2010), Windows 8. Example: Windows Phone 7/8; Windows 8 Start screen..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Metro / Microsoft Design Language"
description: "Metro / Microsoft Design Language visual system, translated from the Claude Artisan catalog for use in digital products. Live Tiles grid; content over chrome; Bold Segoe typography, edge-to-edge"
colors:
primary: "#2d89ef"
background: "#0d0d0d"
surface: "#1a1a1a"
text: "#ffffff"
accent: "#e51400"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Segoe UI Light', 'Segoe UI', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Segoe UI', 'Segoe UI Light', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Segoe UI', 'Segoe UI Light', system-ui, sans-serif"
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

Metro / Microsoft Design Language visual system, translated from the Claude Artisan catalog for use in digital products. Live Tiles grid; content over chrome; Bold Segoe typography, edge-to-edge

- **Category:** flat-platform
- **Era:** 2010–2017
- **Origin:** Microsoft, Windows Phone 7 (2010), Windows 8.
- **Reference:** Windows Phone 7/8; Windows 8 Start screen.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Live Tiles grid; content over chrome
- Bold Segoe typography, edge-to-edge
- Motion and typographic hierarchy
- Flat, colorful, no skeuomorphism

## Colors

- **bg** — #0d0d0d
- **surface** — #1a1a1a
- **surface-strong** — #262626
- **border** — #3a3a3a
- **text** — #ffffff
- **text-muted** — #a6a6a6
- **primary** — #2d89ef
- **accent** — #e51400
- **tile-purple** — #6a00ff
- **tile-green** — #00a300
- **tile-teal** — #00aba9

## Typography

- Display: 'Segoe UI Light', 'Segoe UI', system-ui, sans-serif
- Body: 'Segoe UI', 'Segoe UI Light', system-ui, sans-serif
- Mono: 'Consolas', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Live Tiles grid; content over chrome; Bold Segoe typography, edge-to-edge; Motion and typographic hierarchy; Flat, colorful, no skeuomorphism; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/metro/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Metro / Microsoft Design Language — design tokens */
/* 2010–2017 | Microsoft, Windows Phone 7 (2010), Windows 8, condensed */
:root {
/* color */
--color-bg: #0d0d0d;
--color-surface: #1a1a1a;
--color-surface-strong: #262626;
--color-border: #3a3a3a;
--color-text: #ffffff;
--color-text-muted: #a6a6a6;
--color-primary: #2d89ef;
--color-accent: #e51400;
--color-tile-purple: #6a00ff;
--color-tile-green: #00a300;
--color-tile-teal: #00aba9;
/* radius: Metro is flat and square, zero everywhere */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: no shadows, flatness is the point */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: 'Segoe UI', 'Segoe UI Light', system-ui, sans-serif;
--font-display: 'Segoe UI Light', 'Segoe UI', system-ui, sans-serif;
--font-mono: 'Consolas', ui-monospace, monospace;
/* text: Metro leans on oversized, light-weight type for hierarchy */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.5rem;
--text-5xl: 5rem;
/* space: dense tile grid rhythm */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
/* ease: fast, linear, no bounce — content-first motion */
--ease-standard: cubic-bezier(0.1, 0.9, 0.2, 1);
/* extra: flat color tiles, edge-to-edge, no chrome — the tile IS the button */
--tile-grid-gap: 2px;
}

/* ============================================================
Base component classes — Metro
Signature move: flat, edge-to-edge solid-color tiles with zero radius and
zero shadow — the surface color itself carries all the meaning. Repeats
on nav, btn--primary (a color tile), and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface); border-bottom: 1px solid var(--color-border); }
.btn { font: 300 var(--text-lg)/1 var(--font-sans); text-transform: uppercase; letter-spacing: .04em;
color: var(--color-text); padding: var(--space-4) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: none; cursor: pointer;
transition: background-color .12s var(--ease-standard); }
.btn:hover { background-color: var(--color-primary); }
.btn:active { background-color: color-mix(in srgb, var(--color-primary) 80%, black); }
.btn:focus-visible { outline: 2px solid #ffffff; outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; background: var(--color-surface-strong); }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.btn--primary:hover { background: color-mix(in srgb, var(--color-primary) 85%, white); }
.card { background: var(--color-tile-purple); color: #ffffff; border-radius: var(--radius-sm);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.card:nth-of-type(2n) { background: var(--color-tile-teal); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: none; border-bottom: 2px solid var(--color-text-muted); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); text-transform: uppercase;
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-accent); color: #ffffff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/metro.md */
```

### Variables

```
--bg: #0d0d0d, --fg: #ffffff, --accent: #2d89ef, --surface: #1a1a1a, --radius: 0px, --spacing: 16px, --font-display: 'Segoe UI Light', 'Segoe UI', system-ui, sans-serif, --font-body: 'Segoe UI', 'Segoe UI Light', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0d0d0d

#1a1a1a

#262626

#3a3a3a

Secondary

#ffffff

#a6a6a6

#2d89ef

#e51400

#6a00ff

#00a300

#00aba9

### Effects

Live Tiles grid; content over chrome, Bold Segoe typography, edge-to-edge, Motion and typographic hierarchy, Flat, colorful, no skeuomorphism, shadow

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

- **Name:** Metro / Microsoft Design Language
- **Type:** claude-artisan/flat-platform
- **Keywords:** Metro / Microsoft Design Language, Metro UI, Modern UI, Windows Phone design, Live Tiles grid; content over chrome, Bold Segoe typography, edge-to-edge, Motion and typographic hierarchy, Flat, colorful, no skeuomorphism, flat-platform
- **Era:** 2010–2017
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0d0d0d, surface: #1a1a1a, surface-strong: #262626, border: #3a3a3a
- **Secondary:** text: #ffffff, text-muted: #a6a6a6, primary: #2d89ef, accent: #e51400, tile-purple: #6a00ff, tile-green: #00a300, tile-teal: #00aba9

## Visual Effects

Live Tiles grid; content over chrome, Bold Segoe typography, edge-to-edge, Motion and typographic hierarchy, Flat, colorful, no skeuomorphism, shadow

## AI Visual Direction

Metro / Microsoft Design Language, Live Tiles grid; content over chrome, Bold Segoe typography, edge-to-edge, Motion and typographic hierarchy, Flat, colorful, no skeuomorphism, Windows Phone 7/8; Windows 8 Start screen.

## CSS Technical

```css
/* Metro / Microsoft Design Language — design tokens */
/* 2010–2017 | Microsoft, Windows Phone 7 (2010), Windows 8, condensed */
:root {
/* color */
--color-bg: #0d0d0d;
--color-surface: #1a1a1a;
--color-surface-strong: #262626;
--color-border: #3a3a3a;
--color-text: #ffffff;
--color-text-muted: #a6a6a6;
--color-primary: #2d89ef;
--color-accent: #e51400;
--color-tile-purple: #6a00ff;
--color-tile-green: #00a300;
--color-tile-teal: #00aba9;
/* radius: Metro is flat and square, zero everywhere */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: no shadows, flatness is the point */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: 'Segoe UI', 'Segoe UI Light', system-ui, sans-serif;
--font-display: 'Segoe UI Light', 'Segoe UI', system-ui, sans-serif;
--font-mono: 'Consolas', ui-monospace, monospace;
/* text: Metro leans on oversized, light-weight type for hierarchy */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.5rem;
--text-5xl: 5rem;
/* space: dense tile grid rhythm */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
/* ease: fast, linear, no bounce — content-first motion */
--ease-standard: cubic-bezier(0.1, 0.9, 0.2, 1);
/* extra: flat color tiles, edge-to-edge, no chrome — the tile IS the button */
--tile-grid-gap: 2px;
}

/* ============================================================
Base component classes — Metro
Signature move: flat, edge-to-edge solid-color tiles with zero radius and
zero shadow — the surface color itself carries all the meaning. Repeats
on nav, btn--primary (a color tile), and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface); border-bottom: 1px solid var(--color-border); }
.btn { font: 300 var(--text-lg)/1 var(--font-sans); text-transform: uppercase; letter-spacing: .04em;
color: var(--color-text); padding: var(--space-4) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: none; cursor: pointer;
transition: background-color .12s var(--ease-standard); }
.btn:hover { background-color: var(--color-primary); }
.btn:active { background-color: color-mix(in srgb, var(--color-primary) 80%, black); }
.btn:focus-visible { outline: 2px solid #ffffff; outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; background: var(--color-surface-strong); }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.btn--primary:hover { background: color-mix(in srgb, var(--color-primary) 85%, white); }
.card { background: var(--color-tile-purple); color: #ffffff; border-radius: var(--radius-sm);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.card:nth-of-type(2n) { background: var(--color-tile-teal); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: none; border-bottom: 2px solid var(--color-text-muted); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); text-transform: uppercase;
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-accent); color: #ffffff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/metro.md */
```

## Design System Variables

```css
--bg: #0d0d0d, --fg: #ffffff, --accent: #2d89ef, --surface: #1a1a1a, --radius: 0px, --spacing: 16px, --font-display: 'Segoe UI Light', 'Segoe UI', system-ui, sans-serif, --font-body: 'Segoe UI', 'Segoe UI Light', system-ui, sans-serif
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

[![Flat Design](https://designmd.app/images/library/12.png) Flat & Soft UI ### Flat Design](https://designmd.app/library/flat-design)[![Fluent Design 2 (Fluent 2)](https://designmd.app/images/library/639.png) Claude Artisan · Flat, material & plataformas ### Fluent Design 2 (Fluent 2)](https://designmd.app/library/fluent-design-2)

Last synced: 8/30/2026
