# Cluttercore

- Source: <https://designmd.app/library/cluttercore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:28.317Z

Claude Artisan · Subculturas & estéticas de nicho2020–present

# Cluttercore

Reference for subculturas & estéticas de nicho Cluttercore. Cozy maximalist embrace of visible stuff.

Cluttercoremore is more decormaximal cozyDensely layered objects, books, trinketsWarm eclectic clutter, no empty spacePersonal, lived-in, collectedComfort in abundanceniche

Use case: hero, superfície, conteúdo e grade responsiva; Densely layered objects, books, trinkets; Warm eclectic clutter, no empty space

![Cluttercore](https://designmd.app/images/library/601.png)

## Historical Context

Cozy maximalist embrace of visible stuff. Example: Cluttercore home tours..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Cluttercore"
description: "Cluttercore visual system, translated from the Claude Artisan catalog for use in digital products. Densely layered objects, books, trinkets; Warm eclectic clutter, no empty space"
colors:
primary: "#b23a48"
background: "#e8d9c0"
surface: "#fff8ec"
text: "#2b1d14"
accent: "#d99a2b"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Fraunces', 'DM Serif Display', Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Nunito', 'Poppins', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Nunito', 'Poppins', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "14px"
lg: "22px"
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

Cluttercore visual system, translated from the Claude Artisan catalog for use in digital products. Densely layered objects, books, trinkets; Warm eclectic clutter, no empty space

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Cozy maximalist embrace of visible stuff.
- **Reference:** Cluttercore home tours.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Densely layered objects, books, trinkets
- Warm eclectic clutter, no empty space
- Personal, lived-in, collected
- Comfort in abundance

## Colors

- **bg** — #e8d9c0
- **surface** — #fff8ec
- **surface-strong** — #f4e8d0
- **border** — #2b1d14
- **text** — #2b1d14
- **text-muted** — #5c4632
- **primary** — #b23a48
- **accent** — #d99a2b
- **teal** — #2f6f6a
- **forest** — #4c7a5e

## Typography

- Display: 'Fraunces', 'DM Serif Display', Georgia, serif
- Body: 'Nunito', 'Poppins', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Densely layered objects, books, trinkets; Warm eclectic clutter, no empty space; Personal, lived-in, collected; Comfort in abundance; sombras e elevação

## Shapes

- Radius scale: 8px, 14px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/cluttercore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Cluttercore — design tokens */
/* 2020–present | Cozy maximalist embrace of visible stuff, condensed */
:root {
/* color: warm eclectic collected-object palette */
--color-bg: #e8d9c0;
--color-surface: #fff8ec;
--color-surface-strong: #f4e8d0;
--color-border: #2b1d14;
--color-text: #2b1d14;
--color-text-muted: #5c4632;
--color-primary: #b23a48;
--color-accent: #d99a2b;
--color-teal: #2f6f6a;
--color-forest: #4c7a5e;
/* radius: rounded like worn trinkets, never sharp */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow: stacked layers, mimicking piles of objects */
--shadow-sm: 2px 2px 0 var(--color-border), 5px 5px 0 rgba(43,29,20,0.15);
--shadow-md: 3px 3px 0 var(--color-border), 8px 8px 0 rgba(43,29,20,0.15), 12px 12px 0 rgba(43,29,20,0.08);
--shadow-lg: 4px 4px 0 var(--color-border), 11px 11px 0 rgba(43,29,20,0.16), 18px 18px 0 rgba(43,29,20,0.08);
/* font: cozy serif display + friendly sans body */
--font-sans: 'Nunito', 'Poppins', system-ui, sans-serif;
--font-display: 'Fraunces', 'DM Serif Display', Georgia, serif;
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
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
/* extra: dense layered dot-and-plaid clutter pattern + a sticker-corner
badge stack — the signature "no empty space" move */
--clutter-pattern:
radial-gradient(circle, var(--color-primary) 1.5px, transparent 2px) 0 0/26px 26px,
radial-gradient(circle, var(--color-teal) 1.5px, transparent 2px) 13px 13px/26px 26px,
repeating-linear-gradient(45deg, rgba(217,154,43,0.10) 0 6px, transparent 6px 18px);
--sticker-tilt: rotate(-4deg);
}

/* ============================================================
Base component classes — Cluttercore
Signature move: a dense layered pattern (polka dots + diagonal plaid,
all built from gradients) filling every background, plus a triple-
stacked "pile of objects" shadow — repeats on nav, card, and badge so
the whole surface feels collected and lived-in, never empty.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); background-image: var(--clutter-pattern); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--clutter-pattern);
border: 2px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-sm); margin: var(--space-4);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: 1px 1px 0 var(--color-border); }
.btn:focus-visible { outline: 3px solid var(--color-teal); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: var(--shadow-sm); }
.btn--primary { background: var(--color-primary); color: #fff8ec; border-color: var(--color-border); }
.card {
background: var(--color-surface); color: var(--color-text);
background-image: var(--clutter-pattern);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 2px solid var(--color-border); box-shadow: var(--shadow-lg);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-teal);
box-shadow: var(--shadow-sm), 0 0 0 3px rgba(47,111,106,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #2b1d14; border: 2px solid var(--color-border); transform: var(--sticker-tilt); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cluttercore.md */
```

### Variables

```
--bg: #e8d9c0, --fg: #2b1d14, --accent: #b23a48, --surface: #fff8ec, --radius: 14px, --spacing: 16px, --font-display: 'Fraunces', 'DM Serif Display', Georgia, serif, --font-body: 'Nunito', 'Poppins', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#e8d9c0

#fff8ec

#f4e8d0

#2b1d14

Secondary

#2b1d14

#5c4632

#b23a48

#d99a2b

#2f6f6a

#4c7a5e

### Effects

Densely layered objects, books, trinkets, Warm eclectic clutter, no empty space, Personal, lived-in, collected, Comfort in abundance, shadow

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

- **Name:** Cluttercore
- **Type:** claude-artisan/niche
- **Keywords:** Cluttercore, more is more decor, maximal cozy, Densely layered objects, books, trinkets, Warm eclectic clutter, no empty space, Personal, lived-in, collected, Comfort in abundance, niche
- **Era:** 2020–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #e8d9c0, surface: #fff8ec, surface-strong: #f4e8d0, border: #2b1d14
- **Secondary:** text: #2b1d14, text-muted: #5c4632, primary: #b23a48, accent: #d99a2b, teal: #2f6f6a, forest: #4c7a5e

## Visual Effects

Densely layered objects, books, trinkets, Warm eclectic clutter, no empty space, Personal, lived-in, collected, Comfort in abundance, shadow

## AI Visual Direction

Cluttercore, Densely layered objects, books, trinkets, Warm eclectic clutter, no empty space, Personal, lived-in, collected, Comfort in abundance, Cluttercore home tours.

## CSS Technical

```css
/* Cluttercore — design tokens */
/* 2020–present | Cozy maximalist embrace of visible stuff, condensed */
:root {
/* color: warm eclectic collected-object palette */
--color-bg: #e8d9c0;
--color-surface: #fff8ec;
--color-surface-strong: #f4e8d0;
--color-border: #2b1d14;
--color-text: #2b1d14;
--color-text-muted: #5c4632;
--color-primary: #b23a48;
--color-accent: #d99a2b;
--color-teal: #2f6f6a;
--color-forest: #4c7a5e;
/* radius: rounded like worn trinkets, never sharp */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow: stacked layers, mimicking piles of objects */
--shadow-sm: 2px 2px 0 var(--color-border), 5px 5px 0 rgba(43,29,20,0.15);
--shadow-md: 3px 3px 0 var(--color-border), 8px 8px 0 rgba(43,29,20,0.15), 12px 12px 0 rgba(43,29,20,0.08);
--shadow-lg: 4px 4px 0 var(--color-border), 11px 11px 0 rgba(43,29,20,0.16), 18px 18px 0 rgba(43,29,20,0.08);
/* font: cozy serif display + friendly sans body */
--font-sans: 'Nunito', 'Poppins', system-ui, sans-serif;
--font-display: 'Fraunces', 'DM Serif Display', Georgia, serif;
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
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
/* extra: dense layered dot-and-plaid clutter pattern + a sticker-corner
badge stack — the signature "no empty space" move */
--clutter-pattern:
radial-gradient(circle, var(--color-primary) 1.5px, transparent 2px) 0 0/26px 26px,
radial-gradient(circle, var(--color-teal) 1.5px, transparent 2px) 13px 13px/26px 26px,
repeating-linear-gradient(45deg, rgba(217,154,43,0.10) 0 6px, transparent 6px 18px);
--sticker-tilt: rotate(-4deg);
}

/* ============================================================
Base component classes — Cluttercore
Signature move: a dense layered pattern (polka dots + diagonal plaid,
all built from gradients) filling every background, plus a triple-
stacked "pile of objects" shadow — repeats on nav, card, and badge so
the whole surface feels collected and lived-in, never empty.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); background-image: var(--clutter-pattern); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--clutter-pattern);
border: 2px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-sm); margin: var(--space-4);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: 1px 1px 0 var(--color-border); }
.btn:focus-visible { outline: 3px solid var(--color-teal); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: var(--shadow-sm); }
.btn--primary { background: var(--color-primary); color: #fff8ec; border-color: var(--color-border); }
.card {
background: var(--color-surface); color: var(--color-text);
background-image: var(--clutter-pattern);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 2px solid var(--color-border); box-shadow: var(--shadow-lg);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-teal);
box-shadow: var(--shadow-sm), 0 0 0 3px rgba(47,111,106,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #2b1d14; border: 2px solid var(--color-border); transform: var(--sticker-tilt); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cluttercore.md */
```

## Design System Variables

```css
--bg: #e8d9c0, --fg: #2b1d14, --accent: #b23a48, --surface: #fff8ec, --radius: 14px, --spacing: 16px, --font-display: 'Fraunces', 'DM Serif Display', Georgia, serif, --font-body: 'Nunito', 'Poppins', system-ui, sans-serif
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

[![Maximalism](https://designmd.app/images/library/680.png) Claude Artisan · Minimal, maximal & orgânico ### Maximalism](https://designmd.app/library/maximalism)[![Grandmillennial](https://designmd.app/images/library/654.png) Claude Artisan · Subculturas & estéticas de nicho ### Grandmillennial](https://designmd.app/library/grandmillennial)

Last synced: 8/30/2026
