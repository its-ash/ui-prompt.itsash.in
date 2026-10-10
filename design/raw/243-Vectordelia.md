# Vectordelia

- Source: <https://designmd.app/library/vectordelia>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:42.284Z

Claude Artisan · Retrofuturismo & ficção especulativa2004–2010

# Vectordelia

Reference for retrofuturismo & ficção especulativa Vectordelia. Mid-2000s vector-art trend (part of Frutiger family).

VectordeliaWeb 2.0 vectorsswirl graphicsSwooping vector swirls and 'wirebirds'Glossy gradients, floral flourishesBright saturated colorAdobe Illustrator flourish eraretrofuturism

Use case: grade modular responsiva; Swooping vector swirls and 'wirebirds'; Glossy gradients, floral flourishes

![Vectordelia](https://designmd.app/images/library/746.png)

## Historical Context

Mid-2000s vector-art trend (part of Frutiger family). Example: Mid-2000s tech ads; Windows Vista promo art..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Vectordelia"
description: "Vectordelia visual system, translated from the Claude Artisan catalog for use in digital products. Swooping vector swirls and 'wirebirds'; Glossy gradients, floral flourishes"
colors:
primary: "#0ea5e9"
background: "#eaf6ff"
surface: "#ffffff"
text: "#0b2545"
accent: "#ec4899"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Myriad Pro', 'Segoe UI', -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Myriad Pro', 'Segoe UI', -apple-system, sans-serif"
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

Vectordelia visual system, translated from the Claude Artisan catalog for use in digital products. Swooping vector swirls and 'wirebirds'; Glossy gradients, floral flourishes

- **Category:** retrofuturism
- **Era:** 2004–2010
- **Origin:** Mid-2000s vector-art trend (part of Frutiger family).
- **Reference:** Mid-2000s tech ads; Windows Vista promo art.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Swooping vector swirls and 'wirebirds'
- Glossy gradients, floral flourishes
- Bright saturated color
- Adobe Illustrator flourish era

## Colors

- **bg** — #eaf6ff
- **surface** — #ffffff
- **surface-strong** — #f2fbff
- **text** — #0b2545
- **text-muted** — #45607e
- **primary** — #0ea5e9
- **accent** — #ec4899
- **lime** — #a3e635
- **violet** — #8b5cf6

## Typography

- Display: 'Trebuchet MS', 'Segoe UI', sans-serif
- Body: 'Myriad Pro', 'Segoe UI', -apple-system, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Swooping vector swirls and 'wirebirds'; Glossy gradients, floral flourishes; Bright saturated color; Adobe Illustrator flourish era; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/vectordelia/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Vectordelia — design tokens (generated from style_catalog.json) */
/* 2004–2010 | Mid-2000s vector-art trend (part of Frutiger family). */
:root {
/* color */
--color-bg: #eaf6ff;
--color-surface: #ffffff;
--color-surface-strong: #f2fbff;
--color-text: #0b2545;
--color-text-muted: #45607e;
--color-primary: #0ea5e9;
--color-accent: #ec4899;
--color-lime: #a3e635;
--color-violet: #8b5cf6;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(14, 165, 233, 0.18);
--shadow-md: 0 6px 20px rgba(14, 165, 233, 0.24);
--shadow-lg: 0 12px 36px rgba(14, 165, 233, 0.28);
--shadow-inset-hi: inset 0 1px 0 rgba(255, 255, 255, 0.8);
/* font */
--font-sans: 'Myriad Pro', 'Segoe UI', -apple-system, sans-serif;
--font-display: 'Trebuchet MS', 'Segoe UI', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.3, 0, 1, 1);
/* extra: a glossy swooping "wirebird" gradient — a saturated blue-to-violet
swirl with a bright glass highlight band across the top, the Illustrator
flourish-era signature repeated across every raised surface */
--swirl-gradient: linear-gradient(120deg, #0369a1 0%, #0e7490 30%, #6d28d9 65%, #be185d 100%);
--gloss-sheen: linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0) 60%);
}

/* ============================================================
Base component classes — Vectordelia
Signature move: a glossy blue-violet-magenta "wirebird" swirl gradient
topped with a bright sheen highlight — repeated on nav, btn--primary, and
card top-edge, evoking mid-2000s Illustrator vector flourish art.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--swirl-gradient); border-radius: var(--radius-pill); box-shadow: var(--shadow-md);
color: #ffffff; position: relative; overflow: hidden; }
.nav::before { content: ""; position: absolute; inset: 0; background: var(--gloss-sheen); pointer-events: none; }
.nav a { position: relative; z-index: 1; }
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid color-mix(in srgb, var(--color-primary) 35%, transparent);
box-shadow: var(--shadow-sm), var(--shadow-inset-hi); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md), var(--shadow-inset-hi); }
.btn:active { transform: translateY(0) scale(1); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--swirl-gradient); color: #ffffff; border-color: transparent; position: relative; overflow: hidden; }
.btn--primary::before { content: ""; position: absolute; inset: 0; background: var(--gloss-sheen); pointer-events: none; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); border: 1px solid color-mix(in srgb, var(--color-primary) 18%, transparent);
position: relative; overflow: hidden;
}
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; background: var(--swirl-gradient); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid color-mix(in srgb, var(--color-primary) 30%, transparent);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-lime); color: #14401f; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/vectordelia.md */
```

### Variables

```
--bg: #eaf6ff, --fg: #0b2545, --accent: #0ea5e9, --surface: #ffffff, --radius: 14px, --spacing: 16px, --font-display: 'Trebuchet MS', 'Segoe UI', sans-serif, --font-body: 'Myriad Pro', 'Segoe UI', -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#eaf6ff

