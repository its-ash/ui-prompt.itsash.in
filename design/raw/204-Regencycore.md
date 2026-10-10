# Regencycore

- Source: <https://designmd.app/library/regencycore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:40.253Z

Claude Artisan · Subculturas & estéticas de nicho2020–present

# Regencycore

Reference for subculturas & estéticas de nicho Regencycore. Regency-era romance revival (Bridgerton, 2020).

RegencycoreBridgerton aestheticRegencyPastel florals, empire silhouettes, pearlsOrnate script, gilt framesSoft romantic period paletteAristocratic, dreamy, floralniche

Use case: hero, superfície, conteúdo e grade responsiva; Pastel florals, empire silhouettes, pearls; Ornate script, gilt frames

![Regencycore](https://designmd.app/images/library/710.png)

## Historical Context

Regency-era romance revival (Bridgerton, 2020). Example: Netflix 'Bridgerton'..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Regencycore"
description: "Regencycore visual system, translated from the Claude Artisan catalog for use in digital products. Pastel florals, empire silhouettes, pearls; Ornate script, gilt frames"
colors:
primary: "#c1436a"
background: "#fbeef0"
surface: "#fffaf6"
text: "#4a2c3a"
accent: "#c9a35c"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Great Vibes', 'Snell Roundhand', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "16px"
lg: "28px"
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

Regencycore visual system, translated from the Claude Artisan catalog for use in digital products. Pastel florals, empire silhouettes, pearls; Ornate script, gilt frames

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Regency-era romance revival (Bridgerton, 2020).
- **Reference:** Netflix 'Bridgerton'.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Pastel florals, empire silhouettes, pearls
- Ornate script, gilt frames
- Soft romantic period palette
- Aristocratic, dreamy, floral

## Colors

- **bg** — #fbeef0
- **surface** — #fffaf6
- **surface-strong** — #f6e0e4
- **border** — #e3b8c2
- **text** — #4a2c3a
- **text-muted** — #8a6274
- **primary** — #c1436a
- **accent** — #c9a35c
- **sage** — #8fa583

## Typography

- Display: 'Great Vibes', 'Snell Roundhand', cursive
- Body: 'Cormorant Garamond', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Pastel florals, empire silhouettes, pearls; Ornate script, gilt frames; Soft romantic period palette; Aristocratic, dreamy, floral; sombras e elevação

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/regencycore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Regencycore — design tokens */
/* 2020–present | Regency-era romance revival (Bridgerton, 2020), condensed */
:root {
/* color */
--color-bg: #fbeef0;
--color-surface: #fffaf6;
--color-surface-strong: #f6e0e4;
--color-border: #e3b8c2;
--color-text: #4a2c3a;
--color-text-muted: #8a6274;
--color-primary: #c1436a;
--color-accent: #c9a35c;
--color-sage: #8fa583;
/* radius: soft empire-waist curves everywhere */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(193, 67, 106, 0.10);
--shadow-md: 0 8px 20px rgba(193, 67, 106, 0.14);
--shadow-lg: 0 18px 36px rgba(193, 67, 106, 0.16);
/* font */
--font-sans: 'Cormorant Garamond', Georgia, serif;
--font-display: 'Great Vibes', 'Snell Roundhand', cursive;
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
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
/* extra: a double gilt frame — a thin gold line inset within a blush border — is the signature ornament */
--gilt-frame: 1px solid var(--color-accent);
--gilt-outer: 2px solid var(--color-border);
--floral-wash: radial-gradient(120% 100% at 100% 0%, rgba(201,163,92,0.14), transparent 55%);
}

/* ============================================================
Base component classes — Regencycore
Signature move: a double gilt frame — a slim gold hairline sitting
just inside a soft blush border, like a miniature portrait frame —
repeated on the nav, every card, and the primary button; a script
display face for headlines and brand marks.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--floral-wash), var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-surface);
border: var(--gilt-outer); border-radius: var(--radius-lg);
outline: var(--gilt-frame); outline-offset: -4px; margin: var(--space-4); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--gilt-outer);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff5f7; border-color: var(--color-accent); }
.card { background: var(--color-surface); color: var(--color-text);
border: var(--gilt-outer); border-radius: var(--radius-lg);
outline: var(--gilt-frame); outline-offset: -5px;
box-shadow: var(--shadow-md); padding: var(--space-8); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface); border: var(--gilt-outer); border-radius: var(--radius-pill); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 22%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-accent); color: var(--color-text); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/regencycore.md */
```

### Variables

```
--bg: #fbeef0, --fg: #4a2c3a, --accent: #c1436a, --surface: #fffaf6, --radius: 16px, --spacing: 16px, --font-display: 'Great Vibes', 'Snell Roundhand', cursive, --font-body: 'Cormorant Garamond', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fbeef0

#fffaf6

#f6e0e4

#e3b8c2

Secondary

#4a2c3a

#8a6274

#c1436a

#c9a35c

#8fa583

### Effects

Pastel florals, empire silhouettes, pearls, Ornate script, gilt frames, Soft romantic period palette, Aristocratic, dreamy, floral, shadow

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

- **Name:** Regencycore
- **Type:** claude-artisan/niche
- **Keywords:** Regencycore, Bridgerton aesthetic, Regency, Pastel florals, empire silhouettes, pearls, Ornate script, gilt frames, Soft romantic period palette, Aristocratic, dreamy, floral, niche
- **Era:** 2020–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fbeef0, surface: #fffaf6, surface-strong: #f6e0e4, border: #e3b8c2
- **Secondary:** text: #4a2c3a, text-muted: #8a6274, primary: #c1436a, accent: #c9a35c, sage: #8fa583

## Visual Effects

Pastel florals, empire silhouettes, pearls, Ornate script, gilt frames, Soft romantic period palette, Aristocratic, dreamy, floral, shadow

## AI Visual Direction

Regencycore, Pastel florals, empire silhouettes, pearls, Ornate script, gilt frames, Soft romantic period palette, Aristocratic, dreamy, floral, Netflix 'Bridgerton'.

## CSS Technical

```css
/* Regencycore — design tokens */
/* 2020–present | Regency-era romance revival (Bridgerton, 2020), condensed */
:root {
/* color */
--color-bg: #fbeef0;
--color-surface: #fffaf6;
--color-surface-strong: #f6e0e4;
--color-border: #e3b8c2;
--color-text: #4a2c3a;
--color-text-muted: #8a6274;
--color-primary: #c1436a;
--color-accent: #c9a35c;
--color-sage: #8fa583;
/* radius: soft empire-waist curves everywhere */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(193, 67, 106, 0.10);
--shadow-md: 0 8px 20px rgba(193, 67, 106, 0.14);
--shadow-lg: 0 18px 36px rgba(193, 67, 106, 0.16);
/* font */
--font-sans: 'Cormorant Garamond', Georgia, serif;
--font-display: 'Great Vibes', 'Snell Roundhand', cursive;
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
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
/* extra: a double gilt frame — a thin gold line inset within a blush border — is the signature ornament */
--gilt-frame: 1px solid var(--color-accent);
--gilt-outer: 2px solid var(--color-border);
--floral-wash: radial-gradient(120% 100% at 100% 0%, rgba(201,163,92,0.14), transparent 55%);
}

/* ============================================================
Base component classes — Regencycore
Signature move: a double gilt frame — a slim gold hairline sitting
just inside a soft blush border, like a miniature portrait frame —
repeated on the nav, every card, and the primary button; a script
display face for headlines and brand marks.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--floral-wash), var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-surface);
border: var(--gilt-outer); border-radius: var(--radius-lg);
outline: var(--gilt-frame); outline-offset: -4px; margin: var(--space-4); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--gilt-outer);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff5f7; border-color: var(--color-accent); }
.card { background: var(--color-surface); color: var(--color-text);
border: var(--gilt-outer); border-radius: var(--radius-lg);
outline: var(--gilt-frame); outline-offset: -5px;
box-shadow: var(--shadow-md); padding: var(--space-8); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface); border: var(--gilt-outer); border-radius: var(--radius-pill); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 22%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-accent); color: var(--color-text); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/regencycore.md */
```

## Design System Variables

```css
--bg: #fbeef0, --fg: #4a2c3a, --accent: #c1436a, --surface: #fffaf6, --radius: 16px, --spacing: 16px, --font-display: 'Great Vibes', 'Snell Roundhand', cursive, --font-body: 'Cormorant Garamond', Georgia, serif
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

[![Coquette](https://designmd.app/images/library/324.png) Arte & Ilustracao ### Coquette](https://designmd.app/library/coquette)[![Baroque / Rococo](https://designmd.app/images/library/585.png) Claude Artisan · Movimentos históricos ### Baroque / Rococo](https://designmd.app/library/baroque-rococo)[![Grandmillennial](https://designmd.app/images/library/654.png) Claude Artisan · Subculturas & estéticas de nicho ### Grandmillennial](https://designmd.app/library/grandmillennial)

Last synced: 8/30/2026
