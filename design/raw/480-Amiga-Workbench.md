# Amiga Workbench

- Source: <https://designmd.app/library/amiga-workbench>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:13.324Z

Claude Artisan · Subculturas & estéticas de nicho1985–1990s

# Amiga Workbench

Reference for subculturas & estéticas de nicho Amiga Workbench. Commodore's AmigaOS desktop environment, shipped with the Amiga 1000 in 1985, through the A500/A1200 era into the mid-1990s.

Amiga WorkbenchWorkbench UIAmigaOS desktopTopaz UIChunky low-res pixel icons and blocky bitmap system font (Topaz)Tight saturated 4-8 color core palette: orange, blue, white, blackThick flat 3D-beveled window/button chrome, no gradientsCheerful, toy-like chunky-pixel charmniche

Use case: grade modular responsiva; Chunky low-res pixel icons and blocky bitmap system font (Topaz); Tight saturated 4-8 color core palette: orange, blue, white, black

![Amiga Workbench](https://designmd.app/images/library/570.png)

## Historical Context

Commodore's AmigaOS desktop environment, shipped with the Amiga 1000 in 1985, through the A500/A1200 era into the mid-1990s. Example: Workbench 1.3/2.0/3.1 desktop; Deluxe Paint chrome; Amiga demoscene installer screens..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Amiga Workbench"
description: "Amiga Workbench visual system, translated from the Claude Artisan catalog for use in digital products. Chunky low-res pixel icons and blocky bitmap system font (Topaz); Tight saturated 4-8 color core palette: orange, blue, white, black"
colors:
primary: "#0055aa"
background: "#a8a8a8"
surface: "#ffffff"
text: "#000000"
accent: "#ff8800"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Topaz New', 'Press Start 2P', monospace"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Topaz New', 'Press Start 2P', 'Courier New', monospace"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Topaz New', 'Press Start 2P', 'Courier New', monospace"
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

Amiga Workbench visual system, translated from the Claude Artisan catalog for use in digital products. Chunky low-res pixel icons and blocky bitmap system font (Topaz); Tight saturated 4-8 color core palette: orange, blue, white, black

- **Category:** niche
- **Era:** 1985–1990s
- **Origin:** Commodore's AmigaOS desktop environment, shipped with the Amiga 1000 in 1985, through the A500/A1200 era into the mid-1990s.
- **Reference:** Workbench 1.3/2.0/3.1 desktop; Deluxe Paint chrome; Amiga demoscene installer screens.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Chunky low-res pixel icons and blocky bitmap system font (Topaz)
- Tight saturated 4-8 color core palette: orange, blue, white, black
- Thick flat 3D-beveled window/button chrome, no gradients
- Cheerful, toy-like chunky-pixel charm

## Colors

- **bg** — #a8a8a8
- **surface** — #ffffff
- **surface-2** — #d4d4d4
- **text** — #000000
- **text-muted** — #4a4a4a
- **primary** — #0055aa
- **accent** — #ff8800
- **bevel-light** — #ffffff
- **bevel-dark** — #555555
- **titlebar** — #0055aa

## Typography

- Display: 'Topaz New', 'Press Start 2P', monospace
- Body: 'Topaz New', 'Press Start 2P', 'Courier New', monospace
- Mono: 'Topaz New', 'Courier New', monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Chunky low-res pixel icons and blocky bitmap system font (Topaz); Tight saturated 4-8 color core palette: orange, blue, white, black; Thick flat 3D-beveled window/button chrome, no gradients; Cheerful, toy-like chunky-pixel charm; sombras e elevação; transparência e blur

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

[Download DESIGN.md](https://designmd.app/library/amiga-workbench/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Amiga Workbench — design tokens */
/* 1985–1990s | Commodore Amiga desktop: chunky bevels, 4-8 color palette */
:root {
/* color */
--color-bg: #a8a8a8;
--color-surface: #ffffff;
--color-surface-2: #d4d4d4;
--color-text: #000000;
--color-text-muted: #4a4a4a;
--color-primary: #0055aa;
--color-accent: #ff8800;
--color-bevel-light: #ffffff;
--color-bevel-dark: #555555;
--color-titlebar: #0055aa;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-bevel-out: inset 2px 2px 0 var(--color-bevel-light), inset -2px -2px 0 var(--color-bevel-dark);
--shadow-bevel-in: inset -2px -2px 0 var(--color-bevel-light), inset 2px 2px 0 var(--color-bevel-dark);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Topaz New', 'Press Start 2P', 'Courier New', monospace;
--font-display: 'Topaz New', 'Press Start 2P', monospace;
--font-mono: 'Topaz New', 'Courier New', monospace;
/* text */
--text-xs: 0.625rem;
--text-sm: 0.75rem;
--text-base: 0.875rem;
--text-lg: 1rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3rem;
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
--ease-standard: steps(1, end);
/* extra: window chrome stripes */
--titlebar-stripes: repeating-linear-gradient(90deg, #ff8800 0 4px, #0055aa 4px 8px);
--bg-image: none;
}

/* ============================================================
Base component classes — Amiga Workbench
Signature move: thick flat 3D-beveled chrome (never soft
shadows), a saturated 4-8 color core palette, and blocky
bitmap-font type throughout.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; image-rendering: pixelated; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-titlebar);
background-image: var(--titlebar-stripes); background-size: 8px 100%; background-position: right;
color: #ffffff;
border-bottom: 2px solid #000000;
box-shadow: var(--shadow-bevel-out);
}
.btn {
font: 700 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: 0;
background: var(--color-surface-2); border: 2px solid #000000;
box-shadow: var(--shadow-bevel-out);
cursor: pointer;
}
.btn:hover { background: #e0e0e0; }
.btn:active { box-shadow: var(--shadow-bevel-in); }
.btn:focus-visible { outline: 2px dotted var(--color-text); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: #ffffff;
border: 2px solid #000000; box-shadow: var(--shadow-bevel-out);
}
.btn--primary:active { box-shadow: var(--shadow-bevel-in); }
.card {
background: var(--color-surface);
border-radius: 0; padding: var(--space-6);
border: 2px solid #000000; box-shadow: var(--shadow-bevel-out);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: 0;
background: var(--color-surface); border: 2px solid #000000;
box-shadow: var(--shadow-bevel-in);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: 2px dotted var(--color-primary); outline-offset: 1px; }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .7em; border-radius: 0;
background: var(--color-accent); border: 2px solid #000000; color: #000000;
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/amiga-workbench.md */
```

### Variables

```
--bg: #a8a8a8, --fg: #000000, --accent: #0055aa, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Topaz New', 'Press Start 2P', monospace, --font-body: 'Topaz New', 'Press Start 2P', 'Courier New', monospace
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#a8a8a8

#ffffff

#d4d4d4

#000000

Secondary

#4a4a4a

#0055aa

#ff8800

#ffffff

#555555

### Effects

Chunky low-res pixel icons and blocky bitmap system font (Topaz), Tight saturated 4-8 color core palette: orange, blue, white, black, Thick flat 3D-beveled window/button chrome, no gradients, Cheerful, toy-like chunky-pixel charm, shadow, blur

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

- **Name:** Amiga Workbench
- **Type:** claude-artisan/niche
- **Keywords:** Amiga Workbench, Workbench UI, AmigaOS desktop, Topaz UI, Chunky low-res pixel icons and blocky bitmap system font (Topaz), Tight saturated 4-8 color core palette: orange, blue, white, black, Thick flat 3D-beveled window/button chrome, no gradients, Cheerful, toy-like chunky-pixel charm, niche
- **Era:** 1985–1990s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #a8a8a8, surface: #ffffff, surface-2: #d4d4d4, text: #000000
- **Secondary:** text-muted: #4a4a4a, primary: #0055aa, accent: #ff8800, bevel-light: #ffffff, bevel-dark: #555555, titlebar: #0055aa

## Visual Effects

Chunky low-res pixel icons and blocky bitmap system font (Topaz), Tight saturated 4-8 color core palette: orange, blue, white, black, Thick flat 3D-beveled window/button chrome, no gradients, Cheerful, toy-like chunky-pixel charm, shadow, blur

## AI Visual Direction

Amiga Workbench, Chunky low-res pixel icons and blocky bitmap system font (Topaz), Tight saturated 4-8 color core palette: orange, blue, white, black, Thick flat 3D-beveled window/button chrome, no gradients, Cheerful, toy-like chunky-pixel charm, Workbench 1.3/2.0/3.1 desktop; Deluxe Paint chrome; Amiga demoscene installer screens.

## CSS Technical

```css
/* Amiga Workbench — design tokens */
/* 1985–1990s | Commodore Amiga desktop: chunky bevels, 4-8 color palette */
:root {
/* color */
--color-bg: #a8a8a8;
--color-surface: #ffffff;
--color-surface-2: #d4d4d4;
--color-text: #000000;
--color-text-muted: #4a4a4a;
--color-primary: #0055aa;
--color-accent: #ff8800;
--color-bevel-light: #ffffff;
--color-bevel-dark: #555555;
--color-titlebar: #0055aa;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-bevel-out: inset 2px 2px 0 var(--color-bevel-light), inset -2px -2px 0 var(--color-bevel-dark);
--shadow-bevel-in: inset -2px -2px 0 var(--color-bevel-light), inset 2px 2px 0 var(--color-bevel-dark);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Topaz New', 'Press Start 2P', 'Courier New', monospace;
--font-display: 'Topaz New', 'Press Start 2P', monospace;
--font-mono: 'Topaz New', 'Courier New', monospace;
/* text */
--text-xs: 0.625rem;
--text-sm: 0.75rem;
--text-base: 0.875rem;
--text-lg: 1rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3rem;
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
--ease-standard: steps(1, end);
/* extra: window chrome stripes */
--titlebar-stripes: repeating-linear-gradient(90deg, #ff8800 0 4px, #0055aa 4px 8px);
--bg-image: none;
}

/* ============================================================
Base component classes — Amiga Workbench
Signature move: thick flat 3D-beveled chrome (never soft
shadows), a saturated 4-8 color core palette, and blocky
bitmap-font type throughout.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; image-rendering: pixelated; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-titlebar);
background-image: var(--titlebar-stripes); background-size: 8px 100%; background-position: right;
color: #ffffff;
border-bottom: 2px solid #000000;
box-shadow: var(--shadow-bevel-out);
}
.btn {
font: 700 var(--text-sm)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: 0;
background: var(--color-surface-2); border: 2px solid #000000;
box-shadow: var(--shadow-bevel-out);
cursor: pointer;
}
.btn:hover { background: #e0e0e0; }
.btn:active { box-shadow: var(--shadow-bevel-in); }
.btn:focus-visible { outline: 2px dotted var(--color-text); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: #ffffff;
border: 2px solid #000000; box-shadow: var(--shadow-bevel-out);
}
.btn--primary:active { box-shadow: var(--shadow-bevel-in); }
.card {
background: var(--color-surface);
border-radius: 0; padding: var(--space-6);
border: 2px solid #000000; box-shadow: var(--shadow-bevel-out);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: 0;
background: var(--color-surface); border: 2px solid #000000;
box-shadow: var(--shadow-bevel-in);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: 2px dotted var(--color-primary); outline-offset: 1px; }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .7em; border-radius: 0;
background: var(--color-accent); border: 2px solid #000000; color: #000000;
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/amiga-workbench.md */
```

## Design System Variables

```css
--bg: #a8a8a8, --fg: #000000, --accent: #0055aa, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Topaz New', 'Press Start 2P', monospace, --font-body: 'Topaz New', 'Press Start 2P', 'Courier New', monospace
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

[![ASCII / Terminal / TUI](https://designmd.app/images/library/579.png) Claude Artisan · Textura, material & renderização ### ASCII / Terminal / TUI](https://designmd.app/library/ascii-terminal)[![Teletext](https://designmd.app/images/library/734.png) Claude Artisan · Subculturas & estéticas de nicho ### Teletext](https://designmd.app/library/teletext)[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)

Last synced: 8/30/2026
