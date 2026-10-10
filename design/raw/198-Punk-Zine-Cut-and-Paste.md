# Punk Zine / Cut-and-Paste

- Source: <https://designmd.app/library/punk-zine>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:31.307Z

Claude Artisan · Movimentos históricos1976–1985

# Punk Zine / Cut-and-Paste

Reference for movimentos históricos Punk Zine / Cut-and-Paste. UK/US punk subculture (Jamie Reid, Sex Pistols).

Punk Zine / Cut-and-Pastezineransom noteDIY punkPhotocopied, torn, cut-and-paste collageRansom-note lettering from clippingsHigh-contrast xerox degradationAnti-authority DIY energyhistorical

Use case: hero, superfície, conteúdo e grade responsiva; Photocopied, torn, cut-and-paste collage; Ransom-note lettering from clippings

![Punk Zine / Cut-and-Paste](https://designmd.app/images/library/705.png)

## Historical Context

UK/US punk subculture (Jamie Reid, Sex Pistols). Example: Jamie Reid Sex Pistols 'God Save the Queen'; punk fanzines..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Punk Zine / Cut-and-Paste"
description: "Punk Zine / Cut-and-Paste visual system, translated from the Claude Artisan catalog for use in digital products. Photocopied, torn, cut-and-paste collage; Ransom-note lettering from clippings"
colors:
primary: "#e60023"
background: "#efefe8"
surface: "#ffffff"
text: "#0d0d0d"
accent: "#f5d000"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Times New Roman', Georgia, serif"
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

Punk Zine / Cut-and-Paste visual system, translated from the Claude Artisan catalog for use in digital products. Photocopied, torn, cut-and-paste collage; Ransom-note lettering from clippings

- **Category:** historical
- **Era:** 1976–1985
- **Origin:** UK/US punk subculture (Jamie Reid, Sex Pistols).
- **Reference:** Jamie Reid Sex Pistols 'God Save the Queen'; punk fanzines.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Photocopied, torn, cut-and-paste collage
- Ransom-note lettering from clippings
- High-contrast xerox degradation
- Anti-authority DIY energy

## Colors

- **bg** — #efefe8
- **surface** — #ffffff
- **surface-strong** — #f5f2e6
- **border** — #0d0d0d
- **text** — #0d0d0d
- **text-muted** — #3d3d3a
- **primary** — #e60023
- **accent** — #f5d000
- **tape** — rgba(245, 208, 0, 0.55)

## Typography

- Display: 'Times New Roman', Georgia, serif
- Body: Arial, 'Helvetica Neue', sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Photocopied, torn, cut-and-paste collage; Ransom-note lettering from clippings; High-contrast xerox degradation; Anti-authority DIY energy; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/punk-zine/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Punk Zine / Cut-and-Paste — design tokens */
/* 1976–1985 | UK/US punk subculture (Jamie Reid, Sex Pistols), condensed */
:root {
/* color: high-contrast xerox degradation */
--color-bg: #efefe8;
--color-surface: #ffffff;
--color-surface-strong: #f5f2e6;
--color-border: #0d0d0d;
--color-text: #0d0d0d;
--color-text-muted: #3d3d3a;
--color-primary: #e60023;
--color-accent: #f5d000;
--color-tape: rgba(245, 208, 0, 0.55);
/* radius: none, torn scraps aren't rounded */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow: hard xerox offset, no blur */
--shadow-sm: 3px 3px 0 #0d0d0d;
--shadow-md: 5px 5px 0 #0d0d0d;
--shadow-lg: 8px 8px 0 #0d0d0d;
/* font: ransom-note mixed clippings */
--font-sans: Arial, 'Helvetica Neue', sans-serif;
--font-display: 'Times New Roman', Georgia, serif;
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
--ease-standard: steps(3, end);
/* extra: xerox noise texture + ransom-note letter jitter */
--xerox-noise: repeating-linear-gradient(0deg, rgba(13,13,13,0.05) 0px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(13,13,13,0.03) 0px, transparent 1px, transparent 4px);
--tape-strip: linear-gradient(var(--color-tape), var(--color-tape));
}

/* ============================================================
Base component classes — Punk Zine / Cut-and-Paste
Signature move: hard black offset shadow (no blur) simulating a photocopied
cut-out taped to the page, repeated on nav, card and btn, plus a xerox
grain texture across the body.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg) var(--xerox-noise); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 2px solid var(--color-border); box-shadow: var(--shadow-sm); transform: rotate(-0.4deg);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text); letter-spacing: .02em;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .1s var(--ease-standard), box-shadow .1s var(--ease-standard);
}
.btn:hover { transform: translate(-2px, -2px) rotate(1deg); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 #0d0d0d; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card {
position: relative; background: var(--color-surface); border-radius: var(--radius-lg);
border: 2px solid var(--color-border); box-shadow: var(--shadow-lg); padding: var(--space-6);
transform: rotate(0.7deg);
}
.card::before {
content: ""; position: absolute; top: -10px; left: 24px; width: 60px; height: 20px;
background: var(--tape-strip); transform: rotate(-3deg);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-accent); color: #0d0d0d;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/punk-zine.md */
```

### Variables

```
--bg: #efefe8, --fg: #0d0d0d, --accent: #e60023, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Times New Roman', Georgia, serif, --font-body: Arial, 'Helvetica Neue', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#efefe8

#ffffff

#f5f2e6

#0d0d0d

Secondary

#0d0d0d

#3d3d3a

#e60023

#f5d000

### Effects

Photocopied, torn, cut-and-paste collage, Ransom-note lettering from clippings, High-contrast xerox degradation, Anti-authority DIY energy, shadow

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

- **Name:** Punk Zine / Cut-and-Paste
- **Type:** claude-artisan/historical
- **Keywords:** Punk Zine / Cut-and-Paste, zine, ransom note, DIY punk, Photocopied, torn, cut-and-paste collage, Ransom-note lettering from clippings, High-contrast xerox degradation, Anti-authority DIY energy, historical
- **Era:** 1976–1985
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #efefe8, surface: #ffffff, surface-strong: #f5f2e6, border: #0d0d0d
- **Secondary:** text: #0d0d0d, text-muted: #3d3d3a, primary: #e60023, accent: #f5d000, tape: rgba(245, 208, 0, 0.55)

## Visual Effects

Photocopied, torn, cut-and-paste collage, Ransom-note lettering from clippings, High-contrast xerox degradation, Anti-authority DIY energy, shadow

## AI Visual Direction

Punk Zine / Cut-and-Paste, Photocopied, torn, cut-and-paste collage, Ransom-note lettering from clippings, High-contrast xerox degradation, Anti-authority DIY energy, Jamie Reid Sex Pistols 'God Save the Queen'; punk fanzines.

## CSS Technical

```css
/* Punk Zine / Cut-and-Paste — design tokens */
/* 1976–1985 | UK/US punk subculture (Jamie Reid, Sex Pistols), condensed */
:root {
/* color: high-contrast xerox degradation */
--color-bg: #efefe8;
--color-surface: #ffffff;
--color-surface-strong: #f5f2e6;
--color-border: #0d0d0d;
--color-text: #0d0d0d;
--color-text-muted: #3d3d3a;
--color-primary: #e60023;
--color-accent: #f5d000;
--color-tape: rgba(245, 208, 0, 0.55);
/* radius: none, torn scraps aren't rounded */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow: hard xerox offset, no blur */
--shadow-sm: 3px 3px 0 #0d0d0d;
--shadow-md: 5px 5px 0 #0d0d0d;
--shadow-lg: 8px 8px 0 #0d0d0d;
/* font: ransom-note mixed clippings */
--font-sans: Arial, 'Helvetica Neue', sans-serif;
--font-display: 'Times New Roman', Georgia, serif;
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
--ease-standard: steps(3, end);
/* extra: xerox noise texture + ransom-note letter jitter */
--xerox-noise: repeating-linear-gradient(0deg, rgba(13,13,13,0.05) 0px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(13,13,13,0.03) 0px, transparent 1px, transparent 4px);
--tape-strip: linear-gradient(var(--color-tape), var(--color-tape));
}

/* ============================================================
Base component classes — Punk Zine / Cut-and-Paste
Signature move: hard black offset shadow (no blur) simulating a photocopied
cut-out taped to the page, repeated on nav, card and btn, plus a xerox
grain texture across the body.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg) var(--xerox-noise); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 2px solid var(--color-border); box-shadow: var(--shadow-sm); transform: rotate(-0.4deg);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text); letter-spacing: .02em;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .1s var(--ease-standard), box-shadow .1s var(--ease-standard);
}
.btn:hover { transform: translate(-2px, -2px) rotate(1deg); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 #0d0d0d; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card {
position: relative; background: var(--color-surface); border-radius: var(--radius-lg);
border: 2px solid var(--color-border); box-shadow: var(--shadow-lg); padding: var(--space-6);
transform: rotate(0.7deg);
}
.card::before {
content: ""; position: absolute; top: -10px; left: 24px; width: 60px; height: 20px;
background: var(--tape-strip); transform: rotate(-3deg);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-accent); color: #0d0d0d;
border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/punk-zine.md */
```

## Design System Variables

```css
--bg: #efefe8, --fg: #0d0d0d, --accent: #e60023, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Times New Roman', Georgia, serif, --font-body: Arial, 'Helvetica Neue', sans-serif
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

[![Dada](https://designmd.app/images/library/613.png) Claude Artisan · Movimentos históricos ### Dada](https://designmd.app/library/dada)[![Grunge Design](https://designmd.app/images/library/655.png) Claude Artisan · Brutalismo & anti-design ### Grunge Design](https://designmd.app/library/grunge)

Last synced: 8/30/2026
