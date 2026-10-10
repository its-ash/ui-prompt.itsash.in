# Retro Americana / Diner

- Source: <https://designmd.app/library/americana-diner>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:10.307Z

Claude Artisan · Subculturas & estéticas de nicho1950s revival

# Retro Americana / Diner

Reference for subculturas & estéticas de nicho Retro Americana / Diner. Nostalgic 1950s US diner/roadside culture.

Retro Americana / Dinerdiner50s AmericanarockabillyChrome, red vinyl, checkerboard floorsNeon signage, script + bold slab typeCherry red, cream, turquoiseNostalgic, wholesome, kitschniche

Use case: hero, superfície, conteúdo e grade responsiva; Chrome, red vinyl, checkerboard floors; Neon signage, script + bold slab type

![Retro Americana / Diner](https://designmd.app/images/library/569.png)

## Historical Context

Nostalgic 1950s US diner/roadside culture. Example: 50s diners; Route 66 signage; Coca-Cola retro..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Retro Americana / Diner"
description: "Retro Americana / Diner visual system, translated from the Claude Artisan catalog for use in digital products. Chrome, red vinyl, checkerboard floors; Neon signage, script + bold slab type"
colors:
primary: "#d62828"
background: "#fdf6e3"
surface: "#ffffff"
text: "#1a1a1a"
accent: "#1fb6b0"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Pacifico', 'Brush Script MT', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', Arial, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "10px"
lg: "18px"
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

Retro Americana / Diner visual system, translated from the Claude Artisan catalog for use in digital products. Chrome, red vinyl, checkerboard floors; Neon signage, script + bold slab type

- **Category:** niche
- **Era:** 1950s revival
- **Origin:** Nostalgic 1950s US diner/roadside culture.
- **Reference:** 50s diners; Route 66 signage; Coca-Cola retro.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Chrome, red vinyl, checkerboard floors
- Neon signage, script + bold slab type
- Cherry red, cream, turquoise
- Nostalgic, wholesome, kitsch

## Colors

- **bg** — #fdf6e3
- **surface** — #ffffff
- **surface-strong** — #fff8ea
- **border** — #1a1a1a
- **text** — #1a1a1a
- **text-muted** — #5c5346
- **primary** — #d62828
- **accent** — #1fb6b0
- **chrome** — #c9ccd1

## Typography

- Display: 'Pacifico', 'Brush Script MT', cursive
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Chrome, red vinyl, checkerboard floors; Neon signage, script + bold slab type; Cherry red, cream, turquoise; Nostalgic, wholesome, kitsch; sombras e elevação

## Shapes

- Radius scale: 4px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/americana-diner/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Retro Americana / Diner — design tokens */
/* 1950s revival | Nostalgic 1950s US diner/roadside culture, condensed */
:root {
/* color */
--color-bg: #fdf6e3;
--color-surface: #ffffff;
--color-surface-strong: #fff8ea;
--color-border: #1a1a1a;
--color-text: #1a1a1a;
--color-text-muted: #5c5346;
--color-primary: #d62828;
--color-accent: #1fb6b0;
--color-chrome: #c9ccd1;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 0 rgba(26,26,26,0.9);
--shadow-md: 0 4px 0 rgba(26,26,26,0.9);
--shadow-lg: 0 8px 0 rgba(26,26,26,0.9);
--shadow-neon: 0 0 6px rgba(31,182,176,0.7), 0 0 16px rgba(31,182,176,0.4);
/* font */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Pacifico', 'Brush Script MT', cursive;
--font-mono: 'Courier New', monospace;
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
/* extra: checkerboard stripe + chrome edge */
--checker: repeating-linear-gradient(45deg, #1a1a1a 0 10px, #fdf6e3 10px 20px);
--chrome-edge: linear-gradient(180deg, #f4f4f4, #b8bcc2 50%, #f4f4f4);
}

/* ============================================================
Base component classes — Retro Americana / Diner
Signature move: a black-and-cream checkerboard stripe used as a
trim line, plus a hard offset "chrome bumper" drop-shadow (no
blur, solid offset) on raised surfaces. Repeats on nav, card, btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 3px solid var(--color-border); border-top: 8px solid transparent; border-top-image: var(--checker) 8;
box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 3px solid var(--color-border);
box-shadow: var(--shadow-md);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-2px, -2px); box-shadow: 0 6px 0 rgba(26,26,26,0.9); }
.btn:active { transform: translate(0,0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fdf6e3; }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
padding: var(--space-6); border: 3px solid var(--color-border); box-shadow: var(--shadow-md);
border-bottom: 6px solid transparent; border-bottom-image: var(--checker) 6;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-neon); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700; text-transform: uppercase;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-accent); color: #06231f; box-shadow: var(--shadow-neon);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/americana-diner.md */
```

### Variables

```
--bg: #fdf6e3, --fg: #1a1a1a, --accent: #d62828, --surface: #ffffff, --radius: 10px, --spacing: 16px, --font-display: 'Pacifico', 'Brush Script MT', cursive, --font-body: 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fdf6e3

#ffffff

#fff8ea

#1a1a1a

Secondary

#1a1a1a

#5c5346

#d62828

#1fb6b0

#c9ccd1

### Effects

Chrome, red vinyl, checkerboard floors, Neon signage, script + bold slab type, Cherry red, cream, turquoise, Nostalgic, wholesome, kitsch, shadow

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

- **Name:** Retro Americana / Diner
- **Type:** claude-artisan/niche
- **Keywords:** Retro Americana / Diner, diner, 50s Americana, rockabilly, Chrome, red vinyl, checkerboard floors, Neon signage, script + bold slab type, Cherry red, cream, turquoise, Nostalgic, wholesome, kitsch, niche
- **Era:** 1950s revival
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fdf6e3, surface: #ffffff, surface-strong: #fff8ea, border: #1a1a1a
- **Secondary:** text: #1a1a1a, text-muted: #5c5346, primary: #d62828, accent: #1fb6b0, chrome: #c9ccd1

## Visual Effects

Chrome, red vinyl, checkerboard floors, Neon signage, script + bold slab type, Cherry red, cream, turquoise, Nostalgic, wholesome, kitsch, shadow

## AI Visual Direction

Retro Americana / Diner, Chrome, red vinyl, checkerboard floors, Neon signage, script + bold slab type, Cherry red, cream, turquoise, Nostalgic, wholesome, kitsch, 50s diners; Route 66 signage; Coca-Cola retro.

## CSS Technical

```css
/* Retro Americana / Diner — design tokens */
/* 1950s revival | Nostalgic 1950s US diner/roadside culture, condensed */
:root {
/* color */
--color-bg: #fdf6e3;
--color-surface: #ffffff;
--color-surface-strong: #fff8ea;
--color-border: #1a1a1a;
--color-text: #1a1a1a;
--color-text-muted: #5c5346;
--color-primary: #d62828;
--color-accent: #1fb6b0;
--color-chrome: #c9ccd1;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 0 rgba(26,26,26,0.9);
--shadow-md: 0 4px 0 rgba(26,26,26,0.9);
--shadow-lg: 0 8px 0 rgba(26,26,26,0.9);
--shadow-neon: 0 0 6px rgba(31,182,176,0.7), 0 0 16px rgba(31,182,176,0.4);
/* font */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Pacifico', 'Brush Script MT', cursive;
--font-mono: 'Courier New', monospace;
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
/* extra: checkerboard stripe + chrome edge */
--checker: repeating-linear-gradient(45deg, #1a1a1a 0 10px, #fdf6e3 10px 20px);
--chrome-edge: linear-gradient(180deg, #f4f4f4, #b8bcc2 50%, #f4f4f4);
}

/* ============================================================
Base component classes — Retro Americana / Diner
Signature move: a black-and-cream checkerboard stripe used as a
trim line, plus a hard offset "chrome bumper" drop-shadow (no
blur, solid offset) on raised surfaces. Repeats on nav, card, btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 3px solid var(--color-border); border-top: 8px solid transparent; border-top-image: var(--checker) 8;
box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 3px solid var(--color-border);
box-shadow: var(--shadow-md);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-2px, -2px); box-shadow: 0 6px 0 rgba(26,26,26,0.9); }
.btn:active { transform: translate(0,0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fdf6e3; }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
padding: var(--space-6); border: 3px solid var(--color-border); box-shadow: var(--shadow-md);
border-bottom: 6px solid transparent; border-bottom-image: var(--checker) 6;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-neon); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700; text-transform: uppercase;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-accent); color: #06231f; box-shadow: var(--shadow-neon);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/americana-diner.md */
```

## Design System Variables

```css
--bg: #fdf6e3, --fg: #1a1a1a, --accent: #d62828, --surface: #ffffff, --radius: 10px, --spacing: 16px, --font-display: 'Pacifico', 'Brush Script MT', cursive, --font-body: 'Helvetica Neue', Arial, sans-serif
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

[![Googie](https://designmd.app/images/library/648.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Googie](https://designmd.app/library/googie)[![Streamline Moderne](https://designmd.app/images/library/726.png) Claude Artisan · Movimentos históricos ### Streamline Moderne](https://designmd.app/library/streamline-moderne)[![Pop Art](https://designmd.app/images/library/315.png) Arte & Ilustracao ### Pop Art](https://designmd.app/library/pop-art)

Last synced: 8/30/2026
