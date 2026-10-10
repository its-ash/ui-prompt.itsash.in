# Afrofuturism

- Source: <https://designmd.app/library/afrofuturism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:07.293Z

Claude Artisan · Retrofuturismo & ficção especulativa1950s-present

# Afrofuturism

Reference for retrofuturismo & ficção especulativa Afrofuturism. A Black cultural and artistic movement connecting the African diaspora with speculative technology, myth, and future-making.

AfrofuturismAfrican futurismBlack futurist designCelestial black grounds with sun-gold and electric colorStrong radial systems, constellations, and orbit linesA future that references lineage, craft, and celebrationretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Celestial black grounds with sun-gold and electric color; Strong radial systems, constellations, and orbit lines

![Afrofuturism](https://designmd.app/images/library/567.png)

## Historical Context

A Black cultural and artistic movement connecting the African diaspora with speculative technology, myth, and future-making. Example: Sun Ra's cosmic visual language; the Afrofuturist world-building of Wakanda..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Afrofuturism"
description: "Afrofuturism visual system, translated from the Claude Artisan catalog for use in digital products. Celestial black grounds with sun-gold and electric color; Strong radial systems, constellations, and orbit lines"
colors:
primary: "#f4b942"
background: "#100c1b"
surface: "#1d1630"
text: "#fff8df"
accent: "#2dd4bf"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Inter, system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Inter, system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "12px"
lg: "24px"
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

Afrofuturism visual system, translated from the Claude Artisan catalog for use in digital products. Celestial black grounds with sun-gold and electric color; Strong radial systems, constellations, and orbit lines

- **Category:** retrofuturism
- **Era:** 1950s-present
- **Origin:** A Black cultural and artistic movement connecting the African diaspora with speculative technology, myth, and future-making.
- **Reference:** Sun Ra's cosmic visual language; the Afrofuturist world-building of Wakanda.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Celestial black grounds with sun-gold and electric color
- Strong radial systems, constellations, and orbit lines
- A future that references lineage, craft, and celebration

## Colors

- **bg** — #100c1b
- **surface** — #1d1630
- **surface-2** — #2c2145
- **text** — #fff8df
- **text-muted** — #d3c6b2
- **primary** — #f4b942
- **accent** — #2dd4bf
- **violet** — #a78bfa

## Typography

- Display: Georgia, serif
- Body: Inter, system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Celestial black grounds with sun-gold and electric color; Strong radial systems, constellations, and orbit lines; A future that references lineage, craft, and celebration; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 12px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/afrofuturism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Afrofuturism — design tokens (generated from style_catalog.json) */
/* 1950s-present | A Black cultural and artistic movement connecting the African diaspora with speculative technology, myth, and future-making. */
:root {
/* color */
--color-bg: #100c1b;
--color-surface: #1d1630;
--color-surface-2: #2c2145;
--color-text: #fff8df;
--color-text-muted: #d3c6b2;
--color-primary: #f4b942;
--color-accent: #2dd4bf;
--color-violet: #a78bfa;
/* radius */
--radius-sm: 4px;
--radius-md: 12px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-glow: 0 0 0 1px rgba(244,185,66,.45), 0 18px 45px rgba(0,0,0,.35);
--shadow-orbit: 0 0 28px rgba(45,212,191,.22);
/* font */
--font-sans: Inter, system-ui, sans-serif;
--font-display: Georgia, serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: .75rem;
--text-sm: .875rem;
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
--ease-standard: cubic-bezier(.22,.61,.36,1);
/* extra (signature gradients, composite borders, filters) */
--constellation: radial-gradient(circle at 20% 15%, #f4b942 0 1px, transparent 2px), radial-gradient(circle at 78% 34%, #2dd4bf 0 1px, transparent 2px);
}

/* Reusable component primitives: Afrofuturism. */
body { margin:0; min-height:100vh; color:var(--color-text); background:var(--color-bg); font-family:var(--font-sans); }
.wrap { max-width:880px; margin:0 auto; padding:var(--space-16) var(--space-6); display:grid; gap:var(--space-8); }
.nav { display:flex; align-items:center; gap:var(--space-4); padding:var(--space-4) var(--space-6); background:var(--color-surface); position:relative; z-index:1; }
.nav a { color:var(--color-text-muted); text-decoration:none; font-size:var(--text-sm); }.nav a:hover { color:var(--color-text); }
.btn { appearance:none; border:1px solid var(--color-text); border-radius:var(--radius-md); background:var(--color-surface-2); color:var(--color-text); padding:var(--space-3) var(--space-6); font:700 var(--text-sm)/1 var(--font-sans); cursor:pointer; transition:transform .18s var(--ease-standard),background .18s var(--ease-standard); }
.btn:hover { transform:translateY(-2px); background:var(--color-accent); }.btn:active { transform:translateY(0); }.btn:focus-visible,.input:focus-visible { outline:3px solid var(--color-accent); outline-offset:3px; }.btn[disabled] { opacity:.5; cursor:not-allowed; transform:none; }
.input { width:min(100%,500px); box-sizing:border-box; padding:var(--space-3) var(--space-4); border:1px solid var(--color-text-muted); border-radius:var(--radius-sm); background:var(--color-surface); color:var(--color-text); font:var(--text-base) var(--font-sans); }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:var(--space-4); }.card { background:var(--color-surface); padding:var(--space-6); position:relative; z-index:1; }.card h3 { margin:0 0 var(--space-2); font:700 var(--text-xl)/1.15 var(--font-display); }.card p { margin:0; color:var(--color-text-muted); }.row { display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-3); position:relative; z-index:1; }.badge { display:inline-flex; align-items:center; padding:var(--space-2) var(--space-3); border-radius:var(--radius-pill); background:var(--color-surface-2); font-size:var(--text-xs); }
@media (max-width:620px){.wrap{padding:var(--space-8) var(--space-4)}.nav{flex-wrap:wrap}.nav strong{width:100%}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--constellation);background-size:260px 220px;opacity:.75}.card{border:1px solid rgba(244,185,66,.45);box-shadow:var(--shadow-glow)}.btn--primary{background:var(--color-primary);color:#100c1b}.badge{border:1px solid var(--color-accent);color:var(--color-accent)}

/* Especificação de referência: references/00-flagship-implementation-specs/afrofuturism.md */
```

### Variables

```
--bg: #100c1b, --fg: #fff8df, --accent: #f4b942, --surface: #1d1630, --radius: 12px, --spacing: 16px, --font-display: Georgia, serif, --font-body: Inter, system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#100c1b

#1d1630

#2c2145

#fff8df

Secondary

#d3c6b2

#f4b942

#2dd4bf

#a78bfa

### Effects

Celestial black grounds with sun-gold and electric color, Strong radial systems, constellations, and orbit lines, A future that references lineage, craft, and celebration, shadow, blur

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

- **Name:** Afrofuturism
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Afrofuturism, African futurism, Black futurist design, Celestial black grounds with sun-gold and electric color, Strong radial systems, constellations, and orbit lines, A future that references lineage, craft, and celebration, retrofuturism
- **Era:** 1950s-present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #100c1b, surface: #1d1630, surface-2: #2c2145, text: #fff8df
- **Secondary:** text-muted: #d3c6b2, primary: #f4b942, accent: #2dd4bf, violet: #a78bfa

## Visual Effects

Celestial black grounds with sun-gold and electric color, Strong radial systems, constellations, and orbit lines, A future that references lineage, craft, and celebration, shadow, blur

## AI Visual Direction

Afrofuturism, Celestial black grounds with sun-gold and electric color, Strong radial systems, constellations, and orbit lines, A future that references lineage, craft, and celebration, Sun Ra's cosmic visual language; the Afrofuturist world-building of Wakanda.

## CSS Technical

```css
/* Afrofuturism — design tokens (generated from style_catalog.json) */
/* 1950s-present | A Black cultural and artistic movement connecting the African diaspora with speculative technology, myth, and future-making. */
:root {
/* color */
--color-bg: #100c1b;
--color-surface: #1d1630;
--color-surface-2: #2c2145;
--color-text: #fff8df;
--color-text-muted: #d3c6b2;
--color-primary: #f4b942;
--color-accent: #2dd4bf;
--color-violet: #a78bfa;
/* radius */
--radius-sm: 4px;
--radius-md: 12px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-glow: 0 0 0 1px rgba(244,185,66,.45), 0 18px 45px rgba(0,0,0,.35);
--shadow-orbit: 0 0 28px rgba(45,212,191,.22);
/* font */
--font-sans: Inter, system-ui, sans-serif;
--font-display: Georgia, serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: .75rem;
--text-sm: .875rem;
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
--ease-standard: cubic-bezier(.22,.61,.36,1);
/* extra (signature gradients, composite borders, filters) */
--constellation: radial-gradient(circle at 20% 15%, #f4b942 0 1px, transparent 2px), radial-gradient(circle at 78% 34%, #2dd4bf 0 1px, transparent 2px);
}

/* Reusable component primitives: Afrofuturism. */
body { margin:0; min-height:100vh; color:var(--color-text); background:var(--color-bg); font-family:var(--font-sans); }
.wrap { max-width:880px; margin:0 auto; padding:var(--space-16) var(--space-6); display:grid; gap:var(--space-8); }
.nav { display:flex; align-items:center; gap:var(--space-4); padding:var(--space-4) var(--space-6); background:var(--color-surface); position:relative; z-index:1; }
.nav a { color:var(--color-text-muted); text-decoration:none; font-size:var(--text-sm); }.nav a:hover { color:var(--color-text); }
.btn { appearance:none; border:1px solid var(--color-text); border-radius:var(--radius-md); background:var(--color-surface-2); color:var(--color-text); padding:var(--space-3) var(--space-6); font:700 var(--text-sm)/1 var(--font-sans); cursor:pointer; transition:transform .18s var(--ease-standard),background .18s var(--ease-standard); }
.btn:hover { transform:translateY(-2px); background:var(--color-accent); }.btn:active { transform:translateY(0); }.btn:focus-visible,.input:focus-visible { outline:3px solid var(--color-accent); outline-offset:3px; }.btn[disabled] { opacity:.5; cursor:not-allowed; transform:none; }
.input { width:min(100%,500px); box-sizing:border-box; padding:var(--space-3) var(--space-4); border:1px solid var(--color-text-muted); border-radius:var(--radius-sm); background:var(--color-surface); color:var(--color-text); font:var(--text-base) var(--font-sans); }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:var(--space-4); }.card { background:var(--color-surface); padding:var(--space-6); position:relative; z-index:1; }.card h3 { margin:0 0 var(--space-2); font:700 var(--text-xl)/1.15 var(--font-display); }.card p { margin:0; color:var(--color-text-muted); }.row { display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-3); position:relative; z-index:1; }.badge { display:inline-flex; align-items:center; padding:var(--space-2) var(--space-3); border-radius:var(--radius-pill); background:var(--color-surface-2); font-size:var(--text-xs); }
@media (max-width:620px){.wrap{padding:var(--space-8) var(--space-4)}.nav{flex-wrap:wrap}.nav strong{width:100%}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--constellation);background-size:260px 220px;opacity:.75}.card{border:1px solid rgba(244,185,66,.45);box-shadow:var(--shadow-glow)}.btn--primary{background:var(--color-primary);color:#100c1b}.badge{border:1px solid var(--color-accent);color:var(--color-accent)}

/* Especificação de referência: references/00-flagship-implementation-specs/afrofuturism.md */
```

## Design System Variables

```css
--bg: #100c1b, --fg: #fff8df, --accent: #f4b942, --surface: #1d1630, --radius: 12px, --spacing: 16px, --font-display: Georgia, serif, --font-body: Inter, system-ui, sans-serif
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

[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)[![Atompunk](https://designmd.app/images/library/582.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Atompunk](https://designmd.app/library/atompunk)[![Solarpunk](https://designmd.app/images/library/719.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Solarpunk](https://designmd.app/library/solarpunk)

Last synced: 8/30/2026
