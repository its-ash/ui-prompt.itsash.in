# Liminal Spaces

- Source: <https://designmd.app/library/liminal-spaces>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:26.318Z

Claude Artisan · Subculturas & estéticas de nicho2019–present

# Liminal Spaces

Reference for subculturas & estéticas de nicho Liminal Spaces. Internet fascination with empty transitional spaces.

Liminal SpacesbackroomsliminalEmpty familiar-yet-wrong places (malls, halls)Fluorescent lighting, worn carpetUncanny emptiness and déjà-vuNostalgic uneaseniche

Use case: hero, superfície, conteúdo e grade responsiva; Empty familiar-yet-wrong places (malls, halls); Fluorescent lighting, worn carpet

![Liminal Spaces](https://designmd.app/images/library/669.png)

## Historical Context

Internet fascination with empty transitional spaces. Example: The Backrooms; empty-mall photos..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Liminal Spaces"
description: "Liminal Spaces visual system, translated from the Claude Artisan catalog for use in digital products. Empty familiar-yet-wrong places (malls, halls); Fluorescent lighting, worn carpet"
colors:
primary: "#8a6a3d"
background: "#d9cf9a"
surface: "#e7ddab"
text: "#24211a"
accent: "#5f6b3f"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Arial', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Arial', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Arial', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "2px"
lg: "2px"
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

Liminal Spaces visual system, translated from the Claude Artisan catalog for use in digital products. Empty familiar-yet-wrong places (malls, halls); Fluorescent lighting, worn carpet

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Internet fascination with empty transitional spaces.
- **Reference:** The Backrooms; empty-mall photos.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Empty familiar-yet-wrong places (malls, halls)
- Fluorescent lighting, worn carpet
- Uncanny emptiness and déjà-vu
- Nostalgic unease

## Colors

- **bg** — #d9cf9a
- **surface** — #e7ddab
- **surface-strong** — #cfc188
- **border** — #b0a267
- **text** — #24211a
- **text-muted** — #565034
- **primary** — #8a6a3d
- **accent** — #5f6b3f
- **fluoro** — #eef0a8

## Typography

- Display: 'Arial', system-ui, sans-serif
- Body: 'Arial', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Empty familiar-yet-wrong places (malls, halls); Fluorescent lighting, worn carpet; Uncanny emptiness and déjà-vu; Nostalgic unease; sombras e elevação

## Shapes

- Radius scale: 0px, 2px, 2px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/liminal-spaces/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Liminal Spaces — design tokens */
/* 2019–present | Internet fascination with empty transitional spaces, condensed */
:root {
/* color */
--color-bg: #d9cf9a;
--color-surface: #e7ddab;
--color-surface-strong: #cfc188;
--color-border: #b0a267;
--color-text: #24211a;
--color-text-muted: #565034;
--color-primary: #8a6a3d;
--color-accent: #5f6b3f;
--color-fluoro: #eef0a8;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 4px rgba(20,18,10,0.30);
--shadow-md: 0 0 26px rgba(238,240,168,0.35), 0 2px 8px rgba(20,18,10,0.35);
--shadow-lg: 0 0 40px rgba(238,240,168,0.4), 0 6px 18px rgba(20,18,10,0.4);
/* font */
--font-sans: 'Arial', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Arial', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: fluorescent buzz-glow + vignette are the signature move */
--vignette: radial-gradient(120% 90% at 50% 30%, transparent 45%, rgba(10,9,4,0.30) 100%);
--hum-line: repeating-linear-gradient(180deg, rgba(238,240,168,0.05) 0px, transparent 2px, transparent 5px);
}

/* ============================================================
Base component classes — liminal spaces
Signature move: a sickly fluorescent glow (buzzing box-shadow) around
interactive surfaces, plus a heavy vignette over the whole page — the
familiar-yet-wrong feeling of an empty hallway under bad lighting.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--vignette), var(--hum-line), var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-md); box-shadow: var(--shadow-md); }
.btn { font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: box-shadow .3s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); }
.btn:active { box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-fluoro); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: var(--color-primary); color: var(--color-fluoro); border-color: var(--color-primary);
box-shadow: var(--shadow-md); }
.card { background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-fluoro); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-fluoro); color: #2b2911;
border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/liminal-spaces.md */
```

### Variables

```
--bg: #d9cf9a, --fg: #24211a, --accent: #8a6a3d, --surface: #e7ddab, --radius: 2px, --spacing: 16px, --font-display: 'Arial', system-ui, sans-serif, --font-body: 'Arial', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#d9cf9a

#e7ddab

#cfc188

#b0a267

Secondary

#24211a

#565034

#8a6a3d

#5f6b3f

#eef0a8

### Effects

Empty familiar-yet-wrong places (malls, halls), Fluorescent lighting, worn carpet, Uncanny emptiness and déjà-vu, Nostalgic unease, shadow

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

- **Name:** Liminal Spaces
- **Type:** claude-artisan/niche
- **Keywords:** Liminal Spaces, backrooms, liminal, Empty familiar-yet-wrong places (malls, halls), Fluorescent lighting, worn carpet, Uncanny emptiness and déjà-vu, Nostalgic unease, niche
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #d9cf9a, surface: #e7ddab, surface-strong: #cfc188, border: #b0a267
- **Secondary:** text: #24211a, text-muted: #565034, primary: #8a6a3d, accent: #5f6b3f, fluoro: #eef0a8

## Visual Effects

Empty familiar-yet-wrong places (malls, halls), Fluorescent lighting, worn carpet, Uncanny emptiness and déjà-vu, Nostalgic unease, shadow

## AI Visual Direction

Liminal Spaces, Empty familiar-yet-wrong places (malls, halls), Fluorescent lighting, worn carpet, Uncanny emptiness and déjà-vu, Nostalgic unease, The Backrooms; empty-mall photos.

## CSS Technical

```css
/* Liminal Spaces — design tokens */
/* 2019–present | Internet fascination with empty transitional spaces, condensed */
:root {
/* color */
--color-bg: #d9cf9a;
--color-surface: #e7ddab;
--color-surface-strong: #cfc188;
--color-border: #b0a267;
--color-text: #24211a;
--color-text-muted: #565034;
--color-primary: #8a6a3d;
--color-accent: #5f6b3f;
--color-fluoro: #eef0a8;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 4px rgba(20,18,10,0.30);
--shadow-md: 0 0 26px rgba(238,240,168,0.35), 0 2px 8px rgba(20,18,10,0.35);
--shadow-lg: 0 0 40px rgba(238,240,168,0.4), 0 6px 18px rgba(20,18,10,0.4);
/* font */
--font-sans: 'Arial', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Arial', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: fluorescent buzz-glow + vignette are the signature move */
--vignette: radial-gradient(120% 90% at 50% 30%, transparent 45%, rgba(10,9,4,0.30) 100%);
--hum-line: repeating-linear-gradient(180deg, rgba(238,240,168,0.05) 0px, transparent 2px, transparent 5px);
}

/* ============================================================
Base component classes — liminal spaces
Signature move: a sickly fluorescent glow (buzzing box-shadow) around
interactive surfaces, plus a heavy vignette over the whole page — the
familiar-yet-wrong feeling of an empty hallway under bad lighting.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--vignette), var(--hum-line), var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-md); box-shadow: var(--shadow-md); }
.btn { font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: box-shadow .3s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); }
.btn:active { box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-fluoro); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: var(--color-primary); color: var(--color-fluoro); border-color: var(--color-primary);
box-shadow: var(--shadow-md); }
.card { background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-fluoro); box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-fluoro); color: #2b2911;
border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/liminal-spaces.md */
```

## Design System Variables

```css
--bg: #d9cf9a, --fg: #24211a, --accent: #8a6a3d, --surface: #e7ddab, --radius: 2px, --spacing: 16px, --font-display: 'Arial', system-ui, sans-serif, --font-body: 'Arial', 'Helvetica Neue', system-ui, sans-serif
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

[![Weirdcore](https://designmd.app/images/library/752.png) Claude Artisan · Subculturas & estéticas de nicho ### Weirdcore](https://designmd.app/library/weirdcore)[![Dreamcore](https://designmd.app/images/library/624.png) Claude Artisan · Subculturas & estéticas de nicho ### Dreamcore](https://designmd.app/library/dreamcore)[![Mallsoft](https://designmd.app/images/library/676.png) Claude Artisan · Subculturas & estéticas de nicho ### Mallsoft](https://designmd.app/library/mallsoft)

Last synced: 8/30/2026
