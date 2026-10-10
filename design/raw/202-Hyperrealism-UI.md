# Hyperrealism UI

- Source: <https://designmd.app/library/realism-ui>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:39.297Z

Claude Artisan · Morphism & profundidade tátil2008–2013

# Hyperrealism UI

Reference for morphism & profundidade tátil Hyperrealism UI. High-water mark of skeuomorphic app design.

Hyperrealism UIphotoreal UIrealistic skeuomorphismPhotorealistic materials and reflectionsPhysically plausible lightingDetailed micro-texturesTactile knobs, dials, switchesmorphism

Use case: shell de aplicação com navegação e cartões; Photorealistic materials and reflections; Physically plausible lighting

![Hyperrealism UI](https://designmd.app/images/library/709.png)

## Historical Context

High-water mark of skeuomorphic app design. Example: Korg iMS-20 synth app; early podcast/voice-memo apps..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Hyperrealism UI"
description: "Hyperrealism UI visual system, translated from the Claude Artisan catalog for use in digital products. Photorealistic materials and reflections; Physically plausible lighting"
colors:
primary: "#3ea6ff"
background: "#2a2a2c"
surface: "#38383b"
text: "#f5f5f2"
accent: "#ffb238"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Helvetica Neue', 'Futura', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "10px"
lg: "16px"
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

Hyperrealism UI visual system, translated from the Claude Artisan catalog for use in digital products. Photorealistic materials and reflections; Physically plausible lighting

- **Category:** morphism
- **Era:** 2008–2013
- **Origin:** High-water mark of skeuomorphic app design.
- **Reference:** Korg iMS-20 synth app; early podcast/voice-memo apps.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Photorealistic materials and reflections
- Physically plausible lighting
- Detailed micro-textures
- Tactile knobs, dials, switches

## Colors

- **bg** — #2a2a2c
- **surface** — #38383b
- **surface-strong** — #46464a
- **border** — #1c1c1e
- **text** — #f5f5f2
- **text-muted** — #b8b8b4
- **primary** — #3ea6ff
- **accent** — #ffb238
- **highlight** — rgba(255,255,255,0.22)

## Typography

- Display: 'Helvetica Neue', 'Futura', sans-serif
- Body: 'Helvetica Neue', Helvetica, Arial, sans-serif
- Mono: ui-monospace, 'Menlo', monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Photorealistic materials and reflections; Physically plausible lighting; Detailed micro-textures; Tactile knobs, dials, switches; sombras e elevação

## Shapes

- Radius scale: 6px, 10px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/realism-ui/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Hyperrealism UI — design tokens */
/* 2008–2013 | High-water mark of skeuomorphic app design, condensed */
:root {
/* color */
--color-bg: #2a2a2c;
--color-surface: #38383b;
--color-surface-strong: #46464a;
--color-border: #1c1c1e;
--color-text: #f5f5f2;
--color-text-muted: #b8b8b4;
--color-primary: #3ea6ff;
--color-accent: #ffb238;
--color-highlight: rgba(255,255,255,0.22);
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow: layered bevels simulate machined metal and physical light */
--shadow-sm: 0 1px 1px rgba(0,0,0,0.5), inset 0 1px 0 var(--color-highlight);
--shadow-md: 0 4px 10px rgba(0,0,0,0.55), inset 0 1px 0 var(--color-highlight), inset 0 -2px 4px rgba(0,0,0,0.35);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.6), inset 0 1px 0 var(--color-highlight), inset 0 -3px 6px rgba(0,0,0,0.4);
/* font */
--font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
--font-display: 'Helvetica Neue', 'Futura', sans-serif;
--font-mono: ui-monospace, 'Menlo', monospace;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: brushed-metal gradient + inset LED glow, the two signature textures */
--brushed-metal: repeating-linear-gradient(180deg, #3a3a3d 0px, #3d3d40 1px, #363638 2px);
--led-glow: 0 0 6px 2px color-mix(in srgb, var(--color-primary) 70%, transparent);
}

/* ============================================================
Base component classes — Hyperrealism UI
Signature move: brushed-metal gradient texture + a stacked inset/outset
bevel shadow that simulates a machined physical panel with a top-edge
highlight and bottom-edge shade, repeated on nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--brushed-metal);
border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--brushed-metal); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); cursor: pointer;
transition: box-shadow .15s var(--ease-standard), transform .1s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-lg); }
.btn:active { transform: translateY(1px); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: linear-gradient(180deg, #57b6ff, #2f8fe0); color: #06182a; box-shadow: var(--shadow-md), var(--led-glow); }
.card { background: var(--brushed-metal); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6); border: 1px solid var(--color-border); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: #232325; border-radius: var(--radius-md);
border: 1px solid var(--color-border);
box-shadow: inset 0 2px 4px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,0,0,0.4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: inset 0 2px 4px rgba(0,0,0,0.6), var(--led-glow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #2b1900; box-shadow: var(--shadow-sm); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/realism-ui.md */
```

### Variables

```
--bg: #2a2a2c, --fg: #f5f5f2, --accent: #3ea6ff, --surface: #38383b, --radius: 10px, --spacing: 16px, --font-display: 'Helvetica Neue', 'Futura', sans-serif, --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#2a2a2c

#38383b

#46464a

#1c1c1e

Secondary

#f5f5f2

#b8b8b4

#3ea6ff

#ffb238

### Effects

Photorealistic materials and reflections, Physically plausible lighting, Detailed micro-textures, Tactile knobs, dials, switches, shadow

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

- **Name:** Hyperrealism UI
- **Type:** claude-artisan/morphism
- **Keywords:** Hyperrealism UI, photoreal UI, realistic skeuomorphism, Photorealistic materials and reflections, Physically plausible lighting, Detailed micro-textures, Tactile knobs, dials, switches, morphism
- **Era:** 2008–2013
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #2a2a2c, surface: #38383b, surface-strong: #46464a, border: #1c1c1e
- **Secondary:** text: #f5f5f2, text-muted: #b8b8b4, primary: #3ea6ff, accent: #ffb238, highlight: rgba(255,255,255,0.22)

## Visual Effects

Photorealistic materials and reflections, Physically plausible lighting, Detailed micro-textures, Tactile knobs, dials, switches, shadow

## AI Visual Direction

Hyperrealism UI, Photorealistic materials and reflections, Physically plausible lighting, Detailed micro-textures, Tactile knobs, dials, switches, Korg iMS-20 synth app; early podcast/voice-memo apps.

## CSS Technical

```css
/* Hyperrealism UI — design tokens */
/* 2008–2013 | High-water mark of skeuomorphic app design, condensed */
:root {
/* color */
--color-bg: #2a2a2c;
--color-surface: #38383b;
--color-surface-strong: #46464a;
--color-border: #1c1c1e;
--color-text: #f5f5f2;
--color-text-muted: #b8b8b4;
--color-primary: #3ea6ff;
--color-accent: #ffb238;
--color-highlight: rgba(255,255,255,0.22);
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow: layered bevels simulate machined metal and physical light */
--shadow-sm: 0 1px 1px rgba(0,0,0,0.5), inset 0 1px 0 var(--color-highlight);
--shadow-md: 0 4px 10px rgba(0,0,0,0.55), inset 0 1px 0 var(--color-highlight), inset 0 -2px 4px rgba(0,0,0,0.35);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.6), inset 0 1px 0 var(--color-highlight), inset 0 -3px 6px rgba(0,0,0,0.4);
/* font */
--font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
--font-display: 'Helvetica Neue', 'Futura', sans-serif;
--font-mono: ui-monospace, 'Menlo', monospace;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: brushed-metal gradient + inset LED glow, the two signature textures */
--brushed-metal: repeating-linear-gradient(180deg, #3a3a3d 0px, #3d3d40 1px, #363638 2px);
--led-glow: 0 0 6px 2px color-mix(in srgb, var(--color-primary) 70%, transparent);
}

/* ============================================================
Base component classes — Hyperrealism UI
Signature move: brushed-metal gradient texture + a stacked inset/outset
bevel shadow that simulates a machined physical panel with a top-edge
highlight and bottom-edge shade, repeated on nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--brushed-metal);
border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--brushed-metal); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); cursor: pointer;
transition: box-shadow .15s var(--ease-standard), transform .1s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-lg); }
.btn:active { transform: translateY(1px); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: linear-gradient(180deg, #57b6ff, #2f8fe0); color: #06182a; box-shadow: var(--shadow-md), var(--led-glow); }
.card { background: var(--brushed-metal); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6); border: 1px solid var(--color-border); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: #232325; border-radius: var(--radius-md);
border: 1px solid var(--color-border);
box-shadow: inset 0 2px 4px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,0,0,0.4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: inset 0 2px 4px rgba(0,0,0,0.6), var(--led-glow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #2b1900; box-shadow: var(--shadow-sm); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/realism-ui.md */
```

## Design System Variables

```css
--bg: #2a2a2c, --fg: #f5f5f2, --accent: #3ea6ff, --surface: #38383b, --radius: 10px, --spacing: 16px, --font-display: 'Helvetica Neue', 'Futura', sans-serif, --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif
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

[![Skeuomorphism](https://designmd.app/images/library/13.png) Flat & Soft UI ### Skeuomorphism](https://designmd.app/library/skeuomorphism)

Last synced: 8/30/2026
