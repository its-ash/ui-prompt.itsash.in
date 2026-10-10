# Chromecore

- Source: <https://designmd.app/library/chromecore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:20.314Z

Claude Artisan · Retrofuturismo & ficção especulativa2020s (evokes Y2K)

# Chromecore

Reference for retrofuturismo & ficção especulativa Chromecore. Revived Y2K metallic aesthetic.

Chromecoreliquid chromemetal typeLiquid/reflective chrome surfaces and typeSilver, mercury, iridescent reflectionsBlobby metallic 3D formsFuturistic, sleek, coldretrofuturism

Use case: superfície material com conteúdo em camadas; Liquid/reflective chrome surfaces and type; Silver, mercury, iridescent reflections

![Chromecore](https://designmd.app/images/library/597.png)

## Historical Context

Revived Y2K metallic aesthetic. Example: 2020s album covers; fashion (Balenciaga, Rui)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Chromecore"
description: "Chromecore visual system, translated from the Claude Artisan catalog for use in digital products. Liquid/reflective chrome surfaces and type; Silver, mercury, iridescent reflections"
colors:
primary: "#a78bfa"
background: "#e8eaf0"
surface: "#f4f5f9"
text: "#1c1b2e"
accent: "#f472b6"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Segoe UI', 'Trebuchet MS', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Segoe UI', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "16px"
md: "28px"
lg: "44px"
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

Chromecore visual system, translated from the Claude Artisan catalog for use in digital products. Liquid/reflective chrome surfaces and type; Silver, mercury, iridescent reflections

- **Category:** retrofuturism
- **Era:** 2020s (evokes Y2K)
- **Origin:** Revived Y2K metallic aesthetic.
- **Reference:** 2020s album covers; fashion (Balenciaga, Rui).
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Liquid/reflective chrome surfaces and type
- Silver, mercury, iridescent reflections
- Blobby metallic 3D forms
- Futuristic, sleek, cold

## Colors

- **bg** — #e8eaf0
- **surface** — #f4f5f9
- **surface-strong** — #ffffff
- **border** — #c3c8d6
- **text** — #1c1b2e
- **text-muted** — #4a4866
- **primary** — #a78bfa
- **accent** — #f472b6
- **mint** — #5eead4

## Typography

- Display: 'Segoe UI', 'Trebuchet MS', system-ui, sans-serif
- Body: 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Liquid/reflective chrome surfaces and type; Silver, mercury, iridescent reflections; Blobby metallic 3D forms; Futuristic, sleek, cold; sombras e elevação

## Shapes

- Radius scale: 16px, 28px, 44px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/chromecore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Chromecore — design tokens */
/* 2020s (evokes Y2K) | Revived Y2K metallic aesthetic, condensed */
:root {
/* color: mercury silver with iridescent pastel bleed, not steel */
--color-bg: #e8eaf0;
--color-surface: #f4f5f9;
--color-surface-strong: #ffffff;
--color-border: #c3c8d6;
--color-text: #1c1b2e;
--color-text-muted: #4a4866;
--color-primary: #a78bfa;
--color-accent: #f472b6;
--color-mint: #5eead4;
/* radius: blobby, liquid, never sharp */
--radius-sm: 16px;
--radius-md: 28px;
--radius-lg: 44px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(28,27,46,0.1);
--shadow-md: 0 10px 26px rgba(167,139,250,0.22);
--shadow-lg: 0 20px 48px rgba(244,114,182,0.24);
/* font */
--font-sans: 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Segoe UI', 'Trebuchet MS', system-ui, sans-serif;
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
/* ease: liquid, overshooting */
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: iridescent liquid-mercury gradient, used across surfaces */
--iridescent: linear-gradient(120deg, #a78bfa 0%, #f472b6 33%, #5eead4 66%, #a78bfa 100%);
--mercury-sheen: linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.1) 100%);
}

/* ============================================================
Base component classes — Chromecore
Signature move: a liquid, blobby border-radius plus an iridescent
mercury sheen overlay (a diagonal white-highlight gradient) that
reads as poured metal, repeated on nav, primary button, and card.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface-strong);
background-image: var(--mercury-sheen); border-radius: var(--radius-pill);
box-shadow: var(--shadow-sm); margin: var(--space-4); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); background-image: var(--mercury-sheen);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .25s var(--ease-standard), box-shadow .25s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(0.99); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background-image: var(--iridescent); color: #ffffff; border: none; }
.card { background: var(--color-surface); background-image: var(--mercury-sheen);
color: var(--color-text); border-radius: var(--radius-lg); padding: var(--space-8);
box-shadow: var(--shadow-md); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 4px rgba(167,139,250,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background-image: var(--iridescent); color: #ffffff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/chromecore.md */
```

### Variables

```
--bg: #e8eaf0, --fg: #1c1b2e, --accent: #a78bfa, --surface: #f4f5f9, --radius: 28px, --spacing: 16px, --font-display: 'Segoe UI', 'Trebuchet MS', system-ui, sans-serif, --font-body: 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#e8eaf0

