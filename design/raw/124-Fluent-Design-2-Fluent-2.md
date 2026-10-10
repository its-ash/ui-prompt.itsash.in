# Fluent Design 2 (Fluent 2)

- Source: <https://designmd.app/library/fluent-design-2>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:32.318Z

Claude Artisan · Flat, material & plataformas2017–present

# Fluent Design 2 (Fluent 2)

Reference for flat, material & plataformas Fluent Design 2 (Fluent 2). Microsoft; Fluent (2017), Fluent 2 refresh (2021+ for Windows 11).

Fluent Design 2 (Fluent 2)FluentFluent Design SystemWindows 11 designFive fundamentals: light, depth, motion, material, scaleMaterials: solid, Mica, Acrylic, SmokeMica tints long-lived surfaces with desktop colorReveal highlight, subtle depth, rounded cornersflat-platform

Use case: grade modular responsiva; Five fundamentals: light, depth, motion, material, scale; Materials: solid, Mica, Acrylic, Smoke

![Fluent Design 2 (Fluent 2)](https://designmd.app/images/library/639.png)

## Historical Context

Microsoft; Fluent (2017), Fluent 2 refresh (2021+ for Windows 11). Example: Windows 11; Microsoft 365; Teams..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Fluent Design 2 (Fluent 2)"
description: "Fluent Design 2 (Fluent 2) visual system, translated from the Claude Artisan catalog for use in digital products. Five fundamentals: light, depth, motion, material, scale; Materials: solid, Mica, Acrylic, Smoke"
colors:
primary: "#0f6cbd"
background: "#f3f3f3"
surface: "#f3f3f3"
text: "#1b1b1b"
accent: "#005fb8"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Segoe UI Variable Display', 'Segoe UI', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
lg: "12px"
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

Fluent Design 2 (Fluent 2) visual system, translated from the Claude Artisan catalog for use in digital products. Five fundamentals: light, depth, motion, material, scale; Materials: solid, Mica, Acrylic, Smoke

- **Category:** flat-platform
- **Era:** 2017–present
- **Origin:** Microsoft; Fluent (2017), Fluent 2 refresh (2021+ for Windows 11).
- **Reference:** Windows 11; Microsoft 365; Teams.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Five fundamentals: light, depth, motion, material, scale
- Materials: solid, Mica, Acrylic, Smoke
- Mica tints long-lived surfaces with desktop color
- Reveal highlight, subtle depth, rounded corners

## Colors

- **bg** — #f3f3f3
- **surface** — rgba(255,255,255,0.70)
- **mica** — rgba(243,243,243,0.85)
- **acrylic** — rgba(252,252,252,0.60)
- **text** — #1b1b1b
- **text-muted** — #616161
- **primary** — #0f6cbd
- **accent** — #005fb8
- **stroke** — rgba(0,0,0,0.10)

## Typography

- Display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif
- Body: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif
- Mono: 'Cascadia Code', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Five fundamentals: light, depth, motion, material, scale; Materials: solid, Mica, Acrylic, Smoke; Mica tints long-lived surfaces with desktop color; Reveal highlight, subtle depth, rounded corners; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 8px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/fluent-design-2/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Fluent Design 2 (Fluent 2) — design tokens (generated from style_catalog.json) */
/* 2017–present | Microsoft; Fluent (2017), Fluent 2 refresh (2021+ for Windows 11). */
:root {
/* color */
--color-bg: #f3f3f3;
--color-surface: rgba(255,255,255,0.70);
--color-mica: rgba(243,243,243,0.85);
--color-acrylic: rgba(252,252,252,0.60);
--color-text: #1b1b1b;
--color-text-muted: #616161;
--color-primary: #0f6cbd;
--color-accent: #005fb8;
--color-stroke: rgba(0,0,0,0.10);
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.14);
--shadow-md: 0 8px 16px rgba(0,0,0,0.14);
--shadow-lg: 0 32px 64px rgba(0,0,0,0.19);
--shadow-card-stroke: inset 0 0 0 1px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(0,0,0,0.10);
/* blur */
--blur-acrylic: 30px;
--blur-acrylic-thin: 60px;
/* font */
--font-sans: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif;
--font-mono: 'Cascadia Code', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.33, 0, 0.67, 1);
--ease-decel: cubic-bezier(0.1, 0.9, 0.2, 1);
--ease-accel: cubic-bezier(0.7, 0, 1, 0.5);
/* extra (signature gradients, composite borders, filters) */
--acrylic-noise: 0.02;
--reveal-highlight: radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.35), transparent 60%);
}

