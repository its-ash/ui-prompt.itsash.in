# Material Design 3 / Material You

- Source: <https://designmd.app/library/material-design-3>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:42.385Z

Claude Artisan · Flat, material & plataformas2021–present

# Material Design 3 / Material You

Reference for flat, material & plataformas Material Design 3 / Material You. Google; Material You (2021), Material 3 Expressive (Google I/O 2025).

Material Design 3 / Material YouM3Material YouM3 ExpressiveDynamic color extracted from user wallpaper (tonal palettes)Larger rounded shapes, shape-morphing tokensExpressive spring-physics motionDesign tokens as single source of truth; updated componentsflat-platform

Use case: shell de aplicação com navegação e cartões; Dynamic color extracted from user wallpaper (tonal palettes); Larger rounded shapes, shape-morphing tokens

![Material Design 3 / Material You](https://designmd.app/images/library/679.png)

## Historical Context

Google; Material You (2021), Material 3 Expressive (Google I/O 2025). Example: Android 12+; Google apps; Wear OS 5..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Material Design 3 / Material You"
description: "Material Design 3 / Material You visual system, translated from the Claude Artisan catalog for use in digital products. Dynamic color extracted from user wallpaper (tonal palettes); Larger rounded shapes, shape-morphing tokens"
colors:
primary: "#6750a4"
background: "#fef7ff"
surface: "#fef7ff"
text: "#1d1b20"
accent: "#6750a4"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Roboto Flex', 'Roboto', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Roboto', 'Roboto Flex', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Roboto', 'Roboto Flex', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "12px"
lg: "16px"
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

Material Design 3 / Material You visual system, translated from the Claude Artisan catalog for use in digital products. Dynamic color extracted from user wallpaper (tonal palettes); Larger rounded shapes, shape-morphing tokens

- **Category:** flat-platform
- **Era:** 2021–present
- **Origin:** Google; Material You (2021), Material 3 Expressive (Google I/O 2025).
- **Reference:** Android 12+; Google apps; Wear OS 5.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Dynamic color extracted from user wallpaper (tonal palettes)
- Larger rounded shapes, shape-morphing tokens
- Expressive spring-physics motion
- Design tokens as single source of truth; updated components

## Colors

- **bg** — #fef7ff
- **surface** — #fef7ff
- **surface-container** — #f3edf7
- **surface-variant** — #e7e0ec
- **text** — #1d1b20
- **text-muted** — #49454f
- **primary** — #6750a4
- **on-primary** — #ffffff
- **secondary** — #625b71
- **tertiary** — #7d5260
- **outline** — #79747e
- **error** — #b3261e

## Typography

- Display: 'Roboto Flex', 'Roboto', system-ui, sans-serif
- Body: 'Roboto', 'Roboto Flex', system-ui, sans-serif
- Mono: 'Roboto Mono', monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dynamic color extracted from user wallpaper (tonal palettes); Larger rounded shapes, shape-morphing tokens; Expressive spring-physics motion; Design tokens as single source of truth; updated components; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 12px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/material-design-3/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Material Design 3 / Material You — design tokens (generated from style_catalog.json) */
/* 2021–present | Google; Material You (2021), Material 3 Expressive (Google I/O 2025). */
:root {
/* color */
--color-bg: #fef7ff;
--color-surface: #fef7ff;
--color-surface-container: #f3edf7;
--color-surface-variant: #e7e0ec;
--color-text: #1d1b20;
--color-text-muted: #49454f;
--color-primary: #6750a4;
--color-on-primary: #ffffff;
--color-secondary: #625b71;
--color-tertiary: #7d5260;
--color-outline: #79747e;
--color-error: #b3261e;
/* radius */
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-e1: 0 1px 2px rgba(0,0,0,0.30), 0 1px 3px 1px rgba(0,0,0,0.15);
--shadow-e2: 0 1px 2px rgba(0,0,0,0.30), 0 2px 6px 2px rgba(0,0,0,0.15);
--shadow-e3: 0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.30);
/* font */
--font-sans: 'Roboto', 'Roboto Flex', system-ui, sans-serif;
--font-display: 'Roboto Flex', 'Roboto', system-ui, sans-serif;
--font-mono: 'Roboto Mono', monospace;
/* text */
--text-label-sm: 0.6875rem;
--text-label-md: 0.75rem;
--text-body-md: 0.875rem;
--text-body-lg: 1rem;
--text-title-md: 1rem;
--text-title-lg: 1.375rem;
--text-headline-md: 1.75rem;
--text-headline-lg: 2rem;
--text-display-md: 2.8125rem;
--text-display-lg: 3.5625rem;
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
--ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
--ease-spatial-expressive: cubic-bezier(0.38, 1.21, 0.22, 1);
/* extra (signature gradients, composite borders, filters) */
--state-hover: rgba(103,80,164,0.08);
--state-pressed: rgba(103,80,164,0.12);
}

