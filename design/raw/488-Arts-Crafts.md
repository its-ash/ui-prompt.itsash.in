# Arts & Crafts

- Source: <https://designmd.app/library/arts-and-crafts>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:24.305Z

Claude Artisan · Movimentos históricos1880s–1910

# Arts & Crafts

Reference for movimentos históricos Arts & Crafts. UK (William Morris, John Ruskin).

Arts & CraftsWilliam Morris styleIntricate botanical patterns and repeatsHandcraft over machine productionEarthy natural palettesOrnamental borders, medieval revival typehistorical

Use case: superfície material com conteúdo em camadas; Intricate botanical patterns and repeats; Handcraft over machine production

![Arts & Crafts](https://designmd.app/images/library/578.png)

## Historical Context

UK (William Morris, John Ruskin). Example: Morris & Co wallpapers; Kelmscott Press..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Arts & Crafts"
description: "Arts & Crafts visual system, translated from the Claude Artisan catalog for use in digital products. Intricate botanical patterns and repeats; Handcraft over machine production"
colors:
primary: "#7a2e2e"
background: "#ece2cd"
surface: "#fbf5e6"
text: "#2b2013"
accent: "#4a6741"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'IM Fell English', 'Crimson Text', Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Crimson Text', 'EB Garamond', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Crimson Text', 'EB Garamond', Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "3px"
md: "4px"
lg: "6px"
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

Arts & Crafts visual system, translated from the Claude Artisan catalog for use in digital products. Intricate botanical patterns and repeats; Handcraft over machine production

- **Category:** historical
- **Era:** 1880s–1910
- **Origin:** UK (William Morris, John Ruskin).
- **Reference:** Morris & Co wallpapers; Kelmscott Press.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Intricate botanical patterns and repeats
- Handcraft over machine production
- Earthy natural palettes
- Ornamental borders, medieval revival type

## Colors

- **bg** — #ece2cd
- **surface** — #fbf5e6
- **surface-strong** — #e3d3ac
- **border** — #6b4a2b
- **text** — #2b2013
- **text-muted** — #5c4a30
- **primary** — #7a2e2e
- **accent** — #4a6741

## Typography

- Display: 'IM Fell English', 'Crimson Text', Georgia, serif
- Body: 'Crimson Text', 'EB Garamond', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Intricate botanical patterns and repeats; Handcraft over machine production; Earthy natural palettes; Ornamental borders, medieval revival type; sombras e elevação

## Shapes

- Radius scale: 3px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/arts-and-crafts/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Arts & Crafts — design tokens */
/* 1880s–1910 | UK (William Morris, John Ruskin), condensed */
:root {
/* color */
--color-bg: #ece2cd;
--color-surface: #fbf5e6;
--color-surface-strong: #e3d3ac;
--color-border: #6b4a2b;
--color-text: #2b2013;
--color-text-muted: #5c4a30;
--color-primary: #7a2e2e;
--color-accent: #4a6741;
/* radius — handcraft over machine: soft, slightly uneven, never a perfect pill */
--radius-sm: 3px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 4px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(43,32,19,0.2);
--shadow-md: 0 4px 10px rgba(43,32,19,0.22);
--shadow-lg: 0 10px 22px rgba(43,32,19,0.26);
/* font */
--font-sans: 'Crimson Text', 'EB Garamond', Georgia, serif;
--font-display: 'IM Fell English', 'Crimson Text', Georgia, serif;
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
--ease-standard: ease-out;
/* extra — signature botanical repeat border, Morris-style leaf motif */
--leaf-repeat: repeating-linear-gradient(135deg, var(--color-accent) 0 3px, transparent 3px 14px);
--border-frame: 3px double var(--color-border);
}

/* ============================================================
Base component classes — Arts & Crafts
Signature move: a thick double ornamental border plus a thin repeating
diagonal "leaf stitch" band, echoing Morris & Co block-print borders.
Repeated on nav, card, and inputs.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--border-frame); }
.nav::after { content: none; }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f7ecd8; border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: var(--border-frame);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; }
.card { border-top: 8px solid transparent; border-image: var(--leaf-repeat) 8; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); background: var(--color-surface);
border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(122,46,46,0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-border); color: var(--color-text); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/arts-and-crafts.md */
```

### Variables

```
--bg: #ece2cd, --fg: #2b2013, --accent: #7a2e2e, --surface: #fbf5e6, --radius: 4px, --spacing: 16px, --font-display: 'IM Fell English', 'Crimson Text', Georgia, serif, --font-body: 'Crimson Text', 'EB Garamond', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ece2cd

#fbf5e6

#e3d3ac

#6b4a2b

Secondary

#2b2013

#5c4a30

#7a2e2e

#4a6741

### Effects

Intricate botanical patterns and repeats, Handcraft over machine production, Earthy natural palettes, Ornamental borders, medieval revival type, shadow

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

- **Name:** Arts & Crafts
- **Type:** claude-artisan/historical
- **Keywords:** Arts & Crafts, William Morris style, Intricate botanical patterns and repeats, Handcraft over machine production, Earthy natural palettes, Ornamental borders, medieval revival type, historical
- **Era:** 1880s–1910
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ece2cd, surface: #fbf5e6, surface-strong: #e3d3ac, border: #6b4a2b
- **Secondary:** text: #2b2013, text-muted: #5c4a30, primary: #7a2e2e, accent: #4a6741

## Visual Effects

Intricate botanical patterns and repeats, Handcraft over machine production, Earthy natural palettes, Ornamental borders, medieval revival type, shadow

## AI Visual Direction

Arts & Crafts, Intricate botanical patterns and repeats, Handcraft over machine production, Earthy natural palettes, Ornamental borders, medieval revival type, Morris & Co wallpapers; Kelmscott Press.

## CSS Technical

```css
/* Arts & Crafts — design tokens */
/* 1880s–1910 | UK (William Morris, John Ruskin), condensed */
:root {
/* color */
--color-bg: #ece2cd;
--color-surface: #fbf5e6;
--color-surface-strong: #e3d3ac;
--color-border: #6b4a2b;
--color-text: #2b2013;
--color-text-muted: #5c4a30;
--color-primary: #7a2e2e;
--color-accent: #4a6741;
/* radius — handcraft over machine: soft, slightly uneven, never a perfect pill */
--radius-sm: 3px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 4px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(43,32,19,0.2);
--shadow-md: 0 4px 10px rgba(43,32,19,0.22);
--shadow-lg: 0 10px 22px rgba(43,32,19,0.26);
/* font */
--font-sans: 'Crimson Text', 'EB Garamond', Georgia, serif;
--font-display: 'IM Fell English', 'Crimson Text', Georgia, serif;
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
--ease-standard: ease-out;
/* extra — signature botanical repeat border, Morris-style leaf motif */
--leaf-repeat: repeating-linear-gradient(135deg, var(--color-accent) 0 3px, transparent 3px 14px);
--border-frame: 3px double var(--color-border);
}

/* ============================================================
Base component classes — Arts & Crafts
Signature move: a thick double ornamental border plus a thin repeating
diagonal "leaf stitch" band, echoing Morris & Co block-print borders.
Repeated on nav, card, and inputs.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--border-frame); }
.nav::after { content: none; }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f7ecd8; border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: var(--border-frame);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; }
.card { border-top: 8px solid transparent; border-image: var(--leaf-repeat) 8; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); background: var(--color-surface);
border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(122,46,46,0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-border); color: var(--color-text); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/arts-and-crafts.md */
```

## Design System Variables

```css
--bg: #ece2cd, --fg: #2b2013, --accent: #7a2e2e, --surface: #fbf5e6, --radius: 4px, --spacing: 16px, --font-display: 'IM Fell English', 'Crimson Text', Georgia, serif, --font-body: 'Crimson Text', 'EB Garamond', Georgia, serif
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

[![Art Nouveau](https://designmd.app/images/library/305.png) Arte & Ilustracao ### Art Nouveau](https://designmd.app/library/art-nouveau)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)

Last synced: 8/30/2026
