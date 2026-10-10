# Duotone

- Source: <https://designmd.app/library/duotone>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:08.307Z

Claude Artisan · Textura, material & renderizaçãoPrint heritage → 2015 web

# Duotone

Reference for textura, material & renderização Duotone. Spotify's 2015 rebrand mainstreamed digital duotone.

Duotonetwo-tonebitoneTwo-color gradient mapped onto photosHigh-contrast bold pairingsUnifies mixed imageryPunchy, modern, brand-forwardtexture

Use case: shell de aplicação com navegação e cartões; Two-color gradient mapped onto photos; High-contrast bold pairings

![Duotone](https://designmd.app/images/library/626.png)

## Historical Context

Spotify's 2015 rebrand mainstreamed digital duotone. Example: Spotify 2015 identity; festival branding..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Duotone"
description: "Duotone visual system, translated from the Claude Artisan catalog for use in digital products. Two-color gradient mapped onto photos; High-contrast bold pairings"
colors:
primary: "#34d980"
background: "#0e1f17"
surface: "#133527"
text: "#eafff2"
accent: "#ff3e6c"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Gotham', 'Circular', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Circular', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Circular', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
lg: "12px"
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

Duotone visual system, translated from the Claude Artisan catalog for use in digital products. Two-color gradient mapped onto photos; High-contrast bold pairings

- **Category:** texture
- **Era:** Print heritage → 2015 web
- **Origin:** Spotify's 2015 rebrand mainstreamed digital duotone.
- **Reference:** Spotify 2015 identity; festival branding.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Two-color gradient mapped onto photos
- High-contrast bold pairings
- Unifies mixed imagery
- Punchy, modern, brand-forward

## Colors

- **bg** — #0e1f17
- **surface** — #133527
- **surface-strong** — #1a4732
- **border** — #2fae74
- **text** — #eafff2
- **text-muted** — #9fe3bd
- **primary** — #34d980
- **accent** — #ff3e6c
- **tone-shadow** — #0e1f17
- **tone-highlight** — #ff3e6c

## Typography

- Display: 'Gotham', 'Circular', system-ui, sans-serif
- Body: 'Circular', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Two-color gradient mapped onto photos; High-contrast bold pairings; Unifies mixed imagery; Punchy, modern, brand-forward; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/duotone/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Duotone — design tokens */
/* Print heritage → 2015 web | Spotify's 2015 rebrand mainstreamed digital duotone, condensed */
:root {
/* color */
--color-bg: #0e1f17;
--color-surface: #133527;
--color-surface-strong: #1a4732;
--color-border: #2fae74;
--color-text: #eafff2;
--color-text-muted: #9fe3bd;
--color-primary: #34d980;
--color-accent: #ff3e6c;
--tone-shadow: #0e1f17;
--tone-highlight: #ff3e6c;
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.3);
--shadow-md: 0 6px 20px rgba(0,0,0,0.4);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.5);
/* font */
--font-sans: 'Circular', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Gotham', 'Circular', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: signature = two-color duotone gradient mapped across every surface (shadow→highlight ramp) */
--duotone-ramp: linear-gradient(135deg, var(--tone-shadow) 0%, var(--color-primary) 55%, var(--tone-highlight) 130%);
--duotone-wash: linear-gradient(180deg, rgba(52,217,128,0.16), rgba(255,62,108,0.10));
}

/* ============================================================
Base component classes — Duotone
Signature move: a single two-color gradient ramp (shadow → primary →
highlight) is reused as the page background, the primary button fill,
and a wash overlay on cards/nav — unifying every surface in one bitone.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--duotone-ramp); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); background-image: var(--duotone-wash); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: 1px solid var(--color-border); border-radius: var(--radius-pill);
padding: var(--space-3) var(--space-6); cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-text); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--duotone-ramp); color: #0e1f17; border-color: transparent; font-weight: 800; }
.card { background: var(--color-surface); background-image: var(--duotone-wash); border-radius: var(--radius-lg);
border: 1px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: 1px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
color: #0e1f17; background: var(--duotone-ramp); border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/duotone.md */
```

### Variables

```
--bg: #0e1f17, --fg: #eafff2, --accent: #34d980, --surface: #133527, --radius: 8px, --spacing: 16px, --font-display: 'Gotham', 'Circular', system-ui, sans-serif, --font-body: 'Circular', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0e1f17

