# Dark Academia

- Source: <https://designmd.app/library/dark-academia>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:53.307Z

Claude Artisan · Subculturas & estéticas de nicho2015–present (peak 2020)

# Dark Academia

Reference for subculturas & estéticas de nicho Dark Academia. Tumblr/TikTok subculture romanticizing classic scholarship.

Dark Academiadark academicMoody browns, oxblood, forest green, creamSerif type, old books, candlelight, tweedGothic/Ivy-League architecture motifsScholarly, nostalgic, melancholicniche

Use case: hero, superfície, conteúdo e grade responsiva; Moody browns, oxblood, forest green, cream; Serif type, old books, candlelight, tweed

![Dark Academia](https://designmd.app/images/library/617.png)

## Historical Context

Tumblr/TikTok subculture romanticizing classic scholarship. Example: 'Dead Poets Society' / 'The Secret History' moodboards..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Dark Academia"
description: "Dark Academia visual system, translated from the Claude Artisan catalog for use in digital products. Moody browns, oxblood, forest green, cream; Serif type, old books, candlelight, tweed"
colors:
primary: "#8b5e34"
background: "#1c1712"
surface: "#26201a"
text: "#e8ddc7"
accent: "#5a6b4f"
on-primary: "#FFFFFF"
on-surface: "#FFFFFF"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Cormorant Garamond', 'EB Garamond', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'EB Garamond', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'EB Garamond', Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "6px"
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

Dark Academia visual system, translated from the Claude Artisan catalog for use in digital products. Moody browns, oxblood, forest green, cream; Serif type, old books, candlelight, tweed

- **Category:** niche
- **Era:** 2015–present (peak 2020)
- **Origin:** Tumblr/TikTok subculture romanticizing classic scholarship.
- **Reference:** 'Dead Poets Society' / 'The Secret History' moodboards.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Moody browns, oxblood, forest green, cream
- Serif type, old books, candlelight, tweed
- Gothic/Ivy-League architecture motifs
- Scholarly, nostalgic, melancholic

## Colors

- **bg** — #1c1712
- **surface** — #26201a
- **surface-2** — #332a20
- **text** — #e8ddc7
- **text-muted** — #a99a7f
- **primary** — #8b5e34
- **accent** — #5a6b4f
- **oxblood** — #6e2b2b
- **gold** — #b89b5e

## Typography

- Display: 'Cormorant Garamond', 'EB Garamond', serif
- Body: 'EB Garamond', Georgia, serif
- Mono: 'Courier Prime', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Moody browns, oxblood, forest green, cream; Serif type, old books, candlelight, tweed; Gothic/Ivy-League architecture motifs; Scholarly, nostalgic, melancholic; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/dark-academia/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Dark Academia — design tokens (generated from style_catalog.json) */
/* 2015–present (peak 2020) | Tumblr/TikTok subculture romanticizing classic scholarship. */
:root {
/* color */
--color-bg: #1c1712;
--color-surface: #26201a;
--color-surface-2: #332a20;
--color-text: #e8ddc7;
--color-text-muted: #a99a7f;
--color-primary: #8b5e34;
--color-accent: #5a6b4f;
--color-oxblood: #6e2b2b;
--color-gold: #b89b5e;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.5);
/* font */
--font-sans: 'EB Garamond', Georgia, serif;
--font-display: 'Cormorant Garamond', 'EB Garamond', serif;
--font-mono: 'Courier Prime', monospace;
/* text */
--text-xs: 0.8rem;
--text-sm: 0.9rem;
--text-base: 1.05rem;
--text-lg: 1.3rem;
--text-xl: 1.7rem;
--text-2xl: 2.3rem;
--text-3xl: 3.1rem;
--text-4xl: 4.2rem;
--text-5xl: 5.6rem;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--paper: #e8ddc7;
--rule: 1px solid #4a3f30;
}

/* ============================================================
Base component classes — Dark Academia (token-driven).
Signature move lives in references/00-flagship-implementation-specs/dark-academia.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-sm);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-sm); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #ffffff; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dark-academia.md */
```

### Variables

```
--bg: #1c1712, --fg: #e8ddc7, --accent: #8b5e34, --surface: #26201a, --radius: 4px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'EB Garamond', serif, --font-body: 'EB Garamond', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1c1712

#26201a

#332a20

#e8ddc7

Secondary

#a99a7f

#8b5e34

#5a6b4f

#6e2b2b

#b89b5e

### Effects

Moody browns, oxblood, forest green, cream, Serif type, old books, candlelight, tweed, Gothic/Ivy-League architecture motifs, Scholarly, nostalgic, melancholic, shadow, blur

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

- **Name:** Dark Academia
- **Type:** claude-artisan/niche
- **Keywords:** Dark Academia, dark academic, Moody browns, oxblood, forest green, cream, Serif type, old books, candlelight, tweed, Gothic/Ivy-League architecture motifs, Scholarly, nostalgic, melancholic, niche
- **Era:** 2015–present (peak 2020)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1c1712, surface: #26201a, surface-2: #332a20, text: #e8ddc7
- **Secondary:** text-muted: #a99a7f, primary: #8b5e34, accent: #5a6b4f, oxblood: #6e2b2b, gold: #b89b5e

## Visual Effects

Moody browns, oxblood, forest green, cream, Serif type, old books, candlelight, tweed, Gothic/Ivy-League architecture motifs, Scholarly, nostalgic, melancholic, shadow, blur

## AI Visual Direction

Dark Academia, Moody browns, oxblood, forest green, cream, Serif type, old books, candlelight, tweed, Gothic/Ivy-League architecture motifs, Scholarly, nostalgic, melancholic, 'Dead Poets Society' / 'The Secret History' moodboards.

## CSS Technical

```css
/* Dark Academia — design tokens (generated from style_catalog.json) */
/* 2015–present (peak 2020) | Tumblr/TikTok subculture romanticizing classic scholarship. */
:root {
/* color */
--color-bg: #1c1712;
--color-surface: #26201a;
--color-surface-2: #332a20;
--color-text: #e8ddc7;
--color-text-muted: #a99a7f;
--color-primary: #8b5e34;
--color-accent: #5a6b4f;
--color-oxblood: #6e2b2b;
--color-gold: #b89b5e;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.5);
/* font */
--font-sans: 'EB Garamond', Georgia, serif;
--font-display: 'Cormorant Garamond', 'EB Garamond', serif;
--font-mono: 'Courier Prime', monospace;
/* text */
--text-xs: 0.8rem;
--text-sm: 0.9rem;
--text-base: 1.05rem;
--text-lg: 1.3rem;
--text-xl: 1.7rem;
--text-2xl: 2.3rem;
--text-3xl: 3.1rem;
--text-4xl: 4.2rem;
--text-5xl: 5.6rem;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--paper: #e8ddc7;
--rule: 1px solid #4a3f30;
}

/* ============================================================
Base component classes — Dark Academia (token-driven).
Signature move lives in references/00-flagship-implementation-specs/dark-academia.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-sm);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-sm); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #ffffff; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dark-academia.md */
```

## Design System Variables

```css
--bg: #1c1712, --fg: #e8ddc7, --accent: #8b5e34, --surface: #26201a, --radius: 4px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'EB Garamond', serif, --font-body: 'EB Garamond', Georgia, serif
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

[![Light Academia](https://designmd.app/images/library/667.png) Claude Artisan · Subculturas & estéticas de nicho ### Light Academia](https://designmd.app/library/light-academia)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)

Last synced: 8/30/2026
