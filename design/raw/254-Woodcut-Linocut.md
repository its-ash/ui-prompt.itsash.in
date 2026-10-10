# Woodcut / Linocut

- Source: <https://designmd.app/library/woodcut-linocut>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:21:00.322Z

Claude Artisan · Textura, material & renderização15th century-present

# Woodcut / Linocut

Reference for textura, material & renderização Woodcut / Linocut. Relief printmaking practiced across Europe and the Americas: an image is carved into wood or linoleum, inked, and pressed onto paper by hand or press.

Woodcut / Linocutrelief printblock printlinocutwoodblock (Western)Bold, thick, hand-carved black outlines on every shapeVisible gouge/cut-stroke texture filling color areas instead of flat fillsHigh-contrast, limited palette: black/cream plus at most one spot colortexture

Use case: composição editorial com grade tipográfica; Bold, thick, hand-carved black outlines on every shape; Visible gouge/cut-stroke texture filling color areas instead of flat fills

![Woodcut / Linocut](https://designmd.app/images/library/756.png)

## Historical Context

Relief printmaking practiced across Europe and the Americas: an image is carved into wood or linoleum, inked, and pressed onto paper by hand or press. Example: Albrecht Dürer's woodcut prints; WPA-era American relief posters; contemporary linocut protest-poster illustration..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Woodcut / Linocut"
description: "Woodcut / Linocut visual system, translated from the Claude Artisan catalog for use in digital products. Bold, thick, hand-carved black outlines on every shape; Visible gouge/cut-stroke texture filling color areas instead of flat fills"
colors:
primary: "#1c1712"
background: "#f2e8d3"
surface: "#f8f1e0"
text: "#1c1712"
accent: "#a4271f"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Bebas Neue', 'Anton', 'Arial Black', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "2px"
lg: "4px"
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

Woodcut / Linocut visual system, translated from the Claude Artisan catalog for use in digital products. Bold, thick, hand-carved black outlines on every shape; Visible gouge/cut-stroke texture filling color areas instead of flat fills

- **Category:** texture
- **Era:** 15th century-present
- **Origin:** Relief printmaking practiced across Europe and the Americas: an image is carved into wood or linoleum, inked, and pressed onto paper by hand or press.
- **Reference:** Albrecht Dürer's woodcut prints; WPA-era American relief posters; contemporary linocut protest-poster illustration.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Bold, thick, hand-carved black outlines on every shape
- Visible gouge/cut-stroke texture filling color areas instead of flat fills
- High-contrast, limited palette: black/cream plus at most one spot color

## Colors

- **bg** — #f2e8d3
- **surface** — #f8f1e0
- **surface-2** — #e9dcbc
- **text** — #1c1712
- **text-muted** — #5a4a35
- **primary** — #1c1712
- **accent** — #a4271f
- **cream** — #f2e8d3
- **carve-line** — #241d16

## Typography

- Display: 'Bebas Neue', 'Anton', 'Arial Black', sans-serif
- Body: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold, thick, hand-carved black outlines on every shape; Visible gouge/cut-stroke texture filling color areas instead of flat fills; High-contrast, limited palette: black/cream plus at most one spot color; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/woodcut-linocut/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Woodcut / Linocut — design tokens */
/* 15th century–present | Relief printmaking: carved block, inked, pressed to paper */
:root {
/* color */
--color-bg: #f2e8d3;
--color-surface: #f8f1e0;
--color-surface-2: #e9dcbc;
--color-text: #1c1712;
--color-text-muted: #5a4a35;
--color-primary: #1c1712;
--color-accent: #a4271f;
--color-cream: #f2e8d3;
--color-carve-line: #241d16;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-print: 6px 6px 0 rgba(28,23,18,0.9);
--shadow-print-sm: 3px 3px 0 rgba(28,23,18,0.9);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Bebas Neue', 'Anton', 'Arial Black', sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
/* extra: gouge-texture fill + chunky ink border */
--gouge-texture: repeating-linear-gradient(35deg, rgba(28,23,18,0.10) 0px, rgba(28,23,18,0.10) 2px, transparent 2px, transparent 7px);
--ink-border: 3px solid #1c1712;
}

/* ============================================================
Base component classes — Woodcut / Linocut
Signature move: bold carved-black outline (3px+) around every
shape, a hard offset "print" shadow instead of a soft blur, and
a visible gouge-stroke texture inside filled areas.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-cream);
border-bottom: var(--ink-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--ink-border);
box-shadow: var(--shadow-print-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-print); }
.btn:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 rgba(28,23,18,0.9); }
.btn:focus-visible { outline: 2px dashed var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-accent); color: var(--color-cream); border: var(--ink-border);
background-image: var(--gouge-texture);
}
.card {
background: var(--color-surface); background-image: var(--gouge-texture);
border-radius: var(--radius-md); padding: var(--space-6);
border: var(--ink-border); box-shadow: var(--shadow-print);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--ink-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-print-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
text-transform: uppercase; letter-spacing: .04em;
padding: .3em .8em; border-radius: var(--radius-sm);
background: var(--color-accent); color: var(--color-cream); border: 2px solid var(--color-text);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/woodcut-linocut.md */
```

### Variables

```
--bg: #f2e8d3, --fg: #1c1712, --accent: #1c1712, --surface: #f8f1e0, --radius: 2px, --spacing: 16px, --font-display: 'Bebas Neue', 'Anton', 'Arial Black', sans-serif, --font-body: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f2e8d3

#f8f1e0

#e9dcbc

#1c1712

Secondary

#5a4a35

#1c1712

#a4271f

#f2e8d3

#241d16

### Effects

Bold, thick, hand-carved black outlines on every shape, Visible gouge/cut-stroke texture filling color areas instead of flat fills, High-contrast, limited palette: black/cream plus at most one spot color, shadow, blur

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

- **Name:** Woodcut / Linocut
- **Type:** claude-artisan/texture
- **Keywords:** Woodcut / Linocut, relief print, block print, linocut, woodblock (Western), Bold, thick, hand-carved black outlines on every shape, Visible gouge/cut-stroke texture filling color areas instead of flat fills, High-contrast, limited palette: black/cream plus at most one spot color, texture
- **Era:** 15th century-present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f2e8d3, surface: #f8f1e0, surface-2: #e9dcbc, text: #1c1712
- **Secondary:** text-muted: #5a4a35, primary: #1c1712, accent: #a4271f, cream: #f2e8d3, carve-line: #241d16

## Visual Effects

Bold, thick, hand-carved black outlines on every shape, Visible gouge/cut-stroke texture filling color areas instead of flat fills, High-contrast, limited palette: black/cream plus at most one spot color, shadow, blur

## AI Visual Direction

Woodcut / Linocut, Bold, thick, hand-carved black outlines on every shape, Visible gouge/cut-stroke texture filling color areas instead of flat fills, High-contrast, limited palette: black/cream plus at most one spot color, Albrecht Dürer's woodcut prints; WPA-era American relief posters; contemporary linocut protest-poster illustration.

## CSS Technical

```css
/* Woodcut / Linocut — design tokens */
/* 15th century–present | Relief printmaking: carved block, inked, pressed to paper */
:root {
/* color */
--color-bg: #f2e8d3;
--color-surface: #f8f1e0;
--color-surface-2: #e9dcbc;
--color-text: #1c1712;
--color-text-muted: #5a4a35;
--color-primary: #1c1712;
--color-accent: #a4271f;
--color-cream: #f2e8d3;
--color-carve-line: #241d16;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-print: 6px 6px 0 rgba(28,23,18,0.9);
--shadow-print-sm: 3px 3px 0 rgba(28,23,18,0.9);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Bebas Neue', 'Anton', 'Arial Black', sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
/* extra: gouge-texture fill + chunky ink border */
--gouge-texture: repeating-linear-gradient(35deg, rgba(28,23,18,0.10) 0px, rgba(28,23,18,0.10) 2px, transparent 2px, transparent 7px);
--ink-border: 3px solid #1c1712;
}

/* ============================================================
Base component classes — Woodcut / Linocut
Signature move: bold carved-black outline (3px+) around every
shape, a hard offset "print" shadow instead of a soft blur, and
a visible gouge-stroke texture inside filled areas.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-cream);
border-bottom: var(--ink-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--ink-border);
box-shadow: var(--shadow-print-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-print); }
.btn:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 rgba(28,23,18,0.9); }
.btn:focus-visible { outline: 2px dashed var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-accent); color: var(--color-cream); border: var(--ink-border);
background-image: var(--gouge-texture);
}
.card {
background: var(--color-surface); background-image: var(--gouge-texture);
border-radius: var(--radius-md); padding: var(--space-6);
border: var(--ink-border); box-shadow: var(--shadow-print);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--ink-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-print-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
text-transform: uppercase; letter-spacing: .04em;
padding: .3em .8em; border-radius: var(--radius-sm);
background: var(--color-accent); color: var(--color-cream); border: 2px solid var(--color-text);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/woodcut-linocut.md */
```

## Design System Variables

```css
--bg: #f2e8d3, --fg: #1c1712, --accent: #1c1712, --surface: #f8f1e0, --radius: 2px, --spacing: 16px, --font-display: 'Bebas Neue', 'Anton', 'Arial Black', sans-serif, --font-body: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif
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

[![Ukiyo-e](https://designmd.app/images/library/744.png) Claude Artisan · Movimentos históricos ### Ukiyo-e](https://designmd.app/library/ukiyo-e)[![Risograph](https://designmd.app/images/library/711.png) Claude Artisan · Textura, material & renderização ### Risograph](https://designmd.app/library/risograph)[![Papercut / Paper Collage](https://designmd.app/images/library/696.png) Claude Artisan · Textura, material & renderização ### Papercut / Paper Collage](https://designmd.app/library/papercut)

Last synced: 8/30/2026
