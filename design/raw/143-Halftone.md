# Halftone

- Source: <https://designmd.app/library/halftone>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:02.360Z

Claude Artisan · Textura, material & renderizaçãoPrint heritage

# Halftone

Reference for textura, material & renderização Halftone. Newspaper/comic printing technique as aesthetic.

Halftonedot patternBen-Day dotsDot grids simulate tone via dot sizeComic/newsprint textureBold with CMYK registration feelRetro print nostalgiatexture

Use case: composição editorial com grade tipográfica; Dot grids simulate tone via dot size; Comic/newsprint texture

![Halftone](https://designmd.app/images/library/656.png)

## Historical Context

Newspaper/comic printing technique as aesthetic. Example: Comic books; Roy Lichtenstein; retro posters..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Halftone"
description: "Halftone visual system, translated from the Claude Artisan catalog for use in digital products. Dot grids simulate tone via dot size; Comic/newsprint texture"
colors:
primary: "#e0263b"
background: "#fdf6e8"
surface: "#ffffff"
text: "#16130f"
accent: "#1f6fd6"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Bangers', 'Anton', 'Archivo Black', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Archivo Black', 'Helvetica Neue', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Archivo Black', 'Helvetica Neue', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "8px"
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

Halftone visual system, translated from the Claude Artisan catalog for use in digital products. Dot grids simulate tone via dot size; Comic/newsprint texture

- **Category:** texture
- **Era:** Print heritage
- **Origin:** Newspaper/comic printing technique as aesthetic.
- **Reference:** Comic books; Roy Lichtenstein; retro posters.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Dot grids simulate tone via dot size
- Comic/newsprint texture
- Bold with CMYK registration feel
- Retro print nostalgia

## Colors

- **bg** — #fdf6e8
- **surface** — #ffffff
- **surface-strong** — #fff2c9
- **border** — #16130f
- **text** — #16130f
- **text-muted** — #4d463a
- **primary** — #e0263b
- **accent** — #1f6fd6
- **yellow** — #f6c93b

## Typography

- Display: 'Bangers', 'Anton', 'Archivo Black', sans-serif
- Body: 'Archivo Black', 'Helvetica Neue', sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dot grids simulate tone via dot size; Comic/newsprint texture; Bold with CMYK registration feel; Retro print nostalgia; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/halftone/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Halftone — design tokens */
/* Print heritage | Newspaper/comic printing technique as aesthetic, condensed */
:root {
/* color */
--color-bg: #fdf6e8;
--color-surface: #ffffff;
--color-surface-strong: #fff2c9;
--color-border: #16130f;
--color-text: #16130f;
--color-text-muted: #4d463a;
--color-primary: #e0263b;
--color-accent: #1f6fd6;
--color-yellow: #f6c93b;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow: hard comic-panel offset, no blur */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font */
--font-sans: 'Archivo Black', 'Helvetica Neue', sans-serif;
--font-display: 'Bangers', 'Anton', 'Archivo Black', sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.15rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.75rem;
--text-5xl: 5.25rem;
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
/* extra: a Ben-Day dot grid rendered as a radial-gradient tile,
in the primary red, repeated on nav, card, and button backgrounds */
--dot-grid: radial-gradient(var(--color-primary) 32%, transparent 34%) 0 0/10px 10px;
--dot-grid-blue: radial-gradient(var(--color-accent) 32%, transparent 34%) 0 0/8px 8px;
}

/* ============================================================
Base component classes — Halftone
Signature move: a visible Ben-Day dot grid (a repeating radial-gradient
tile) tints the nav, card, and badge backgrounds, exactly like tone
built from dot size in comic/newsprint printing; hard offset shadows
stand in for CMYK misregistration.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--dot-grid), var(--color-surface); border-bottom: 3px solid var(--color-border); }
.btn { font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--color-border); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--dot-grid), var(--color-primary); color: #fff8ec; }
.card { background: var(--dot-grid-blue), var(--color-surface); border: 3px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--dot-grid), var(--color-yellow);
border: 2px solid var(--color-border); color: var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/halftone.md */
```

### Variables

```
--bg: #fdf6e8, --fg: #16130f, --accent: #e0263b, --surface: #ffffff, --radius: 4px, --spacing: 16px, --font-display: 'Bangers', 'Anton', 'Archivo Black', sans-serif, --font-body: 'Archivo Black', 'Helvetica Neue', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fdf6e8

#ffffff

#fff2c9

#16130f

Secondary

#16130f

#4d463a

#e0263b

#1f6fd6

#f6c93b

### Effects

Dot grids simulate tone via dot size, Comic/newsprint texture, Bold with CMYK registration feel, Retro print nostalgia, shadow

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

- **Name:** Halftone
- **Type:** claude-artisan/texture
- **Keywords:** Halftone, dot pattern, Ben-Day dots, Dot grids simulate tone via dot size, Comic/newsprint texture, Bold with CMYK registration feel, Retro print nostalgia, texture
- **Era:** Print heritage
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fdf6e8, surface: #ffffff, surface-strong: #fff2c9, border: #16130f
- **Secondary:** text: #16130f, text-muted: #4d463a, primary: #e0263b, accent: #1f6fd6, yellow: #f6c93b

## Visual Effects

Dot grids simulate tone via dot size, Comic/newsprint texture, Bold with CMYK registration feel, Retro print nostalgia, shadow

## AI Visual Direction

Halftone, Dot grids simulate tone via dot size, Comic/newsprint texture, Bold with CMYK registration feel, Retro print nostalgia, Comic books; Roy Lichtenstein; retro posters.

## CSS Technical

```css
/* Halftone — design tokens */
/* Print heritage | Newspaper/comic printing technique as aesthetic, condensed */
:root {
/* color */
--color-bg: #fdf6e8;
--color-surface: #ffffff;
--color-surface-strong: #fff2c9;
--color-border: #16130f;
--color-text: #16130f;
--color-text-muted: #4d463a;
--color-primary: #e0263b;
--color-accent: #1f6fd6;
--color-yellow: #f6c93b;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow: hard comic-panel offset, no blur */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font */
--font-sans: 'Archivo Black', 'Helvetica Neue', sans-serif;
--font-display: 'Bangers', 'Anton', 'Archivo Black', sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.15rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 2.75rem;
--text-4xl: 3.75rem;
--text-5xl: 5.25rem;
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
/* extra: a Ben-Day dot grid rendered as a radial-gradient tile,
in the primary red, repeated on nav, card, and button backgrounds */
--dot-grid: radial-gradient(var(--color-primary) 32%, transparent 34%) 0 0/10px 10px;
--dot-grid-blue: radial-gradient(var(--color-accent) 32%, transparent 34%) 0 0/8px 8px;
}

/* ============================================================
Base component classes — Halftone
Signature move: a visible Ben-Day dot grid (a repeating radial-gradient
tile) tints the nav, card, and badge backgrounds, exactly like tone
built from dot size in comic/newsprint printing; hard offset shadows
stand in for CMYK misregistration.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--dot-grid), var(--color-surface); border-bottom: 3px solid var(--color-border); }
.btn { font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(1px,1px); box-shadow: 1px 1px 0 var(--color-border); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--dot-grid), var(--color-primary); color: #fff8ec; }
.card { background: var(--dot-grid-blue), var(--color-surface); border: 3px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--dot-grid), var(--color-yellow);
border: 2px solid var(--color-border); color: var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/halftone.md */
```

## Design System Variables

```css
--bg: #fdf6e8, --fg: #16130f, --accent: #e0263b, --surface: #ffffff, --radius: 4px, --spacing: 16px, --font-display: 'Bangers', 'Anton', 'Archivo Black', sans-serif, --font-body: 'Archivo Black', 'Helvetica Neue', sans-serif
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

[![Pop Art](https://designmd.app/images/library/315.png) Arte & Ilustracao ### Pop Art](https://designmd.app/library/pop-art)[![Risograph](https://designmd.app/images/library/711.png) Claude Artisan · Textura, material & renderização ### Risograph](https://designmd.app/library/risograph)[![Comic / Manga](https://designmd.app/images/library/602.png) Claude Artisan · Textura, material & renderização ### Comic / Manga](https://designmd.app/library/comic)

Last synced: 8/30/2026
