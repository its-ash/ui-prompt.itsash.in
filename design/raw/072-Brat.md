# Brat

- Source: <https://designmd.app/library/brat>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:12.282Z

Claude Artisan · Subculturas & estéticas de nicho2024–present

# Brat

Reference for subculturas & estéticas de nicho Brat. Charli XCX 'Brat' album (2024).

Bratbrat greenCharli XCX greenSingle toxic lime-green (#8ACE00-ish) fieldLow-res stretched Arial-style textDeliberately blunt and lo-fiConfrontational, cool, ironicniche

Use case: hero, superfície, conteúdo e grade responsiva; Single toxic lime-green (#8ACE00-ish) field; Low-res stretched Arial-style text

![Brat](https://designmd.app/images/library/592.png)

## Historical Context

Charli XCX 'Brat' album (2024). Example: Charli XCX 'Brat' album cover and campaign..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Brat"
description: "Brat visual system, translated from the Claude Artisan catalog for use in digital products. Single toxic lime-green (#8ACE00-ish) field; Low-res stretched Arial-style text"
colors:
primary: "#0e0e0e"
background: "#8ace00"
surface: "#97d611"
text: "#0e0e0e"
accent: "#ffffff"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "Arial, 'Helvetica Neue', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Arial, 'Helvetica Neue', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Arial, 'Helvetica Neue', sans-serif"
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

Brat visual system, translated from the Claude Artisan catalog for use in digital products. Single toxic lime-green (#8ACE00-ish) field; Low-res stretched Arial-style text

- **Category:** niche
- **Era:** 2024–present
- **Origin:** Charli XCX 'Brat' album (2024).
- **Reference:** Charli XCX 'Brat' album cover and campaign.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Single toxic lime-green (#8ACE00-ish) field
- Low-res stretched Arial-style text
- Deliberately blunt and lo-fi
- Confrontational, cool, ironic

## Colors

- **bg** — #8ace00
- **surface** — #97d611
- **surface-strong** — #a4e022
- **border** — #111111
- **text** — #0e0e0e
- **text-muted** — #2c2c2c
- **primary** — #0e0e0e
- **accent** — #ffffff

## Typography

- Display: Arial, 'Helvetica Neue', sans-serif
- Body: Arial, 'Helvetica Neue', sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Single toxic lime-green (#8ACE00-ish) field; Low-res stretched Arial-style text; Deliberately blunt and lo-fi; Confrontational, cool, ironic; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/brat/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Brat — design tokens */
/* 2024–present | Charli XCX 'Brat' album (2024), condensed */
:root {
/* color: one toxic lime field, deliberately blunt */
--color-bg: #8ace00;
--color-surface: #97d611;
--color-surface-strong: #a4e022;
--color-border: #111111;
--color-text: #0e0e0e;
--color-text-muted: #2c2c2c;
--color-primary: #0e0e0e;
--color-accent: #ffffff;
/* radius: blunt, no rounding, nothing precious */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: none — flat and confrontational */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font: stretched, low-res Arial-style, deliberately ungainly */
--font-sans: Arial, 'Helvetica Neue', sans-serif;
--font-display: Arial, 'Helvetica Neue', sans-serif;
--font-mono: 'Courier New', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 3.25rem;
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
--ease-standard: linear;
/* extra: stretched/blurred text as the signature move */
--text-blur: blur(0.4px);
--text-stretch: scaleX(1.12);
}

/* ============================================================
Base component classes — Brat
Signature move: everything sits on the single lime field with no
shadow, no radius, and headline/nav text horizontally stretched +
very slightly blurred — the lo-fi Arial look — repeated on nav
brand and headline.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-bg);
border-bottom: 1px solid var(--color-border); }
.nav strong { transform: var(--text-stretch); filter: var(--text-blur); display: inline-block;
font-weight: 400; letter-spacing: -0.02em; }
.btn {
font: 400 var(--text-base)/1 var(--font-sans); color: var(--color-accent);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-primary); border: 1px solid var(--color-border);
cursor: pointer; transition: opacity .1s var(--ease-standard);
}
.btn:hover { opacity: .8; }
.btn:active { opacity: .6; }
.btn:focus-visible { outline: 2px solid var(--color-border); outline-offset: 2px; }
.btn[disabled] { opacity: .35; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: var(--color-bg); }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6); border: 1px solid var(--color-border); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 2px var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-primary); color: var(--color-bg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/brat.md */
```

### Variables

```
--bg: #8ace00, --fg: #0e0e0e, --accent: #0e0e0e, --surface: #97d611, --radius: 0px, --spacing: 16px, --font-display: Arial, 'Helvetica Neue', sans-serif, --font-body: Arial, 'Helvetica Neue', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#8ace00

#97d611

#a4e022

#111111

Secondary

#0e0e0e

#2c2c2c

#ffffff

### Effects

Single toxic lime-green (#8ACE00-ish) field, Low-res stretched Arial-style text, Deliberately blunt and lo-fi, Confrontational, cool, ironic, shadow

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

- **Name:** Brat
- **Type:** claude-artisan/niche
- **Keywords:** Brat, brat green, Charli XCX green, Single toxic lime-green (#8ACE00-ish) field, Low-res stretched Arial-style text, Deliberately blunt and lo-fi, Confrontational, cool, ironic, niche
- **Era:** 2024–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #8ace00, surface: #97d611, surface-strong: #a4e022, border: #111111
- **Secondary:** text: #0e0e0e, text-muted: #2c2c2c, primary: #0e0e0e, accent: #ffffff

## Visual Effects

Single toxic lime-green (#8ACE00-ish) field, Low-res stretched Arial-style text, Deliberately blunt and lo-fi, Confrontational, cool, ironic, shadow

## AI Visual Direction

Brat, Single toxic lime-green (#8ACE00-ish) field, Low-res stretched Arial-style text, Deliberately blunt and lo-fi, Confrontational, cool, ironic, Charli XCX 'Brat' album cover and campaign.

## CSS Technical

```css
/* Brat — design tokens */
/* 2024–present | Charli XCX 'Brat' album (2024), condensed */
:root {
/* color: one toxic lime field, deliberately blunt */
--color-bg: #8ace00;
--color-surface: #97d611;
--color-surface-strong: #a4e022;
--color-border: #111111;
--color-text: #0e0e0e;
--color-text-muted: #2c2c2c;
--color-primary: #0e0e0e;
--color-accent: #ffffff;
/* radius: blunt, no rounding, nothing precious */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: none — flat and confrontational */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font: stretched, low-res Arial-style, deliberately ungainly */
--font-sans: Arial, 'Helvetica Neue', sans-serif;
--font-display: Arial, 'Helvetica Neue', sans-serif;
--font-mono: 'Courier New', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 3.25rem;
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
--ease-standard: linear;
/* extra: stretched/blurred text as the signature move */
--text-blur: blur(0.4px);
--text-stretch: scaleX(1.12);
}

/* ============================================================
Base component classes — Brat
Signature move: everything sits on the single lime field with no
shadow, no radius, and headline/nav text horizontally stretched +
very slightly blurred — the lo-fi Arial look — repeated on nav
brand and headline.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-bg);
border-bottom: 1px solid var(--color-border); }
.nav strong { transform: var(--text-stretch); filter: var(--text-blur); display: inline-block;
font-weight: 400; letter-spacing: -0.02em; }
.btn {
font: 400 var(--text-base)/1 var(--font-sans); color: var(--color-accent);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-primary); border: 1px solid var(--color-border);
cursor: pointer; transition: opacity .1s var(--ease-standard);
}
.btn:hover { opacity: .8; }
.btn:active { opacity: .6; }
.btn:focus-visible { outline: 2px solid var(--color-border); outline-offset: 2px; }
.btn[disabled] { opacity: .35; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: var(--color-bg); }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6); border: 1px solid var(--color-border); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 2px var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-primary); color: var(--color-bg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/brat.md */
```

## Design System Variables

```css
--bg: #8ace00, --fg: #0e0e0e, --accent: #0e0e0e, --surface: #97d611, --radius: 0px, --spacing: 16px, --font-display: Arial, 'Helvetica Neue', sans-serif, --font-body: Arial, 'Helvetica Neue', sans-serif
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

[![Anti-Design](https://designmd.app/images/library/575.png) Claude Artisan · Brutalismo & anti-design ### Anti-Design](https://designmd.app/library/anti-design)[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)

Last synced: 8/30/2026
