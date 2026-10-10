# Dadaist / Collage Web

- Source: <https://designmd.app/library/dadaist-web>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:51.304Z

Claude Artisan · Brutalismo & anti-design2015–present (from 1916 Dada)

# Dadaist / Collage Web

Reference for brutalismo & anti-design Dadaist / Collage Web. Digital revival of Dada photomontage and chance-based layout.

Dadaist / Collage Webdada webcollage UICut-and-paste photomontage, ransom-note typeAbsurd juxtaposition and chaosMixed media scraps and stickersAnti-rational compositionbrutalist

Use case: composição editorial com grade tipográfica; Cut-and-paste photomontage, ransom-note type; Absurd juxtaposition and chaos

![Dadaist / Collage Web](https://designmd.app/images/library/614.png)

## Historical Context

Digital revival of Dada photomontage and chance-based layout. Example: Art-school microsites; fashion editorial pages..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Dadaist / Collage Web"
description: "Dadaist / Collage Web visual system, translated from the Claude Artisan catalog for use in digital products. Cut-and-paste photomontage, ransom-note type; Absurd juxtaposition and chaos"
colors:
primary: "#ff3b30"
background: "#fff6ea"
surface: "#ffffff"
text: "#101010"
accent: "#0043ff"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Times New Roman', 'Georgia', serif"
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
lg: "3px"
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

Dadaist / Collage Web visual system, translated from the Claude Artisan catalog for use in digital products. Cut-and-paste photomontage, ransom-note type; Absurd juxtaposition and chaos

- **Category:** brutalist
- **Era:** 2015–present (from 1916 Dada)
- **Origin:** Digital revival of Dada photomontage and chance-based layout.
- **Reference:** Art-school microsites; fashion editorial pages.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Cut-and-paste photomontage, ransom-note type
- Absurd juxtaposition and chaos
- Mixed media scraps and stickers
- Anti-rational composition

## Colors

- **bg** — #fff6ea
- **surface** — #ffffff
- **surface-strong** — #ffe37a
- **border** — #101010
- **text** — #101010
- **text-muted** — #514c3f
- **primary** — #ff3b30
- **accent** — #0043ff
- **sticker** — #34c759
- **scrap-shadow** — rgba(16, 16, 16, 0.9)

## Typography

- Display: 'Times New Roman', 'Georgia', serif
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Cut-and-paste photomontage, ransom-note type; Absurd juxtaposition and chaos; Mixed media scraps and stickers; Anti-rational composition; sombras e elevação

## Shapes

- Radius scale: 0px, 2px, 3px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/dadaist-web/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Dadaist / Collage Web — design tokens */
/* 2015–present (from 1916 Dada) | Digital revival of Dada photomontage and chance-based layout, condensed */
:root {
/* color */
--color-bg: #fff6ea;
--color-surface: #ffffff;
--color-surface-strong: #ffe37a;
--color-border: #101010;
--color-text: #101010;
--color-text-muted: #514c3f;
--color-primary: #ff3b30;
--color-accent: #0043ff;
--color-sticker: #34c759;
--color-scrap-shadow: rgba(16, 16, 16, 0.9);
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 3px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-scrap-shadow);
--shadow-md: 6px 6px 0 var(--color-scrap-shadow);
--shadow-lg: 9px 9px 0 var(--color-scrap-shadow);
/* font */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Times New Roman', 'Georgia', serif;
--font-stamp: 'Courier New', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: sticker-scrap rotation set + cut-edge scrap border */
--scrap-rotate-1: rotate(-2.2deg);
--scrap-rotate-2: rotate(1.8deg);
--scrap-rotate-3: rotate(-0.7deg);
--cutout-border: 2px solid var(--color-border);
}

/* ============================================================
Base component classes — Dadaist / Collage Web
Signature move: pasted-sticker scraps — hard black outline, flat
offset shadow, slight random rotation — repeated on nav, card, badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: var(--cutout-border); box-shadow: var(--shadow-sm); transform: var(--scrap-rotate-3); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: var(--cutout-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: var(--scrap-rotate-2) translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: none; box-shadow: 1px 1px 0 var(--color-scrap-shadow); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card {
background: var(--color-surface); border: var(--cutout-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-lg); padding: var(--space-6); transform: var(--scrap-rotate-1);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--cutout-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-stamp);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-sticker);
color: #101010; border: var(--cutout-border); transform: var(--scrap-rotate-2); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dadaist-web.md */
```

### Variables

```
--bg: #fff6ea, --fg: #101010, --accent: #ff3b30, --surface: #ffffff, --radius: 2px, --spacing: 16px, --font-display: 'Times New Roman', 'Georgia', serif, --font-body: 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fff6ea

