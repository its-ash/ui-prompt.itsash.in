# Laserwave / Darksynth

- Source: <https://designmd.app/library/laserwave>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:19.302Z

Claude Artisan · Retrofuturismo & ficção especulativa2013–present

# Laserwave / Darksynth

Reference for retrofuturismo & ficção especulativa Laserwave / Darksynth. Darker, harder subgenre of synthwave.

Laserwave / DarksynthdarksynthdreamwaveAggressive neon on black, horror tonesRed/purple/cyan, chrome skullsCinematic, ominousVHS grain and glowretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Aggressive neon on black, horror tones; Red/purple/cyan, chrome skulls

![Laserwave / Darksynth](https://designmd.app/images/library/666.png)

## Historical Context

Darker, harder subgenre of synthwave. Example: Perturbator; Carpenter Brut visuals..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Laserwave / Darksynth"
description: "Laserwave / Darksynth visual system, translated from the Claude Artisan catalog for use in digital products. Aggressive neon on black, horror tones; Red/purple/cyan, chrome skulls"
colors:
primary: "#ff2b53"
background: "#0a0014"
surface: "#170a2e"
text: "#f5e9ff"
accent: "#9b30ff"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Orbitron', 'Rajdhani', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Rajdhani', 'Barlow Condensed', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Rajdhani', 'Barlow Condensed', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "8px"
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

Laserwave / Darksynth visual system, translated from the Claude Artisan catalog for use in digital products. Aggressive neon on black, horror tones; Red/purple/cyan, chrome skulls

- **Category:** retrofuturism
- **Era:** 2013–present
- **Origin:** Darker, harder subgenre of synthwave.
- **Reference:** Perturbator; Carpenter Brut visuals.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Aggressive neon on black, horror tones
- Red/purple/cyan, chrome skulls
- Cinematic, ominous
- VHS grain and glow

## Colors

- **bg** — #0a0014
- **surface** — #170a2e
- **surface-strong** — #23103f
- **border** — rgba(255,43,109,0.35)
- **text** — #f5e9ff
- **text-muted** — #b48ecf
- **primary** — #ff2b53
- **accent** — #9b30ff
- **glow-2** — #ff2b6d

## Typography

- Display: 'Orbitron', 'Rajdhani', system-ui, sans-serif
- Body: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif
- Mono: 'Share Tech Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Aggressive neon on black, horror tones; Red/purple/cyan, chrome skulls; Cinematic, ominous; VHS grain and glow; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/laserwave/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Laserwave / Darksynth — design tokens */
/* 2013–present | Darker, harder subgenre of synthwave, condensed */
:root {
/* color */
--color-bg: #0a0014;
--color-surface: #170a2e;
--color-surface-strong: #23103f;
--color-border: rgba(255,43,109,0.35);
--color-text: #f5e9ff;
--color-text-muted: #b48ecf;
--color-primary: #ff2b53;
--color-accent: #9b30ff;
--color-glow-2: #ff2b6d;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 8px rgba(255,43,83,0.45);
--shadow-md: 0 0 20px rgba(255,43,83,0.5), 0 0 40px rgba(155,48,255,0.25);
--shadow-lg: 0 0 32px rgba(255,43,83,0.6), 0 0 64px rgba(155,48,255,0.35);
/* font */
--font-sans: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif;
--font-display: 'Orbitron', 'Rajdhani', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: neon glow + horizontal VHS scanlines are the signature move */
--bg-image: radial-gradient(80% 60% at 50% -10%, rgba(155,48,255,0.35) 0%, transparent 60%),
radial-gradient(60% 40% at 90% 100%, rgba(255,43,83,0.25) 0%, transparent 60%), var(--color-bg);
--scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px);
}

