# VSCO Girl

- Source: <https://designmd.app/library/vsco-girl>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:50.258Z

Claude Artisan · Subculturas & estéticas de nicho2019

# VSCO Girl

Reference for subculturas & estéticas de nicho VSCO Girl. Summer-2019 teen aesthetic (named after VSCO app).

VSCO Girl2019 aestheticsoft summerFaded warm film-filter photosScrunchies, Hydro Flasks, seashellsBeige/teal beachy paletteCasual, sunny, laid-backniche

Use case: hero, superfície, conteúdo e grade responsiva; Faded warm film-filter photos; Scrunchies, Hydro Flasks, seashells

![VSCO Girl](https://designmd.app/images/library/750.png)

## Historical Context

Summer-2019 teen aesthetic (named after VSCO app). Example: 2019 VSCO/TikTok trend..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "VSCO Girl"
description: "VSCO Girl visual system, translated from the Claude Artisan catalog for use in digital products. Faded warm film-filter photos; Scrunchies, Hydro Flasks, seashells"
colors:
primary: "#6fa8a3"
background: "#f3ece1"
surface: "#fbf7f0"
text: "#4a4038"
accent: "#e8a598"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Caveat', 'Poppins', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Poppins', 'Segoe UI', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Poppins', 'Segoe UI', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "18px"
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

VSCO Girl visual system, translated from the Claude Artisan catalog for use in digital products. Faded warm film-filter photos; Scrunchies, Hydro Flasks, seashells

- **Category:** niche
- **Era:** 2019
- **Origin:** Summer-2019 teen aesthetic (named after VSCO app).
- **Reference:** 2019 VSCO/TikTok trend.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Faded warm film-filter photos
- Scrunchies, Hydro Flasks, seashells
- Beige/teal beachy palette
- Casual, sunny, laid-back

## Colors

- **bg** — #f3ece1
- **surface** — #fbf7f0
- **surface-strong** — #ece2d0
- **border** — #d8c9ae
- **text** — #4a4038
- **text-muted** — #8a7c68
- **primary** — #6fa8a3
- **accent** — #e8a598
- **shell** — #f0d9c0

## Typography

- Display: 'Caveat', 'Poppins', cursive
- Body: 'Poppins', 'Segoe UI', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Faded warm film-filter photos; Scrunchies, Hydro Flasks, seashells; Beige/teal beachy palette; Casual, sunny, laid-back; sombras e elevação

## Shapes

- Radius scale: 10px, 18px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/vsco-girl/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* VSCO Girl — design tokens */
/* 2019 | Summer-2019 teen aesthetic (named after VSCO app), condensed */
:root {
/* color */
--color-bg: #f3ece1;
--color-surface: #fbf7f0;
--color-surface-strong: #ece2d0;
--color-border: #d8c9ae;
--color-text: #4a4038;
--color-text-muted: #8a7c68;
--color-primary: #6fa8a3;
--color-accent: #e8a598;
--color-shell: #f0d9c0;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(74,64,56,0.08);
--shadow-md: 0 6px 18px rgba(74,64,56,0.12);
--shadow-lg: 0 12px 32px rgba(74,64,56,0.15);
/* font */
--font-sans: 'Poppins', 'Segoe UI', sans-serif;
--font-display: 'Caveat', 'Poppins', cursive;
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
--ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--faded-wash: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(232,165,152,0.15));
--scrunchie-underline: 3px dashed var(--color-accent);
--film-grain-opacity: 0.05;
}

/* ============================================================
Base component classes — VSCO Girl
Signature move: a soft washed-out overlay (--faded-wash) on every raised
surface, like a warm film filter, paired with a scrunchie-dashed accent
underline on links/badges. Repeats on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); background-image: var(--faded-wash); border-radius: var(--radius-pill);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); background-image: var(--faded-wash); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); background-image: var(--faded-wash); }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); background-image: var(--faded-wash);
border-bottom: var(--scrunchie-underline); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(111,168,163,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-shell); color: var(--color-text);
border-bottom: var(--scrunchie-underline); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/vsco-girl.md */
```

### Variables

```
--bg: #f3ece1, --fg: #4a4038, --accent: #6fa8a3, --surface: #fbf7f0, --radius: 18px, --spacing: 16px, --font-display: 'Caveat', 'Poppins', cursive, --font-body: 'Poppins', 'Segoe UI', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f3ece1

