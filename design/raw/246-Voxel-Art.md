# Voxel Art

- Source: <https://designmd.app/library/voxel>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:47.293Z

Claude Artisan · Textura, material & renderização2010s–present

# Voxel Art

Reference for textura, material & renderização Voxel Art. 3D cubes as pixels (MagicaVoxel, Minecraft-adjacent).

Voxel Artvoxel3D pixelCubic 3D 'pixels' build objectsBlocky charming formsBright toy-like palettesIsometric voxel scenestexture

Use case: hero, superfície, conteúdo e grade responsiva; Cubic 3D 'pixels' build objects; Blocky charming forms

![Voxel Art](https://designmd.app/images/library/749.png)

## Historical Context

3D cubes as pixels (MagicaVoxel, Minecraft-adjacent). Example: Minecraft; MagicaVoxel dioramas..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Voxel Art"
description: "Voxel Art visual system, translated from the Claude Artisan catalog for use in digital products. Cubic 3D 'pixels' build objects; Blocky charming forms"
colors:
primary: "#ff6b3d"
background: "#a8e0f0"
surface: "#ffffff"
text: "#16324a"
accent: "#2fbf71"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Press Start 2P', 'Space Grotesk', monospace"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Space Grotesk', 'Segoe UI', sans-serif"
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

Voxel Art visual system, translated from the Claude Artisan catalog for use in digital products. Cubic 3D 'pixels' build objects; Blocky charming forms

- **Category:** texture
- **Era:** 2010s–present
- **Origin:** 3D cubes as pixels (MagicaVoxel, Minecraft-adjacent).
- **Reference:** Minecraft; MagicaVoxel dioramas.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Cubic 3D 'pixels' build objects
- Blocky charming forms
- Bright toy-like palettes
- Isometric voxel scenes

## Colors

- **bg** — #a8e0f0
- **surface** — #ffffff
- **surface-strong** — #eef7fb
- **border** — #16324a
- **text** — #16324a
- **text-muted** — #3b5a72
- **primary** — #ff6b3d
- **accent** — #2fbf71
- **yellow** — #ffc93c

## Typography

- Display: 'Press Start 2P', 'Space Grotesk', monospace
- Body: 'Space Grotesk', 'Segoe UI', sans-serif
- Mono: 'VT323', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Cubic 3D 'pixels' build objects; Blocky charming forms; Bright toy-like palettes; Isometric voxel scenes; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/voxel/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Voxel Art — design tokens */
/* 2010s–present | 3D cubes as pixels (MagicaVoxel, Minecraft-adjacent), condensed */
:root {
/* color */
--color-bg: #a8e0f0;
--color-surface: #ffffff;
--color-surface-strong: #eef7fb;
--color-border: #16324a;
--color-text: #16324a;
--color-text-muted: #3b5a72;
--color-primary: #ff6b3d;
--color-accent: #2fbf71;
--color-yellow: #ffc93c;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font */
--font-sans: 'Space Grotesk', 'Segoe UI', sans-serif;
--font-display: 'Press Start 2P', 'Space Grotesk', monospace;
--font-mono: 'VT323', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 2.75rem;
--text-5xl: 3.5rem;
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
--ease-standard: steps(4, end);
/* extra (signature gradients, composite borders, filters) */
--voxel-top: linear-gradient(180deg, rgba(255,255,255,0.55) 0 30%, transparent 30%);
--voxel-side: 4px solid var(--color-border);
--pixel-notch: 8px;
}

/* ============================================================
Base component classes — Voxel Art
Signature move: a hard offset "cube shadow" (--shadow-*) plus a chunky
solid outline, with a top-face highlight gradient — no blur, no curves.
Repeats on nav, btn, and card.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: var(--voxel-side); box-shadow: var(--shadow-md); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-yellow); border: var(--voxel-side); background-image: var(--voxel-top);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .1s var(--ease-standard), box-shadow .1s var(--ease-standard); }
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(3px,3px); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #16110c; background-image: var(--voxel-top); }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: var(--voxel-side); box-shadow: var(--shadow-lg); border-radius: var(--radius-md); position: relative; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 10px; background: var(--voxel-top); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--voxel-side); box-shadow: var(--shadow-sm); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #0a2416;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/voxel.md */
```

### Variables

```
--bg: #a8e0f0, --fg: #16324a, --accent: #ff6b3d, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Press Start 2P', 'Space Grotesk', monospace, --font-body: 'Space Grotesk', 'Segoe UI', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#a8e0f0

#ffffff

#eef7fb

#16324a

Secondary

#16324a

#3b5a72

#ff6b3d

#2fbf71

#ffc93c

### Effects

Cubic 3D 'pixels' build objects, Blocky charming forms, Bright toy-like palettes, Isometric voxel scenes, shadow

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

- **Name:** Voxel Art
- **Type:** claude-artisan/texture
- **Keywords:** Voxel Art, voxel, 3D pixel, Cubic 3D 'pixels' build objects, Blocky charming forms, Bright toy-like palettes, Isometric voxel scenes, texture
- **Era:** 2010s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #a8e0f0, surface: #ffffff, surface-strong: #eef7fb, border: #16324a
- **Secondary:** text: #16324a, text-muted: #3b5a72, primary: #ff6b3d, accent: #2fbf71, yellow: #ffc93c

## Visual Effects

Cubic 3D 'pixels' build objects, Blocky charming forms, Bright toy-like palettes, Isometric voxel scenes, shadow

## AI Visual Direction

Voxel Art, Cubic 3D 'pixels' build objects, Blocky charming forms, Bright toy-like palettes, Isometric voxel scenes, Minecraft; MagicaVoxel dioramas.

## CSS Technical

```css
/* Voxel Art — design tokens */
/* 2010s–present | 3D cubes as pixels (MagicaVoxel, Minecraft-adjacent), condensed */
:root {
/* color */
--color-bg: #a8e0f0;
--color-surface: #ffffff;
--color-surface-strong: #eef7fb;
--color-border: #16324a;
--color-text: #16324a;
--color-text-muted: #3b5a72;
--color-primary: #ff6b3d;
--color-accent: #2fbf71;
--color-yellow: #ffc93c;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font */
--font-sans: 'Space Grotesk', 'Segoe UI', sans-serif;
--font-display: 'Press Start 2P', 'Space Grotesk', monospace;
--font-mono: 'VT323', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 2.75rem;
--text-5xl: 3.5rem;
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
--ease-standard: steps(4, end);
/* extra (signature gradients, composite borders, filters) */
--voxel-top: linear-gradient(180deg, rgba(255,255,255,0.55) 0 30%, transparent 30%);
--voxel-side: 4px solid var(--color-border);
--pixel-notch: 8px;
}

/* ============================================================
Base component classes — Voxel Art
Signature move: a hard offset "cube shadow" (--shadow-*) plus a chunky
solid outline, with a top-face highlight gradient — no blur, no curves.
Repeats on nav, btn, and card.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: var(--voxel-side); box-shadow: var(--shadow-md); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-yellow); border: var(--voxel-side); background-image: var(--voxel-top);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .1s var(--ease-standard), box-shadow .1s var(--ease-standard); }
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(3px,3px); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #16110c; background-image: var(--voxel-top); }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: var(--voxel-side); box-shadow: var(--shadow-lg); border-radius: var(--radius-md); position: relative; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 10px; background: var(--voxel-top); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--voxel-side); box-shadow: var(--shadow-sm); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #0a2416;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/voxel.md */
```

## Design System Variables

```css
--bg: #a8e0f0, --fg: #16324a, --accent: #ff6b3d, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Press Start 2P', 'Space Grotesk', monospace, --font-body: 'Space Grotesk', 'Segoe UI', sans-serif
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

[![Pixel Art](https://designmd.app/images/library/52.png) Retro & Pop ### Pixel Art](https://designmd.app/library/pixel-art)[![Low Poly](https://designmd.app/images/library/671.png) Claude Artisan · Textura, material & renderização ### Low Poly](https://designmd.app/library/low-poly)

Last synced: 8/30/2026
