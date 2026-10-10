# Kidcore

- Source: <https://designmd.app/library/kidcore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:18.338Z

Claude Artisan · Subculturas & estéticas de nicho2018–present

# Kidcore

Reference for subculturas & estéticas de nicho Kidcore. Nostalgia for 90s/00s childhood.

KidcorechildcorePrimary-color rainbows, stars, smileysToy/cartoon motifs, stickersChunky bubbly typePlayful, nostalgic, hyperniche

Use case: hero, superfície, conteúdo e grade responsiva; Primary-color rainbows, stars, smileys; Toy/cartoon motifs, stickers

![Kidcore](https://designmd.app/images/library/664.png)

## Historical Context

Nostalgia for 90s/00s childhood. Example: 90s kids' TV; Lisa Frank-adjacent..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Kidcore"
description: "Kidcore visual system, translated from the Claude Artisan catalog for use in digital products. Primary-color rainbows, stars, smileys; Toy/cartoon motifs, stickers"
colors:
primary: "#ff5757"
background: "#fffdf0"
surface: "#ffffff"
text: "#1a1a1a"
accent: "#3dd9eb"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Fredoka', 'Baloo 2', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Baloo 2', 'Comic Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Baloo 2', 'Comic Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "16px"
lg: "22px"
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

Kidcore visual system, translated from the Claude Artisan catalog for use in digital products. Primary-color rainbows, stars, smileys; Toy/cartoon motifs, stickers

- **Category:** niche
- **Era:** 2018–present
- **Origin:** Nostalgia for 90s/00s childhood.
- **Reference:** 90s kids' TV; Lisa Frank-adjacent.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Primary-color rainbows, stars, smileys
- Toy/cartoon motifs, stickers
- Chunky bubbly type
- Playful, nostalgic, hyper

## Colors

- **bg** — #fffdf0
- **surface** — #ffffff
- **surface-strong** — #fff6cf
- **border** — #1a1a1a
- **text** — #1a1a1a
- **text-muted** — #55524a
- **primary** — #ff5757
- **accent** — #3dd9eb
- **rainbow-1** — #ff5757
- **rainbow-2** — #ffb703
- **rainbow-3** — #ffe74c
- **rainbow-4** — #4dd671
- **rainbow-5** — #3dd9eb
- **rainbow-6** — #a06cff

## Typography

- Display: 'Fredoka', 'Baloo 2', system-ui, sans-serif
- Body: 'Baloo 2', 'Comic Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Primary-color rainbows, stars, smileys; Toy/cartoon motifs, stickers; Chunky bubbly type; Playful, nostalgic, hyper; sombras e elevação

## Shapes

- Radius scale: 10px, 16px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/kidcore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Kidcore — design tokens */
/* 2018–present | Nostalgia for 90s/00s childhood, condensed */
:root {
/* color */
--color-bg: #fffdf0;
--color-surface: #ffffff;
--color-surface-strong: #fff6cf;
--color-border: #1a1a1a;
--color-text: #1a1a1a;
--color-text-muted: #55524a;
--color-primary: #ff5757;
--color-accent: #3dd9eb;
--color-rainbow-1: #ff5757;
--color-rainbow-2: #ffb703;
--color-rainbow-3: #ffe74c;
--color-rainbow-4: #4dd671;
--color-rainbow-5: #3dd9eb;
--color-rainbow-6: #a06cff;
/* radius */
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font */
--font-sans: 'Baloo 2', 'Comic Neue', system-ui, sans-serif;
--font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.15rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.5rem;
--text-5xl: 4.5rem;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: rainbow stripe border + thick sticker outline is the signature move */
--rainbow-stripe: linear-gradient(90deg, var(--color-rainbow-1), var(--color-rainbow-2), var(--color-rainbow-3),
var(--color-rainbow-4), var(--color-rainbow-5), var(--color-rainbow-6));
}

/* ============================================================
Base component classes — kidcore
Signature move: a thick black "sticker" outline plus a flat rainbow
stripe band, repeated as a top bar on nav and card so every surface
reads like a cut-out toy sticker.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 3px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); position: relative; overflow: hidden; }
.nav::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; background: var(--rainbow-stripe); }
.btn { font: 800 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 3px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0, 0); box-shadow: 1px 1px 0 var(--color-border); }
.btn:focus-visible { outline: 3px solid var(--color-rainbow-5); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-border); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 3px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; overflow: hidden; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; background: var(--rainbow-stripe); }
.card h3, .card p { margin-top: var(--space-2); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border); box-shadow: var(--shadow-sm); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 800;
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-rainbow-3); color: #1a1a1a;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/kidcore.md */
```

### Variables

```
--bg: #fffdf0, --fg: #1a1a1a, --accent: #ff5757, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif, --font-body: 'Baloo 2', 'Comic Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fffdf0

#ffffff

#fff6cf

#1a1a1a

Secondary

#1a1a1a

#55524a

#ff5757

#3dd9eb

#ffb703

#ffe74c

#4dd671

#a06cff

### Effects

Primary-color rainbows, stars, smileys, Toy/cartoon motifs, stickers, Chunky bubbly type, Playful, nostalgic, hyper, shadow

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

- **Name:** Kidcore
- **Type:** claude-artisan/niche
- **Keywords:** Kidcore, childcore, Primary-color rainbows, stars, smileys, Toy/cartoon motifs, stickers, Chunky bubbly type, Playful, nostalgic, hyper, niche
- **Era:** 2018–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fffdf0, surface: #ffffff, surface-strong: #fff6cf, border: #1a1a1a
- **Secondary:** text: #1a1a1a, text-muted: #55524a, primary: #ff5757, accent: #3dd9eb, rainbow-1: #ff5757, rainbow-2: #ffb703, rainbow-3: #ffe74c, rainbow-4: #4dd671, rainbow-5: #3dd9eb, rainbow-6: #a06cff

## Visual Effects

Primary-color rainbows, stars, smileys, Toy/cartoon motifs, stickers, Chunky bubbly type, Playful, nostalgic, hyper, shadow

## AI Visual Direction

Kidcore, Primary-color rainbows, stars, smileys, Toy/cartoon motifs, stickers, Chunky bubbly type, Playful, nostalgic, hyper, 90s kids' TV; Lisa Frank-adjacent.

## CSS Technical

```css
/* Kidcore — design tokens */
/* 2018–present | Nostalgia for 90s/00s childhood, condensed */
:root {
/* color */
--color-bg: #fffdf0;
--color-surface: #ffffff;
--color-surface-strong: #fff6cf;
--color-border: #1a1a1a;
--color-text: #1a1a1a;
--color-text-muted: #55524a;
--color-primary: #ff5757;
--color-accent: #3dd9eb;
--color-rainbow-1: #ff5757;
--color-rainbow-2: #ffb703;
--color-rainbow-3: #ffe74c;
--color-rainbow-4: #4dd671;
--color-rainbow-5: #3dd9eb;
--color-rainbow-6: #a06cff;
/* radius */
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font */
--font-sans: 'Baloo 2', 'Comic Neue', system-ui, sans-serif;
--font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.15rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.5rem;
--text-5xl: 4.5rem;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: rainbow stripe border + thick sticker outline is the signature move */
--rainbow-stripe: linear-gradient(90deg, var(--color-rainbow-1), var(--color-rainbow-2), var(--color-rainbow-3),
var(--color-rainbow-4), var(--color-rainbow-5), var(--color-rainbow-6));
}

/* ============================================================
Base component classes — kidcore
Signature move: a thick black "sticker" outline plus a flat rainbow
stripe band, repeated as a top bar on nav and card so every surface
reads like a cut-out toy sticker.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 3px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); position: relative; overflow: hidden; }
.nav::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; background: var(--rainbow-stripe); }
.btn { font: 800 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 3px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0, 0); box-shadow: 1px 1px 0 var(--color-border); }
.btn:focus-visible { outline: 3px solid var(--color-rainbow-5); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-border); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 3px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; overflow: hidden; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; background: var(--rainbow-stripe); }
.card h3, .card p { margin-top: var(--space-2); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border); box-shadow: var(--shadow-sm); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 800;
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-rainbow-3); color: #1a1a1a;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/kidcore.md */
```

## Design System Variables

```css
--bg: #fffdf0, --fg: #1a1a1a, --accent: #ff5757, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif, --font-body: 'Baloo 2', 'Comic Neue', system-ui, sans-serif
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

[![Webcore / Old Web](https://designmd.app/images/library/751.png) Claude Artisan · Subculturas & estéticas de nicho ### Webcore / Old Web](https://designmd.app/library/webcore)[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)[![Kawaii](https://designmd.app/images/library/323.png) Retro & Pop ### Kawaii](https://designmd.app/library/kawaii)

Last synced: 8/30/2026
