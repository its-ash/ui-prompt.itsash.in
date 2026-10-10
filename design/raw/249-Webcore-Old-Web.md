# Webcore / Old Web

- Source: <https://designmd.app/library/webcore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:52.239Z

Claude Artisan · Subculturas & estéticas de nicho2019–present (evokes 1997–2005)

# Webcore / Old Web

Reference for subculturas & estéticas de nicho Webcore / Old Web. Nostalgia for early personal internet.

Webcore / Old WeboldwebinternetcoreWeb 1.0GeoCities clutter, tiled backgrounds, GIFsGuestbooks, hit counters, 'under construction'Comic Sans, marquee, bevel buttonsDIY, chaotic, nostalgicniche

Use case: grade modular responsiva; GeoCities clutter, tiled backgrounds, GIFs; Guestbooks, hit counters, 'under construction'

![Webcore / Old Web](https://designmd.app/images/library/751.png)

## Historical Context

Nostalgia for early personal internet. Example: GeoCities/Angelfire pages; Neocities revival..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Webcore / Old Web"
description: "Webcore / Old Web visual system, translated from the Claude Artisan catalog for use in digital products. GeoCities clutter, tiled backgrounds, GIFs; Guestbooks, hit counters, 'under construction'"
colors:
primary: "#0000ff"
background: "#ff00ff"
surface: "#c0c0c0"
text: "#000000"
accent: "#00ff00"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Comic Sans MS', 'Impact', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Comic Sans MS', 'Comic Neue', cursive"
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

Webcore / Old Web visual system, translated from the Claude Artisan catalog for use in digital products. GeoCities clutter, tiled backgrounds, GIFs; Guestbooks, hit counters, 'under construction'

- **Category:** niche
- **Era:** 2019–present (evokes 1997–2005)
- **Origin:** Nostalgia for early personal internet.
- **Reference:** GeoCities/Angelfire pages; Neocities revival.
- **Structural base:** grade modular responsiva

**Defining traits:**
- GeoCities clutter, tiled backgrounds, GIFs
- Guestbooks, hit counters, 'under construction'
- Comic Sans, marquee, bevel buttons
- DIY, chaotic, nostalgic

## Colors

- **bg** — #ff00ff
- **surface** — #c0c0c0
- **surface-strong** — #e0e0e0
- **border** — #000080
- **text** — #000000
- **text-muted** — #333366
- **primary** — #0000ff
- **accent** — #00ff00
- **link-visited** — #800080

## Typography

- Display: 'Comic Sans MS', 'Impact', cursive
- Body: 'Comic Sans MS', 'Comic Neue', cursive
- Mono: 'Courier New', monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- GeoCities clutter, tiled backgrounds, GIFs; Guestbooks, hit counters, 'under construction'; Comic Sans, marquee, bevel buttons; DIY, chaotic, nostalgic; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/webcore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Webcore / Old Web — design tokens */
/* 2019–present (evokes 1997–2005) | Nostalgia for early personal internet, condensed */
:root {
/* color */
--color-bg: #ff00ff;
--color-surface: #c0c0c0;
--color-surface-strong: #e0e0e0;
--color-border: #000080;
--color-text: #000000;
--color-text-muted: #333366;
--color-primary: #0000ff;
--color-accent: #00ff00;
--color-link-visited: #800080;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: inset -1px -1px 0 #808080, inset 1px 1px 0 #ffffff;
--shadow-md: inset -2px -2px 0 #808080, inset 2px 2px 0 #ffffff;
--shadow-lg: 4px 4px 0 #000000;
/* font */
--font-sans: 'Comic Sans MS', 'Comic Neue', cursive;
--font-display: 'Comic Sans MS', 'Impact', cursive;
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
--ease-standard: linear;
/* extra (signature gradients, composite borders, filters) */
--tile-bg: repeating-conic-gradient(#ff00ff 0% 25%, #cc00cc 0% 50%) 0 0/24px 24px;
--bevel-outset: 2px outset #c0c0c0;
--bevel-inset: 2px inset #c0c0c0;
}

/* ============================================================
Base component classes — Webcore / Old Web
Signature move: a raised/inset "Win95 bevel" border (--bevel-outset /
--bevel-inset) on every interactive surface, over a tiled magenta
background. Repeats on nav, btn, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--tile-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: var(--bevel-outset); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--bevel-outset); cursor: pointer;
transition: transform .05s var(--ease-standard); }
.btn:hover { background: var(--color-surface-strong); }
.btn:active { border: var(--bevel-inset); transform: translate(1px,1px); }
.btn:focus-visible { outline: 2px dotted var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-accent); color: #000000; }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: var(--bevel-outset); box-shadow: var(--shadow-lg); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: #ffffff; border: var(--bevel-inset); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: 2px dotted var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #000000;
border: var(--bevel-outset); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/webcore.md */
```

### Variables

```
--bg: #ff00ff, --fg: #000000, --accent: #0000ff, --surface: #c0c0c0, --radius: 0px, --spacing: 16px, --font-display: 'Comic Sans MS', 'Impact', cursive, --font-body: 'Comic Sans MS', 'Comic Neue', cursive
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ff00ff

#c0c0c0

#e0e0e0

#000080

Secondary

#000000

#333366

#0000ff

#00ff00

#800080

### Effects

GeoCities clutter, tiled backgrounds, GIFs, Guestbooks, hit counters, 'under construction', Comic Sans, marquee, bevel buttons, DIY, chaotic, nostalgic, shadow

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

- **Name:** Webcore / Old Web
- **Type:** claude-artisan/niche
- **Keywords:** Webcore / Old Web, oldweb, internetcore, Web 1.0, GeoCities clutter, tiled backgrounds, GIFs, Guestbooks, hit counters, 'under construction', Comic Sans, marquee, bevel buttons, DIY, chaotic, nostalgic, niche
- **Era:** 2019–present (evokes 1997–2005)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ff00ff, surface: #c0c0c0, surface-strong: #e0e0e0, border: #000080
- **Secondary:** text: #000000, text-muted: #333366, primary: #0000ff, accent: #00ff00, link-visited: #800080

## Visual Effects

GeoCities clutter, tiled backgrounds, GIFs, Guestbooks, hit counters, 'under construction', Comic Sans, marquee, bevel buttons, DIY, chaotic, nostalgic, shadow

## AI Visual Direction

Webcore / Old Web, GeoCities clutter, tiled backgrounds, GIFs, Guestbooks, hit counters, 'under construction', Comic Sans, marquee, bevel buttons, DIY, chaotic, nostalgic, GeoCities/Angelfire pages; Neocities revival.

## CSS Technical

```css
/* Webcore / Old Web — design tokens */
/* 2019–present (evokes 1997–2005) | Nostalgia for early personal internet, condensed */
:root {
/* color */
--color-bg: #ff00ff;
--color-surface: #c0c0c0;
--color-surface-strong: #e0e0e0;
--color-border: #000080;
--color-text: #000000;
--color-text-muted: #333366;
--color-primary: #0000ff;
--color-accent: #00ff00;
--color-link-visited: #800080;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: inset -1px -1px 0 #808080, inset 1px 1px 0 #ffffff;
--shadow-md: inset -2px -2px 0 #808080, inset 2px 2px 0 #ffffff;
--shadow-lg: 4px 4px 0 #000000;
/* font */
--font-sans: 'Comic Sans MS', 'Comic Neue', cursive;
--font-display: 'Comic Sans MS', 'Impact', cursive;
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
--ease-standard: linear;
/* extra (signature gradients, composite borders, filters) */
--tile-bg: repeating-conic-gradient(#ff00ff 0% 25%, #cc00cc 0% 50%) 0 0/24px 24px;
--bevel-outset: 2px outset #c0c0c0;
--bevel-inset: 2px inset #c0c0c0;
}

/* ============================================================
Base component classes — Webcore / Old Web
Signature move: a raised/inset "Win95 bevel" border (--bevel-outset /
--bevel-inset) on every interactive surface, over a tiled magenta
background. Repeats on nav, btn, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--tile-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: var(--bevel-outset); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--bevel-outset); cursor: pointer;
transition: transform .05s var(--ease-standard); }
.btn:hover { background: var(--color-surface-strong); }
.btn:active { border: var(--bevel-inset); transform: translate(1px,1px); }
.btn:focus-visible { outline: 2px dotted var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-accent); color: #000000; }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: var(--bevel-outset); box-shadow: var(--shadow-lg); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: #ffffff; border: var(--bevel-inset); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: 2px dotted var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #000000;
border: var(--bevel-outset); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/webcore.md */
```

## Design System Variables

```css
--bg: #ff00ff, --fg: #000000, --accent: #0000ff, --surface: #c0c0c0, --radius: 0px, --spacing: 16px, --font-display: 'Comic Sans MS', 'Impact', cursive, --font-body: 'Comic Sans MS', 'Comic Neue', cursive
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

[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)[![Kidcore](https://designmd.app/images/library/664.png) Claude Artisan · Subculturas & estéticas de nicho ### Kidcore](https://designmd.app/library/kidcore)

Last synced: 8/30/2026
