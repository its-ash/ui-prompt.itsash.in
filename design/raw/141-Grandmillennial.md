# Grandmillennial

- Source: <https://designmd.app/library/grandmillennial>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:00.321Z

Claude Artisan · Subculturas & estéticas de nicho2019–present

# Grandmillennial

Reference for subculturas & estéticas de nicho Grandmillennial. Millennial embrace of 'grandma' decor.

Grandmillennialgranny chicgrandmacoreChintz florals, ruffles, needlepointScalloped edges, toile, warm traditionalOrnate but cozyNostalgic maximal comfortniche

Use case: hero, superfície, conteúdo e grade responsiva; Chintz florals, ruffles, needlepoint; Scalloped edges, toile, warm traditional

![Grandmillennial](https://designmd.app/images/library/654.png)

## Historical Context

Millennial embrace of 'grandma' decor. Example: Grandmillennial interiors (House Beautiful)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Grandmillennial"
description: "Grandmillennial visual system, translated from the Claude Artisan catalog for use in digital products. Chintz florals, ruffles, needlepoint; Scalloped edges, toile, warm traditional"
colors:
primary: "#b3435a"
background: "#faf3e8"
surface: "#fffaf1"
text: "#3f2e22"
accent: "#4f7a5c"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Playfair Display', 'Cormorant Garamond', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Libre Franklin', 'Century Gothic', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Libre Franklin', 'Century Gothic', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "16px"
lg: "28px"
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

Grandmillennial visual system, translated from the Claude Artisan catalog for use in digital products. Chintz florals, ruffles, needlepoint; Scalloped edges, toile, warm traditional

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Millennial embrace of 'grandma' decor.
- **Reference:** Grandmillennial interiors (House Beautiful).
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Chintz florals, ruffles, needlepoint
- Scalloped edges, toile, warm traditional
- Ornate but cozy
- Nostalgic maximal comfort

## Colors

- **bg** — #faf3e8
- **surface** — #fffaf1
- **surface-strong** — #f5e6d3
- **border** — #d8b892
- **text** — #3f2e22
- **text-muted** — #6f5a45
- **primary** — #b3435a
- **accent** — #4f7a5c
- **gold** — #c8933f

## Typography

- Display: 'Playfair Display', 'Cormorant Garamond', serif
- Body: 'Libre Franklin', 'Century Gothic', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Chintz florals, ruffles, needlepoint; Scalloped edges, toile, warm traditional; Ornate but cozy; Nostalgic maximal comfort; sombras e elevação

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/grandmillennial/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Grandmillennial — design tokens */
/* 2019–present | Millennial embrace of 'grandma' decor, condensed */
:root {
/* color */
--color-bg: #faf3e8;
--color-surface: #fffaf1;
--color-surface-strong: #f5e6d3;
--color-border: #d8b892;
--color-text: #3f2e22;
--color-text-muted: #6f5a45;
--color-primary: #b3435a;
--color-accent: #4f7a5c;
--color-gold: #c8933f;
/* radius: scalloped/soft */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(63,46,34,0.12);
--shadow-md: 0 8px 18px rgba(63,46,34,0.16);
--shadow-lg: 0 16px 34px rgba(63,46,34,0.2);
/* font */
--font-sans: 'Libre Franklin', 'Century Gothic', sans-serif;
--font-display: 'Playfair Display', 'Cormorant Garamond', serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: a scalloped edge (radial-gradient repeating along the bottom
border) plus a chintz-floral ditsy dot pattern used as a subtle fill */
--scallop-edge: radial-gradient(circle at 10px 0, transparent 9px, var(--color-surface) 9.5px) 0 0/20px 12px repeat-x;
--ditsy-pattern: radial-gradient(var(--color-primary) 1.4px, transparent 1.6px) 0 0/18px 18px,
radial-gradient(var(--color-accent) 1px, transparent 1.2px) 9px 9px/18px 18px;
}

/* ============================================================
Base component classes — Grandmillennial
Signature move: a scalloped bottom edge (like a piecrust or doily trim)
repeated on the nav and every card, paired with a faint ditsy chintz
dot pattern printed low-opacity on card surfaces.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { position: relative; display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border-bottom: 3px solid var(--color-border); padding-bottom: calc(var(--space-4) + 10px); }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -10px; height: 12px; background: var(--scallop-edge); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); border-color: var(--color-primary); color: #fffaf1; }
.card { position: relative; background: var(--ditsy-pattern), var(--color-surface); border: 2px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
padding-bottom: calc(var(--space-6) + 10px); }
.card::after { content: ""; position: absolute; left: 8px; right: 8px; bottom: -8px; height: 12px; background: var(--scallop-edge); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(179,67,90,0.2); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-gold); color: #3f2e22; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/grandmillennial.md */
```

### Variables

```
--bg: #faf3e8, --fg: #3f2e22, --accent: #b3435a, --surface: #fffaf1, --radius: 16px, --spacing: 16px, --font-display: 'Playfair Display', 'Cormorant Garamond', serif, --font-body: 'Libre Franklin', 'Century Gothic', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#faf3e8

#fffaf1

#f5e6d3

#d8b892

Secondary

#3f2e22

#6f5a45

#b3435a

#4f7a5c

#c8933f

### Effects

Chintz florals, ruffles, needlepoint, Scalloped edges, toile, warm traditional, Ornate but cozy, Nostalgic maximal comfort, shadow

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

- **Name:** Grandmillennial
- **Type:** claude-artisan/niche
- **Keywords:** Grandmillennial, granny chic, grandmacore, Chintz florals, ruffles, needlepoint, Scalloped edges, toile, warm traditional, Ornate but cozy, Nostalgic maximal comfort, niche
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #faf3e8, surface: #fffaf1, surface-strong: #f5e6d3, border: #d8b892
- **Secondary:** text: #3f2e22, text-muted: #6f5a45, primary: #b3435a, accent: #4f7a5c, gold: #c8933f

## Visual Effects

Chintz florals, ruffles, needlepoint, Scalloped edges, toile, warm traditional, Ornate but cozy, Nostalgic maximal comfort, shadow

## AI Visual Direction

Grandmillennial, Chintz florals, ruffles, needlepoint, Scalloped edges, toile, warm traditional, Ornate but cozy, Nostalgic maximal comfort, Grandmillennial interiors (House Beautiful).

## CSS Technical

```css
/* Grandmillennial — design tokens */
/* 2019–present | Millennial embrace of 'grandma' decor, condensed */
:root {
/* color */
--color-bg: #faf3e8;
--color-surface: #fffaf1;
--color-surface-strong: #f5e6d3;
--color-border: #d8b892;
--color-text: #3f2e22;
--color-text-muted: #6f5a45;
--color-primary: #b3435a;
--color-accent: #4f7a5c;
--color-gold: #c8933f;
/* radius: scalloped/soft */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(63,46,34,0.12);
--shadow-md: 0 8px 18px rgba(63,46,34,0.16);
--shadow-lg: 0 16px 34px rgba(63,46,34,0.2);
/* font */
--font-sans: 'Libre Franklin', 'Century Gothic', sans-serif;
--font-display: 'Playfair Display', 'Cormorant Garamond', serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: a scalloped edge (radial-gradient repeating along the bottom
border) plus a chintz-floral ditsy dot pattern used as a subtle fill */
--scallop-edge: radial-gradient(circle at 10px 0, transparent 9px, var(--color-surface) 9.5px) 0 0/20px 12px repeat-x;
--ditsy-pattern: radial-gradient(var(--color-primary) 1.4px, transparent 1.6px) 0 0/18px 18px,
radial-gradient(var(--color-accent) 1px, transparent 1.2px) 9px 9px/18px 18px;
}

/* ============================================================
Base component classes — Grandmillennial
Signature move: a scalloped bottom edge (like a piecrust or doily trim)
repeated on the nav and every card, paired with a faint ditsy chintz
dot pattern printed low-opacity on card surfaces.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { position: relative; display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border-bottom: 3px solid var(--color-border); padding-bottom: calc(var(--space-4) + 10px); }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -10px; height: 12px; background: var(--scallop-edge); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); border-color: var(--color-primary); color: #fffaf1; }
.card { position: relative; background: var(--ditsy-pattern), var(--color-surface); border: 2px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
padding-bottom: calc(var(--space-6) + 10px); }
.card::after { content: ""; position: absolute; left: 8px; right: 8px; bottom: -8px; height: 12px; background: var(--scallop-edge); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(179,67,90,0.2); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-gold); color: #3f2e22; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/grandmillennial.md */
```

## Design System Variables

```css
--bg: #faf3e8, --fg: #3f2e22, --accent: #b3435a, --surface: #fffaf1, --radius: 16px, --spacing: 16px, --font-display: 'Playfair Display', 'Cormorant Garamond', serif, --font-body: 'Libre Franklin', 'Century Gothic', sans-serif
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

[![Cottagecore](https://designmd.app/images/library/605.png) Claude Artisan · Subculturas & estéticas de nicho ### Cottagecore](https://designmd.app/library/cottagecore)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)[![Maximalism](https://designmd.app/images/library/680.png) Claude Artisan · Minimal, maximal & orgânico ### Maximalism](https://designmd.app/library/maximalism)

Last synced: 8/30/2026
