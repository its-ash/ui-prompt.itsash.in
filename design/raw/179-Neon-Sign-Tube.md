# Neon Sign / Tube

- Source: <https://designmd.app/library/neon-tube>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:00.317Z

Claude Artisan · Textura, material & renderizaçãoSignage heritage → web

# Neon Sign / Tube

Reference for textura, material & renderização Neon Sign / Tube. Neon-tube signage simulated with glow.

Neon Sign / Tubeneonneon glowtube lightGlowing tube strokes on dark groundSaturated pink/cyan/orange light bloomFlicker and reflectionNightlife, retro, vividtexture

Use case: hero, superfície, conteúdo e grade responsiva; Glowing tube strokes on dark ground; Saturated pink/cyan/orange light bloom

![Neon Sign / Tube](https://designmd.app/images/library/689.png)

## Historical Context

Neon-tube signage simulated with glow. Example: Bar/nightlife branding; synthwave crossovers..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Neon Sign / Tube"
description: "Neon Sign / Tube visual system, translated from the Claude Artisan catalog for use in digital products. Glowing tube strokes on dark ground; Saturated pink/cyan/orange light bloom"
colors:
primary: "#ff2ee0"
background: "#0a0710"
surface: "#150e22"
text: "#fbeaff"
accent: "#24f0ff"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Pacifico', 'Brush Script MT', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Futura', 'Poppins', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Futura', 'Poppins', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "14px"
lg: "24px"
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

Neon Sign / Tube visual system, translated from the Claude Artisan catalog for use in digital products. Glowing tube strokes on dark ground; Saturated pink/cyan/orange light bloom

- **Category:** texture
- **Era:** Signage heritage → web
- **Origin:** Neon-tube signage simulated with glow.
- **Reference:** Bar/nightlife branding; synthwave crossovers.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Glowing tube strokes on dark ground
- Saturated pink/cyan/orange light bloom
- Flicker and reflection
- Nightlife, retro, vivid

## Colors

- **bg** — #0a0710
- **surface** — #150e22
- **surface-strong** — #1f1530
- **border** — rgba(255, 79, 216, 0.35)
- **text** — #fbeaff
- **text-muted** — #c6a9d6
- **primary** — #ff2ee0
- **accent** — #24f0ff
- **orange** — #ff9d2e
- **glass-tube** — #2a1e3d

## Typography

- Display: 'Pacifico', 'Brush Script MT', cursive
- Body: 'Futura', 'Poppins', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Glowing tube strokes on dark ground; Saturated pink/cyan/orange light bloom; Flicker and reflection; Nightlife, retro, vivid; sombras e elevação

## Shapes

- Radius scale: 6px, 14px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/neon-tube/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Neon Sign / Tube — design tokens */
/* Signage heritage → web | Neon-tube signage simulated with glow, condensed */
:root {
/* color */
--color-bg: #0a0710;
--color-surface: #150e22;
--color-surface-strong: #1f1530;
--color-border: rgba(255, 79, 216, 0.35);
--color-text: #fbeaff;
--color-text-muted: #c6a9d6;
--color-primary: #ff2ee0;
--color-accent: #24f0ff;
--color-orange: #ff9d2e;
--color-glass-tube: #2a1e3d;
/* radius: soft tube-bend curvature */
--radius-sm: 6px;
--radius-md: 14px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow: layered glow bloom stands in for elevation */
--shadow-sm: 0 0 6px rgba(255,46,224,0.55), 0 0 2px rgba(255,46,224,0.9);
--shadow-md: 0 0 18px rgba(255,46,224,0.55), 0 0 40px rgba(255,46,224,0.30);
--shadow-lg: 0 0 32px rgba(36,240,255,0.45), 0 0 70px rgba(255,46,224,0.30);
/* font */
--font-sans: 'Futura', 'Poppins', system-ui, sans-serif;
--font-display: 'Pacifico', 'Brush Script MT', cursive;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: glowing tube stroke — a bright core stroke plus a soft outer bloom
via layered text-shadow/box-shadow, simulating gas-tube signage */
--tube-text-glow: 0 0 4px #fff, 0 0 12px var(--color-primary), 0 0 28px var(--color-primary), 0 0 48px rgba(255,46,224,0.5);
--tube-stroke: 2px solid var(--color-primary);
}

/* ============================================================
Base component classes — Neon Sign / Tube
Signature move: --tube-text-glow (a layered bloom of text-shadow) applied
to headline text AND the bordered tube-stroke (--tube-stroke + box-shadow
bloom) applied to nav, btn--primary, and card borders on a dark ground.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--tube-stroke); box-shadow: var(--shadow-md); margin: var(--space-4); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-accent);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-accent);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid #ffffff; outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; transform: none; box-shadow: none; }
.btn--primary { border: var(--tube-stroke); color: var(--color-primary); box-shadow: var(--shadow-md); }
.card { background: var(--color-glass-tube); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-orange); color: #2a1409;
box-shadow: 0 0 14px rgba(255,157,46,0.55); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/neon-tube.md */
```

### Variables

```
--bg: #0a0710, --fg: #fbeaff, --accent: #ff2ee0, --surface: #150e22, --radius: 14px, --spacing: 16px, --font-display: 'Pacifico', 'Brush Script MT', cursive, --font-body: 'Futura', 'Poppins', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0710

#150e22

#1f1530

Secondary

#fbeaff

#c6a9d6

#ff2ee0

#24f0ff

#ff9d2e

#2a1e3d

### Effects

Glowing tube strokes on dark ground, Saturated pink/cyan/orange light bloom, Flicker and reflection, Nightlife, retro, vivid, shadow

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

- **Name:** Neon Sign / Tube
- **Type:** claude-artisan/texture
- **Keywords:** Neon Sign / Tube, neon, neon glow, tube light, Glowing tube strokes on dark ground, Saturated pink/cyan/orange light bloom, Flicker and reflection, Nightlife, retro, vivid, texture
- **Era:** Signage heritage → web
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0710, surface: #150e22, surface-strong: #1f1530, border: rgba(255, 79, 216, 0.35)
- **Secondary:** text: #fbeaff, text-muted: #c6a9d6, primary: #ff2ee0, accent: #24f0ff, orange: #ff9d2e, glass-tube: #2a1e3d

## Visual Effects

Glowing tube strokes on dark ground, Saturated pink/cyan/orange light bloom, Flicker and reflection, Nightlife, retro, vivid, shadow

## AI Visual Direction

Neon Sign / Tube, Glowing tube strokes on dark ground, Saturated pink/cyan/orange light bloom, Flicker and reflection, Nightlife, retro, vivid, Bar/nightlife branding; synthwave crossovers.

## CSS Technical

```css
/* Neon Sign / Tube — design tokens */
/* Signage heritage → web | Neon-tube signage simulated with glow, condensed */
:root {
/* color */
--color-bg: #0a0710;
--color-surface: #150e22;
--color-surface-strong: #1f1530;
--color-border: rgba(255, 79, 216, 0.35);
--color-text: #fbeaff;
--color-text-muted: #c6a9d6;
--color-primary: #ff2ee0;
--color-accent: #24f0ff;
--color-orange: #ff9d2e;
--color-glass-tube: #2a1e3d;
/* radius: soft tube-bend curvature */
--radius-sm: 6px;
--radius-md: 14px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow: layered glow bloom stands in for elevation */
--shadow-sm: 0 0 6px rgba(255,46,224,0.55), 0 0 2px rgba(255,46,224,0.9);
--shadow-md: 0 0 18px rgba(255,46,224,0.55), 0 0 40px rgba(255,46,224,0.30);
--shadow-lg: 0 0 32px rgba(36,240,255,0.45), 0 0 70px rgba(255,46,224,0.30);
/* font */
--font-sans: 'Futura', 'Poppins', system-ui, sans-serif;
--font-display: 'Pacifico', 'Brush Script MT', cursive;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: glowing tube stroke — a bright core stroke plus a soft outer bloom
via layered text-shadow/box-shadow, simulating gas-tube signage */
--tube-text-glow: 0 0 4px #fff, 0 0 12px var(--color-primary), 0 0 28px var(--color-primary), 0 0 48px rgba(255,46,224,0.5);
--tube-stroke: 2px solid var(--color-primary);
}

/* ============================================================
Base component classes — Neon Sign / Tube
Signature move: --tube-text-glow (a layered bloom of text-shadow) applied
to headline text AND the bordered tube-stroke (--tube-stroke + box-shadow
bloom) applied to nav, btn--primary, and card borders on a dark ground.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--tube-stroke); box-shadow: var(--shadow-md); margin: var(--space-4); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-accent);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-accent);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid #ffffff; outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; transform: none; box-shadow: none; }
.btn--primary { border: var(--tube-stroke); color: var(--color-primary); box-shadow: var(--shadow-md); }
.card { background: var(--color-glass-tube); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-orange); color: #2a1409;
box-shadow: 0 0 14px rgba(255,157,46,0.55); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/neon-tube.md */
```

## Design System Variables

```css
--bg: #0a0710, --fg: #fbeaff, --accent: #ff2ee0, --surface: #150e22, --radius: 14px, --spacing: 16px, --font-display: 'Pacifico', 'Brush Script MT', cursive, --font-body: 'Futura', 'Poppins', system-ui, sans-serif
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

[![Synthwave](https://designmd.app/images/library/313.png) Retro & Pop ### Synthwave](https://designmd.app/library/synthwave)[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)

Last synced: 8/30/2026
