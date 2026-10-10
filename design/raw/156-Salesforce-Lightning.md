# Salesforce Lightning

- Source: <https://designmd.app/library/lightning-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:24.304Z

Claude Artisan · Flat, material & plataformas2015–present

# Salesforce Lightning

Reference for flat, material & plataformas Salesforce Lightning. Salesforce.

Salesforce LightningSLDSLightning Design SystemEnterprise CRM density and consistencyToken-driven theming (SLDS)Data tables, utility iconsNeutral, professional paletteflat-platform

Use case: shell de aplicação com navegação e cartões; Enterprise CRM density and consistency; Token-driven theming (SLDS)

![Salesforce Lightning](https://designmd.app/images/library/668.png)

## Historical Context

Salesforce. Example: Salesforce Lightning Experience..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Salesforce Lightning"
description: "Salesforce Lightning visual system, translated from the Claude Artisan catalog for use in digital products. Enterprise CRM density and consistency; Token-driven theming (SLDS)"
colors:
primary: "#0176d3"
background: "#f3f3f3"
surface: "#ffffff"
text: "#181818"
accent: "#04844b"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Salesforce Sans', 'Inter', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Salesforce Sans', 'Inter', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Salesforce Sans', 'Inter', system-ui, sans-serif"
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

Salesforce Lightning visual system, translated from the Claude Artisan catalog for use in digital products. Enterprise CRM density and consistency; Token-driven theming (SLDS)

- **Category:** flat-platform
- **Era:** 2015–present
- **Origin:** Salesforce.
- **Reference:** Salesforce Lightning Experience.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Enterprise CRM density and consistency
- Token-driven theming (SLDS)
- Data tables, utility icons
- Neutral, professional palette

## Colors

- **bg** — #f3f3f3
- **surface** — #ffffff
- **surface-strong** — #f4f6f9
- **border** — #dddbda
- **text** — #181818
- **text-muted** — #706e6b
- **primary** — #0176d3
- **accent** — #04844b
- **danger** — #ba0517

## Typography

- Display: 'Salesforce Sans', 'Inter', system-ui, sans-serif
- Body: 'Salesforce Sans', 'Inter', system-ui, sans-serif
- Mono: ui-monospace, 'SFMono-Regular', monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Enterprise CRM density and consistency; Token-driven theming (SLDS); Data tables, utility icons; Neutral, professional palette; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/lightning-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Salesforce Lightning — design tokens */
/* 2015–present | Salesforce, condensed */
:root {
/* color */
--color-bg: #f3f3f3;
--color-surface: #ffffff;
--color-surface-strong: #f4f6f9;
--color-border: #dddbda;
--color-text: #181818;
--color-text-muted: #706e6b;
--color-primary: #0176d3;
--color-accent: #04844b;
--color-danger: #ba0517;
/* radius */
--radius-sm: 4px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.10);
--shadow-md: 0 2px 6px rgba(0,0,0,0.12);
--shadow-lg: 0 4px 14px rgba(0,0,0,0.14);
/* font */
--font-sans: 'Salesforce Sans', 'Inter', system-ui, sans-serif;
--font-display: 'Salesforce Sans', 'Inter', system-ui, sans-serif;
--font-mono: ui-monospace, 'SFMono-Regular', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.8125rem;
--text-base: 0.875rem;
--text-lg: 1rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
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
--space-24: 88px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: a 3px brand-blue top accent + hairline borders everywhere is the signature move */
--brand-rule: var(--color-primary);
}

/* ============================================================
Base component classes — Salesforce Lightning (SLDS)
Signature move: dense, hairline-bordered surfaces (1px solid on every
card/nav/input, near-zero radius) plus a 3px brand-blue top rule on
nav and card — reads as one consistent enterprise data system.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); font-size: var(--text-base);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-top: 3px solid var(--brand-rule); border-radius: var(--radius-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-primary);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { background: var(--color-surface-strong); box-shadow: var(--shadow-md); }
.btn:active { background: #eef4fa; }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 1px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-sm); border: 1px solid var(--color-border);
border-top: 3px solid var(--brand-rule); box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 1px var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .25em .7em; border-radius: var(--radius-pill); background: #e3f7ec; color: var(--color-accent);
border: 1px solid var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/lightning-design.md */
```

### Variables

```
--bg: #f3f3f3, --fg: #181818, --accent: #0176d3, --surface: #ffffff, --radius: 4px, --spacing: 16px, --font-display: 'Salesforce Sans', 'Inter', system-ui, sans-serif, --font-body: 'Salesforce Sans', 'Inter', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f3f3f3

