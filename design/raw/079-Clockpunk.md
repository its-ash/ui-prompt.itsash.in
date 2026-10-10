# Clockpunk

- Source: <https://designmd.app/library/clockpunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:22.307Z

Claude Artisan · Retrofuturismo & ficção especulativa2000s–present

# Clockpunk

Reference for retrofuturismo & ficção especulativa Clockpunk. Punk genre set in Renaissance-era clockwork tech.

ClockpunkRenaissance punkda Vinci punkClockwork gears, springs, brass automataDa Vinci-style sketches and mechanismsRenaissance materials: wood, brassAnalog pre-steam mechanical fantasyretrofuturism

Use case: superfície material com conteúdo em camadas; Clockwork gears, springs, brass automata; Da Vinci-style sketches and mechanisms

![Clockpunk](https://designmd.app/images/library/599.png)

## Historical Context

Punk genre set in Renaissance-era clockwork tech. Example: Assassin's Creed (Leonardo's machines)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Clockpunk"
description: "Clockpunk visual system, translated from the Claude Artisan catalog for use in digital products. Clockwork gears, springs, brass automata; Da Vinci-style sketches and mechanisms"
colors:
primary: "#b08d4f"
background: "#3b2b1a"
surface: "#4f3a24"
text: "#f2e6cc"
accent: "#7a9e7e"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cormorant Garamond', 'Trajan Pro', Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "6px"
lg: "12px"
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

Clockpunk visual system, translated from the Claude Artisan catalog for use in digital products. Clockwork gears, springs, brass automata; Da Vinci-style sketches and mechanisms

- **Category:** retrofuturism
- **Era:** 2000s–present
- **Origin:** Punk genre set in Renaissance-era clockwork tech.
- **Reference:** Assassin's Creed (Leonardo's machines).
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Clockwork gears, springs, brass automata
- Da Vinci-style sketches and mechanisms
- Renaissance materials: wood, brass
- Analog pre-steam mechanical fantasy

## Colors

- **bg** — #3b2b1a
- **surface** — #4f3a24
- **surface-strong** — #61472c
- **border** — #b08d4f
- **text** — #f2e6cc
- **text-muted** — #cbb489
- **primary** — #b08d4f
- **accent** — #7a9e7e

## Typography

- Display: 'Cormorant Garamond', 'Trajan Pro', Georgia, serif
- Body: 'Cormorant Garamond', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Clockwork gears, springs, brass automata; Da Vinci-style sketches and mechanisms; Renaissance materials: wood, brass; Analog pre-steam mechanical fantasy; sombras e elevação

## Shapes

