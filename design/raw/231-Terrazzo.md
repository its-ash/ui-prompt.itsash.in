# Terrazzo

- Source: <https://designmd.app/library/terrazzo>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:24.259Z

Claude Artisan · Textura, material & renderizaçãoAncient → 2018 revival

# Terrazzo

Reference for textura, material & renderização Terrazzo. Venetian composite flooring; graphic revival ~2018.

Terrazzospeckledconfetti textureSpeckled chip pattern on solid groundPlayful multicolor flecksSoft pastel or bold color chipsFresh, tactile, retro-moderntexture

Use case: grade modular responsiva; Speckled chip pattern on solid ground; Playful multicolor flecks

![Terrazzo](https://designmd.app/images/library/735.png)

## Historical Context

Venetian composite flooring; graphic revival ~2018. Example: 2018-era brand patterns; interior design..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Terrazzo"
description: "Terrazzo visual system, translated from the Claude Artisan catalog for use in digital products. Speckled chip pattern on solid ground; Playful multicolor flecks"
colors:
primary: "#e2574c"
background: "#f7f3ec"
surface: "#ffffff"
text: "#221f1a"
accent: "#2f9e8f"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Poppins', 'Fraunces', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Poppins', 'Nunito', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Poppins', 'Nunito', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "14px"
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

Terrazzo visual system, translated from the Claude Artisan catalog for use in digital products. Speckled chip pattern on solid ground; Playful multicolor flecks

- **Category:** texture
- **Era:** Ancient → 2018 revival
- **Origin:** Venetian composite flooring; graphic revival ~2018.
- **Reference:** 2018-era brand patterns; interior design.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Speckled chip pattern on solid ground
- Playful multicolor flecks
- Soft pastel or bold color chips
- Fresh, tactile, retro-modern

## Colors

- **bg** — #f7f3ec
- **surface** — #ffffff
- **surface-strong** — #efe8db
- **border** — #e0d6c2
- **text** — #221f1a
- **text-muted** — #5c564a
- **primary** — #e2574c
- **accent** — #2f9e8f
- **chip-a** — #f2b705
- **chip-b** — #7c5cff
- **chip-c** — #2f9e8f
- **chip-d** — #e2574c

## Typography

- Display: 'Poppins', 'Fraunces', system-ui, sans-serif
- Body: 'Poppins', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Speckled chip pattern on solid ground; Playful multicolor flecks; Soft pastel or bold color chips; Fresh, tactile, retro-modern; sombras e elevação

## Shapes

- Radius scale: 8px, 14px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/terrazzo/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Terrazzo — design tokens */
/* Ancient → 2018 revival | Venetian composite flooring; graphic revival ~2018, condensed */
:root {
/* color */
--color-bg: #f7f3ec;
--color-surface: #ffffff;
--color-surface-strong: #efe8db;
--color-border: #e0d6c2;
--color-text: #221f1a;
--color-text-muted: #5c564a;
--color-primary: #e2574c;
--color-accent: #2f9e8f;
--color-chip-a: #f2b705;
--color-chip-b: #7c5cff;
--color-chip-c: #2f9e8f;
--color-chip-d: #e2574c;
/* radius: soft playful chip rounds */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(34,31,26,0.08);
--shadow-md: 0 6px 16px rgba(34,31,26,0.10);
--shadow-lg: 0 16px 36px rgba(34,31,26,0.14);
/* font: fresh, retro-modern geometric sans */
--font-sans: 'Poppins', 'Nunito', system-ui, sans-serif;
--font-display: 'Poppins', 'Fraunces', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.4, 0.64, 1);
/* extra: speckled chip-on-ground pattern built from radial gradients, the signature move */
--terrazzo-chips:
radial-gradient(circle at 12% 22%, var(--color-chip-a) 0 5px, transparent 6px),
radial-gradient(circle at 74% 18%, var(--color-chip-b) 0 4px, transparent 5px),
radial-gradient(circle at 40% 68%, var(--color-chip-c) 0 6px, transparent 7px),
radial-gradient(circle at 88% 72%, var(--color-chip-d) 0 4px, transparent 5px),
radial-gradient(circle at 60% 38%, var(--color-chip-a) 0 3px, transparent 4px),
radial-gradient(circle at 22% 82%, var(--color-chip-b) 0 3px, transparent 4px);
--terrazzo-size: 140px 140px;
}

/* ============================================================
Base component classes — Terrazzo
Signature move: a speckled multicolor "chip" pattern (layered radial
gradients on a solid ground) repeated as a background texture on nav,
card, and badge, evoking composite flooring flecks.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--terrazzo-chips), var(--color-surface); background-size: var(--terrazzo-size);
box-shadow: var(--shadow-sm); border: 1px solid var(--color-border); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card { background: var(--terrazzo-chips), var(--color-surface); background-size: var(--terrazzo-size);
color: var(--color-text); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
border: 1px solid var(--color-border); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); color: var(--color-text);
background: var(--terrazzo-chips), var(--color-surface-strong); background-size: 60px 60px;
border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/terrazzo.md */
```

### Variables

```
--bg: #f7f3ec, --fg: #221f1a, --accent: #e2574c, --surface: #ffffff, --radius: 14px, --spacing: 16px, --font-display: 'Poppins', 'Fraunces', system-ui, sans-serif, --font-body: 'Poppins', 'Nunito', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f7f3ec