#ffffff

#f4f6f9

#dddbda

Secondary

#181818

#706e6b

#0176d3

#04844b

#ba0517

### Effects

Enterprise CRM density and consistency, Token-driven theming (SLDS), Data tables, utility icons, Neutral, professional palette, shadow

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

- **Name:** Salesforce Lightning
- **Type:** claude-artisan/flat-platform
- **Keywords:** Salesforce Lightning, SLDS, Lightning Design System, Enterprise CRM density and consistency, Token-driven theming (SLDS), Data tables, utility icons, Neutral, professional palette, flat-platform
- **Era:** 2015–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f3f3f3, surface: #ffffff, surface-strong: #f4f6f9, border: #dddbda
- **Secondary:** text: #181818, text-muted: #706e6b, primary: #0176d3, accent: #04844b, danger: #ba0517

## Visual Effects

Enterprise CRM density and consistency, Token-driven theming (SLDS), Data tables, utility icons, Neutral, professional palette, shadow

## AI Visual Direction

Salesforce Lightning, Enterprise CRM density and consistency, Token-driven theming (SLDS), Data tables, utility icons, Neutral, professional palette, Salesforce Lightning Experience.

## CSS Technical

```css
/* Salesforce Lightning — design tokens */
/* 2015–present | Salesforce, condensed */
:root {
/* color */
--color-bg: #f3f3f3;
--color-surface: #ffffff;
--color-surface-strong: #f4f6f9;
--color-border: #dddbda;
--color-text: #181818;
--color-text-muted: #706e6b;
--color-primary: #0176d3;
--color-accent: #04844b;
--color-danger: #ba0517;
/* radius */
--radius-sm: 4px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.10);
--shadow-md: 0 2px 6px rgba(0,0,0,0.12);
--shadow-lg: 0 4px 14px rgba(0,0,0,0.14);
/* font */
--font-sans: 'Salesforce Sans', 'Inter', system-ui, sans-serif;
--font-display: 'Salesforce Sans', 'Inter', system-ui, sans-serif;
--font-mono: ui-monospace, 'SFMono-Regular', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.8125rem;
--text-base: 0.875rem;
--text-lg: 1rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
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
--space-24: 88px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: a 3px brand-blue top accent + hairline borders everywhere is the signature move */
--brand-rule: var(--color-primary);
}

/* ============================================================
Base component classes — Salesforce Lightning (SLDS)
Signature move: dense, hairline-bordered surfaces (1px solid on every
card/nav/input, near-zero radius) plus a 3px brand-blue top rule on
nav and card — reads as one consistent enterprise data system.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); font-size: var(--text-base);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-top: 3px solid var(--brand-rule); border-radius: var(--radius-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-primary);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { background: var(--color-surface-strong); box-shadow: var(--shadow-md); }
.btn:active { background: #eef4fa; }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 1px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-sm); border: 1px solid var(--color-border);
border-top: 3px solid var(--brand-rule); box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 1px var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .25em .7em; border-radius: var(--radius-pill); background: #e3f7ec; color: var(--color-accent);
border: 1px solid var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/lightning-design.md */
```

## Design System Variables

```css
--bg: #f3f3f3, --fg: #181818, --accent: #0176d3, --surface: #ffffff, --radius: 4px, --spacing: 16px, --font-display: 'Salesforce Sans', 'Inter', system-ui, sans-serif, --font-body: 'Salesforce Sans', 'Inter', system-ui, sans-serif
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

[![Carbon Design System](https://designmd.app/images/library/594.png) Claude Artisan · Flat, material & plataformas ### Carbon Design System](https://designmd.app/library/carbon-design)[![Ant Design](https://designmd.app/images/library/574.png) Claude Artisan · Flat, material & plataformas ### Ant Design](https://designmd.app/library/ant-design)

Last synced: 8/30/2026
