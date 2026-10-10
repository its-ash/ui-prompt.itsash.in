# Holographic / Iridescent

- Source: <https://designmd.app/library/holographic>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:05.263Z

Claude Artisan · Textura, material & renderização2017–present

# Holographic / Iridescent

Reference for textura, material & renderização Holographic / Iridescent. Holographic foil / oil-slick trend.

Holographic / IridescentiridescentfoilholoRainbow gradient that shifts by angleOil-slick / soap-bubble iridescenceMetallic foil sheen on dark or whiteFuturistic, dreamy, premiumtexture

Use case: superfície material com conteúdo em camadas; Rainbow gradient that shifts by angle; Oil-slick / soap-bubble iridescence

![Holographic / Iridescent](https://designmd.app/images/library/658.png)

## Historical Context

Holographic foil / oil-slick trend. Example: Holographic packaging; iridescent brand identities..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Holographic / Iridescent"
description: "Holographic / Iridescent visual system, translated from the Claude Artisan catalog for use in digital products. Rainbow gradient that shifts by angle; Oil-slick / soap-bubble iridescence"
colors:
primary: "#a0f0ff"
background: "#0b0b12"
surface: "#0b0b12"
text: "#ffffff"
accent: "#ff9ff3"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Space Grotesk', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Space Grotesk', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Space Grotesk', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "18px"
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

Holographic / Iridescent visual system, translated from the Claude Artisan catalog for use in digital products. Rainbow gradient that shifts by angle; Oil-slick / soap-bubble iridescence

- **Category:** texture
- **Era:** 2017–present
- **Origin:** Holographic foil / oil-slick trend.
- **Reference:** Holographic packaging; iridescent brand identities.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Rainbow gradient that shifts by angle
- Oil-slick / soap-bubble iridescence
- Metallic foil sheen on dark or white
- Futuristic, dreamy, premium

## Colors

- **bg** — #0b0b12
- **surface** — rgba(255,255,255,0.08)
- **text** — #ffffff
- **text-muted** — #c7c7d9
- **primary** — #a0f0ff
- **accent** — #ff9ff3
- **cyan** — #7cf9ff
- **pink** — #ff9ff3
- **lime** — #c8ff8f

## Typography

- Display: 'Space Grotesk', sans-serif
- Body: 'Space Grotesk', system-ui, sans-serif
- Mono: 'Space Mono', monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rainbow gradient that shifts by angle; Oil-slick / soap-bubble iridescence; Metallic foil sheen on dark or white; Futuristic, dreamy, premium; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 10px, 18px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/holographic/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Holographic / Iridescent — design tokens (generated from style_catalog.json) */
/* 2017–present | Holographic foil / oil-slick trend. */
:root {
/* color */
--color-bg: #0b0b12;
--color-surface: rgba(255,255,255,0.08);
--color-text: #ffffff;
--color-text-muted: #c7c7d9;
--color-primary: #a0f0ff;
--color-accent: #ff9ff3;
--color-cyan: #7cf9ff;
--color-pink: #ff9ff3;
--color-lime: #c8ff8f;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-iri: 0 8px 30px rgba(160,240,255,0.35);
/* blur */
--blur-backdrop: 8px;
/* font */
--font-sans: 'Space Grotesk', system-ui, sans-serif;
--font-display: 'Space Grotesk', sans-serif;
--font-mono: 'Space Mono', monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--holo: linear-gradient(115deg, #ff9ff3, #a0f0ff, #c8ff8f, #ff9ff3);
--foil: conic-gradient(from 0deg, #ff9ff3, #a0f0ff, #c8ff8f, #ffd28f, #ff9ff3);
}

/* ============================================================
Base component classes — Holographic / Iridescent (token-driven).
Signature move lives in references/00-flagship-implementation-specs/holographic.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-iri);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-iri); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-iri); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(1.05); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/holographic.md */
```

### Variables

```
--bg: #0b0b12, --fg: #ffffff, --accent: #a0f0ff, --surface: #0b0b12, --radius: 18px, --spacing: 16px, --font-display: 'Space Grotesk', sans-serif, --font-body: 'Space Grotesk', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0b0b12

#ffffff

#c7c7d9

Secondary

#a0f0ff

#ff9ff3

#7cf9ff

#c8ff8f

### Effects

Rainbow gradient that shifts by angle, Oil-slick / soap-bubble iridescence, Metallic foil sheen on dark or white, Futuristic, dreamy, premium, shadow, blur

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

- **Name:** Holographic / Iridescent
- **Type:** claude-artisan/texture
- **Keywords:** Holographic / Iridescent, iridescent, foil, holo, Rainbow gradient that shifts by angle, Oil-slick / soap-bubble iridescence, Metallic foil sheen on dark or white, Futuristic, dreamy, premium, texture
- **Era:** 2017–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0b0b12, surface: rgba(255,255,255,0.08), text: #ffffff, text-muted: #c7c7d9
- **Secondary:** primary: #a0f0ff, accent: #ff9ff3, cyan: #7cf9ff, pink: #ff9ff3, lime: #c8ff8f

## Visual Effects

Rainbow gradient that shifts by angle, Oil-slick / soap-bubble iridescence, Metallic foil sheen on dark or white, Futuristic, dreamy, premium, shadow, blur

## AI Visual Direction

Holographic / Iridescent, Rainbow gradient that shifts by angle, Oil-slick / soap-bubble iridescence, Metallic foil sheen on dark or white, Futuristic, dreamy, premium, Holographic packaging; iridescent brand identities.

## CSS Technical

```css
/* Holographic / Iridescent — design tokens (generated from style_catalog.json) */
/* 2017–present | Holographic foil / oil-slick trend. */
:root {
/* color */
--color-bg: #0b0b12;
--color-surface: rgba(255,255,255,0.08);
--color-text: #ffffff;
--color-text-muted: #c7c7d9;
--color-primary: #a0f0ff;
--color-accent: #ff9ff3;
--color-cyan: #7cf9ff;
--color-pink: #ff9ff3;
--color-lime: #c8ff8f;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-iri: 0 8px 30px rgba(160,240,255,0.35);
/* blur */
--blur-backdrop: 8px;
/* font */
--font-sans: 'Space Grotesk', system-ui, sans-serif;
--font-display: 'Space Grotesk', sans-serif;
--font-mono: 'Space Mono', monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--holo: linear-gradient(115deg, #ff9ff3, #a0f0ff, #c8ff8f, #ff9ff3);
--foil: conic-gradient(from 0deg, #ff9ff3, #a0f0ff, #c8ff8f, #ffd28f, #ff9ff3);
}

/* ============================================================
Base component classes — Holographic / Iridescent (token-driven).
Signature move lives in references/00-flagship-implementation-specs/holographic.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-iri);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-iri); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-iri); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(1.05); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/holographic.md */
```

## Design System Variables

```css
--bg: #0b0b12, --fg: #ffffff, --accent: #a0f0ff, --surface: #0b0b12, --radius: 18px, --spacing: 16px, --font-display: 'Space Grotesk', sans-serif, --font-body: 'Space Grotesk', system-ui, sans-serif
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

[![Chrome / Liquid Metal](https://designmd.app/images/library/596.png) Claude Artisan · Textura, material & renderização ### Chrome / Liquid Metal](https://designmd.app/library/chrome-metal)[![Mesh Gradient](https://designmd.app/images/library/682.png) Claude Artisan · Morphism & profundidade tátil ### Mesh Gradient](https://designmd.app/library/mesh-gradient)

Last synced: 8/30/2026