#f4f5f9

#ffffff

#c3c8d6

Secondary

#1c1b2e

#4a4866

#a78bfa

#f472b6

#5eead4

### Effects

Liquid/reflective chrome surfaces and type, Silver, mercury, iridescent reflections, Blobby metallic 3D forms, Futuristic, sleek, cold, shadow

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

- **Name:** Chromecore
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Chromecore, liquid chrome, metal type, Liquid/reflective chrome surfaces and type, Silver, mercury, iridescent reflections, Blobby metallic 3D forms, Futuristic, sleek, cold, retrofuturism
- **Era:** 2020s (evokes Y2K)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #e8eaf0, surface: #f4f5f9, surface-strong: #ffffff, border: #c3c8d6
- **Secondary:** text: #1c1b2e, text-muted: #4a4866, primary: #a78bfa, accent: #f472b6, mint: #5eead4

## Visual Effects

Liquid/reflective chrome surfaces and type, Silver, mercury, iridescent reflections, Blobby metallic 3D forms, Futuristic, sleek, cold, shadow

## AI Visual Direction

Chromecore, Liquid/reflective chrome surfaces and type, Silver, mercury, iridescent reflections, Blobby metallic 3D forms, Futuristic, sleek, cold, 2020s album covers; fashion (Balenciaga, Rui).

## CSS Technical

```css
/* Chromecore — design tokens */
/* 2020s (evokes Y2K) | Revived Y2K metallic aesthetic, condensed */
:root {
/* color: mercury silver with iridescent pastel bleed, not steel */
--color-bg: #e8eaf0;
--color-surface: #f4f5f9;
--color-surface-strong: #ffffff;
--color-border: #c3c8d6;
--color-text: #1c1b2e;
--color-text-muted: #4a4866;
--color-primary: #a78bfa;
--color-accent: #f472b6;
--color-mint: #5eead4;
/* radius: blobby, liquid, never sharp */
--radius-sm: 16px;
--radius-md: 28px;
--radius-lg: 44px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(28,27,46,0.1);
--shadow-md: 0 10px 26px rgba(167,139,250,0.22);
--shadow-lg: 0 20px 48px rgba(244,114,182,0.24);
/* font */
--font-sans: 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Segoe UI', 'Trebuchet MS', system-ui, sans-serif;
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
/* ease: liquid, overshooting */
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: iridescent liquid-mercury gradient, used across surfaces */
--iridescent: linear-gradient(120deg, #a78bfa 0%, #f472b6 33%, #5eead4 66%, #a78bfa 100%);
--mercury-sheen: linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.1) 100%);
}

/* ============================================================
Base component classes — Chromecore
Signature move: a liquid, blobby border-radius plus an iridescent
mercury sheen overlay (a diagonal white-highlight gradient) that
reads as poured metal, repeated on nav, primary button, and card.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface-strong);
background-image: var(--mercury-sheen); border-radius: var(--radius-pill);
box-shadow: var(--shadow-sm); margin: var(--space-4); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); background-image: var(--mercury-sheen);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .25s var(--ease-standard), box-shadow .25s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(0.99); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background-image: var(--iridescent); color: #ffffff; border: none; }
.card { background: var(--color-surface); background-image: var(--mercury-sheen);
color: var(--color-text); border-radius: var(--radius-lg); padding: var(--space-8);
box-shadow: var(--shadow-md); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 4px rgba(167,139,250,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background-image: var(--iridescent); color: #ffffff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/chromecore.md */
```

## Design System Variables

```css
--bg: #e8eaf0, --fg: #1c1b2e, --accent: #a78bfa, --surface: #f4f5f9, --radius: 28px, --spacing: 16px, --font-display: 'Segoe UI', 'Trebuchet MS', system-ui, sans-serif, --font-body: 'Segoe UI', 'Helvetica Neue', system-ui, sans-serif
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

[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)[![Holographic / Iridescent](https://designmd.app/images/library/658.png) Claude Artisan · Textura, material & renderização ### Holographic / Iridescent](https://designmd.app/library/holographic)[![Chrome / Liquid Metal](https://designmd.app/images/library/596.png) Claude Artisan · Textura, material & renderização ### Chrome / Liquid Metal](https://designmd.app/library/chrome-metal)

Last synced: 8/30/2026
