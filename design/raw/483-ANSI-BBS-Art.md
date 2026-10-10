# ANSI / BBS Art

- Source: <https://designmd.app/library/ansi-bbs-art>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:17.296Z

Claude Artisan · Subculturas & estéticas de nicho1980s–90s

# ANSI / BBS Art

Reference for subculturas & estéticas de nicho ANSI / BBS Art. Dial-up bulletin board systems used ANSI escape codes and CP437 extended-ASCII to render splash screens and menus, drawn in TheDraw and traded by groups like ACiD and iCE through the 1980s-90s.

ANSI / BBS ArtANSI artBBS splash artTheDraw artCP437 mosaic16-color ANSI/CP437 block-character art (half-blocks, shading glyphs)Saturated primary/neon palette on black, no gradientsBlocky extended-ASCII border and shading characters (double-line boxes)Monospaced type only, never anti-aliasedniche

Use case: hero, superfície, conteúdo e grade responsiva; 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs); Saturated primary/neon palette on black, no gradients

![ANSI / BBS Art](https://designmd.app/images/library/573.png)

## Historical Context

Dial-up bulletin board systems used ANSI escape codes and CP437 extended-ASCII to render splash screens and menus, drawn in TheDraw and traded by groups like ACiD and iCE through the 1980s-90s. Example: Classic BBS login/menu splash screens; ACiD/iCE Productions ANSI art packs; TheDraw-authored door-game menus..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "ANSI / BBS Art"
description: "ANSI / BBS Art visual system, translated from the Claude Artisan catalog for use in digital products. 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs); Saturated primary/neon palette on black, no gradients"
colors:
primary: "#ff5555"
background: "#000000"
surface: "#0a0a0a"
text: "#c0c0c0"
accent: "#55ffff"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Perfect DOS VGA 437', 'Courier New', monospace"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Perfect DOS VGA 437', 'Courier New', monospace"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Perfect DOS VGA 437', 'Courier New', monospace"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
spacing:
sm: "2ch"
md: "4ch"
lg: "8ch"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "4ch"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "4ch"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "6ch"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "4ch"
---
## Overview

ANSI / BBS Art visual system, translated from the Claude Artisan catalog for use in digital products. 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs); Saturated primary/neon palette on black, no gradients

- **Category:** niche
- **Era:** 1980s–90s
- **Origin:** Dial-up bulletin board systems used ANSI escape codes and CP437 extended-ASCII to render splash screens and menus, drawn in TheDraw and traded by groups like ACiD and iCE through the 1980s-90s.
- **Reference:** Classic BBS login/menu splash screens; ACiD/iCE Productions ANSI art packs; TheDraw-authored door-game menus.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs)
- Saturated primary/neon palette on black, no gradients
- Blocky extended-ASCII border and shading characters (double-line boxes)
- Monospaced type only, never anti-aliased

## Colors

- **bg** — #000000
- **surface** — #0a0a0a
- **surface-2** — #1c1c1c
- **text** — #c0c0c0
- **text-muted** — #808080
- **primary** — #ff5555
- **accent** — #55ffff
- **yellow** — #ffff55
- **green** — #55ff55
- **magenta** — #ff55ff
- **blue** — #5555ff
- **white** — #ffffff
- **red-dark** — #aa0000

## Typography

- Display: 'Perfect DOS VGA 437', 'Courier New', monospace
- Body: 'Perfect DOS VGA 437', 'Courier New', monospace
- Mono: 'Perfect DOS VGA 437', 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs); Saturated primary/neon palette on black, no gradients; Blocky extended-ASCII border and shading characters (double-line boxes); Monospaced type only, never anti-aliased; sombras e elevação; transparência e blur

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