#ffffff

#ffe37a

#101010

Secondary

#101010

#514c3f

#ff3b30

#0043ff

#34c759

### Effects

Cut-and-paste photomontage, ransom-note type, Absurd juxtaposition and chaos, Mixed media scraps and stickers, Anti-rational composition, shadow

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

- **Name:** Dadaist / Collage Web
- **Type:** claude-artisan/brutalist
- **Keywords:** Dadaist / Collage Web, dada web, collage UI, Cut-and-paste photomontage, ransom-note type, Absurd juxtaposition and chaos, Mixed media scraps and stickers, Anti-rational composition, brutalist
- **Era:** 2015–present (from 1916 Dada)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fff6ea, surface: #ffffff, surface-strong: #ffe37a, border: #101010
- **Secondary:** text: #101010, text-muted: #514c3f, primary: #ff3b30, accent: #0043ff, sticker: #34c759, scrap-shadow: rgba(16, 16, 16, 0.9)

## Visual Effects

Cut-and-paste photomontage, ransom-note type, Absurd juxtaposition and chaos, Mixed media scraps and stickers, Anti-rational composition, shadow

## AI Visual Direction

Dadaist / Collage Web, Cut-and-paste photomontage, ransom-note type, Absurd juxtaposition and chaos, Mixed media scraps and stickers, Anti-rational composition, Art-school microsites; fashion editorial pages.

## CSS Technical

```css
/* Dadaist / Collage Web — design tokens */
/* 2015–present (from 1916 Dada) | Digital revival of Dada photomontage and chance-based layout, condensed */
:root {
/* color */
--color-bg: #fff6ea;
--color-surface: #ffffff;
--color-surface-strong: #ffe37a;
--color-border: #101010;
--color-text: #101010;
--color-text-muted: #514c3f;
--color-primary: #ff3b30;
--color-accent: #0043ff;
--color-sticker: #34c759;
--color-scrap-shadow: rgba(16, 16, 16, 0.9);
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 3px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-scrap-shadow);
--shadow-md: 6px 6px 0 var(--color-scrap-shadow);
--shadow-lg: 9px 9px 0 var(--color-scrap-shadow);
/* font */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Times New Roman', 'Georgia', serif;
--font-stamp: 'Courier New', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: sticker-scrap rotation set + cut-edge scrap border */
--scrap-rotate-1: rotate(-2.2deg);
--scrap-rotate-2: rotate(1.8deg);
--scrap-rotate-3: rotate(-0.7deg);
--cutout-border: 2px solid var(--color-border);
}

/* ============================================================
Base component classes — Dadaist / Collage Web
Signature move: pasted-sticker scraps — hard black outline, flat
offset shadow, slight random rotation — repeated on nav, card, badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: var(--cutout-border); box-shadow: var(--shadow-sm); transform: var(--scrap-rotate-3); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: var(--cutout-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: var(--scrap-rotate-2) translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: none; box-shadow: 1px 1px 0 var(--color-scrap-shadow); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card {
background: var(--color-surface); border: var(--cutout-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-lg); padding: var(--space-6); transform: var(--scrap-rotate-1);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--cutout-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-stamp);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-sticker);
color: #101010; border: var(--cutout-border); transform: var(--scrap-rotate-2); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dadaist-web.md */
```

## Design System Variables

```css
--bg: #fff6ea, --fg: #101010, --accent: #ff3b30, --surface: #ffffff, --radius: 2px, --spacing: 16px, --font-display: 'Times New Roman', 'Georgia', serif, --font-body: 'Helvetica Neue', Arial, sans-serif
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

[![Anti-Design](https://designmd.app/images/library/575.png) Claude Artisan · Brutalismo & anti-design ### Anti-Design](https://designmd.app/library/anti-design)[![Punk Zine / Cut-and-Paste](https://designmd.app/images/library/705.png) Claude Artisan · Movimentos históricos ### Punk Zine / Cut-and-Paste](https://designmd.app/library/punk-zine)

Last synced: 8/30/2026
