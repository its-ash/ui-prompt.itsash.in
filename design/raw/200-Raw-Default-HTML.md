# Raw / Default HTML

- Source: <https://designmd.app/library/raw-html>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:35.309Z

Claude Artisan · Brutalismo & anti-design1991–present (revival 2016+)

# Raw / Default HTML

Reference for brutalismo & anti-design Raw / Default HTML. The literal default browser stylesheet; revived as an aesthetic statement.

Raw / Default HTMLunstyled webdefault stylesHTML brutalismTimes New Roman, default blue/purple linksNo CSS or minimal CSSSingle-column, top-to-bottom flowRadical performance and honestybrutalist

Use case: hero, superfície, conteúdo e grade responsiva; Times New Roman, default blue/purple links; No CSS or minimal CSS

![Raw / Default HTML](https://designmd.app/images/library/707.png)

## Historical Context

The literal default browser stylesheet; revived as an aesthetic statement. Example: motherfuckingwebsite.com; bettermotherfuckingwebsite.com..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Raw / Default HTML"
description: "Raw / Default HTML visual system, translated from the Claude Artisan catalog for use in digital products. Times New Roman, default blue/purple links; No CSS or minimal CSS"
colors:
primary: "#0000ee"
background: "#ffffff"
surface: "#ffffff"
text: "#000000"
accent: "#551a8b"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Times New Roman', Times, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Arial, Helvetica, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Arial, Helvetica, sans-serif"
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

Raw / Default HTML visual system, translated from the Claude Artisan catalog for use in digital products. Times New Roman, default blue/purple links; No CSS or minimal CSS

- **Category:** brutalist
- **Era:** 1991–present (revival 2016+)
- **Origin:** The literal default browser stylesheet; revived as an aesthetic statement.
- **Reference:** motherfuckingwebsite.com; bettermotherfuckingwebsite.com.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Times New Roman, default blue/purple links
- No CSS or minimal CSS
- Single-column, top-to-bottom flow
- Radical performance and honesty

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #eeeeee
- **border** — #000000
- **text** — #000000
- **text-muted** — #444444
- **primary** — #0000ee
- **accent** — #551a8b
- **visited** — #551a8b

## Typography

- Display: 'Times New Roman', Times, serif
- Body: Arial, Helvetica, sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Times New Roman, default blue/purple links; No CSS or minimal CSS; Single-column, top-to-bottom flow; Radical performance and honesty; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/raw-html/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Raw / Default HTML — design tokens */
/* 1991–present (revival 2016+) | The literal default browser stylesheet, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #eeeeee;
--color-border: #000000;
--color-text: #000000;
--color-text-muted: #444444;
--color-primary: #0000ee;
--color-accent: #551a8b;
--color-visited: #551a8b;
/* radius: the whole point is zero styling ambition */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: default HTML has none */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: 'Times New Roman', Times, serif;
--font-mono: 'Courier New', monospace;
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
/* ease: no animation is the point */
--ease-standard: linear;
/* extra: the classic 2px outset/inset bevel border that browsers used to draw for free */
--bevel-outset: 2px outset #c0c0c0;
--bevel-inset: 2px inset #c0c0c0;
}

