# Emboss / Deboss

- Source: <https://designmd.app/library/emboss-deboss>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:20.313Z

Claude Artisan · Morphism & profundidade tátil2000s–present

# Emboss / Deboss

Reference for morphism & profundidade tátil Emboss / Deboss. Print letterpress heritage adapted to screen (text-shadow technique).

Emboss / Debossletterpress UIpressed typeType looks stamped into or raised from the surfaceSubtle 1px light/dark text-shadow pairWorks on textured/tinted backgroundsTactile, premium feelmorphism

Use case: grade modular responsiva; Type looks stamped into or raised from the surface; Subtle 1px light/dark text-shadow pair

![Emboss / Deboss](https://designmd.app/images/library/631.png)

## Historical Context

Print letterpress heritage adapted to screen (text-shadow technique). Example: Letterpress text effects on textured web headers (~2010)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Emboss / Deboss"
description: "Emboss / Deboss visual system, translated from the Claude Artisan catalog for use in digital products. Type looks stamped into or raised from the surface; Subtle 1px light/dark text-shadow pair"
colors:
primary: "#7a5a3a"
background: "#dbd6cb"
surface: "#d3cebf"
text: "#4a4538"
accent: "#a8763f"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Caslon', 'Georgia', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Georgia', 'Iowan Old Style', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Georgia', 'Iowan Old Style', serif"
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

Emboss / Deboss visual system, translated from the Claude Artisan catalog for use in digital products. Type looks stamped into or raised from the surface; Subtle 1px light/dark text-shadow pair

- **Category:** morphism
- **Era:** 2000s–present
- **Origin:** Print letterpress heritage adapted to screen (text-shadow technique).
- **Reference:** Letterpress text effects on textured web headers (~2010).
- **Structural base:** grade modular responsiva

**Defining traits:**
- Type looks stamped into or raised from the surface
- Subtle 1px light/dark text-shadow pair
- Works on textured/tinted backgrounds
- Tactile, premium feel

## Colors

- **bg** — #dbd6cb
- **surface** — #d3cebf
- **surface-strong** — #c8c2b0
- **border** — #b8b1a0
- **text** — #4a4538
- **text-muted** — #6e6857
- **primary** — #7a5a3a
- **accent** — #a8763f
- **shadow-lo** — rgba(60, 55, 40, 0.45)
- **shadow-hi** — rgba(255, 255, 250, 0.65)

## Typography

- Display: 'Caslon', 'Georgia', serif
- Body: 'Georgia', 'Iowan Old Style', serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Type looks stamped into or raised from the surface; Subtle 1px light/dark text-shadow pair; Works on textured/tinted backgrounds; Tactile, premium feel; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/emboss-deboss/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Emboss / Deboss — design tokens */
/* 2000s–present | Print letterpress heritage adapted to screen (text-shadow technique), condensed */
:root {
/* color */
--color-bg: #dbd6cb;
--color-surface: #d3cebf;
--color-surface-strong: #c8c2b0;
--color-border: #b8b1a0;
--color-text: #4a4538;
--color-text-muted: #6e6857;
--color-primary: #7a5a3a;
--color-accent: #a8763f;
--color-shadow-lo: rgba(60, 55, 40, 0.45);
--color-shadow-hi: rgba(255, 255, 250, 0.65);
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 1px 1px 2px var(--color-shadow-lo), -1px -1px 1px var(--color-shadow-hi);
--shadow-md: inset 2px 2px 3px var(--color-shadow-lo), inset -2px -2px 3px var(--color-shadow-hi);
--shadow-lg: inset 3px 3px 6px var(--color-shadow-lo), inset -3px -3px 6px var(--color-shadow-hi);
/* font */
--font-sans: 'Georgia', 'Iowan Old Style', serif;
--font-display: 'Caslon', 'Georgia', serif;
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
/* extra: signature = 1px light/dark text-shadow pair stamping type into the surface */
--emboss-text: 1px 1px 0 var(--color-shadow-hi), -1px -1px 1px var(--color-shadow-lo);
--deboss-text: -1px -1px 0 var(--color-shadow-hi), 1px 1px 1px var(--color-shadow-lo);
}

/* ============================================================
Base component classes — Emboss / Deboss
Signature move: a 1px light + 1px dark text-shadow pair makes type
look pressed into (deboss) or raised from (emboss) the tinted paper
surface; the same duo drives inset/outset shadows on card and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-radius: var(--radius-md); box-shadow: var(--shadow-md); }
.nav strong, .nav a { text-shadow: var(--emboss-text); }
.btn { font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text); text-shadow: var(--emboss-text);
background: var(--color-surface); border: none; border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6); cursor: pointer; box-shadow: var(--shadow-sm), var(--shadow-md);
transition: box-shadow .15s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-lg); }
.btn:active { text-shadow: var(--deboss-text); box-shadow: var(--shadow-lg); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-accent); color: #2c2214; text-shadow: 1px 1px 0 rgba(255,255,255,0.35), -1px -1px 1px rgba(0,0,0,0.3); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); padding: var(--space-6); box-shadow: var(--shadow-sm), 0 6px 16px rgba(60,55,40,0.15); }
.card h3 { text-shadow: var(--emboss-text); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: none; border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); box-shadow: var(--shadow-md); }
.input::placeholder { color: var(--color-text-muted); text-shadow: var(--deboss-text); }
.input:focus { outline: none; box-shadow: var(--shadow-lg), 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
color: var(--color-text); text-shadow: var(--deboss-text); background: var(--color-surface-strong);
border-radius: var(--radius-pill); padding: .3em .8em; box-shadow: var(--shadow-md); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/emboss-deboss.md */
```

### Variables

```
--bg: #dbd6cb, --fg: #4a4538, --accent: #7a5a3a, --surface: #d3cebf, --radius: 8px, --spacing: 16px, --font-display: 'Caslon', 'Georgia', serif, --font-body: 'Georgia', 'Iowan Old Style', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#dbd6cb

#d3cebf

#c8c2b0

#b8b1a0

Secondary

#4a4538

#6e6857

#7a5a3a

#a8763f

### Effects

Type looks stamped into or raised from the surface, Subtle 1px light/dark text-shadow pair, Works on textured/tinted backgrounds, Tactile, premium feel, shadow

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

- **Name:** Emboss / Deboss
- **Type:** claude-artisan/morphism
- **Keywords:** Emboss / Deboss, letterpress UI, pressed type, Type looks stamped into or raised from the surface, Subtle 1px light/dark text-shadow pair, Works on textured/tinted backgrounds, Tactile, premium feel, morphism
- **Era:** 2000s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #dbd6cb, surface: #d3cebf, surface-strong: #c8c2b0, border: #b8b1a0
- **Secondary:** text: #4a4538, text-muted: #6e6857, primary: #7a5a3a, accent: #a8763f, shadow-lo: rgba(60, 55, 40, 0.45), shadow-hi: rgba(255, 255, 250, 0.65)

## Visual Effects

Type looks stamped into or raised from the surface, Subtle 1px light/dark text-shadow pair, Works on textured/tinted backgrounds, Tactile, premium feel, shadow

## AI Visual Direction

Emboss / Deboss, Type looks stamped into or raised from the surface, Subtle 1px light/dark text-shadow pair, Works on textured/tinted backgrounds, Tactile, premium feel, Letterpress text effects on textured web headers (~2010).

## CSS Technical

```css
/* Emboss / Deboss — design tokens */
/* 2000s–present | Print letterpress heritage adapted to screen (text-shadow technique), condensed */
:root {
/* color */
--color-bg: #dbd6cb;
--color-surface: #d3cebf;
--color-surface-strong: #c8c2b0;
--color-border: #b8b1a0;
--color-text: #4a4538;
--color-text-muted: #6e6857;
--color-primary: #7a5a3a;
--color-accent: #a8763f;
--color-shadow-lo: rgba(60, 55, 40, 0.45);
--color-shadow-hi: rgba(255, 255, 250, 0.65);
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 1px 1px 2px var(--color-shadow-lo), -1px -1px 1px var(--color-shadow-hi);
--shadow-md: inset 2px 2px 3px var(--color-shadow-lo), inset -2px -2px 3px var(--color-shadow-hi);
--shadow-lg: inset 3px 3px 6px var(--color-shadow-lo), inset -3px -3px 6px var(--color-shadow-hi);
/* font */
--font-sans: 'Georgia', 'Iowan Old Style', serif;
--font-display: 'Caslon', 'Georgia', serif;
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
/* extra: signature = 1px light/dark text-shadow pair stamping type into the surface */
--emboss-text: 1px 1px 0 var(--color-shadow-hi), -1px -1px 1px var(--color-shadow-lo);
--deboss-text: -1px -1px 0 var(--color-shadow-hi), 1px 1px 1px var(--color-shadow-lo);
}

/* ============================================================
Base component classes — Emboss / Deboss
Signature move: a 1px light + 1px dark text-shadow pair makes type
look pressed into (deboss) or raised from (emboss) the tinted paper
surface; the same duo drives inset/outset shadows on card and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-radius: var(--radius-md); box-shadow: var(--shadow-md); }
.nav strong, .nav a { text-shadow: var(--emboss-text); }
.btn { font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text); text-shadow: var(--emboss-text);
background: var(--color-surface); border: none; border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6); cursor: pointer; box-shadow: var(--shadow-sm), var(--shadow-md);
transition: box-shadow .15s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-lg); }
.btn:active { text-shadow: var(--deboss-text); box-shadow: var(--shadow-lg); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-accent); color: #2c2214; text-shadow: 1px 1px 0 rgba(255,255,255,0.35), -1px -1px 1px rgba(0,0,0,0.3); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); padding: var(--space-6); box-shadow: var(--shadow-sm), 0 6px 16px rgba(60,55,40,0.15); }
.card h3 { text-shadow: var(--emboss-text); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: none; border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); box-shadow: var(--shadow-md); }
.input::placeholder { color: var(--color-text-muted); text-shadow: var(--deboss-text); }
.input:focus { outline: none; box-shadow: var(--shadow-lg), 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
color: var(--color-text); text-shadow: var(--deboss-text); background: var(--color-surface-strong);
border-radius: var(--radius-pill); padding: .3em .8em; box-shadow: var(--shadow-md); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/emboss-deboss.md */
```

## Design System Variables

```css
--bg: #dbd6cb, --fg: #4a4538, --accent: #7a5a3a, --surface: #d3cebf, --radius: 8px, --spacing: 16px, --font-display: 'Caslon', 'Georgia', serif, --font-body: 'Georgia', 'Iowan Old Style', serif
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

[![Neumorphism](https://designmd.app/images/library/2.png) Flat & Soft UI ### Neumorphism](https://designmd.app/library/neumorphism)

Last synced: 8/30/2026
