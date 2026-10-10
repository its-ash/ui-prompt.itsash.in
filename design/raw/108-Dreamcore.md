# Dreamcore

- Source: <https://designmd.app/library/dreamcore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:08.368Z

Claude Artisan · Subculturas & estéticas de nicho2020–present

# Dreamcore

Reference for subculturas & estéticas de nicho Dreamcore. Surreal dream/nostalgia internet aesthetic.

Dreamcoreoneiric coreHazy surreal dreamlike scenesNostalgic uncanny imagerySoft glow, impossible spacesBetween comforting and unsettlingniche

Use case: hero, superfície, conteúdo e grade responsiva; Hazy surreal dreamlike scenes; Nostalgic uncanny imagery

![Dreamcore](https://designmd.app/images/library/624.png)

## Historical Context

Surreal dream/nostalgia internet aesthetic. Example: Dreamcore compilations..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Dreamcore"
description: "Dreamcore visual system, translated from the Claude Artisan catalog for use in digital products. Hazy surreal dreamlike scenes; Nostalgic uncanny imagery"
colors:
primary: "#c04fd6"
background: "#f3e9f7"
surface: "#fdf6ff"
text: "#3a1f4d"
accent: "#f4c96b"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Quicksand', 'Comic Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Quicksand', 'Comic Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "18px"
lg: "28px"
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

Dreamcore visual system, translated from the Claude Artisan catalog for use in digital products. Hazy surreal dreamlike scenes; Nostalgic uncanny imagery

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Surreal dream/nostalgia internet aesthetic.
- **Reference:** Dreamcore compilations.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Hazy surreal dreamlike scenes
- Nostalgic uncanny imagery
- Soft glow, impossible spaces
- Between comforting and unsettling

## Colors

- **bg** — #f3e9f7
- **surface** — #fdf6ff
- **surface-strong** — #ecd9f2
- **border** — #d9b8e8
- **text** — #3a1f4d
- **text-muted** — #6d4a80
- **primary** — #c04fd6
- **accent** — #f4c96b
- **glow** — #ffe9a8

## Typography

- Display: 'Cormorant Garamond', 'Playfair Display', serif
- Body: 'Quicksand', 'Comic Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Hazy surreal dreamlike scenes; Nostalgic uncanny imagery; Soft glow, impossible spaces; Between comforting and unsettling; sombras e elevação

## Shapes

- Radius scale: 10px, 18px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/dreamcore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Dreamcore — design tokens */
/* 2020–present | Surreal dream/nostalgia internet aesthetic, condensed */
:root {
/* color */
--color-bg: #f3e9f7;
--color-surface: #fdf6ff;
--color-surface-strong: #ecd9f2;
--color-border: #d9b8e8;
--color-text: #3a1f4d;
--color-text-muted: #6d4a80;
--color-primary: #c04fd6;
--color-accent: #f4c96b;
--color-glow: #ffe9a8;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 10px rgba(150, 70, 170, 0.14);
--shadow-md: 0 8px 28px rgba(150, 70, 170, 0.20);
--shadow-lg: 0 20px 50px rgba(150, 70, 170, 0.26);
--shadow-glow: 0 0 32px rgba(255, 233, 168, 0.55);
/* font */
--font-sans: 'Quicksand', 'Comic Neue', system-ui, sans-serif;
--font-display: 'Cormorant Garamond', 'Playfair Display', serif;
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
/* extra: signature = hazy nostalgic glow halo behind surfaces + soft radial mist bg */
--bg-mist: radial-gradient(60% 50% at 20% 0%, #ffe9a8 0%, transparent 60%),
radial-gradient(70% 60% at 90% 100%, #b8dfff 0%, transparent 55%),
var(--color-bg);
--glow-ring: 0 0 0 6px rgba(255, 233, 168, 0.35);
}

/* ============================================================
Base component classes — Dreamcore
Signature move: a soft nostalgic glow halo (radial mist background +
diffuse glow shadow) wraps the nav, card, and primary button, evoking
a hazy, uncanny, between-comforting-and-unsettling dream light.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-mist); background-attachment: fixed; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-radius: var(--radius-pill); box-shadow: var(--shadow-md), var(--shadow-glow); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-pill);
padding: var(--space-3) var(--space-6); cursor: pointer;
transition: box-shadow .3s var(--ease-standard), transform .3s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md), var(--glow-ring); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fdf6ff; border-color: transparent; box-shadow: var(--shadow-sm), var(--shadow-glow); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md), var(--shadow-glow); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--glow-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); color: var(--color-text);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
border-radius: var(--radius-pill); padding: .3em .8em; box-shadow: var(--shadow-glow); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dreamcore.md */
```

### Variables

```
--bg: #f3e9f7, --fg: #3a1f4d, --accent: #c04fd6, --surface: #fdf6ff, --radius: 18px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Playfair Display', serif, --font-body: 'Quicksand', 'Comic Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f3e9f7

#fdf6ff

#ecd9f2

#d9b8e8

Secondary

#3a1f4d

#6d4a80

#c04fd6

#f4c96b

#ffe9a8

### Effects

Hazy surreal dreamlike scenes, Nostalgic uncanny imagery, Soft glow, impossible spaces, Between comforting and unsettling, shadow

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

- **Name:** Dreamcore
- **Type:** claude-artisan/niche
- **Keywords:** Dreamcore, oneiric core, Hazy surreal dreamlike scenes, Nostalgic uncanny imagery, Soft glow, impossible spaces, Between comforting and unsettling, niche
- **Era:** 2020–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f3e9f7, surface: #fdf6ff, surface-strong: #ecd9f2, border: #d9b8e8
- **Secondary:** text: #3a1f4d, text-muted: #6d4a80, primary: #c04fd6, accent: #f4c96b, glow: #ffe9a8

## Visual Effects

Hazy surreal dreamlike scenes, Nostalgic uncanny imagery, Soft glow, impossible spaces, Between comforting and unsettling, shadow

## AI Visual Direction

Dreamcore, Hazy surreal dreamlike scenes, Nostalgic uncanny imagery, Soft glow, impossible spaces, Between comforting and unsettling, Dreamcore compilations.

## CSS Technical

```css
/* Dreamcore — design tokens */
/* 2020–present | Surreal dream/nostalgia internet aesthetic, condensed */
:root {
/* color */
--color-bg: #f3e9f7;
--color-surface: #fdf6ff;
--color-surface-strong: #ecd9f2;
--color-border: #d9b8e8;
--color-text: #3a1f4d;
--color-text-muted: #6d4a80;
--color-primary: #c04fd6;
--color-accent: #f4c96b;
--color-glow: #ffe9a8;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 10px rgba(150, 70, 170, 0.14);
--shadow-md: 0 8px 28px rgba(150, 70, 170, 0.20);
--shadow-lg: 0 20px 50px rgba(150, 70, 170, 0.26);
--shadow-glow: 0 0 32px rgba(255, 233, 168, 0.55);
/* font */
--font-sans: 'Quicksand', 'Comic Neue', system-ui, sans-serif;
--font-display: 'Cormorant Garamond', 'Playfair Display', serif;
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
/* extra: signature = hazy nostalgic glow halo behind surfaces + soft radial mist bg */
--bg-mist: radial-gradient(60% 50% at 20% 0%, #ffe9a8 0%, transparent 60%),
radial-gradient(70% 60% at 90% 100%, #b8dfff 0%, transparent 55%),
var(--color-bg);
--glow-ring: 0 0 0 6px rgba(255, 233, 168, 0.35);
}

/* ============================================================
Base component classes — Dreamcore
Signature move: a soft nostalgic glow halo (radial mist background +
diffuse glow shadow) wraps the nav, card, and primary button, evoking
a hazy, uncanny, between-comforting-and-unsettling dream light.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-mist); background-attachment: fixed; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-radius: var(--radius-pill); box-shadow: var(--shadow-md), var(--shadow-glow); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-pill);
padding: var(--space-3) var(--space-6); cursor: pointer;
transition: box-shadow .3s var(--ease-standard), transform .3s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md), var(--glow-ring); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fdf6ff; border-color: transparent; box-shadow: var(--shadow-sm), var(--shadow-glow); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md), var(--shadow-glow); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--glow-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); color: var(--color-text);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
border-radius: var(--radius-pill); padding: .3em .8em; box-shadow: var(--shadow-glow); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dreamcore.md */
```

## Design System Variables

```css
--bg: #f3e9f7, --fg: #3a1f4d, --accent: #c04fd6, --surface: #fdf6ff, --radius: 18px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Playfair Display', serif, --font-body: 'Quicksand', 'Comic Neue', system-ui, sans-serif
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

[![Weirdcore](https://designmd.app/images/library/752.png) Claude Artisan · Subculturas & estéticas de nicho ### Weirdcore](https://designmd.app/library/weirdcore)[![Liminal Spaces](https://designmd.app/images/library/669.png) Claude Artisan · Subculturas & estéticas de nicho ### Liminal Spaces](https://designmd.app/library/liminal-spaces)[![Dreampunk](https://designmd.app/images/library/625.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Dreampunk](https://designmd.app/library/dreampunk)

Last synced: 8/30/2026
