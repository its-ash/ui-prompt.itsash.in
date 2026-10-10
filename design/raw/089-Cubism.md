# Cubism

- Source: <https://designmd.app/library/cubism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:37.301Z

Claude Artisan · Movimentos históricos1907–1920s

# Cubism

Reference for movimentos históricos Cubism. Paris, Pablo Picasso and Georges Braque, developing from analytic cubism's monochrome fracturing into synthetic cubism's collaged, multi-colored planes.

Cubismsynthetic cubismpapier colléfaceted designFragmented, overlapping geometric planes viewed from multiple simultaneous perspectivesMuted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue)Thin black contour lines separating each plane, planes overlapping at odd angleshistorical

Use case: shell de aplicação com navegação e cartões; Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives; Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue)

![Cubism](https://designmd.app/images/library/607.png)

## Historical Context

Paris, Pablo Picasso and Georges Braque, developing from analytic cubism's monochrome fracturing into synthetic cubism's collaged, multi-colored planes. Example: Picasso's Three Musicians and Still Life with Chair Caning; Braque's papier collé compositions..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Cubism"
description: "Cubism visual system, translated from the Claude Artisan catalog for use in digital products. Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives; Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue)"
colors:
primary: "#b5451f"
background: "#e8dcc3"
surface: "#f2e9d8"
text: "#1c1610"
accent: "#2b4c6f"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "Georgia, Times New Roman, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Arial, Helvetica Neue, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Arial, Helvetica Neue, sans-serif"
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

Cubism visual system, translated from the Claude Artisan catalog for use in digital products. Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives; Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue)

- **Category:** historical
- **Era:** 1907–1920s
- **Origin:** Paris, Pablo Picasso and Georges Braque, developing from analytic cubism's monochrome fracturing into synthetic cubism's collaged, multi-colored planes.
- **Reference:** Picasso's Three Musicians and Still Life with Chair Caning; Braque's papier collé compositions.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives
- Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue)
- Thin black contour lines separating each plane, planes overlapping at odd angles

## Colors

- **bg** — #e8dcc3
- **surface** — #f2e9d8
- **surface-2** — #d9c9a3
- **text** — #1c1610
- **text-muted** — #5c4f3a
- **primary** — #b5451f
- **accent** — #2b4c6f
- **ochre** — #c68a2e
- **ink** — #16130f

## Typography

- Display: Georgia, Times New Roman, serif
- Body: Arial, Helvetica Neue, sans-serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives; Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue); Thin black contour lines separating each plane, planes overlapping at odd angles; sombras e elevação; transparência e blur

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

[Download DESIGN.md](https://designmd.app/library/cubism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Cubism — design tokens */
/* 1907–1920s | Fragmented, overlapping multi-perspective planes, synthetic-cubism collage palette */
:root {
/* color */
--color-bg: #e8dcc3;
--color-surface: #f2e9d8;
--color-surface-2: #d9c9a3;
--color-text: #1c1610;
--color-text-muted: #5c4f3a;
--color-primary: #b5451f;
--color-accent: #2b4c6f;
--color-ochre: #c68a2e;
--color-ink: #16130f;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-facet: 3px 3px 0 var(--color-ink);
--shadow-collage: 0 6px 18px rgba(22,19,15,0.28);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Arial', 'Helvetica Neue', sans-serif;
--font-display: 'Georgia', 'Times New Roman', serif;
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
/* extra: faceted plane wash + collage paper texture */
--facet-gradient: linear-gradient(115deg, rgba(181,69,31,0.14) 0 32%, rgba(43,76,111,0.12) 32% 61%, rgba(198,138,46,0.16) 61% 100%);
--collage-paper: repeating-linear-gradient(4deg, rgba(22,19,15,0.04) 0 2px, transparent 2px 6px);
--bg-image: var(--collage-paper), var(--color-bg);
}

/* ============================================================
Base component classes — Cubism
Signature move: overlapping faceted planes with hard black
contours, collaged rather than rendered, cut paper not soft shapes.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-ink);
color: var(--color-surface);
border-bottom: 4px solid var(--color-ochre);
}
.nav a { color: var(--color-surface); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-ink);
box-shadow: var(--shadow-facet);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-1px,-1px); box-shadow: 4px 4px 0 var(--color-ink); }
.btn:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--color-ink); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-surface);
border: 2px solid var(--color-ink);
}
.card {
background: var(--color-surface); background-image: var(--facet-gradient);
border-radius: var(--radius-md); padding: var(--space-6);
border: 2px solid var(--color-ink); box-shadow: var(--shadow-collage);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-ink);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-facet); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-sm);
background: var(--color-ochre); border: 2px solid var(--color-ink); color: var(--color-ink);
transform: skewX(-6deg);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .btn:active { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/cubism.md */
```

### Variables

```
--bg: #e8dcc3, --fg: #1c1610, --accent: #b5451f, --surface: #f2e9d8, --radius: 2px, --spacing: 16px, --font-display: Georgia, Times New Roman, serif, --font-body: Arial, Helvetica Neue, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#e8dcc3

#f2e9d8

#d9c9a3

#1c1610

Secondary

#5c4f3a

#b5451f

#2b4c6f

#c68a2e

#16130f

### Effects

Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives, Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue), Thin black contour lines separating each plane, planes overlapping at odd angles, shadow, blur

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

