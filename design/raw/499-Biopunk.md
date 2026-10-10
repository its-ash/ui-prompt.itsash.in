# Biopunk

- Source: <https://designmd.app/library/biopunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:41.299Z

Claude Artisan · Retrofuturismo & ficção especulativa1990s–present

# Biopunk

Reference for retrofuturismo & ficção especulativa Biopunk. Offshoot of cyberpunk focused on biotechnology.

Biopunkorganic sci-fibiotechWet organic textures, flesh and fungusBio-luminescence, veins, membranesGenetic/lab motifsBody-horror-adjacent futurismretrofuturism

Use case: superfície material com conteúdo em camadas; Wet organic textures, flesh and fungus; Bio-luminescence, veins, membranes

![Biopunk](https://designmd.app/images/library/588.png)

## Historical Context

Offshoot of cyberpunk focused on biotechnology. Example: The Thing; Scorn; Annihilation..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Biopunk"
description: "Biopunk visual system, translated from the Claude Artisan catalog for use in digital products. Wet organic textures, flesh and fungus; Bio-luminescence, veins, membranes"
colors:
primary: "#39ff8c"
background: "#0a1410"
surface: "#10201a"
text: "#e6f5ea"
accent: "#d63bff"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Space Grotesk', 'IBM Plex Mono', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
lg: "16px"
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

Biopunk visual system, translated from the Claude Artisan catalog for use in digital products. Wet organic textures, flesh and fungus; Bio-luminescence, veins, membranes

- **Category:** retrofuturism
- **Era:** 1990s–present
- **Origin:** Offshoot of cyberpunk focused on biotechnology.
- **Reference:** The Thing; Scorn; Annihilation.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Wet organic textures, flesh and fungus
- Bio-luminescence, veins, membranes
- Genetic/lab motifs
- Body-horror-adjacent futurism

## Colors

- **bg** — #0a1410
- **surface** — #10201a
- **surface-strong** — #16291f
- **border** — #2f6b4c
- **text** — #e6f5ea
- **text-muted** — #9fc9ac
- **primary** — #39ff8c
- **accent** — #d63bff
- **membrane** — #1f3d2c

## Typography

- Display: 'Space Grotesk', 'IBM Plex Mono', sans-serif
- Body: 'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Wet organic textures, flesh and fungus; Bio-luminescence, veins, membranes; Genetic/lab motifs; Body-horror-adjacent futurism; sombras e elevação

## Shapes

- Radius scale: 40% 60% 55% 45% / 45% 40% 60% 55%, 60% 40% 55% 45% / 50% 55% 45% 50%, 55% 45% 60% 40% / 45% 55% 40% 60%.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/biopunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Biopunk — design tokens */
/* 1990s–present | Offshoot of cyberpunk focused on biotechnology, condensed */
:root {
/* color */
--color-bg: #0a1410;
--color-surface: #10201a;
--color-surface-strong: #16291f;
--color-border: #2f6b4c;
--color-text: #e6f5ea;
--color-text-muted: #9fc9ac;
--color-primary: #39ff8c;
--color-accent: #d63bff;
--color-membrane: #1f3d2c;
/* radius — organic membrane blobs, never geometric */
--radius-sm: 40% 60% 55% 45% / 45% 40% 60% 55%;
--radius-md: 60% 40% 55% 45% / 50% 55% 45% 50%;
--radius-lg: 55% 45% 60% 40% / 45% 55% 40% 60%;
--radius-pill: 999px;
/* shadow — bioluminescent glow instead of dark drop shadow */
--shadow-sm: 0 0 10px rgba(57,255,140,0.25);
--shadow-md: 0 0 22px rgba(57,255,140,0.3);
--shadow-lg: 0 0 40px rgba(57,255,140,0.35);
/* font */
--font-sans: 'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif;
--font-display: 'Space Grotesk', 'IBM Plex Mono', sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra — signature: veined membrane texture + glow border, like a lit petri dish */
--vein-texture: radial-gradient(circle at 30% 20%, rgba(57,255,140,0.12) 0%, transparent 35%),
radial-gradient(circle at 75% 70%, rgba(214,59,255,0.1) 0%, transparent 40%);
--glow-border: 1px solid rgba(57,255,140,0.5);
}

/* ============================================================
Base component classes — Biopunk
Signature move: irregular organic "membrane" border-radius plus a soft
bioluminescent glow shadow and faint vein texture. Repeated on nav, card,
and buttons so surfaces read as living tissue, not hard UI chrome.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--vein-texture), var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--glow-border); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: var(--glow-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #06180f; border-color: var(--color-primary); }
.card { background: var(--vein-texture), var(--color-surface); border-radius: var(--radius-lg); border: var(--glow-border);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); background: var(--color-surface);
border: var(--glow-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(57,255,140,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-membrane);
border: var(--glow-border); color: var(--color-primary); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/biopunk.md */
```

### Variables

```
--bg: #0a1410, --fg: #e6f5ea, --accent: #39ff8c, --surface: #10201a, --radius: 60% 40% 55% 45% / 50% 55% 45% 50%, --spacing: 16px, --font-display: 'Space Grotesk', 'IBM Plex Mono', sans-serif, --font-body: 'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a1410

#10201a

#16291f

#2f6b4c

Secondary

#e6f5ea

#9fc9ac

#39ff8c

#d63bff

#1f3d2c

### Effects

Wet organic textures, flesh and fungus, Bio-luminescence, veins, membranes, Genetic/lab motifs, Body-horror-adjacent futurism, shadow

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

- **Name:** Biopunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Biopunk, organic sci-fi, biotech, Wet organic textures, flesh and fungus, Bio-luminescence, veins, membranes, Genetic/lab motifs, Body-horror-adjacent futurism, retrofuturism
- **Era:** 1990s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a1410, surface: #10201a, surface-strong: #16291f, border: #2f6b4c
- **Secondary:** text: #e6f5ea, text-muted: #9fc9ac, primary: #39ff8c, accent: #d63bff, membrane: #1f3d2c

## Visual Effects

Wet organic textures, flesh and fungus, Bio-luminescence, veins, membranes, Genetic/lab motifs, Body-horror-adjacent futurism, shadow

## AI Visual Direction

Biopunk, Wet organic textures, flesh and fungus, Bio-luminescence, veins, membranes, Genetic/lab motifs, Body-horror-adjacent futurism, The Thing; Scorn; Annihilation.

## CSS Technical

```css
/* Biopunk — design tokens */
/* 1990s–present | Offshoot of cyberpunk focused on biotechnology, condensed */
:root {
/* color */
--color-bg: #0a1410;
--color-surface: #10201a;
--color-surface-strong: #16291f;
--color-border: #2f6b4c;
--color-text: #e6f5ea;
--color-text-muted: #9fc9ac;
--color-primary: #39ff8c;
--color-accent: #d63bff;
--color-membrane: #1f3d2c;
/* radius — organic membrane blobs, never geometric */
--radius-sm: 40% 60% 55% 45% / 45% 40% 60% 55%;
--radius-md: 60% 40% 55% 45% / 50% 55% 45% 50%;
--radius-lg: 55% 45% 60% 40% / 45% 55% 40% 60%;
--radius-pill: 999px;
/* shadow — bioluminescent glow instead of dark drop shadow */
--shadow-sm: 0 0 10px rgba(57,255,140,0.25);
--shadow-md: 0 0 22px rgba(57,255,140,0.3);
--shadow-lg: 0 0 40px rgba(57,255,140,0.35);
/* font */
--font-sans: 'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif;
--font-display: 'Space Grotesk', 'IBM Plex Mono', sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra — signature: veined membrane texture + glow border, like a lit petri dish */
--vein-texture: radial-gradient(circle at 30% 20%, rgba(57,255,140,0.12) 0%, transparent 35%),
radial-gradient(circle at 75% 70%, rgba(214,59,255,0.1) 0%, transparent 40%);
--glow-border: 1px solid rgba(57,255,140,0.5);
}

/* ============================================================
Base component classes — Biopunk
Signature move: irregular organic "membrane" border-radius plus a soft
bioluminescent glow shadow and faint vein texture. Repeated on nav, card,
and buttons so surfaces read as living tissue, not hard UI chrome.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--vein-texture), var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--glow-border); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: var(--glow-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #06180f; border-color: var(--color-primary); }
.card { background: var(--vein-texture), var(--color-surface); border-radius: var(--radius-lg); border: var(--glow-border);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); background: var(--color-surface);
border: var(--glow-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(57,255,140,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-membrane);
border: var(--glow-border); color: var(--color-primary); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/biopunk.md */
```

## Design System Variables

```css
--bg: #0a1410, --fg: #e6f5ea, --accent: #39ff8c, --surface: #10201a, --radius: 60% 40% 55% 45% / 50% 55% 45% 50%, --spacing: 16px, --font-display: 'Space Grotesk', 'IBM Plex Mono', sans-serif, --font-body: 'Space Grotesk', 'IBM Plex Sans', system-ui, sans-serif
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

[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)[![Organic / Biomorphic](https://designmd.app/images/library/695.png) Claude Artisan · Minimal, maximal & orgânico ### Organic / Biomorphic](https://designmd.app/library/organic-design)

Last synced: 8/30/2026
