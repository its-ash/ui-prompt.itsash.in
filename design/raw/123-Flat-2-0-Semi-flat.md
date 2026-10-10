# Flat 2.0 / Semi-flat

- Source: <https://designmd.app/library/flat-2>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:30.296Z

Claude Artisan · Morphism & profundidade tátil2015–present

# Flat 2.0 / Semi-flat

Reference for morphism & profundidade tátil Flat 2.0 / Semi-flat. Google Material (2014) and industry reaction to pure flat's usability problems.

Flat 2.0 / Semi-flatalmost flatflat design 2.0semi-flatFlat foundation with subtle shadows and depth cues restoredLong/ghost shadows, subtle gradientsClear affordances without skeuomorphic textureLayered card surfacesmorphism

Use case: shell de aplicação com navegação e cartões; Flat foundation with subtle shadows and depth cues restored; Long/ghost shadows, subtle gradients

![Flat 2.0 / Semi-flat](https://designmd.app/images/library/638.png)

## Historical Context

Google Material (2014) and industry reaction to pure flat's usability problems. Example: Google Material Design; most modern SaaS dashboards..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Flat 2.0 / Semi-flat"
description: "Flat 2.0 / Semi-flat visual system, translated from the Claude Artisan catalog for use in digital products. Flat foundation with subtle shadows and depth cues restored; Long/ghost shadows, subtle gradients"
colors:
primary: "#3f6df0"
background: "#eef1f6"
surface: "#ffffff"
text: "#1c2430"
accent: "#ff7a45"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Roboto', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Roboto', 'Google Sans', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Roboto', 'Google Sans', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
lg: "16px"
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

Flat 2.0 / Semi-flat visual system, translated from the Claude Artisan catalog for use in digital products. Flat foundation with subtle shadows and depth cues restored; Long/ghost shadows, subtle gradients

- **Category:** morphism
- **Era:** 2015–present
- **Origin:** Google Material (2014) and industry reaction to pure flat's usability problems.
- **Reference:** Google Material Design; most modern SaaS dashboards.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Flat foundation with subtle shadows and depth cues restored
- Long/ghost shadows, subtle gradients
- Clear affordances without skeuomorphic texture
- Layered card surfaces

## Colors

- **bg** — #eef1f6
- **surface** — #ffffff
- **surface-strong** — #f4f6fa
- **border** — #dbe1ea
- **text** — #1c2430
- **text-muted** — #5a6472
- **primary** — #3f6df0
- **accent** — #ff7a45

## Typography

- Display: 'Roboto', system-ui, sans-serif
- Body: 'Roboto', 'Google Sans', system-ui, sans-serif
- Mono: 'Roboto Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flat foundation with subtle shadows and depth cues restored; Long/ghost shadows, subtle gradients; Clear affordances without skeuomorphic texture; Layered card surfaces

## Shapes

- Radius scale: 0 1px 2px rgba(28,36,48,0.06), 0 4px 8px rgba(28,36,48,0.06), 0 2px 4px rgba(28,36,48,0.07), 0 10px 24px rgba(28,36,48,0.10), 0 4px 8px rgba(28,36,48,0.08), 0 24px 48px rgba(28,36,48,0.14).

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/flat-2/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Flat 2.0 / Semi-flat — design tokens */
/* 2015–present | Google Material (2014) and the reaction to pure flat's usability problems, condensed */
:root {
/* color */
--color-bg: #eef1f6;
--color-surface: #ffffff;
--color-surface-strong: #f4f6fa;
--color-border: #dbe1ea;
--color-text: #1c2430;
--color-text-muted: #5a6472;
--color-primary: #3f6df0;
--color-accent: #ff7a45;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow: layered "ghost shadow" — two soft offset shadows instead of one,
restoring depth cues that pure flat design removed */
--shadow-sm: 0 1px 2px rgba(28,36,48,0.06), 0 4px 8px rgba(28,36,48,0.06);
--shadow-md: 0 2px 4px rgba(28,36,48,0.07), 0 10px 24px rgba(28,36,48,0.10);
--shadow-lg: 0 4px 8px rgba(28,36,48,0.08), 0 24px 48px rgba(28,36,48,0.14);
/* font */
--font-sans: 'Roboto', 'Google Sans', system-ui, sans-serif;
--font-display: 'Roboto', system-ui, sans-serif;
--font-mono: 'Roboto Mono', ui-monospace, monospace;
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
--ease-entrance: cubic-bezier(0, 0, 0.2, 1);
/* extra: ghost-shadow lift on hover, and a 1px hairline that stands in for
the border pure-flat design dropped — both repeat across card/btn/nav */
--lift-hover: translateY(-2px);
}

/* ============================================================
Base component classes — flat-2 (semi-flat)
Signature move: layered "ghost shadow" (two soft offset shadow layers,
see --shadow-*) that lifts further on hover, restoring the depth cue
pure flat design removed. Repeated on nav, card and btn.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-md); box-shadow: var(--shadow-sm);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: var(--lift-hover); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
transition: box-shadow .18s var(--ease-standard), transform .18s var(--ease-standard);
}
.card:hover { transform: var(--lift-hover); box-shadow: var(--shadow-lg); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(63,109,240,0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #2b1200; }
@media (prefers-reduced-motion: reduce) { .btn, .card { transition: none; } .btn:hover, .card:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/flat-2.md */
```

### Variables

```
--bg: #eef1f6, --fg: #1c2430, --accent: #3f6df0, --surface: #ffffff, --radius: 0 2px 4px rgba(28,36,48,0.07), 0 10px 24px rgba(28,36,48,0.10), --spacing: 16px, --font-display: 'Roboto', system-ui, sans-serif, --font-body: 'Roboto', 'Google Sans', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#eef1f6

#ffffff

#f4f6fa

#dbe1ea

Secondary

#1c2430

#5a6472

#3f6df0

#ff7a45

### Effects

Flat foundation with subtle shadows and depth cues restored, Long/ghost shadows, subtle gradients, Clear affordances without skeuomorphic texture, Layered card surfaces

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

- **Name:** Flat 2.0 / Semi-flat
- **Type:** claude-artisan/morphism
- **Keywords:** Flat 2.0 / Semi-flat, almost flat, flat design 2.0, semi-flat, Flat foundation with subtle shadows and depth cues restored, Long/ghost shadows, subtle gradients, Clear affordances without skeuomorphic texture, Layered card surfaces, morphism
- **Era:** 2015–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #eef1f6, surface: #ffffff, surface-strong: #f4f6fa, border: #dbe1ea
- **Secondary:** text: #1c2430, text-muted: #5a6472, primary: #3f6df0, accent: #ff7a45

## Visual Effects

Flat foundation with subtle shadows and depth cues restored, Long/ghost shadows, subtle gradients, Clear affordances without skeuomorphic texture, Layered card surfaces

## AI Visual Direction

Flat 2.0 / Semi-flat, Flat foundation with subtle shadows and depth cues restored, Long/ghost shadows, subtle gradients, Clear affordances without skeuomorphic texture, Layered card surfaces, Google Material Design; most modern SaaS dashboards.

## CSS Technical

```css
/* Flat 2.0 / Semi-flat — design tokens */
/* 2015–present | Google Material (2014) and the reaction to pure flat's usability problems, condensed */
:root {
/* color */
--color-bg: #eef1f6;
--color-surface: #ffffff;
--color-surface-strong: #f4f6fa;
--color-border: #dbe1ea;
--color-text: #1c2430;
--color-text-muted: #5a6472;
--color-primary: #3f6df0;
--color-accent: #ff7a45;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow: layered "ghost shadow" — two soft offset shadows instead of one,
restoring depth cues that pure flat design removed */
--shadow-sm: 0 1px 2px rgba(28,36,48,0.06), 0 4px 8px rgba(28,36,48,0.06);
--shadow-md: 0 2px 4px rgba(28,36,48,0.07), 0 10px 24px rgba(28,36,48,0.10);
--shadow-lg: 0 4px 8px rgba(28,36,48,0.08), 0 24px 48px rgba(28,36,48,0.14);
/* font */
--font-sans: 'Roboto', 'Google Sans', system-ui, sans-serif;
--font-display: 'Roboto', system-ui, sans-serif;
--font-mono: 'Roboto Mono', ui-monospace, monospace;
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
--ease-entrance: cubic-bezier(0, 0, 0.2, 1);
/* extra: ghost-shadow lift on hover, and a 1px hairline that stands in for
the border pure-flat design dropped — both repeat across card/btn/nav */
--lift-hover: translateY(-2px);
}

/* ============================================================
Base component classes — flat-2 (semi-flat)
Signature move: layered "ghost shadow" (two soft offset shadow layers,
see --shadow-*) that lifts further on hover, restoring the depth cue
pure flat design removed. Repeated on nav, card and btn.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-md); box-shadow: var(--shadow-sm);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: var(--lift-hover); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
transition: box-shadow .18s var(--ease-standard), transform .18s var(--ease-standard);
}
.card:hover { transform: var(--lift-hover); box-shadow: var(--shadow-lg); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(63,109,240,0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #2b1200; }
@media (prefers-reduced-motion: reduce) { .btn, .card { transition: none; } .btn:hover, .card:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/flat-2.md */
```

## Design System Variables

```css
--bg: #eef1f6, --fg: #1c2430, --accent: #3f6df0, --surface: #ffffff, --radius: 0 2px 4px rgba(28,36,48,0.07), 0 10px 24px rgba(28,36,48,0.10), --spacing: 16px, --font-display: 'Roboto', system-ui, sans-serif, --font-body: 'Roboto', 'Google Sans', system-ui, sans-serif
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

[![Flat Design](https://designmd.app/images/library/12.png) Flat & Soft UI ### Flat Design](https://designmd.app/library/flat-design)[![Material Design (M2)](https://designmd.app/images/library/678.png) Claude Artisan · Flat, material & plataformas ### Material Design (M2)](https://designmd.app/library/material-design)

Last synced: 8/30/2026