- **Name:** Cubism
- **Type:** claude-artisan/historical
- **Keywords:** Cubism, synthetic cubism, papier collé, faceted design, Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives, Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue), Thin black contour lines separating each plane, planes overlapping at odd angles, historical
- **Era:** 1907–1920s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #e8dcc3, surface: #f2e9d8, surface-2: #d9c9a3, text: #1c1610
- **Secondary:** text-muted: #5c4f3a, primary: #b5451f, accent: #2b4c6f, ochre: #c68a2e, ink: #16130f

## Visual Effects

Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives, Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue), Thin black contour lines separating each plane, planes overlapping at odd angles, shadow, blur

## AI Visual Direction

Cubism, Fragmented, overlapping geometric planes viewed from multiple simultaneous perspectives, Muted earthy ground (ochre, umber, black) punctuated by bolder collage color (sienna, blue), Thin black contour lines separating each plane, planes overlapping at odd angles, Picasso's Three Musicians and Still Life with Chair Caning; Braque's papier collé compositions.

## CSS Technical

```css
/* Cubism — design tokens */
/* 1907–1920s | Fragmented, overlapping multi-perspective planes, synthetic-cubism collage palette */
:root {
/* color */
--color-bg: #e8dcc3;
--color-surface: #f2e9d8;
--color-surface-2: #d9c9a3;
--color-text: #1c1610;
--color-text-muted: #5c4f3a;
--color-primary: #b5451f;
--color-accent: #2b4c6f;
--color-ochre: #c68a2e;
--color-ink: #16130f;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-facet: 3px 3px 0 var(--color-ink);
--shadow-collage: 0 6px 18px rgba(22,19,15,0.28);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Arial', 'Helvetica Neue', sans-serif;
--font-display: 'Georgia', 'Times New Roman', serif;
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
/* extra: faceted plane wash + collage paper texture */
--facet-gradient: linear-gradient(115deg, rgba(181,69,31,0.14) 0 32%, rgba(43,76,111,0.12) 32% 61%, rgba(198,138,46,0.16) 61% 100%);
--collage-paper: repeating-linear-gradient(4deg, rgba(22,19,15,0.04) 0 2px, transparent 2px 6px);
--bg-image: var(--collage-paper), var(--color-bg);
}

/* ============================================================
Base component classes — Cubism
Signature move: overlapping faceted planes with hard black
contours, collaged rather than rendered, cut paper not soft shapes.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-ink);
color: var(--color-surface);
border-bottom: 4px solid var(--color-ochre);
}
.nav a { color: var(--color-surface); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-ink);
box-shadow: var(--shadow-facet);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-1px,-1px); box-shadow: 4px 4px 0 var(--color-ink); }
.btn:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--color-ink); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-surface);
border: 2px solid var(--color-ink);
}
.card {
background: var(--color-surface); background-image: var(--facet-gradient);
border-radius: var(--radius-md); padding: var(--space-6);
border: 2px solid var(--color-ink); box-shadow: var(--shadow-collage);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-ink);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-facet); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-sm);
background: var(--color-ochre); border: 2px solid var(--color-ink); color: var(--color-ink);
transform: skewX(-6deg);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .btn:active { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/cubism.md */
```

## Design System Variables

```css
--bg: #e8dcc3, --fg: #1c1610, --accent: #b5451f, --surface: #f2e9d8, --radius: 2px, --spacing: 16px, --font-display: Georgia, Times New Roman, serif, --font-body: Arial, Helvetica Neue, sans-serif
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

[![Art Deco](https://designmd.app/images/library/304.png) Arte & Ilustracao ### Art Deco](https://designmd.app/library/art-deco)[![Constructivism](https://designmd.app/images/library/603.png) Claude Artisan · Movimentos históricos ### Constructivism](https://designmd.app/library/constructivism)[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)

Last synced: 8/30/2026
