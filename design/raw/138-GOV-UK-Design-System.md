# GOV.UK Design System

- Source: <https://designmd.app/library/govuk-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:54.261Z

Claude Artisan · Flat, material & plataformas2012–present

# GOV.UK Design System

Reference for flat, material & plataformas GOV.UK Design System. UK Government Digital Service.

GOV.UK Design SystemGDSGOV.UKRadically clear, task-focused, accessibleTransport/GDS typeface, black on whiteNo decoration; content and usability onlyRigorous WCAG complianceflat-platform

Use case: hero, superfície, conteúdo e grade responsiva; Radically clear, task-focused, accessible; Transport/GDS typeface, black on white

![GOV.UK Design System](https://designmd.app/images/library/651.png)

## Historical Context

UK Government Digital Service. Example: gov.uk..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "GOV.UK Design System"
description: "GOV.UK Design System visual system, translated from the Claude Artisan catalog for use in digital products. Radically clear, task-focused, accessible; Transport/GDS typeface, black on white"
colors:
primary: "#00703c"
background: "#ffffff"
surface: "#f3f2f1"
text: "#0b0c0c"
accent: "#1d70b8"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'GDS Transport', 'Helvetica Neue', Arial, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'GDS Transport', 'Helvetica Neue', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'GDS Transport', 'Helvetica Neue', Arial, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
spacing:
sm: "10px"
md: "20px"
lg: "40px"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "20px"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "20px"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "30px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "20px"
---
## Overview

GOV.UK Design System visual system, translated from the Claude Artisan catalog for use in digital products. Radically clear, task-focused, accessible; Transport/GDS typeface, black on white

- **Category:** flat-platform
- **Era:** 2012–present
- **Origin:** UK Government Digital Service.
- **Reference:** gov.uk.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Radically clear, task-focused, accessible
- Transport/GDS typeface, black on white
- No decoration; content and usability only
- Rigorous WCAG compliance

## Colors

- **bg** — #ffffff
- **surface** — #f3f2f1
- **surface-strong** — #ebeae9
- **border** — #0b0c0c
- **text** — #0b0c0c
- **text-muted** — #505a5f
- **primary** — #00703c
- **accent** — #1d70b8
- **focus** — #ffdd00
- **error** — #d4351c

## Typography

- Display: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif
- Body: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif
- Mono: 'GDS Transport Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Radically clear, task-focused, accessible; Transport/GDS typeface, black on white; No decoration; content and usability only; Rigorous WCAG compliance; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/govuk-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* GOV.UK Design System — design tokens */
/* 2012–present | UK Government Digital Service, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #f3f2f1;
--color-surface-strong: #ebeae9;
--color-border: #0b0c0c;
--color-text: #0b0c0c;
--color-text-muted: #505a5f;
--color-primary: #00703c;
--color-accent: #1d70b8;
--color-focus: #ffdd00;
--color-error: #d4351c;
/* radius: GDS is deliberately square, no rounding */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: GDS avoids drop shadows; uses a hard 2px bottom offset instead */
--shadow-sm: 0 2px 0 #002d18;
--shadow-md: 0 2px 0 #002d18;
--shadow-lg: 0 2px 0 #002d18;
/* font */
--font-sans: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'GDS Transport Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1.1875rem;
--text-lg: 1.375rem;
--text-xl: 1.75rem;
--text-2xl: 2rem;
--text-3xl: 2.5rem;
--text-4xl: 3rem;
--text-5xl: 3.75rem;
/* space */
--space-1: 5px;
--space-2: 10px;
--space-3: 15px;
--space-4: 20px;
--space-6: 30px;
--space-8: 40px;
--space-12: 50px;
--space-16: 60px;
--space-24: 80px;
/* ease */
--ease-standard: ease-in-out;
/* extra: the signature move is the 3px solid yellow focus state with a
black inset, mandated across every interactive control */
--focus-ring: 3px solid var(--color-focus);
--focus-shadow: 0 0 0 3px #0b0c0c;
}

/* ============================================================
Base component classes — GOV.UK Design System
Signature move: the yellow-on-black focus state (a thick yellow outline
with a black inset shadow) appears identically on every interactive
element — buttons, inputs, links — nothing else competes for attention.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); line-height: 1.4; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: #0b0c0c; color: #fff; border-bottom: 10px solid var(--color-accent); }
.nav a { color: #fff; }
.btn { font: 400 var(--text-base)/1.19 var(--font-sans); color: #fff;
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: #00703c; border: 2px solid transparent; box-shadow: var(--shadow-sm);
cursor: pointer; transition: box-shadow .1s var(--ease-standard); }
.btn:hover { background: #005a30; }
.btn:active { box-shadow: none; transform: translateY(2px); }
.btn:focus-visible { outline: var(--focus-ring); outline-offset: 0; box-shadow: var(--focus-shadow); color: var(--color-text); background: var(--color-focus); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); }
.card { background: var(--color-bg); border-left: 5px solid var(--color-accent);
border-radius: var(--radius-lg); padding: var(--space-4) var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: var(--color-bg); border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: var(--focus-ring); outline-offset: 0; box-shadow: var(--focus-shadow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-sm); font-weight: 700;
padding: .2em .6em; border-radius: var(--radius-pill); background: var(--color-surface);
border: 1px solid var(--color-border); color: var(--color-text); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/govuk-design.md */
```

### Variables

```
--bg: #ffffff, --fg: #0b0c0c, --accent: #00703c, --surface: #f3f2f1, --radius: 0px, --spacing: 20px, --font-display: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif, --font-body: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffffff

