# Silicon Dreams

- Source: <https://designmd.app/library/silicon-dreams>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:50.313Z

Claude Artisan · Retrofuturismo & ficção especulativa2005–2012

# Silicon Dreams

Reference for retrofuturismo & ficção especulativa Silicon Dreams. Frutiger-family aesthetic; darker tech-corporate variant.

Silicon DreamsFrutiger MetroDark glossy tech backgroundsBlue glow, circuitry, HUD hintsCorporate futurismGlass + neon-blue accentsretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Dark glossy tech backgrounds; Blue glow, circuitry, HUD hints

![Silicon Dreams](https://designmd.app/images/library/716.png)

## Historical Context

Frutiger-family aesthetic; darker tech-corporate variant. Example: Mid-2000s corporate tech keynotes..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Silicon Dreams"
description: "Silicon Dreams visual system, translated from the Claude Artisan catalog for use in digital products. Dark glossy tech backgrounds; Blue glow, circuitry, HUD hints"
colors:
primary: "#2fb8ff"
background: "#050b14"
surface: "#0d1b2a"
text: "#eaf4ff"
accent: "#6ee7ff"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Frutiger', 'Eurostile', 'Segoe UI', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Frutiger', 'Segoe UI', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Frutiger', 'Segoe UI', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "12px"
lg: "20px"
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

Silicon Dreams visual system, translated from the Claude Artisan catalog for use in digital products. Dark glossy tech backgrounds; Blue glow, circuitry, HUD hints

- **Category:** retrofuturism
- **Era:** 2005–2012
- **Origin:** Frutiger-family aesthetic; darker tech-corporate variant.
- **Reference:** Mid-2000s corporate tech keynotes.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dark glossy tech backgrounds
- Blue glow, circuitry, HUD hints
- Corporate futurism
- Glass + neon-blue accents

## Colors

- **bg** — #050b14
- **surface** — #0d1b2a
- **surface-strong** — #132840
- **border** — #234a6b
- **text** — #eaf4ff
- **text-muted** — #8fb3d1
- **primary** — #2fb8ff
- **accent** — #6ee7ff
- **glow** — rgba(47,184,255,0.55)

## Typography

- Display: 'Frutiger', 'Eurostile', 'Segoe UI', sans-serif
- Body: 'Frutiger', 'Segoe UI', system-ui, sans-serif
- Mono: 'Consolas', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dark glossy tech backgrounds; Blue glow, circuitry, HUD hints; Corporate futurism; Glass + neon-blue accents; sombras e elevação

## Shapes

- Radius scale: 6px, 12px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/silicon-dreams/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Silicon Dreams — design tokens */
/* 2005–2012 | Frutiger-family aesthetic; darker tech-corporate variant, condensed */
:root {
/* color */
--color-bg: #050b14;
--color-surface: #0d1b2a;
--color-surface-strong: #132840;
--color-border: #234a6b;
--color-text: #eaf4ff;
--color-text-muted: #8fb3d1;
--color-primary: #2fb8ff;
--color-accent: #6ee7ff;
--color-glow: rgba(47,184,255,0.55);
/* radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
--shadow-md: 0 8px 24px rgba(0,0,0,0.5), 0 0 20px var(--color-glow);
--shadow-lg: 0 18px 44px rgba(0,0,0,0.55), 0 0 32px var(--color-glow);
/* font */
--font-sans: 'Frutiger', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Frutiger', 'Eurostile', 'Segoe UI', sans-serif;
--font-mono: 'Consolas', ui-monospace, monospace;
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
/* extra: a faint circuitry grid + an electric-blue glow, the two repeated signature moves */
--circuit-grid: linear-gradient(90deg, rgba(47,184,255,0.06) 1px, transparent 1px) 0 0 / 24px 24px,
linear-gradient(0deg, rgba(47,184,255,0.06) 1px, transparent 1px) 0 0 / 24px 24px;
--glass-sheen: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%);
}

/* ============================================================
Base component classes — Silicon Dreams
Signature move: a faint circuitry grid on the page background paired
with an electric-blue outer glow on raised surfaces (nav, card,
primary button, input focus) — dark glossy corporate-tech futurism.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--circuit-grid), var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--glass-sheen), linear-gradient(var(--color-surface), var(--color-surface));
border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); background-image: var(--glass-sheen), linear-gradient(var(--color-surface-strong), var(--color-surface-strong));
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); cursor: pointer;
transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: linear-gradient(180deg, #3fc4ff, #1782c4); color: #041220; border-color: var(--color-accent); box-shadow: var(--shadow-md); }
.card { background: var(--color-surface); background-image: var(--glass-sheen), linear-gradient(var(--color-surface), var(--color-surface));
color: var(--color-text); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6); border: 1px solid var(--color-border); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: #081422; border-radius: var(--radius-md); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-primary); color: #041220; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/silicon-dreams.md */
```

### Variables

```
--bg: #050b14, --fg: #eaf4ff, --accent: #2fb8ff, --surface: #0d1b2a, --radius: 12px, --spacing: 16px, --font-display: 'Frutiger', 'Eurostile', 'Segoe UI', sans-serif, --font-body: 'Frutiger', 'Segoe UI', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#050b14

