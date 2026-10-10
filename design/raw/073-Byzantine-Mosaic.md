# Byzantine Mosaic

- Source: <https://designmd.app/library/byzantine-mosaic>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:12.279Z

Claude Artisan · Movimentos históricos4th–15th century

# Byzantine Mosaic

Reference for movimentos históricos Byzantine Mosaic. Eastern Roman (Byzantine) Empire; sacred mosaic decoration of churches from Ravenna to Constantinople.

Byzantine MosaicByzantine artgold-ground mosaictesserae mosaicGold-ground tesserae backgrounds with luminous, shimmering fieldsJewel-toned glass tile colors: deep sapphire, emerald, rubyRigid, frontal, hieratic figures with almond eyesGeometric tessellated borders framing every panelhistorical

Use case: shell de aplicação com navegação e cartões; Gold-ground tesserae backgrounds with luminous, shimmering fields; Jewel-toned glass tile colors: deep sapphire, emerald, ruby

![Byzantine Mosaic](https://designmd.app/images/library/593.png)

## Historical Context

Eastern Roman (Byzantine) Empire; sacred mosaic decoration of churches from Ravenna to Constantinople. Example: San Vitale mosaics, Ravenna; Hagia Sophia apse mosaics..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Byzantine Mosaic"
description: "Byzantine Mosaic visual system, translated from the Claude Artisan catalog for use in digital products. Gold-ground tesserae backgrounds with luminous, shimmering fields; Jewel-toned glass tile colors: deep sapphire, emerald, ruby"
colors:
primary: "#d4af37"
background: "#0d1b3d"
surface: "#142a5c"
text: "#f5e6b8"
accent: "#7a1f3d"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Cinzel', 'Cormorant Garamond', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', 'EB Garamond', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', 'EB Garamond', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "8px"
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

Byzantine Mosaic visual system, translated from the Claude Artisan catalog for use in digital products. Gold-ground tesserae backgrounds with luminous, shimmering fields; Jewel-toned glass tile colors: deep sapphire, emerald, ruby

- **Category:** historical
- **Era:** 4th–15th century
- **Origin:** Eastern Roman (Byzantine) Empire; sacred mosaic decoration of churches from Ravenna to Constantinople.
- **Reference:** San Vitale mosaics, Ravenna; Hagia Sophia apse mosaics.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Gold-ground tesserae backgrounds with luminous, shimmering fields
- Jewel-toned glass tile colors: deep sapphire, emerald, ruby
- Rigid, frontal, hieratic figures with almond eyes
- Geometric tessellated borders framing every panel

## Colors

- **bg** — #0d1b3d
- **surface** — #142a5c
- **surface-2** — #1c3a7a
- **text** — #f5e6b8
- **text-muted** — #c9b57a
- **primary** — #d4af37
- **accent** — #7a1f3d
- **emerald-tile** — #1f6b4a
- **gold-ground** — #caa036

## Typography

- Display: 'Cinzel', 'Cormorant Garamond', serif
- Body: 'Cormorant Garamond', 'EB Garamond', serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Gold-ground tesserae backgrounds with luminous, shimmering fields; Jewel-toned glass tile colors: deep sapphire, emerald, ruby; Rigid, frontal, hieratic figures with almond eyes; Geometric tessellated borders framing every panel; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/byzantine-mosaic/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Byzantine Mosaic — design tokens */
/* 4th–15th century | Eastern Roman (Byzantine) Empire sacred mosaic decoration */
:root {
/* color */
--color-bg: #0d1b3d;
--color-surface: #142a5c;
--color-surface-2: #1c3a7a;
--color-text: #f5e6b8;
--color-text-muted: #c9b57a;
--color-primary: #d4af37;
--color-accent: #7a1f3d;
--color-emerald-tile: #1f6b4a;
--color-gold-ground: #caa036;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-gold-glow: 0 0 20px rgba(212,175,55,0.40), 0 8px 20px rgba(0,0,0,0.45);
--shadow-tile: 0 2px 0 rgba(0,0,0,0.35);
/* font */
--font-sans: 'Cormorant Garamond', 'EB Garamond', serif;
--font-display: 'Cinzel', 'Cormorant Garamond', serif;
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
--ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
/* extra: shimmering gold tesserae gradient + tessellated tile grid */
--tesserae-gradient: linear-gradient(135deg, #caa036 0%, #d4af37 20%, #b8860b 40%, #d4af37 60%, #caa036 80%, #b8860b 100%);
--tile-grid: repeating-linear-gradient(45deg, rgba(0,0,0,0.12) 0 2px, transparent 2px 8px);
}

/* ============================================================
Base component classes — Byzantine Mosaic
Signature move: luminous gold tesserae ground, jewel-toned
glass tile colors, rigid frontal weight, tessellated borders.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-gold-ground);
background-image: var(--tile-grid);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-gold-ground);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-gold-glow); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--tesserae-gradient); background-image: var(--tesserae-gradient), var(--tile-grid);
color: #12100a; font-weight: 700; border: 1px solid var(--color-primary);
box-shadow: var(--shadow-gold-glow);
}
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: 3px solid var(--color-gold-ground);
box-shadow: var(--shadow-tile);
position: relative;
}
.card::before {
content: ""; position: absolute; inset: 4px; border-radius: calc(var(--radius-lg) - 4px);
background-image: var(--tile-grid); opacity: .5; pointer-events: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-gold-ground);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-gold-glow); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-sm);
background: var(--color-emerald-tile); border: 1px solid var(--color-gold-ground); color: var(--color-text);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/byzantine-mosaic.md */
```

### Variables

```
--bg: #0d1b3d, --fg: #f5e6b8, --accent: #d4af37, --surface: #142a5c, --radius: 4px, --spacing: 16px, --font-display: 'Cinzel', 'Cormorant Garamond', serif, --font-body: 'Cormorant Garamond', 'EB Garamond', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0d1b3d

#142a5c

#1c3a7a

#f5e6b8

Secondary

#c9b57a

#d4af37

#7a1f3d

#1f6b4a

#caa036

### Effects

Gold-ground tesserae backgrounds with luminous, shimmering fields, Jewel-toned glass tile colors: deep sapphire, emerald, ruby, Rigid, frontal, hieratic figures with almond eyes, Geometric tessellated borders framing every panel, shadow, blur

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

- **Name:** Byzantine Mosaic
- **Type:** claude-artisan/historical
- **Keywords:** Byzantine Mosaic, Byzantine art, gold-ground mosaic, tesserae mosaic, Gold-ground tesserae backgrounds with luminous, shimmering fields, Jewel-toned glass tile colors: deep sapphire, emerald, ruby, Rigid, frontal, hieratic figures with almond eyes, Geometric tessellated borders framing every panel, historical
- **Era:** 4th–15th century
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0d1b3d, surface: #142a5c, surface-2: #1c3a7a, text: #f5e6b8
- **Secondary:** text-muted: #c9b57a, primary: #d4af37, accent: #7a1f3d, emerald-tile: #1f6b4a, gold-ground: #caa036

## Visual Effects

Gold-ground tesserae backgrounds with luminous, shimmering fields, Jewel-toned glass tile colors: deep sapphire, emerald, ruby, Rigid, frontal, hieratic figures with almond eyes, Geometric tessellated borders framing every panel, shadow, blur

## AI Visual Direction

Byzantine Mosaic, Gold-ground tesserae backgrounds with luminous, shimmering fields, Jewel-toned glass tile colors: deep sapphire, emerald, ruby, Rigid, frontal, hieratic figures with almond eyes, Geometric tessellated borders framing every panel, San Vitale mosaics, Ravenna; Hagia Sophia apse mosaics.

## CSS Technical

```css
/* Byzantine Mosaic — design tokens */
/* 4th–15th century | Eastern Roman (Byzantine) Empire sacred mosaic decoration */
:root {
/* color */
--color-bg: #0d1b3d;
--color-surface: #142a5c;
--color-surface-2: #1c3a7a;
--color-text: #f5e6b8;
--color-text-muted: #c9b57a;
--color-primary: #d4af37;
--color-accent: #7a1f3d;
--color-emerald-tile: #1f6b4a;
--color-gold-ground: #caa036;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-gold-glow: 0 0 20px rgba(212,175,55,0.40), 0 8px 20px rgba(0,0,0,0.45);
--shadow-tile: 0 2px 0 rgba(0,0,0,0.35);
/* font */
--font-sans: 'Cormorant Garamond', 'EB Garamond', serif;
--font-display: 'Cinzel', 'Cormorant Garamond', serif;
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
--ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
/* extra: shimmering gold tesserae gradient + tessellated tile grid */
--tesserae-gradient: linear-gradient(135deg, #caa036 0%, #d4af37 20%, #b8860b 40%, #d4af37 60%, #caa036 80%, #b8860b 100%);
--tile-grid: repeating-linear-gradient(45deg, rgba(0,0,0,0.12) 0 2px, transparent 2px 8px);
}

/* ============================================================
Base component classes — Byzantine Mosaic
Signature move: luminous gold tesserae ground, jewel-toned
glass tile colors, rigid frontal weight, tessellated borders.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-gold-ground);
background-image: var(--tile-grid);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-gold-ground);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-gold-glow); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--tesserae-gradient); background-image: var(--tesserae-gradient), var(--tile-grid);
color: #12100a; font-weight: 700; border: 1px solid var(--color-primary);
box-shadow: var(--shadow-gold-glow);
}
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: 3px solid var(--color-gold-ground);
box-shadow: var(--shadow-tile);
position: relative;
}
.card::before {
content: ""; position: absolute; inset: 4px; border-radius: calc(var(--radius-lg) - 4px);
background-image: var(--tile-grid); opacity: .5; pointer-events: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-gold-ground);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-gold-glow); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-sm);
background: var(--color-emerald-tile); border: 1px solid var(--color-gold-ground); color: var(--color-text);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/byzantine-mosaic.md */
```

## Design System Variables

```css
--bg: #0d1b3d, --fg: #f5e6b8, --accent: #d4af37, --surface: #142a5c, --radius: 4px, --spacing: 16px, --font-display: 'Cinzel', 'Cormorant Garamond', serif, --font-body: 'Cormorant Garamond', 'EB Garamond', serif
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

[![Persian Miniature](https://designmd.app/images/library/697.png) Claude Artisan · Movimentos históricos ### Persian Miniature](https://designmd.app/library/persian-miniature)[![Art Nouveau](https://designmd.app/images/library/305.png) Arte & Ilustracao ### Art Nouveau](https://designmd.app/library/art-nouveau)[![Maximalism](https://designmd.app/images/library/680.png) Claude Artisan · Minimal, maximal & orgânico ### Maximalism](https://designmd.app/library/maximalism)

Last synced: 8/30/2026
