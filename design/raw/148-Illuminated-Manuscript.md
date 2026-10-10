# Illuminated Manuscript

- Source: <https://designmd.app/library/illuminated-manuscript>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:10.417Z

Claude Artisan · Movimentos históricos500–1500 CE

# Illuminated Manuscript

Reference for movimentos históricos Illuminated Manuscript. Medieval European monastic scriptoria.

Illuminated Manuscriptmedieval manuscriptilluminationOrnate drop caps and gold-leaf illuminationDecorative borders, vines, marginaliaBlackletter scriptRich reds, blues, gold on vellumhistorical

Use case: hero, superfície, conteúdo e grade responsiva; Ornate drop caps and gold-leaf illumination; Decorative borders, vines, marginalia

![Illuminated Manuscript](https://designmd.app/images/library/660.png)

## Historical Context

Medieval European monastic scriptoria. Example: Book of Kells; Très Riches Heures..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Illuminated Manuscript"
description: "Illuminated Manuscript visual system, translated from the Claude Artisan catalog for use in digital products. Ornate drop caps and gold-leaf illumination; Decorative borders, vines, marginalia"
colors:
primary: "#7a1f2b"
background: "#f3e6c4"
surface: "#f8edd0"
text: "#2a1a10"
accent: "#b8860b"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'UnifrakturMaguntia', 'Blackletter', 'Cinzel', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'EB Garamond', 'Palatino', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'EB Garamond', 'Palatino', Georgia, serif"
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

Illuminated Manuscript visual system, translated from the Claude Artisan catalog for use in digital products. Ornate drop caps and gold-leaf illumination; Decorative borders, vines, marginalia

- **Category:** historical
- **Era:** 500–1500 CE
- **Origin:** Medieval European monastic scriptoria.
- **Reference:** Book of Kells; Très Riches Heures.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Ornate drop caps and gold-leaf illumination
- Decorative borders, vines, marginalia
- Blackletter script
- Rich reds, blues, gold on vellum

## Colors

- **bg** — #f3e6c4
- **surface** — #f8edd0
- **surface-strong** — #efdbaa
- **border** — #7a5a1e
- **text** — #2a1a10
- **text-muted** — #5a4632
- **primary** — #7a1f2b
- **accent** — #b8860b
- **blue** — #1e3a6e
- **gold** — #c9971f
- **sm** — 2px
- **md** — 2px
- **lg** — 2px
- **pill** — 999px

## Typography

- Display: 'UnifrakturMaguntia', 'Blackletter', 'Cinzel', serif
- Body: 'EB Garamond', 'Palatino', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Ornate drop caps and gold-leaf illumination; Decorative borders, vines, marginalia; Blackletter script; Rich reds, blues, gold on vellum; sombras e elevação

## Shapes

- Radius scale: undefined, undefined, undefined.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/illuminated-manuscript/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Illuminated Manuscript — design tokens */
/* 500–1500 CE | Medieval European monastic scriptoria, condensed */
:root {
/* color */
--color-bg: #f3e6c4;
--color-surface: #f8edd0;
--color-surface-strong: #efdbaa;
--color-border: #7a5a1e;
--color-text: #2a1a10;
--color-text-muted: #5a4632;
--color-primary: #7a1f2b;
--color-accent: #b8860b;
--color-blue: #1e3a6e;
--color-gold: #c9971f;
/* radius: manuscripts are hand-ruled, not rounded — sharp panels with an
ornamented border standing in for corner treatment */
--radius-sm: 2px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow: soft, low, like candlelight on vellum */
--shadow-sm: 0 1px 3px rgba(42,26,16,0.25);
--shadow-md: 0 4px 10px rgba(42,26,16,0.3);
--shadow-lg: 0 10px 22px rgba(42,26,16,0.35);
/* font */
--font-sans: 'EB Garamond', 'Palatino', Georgia, serif;
--font-display: 'UnifrakturMaguntia', 'Blackletter', 'Cinzel', serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.75rem;
--text-5xl: 5rem;
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
/* extra: a gilded initial-capital treatment (drop cap in gold on a red
medallion) plus a repeating vine-and-gold-leaf border rule — the two
signature moves of scriptorium illumination, repeated on nav, card and
input so gold trim frames every surface, not just headings */
--gilt-border: 3px solid var(--color-gold);
--vine-rule: repeating-linear-gradient(90deg, var(--color-gold) 0 10px, transparent 10px 16px,
var(--color-primary) 16px 20px, transparent 20px 26px);
--illum-corner: radial-gradient(circle at 0% 0%, var(--color-gold) 0 3px, transparent 4px),
radial-gradient(circle at 100% 0%, var(--color-gold) 0 3px, transparent 4px),
radial-gradient(circle at 0% 100%, var(--color-gold) 0 3px, transparent 4px),
radial-gradient(circle at 100% 100%, var(--color-gold) 0 3px, transparent 4px);
}

/* ============================================================
Base component classes — illuminated-manuscript
Signature move: a gilded border rule (--vine-rule) framing each surface
like a page margin, plus gold corner flourishes (--illum-corner) —
repeated on nav, card and input so gold trim reads as the page's
structure, not a one-off decoration.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg);
background-image: radial-gradient(ellipse at 50% 0%, rgba(201,151,31,0.12), transparent 60%);
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--gilt-border); position: relative;
}
.nav::after { content: ""; display: block; position: absolute; left: 0; right: 0; bottom: -6px; height: 3px;
background-image: var(--vine-rule); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f8edd0; border-color: var(--color-gold); }
.card {
background: var(--color-surface); border: 2px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
position: relative; background-image: var(--illum-corner); background-repeat: no-repeat;
}
.card::before { content: ""; display: block; position: absolute; inset: 6px; border: 1px solid var(--color-gold);
border-radius: var(--radius-sm); pointer-events: none; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--gilt-border);
}
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(184,134,11,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 600 var(--text-xs) var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-gold); color: #2a1a10; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/illuminated-manuscript.md */
```

### Variables

```
--bg: #f3e6c4, --fg: #2a1a10, --accent: #7a1f2b, --surface: #f8edd0, --radius: undefined, --spacing: 16px, --font-display: 'UnifrakturMaguntia', 'Blackletter', 'Cinzel', serif, --font-body: 'EB Garamond', 'Palatino', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f3e6c4

#f8edd0

#efdbaa

#7a5a1e

Secondary

#2a1a10

#5a4632

#7a1f2b

#b8860b

#1e3a6e

#c9971f

### Effects

Ornate drop caps and gold-leaf illumination, Decorative borders, vines, marginalia, Blackletter script, Rich reds, blues, gold on vellum, shadow

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

- **Name:** Illuminated Manuscript
- **Type:** claude-artisan/historical
- **Keywords:** Illuminated Manuscript, medieval manuscript, illumination, Ornate drop caps and gold-leaf illumination, Decorative borders, vines, marginalia, Blackletter script, Rich reds, blues, gold on vellum, historical
- **Era:** 500–1500 CE
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f3e6c4, surface: #f8edd0, surface-strong: #efdbaa, border: #7a5a1e
- **Secondary:** text: #2a1a10, text-muted: #5a4632, primary: #7a1f2b, accent: #b8860b, blue: #1e3a6e, gold: #c9971f, sm: 2px, md: 2px, lg: 2px, pill: 999px

## Visual Effects

Ornate drop caps and gold-leaf illumination, Decorative borders, vines, marginalia, Blackletter script, Rich reds, blues, gold on vellum, shadow

## AI Visual Direction

Illuminated Manuscript, Ornate drop caps and gold-leaf illumination, Decorative borders, vines, marginalia, Blackletter script, Rich reds, blues, gold on vellum, Book of Kells; Très Riches Heures.

## CSS Technical

```css
/* Illuminated Manuscript — design tokens */
/* 500–1500 CE | Medieval European monastic scriptoria, condensed */
:root {
/* color */
--color-bg: #f3e6c4;
--color-surface: #f8edd0;
--color-surface-strong: #efdbaa;
--color-border: #7a5a1e;
--color-text: #2a1a10;
--color-text-muted: #5a4632;
--color-primary: #7a1f2b;
--color-accent: #b8860b;
--color-blue: #1e3a6e;
--color-gold: #c9971f;
/* radius: manuscripts are hand-ruled, not rounded — sharp panels with an
ornamented border standing in for corner treatment */
--radius-sm: 2px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow: soft, low, like candlelight on vellum */
--shadow-sm: 0 1px 3px rgba(42,26,16,0.25);
--shadow-md: 0 4px 10px rgba(42,26,16,0.3);
--shadow-lg: 0 10px 22px rgba(42,26,16,0.35);
/* font */
--font-sans: 'EB Garamond', 'Palatino', Georgia, serif;
--font-display: 'UnifrakturMaguntia', 'Blackletter', 'Cinzel', serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.75rem;
--text-5xl: 5rem;
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
/* extra: a gilded initial-capital treatment (drop cap in gold on a red
medallion) plus a repeating vine-and-gold-leaf border rule — the two
signature moves of scriptorium illumination, repeated on nav, card and
input so gold trim frames every surface, not just headings */
--gilt-border: 3px solid var(--color-gold);
--vine-rule: repeating-linear-gradient(90deg, var(--color-gold) 0 10px, transparent 10px 16px,
var(--color-primary) 16px 20px, transparent 20px 26px);
--illum-corner: radial-gradient(circle at 0% 0%, var(--color-gold) 0 3px, transparent 4px),
radial-gradient(circle at 100% 0%, var(--color-gold) 0 3px, transparent 4px),
radial-gradient(circle at 0% 100%, var(--color-gold) 0 3px, transparent 4px),
radial-gradient(circle at 100% 100%, var(--color-gold) 0 3px, transparent 4px);
}

/* ============================================================
Base component classes — illuminated-manuscript
Signature move: a gilded border rule (--vine-rule) framing each surface
like a page margin, plus gold corner flourishes (--illum-corner) —
repeated on nav, card and input so gold trim reads as the page's
structure, not a one-off decoration.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg);
background-image: radial-gradient(ellipse at 50% 0%, rgba(201,151,31,0.12), transparent 60%);
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--gilt-border); position: relative;
}
.nav::after { content: ""; display: block; position: absolute; left: 0; right: 0; bottom: -6px; height: 3px;
background-image: var(--vine-rule); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f8edd0; border-color: var(--color-gold); }
.card {
background: var(--color-surface); border: 2px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
position: relative; background-image: var(--illum-corner); background-repeat: no-repeat;
}
.card::before { content: ""; display: block; position: absolute; inset: 6px; border: 1px solid var(--color-gold);
border-radius: var(--radius-sm); pointer-events: none; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--gilt-border);
}
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(184,134,11,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 600 var(--text-xs) var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-gold); color: #2a1a10; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/illuminated-manuscript.md */
```

## Design System Variables

```css
--bg: #f3e6c4, --fg: #2a1a10, --accent: #7a1f2b, --surface: #f8edd0, --radius: undefined, --spacing: 16px, --font-display: 'UnifrakturMaguntia', 'Blackletter', 'Cinzel', serif, --font-body: 'EB Garamond', 'Palatino', Georgia, serif
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

[![Blackletter / Gothic Type](https://designmd.app/images/library/589.png) Claude Artisan · Movimentos históricos ### Blackletter / Gothic Type](https://designmd.app/library/blackletter)[![Goth / Gothic](https://designmd.app/images/library/650.png) Claude Artisan · Subculturas & estéticas de nicho ### Goth / Gothic](https://designmd.app/library/goth)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)

Last synced: 8/30/2026
