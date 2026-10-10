# Persian Miniature

- Source: <https://designmd.app/library/persian-miniature>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:15.311Z

Claude Artisan · Movimentos históricos13th–17th century

# Persian Miniature

Reference for movimentos históricos Persian Miniature. Persianate manuscript painting tradition across Timurid, Safavid, and Mughal courts.

Persian MiniaturePersianate manuscript paintingTimurid/Safavid miniatureIslamic manuscript illustrationDense, intricate detail across flattened, multi-perspective compositionsJewel-toned mineral pigments: lapis blue, vermillion, gold leafOrnamental floral (islimi) borders framing every panelFine, precise linework and delicate figure renderinghistorical

Use case: hero, superfície, conteúdo e grade responsiva; Dense, intricate detail across flattened, multi-perspective compositions; Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf

![Persian Miniature](https://designmd.app/images/library/697.png)

## Historical Context

Persianate manuscript painting tradition across Timurid, Safavid, and Mughal courts. Example: Shahnameh manuscript illustrations; Behzad's court scenes..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Persian Miniature"
description: "Persian Miniature visual system, translated from the Claude Artisan catalog for use in digital products. Dense, intricate detail across flattened, multi-perspective compositions; Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf"
colors:
primary: "#1c398e"
background: "#f6ecd2"
surface: "#fbf5e4"
text: "#2a1a3d"
accent: "#a61b29"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Scheherazade New', 'Cormorant Garamond', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', 'Scheherazade New', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', 'Scheherazade New', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "10px"
lg: "20px"
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

Persian Miniature visual system, translated from the Claude Artisan catalog for use in digital products. Dense, intricate detail across flattened, multi-perspective compositions; Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf

- **Category:** historical
- **Era:** 13th–17th century
- **Origin:** Persianate manuscript painting tradition across Timurid, Safavid, and Mughal courts.
- **Reference:** Shahnameh manuscript illustrations; Behzad's court scenes.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dense, intricate detail across flattened, multi-perspective compositions
- Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf
- Ornamental floral (islimi) borders framing every panel
- Fine, precise linework and delicate figure rendering

## Colors

- **bg** — #f6ecd2
- **surface** — #fbf5e4
- **surface-2** — #ecdcb0
- **text** — #2a1a3d
- **text-muted** — #5c4a70
- **primary** — #1c398e
- **accent** — #a61b29
- **gold-leaf** — #c9972c
- **turquoise** — #2f7d6b

## Typography

- Display: 'Scheherazade New', 'Cormorant Garamond', serif
- Body: 'Cormorant Garamond', 'Scheherazade New', serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dense, intricate detail across flattened, multi-perspective compositions; Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf; Ornamental floral (islimi) borders framing every panel; Fine, precise linework and delicate figure rendering; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 10px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/persian-miniature/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Persian Miniature — design tokens */
/* 13th–17th century | Persianate manuscript painting tradition */
:root {
/* color */
--color-bg: #f6ecd2;
--color-surface: #fbf5e4;
--color-surface-2: #ecdcb0;
--color-text: #2a1a3d;
--color-text-muted: #5c4a70;
--color-primary: #1c398e;
--color-accent: #a61b29;
--color-gold-leaf: #c9972c;
--color-turquoise: #2f7d6b;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-gilt-frame: 0 0 0 3px #c9972c, 0 4px 14px rgba(42,26,61,0.25);
--shadow-panel: 0 2px 10px rgba(42,26,61,0.18);
/* font */
--font-sans: 'Cormorant Garamond', 'Scheherazade New', serif;
--font-display: 'Scheherazade New', 'Cormorant Garamond', serif;
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
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
/* extra: islimi floral border rule + lapis/vermillion wash */
--islimi-border: repeating-linear-gradient(90deg, #c9972c 0 3px, transparent 3px 14px);
--lapis-vermillion-wash: linear-gradient(135deg, rgba(28,57,142,0.08), rgba(166,27,41,0.08));
}

/* ============================================================
Base component classes — Persian Miniature
Signature move: ornamental gold islimi border framing every
panel, flattened multi-perspective composition, jewel washes.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--lapis-vermillion-wash); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-gold-leaf);
position: relative;
}
.nav::after {
content: ""; position: absolute; left: 0; right: 0; bottom: -6px; height: 3px;
background: var(--islimi-border);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-gold-leaf);
cursor: pointer; transition: box-shadow .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-gilt-frame); }
.btn:active { box-shadow: var(--shadow-panel); }
.btn:focus-visible { outline: 2px solid var(--color-gold-leaf); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-surface); font-weight: 700;
border: 1px solid var(--color-gold-leaf); box-shadow: var(--shadow-panel);
}
.btn--primary:hover { box-shadow: var(--shadow-gilt-frame); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); box-shadow: var(--shadow-panel);
position: relative; overflow: hidden;
}
.card::before {
content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px;
background: var(--islimi-border);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-gold-leaf);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-gilt-frame); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-turquoise); border: 1px solid var(--color-gold-leaf); color: var(--color-surface);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/persian-miniature.md */
```

### Variables

```
--bg: #f6ecd2, --fg: #2a1a3d, --accent: #1c398e, --surface: #fbf5e4, --radius: 10px, --spacing: 16px, --font-display: 'Scheherazade New', 'Cormorant Garamond', serif, --font-body: 'Cormorant Garamond', 'Scheherazade New', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f6ecd2

#fbf5e4

#ecdcb0

#2a1a3d

Secondary

#5c4a70

#1c398e

#a61b29

#c9972c

#2f7d6b

### Effects

Dense, intricate detail across flattened, multi-perspective compositions, Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf, Ornamental floral (islimi) borders framing every panel, Fine, precise linework and delicate figure rendering, shadow, blur

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

- **Name:** Persian Miniature
- **Type:** claude-artisan/historical
- **Keywords:** Persian Miniature, Persianate manuscript painting, Timurid/Safavid miniature, Islamic manuscript illustration, Dense, intricate detail across flattened, multi-perspective compositions, Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf, Ornamental floral (islimi) borders framing every panel, Fine, precise linework and delicate figure rendering, historical
- **Era:** 13th–17th century
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f6ecd2, surface: #fbf5e4, surface-2: #ecdcb0, text: #2a1a3d
- **Secondary:** text-muted: #5c4a70, primary: #1c398e, accent: #a61b29, gold-leaf: #c9972c, turquoise: #2f7d6b

## Visual Effects

Dense, intricate detail across flattened, multi-perspective compositions, Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf, Ornamental floral (islimi) borders framing every panel, Fine, precise linework and delicate figure rendering, shadow, blur

## AI Visual Direction

Persian Miniature, Dense, intricate detail across flattened, multi-perspective compositions, Jewel-toned mineral pigments: lapis blue, vermillion, gold leaf, Ornamental floral (islimi) borders framing every panel, Fine, precise linework and delicate figure rendering, Shahnameh manuscript illustrations; Behzad's court scenes.

## CSS Technical

```css
/* Persian Miniature — design tokens */
/* 13th–17th century | Persianate manuscript painting tradition */
:root {
/* color */
--color-bg: #f6ecd2;
--color-surface: #fbf5e4;
--color-surface-2: #ecdcb0;
--color-text: #2a1a3d;
--color-text-muted: #5c4a70;
--color-primary: #1c398e;
--color-accent: #a61b29;
--color-gold-leaf: #c9972c;
--color-turquoise: #2f7d6b;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-gilt-frame: 0 0 0 3px #c9972c, 0 4px 14px rgba(42,26,61,0.25);
--shadow-panel: 0 2px 10px rgba(42,26,61,0.18);
/* font */
--font-sans: 'Cormorant Garamond', 'Scheherazade New', serif;
--font-display: 'Scheherazade New', 'Cormorant Garamond', serif;
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
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
/* extra: islimi floral border rule + lapis/vermillion wash */
--islimi-border: repeating-linear-gradient(90deg, #c9972c 0 3px, transparent 3px 14px);
--lapis-vermillion-wash: linear-gradient(135deg, rgba(28,57,142,0.08), rgba(166,27,41,0.08));
}

/* ============================================================
Base component classes — Persian Miniature
Signature move: ornamental gold islimi border framing every
panel, flattened multi-perspective composition, jewel washes.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--lapis-vermillion-wash); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-gold-leaf);
position: relative;
}
.nav::after {
content: ""; position: absolute; left: 0; right: 0; bottom: -6px; height: 3px;
background: var(--islimi-border);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-gold-leaf);
cursor: pointer; transition: box-shadow .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-gilt-frame); }
.btn:active { box-shadow: var(--shadow-panel); }
.btn:focus-visible { outline: 2px solid var(--color-gold-leaf); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-surface); font-weight: 700;
border: 1px solid var(--color-gold-leaf); box-shadow: var(--shadow-panel);
}
.btn--primary:hover { box-shadow: var(--shadow-gilt-frame); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); box-shadow: var(--shadow-panel);
position: relative; overflow: hidden;
}
.card::before {
content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px;
background: var(--islimi-border);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-gold-leaf);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-gilt-frame); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-turquoise); border: 1px solid var(--color-gold-leaf); color: var(--color-surface);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/persian-miniature.md */
```

## Design System Variables

```css
--bg: #f6ecd2, --fg: #2a1a3d, --accent: #1c398e, --surface: #fbf5e4, --radius: 10px, --spacing: 16px, --font-display: 'Scheherazade New', 'Cormorant Garamond', serif, --font-body: 'Cormorant Garamond', 'Scheherazade New', serif
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

[![Byzantine Mosaic](https://designmd.app/images/library/593.png) Claude Artisan · Movimentos históricos ### Byzantine Mosaic](https://designmd.app/library/byzantine-mosaic)[![Art Nouveau](https://designmd.app/images/library/305.png) Arte & Ilustracao ### Art Nouveau](https://designmd.app/library/art-nouveau)[![Maximalism](https://designmd.app/images/library/680.png) Claude Artisan · Minimal, maximal & orgânico ### Maximalism](https://designmd.app/library/maximalism)

Last synced: 8/30/2026
