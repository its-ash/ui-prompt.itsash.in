# Teletext

- Source: <https://designmd.app/library/teletext>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:21.297Z

Claude Artisan · Subculturas & estéticas de nicho1970s–90s

# Teletext

Reference for subculturas & estéticas de nicho Teletext. Broadcast teletext services - BBC Ceefax and ITV Oracle in the UK (1974 onward), French videotex - decoded by dedicated receiver chips through the 1990s.

TeletextCeefax UIvideotexviewdata graphicsExtremely low-res blocky mosaic character graphicsStrict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradientsMonospaced blocky type only, no anti-aliasingPage-number navigation motifniche

Use case: hero, superfície, conteúdo e grade responsiva; Extremely low-res blocky mosaic character graphics; Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients

![Teletext](https://designmd.app/images/library/734.png)

## Historical Context

Broadcast teletext services - BBC Ceefax and ITV Oracle in the UK (1974 onward), French videotex - decoded by dedicated receiver chips through the 1990s. Example: BBC Ceefax; ITV Oracle; French Minitel terminal screens; teletext subtitle overlays..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Teletext"
description: "Teletext visual system, translated from the Claude Artisan catalog for use in digital products. Extremely low-res blocky mosaic character graphics; Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients"
colors:
primary: "#00ff00"
background: "#000000"
surface: "#000000"
text: "#ffffff"
accent: "#00ff00"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Bedstead', 'Courier New', monospace"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Bedstead', 'Courier New', monospace"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Bedstead', 'Courier New', monospace"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
spacing:
sm: "16px"
md: "24px"
lg: "40px"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "24px"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "24px"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "32px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "24px"
---
## Overview

Teletext visual system, translated from the Claude Artisan catalog for use in digital products. Extremely low-res blocky mosaic character graphics; Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients

- **Category:** niche
- **Era:** 1970s–90s
- **Origin:** Broadcast teletext services - BBC Ceefax and ITV Oracle in the UK (1974 onward), French videotex - decoded by dedicated receiver chips through the 1990s.
- **Reference:** BBC Ceefax; ITV Oracle; French Minitel terminal screens; teletext subtitle overlays.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Extremely low-res blocky mosaic character graphics
- Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients
- Monospaced blocky type only, no anti-aliasing
- Page-number navigation motif

## Colors

- **bg** — #000000
- **surface** — #000000
- **surface-2** — #1a1a1a
- **text** — #ffffff
- **text-muted** — #00ff00
- **primary** — #00ff00
- **red** — #ff0000
- **yellow** — #ffff00
- **blue** — #0000ff
- **magenta** — #ff00ff
- **cyan** — #00ffff
- **white** — #ffffff

## Typography

- Display: 'Bedstead', 'Courier New', monospace
- Body: 'Bedstead', 'Courier New', monospace
- Mono: 'Bedstead', 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Extremely low-res blocky mosaic character graphics; Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients; Monospaced blocky type only, no anti-aliasing; Page-number navigation motif; sombras e elevação; transparência e blur

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

[Download DESIGN.md](https://designmd.app/library/teletext/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Teletext — design tokens */
/* 1970s–90s | Broadcast teletext/videotex: blocky mosaic graphics, strict 7-color palette */
:root {
/* color */
--color-bg: #000000;
--color-surface: #000000;
--color-surface-2: #1a1a1a;
--color-text: #ffffff;
--color-text-muted: #00ff00;
--color-primary: #00ff00;
--color-red: #ff0000;
--color-yellow: #ffff00;
--color-blue: #0000ff;
--color-magenta: #ff00ff;
--color-cyan: #00ffff;
--color-white: #ffffff;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-block: none;
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Bedstead', 'Courier New', monospace;
--font-display: 'Bedstead', 'Courier New', monospace;
--font-mono: 'Bedstead', 'Courier New', monospace;
/* text */
--text-xs: 0.875rem;
--text-sm: 1rem;
--text-base: 1.125rem;
--text-lg: 1.25rem;
--text-xl: 1.5rem;
--text-2xl: 1.875rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 3.75rem;
/* space */
--space-1: 8px;
--space-2: 16px;
--space-3: 20px;
--space-4: 24px;
--space-6: 32px;
--space-8: 40px;
--space-12: 56px;
--space-16: 72px;
--space-24: 96px;
/* ease */
--ease-standard: steps(1, end);
/* extra: mosaic block pattern, page-number motif */
--mosaic-block: repeating-linear-gradient(0deg, currentColor 0 2px, transparent 2px 4px);
--bg-image: none;
}

/* ============================================================
Base component classes — Teletext
Signature move: strict primary/secondary 7-color palette on
black, blocky monospace type, no gradients, no anti-aliasing,
page-number navigation motif.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; letter-spacing: 0.02em; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-2) var(--space-4); background: var(--color-blue);
color: var(--color-white); border-bottom: 4px solid var(--color-cyan);
}
.btn {
font: 700 var(--text-sm)/1 var(--font-sans); text-transform: uppercase;
color: #000000;
padding: var(--space-2) var(--space-4); border-radius: 0;
background: var(--color-yellow); border: none;
cursor: pointer;
}
.btn:hover { background: var(--color-white); }
.btn:active { background: var(--color-cyan); }
.btn:focus-visible { outline: 4px solid var(--color-magenta); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; background: var(--color-surface-2); color: var(--color-text-muted); }
.btn--primary {
background: var(--color-red); color: var(--color-white);
}
.btn--primary:hover { background: #ff4444; }
.card {
background: var(--color-bg);
border-radius: 0; padding: var(--space-4);
border: 4px solid var(--color-cyan);
}
.input {
width: 100%; box-sizing: border-box; color: #000000; font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: 0;
background: var(--color-white); border: none;
}
.input::placeholder { color: #555555; }
.input:focus { outline: 4px solid var(--color-yellow); outline-offset: 0; }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: 0;
background: var(--color-magenta); color: #000000;
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/teletext.md */
```

### Variables

```
--bg: #000000, --fg: #ffffff, --accent: #00ff00, --surface: #000000, --radius: 0px, --spacing: 24px, --font-display: 'Bedstead', 'Courier New', monospace, --font-body: 'Bedstead', 'Courier New', monospace
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#000000

#1a1a1a

#ffffff

Secondary

#00ff00

#ff0000

#ffff00

#0000ff

#ff00ff

#00ffff

#ffffff

### Effects

Extremely low-res blocky mosaic character graphics, Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients, Monospaced blocky type only, no anti-aliasing, Page-number navigation motif, shadow, blur

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

- **Name:** Teletext
- **Type:** claude-artisan/niche
- **Keywords:** Teletext, Ceefax UI, videotex, viewdata graphics, Extremely low-res blocky mosaic character graphics, Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients, Monospaced blocky type only, no anti-aliasing, Page-number navigation motif, niche
- **Era:** 1970s–90s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #000000, surface: #000000, surface-2: #1a1a1a, text: #ffffff
- **Secondary:** text-muted: #00ff00, primary: #00ff00, red: #ff0000, yellow: #ffff00, blue: #0000ff, magenta: #ff00ff, cyan: #00ffff, white: #ffffff

## Visual Effects

Extremely low-res blocky mosaic character graphics, Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients, Monospaced blocky type only, no anti-aliasing, Page-number navigation motif, shadow, blur

## AI Visual Direction

Teletext, Extremely low-res blocky mosaic character graphics, Strict 7-color palette (black + red/green/yellow/blue/magenta/cyan/white), no gradients, Monospaced blocky type only, no anti-aliasing, Page-number navigation motif, BBC Ceefax; ITV Oracle; French Minitel terminal screens; teletext subtitle overlays.

## CSS Technical

```css
/* Teletext — design tokens */
/* 1970s–90s | Broadcast teletext/videotex: blocky mosaic graphics, strict 7-color palette */
:root {
/* color */
--color-bg: #000000;
--color-surface: #000000;
--color-surface-2: #1a1a1a;
--color-text: #ffffff;
--color-text-muted: #00ff00;
--color-primary: #00ff00;
--color-red: #ff0000;
--color-yellow: #ffff00;
--color-blue: #0000ff;
--color-magenta: #ff00ff;
--color-cyan: #00ffff;
--color-white: #ffffff;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-block: none;
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Bedstead', 'Courier New', monospace;
--font-display: 'Bedstead', 'Courier New', monospace;
--font-mono: 'Bedstead', 'Courier New', monospace;
/* text */
--text-xs: 0.875rem;
--text-sm: 1rem;
--text-base: 1.125rem;
--text-lg: 1.25rem;
--text-xl: 1.5rem;
--text-2xl: 1.875rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 3.75rem;
/* space */
--space-1: 8px;
--space-2: 16px;
--space-3: 20px;
--space-4: 24px;
--space-6: 32px;
--space-8: 40px;
--space-12: 56px;
--space-16: 72px;
--space-24: 96px;
/* ease */
--ease-standard: steps(1, end);
/* extra: mosaic block pattern, page-number motif */
--mosaic-block: repeating-linear-gradient(0deg, currentColor 0 2px, transparent 2px 4px);
--bg-image: none;
}

/* ============================================================
Base component classes — Teletext
Signature move: strict primary/secondary 7-color palette on
black, blocky monospace type, no gradients, no anti-aliasing,
page-number navigation motif.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; letter-spacing: 0.02em; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-2) var(--space-4); background: var(--color-blue);
color: var(--color-white); border-bottom: 4px solid var(--color-cyan);
}
.btn {
font: 700 var(--text-sm)/1 var(--font-sans); text-transform: uppercase;
color: #000000;
padding: var(--space-2) var(--space-4); border-radius: 0;
background: var(--color-yellow); border: none;
cursor: pointer;
}
.btn:hover { background: var(--color-white); }
.btn:active { background: var(--color-cyan); }
.btn:focus-visible { outline: 4px solid var(--color-magenta); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; background: var(--color-surface-2); color: var(--color-text-muted); }
.btn--primary {
background: var(--color-red); color: var(--color-white);
}
.btn--primary:hover { background: #ff4444; }
.card {
background: var(--color-bg);
border-radius: 0; padding: var(--space-4);
border: 4px solid var(--color-cyan);
}
.input {
width: 100%; box-sizing: border-box; color: #000000; font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: 0;
background: var(--color-white); border: none;
}
.input::placeholder { color: #555555; }
.input:focus { outline: 4px solid var(--color-yellow); outline-offset: 0; }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: 0;
background: var(--color-magenta); color: #000000;
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/teletext.md */
```

## Design System Variables

```css
--bg: #000000, --fg: #ffffff, --accent: #00ff00, --surface: #000000, --radius: 0px, --spacing: 24px, --font-display: 'Bedstead', 'Courier New', monospace, --font-body: 'Bedstead', 'Courier New', monospace
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

[![ASCII / Terminal / TUI](https://designmd.app/images/library/579.png) Claude Artisan · Textura, material & renderização ### ASCII / Terminal / TUI](https://designmd.app/library/ascii-terminal)[![ANSI / BBS Art](https://designmd.app/images/library/573.png) Claude Artisan · Subculturas & estéticas de nicho ### ANSI / BBS Art](https://designmd.app/library/ansi-bbs-art)[![Amiga Workbench](https://designmd.app/images/library/570.png) Claude Artisan · Subculturas & estéticas de nicho ### Amiga Workbench](https://designmd.app/library/amiga-workbench)

Last synced: 8/30/2026
