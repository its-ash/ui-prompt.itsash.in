# Pre-Raphaelite

- Source: <https://designmd.app/library/pre-raphaelite>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:24.310Z

Claude Artisan · Movimentos históricos1848–1880s

# Pre-Raphaelite

Reference for movimentos históricos Pre-Raphaelite. England, the Pre-Raphaelite Brotherhood (Rossetti, Millais, Holman Hunt, Burne-Jones) — a rejection of academic painting in favor of jewel-toned color, medieval-romantic subjects, and minute botanical detail.

Pre-RaphaelitePre-Raphaelite Brotherhood stylePRB aestheticDeep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paintDense, specific botanical motifs framing content, not repeating as flat patternFlowing organic linework (hair, vines, drapery) softening hard edges; medieval-romantic, painterly moodhistorical

Use case: hero, superfície, conteúdo e grade responsiva; Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint; Dense, specific botanical motifs framing content, not repeating as flat pattern

![Pre-Raphaelite](https://designmd.app/images/library/701.png)

## Historical Context

England, the Pre-Raphaelite Brotherhood (Rossetti, Millais, Holman Hunt, Burne-Jones) — a rejection of academic painting in favor of jewel-toned color, medieval-romantic subjects, and minute botanical detail. Example: Rossetti's Proserpine and Beata Beatrix; Millais's Ophelia; Burne-Jones's The Golden Stairs..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Pre-Raphaelite"
description: "Pre-Raphaelite visual system, translated from the Claude Artisan catalog for use in digital products. Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint; Dense, specific botanical motifs framing content, not repeating as flat pattern"
colors:
primary: "#8c1f3f"
background: "#1a0f14"
surface: "#2a151c"
text: "#f3e6d8"
accent: "#1f6b4a"
on-primary: "#FFFFFF"
on-surface: "#FFFFFF"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "Cormorant Garamond, EB Garamond, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "EB Garamond, Cormorant Garamond, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "EB Garamond, Cormorant Garamond, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "8px"
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

Pre-Raphaelite visual system, translated from the Claude Artisan catalog for use in digital products. Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint; Dense, specific botanical motifs framing content, not repeating as flat pattern

- **Category:** historical
- **Era:** 1848–1880s
- **Origin:** England, the Pre-Raphaelite Brotherhood (Rossetti, Millais, Holman Hunt, Burne-Jones) — a rejection of academic painting in favor of jewel-toned color, medieval-romantic subjects, and minute botanical detail.
- **Reference:** Rossetti's Proserpine and Beata Beatrix; Millais's Ophelia; Burne-Jones's The Golden Stairs.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint
- Dense, specific botanical motifs framing content, not repeating as flat pattern
- Flowing organic linework (hair, vines, drapery) softening hard edges; medieval-romantic, painterly mood

## Colors

- **bg** — #1a0f14
- **surface** — #2a151c
- **surface-2** — #3d1f28
- **text** — #f3e6d8
- **text-muted** — #cbb8a8
- **primary** — #8c1f3f
- **accent** — #1f6b4a
- **gold** — #c9a227
- **ivory** — #fff6e8

## Typography

- Display: Cormorant Garamond, EB Garamond, serif
- Body: EB Garamond, Cormorant Garamond, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint; Dense, specific botanical motifs framing content, not repeating as flat pattern; Flowing organic linework (hair, vines, drapery) softening hard edges; medieval-romantic, painterly mood; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 8px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/pre-raphaelite/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Pre-Raphaelite — design tokens */
/* 1848–1880s | Jewel-toned, painterly, botanical, medieval-romantic */
:root {
/* color */
--color-bg: #1a0f14;
--color-surface: #2a151c;
--color-surface-2: #3d1f28;
--color-text: #f3e6d8;
--color-text-muted: #cbb8a8;
--color-primary: #8c1f3f;
--color-accent: #1f6b4a;
--color-gold: #c9a227;
--color-ivory: #fff6e8;
/* radius */
--radius-sm: 2px;
--radius-md: 8px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-glaze: 0 1px 0 rgba(255,246,232,0.08) inset, 0 14px 34px rgba(0,0,0,0.5);
--shadow-gilt: 0 0 0 1px var(--color-gold), 0 10px 26px rgba(140,31,63,0.3);
/* blur */
--blur-soft: 4px;
/* font */
--font-sans: 'EB Garamond', 'Cormorant Garamond', serif;
--font-display: 'Cormorant Garamond', 'EB Garamond', serif;
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
--ease-standard: cubic-bezier(0.3, 0.6, 0.3, 1);
/* extra: botanical frame + gold glaze + vine border */
--gold-glaze: radial-gradient(circle at 30% 0%, rgba(201,162,39,0.16), transparent 55%);
--vine-border: linear-gradient(180deg, var(--color-accent) 0 8%, transparent 8% 92%, var(--color-accent) 92% 100%);
--bg-image: radial-gradient(120% 90% at 80% -10%, #3d1f28 0%, #1a0f14 55%, #120a0d 100%);
}

/* ============================================================
Base component classes — Pre-Raphaelite
Signature move: jewel-toned glazed color, specific botanical
framing motifs, flowing organic linework over hard edges.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-gold);
}
.nav a { color: var(--color-text); }
.btn {
font: 600 var(--text-base)/1 var(--font-display); color: var(--color-ivory);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-gold);
cursor: pointer; transition: box-shadow .25s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-gilt); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); border-color: var(--color-gold);
box-shadow: var(--shadow-gilt);
}
.card {
background: var(--color-surface); background-image: var(--gold-glaze);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-surface-2); box-shadow: var(--shadow-glaze);
position: relative;
}
.card::before {
content: ""; position: absolute; top: var(--space-4); bottom: var(--space-4); left: 0; width: 3px;
background: var(--vine-border); border-radius: var(--radius-pill);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-accent);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-gold); box-shadow: var(--shadow-gilt); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-accent); border: 1px solid var(--color-gold); color: var(--color-ivory);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/pre-raphaelite.md */
```

### Variables

```
--bg: #1a0f14, --fg: #f3e6d8, --accent: #8c1f3f, --surface: #2a151c, --radius: 8px, --spacing: 16px, --font-display: Cormorant Garamond, EB Garamond, serif, --font-body: EB Garamond, Cormorant Garamond, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1a0f14

#2a151c

#3d1f28

#f3e6d8

Secondary

#cbb8a8

#8c1f3f

#1f6b4a

#c9a227

#fff6e8

### Effects

Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint, Dense, specific botanical motifs framing content, not repeating as flat pattern, Flowing organic linework (hair, vines, drapery) softening hard edges; medieval-romantic, painterly mood, shadow, blur

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

- **Name:** Pre-Raphaelite
- **Type:** claude-artisan/historical
- **Keywords:** Pre-Raphaelite, Pre-Raphaelite Brotherhood style, PRB aesthetic, Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint, Dense, specific botanical motifs framing content, not repeating as flat pattern, Flowing organic linework (hair, vines, drapery) softening hard edges; medieval-romantic, painterly mood, historical
- **Era:** 1848–1880s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1a0f14, surface: #2a151c, surface-2: #3d1f28, text: #f3e6d8
- **Secondary:** text-muted: #cbb8a8, primary: #8c1f3f, accent: #1f6b4a, gold: #c9a227, ivory: #fff6e8

## Visual Effects

Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint, Dense, specific botanical motifs framing content, not repeating as flat pattern, Flowing organic linework (hair, vines, drapery) softening hard edges; medieval-romantic, painterly mood, shadow, blur

## AI Visual Direction

Pre-Raphaelite, Deep saturated jewel-tone palette (emerald, crimson, gold), built up like glazed paint, Dense, specific botanical motifs framing content, not repeating as flat pattern, Flowing organic linework (hair, vines, drapery) softening hard edges; medieval-romantic, painterly mood, Rossetti's Proserpine and Beata Beatrix; Millais's Ophelia; Burne-Jones's The Golden Stairs.

## CSS Technical

```css
/* Pre-Raphaelite — design tokens */
/* 1848–1880s | Jewel-toned, painterly, botanical, medieval-romantic */
:root {
/* color */
--color-bg: #1a0f14;
--color-surface: #2a151c;
--color-surface-2: #3d1f28;
--color-text: #f3e6d8;
--color-text-muted: #cbb8a8;
--color-primary: #8c1f3f;
--color-accent: #1f6b4a;
--color-gold: #c9a227;
--color-ivory: #fff6e8;
/* radius */
--radius-sm: 2px;
--radius-md: 8px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-glaze: 0 1px 0 rgba(255,246,232,0.08) inset, 0 14px 34px rgba(0,0,0,0.5);
--shadow-gilt: 0 0 0 1px var(--color-gold), 0 10px 26px rgba(140,31,63,0.3);
/* blur */
--blur-soft: 4px;
/* font */
--font-sans: 'EB Garamond', 'Cormorant Garamond', serif;
--font-display: 'Cormorant Garamond', 'EB Garamond', serif;
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
--ease-standard: cubic-bezier(0.3, 0.6, 0.3, 1);
/* extra: botanical frame + gold glaze + vine border */
--gold-glaze: radial-gradient(circle at 30% 0%, rgba(201,162,39,0.16), transparent 55%);
--vine-border: linear-gradient(180deg, var(--color-accent) 0 8%, transparent 8% 92%, var(--color-accent) 92% 100%);
--bg-image: radial-gradient(120% 90% at 80% -10%, #3d1f28 0%, #1a0f14 55%, #120a0d 100%);
}

/* ============================================================
Base component classes — Pre-Raphaelite
Signature move: jewel-toned glazed color, specific botanical
framing motifs, flowing organic linework over hard edges.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-gold);
}
.nav a { color: var(--color-text); }
.btn {
font: 600 var(--text-base)/1 var(--font-display); color: var(--color-ivory);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-gold);
cursor: pointer; transition: box-shadow .25s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-gilt); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); border-color: var(--color-gold);
box-shadow: var(--shadow-gilt);
}
.card {
background: var(--color-surface); background-image: var(--gold-glaze);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-surface-2); box-shadow: var(--shadow-glaze);
position: relative;
}
.card::before {
content: ""; position: absolute; top: var(--space-4); bottom: var(--space-4); left: 0; width: 3px;
background: var(--vine-border); border-radius: var(--radius-pill);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-accent);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-gold); box-shadow: var(--shadow-gilt); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-accent); border: 1px solid var(--color-gold); color: var(--color-ivory);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/pre-raphaelite.md */
```

## Design System Variables

```css
--bg: #1a0f14, --fg: #f3e6d8, --accent: #8c1f3f, --surface: #2a151c, --radius: 8px, --spacing: 16px, --font-display: Cormorant Garamond, EB Garamond, serif, --font-body: EB Garamond, Cormorant Garamond, serif
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

[![Art Nouveau](https://designmd.app/images/library/305.png) Arte & Ilustracao ### Art Nouveau](https://designmd.app/library/art-nouveau)[![Arts & Crafts](https://designmd.app/images/library/578.png) Claude Artisan · Movimentos históricos ### Arts & Crafts](https://designmd.app/library/arts-and-crafts)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)

Last synced: 8/30/2026
