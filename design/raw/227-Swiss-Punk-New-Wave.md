# Swiss Punk / New Wave

- Source: <https://designmd.app/library/swiss-punk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:19.234Z

Claude Artisan · Brutalismo & anti-design1978–1990

# Swiss Punk / New Wave

Reference for brutalismo & anti-design Swiss Punk / New Wave. Wolfgang Weingart (Basel), spread by April Greiman and Dan Friedman in the US.

Swiss Punk / New Wavenew wave typographypunk typographyDeconstructed Swiss grid; tilted, layered typeWide letter-spacing, stepped baselines, rulesPhotographic collage, gradients (Greiman's digital work)Rebellion against rigid International Stylebrutalist

Use case: composição editorial com grade tipográfica; Deconstructed Swiss grid; tilted, layered type; Wide letter-spacing, stepped baselines, rules

![Swiss Punk / New Wave](https://designmd.app/images/library/731.png)

## Historical Context

Wolfgang Weingart (Basel), spread by April Greiman and Dan Friedman in the US. Example: April Greiman 'Does It Make Sense?' (1986); Weingart Typographische Monatsblätter..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Swiss Punk / New Wave"
description: "Swiss Punk / New Wave visual system, translated from the Claude Artisan catalog for use in digital products. Deconstructed Swiss grid; tilted, layered type; Wide letter-spacing, stepped baselines, rules"
colors:
primary: "#ff2e63"
background: "#f1f0ea"
surface: "#ffffff"
text: "#16161a"
accent: "#08b2e3"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Helvetica Neue', 'Univers', Arial, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', 'Univers', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', 'Univers', Arial, sans-serif"
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

Swiss Punk / New Wave visual system, translated from the Claude Artisan catalog for use in digital products. Deconstructed Swiss grid; tilted, layered type; Wide letter-spacing, stepped baselines, rules

- **Category:** brutalist
- **Era:** 1978–1990
- **Origin:** Wolfgang Weingart (Basel), spread by April Greiman and Dan Friedman in the US.
- **Reference:** April Greiman 'Does It Make Sense?' (1986); Weingart Typographische Monatsblätter.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Deconstructed Swiss grid; tilted, layered type
- Wide letter-spacing, stepped baselines, rules
- Photographic collage, gradients (Greiman's digital work)
- Rebellion against rigid International Style

## Colors

- **bg** — #f1f0ea
- **surface** — #ffffff
- **surface-strong** — #e7e5db
- **border** — #16161a
- **text** — #16161a
- **text-muted** — #4c4c50
- **primary** — #ff2e63
- **accent** — #08b2e3
- **yellow** — #ffd400

## Typography

- Display: 'Helvetica Neue', 'Univers', Arial, sans-serif
- Body: 'Helvetica Neue', 'Univers', Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Deconstructed Swiss grid; tilted, layered type; Wide letter-spacing, stepped baselines, rules; Photographic collage, gradients (Greiman's digital work); Rebellion against rigid International Style; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/swiss-punk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Swiss Punk / New Wave — design tokens */
/* 1978–1990 | Wolfgang Weingart (Basel), spread by April Greiman and Dan Friedman, condensed */
:root {
/* color */
--color-bg: #f1f0ea;
--color-surface: #ffffff;
--color-surface-strong: #e7e5db;
--color-border: #16161a;
--color-text: #16161a;
--color-text-muted: #4c4c50;
--color-primary: #ff2e63;
--color-accent: #08b2e3;
--color-yellow: #ffd400;
/* radius: rule-driven grid rebellion, hard edges */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow: offset hard shadow instead of blur, like layered print collage */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 9px 9px 0 var(--color-border);
/* font: tight Swiss grotesk pushed to wide tracking, tilted */
--font-sans: 'Helvetica Neue', 'Univers', Arial, sans-serif;
--font-display: 'Helvetica Neue', 'Univers', Arial, sans-serif;
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
--ease-standard: cubic-bezier(0.6, 0, 0.4, 1);
/* extra: deconstructed grid — a tilted element + a hard offset shadow, the signature move */
--tilt-deg: -2.5deg;
--rule-line: 3px solid var(--color-border);
}

/* ============================================================
Base component classes — Swiss Punk / New Wave
Signature move: a slight rotation on interactive elements paired with a
hard offset shadow (no blur) that snaps flush on press, repeated on nav,
btn, and card to read as a deconstructed, collaged Swiss grid.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 3px solid var(--color-border); box-shadow: var(--shadow-md);
transform: rotate(-0.6deg); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-yellow); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .12s var(--ease-standard), box-shadow .12s var(--ease-standard);
}
.btn:hover { transform: rotate(var(--tilt-deg)) translate(-1px,-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(2px,2px); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
border: 3px solid var(--color-border); padding: var(--space-6);
transform: rotate(0.8deg); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: var(--shadow-sm), 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
text-transform: uppercase; letter-spacing: .06em; padding: .3em .8em; border-radius: var(--radius-pill);
color: #ffffff; background: var(--color-accent); border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/swiss-punk.md */
```

### Variables

```
--bg: #f1f0ea, --fg: #16161a, --accent: #ff2e63, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Helvetica Neue', 'Univers', Arial, sans-serif, --font-body: 'Helvetica Neue', 'Univers', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f1f0ea

#ffffff

#e7e5db

#16161a

Secondary

#16161a

#4c4c50

#ff2e63

#08b2e3

#ffd400

### Effects

Deconstructed Swiss grid; tilted, layered type, Wide letter-spacing, stepped baselines, rules, Photographic collage, gradients (Greiman's digital work), Rebellion against rigid International Style, shadow

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

- **Name:** Swiss Punk / New Wave
- **Type:** claude-artisan/brutalist
- **Keywords:** Swiss Punk / New Wave, new wave typography, punk typography, Deconstructed Swiss grid; tilted, layered type, Wide letter-spacing, stepped baselines, rules, Photographic collage, gradients (Greiman's digital work), Rebellion against rigid International Style, brutalist
- **Era:** 1978–1990
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f1f0ea, surface: #ffffff, surface-strong: #e7e5db, border: #16161a
- **Secondary:** text: #16161a, text-muted: #4c4c50, primary: #ff2e63, accent: #08b2e3, yellow: #ffd400

## Visual Effects

Deconstructed Swiss grid; tilted, layered type, Wide letter-spacing, stepped baselines, rules, Photographic collage, gradients (Greiman's digital work), Rebellion against rigid International Style, shadow

## AI Visual Direction

Swiss Punk / New Wave, Deconstructed Swiss grid; tilted, layered type, Wide letter-spacing, stepped baselines, rules, Photographic collage, gradients (Greiman's digital work), Rebellion against rigid International Style, April Greiman 'Does It Make Sense?' (1986); Weingart Typographische Monatsblätter.

## CSS Technical

```css
/* Swiss Punk / New Wave — design tokens */
/* 1978–1990 | Wolfgang Weingart (Basel), spread by April Greiman and Dan Friedman, condensed */
:root {
/* color */
--color-bg: #f1f0ea;
--color-surface: #ffffff;
--color-surface-strong: #e7e5db;
--color-border: #16161a;
--color-text: #16161a;
--color-text-muted: #4c4c50;
--color-primary: #ff2e63;
--color-accent: #08b2e3;
--color-yellow: #ffd400;
/* radius: rule-driven grid rebellion, hard edges */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow: offset hard shadow instead of blur, like layered print collage */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 9px 9px 0 var(--color-border);
/* font: tight Swiss grotesk pushed to wide tracking, tilted */
--font-sans: 'Helvetica Neue', 'Univers', Arial, sans-serif;
--font-display: 'Helvetica Neue', 'Univers', Arial, sans-serif;
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
--ease-standard: cubic-bezier(0.6, 0, 0.4, 1);
/* extra: deconstructed grid — a tilted element + a hard offset shadow, the signature move */
--tilt-deg: -2.5deg;
--rule-line: 3px solid var(--color-border);
}

/* ============================================================
Base component classes — Swiss Punk / New Wave
Signature move: a slight rotation on interactive elements paired with a
hard offset shadow (no blur) that snaps flush on press, repeated on nav,
btn, and card to read as a deconstructed, collaged Swiss grid.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 3px solid var(--color-border); box-shadow: var(--shadow-md);
transform: rotate(-0.6deg); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-yellow); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .12s var(--ease-standard), box-shadow .12s var(--ease-standard);
}
.btn:hover { transform: rotate(var(--tilt-deg)) translate(-1px,-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(2px,2px); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
border: 3px solid var(--color-border); padding: var(--space-6);
transform: rotate(0.8deg); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: var(--shadow-sm), 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
text-transform: uppercase; letter-spacing: .06em; padding: .3em .8em; border-radius: var(--radius-pill);
color: #ffffff; background: var(--color-accent); border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/swiss-punk.md */
```

## Design System Variables

```css
--bg: #f1f0ea, --fg: #16161a, --accent: #ff2e63, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Helvetica Neue', 'Univers', Arial, sans-serif, --font-body: 'Helvetica Neue', 'Univers', Arial, sans-serif
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

[![Swiss / International Typographic Style](https://designmd.app/images/library/730.png) Claude Artisan · Movimentos históricos ### Swiss / International Typographic Style](https://designmd.app/library/swiss-design)[![Deconstructivism (Graphic)](https://designmd.app/images/library/621.png) Claude Artisan · Brutalismo & anti-design ### Deconstructivism (Graphic)](https://designmd.app/library/deconstructivism)

Last synced: 8/30/2026
