# Shopify Polaris

- Source: <https://designmd.app/library/polaris>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:16.311Z

Claude Artisan · Flat, material & plataformas2017–present

# Shopify Polaris

Reference for flat, material & plataformas Shopify Polaris. Shopify.

Shopify PolarisPolarisMerchant-admin focused, calm and legibleCard-based layouts, clear affordancesAccessible, restrained colorContent guidelines baked inflat-platform

Use case: hero, superfície, conteúdo e grade responsiva; Merchant-admin focused, calm and legible; Card-based layouts, clear affordances

![Shopify Polaris](https://designmd.app/images/library/698.png)

## Historical Context

Shopify. Example: Shopify admin..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Shopify Polaris"
description: "Shopify Polaris visual system, translated from the Claude Artisan catalog for use in digital products. Merchant-admin focused, calm and legible; Card-based layouts, clear affordances"
colors:
primary: "#008060"
background: "#f1f2f4"
surface: "#ffffff"
text: "#1a1c1d"
accent: "#2c6ecb"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "-apple-system, 'Segoe UI', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "-apple-system, 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "-apple-system, 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "8px"
lg: "12px"
spacing:
sm: "8px"
md: "16px"
lg: "28px"
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
padding: "20px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "16px"
---
## Overview

Shopify Polaris visual system, translated from the Claude Artisan catalog for use in digital products. Merchant-admin focused, calm and legible; Card-based layouts, clear affordances

- **Category:** flat-platform
- **Era:** 2017–present
- **Origin:** Shopify.
- **Reference:** Shopify admin.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Merchant-admin focused, calm and legible
- Card-based layouts, clear affordances
- Accessible, restrained color
- Content guidelines baked in

## Colors

- **bg** — #f1f2f4
- **surface** — #ffffff
- **surface-strong** — #f6f6f7
- **border** — #d2d5d9
- **text** — #1a1c1d
- **text-muted** — #5c5f62
- **primary** — #008060
- **accent** — #2c6ecb
- **critical** — #d82c0d

## Typography

- Display: -apple-system, 'Segoe UI', system-ui, sans-serif
- Body: -apple-system, 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, 'SFMono-Regular', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Merchant-admin focused, calm and legible; Card-based layouts, clear affordances; Accessible, restrained color; Content guidelines baked in; sombras e elevação

## Shapes

- Radius scale: 6px, 8px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/polaris/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Shopify Polaris — design tokens */
/* 2017–present | Shopify, condensed */
:root {
/* color: calm, restrained, accessible merchant-admin palette */
--color-bg: #f1f2f4;
--color-surface: #ffffff;
--color-surface-strong: #f6f6f7;
--color-border: #d2d5d9;
--color-text: #1a1c1d;
--color-text-muted: #5c5f62;
--color-primary: #008060;
--color-accent: #2c6ecb;
--color-critical: #d82c0d;
/* radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(26, 28, 29, 0.05);
--shadow-md: 0 1px 3px rgba(26, 28, 29, 0.1), 0 1px 2px rgba(26,28,29,0.06);
--shadow-lg: 0 4px 10px rgba(26, 28, 29, 0.12);
/* font */
--font-sans: -apple-system, 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif;
--font-display: -apple-system, 'Segoe UI', system-ui, sans-serif;
--font-mono: ui-monospace, 'SFMono-Regular', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.8125rem;
--text-base: 0.875rem;
--text-lg: 1rem;
--text-xl: 1.25rem;
--text-2xl: 1.625rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3.25rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 20px;
--space-8: 28px;
--space-12: 40px;
--space-16: 56px;
--space-24: 80px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: card-based content-zone edge + focus ring token */
--focus-ring: 0 0 0 4px rgba(0, 91, 211, 0.24);
--card-divider: 1px solid var(--color-border);
}

/* ============================================================
Base component classes — Shopify Polaris
Signature move: flat card-based layout with a single thin 1px border
(no heavy shadow) that repeats identically on nav, card and input — the
"quiet affordance" that keeps admin screens legible and calm.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-md);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); }
.btn:active { background: #edeeef; }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.btn--primary:hover { background: #006e52; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
border: 1px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--focus-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .75em; border-radius: var(--radius-pill); background: #e3f1df; color: #0c5132;
border: 1px solid #b4e0be; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/polaris.md */
```

### Variables

```
--bg: #f1f2f4, --fg: #1a1c1d, --accent: #008060, --surface: #ffffff, --radius: 8px, --spacing: 16px, --font-display: -apple-system, 'Segoe UI', system-ui, sans-serif, --font-body: -apple-system, 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f1f2f4

#ffffff

#f6f6f7

#d2d5d9

Secondary

#1a1c1d

#5c5f62

#008060

#2c6ecb

#d82c0d

### Effects

Merchant-admin focused, calm and legible, Card-based layouts, clear affordances, Accessible, restrained color, Content guidelines baked in, shadow

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

- **Name:** Shopify Polaris
- **Type:** claude-artisan/flat-platform
- **Keywords:** Shopify Polaris, Polaris, Merchant-admin focused, calm and legible, Card-based layouts, clear affordances, Accessible, restrained color, Content guidelines baked in, flat-platform
- **Era:** 2017–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f1f2f4, surface: #ffffff, surface-strong: #f6f6f7, border: #d2d5d9
- **Secondary:** text: #1a1c1d, text-muted: #5c5f62, primary: #008060, accent: #2c6ecb, critical: #d82c0d

## Visual Effects

Merchant-admin focused, calm and legible, Card-based layouts, clear affordances, Accessible, restrained color, Content guidelines baked in, shadow

## AI Visual Direction

Shopify Polaris, Merchant-admin focused, calm and legible, Card-based layouts, clear affordances, Accessible, restrained color, Content guidelines baked in, Shopify admin.

## CSS Technical

```css
/* Shopify Polaris — design tokens */
/* 2017–present | Shopify, condensed */
:root {
/* color: calm, restrained, accessible merchant-admin palette */
--color-bg: #f1f2f4;
--color-surface: #ffffff;
--color-surface-strong: #f6f6f7;
--color-border: #d2d5d9;
--color-text: #1a1c1d;
--color-text-muted: #5c5f62;
--color-primary: #008060;
--color-accent: #2c6ecb;
--color-critical: #d82c0d;
/* radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(26, 28, 29, 0.05);
--shadow-md: 0 1px 3px rgba(26, 28, 29, 0.1), 0 1px 2px rgba(26,28,29,0.06);
--shadow-lg: 0 4px 10px rgba(26, 28, 29, 0.12);
/* font */
--font-sans: -apple-system, 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif;
--font-display: -apple-system, 'Segoe UI', system-ui, sans-serif;
--font-mono: ui-monospace, 'SFMono-Regular', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.8125rem;
--text-base: 0.875rem;
--text-lg: 1rem;
--text-xl: 1.25rem;
--text-2xl: 1.625rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3.25rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 20px;
--space-8: 28px;
--space-12: 40px;
--space-16: 56px;
--space-24: 80px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: card-based content-zone edge + focus ring token */
--focus-ring: 0 0 0 4px rgba(0, 91, 211, 0.24);
--card-divider: 1px solid var(--color-border);
}

/* ============================================================
Base component classes — Shopify Polaris
Signature move: flat card-based layout with a single thin 1px border
(no heavy shadow) that repeats identically on nav, card and input — the
"quiet affordance" that keeps admin screens legible and calm.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-md);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); }
.btn:active { background: #edeeef; }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.btn--primary:hover { background: #006e52; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
border: 1px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--focus-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .75em; border-radius: var(--radius-pill); background: #e3f1df; color: #0c5132;
border: 1px solid #b4e0be; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/polaris.md */
```

## Design System Variables

```css
--bg: #f1f2f4, --fg: #1a1c1d, --accent: #008060, --surface: #ffffff, --radius: 8px, --spacing: 16px, --font-display: -apple-system, 'Segoe UI', system-ui, sans-serif, --font-body: -apple-system, 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif
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

[![Carbon Design System](https://designmd.app/images/library/594.png) Claude Artisan · Flat, material & plataformas ### Carbon Design System](https://designmd.app/library/carbon-design)[![Atlassian Design System](https://designmd.app/images/library/581.png) Claude Artisan · Flat, material & plataformas ### Atlassian Design System](https://designmd.app/library/atlassian-design)

Last synced: 8/30/2026
