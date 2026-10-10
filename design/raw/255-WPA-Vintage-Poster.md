# WPA / Vintage Poster

- Source: <https://designmd.app/library/wpa-poster>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:21:00.317Z

Claude Artisan · Movimentos históricos1935–1943

# WPA / Vintage Poster

Reference for movimentos históricos WPA / Vintage Poster. US Works Progress Administration Federal Art Project.

WPA / Vintage Postertravel posterscreenprint posterWPAFlat screen-printed color areasBold simplified shapes and shadowsLimited ink palette, gradient skiesOptimistic public-service messaginghistorical

Use case: composição editorial com grade tipográfica; Flat screen-printed color areas; Bold simplified shapes and shadows

![WPA / Vintage Poster](https://designmd.app/images/library/757.png)

## Historical Context

US Works Progress Administration Federal Art Project. Example: WPA national park posters; vintage airline/travel posters..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "WPA / Vintage Poster"
description: "WPA / Vintage Poster visual system, translated from the Claude Artisan catalog for use in digital products. Flat screen-printed color areas; Bold simplified shapes and shadows"
colors:
primary: "#c1502e"
background: "#e8d9b5"
surface: "#f0e6c8"
text: "#1c1c1c"
accent: "#1c3d5a"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Bebas Neue', 'Futura', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Futura', 'Century Gothic', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Futura', 'Century Gothic', sans-serif"
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

WPA / Vintage Poster visual system, translated from the Claude Artisan catalog for use in digital products. Flat screen-printed color areas; Bold simplified shapes and shadows

- **Category:** historical
- **Era:** 1935–1943
- **Origin:** US Works Progress Administration Federal Art Project.
- **Reference:** WPA national park posters; vintage airline/travel posters.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Flat screen-printed color areas
- Bold simplified shapes and shadows
- Limited ink palette, gradient skies
- Optimistic public-service messaging

## Colors

- **bg** — #e8d9b5
- **surface** — #f0e6c8
- **surface-strong** — #dcc98f
- **border** — #1c3d5a
- **text** — #1c1c1c
- **text-muted** — #4a3f2c
- **primary** — #c1502e
- **accent** — #1c3d5a
- **mustard** — #d69c2f

## Typography

- Display: 'Bebas Neue', 'Futura', sans-serif
- Body: 'Futura', 'Century Gothic', sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flat screen-printed color areas; Bold simplified shapes and shadows; Limited ink palette, gradient skies; Optimistic public-service messaging; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/wpa-poster/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* WPA / Vintage Poster — design tokens */
/* 1935–1943 | US Works Progress Administration Federal Art Project, condensed */
:root {
/* color */
--color-bg: #e8d9b5;
--color-surface: #f0e6c8;
--color-surface-strong: #dcc98f;
--color-border: #1c3d5a;
--color-text: #1c1c1c;
--color-text-muted: #4a3f2c;
--color-primary: #c1502e;
--color-accent: #1c3d5a;
--color-mustard: #d69c2f;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 2px 2px 0 var(--color-border);
--shadow-md: 4px 4px 0 var(--color-border);
--shadow-lg: 6px 6px 0 var(--color-border);
/* font */
--font-sans: 'Futura', 'Century Gothic', sans-serif;
--font-display: 'Bebas Neue', 'Futura', sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.2rem;
--text-xl: 1.6rem;
--text-2xl: 2.2rem;
--text-3xl: 3rem;
--text-4xl: 4rem;
--text-5xl: 5.5rem;
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
/* extra (signature gradients, composite borders, filters) */
--sky-gradient: linear-gradient(180deg, var(--color-mustard) 0%, var(--color-primary) 55%, var(--color-accent) 100%);
--ink-band: 6px solid var(--color-border);
--sun-rays: repeating-conic-gradient(from 0deg, var(--color-mustard) 0deg 4deg, transparent 4deg 20deg);
}

/* ============================================================
Base component classes — WPA / Vintage Poster
Signature move: a flat, banded "sky gradient" (--sky-gradient) with a
thick ink-colored rule (--ink-band), like the limited screen-print
layers of a WPA travel poster. Repeats on nav, card, btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--ink-band); }
.btn { font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .04em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .12s var(--ease-standard), box-shadow .12s var(--ease-standard); }
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--sky-gradient); color: #f0e6c8; border-color: var(--color-border); }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: 3px solid var(--color-border); box-shadow: var(--shadow-lg); position: relative; overflow: hidden; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 8px; background: var(--sky-gradient); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .9em; border-radius: var(--radius-pill); background: #8a3a20; color: #f0e6c8;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/wpa-poster.md */
```

### Variables

```
--bg: #e8d9b5, --fg: #1c1c1c, --accent: #c1502e, --surface: #f0e6c8, --radius: 0px, --spacing: 16px, --font-display: 'Bebas Neue', 'Futura', sans-serif, --font-body: 'Futura', 'Century Gothic', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#e8d9b5

#f0e6c8

#dcc98f

#1c3d5a

Secondary

#1c1c1c

#4a3f2c

#c1502e

#1c3d5a

#d69c2f

### Effects

Flat screen-printed color areas, Bold simplified shapes and shadows, Limited ink palette, gradient skies, Optimistic public-service messaging, shadow

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

- **Name:** WPA / Vintage Poster
- **Type:** claude-artisan/historical
- **Keywords:** WPA / Vintage Poster, travel poster, screenprint poster, WPA, Flat screen-printed color areas, Bold simplified shapes and shadows, Limited ink palette, gradient skies, Optimistic public-service messaging, historical
- **Era:** 1935–1943
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #e8d9b5, surface: #f0e6c8, surface-strong: #dcc98f, border: #1c3d5a
- **Secondary:** text: #1c1c1c, text-muted: #4a3f2c, primary: #c1502e, accent: #1c3d5a, mustard: #d69c2f

## Visual Effects

Flat screen-printed color areas, Bold simplified shapes and shadows, Limited ink palette, gradient skies, Optimistic public-service messaging, shadow

## AI Visual Direction

WPA / Vintage Poster, Flat screen-printed color areas, Bold simplified shapes and shadows, Limited ink palette, gradient skies, Optimistic public-service messaging, WPA national park posters; vintage airline/travel posters.

## CSS Technical

```css
/* WPA / Vintage Poster — design tokens */
/* 1935–1943 | US Works Progress Administration Federal Art Project, condensed */
:root {
/* color */
--color-bg: #e8d9b5;
--color-surface: #f0e6c8;
--color-surface-strong: #dcc98f;
--color-border: #1c3d5a;
--color-text: #1c1c1c;
--color-text-muted: #4a3f2c;
--color-primary: #c1502e;
--color-accent: #1c3d5a;
--color-mustard: #d69c2f;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 2px 2px 0 var(--color-border);
--shadow-md: 4px 4px 0 var(--color-border);
--shadow-lg: 6px 6px 0 var(--color-border);
/* font */
--font-sans: 'Futura', 'Century Gothic', sans-serif;
--font-display: 'Bebas Neue', 'Futura', sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.2rem;
--text-xl: 1.6rem;
--text-2xl: 2.2rem;
--text-3xl: 3rem;
--text-4xl: 4rem;
--text-5xl: 5.5rem;
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
/* extra (signature gradients, composite borders, filters) */
--sky-gradient: linear-gradient(180deg, var(--color-mustard) 0%, var(--color-primary) 55%, var(--color-accent) 100%);
--ink-band: 6px solid var(--color-border);
--sun-rays: repeating-conic-gradient(from 0deg, var(--color-mustard) 0deg 4deg, transparent 4deg 20deg);
}

/* ============================================================
Base component classes — WPA / Vintage Poster
Signature move: a flat, banded "sky gradient" (--sky-gradient) with a
thick ink-colored rule (--ink-band), like the limited screen-print
layers of a WPA travel poster. Repeats on nav, card, btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--ink-band); }
.btn { font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .04em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .12s var(--ease-standard), box-shadow .12s var(--ease-standard); }
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--sky-gradient); color: #f0e6c8; border-color: var(--color-border); }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: 3px solid var(--color-border); box-shadow: var(--shadow-lg); position: relative; overflow: hidden; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 8px; background: var(--sky-gradient); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .9em; border-radius: var(--radius-pill); background: #8a3a20; color: #f0e6c8;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/wpa-poster.md */
```

## Design System Variables

```css
--bg: #e8d9b5, --fg: #1c1c1c, --accent: #c1502e, --surface: #f0e6c8, --radius: 0px, --spacing: 16px, --font-display: 'Bebas Neue', 'Futura', sans-serif, --font-body: 'Futura', 'Century Gothic', sans-serif
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

[![Mid-Century Modern](https://designmd.app/images/library/327.png) Retro & Pop ### Mid-Century Modern](https://designmd.app/library/mid-century-modern)[![Risograph](https://designmd.app/images/library/711.png) Claude Artisan · Textura, material & renderização ### Risograph](https://designmd.app/library/risograph)

Last synced: 8/30/2026
