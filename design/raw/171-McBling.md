# McBling

- Source: <https://designmd.app/library/mcbling>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:48.299Z

Claude Artisan · Retrofuturismo & ficção especulativa2003–2008

# McBling

Reference for retrofuturismo & ficção especulativa McBling. Mid-2000s pop-culture glamour aesthetic.

McBlingbling era2000s glamRhinestones, glitter, hot pink, gold blingFlip-phone/tabloid celebrity cultureJuicy/velour, Y2K glamOstentatious, playful excessretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Rhinestones, glitter, hot pink, gold bling; Flip-phone/tabloid celebrity culture

![McBling](https://designmd.app/images/library/681.png)

## Historical Context

Mid-2000s pop-culture glamour aesthetic. Example: Paris Hilton era; early Myspace glam..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "McBling"
description: "McBling visual system, translated from the Claude Artisan catalog for use in digital products. Rhinestones, glitter, hot pink, gold bling; Flip-phone/tabloid celebrity culture"
colors:
primary: "#ff2ea6"
background: "#2a0a1f"
surface: "#3d0f2c"
text: "#fff2fa"
accent: "#ffd23f"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Curlz MT', 'Brush Script MT', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "16px"
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

McBling visual system, translated from the Claude Artisan catalog for use in digital products. Rhinestones, glitter, hot pink, gold bling; Flip-phone/tabloid celebrity culture

- **Category:** retrofuturism
- **Era:** 2003–2008
- **Origin:** Mid-2000s pop-culture glamour aesthetic.
- **Reference:** Paris Hilton era; early Myspace glam.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Rhinestones, glitter, hot pink, gold bling
- Flip-phone/tabloid celebrity culture
- Juicy/velour, Y2K glam
- Ostentatious, playful excess

## Colors

- **bg** — #2a0a1f
- **surface** — #3d0f2c
- **surface-strong** — #52123c
- **border** — rgba(255, 214, 240, 0.35)
- **text** — #fff2fa
- **text-muted** — #e8b8d8
- **primary** — #ff2ea6
- **accent** — #ffd23f
- **rhinestone** — #9be8ff
- **gold** — #ffcf5c

## Typography

- Display: 'Curlz MT', 'Brush Script MT', cursive
- Body: 'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rhinestones, glitter, hot pink, gold bling; Flip-phone/tabloid celebrity culture; Juicy/velour, Y2K glam; Ostentatious, playful excess; sombras e elevação

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/mcbling/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* McBling — design tokens */
/* 2003–2008 | Mid-2000s pop-culture glamour aesthetic, condensed */
:root {
/* color */
--color-bg: #2a0a1f;
--color-surface: #3d0f2c;
--color-surface-strong: #52123c;
--color-border: rgba(255, 214, 240, 0.35);
--color-text: #fff2fa;
--color-text-muted: #e8b8d8;
--color-primary: #ff2ea6;
--color-accent: #ffd23f;
--color-rhinestone: #9be8ff;
--color-gold: #ffcf5c;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(255,46,166,0.30);
--shadow-md: 0 6px 20px rgba(255,46,166,0.35);
--shadow-lg: 0 14px 40px rgba(255,46,166,0.40);
--shadow-bling: 0 0 0 2px rgba(255,255,255,0.55) inset, 0 0 18px rgba(255,210,63,0.55);
/* font */
--font-sans: 'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif;
--font-display: 'Curlz MT', 'Brush Script MT', cursive;
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
/* extra: rhinestone sparkle border — a repeating radial-gradient of tiny
gemstone glints layered on a hot-pink-to-gold glitter gradient */
--glitter-fill: linear-gradient(135deg, #ff2ea6 0%, #ff7ac6 35%, #ffd23f 100%);
--rhinestones: radial-gradient(circle at 10% 20%, #fff 0 2px, transparent 2.5px),
radial-gradient(circle at 40% 70%, #9be8ff 0 2px, transparent 2.5px),
radial-gradient(circle at 70% 30%, #fff 0 1.5px, transparent 2px),
radial-gradient(circle at 90% 80%, #ffd23f 0 2px, transparent 2.5px),
radial-gradient(circle at 55% 15%, #fff 0 1.5px, transparent 2px);
}

/* ============================================================
Base component classes — McBling
Signature move: --rhinestones (a scatter of tiny gemstone glints) layered
over --glitter-fill (hot pink → gold gradient), rimmed with a white inset
"bling" highlight. Repeats on nav, btn--primary, and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: radial-gradient(120% 100% at 50% 0%, #52123c 0%, #2a0a1f 70%); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--rhinestones), var(--glitter-fill); box-shadow: var(--shadow-md), var(--shadow-bling); margin: var(--space-4); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: #fff2fa;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard); }
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 2px solid var(--color-rhinestone); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--rhinestones), var(--glitter-fill); color: #3d0f2c;
border: none; box-shadow: var(--shadow-md), var(--shadow-bling); text-shadow: 0 1px 0 rgba(255,255,255,0.4); }
.card { background: var(--color-surface); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(255,210,63,0.30); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); color: #3d0f2c;
background: var(--rhinestones), var(--glitter-fill); box-shadow: var(--shadow-bling); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/mcbling.md */
```

### Variables

```
--bg: #2a0a1f, --fg: #fff2fa, --accent: #ff2ea6, --surface: #3d0f2c, --radius: 16px, --spacing: 16px, --font-display: 'Curlz MT', 'Brush Script MT', cursive, --font-body: 'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#2a0a1f

#3d0f2c

#52123c

Secondary

#fff2fa

#e8b8d8

#ff2ea6

#ffd23f

#9be8ff

#ffcf5c

### Effects

Rhinestones, glitter, hot pink, gold bling, Flip-phone/tabloid celebrity culture, Juicy/velour, Y2K glam, Ostentatious, playful excess, shadow

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

- **Name:** McBling
- **Type:** claude-artisan/retrofuturism
- **Keywords:** McBling, bling era, 2000s glam, Rhinestones, glitter, hot pink, gold bling, Flip-phone/tabloid celebrity culture, Juicy/velour, Y2K glam, Ostentatious, playful excess, retrofuturism
- **Era:** 2003–2008
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #2a0a1f, surface: #3d0f2c, surface-strong: #52123c, border: rgba(255, 214, 240, 0.35)
- **Secondary:** text: #fff2fa, text-muted: #e8b8d8, primary: #ff2ea6, accent: #ffd23f, rhinestone: #9be8ff, gold: #ffcf5c

## Visual Effects

Rhinestones, glitter, hot pink, gold bling, Flip-phone/tabloid celebrity culture, Juicy/velour, Y2K glam, Ostentatious, playful excess, shadow

## AI Visual Direction

McBling, Rhinestones, glitter, hot pink, gold bling, Flip-phone/tabloid celebrity culture, Juicy/velour, Y2K glam, Ostentatious, playful excess, Paris Hilton era; early Myspace glam.

## CSS Technical

```css
/* McBling — design tokens */
/* 2003–2008 | Mid-2000s pop-culture glamour aesthetic, condensed */
:root {
/* color */
--color-bg: #2a0a1f;
--color-surface: #3d0f2c;
--color-surface-strong: #52123c;
--color-border: rgba(255, 214, 240, 0.35);
--color-text: #fff2fa;
--color-text-muted: #e8b8d8;
--color-primary: #ff2ea6;
--color-accent: #ffd23f;
--color-rhinestone: #9be8ff;
--color-gold: #ffcf5c;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(255,46,166,0.30);
--shadow-md: 0 6px 20px rgba(255,46,166,0.35);
--shadow-lg: 0 14px 40px rgba(255,46,166,0.40);
--shadow-bling: 0 0 0 2px rgba(255,255,255,0.55) inset, 0 0 18px rgba(255,210,63,0.55);
/* font */
--font-sans: 'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif;
--font-display: 'Curlz MT', 'Brush Script MT', cursive;
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
/* extra: rhinestone sparkle border — a repeating radial-gradient of tiny
gemstone glints layered on a hot-pink-to-gold glitter gradient */
--glitter-fill: linear-gradient(135deg, #ff2ea6 0%, #ff7ac6 35%, #ffd23f 100%);
--rhinestones: radial-gradient(circle at 10% 20%, #fff 0 2px, transparent 2.5px),
radial-gradient(circle at 40% 70%, #9be8ff 0 2px, transparent 2.5px),
radial-gradient(circle at 70% 30%, #fff 0 1.5px, transparent 2px),
radial-gradient(circle at 90% 80%, #ffd23f 0 2px, transparent 2.5px),
radial-gradient(circle at 55% 15%, #fff 0 1.5px, transparent 2px);
}

/* ============================================================
Base component classes — McBling
Signature move: --rhinestones (a scatter of tiny gemstone glints) layered
over --glitter-fill (hot pink → gold gradient), rimmed with a white inset
"bling" highlight. Repeats on nav, btn--primary, and badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: radial-gradient(120% 100% at 50% 0%, #52123c 0%, #2a0a1f 70%); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--rhinestones), var(--glitter-fill); box-shadow: var(--shadow-md), var(--shadow-bling); margin: var(--space-4); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: #fff2fa;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard); }
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 2px solid var(--color-rhinestone); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--rhinestones), var(--glitter-fill); color: #3d0f2c;
border: none; box-shadow: var(--shadow-md), var(--shadow-bling); text-shadow: 0 1px 0 rgba(255,255,255,0.4); }
.card { background: var(--color-surface); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(255,210,63,0.30); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); color: #3d0f2c;
background: var(--rhinestones), var(--glitter-fill); box-shadow: var(--shadow-bling); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/mcbling.md */
```

## Design System Variables

```css
--bg: #2a0a1f, --fg: #fff2fa, --accent: #ff2ea6, --surface: #3d0f2c, --radius: 16px, --spacing: 16px, --font-display: 'Curlz MT', 'Brush Script MT', cursive, --font-body: 'Comic Sans MS', 'Chalkboard SE', system-ui, sans-serif
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

[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)[![Barbiecore](https://designmd.app/images/library/584.png) Claude Artisan · Subculturas & estéticas de nicho ### Barbiecore](https://designmd.app/library/barbiecore)

Last synced: 8/30/2026
