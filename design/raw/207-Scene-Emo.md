# Scene / Emo

- Source: <https://designmd.app/library/scene-emo>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:47.306Z

Claude Artisan · Subculturas & estéticas de nicho2004–2012

# Scene / Emo

Reference for subculturas & estéticas de nicho Scene / Emo. Mid-2000s Myspace youth subculture.

Scene / Emoscene aestheticemo2000s sceneNeon + black, hot pink, leopard, checkerboardChoppy hair, glittery graphics, hearts/skullsComic-sans-adjacent chaos, sparklesLoud, angsty, DIYniche

Use case: hero, superfície, conteúdo e grade responsiva; Neon + black, hot pink, leopard, checkerboard; Choppy hair, glittery graphics, hearts/skulls

![Scene / Emo](https://designmd.app/images/library/713.png)

## Historical Context

Mid-2000s Myspace youth subculture. Example: Myspace scene profiles; 2000s emo band art..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Scene / Emo"
description: "Scene / Emo visual system, translated from the Claude Artisan catalog for use in digital products. Neon + black, hot pink, leopard, checkerboard; Choppy hair, glittery graphics, hearts/skulls"
colors:
primary: "#ff2fb0"
background: "#0a0a0c"
surface: "#17151c"
text: "#f5f2fa"
accent: "#ccff00"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Jokerman', 'Impact', 'Trebuchet MS', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "10px"
lg: "18px"
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

Scene / Emo visual system, translated from the Claude Artisan catalog for use in digital products. Neon + black, hot pink, leopard, checkerboard; Choppy hair, glittery graphics, hearts/skulls

- **Category:** niche
- **Era:** 2004–2012
- **Origin:** Mid-2000s Myspace youth subculture.
- **Reference:** Myspace scene profiles; 2000s emo band art.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Neon + black, hot pink, leopard, checkerboard
- Choppy hair, glittery graphics, hearts/skulls
- Comic-sans-adjacent chaos, sparkles
- Loud, angsty, DIY

## Colors

- **bg** — #0a0a0c
- **surface** — #17151c
- **surface-strong** — #211c29
- **border** — #ff2fb0
- **text** — #f5f2fa
- **text-muted** — #b9aecb
- **primary** — #ff2fb0
- **accent** — #ccff00
- **electric** — #7a2fff

## Typography

- Display: 'Jokerman', 'Impact', 'Trebuchet MS', sans-serif
- Body: 'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Neon + black, hot pink, leopard, checkerboard; Choppy hair, glittery graphics, hearts/skulls; Comic-sans-adjacent chaos, sparkles; Loud, angsty, DIY; sombras e elevação

## Shapes

- Radius scale: 2px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/scene-emo/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Scene / Emo — design tokens */
/* 2004–2012 | Mid-2000s Myspace youth subculture, condensed */
:root {
/* color */
--color-bg: #0a0a0c;
--color-surface: #17151c;
--color-surface-strong: #211c29;
--color-border: #ff2fb0;
--color-text: #f5f2fa;
--color-text-muted: #b9aecb;
--color-primary: #ff2fb0;
--color-accent: #ccff00;
--color-electric: #7a2fff;
/* radius: scattered, never uniform */
--radius-sm: 2px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow: neon glow stands in for elevation */
--shadow-sm: 0 0 6px rgba(255,47,176,0.45);
--shadow-md: 0 0 18px rgba(255,47,176,0.5), 0 4px 14px rgba(0,0,0,0.6);
--shadow-lg: 0 0 32px rgba(255,47,176,0.55), 0 10px 26px rgba(0,0,0,0.7);
/* font */
--font-sans: 'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif;
--font-display: 'Jokerman', 'Impact', 'Trebuchet MS', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: a checkerboard pattern + a hot-pink neon glow are the two repeated signature moves */
--checkerboard: repeating-conic-gradient(#1c1822 0% 25%, #0a0a0c 0% 50%) 0 0 / 16px 16px;
--neon-text-glow: 0 0 8px rgba(255,47,176,0.8), 0 0 18px rgba(255,47,176,0.4);
}

/* ============================================================
Base component classes — Scene / Emo
Signature move: a hot-pink neon glow (box-shadow, not blur-filter, to
stay crisp) plus a tiny checkerboard strip, both repeated on nav, card
border, and the primary button — loud, DIY, glittery-adjacent.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 4px solid var(--color-primary); box-shadow: var(--shadow-sm); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-primary);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: rotate(-1deg) scale(1.04); box-shadow: var(--shadow-md); }
.btn:active { transform: rotate(0deg) scale(0.98); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #1a0212; border-color: var(--color-accent); box-shadow: var(--shadow-md); }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6); border: 2px solid var(--color-primary);
border-top: 8px solid; border-top-color: transparent;
background-image: var(--checkerboard), linear-gradient(var(--color-surface), var(--color-surface));
background-size: 16px 16px, 100% 100%; background-position: top left, top left; background-repeat: repeat-x, no-repeat;
background-origin: border-box; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface-strong); border-radius: var(--radius-sm);
border: 2px dashed var(--color-electric); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #111a00;
text-shadow: none; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/scene-emo.md */
```

### Variables

```
--bg: #0a0a0c, --fg: #f5f2fa, --accent: #ff2fb0, --surface: #17151c, --radius: 10px, --spacing: 16px, --font-display: 'Jokerman', 'Impact', 'Trebuchet MS', sans-serif, --font-body: 'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0a0c

#17151c

#211c29

#ff2fb0

Secondary

#f5f2fa

#b9aecb

#ff2fb0

#ccff00

#7a2fff

### Effects

Neon + black, hot pink, leopard, checkerboard, Choppy hair, glittery graphics, hearts/skulls, Comic-sans-adjacent chaos, sparkles, Loud, angsty, DIY, shadow

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

- **Name:** Scene / Emo
- **Type:** claude-artisan/niche
- **Keywords:** Scene / Emo, scene aesthetic, emo, 2000s scene, Neon + black, hot pink, leopard, checkerboard, Choppy hair, glittery graphics, hearts/skulls, Comic-sans-adjacent chaos, sparkles, Loud, angsty, DIY, niche
- **Era:** 2004–2012
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0a0c, surface: #17151c, surface-strong: #211c29, border: #ff2fb0
- **Secondary:** text: #f5f2fa, text-muted: #b9aecb, primary: #ff2fb0, accent: #ccff00, electric: #7a2fff

## Visual Effects

Neon + black, hot pink, leopard, checkerboard, Choppy hair, glittery graphics, hearts/skulls, Comic-sans-adjacent chaos, sparkles, Loud, angsty, DIY, shadow

## AI Visual Direction

Scene / Emo, Neon + black, hot pink, leopard, checkerboard, Choppy hair, glittery graphics, hearts/skulls, Comic-sans-adjacent chaos, sparkles, Loud, angsty, DIY, Myspace scene profiles; 2000s emo band art.

## CSS Technical

```css
/* Scene / Emo — design tokens */
/* 2004–2012 | Mid-2000s Myspace youth subculture, condensed */
:root {
/* color */
--color-bg: #0a0a0c;
--color-surface: #17151c;
--color-surface-strong: #211c29;
--color-border: #ff2fb0;
--color-text: #f5f2fa;
--color-text-muted: #b9aecb;
--color-primary: #ff2fb0;
--color-accent: #ccff00;
--color-electric: #7a2fff;
/* radius: scattered, never uniform */
--radius-sm: 2px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow: neon glow stands in for elevation */
--shadow-sm: 0 0 6px rgba(255,47,176,0.45);
--shadow-md: 0 0 18px rgba(255,47,176,0.5), 0 4px 14px rgba(0,0,0,0.6);
--shadow-lg: 0 0 32px rgba(255,47,176,0.55), 0 10px 26px rgba(0,0,0,0.7);
/* font */
--font-sans: 'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif;
--font-display: 'Jokerman', 'Impact', 'Trebuchet MS', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: a checkerboard pattern + a hot-pink neon glow are the two repeated signature moves */
--checkerboard: repeating-conic-gradient(#1c1822 0% 25%, #0a0a0c 0% 50%) 0 0 / 16px 16px;
--neon-text-glow: 0 0 8px rgba(255,47,176,0.8), 0 0 18px rgba(255,47,176,0.4);
}

/* ============================================================
Base component classes — Scene / Emo
Signature move: a hot-pink neon glow (box-shadow, not blur-filter, to
stay crisp) plus a tiny checkerboard strip, both repeated on nav, card
border, and the primary button — loud, DIY, glittery-adjacent.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 4px solid var(--color-primary); box-shadow: var(--shadow-sm); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-primary);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: rotate(-1deg) scale(1.04); box-shadow: var(--shadow-md); }
.btn:active { transform: rotate(0deg) scale(0.98); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #1a0212; border-color: var(--color-accent); box-shadow: var(--shadow-md); }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6); border: 2px solid var(--color-primary);
border-top: 8px solid; border-top-color: transparent;
background-image: var(--checkerboard), linear-gradient(var(--color-surface), var(--color-surface));
background-size: 16px 16px, 100% 100%; background-position: top left, top left; background-repeat: repeat-x, no-repeat;
background-origin: border-box; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface-strong); border-radius: var(--radius-sm);
border: 2px dashed var(--color-electric); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #111a00;
text-shadow: none; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/scene-emo.md */
```

## Design System Variables

```css
--bg: #0a0a0c, --fg: #f5f2fa, --accent: #ff2fb0, --surface: #17151c, --radius: 10px, --spacing: 16px, --font-display: 'Jokerman', 'Impact', 'Trebuchet MS', sans-serif, --font-body: 'Comic Sans MS', 'Chalkboard SE', 'Trebuchet MS', sans-serif
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

[![McBling](https://designmd.app/images/library/681.png) Claude Artisan · Retrofuturismo & ficção especulativa ### McBling](https://designmd.app/library/mcbling)[![Kidcore](https://designmd.app/images/library/664.png) Claude Artisan · Subculturas & estéticas de nicho ### Kidcore](https://designmd.app/library/kidcore)[![Webcore / Old Web](https://designmd.app/images/library/751.png) Claude Artisan · Subculturas & estéticas de nicho ### Webcore / Old Web](https://designmd.app/library/webcore)

Last synced: 8/30/2026
