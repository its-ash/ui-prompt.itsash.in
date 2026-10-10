# Mallsoft

- Source: <https://designmd.app/library/mallsoft>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:38.320Z

Claude Artisan · Subculturas & estéticas de nicho2014–present

# Mallsoft

Reference for subculturas & estéticas de nicho Mallsoft. Vaporwave subgenre evoking dead shopping malls.

Mallsoftmall vaporwaveEmpty-mall photography, muzak nostalgiaFaded teal/beige 90s retail paletteFountains, food courts, plantsMelancholic consumer nostalgianiche

Use case: hero, superfície, conteúdo e grade responsiva; Empty-mall photography, muzak nostalgia; Faded teal/beige 90s retail palette

![Mallsoft](https://designmd.app/images/library/676.png)

## Historical Context

Vaporwave subgenre evoking dead shopping malls. Example: Mallsoft album art; dead-mall photography..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Mallsoft"
description: "Mallsoft visual system, translated from the Claude Artisan catalog for use in digital products. Empty-mall photography, muzak nostalgia; Faded teal/beige 90s retail palette"
colors:
primary: "#d98fae"
background: "#2f3b3a"
surface: "#3d4c48"
text: "#f1ead9"
accent: "#6fb8ae"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Copperplate', 'Trebuchet MS', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Century Gothic', 'Trebuchet MS', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Century Gothic', 'Trebuchet MS', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "3px"
md: "6px"
lg: "10px"
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

Mallsoft visual system, translated from the Claude Artisan catalog for use in digital products. Empty-mall photography, muzak nostalgia; Faded teal/beige 90s retail palette

- **Category:** niche
- **Era:** 2014–present
- **Origin:** Vaporwave subgenre evoking dead shopping malls.
- **Reference:** Mallsoft album art; dead-mall photography.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Empty-mall photography, muzak nostalgia
- Faded teal/beige 90s retail palette
- Fountains, food courts, plants
- Melancholic consumer nostalgia

## Colors

- **bg** — #2f3b3a
- **surface** — #3d4c48
- **surface-strong** — #4a5c56
- **border** — rgba(212, 196, 168, 0.28)
- **text** — #f1ead9
- **text-muted** — #c9c0a8
- **primary** — #d98fae
- **accent** — #6fb8ae
- **fountain** — #7fa39c
- **marquee** — #e0b060

## Typography

- Display: 'Copperplate', 'Trebuchet MS', serif
- Body: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Empty-mall photography, muzak nostalgia; Faded teal/beige 90s retail palette; Fountains, food courts, plants; Melancholic consumer nostalgia; sombras e elevação

## Shapes

- Radius scale: 3px, 6px, 10px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/mallsoft/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Mallsoft — design tokens */
/* 2014–present | Vaporwave subgenre evoking dead shopping malls, condensed */
:root {
/* color */
--color-bg: #2f3b3a;
--color-surface: #3d4c48;
--color-surface-strong: #4a5c56;
--color-border: rgba(212, 196, 168, 0.28);
--color-text: #f1ead9;
--color-text-muted: #c9c0a8;
--color-primary: #d98fae;
--color-accent: #6fb8ae;
--color-fountain: #7fa39c;
--color-marquee: #e0b060;
/* radius */
--radius-sm: 3px;
--radius-md: 6px;
--radius-lg: 10px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.30);
--shadow-md: 0 6px 18px rgba(0,0,0,0.36);
--shadow-lg: 0 14px 34px rgba(0,0,0,0.42);
--shadow-haze: inset 0 0 40px rgba(217,143,174,0.10);
/* font */
--font-sans: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif;
--font-display: 'Copperplate', 'Trebuchet MS', serif;
--font-mono: 'Courier New', ui-monospace, monospace;
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
/* extra: faded muzak haze — desaturated teal/beige gradient + soft vignette,
as if lit by dying skylights over a food court */
--bg-image: radial-gradient(140% 100% at 50% -10%, #3d4c48 0%, #2f3b3a 60%, #24302f 100%);
--haze-fill: linear-gradient(160deg, rgba(111,184,174,0.12), rgba(217,143,174,0.06));
--tile-line: repeating-linear-gradient(90deg, rgba(212,196,168,0.05) 0 2px, transparent 2px 40px);
}

/* ============================================================
Base component classes — Mallsoft
Signature move: a desaturated teal/beige haze wash (--haze-fill) laid over
every raised surface like fluorescent skylight through dust, plus a faint
floor-tile grid line texture. Repeats on nav, card, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image), var(--tile-line); background-blend-mode: normal; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--haze-fill), var(--color-surface);
border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .2s var(--ease-standard), filter .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); filter: brightness(1.08); }
.btn:active { transform: translateY(0); filter: brightness(0.96); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #2a2018; border-color: transparent; }
.card { background: var(--haze-fill), var(--color-surface); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md), var(--shadow-haze); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(111,184,174,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-marquee); color: #2a2018; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/mallsoft.md */
```

### Variables

```
--bg: #2f3b3a, --fg: #f1ead9, --accent: #d98fae, --surface: #3d4c48, --radius: 6px, --spacing: 16px, --font-display: 'Copperplate', 'Trebuchet MS', serif, --font-body: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#2f3b3a

#3d4c48

#4a5c56

Secondary

#f1ead9

#c9c0a8

#d98fae

#6fb8ae

#7fa39c

#e0b060

### Effects

Empty-mall photography, muzak nostalgia, Faded teal/beige 90s retail palette, Fountains, food courts, plants, Melancholic consumer nostalgia, shadow

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

- **Name:** Mallsoft
- **Type:** claude-artisan/niche
- **Keywords:** Mallsoft, mall vaporwave, Empty-mall photography, muzak nostalgia, Faded teal/beige 90s retail palette, Fountains, food courts, plants, Melancholic consumer nostalgia, niche
- **Era:** 2014–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #2f3b3a, surface: #3d4c48, surface-strong: #4a5c56, border: rgba(212, 196, 168, 0.28)
- **Secondary:** text: #f1ead9, text-muted: #c9c0a8, primary: #d98fae, accent: #6fb8ae, fountain: #7fa39c, marquee: #e0b060

## Visual Effects

Empty-mall photography, muzak nostalgia, Faded teal/beige 90s retail palette, Fountains, food courts, plants, Melancholic consumer nostalgia, shadow

## AI Visual Direction

Mallsoft, Empty-mall photography, muzak nostalgia, Faded teal/beige 90s retail palette, Fountains, food courts, plants, Melancholic consumer nostalgia, Mallsoft album art; dead-mall photography.

## CSS Technical

```css
/* Mallsoft — design tokens */
/* 2014–present | Vaporwave subgenre evoking dead shopping malls, condensed */
:root {
/* color */
--color-bg: #2f3b3a;
--color-surface: #3d4c48;
--color-surface-strong: #4a5c56;
--color-border: rgba(212, 196, 168, 0.28);
--color-text: #f1ead9;
--color-text-muted: #c9c0a8;
--color-primary: #d98fae;
--color-accent: #6fb8ae;
--color-fountain: #7fa39c;
--color-marquee: #e0b060;
/* radius */
--radius-sm: 3px;
--radius-md: 6px;
--radius-lg: 10px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.30);
--shadow-md: 0 6px 18px rgba(0,0,0,0.36);
--shadow-lg: 0 14px 34px rgba(0,0,0,0.42);
--shadow-haze: inset 0 0 40px rgba(217,143,174,0.10);
/* font */
--font-sans: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif;
--font-display: 'Copperplate', 'Trebuchet MS', serif;
--font-mono: 'Courier New', ui-monospace, monospace;
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
/* extra: faded muzak haze — desaturated teal/beige gradient + soft vignette,
as if lit by dying skylights over a food court */
--bg-image: radial-gradient(140% 100% at 50% -10%, #3d4c48 0%, #2f3b3a 60%, #24302f 100%);
--haze-fill: linear-gradient(160deg, rgba(111,184,174,0.12), rgba(217,143,174,0.06));
--tile-line: repeating-linear-gradient(90deg, rgba(212,196,168,0.05) 0 2px, transparent 2px 40px);
}

/* ============================================================
Base component classes — Mallsoft
Signature move: a desaturated teal/beige haze wash (--haze-fill) laid over
every raised surface like fluorescent skylight through dust, plus a faint
floor-tile grid line texture. Repeats on nav, card, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image), var(--tile-line); background-blend-mode: normal; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--haze-fill), var(--color-surface);
border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .2s var(--ease-standard), filter .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); filter: brightness(1.08); }
.btn:active { transform: translateY(0); filter: brightness(0.96); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #2a2018; border-color: transparent; }
.card { background: var(--haze-fill), var(--color-surface); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md), var(--shadow-haze); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(111,184,174,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-marquee); color: #2a2018; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/mallsoft.md */
```

## Design System Variables

```css
--bg: #2f3b3a, --fg: #f1ead9, --accent: #d98fae, --surface: #3d4c48, --radius: 6px, --spacing: 16px, --font-display: 'Copperplate', 'Trebuchet MS', serif, --font-body: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif
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

[![Liminal Spaces](https://designmd.app/images/library/669.png) Claude Artisan · Subculturas & estéticas de nicho ### Liminal Spaces](https://designmd.app/library/liminal-spaces)

Last synced: 8/30/2026
