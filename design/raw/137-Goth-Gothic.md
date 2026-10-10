# Goth / Gothic

- Source: <https://designmd.app/library/goth>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:54.264Z

Claude Artisan · Subculturas & estéticas de nicho1980s–present

# Goth / Gothic

Reference for subculturas & estéticas de nicho Goth / Gothic. Post-punk goth subculture.

Goth / Gothicgothcoredark aestheticBlack-dominant, deep reds/purplesOrnate Victorian/ecclesiastical motifsBlackletter/serif type, crosses, rosesRomantic, dark, dramaticniche

Use case: hero, superfície, conteúdo e grade responsiva; Black-dominant, deep reds/purples; Ornate Victorian/ecclesiastical motifs

![Goth / Gothic](https://designmd.app/images/library/650.png)

## Historical Context

Post-punk goth subculture. Example: Goth music/fashion; The Cure-era visuals..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Goth / Gothic"
description: "Goth / Gothic visual system, translated from the Claude Artisan catalog for use in digital products. Black-dominant, deep reds/purples; Ornate Victorian/ecclesiastical motifs"
colors:
primary: "#7a1128"
background: "#0a0508"
surface: "#150c11"
text: "#ece3e6"
accent: "#9c6b3f"
on-primary: "#FFFFFF"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'UnifrakturCook', 'Pirata One', 'Cinzel Decorative', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "6px"
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

Goth / Gothic visual system, translated from the Claude Artisan catalog for use in digital products. Black-dominant, deep reds/purples; Ornate Victorian/ecclesiastical motifs

- **Category:** niche
- **Era:** 1980s–present
- **Origin:** Post-punk goth subculture.
- **Reference:** Goth music/fashion; The Cure-era visuals.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Black-dominant, deep reds/purples
- Ornate Victorian/ecclesiastical motifs
- Blackletter/serif type, crosses, roses
- Romantic, dark, dramatic

## Colors

- **bg** — #0a0508
- **surface** — #150c11
- **surface-strong** — #1f1218
- **border** — #4a1f2e
- **text** — #ece3e6
- **text-muted** — #b79aa5
- **primary** — #7a1128
- **accent** — #9c6b3f
- **blood** — #5c0e1f
- **rose** — #b83a52

## Typography

- Display: 'UnifrakturCook', 'Pirata One', 'Cinzel Decorative', serif
- Body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Black-dominant, deep reds/purples; Ornate Victorian/ecclesiastical motifs; Blackletter/serif type, crosses, roses; Romantic, dark, dramatic; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/goth/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Goth / Gothic — design tokens */
/* 1980s–present | Post-punk goth subculture, condensed */
:root {
/* color */
--color-bg: #0a0508;
--color-surface: #150c11;
--color-surface-strong: #1f1218;
--color-border: #4a1f2e;
--color-text: #ece3e6;
--color-text-muted: #b79aa5;
--color-primary: #7a1128;
--color-accent: #9c6b3f;
--color-blood: #5c0e1f;
--color-rose: #b83a52;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.6);
--shadow-md: 0 6px 20px rgba(0,0,0,0.7);
--shadow-lg: 0 14px 40px rgba(0,0,0,0.8);
--shadow-ecclesiastic: inset 0 0 0 1px rgba(156,107,63,0.35);
/* font */
--font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
--font-display: 'UnifrakturCook', 'Pirata One', 'Cinzel Decorative', serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
/* extra: ornate filigree border + rose-gold hairline, repeated on nav/card/btn */
--border-filigree: 1px solid var(--color-border);
--hairline-gradient: linear-gradient(90deg, transparent, var(--color-accent) 50%, transparent);
--bg-image: radial-gradient(90% 60% at 50% -10%, #1f0c14 0%, #0a0508 60%);
}

/* ============================================================
Base component classes — Goth
Signature move: a thin rose-gold hairline rule (top border on nav/card,
bottom-border underglow on inputs) evoking ecclesiastical metalwork
against near-black, plus a deep-red primary for ritual emphasis.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image) var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border-bottom: var(--border-filigree);
border-top: 2px solid transparent; border-image: var(--hairline-gradient) 1; }
.btn { font: 600 var(--text-base)/1 var(--font-sans); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: var(--border-filigree);
box-shadow: var(--shadow-sm); cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: linear-gradient(180deg, var(--color-primary), var(--color-blood));
border-color: var(--color-rose); color: #f4e6ea; }
.card { background: var(--color-surface); border: var(--border-filigree); border-top: 2px solid transparent;
border-image: var(--hairline-gradient) 1; border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-ecclesiastic); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--border-filigree);
border-bottom: 2px solid var(--color-accent); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-rose); box-shadow: 0 0 0 3px rgba(184,58,82,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); letter-spacing: .04em;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-accent); color: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/goth.md */
```

### Variables

```
--bg: #0a0508, --fg: #ece3e6, --accent: #7a1128, --surface: #150c11, --radius: 4px, --spacing: 16px, --font-display: 'UnifrakturCook', 'Pirata One', 'Cinzel Decorative', serif, --font-body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0508

#150c11

#1f1218

#4a1f2e

Secondary

#ece3e6

#b79aa5

#7a1128

#9c6b3f

#5c0e1f

#b83a52

### Effects

Black-dominant, deep reds/purples, Ornate Victorian/ecclesiastical motifs, Blackletter/serif type, crosses, roses, Romantic, dark, dramatic, shadow

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

- **Name:** Goth / Gothic
- **Type:** claude-artisan/niche
- **Keywords:** Goth / Gothic, gothcore, dark aesthetic, Black-dominant, deep reds/purples, Ornate Victorian/ecclesiastical motifs, Blackletter/serif type, crosses, roses, Romantic, dark, dramatic, niche
- **Era:** 1980s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0508, surface: #150c11, surface-strong: #1f1218, border: #4a1f2e
- **Secondary:** text: #ece3e6, text-muted: #b79aa5, primary: #7a1128, accent: #9c6b3f, blood: #5c0e1f, rose: #b83a52

## Visual Effects

Black-dominant, deep reds/purples, Ornate Victorian/ecclesiastical motifs, Blackletter/serif type, crosses, roses, Romantic, dark, dramatic, shadow

## AI Visual Direction

Goth / Gothic, Black-dominant, deep reds/purples, Ornate Victorian/ecclesiastical motifs, Blackletter/serif type, crosses, roses, Romantic, dark, dramatic, Goth music/fashion; The Cure-era visuals.

## CSS Technical

```css
/* Goth / Gothic — design tokens */
/* 1980s–present | Post-punk goth subculture, condensed */
:root {
/* color */
--color-bg: #0a0508;
--color-surface: #150c11;
--color-surface-strong: #1f1218;
--color-border: #4a1f2e;
--color-text: #ece3e6;
--color-text-muted: #b79aa5;
--color-primary: #7a1128;
--color-accent: #9c6b3f;
--color-blood: #5c0e1f;
--color-rose: #b83a52;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.6);
--shadow-md: 0 6px 20px rgba(0,0,0,0.7);
--shadow-lg: 0 14px 40px rgba(0,0,0,0.8);
--shadow-ecclesiastic: inset 0 0 0 1px rgba(156,107,63,0.35);
/* font */
--font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
--font-display: 'UnifrakturCook', 'Pirata One', 'Cinzel Decorative', serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
/* extra: ornate filigree border + rose-gold hairline, repeated on nav/card/btn */
--border-filigree: 1px solid var(--color-border);
--hairline-gradient: linear-gradient(90deg, transparent, var(--color-accent) 50%, transparent);
--bg-image: radial-gradient(90% 60% at 50% -10%, #1f0c14 0%, #0a0508 60%);
}

/* ============================================================
Base component classes — Goth
Signature move: a thin rose-gold hairline rule (top border on nav/card,
bottom-border underglow on inputs) evoking ecclesiastical metalwork
against near-black, plus a deep-red primary for ritual emphasis.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image) var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border-bottom: var(--border-filigree);
border-top: 2px solid transparent; border-image: var(--hairline-gradient) 1; }
.btn { font: 600 var(--text-base)/1 var(--font-sans); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: var(--border-filigree);
box-shadow: var(--shadow-sm); cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: linear-gradient(180deg, var(--color-primary), var(--color-blood));
border-color: var(--color-rose); color: #f4e6ea; }
.card { background: var(--color-surface); border: var(--border-filigree); border-top: 2px solid transparent;
border-image: var(--hairline-gradient) 1; border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-ecclesiastic); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--border-filigree);
border-bottom: 2px solid var(--color-accent); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-rose); box-shadow: 0 0 0 3px rgba(184,58,82,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); letter-spacing: .04em;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-accent); color: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/goth.md */
```

## Design System Variables

```css
--bg: #0a0508, --fg: #ece3e6, --accent: #7a1128, --surface: #150c11, --radius: 4px, --spacing: 16px, --font-display: 'UnifrakturCook', 'Pirata One', 'Cinzel Decorative', serif, --font-body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
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

[![Dark Academia](https://designmd.app/images/library/617.png) Claude Artisan · Subculturas & estéticas de nicho ### Dark Academia](https://designmd.app/library/dark-academia)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)[![Witchcore / Witchy](https://designmd.app/images/library/755.png) Claude Artisan · Subculturas & estéticas de nicho ### Witchcore / Witchy](https://designmd.app/library/witchcore)

Last synced: 8/30/2026