#ffffff

#f2fbff

#0b2545

Secondary

#45607e

#0ea5e9

#ec4899

#a3e635

#8b5cf6

### Effects

Swooping vector swirls and 'wirebirds', Glossy gradients, floral flourishes, Bright saturated color, Adobe Illustrator flourish era, shadow

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

- **Name:** Vectordelia
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Vectordelia, Web 2.0 vectors, swirl graphics, Swooping vector swirls and 'wirebirds', Glossy gradients, floral flourishes, Bright saturated color, Adobe Illustrator flourish era, retrofuturism
- **Era:** 2004–2010
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #eaf6ff, surface: #ffffff, surface-strong: #f2fbff, text: #0b2545
- **Secondary:** text-muted: #45607e, primary: #0ea5e9, accent: #ec4899, lime: #a3e635, violet: #8b5cf6

## Visual Effects

Swooping vector swirls and 'wirebirds', Glossy gradients, floral flourishes, Bright saturated color, Adobe Illustrator flourish era, shadow

## AI Visual Direction

Vectordelia, Swooping vector swirls and 'wirebirds', Glossy gradients, floral flourishes, Bright saturated color, Adobe Illustrator flourish era, Mid-2000s tech ads; Windows Vista promo art.

## CSS Technical

```css
/* Vectordelia — design tokens (generated from style_catalog.json) */
/* 2004–2010 | Mid-2000s vector-art trend (part of Frutiger family). */
:root {
/* color */
--color-bg: #eaf6ff;
--color-surface: #ffffff;
--color-surface-strong: #f2fbff;
--color-text: #0b2545;
--color-text-muted: #45607e;
--color-primary: #0ea5e9;
--color-accent: #ec4899;
--color-lime: #a3e635;
--color-violet: #8b5cf6;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(14, 165, 233, 0.18);
--shadow-md: 0 6px 20px rgba(14, 165, 233, 0.24);
--shadow-lg: 0 12px 36px rgba(14, 165, 233, 0.28);
--shadow-inset-hi: inset 0 1px 0 rgba(255, 255, 255, 0.8);
/* font */
--font-sans: 'Myriad Pro', 'Segoe UI', -apple-system, sans-serif;
--font-display: 'Trebuchet MS', 'Segoe UI', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.3, 0, 1, 1);
/* extra: a glossy swooping "wirebird" gradient — a saturated blue-to-violet
swirl with a bright glass highlight band across the top, the Illustrator
flourish-era signature repeated across every raised surface */
--swirl-gradient: linear-gradient(120deg, #0369a1 0%, #0e7490 30%, #6d28d9 65%, #be185d 100%);
--gloss-sheen: linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0) 60%);
}

/* ============================================================
Base component classes — Vectordelia
Signature move: a glossy blue-violet-magenta "wirebird" swirl gradient
topped with a bright sheen highlight — repeated on nav, btn--primary, and
card top-edge, evoking mid-2000s Illustrator vector flourish art.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--swirl-gradient); border-radius: var(--radius-pill); box-shadow: var(--shadow-md);
color: #ffffff; position: relative; overflow: hidden; }
.nav::before { content: ""; position: absolute; inset: 0; background: var(--gloss-sheen); pointer-events: none; }
.nav a { position: relative; z-index: 1; }
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid color-mix(in srgb, var(--color-primary) 35%, transparent);
box-shadow: var(--shadow-sm), var(--shadow-inset-hi); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md), var(--shadow-inset-hi); }
.btn:active { transform: translateY(0) scale(1); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--swirl-gradient); color: #ffffff; border-color: transparent; position: relative; overflow: hidden; }
.btn--primary::before { content: ""; position: absolute; inset: 0; background: var(--gloss-sheen); pointer-events: none; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); border: 1px solid color-mix(in srgb, var(--color-primary) 18%, transparent);
position: relative; overflow: hidden;
}
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; background: var(--swirl-gradient); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid color-mix(in srgb, var(--color-primary) 30%, transparent);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-lime); color: #14401f; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/vectordelia.md */
```

## Design System Variables

```css
--bg: #eaf6ff, --fg: #0b2545, --accent: #0ea5e9, --surface: #ffffff, --radius: 14px, --spacing: 16px, --font-display: 'Trebuchet MS', 'Segoe UI', sans-serif, --font-body: 'Myriad Pro', 'Segoe UI', -apple-system, sans-serif
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

[![Frutiger Aero](https://designmd.app/images/library/643.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Frutiger Aero](https://designmd.app/library/frutiger-aero)[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)

Last synced: 8/30/2026
