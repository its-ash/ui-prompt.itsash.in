# Nanopunk

- Source: <https://designmd.app/library/nanopunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:56.308Z

Claude Artisan · Retrofuturismo & ficção especulativa2000s–present

# Nanopunk

Reference for retrofuturismo & ficção especulativa Nanopunk. Cyberpunk offshoot centered on nanotechnology.

Nanopunknanotech futurismSwarming particle/grey-goo motifsClinical near-future techMolecular grid overlaysSmart-material morphing surfacesretrofuturism

Use case: grade modular responsiva; Swarming particle/grey-goo motifs; Clinical near-future tech

![Nanopunk](https://designmd.app/images/library/686.png)

## Historical Context

Cyberpunk offshoot centered on nanotechnology. Example: Prey; various near-future sci-fi UIs..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Nanopunk"
description: "Nanopunk visual system, translated from the Claude Artisan catalog for use in digital products. Swarming particle/grey-goo motifs; Clinical near-future tech"
colors:
primary: "#33f2c0"
background: "#050a09"
surface: "#0d1917"
text: "#e6fff8"
accent: "#a6ff3d"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Orbitron', 'Eurostile', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Eurostile', 'Orbitron', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Eurostile', 'Orbitron', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "6px"
lg: "12px"
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

Nanopunk visual system, translated from the Claude Artisan catalog for use in digital products. Swarming particle/grey-goo motifs; Clinical near-future tech

- **Category:** retrofuturism
- **Era:** 2000s–present
- **Origin:** Cyberpunk offshoot centered on nanotechnology.
- **Reference:** Prey; various near-future sci-fi UIs.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Swarming particle/grey-goo motifs
- Clinical near-future tech
- Molecular grid overlays
- Smart-material morphing surfaces

## Colors

- **bg** — #050a09
- **surface** — #0d1917
- **surface-strong** — #142622
- **border** — rgba(180, 255, 232, 0.22)
- **text** — #e6fff8
- **text-muted** — #8fc9bc
- **primary** — #33f2c0
- **accent** — #a6ff3d
- **swarm** — #5ad1ff
- **danger** — #ff4f6d

## Typography

- Display: 'Orbitron', 'Eurostile', sans-serif
- Body: 'Eurostile', 'Orbitron', system-ui, sans-serif
- Mono: 'Share Tech Mono', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Swarming particle/grey-goo motifs; Clinical near-future tech; Molecular grid overlays; Smart-material morphing surfaces; sombras e elevação

## Shapes

- Radius scale: 2px, 6px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/nanopunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Nanopunk — design tokens */
/* 2000s–present | Cyberpunk offshoot centered on nanotechnology, condensed */
:root {
/* color */
--color-bg: #050a09;
--color-surface: #0d1917;
--color-surface-strong: #142622;
--color-border: rgba(180, 255, 232, 0.22);
--color-text: #e6fff8;
--color-text-muted: #8fc9bc;
--color-primary: #33f2c0;
--color-accent: #a6ff3d;
--color-swarm: #5ad1ff;
--color-danger: #ff4f6d;
/* radius: clinical, precise, subtly rounded like a lab instrument */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 8px rgba(51,242,192,0.18);
--shadow-md: 0 0 22px rgba(51,242,192,0.22);
--shadow-lg: 0 0 44px rgba(51,242,192,0.26);
/* font */
--font-sans: 'Eurostile', 'Orbitron', system-ui, sans-serif;
--font-display: 'Orbitron', 'Eurostile', sans-serif;
--font-mono: 'Share Tech Mono', ui-monospace, monospace;
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
/* ease: fast clinical snaps */
--ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
/* extra: molecular grid overlay — a fine dot-lattice representing swarming
nanoparticles, plus a thin scanning highlight rule */
--molecular-grid: radial-gradient(circle, rgba(51,242,192,0.28) 0.5px, transparent 0.6px) 0 0/14px 14px;
--scan-rule: linear-gradient(90deg, transparent, var(--color-primary), transparent);
}

/* ============================================================
Base component classes — Nanopunk
Signature move: --molecular-grid, a fine dot-lattice suggesting swarming
nanoparticles, layered under nav/card surfaces, edged by a thin glowing
scan-line rule (--scan-rule) that repeats atop nav and btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { position: relative; display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--molecular-grid), var(--color-surface);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 1px; background: var(--scan-rule); }
.btn { font: 600 var(--text-sm)/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: box-shadow .18s var(--ease-standard), border-color .18s var(--ease-standard); }
.btn:hover { border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.btn:active { box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; }
.btn--primary { position: relative; background: var(--molecular-grid), var(--color-surface-strong);
border-color: var(--color-primary); color: var(--color-primary); box-shadow: var(--shadow-md); }
.card { position: relative; background: var(--molecular-grid), var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(51,242,192,0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-family: var(--font-mono);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-swarm); color: #032025; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/nanopunk.md */
```

### Variables

```
--bg: #050a09, --fg: #e6fff8, --accent: #33f2c0, --surface: #0d1917, --radius: 6px, --spacing: 16px, --font-display: 'Orbitron', 'Eurostile', sans-serif, --font-body: 'Eurostile', 'Orbitron', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#050a09

#0d1917

#142622

Secondary

#e6fff8

#8fc9bc

#33f2c0

#a6ff3d

#5ad1ff

#ff4f6d

### Effects

Swarming particle/grey-goo motifs, Clinical near-future tech, Molecular grid overlays, Smart-material morphing surfaces, shadow

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

- **Name:** Nanopunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Nanopunk, nanotech futurism, Swarming particle/grey-goo motifs, Clinical near-future tech, Molecular grid overlays, Smart-material morphing surfaces, retrofuturism
- **Era:** 2000s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #050a09, surface: #0d1917, surface-strong: #142622, border: rgba(180, 255, 232, 0.22)
- **Secondary:** text: #e6fff8, text-muted: #8fc9bc, primary: #33f2c0, accent: #a6ff3d, swarm: #5ad1ff, danger: #ff4f6d

## Visual Effects

Swarming particle/grey-goo motifs, Clinical near-future tech, Molecular grid overlays, Smart-material morphing surfaces, shadow

## AI Visual Direction

Nanopunk, Swarming particle/grey-goo motifs, Clinical near-future tech, Molecular grid overlays, Smart-material morphing surfaces, Prey; various near-future sci-fi UIs.

## CSS Technical

```css
/* Nanopunk — design tokens */
/* 2000s–present | Cyberpunk offshoot centered on nanotechnology, condensed */
:root {
/* color */
--color-bg: #050a09;
--color-surface: #0d1917;
--color-surface-strong: #142622;
--color-border: rgba(180, 255, 232, 0.22);
--color-text: #e6fff8;
--color-text-muted: #8fc9bc;
--color-primary: #33f2c0;
--color-accent: #a6ff3d;
--color-swarm: #5ad1ff;
--color-danger: #ff4f6d;
/* radius: clinical, precise, subtly rounded like a lab instrument */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 8px rgba(51,242,192,0.18);
--shadow-md: 0 0 22px rgba(51,242,192,0.22);
--shadow-lg: 0 0 44px rgba(51,242,192,0.26);
/* font */
--font-sans: 'Eurostile', 'Orbitron', system-ui, sans-serif;
--font-display: 'Orbitron', 'Eurostile', sans-serif;
--font-mono: 'Share Tech Mono', ui-monospace, monospace;
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
/* ease: fast clinical snaps */
--ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
/* extra: molecular grid overlay — a fine dot-lattice representing swarming
nanoparticles, plus a thin scanning highlight rule */
--molecular-grid: radial-gradient(circle, rgba(51,242,192,0.28) 0.5px, transparent 0.6px) 0 0/14px 14px;
--scan-rule: linear-gradient(90deg, transparent, var(--color-primary), transparent);
}

/* ============================================================
Base component classes — Nanopunk
Signature move: --molecular-grid, a fine dot-lattice suggesting swarming
nanoparticles, layered under nav/card surfaces, edged by a thin glowing
scan-line rule (--scan-rule) that repeats atop nav and btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav { position: relative; display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--molecular-grid), var(--color-surface);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 1px; background: var(--scan-rule); }
.btn { font: 600 var(--text-sm)/1 var(--font-sans); letter-spacing: .08em; text-transform: uppercase;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: box-shadow .18s var(--ease-standard), border-color .18s var(--ease-standard); }
.btn:hover { border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.btn:active { box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; }
.btn--primary { position: relative; background: var(--molecular-grid), var(--color-surface-strong);
border-color: var(--color-primary); color: var(--color-primary); box-shadow: var(--shadow-md); }
.card { position: relative; background: var(--molecular-grid), var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(51,242,192,0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-family: var(--font-mono);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-swarm); color: #032025; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/nanopunk.md */
```

## Design System Variables

```css
--bg: #050a09, --fg: #e6fff8, --accent: #33f2c0, --surface: #0d1917, --radius: 6px, --spacing: 16px, --font-display: 'Orbitron', 'Eurostile', sans-serif, --font-body: 'Eurostile', 'Orbitron', system-ui, sans-serif
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

[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)[![Biopunk](https://designmd.app/images/library/588.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Biopunk](https://designmd.app/library/biopunk)

Last synced: 8/30/2026