#f3f2f1

#ebeae9

#0b0c0c

Secondary

#0b0c0c

#505a5f

#00703c

#1d70b8

#ffdd00

#d4351c

### Effects

Radically clear, task-focused, accessible, Transport/GDS typeface, black on white, No decoration; content and usability only, Rigorous WCAG compliance, shadow

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

- **Name:** GOV.UK Design System
- **Type:** claude-artisan/flat-platform
- **Keywords:** GOV.UK Design System, GDS, GOV.UK, Radically clear, task-focused, accessible, Transport/GDS typeface, black on white, No decoration; content and usability only, Rigorous WCAG compliance, flat-platform
- **Era:** 2012–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffffff, surface: #f3f2f1, surface-strong: #ebeae9, border: #0b0c0c
- **Secondary:** text: #0b0c0c, text-muted: #505a5f, primary: #00703c, accent: #1d70b8, focus: #ffdd00, error: #d4351c

## Visual Effects

Radically clear, task-focused, accessible, Transport/GDS typeface, black on white, No decoration; content and usability only, Rigorous WCAG compliance, shadow

## AI Visual Direction

GOV.UK Design System, Radically clear, task-focused, accessible, Transport/GDS typeface, black on white, No decoration; content and usability only, Rigorous WCAG compliance, gov.uk.

## CSS Technical

```css
/* GOV.UK Design System — design tokens */
/* 2012–present | UK Government Digital Service, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #f3f2f1;
--color-surface-strong: #ebeae9;
--color-border: #0b0c0c;
--color-text: #0b0c0c;
--color-text-muted: #505a5f;
--color-primary: #00703c;
--color-accent: #1d70b8;
--color-focus: #ffdd00;
--color-error: #d4351c;
/* radius: GDS is deliberately square, no rounding */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: GDS avoids drop shadows; uses a hard 2px bottom offset instead */
--shadow-sm: 0 2px 0 #002d18;
--shadow-md: 0 2px 0 #002d18;
--shadow-lg: 0 2px 0 #002d18;
/* font */
--font-sans: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'GDS Transport Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1.1875rem;
--text-lg: 1.375rem;
--text-xl: 1.75rem;
--text-2xl: 2rem;
--text-3xl: 2.5rem;
--text-4xl: 3rem;
--text-5xl: 3.75rem;
/* space */
--space-1: 5px;
--space-2: 10px;
--space-3: 15px;
--space-4: 20px;
--space-6: 30px;
--space-8: 40px;
--space-12: 50px;
--space-16: 60px;
--space-24: 80px;
/* ease */
--ease-standard: ease-in-out;
/* extra: the signature move is the 3px solid yellow focus state with a
black inset, mandated across every interactive control */
--focus-ring: 3px solid var(--color-focus);
--focus-shadow: 0 0 0 3px #0b0c0c;
}

/* ============================================================
Base component classes — GOV.UK Design System
Signature move: the yellow-on-black focus state (a thick yellow outline
with a black inset shadow) appears identically on every interactive
element — buttons, inputs, links — nothing else competes for attention.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); line-height: 1.4; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: #0b0c0c; color: #fff; border-bottom: 10px solid var(--color-accent); }
.nav a { color: #fff; }
.btn { font: 400 var(--text-base)/1.19 var(--font-sans); color: #fff;
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: #00703c; border: 2px solid transparent; box-shadow: var(--shadow-sm);
cursor: pointer; transition: box-shadow .1s var(--ease-standard); }
.btn:hover { background: #005a30; }
.btn:active { box-shadow: none; transform: translateY(2px); }
.btn:focus-visible { outline: var(--focus-ring); outline-offset: 0; box-shadow: var(--focus-shadow); color: var(--color-text); background: var(--color-focus); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); }
.card { background: var(--color-bg); border-left: 5px solid var(--color-accent);
border-radius: var(--radius-lg); padding: var(--space-4) var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: var(--color-bg); border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: var(--focus-ring); outline-offset: 0; box-shadow: var(--focus-shadow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-sm); font-weight: 700;
padding: .2em .6em; border-radius: var(--radius-pill); background: var(--color-surface);
border: 1px solid var(--color-border); color: var(--color-text); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/govuk-design.md */
```

## Design System Variables

```css
--bg: #ffffff, --fg: #0b0c0c, --accent: #00703c, --surface: #f3f2f1, --radius: 0px, --spacing: 20px, --font-display: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif, --font-body: 'GDS Transport', 'Helvetica Neue', Arial, sans-serif
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

[![U.S. Web Design System](https://designmd.app/images/library/745.png) Claude Artisan · Flat, material & plataformas ### U.S. Web Design System](https://designmd.app/library/uswds)[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)

Last synced: 8/30/2026
