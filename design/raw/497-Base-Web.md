# Base Web

- Source: <https://designmd.app/library/base-web>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:39.300Z

Claude Artisan · Flat, material & plataformas2018–present

# Base Web

Reference for flat, material & plataformas Base Web. Uber.

Base WebBaseUber BaseHighly themeable primitivesNeutral, functional, mobility-app rootsStrong theming tokensAccessible componentsflat-platform

Use case: shell de aplicação com navegação e cartões; Highly themeable primitives; Neutral, functional, mobility-app roots

![Base Web](https://designmd.app/images/library/586.png)

## Historical Context

Uber. Example: Uber web products..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Base Web"
description: "Base Web visual system, translated from the Claude Artisan catalog for use in digital products. Highly themeable primitives; Neutral, functional, mobility-app roots"
colors:
primary: "#276ef1"
background: "#ffffff"
surface: "#ffffff"
text: "#000000"
accent: "#06c167"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Uber Move', 'Helvetica Neue', Arial, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Uber Move', 'Helvetica Neue', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Uber Move', 'Helvetica Neue', Arial, sans-serif"
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

Base Web visual system, translated from the Claude Artisan catalog for use in digital products. Highly themeable primitives; Neutral, functional, mobility-app roots

- **Category:** flat-platform
- **Era:** 2018–present
- **Origin:** Uber.
- **Reference:** Uber web products.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Highly themeable primitives
- Neutral, functional, mobility-app roots
- Strong theming tokens
- Accessible components

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #f6f6f6
- **border** — #e2e2e2
- **text** — #000000
- **text-muted** — #5e5e5e
- **primary** — #276ef1
- **accent** — #06c167

## Typography

- Display: 'Uber Move', 'Helvetica Neue', Arial, sans-serif
- Body: 'Uber Move', 'Helvetica Neue', Arial, sans-serif
- Mono: 'Uber Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Highly themeable primitives; Neutral, functional, mobility-app roots; Strong theming tokens; Accessible components; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/base-web/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Base Web — design tokens */
/* 2018–present | Uber, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #f6f6f6;
--color-border: #e2e2e2;
--color-text: #000000;
--color-text-muted: #5e5e5e;
--color-primary: #276ef1;
--color-accent: #06c167;
/* radius — highly themeable primitives, modest consistent rounding */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
--shadow-md: 0 4px 12px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 24px rgba(0,0,0,0.12);
/* font */
--font-sans: 'Uber Move', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Uber Move', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'Uber Mono', ui-monospace, monospace;
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
/* extra — signature: primitives ship with a themeable CSS-var seam (--seam) that
product teams override; the seam shows as a 3px underline accent on focus states */
--seam: var(--color-primary);
--seam-underline: 3px solid var(--seam);
}

/* ============================================================
Base component classes — Base Web
Signature move: an unobtrusive functional system whose one recognizable
trait is the "seam" — a solid 3px underline in the current theme color
that marks active/focus state, never decoration. Repeated on nav (active
link), input (focus), and the primary button (bottom accent).
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 1px solid var(--color-border); }
.btn {
font: 600 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { background: #ececec; }
.btn:active { background: #e2e2e2; }
.btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--color-primary); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary);
box-shadow: 0 -3px 0 0 var(--color-accent) inset; }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); background: var(--color-surface);
border: 1px solid var(--color-border); border-bottom: var(--seam-underline); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(39,110,241,0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: #e8f0fe; color: var(--color-primary); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/base-web.md */
```

### Variables

```
--bg: #ffffff, --fg: #000000, --accent: #276ef1, --surface: #ffffff, --radius: 8px, --spacing: 16px, --font-display: 'Uber Move', 'Helvetica Neue', Arial, sans-serif, --font-body: 'Uber Move', 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffffff

#f6f6f6

#e2e2e2

Secondary

#000000

#5e5e5e

#276ef1

#06c167

### Effects

Highly themeable primitives, Neutral, functional, mobility-app roots, Strong theming tokens, Accessible components, shadow

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

- **Name:** Base Web
- **Type:** claude-artisan/flat-platform
- **Keywords:** Base Web, Base, Uber Base, Highly themeable primitives, Neutral, functional, mobility-app roots, Strong theming tokens, Accessible components, flat-platform
- **Era:** 2018–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffffff, surface: #ffffff, surface-strong: #f6f6f6, border: #e2e2e2
- **Secondary:** text: #000000, text-muted: #5e5e5e, primary: #276ef1, accent: #06c167

## Visual Effects

Highly themeable primitives, Neutral, functional, mobility-app roots, Strong theming tokens, Accessible components, shadow

## AI Visual Direction

Base Web, Highly themeable primitives, Neutral, functional, mobility-app roots, Strong theming tokens, Accessible components, Uber web products.

## CSS Technical

```css
/* Base Web — design tokens */
/* 2018–present | Uber, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #f6f6f6;
--color-border: #e2e2e2;
--color-text: #000000;
--color-text-muted: #5e5e5e;
--color-primary: #276ef1;
--color-accent: #06c167;
/* radius — highly themeable primitives, modest consistent rounding */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
--shadow-md: 0 4px 12px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 24px rgba(0,0,0,0.12);
/* font */
--font-sans: 'Uber Move', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Uber Move', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'Uber Mono', ui-monospace, monospace;
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
/* extra — signature: primitives ship with a themeable CSS-var seam (--seam) that
product teams override; the seam shows as a 3px underline accent on focus states */
--seam: var(--color-primary);
--seam-underline: 3px solid var(--seam);
}

/* ============================================================
Base component classes — Base Web
Signature move: an unobtrusive functional system whose one recognizable
trait is the "seam" — a solid 3px underline in the current theme color
that marks active/focus state, never decoration. Repeated on nav (active
link), input (focus), and the primary button (bottom accent).
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 1px solid var(--color-border); }
.btn {
font: 600 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { background: #ececec; }
.btn:active { background: #e2e2e2; }
.btn:focus-visible { outline: none; box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--color-primary); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary);
box-shadow: 0 -3px 0 0 var(--color-accent) inset; }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); background: var(--color-surface);
border: 1px solid var(--color-border); border-bottom: var(--seam-underline); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(39,110,241,0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: #e8f0fe; color: var(--color-primary); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/base-web.md */
```

## Design System Variables

```css
--bg: #ffffff, --fg: #000000, --accent: #276ef1, --surface: #ffffff, --radius: 8px, --spacing: 16px, --font-display: 'Uber Move', 'Helvetica Neue', Arial, sans-serif, --font-body: 'Uber Move', 'Helvetica Neue', Arial, sans-serif
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
