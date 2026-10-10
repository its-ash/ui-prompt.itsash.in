# Grainy Gradient

- Source: <https://designmd.app/library/gradient-noise>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:55.300Z

Claude Artisan · Textura, material & renderização2021–present

# Grainy Gradient

Reference for textura, material & renderização Grainy Gradient. Adding grain to smooth gradients for depth.

Grainy Gradientnoise gradientgrainy gradientSmooth color gradient overlaid with fine grainReduces banding, adds tactilitySoft dreamy color fieldsPremium editorial feeltexture

Use case: composição editorial com grade tipográfica; Smooth color gradient overlaid with fine grain; Reduces banding, adds tactility

![Grainy Gradient](https://designmd.app/images/library/652.png)

## Historical Context

Adding grain to smooth gradients for depth. Example: Vercel/Linear backgrounds; A24-style sites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Grainy Gradient"
description: "Grainy Gradient visual system, translated from the Claude Artisan catalog for use in digital products. Smooth color gradient overlaid with fine grain; Reduces banding, adds tactility"
colors:
primary: "#ff8a5c"
background: "#1c1626"
surface: "#241d31"
text: "#f4f1f8"
accent: "#7c6cf0"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Söhne', 'Inter', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "14px"
lg: "22px"
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

Grainy Gradient visual system, translated from the Claude Artisan catalog for use in digital products. Smooth color gradient overlaid with fine grain; Reduces banding, adds tactility

- **Category:** texture
- **Era:** 2021–present
- **Origin:** Adding grain to smooth gradients for depth.
- **Reference:** Vercel/Linear backgrounds; A24-style sites.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Smooth color gradient overlaid with fine grain
- Reduces banding, adds tactility
- Soft dreamy color fields
- Premium editorial feel

## Colors

- **bg** — #1c1626
- **surface** — #241d31
- **surface-strong** — #2e2540
- **border** — rgba(255,255,255,0.10)
- **text** — #f4f1f8
- **text-muted** — #b8aec7
- **primary** — #ff8a5c
- **accent** — #7c6cf0
- **grad-a** — #2a1b3d
- **grad-b** — #6b3fa0
- **grad-c** — #ff8a5c

## Typography

- Display: 'Söhne', 'Inter', system-ui, sans-serif
- Body: 'Inter', system-ui, -apple-system, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Smooth color gradient overlaid with fine grain; Reduces banding, adds tactility; Soft dreamy color fields; Premium editorial feel; sombras e elevação

## Shapes

- Radius scale: 8px, 14px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/gradient-noise/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Grainy Gradient — design tokens */
/* 2021–present | Noise-on-gradient, popularized by Vercel/Linear/A24, condensed */
:root {
/* color */
--color-bg: #1c1626;
--color-surface: #241d31;
--color-surface-strong: #2e2540;
--color-border: rgba(255,255,255,0.10);
--color-text: #f4f1f8;
--color-text-muted: #b8aec7;
--color-primary: #ff8a5c;
--color-accent: #7c6cf0;
--color-grad-a: #2a1b3d;
--color-grad-b: #6b3fa0;
--color-grad-c: #ff8a5c;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 3px 10px rgba(0,0,0,0.25);
--shadow-md: 0 10px 30px rgba(0,0,0,0.35);
--shadow-lg: 0 24px 60px rgba(0,0,0,0.45);
/* font */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'Söhne', 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
/* extra: a soft mesh gradient with an SVG fractal-noise overlay (grain),
applied to the page background AND repeated at low opacity on cards/nav */
--bg-image: radial-gradient(120% 90% at 15% -10%, var(--color-grad-c) 0%, var(--color-grad-b) 45%, var(--color-grad-a) 100%);
--grain-svg: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>");
}

/* ============================================================
Base component classes — Grainy Gradient
Signature move: a fine fractal-noise grain layered over a soft color
gradient, repeated on the page background, the nav, and card surfaces
to kill banding and add a premium tactile film-like quality.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image) var(--color-bg); background-attachment: fixed; min-height: 100vh; position: relative; }
body::before { content: ""; position: fixed; inset: 0; background-image: var(--grain-svg); mix-blend-mode: overlay; opacity: 0.5; pointer-events: none; z-index: 0; }
.nav { position: relative; z-index: 1; display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); background-image: var(--grain-svg); background-blend-mode: overlay;
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn { position: relative; z-index: 1; font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: linear-gradient(120deg, var(--color-primary), var(--color-accent)); color: #1c1626; border-color: transparent; }
.card { position: relative; z-index: 1; background: var(--color-surface); background-image: var(--grain-svg);
background-blend-mode: overlay; border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { position: relative; z-index: 1; width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 30%, transparent); }
.badge { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/gradient-noise.md */
```

### Variables

```
--bg: #1c1626, --fg: #f4f1f8, --accent: #ff8a5c, --surface: #241d31, --radius: 14px, --spacing: 16px, --font-display: 'Söhne', 'Inter', system-ui, sans-serif, --font-body: 'Inter', system-ui, -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1c1626

#241d31

#2e2540

Secondary

#f4f1f8

#b8aec7

#ff8a5c

#7c6cf0

#2a1b3d

#6b3fa0

### Effects

Smooth color gradient overlaid with fine grain, Reduces banding, adds tactility, Soft dreamy color fields, Premium editorial feel, shadow

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

- **Name:** Grainy Gradient
- **Type:** claude-artisan/texture
- **Keywords:** Grainy Gradient, noise gradient, grainy gradient, Smooth color gradient overlaid with fine grain, Reduces banding, adds tactility, Soft dreamy color fields, Premium editorial feel, texture
- **Era:** 2021–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1c1626, surface: #241d31, surface-strong: #2e2540, border: rgba(255,255,255,0.10)
- **Secondary:** text: #f4f1f8, text-muted: #b8aec7, primary: #ff8a5c, accent: #7c6cf0, grad-a: #2a1b3d, grad-b: #6b3fa0, grad-c: #ff8a5c

## Visual Effects

Smooth color gradient overlaid with fine grain, Reduces banding, adds tactility, Soft dreamy color fields, Premium editorial feel, shadow

## AI Visual Direction

Grainy Gradient, Smooth color gradient overlaid with fine grain, Reduces banding, adds tactility, Soft dreamy color fields, Premium editorial feel, Vercel/Linear backgrounds; A24-style sites.

## CSS Technical

```css
/* Grainy Gradient — design tokens */
/* 2021–present | Noise-on-gradient, popularized by Vercel/Linear/A24, condensed */
:root {
/* color */
--color-bg: #1c1626;
--color-surface: #241d31;
--color-surface-strong: #2e2540;
--color-border: rgba(255,255,255,0.10);
--color-text: #f4f1f8;
--color-text-muted: #b8aec7;
--color-primary: #ff8a5c;
--color-accent: #7c6cf0;
--color-grad-a: #2a1b3d;
--color-grad-b: #6b3fa0;
--color-grad-c: #ff8a5c;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 3px 10px rgba(0,0,0,0.25);
--shadow-md: 0 10px 30px rgba(0,0,0,0.35);
--shadow-lg: 0 24px 60px rgba(0,0,0,0.45);
/* font */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'Söhne', 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
/* extra: a soft mesh gradient with an SVG fractal-noise overlay (grain),
applied to the page background AND repeated at low opacity on cards/nav */
--bg-image: radial-gradient(120% 90% at 15% -10%, var(--color-grad-c) 0%, var(--color-grad-b) 45%, var(--color-grad-a) 100%);
--grain-svg: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>");
}

/* ============================================================
Base component classes — Grainy Gradient
Signature move: a fine fractal-noise grain layered over a soft color
gradient, repeated on the page background, the nav, and card surfaces
to kill banding and add a premium tactile film-like quality.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image) var(--color-bg); background-attachment: fixed; min-height: 100vh; position: relative; }
body::before { content: ""; position: fixed; inset: 0; background-image: var(--grain-svg); mix-blend-mode: overlay; opacity: 0.5; pointer-events: none; z-index: 0; }
.nav { position: relative; z-index: 1; display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); background-image: var(--grain-svg); background-blend-mode: overlay;
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn { position: relative; z-index: 1; font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: linear-gradient(120deg, var(--color-primary), var(--color-accent)); color: #1c1626; border-color: transparent; }
.card { position: relative; z-index: 1; background: var(--color-surface); background-image: var(--grain-svg);
background-blend-mode: overlay; border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { position: relative; z-index: 1; width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 30%, transparent); }
.badge { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/gradient-noise.md */
```

## Design System Variables

```css
--bg: #1c1626, --fg: #f4f1f8, --accent: #ff8a5c, --surface: #241d31, --radius: 14px, --spacing: 16px, --font-display: 'Söhne', 'Inter', system-ui, sans-serif, --font-body: 'Inter', system-ui, -apple-system, sans-serif
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

[![Mesh Gradient](https://designmd.app/images/library/682.png) Claude Artisan · Morphism & profundidade tátil ### Mesh Gradient](https://designmd.app/library/mesh-gradient)[![Film Grain / Noise](https://designmd.app/images/library/636.png) Claude Artisan · Textura, material & renderização ### Film Grain / Noise](https://designmd.app/library/film-grain)

Last synced: 8/30/2026
