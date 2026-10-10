# Postmodern Graphic Design

- Source: <https://designmd.app/library/postmodernism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:23.307Z

Claude Artisan · Movimentos históricos1970s–1990s

# Postmodern Graphic Design

Reference for movimentos históricos Postmodern Graphic Design. Reaction to Modernism (Wolfgang Weingart, April Greiman, David Carson).

Postmodern Graphic Designpostmodern designRejects rigid grid and objectivityLayering, collage, historical pastiche, ironyMixed type, texture, decorationExpressive and subjectivehistorical

Use case: grade modular responsiva; Rejects rigid grid and objectivity; Layering, collage, historical pastiche, irony

![Postmodern Graphic Design](https://designmd.app/images/library/700.png)

## Historical Context

Reaction to Modernism (Wolfgang Weingart, April Greiman, David Carson). Example: Emigre magazine; MTV identity; Cranbrook work..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Postmodern Graphic Design"
description: "Postmodern Graphic Design visual system, translated from the Claude Artisan catalog for use in digital products. Rejects rigid grid and objectivity; Layering, collage, historical pastiche, irony"
colors:
primary: "#e0247a"
background: "#efe9df"
surface: "#ffffff"
text: "#17171a"
accent: "#2b6df0"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "Georgia, 'Times New Roman', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', Arial, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "2px"
lg: "16px"
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

Postmodern Graphic Design visual system, translated from the Claude Artisan catalog for use in digital products. Rejects rigid grid and objectivity; Layering, collage, historical pastiche, irony

- **Category:** historical
- **Era:** 1970s–1990s
- **Origin:** Reaction to Modernism (Wolfgang Weingart, April Greiman, David Carson).
- **Reference:** Emigre magazine; MTV identity; Cranbrook work.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Rejects rigid grid and objectivity
- Layering, collage, historical pastiche, irony
- Mixed type, texture, decoration
- Expressive and subjective

## Colors

- **bg** — #efe9df
- **surface** — #ffffff
- **surface-strong** — #fff2b8
- **border** — #17171a
- **text** — #17171a
- **text-muted** — #514f52
- **primary** — #e0247a
- **accent** — #2b6df0
- **clash** — #ffce00

## Typography

- Display: Georgia, 'Times New Roman', serif
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rejects rigid grid and objectivity; Layering, collage, historical pastiche, irony; Mixed type, texture, decoration; Expressive and subjective; sombras e elevação

## Shapes

- Radius scale: 0px, 2px, 999px 4px 999px 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/postmodernism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Postmodern Graphic Design — design tokens */
/* 1970s–1990s | Reaction to Modernism (Wolfgang Weingart, April Greiman, David Carson), condensed */
:root {
/* color: clashing, ironic, layered */
--color-bg: #efe9df;
--color-surface: #ffffff;
--color-surface-strong: #fff2b8;
--color-border: #17171a;
--color-text: #17171a;
--color-text-muted: #514f52;
--color-primary: #e0247a;
--color-accent: #2b6df0;
--color-clash: #ffce00;
/* radius: irregular, intentionally inconsistent */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 999px 4px 999px 4px;
--radius-pill: 999px;
/* shadow: layered collage offset shadow */
--shadow-sm: 3px 3px 0 var(--color-primary);
--shadow-md: 6px 6px 0 var(--color-accent);
--shadow-lg: 9px 9px 0 var(--color-clash);
/* font: mixed, clashing type families */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: Georgia, 'Times New Roman', serif;
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
--ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55);
/* extra: layered rotated collage border, mixed-type headline treatment */
--collage-tilt: -1.2deg;
--overprint-texture: repeating-linear-gradient(45deg, rgba(23,23,26,0.04) 0 2px, transparent 2px 6px);
}

