# Typography-Driven

- Source: <https://designmd.app/library/typographic>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:36.316Z

Claude Artisan · Minimal, maximal & orgânicoTimeless (revival 2018+)

# Typography-Driven

Reference for minimal, maximal & orgânico Typography-Driven. Type-as-hero editorial approach.

Typography-Driventype-onlytypographic layoutbig typeOversized expressive typography as the designMinimal imagery; type carries everythingVariable fonts, kinetic typeBold, confident, editorialminimal-organic

Use case: composição editorial com grade tipográfica; Oversized expressive typography as the design; Minimal imagery; type carries everything

![Typography-Driven](https://designmd.app/images/library/743.png)

## Historical Context

Type-as-hero editorial approach. Example: Type-foundry sites; award-winning agency landings..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Typography-Driven"
description: "Typography-Driven visual system, translated from the Claude Artisan catalog for use in digital products. Oversized expressive typography as the design; Minimal imagery; type carries everything"
colors:
primary: "#0f0f0f"
background: "#f4f4f0"
surface: "#ffffff"
text: "#0f0f0f"
accent: "#ff3d00"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Söhne', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif"
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

Typography-Driven visual system, translated from the Claude Artisan catalog for use in digital products. Oversized expressive typography as the design; Minimal imagery; type carries everything

- **Category:** minimal-organic
- **Era:** Timeless (revival 2018+)
- **Origin:** Type-as-hero editorial approach.
- **Reference:** Type-foundry sites; award-winning agency landings.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Oversized expressive typography as the design
- Minimal imagery; type carries everything
- Variable fonts, kinetic type
- Bold, confident, editorial

## Colors

- **bg** — #f4f4f0
- **surface** — #ffffff
- **surface-strong** — #eaeae4
- **border** — #0f0f0f
- **text** — #0f0f0f
- **text-muted** — #55554e
- **primary** — #0f0f0f
- **accent** — #ff3d00

## Typography

- Display: 'Söhne', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif
- Body: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Oversized expressive typography as the design; Minimal imagery; type carries everything; Variable fonts, kinetic type; Bold, confident, editorial; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/typographic/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Typography-Driven — design tokens */
/* Timeless (revival 2018+) | Type-as-hero editorial approach, condensed */
:root {
/* color */
--color-bg: #f4f4f0;
--color-surface: #ffffff;
--color-surface-strong: #eaeae4;
--color-border: #0f0f0f;
--color-text: #0f0f0f;
--color-text-muted: #55554e;
--color-primary: #0f0f0f;
--color-accent: #ff3d00;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Söhne', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif;
--font-mono: ui-monospace, monospace;
/* text — exaggerated jumps: type IS the design */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.25rem;
--text-xl: 1.75rem;
--text-2xl: 2.75rem;
--text-3xl: 4.25rem;
--text-4xl: 6.5rem;
--text-5xl: 9rem;
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
/* extra: negative letter-spacing on display type + a single accent-color
underline rule is the entire ornament budget — type carries everything */
--tight-tracking: -0.03em;
--rule: 3px solid var(--color-text);
}

/* ============================================================
Base component classes — typographic
Signature move: oversized, tightly-tracked display type used as the primary
visual element itself, with a single bold rule underlining key surfaces —
no imagery, no gradients, no shadow. Type repeats as the ornament on nav,
card headings, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-6); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border-bottom: var(--rule);
font-family: var(--font-display); letter-spacing: var(--tight-tracking); }
.btn {
font: 700 var(--text-lg)/1 var(--font-display); letter-spacing: var(--tight-tracking); color: var(--color-bg);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-primary); border: none; cursor: pointer;
transition: opacity .15s var(--ease-standard);
}
.btn:hover { opacity: .8; }
.btn:active { opacity: .65; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .35; cursor: not-allowed; }
.btn--primary { background: var(--color-accent); color: var(--color-text); }
.card {
background: var(--color-surface); border-top: var(--rule);
padding: var(--space-6) 0;
}
.card h3 { font-family: var(--font-display); letter-spacing: var(--tight-tracking); font-size: var(--text-2xl); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-xl) var(--font-display);
letter-spacing: var(--tight-tracking); padding: var(--space-3) 0; background: transparent;
border: none; border-bottom: var(--rule); border-radius: 0;
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-accent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-display);
letter-spacing: .08em; text-transform: uppercase; padding: .4em 1em; border-radius: 0;
background: var(--color-text); color: var(--color-bg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/typographic.md */
```

### Variables

```
--bg: #f4f4f0, --fg: #0f0f0f, --accent: #0f0f0f, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Söhne', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif, --font-body: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f4f4f0

#ffffff

#eaeae4

#0f0f0f

Secondary

#0f0f0f

#55554e

#ff3d00

### Effects

Oversized expressive typography as the design, Minimal imagery; type carries everything, Variable fonts, kinetic type, Bold, confident, editorial, shadow

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

- **Name:** Typography-Driven
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Typography-Driven, type-only, typographic layout, big type, Oversized expressive typography as the design, Minimal imagery; type carries everything, Variable fonts, kinetic type, Bold, confident, editorial, minimal-organic
- **Era:** Timeless (revival 2018+)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f4f4f0, surface: #ffffff, surface-strong: #eaeae4, border: #0f0f0f
- **Secondary:** text: #0f0f0f, text-muted: #55554e, primary: #0f0f0f, accent: #ff3d00

## Visual Effects

Oversized expressive typography as the design, Minimal imagery; type carries everything, Variable fonts, kinetic type, Bold, confident, editorial, shadow

## AI Visual Direction

Typography-Driven, Oversized expressive typography as the design, Minimal imagery; type carries everything, Variable fonts, kinetic type, Bold, confident, editorial, Type-foundry sites; award-winning agency landings.

## CSS Technical

```css
/* Typography-Driven — design tokens */
/* Timeless (revival 2018+) | Type-as-hero editorial approach, condensed */
:root {
/* color */
--color-bg: #f4f4f0;
--color-surface: #ffffff;
--color-surface-strong: #eaeae4;
--color-border: #0f0f0f;
--color-text: #0f0f0f;
--color-text-muted: #55554e;
--color-primary: #0f0f0f;
--color-accent: #ff3d00;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Söhne', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif;
--font-mono: ui-monospace, monospace;
/* text — exaggerated jumps: type IS the design */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.25rem;
--text-xl: 1.75rem;
--text-2xl: 2.75rem;
--text-3xl: 4.25rem;
--text-4xl: 6.5rem;
--text-5xl: 9rem;
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
/* extra: negative letter-spacing on display type + a single accent-color
underline rule is the entire ornament budget — type carries everything */
--tight-tracking: -0.03em;
--rule: 3px solid var(--color-text);
}

/* ============================================================
Base component classes — typographic
Signature move: oversized, tightly-tracked display type used as the primary
visual element itself, with a single bold rule underlining key surfaces —
no imagery, no gradients, no shadow. Type repeats as the ornament on nav,
card headings, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-6); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border-bottom: var(--rule);
font-family: var(--font-display); letter-spacing: var(--tight-tracking); }
.btn {
font: 700 var(--text-lg)/1 var(--font-display); letter-spacing: var(--tight-tracking); color: var(--color-bg);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-primary); border: none; cursor: pointer;
transition: opacity .15s var(--ease-standard);
}
.btn:hover { opacity: .8; }
.btn:active { opacity: .65; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .35; cursor: not-allowed; }
.btn--primary { background: var(--color-accent); color: var(--color-text); }
.card {
background: var(--color-surface); border-top: var(--rule);
padding: var(--space-6) 0;
}
.card h3 { font-family: var(--font-display); letter-spacing: var(--tight-tracking); font-size: var(--text-2xl); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-xl) var(--font-display);
letter-spacing: var(--tight-tracking); padding: var(--space-3) 0; background: transparent;
border: none; border-bottom: var(--rule); border-radius: 0;
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-accent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-display);
letter-spacing: .08em; text-transform: uppercase; padding: .4em 1em; border-radius: 0;
background: var(--color-text); color: var(--color-bg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/typographic.md */
```

## Design System Variables

```css
--bg: #f4f4f0, --fg: #0f0f0f, --accent: #0f0f0f, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Söhne', 'Neue Haas Grotesk Display', 'Helvetica Neue', sans-serif, --font-body: 'Neue Haas Grotesk', 'Helvetica Neue', Arial, sans-serif
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
