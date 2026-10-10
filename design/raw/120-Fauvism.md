# Fauvism

- Source: <https://designmd.app/library/fauvism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:25.302Z

Claude Artisan · Movimentos históricos1904–1908

# Fauvism

Reference for movimentos históricos Fauvism. Paris (Henri Matisse, Andre Derain, Maurice de Vlaminck); named after a critic called the painters 'les fauves' (wild beasts).

FauvismLes Fauveswild beasts styleWild, non-naturalistic, highly saturated clashing colorBold flat unmixed color fields applied straight from the tubeExpressive, loose, brush-like edges and bordersHigh-energy arbitrary palette: hot orange, cobalt, viridian, magentahistorical

Use case: shell de aplicação com navegação e cartões; Wild, non-naturalistic, highly saturated clashing color; Bold flat unmixed color fields applied straight from the tube

![Fauvism](https://designmd.app/images/library/635.png)

## Historical Context

Paris (Henri Matisse, Andre Derain, Maurice de Vlaminck); named after a critic called the painters 'les fauves' (wild beasts). Example: Matisse 'Woman with a Hat' (1905); Derain's Collioure harbor paintings..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Fauvism"
description: "Fauvism visual system, translated from the Claude Artisan catalog for use in digital products. Wild, non-naturalistic, highly saturated clashing color; Bold flat unmixed color fields applied straight from the tube"
colors:
primary: "#ff5e1a"
background: "#fff8ee"
surface: "#ffffff"
text: "#1a1a1a"
accent: "#1c3fab"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Fraunces', 'Playfair Display', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Fraunces', 'Georgia', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Fraunces', 'Georgia', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "12px"
lg: "24px"
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

Fauvism visual system, translated from the Claude Artisan catalog for use in digital products. Wild, non-naturalistic, highly saturated clashing color; Bold flat unmixed color fields applied straight from the tube

- **Category:** historical
- **Era:** 1904–1908
- **Origin:** Paris (Henri Matisse, Andre Derain, Maurice de Vlaminck); named after a critic called the painters 'les fauves' (wild beasts).
- **Reference:** Matisse 'Woman with a Hat' (1905); Derain's Collioure harbor paintings.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Wild, non-naturalistic, highly saturated clashing color
- Bold flat unmixed color fields applied straight from the tube
- Expressive, loose, brush-like edges and borders
- High-energy arbitrary palette: hot orange, cobalt, viridian, magenta

## Colors

- **bg** — #fff8ee
- **surface** — #ffffff
- **surface-2** — #ffe9d1
- **text** — #1a1a1a
- **text-muted** — #5c4a3a
- **primary** — #ff5e1a
- **accent** — #1c3fab
- **viridian** — #00a878
- **magenta** — #d6146b

## Typography

- Display: 'Fraunces', 'Playfair Display', serif
- Body: 'Fraunces', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Wild, non-naturalistic, highly saturated clashing color; Bold flat unmixed color fields applied straight from the tube; Expressive, loose, brush-like edges and borders; High-energy arbitrary palette: hot orange, cobalt, viridian, magenta; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 12px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/fauvism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Fauvism — design tokens */
/* 1904–1908 | Matisse, Derain, Vlaminck — arbitrary, clashing, saturated color */
:root {
/* color */
--color-bg: #fff8ee;
--color-surface: #ffffff;
--color-surface-2: #ffe9d1;
--color-text: #1a1a1a;
--color-text-muted: #5c4a3a;
--color-primary: #ff5e1a;
--color-accent: #1c3fab;
--color-viridian: #00a878;
--color-magenta: #d6146b;
/* radius */
--radius-sm: 4px;
--radius-md: 12px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-bold: 6px 6px 0 #1c3fab;
--shadow-bold-sm: 3px 3px 0 #d6146b;
/* font */
--font-sans: 'Fraunces', 'Georgia', serif;
--font-display: 'Fraunces', 'Playfair Display', serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: brushstroke border + clash gradient */
--brushstroke-border: 3px solid #1a1a1a;
--clash-gradient: linear-gradient(105deg, #ff5e1a 0%, #d6146b 45%, #1c3fab 100%);
}

/* ============================================================
Base component classes — Fauvism
Signature move: flat unmixed saturated color used arbitrarily,
bounded by a thick hand-drawn black border, hard offset shadow
instead of blur. Repeats on btn, card, and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-bottom: var(--brushstroke-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: var(--brushstroke-border);
cursor: pointer; transition: transform .2s var(--ease-standard), background .2s var(--ease-standard);
}
.btn:hover { background: var(--color-viridian); color: var(--color-text); transform: translateY(-2px) rotate(-1deg); }
.btn:active { transform: translateY(0) rotate(0); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; background: var(--color-surface-2); color: var(--color-text); }
.btn--primary {
background: var(--color-primary); color: var(--color-text); font-weight: 800;
box-shadow: var(--shadow-bold);
}
.btn--primary:hover { background: var(--color-magenta); color: #ffffff; box-shadow: var(--shadow-bold-sm); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: var(--brushstroke-border);
box-shadow: var(--shadow-bold);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--brushstroke-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-bold-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-viridian); color: var(--color-text); border: 2px solid var(--color-text);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/fauvism.md */
```

### Variables

```
--bg: #fff8ee, --fg: #1a1a1a, --accent: #ff5e1a, --surface: #ffffff, --radius: 12px, --spacing: 16px, --font-display: 'Fraunces', 'Playfair Display', serif, --font-body: 'Fraunces', 'Georgia', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fff8ee

#ffffff

#ffe9d1

#1a1a1a

Secondary

#5c4a3a

#ff5e1a

#1c3fab

#00a878

#d6146b

### Effects

Wild, non-naturalistic, highly saturated clashing color, Bold flat unmixed color fields applied straight from the tube, Expressive, loose, brush-like edges and borders, High-energy arbitrary palette: hot orange, cobalt, viridian, magenta, shadow, blur

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

- **Name:** Fauvism
- **Type:** claude-artisan/historical
- **Keywords:** Fauvism, Les Fauves, wild beasts style, Wild, non-naturalistic, highly saturated clashing color, Bold flat unmixed color fields applied straight from the tube, Expressive, loose, brush-like edges and borders, High-energy arbitrary palette: hot orange, cobalt, viridian, magenta, historical
- **Era:** 1904–1908
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fff8ee, surface: #ffffff, surface-2: #ffe9d1, text: #1a1a1a
- **Secondary:** text-muted: #5c4a3a, primary: #ff5e1a, accent: #1c3fab, viridian: #00a878, magenta: #d6146b

## Visual Effects

Wild, non-naturalistic, highly saturated clashing color, Bold flat unmixed color fields applied straight from the tube, Expressive, loose, brush-like edges and borders, High-energy arbitrary palette: hot orange, cobalt, viridian, magenta, shadow, blur

## AI Visual Direction

Fauvism, Wild, non-naturalistic, highly saturated clashing color, Bold flat unmixed color fields applied straight from the tube, Expressive, loose, brush-like edges and borders, High-energy arbitrary palette: hot orange, cobalt, viridian, magenta, Matisse 'Woman with a Hat' (1905); Derain's Collioure harbor paintings.

## CSS Technical

```css
/* Fauvism — design tokens */
/* 1904–1908 | Matisse, Derain, Vlaminck — arbitrary, clashing, saturated color */
:root {
/* color */
--color-bg: #fff8ee;
--color-surface: #ffffff;
--color-surface-2: #ffe9d1;
--color-text: #1a1a1a;
--color-text-muted: #5c4a3a;
--color-primary: #ff5e1a;
--color-accent: #1c3fab;
--color-viridian: #00a878;
--color-magenta: #d6146b;
/* radius */
--radius-sm: 4px;
--radius-md: 12px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-bold: 6px 6px 0 #1c3fab;
--shadow-bold-sm: 3px 3px 0 #d6146b;
/* font */
--font-sans: 'Fraunces', 'Georgia', serif;
--font-display: 'Fraunces', 'Playfair Display', serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: brushstroke border + clash gradient */
--brushstroke-border: 3px solid #1a1a1a;
--clash-gradient: linear-gradient(105deg, #ff5e1a 0%, #d6146b 45%, #1c3fab 100%);
}

/* ============================================================
Base component classes — Fauvism
Signature move: flat unmixed saturated color used arbitrarily,
bounded by a thick hand-drawn black border, hard offset shadow
instead of blur. Repeats on btn, card, and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-bottom: var(--brushstroke-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: var(--brushstroke-border);
cursor: pointer; transition: transform .2s var(--ease-standard), background .2s var(--ease-standard);
}
.btn:hover { background: var(--color-viridian); color: var(--color-text); transform: translateY(-2px) rotate(-1deg); }
.btn:active { transform: translateY(0) rotate(0); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; background: var(--color-surface-2); color: var(--color-text); }
.btn--primary {
background: var(--color-primary); color: var(--color-text); font-weight: 800;
box-shadow: var(--shadow-bold);
}
.btn--primary:hover { background: var(--color-magenta); color: #ffffff; box-shadow: var(--shadow-bold-sm); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: var(--brushstroke-border);
box-shadow: var(--shadow-bold);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--brushstroke-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-bold-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-viridian); color: var(--color-text); border: 2px solid var(--color-text);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/fauvism.md */
```

## Design System Variables

```css
--bg: #fff8ee, --fg: #1a1a1a, --accent: #ff5e1a, --surface: #ffffff, --radius: 12px, --spacing: 16px, --font-display: 'Fraunces', 'Playfair Display', serif, --font-body: 'Fraunces', 'Georgia', serif
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

[![Pop Art](https://designmd.app/images/library/315.png) Arte & Ilustracao ### Pop Art](https://designmd.app/library/pop-art)[![Psychedelic Art](https://designmd.app/images/library/703.png) Claude Artisan · Movimentos históricos ### Psychedelic Art](https://designmd.app/library/psychedelic)[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)

Last synced: 8/30/2026
