# Futurism (Italian)

- Source: <https://designmd.app/library/futurism-italian>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:41.319Z

Claude Artisan · Movimentos históricos1909–1944

# Futurism (Italian)

Reference for movimentos históricos Futurism (Italian). Italy (Filippo Marinetti).

Futurism (Italian)Futurismoparole in libertàWords-in-freedom: explosive dynamic typographySpeed, machines, motion linesDiagonal, chaotic type on the pageCelebration of technology and energyhistorical

Use case: composição editorial com grade tipográfica; Words-in-freedom: explosive dynamic typography; Speed, machines, motion lines

![Futurism (Italian)](https://designmd.app/images/library/644.png)

## Historical Context

Italy (Filippo Marinetti). Example: Marinetti 'Zang Tumb Tumb'; Fortunato Depero..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Futurism (Italian)"
description: "Futurism (Italian) visual system, translated from the Claude Artisan catalog for use in digital products. Words-in-freedom: explosive dynamic typography; Speed, machines, motion lines"
colors:
primary: "#c81d1d"
background: "#efe6d8"
surface: "#f7f1e6"
text: "#171512"
accent: "#1c1c8a"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Bifur', 'Anton', 'Impact', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Futura', 'Eurostile', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Futura', 'Eurostile', Arial, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
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

Futurism (Italian) visual system, translated from the Claude Artisan catalog for use in digital products. Words-in-freedom: explosive dynamic typography; Speed, machines, motion lines

- **Category:** historical
- **Era:** 1909–1944
- **Origin:** Italy (Filippo Marinetti).
- **Reference:** Marinetti 'Zang Tumb Tumb'; Fortunato Depero.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Words-in-freedom: explosive dynamic typography
- Speed, machines, motion lines
- Diagonal, chaotic type on the page
- Celebration of technology and energy

## Colors

- **bg** — #efe6d8
- **surface** — #f7f1e6
- **surface-strong** — #e9ddc7
- **border** — #171512
- **text** — #171512
- **text-muted** — #4c4640
- **primary** — #c81d1d
- **accent** — #1c1c8a

## Typography

- Display: 'Bifur', 'Anton', 'Impact', sans-serif
- Body: 'Futura', 'Eurostile', Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Words-in-freedom: explosive dynamic typography; Speed, machines, motion lines; Diagonal, chaotic type on the page; Celebration of technology and energy; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/futurism-italian/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Futurism (Italian) — design tokens */
/* 1909–1944 | Italy (Filippo Marinetti), condensed */
:root {
/* color */
--color-bg: #efe6d8;
--color-surface: #f7f1e6;
--color-surface-strong: #e9ddc7;
--color-border: #171512;
--color-text: #171512;
--color-text-muted: #4c4640;
--color-primary: #c81d1d;
--color-accent: #1c1c8a;
/* radius: sharp, almost no rounding — speed and mechanism, not softness */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow: hard offset "printed poster" shadow, no blur */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 6px 6px 0 var(--color-border);
--shadow-lg: 10px 10px 0 var(--color-border);
/* font */
--font-sans: 'Futura', 'Eurostile', Arial, sans-serif;
--font-display: 'Bifur', 'Anton', 'Impact', sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2.1rem;
--text-3xl: 2.9rem;
--text-4xl: 4rem;
--text-5xl: 5.4rem;
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
--ease-standard: cubic-bezier(0.7, 0, 0.2, 1);
/* extra: diagonal "words-in-freedom" tilt applied to headings/badges, plus
radiating speed-lines behind surfaces — the two signature moves of
parole in libertà typography */
--tilt-heading: rotate(-2.5deg);
--tilt-badge: rotate(3deg);
--speed-lines: repeating-linear-gradient(115deg, rgba(23,21,18,0.05) 0 2px, transparent 2px 22px);
}

/* ============================================================
Base component classes — futurism-italian
Signature move: diagonal "words-in-freedom" tilt on type elements plus
radiating speed-line texture (--speed-lines), repeated on nav, card and
badge to read as dynamic/explosive rather than a static grid.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--speed-lines);
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-border);
}
.btn {
font: 800 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer; text-transform: uppercase;
transition: transform .16s var(--ease-standard), box-shadow .16s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f7f1e6; border-color: var(--color-border); }
.card {
background: var(--color-surface); background-image: var(--speed-lines);
border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs) var(--font-display);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #f7f1e6; transform: var(--tilt-badge); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/futurism-italian.md */
```

### Variables

```
--bg: #efe6d8, --fg: #171512, --accent: #c81d1d, --surface: #f7f1e6, --radius: 0px, --spacing: 16px, --font-display: 'Bifur', 'Anton', 'Impact', sans-serif, --font-body: 'Futura', 'Eurostile', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#efe6d8

#f7f1e6

#e9ddc7

#171512

Secondary

#171512

#4c4640

#c81d1d

#1c1c8a

### Effects

Words-in-freedom: explosive dynamic typography, Speed, machines, motion lines, Diagonal, chaotic type on the page, Celebration of technology and energy, shadow

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

- **Name:** Futurism (Italian)
- **Type:** claude-artisan/historical
- **Keywords:** Futurism (Italian), Futurismo, parole in libertà, Words-in-freedom: explosive dynamic typography, Speed, machines, motion lines, Diagonal, chaotic type on the page, Celebration of technology and energy, historical
- **Era:** 1909–1944
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #efe6d8, surface: #f7f1e6, surface-strong: #e9ddc7, border: #171512
- **Secondary:** text: #171512, text-muted: #4c4640, primary: #c81d1d, accent: #1c1c8a

## Visual Effects

Words-in-freedom: explosive dynamic typography, Speed, machines, motion lines, Diagonal, chaotic type on the page, Celebration of technology and energy, shadow

## AI Visual Direction

Futurism (Italian), Words-in-freedom: explosive dynamic typography, Speed, machines, motion lines, Diagonal, chaotic type on the page, Celebration of technology and energy, Marinetti 'Zang Tumb Tumb'; Fortunato Depero.

## CSS Technical

```css
/* Futurism (Italian) — design tokens */
/* 1909–1944 | Italy (Filippo Marinetti), condensed */
:root {
/* color */
--color-bg: #efe6d8;
--color-surface: #f7f1e6;
--color-surface-strong: #e9ddc7;
--color-border: #171512;
--color-text: #171512;
--color-text-muted: #4c4640;
--color-primary: #c81d1d;
--color-accent: #1c1c8a;
/* radius: sharp, almost no rounding — speed and mechanism, not softness */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow: hard offset "printed poster" shadow, no blur */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 6px 6px 0 var(--color-border);
--shadow-lg: 10px 10px 0 var(--color-border);
/* font */
--font-sans: 'Futura', 'Eurostile', Arial, sans-serif;
--font-display: 'Bifur', 'Anton', 'Impact', sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2.1rem;
--text-3xl: 2.9rem;
--text-4xl: 4rem;
--text-5xl: 5.4rem;
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
--ease-standard: cubic-bezier(0.7, 0, 0.2, 1);
/* extra: diagonal "words-in-freedom" tilt applied to headings/badges, plus
radiating speed-lines behind surfaces — the two signature moves of
parole in libertà typography */
--tilt-heading: rotate(-2.5deg);
--tilt-badge: rotate(3deg);
--speed-lines: repeating-linear-gradient(115deg, rgba(23,21,18,0.05) 0 2px, transparent 2px 22px);
}

/* ============================================================
Base component classes — futurism-italian
Signature move: diagonal "words-in-freedom" tilt on type elements plus
radiating speed-line texture (--speed-lines), repeated on nav, card and
badge to read as dynamic/explosive rather than a static grid.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--speed-lines);
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-border);
}
.btn {
font: 800 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer; text-transform: uppercase;
transition: transform .16s var(--ease-standard), box-shadow .16s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f7f1e6; border-color: var(--color-border); }
.card {
background: var(--color-surface); background-image: var(--speed-lines);
border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs) var(--font-display);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #f7f1e6; transform: var(--tilt-badge); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/futurism-italian.md */
```

## Design System Variables

```css
--bg: #efe6d8, --fg: #171512, --accent: #c81d1d, --surface: #f7f1e6, --radius: 0px, --spacing: 16px, --font-display: 'Bifur', 'Anton', 'Impact', sans-serif, --font-body: 'Futura', 'Eurostile', Arial, sans-serif
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

[![Constructivism](https://designmd.app/images/library/603.png) Claude Artisan · Movimentos históricos ### Constructivism](https://designmd.app/library/constructivism)[![Dada](https://designmd.app/images/library/613.png) Claude Artisan · Movimentos históricos ### Dada](https://designmd.app/library/dada)

Last synced: 8/30/2026
