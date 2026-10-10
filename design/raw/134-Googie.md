# Googie

- Source: <https://designmd.app/library/googie>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:47.305Z

Claude Artisan · Retrofuturismo & ficção especulativa1945–1969

# Googie

Reference for retrofuturismo & ficção especulativa Googie. Southern California car-culture architecture.

Googiepopuluxedoo-wop architectureUpswept roofs, boomerangs, starbursts, atomsBold neon signage, cantileversSpace-age optimismAmoeba/kidney-bean shapesretrofuturism

Use case: grade modular responsiva; Upswept roofs, boomerangs, starbursts, atoms; Bold neon signage, cantilevers

![Googie](https://designmd.app/images/library/648.png)

## Historical Context

Southern California car-culture architecture. Example: LAX Theme Building; retro motel/diner signs..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Googie"
description: "Googie visual system, translated from the Claude Artisan catalog for use in digital products. Upswept roofs, boomerangs, starbursts, atoms; Bold neon signage, cantilevers"
colors:
primary: "#ff6b3d"
background: "#f5ede0"
surface: "#ffffff"
text: "#1f2a44"
accent: "#1fb6b0"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Broadway', 'Cooper Black', 'Futura', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Century Gothic', 'Avant Garde', 'Futura', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Century Gothic', 'Avant Garde', 'Futura', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
lg: "16px"
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

Googie visual system, translated from the Claude Artisan catalog for use in digital products. Upswept roofs, boomerangs, starbursts, atoms; Bold neon signage, cantilevers

- **Category:** retrofuturism
- **Era:** 1945–1969
- **Origin:** Southern California car-culture architecture.
- **Reference:** LAX Theme Building; retro motel/diner signs.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Upswept roofs, boomerangs, starbursts, atoms
- Bold neon signage, cantilevers
- Space-age optimism
- Amoeba/kidney-bean shapes

## Colors

- **bg** — #f5ede0
- **surface** — #ffffff
- **surface-strong** — #fff2df
- **border** — #1f2a44
- **text** — #1f2a44
- **text-muted** — #4c5878
- **primary** — #ff6b3d
- **accent** — #1fb6b0
- **gold** — #f0b429

## Typography

- Display: 'Broadway', 'Cooper Black', 'Futura', sans-serif
- Body: 'Century Gothic', 'Avant Garde', 'Futura', sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Upswept roofs, boomerangs, starbursts, atoms; Bold neon signage, cantilevers; Space-age optimism; Amoeba/kidney-bean shapes; sombras e elevação

## Shapes

- Radius scale: 4px, 4px 24px 4px 24px, 8px 48px 8px 48px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/googie/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Googie — design tokens */
/* 1945–1969 | Southern California car-culture architecture, condensed */
:root {
/* color */
--color-bg: #f5ede0;
--color-surface: #ffffff;
--color-surface-strong: #fff2df;
--color-border: #1f2a44;
--color-text: #1f2a44;
--color-text-muted: #4c5878;
--color-primary: #ff6b3d;
--color-accent: #1fb6b0;
--color-gold: #f0b429;
/* radius: sharp corners cut by a boomerang swoop, exaggerated pill ends */
--radius-sm: 4px;
--radius-md: 4px 24px 4px 24px;
--radius-lg: 8px 48px 8px 48px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font */
--font-sans: 'Century Gothic', 'Avant Garde', 'Futura', sans-serif;
--font-display: 'Broadway', 'Cooper Black', 'Futura', sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.75rem;
--text-5xl: 5rem;
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
/* extra: a starburst radial-gradient badge treatment plus the asymmetric
boomerang corner radius — the two signature moves of atomic-age
roadside-sign design, repeated on card, btn and badge */
--starburst: conic-gradient(from 0deg, var(--color-gold) 0deg 10deg, transparent 10deg 30deg,
var(--color-gold) 30deg 40deg, transparent 40deg 60deg, var(--color-gold) 60deg 70deg,
transparent 70deg 90deg, var(--color-gold) 90deg 100deg, transparent 100deg 120deg,
var(--color-gold) 120deg 130deg, transparent 130deg 150deg, var(--color-gold) 150deg 160deg,
transparent 160deg 180deg, var(--color-gold) 180deg 190deg, transparent 190deg 210deg,
var(--color-gold) 210deg 220deg, transparent 220deg 240deg, var(--color-gold) 240deg 250deg,
transparent 250deg 270deg, var(--color-gold) 270deg 280deg, transparent 280deg 300deg,
var(--color-gold) 300deg 310deg, transparent 310deg 330deg, var(--color-gold) 330deg 340deg,
transparent 340deg 360deg);
}

/* ============================================================
Base component classes — googie
Signature move: asymmetric "boomerang" corner radius (--radius-md/lg,
rounded on two opposite corners only) plus a hard offset poster shadow,
repeated on nav, card and btn to read as space-age roadside signage.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 4px solid var(--color-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff8ef; border-color: var(--color-border); }
.card {
background: var(--color-surface); border: 2px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
position: relative;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .4em 1em; border-radius: var(--radius-pill); background: var(--color-accent); color: #062622; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/googie.md */
```

### Variables

```
--bg: #f5ede0, --fg: #1f2a44, --accent: #ff6b3d, --surface: #ffffff, --radius: 4px 24px 4px 24px, --spacing: 16px, --font-display: 'Broadway', 'Cooper Black', 'Futura', sans-serif, --font-body: 'Century Gothic', 'Avant Garde', 'Futura', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f5ede0

#ffffff

#fff2df

#1f2a44

Secondary

#1f2a44

#4c5878

#ff6b3d

#1fb6b0

#f0b429

### Effects

Upswept roofs, boomerangs, starbursts, atoms, Bold neon signage, cantilevers, Space-age optimism, Amoeba/kidney-bean shapes, shadow

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

- **Name:** Googie
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Googie, populuxe, doo-wop architecture, Upswept roofs, boomerangs, starbursts, atoms, Bold neon signage, cantilevers, Space-age optimism, Amoeba/kidney-bean shapes, retrofuturism
- **Era:** 1945–1969
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f5ede0, surface: #ffffff, surface-strong: #fff2df, border: #1f2a44
- **Secondary:** text: #1f2a44, text-muted: #4c5878, primary: #ff6b3d, accent: #1fb6b0, gold: #f0b429

## Visual Effects

Upswept roofs, boomerangs, starbursts, atoms, Bold neon signage, cantilevers, Space-age optimism, Amoeba/kidney-bean shapes, shadow

## AI Visual Direction

Googie, Upswept roofs, boomerangs, starbursts, atoms, Bold neon signage, cantilevers, Space-age optimism, Amoeba/kidney-bean shapes, LAX Theme Building; retro motel/diner signs.

## CSS Technical

```css
/* Googie — design tokens */
/* 1945–1969 | Southern California car-culture architecture, condensed */
:root {
/* color */
--color-bg: #f5ede0;
--color-surface: #ffffff;
--color-surface-strong: #fff2df;
--color-border: #1f2a44;
--color-text: #1f2a44;
--color-text-muted: #4c5878;
--color-primary: #ff6b3d;
--color-accent: #1fb6b0;
--color-gold: #f0b429;
/* radius: sharp corners cut by a boomerang swoop, exaggerated pill ends */
--radius-sm: 4px;
--radius-md: 4px 24px 4px 24px;
--radius-lg: 8px 48px 8px 48px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font */
--font-sans: 'Century Gothic', 'Avant Garde', 'Futura', sans-serif;
--font-display: 'Broadway', 'Cooper Black', 'Futura', sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.75rem;
--text-5xl: 5rem;
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
/* extra: a starburst radial-gradient badge treatment plus the asymmetric
boomerang corner radius — the two signature moves of atomic-age
roadside-sign design, repeated on card, btn and badge */
--starburst: conic-gradient(from 0deg, var(--color-gold) 0deg 10deg, transparent 10deg 30deg,
var(--color-gold) 30deg 40deg, transparent 40deg 60deg, var(--color-gold) 60deg 70deg,
transparent 70deg 90deg, var(--color-gold) 90deg 100deg, transparent 100deg 120deg,
var(--color-gold) 120deg 130deg, transparent 130deg 150deg, var(--color-gold) 150deg 160deg,
transparent 160deg 180deg, var(--color-gold) 180deg 190deg, transparent 190deg 210deg,
var(--color-gold) 210deg 220deg, transparent 220deg 240deg, var(--color-gold) 240deg 250deg,
transparent 250deg 270deg, var(--color-gold) 270deg 280deg, transparent 280deg 300deg,
var(--color-gold) 300deg 310deg, transparent 310deg 330deg, var(--color-gold) 330deg 340deg,
transparent 340deg 360deg);
}

/* ============================================================
Base component classes — googie
Signature move: asymmetric "boomerang" corner radius (--radius-md/lg,
rounded on two opposite corners only) plus a hard offset poster shadow,
repeated on nav, card and btn to read as space-age roadside signage.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 4px solid var(--color-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff8ef; border-color: var(--color-border); }
.card {
background: var(--color-surface); border: 2px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
position: relative;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .4em 1em; border-radius: var(--radius-pill); background: var(--color-accent); color: #062622; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/googie.md */
```

## Design System Variables

```css
--bg: #f5ede0, --fg: #1f2a44, --accent: #ff6b3d, --surface: #ffffff, --radius: 4px 24px 4px 24px, --spacing: 16px, --font-display: 'Broadway', 'Cooper Black', 'Futura', sans-serif, --font-body: 'Century Gothic', 'Avant Garde', 'Futura', sans-serif
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

[![Atompunk](https://designmd.app/images/library/582.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Atompunk](https://designmd.app/library/atompunk)[![Streamline Moderne](https://designmd.app/images/library/726.png) Claude Artisan · Movimentos históricos ### Streamline Moderne](https://designmd.app/library/streamline-moderne)[![Space Age Pop](https://designmd.app/images/library/720.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Space Age Pop](https://designmd.app/library/space-age)

Last synced: 8/30/2026