/* ============================================================
Base component classes — Raw / Default HTML
Signature move: the literal UA-stylesheet look — Times New Roman body
copy, underlined default-blue links, and a chunky 2px outset/inset
bevel border standing in for every "button" the browser used to draw
for free. Repeated on both btn and input; zero border-radius everywhere.
============================================================ */
body { margin: 8px; color: var(--color-text); font-family: var(--font-display); background: var(--color-bg); font-size: var(--text-base); }
a { color: var(--color-primary); }
a:visited { color: var(--color-visited); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-2) var(--space-3); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); font-family: var(--font-sans); }
.btn {
font: var(--text-base) var(--font-sans); color: #000000;
padding: 1px 6px; border-radius: var(--radius-sm);
background: #dddddd; border: var(--bevel-outset);
cursor: pointer;
}
.btn:hover { background: #e5e5e5; }
.btn:active { border: var(--bevel-inset); }
.btn:focus-visible { outline: 1px dotted #000000; outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: #dddddd; color: #000000; font-weight: bold; }
.card { background: var(--color-surface); color: var(--color-text);
border: 1px solid var(--color-border); border-radius: var(--radius-sm);
box-shadow: var(--shadow-sm); padding: var(--space-4); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: 2px 4px;
background: #ffffff; border: var(--bevel-inset); border-radius: var(--radius-sm); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: 1px dotted #000000; }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-sm);
padding: 1px 6px; border-radius: var(--radius-sm); background: #ffff00;
border: 1px solid var(--color-border); color: #000000; }
@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }

/* Especificação de referência: references/00-flagship-implementation-specs/raw-html.md */
```

### Variables

```
--bg: #ffffff, --fg: #000000, --accent: #0000ee, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Times New Roman', Times, serif, --font-body: Arial, Helvetica, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffffff

#eeeeee

#000000

Secondary

#000000

#444444

#0000ee

#551a8b

### Effects

Times New Roman, default blue/purple links, No CSS or minimal CSS, Single-column, top-to-bottom flow, Radical performance and honesty, shadow

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

- **Name:** Raw / Default HTML
- **Type:** claude-artisan/brutalist
- **Keywords:** Raw / Default HTML, unstyled web, default styles, HTML brutalism, Times New Roman, default blue/purple links, No CSS or minimal CSS, Single-column, top-to-bottom flow, Radical performance and honesty, brutalist
- **Era:** 1991–present (revival 2016+)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffffff, surface: #ffffff, surface-strong: #eeeeee, border: #000000
- **Secondary:** text: #000000, text-muted: #444444, primary: #0000ee, accent: #551a8b, visited: #551a8b

## Visual Effects

Times New Roman, default blue/purple links, No CSS or minimal CSS, Single-column, top-to-bottom flow, Radical performance and honesty, shadow

## AI Visual Direction

Raw / Default HTML, Times New Roman, default blue/purple links, No CSS or minimal CSS, Single-column, top-to-bottom flow, Radical performance and honesty, motherfuckingwebsite.com; bettermotherfuckingwebsite.com.

## CSS Technical

```css
/* Raw / Default HTML — design tokens */
/* 1991–present (revival 2016+) | The literal default browser stylesheet, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #eeeeee;
--color-border: #000000;
--color-text: #000000;
--color-text-muted: #444444;
--color-primary: #0000ee;
--color-accent: #551a8b;
--color-visited: #551a8b;
/* radius: the whole point is zero styling ambition */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: default HTML has none */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: 'Times New Roman', Times, serif;
--font-mono: 'Courier New', monospace;
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
/* ease: no animation is the point */
--ease-standard: linear;
/* extra: the classic 2px outset/inset bevel border that browsers used to draw for free */
--bevel-outset: 2px outset #c0c0c0;
--bevel-inset: 2px inset #c0c0c0;
}

/* ============================================================
Base component classes — Raw / Default HTML
Signature move: the literal UA-stylesheet look — Times New Roman body
copy, underlined default-blue links, and a chunky 2px outset/inset
bevel border standing in for every "button" the browser used to draw
for free. Repeated on both btn and input; zero border-radius everywhere.
============================================================ */
body { margin: 8px; color: var(--color-text); font-family: var(--font-display); background: var(--color-bg); font-size: var(--text-base); }
a { color: var(--color-primary); }
a:visited { color: var(--color-visited); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-2) var(--space-3); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); font-family: var(--font-sans); }
.btn {
font: var(--text-base) var(--font-sans); color: #000000;
padding: 1px 6px; border-radius: var(--radius-sm);
background: #dddddd; border: var(--bevel-outset);
cursor: pointer;
}
.btn:hover { background: #e5e5e5; }
.btn:active { border: var(--bevel-inset); }
.btn:focus-visible { outline: 1px dotted #000000; outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: #dddddd; color: #000000; font-weight: bold; }
.card { background: var(--color-surface); color: var(--color-text);
border: 1px solid var(--color-border); border-radius: var(--radius-sm);
box-shadow: var(--shadow-sm); padding: var(--space-4); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: 2px 4px;
background: #ffffff; border: var(--bevel-inset); border-radius: var(--radius-sm); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: 1px dotted #000000; }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-sm);
padding: 1px 6px; border-radius: var(--radius-sm); background: #ffff00;
border: 1px solid var(--color-border); color: #000000; }
@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }

/* Especificação de referência: references/00-flagship-implementation-specs/raw-html.md */
```

## Design System Variables

```css
--bg: #ffffff, --fg: #000000, --accent: #0000ee, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Times New Roman', Times, serif, --font-body: Arial, Helvetica, sans-serif
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

[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)

Last synced: 8/30/2026