#fbf7f0

#ece2d0

#d8c9ae

Secondary

#4a4038

#8a7c68

#6fa8a3

#e8a598

#f0d9c0

### Effects

Faded warm film-filter photos, Scrunchies, Hydro Flasks, seashells, Beige/teal beachy palette, Casual, sunny, laid-back, shadow

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

- **Name:** VSCO Girl
- **Type:** claude-artisan/niche
- **Keywords:** VSCO Girl, 2019 aesthetic, soft summer, Faded warm film-filter photos, Scrunchies, Hydro Flasks, seashells, Beige/teal beachy palette, Casual, sunny, laid-back, niche
- **Era:** 2019
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f3ece1, surface: #fbf7f0, surface-strong: #ece2d0, border: #d8c9ae
- **Secondary:** text: #4a4038, text-muted: #8a7c68, primary: #6fa8a3, accent: #e8a598, shell: #f0d9c0

## Visual Effects

Faded warm film-filter photos, Scrunchies, Hydro Flasks, seashells, Beige/teal beachy palette, Casual, sunny, laid-back, shadow

## AI Visual Direction

VSCO Girl, Faded warm film-filter photos, Scrunchies, Hydro Flasks, seashells, Beige/teal beachy palette, Casual, sunny, laid-back, 2019 VSCO/TikTok trend.

## CSS Technical

```css
/* VSCO Girl — design tokens */
/* 2019 | Summer-2019 teen aesthetic (named after VSCO app), condensed */
:root {
/* color */
--color-bg: #f3ece1;
--color-surface: #fbf7f0;
--color-surface-strong: #ece2d0;
--color-border: #d8c9ae;
--color-text: #4a4038;
--color-text-muted: #8a7c68;
--color-primary: #6fa8a3;
--color-accent: #e8a598;
--color-shell: #f0d9c0;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(74,64,56,0.08);
--shadow-md: 0 6px 18px rgba(74,64,56,0.12);
--shadow-lg: 0 12px 32px rgba(74,64,56,0.15);
/* font */
--font-sans: 'Poppins', 'Segoe UI', sans-serif;
--font-display: 'Caveat', 'Poppins', cursive;
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
--ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--faded-wash: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(232,165,152,0.15));
--scrunchie-underline: 3px dashed var(--color-accent);
--film-grain-opacity: 0.05;
}

/* ============================================================
Base component classes — VSCO Girl
Signature move: a soft washed-out overlay (--faded-wash) on every raised
surface, like a warm film filter, paired with a scrunchie-dashed accent
underline on links/badges. Repeats on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); background-image: var(--faded-wash); border-radius: var(--radius-pill);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); background-image: var(--faded-wash); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); background-image: var(--faded-wash); }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); background-image: var(--faded-wash);
border-bottom: var(--scrunchie-underline); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(111,168,163,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-shell); color: var(--color-text);
border-bottom: var(--scrunchie-underline); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/vsco-girl.md */
```

## Design System Variables

```css
--bg: #f3ece1, --fg: #4a4038, --accent: #6fa8a3, --surface: #fbf7f0, --radius: 18px, --spacing: 16px, --font-display: 'Caveat', 'Poppins', cursive, --font-body: 'Poppins', 'Segoe UI', sans-serif
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

[![Nostalgiacore](https://designmd.app/images/library/691.png) Claude Artisan · Subculturas & estéticas de nicho ### Nostalgiacore](https://designmd.app/library/nostalgiacore)[![Cottagecore](https://designmd.app/images/library/605.png) Claude Artisan · Subculturas & estéticas de nicho ### Cottagecore](https://designmd.app/library/cottagecore)

Last synced: 8/30/2026