/* ============================================================
Base component classes — laserwave / darksynth
Signature move: an aggressive dual-color neon glow (red + purple) on
borders and buttons, plus a faint VHS scanline overlay across the whole
page — cinematic and slightly ominous, repeated on nav, card and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--scanlines), var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .04em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-primary); box-shadow: var(--shadow-sm);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: linear-gradient(90deg, var(--color-primary), var(--color-accent)); color: #fff;
border-color: transparent; box-shadow: var(--shadow-md); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-primary); border: 1px solid var(--color-primary); text-shadow: 0 0 6px rgba(255,43,83,0.6); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/laserwave.md */
```

### Variables

```
--bg: #0a0014, --fg: #f5e9ff, --accent: #ff2b53, --surface: #170a2e, --radius: 4px, --spacing: 16px, --font-display: 'Orbitron', 'Rajdhani', system-ui, sans-serif, --font-body: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0014

#170a2e

#23103f

Secondary

#f5e9ff

#b48ecf

#ff2b53

#9b30ff

#ff2b6d

### Effects

Aggressive neon on black, horror tones, Red/purple/cyan, chrome skulls, Cinematic, ominous, VHS grain and glow, shadow

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

- **Name:** Laserwave / Darksynth
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Laserwave / Darksynth, darksynth, dreamwave, Aggressive neon on black, horror tones, Red/purple/cyan, chrome skulls, Cinematic, ominous, VHS grain and glow, retrofuturism
- **Era:** 2013–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0014, surface: #170a2e, surface-strong: #23103f, border: rgba(255,43,109,0.35)
- **Secondary:** text: #f5e9ff, text-muted: #b48ecf, primary: #ff2b53, accent: #9b30ff, glow-2: #ff2b6d

## Visual Effects

Aggressive neon on black, horror tones, Red/purple/cyan, chrome skulls, Cinematic, ominous, VHS grain and glow, shadow

## AI Visual Direction

Laserwave / Darksynth, Aggressive neon on black, horror tones, Red/purple/cyan, chrome skulls, Cinematic, ominous, VHS grain and glow, Perturbator; Carpenter Brut visuals.

## CSS Technical

```css
/* Laserwave / Darksynth — design tokens */
/* 2013–present | Darker, harder subgenre of synthwave, condensed */
:root {
/* color */
--color-bg: #0a0014;
--color-surface: #170a2e;
--color-surface-strong: #23103f;
--color-border: rgba(255,43,109,0.35);
--color-text: #f5e9ff;
--color-text-muted: #b48ecf;
--color-primary: #ff2b53;
--color-accent: #9b30ff;
--color-glow-2: #ff2b6d;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 8px rgba(255,43,83,0.45);
--shadow-md: 0 0 20px rgba(255,43,83,0.5), 0 0 40px rgba(155,48,255,0.25);
--shadow-lg: 0 0 32px rgba(255,43,83,0.6), 0 0 64px rgba(155,48,255,0.35);
/* font */
--font-sans: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif;
--font-display: 'Orbitron', 'Rajdhani', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: neon glow + horizontal VHS scanlines are the signature move */
--bg-image: radial-gradient(80% 60% at 50% -10%, rgba(155,48,255,0.35) 0%, transparent 60%),
radial-gradient(60% 40% at 90% 100%, rgba(255,43,83,0.25) 0%, transparent 60%), var(--color-bg);
--scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px);
}

/* ============================================================
Base component classes — laserwave / darksynth
Signature move: an aggressive dual-color neon glow (red + purple) on
borders and buttons, plus a faint VHS scanline overlay across the whole
page — cinematic and slightly ominous, repeated on nav, card and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--scanlines), var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .04em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-primary); box-shadow: var(--shadow-sm);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: linear-gradient(90deg, var(--color-primary), var(--color-accent)); color: #fff;
border-color: transparent; box-shadow: var(--shadow-md); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-primary); border: 1px solid var(--color-primary); text-shadow: 0 0 6px rgba(255,43,83,0.6); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/laserwave.md */
```

## Design System Variables

```css
--bg: #0a0014, --fg: #f5e9ff, --accent: #ff2b53, --surface: #170a2e, --radius: 4px, --spacing: 16px, --font-display: 'Orbitron', 'Rajdhani', system-ui, sans-serif, --font-body: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif
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

[![Synthwave](https://designmd.app/images/library/313.png) Retro & Pop ### Synthwave](https://designmd.app/library/synthwave)[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)

Last synced: 8/30/2026
