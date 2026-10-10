# Blackletter / Gothic Type

- Source: <https://designmd.app/library/blackletter>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:45.319Z

Claude Artisan · Movimentos históricos1150–1500 (revived)

# Blackletter / Gothic Type

Reference for movimentos históricos Blackletter / Gothic Type. Medieval European calligraphy; Gutenberg's type.

Blackletter / Gothic TypeFrakturOld Englishgothic scriptDense angular condensed letterformsOrnate capitals, heavy vertical strokesNewspaper mastheads, tattoo, metal-band useSolemn, historic, dramatichistorical

Use case: superfície material com conteúdo em camadas; Dense angular condensed letterforms; Ornate capitals, heavy vertical strokes

![Blackletter / Gothic Type](https://designmd.app/images/library/589.png)

## Historical Context

Medieval European calligraphy; Gutenberg's type. Example: The New York Times masthead; metal-band logos..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Blackletter / Gothic Type"
description: "Blackletter / Gothic Type visual system, translated from the Claude Artisan catalog for use in digital products. Dense angular condensed letterforms; Ornate capitals, heavy vertical strokes"
colors:
primary: "#a8232f"
background: "#14110d"
surface: "#1e1a13"
text: "#ece4d0"
accent: "#c9a227"
on-primary: "#FFFFFF"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'UnifrakturMaguntia', 'Old English Text MT', 'Cloister Black', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Century Old Style', Georgia, 'Iowan Old Style', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Century Old Style', Georgia, 'Iowan Old Style', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
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

Blackletter / Gothic Type visual system, translated from the Claude Artisan catalog for use in digital products. Dense angular condensed letterforms; Ornate capitals, heavy vertical strokes

- **Category:** historical
- **Era:** 1150–1500 (revived)
- **Origin:** Medieval European calligraphy; Gutenberg's type.
- **Reference:** The New York Times masthead; metal-band logos.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Dense angular condensed letterforms
- Ornate capitals, heavy vertical strokes
- Newspaper mastheads, tattoo, metal-band use
- Solemn, historic, dramatic

## Colors

- **bg** — #14110d
- **surface** — #1e1a13
- **surface-strong** — #29231a
- **border** — #6b5b3a
- **text** — #ece4d0
- **text-muted** — #b9ac8a
- **primary** — #a8232f
- **accent** — #c9a227

## Typography

- Display: 'UnifrakturMaguntia', 'Old English Text MT', 'Cloister Black', serif
- Body: 'Century Old Style', Georgia, 'Iowan Old Style', serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dense angular condensed letterforms; Ornate capitals, heavy vertical strokes; Newspaper mastheads, tattoo, metal-band use; Solemn, historic, dramatic; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/blackletter/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Blackletter / Gothic Type — design tokens */
/* 1150–1500 (revived) | Medieval European calligraphy; Gutenberg's type, condensed */
:root {
/* color */
--color-bg: #14110d;
--color-surface: #1e1a13;
--color-surface-strong: #29231a;
--color-border: #6b5b3a;
--color-text: #ece4d0;
--color-text-muted: #b9ac8a;
--color-primary: #a8232f;
--color-accent: #c9a227;
/* radius: blackletter is all sharp condensed strokes, no soft corners */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(0,0,0,0.6);
--shadow-md: 0 4px 12px rgba(0,0,0,0.55);
--shadow-lg: 0 10px 28px rgba(0,0,0,0.6);
/* font: a Fraktur-flavored display face over a readable body serif */
--font-sans: 'Century Old Style', Georgia, 'Iowan Old Style', serif;
--font-display: 'UnifrakturMaguntia', 'Old English Text MT', 'Cloister Black', serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: illuminated double-rule border + drop-cap gold vein */
--rule-double: 3px double var(--color-accent);
--masthead-rule: linear-gradient(180deg, var(--color-accent) 0%, var(--color-border) 100%);
--texture-vellum: radial-gradient(120% 90% at 50% -10%, rgba(201,162,39,0.08), transparent 60%);
}

/* ============================================================
Base component classes — Blackletter
Signature move: heavy double-rule borders (an illuminated-manuscript
frame) paired with the Fraktur display face, repeated on nav, card,
and the primary button so the page reads like a masthead.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg) var(--texture-vellum); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-bottom: var(--rule-double); }
.nav strong { font-family: var(--font-display); font-size: var(--text-xl); letter-spacing: 0.02em; }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fbf3df; border: var(--rule-double); }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border: var(--rule-double); box-shadow: var(--shadow-md); }
.card h3 { font-family: var(--font-display); letter-spacing: 0.01em; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(201,162,39,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-primary);
color: #fbf3df; border: 1px solid var(--color-accent); text-transform: uppercase; letter-spacing: 0.06em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/blackletter.md */
```

### Variables

```
--bg: #14110d, --fg: #ece4d0, --accent: #a8232f, --surface: #1e1a13, --radius: 0px, --spacing: 16px, --font-display: 'UnifrakturMaguntia', 'Old English Text MT', 'Cloister Black', serif, --font-body: 'Century Old Style', Georgia, 'Iowan Old Style', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#14110d

#1e1a13

#29231a

#6b5b3a

Secondary

#ece4d0

#b9ac8a

#a8232f

#c9a227

### Effects

Dense angular condensed letterforms, Ornate capitals, heavy vertical strokes, Newspaper mastheads, tattoo, metal-band use, Solemn, historic, dramatic, shadow

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

- **Name:** Blackletter / Gothic Type
- **Type:** claude-artisan/historical
- **Keywords:** Blackletter / Gothic Type, Fraktur, Old English, gothic script, Dense angular condensed letterforms, Ornate capitals, heavy vertical strokes, Newspaper mastheads, tattoo, metal-band use, Solemn, historic, dramatic, historical
- **Era:** 1150–1500 (revived)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #14110d, surface: #1e1a13, surface-strong: #29231a, border: #6b5b3a
- **Secondary:** text: #ece4d0, text-muted: #b9ac8a, primary: #a8232f, accent: #c9a227

## Visual Effects

Dense angular condensed letterforms, Ornate capitals, heavy vertical strokes, Newspaper mastheads, tattoo, metal-band use, Solemn, historic, dramatic, shadow

## AI Visual Direction

Blackletter / Gothic Type, Dense angular condensed letterforms, Ornate capitals, heavy vertical strokes, Newspaper mastheads, tattoo, metal-band use, Solemn, historic, dramatic, The New York Times masthead; metal-band logos.

## CSS Technical

```css
/* Blackletter / Gothic Type — design tokens */
/* 1150–1500 (revived) | Medieval European calligraphy; Gutenberg's type, condensed */
:root {
/* color */
--color-bg: #14110d;
--color-surface: #1e1a13;
--color-surface-strong: #29231a;
--color-border: #6b5b3a;
--color-text: #ece4d0;
--color-text-muted: #b9ac8a;
--color-primary: #a8232f;
--color-accent: #c9a227;
/* radius: blackletter is all sharp condensed strokes, no soft corners */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(0,0,0,0.6);
--shadow-md: 0 4px 12px rgba(0,0,0,0.55);
--shadow-lg: 0 10px 28px rgba(0,0,0,0.6);
/* font: a Fraktur-flavored display face over a readable body serif */
--font-sans: 'Century Old Style', Georgia, 'Iowan Old Style', serif;
--font-display: 'UnifrakturMaguntia', 'Old English Text MT', 'Cloister Black', serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: illuminated double-rule border + drop-cap gold vein */
--rule-double: 3px double var(--color-accent);
--masthead-rule: linear-gradient(180deg, var(--color-accent) 0%, var(--color-border) 100%);
--texture-vellum: radial-gradient(120% 90% at 50% -10%, rgba(201,162,39,0.08), transparent 60%);
}

/* ============================================================
Base component classes — Blackletter
Signature move: heavy double-rule borders (an illuminated-manuscript
frame) paired with the Fraktur display face, repeated on nav, card,
and the primary button so the page reads like a masthead.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg) var(--texture-vellum); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-bottom: var(--rule-double); }
.nav strong { font-family: var(--font-display); font-size: var(--text-xl); letter-spacing: 0.02em; }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fbf3df; border: var(--rule-double); }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border: var(--rule-double); box-shadow: var(--shadow-md); }
.card h3 { font-family: var(--font-display); letter-spacing: 0.01em; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(201,162,39,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-primary);
color: #fbf3df; border: 1px solid var(--color-accent); text-transform: uppercase; letter-spacing: 0.06em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/blackletter.md */
```

## Design System Variables

```css
--bg: #14110d, --fg: #ece4d0, --accent: #a8232f, --surface: #1e1a13, --radius: 0px, --spacing: 16px, --font-display: 'UnifrakturMaguntia', 'Old English Text MT', 'Cloister Black', serif, --font-body: 'Century Old Style', Georgia, 'Iowan Old Style', serif
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

[![Goth / Gothic](https://designmd.app/images/library/650.png) Claude Artisan · Subculturas & estéticas de nicho ### Goth / Gothic](https://designmd.app/library/goth)[![Illuminated Manuscript](https://designmd.app/images/library/660.png) Claude Artisan · Movimentos históricos ### Illuminated Manuscript](https://designmd.app/library/illuminated-manuscript)

Last synced: 8/30/2026