#0d1b2a

#132840

#234a6b

Secondary

#eaf4ff

#8fb3d1

#2fb8ff

#6ee7ff

### Effects

Dark glossy tech backgrounds, Blue glow, circuitry, HUD hints, Corporate futurism, Glass + neon-blue accents, shadow

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

- **Name:** Silicon Dreams
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Silicon Dreams, Frutiger Metro, Dark glossy tech backgrounds, Blue glow, circuitry, HUD hints, Corporate futurism, Glass + neon-blue accents, retrofuturism
- **Era:** 2005–2012
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #050b14, surface: #0d1b2a, surface-strong: #132840, border: #234a6b
- **Secondary:** text: #eaf4ff, text-muted: #8fb3d1, primary: #2fb8ff, accent: #6ee7ff, glow: rgba(47,184,255,0.55)

## Visual Effects

Dark glossy tech backgrounds, Blue glow, circuitry, HUD hints, Corporate futurism, Glass + neon-blue accents, shadow

## AI Visual Direction

Silicon Dreams, Dark glossy tech backgrounds, Blue glow, circuitry, HUD hints, Corporate futurism, Glass + neon-blue accents, Mid-2000s corporate tech keynotes.

## CSS Technical

```css
/* Silicon Dreams — design tokens */
/* 2005–2012 | Frutiger-family aesthetic; darker tech-corporate variant, condensed */
:root {
/* color */
--color-bg: #050b14;
--color-surface: #0d1b2a;
--color-surface-strong: #132840;
--color-border: #234a6b;
--color-text: #eaf4ff;
--color-text-muted: #8fb3d1;
--color-primary: #2fb8ff;
--color-accent: #6ee7ff;
--color-glow: rgba(47,184,255,0.55);
/* radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
--shadow-md: 0 8px 24px rgba(0,0,0,0.5), 0 0 20px var(--color-glow);
--shadow-lg: 0 18px 44px rgba(0,0,0,0.55), 0 0 32px var(--color-glow);
/* font */
--font-sans: 'Frutiger', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Frutiger', 'Eurostile', 'Segoe UI', sans-serif;
--font-mono: 'Consolas', ui-monospace, monospace;
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
/* extra: a faint circuitry grid + an electric-blue glow, the two repeated signature moves */
--circuit-grid: linear-gradient(90deg, rgba(47,184,255,0.06) 1px, transparent 1px) 0 0 / 24px 24px,
linear-gradient(0deg, rgba(47,184,255,0.06) 1px, transparent 1px) 0 0 / 24px 24px;
--glass-sheen: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 40%);
}

/* ============================================================
Base component classes — Silicon Dreams
Signature move: a faint circuitry grid on the page background paired
with an electric-blue outer glow on raised surfaces (nav, card,
primary button, input focus) — dark glossy corporate-tech futurism.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--circuit-grid), var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--glass-sheen), linear-gradient(var(--color-surface), var(--color-surface));
border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); background-image: var(--glass-sheen), linear-gradient(var(--color-surface-strong), var(--color-surface-strong));
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); cursor: pointer;
transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: linear-gradient(180deg, #3fc4ff, #1782c4); color: #041220; border-color: var(--color-accent); box-shadow: var(--shadow-md); }
.card { background: var(--color-surface); background-image: var(--glass-sheen), linear-gradient(var(--color-surface), var(--color-surface));
color: var(--color-text); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6); border: 1px solid var(--color-border); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: #081422; border-radius: var(--radius-md); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-primary); color: #041220; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/silicon-dreams.md */
```

## Design System Variables

```css
--bg: #050b14, --fg: #eaf4ff, --accent: #2fb8ff, --surface: #0d1b2a, --radius: 12px, --spacing: 16px, --font-display: 'Frutiger', 'Eurostile', 'Segoe UI', sans-serif, --font-body: 'Frutiger', 'Segoe UI', system-ui, sans-serif
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

[![Frutiger Aero](https://designmd.app/images/library/643.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Frutiger Aero](https://designmd.app/library/frutiger-aero)[![Cyberprep](https://designmd.app/images/library/611.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberprep](https://designmd.app/library/cyberprep)

Last synced: 8/30/2026