/* ============================================================
Base component classes — Postmodern Graphic Design
Signature move: layered offset "collage" shadow (a solid color block behind
the surface, not a blur) plus a slight rotation, repeated on card, btn, and nav.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg) var(--overprint-texture); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: rotate(var(--collage-tilt)) translate(-2px, -2px); box-shadow: var(--shadow-md); }
.btn:active { transform: none; box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px dashed var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff; border-color: var(--color-border); }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
border: 2px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6);
transform: rotate(-0.6deg);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-clash); color: #17171a;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/postmodernism.md */
```

### Variables

```
--bg: #efe9df, --fg: #17171a, --accent: #e0247a, --surface: #ffffff, --radius: 2px, --spacing: 16px, --font-display: Georgia, 'Times New Roman', serif, --font-body: 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#efe9df

#ffffff

#fff2b8

#17171a

Secondary

#17171a

#514f52

#e0247a

#2b6df0

#ffce00

### Effects

Rejects rigid grid and objectivity, Layering, collage, historical pastiche, irony, Mixed type, texture, decoration, Expressive and subjective, shadow

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

- **Name:** Postmodern Graphic Design
- **Type:** claude-artisan/historical
- **Keywords:** Postmodern Graphic Design, postmodern design, Rejects rigid grid and objectivity, Layering, collage, historical pastiche, irony, Mixed type, texture, decoration, Expressive and subjective, historical
- **Era:** 1970s–1990s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #efe9df, surface: #ffffff, surface-strong: #fff2b8, border: #17171a
- **Secondary:** text: #17171a, text-muted: #514f52, primary: #e0247a, accent: #2b6df0, clash: #ffce00

## Visual Effects

Rejects rigid grid and objectivity, Layering, collage, historical pastiche, irony, Mixed type, texture, decoration, Expressive and subjective, shadow

## AI Visual Direction

Postmodern Graphic Design, Rejects rigid grid and objectivity, Layering, collage, historical pastiche, irony, Mixed type, texture, decoration, Expressive and subjective, Emigre magazine; MTV identity; Cranbrook work.

## CSS Technical

```css
/* Postmodern Graphic Design — design tokens */
/* 1970s–1990s | Reaction to Modernism (Wolfgang Weingart, April Greiman, David Carson), condensed */
:root {
/* color: clashing, ironic, layered */
--color-bg: #efe9df;
--color-surface: #ffffff;
--color-surface-strong: #fff2b8;
--color-border: #17171a;
--color-text: #17171a;
--color-text-muted: #514f52;
--color-primary: #e0247a;
--color-accent: #2b6df0;
--color-clash: #ffce00;
/* radius: irregular, intentionally inconsistent */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 999px 4px 999px 4px;
--radius-pill: 999px;
/* shadow: layered collage offset shadow */
--shadow-sm: 3px 3px 0 var(--color-primary);
--shadow-md: 6px 6px 0 var(--color-accent);
--shadow-lg: 9px 9px 0 var(--color-clash);
/* font: mixed, clashing type families */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: Georgia, 'Times New Roman', serif;
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
--ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55);
/* extra: layered rotated collage border, mixed-type headline treatment */
--collage-tilt: -1.2deg;
--overprint-texture: repeating-linear-gradient(45deg, rgba(23,23,26,0.04) 0 2px, transparent 2px 6px);
}

/* ============================================================
Base component classes — Postmodern Graphic Design
Signature move: layered offset "collage" shadow (a solid color block behind
the surface, not a blur) plus a slight rotation, repeated on card, btn, and nav.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg) var(--overprint-texture); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: rotate(var(--collage-tilt)) translate(-2px, -2px); box-shadow: var(--shadow-md); }
.btn:active { transform: none; box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px dashed var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff; border-color: var(--color-border); }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
border: 2px solid var(--color-border); box-shadow: var(--shadow-md); padding: var(--space-6);
transform: rotate(-0.6deg);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-clash); color: #17171a;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/postmodernism.md */
```

## Design System Variables

```css
--bg: #efe9df, --fg: #17171a, --accent: #e0247a, --surface: #ffffff, --radius: 2px, --spacing: 16px, --font-display: Georgia, 'Times New Roman', serif, --font-body: 'Helvetica Neue', Arial, sans-serif
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

[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)[![Swiss Punk / New Wave](https://designmd.app/images/library/731.png) Claude Artisan · Brutalismo & anti-design ### Swiss Punk / New Wave](https://designmd.app/library/swiss-punk)

Last synced: 8/30/2026