[Download DESIGN.md](https://designmd.app/library/ansi-bbs-art/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* ANSI / BBS Art — design tokens */
/* 1980s-90s | Dial-up BBS splash art: 16-color ANSI/CP437 block-character mosaics */
:root {
/* color */
--color-bg: #000000;
--color-surface: #0a0a0a;
--color-surface-2: #1c1c1c;
--color-text: #c0c0c0;
--color-text-muted: #808080;
--color-primary: #ff5555;
--color-accent: #55ffff;
--color-yellow: #ffff55;
--color-green: #55ff55;
--color-magenta: #ff55ff;
--color-blue: #5555ff;
--color-white: #ffffff;
--color-red-dark: #aa0000;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-none: none;
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Perfect DOS VGA 437', 'Courier New', monospace;
--font-display: 'Perfect DOS VGA 437', 'Courier New', monospace;
--font-mono: 'Perfect DOS VGA 437', 'Courier New', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 3.75rem;
/* space */
--space-1: 1ch;
--space-2: 2ch;
--space-3: 3ch;
--space-4: 4ch;
--space-6: 6ch;
--space-8: 8ch;
--space-12: 12ch;
--space-16: 16ch;
--space-24: 24ch;
/* ease */
--ease-standard: steps(1, end);
/* extra: double-line box-drawing border + block shading */
--box-double: 3px double var(--color-accent);
--shade-block: repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 3px);
--bg-image: none;
}

/* ============================================================
Base component classes — ANSI / BBS Art
Signature move: 16-color CP437 block-mosaic art, blocky
extended-ASCII borders (double-line box characters), and
monospaced type only, never anti-aliased.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-mono); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-2) var(--space-4); background: var(--color-blue);
color: var(--color-white); border-bottom: var(--box-double);
}
.btn {
font: 700 var(--text-sm)/1 var(--font-mono); text-transform: uppercase;
color: var(--color-bg);
padding: var(--space-2) var(--space-4); border-radius: 0;
background: var(--color-green); border: 1px solid var(--color-white);
cursor: pointer;
}
.btn:hover { background: var(--color-yellow); }
.btn:active { background: var(--color-accent); }
.btn:focus-visible { outline: 2px dashed var(--color-white); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; background: var(--color-surface-2); color: var(--color-text-muted); }
.btn--primary {
background: var(--color-primary); color: var(--color-white);
border: 1px solid var(--color-yellow);
}
.btn--primary:hover { background: #ff7777; }
.card {
background: var(--color-surface);
border-radius: 0; padding: var(--space-4);
border: var(--box-double);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-green); font: var(--text-base) var(--font-mono);
padding: var(--space-2) var(--space-3); border-radius: 0;
background: #000000; border: 1px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 1px var(--color-accent); }
.badge {
display: inline-flex; align-items: center; gap: .3em; font-size: var(--text-xs); font-weight: 700;
padding: .25em .7em; border-radius: 0;
background: var(--color-magenta); color: var(--color-bg); border: 1px solid var(--color-white);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/ansi-bbs-art.md */
```

### Variables

```
--bg: #000000, --fg: #c0c0c0, --accent: #ff5555, --surface: #0a0a0a, --radius: 0px, --spacing: 4ch, --font-display: 'Perfect DOS VGA 437', 'Courier New', monospace, --font-body: 'Perfect DOS VGA 437', 'Courier New', monospace
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#000000

#0a0a0a

#1c1c1c

#c0c0c0

Secondary

#808080

#ff5555

#55ffff

#ffff55

#55ff55

#ff55ff

#5555ff

#ffffff

#aa0000

### Effects

16-color ANSI/CP437 block-character art (half-blocks, shading glyphs), Saturated primary/neon palette on black, no gradients, Blocky extended-ASCII border and shading characters (double-line boxes), Monospaced type only, never anti-aliased, shadow, blur

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

- **Name:** ANSI / BBS Art
- **Type:** claude-artisan/niche
- **Keywords:** ANSI / BBS Art, ANSI art, BBS splash art, TheDraw art, CP437 mosaic, 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs), Saturated primary/neon palette on black, no gradients, Blocky extended-ASCII border and shading characters (double-line boxes), Monospaced type only, never anti-aliased, niche
- **Era:** 1980s–90s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #000000, surface: #0a0a0a, surface-2: #1c1c1c, text: #c0c0c0
- **Secondary:** text-muted: #808080, primary: #ff5555, accent: #55ffff, yellow: #ffff55, green: #55ff55, magenta: #ff55ff, blue: #5555ff, white: #ffffff, red-dark: #aa0000

## Visual Effects

16-color ANSI/CP437 block-character art (half-blocks, shading glyphs), Saturated primary/neon palette on black, no gradients, Blocky extended-ASCII border and shading characters (double-line boxes), Monospaced type only, never anti-aliased, shadow, blur

## AI Visual Direction

