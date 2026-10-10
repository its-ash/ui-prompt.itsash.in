# Cyanotype

- Source: <https://designmd.app/library/cyanotype>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:37.319Z

Claude Artisan · Textura, material & renderização1842–present

# Cyanotype

Reference for textura, material & renderização Cyanotype. Sir John Herschel's photographic process.

Cyanotypesun printblueprint photoPrussian-blue monochrome photographic printsWhite silhouettes on deep blueBotanical/photogram subjectsAntique handmade qualitytexture

Use case: composição editorial com grade tipográfica; Prussian-blue monochrome photographic prints; White silhouettes on deep blue

![Cyanotype](https://designmd.app/images/library/608.png)

## Historical Context

Sir John Herschel's photographic process. Example: Anna Atkins botanical cyanotypes..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Cyanotype"
description: "Cyanotype visual system, translated from the Claude Artisan catalog for use in digital products. Prussian-blue monochrome photographic prints; White silhouettes on deep blue"
colors:
primary: "#ffffff"
background: "#0d2c61"
surface: "#123a7a"
text: "#eaf1ff"
accent: "#a9c4f5"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif"
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

Cyanotype visual system, translated from the Claude Artisan catalog for use in digital products. Prussian-blue monochrome photographic prints; White silhouettes on deep blue

- **Category:** texture
- **Era:** 1842–present
- **Origin:** Sir John Herschel's photographic process.
- **Reference:** Anna Atkins botanical cyanotypes.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Prussian-blue monochrome photographic prints
- White silhouettes on deep blue
- Botanical/photogram subjects
- Antique handmade quality

## Colors

- **bg** — #0d2c61
- **surface** — #123a7a
- **surface-strong** — #17458f
- **border** — #6f92d1
- **text** — #eaf1ff
- **text-muted** — #b6c9ec
- **primary** — #ffffff
- **accent** — #a9c4f5
- **bleed** — rgba(255, 255, 255, 0.10)

## Typography

- Display: 'Cormorant Garamond', 'Playfair Display', serif
- Body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Prussian-blue monochrome photographic prints; White silhouettes on deep blue; Botanical/photogram subjects; Antique handmade quality; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/cyanotype/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Cyanotype — design tokens */
/* 1842–present | Sir John Herschel's photographic process, condensed */
:root {
/* color */
--color-bg: #0d2c61;
--color-surface: #123a7a;
--color-surface-strong: #17458f;
--color-border: #6f92d1;
--color-text: #eaf1ff;
--color-text-muted: #b6c9ec;
--color-primary: #ffffff;
--color-accent: #a9c4f5;
--color-bleed: rgba(255, 255, 255, 0.10);
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.30);
--shadow-md: 0 6px 16px rgba(0, 0, 0, 0.34);
--shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.38);
/* font */
--font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
--font-display: 'Cormorant Garamond', 'Playfair Display', serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
/* extra: photogram silhouette vignette + emulsion grain edge */
--emulsion-vignette: radial-gradient(120% 100% at 50% 0%, transparent 55%, rgba(0,0,0,0.28) 100%);
--botanical-border: 1px solid rgba(255,255,255,0.35);
}

/* ============================================================
Base component classes — Cyanotype
Signature move: deep Prussian-blue monochrome with a soft photogram
vignette bleed, repeated on body, card and nav for a print-emulsion feel.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg);
background-image: var(--emulsion-vignette);
}
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--botanical-border); }
.btn {
font: 500 var(--text-base)/1 var(--font-sans); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-bleed); border: var(--botanical-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: var(--color-bg); border-color: var(--color-primary); }
.card {
background: var(--color-surface); background-image: var(--emulsion-vignette);
border: var(--botanical-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-bleed); border: var(--botanical-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(255,255,255,0.20); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-bleed);
color: var(--color-text); border: var(--botanical-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cyanotype.md */
```

### Variables

```
--bg: #0d2c61, --fg: #eaf1ff, --accent: #ffffff, --surface: #123a7a, --radius: 4px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Playfair Display', serif, --font-body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0d2c61

#123a7a

#17458f

#6f92d1

Secondary

#eaf1ff

#b6c9ec

#ffffff

#a9c4f5

### Effects

Prussian-blue monochrome photographic prints, White silhouettes on deep blue, Botanical/photogram subjects, Antique handmade quality, shadow

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

- **Name:** Cyanotype
- **Type:** claude-artisan/texture
- **Keywords:** Cyanotype, sun print, blueprint photo, Prussian-blue monochrome photographic prints, White silhouettes on deep blue, Botanical/photogram subjects, Antique handmade quality, texture
- **Era:** 1842–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0d2c61, surface: #123a7a, surface-strong: #17458f, border: #6f92d1
- **Secondary:** text: #eaf1ff, text-muted: #b6c9ec, primary: #ffffff, accent: #a9c4f5, bleed: rgba(255, 255, 255, 0.10)

## Visual Effects

Prussian-blue monochrome photographic prints, White silhouettes on deep blue, Botanical/photogram subjects, Antique handmade quality, shadow

## AI Visual Direction

Cyanotype, Prussian-blue monochrome photographic prints, White silhouettes on deep blue, Botanical/photogram subjects, Antique handmade quality, Anna Atkins botanical cyanotypes.

## CSS Technical

```css
/* Cyanotype — design tokens */
/* 1842–present | Sir John Herschel's photographic process, condensed */
:root {
/* color */
--color-bg: #0d2c61;
--color-surface: #123a7a;
--color-surface-strong: #17458f;
--color-border: #6f92d1;
--color-text: #eaf1ff;
--color-text-muted: #b6c9ec;
--color-primary: #ffffff;
--color-accent: #a9c4f5;
--color-bleed: rgba(255, 255, 255, 0.10);
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.30);
--shadow-md: 0 6px 16px rgba(0, 0, 0, 0.34);
--shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.38);
/* font */
--font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
--font-display: 'Cormorant Garamond', 'Playfair Display', serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
/* extra: photogram silhouette vignette + emulsion grain edge */
--emulsion-vignette: radial-gradient(120% 100% at 50% 0%, transparent 55%, rgba(0,0,0,0.28) 100%);
--botanical-border: 1px solid rgba(255,255,255,0.35);
}

/* ============================================================
Base component classes — Cyanotype
Signature move: deep Prussian-blue monochrome with a soft photogram
vignette bleed, repeated on body, card and nav for a print-emulsion feel.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg);
background-image: var(--emulsion-vignette);
}
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--botanical-border); }
.btn {
font: 500 var(--text-base)/1 var(--font-sans); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-bleed); border: var(--botanical-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: var(--color-bg); border-color: var(--color-primary); }
.card {
background: var(--color-surface); background-image: var(--emulsion-vignette);
border: var(--botanical-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-bleed); border: var(--botanical-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(255,255,255,0.20); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-bleed);
color: var(--color-text); border: var(--botanical-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cyanotype.md */
```

## Design System Variables

```css
--bg: #0d2c61, --fg: #eaf1ff, --accent: #ffffff, --surface: #123a7a, --radius: 4px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Playfair Display', serif, --font-body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
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

[![Blueprint / Technical Drawing](https://designmd.app/images/library/591.png) Claude Artisan · Textura, material & renderização ### Blueprint / Technical Drawing](https://designmd.app/library/blueprint)[![Duotone](https://designmd.app/images/library/626.png) Claude Artisan · Textura, material & renderização ### Duotone](https://designmd.app/library/duotone)

Last synced: 8/30/2026
