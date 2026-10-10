# Material Design (M2)

- Source: <https://designmd.app/library/material-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:42.324Z

Claude Artisan · Flat, material & plataformas2014–2021

# Material Design (M2)

Reference for flat, material & plataformas Material Design (M2). Google, introduced 2014.

Material Design (M2)MaterialMaterial 2Material metaphor: paper and ink with real elevationConsistent shadow/elevation systemBold color, meaningful motion, grid-basedFloating action button, ripple feedbackflat-platform

Use case: shell de aplicação com navegação e cartões; Material metaphor: paper and ink with real elevation; Consistent shadow/elevation system

![Material Design (M2)](https://designmd.app/images/library/678.png)

## Historical Context

Google, introduced 2014. Example: Android; Google apps (2014–2021)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Material Design (M2)"
description: "Material Design (M2) visual system, translated from the Claude Artisan catalog for use in digital products. Material metaphor: paper and ink with real elevation; Consistent shadow/elevation system"
colors:
primary: "#6200ee"
background: "#fafafa"
surface: "#ffffff"
text: "#212121"
accent: "#03dac6"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Roboto', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Roboto', 'Segoe UI', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Roboto', 'Segoe UI', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
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

Material Design (M2) visual system, translated from the Claude Artisan catalog for use in digital products. Material metaphor: paper and ink with real elevation; Consistent shadow/elevation system

- **Category:** flat-platform
- **Era:** 2014–2021
- **Origin:** Google, introduced 2014.
- **Reference:** Android; Google apps (2014–2021).
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Material metaphor: paper and ink with real elevation
- Consistent shadow/elevation system
- Bold color, meaningful motion, grid-based
- Floating action button, ripple feedback

## Colors

- **bg** — #fafafa
- **surface** — #ffffff
- **surface-strong** — #eeeeee
- **border** — #e0e0e0
- **text** — #212121
- **text-muted** — #616161
- **primary** — #6200ee
- **accent** — #03dac6
- **primary-variant** — #3700b3
- **error** — #b00020

## Typography

- Display: 'Roboto', system-ui, sans-serif
- Body: 'Roboto', 'Segoe UI', system-ui, sans-serif
- Mono: 'Roboto Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Material metaphor: paper and ink with real elevation; Consistent shadow/elevation system; Bold color, meaningful motion, grid-based; Floating action button, ripple feedback; sombras e elevação

## Shapes

- Radius scale: 4px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/material-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Material Design (M2) — design tokens */
/* 2014–2021 | Google, introduced 2014, condensed */
:root {
/* color */
--color-bg: #fafafa;
--color-surface: #ffffff;
--color-surface-strong: #eeeeee;
--color-border: #e0e0e0;
--color-text: #212121;
--color-text-muted: #616161;
--color-primary: #6200ee;
--color-accent: #03dac6;
--color-primary-variant: #3700b3;
--color-error: #b00020;
/* radius */
--radius-sm: 4px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow: Material's real elevation system, 4 discrete levels */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.20), 0 1px 1px rgba(0,0,0,0.14);
--shadow-md: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
--shadow-lg: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
--shadow-fab: 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.20);
/* font */
--font-sans: 'Roboto', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Roboto', system-ui, sans-serif;
--font-mono: 'Roboto Mono', ui-monospace, monospace;
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
/* ease: Material's standard curve, decelerate entering / accelerate exiting */
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-entrance: cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0.0, 1, 1);
/* extra: paper-and-ink elevation — real box-shadow layers keyed to dp levels,
plus a ripple feedback radial-gradient */
--ripple: radial-gradient(circle, rgba(255,255,255,0.35) 10%, transparent 10.5%);
--elevation-1dp: 0 2px 1px -1px rgba(0,0,0,0.20), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12);
}

/* ============================================================
Base component classes — Material Design (M2)
Signature move: discrete elevation shadows (dp levels) as the ONLY depth
cue — paper sheets with real physics, no borders. Repeats on nav (2dp),
card (1dp resting → 8dp on hover), and the FAB-style primary button.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
box-shadow: var(--shadow-md); }
.btn { font: 500 var(--text-sm)/1 var(--font-sans); text-transform: uppercase; letter-spacing: .05em;
color: var(--color-primary); padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: transparent; border: none; cursor: pointer;
transition: box-shadow .2s var(--ease-standard), background-color .2s var(--ease-standard); }
.btn:hover { background-color: rgba(98,0,238,0.08); }
.btn:active { background-color: rgba(98,0,238,0.16); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; box-shadow: var(--shadow-fab); }
.btn--primary:hover { box-shadow: var(--shadow-lg); background: var(--color-primary-variant); }
.card { background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--elevation-1dp); padding: var(--space-6);
transition: box-shadow .2s var(--ease-standard); }
.card:hover { box-shadow: var(--shadow-lg); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm) var(--radius-sm) 0 0;
background: var(--color-surface-strong); border: none; border-bottom: 2px solid var(--color-text-muted); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: 2px solid var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 500;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #003731; }
@media (prefers-reduced-motion: reduce) { .btn, .card { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/material-design.md */
```

### Variables

```
--bg: #fafafa, --fg: #212121, --accent: #6200ee, --surface: #ffffff, --radius: 4px, --spacing: 16px, --font-display: 'Roboto', system-ui, sans-serif, --font-body: 'Roboto', 'Segoe UI', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fafafa

