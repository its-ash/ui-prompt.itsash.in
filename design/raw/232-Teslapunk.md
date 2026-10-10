# Teslapunk

- Source: <https://designmd.app/library/teslapunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:26.375Z

Claude Artisan · Retrofuturismo & ficção especulativa1890s–1920s (imagined future, revival ongoing)

# Teslapunk

Reference for retrofuturismo & ficção especulativa Teslapunk. Retrofuturist genre built around Nikola Tesla-era electrical imagining — the turn-of-the-century dream of a 'wireless electrical future' powered by high-voltage coils, arc lightning, and wireless power transmission (Wardenclyffe Tower, the Tesla coil).

Teslapunkelectropunkwireless-age retrofuturismarc-light futurismCrackling blue-white arc-lightning motifsPolished copper and brass coil detailingDeep midnight-blue backgroundsGlowing filament/vacuum-tube light sources; wireless-electrical-future optimismretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Crackling blue-white arc-lightning motifs; Polished copper and brass coil detailing

![Teslapunk](https://designmd.app/images/library/736.png)

## Historical Context

Retrofuturist genre built around Nikola Tesla-era electrical imagining — the turn-of-the-century dream of a 'wireless electrical future' powered by high-voltage coils, arc lightning, and wireless power transmission (Wardenclyffe Tower, the Tesla coil). Example: Tesla's Colorado Springs and Wardenclyffe experiments; period illustrations of induction coils and arc-lightning demonstrations..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Teslapunk"
description: "Teslapunk visual system, translated from the Claude Artisan catalog for use in digital products. Crackling blue-white arc-lightning motifs; Polished copper and brass coil detailing"
colors:
primary: "#4fd8ff"
background: "#060b1a"
surface: "#0d1830"
text: "#eaf4ff"
accent: "#d98a3d"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cinzel', 'Cormorant', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant', 'EB Garamond', system-ui, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant', 'EB Garamond', system-ui, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "3px"
md: "10px"
lg: "22px"
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

Teslapunk visual system, translated from the Claude Artisan catalog for use in digital products. Crackling blue-white arc-lightning motifs; Polished copper and brass coil detailing

- **Category:** retrofuturism
- **Era:** 1890s–1920s (imagined future, revival ongoing)
- **Origin:** Retrofuturist genre built around Nikola Tesla-era electrical imagining — the turn-of-the-century dream of a 'wireless electrical future' powered by high-voltage coils, arc lightning, and wireless power transmission (Wardenclyffe Tower, the Tesla coil).
- **Reference:** Tesla's Colorado Springs and Wardenclyffe experiments; period illustrations of induction coils and arc-lightning demonstrations.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Crackling blue-white arc-lightning motifs
- Polished copper and brass coil detailing
- Deep midnight-blue backgrounds
- Glowing filament/vacuum-tube light sources; wireless-electrical-future optimism

## Colors

- **bg** — #060b1a
- **surface** — #0d1830
- **surface-2** — #142544
- **text** — #eaf4ff
- **text-muted** — #9fb8d9
- **primary** — #4fd8ff
- **accent** — #d98a3d
- **brass** — #c9a24b
- **copper** — #a8622f

## Typography

- Display: 'Cinzel', 'Cormorant', serif
- Body: 'Cormorant', 'EB Garamond', system-ui, serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Crackling blue-white arc-lightning motifs; Polished copper and brass coil detailing; Deep midnight-blue backgrounds; Glowing filament/vacuum-tube light sources; wireless-electrical-future optimism; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 3px, 10px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/teslapunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Teslapunk — design tokens */
/* 1890s–1920s (imagined future, revival ongoing) | Retrofuturism built on Nikola Tesla-era wireless electricity */
:root {
/* color */
--color-bg: #060b1a;
--color-surface: #0d1830;
--color-surface-2: #142544;
--color-text: #eaf4ff;
--color-text-muted: #9fb8d9;
--color-primary: #4fd8ff;
--color-accent: #d98a3d;
--color-brass: #c9a24b;
--color-copper: #a8622f;
/* radius */
--radius-sm: 3px;
--radius-md: 10px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-arc: 0 0 22px rgba(79,216,255,0.45), 0 8px 22px rgba(0,0,0,0.5);
--shadow-brass: 0 4px 12px rgba(201,162,75,0.25), inset 0 1px 0 rgba(255,255,255,0.15);
/* blur */
--blur-arc: 12px;
/* font */
--font-sans: 'Cormorant', 'EB Garamond', system-ui, serif;
--font-display: 'Cinzel', 'Cormorant', serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.2, 0.8, 0.3, 1);
/* extra: crackling arc-lightning glow + brass coil trim */
--arc-gradient: radial-gradient(circle at 50% 0%, rgba(79,216,255,0.35), transparent 55%);
--brass-trim: linear-gradient(180deg, #e7c47a 0%, #c9a24b 45%, #8a6a2c 100%);
--bg-image: radial-gradient(140% 100% at 50% -10%, #142544 0%, #060b1a 60%, #030612 100%);
}

/* ============================================================
Base component classes — Teslapunk
Signature move: a crackling blue-white arc-lightning glow over
deep midnight blue, trimmed with polished brass/copper coil
detailing. Repeat the arc glow + brass trim pair everywhere.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid var(--color-brass);
box-shadow: 0 2px 12px rgba(79,216,255,0.15);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-brass);
cursor: pointer; transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-arc); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: #051018; font-weight: 700;
border: 1px solid var(--color-primary); box-shadow: var(--shadow-arc);
}
.btn--primary:hover { box-shadow: 0 0 32px rgba(79,216,255,0.6), 0 10px 28px rgba(0,0,0,0.5); }
.card {
background: var(--color-surface); background-image: var(--arc-gradient);
border-radius: var(--radius-lg); padding: var(--space-6);
border-top: 3px solid transparent; border-image: var(--brass-trim) 1;
box-shadow: var(--shadow-brass), 0 10px 26px rgba(0,0,0,0.4);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-copper);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-arc); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-brass); color: var(--color-brass);
box-shadow: inset 0 0 10px rgba(201,162,75,0.15);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/teslapunk.md */
```

### Variables

```
--bg: #060b1a, --fg: #eaf4ff, --accent: #4fd8ff, --surface: #0d1830, --radius: 10px, --spacing: 16px, --font-display: 'Cinzel', 'Cormorant', serif, --font-body: 'Cormorant', 'EB Garamond', system-ui, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#060b1a

#0d1830

#142544

#eaf4ff

Secondary

#9fb8d9

#4fd8ff

#d98a3d

#c9a24b

#a8622f

### Effects

Crackling blue-white arc-lightning motifs, Polished copper and brass coil detailing, Deep midnight-blue backgrounds, Glowing filament/vacuum-tube light sources; wireless-electrical-future optimism, shadow, blur

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

- **Name:** Teslapunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Teslapunk, electropunk, wireless-age retrofuturism, arc-light futurism, Crackling blue-white arc-lightning motifs, Polished copper and brass coil detailing, Deep midnight-blue backgrounds, Glowing filament/vacuum-tube light sources; wireless-electrical-future optimism, retrofuturism
- **Era:** 1890s–1920s (imagined future, revival ongoing)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #060b1a, surface: #0d1830, surface-2: #142544, text: #eaf4ff
- **Secondary:** text-muted: #9fb8d9, primary: #4fd8ff, accent: #d98a3d, brass: #c9a24b, copper: #a8622f

## Visual Effects

Crackling blue-white arc-lightning motifs, Polished copper and brass coil detailing, Deep midnight-blue backgrounds, Glowing filament/vacuum-tube light sources; wireless-electrical-future optimism, shadow, blur

## AI Visual Direction

Teslapunk, Crackling blue-white arc-lightning motifs, Polished copper and brass coil detailing, Deep midnight-blue backgrounds, Glowing filament/vacuum-tube light sources; wireless-electrical-future optimism, Tesla's Colorado Springs and Wardenclyffe experiments; period illustrations of induction coils and arc-lightning demonstrations.

## CSS Technical

```css
/* Teslapunk — design tokens */
/* 1890s–1920s (imagined future, revival ongoing) | Retrofuturism built on Nikola Tesla-era wireless electricity */
:root {
/* color */
--color-bg: #060b1a;
--color-surface: #0d1830;
--color-surface-2: #142544;
--color-text: #eaf4ff;
--color-text-muted: #9fb8d9;
--color-primary: #4fd8ff;
--color-accent: #d98a3d;
--color-brass: #c9a24b;
--color-copper: #a8622f;
/* radius */
--radius-sm: 3px;
--radius-md: 10px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-arc: 0 0 22px rgba(79,216,255,0.45), 0 8px 22px rgba(0,0,0,0.5);
--shadow-brass: 0 4px 12px rgba(201,162,75,0.25), inset 0 1px 0 rgba(255,255,255,0.15);
/* blur */
--blur-arc: 12px;
/* font */
--font-sans: 'Cormorant', 'EB Garamond', system-ui, serif;
--font-display: 'Cinzel', 'Cormorant', serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.2, 0.8, 0.3, 1);
/* extra: crackling arc-lightning glow + brass coil trim */
--arc-gradient: radial-gradient(circle at 50% 0%, rgba(79,216,255,0.35), transparent 55%);
--brass-trim: linear-gradient(180deg, #e7c47a 0%, #c9a24b 45%, #8a6a2c 100%);
--bg-image: radial-gradient(140% 100% at 50% -10%, #142544 0%, #060b1a 60%, #030612 100%);
}

/* ============================================================
Base component classes — Teslapunk
Signature move: a crackling blue-white arc-lightning glow over
deep midnight blue, trimmed with polished brass/copper coil
detailing. Repeat the arc glow + brass trim pair everywhere.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid var(--color-brass);
box-shadow: 0 2px 12px rgba(79,216,255,0.15);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-brass);
cursor: pointer; transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-arc); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: #051018; font-weight: 700;
border: 1px solid var(--color-primary); box-shadow: var(--shadow-arc);
}
.btn--primary:hover { box-shadow: 0 0 32px rgba(79,216,255,0.6), 0 10px 28px rgba(0,0,0,0.5); }
.card {
background: var(--color-surface); background-image: var(--arc-gradient);
border-radius: var(--radius-lg); padding: var(--space-6);
border-top: 3px solid transparent; border-image: var(--brass-trim) 1;
box-shadow: var(--shadow-brass), 0 10px 26px rgba(0,0,0,0.4);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-copper);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-arc); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-brass); color: var(--color-brass);
box-shadow: inset 0 0 10px rgba(201,162,75,0.15);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/teslapunk.md */
```

## Design System Variables

```css
--bg: #060b1a, --fg: #eaf4ff, --accent: #4fd8ff, --surface: #0d1830, --radius: 10px, --spacing: 16px, --font-display: 'Cinzel', 'Cormorant', serif, --font-body: 'Cormorant', 'EB Garamond', system-ui, serif
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

[![Atompunk](https://designmd.app/images/library/582.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Atompunk](https://designmd.app/library/atompunk)[![Dieselpunk](https://designmd.app/images/library/623.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Dieselpunk](https://designmd.app/library/dieselpunk)[![Clockpunk](https://designmd.app/images/library/599.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Clockpunk](https://designmd.app/library/clockpunk)

Last synced: 8/30/2026
