# Adobe Spectrum

- Source: <https://designmd.app/library/spectrum>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:03.313Z

Claude Artisan · Flat, material & plataformas2019–present

# Adobe Spectrum

Reference for flat, material & plataformas Adobe Spectrum. Adobe.

Adobe SpectrumSpectrumCreative-tool oriented, neutral canvas-friendlyAdobe Clean typefaceCareful density scales (medium/large)Strong theming + accessibilityflat-platform

Use case: shell de aplicação com navegação e cartões; Creative-tool oriented, neutral canvas-friendly; Adobe Clean typeface

![Adobe Spectrum](https://designmd.app/images/library/723.png)

## Historical Context

Adobe. Example: Adobe Creative Cloud web apps..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Adobe Spectrum"
description: "Adobe Spectrum visual system, translated from the Claude Artisan catalog for use in digital products. Creative-tool oriented, neutral canvas-friendly; Adobe Clean typeface"
colors:
primary: "#1473e6"
background: "#ffffff"
surface: "#f8f8f8"
text: "#1f1f1f"
accent: "#9256d9"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
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

Adobe Spectrum visual system, translated from the Claude Artisan catalog for use in digital products. Creative-tool oriented, neutral canvas-friendly; Adobe Clean typeface

- **Category:** flat-platform
- **Era:** 2019–present
- **Origin:** Adobe.
- **Reference:** Adobe Creative Cloud web apps.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Creative-tool oriented, neutral canvas-friendly
- Adobe Clean typeface
- Careful density scales (medium/large)
- Strong theming + accessibility

## Colors

- **bg** — #ffffff
- **surface** — #f8f8f8
- **surface-strong** — #eaeaea
- **border** — #d5d5d5
- **text** — #1f1f1f
- **text-muted** — #5a5a5a
- **primary** — #1473e6
- **accent** — #9256d9
- **negative** — #e34850

## Typography

- Display: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif
- Body: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif
- Mono: 'Source Code Pro', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Creative-tool oriented, neutral canvas-friendly; Adobe Clean typeface; Careful density scales (medium/large); Strong theming + accessibility; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/spectrum/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Adobe Spectrum — design tokens */
/* 2019–present | Adobe, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #f8f8f8;
--color-surface-strong: #eaeaea;
--color-border: #d5d5d5;
--color-text: #1f1f1f;
--color-text-muted: #5a5a5a;
--color-primary: #1473e6;
--color-accent: #9256d9;
--color-negative: #e34850;
/* radius: small, careful, tool-chrome radii */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.10);
--shadow-md: 0 2px 8px rgba(0,0,0,0.12);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-focus-ring: 0 0 0 2px #ffffff, 0 0 0 4px var(--color-primary);
/* font */
--font-sans: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif;
--font-display: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif;
--font-mono: 'Source Code Pro', ui-monospace, monospace;
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
/* space: careful medium/large density scale */
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
--ease-standard: cubic-bezier(0.15, 0, 0.15, 1);
/* extra: precise two-color focus ring (white gap + brand ring), the signature Spectrum move */
--focus-ring: var(--shadow-focus-ring);
}

/* ============================================================
Base component classes — Adobe Spectrum
Signature move: a crisp two-layer focus ring (white gap + blue ring) and
compact 4/8px-grid radii, repeated on btn, input, and nav's active states.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); }
.btn {
font: 700 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: background .13s var(--ease-standard), box-shadow .13s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); }
.btn:active { background: #dedede; }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn[disabled] { opacity: .45; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
.btn--primary:hover { background: #0d66d0; }
.card { background: var(--color-bg); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-sm);
border: 1px solid var(--color-border); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: var(--color-bg); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .25em .7em; border-radius: var(--radius-pill); color: #fff; background: var(--color-primary); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/spectrum.md */
```

### Variables

```
--bg: #ffffff, --fg: #1f1f1f, --accent: #1473e6, --surface: #f8f8f8, --radius: 8px, --spacing: 16px, --font-display: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif, --font-body: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffffff

#f8f8f8

#eaeaea

#d5d5d5

Secondary

#1f1f1f

#5a5a5a

#1473e6

#9256d9

#e34850

### Effects

Creative-tool oriented, neutral canvas-friendly, Adobe Clean typeface, Careful density scales (medium/large), Strong theming + accessibility, shadow

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

- **Name:** Adobe Spectrum
- **Type:** claude-artisan/flat-platform
- **Keywords:** Adobe Spectrum, Spectrum, Creative-tool oriented, neutral canvas-friendly, Adobe Clean typeface, Careful density scales (medium/large), Strong theming + accessibility, flat-platform
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffffff, surface: #f8f8f8, surface-strong: #eaeaea, border: #d5d5d5
- **Secondary:** text: #1f1f1f, text-muted: #5a5a5a, primary: #1473e6, accent: #9256d9, negative: #e34850

## Visual Effects

Creative-tool oriented, neutral canvas-friendly, Adobe Clean typeface, Careful density scales (medium/large), Strong theming + accessibility, shadow

## AI Visual Direction

Adobe Spectrum, Creative-tool oriented, neutral canvas-friendly, Adobe Clean typeface, Careful density scales (medium/large), Strong theming + accessibility, Adobe Creative Cloud web apps.

## CSS Technical

```css
/* Adobe Spectrum — design tokens */
/* 2019–present | Adobe, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #f8f8f8;
--color-surface-strong: #eaeaea;
--color-border: #d5d5d5;
--color-text: #1f1f1f;
--color-text-muted: #5a5a5a;
--color-primary: #1473e6;
--color-accent: #9256d9;
--color-negative: #e34850;
/* radius: small, careful, tool-chrome radii */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.10);
--shadow-md: 0 2px 8px rgba(0,0,0,0.12);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.16);
--shadow-focus-ring: 0 0 0 2px #ffffff, 0 0 0 4px var(--color-primary);
/* font */
--font-sans: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif;
--font-display: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif;
--font-mono: 'Source Code Pro', ui-monospace, monospace;
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
/* space: careful medium/large density scale */
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
--ease-standard: cubic-bezier(0.15, 0, 0.15, 1);
/* extra: precise two-color focus ring (white gap + brand ring), the signature Spectrum move */
--focus-ring: var(--shadow-focus-ring);
}

/* ============================================================
Base component classes — Adobe Spectrum
Signature move: a crisp two-layer focus ring (white gap + blue ring) and
compact 4/8px-grid radii, repeated on btn, input, and nav's active states.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); }
.btn {
font: 700 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: background .13s var(--ease-standard), box-shadow .13s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); }
.btn:active { background: #dedede; }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn[disabled] { opacity: .45; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
.btn--primary:hover { background: #0d66d0; }
.card { background: var(--color-bg); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-sm);
border: 1px solid var(--color-border); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: var(--color-bg); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .25em .7em; border-radius: var(--radius-pill); color: #fff; background: var(--color-primary); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/spectrum.md */
```

## Design System Variables

```css
--bg: #ffffff, --fg: #1f1f1f, --accent: #1473e6, --surface: #f8f8f8, --radius: 8px, --spacing: 16px, --font-display: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif, --font-body: 'Adobe Clean', 'Source Sans Pro', system-ui, sans-serif
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

[![Carbon Design System](https://designmd.app/images/library/594.png) Claude Artisan · Flat, material & plataformas ### Carbon Design System](https://designmd.app/library/carbon-design)

Last synced: 8/30/2026
