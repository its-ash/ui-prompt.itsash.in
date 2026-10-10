# Editorial / Magazine

- Source: <https://designmd.app/library/editorial-layout>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:16.344Z

Claude Artisan · Minimal, maximal & orgânicoPrint heritage → web

# Editorial / Magazine

Reference for minimal, maximal & orgânico Editorial / Magazine. Magazine/print art direction adapted to screen.

Editorial / Magazineeditorial designmagazine layoutStrong typographic hierarchy, pull quotesMulti-column grids, large imageryDrop caps, captions, art-directed spreadsReading-first rhythmminimal-organic

Use case: composição editorial com grade tipográfica; Strong typographic hierarchy, pull quotes; Multi-column grids, large imagery

![Editorial / Magazine](https://designmd.app/images/library/629.png)

## Historical Context

Magazine/print art direction adapted to screen. Example: The New York Times; Kinfolk; editorial portfolio sites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Editorial / Magazine"
description: "Editorial / Magazine visual system, translated from the Claude Artisan catalog for use in digital products. Strong typographic hierarchy, pull quotes; Multi-column grids, large imagery"
colors:
primary: "#8a2a1e"
background: "#faf7f2"
surface: "#ffffff"
text: "#211d17"
accent: "#1e4f4a"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Playfair Display', 'Georgia', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "3px"
lg: "4px"
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

Editorial / Magazine visual system, translated from the Claude Artisan catalog for use in digital products. Strong typographic hierarchy, pull quotes; Multi-column grids, large imagery

- **Category:** minimal-organic
- **Era:** Print heritage → web
- **Origin:** Magazine/print art direction adapted to screen.
- **Reference:** The New York Times; Kinfolk; editorial portfolio sites.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Strong typographic hierarchy, pull quotes
- Multi-column grids, large imagery
- Drop caps, captions, art-directed spreads
- Reading-first rhythm

## Colors

- **bg** — #faf7f2
- **surface** — #ffffff
- **surface-strong** — #f0ebe1
- **border** — #d8cfbe
- **text** — #211d17
- **text-muted** — #665c4a
- **primary** — #8a2a1e
- **accent** — #1e4f4a

## Typography

- Display: 'Playfair Display', 'Georgia', serif
- Body: 'Helvetica Neue', system-ui, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Strong typographic hierarchy, pull quotes; Multi-column grids, large imagery; Drop caps, captions, art-directed spreads; Reading-first rhythm; sombras e elevação

## Shapes

- Radius scale: 2px, 3px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/editorial-layout/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Editorial / Magazine — design tokens */
/* Print heritage → web | Magazine/print art direction adapted to screen, condensed */
:root {
/* color */
--color-bg: #faf7f2;
--color-surface: #ffffff;
--color-surface-strong: #f0ebe1;
--color-border: #d8cfbe;
--color-text: #211d17;
--color-text-muted: #665c4a;
--color-primary: #8a2a1e;
--color-accent: #1e4f4a;
/* radius */
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(33,29,23,0.08);
--shadow-md: 0 4px 14px rgba(33,29,23,0.10);
--shadow-lg: 0 12px 32px rgba(33,29,23,0.14);
/* font */
--font-sans: 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Playfair Display', 'Georgia', serif;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1.0625rem;
--text-lg: 1.25rem;
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
/* extra: signature = drop cap + thin double-rule (kicker) repeated as section dividers */
--double-rule: linear-gradient(var(--color-border), var(--color-border)) top / 100% 1px no-repeat,
linear-gradient(var(--color-border), var(--color-border)) bottom 3px / 100% 1px no-repeat;
--dropcap-font: var(--font-display);
}

/* ============================================================
Base component classes — Editorial / Magazine
Signature move: a thin double-rule (kicker line) brackets the nav
and separates card titles from body copy, echoing a print masthead;
the display serif carries all headline weight.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-6); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--double-rule), var(--color-surface); font-family: var(--font-mono); text-transform: uppercase;
letter-spacing: .08em; font-size: var(--text-xs); }
.btn { font: 600 var(--text-sm)/1 var(--font-sans); color: var(--color-text); background: transparent;
border: 1px solid var(--color-text); border-radius: var(--radius-sm); padding: var(--space-3) var(--space-6);
cursor: pointer; transition: background .15s var(--ease-standard), color .15s var(--ease-standard); }
.btn:hover { background: var(--color-text); color: var(--color-bg); }
.btn:active { background: var(--color-primary); border-color: var(--color-primary); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #faf7f2; border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: var(--space-6); }
.card h3 { font-family: var(--font-display); font-weight: 700; background: var(--double-rule); padding-bottom: var(--space-3); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: none; border-bottom: 1px solid var(--color-text); border-radius: 0;
padding: var(--space-3) var(--space-1); }
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-bottom: 2px solid var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-mono);
text-transform: uppercase; letter-spacing: .05em; color: var(--color-accent); border: 1px solid var(--color-accent);
border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/editorial-layout.md */
```

### Variables

```
--bg: #faf7f2, --fg: #211d17, --accent: #8a2a1e, --surface: #ffffff, --radius: 3px, --spacing: 16px, --font-display: 'Playfair Display', 'Georgia', serif, --font-body: 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#faf7f2

#ffffff

#f0ebe1

#d8cfbe

Secondary

#211d17

#665c4a

#8a2a1e

#1e4f4a

### Effects

Strong typographic hierarchy, pull quotes, Multi-column grids, large imagery, Drop caps, captions, art-directed spreads, Reading-first rhythm, shadow

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

- **Name:** Editorial / Magazine
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Editorial / Magazine, editorial design, magazine layout, Strong typographic hierarchy, pull quotes, Multi-column grids, large imagery, Drop caps, captions, art-directed spreads, Reading-first rhythm, minimal-organic
- **Era:** Print heritage → web
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #faf7f2, surface: #ffffff, surface-strong: #f0ebe1, border: #d8cfbe
- **Secondary:** text: #211d17, text-muted: #665c4a, primary: #8a2a1e, accent: #1e4f4a

## Visual Effects

Strong typographic hierarchy, pull quotes, Multi-column grids, large imagery, Drop caps, captions, art-directed spreads, Reading-first rhythm, shadow

## AI Visual Direction

Editorial / Magazine, Strong typographic hierarchy, pull quotes, Multi-column grids, large imagery, Drop caps, captions, art-directed spreads, Reading-first rhythm, The New York Times; Kinfolk; editorial portfolio sites.

## CSS Technical

```css
/* Editorial / Magazine — design tokens */
/* Print heritage → web | Magazine/print art direction adapted to screen, condensed */
:root {
/* color */
--color-bg: #faf7f2;
--color-surface: #ffffff;
--color-surface-strong: #f0ebe1;
--color-border: #d8cfbe;
--color-text: #211d17;
--color-text-muted: #665c4a;
--color-primary: #8a2a1e;
--color-accent: #1e4f4a;
/* radius */
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(33,29,23,0.08);
--shadow-md: 0 4px 14px rgba(33,29,23,0.10);
--shadow-lg: 0 12px 32px rgba(33,29,23,0.14);
/* font */
--font-sans: 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Playfair Display', 'Georgia', serif;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1.0625rem;
--text-lg: 1.25rem;
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
/* extra: signature = drop cap + thin double-rule (kicker) repeated as section dividers */
--double-rule: linear-gradient(var(--color-border), var(--color-border)) top / 100% 1px no-repeat,
linear-gradient(var(--color-border), var(--color-border)) bottom 3px / 100% 1px no-repeat;
--dropcap-font: var(--font-display);
}

/* ============================================================
Base component classes — Editorial / Magazine
Signature move: a thin double-rule (kicker line) brackets the nav
and separates card titles from body copy, echoing a print masthead;
the display serif carries all headline weight.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-6); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--double-rule), var(--color-surface); font-family: var(--font-mono); text-transform: uppercase;
letter-spacing: .08em; font-size: var(--text-xs); }
.btn { font: 600 var(--text-sm)/1 var(--font-sans); color: var(--color-text); background: transparent;
border: 1px solid var(--color-text); border-radius: var(--radius-sm); padding: var(--space-3) var(--space-6);
cursor: pointer; transition: background .15s var(--ease-standard), color .15s var(--ease-standard); }
.btn:hover { background: var(--color-text); color: var(--color-bg); }
.btn:active { background: var(--color-primary); border-color: var(--color-primary); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #faf7f2; border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); padding: var(--space-6); }
.card h3 { font-family: var(--font-display); font-weight: 700; background: var(--double-rule); padding-bottom: var(--space-3); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: none; border-bottom: 1px solid var(--color-text); border-radius: 0;
padding: var(--space-3) var(--space-1); }
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-bottom: 2px solid var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-mono);
text-transform: uppercase; letter-spacing: .05em; color: var(--color-accent); border: 1px solid var(--color-accent);
border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/editorial-layout.md */
```

## Design System Variables

```css
--bg: #faf7f2, --fg: #211d17, --accent: #8a2a1e, --surface: #ffffff, --radius: 3px, --spacing: 16px, --font-display: 'Playfair Display', 'Georgia', serif, --font-body: 'Helvetica Neue', system-ui, sans-serif
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

[![Swiss / International Typographic Style](https://designmd.app/images/library/730.png) Claude Artisan · Movimentos históricos ### Swiss / International Typographic Style](https://designmd.app/library/swiss-design)[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)

Last synced: 8/30/2026
