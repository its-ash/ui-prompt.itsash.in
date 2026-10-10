# Decopunk

- Source: <https://designmd.app/library/decopunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:04.324Z

Claude Artisan · Retrofuturismo & ficção especulativa2010s–present

# Decopunk

Reference for retrofuturismo & ficção especulativa Decopunk. Sleeker, brighter offshoot of dieselpunk (1920s–40s).

DecopunkDeco-punkraygun decoPolished Art Deco chrome and glamourBrighter palette than gritty dieselpunkStreamlined luxury machine ageGold, cream, chrome, geometricretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Polished Art Deco chrome and glamour; Brighter palette than gritty dieselpunk

![Decopunk](https://designmd.app/images/library/622.png)

## Historical Context

Sleeker, brighter offshoot of dieselpunk (1920s–40s). Example: BioShock (Rapture); The Great Gatsby (2013)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Decopunk"
description: "Decopunk visual system, translated from the Claude Artisan catalog for use in digital products. Polished Art Deco chrome and glamour; Brighter palette than gritty dieselpunk"
colors:
primary: "#e3b23c"
background: "#12100a"
surface: "#1c1811"
text: "#f6ecd6"
accent: "#6fd3c7"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Poiret One', 'Broadway', 'Futura', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Century Gothic', 'Futura', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Century Gothic', 'Futura', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "8px"
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

Decopunk visual system, translated from the Claude Artisan catalog for use in digital products. Polished Art Deco chrome and glamour; Brighter palette than gritty dieselpunk

- **Category:** retrofuturism
- **Era:** 2010s–present
- **Origin:** Sleeker, brighter offshoot of dieselpunk (1920s–40s).
- **Reference:** BioShock (Rapture); The Great Gatsby (2013).
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Polished Art Deco chrome and glamour
- Brighter palette than gritty dieselpunk
- Streamlined luxury machine age
- Gold, cream, chrome, geometric

## Colors

- **bg** — #12100a
- **surface** — #1c1811
- **surface-strong** — #262019
- **border** — #caa24b
- **text** — #f6ecd6
- **text-muted** — #cbb98f
- **primary** — #e3b23c
- **accent** — #6fd3c7
- **chrome** — #e9e4d8

## Typography

- Display: 'Poiret One', 'Broadway', 'Futura', serif
- Body: 'Century Gothic', 'Futura', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Polished Art Deco chrome and glamour; Brighter palette than gritty dieselpunk; Streamlined luxury machine age; Gold, cream, chrome, geometric; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/decopunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Decopunk — design tokens */
/* 2010s–present | Sleeker, brighter offshoot of dieselpunk (1920s–40s), condensed */
:root {
/* color */
--color-bg: #12100a;
--color-surface: #1c1811;
--color-surface-strong: #262019;
--color-border: #caa24b;
--color-text: #f6ecd6;
--color-text-muted: #cbb98f;
--color-primary: #e3b23c;
--color-accent: #6fd3c7;
--color-chrome: #e9e4d8;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 4px rgba(0,0,0,0.4);
--shadow-md: 0 4px 16px rgba(0,0,0,0.5);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.55);
/* font */
--font-sans: 'Century Gothic', 'Futura', system-ui, sans-serif;
--font-display: 'Poiret One', 'Broadway', 'Futura', serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: signature = gold chevron sunburst edge + metallic gradient border */
--gold-gradient: linear-gradient(135deg, #f6d787, #caa24b 45%, #8a6a24 100%);
--chevron-bg: repeating-linear-gradient(115deg, rgba(202,162,75,0.08) 0 6px, transparent 6px 26px);
--border-metal: 1px solid transparent;
}

/* ============================================================
Base component classes — Decopunk
Signature move: a thin metallic gold gradient border (border-image)
plus a faint repeating chevron/sunburst tint, repeated on nav, card,
and button — polished streamline-luxury over a near-black ground.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg) var(--chevron-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 2px solid; border-image: var(--gold-gradient) 1; }
.btn { font: 600 var(--text-sm)/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase;
color: var(--color-text); background: var(--color-surface-strong);
border: 1px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6); cursor: pointer;
transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard); }
.btn:hover { box-shadow: 0 0 0 1px var(--color-primary), var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--gold-gradient); color: #1c1811; border-color: transparent; }
.card { background: var(--color-surface) var(--chevron-bg); border-radius: var(--radius-lg);
border: 2px solid; border-image: var(--gold-gradient) 1; box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: 1px solid var(--color-border); border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
letter-spacing: .06em; text-transform: uppercase; color: #1c1811; background: var(--gold-gradient);
border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/decopunk.md */
```

### Variables

```
--bg: #12100a, --fg: #f6ecd6, --accent: #e3b23c, --surface: #1c1811, --radius: 4px, --spacing: 16px, --font-display: 'Poiret One', 'Broadway', 'Futura', serif, --font-body: 'Century Gothic', 'Futura', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#12100a

#1c1811

#262019

#caa24b

Secondary

#f6ecd6

#cbb98f

#e3b23c

#6fd3c7

#e9e4d8

### Effects

Polished Art Deco chrome and glamour, Brighter palette than gritty dieselpunk, Streamlined luxury machine age, Gold, cream, chrome, geometric, shadow

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

- **Name:** Decopunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Decopunk, Deco-punk, raygun deco, Polished Art Deco chrome and glamour, Brighter palette than gritty dieselpunk, Streamlined luxury machine age, Gold, cream, chrome, geometric, retrofuturism
- **Era:** 2010s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #12100a, surface: #1c1811, surface-strong: #262019, border: #caa24b
- **Secondary:** text: #f6ecd6, text-muted: #cbb98f, primary: #e3b23c, accent: #6fd3c7, chrome: #e9e4d8

## Visual Effects

Polished Art Deco chrome and glamour, Brighter palette than gritty dieselpunk, Streamlined luxury machine age, Gold, cream, chrome, geometric, shadow

## AI Visual Direction

Decopunk, Polished Art Deco chrome and glamour, Brighter palette than gritty dieselpunk, Streamlined luxury machine age, Gold, cream, chrome, geometric, BioShock (Rapture); The Great Gatsby (2013).

## CSS Technical

```css
/* Decopunk — design tokens */
/* 2010s–present | Sleeker, brighter offshoot of dieselpunk (1920s–40s), condensed */
:root {
/* color */
--color-bg: #12100a;
--color-surface: #1c1811;
--color-surface-strong: #262019;
--color-border: #caa24b;
--color-text: #f6ecd6;
--color-text-muted: #cbb98f;
--color-primary: #e3b23c;
--color-accent: #6fd3c7;
--color-chrome: #e9e4d8;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 4px rgba(0,0,0,0.4);
--shadow-md: 0 4px 16px rgba(0,0,0,0.5);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.55);
/* font */
--font-sans: 'Century Gothic', 'Futura', system-ui, sans-serif;
--font-display: 'Poiret One', 'Broadway', 'Futura', serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: signature = gold chevron sunburst edge + metallic gradient border */
--gold-gradient: linear-gradient(135deg, #f6d787, #caa24b 45%, #8a6a24 100%);
--chevron-bg: repeating-linear-gradient(115deg, rgba(202,162,75,0.08) 0 6px, transparent 6px 26px);
--border-metal: 1px solid transparent;
}

/* ============================================================
Base component classes — Decopunk
Signature move: a thin metallic gold gradient border (border-image)
plus a faint repeating chevron/sunburst tint, repeated on nav, card,
and button — polished streamline-luxury over a near-black ground.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg) var(--chevron-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 2px solid; border-image: var(--gold-gradient) 1; }
.btn { font: 600 var(--text-sm)/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase;
color: var(--color-text); background: var(--color-surface-strong);
border: 1px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6); cursor: pointer;
transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard); }
.btn:hover { box-shadow: 0 0 0 1px var(--color-primary), var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--gold-gradient); color: #1c1811; border-color: transparent; }
.card { background: var(--color-surface) var(--chevron-bg); border-radius: var(--radius-lg);
border: 2px solid; border-image: var(--gold-gradient) 1; box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: 1px solid var(--color-border); border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
letter-spacing: .06em; text-transform: uppercase; color: #1c1811; background: var(--gold-gradient);
border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/decopunk.md */
```

## Design System Variables

```css
--bg: #12100a, --fg: #f6ecd6, --accent: #e3b23c, --surface: #1c1811, --radius: 4px, --spacing: 16px, --font-display: 'Poiret One', 'Broadway', 'Futura', serif, --font-body: 'Century Gothic', 'Futura', system-ui, sans-serif
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

[![Dieselpunk](https://designmd.app/images/library/623.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Dieselpunk](https://designmd.app/library/dieselpunk)[![Art Deco](https://designmd.app/images/library/304.png) Arte & Ilustracao ### Art Deco](https://designmd.app/library/art-deco)[![Streamline Moderne](https://designmd.app/images/library/726.png) Claude Artisan · Movimentos históricos ### Streamline Moderne](https://designmd.app/library/streamline-moderne)

Last synced: 8/30/2026
