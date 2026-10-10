# Clowncore

- Source: <https://designmd.app/library/clowncore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:28.314Z

Claude Artisan · Subculturas & estéticas de nicho2019–present

# Clowncore

Reference for subculturas & estéticas de nicho Clowncore. Circus/clown maximal color subculture.

Clowncoreclown aestheticPrimary + rainbow clash, polka dots, stripesRuffles, checkerboard, harlequinPlayful-creepy circus motifsChaotic, loud, campyniche

Use case: hero, superfície, conteúdo e grade responsiva; Primary + rainbow clash, polka dots, stripes; Ruffles, checkerboard, harlequin

![Clowncore](https://designmd.app/images/library/600.png)

## Historical Context

Circus/clown maximal color subculture. Example: Clowncore fashion/edits..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Clowncore"
description: "Clowncore visual system, translated from the Claude Artisan catalog for use in digital products. Primary + rainbow clash, polka dots, stripes; Ruffles, checkerboard, harlequin"
colors:
primary: "#ff2d55"
background: "#fef7e0"
surface: "#ffffff"
text: "#16161d"
accent: "#ffd400"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Fredoka', 'Baloo 2', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Baloo 2', 'Comic Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Baloo 2', 'Comic Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "20px"
lg: "32px"
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

Clowncore visual system, translated from the Claude Artisan catalog for use in digital products. Primary + rainbow clash, polka dots, stripes; Ruffles, checkerboard, harlequin

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Circus/clown maximal color subculture.
- **Reference:** Clowncore fashion/edits.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Primary + rainbow clash, polka dots, stripes
- Ruffles, checkerboard, harlequin
- Playful-creepy circus motifs
- Chaotic, loud, campy

## Colors

- **bg** — #fef7e0
- **surface** — #ffffff
- **surface-strong** — #fff2f8
- **border** — #16161d
- **text** — #16161d
- **text-muted** — #514f5c
- **primary** — #ff2d55
- **accent** — #ffd400
- **blue** — #2f6fed
- **green** — #17b26a

## Typography

- Display: 'Fredoka', 'Baloo 2', system-ui, sans-serif
- Body: 'Baloo 2', 'Comic Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Primary + rainbow clash, polka dots, stripes; Ruffles, checkerboard, harlequin; Playful-creepy circus motifs; Chaotic, loud, campy; sombras e elevação

## Shapes

- Radius scale: 8px, 20px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/clowncore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Clowncore — design tokens */
/* 2019–present | Circus/clown maximal color subculture, condensed */
:root {
/* color: primary clash, chaotic and loud */
--color-bg: #fef7e0;
--color-surface: #ffffff;
--color-surface-strong: #fff2f8;
--color-border: #16161d;
--color-text: #16161d;
--color-text-muted: #514f5c;
--color-primary: #ff2d55;
--color-accent: #ffd400;
--color-blue: #2f6fed;
--color-green: #17b26a;
/* radius: bouncy circus-tent scallops */
--radius-sm: 8px;
--radius-md: 20px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font: playful rounded display */
--font-sans: 'Baloo 2', 'Comic Neue', system-ui, sans-serif;
--font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif;
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
/* ease: bouncy */
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: polka-dot texture + rainbow stripe rule, the signature move */
--polka-dots: radial-gradient(circle, var(--color-primary) 2px, transparent 2.5px);
--rainbow-stripe: linear-gradient(90deg, #ff2d55, #ffd400, #17b26a, #2f6fed, #ff2d55);
}

/* ============================================================
Base component classes — Clowncore
Signature move: a hard offset "clown shadow" (solid color, no blur)
on every raised surface, plus a polka-dot texture used repeatedly on
nav and card backgrounds — chaotic but systematic.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); background-image: var(--polka-dots);
background-size: 22px 22px; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 3px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); margin: var(--space-4); border-top: 6px solid transparent;
border-image: var(--rainbow-stripe) 1; }
.btn {
font: 800 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: 1px 1px 0 var(--color-border); }
.btn:focus-visible { outline: 3px solid var(--color-blue); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: var(--shadow-sm); }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card { background: var(--color-surface-strong); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 3px solid var(--color-border); box-shadow: var(--shadow-md);
background-image: var(--polka-dots); background-size: 18px 18px; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-blue);
box-shadow: var(--shadow-sm), 0 0 0 3px rgba(47,111,237,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-family: var(--font-display); font-weight: 800;
font-size: var(--text-xs); padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-text); border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/clowncore.md */
```

### Variables

```
--bg: #fef7e0, --fg: #16161d, --accent: #ff2d55, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif, --font-body: 'Baloo 2', 'Comic Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fef7e0

#ffffff

#fff2f8

#16161d

Secondary

#16161d

#514f5c

#ff2d55

#ffd400

#2f6fed

#17b26a

### Effects

Primary + rainbow clash, polka dots, stripes, Ruffles, checkerboard, harlequin, Playful-creepy circus motifs, Chaotic, loud, campy, shadow

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

- **Name:** Clowncore
- **Type:** claude-artisan/niche
- **Keywords:** Clowncore, clown aesthetic, Primary + rainbow clash, polka dots, stripes, Ruffles, checkerboard, harlequin, Playful-creepy circus motifs, Chaotic, loud, campy, niche
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fef7e0, surface: #ffffff, surface-strong: #fff2f8, border: #16161d
- **Secondary:** text: #16161d, text-muted: #514f5c, primary: #ff2d55, accent: #ffd400, blue: #2f6fed, green: #17b26a

## Visual Effects

Primary + rainbow clash, polka dots, stripes, Ruffles, checkerboard, harlequin, Playful-creepy circus motifs, Chaotic, loud, campy, shadow

## AI Visual Direction

Clowncore, Primary + rainbow clash, polka dots, stripes, Ruffles, checkerboard, harlequin, Playful-creepy circus motifs, Chaotic, loud, campy, Clowncore fashion/edits.

## CSS Technical

```css
/* Clowncore — design tokens */
/* 2019–present | Circus/clown maximal color subculture, condensed */
:root {
/* color: primary clash, chaotic and loud */
--color-bg: #fef7e0;
--color-surface: #ffffff;
--color-surface-strong: #fff2f8;
--color-border: #16161d;
--color-text: #16161d;
--color-text-muted: #514f5c;
--color-primary: #ff2d55;
--color-accent: #ffd400;
--color-blue: #2f6fed;
--color-green: #17b26a;
/* radius: bouncy circus-tent scallops */
--radius-sm: 8px;
--radius-md: 20px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 3px 3px 0 var(--color-border);
--shadow-md: 5px 5px 0 var(--color-border);
--shadow-lg: 8px 8px 0 var(--color-border);
/* font: playful rounded display */
--font-sans: 'Baloo 2', 'Comic Neue', system-ui, sans-serif;
--font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif;
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
/* ease: bouncy */
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: polka-dot texture + rainbow stripe rule, the signature move */
--polka-dots: radial-gradient(circle, var(--color-primary) 2px, transparent 2.5px);
--rainbow-stripe: linear-gradient(90deg, #ff2d55, #ffd400, #17b26a, #2f6fed, #ff2d55);
}

/* ============================================================
Base component classes — Clowncore
Signature move: a hard offset "clown shadow" (solid color, no blur)
on every raised surface, plus a polka-dot texture used repeatedly on
nav and card backgrounds — chaotic but systematic.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); background-image: var(--polka-dots);
background-size: 22px 22px; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 3px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); margin: var(--space-4); border-top: 6px solid transparent;
border-image: var(--rainbow-stripe) 1; }
.btn {
font: 800 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: 1px 1px 0 var(--color-border); }
.btn:focus-visible { outline: 3px solid var(--color-blue); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: var(--shadow-sm); }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card { background: var(--color-surface-strong); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 3px solid var(--color-border); box-shadow: var(--shadow-md);
background-image: var(--polka-dots); background-size: 18px 18px; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-blue);
box-shadow: var(--shadow-sm), 0 0 0 3px rgba(47,111,237,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-family: var(--font-display); font-weight: 800;
font-size: var(--text-xs); padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-text); border: 2px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/clowncore.md */
```

## Design System Variables

```css
--bg: #fef7e0, --fg: #16161d, --accent: #ff2d55, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'Fredoka', 'Baloo 2', system-ui, sans-serif, --font-body: 'Baloo 2', 'Comic Neue', system-ui, sans-serif
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

[![Kidcore](https://designmd.app/images/library/664.png) Claude Artisan · Subculturas & estéticas de nicho ### Kidcore](https://designmd.app/library/kidcore)[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)[![Maximalism](https://designmd.app/images/library/680.png) Claude Artisan · Minimal, maximal & orgânico ### Maximalism](https://designmd.app/library/maximalism)

Last synced: 8/30/2026