/* ============================================================
Base component classes — Fluent Design 2 (Fluent 2) (token-driven).
Signature move lives in references/00-flagship-implementation-specs/fluent-design-2.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-md);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-md); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-md); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(1.05); }
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

/* Especificação de referência: references/00-flagship-implementation-specs/fluent-design-2.md */
```

### Variables

```
--bg: #f3f3f3, --fg: #1b1b1b, --accent: #0f6cbd, --surface: #f3f3f3, --radius: 8px, --spacing: 16px, --font-display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif, --font-body: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f3f3f3

Secondary

#1b1b1b

#616161

#0f6cbd

#005fb8

### Effects

Five fundamentals: light, depth, motion, material, scale, Materials: solid, Mica, Acrylic, Smoke, Mica tints long-lived surfaces with desktop color, Reveal highlight, subtle depth, rounded corners, shadow, blur

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

- **Name:** Fluent Design 2 (Fluent 2)
- **Type:** claude-artisan/flat-platform
- **Keywords:** Fluent Design 2 (Fluent 2), Fluent, Fluent Design System, Windows 11 design, Five fundamentals: light, depth, motion, material, scale, Materials: solid, Mica, Acrylic, Smoke, Mica tints long-lived surfaces with desktop color, Reveal highlight, subtle depth, rounded corners, flat-platform
- **Era:** 2017–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f3f3f3, surface: rgba(255,255,255,0.70), mica: rgba(243,243,243,0.85), acrylic: rgba(252,252,252,0.60)
- **Secondary:** text: #1b1b1b, text-muted: #616161, primary: #0f6cbd, accent: #005fb8, stroke: rgba(0,0,0,0.10)

## Visual Effects

Five fundamentals: light, depth, motion, material, scale, Materials: solid, Mica, Acrylic, Smoke, Mica tints long-lived surfaces with desktop color, Reveal highlight, subtle depth, rounded corners, shadow, blur

## AI Visual Direction

Fluent Design 2 (Fluent 2), Five fundamentals: light, depth, motion, material, scale, Materials: solid, Mica, Acrylic, Smoke, Mica tints long-lived surfaces with desktop color, Reveal highlight, subtle depth, rounded corners, Windows 11; Microsoft 365; Teams.

## CSS Technical

```css
/* Fluent Design 2 (Fluent 2) — design tokens (generated from style_catalog.json) */
/* 2017–present | Microsoft; Fluent (2017), Fluent 2 refresh (2021+ for Windows 11). */
:root {
/* color */
--color-bg: #f3f3f3;
--color-surface: rgba(255,255,255,0.70);
--color-mica: rgba(243,243,243,0.85);
--color-acrylic: rgba(252,252,252,0.60);
--color-text: #1b1b1b;
--color-text-muted: #616161;
--color-primary: #0f6cbd;
--color-accent: #005fb8;
--color-stroke: rgba(0,0,0,0.10);
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.14);
--shadow-md: 0 8px 16px rgba(0,0,0,0.14);
--shadow-lg: 0 32px 64px rgba(0,0,0,0.19);
--shadow-card-stroke: inset 0 0 0 1px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(0,0,0,0.10);
/* blur */
--blur-acrylic: 30px;
--blur-acrylic-thin: 60px;
/* font */
--font-sans: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif;
--font-mono: 'Cascadia Code', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.33, 0, 0.67, 1);
--ease-decel: cubic-bezier(0.1, 0.9, 0.2, 1);
--ease-accel: cubic-bezier(0.7, 0, 1, 0.5);
/* extra (signature gradients, composite borders, filters) */
--acrylic-noise: 0.02;
--reveal-highlight: radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.35), transparent 60%);
}

/* ============================================================
Base component classes — Fluent Design 2 (Fluent 2) (token-driven).
Signature move lives in references/00-flagship-implementation-specs/fluent-design-2.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-md);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-md); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-md); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(1.05); }
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

/* Especificação de referência: references/00-flagship-implementation-specs/fluent-design-2.md */
```

## Design System Variables

```css
--bg: #f3f3f3, --fg: #1b1b1b, --accent: #0f6cbd, --surface: #f3f3f3, --radius: 8px, --spacing: 16px, --font-display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif, --font-body: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif
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

[![Material Design 3 / Material You](https://designmd.app/images/library/679.png) Claude Artisan · Flat, material & plataformas ### Material Design 3 / Material You](https://designmd.app/library/material-design-3)[![Acrylic (Fluent Material)](https://designmd.app/images/library/564.png) Claude Artisan · Vidro & transparência ### Acrylic (Fluent Material)](https://designmd.app/library/acrylic-fluent)

Last synced: 8/30/2026
