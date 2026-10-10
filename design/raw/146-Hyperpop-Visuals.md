# Hyperpop Visuals

- Source: <https://designmd.app/library/hyperpop>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:08.317Z

Claude Artisan · Subculturas & estéticas de nicho2019–present

# Hyperpop Visuals

Reference for subculturas & estéticas de nicho Hyperpop Visuals. Hyperpop music-scene visual identity.

Hyperpop Visualshyperpopglitchcore popOversaturated candy + glitch chaos3D chrome, distorted type, motion blurIronic maximal internet-native energyLoud, fast, chaoticniche

Use case: hero, superfície, conteúdo e grade responsiva; Oversaturated candy + glitch chaos; 3D chrome, distorted type, motion blur

![Hyperpop Visuals](https://designmd.app/images/library/659.png)

## Historical Context

Hyperpop music-scene visual identity. Example: 100 gecs; SOPHIE-adjacent visuals..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Hyperpop Visuals"
description: "Hyperpop Visuals visual system, translated from the Claude Artisan catalog for use in digital products. Oversaturated candy + glitch chaos; 3D chrome, distorted type, motion blur"
colors:
primary: "#ff2fd0"
background: "#0d0018"
surface: "#1a0330"
text: "#fbf3ff"
accent: "#2ff3ff"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Rubik', 'Chrome Bold', 'Arial Black', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Space Grotesk', 'Arial', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Space Grotesk', 'Arial', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "10px"
lg: "18px"
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

Hyperpop Visuals visual system, translated from the Claude Artisan catalog for use in digital products. Oversaturated candy + glitch chaos; 3D chrome, distorted type, motion blur

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Hyperpop music-scene visual identity.
- **Reference:** 100 gecs; SOPHIE-adjacent visuals.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Oversaturated candy + glitch chaos
- 3D chrome, distorted type, motion blur
- Ironic maximal internet-native energy
- Loud, fast, chaotic

## Colors

- **bg** — #0d0018
- **surface** — #1a0330
- **surface-strong** — #290548
- **border** — #ff2fd0
- **text** — #fbf3ff
- **text-muted** — #d6a9f0
- **primary** — #ff2fd0
- **accent** — #2ff3ff
- **lime** — #c6ff2f

## Typography

- Display: 'Rubik', 'Chrome Bold', 'Arial Black', sans-serif
- Body: 'Space Grotesk', 'Arial', sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Oversaturated candy + glitch chaos; 3D chrome, distorted type, motion blur; Ironic maximal internet-native energy; Loud, fast, chaotic; sombras e elevação

## Shapes

- Radius scale: 4px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/hyperpop/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Hyperpop Visuals — design tokens */
/* 2019–present | Hyperpop music-scene visual identity, condensed */
:root {
/* color */
--color-bg: #0d0018;
--color-surface: #1a0330;
--color-surface-strong: #290548;
--color-border: #ff2fd0;
--color-text: #fbf3ff;
--color-text-muted: #d6a9f0;
--color-primary: #ff2fd0;
--color-accent: #2ff3ff;
--color-lime: #c6ff2f;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow: chromatic-aberration-style double glow */
--shadow-sm: 0 0 0 2px var(--color-primary), 0 0 14px rgba(255,47,208,0.5);
--shadow-md: -2px 0 0 var(--color-accent), 2px 0 0 var(--color-primary), 0 8px 24px rgba(255,47,208,0.35);
--shadow-lg: -3px 0 0 var(--color-accent), 3px 0 0 var(--color-primary), 0 16px 42px rgba(255,47,208,0.4);
/* font */
--font-sans: 'Space Grotesk', 'Arial', sans-serif;
--font-display: 'Rubik', 'Chrome Bold', 'Arial Black', sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.4rem;
--text-2xl: 1.9rem;
--text-3xl: 2.6rem;
--text-4xl: 3.6rem;
--text-5xl: 5.2rem;
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
--ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55);
/* extra: a chromatic-aberration RGB-split glow (cyan/magenta double outline)
and a candy gradient, both repeated across nav/btn/card for glitch-chaos energy */
--candy-gradient: linear-gradient(120deg, var(--color-primary), var(--color-accent) 50%, var(--color-lime));
--glitch-text-shadow: -1px 0 var(--color-accent), 1px 0 var(--color-primary);
}

/* ============================================================
Base component classes — Hyperpop
Signature move: an RGB chromatic-aberration split (cyan/magenta double
outline or shadow) — the visual signature of glitch — repeats on the
nav border, card shadow, and headline text-shadow.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: 2px solid var(--color-primary); border-radius: var(--radius-pill);
box-shadow: var(--shadow-sm); }
.btn { font: 800 var(--text-base)/1 var(--font-display); text-transform: uppercase; letter-spacing: .03em;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-primary);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: scale(1.04) rotate(-1deg); box-shadow: var(--shadow-md); }
.btn:active { transform: scale(0.98); }
.btn:focus-visible { outline: 3px solid var(--color-lime); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--candy-gradient); color: #0d0018; border-color: transparent; }
.card { background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.card h3 { text-shadow: var(--glitch-text-shadow); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-accent); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs) var(--font-display);
text-transform: uppercase; padding: .3em .8em; border-radius: var(--radius-pill); background: var(--candy-gradient); color: #0d0018; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/hyperpop.md */
```

### Variables

```
--bg: #0d0018, --fg: #fbf3ff, --accent: #ff2fd0, --surface: #1a0330, --radius: 10px, --spacing: 16px, --font-display: 'Rubik', 'Chrome Bold', 'Arial Black', sans-serif, --font-body: 'Space Grotesk', 'Arial', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0d0018

