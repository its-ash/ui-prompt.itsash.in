# Cybergoth

- Source: <https://designmd.app/library/cybergoth>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:44.311Z

Claude Artisan · Subculturas & estéticas de nicho1990s–2010s

# Cybergoth

Reference for subculturas & estéticas de nicho Cybergoth. Goth + rave + industrial fusion.

Cybergothcyber gothrivethead-adjacentBlack + toxic neon (green, UV pink)Industrial, PVC, goggles, dreadsRave energy meets goth darknessAggressive, futuristicniche

Use case: hero, superfície, conteúdo e grade responsiva; Black + toxic neon (green, UV pink); Industrial, PVC, goggles, dreads

![Cybergoth](https://designmd.app/images/library/610.png)

## Historical Context

Goth + rave + industrial fusion. Example: Early-2000s industrial/rave scene..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Cybergoth"
description: "Cybergoth visual system, translated from the Claude Artisan catalog for use in digital products. Black + toxic neon (green, UV pink); Industrial, PVC, goggles, dreads"
colors:
primary: "#b6ff1a"
background: "#08070a"
surface: "#131018"
text: "#f1e9ff"
accent: "#ff2fd0"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Orbitron', 'Rubik', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Rubik', 'Eurostile', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Rubik', 'Eurostile', system-ui, sans-serif"
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

Cybergoth visual system, translated from the Claude Artisan catalog for use in digital products. Black + toxic neon (green, UV pink); Industrial, PVC, goggles, dreads

- **Category:** niche
- **Era:** 1990s–2010s
- **Origin:** Goth + rave + industrial fusion.
- **Reference:** Early-2000s industrial/rave scene.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Black + toxic neon (green, UV pink)
- Industrial, PVC, goggles, dreads
- Rave energy meets goth darkness
- Aggressive, futuristic

## Colors

- **bg** — #08070a
- **surface** — #131018
- **surface-strong** — #1c1724
- **border** — #3a2f47
- **text** — #f1e9ff
- **text-muted** — #b9a9d6
- **primary** — #b6ff1a
- **accent** — #ff2fd0
- **uv** — #33f0ff
- **toxic-glow** — rgba(182, 255, 26, 0.35)

## Typography

- Display: 'Orbitron', 'Rubik', sans-serif
- Body: 'Rubik', 'Eurostile', system-ui, sans-serif
- Mono: 'Share Tech Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Black + toxic neon (green, UV pink); Industrial, PVC, goggles, dreads; Rave energy meets goth darkness; Aggressive, futuristic; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/cybergoth/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Cybergoth — design tokens */
/* 1990s–2010s | Goth + rave + industrial fusion, condensed */
:root {
/* color */
--color-bg: #08070a;
--color-surface: #131018;
--color-surface-strong: #1c1724;
--color-border: #3a2f47;
--color-text: #f1e9ff;
--color-text-muted: #b9a9d6;
--color-primary: #b6ff1a;
--color-accent: #ff2fd0;
--color-uv: #33f0ff;
--color-toxic-glow: rgba(182, 255, 26, 0.35);
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 6px var(--color-toxic-glow);
--shadow-md: 0 0 16px var(--color-toxic-glow), 0 4px 12px rgba(0,0,0,0.6);
--shadow-lg: 0 0 32px var(--color-toxic-glow), 0 8px 24px rgba(0,0,0,0.7);
/* font */
--font-sans: 'Rubik', 'Eurostile', system-ui, sans-serif;
--font-display: 'Orbitron', 'Rubik', sans-serif;
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
/* ease */
--ease-standard: cubic-bezier(0.7, 0, 0.3, 1);
/* extra: toxic neon edge glow + industrial hazard stripe accent */
--neon-edge: 1px solid var(--color-primary);
--hazard-stripe: repeating-linear-gradient(45deg, var(--color-accent) 0 6px, transparent 6px 12px);
}

/* ============================================================
Base component classes — Cybergoth
Signature move: toxic-neon edge glow (lime/magenta) on a near-black
ground, repeated on nav border, card border, and btn hover state.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--neon-edge); box-shadow: var(--shadow-sm); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .04em; text-transform: uppercase;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), border-color .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { border-color: var(--color-primary); box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-uv); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #08070a; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.card {
background: var(--color-surface); border: var(--neon-edge); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-surface-strong);
color: var(--color-accent); border: 1px solid var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cybergoth.md */
```

### Variables

```
--bg: #08070a, --fg: #f1e9ff, --accent: #b6ff1a, --surface: #131018, --radius: 4px, --spacing: 16px, --font-display: 'Orbitron', 'Rubik', sans-serif, --font-body: 'Rubik', 'Eurostile', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#08070a

#131018

#1c1724

#3a2f47

Secondary

#f1e9ff

#b9a9d6

#b6ff1a

#ff2fd0

#33f0ff

### Effects

Black + toxic neon (green, UV pink), Industrial, PVC, goggles, dreads, Rave energy meets goth darkness, Aggressive, futuristic, shadow

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

- **Name:** Cybergoth
- **Type:** claude-artisan/niche
- **Keywords:** Cybergoth, cyber goth, rivethead-adjacent, Black + toxic neon (green, UV pink), Industrial, PVC, goggles, dreads, Rave energy meets goth darkness, Aggressive, futuristic, niche
- **Era:** 1990s–2010s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #08070a, surface: #131018, surface-strong: #1c1724, border: #3a2f47
- **Secondary:** text: #f1e9ff, text-muted: #b9a9d6, primary: #b6ff1a, accent: #ff2fd0, uv: #33f0ff, toxic-glow: rgba(182, 255, 26, 0.35)

## Visual Effects

Black + toxic neon (green, UV pink), Industrial, PVC, goggles, dreads, Rave energy meets goth darkness, Aggressive, futuristic, shadow

## AI Visual Direction

Cybergoth, Black + toxic neon (green, UV pink), Industrial, PVC, goggles, dreads, Rave energy meets goth darkness, Aggressive, futuristic, Early-2000s industrial/rave scene.

## CSS Technical

```css
/* Cybergoth — design tokens */
/* 1990s–2010s | Goth + rave + industrial fusion, condensed */
:root {
/* color */
--color-bg: #08070a;
--color-surface: #131018;
--color-surface-strong: #1c1724;
--color-border: #3a2f47;
--color-text: #f1e9ff;
--color-text-muted: #b9a9d6;
--color-primary: #b6ff1a;
--color-accent: #ff2fd0;
--color-uv: #33f0ff;
--color-toxic-glow: rgba(182, 255, 26, 0.35);
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 6px var(--color-toxic-glow);
--shadow-md: 0 0 16px var(--color-toxic-glow), 0 4px 12px rgba(0,0,0,0.6);
--shadow-lg: 0 0 32px var(--color-toxic-glow), 0 8px 24px rgba(0,0,0,0.7);
/* font */
--font-sans: 'Rubik', 'Eurostile', system-ui, sans-serif;
--font-display: 'Orbitron', 'Rubik', sans-serif;
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
/* ease */
--ease-standard: cubic-bezier(0.7, 0, 0.3, 1);
/* extra: toxic neon edge glow + industrial hazard stripe accent */
--neon-edge: 1px solid var(--color-primary);
--hazard-stripe: repeating-linear-gradient(45deg, var(--color-accent) 0 6px, transparent 6px 12px);
}

/* ============================================================
Base component classes — Cybergoth
Signature move: toxic-neon edge glow (lime/magenta) on a near-black
ground, repeated on nav border, card border, and btn hover state.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--neon-edge); box-shadow: var(--shadow-sm); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .04em; text-transform: uppercase;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), border-color .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { border-color: var(--color-primary); box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-uv); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #08070a; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.card {
background: var(--color-surface); border: var(--neon-edge); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-surface-strong);
color: var(--color-accent); border: 1px solid var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cybergoth.md */
```

## Design System Variables

```css
--bg: #08070a, --fg: #f1e9ff, --accent: #b6ff1a, --surface: #131018, --radius: 4px, --spacing: 16px, --font-display: 'Orbitron', 'Rubik', sans-serif, --font-body: 'Rubik', 'Eurostile', system-ui, sans-serif
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

[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)[![Goth / Gothic](https://designmd.app/images/library/650.png) Claude Artisan · Subculturas & estéticas de nicho ### Goth / Gothic](https://designmd.app/library/goth)[![Acid Graphics / Acid Design](https://designmd.app/images/library/563.png) Claude Artisan · Subculturas & estéticas de nicho ### Acid Graphics / Acid Design](https://designmd.app/library/acid-graphics)

Last synced: 8/30/2026
