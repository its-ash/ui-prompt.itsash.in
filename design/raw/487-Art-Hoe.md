# Art Hoe

- Source: <https://designmd.app/library/art-hoe>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:25.282Z

Claude Artisan · Subculturas & estéticas de nicho2015–present

# Art Hoe

Reference for subculturas & estéticas de nicho Art Hoe. Art-student creative-expression subculture.

Art Hoeartsy aestheticVan Gogh/sunflower motifs, paint splatterWarm earthy + bright accentsJournals, film photos, collageCreative, expressive, personalniche

Use case: hero, superfície, conteúdo e grade responsiva; Van Gogh/sunflower motifs, paint splatter; Warm earthy + bright accents

![Art Hoe](https://designmd.app/images/library/577.png)

## Historical Context

Art-student creative-expression subculture. Example: Art Hoe Tumblr collective..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Art Hoe"
description: "Art Hoe visual system, translated from the Claude Artisan catalog for use in digital products. Van Gogh/sunflower motifs, paint splatter; Warm earthy + bright accents"
colors:
primary: "#c1440e"
background: "#f5ead9"
surface: "#fdf3e0"
text: "#3a2b1e"
accent: "#d4a017"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Nunito Sans', 'Avenir Next', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Nunito Sans', 'Avenir Next', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "12px"
lg: "18px"
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

Art Hoe visual system, translated from the Claude Artisan catalog for use in digital products. Van Gogh/sunflower motifs, paint splatter; Warm earthy + bright accents

- **Category:** niche
- **Era:** 2015–present
- **Origin:** Art-student creative-expression subculture.
- **Reference:** Art Hoe Tumblr collective.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Van Gogh/sunflower motifs, paint splatter
- Warm earthy + bright accents
- Journals, film photos, collage
- Creative, expressive, personal

## Colors

- **bg** — #f5ead9
- **surface** — #fdf3e0
- **surface-strong** — #f7e2c3
- **border** — #3a2b1e
- **text** — #3a2b1e
- **text-muted** — #6b5847
- **primary** — #c1440e
- **accent** — #d4a017
- **olive** — #6b7a3f
- **clay** — #b5651d

## Typography

- Display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif
- Body: 'Nunito Sans', 'Avenir Next', system-ui, sans-serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Van Gogh/sunflower motifs, paint splatter; Warm earthy + bright accents; Journals, film photos, collage; Creative, expressive, personal; sombras e elevação

## Shapes

- Radius scale: 6px, 12px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/art-hoe/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Art Hoe — design tokens */
/* 2015–present | Art-student creative-expression subculture, condensed */
:root {
/* color: warm earthy paper tones + bright sunflower/terracotta accents */
--color-bg: #f5ead9;
--color-surface: #fdf3e0;
--color-surface-strong: #f7e2c3;
--color-border: #3a2b1e;
--color-text: #3a2b1e;
--color-text-muted: #6b5847;
--color-primary: #c1440e;
--color-accent: #d4a017;
--color-olive: #6b7a3f;
--color-clay: #b5651d;
/* radius: soft, hand-trimmed */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow: soft polaroid drop, no hard offset */
--shadow-sm: 0 2px 6px rgba(58,43,30,0.14);
--shadow-md: 0 8px 20px rgba(58,43,30,0.18);
--shadow-lg: 0 16px 36px rgba(58,43,30,0.22);
/* font: journal serif headline + warm sans body */
--font-sans: 'Nunito Sans', 'Avenir Next', system-ui, sans-serif;
--font-display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
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
/* ease: gentle, hand-drawn */
--ease-standard: cubic-bezier(0.33, 1, 0.68, 1);
/* extra: paint-splatter accent + polaroid tilt — the signature move,
built from radial-gradient blobs so it needs no image asset */
--splatter: radial-gradient(circle at 12% 20%, var(--color-primary) 0 6px, transparent 7px),
radial-gradient(circle at 78% 15%, var(--color-accent) 0 4px, transparent 5px),
radial-gradient(circle at 88% 70%, var(--color-olive) 0 5px, transparent 6px),
radial-gradient(circle at 25% 85%, var(--color-clay) 0 3px, transparent 4px);
--tilt-card: rotate(-1.2deg);
--tilt-badge: rotate(2deg);
}

/* ============================================================
Base component classes — Art Hoe
Signature move: a scattered paint-splatter dot cluster (radial-gradient
blobs in the primary/accent/olive/clay palette) layered into the
background of every raised surface, plus a slight collage/polaroid
tilt on cards — repeats on nav, card, and badge so it reads as a
hand-kept sketchbook, not a single decorated element.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--splatter);
border-bottom: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-olive); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff8ec; border-color: var(--color-primary); }
.card {
background: var(--color-surface); color: var(--color-text);
background-image: var(--splatter);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 2px solid var(--color-border); box-shadow: var(--shadow-md);
transform: var(--tilt-card);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #3a2b1e; border: 2px solid var(--color-border); transform: var(--tilt-badge); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/art-hoe.md */
```

### Variables

```
--bg: #f5ead9, --fg: #3a2b1e, --accent: #c1440e, --surface: #fdf3e0, --radius: 12px, --spacing: 16px, --font-display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif, --font-body: 'Nunito Sans', 'Avenir Next', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f5ead9

#fdf3e0

#f7e2c3

#3a2b1e

Secondary

#3a2b1e

#6b5847

#c1440e

#d4a017

#6b7a3f

#b5651d

### Effects

Van Gogh/sunflower motifs, paint splatter, Warm earthy + bright accents, Journals, film photos, collage, Creative, expressive, personal, shadow

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

- **Name:** Art Hoe
- **Type:** claude-artisan/niche
- **Keywords:** Art Hoe, artsy aesthetic, Van Gogh/sunflower motifs, paint splatter, Warm earthy + bright accents, Journals, film photos, collage, Creative, expressive, personal, niche
- **Era:** 2015–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f5ead9, surface: #fdf3e0, surface-strong: #f7e2c3, border: #3a2b1e
- **Secondary:** text: #3a2b1e, text-muted: #6b5847, primary: #c1440e, accent: #d4a017, olive: #6b7a3f, clay: #b5651d

## Visual Effects

Van Gogh/sunflower motifs, paint splatter, Warm earthy + bright accents, Journals, film photos, collage, Creative, expressive, personal, shadow

## AI Visual Direction

Art Hoe, Van Gogh/sunflower motifs, paint splatter, Warm earthy + bright accents, Journals, film photos, collage, Creative, expressive, personal, Art Hoe Tumblr collective.

## CSS Technical

```css
/* Art Hoe — design tokens */
/* 2015–present | Art-student creative-expression subculture, condensed */
:root {
/* color: warm earthy paper tones + bright sunflower/terracotta accents */
--color-bg: #f5ead9;
--color-surface: #fdf3e0;
--color-surface-strong: #f7e2c3;
--color-border: #3a2b1e;
--color-text: #3a2b1e;
--color-text-muted: #6b5847;
--color-primary: #c1440e;
--color-accent: #d4a017;
--color-olive: #6b7a3f;
--color-clay: #b5651d;
/* radius: soft, hand-trimmed */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow: soft polaroid drop, no hard offset */
--shadow-sm: 0 2px 6px rgba(58,43,30,0.14);
--shadow-md: 0 8px 20px rgba(58,43,30,0.18);
--shadow-lg: 0 16px 36px rgba(58,43,30,0.22);
/* font: journal serif headline + warm sans body */
--font-sans: 'Nunito Sans', 'Avenir Next', system-ui, sans-serif;
--font-display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif;
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
/* ease: gentle, hand-drawn */
--ease-standard: cubic-bezier(0.33, 1, 0.68, 1);
/* extra: paint-splatter accent + polaroid tilt — the signature move,
built from radial-gradient blobs so it needs no image asset */
--splatter: radial-gradient(circle at 12% 20%, var(--color-primary) 0 6px, transparent 7px),
radial-gradient(circle at 78% 15%, var(--color-accent) 0 4px, transparent 5px),
radial-gradient(circle at 88% 70%, var(--color-olive) 0 5px, transparent 6px),
radial-gradient(circle at 25% 85%, var(--color-clay) 0 3px, transparent 4px);
--tilt-card: rotate(-1.2deg);
--tilt-badge: rotate(2deg);
}

/* ============================================================
Base component classes — Art Hoe
Signature move: a scattered paint-splatter dot cluster (radial-gradient
blobs in the primary/accent/olive/clay palette) layered into the
background of every raised surface, plus a slight collage/polaroid
tilt on cards — repeats on nav, card, and badge so it reads as a
hand-kept sketchbook, not a single decorated element.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--splatter);
border-bottom: 2px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-olive); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff8ec; border-color: var(--color-primary); }
.card {
background: var(--color-surface); color: var(--color-text);
background-image: var(--splatter);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 2px solid var(--color-border); box-shadow: var(--shadow-md);
transform: var(--tilt-card);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #3a2b1e; border: 2px solid var(--color-border); transform: var(--tilt-badge); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/art-hoe.md */
```

## Design System Variables

```css
--bg: #f5ead9, --fg: #3a2b1e, --accent: #c1440e, --surface: #fdf3e0, --radius: 12px, --spacing: 16px, --font-display: 'Playfair Display', 'Cormorant Garamond', Georgia, serif, --font-body: 'Nunito Sans', 'Avenir Next', system-ui, sans-serif
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

[![Cottagecore](https://designmd.app/images/library/605.png) Claude Artisan · Subculturas & estéticas de nicho ### Cottagecore](https://designmd.app/library/cottagecore)[![Maximalism](https://designmd.app/images/library/680.png) Claude Artisan · Minimal, maximal & orgânico ### Maximalism](https://designmd.app/library/maximalism)

Last synced: 8/30/2026
