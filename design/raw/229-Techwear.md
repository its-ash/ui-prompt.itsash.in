# Techwear

- Source: <https://designmd.app/library/techwear>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:20.315Z

Claude Artisan · Subculturas & estéticas de nicho2014–present

# Techwear

Reference for subculturas & estéticas de nicho Techwear. Functional futuristic urban apparel subculture.

Techwearcyber-utilitydark ninjaAll-black technical fabrics, straps, bucklesCyberpunk-utility silhouetteMatte, tactical, waterproofUrban-ninja futurismniche

Use case: superfície material com conteúdo em camadas; All-black technical fabrics, straps, buckles; Cyberpunk-utility silhouette

![Techwear](https://designmd.app/images/library/733.png)

## Historical Context

Functional futuristic urban apparel subculture. Example: Acronym; techwear communities..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Techwear"
description: "Techwear visual system, translated from the Claude Artisan catalog for use in digital products. All-black technical fabrics, straps, buckles; Cyberpunk-utility silhouette"
colors:
primary: "#c8ff3d"
background: "#0b0c0d"
surface: "#17181a"
text: "#eceeef"
accent: "#ff5b2e"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Eurostile', 'Oswald', 'Inter', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Neue Haas Grotesk', 'Inter', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Neue Haas Grotesk', 'Inter', system-ui, sans-serif"
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

Techwear visual system, translated from the Claude Artisan catalog for use in digital products. All-black technical fabrics, straps, buckles; Cyberpunk-utility silhouette

- **Category:** niche
- **Era:** 2014–present
- **Origin:** Functional futuristic urban apparel subculture.
- **Reference:** Acronym; techwear communities.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- All-black technical fabrics, straps, buckles
- Cyberpunk-utility silhouette
- Matte, tactical, waterproof
- Urban-ninja futurism

## Colors

- **bg** — #0b0c0d
- **surface** — #17181a
- **surface-strong** — #212325
- **border** — #35383b
- **text** — #eceeef
- **text-muted** — #9aa0a4
- **primary** — #c8ff3d
- **accent** — #ff5b2e
- **strap** — #55595c

## Typography

- Display: 'Eurostile', 'Oswald', 'Inter', sans-serif
- Body: 'Neue Haas Grotesk', 'Inter', system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- All-black technical fabrics, straps, buckles; Cyberpunk-utility silhouette; Matte, tactical, waterproof; Urban-ninja futurism; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/techwear/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Techwear — design tokens */
/* 2014–present | Functional futuristic urban apparel subculture, condensed */
:root {
/* color */
--color-bg: #0b0c0d;
--color-surface: #17181a;
--color-surface-strong: #212325;
--color-border: #35383b;
--color-text: #eceeef;
--color-text-muted: #9aa0a4;
--color-primary: #c8ff3d;
--color-accent: #ff5b2e;
--color-strap: #55595c;
/* radius: mostly hard, small utilitarian rounds on buckle-like corners */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.5);
--shadow-md: 0 4px 10px rgba(0,0,0,0.55);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.6);
/* font: tactical condensed sans */
--font-sans: 'Neue Haas Grotesk', 'Inter', system-ui, sans-serif;
--font-display: 'Eurostile', 'Oswald', 'Inter', sans-serif;
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
--ease-standard: cubic-bezier(0.3, 0, 0.15, 1);
/* extra: a stitched strap seam (dashed border) + a corner buckle notch, the signature move */
--stitch-line: repeating-linear-gradient(90deg, var(--color-strap) 0 6px, transparent 6px 11px);
--buckle-notch: linear-gradient(135deg, transparent 8px, var(--color-border) 8px);
}

/* ============================================================
Base component classes — Techwear
Signature move: a stitched strap seam — a dashed thread line inset from
the edge — repeated on nav, card, and input, evoking webbing straps on
technical outerwear; a clipped buckle-notch corner on primary buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { position: relative; display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-md); }
.nav::after { content: ""; position: absolute; left: var(--space-4); right: var(--space-4); bottom: 5px; height: 1px;
background: var(--stitch-line); }
.btn {
font: 700 var(--text-sm)/1 var(--font-display); letter-spacing: .08em; text-transform: uppercase;
color: var(--color-text); padding: var(--space-3) var(--space-6);
clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #0b0c0d; border-color: var(--color-primary); }
.card { position: relative; background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
border: 1px solid var(--color-border); padding: var(--space-6) var(--space-6) var(--space-8); }
.card::after { content: ""; position: absolute; left: var(--space-6); right: var(--space-6); bottom: var(--space-4); height: 1px;
background: var(--stitch-line); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
border-bottom: 2px dashed var(--color-strap);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
text-transform: uppercase; letter-spacing: .06em; padding: .3em .8em; border-radius: var(--radius-pill);
color: #0b0c0d; background: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/techwear.md */
```

### Variables

```
--bg: #0b0c0d, --fg: #eceeef, --accent: #c8ff3d, --surface: #17181a, --radius: 4px, --spacing: 16px, --font-display: 'Eurostile', 'Oswald', 'Inter', sans-serif, --font-body: 'Neue Haas Grotesk', 'Inter', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0b0c0d