/* ============================================================
Base component classes — Material Design 3 / Material You (token-driven).
Signature move lives in references/00-flagship-implementation-specs/material-design-3.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-e2);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-e2); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-e2); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #ffffff; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/material-design-3.md */
```

### Variables

```
--bg: #fef7ff, --fg: #1d1b20, --accent: #6750a4, --surface: #fef7ff, --radius: 12px, --spacing: 16px, --font-display: 'Roboto Flex', 'Roboto', system-ui, sans-serif, --font-body: 'Roboto', 'Roboto Flex', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fef7ff

#f3edf7

#e7e0ec

Secondary

#1d1b20

#49454f

#6750a4

#ffffff

#625b71

#7d5260

#79747e

#b3261e

### Effects

Dynamic color extracted from user wallpaper (tonal palettes), Larger rounded shapes, shape-morphing tokens, Expressive spring-physics motion, Design tokens as single source of truth; updated components, shadow, blur

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

- **Name:** Material Design 3 / Material You
- **Type:** claude-artisan/flat-platform
- **Keywords:** Material Design 3 / Material You, M3, Material You, M3 Expressive, Dynamic color extracted from user wallpaper (tonal palettes), Larger rounded shapes, shape-morphing tokens, Expressive spring-physics motion, Design tokens as single source of truth; updated components, flat-platform
- **Era:** 2021–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fef7ff, surface: #fef7ff, surface-container: #f3edf7, surface-variant: #e7e0ec
- **Secondary:** text: #1d1b20, text-muted: #49454f, primary: #6750a4, on-primary: #ffffff, secondary: #625b71, tertiary: #7d5260, outline: #79747e, error: #b3261e

## Visual Effects

Dynamic color extracted from user wallpaper (tonal palettes), Larger rounded shapes, shape-morphing tokens, Expressive spring-physics motion, Design tokens as single source of truth; updated components, shadow, blur

## AI Visual Direction

Material Design 3 / Material You, Dynamic color extracted from user wallpaper (tonal palettes), Larger rounded shapes, shape-morphing tokens, Expressive spring-physics motion, Design tokens as single source of truth; updated components, Android 12+; Google apps; Wear OS 5.

## CSS Technical

```css
/* Material Design 3 / Material You — design tokens (generated from style_catalog.json) */
/* 2021–present | Google; Material You (2021), Material 3 Expressive (Google I/O 2025). */
:root {
/* color */
--color-bg: #fef7ff;
--color-surface: #fef7ff;
--color-surface-container: #f3edf7;
--color-surface-variant: #e7e0ec;
--color-text: #1d1b20;
--color-text-muted: #49454f;
--color-primary: #6750a4;
--color-on-primary: #ffffff;
--color-secondary: #625b71;
--color-tertiary: #7d5260;
--color-outline: #79747e;
--color-error: #b3261e;
/* radius */
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-e1: 0 1px 2px rgba(0,0,0,0.30), 0 1px 3px 1px rgba(0,0,0,0.15);
--shadow-e2: 0 1px 2px rgba(0,0,0,0.30), 0 2px 6px 2px rgba(0,0,0,0.15);
--shadow-e3: 0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.30);
/* font */
--font-sans: 'Roboto', 'Roboto Flex', system-ui, sans-serif;
--font-display: 'Roboto Flex', 'Roboto', system-ui, sans-serif;
--font-mono: 'Roboto Mono', monospace;
/* text */
--text-label-sm: 0.6875rem;
--text-label-md: 0.75rem;
--text-body-md: 0.875rem;
--text-body-lg: 1rem;
--text-title-md: 1rem;
--text-title-lg: 1.375rem;
--text-headline-md: 1.75rem;
--text-headline-lg: 2rem;
--text-display-md: 2.8125rem;
--text-display-lg: 3.5625rem;
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
--ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
--ease-spatial-expressive: cubic-bezier(0.38, 1.21, 0.22, 1);
/* extra (signature gradients, composite borders, filters) */
--state-hover: rgba(103,80,164,0.08);
--state-pressed: rgba(103,80,164,0.12);
}

/* ============================================================
Base component classes — Material Design 3 / Material You (token-driven).
Signature move lives in references/00-flagship-implementation-specs/material-design-3.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-e2);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-e2); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-e2); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #ffffff; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/material-design-3.md */
```

## Design System Variables

```css
--bg: #fef7ff, --fg: #1d1b20, --accent: #6750a4, --surface: #fef7ff, --radius: 12px, --spacing: 16px, --font-display: 'Roboto Flex', 'Roboto', system-ui, sans-serif, --font-body: 'Roboto', 'Roboto Flex', system-ui, sans-serif
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

[![Material Design (M2)](https://designmd.app/images/library/678.png) Claude Artisan · Flat, material & plataformas ### Material Design (M2)](https://designmd.app/library/material-design)[![Fluent Design 2 (Fluent 2)](https://designmd.app/images/library/639.png) Claude Artisan · Flat, material & plataformas ### Fluent Design 2 (Fluent 2)](https://designmd.app/library/fluent-design-2)

Last synced: 8/30/2026
