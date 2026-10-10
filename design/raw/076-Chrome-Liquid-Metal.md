# Chrome / Liquid Metal

- Source: <https://designmd.app/library/chrome-metal>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:18.313Z

Claude Artisan · Textura, material & renderização1990s & 2020s revival

# Chrome / Liquid Metal

Reference for textura, material & renderização Chrome / Liquid Metal. 90s 3D chrome + Y2K revival (2020s).

Chrome / Liquid Metalliquid metalmetallicchrome typeReflective mirror-metal surfaces and typeEnvironment-map reflections, gradients top-lightCold silver/steel with rainbow edgeHeavy, premium, futuristictexture

Use case: composição editorial com grade tipográfica; Reflective mirror-metal surfaces and type; Environment-map reflections, gradients top-light

![Chrome / Liquid Metal](https://designmd.app/images/library/596.png)

## Historical Context

90s 3D chrome + Y2K revival (2020s). Example: 90s metal logos; 2020s chrome typography trend..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Chrome / Liquid Metal"
description: "Chrome / Liquid Metal visual system, translated from the Claude Artisan catalog for use in digital products. Reflective mirror-metal surfaces and type; Environment-map reflections, gradients top-light"
colors:
primary: "#c7cdd6"
background: "#1c1e22"
surface: "#2a2d33"
text: "#f1f3f5"
accent: "#7dd3fc"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Helvetica Neue', Arial, system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', Arial, system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', Arial, system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
lg: "14px"
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

Chrome / Liquid Metal visual system, translated from the Claude Artisan catalog for use in digital products. Reflective mirror-metal surfaces and type; Environment-map reflections, gradients top-light

- **Category:** texture
- **Era:** 1990s & 2020s revival
- **Origin:** 90s 3D chrome + Y2K revival (2020s).
- **Reference:** 90s metal logos; 2020s chrome typography trend.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Reflective mirror-metal surfaces and type
- Environment-map reflections, gradients top-light
- Cold silver/steel with rainbow edge
- Heavy, premium, futuristic

## Colors

- **bg** — #1c1e22
- **surface** — #2a2d33
- **surface-strong** — #383c44
- **border** — #6b727e
- **text** — #f1f3f5
- **text-muted** — #b7bec8
- **primary** — #c7cdd6
- **accent** — #7dd3fc

## Typography

- Display: 'Helvetica Neue', Arial, system-ui, sans-serif
- Body: 'Helvetica Neue', Arial, system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Reflective mirror-metal surfaces and type; Environment-map reflections, gradients top-light; Cold silver/steel with rainbow edge; Heavy, premium, futuristic; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/chrome-metal/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Chrome / Liquid Metal — design tokens */
/* 1990s & 2020s revival | 90s 3D chrome + Y2K revival (2020s), condensed */
:root {
/* color: cold silver/steel with a thin rainbow edge highlight */
--color-bg: #1c1e22;
--color-surface: #2a2d33;
--color-surface-strong: #383c44;
--color-border: #6b727e;
--color-text: #f1f3f5;
--color-text-muted: #b7bec8;
--color-primary: #c7cdd6;
--color-accent: #7dd3fc;
/* radius: heavy machined edges */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
--shadow-md: 0 6px 16px rgba(0,0,0,0.5);
--shadow-lg: 0 14px 32px rgba(0,0,0,0.55);
/* font: heavy premium sans */
--font-sans: 'Helvetica Neue', Arial, system-ui, sans-serif;
--font-display: 'Helvetica Neue', Arial, system-ui, sans-serif;
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
/* extra: top-lit chrome gradient + thin rainbow edge, used as the signature move */
--chrome-gradient: linear-gradient(180deg, #f4f6f8 0%, #c7cdd6 18%, #6b727e 48%, #9aa1ab 62%, #eef1f4 100%);
--rainbow-edge: linear-gradient(90deg, #ff8fab, #ffd97d, #7dd3fc, #b794f6);
}

/* ============================================================
Base component classes — Chrome / Liquid Metal
Signature move: a top-lit vertical chrome gradient (light-dark-light,
mimicking an environment-map reflection) with a 2px rainbow-gradient
edge, repeated on the primary button, card top border, and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid transparent; border-image: var(--rainbow-edge) 1; }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-bg);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--chrome-gradient); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--chrome-gradient); position: relative; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border-top: 3px solid transparent; border-image: var(--rainbow-edge) 1;
box-shadow: var(--shadow-md); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(125,211,252,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--chrome-gradient); color: var(--color-bg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/chrome-metal.md */
```

### Variables

```
--bg: #1c1e22, --fg: #f1f3f5, --accent: #c7cdd6, --surface: #2a2d33, --radius: 8px, --spacing: 16px, --font-display: 'Helvetica Neue', Arial, system-ui, sans-serif, --font-body: 'Helvetica Neue', Arial, system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1c1e22

#2a2d33

#383c44

#6b727e

Secondary

#f1f3f5

#b7bec8

#c7cdd6

#7dd3fc

### Effects

Reflective mirror-metal surfaces and type, Environment-map reflections, gradients top-light, Cold silver/steel with rainbow edge, Heavy, premium, futuristic, shadow

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

- **Name:** Chrome / Liquid Metal
- **Type:** claude-artisan/texture
- **Keywords:** Chrome / Liquid Metal, liquid metal, metallic, chrome type, Reflective mirror-metal surfaces and type, Environment-map reflections, gradients top-light, Cold silver/steel with rainbow edge, Heavy, premium, futuristic, texture
- **Era:** 1990s & 2020s revival
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1c1e22, surface: #2a2d33, surface-strong: #383c44, border: #6b727e
- **Secondary:** text: #f1f3f5, text-muted: #b7bec8, primary: #c7cdd6, accent: #7dd3fc

## Visual Effects

Reflective mirror-metal surfaces and type, Environment-map reflections, gradients top-light, Cold silver/steel with rainbow edge, Heavy, premium, futuristic, shadow

## AI Visual Direction

Chrome / Liquid Metal, Reflective mirror-metal surfaces and type, Environment-map reflections, gradients top-light, Cold silver/steel with rainbow edge, Heavy, premium, futuristic, 90s metal logos; 2020s chrome typography trend.

## CSS Technical

```css
/* Chrome / Liquid Metal — design tokens */
/* 1990s & 2020s revival | 90s 3D chrome + Y2K revival (2020s), condensed */
:root {
/* color: cold silver/steel with a thin rainbow edge highlight */
--color-bg: #1c1e22;
--color-surface: #2a2d33;
--color-surface-strong: #383c44;
--color-border: #6b727e;
--color-text: #f1f3f5;
--color-text-muted: #b7bec8;
--color-primary: #c7cdd6;
--color-accent: #7dd3fc;
/* radius: heavy machined edges */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
--shadow-md: 0 6px 16px rgba(0,0,0,0.5);
--shadow-lg: 0 14px 32px rgba(0,0,0,0.55);
/* font: heavy premium sans */
--font-sans: 'Helvetica Neue', Arial, system-ui, sans-serif;
--font-display: 'Helvetica Neue', Arial, system-ui, sans-serif;
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
/* extra: top-lit chrome gradient + thin rainbow edge, used as the signature move */
--chrome-gradient: linear-gradient(180deg, #f4f6f8 0%, #c7cdd6 18%, #6b727e 48%, #9aa1ab 62%, #eef1f4 100%);
--rainbow-edge: linear-gradient(90deg, #ff8fab, #ffd97d, #7dd3fc, #b794f6);
}

/* ============================================================
Base component classes — Chrome / Liquid Metal
Signature move: a top-lit vertical chrome gradient (light-dark-light,
mimicking an environment-map reflection) with a 2px rainbow-gradient
edge, repeated on the primary button, card top border, and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid transparent; border-image: var(--rainbow-edge) 1; }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-bg);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--chrome-gradient); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--chrome-gradient); position: relative; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border-top: 3px solid transparent; border-image: var(--rainbow-edge) 1;
box-shadow: var(--shadow-md); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(125,211,252,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--chrome-gradient); color: var(--color-bg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/chrome-metal.md */
```

## Design System Variables

```css
--bg: #1c1e22, --fg: #f1f3f5, --accent: #c7cdd6, --surface: #2a2d33, --radius: 8px, --spacing: 16px, --font-display: 'Helvetica Neue', Arial, system-ui, sans-serif, --font-body: 'Helvetica Neue', Arial, system-ui, sans-serif
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

[![Holographic / Iridescent](https://designmd.app/images/library/658.png) Claude Artisan · Textura, material & renderização ### Holographic / Iridescent](https://designmd.app/library/holographic)[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)[![Chromecore](https://designmd.app/images/library/597.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Chromecore](https://designmd.app/library/chromecore)

Last synced: 8/30/2026
