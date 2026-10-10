# Cottagecore

- Source: <https://designmd.app/library/cottagecore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:35.306Z

Claude Artisan · Subculturas & estéticas de nicho2018–present (peak 2020)

# Cottagecore

Reference for subculturas & estéticas de nicho Cottagecore. Tumblr/TikTok idealized rural life.

CottagecorefarmcorecountrycoreSoft floral, gingham, pastoral palettesMushrooms, wildflowers, baking, cottagesHandwritten/serif type, warm nostalgiaCozy, wholesome, slow-livingniche

Use case: hero, superfície, conteúdo e grade responsiva; Soft floral, gingham, pastoral palettes; Mushrooms, wildflowers, baking, cottages

![Cottagecore](https://designmd.app/images/library/605.png)

## Historical Context

Tumblr/TikTok idealized rural life. Example: Cottagecore Tumblr; 'Anne with an E' moodboards..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Cottagecore"
description: "Cottagecore visual system, translated from the Claude Artisan catalog for use in digital products. Soft floral, gingham, pastoral palettes; Mushrooms, wildflowers, baking, cottages"
colors:
primary: "#7a8450"
background: "#f6f0e3"
surface: "#fffdf7"
text: "#3f3423"
accent: "#c1694f"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Playfair Display', 'Lora', Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Nunito', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Nunito', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "12px"
lg: "20px"
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

Cottagecore visual system, translated from the Claude Artisan catalog for use in digital products. Soft floral, gingham, pastoral palettes; Mushrooms, wildflowers, baking, cottages

- **Category:** niche
- **Era:** 2018–present (peak 2020)
- **Origin:** Tumblr/TikTok idealized rural life.
- **Reference:** Cottagecore Tumblr; 'Anne with an E' moodboards.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Soft floral, gingham, pastoral palettes
- Mushrooms, wildflowers, baking, cottages
- Handwritten/serif type, warm nostalgia
- Cozy, wholesome, slow-living

## Colors

- **bg** — #f6f0e3
- **surface** — #fffdf7
- **surface-strong** — #ede2c8
- **border** — #b8a473
- **text** — #3f3423
- **text-muted** — #6b5c3f
- **primary** — #7a8450
- **accent** — #c1694f
- **gingham** — rgba(122, 132, 80, 0.16)

## Typography

- Display: 'Playfair Display', 'Lora', Georgia, serif
- Body: 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Soft floral, gingham, pastoral palettes; Mushrooms, wildflowers, baking, cottages; Handwritten/serif type, warm nostalgia; Cozy, wholesome, slow-living; sombras e elevação

## Shapes

- Radius scale: 6px, 12px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/cottagecore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Cottagecore — design tokens */
/* 2018–present (peak 2020) | Tumblr/TikTok idealized rural life, condensed */
:root {
/* color */
--color-bg: #f6f0e3;
--color-surface: #fffdf7;
--color-surface-strong: #ede2c8;
--color-border: #b8a473;
--color-text: #3f3423;
--color-text-muted: #6b5c3f;
--color-primary: #7a8450;
--color-accent: #c1694f;
--color-gingham: rgba(122, 132, 80, 0.16);
/* radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 5px rgba(63, 52, 35, 0.10);
--shadow-md: 0 6px 14px rgba(63, 52, 35, 0.14);
--shadow-lg: 0 12px 26px rgba(63, 52, 35, 0.16);
/* font */
--font-sans: 'Nunito', system-ui, sans-serif;
--font-display: 'Playfair Display', 'Lora', Georgia, serif;
--font-script: 'Caveat', cursive;
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
--ease-entrance: cubic-bezier(0, 0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
/* extra: gingham checker weave + wildflower accent border */
--gingham-check: repeating-linear-gradient(90deg, var(--color-gingham) 0 8px, transparent 8px 16px),
repeating-linear-gradient(0deg, var(--color-gingham) 0 8px, transparent 8px 16px);
--stitch-border: 2px dashed var(--color-border);
}

/* ============================================================
Base component classes — Cottagecore
Signature move: a soft gingham-check weave background + a
dashed "stitched" border, repeated across nav, card, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--gingham-check); border-bottom: var(--stitch-border); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--stitch-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fffdf7; border-color: var(--color-primary); }
.card {
background: var(--color-surface); background-image: var(--gingham-check);
border: var(--stitch-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--stitch-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(122, 132, 80, 0.20); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 600 var(--text-xs) var(--font-sans);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-text); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cottagecore.md */
```

### Variables

```
--bg: #f6f0e3, --fg: #3f3423, --accent: #7a8450, --surface: #fffdf7, --radius: 12px, --spacing: 16px, --font-display: 'Playfair Display', 'Lora', Georgia, serif, --font-body: 'Nunito', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f6f0e3

#fffdf7

#ede2c8

#b8a473

Secondary

#3f3423

#6b5c3f

#7a8450

#c1694f

### Effects

Soft floral, gingham, pastoral palettes, Mushrooms, wildflowers, baking, cottages, Handwritten/serif type, warm nostalgia, Cozy, wholesome, slow-living, shadow

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

- **Name:** Cottagecore
- **Type:** claude-artisan/niche
- **Keywords:** Cottagecore, farmcore, countrycore, Soft floral, gingham, pastoral palettes, Mushrooms, wildflowers, baking, cottages, Handwritten/serif type, warm nostalgia, Cozy, wholesome, slow-living, niche
- **Era:** 2018–present (peak 2020)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f6f0e3, surface: #fffdf7, surface-strong: #ede2c8, border: #b8a473
- **Secondary:** text: #3f3423, text-muted: #6b5c3f, primary: #7a8450, accent: #c1694f, gingham: rgba(122, 132, 80, 0.16)

## Visual Effects

Soft floral, gingham, pastoral palettes, Mushrooms, wildflowers, baking, cottages, Handwritten/serif type, warm nostalgia, Cozy, wholesome, slow-living, shadow

## AI Visual Direction

Cottagecore, Soft floral, gingham, pastoral palettes, Mushrooms, wildflowers, baking, cottages, Handwritten/serif type, warm nostalgia, Cozy, wholesome, slow-living, Cottagecore Tumblr; 'Anne with an E' moodboards.

## CSS Technical

```css
/* Cottagecore — design tokens */
/* 2018–present (peak 2020) | Tumblr/TikTok idealized rural life, condensed */
:root {
/* color */
--color-bg: #f6f0e3;
--color-surface: #fffdf7;
--color-surface-strong: #ede2c8;
--color-border: #b8a473;
--color-text: #3f3423;
--color-text-muted: #6b5c3f;
--color-primary: #7a8450;
--color-accent: #c1694f;
--color-gingham: rgba(122, 132, 80, 0.16);
/* radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 5px rgba(63, 52, 35, 0.10);
--shadow-md: 0 6px 14px rgba(63, 52, 35, 0.14);
--shadow-lg: 0 12px 26px rgba(63, 52, 35, 0.16);
/* font */
--font-sans: 'Nunito', system-ui, sans-serif;
--font-display: 'Playfair Display', 'Lora', Georgia, serif;
--font-script: 'Caveat', cursive;
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
--ease-entrance: cubic-bezier(0, 0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
/* extra: gingham checker weave + wildflower accent border */
--gingham-check: repeating-linear-gradient(90deg, var(--color-gingham) 0 8px, transparent 8px 16px),
repeating-linear-gradient(0deg, var(--color-gingham) 0 8px, transparent 8px 16px);
--stitch-border: 2px dashed var(--color-border);
}

/* ============================================================
Base component classes — Cottagecore
Signature move: a soft gingham-check weave background + a
dashed "stitched" border, repeated across nav, card, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--gingham-check); border-bottom: var(--stitch-border); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--stitch-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fffdf7; border-color: var(--color-primary); }
.card {
background: var(--color-surface); background-image: var(--gingham-check);
border: var(--stitch-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--stitch-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(122, 132, 80, 0.20); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 600 var(--text-xs) var(--font-sans);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-text); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cottagecore.md */
```

## Design System Variables

```css
--bg: #f6f0e3, --fg: #3f3423, --accent: #7a8450, --surface: #fffdf7, --radius: 12px, --spacing: 16px, --font-display: 'Playfair Display', 'Lora', Georgia, serif, --font-body: 'Nunito', system-ui, sans-serif
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

[![Light Academia](https://designmd.app/images/library/667.png) Claude Artisan · Subculturas & estéticas de nicho ### Light Academia](https://designmd.app/library/light-academia)[![Fairycore](https://designmd.app/images/library/633.png) Claude Artisan · Subculturas & estéticas de nicho ### Fairycore](https://designmd.app/library/fairycore)[![Goblincore](https://designmd.app/images/library/647.png) Claude Artisan · Subculturas & estéticas de nicho ### Goblincore](https://designmd.app/library/goblincore)

Last synced: 8/30/2026
