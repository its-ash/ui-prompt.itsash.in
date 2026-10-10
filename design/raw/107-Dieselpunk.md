# Dieselpunk

- Source: <https://designmd.app/library/dieselpunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:06.315Z

Claude Artisan · Retrofuturismo & ficção especulativa2001–present

# Dieselpunk

Reference for retrofuturismo & ficção especulativa Dieselpunk. Term coined ~2001; aesthetic of 1920s–1940s diesel era.

Dieselpunkinterwar retrofuturismInterwar/WWII industrial machine ageArt Deco + military-industrial formsMuted metals, propaganda-poster paletteStreamlined engines, zeppelins, riveted steelretrofuturism

Use case: composição editorial com grade tipográfica; Interwar/WWII industrial machine age; Art Deco + military-industrial forms

![Dieselpunk](https://designmd.app/images/library/623.png)

## Historical Context

Term coined ~2001; aesthetic of 1920s–1940s diesel era. Example: BioShock; Sky Captain and the World of Tomorrow..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Dieselpunk"
description: "Dieselpunk visual system, translated from the Claude Artisan catalog for use in digital products. Interwar/WWII industrial machine age; Art Deco + military-industrial forms"
colors:
primary: "#b5461f"
background: "#23201a"
surface: "#2e2a22"
text: "#ece3cf"
accent: "#8a9a5b"
on-primary: "#FFFFFF"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Bebas Neue', 'Oswald', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "3px"
lg: "4px"
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

Dieselpunk visual system, translated from the Claude Artisan catalog for use in digital products. Interwar/WWII industrial machine age; Art Deco + military-industrial forms

- **Category:** retrofuturism
- **Era:** 2001–present
- **Origin:** Term coined ~2001; aesthetic of 1920s–1940s diesel era.
- **Reference:** BioShock; Sky Captain and the World of Tomorrow.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Interwar/WWII industrial machine age
- Art Deco + military-industrial forms
- Muted metals, propaganda-poster palette
- Streamlined engines, zeppelins, riveted steel

## Colors

- **bg** — #23201a
- **surface** — #2e2a22
- **surface-strong** — #3a352b
- **border** — #6b5f45
- **text** — #ece3cf
- **text-muted** — #b8ab8c
- **primary** — #b5461f
- **accent** — #8a9a5b
- **rivet** — #4a4436

## Typography

- Display: 'Bebas Neue', 'Oswald', sans-serif
- Body: 'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Interwar/WWII industrial machine age; Art Deco + military-industrial forms; Muted metals, propaganda-poster palette; Streamlined engines, zeppelins, riveted steel; sombras e elevação

## Shapes

- Radius scale: 2px, 3px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/dieselpunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Dieselpunk — design tokens */
/* 2001–present | Term coined ~2001; aesthetic of 1920s–1940s diesel era, condensed */
:root {
/* color */
--color-bg: #23201a;
--color-surface: #2e2a22;
--color-surface-strong: #3a352b;
--color-border: #6b5f45;
--color-text: #ece3cf;
--color-text-muted: #b8ab8c;
--color-primary: #b5461f;
--color-accent: #8a9a5b;
--color-rivet: #4a4436;
/* radius */
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.5);
--shadow-md: 0 4px 10px rgba(0,0,0,0.55);
--shadow-lg: 0 10px 24px rgba(0,0,0,0.6);
/* font */
--font-sans: 'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif;
--font-display: 'Bebas Neue', 'Oswald', sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
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
/* extra: signature = riveted steel-plate border (corner dots) + hazard-stripe accent */
--rivet-dot: radial-gradient(circle at 10px 10px, var(--color-rivet) 2px, transparent 2.4px);
--hazard-stripe: repeating-linear-gradient(45deg, var(--color-primary) 0 10px, var(--color-accent) 10px 20px);
}

/* ============================================================
Base component classes — Dieselpunk
Signature move: a riveted steel-plate border — corner rivet dots
(radial-gradient) on every panel edge, echoed by a thin hazard-stripe
underline on primary actions. Muted propaganda-poster palette.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border: 2px solid var(--color-border);
background-image: var(--rivet-dot); background-repeat: no-repeat;
background-position: 10px 10px, calc(100% - 10px) 10px; }
.btn { font: 700 var(--text-sm)/1 var(--font-display); letter-spacing: .05em; text-transform: uppercase;
color: var(--color-text); background: var(--color-surface-strong); border: 2px solid var(--color-border);
border-radius: var(--radius-md); padding: var(--space-3) var(--space-6); cursor: pointer;
box-shadow: var(--shadow-sm); transition: filter .15s var(--ease-standard), transform .15s var(--ease-standard); }
.btn:hover { filter: brightness(1.12); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ece3cf; border-color: #7a2e14;
border-bottom: 4px solid; border-image: var(--hazard-stripe) 1; }
.card { background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative;
background-image: var(--rivet-dot); background-repeat: no-repeat;
background-position: 10px 10px, calc(100% - 10px) 10px, 10px calc(100% - 10px), calc(100% - 10px) calc(100% - 10px); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: 2px solid var(--color-border); border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
letter-spacing: .04em; text-transform: uppercase; color: #23201a; background: var(--color-accent);
border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dieselpunk.md */
```

### Variables

```
--bg: #23201a, --fg: #ece3cf, --accent: #b5461f, --surface: #2e2a22, --radius: 3px, --spacing: 16px, --font-display: 'Bebas Neue', 'Oswald', sans-serif, --font-body: 'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#23201a