#ffffff

#efe8db

#e0d6c2

Secondary

#221f1a

#5c564a

#e2574c

#2f9e8f

#f2b705

#7c5cff

### Effects

Speckled chip pattern on solid ground, Playful multicolor flecks, Soft pastel or bold color chips, Fresh, tactile, retro-modern, shadow

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

- **Name:** Terrazzo
- **Type:** claude-artisan/texture
- **Keywords:** Terrazzo, speckled, confetti texture, Speckled chip pattern on solid ground, Playful multicolor flecks, Soft pastel or bold color chips, Fresh, tactile, retro-modern, texture
- **Era:** Ancient → 2018 revival
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f7f3ec, surface: #ffffff, surface-strong: #efe8db, border: #e0d6c2
- **Secondary:** text: #221f1a, text-muted: #5c564a, primary: #e2574c, accent: #2f9e8f, chip-a: #f2b705, chip-b: #7c5cff, chip-c: #2f9e8f, chip-d: #e2574c

## Visual Effects

Speckled chip pattern on solid ground, Playful multicolor flecks, Soft pastel or bold color chips, Fresh, tactile, retro-modern, shadow

## AI Visual Direction

Terrazzo, Speckled chip pattern on solid ground, Playful multicolor flecks, Soft pastel or bold color chips, Fresh, tactile, retro-modern, 2018-era brand patterns; interior design.

## CSS Technical

```css
/* Terrazzo — design tokens */
/* Ancient → 2018 revival | Venetian composite flooring; graphic revival ~2018, condensed */
:root {
/* color */
--color-bg: #f7f3ec;
--color-surface: #ffffff;
--color-surface-strong: #efe8db;
--color-border: #e0d6c2;
--color-text: #221f1a;
--color-text-muted: #5c564a;
--color-primary: #e2574c;
--color-accent: #2f9e8f;
--color-chip-a: #f2b705;
--color-chip-b: #7c5cff;
--color-chip-c: #2f9e8f;
--color-chip-d: #e2574c;
/* radius: soft playful chip rounds */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(34,31,26,0.08);
--shadow-md: 0 6px 16px rgba(34,31,26,0.10);
--shadow-lg: 0 16px 36px rgba(34,31,26,0.14);
/* font: fresh, retro-modern geometric sans */
--font-sans: 'Poppins', 'Nunito', system-ui, sans-serif;
--font-display: 'Poppins', 'Fraunces', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.4, 0.64, 1);
/* extra: speckled chip-on-ground pattern built from radial gradients, the signature move */
--terrazzo-chips:
radial-gradient(circle at 12% 22%, var(--color-chip-a) 0 5px, transparent 6px),
radial-gradient(circle at 74% 18%, var(--color-chip-b) 0 4px, transparent 5px),
radial-gradient(circle at 40% 68%, var(--color-chip-c) 0 6px, transparent 7px),
radial-gradient(circle at 88% 72%, var(--color-chip-d) 0 4px, transparent 5px),
radial-gradient(circle at 60% 38%, var(--color-chip-a) 0 3px, transparent 4px),
radial-gradient(circle at 22% 82%, var(--color-chip-b) 0 3px, transparent 4px);
--terrazzo-size: 140px 140px;
}

/* ============================================================
Base component classes — Terrazzo
Signature move: a speckled multicolor "chip" pattern (layered radial
gradients on a solid ground) repeated as a background texture on nav,
card, and badge, evoking composite flooring flecks.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--terrazzo-chips), var(--color-surface); background-size: var(--terrazzo-size);
box-shadow: var(--shadow-sm); border: 1px solid var(--color-border); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card { background: var(--terrazzo-chips), var(--color-surface); background-size: var(--terrazzo-size);
color: var(--color-text); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
border: 1px solid var(--color-border); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); color: var(--color-text);
background: var(--terrazzo-chips), var(--color-surface-strong); background-size: 60px 60px;
border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/terrazzo.md */
```

## Design System Variables

```css
--bg: #f7f3ec, --fg: #221f1a, --accent: #e2574c, --surface: #ffffff, --radius: 14px, --spacing: 16px, --font-display: 'Poppins', 'Fraunces', system-ui, sans-serif, --font-body: 'Poppins', 'Nunito', system-ui, sans-serif
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

[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)[![Risograph](https://designmd.app/images/library/711.png) Claude Artisan · Textura, material & renderização ### Risograph](https://designmd.app/library/risograph)

Last synced: 8/30/2026
