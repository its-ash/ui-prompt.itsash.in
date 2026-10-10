# Frutiger Aero

- Source: <https://designmd.app/library/frutiger-aero>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:39.308Z

Claude Artisan · Retrofuturismo & ficção especulativa2004–2013

# Frutiger Aero

Reference for retrofuturismo & ficção especulativa Frutiger Aero. Retroactively named (after Frutiger typeface + Windows Aero); nature-meets-tech optimism.

Frutiger AeroWeb 2.0 glossAerocleancoreGlossy skeuomorphic bubbles and glassNature imagery: water, bubbles, grass, blue skiesAqua gradients, lens flares, clean techHumanist Frutiger/Myriad type, auto-glowretrofuturism

Use case: grade modular responsiva; Glossy skeuomorphic bubbles and glass; Nature imagery: water, bubbles, grass, blue skies

![Frutiger Aero](https://designmd.app/images/library/643.png)

## Historical Context

Retroactively named (after Frutiger typeface + Windows Aero); nature-meets-tech optimism. Example: Windows Vista/7; Wii/iOS-era wallpapers; Windows XP 'Bliss'..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Frutiger Aero"
description: "Frutiger Aero visual system, translated from the Claude Artisan catalog for use in digital products. Glossy skeuomorphic bubbles and glass; Nature imagery: water, bubbles, grass, blue skies"
colors:
primary: "#38b6ff"
background: "#eaf6ff"
surface: "#eaf6ff"
text: "#0b3d2e"
accent: "#7ed957"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Myriad Pro', 'Segoe UI', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "16px"
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

Frutiger Aero visual system, translated from the Claude Artisan catalog for use in digital products. Glossy skeuomorphic bubbles and glass; Nature imagery: water, bubbles, grass, blue skies

- **Category:** retrofuturism
- **Era:** 2004–2013
- **Origin:** Retroactively named (after Frutiger typeface + Windows Aero); nature-meets-tech optimism.
- **Reference:** Windows Vista/7; Wii/iOS-era wallpapers; Windows XP 'Bliss'.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Glossy skeuomorphic bubbles and glass
- Nature imagery: water, bubbles, grass, blue skies
- Aqua gradients, lens flares, clean tech
- Humanist Frutiger/Myriad type, auto-glow

## Colors

- **bg** — #eaf6ff
- **surface** — rgba(255,255,255,0.55)
- **text** — #0b3d2e
- **text-muted** — #2f6b57
- **primary** — #38b6ff
- **accent** — #7ed957
- **sky** — #8fd3ff
- **green** — #5bd06a
- **aqua** — #00c2c7

## Typography

- Display: 'Myriad Pro', 'Segoe UI', sans-serif
- Body: 'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Glossy skeuomorphic bubbles and glass; Nature imagery: water, bubbles, grass, blue skies; Aqua gradients, lens flares, clean tech; Humanist Frutiger/Myriad type, auto-glow; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 16px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/frutiger-aero/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Frutiger Aero — design tokens (generated from style_catalog.json) */
/* 2004–2013 | Retroactively named (after Frutiger typeface + Windows Aero); nature-meets-tech optimism. */
:root {
/* color */
--color-bg: #eaf6ff;
--color-surface: rgba(255,255,255,0.55);
--color-text: #0b3d2e;
--color-text-muted: #2f6b57;
--color-primary: #38b6ff;
--color-accent: #7ed957;
--color-sky: #8fd3ff;
--color-green: #5bd06a;
--color-aqua: #00c2c7;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-gloss: inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 20px rgba(56,182,255,0.25);
--shadow-sm: 0 4px 12px rgba(56,182,255,0.2);
/* blur */
--blur-backdrop: 10px;
/* font */
--font-sans: 'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Myriad Pro', 'Segoe UI', sans-serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--glossy: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.4) 51%, rgba(255,255,255,0.65) 100%);
--sky-bg: linear-gradient(180deg, #eaf6ff 0%, #bfe8ff 55%, #d9f7d0 100%);
}