#2e2a22

#3a352b

#6b5f45

Secondary

#ece3cf

#b8ab8c

#b5461f

#8a9a5b

#4a4436

### Effects

Interwar/WWII industrial machine age, Art Deco + military-industrial forms, Muted metals, propaganda-poster palette, Streamlined engines, zeppelins, riveted steel, shadow

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

- **Name:** Dieselpunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Dieselpunk, interwar retrofuturism, Interwar/WWII industrial machine age, Art Deco + military-industrial forms, Muted metals, propaganda-poster palette, Streamlined engines, zeppelins, riveted steel, retrofuturism
- **Era:** 2001–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #23201a, surface: #2e2a22, surface-strong: #3a352b, border: #6b5f45
- **Secondary:** text: #ece3cf, text-muted: #b8ab8c, primary: #b5461f, accent: #8a9a5b, rivet: #4a4436

## Visual Effects

Interwar/WWII industrial machine age, Art Deco + military-industrial forms, Muted metals, propaganda-poster palette, Streamlined engines, zeppelins, riveted steel, shadow

## AI Visual Direction

Dieselpunk, Interwar/WWII industrial machine age, Art Deco + military-industrial forms, Muted metals, propaganda-poster palette, Streamlined engines, zeppelins, riveted steel, BioShock; Sky Captain and the World of Tomorrow.

## CSS Technical

```css
/* Dieselpunk — design tokens */
/* 2001–present | Term coined ~2001; aesthetic of 1920s–1940s diesel era, condensed */
:root {
/* color */
--color-bg: #23201a;
--color-surface: #2e2a22;
--color-surface-strong: #3a352b;
--color-border: #6b5f45;
--color-text: #ece3cf;
--color-text-muted: #b8ab8c;
--color-primary: #b5461f;
--color-accent: #8a9a5b;
--color-rivet: #4a4436;
/* radius */
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.5);
--shadow-md: 0 4px 10px rgba(0,0,0,0.55);
--shadow-lg: 0 10px 24px rgba(0,0,0,0.6);
/* font */
--font-sans: 'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif;
--font-display: 'Bebas Neue', 'Oswald', sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
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
/* extra: signature = riveted steel-plate border (corner dots) + hazard-stripe accent */
--rivet-dot: radial-gradient(circle at 10px 10px, var(--color-rivet) 2px, transparent 2.4px);
--hazard-stripe: repeating-linear-gradient(45deg, var(--color-primary) 0 10px, var(--color-accent) 10px 20px);
}

/* ============================================================
Base component classes — Dieselpunk
Signature move: a riveted steel-plate border — corner rivet dots
(radial-gradient) on every panel edge, echoed by a thin hazard-stripe
underline on primary actions. Muted propaganda-poster palette.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border: 2px solid var(--color-border);
background-image: var(--rivet-dot); background-repeat: no-repeat;
background-position: 10px 10px, calc(100% - 10px) 10px; }
.btn { font: 700 var(--text-sm)/1 var(--font-display); letter-spacing: .05em; text-transform: uppercase;
color: var(--color-text); background: var(--color-surface-strong); border: 2px solid var(--color-border);
border-radius: var(--radius-md); padding: var(--space-3) var(--space-6); cursor: pointer;
box-shadow: var(--shadow-sm); transition: filter .15s var(--ease-standard), transform .15s var(--ease-standard); }
.btn:hover { filter: brightness(1.12); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ece3cf; border-color: #7a2e14;
border-bottom: 4px solid; border-image: var(--hazard-stripe) 1; }
.card { background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative;
background-image: var(--rivet-dot); background-repeat: no-repeat;
background-position: 10px 10px, calc(100% - 10px) 10px, 10px calc(100% - 10px), calc(100% - 10px) calc(100% - 10px); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: 2px solid var(--color-border); border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
letter-spacing: .04em; text-transform: uppercase; color: #23201a; background: var(--color-accent);
border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dieselpunk.md */
```

## Design System Variables

```css
--bg: #23201a, --fg: #ece3cf, --accent: #b5461f, --surface: #2e2a22, --radius: 3px, --spacing: 16px, --font-display: 'Bebas Neue', 'Oswald', sans-serif, --font-body: 'Oswald', 'Bebas Neue', 'Arial Narrow', sans-serif
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

[![Atompunk](https://designmd.app/images/library/582.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Atompunk](https://designmd.app/library/atompunk)[![Art Deco](https://designmd.app/images/library/304.png) Arte & Ilustracao ### Art Deco](https://designmd.app/library/art-deco)[![Steampunk](https://designmd.app/images/library/322.png) Retro & Pop ### Steampunk](https://designmd.app/library/steampunk)

Last synced: 8/30/2026
