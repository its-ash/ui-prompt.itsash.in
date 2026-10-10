# Cyberpunk

- Source: <https://designmd.app/library/cyberpunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:45.303Z

Claude Artisan · Retrofuturismo & ficção especulativa1982–present

# Cyberpunk

Reference for retrofuturismo & ficção especulativa Cyberpunk. Literary roots (Gibson 'Neuromancer' 1984); visual codex from Blade Runner (1982); revived by Cyberpunk 2077.

Cyberpunkcyberhigh tech low lifeneon noirNeon glow (cyan/magenta) on near-blackDense HUD/glitch overlays, mono type, scanlinesRain-slick megacity noir, hologramsHigh-contrast, dystopian, tech-saturatedretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Neon glow (cyan/magenta) on near-black; Dense HUD/glitch overlays, mono type, scanlines

![Cyberpunk](https://designmd.app/images/library/612.png)

## Historical Context

Literary roots (Gibson 'Neuromancer' 1984); visual codex from Blade Runner (1982); revived by Cyberpunk 2077. Example: Blade Runner; Cyberpunk 2077 UI; Ghost in the Shell..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Cyberpunk"
description: "Cyberpunk visual system, translated from the Claude Artisan catalog for use in digital products. Neon glow (cyan/magenta) on near-black; Dense HUD/glitch overlays, mono type, scanlines"
colors:
primary: "#00fff5"
background: "#05010d"
surface: "#0d0221"
text: "#e8f9ff"
accent: "#ff003c"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Orbitron', 'Rajdhani', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Rajdhani', 'Chakra Petch', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Rajdhani', 'Chakra Petch', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "2px"
lg: "4px"
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

Cyberpunk visual system, translated from the Claude Artisan catalog for use in digital products. Neon glow (cyan/magenta) on near-black; Dense HUD/glitch overlays, mono type, scanlines

- **Category:** retrofuturism
- **Era:** 1982–present
- **Origin:** Literary roots (Gibson 'Neuromancer' 1984); visual codex from Blade Runner (1982); revived by Cyberpunk 2077.
- **Reference:** Blade Runner; Cyberpunk 2077 UI; Ghost in the Shell.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Neon glow (cyan/magenta) on near-black
- Dense HUD/glitch overlays, mono type, scanlines
- Rain-slick megacity noir, holograms
- High-contrast, dystopian, tech-saturated

## Colors

- **bg** — #05010d
- **surface** — #0d0221
- **surface-2** — #160a2b
- **text** — #e8f9ff
- **text-muted** — #7a8fa6
- **primary** — #00fff5
- **accent** — #ff003c
- **magenta** — #ff00e6
- **yellow** — #faff00
- **border** — #00fff5

## Typography

- Display: 'Orbitron', 'Rajdhani', sans-serif
- Body: 'Rajdhani', 'Chakra Petch', system-ui, sans-serif
- Mono: 'Share Tech Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Neon glow (cyan/magenta) on near-black; Dense HUD/glitch overlays, mono type, scanlines; Rain-slick megacity noir, holograms; High-contrast, dystopian, tech-saturated; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/cyberpunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Cyberpunk — design tokens (generated from style_catalog.json) */
/* 1982–present | Literary roots (Gibson 'Neuromancer' 1984); visual codex from Blade Runner (1982); revived by Cyberpunk 2077. */
:root {
/* color */
--color-bg: #05010d;
--color-surface: #0d0221;
--color-surface-2: #160a2b;
--color-text: #e8f9ff;
--color-text-muted: #7a8fa6;
--color-primary: #00fff5;
--color-accent: #ff003c;
--color-magenta: #ff00e6;
--color-yellow: #faff00;
--color-border: #00fff5;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-glow-cyan: 0 0 6px #00fff5, 0 0 18px rgba(0,255,245,0.6);
--shadow-glow-magenta: 0 0 6px #ff00e6, 0 0 18px rgba(255,0,230,0.6);
/* font */
--font-sans: 'Rajdhani', 'Chakra Petch', system-ui, sans-serif;
--font-display: 'Orbitron', 'Rajdhani', sans-serif;
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
--ease-standard: steps(3, end);
--ease-glitch: steps(2, jump-none);
/* extra (signature gradients, composite borders, filters) */
--scanline: repeating-linear-gradient(0deg, rgba(0,255,245,0.05) 0 1px, transparent 1px 3px);
--neon-border: 1px solid #00fff5;
}

/* ============================================================
Base component classes — cyberpunk
Signature move: neon glow (box/text-shadow) on near-black, mono type,
hard clipped corners, scanline overlay. Glow the borders, not the fills.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans);
position: relative; }
body::after { content:""; position: fixed; inset: 0; pointer-events: none; background: var(--scanline); z-index: 9999; }
.clip { clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); }
.card { background: var(--color-surface); border: var(--neon-border); box-shadow: var(--shadow-glow-cyan);
padding: var(--space-6); }
.nav { display:flex; gap: var(--space-4); align-items:center; background: var(--color-surface-2);
border-bottom: 1px solid var(--color-primary); box-shadow: 0 1px 0 var(--color-primary); padding: var(--space-3) var(--space-6); }
.btn { font: 700 var(--text-base)/1 var(--font-display); letter-spacing:.08em; text-transform: uppercase;
color: var(--color-primary); background: transparent; border: 1px solid var(--color-primary);
box-shadow: var(--shadow-glow-cyan); padding: var(--space-3) var(--space-6); cursor: pointer;
transition: color .1s var(--ease-standard), background .1s var(--ease-standard); }
.btn:hover { color: var(--color-bg); background: var(--color-primary); }
.btn:focus-visible { outline: 2px solid var(--color-magenta); outline-offset: 2px; }
.btn--danger { color: var(--color-accent); border-color: var(--color-accent); box-shadow: var(--shadow-glow-magenta); }
.input { font: var(--text-base) var(--font-mono); color: var(--color-text); background: #0a0518;
border: 1px solid var(--color-primary); padding: var(--space-3) var(--space-4); }
.input:focus { outline: none; box-shadow: var(--shadow-glow-cyan); }
.badge { font: 700 var(--text-xs) var(--font-mono); color: var(--color-yellow); border: 1px solid var(--color-yellow);
text-transform: uppercase; padding: 0 .5em; }
/* Accessibility: neon on black reads well, but pure-saturated small text can
shimmer — verify body text with contrast_check.py and offer reduced-motion. */
@media (prefers-reduced-motion: reduce) { body::after { display: none; } .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cyberpunk.md */
```

### Variables

```
--bg: #05010d, --fg: #e8f9ff, --accent: #00fff5, --surface: #0d0221, --radius: 2px, --spacing: 16px, --font-display: 'Orbitron', 'Rajdhani', sans-serif, --font-body: 'Rajdhani', 'Chakra Petch', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#05010d

#0d0221

#160a2b

#e8f9ff

Secondary

#7a8fa6

#00fff5

#ff003c

#ff00e6

#faff00

### Effects

Neon glow (cyan/magenta) on near-black, Dense HUD/glitch overlays, mono type, scanlines, Rain-slick megacity noir, holograms, High-contrast, dystopian, tech-saturated, shadow, blur

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

- **Name:** Cyberpunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Cyberpunk, cyber, high tech low life, neon noir, Neon glow (cyan/magenta) on near-black, Dense HUD/glitch overlays, mono type, scanlines, Rain-slick megacity noir, holograms, High-contrast, dystopian, tech-saturated, retrofuturism
- **Era:** 1982–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #05010d, surface: #0d0221, surface-2: #160a2b, text: #e8f9ff
- **Secondary:** text-muted: #7a8fa6, primary: #00fff5, accent: #ff003c, magenta: #ff00e6, yellow: #faff00, border: #00fff5

## Visual Effects

Neon glow (cyan/magenta) on near-black, Dense HUD/glitch overlays, mono type, scanlines, Rain-slick megacity noir, holograms, High-contrast, dystopian, tech-saturated, shadow, blur

## AI Visual Direction

Cyberpunk, Neon glow (cyan/magenta) on near-black, Dense HUD/glitch overlays, mono type, scanlines, Rain-slick megacity noir, holograms, High-contrast, dystopian, tech-saturated, Blade Runner; Cyberpunk 2077 UI; Ghost in the Shell.

## CSS Technical

```css
/* Cyberpunk — design tokens (generated from style_catalog.json) */
/* 1982–present | Literary roots (Gibson 'Neuromancer' 1984); visual codex from Blade Runner (1982); revived by Cyberpunk 2077. */
:root {
/* color */
--color-bg: #05010d;
--color-surface: #0d0221;
--color-surface-2: #160a2b;
--color-text: #e8f9ff;
--color-text-muted: #7a8fa6;
--color-primary: #00fff5;
--color-accent: #ff003c;
--color-magenta: #ff00e6;
--color-yellow: #faff00;
--color-border: #00fff5;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-glow-cyan: 0 0 6px #00fff5, 0 0 18px rgba(0,255,245,0.6);
--shadow-glow-magenta: 0 0 6px #ff00e6, 0 0 18px rgba(255,0,230,0.6);
/* font */
--font-sans: 'Rajdhani', 'Chakra Petch', system-ui, sans-serif;
--font-display: 'Orbitron', 'Rajdhani', sans-serif;
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
--ease-standard: steps(3, end);
--ease-glitch: steps(2, jump-none);
/* extra (signature gradients, composite borders, filters) */
--scanline: repeating-linear-gradient(0deg, rgba(0,255,245,0.05) 0 1px, transparent 1px 3px);
--neon-border: 1px solid #00fff5;
}

/* ============================================================
Base component classes — cyberpunk
Signature move: neon glow (box/text-shadow) on near-black, mono type,
hard clipped corners, scanline overlay. Glow the borders, not the fills.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans);
position: relative; }
body::after { content:""; position: fixed; inset: 0; pointer-events: none; background: var(--scanline); z-index: 9999; }
.clip { clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); }
.card { background: var(--color-surface); border: var(--neon-border); box-shadow: var(--shadow-glow-cyan);
padding: var(--space-6); }
.nav { display:flex; gap: var(--space-4); align-items:center; background: var(--color-surface-2);
border-bottom: 1px solid var(--color-primary); box-shadow: 0 1px 0 var(--color-primary); padding: var(--space-3) var(--space-6); }
.btn { font: 700 var(--text-base)/1 var(--font-display); letter-spacing:.08em; text-transform: uppercase;
color: var(--color-primary); background: transparent; border: 1px solid var(--color-primary);
box-shadow: var(--shadow-glow-cyan); padding: var(--space-3) var(--space-6); cursor: pointer;
transition: color .1s var(--ease-standard), background .1s var(--ease-standard); }
.btn:hover { color: var(--color-bg); background: var(--color-primary); }
.btn:focus-visible { outline: 2px solid var(--color-magenta); outline-offset: 2px; }
.btn--danger { color: var(--color-accent); border-color: var(--color-accent); box-shadow: var(--shadow-glow-magenta); }
.input { font: var(--text-base) var(--font-mono); color: var(--color-text); background: #0a0518;
border: 1px solid var(--color-primary); padding: var(--space-3) var(--space-4); }
.input:focus { outline: none; box-shadow: var(--shadow-glow-cyan); }
.badge { font: 700 var(--text-xs) var(--font-mono); color: var(--color-yellow); border: 1px solid var(--color-yellow);
text-transform: uppercase; padding: 0 .5em; }
/* Accessibility: neon on black reads well, but pure-saturated small text can
shimmer — verify body text with contrast_check.py and offer reduced-motion. */
@media (prefers-reduced-motion: reduce) { body::after { display: none; } .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cyberpunk.md */
```

## Design System Variables

```css
--bg: #05010d, --fg: #e8f9ff, --accent: #00fff5, --surface: #0d0221, --radius: 2px, --spacing: 16px, --font-display: 'Orbitron', 'Rajdhani', sans-serif, --font-body: 'Rajdhani', 'Chakra Petch', system-ui, sans-serif
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

[![Synthwave](https://designmd.app/images/library/313.png) Retro & Pop ### Synthwave](https://designmd.app/library/synthwave)[![Glitch Art](https://designmd.app/images/library/646.png) Claude Artisan · Textura, material & renderização ### Glitch Art](https://designmd.app/library/glitch-art)

Last synced: 8/30/2026