/* ============================================================
Base component classes — Frutiger Aero (token-driven).
Signature move lives in references/00-flagship-implementation-specs/frutiger-aero.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-gloss);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-gloss); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-gloss); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(1.05); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/frutiger-aero.md */
```

### Variables

```
--bg: #eaf6ff, --fg: #0b3d2e, --accent: #38b6ff, --surface: #eaf6ff, --radius: 16px, --spacing: 16px, --font-display: 'Myriad Pro', 'Segoe UI', sans-serif, --font-body: 'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#eaf6ff

#0b3d2e

#2f6b57

Secondary

#38b6ff

#7ed957

#8fd3ff

#5bd06a

#00c2c7

### Effects

Glossy skeuomorphic bubbles and glass, Nature imagery: water, bubbles, grass, blue skies, Aqua gradients, lens flares, clean tech, Humanist Frutiger/Myriad type, auto-glow, shadow, blur

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

- **Name:** Frutiger Aero
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Frutiger Aero, Web 2.0 gloss, Aero, cleancore, Glossy skeuomorphic bubbles and glass, Nature imagery: water, bubbles, grass, blue skies, Aqua gradients, lens flares, clean tech, Humanist Frutiger/Myriad type, auto-glow, retrofuturism
- **Era:** 2004–2013
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #eaf6ff, surface: rgba(255,255,255,0.55), text: #0b3d2e, text-muted: #2f6b57
- **Secondary:** primary: #38b6ff, accent: #7ed957, sky: #8fd3ff, green: #5bd06a, aqua: #00c2c7

## Visual Effects

Glossy skeuomorphic bubbles and glass, Nature imagery: water, bubbles, grass, blue skies, Aqua gradients, lens flares, clean tech, Humanist Frutiger/Myriad type, auto-glow, shadow, blur

## AI Visual Direction

Frutiger Aero, Glossy skeuomorphic bubbles and glass, Nature imagery: water, bubbles, grass, blue skies, Aqua gradients, lens flares, clean tech, Humanist Frutiger/Myriad type, auto-glow, Windows Vista/7; Wii/iOS-era wallpapers; Windows XP 'Bliss'.

## CSS Technical

```css
/* Frutiger Aero — design tokens (generated from style_catalog.json) */
/* 2004–2013 | Retroactively named (after Frutiger typeface + Windows Aero); nature-meets-tech optimism. */
:root {
/* color */
--color-bg: #eaf6ff;
--color-surface: rgba(255,255,255,0.55);
--color-text: #0b3d2e;
--color-text-muted: #2f6b57;
--color-primary: #38b6ff;
--color-accent: #7ed957;
--color-sky: #8fd3ff;
--color-green: #5bd06a;
--color-aqua: #00c2c7;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-gloss: inset 0 1px 0 rgba(255,255,255,0.9), 0 8px 20px rgba(56,182,255,0.25);
--shadow-sm: 0 4px 12px rgba(56,182,255,0.2);
/* blur */
--blur-backdrop: 10px;
/* font */
--font-sans: 'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Myriad Pro', 'Segoe UI', sans-serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--glossy: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.4) 51%, rgba(255,255,255,0.65) 100%);
--sky-bg: linear-gradient(180deg, #eaf6ff 0%, #bfe8ff 55%, #d9f7d0 100%);
}

/* ============================================================
Base component classes — Frutiger Aero (token-driven).
Signature move lives in references/00-flagship-implementation-specs/frutiger-aero.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-gloss);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-gloss); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-gloss); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(1.05); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/frutiger-aero.md */
```

## Design System Variables

```css
--bg: #eaf6ff, --fg: #0b3d2e, --accent: #38b6ff, --surface: #eaf6ff, --radius: 16px, --spacing: 16px, --font-display: 'Myriad Pro', 'Segoe UI', sans-serif, --font-body: 'Frutiger', 'Myriad Pro', 'Segoe UI', system-ui, sans-serif
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

[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)[![Solarpunk](https://designmd.app/images/library/719.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Solarpunk](https://designmd.app/library/solarpunk)

Last synced: 8/30/2026
