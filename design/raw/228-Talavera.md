# Talavera

- Source: <https://designmd.app/library/talavera>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:19.384Z

Claude Artisan · Subculturas & estéticas de nicho16th century-present

# Talavera

Reference for subculturas & estéticas de nicho Talavera. Hand-painted, tin-glazed (majolica-style) ceramic tradition centered in Puebla, Mexico, blending Spanish-Moorish ceramic technique with Indigenous Mexican craft under a protected Denominación de Origen.

TalaveraTalavera poblanaMexican majolicatin-glazed ceramicBold cobalt blue and white base with vivid multicolor floral/geometric motifsGlossy, glazed-tile surface sheenThick, confident hand-painted outlines and cheerful maximalist ornament edge-to-edgeniche

Use case: grade modular responsiva; Bold cobalt blue and white base with vivid multicolor floral/geometric motifs; Glossy, glazed-tile surface sheen

![Talavera](https://designmd.app/images/library/732.png)

## Historical Context

Hand-painted, tin-glazed (majolica-style) ceramic tradition centered in Puebla, Mexico, blending Spanish-Moorish ceramic technique with Indigenous Mexican craft under a protected Denominación de Origen. Example: Puebla's Talavera-tiled church façades and courtyards; Uriarte Talavera workshop pieces; hand-painted Talavera tableware..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Talavera"
description: "Talavera visual system, translated from the Claude Artisan catalog for use in digital products. Bold cobalt blue and white base with vivid multicolor floral/geometric motifs; Glossy, glazed-tile surface sheen"
colors:
primary: "#0b2f52"
background: "#f5f2ea"
surface: "#ffffff"
text: "#0b2f52"
accent: "#d94f2b"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Playfair Display', 'Fraunces', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Fraunces', 'Playfair Display', system-ui, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Fraunces', 'Playfair Display', system-ui, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "16px"
lg: "28px"
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

Talavera visual system, translated from the Claude Artisan catalog for use in digital products. Bold cobalt blue and white base with vivid multicolor floral/geometric motifs; Glossy, glazed-tile surface sheen

- **Category:** niche
- **Era:** 16th century-present
- **Origin:** Hand-painted, tin-glazed (majolica-style) ceramic tradition centered in Puebla, Mexico, blending Spanish-Moorish ceramic technique with Indigenous Mexican craft under a protected Denominación de Origen.
- **Reference:** Puebla's Talavera-tiled church façades and courtyards; Uriarte Talavera workshop pieces; hand-painted Talavera tableware.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Bold cobalt blue and white base with vivid multicolor floral/geometric motifs
- Glossy, glazed-tile surface sheen
- Thick, confident hand-painted outlines and cheerful maximalist ornament edge-to-edge

## Colors

- **bg** — #f5f2ea
- **surface** — #ffffff
- **surface-2** — #e7edf2
- **text** — #0b2f52
- **text-muted** — #3d5a75
- **primary** — #0b2f52
- **accent** — #d94f2b
- **yellow** — #f2b705
- **green** — #3f7d4c

## Typography

- Display: 'Playfair Display', 'Fraunces', serif
- Body: 'Fraunces', 'Playfair Display', system-ui, serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold cobalt blue and white base with vivid multicolor floral/geometric motifs; Glossy, glazed-tile surface sheen; Thick, confident hand-painted outlines and cheerful maximalist ornament edge-to-edge; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/talavera/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Talavera — design tokens */
/* 16th century–present | Hand-painted majolica ceramic tradition, Puebla, Mexico */
:root {
/* color */
--color-bg: #f5f2ea;
--color-surface: #ffffff;
--color-surface-2: #e7edf2;
--color-text: #0b2f52;
--color-text-muted: #3d5a75;
--color-primary: #0b2f52;
--color-accent: #d94f2b;
--color-yellow: #f2b705;
--color-green: #3f7d4c;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-glaze: 0 12px 28px rgba(11,47,82,0.16), inset 0 1px 0 rgba(255,255,255,0.6);
--shadow-glaze-sm: 0 4px 12px rgba(11,47,82,0.14);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Fraunces', 'Playfair Display', system-ui, serif;
--font-display: 'Playfair Display', 'Fraunces', serif;
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
--ease-standard: cubic-bezier(0.34, 1.2, 0.4, 1);
/* extra: glossy tile sheen + repeating floral border */
--glaze-sheen: linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 35%);
--tile-border: repeating-linear-gradient(90deg, #0b2f52 0 4px, #f2b705 4px 8px, #d94f2b 8px 12px, #3f7d4c 12px 16px);
}

/* ============================================================
Base component classes — Talavera
Signature move: bold cobalt-blue-and-white base with vivid
multicolor floral motifs, thick confident painted outlines,
and a glossy glazed-tile sheen — maximalist ornament edge to edge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 6px solid var(--color-primary);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-primary);
cursor: pointer; transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-glaze-sm); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: #fff; border: 2px solid var(--color-primary);
background-image: var(--glaze-sheen); box-shadow: var(--shadow-glaze-sm);
}
.btn--primary:hover { box-shadow: var(--shadow-glaze); }
.card {
background: var(--color-surface); background-image: var(--glaze-sheen);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 3px solid var(--color-primary); box-shadow: var(--shadow-glaze);
border-top: 8px solid var(--color-accent);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-primary);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-glaze-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-yellow); color: var(--color-text); border: 2px solid var(--color-primary);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/talavera.md */
```

### Variables

```
--bg: #f5f2ea, --fg: #0b2f52, --accent: #0b2f52, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Playfair Display', 'Fraunces', serif, --font-body: 'Fraunces', 'Playfair Display', system-ui, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f5f2ea

#ffffff

#e7edf2

#0b2f52

Secondary

#3d5a75

#0b2f52

#d94f2b

#f2b705

#3f7d4c

### Effects

Bold cobalt blue and white base with vivid multicolor floral/geometric motifs, Glossy, glazed-tile surface sheen, Thick, confident hand-painted outlines and cheerful maximalist ornament edge-to-edge, shadow, blur

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

- **Name:** Talavera
- **Type:** claude-artisan/niche
- **Keywords:** Talavera, Talavera poblana, Mexican majolica, tin-glazed ceramic, Bold cobalt blue and white base with vivid multicolor floral/geometric motifs, Glossy, glazed-tile surface sheen, Thick, confident hand-painted outlines and cheerful maximalist ornament edge-to-edge, niche
- **Era:** 16th century-present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f5f2ea, surface: #ffffff, surface-2: #e7edf2, text: #0b2f52
- **Secondary:** text-muted: #3d5a75, primary: #0b2f52, accent: #d94f2b, yellow: #f2b705, green: #3f7d4c

## Visual Effects

Bold cobalt blue and white base with vivid multicolor floral/geometric motifs, Glossy, glazed-tile surface sheen, Thick, confident hand-painted outlines and cheerful maximalist ornament edge-to-edge, shadow, blur

## AI Visual Direction

Talavera, Bold cobalt blue and white base with vivid multicolor floral/geometric motifs, Glossy, glazed-tile surface sheen, Thick, confident hand-painted outlines and cheerful maximalist ornament edge-to-edge, Puebla's Talavera-tiled church façades and courtyards; Uriarte Talavera workshop pieces; hand-painted Talavera tableware.

## CSS Technical

```css
/* Talavera — design tokens */
/* 16th century–present | Hand-painted majolica ceramic tradition, Puebla, Mexico */
:root {
/* color */
--color-bg: #f5f2ea;
--color-surface: #ffffff;
--color-surface-2: #e7edf2;
--color-text: #0b2f52;
--color-text-muted: #3d5a75;
--color-primary: #0b2f52;
--color-accent: #d94f2b;
--color-yellow: #f2b705;
--color-green: #3f7d4c;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-glaze: 0 12px 28px rgba(11,47,82,0.16), inset 0 1px 0 rgba(255,255,255,0.6);
--shadow-glaze-sm: 0 4px 12px rgba(11,47,82,0.14);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Fraunces', 'Playfair Display', system-ui, serif;
--font-display: 'Playfair Display', 'Fraunces', serif;
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
--ease-standard: cubic-bezier(0.34, 1.2, 0.4, 1);
/* extra: glossy tile sheen + repeating floral border */
--glaze-sheen: linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 35%);
--tile-border: repeating-linear-gradient(90deg, #0b2f52 0 4px, #f2b705 4px 8px, #d94f2b 8px 12px, #3f7d4c 12px 16px);
}

/* ============================================================
Base component classes — Talavera
Signature move: bold cobalt-blue-and-white base with vivid
multicolor floral motifs, thick confident painted outlines,
and a glossy glazed-tile sheen — maximalist ornament edge to edge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 6px solid var(--color-primary);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-primary);
cursor: pointer; transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-glaze-sm); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: #fff; border: 2px solid var(--color-primary);
background-image: var(--glaze-sheen); box-shadow: var(--shadow-glaze-sm);
}
.btn--primary:hover { box-shadow: var(--shadow-glaze); }
.card {
background: var(--color-surface); background-image: var(--glaze-sheen);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 3px solid var(--color-primary); box-shadow: var(--shadow-glaze);
border-top: 8px solid var(--color-accent);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-primary);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-glaze-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-yellow); color: var(--color-text); border: 2px solid var(--color-primary);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/talavera.md */
```

## Design System Variables

```css
--bg: #f5f2ea, --fg: #0b2f52, --accent: #0b2f52, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Playfair Display', 'Fraunces', serif, --font-body: 'Fraunces', 'Playfair Display', system-ui, serif
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

[![Terrazzo](https://designmd.app/images/library/735.png) Claude Artisan · Textura, material & renderização ### Terrazzo](https://designmd.app/library/terrazzo)[![Maximalism](https://designmd.app/images/library/680.png) Claude Artisan · Minimal, maximal & orgânico ### Maximalism](https://designmd.app/library/maximalism)

Last synced: 8/30/2026