#17181a

#212325

#35383b

Secondary

#eceeef

#9aa0a4

#c8ff3d

#ff5b2e

#55595c

### Effects

All-black technical fabrics, straps, buckles, Cyberpunk-utility silhouette, Matte, tactical, waterproof, Urban-ninja futurism, shadow

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

- **Name:** Techwear
- **Type:** claude-artisan/niche
- **Keywords:** Techwear, cyber-utility, dark ninja, All-black technical fabrics, straps, buckles, Cyberpunk-utility silhouette, Matte, tactical, waterproof, Urban-ninja futurism, niche
- **Era:** 2014–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0b0c0d, surface: #17181a, surface-strong: #212325, border: #35383b
- **Secondary:** text: #eceeef, text-muted: #9aa0a4, primary: #c8ff3d, accent: #ff5b2e, strap: #55595c

## Visual Effects

All-black technical fabrics, straps, buckles, Cyberpunk-utility silhouette, Matte, tactical, waterproof, Urban-ninja futurism, shadow

## AI Visual Direction

Techwear, All-black technical fabrics, straps, buckles, Cyberpunk-utility silhouette, Matte, tactical, waterproof, Urban-ninja futurism, Acronym; techwear communities.

## CSS Technical

```css
/* Techwear — design tokens */
/* 2014–present | Functional futuristic urban apparel subculture, condensed */
:root {
/* color */
--color-bg: #0b0c0d;
--color-surface: #17181a;
--color-surface-strong: #212325;
--color-border: #35383b;
--color-text: #eceeef;
--color-text-muted: #9aa0a4;
--color-primary: #c8ff3d;
--color-accent: #ff5b2e;
--color-strap: #55595c;
/* radius: mostly hard, small utilitarian rounds on buckle-like corners */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.5);
--shadow-md: 0 4px 10px rgba(0,0,0,0.55);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.6);
/* font: tactical condensed sans */
--font-sans: 'Neue Haas Grotesk', 'Inter', system-ui, sans-serif;
--font-display: 'Eurostile', 'Oswald', 'Inter', sans-serif;
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
--ease-standard: cubic-bezier(0.3, 0, 0.15, 1);
/* extra: a stitched strap seam (dashed border) + a corner buckle notch, the signature move */
--stitch-line: repeating-linear-gradient(90deg, var(--color-strap) 0 6px, transparent 6px 11px);
--buckle-notch: linear-gradient(135deg, transparent 8px, var(--color-border) 8px);
}

/* ============================================================
Base component classes — Techwear
Signature move: a stitched strap seam — a dashed thread line inset from
the edge — repeated on nav, card, and input, evoking webbing straps on
technical outerwear; a clipped buckle-notch corner on primary buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { position: relative; display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-md); }
.nav::after { content: ""; position: absolute; left: var(--space-4); right: var(--space-4); bottom: 5px; height: 1px;
background: var(--stitch-line); }
.btn {
font: 700 var(--text-sm)/1 var(--font-display); letter-spacing: .08em; text-transform: uppercase;
color: var(--color-text); padding: var(--space-3) var(--space-6);
clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #0b0c0d; border-color: var(--color-primary); }
.card { position: relative; background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
border: 1px solid var(--color-border); padding: var(--space-6) var(--space-6) var(--space-8); }
.card::after { content: ""; position: absolute; left: var(--space-6); right: var(--space-6); bottom: var(--space-4); height: 1px;
background: var(--stitch-line); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
border-bottom: 2px dashed var(--color-strap);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
text-transform: uppercase; letter-spacing: .06em; padding: .3em .8em; border-radius: var(--radius-pill);
color: #0b0c0d; background: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/techwear.md */
```

## Design System Variables

```css
--bg: #0b0c0d, --fg: #eceeef, --accent: #c8ff3d, --surface: #17181a, --radius: 4px, --spacing: 16px, --font-display: 'Eurostile', 'Oswald', 'Inter', sans-serif, --font-body: 'Neue Haas Grotesk', 'Inter', system-ui, sans-serif
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

[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)[![Gorpcore](https://designmd.app/images/library/649.png) Claude Artisan · Subculturas & estéticas de nicho ### Gorpcore](https://designmd.app/library/gorpcore)

Last synced: 8/30/2026