#ffffff

#eeeeee

#e0e0e0

Secondary

#212121

#616161

#6200ee

#03dac6

#3700b3

#b00020

### Effects

Material metaphor: paper and ink with real elevation, Consistent shadow/elevation system, Bold color, meaningful motion, grid-based, Floating action button, ripple feedback, shadow

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

- **Name:** Material Design (M2)
- **Type:** claude-artisan/flat-platform
- **Keywords:** Material Design (M2), Material, Material 2, Material metaphor: paper and ink with real elevation, Consistent shadow/elevation system, Bold color, meaningful motion, grid-based, Floating action button, ripple feedback, flat-platform
- **Era:** 2014–2021
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fafafa, surface: #ffffff, surface-strong: #eeeeee, border: #e0e0e0
- **Secondary:** text: #212121, text-muted: #616161, primary: #6200ee, accent: #03dac6, primary-variant: #3700b3, error: #b00020

## Visual Effects

Material metaphor: paper and ink with real elevation, Consistent shadow/elevation system, Bold color, meaningful motion, grid-based, Floating action button, ripple feedback, shadow

## AI Visual Direction

Material Design (M2), Material metaphor: paper and ink with real elevation, Consistent shadow/elevation system, Bold color, meaningful motion, grid-based, Floating action button, ripple feedback, Android; Google apps (2014–2021).

## CSS Technical

```css
/* Material Design (M2) — design tokens */
/* 2014–2021 | Google, introduced 2014, condensed */
:root {
/* color */
--color-bg: #fafafa;
--color-surface: #ffffff;
--color-surface-strong: #eeeeee;
--color-border: #e0e0e0;
--color-text: #212121;
--color-text-muted: #616161;
--color-primary: #6200ee;
--color-accent: #03dac6;
--color-primary-variant: #3700b3;
--color-error: #b00020;
/* radius */
--radius-sm: 4px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow: Material's real elevation system, 4 discrete levels */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.20), 0 1px 1px rgba(0,0,0,0.14);
--shadow-md: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
--shadow-lg: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
--shadow-fab: 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.20);
/* font */
--font-sans: 'Roboto', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Roboto', system-ui, sans-serif;
--font-mono: 'Roboto Mono', ui-monospace, monospace;
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
/* ease: Material's standard curve, decelerate entering / accelerate exiting */
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--ease-entrance: cubic-bezier(0.0, 0.0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0.0, 1, 1);
/* extra: paper-and-ink elevation — real box-shadow layers keyed to dp levels,
plus a ripple feedback radial-gradient */
--ripple: radial-gradient(circle, rgba(255,255,255,0.35) 10%, transparent 10.5%);
--elevation-1dp: 0 2px 1px -1px rgba(0,0,0,0.20), 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.12);
}

/* ============================================================
Base component classes — Material Design (M2)
Signature move: discrete elevation shadows (dp levels) as the ONLY depth
cue — paper sheets with real physics, no borders. Repeats on nav (2dp),
card (1dp resting → 8dp on hover), and the FAB-style primary button.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
box-shadow: var(--shadow-md); }
.btn { font: 500 var(--text-sm)/1 var(--font-sans); text-transform: uppercase; letter-spacing: .05em;
color: var(--color-primary); padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: transparent; border: none; cursor: pointer;
transition: box-shadow .2s var(--ease-standard), background-color .2s var(--ease-standard); }
.btn:hover { background-color: rgba(98,0,238,0.08); }
.btn:active { background-color: rgba(98,0,238,0.16); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; box-shadow: var(--shadow-fab); }
.btn--primary:hover { box-shadow: var(--shadow-lg); background: var(--color-primary-variant); }
.card { background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--elevation-1dp); padding: var(--space-6);
transition: box-shadow .2s var(--ease-standard); }
.card:hover { box-shadow: var(--shadow-lg); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm) var(--radius-sm) 0 0;
background: var(--color-surface-strong); border: none; border-bottom: 2px solid var(--color-text-muted); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: 2px solid var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 500;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #003731; }
@media (prefers-reduced-motion: reduce) { .btn, .card { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/material-design.md */
```

## Design System Variables

```css
--bg: #fafafa, --fg: #212121, --accent: #6200ee, --surface: #ffffff, --radius: 4px, --spacing: 16px, --font-display: 'Roboto', system-ui, sans-serif, --font-body: 'Roboto', 'Segoe UI', system-ui, sans-serif
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

[![Material Design 3 / Material You](https://designmd.app/images/library/679.png) Claude Artisan · Flat, material & plataformas ### Material Design 3 / Material You](https://designmd.app/library/material-design-3)[![Flat 2.0 / Semi-flat](https://designmd.app/images/library/638.png) Claude Artisan · Morphism & profundidade tátil ### Flat 2.0 / Semi-flat](https://designmd.app/library/flat-2)

Last synced: 8/30/2026