- Radius scale: 2px, 6px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/clockpunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Clockpunk — design tokens */
/* 2000s–present | Punk genre set in Renaissance-era clockwork tech, condensed */
:root {
/* color: brass, walnut wood, parchment */
--color-bg: #3b2b1a;
--color-surface: #4f3a24;
--color-surface-strong: #61472c;
--color-border: #b08d4f;
--color-text: #f2e6cc;
--color-text-muted: #cbb489;
--color-primary: #b08d4f;
--color-accent: #7a9e7e;
/* radius: circular gear motif on small radii, else square-cut wood */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
--shadow-md: 0 6px 16px rgba(0,0,0,0.45);
--shadow-lg: 0 14px 32px rgba(0,0,0,0.5);
/* font: an engraved serif with a technical mono for annotations */
--font-sans: 'Cormorant Garamond', Georgia, serif;
--font-display: 'Cormorant Garamond', 'Trajan Pro', Georgia, serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
/* extra: gear-tooth dashed ring border, brass gradient */
--brass-gradient: linear-gradient(180deg, #d8b968 0%, #b08d4f 45%, #8a6a35 100%);
--gear-ring: 3px dashed var(--color-primary);
}

/* ============================================================
Base component classes — Clockpunk
Signature move: a dashed "gear-tooth" ring border in brass, plus a
vertical brass gradient on interactive surfaces — a mechanical, wound
-clockwork read repeated on nav, primary button, and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); }
.nav strong { font-family: var(--font-display); font-style: italic; letter-spacing: 0.03em; }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: var(--gear-ring);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: rotate(-1deg); box-shadow: var(--shadow-md); }
.btn:active { transform: rotate(0deg); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--brass-gradient); color: #2c1e0f; border: 1px solid #6e5327; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-border); box-shadow: var(--shadow-md); }
.card h3 { font-family: var(--font-display); font-style: italic; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(122,158,126,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--brass-gradient);
color: #2c1e0f; border: var(--gear-ring); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/clockpunk.md */
```

### Variables

```
--bg: #3b2b1a, --fg: #f2e6cc, --accent: #b08d4f, --surface: #4f3a24, --radius: 6px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Trajan Pro', Georgia, serif, --font-body: 'Cormorant Garamond', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#3b2b1a

#4f3a24

#61472c

#b08d4f

Secondary

#f2e6cc

#cbb489

#b08d4f

#7a9e7e

### Effects

Clockwork gears, springs, brass automata, Da Vinci-style sketches and mechanisms, Renaissance materials: wood, brass, Analog pre-steam mechanical fantasy, shadow

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

- **Name:** Clockpunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Clockpunk, Renaissance punk, da Vinci punk, Clockwork gears, springs, brass automata, Da Vinci-style sketches and mechanisms, Renaissance materials: wood, brass, Analog pre-steam mechanical fantasy, retrofuturism
- **Era:** 2000s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #3b2b1a, surface: #4f3a24, surface-strong: #61472c, border: #b08d4f
- **Secondary:** text: #f2e6cc, text-muted: #cbb489, primary: #b08d4f, accent: #7a9e7e

## Visual Effects

Clockwork gears, springs, brass automata, Da Vinci-style sketches and mechanisms, Renaissance materials: wood, brass, Analog pre-steam mechanical fantasy, shadow

## AI Visual Direction

Clockpunk, Clockwork gears, springs, brass automata, Da Vinci-style sketches and mechanisms, Renaissance materials: wood, brass, Analog pre-steam mechanical fantasy, Assassin's Creed (Leonardo's machines).

## CSS Technical

```css
/* Clockpunk — design tokens */
/* 2000s–present | Punk genre set in Renaissance-era clockwork tech, condensed */
:root {
/* color: brass, walnut wood, parchment */
--color-bg: #3b2b1a;
--color-surface: #4f3a24;
--color-surface-strong: #61472c;
--color-border: #b08d4f;
--color-text: #f2e6cc;
--color-text-muted: #cbb489;
--color-primary: #b08d4f;
--color-accent: #7a9e7e;
/* radius: circular gear motif on small radii, else square-cut wood */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
--shadow-md: 0 6px 16px rgba(0,0,0,0.45);
--shadow-lg: 0 14px 32px rgba(0,0,0,0.5);
/* font: an engraved serif with a technical mono for annotations */
--font-sans: 'Cormorant Garamond', Georgia, serif;
--font-display: 'Cormorant Garamond', 'Trajan Pro', Georgia, serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
/* extra: gear-tooth dashed ring border, brass gradient */
--brass-gradient: linear-gradient(180deg, #d8b968 0%, #b08d4f 45%, #8a6a35 100%);
--gear-ring: 3px dashed var(--color-primary);
}

/* ============================================================
Base component classes — Clockpunk
Signature move: a dashed "gear-tooth" ring border in brass, plus a
vertical brass gradient on interactive surfaces — a mechanical, wound
-clockwork read repeated on nav, primary button, and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); }
.nav strong { font-family: var(--font-display); font-style: italic; letter-spacing: 0.03em; }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: var(--gear-ring);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: rotate(-1deg); box-shadow: var(--shadow-md); }
.btn:active { transform: rotate(0deg); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--brass-gradient); color: #2c1e0f; border: 1px solid #6e5327; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-border); box-shadow: var(--shadow-md); }
.card h3 { font-family: var(--font-display); font-style: italic; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(122,158,126,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--brass-gradient);
color: #2c1e0f; border: var(--gear-ring); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/clockpunk.md */
```

## Design System Variables

```css
--bg: #3b2b1a, --fg: #f2e6cc, --accent: #b08d4f, --surface: #4f3a24, --radius: 6px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Trajan Pro', Georgia, serif, --font-body: 'Cormorant Garamond', Georgia, serif
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

[![Steampunk](https://designmd.app/images/library/322.png) Retro & Pop ### Steampunk](https://designmd.app/library/steampunk)

Last synced: 8/30/2026