#133527

#1a4732

#2fae74

Secondary

#eafff2

#9fe3bd

#34d980

#ff3e6c

#0e1f17

### Effects

Two-color gradient mapped onto photos, High-contrast bold pairings, Unifies mixed imagery, Punchy, modern, brand-forward, shadow

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

- **Name:** Duotone
- **Type:** claude-artisan/texture
- **Keywords:** Duotone, two-tone, bitone, Two-color gradient mapped onto photos, High-contrast bold pairings, Unifies mixed imagery, Punchy, modern, brand-forward, texture
- **Era:** Print heritage → 2015 web
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0e1f17, surface: #133527, surface-strong: #1a4732, border: #2fae74
- **Secondary:** text: #eafff2, text-muted: #9fe3bd, primary: #34d980, accent: #ff3e6c, tone-shadow: #0e1f17, tone-highlight: #ff3e6c

## Visual Effects

Two-color gradient mapped onto photos, High-contrast bold pairings, Unifies mixed imagery, Punchy, modern, brand-forward, shadow

## AI Visual Direction

Duotone, Two-color gradient mapped onto photos, High-contrast bold pairings, Unifies mixed imagery, Punchy, modern, brand-forward, Spotify 2015 identity; festival branding.

## CSS Technical

```css
/* Duotone — design tokens */
/* Print heritage → 2015 web | Spotify's 2015 rebrand mainstreamed digital duotone, condensed */
:root {
/* color */
--color-bg: #0e1f17;
--color-surface: #133527;
--color-surface-strong: #1a4732;
--color-border: #2fae74;
--color-text: #eafff2;
--color-text-muted: #9fe3bd;
--color-primary: #34d980;
--color-accent: #ff3e6c;
--tone-shadow: #0e1f17;
--tone-highlight: #ff3e6c;
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.3);
--shadow-md: 0 6px 20px rgba(0,0,0,0.4);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.5);
/* font */
--font-sans: 'Circular', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Gotham', 'Circular', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: signature = two-color duotone gradient mapped across every surface (shadow→highlight ramp) */
--duotone-ramp: linear-gradient(135deg, var(--tone-shadow) 0%, var(--color-primary) 55%, var(--tone-highlight) 130%);
--duotone-wash: linear-gradient(180deg, rgba(52,217,128,0.16), rgba(255,62,108,0.10));
}

/* ============================================================
Base component classes — Duotone
Signature move: a single two-color gradient ramp (shadow → primary →
highlight) is reused as the page background, the primary button fill,
and a wash overlay on cards/nav — unifying every surface in one bitone.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--duotone-ramp); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); background-image: var(--duotone-wash); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: 1px solid var(--color-border); border-radius: var(--radius-pill);
padding: var(--space-3) var(--space-6); cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-text); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--duotone-ramp); color: #0e1f17; border-color: transparent; font-weight: 800; }
.card { background: var(--color-surface); background-image: var(--duotone-wash); border-radius: var(--radius-lg);
border: 1px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface-strong); border: 1px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
color: #0e1f17; background: var(--duotone-ramp); border-radius: var(--radius-pill); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/duotone.md */
```

## Design System Variables

```css
--bg: #0e1f17, --fg: #eafff2, --accent: #34d980, --surface: #133527, --radius: 8px, --spacing: 16px, --font-display: 'Gotham', 'Circular', system-ui, sans-serif, --font-body: 'Circular', 'Helvetica Neue', system-ui, sans-serif
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

[![Halftone](https://designmd.app/images/library/656.png) Claude Artisan · Textura, material & renderização ### Halftone](https://designmd.app/library/halftone)[![Risograph](https://designmd.app/images/library/711.png) Claude Artisan · Textura, material & renderização ### Risograph](https://designmd.app/library/risograph)

Last synced: 8/30/2026