ANSI / BBS Art, 16-color ANSI/CP437 block-character art (half-blocks, shading glyphs), Saturated primary/neon palette on black, no gradients, Blocky extended-ASCII border and shading characters (double-line boxes), Monospaced type only, never anti-aliased, Classic BBS login/menu splash screens; ACiD/iCE Productions ANSI art packs; TheDraw-authored door-game menus.

## CSS Technical

```css
/* ANSI / BBS Art — design tokens */
/* 1980s-90s | Dial-up BBS splash art: 16-color ANSI/CP437 block-character mosaics */
:root {
/* color */
--color-bg: #000000;
--color-surface: #0a0a0a;
--color-surface-2: #1c1c1c;
--color-text: #c0c0c0;
--color-text-muted: #808080;
--color-primary: #ff5555;
--color-accent: #55ffff;
--color-yellow: #ffff55;
--color-green: #55ff55;
--color-magenta: #ff55ff;
--color-blue: #5555ff;
--color-white: #ffffff;
--color-red-dark: #aa0000;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-none: none;
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Perfect DOS VGA 437', 'Courier New', monospace;
--font-display: 'Perfect DOS VGA 437', 'Courier New', monospace;
--font-mono: 'Perfect DOS VGA 437', 'Courier New', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 3.75rem;
/* space */
--space-1: 1ch;
--space-2: 2ch;
--space-3: 3ch;
--space-4: 4ch;
--space-6: 6ch;
--space-8: 8ch;
--space-12: 12ch;
--space-16: 16ch;
--space-24: 24ch;
/* ease */
--ease-standard: steps(1, end);
/* extra: double-line box-drawing border + block shading */
--box-double: 3px double var(--color-accent);
--shade-block: repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 3px);
--bg-image: none;
}

/* ============================================================
Base component classes — ANSI / BBS Art
Signature move: 16-color CP437 block-mosaic art, blocky
extended-ASCII borders (double-line box characters), and
monospaced type only, never anti-aliased.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-mono); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-2) var(--space-4); background: var(--color-blue);
color: var(--color-white); border-bottom: var(--box-double);
}
.btn {
font: 700 var(--text-sm)/1 var(--font-mono); text-transform: uppercase;
color: var(--color-bg);
padding: var(--space-2) var(--space-4); border-radius: 0;
background: var(--color-green); border: 1px solid var(--color-white);
cursor: pointer;
}
.btn:hover { background: var(--color-yellow); }
.btn:active { background: var(--color-accent); }
.btn:focus-visible { outline: 2px dashed var(--color-white); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; background: var(--color-surface-2); color: var(--color-text-muted); }
.btn--primary {
background: var(--color-primary); color: var(--color-white);
border: 1px solid var(--color-yellow);
}
.btn--primary:hover { background: #ff7777; }
.card {
background: var(--color-surface);
border-radius: 0; padding: var(--space-4);
border: var(--box-double);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-green); font: var(--text-base) var(--font-mono);
padding: var(--space-2) var(--space-3); border-radius: 0;
background: #000000; border: 1px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 1px var(--color-accent); }
.badge {
display: inline-flex; align-items: center; gap: .3em; font-size: var(--text-xs); font-weight: 700;
padding: .25em .7em; border-radius: 0;
background: var(--color-magenta); color: var(--color-bg); border: 1px solid var(--color-white);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/ansi-bbs-art.md */
```

## Design System Variables

```css
--bg: #000000, --fg: #c0c0c0, --accent: #ff5555, --surface: #0a0a0a, --radius: 0px, --spacing: 4ch, --font-display: 'Perfect DOS VGA 437', 'Courier New', monospace, --font-body: 'Perfect DOS VGA 437', 'Courier New', monospace
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

[![ASCII / Terminal / TUI](https://designmd.app/images/library/579.png) Claude Artisan · Textura, material & renderização ### ASCII / Terminal / TUI](https://designmd.app/library/ascii-terminal)[![Teletext](https://designmd.app/images/library/734.png) Claude Artisan · Subculturas & estéticas de nicho ### Teletext](https://designmd.app/library/teletext)[![Amiga Workbench](https://designmd.app/images/library/570.png) Claude Artisan · Subculturas & estéticas de nicho ### Amiga Workbench](https://designmd.app/library/amiga-workbench)

Last synced: 8/30/2026
