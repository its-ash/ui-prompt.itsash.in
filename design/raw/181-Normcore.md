# Normcore

- Source: <https://designmd.app/library/normcore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:04.306Z

Claude Artisan · Subculturas & estéticas de nicho2013–present

# Normcore

Reference for subculturas & estéticas de nicho Normcore. Deliberate unremarkable ordinariness (K-Hole 2013).

Normcoreanti-fashion minimalNeutral, generic, unbranded plainnessBeige/gray/denim ordinarinessAnti-trend, blends inComfort over statementniche

Use case: composição editorial com grade tipográfica; Neutral, generic, unbranded plainness; Beige/gray/denim ordinariness

![Normcore](https://designmd.app/images/library/690.png)

## Historical Context

Deliberate unremarkable ordinariness (K-Hole 2013). Example: Normcore fashion editorials..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Normcore"
description: "Normcore visual system, translated from the Claude Artisan catalog for use in digital products. Neutral, generic, unbranded plainness; Beige/gray/denim ordinariness"
colors:
primary: "#4a5568"
background: "#e9e7e2"
surface: "#f5f4f1"
text: "#2f2e2b"
accent: "#7c8a99"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "6px"
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

Normcore visual system, translated from the Claude Artisan catalog for use in digital products. Neutral, generic, unbranded plainness; Beige/gray/denim ordinariness

- **Category:** niche
- **Era:** 2013–present
- **Origin:** Deliberate unremarkable ordinariness (K-Hole 2013).
- **Reference:** Normcore fashion editorials.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Neutral, generic, unbranded plainness
- Beige/gray/denim ordinariness
- Anti-trend, blends in
- Comfort over statement

## Colors

- **bg** — #e9e7e2
- **surface** — #f5f4f1
- **surface-strong** — #dcdad4
- **border** — #b8b5ad
- **text** — #2f2e2b
- **text-muted** — #6a6862
- **primary** — #4a5568
- **accent** — #7c8a99
- **denim** — #5c7189

## Typography

- Display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif
- Body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif
- Mono: ui-monospace, 'Courier New', monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Neutral, generic, unbranded plainness; Beige/gray/denim ordinariness; Anti-trend, blends in; Comfort over statement; sombras e elevação

## Shapes

- Radius scale: 4px, 6px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/normcore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Normcore — design tokens */
/* 2013–present | Deliberate unremarkable ordinariness (K-Hole 2013), condensed */
:root {
/* color */
--color-bg: #e9e7e2;
--color-surface: #f5f4f1;
--color-surface-strong: #dcdad4;
--color-border: #b8b5ad;
--color-text: #2f2e2b;
--color-text-muted: #6a6862;
--color-primary: #4a5568;
--color-accent: #7c8a99;
--color-denim: #5c7189;
/* radius: nothing special, off-the-shelf default corners */
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow: barely there, no statement */
--shadow-sm: 0 1px 2px rgba(47,46,43,0.08);
--shadow-md: 0 2px 6px rgba(47,46,43,0.1);
--shadow-lg: 0 6px 14px rgba(47,46,43,0.12);
/* font: the most generic system stack available, on purpose */
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
--font-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
--font-mono: ui-monospace, 'Courier New', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3.25rem;
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
--ease-standard: ease;
/* extra: deliberately unbranded — no gradient, no signature texture, no
custom typeface; the "signature move" is the absence of one, expressed
as a flat denim-gray accent line reused sparingly on nav and input so
even the one accent reads as generic-utilitarian rather than a logo */
--plain-rule: 1px solid var(--color-border);
--generic-accent-line: 2px solid var(--color-denim);
}

/* ============================================================
Base component classes — normcore
Signature move: the deliberate absence of a signature move. Flat beige/
gray surfaces, a plain 1px rule (--plain-rule), and one muted denim
accent line (--generic-accent-line) reused on nav and input — anything
more would read as a "look," which normcore rejects.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--plain-rule); border-top: var(--generic-accent-line);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--plain-rule);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: background .14s var(--ease-standard), box-shadow .14s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); box-shadow: var(--shadow-md); }
.btn:active { background: var(--color-surface-strong); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-denim); color: #f5f4f1; border-color: var(--color-denim); }
.card {
background: var(--color-surface); border: var(--plain-rule);
border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--plain-rule); border-left: var(--generic-accent-line);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(124,138,153,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-text-muted); border: var(--plain-rule); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/normcore.md */
```

### Variables

```
--bg: #e9e7e2, --fg: #2f2e2b, --accent: #4a5568, --surface: #f5f4f1, --radius: 6px, --spacing: 16px, --font-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif, --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#e9e7e2

#f5f4f1

#dcdad4

#b8b5ad

Secondary

#2f2e2b

#6a6862

#4a5568

#7c8a99

#5c7189

### Effects

Neutral, generic, unbranded plainness, Beige/gray/denim ordinariness, Anti-trend, blends in, Comfort over statement, shadow

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

- **Name:** Normcore
- **Type:** claude-artisan/niche
- **Keywords:** Normcore, anti-fashion minimal, Neutral, generic, unbranded plainness, Beige/gray/denim ordinariness, Anti-trend, blends in, Comfort over statement, niche
- **Era:** 2013–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #e9e7e2, surface: #f5f4f1, surface-strong: #dcdad4, border: #b8b5ad
- **Secondary:** text: #2f2e2b, text-muted: #6a6862, primary: #4a5568, accent: #7c8a99, denim: #5c7189

## Visual Effects

Neutral, generic, unbranded plainness, Beige/gray/denim ordinariness, Anti-trend, blends in, Comfort over statement, shadow

## AI Visual Direction

Normcore, Neutral, generic, unbranded plainness, Beige/gray/denim ordinariness, Anti-trend, blends in, Comfort over statement, Normcore fashion editorials.

## CSS Technical

```css
/* Normcore — design tokens */
/* 2013–present | Deliberate unremarkable ordinariness (K-Hole 2013), condensed */
:root {
/* color */
--color-bg: #e9e7e2;
--color-surface: #f5f4f1;
--color-surface-strong: #dcdad4;
--color-border: #b8b5ad;
--color-text: #2f2e2b;
--color-text-muted: #6a6862;
--color-primary: #4a5568;
--color-accent: #7c8a99;
--color-denim: #5c7189;
/* radius: nothing special, off-the-shelf default corners */
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow: barely there, no statement */
--shadow-sm: 0 1px 2px rgba(47,46,43,0.08);
--shadow-md: 0 2px 6px rgba(47,46,43,0.1);
--shadow-lg: 0 6px 14px rgba(47,46,43,0.12);
/* font: the most generic system stack available, on purpose */
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
--font-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
--font-mono: ui-monospace, 'Courier New', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3.25rem;
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
--ease-standard: ease;
/* extra: deliberately unbranded — no gradient, no signature texture, no
custom typeface; the "signature move" is the absence of one, expressed
as a flat denim-gray accent line reused sparingly on nav and input so
even the one accent reads as generic-utilitarian rather than a logo */
--plain-rule: 1px solid var(--color-border);
--generic-accent-line: 2px solid var(--color-denim);
}

/* ============================================================
Base component classes — normcore
Signature move: the deliberate absence of a signature move. Flat beige/
gray surfaces, a plain 1px rule (--plain-rule), and one muted denim
accent line (--generic-accent-line) reused on nav and input — anything
more would read as a "look," which normcore rejects.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--plain-rule); border-top: var(--generic-accent-line);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--plain-rule);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: background .14s var(--ease-standard), box-shadow .14s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); box-shadow: var(--shadow-md); }
.btn:active { background: var(--color-surface-strong); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-denim); color: #f5f4f1; border-color: var(--color-denim); }
.card {
background: var(--color-surface); border: var(--plain-rule);
border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--plain-rule); border-left: var(--generic-accent-line);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(124,138,153,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-text-muted); border: var(--plain-rule); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/normcore.md */
```

## Design System Variables

```css
--bg: #e9e7e2, --fg: #2f2e2b, --accent: #4a5568, --surface: #f5f4f1, --radius: 6px, --spacing: 16px, --font-display: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif, --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif
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

[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)[![Monochrome](https://designmd.app/images/library/439.png) Minimalismo & Swiss ### Monochrome](https://designmd.app/library/monochrome)

Last synced: 8/30/2026
