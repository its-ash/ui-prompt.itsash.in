# Atlassian Design System

- Source: <https://designmd.app/library/atlassian-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:04.277Z

Claude Artisan · Flat, material & plataformas2017–present

# Atlassian Design System

Reference for flat, material & plataformas Atlassian Design System. Atlassian.

Atlassian Design SystemADSAtlassianFriendly-professional productivity toneBlue/neutral palette, clear hierarchyStrong content + accessibility guidanceComponentized (Atlaskit)flat-platform

Use case: hero, superfície, conteúdo e grade responsiva; Friendly-professional productivity tone; Blue/neutral palette, clear hierarchy

![Atlassian Design System](https://designmd.app/images/library/581.png)

## Historical Context

Atlassian. Example: Jira; Confluence; Trello..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Atlassian Design System"
description: "Atlassian Design System visual system, translated from the Claude Artisan catalog for use in digital products. Friendly-professional productivity tone; Blue/neutral palette, clear hierarchy"
colors:
primary: "#0052cc"
background: "#f7f8f9"
surface: "#ffffff"
text: "#172b4d"
accent: "#36b37e"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Charlie Sans', 'Segoe UI', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "3px"
md: "6px"
lg: "10px"
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

Atlassian Design System visual system, translated from the Claude Artisan catalog for use in digital products. Friendly-professional productivity tone; Blue/neutral palette, clear hierarchy

- **Category:** flat-platform
- **Era:** 2017–present
- **Origin:** Atlassian.
- **Reference:** Jira; Confluence; Trello.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Friendly-professional productivity tone
- Blue/neutral palette, clear hierarchy
- Strong content + accessibility guidance
- Componentized (Atlaskit)

## Colors

- **bg** — #f7f8f9
- **surface** — #ffffff
- **surface-strong** — #f1f2f4
- **border** — #dcdfe4
- **text** — #172b4d
- **text-muted** — #44546f
- **primary** — #0052cc
- **accent** — #36b37e

## Typography

- Display: 'Charlie Sans', 'Segoe UI', system-ui, sans-serif
- Body: 'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif
- Mono: 'SFMono-Regular', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Friendly-professional productivity tone; Blue/neutral palette, clear hierarchy; Strong content + accessibility guidance; Componentized (Atlaskit); sombras e elevação

## Shapes

- Radius scale: 3px, 6px, 10px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/atlassian-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Atlassian Design System — design tokens */
/* 2017–present | Atlassian, condensed */
:root {
/* color */
--color-bg: #f7f8f9;
--color-surface: #ffffff;
--color-surface-strong: #f1f2f4;
--color-border: #dcdfe4;
--color-text: #172b4d;
--color-text-muted: #44546f;
--color-primary: #0052cc;
--color-accent: #36b37e;
/* radius */
--radius-sm: 3px;
--radius-md: 6px;
--radius-lg: 10px;
--radius-pill: 999px;
/* shadow — subtle elevation system, never dramatic */
--shadow-sm: 0 1px 2px rgba(9,30,66,0.13);
--shadow-md: 0 4px 8px rgba(9,30,66,0.14), 0 0 1px rgba(9,30,66,0.28);
--shadow-lg: 0 8px 16px rgba(9,30,66,0.16), 0 0 1px rgba(9,30,66,0.31);
/* font */
--font-sans: 'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif;
--font-display: 'Charlie Sans', 'Segoe UI', system-ui, sans-serif;
--font-mono: 'SFMono-Regular', ui-monospace, monospace;
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
/* extra — signature focus ring + subtle top accent bar on elevated surfaces */
--focus-ring: 0 0 0 2px rgba(0,82,204,0.4);
--accent-bar: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}

/* ============================================================
Base component classes — Atlassian Design System
Signature move: a thin two-color accent bar (blue → green) capping raised
surfaces, plus a consistent low-elevation shadow scale. Repeated on nav,
card, and the primary button's focus ring.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); box-shadow: var(--shadow-sm); position: relative; }
.nav::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-bar); }
.btn {
font: 600 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid transparent;
cursor: pointer; transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { background: #e9ebef; }
.btn:active { background: #dcdfe4; }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.btn--primary:hover { background: #0747a6; }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; overflow: hidden; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-bar); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); background: var(--color-surface);
border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: #e3fcef; color: #006644; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/atlassian-design.md */
```

### Variables

```
--bg: #f7f8f9, --fg: #172b4d, --accent: #0052cc, --surface: #ffffff, --radius: 6px, --spacing: 16px, --font-display: 'Charlie Sans', 'Segoe UI', system-ui, sans-serif, --font-body: 'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f7f8f9

#ffffff

#f1f2f4

#dcdfe4

Secondary

#172b4d

#44546f

#0052cc

#36b37e

### Effects

Friendly-professional productivity tone, Blue/neutral palette, clear hierarchy, Strong content + accessibility guidance, Componentized (Atlaskit), shadow

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

- **Name:** Atlassian Design System
- **Type:** claude-artisan/flat-platform
- **Keywords:** Atlassian Design System, ADS, Atlassian, Friendly-professional productivity tone, Blue/neutral palette, clear hierarchy, Strong content + accessibility guidance, Componentized (Atlaskit), flat-platform
- **Era:** 2017–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f7f8f9, surface: #ffffff, surface-strong: #f1f2f4, border: #dcdfe4
- **Secondary:** text: #172b4d, text-muted: #44546f, primary: #0052cc, accent: #36b37e

## Visual Effects

Friendly-professional productivity tone, Blue/neutral palette, clear hierarchy, Strong content + accessibility guidance, Componentized (Atlaskit), shadow

## AI Visual Direction

Atlassian Design System, Friendly-professional productivity tone, Blue/neutral palette, clear hierarchy, Strong content + accessibility guidance, Componentized (Atlaskit), Jira; Confluence; Trello.

## CSS Technical

```css
/* Atlassian Design System — design tokens */
/* 2017–present | Atlassian, condensed */
:root {
/* color */
--color-bg: #f7f8f9;
--color-surface: #ffffff;
--color-surface-strong: #f1f2f4;
--color-border: #dcdfe4;
--color-text: #172b4d;
--color-text-muted: #44546f;
--color-primary: #0052cc;
--color-accent: #36b37e;
/* radius */
--radius-sm: 3px;
--radius-md: 6px;
--radius-lg: 10px;
--radius-pill: 999px;
/* shadow — subtle elevation system, never dramatic */
--shadow-sm: 0 1px 2px rgba(9,30,66,0.13);
--shadow-md: 0 4px 8px rgba(9,30,66,0.14), 0 0 1px rgba(9,30,66,0.28);
--shadow-lg: 0 8px 16px rgba(9,30,66,0.16), 0 0 1px rgba(9,30,66,0.31);
/* font */
--font-sans: 'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif;
--font-display: 'Charlie Sans', 'Segoe UI', system-ui, sans-serif;
--font-mono: 'SFMono-Regular', ui-monospace, monospace;
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
/* extra — signature focus ring + subtle top accent bar on elevated surfaces */
--focus-ring: 0 0 0 2px rgba(0,82,204,0.4);
--accent-bar: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}

/* ============================================================
Base component classes — Atlassian Design System
Signature move: a thin two-color accent bar (blue → green) capping raised
surfaces, plus a consistent low-elevation shadow scale. Repeated on nav,
card, and the primary button's focus ring.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); box-shadow: var(--shadow-sm); position: relative; }
.nav::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-bar); }
.btn {
font: 600 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid transparent;
cursor: pointer; transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { background: #e9ebef; }
.btn:active { background: #dcdfe4; }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.btn--primary:hover { background: #0747a6; }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; overflow: hidden; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--accent-bar); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); background: var(--color-surface);
border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: #e3fcef; color: #006644; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/atlassian-design.md */
```

## Design System Variables

```css
--bg: #f7f8f9, --fg: #172b4d, --accent: #0052cc, --surface: #ffffff, --radius: 6px, --spacing: 16px, --font-display: 'Charlie Sans', 'Segoe UI', system-ui, sans-serif, --font-body: 'Charlie Sans', 'Segoe UI', system-ui, -apple-system, sans-serif
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

[![Shopify Polaris](https://designmd.app/images/library/698.png) Claude Artisan · Flat, material & plataformas ### Shopify Polaris](https://designmd.app/library/polaris)[![Carbon Design System](https://designmd.app/images/library/594.png) Claude Artisan · Flat, material & plataformas ### Carbon Design System](https://designmd.app/library/carbon-design)

Last synced: 8/30/2026