#1a0330

#290548

#ff2fd0

Secondary

#fbf3ff

#d6a9f0

#ff2fd0

#2ff3ff

#c6ff2f

### Effects

Oversaturated candy + glitch chaos, 3D chrome, distorted type, motion blur, Ironic maximal internet-native energy, Loud, fast, chaotic, shadow

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

- **Name:** Hyperpop Visuals
- **Type:** claude-artisan/niche
- **Keywords:** Hyperpop Visuals, hyperpop, glitchcore pop, Oversaturated candy + glitch chaos, 3D chrome, distorted type, motion blur, Ironic maximal internet-native energy, Loud, fast, chaotic, niche
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0d0018, surface: #1a0330, surface-strong: #290548, border: #ff2fd0
- **Secondary:** text: #fbf3ff, text-muted: #d6a9f0, primary: #ff2fd0, accent: #2ff3ff, lime: #c6ff2f

## Visual Effects

Oversaturated candy + glitch chaos, 3D chrome, distorted type, motion blur, Ironic maximal internet-native energy, Loud, fast, chaotic, shadow

## AI Visual Direction

Hyperpop Visuals, Oversaturated candy + glitch chaos, 3D chrome, distorted type, motion blur, Ironic maximal internet-native energy, Loud, fast, chaotic, 100 gecs; SOPHIE-adjacent visuals.

## CSS Technical

```css
/* Hyperpop Visuals — design tokens */
/* 2019–present | Hyperpop music-scene visual identity, condensed */
:root {
/* color */
--color-bg: #0d0018;
--color-surface: #1a0330;
--color-surface-strong: #290548;
--color-border: #ff2fd0;
--color-text: #fbf3ff;
--color-text-muted: #d6a9f0;
--color-primary: #ff2fd0;
--color-accent: #2ff3ff;
--color-lime: #c6ff2f;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow: chromatic-aberration-style double glow */
--shadow-sm: 0 0 0 2px var(--color-primary), 0 0 14px rgba(255,47,208,0.5);
--shadow-md: -2px 0 0 var(--color-accent), 2px 0 0 var(--color-primary), 0 8px 24px rgba(255,47,208,0.35);
--shadow-lg: -3px 0 0 var(--color-accent), 3px 0 0 var(--color-primary), 0 16px 42px rgba(255,47,208,0.4);
/* font */
--font-sans: 'Space Grotesk', 'Arial', sans-serif;
--font-display: 'Rubik', 'Chrome Bold', 'Arial Black', sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.4rem;
--text-2xl: 1.9rem;
--text-3xl: 2.6rem;
--text-4xl: 3.6rem;
--text-5xl: 5.2rem;
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
--ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55);
/* extra: a chromatic-aberration RGB-split glow (cyan/magenta double outline)
and a candy gradient, both repeated across nav/btn/card for glitch-chaos energy */
--candy-gradient: linear-gradient(120deg, var(--color-primary), var(--color-accent) 50%, var(--color-lime));
--glitch-text-shadow: -1px 0 var(--color-accent), 1px 0 var(--color-primary);
}

/* ============================================================
Base component classes — Hyperpop
Signature move: an RGB chromatic-aberration split (cyan/magenta double
outline or shadow) — the visual signature of glitch — repeats on the
nav border, card shadow, and headline text-shadow.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: 2px solid var(--color-primary); border-radius: var(--radius-pill);
box-shadow: var(--shadow-sm); }
.btn { font: 800 var(--text-base)/1 var(--font-display); text-transform: uppercase; letter-spacing: .03em;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-primary);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: scale(1.04) rotate(-1deg); box-shadow: var(--shadow-md); }
.btn:active { transform: scale(0.98); }
.btn:focus-visible { outline: 3px solid var(--color-lime); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--candy-gradient); color: #0d0018; border-color: transparent; }
.card { background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.card h3 { text-shadow: var(--glitch-text-shadow); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-accent); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs) var(--font-display);
text-transform: uppercase; padding: .3em .8em; border-radius: var(--radius-pill); background: var(--candy-gradient); color: #0d0018; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/hyperpop.md */
```

## Design System Variables

```css
--bg: #0d0018, --fg: #fbf3ff, --accent: #ff2fd0, --surface: #1a0330, --radius: 10px, --spacing: 16px, --font-display: 'Rubik', 'Chrome Bold', 'Arial Black', sans-serif, --font-body: 'Space Grotesk', 'Arial', sans-serif
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

[![Maximalism](https://designmd.app/images/library/680.png) Claude Artisan · Minimal, maximal & orgânico ### Maximalism](https://designmd.app/library/maximalism)[![Acid Graphics / Acid Design](https://designmd.app/images/library/563.png) Claude Artisan · Subculturas & estéticas de nicho ### Acid Graphics / Acid Design](https://designmd.app/library/acid-graphics)[![Glitch Art](https://designmd.app/images/library/646.png) Claude Artisan · Textura, material & renderização ### Glitch Art](https://designmd.app/library/glitch-art)

Last synced: 8/30/2026
