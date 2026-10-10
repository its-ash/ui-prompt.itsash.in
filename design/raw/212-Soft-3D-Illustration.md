# Soft 3D Illustration

- Source: <https://designmd.app/library/soft-3d>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:55.351Z

Claude Artisan · Morphism & profundidade tátil2020–present

# Soft 3D Illustration

Reference for morphism & profundidade tátil Soft 3D Illustration. Rise of Spline, Blender, and Dribbble 3D illustration trend.

Soft 3D Illustration3D render UISpline 3Dclaymation UIRounded, soft-lit 3D rendered objectsMatte pastel materials, ambient occlusionFloating isometric-ish scenesPaired with flat UI chromemorphism

Use case: superfície material com conteúdo em camadas; Rounded, soft-lit 3D rendered objects; Matte pastel materials, ambient occlusion

![Soft 3D Illustration](https://designmd.app/images/library/718.png)

## Historical Context

Rise of Spline, Blender, and Dribbble 3D illustration trend. Example: Spline showcase sites; Stripe/Vercel 3D hero scenes..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Soft 3D Illustration"
description: "Soft 3D Illustration visual system, translated from the Claude Artisan catalog for use in digital products. Rounded, soft-lit 3D rendered objects; Matte pastel materials, ambient occlusion"
colors:
primary: "#6d5ae6"
background: "#eef1fb"
surface: "#ffffff"
text: "#2d2a45"
accent: "#ff9e7d"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Quicksand', 'Poppins', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Inter', 'Quicksand', system-ui, -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Inter', 'Quicksand', system-ui, -apple-system, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "16px"
md: "24px"
lg: "32px"
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

Soft 3D Illustration visual system, translated from the Claude Artisan catalog for use in digital products. Rounded, soft-lit 3D rendered objects; Matte pastel materials, ambient occlusion

- **Category:** morphism
- **Era:** 2020–present
- **Origin:** Rise of Spline, Blender, and Dribbble 3D illustration trend.
- **Reference:** Spline showcase sites; Stripe/Vercel 3D hero scenes.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Rounded, soft-lit 3D rendered objects
- Matte pastel materials, ambient occlusion
- Floating isometric-ish scenes
- Paired with flat UI chrome

## Colors

- **bg** — #eef1fb
- **surface** — #ffffff
- **surface-strong** — #f6f4ff
- **text** — #2d2a45
- **text-muted** — #6b6690
- **primary** — #6d5ae6
- **accent** — #ff9e7d
- **mint** — #7be0c4

## Typography

- Display: 'Quicksand', 'Poppins', sans-serif
- Body: 'Inter', 'Quicksand', system-ui, -apple-system, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rounded, soft-lit 3D rendered objects; Matte pastel materials, ambient occlusion; Floating isometric-ish scenes; Paired with flat UI chrome; sombras e elevação

## Shapes

- Radius scale: 16px, 24px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/soft-3d/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Soft 3D Illustration — design tokens (generated from style_catalog.json) */
/* 2020–present | Rise of Spline, Blender, and Dribbble 3D illustration trend. */
:root {
/* color */
--color-bg: #eef1fb;
--color-surface: #ffffff;
--color-surface-strong: #f6f4ff;
--color-text: #2d2a45;
--color-text-muted: #6b6690;
--color-primary: #6d5ae6;
--color-accent: #ff9e7d;
--color-mint: #7be0c4;
/* radius */
--radius-sm: 16px;
--radius-md: 24px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 6px 6px 14px rgba(151, 143, 199, 0.28), -4px -4px 12px rgba(255, 255, 255, 0.85);
--shadow-md: 10px 10px 24px rgba(151, 143, 199, 0.32), -6px -6px 18px rgba(255, 255, 255, 0.9);
--shadow-lg: 16px 16px 40px rgba(151, 143, 199, 0.36), -10px -10px 26px rgba(255, 255, 255, 0.95);
--shadow-inset-hi: inset 2px 2px 4px rgba(255, 255, 255, 0.9), inset -2px -2px 6px rgba(151, 143, 199, 0.25);
/* font */
--font-sans: 'Inter', 'Quicksand', system-ui, -apple-system, sans-serif;
--font-display: 'Quicksand', 'Poppins', sans-serif;
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
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.3, 0, 1, 1);
/* extra: matte pastel "clay" extrusion — a top-left highlight paired with a
bottom-right ambient shadow, as if every surface were softly molded and
lit from one corner, plus a gentle gradient fill for the illustrated feel */
--clay-gradient: linear-gradient(160deg, #ffffff 0%, #f3f1ff 60%, #e9e5ff 100%);
--relief-highlight: rgba(255, 255, 255, 0.9);
--relief-shadow: rgba(151, 143, 199, 0.32);
}

/* ============================================================
Base component classes — Soft 3D Illustration
Signature move: claymorphism-adjacent soft extrusion — a dual shadow pair
(light highlight top-left, diffused shadow bottom-right) over a matte
pastel gradient fill. Repeats on nav, card, and btn so every raised
surface reads as gently molded, floating clay, not a flat sticker.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--clay-gradient); border-radius: var(--radius-pill); box-shadow: var(--shadow-md); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--clay-gradient); border: none; box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-inset-hi); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: var(--shadow-sm); }
.btn--primary { background: linear-gradient(160deg, var(--color-primary) 0%, #5a46d1 100%); color: #ffffff; }
.card {
background: var(--clay-gradient); border-radius: var(--radius-lg);
box-shadow: var(--shadow-lg); padding: var(--space-6); border: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: none; box-shadow: var(--shadow-inset-hi);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-inset-hi), 0 0 0 3px color-mix(in srgb, var(--color-primary) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-mint);
color: #14332a; box-shadow: var(--shadow-sm); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/soft-3d.md */
```

### Variables

```
--bg: #eef1fb, --fg: #2d2a45, --accent: #6d5ae6, --surface: #ffffff, --radius: 24px, --spacing: 16px, --font-display: 'Quicksand', 'Poppins', sans-serif, --font-body: 'Inter', 'Quicksand', system-ui, -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#eef1fb

#ffffff

#f6f4ff

#2d2a45

Secondary

#6b6690

#6d5ae6

#ff9e7d

#7be0c4

### Effects

Rounded, soft-lit 3D rendered objects, Matte pastel materials, ambient occlusion, Floating isometric-ish scenes, Paired with flat UI chrome, shadow

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

- **Name:** Soft 3D Illustration
- **Type:** claude-artisan/morphism
- **Keywords:** Soft 3D Illustration, 3D render UI, Spline 3D, claymation UI, Rounded, soft-lit 3D rendered objects, Matte pastel materials, ambient occlusion, Floating isometric-ish scenes, Paired with flat UI chrome, morphism
- **Era:** 2020–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #eef1fb, surface: #ffffff, surface-strong: #f6f4ff, text: #2d2a45
- **Secondary:** text-muted: #6b6690, primary: #6d5ae6, accent: #ff9e7d, mint: #7be0c4

## Visual Effects

Rounded, soft-lit 3D rendered objects, Matte pastel materials, ambient occlusion, Floating isometric-ish scenes, Paired with flat UI chrome, shadow

## AI Visual Direction

Soft 3D Illustration, Rounded, soft-lit 3D rendered objects, Matte pastel materials, ambient occlusion, Floating isometric-ish scenes, Paired with flat UI chrome, Spline showcase sites; Stripe/Vercel 3D hero scenes.

## CSS Technical

```css
/* Soft 3D Illustration — design tokens (generated from style_catalog.json) */
/* 2020–present | Rise of Spline, Blender, and Dribbble 3D illustration trend. */
:root {
/* color */
--color-bg: #eef1fb;
--color-surface: #ffffff;
--color-surface-strong: #f6f4ff;
--color-text: #2d2a45;
--color-text-muted: #6b6690;
--color-primary: #6d5ae6;
--color-accent: #ff9e7d;
--color-mint: #7be0c4;
/* radius */
--radius-sm: 16px;
--radius-md: 24px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 6px 6px 14px rgba(151, 143, 199, 0.28), -4px -4px 12px rgba(255, 255, 255, 0.85);
--shadow-md: 10px 10px 24px rgba(151, 143, 199, 0.32), -6px -6px 18px rgba(255, 255, 255, 0.9);
--shadow-lg: 16px 16px 40px rgba(151, 143, 199, 0.36), -10px -10px 26px rgba(255, 255, 255, 0.95);
--shadow-inset-hi: inset 2px 2px 4px rgba(255, 255, 255, 0.9), inset -2px -2px 6px rgba(151, 143, 199, 0.25);
/* font */
--font-sans: 'Inter', 'Quicksand', system-ui, -apple-system, sans-serif;
--font-display: 'Quicksand', 'Poppins', sans-serif;
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
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.3, 0, 1, 1);
/* extra: matte pastel "clay" extrusion — a top-left highlight paired with a
bottom-right ambient shadow, as if every surface were softly molded and
lit from one corner, plus a gentle gradient fill for the illustrated feel */
--clay-gradient: linear-gradient(160deg, #ffffff 0%, #f3f1ff 60%, #e9e5ff 100%);
--relief-highlight: rgba(255, 255, 255, 0.9);
--relief-shadow: rgba(151, 143, 199, 0.32);
}

/* ============================================================
Base component classes — Soft 3D Illustration
Signature move: claymorphism-adjacent soft extrusion — a dual shadow pair
(light highlight top-left, diffused shadow bottom-right) over a matte
pastel gradient fill. Repeats on nav, card, and btn so every raised
surface reads as gently molded, floating clay, not a flat sticker.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--clay-gradient); border-radius: var(--radius-pill); box-shadow: var(--shadow-md); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--clay-gradient); border: none; box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-inset-hi); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: var(--shadow-sm); }
.btn--primary { background: linear-gradient(160deg, var(--color-primary) 0%, #5a46d1 100%); color: #ffffff; }
.card {
background: var(--clay-gradient); border-radius: var(--radius-lg);
box-shadow: var(--shadow-lg); padding: var(--space-6); border: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: none; box-shadow: var(--shadow-inset-hi);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-inset-hi), 0 0 0 3px color-mix(in srgb, var(--color-primary) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-mint);
color: #14332a; box-shadow: var(--shadow-sm); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/soft-3d.md */
```

## Design System Variables

```css
--bg: #eef1fb, --fg: #2d2a45, --accent: #6d5ae6, --surface: #ffffff, --radius: 24px, --spacing: 16px, --font-display: 'Quicksand', 'Poppins', sans-serif, --font-body: 'Inter', 'Quicksand', system-ui, -apple-system, sans-serif
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

[![Claymorphism](https://designmd.app/images/library/9.png) Flat & Soft UI ### Claymorphism](https://designmd.app/library/claymorphism)[![Isometric](https://designmd.app/images/library/663.png) Claude Artisan · Textura, material & renderização ### Isometric](https://designmd.app/library/isometric)

Last synced: 8/30/2026
