# Op Art

- Source: <https://designmd.app/library/op-art>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:11.317Z

Claude Artisan · Movimentos históricos1960s

# Op Art

Reference for movimentos históricos Op Art. Bridget Riley, Victor Vasarely.

Op ArtOptical ArtBlack-and-white (or vibrating color) geometric patternsIllusions of motion, depth, and warpingPrecise repetition of lines/shapesPerceptual, hypnotic effectshistorical

Use case: hero, superfície, conteúdo e grade responsiva; Black-and-white (or vibrating color) geometric patterns; Illusions of motion, depth, and warping

![Op Art](https://designmd.app/images/library/694.png)

## Historical Context

Bridget Riley, Victor Vasarely. Example: Bridget Riley 'Movement in Squares'; Vasarely..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Op Art"
description: "Op Art visual system, translated from the Claude Artisan catalog for use in digital products. Black-and-white (or vibrating color) geometric patterns; Illusions of motion, depth, and warping"
colors:
primary: "#0a0a0a"
background: "#ffffff"
surface: "#ffffff"
text: "#0a0a0a"
accent: "#e10600"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Futura', 'Helvetica Neue', sans-serif"
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

Op Art visual system, translated from the Claude Artisan catalog for use in digital products. Black-and-white (or vibrating color) geometric patterns; Illusions of motion, depth, and warping

- **Category:** historical
- **Era:** 1960s
- **Origin:** Bridget Riley, Victor Vasarely.
- **Reference:** Bridget Riley 'Movement in Squares'; Vasarely.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Black-and-white (or vibrating color) geometric patterns
- Illusions of motion, depth, and warping
- Precise repetition of lines/shapes
- Perceptual, hypnotic effects

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #f0f0f0
- **border** — #0a0a0a
- **text** — #0a0a0a
- **text-muted** — #4a4a4a
- **primary** — #0a0a0a
- **accent** — #e10600

## Typography

- Display: 'Futura', 'Helvetica Neue', sans-serif
- Body: 'Helvetica Neue', Helvetica, Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Black-and-white (or vibrating color) geometric patterns; Illusions of motion, depth, and warping; Precise repetition of lines/shapes; Perceptual, hypnotic effects; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/op-art/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Op Art — design tokens */
/* 1960s | Bridget Riley, Victor Vasarely, condensed */
:root {
/* color: near-monochrome, high-contrast vibration */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #f0f0f0;
--color-border: #0a0a0a;
--color-text: #0a0a0a;
--color-text-muted: #4a4a4a;
--color-primary: #0a0a0a;
--color-accent: #e10600;
/* radius: precise geometry, no softness */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 0 rgba(0,0,0,0);
--shadow-md: 0 6px 0 rgba(10,10,10,1);
--shadow-lg: 0 10px 0 rgba(10,10,10,1);
/* font */
--font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
--font-display: 'Futura', 'Helvetica Neue', sans-serif;
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
--ease-standard: steps(6, end);
/* extra: repeating-stripe pattern that vibrates at edges */
--stripe-pattern: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 6px, #ffffff 6px, #ffffff 12px);
--stripe-pattern-tight: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 3px, #ffffff 3px, #ffffff 6px);
--concentric-pattern: repeating-radial-gradient(circle at 50% 50%, #0a0a0a 0px, #0a0a0a 4px, #ffffff 4px, #ffffff 8px);
}

/* ============================================================
Base component classes — Op Art
Signature move: precise repeating black/white line stripes that vibrate
optically; repeated as a border treatment and a background fill across
nav and card so the eye keeps re-registering motion.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 6px solid transparent; border-image: var(--stripe-pattern) 6;
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border);
cursor: pointer; transition: transform .1s var(--ease-standard), background .1s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); background: var(--stripe-pattern-tight); color: #fff; }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
border: 3px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6);
position: relative; overflow: hidden;
}
.card::before {
content: ""; position: absolute; inset: 0 0 auto 0; height: 10px; background: var(--stripe-pattern);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(225, 6, 0, 0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #fff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/op-art.md */
```

### Variables

```
--bg: #ffffff, --fg: #0a0a0a, --accent: #0a0a0a, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Futura', 'Helvetica Neue', sans-serif, --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffffff

#f0f0f0

#0a0a0a

Secondary

#0a0a0a

#4a4a4a

#e10600

### Effects

Black-and-white (or vibrating color) geometric patterns, Illusions of motion, depth, and warping, Precise repetition of lines/shapes, Perceptual, hypnotic effects, shadow

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

- **Name:** Op Art
- **Type:** claude-artisan/historical
- **Keywords:** Op Art, Optical Art, Black-and-white (or vibrating color) geometric patterns, Illusions of motion, depth, and warping, Precise repetition of lines/shapes, Perceptual, hypnotic effects, historical
- **Era:** 1960s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffffff, surface: #ffffff, surface-strong: #f0f0f0, border: #0a0a0a
- **Secondary:** text: #0a0a0a, text-muted: #4a4a4a, primary: #0a0a0a, accent: #e10600

## Visual Effects

Black-and-white (or vibrating color) geometric patterns, Illusions of motion, depth, and warping, Precise repetition of lines/shapes, Perceptual, hypnotic effects, shadow

## AI Visual Direction

Op Art, Black-and-white (or vibrating color) geometric patterns, Illusions of motion, depth, and warping, Precise repetition of lines/shapes, Perceptual, hypnotic effects, Bridget Riley 'Movement in Squares'; Vasarely.

## CSS Technical

```css
/* Op Art — design tokens */
/* 1960s | Bridget Riley, Victor Vasarely, condensed */
:root {
/* color: near-monochrome, high-contrast vibration */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #f0f0f0;
--color-border: #0a0a0a;
--color-text: #0a0a0a;
--color-text-muted: #4a4a4a;
--color-primary: #0a0a0a;
--color-accent: #e10600;
/* radius: precise geometry, no softness */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 0 rgba(0,0,0,0);
--shadow-md: 0 6px 0 rgba(10,10,10,1);
--shadow-lg: 0 10px 0 rgba(10,10,10,1);
/* font */
--font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
--font-display: 'Futura', 'Helvetica Neue', sans-serif;
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
--ease-standard: steps(6, end);
/* extra: repeating-stripe pattern that vibrates at edges */
--stripe-pattern: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 6px, #ffffff 6px, #ffffff 12px);
--stripe-pattern-tight: repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 3px, #ffffff 3px, #ffffff 6px);
--concentric-pattern: repeating-radial-gradient(circle at 50% 50%, #0a0a0a 0px, #0a0a0a 4px, #ffffff 4px, #ffffff 8px);
}

/* ============================================================
Base component classes — Op Art
Signature move: precise repeating black/white line stripes that vibrate
optically; repeated as a border treatment and a background fill across
nav and card so the eye keeps re-registering motion.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 6px solid transparent; border-image: var(--stripe-pattern) 6;
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border);
cursor: pointer; transition: transform .1s var(--ease-standard), background .1s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); background: var(--stripe-pattern-tight); color: #fff; }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
border: 3px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6);
position: relative; overflow: hidden;
}
.card::before {
content: ""; position: absolute; inset: 0 0 auto 0; height: 10px; background: var(--stripe-pattern);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(225, 6, 0, 0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #fff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/op-art.md */
```

## Design System Variables

```css
--bg: #ffffff, --fg: #0a0a0a, --accent: #0a0a0a, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Futura', 'Helvetica Neue', sans-serif, --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif
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

[![Pop Art](https://designmd.app/images/library/315.png) Arte & Ilustracao ### Pop Art](https://designmd.app/library/pop-art)[![Psychedelic Art](https://designmd.app/images/library/703.png) Claude Artisan · Movimentos históricos ### Psychedelic Art](https://designmd.app/library/psychedelic)

Last synced: 8/30/2026
