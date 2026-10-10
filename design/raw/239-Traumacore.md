# Traumacore

- Source: <https://designmd.app/library/traumacore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:36.333Z

Claude Artisan · Subculturas & estéticas de nicho2020–present

# Traumacore

Reference for subculturas & estéticas de nicho Traumacore. Bittersweet childhood-nostalgia-with-pain aesthetic.

TraumacoretraumcoreChildlike imagery (stickers, pastel) + heavy textFaded nostalgic photosJuxtaposition of innocence and distressEmotionally rawniche

Use case: hero, superfície, conteúdo e grade responsiva; Childlike imagery (stickers, pastel) + heavy text; Faded nostalgic photos

![Traumacore](https://designmd.app/images/library/742.png)

## Historical Context

Bittersweet childhood-nostalgia-with-pain aesthetic. Example: Traumacore edits (sensitive-content subculture)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Traumacore"
description: "Traumacore visual system, translated from the Claude Artisan catalog for use in digital products. Childlike imagery (stickers, pastel) + heavy text; Faded nostalgic photos"
colors:
primary: "#ff4d6d"
background: "#f5e1ea"
surface: "#fdf3f7"
text: "#1a1a1a"
accent: "#9ec9e8"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Permanent Marker', 'Caveat', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif"
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

Traumacore visual system, translated from the Claude Artisan catalog for use in digital products. Childlike imagery (stickers, pastel) + heavy text; Faded nostalgic photos

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Bittersweet childhood-nostalgia-with-pain aesthetic.
- **Reference:** Traumacore edits (sensitive-content subculture).
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Childlike imagery (stickers, pastel) + heavy text
- Faded nostalgic photos
- Juxtaposition of innocence and distress
- Emotionally raw

## Colors

- **bg** — #f5e1ea
- **surface** — #fdf3f7
- **surface-strong** — #efd0de
- **border** — #1a1a1a
- **text** — #1a1a1a
- **text-muted** — #6b5560
- **primary** — #ff4d6d
- **accent** — #9ec9e8
- **sticker** — #fff27a

## Typography

- Display: 'Permanent Marker', 'Caveat', cursive
- Body: 'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Childlike imagery (stickers, pastel) + heavy text; Faded nostalgic photos; Juxtaposition of innocence and distress; Emotionally raw; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/traumacore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Traumacore — design tokens */
/* 2020–present | Bittersweet childhood-nostalgia-with-pain aesthetic, condensed */
:root {
/* color */
--color-bg: #f5e1ea;
--color-surface: #fdf3f7;
--color-surface-strong: #efd0de;
--color-border: #1a1a1a;
--color-text: #1a1a1a;
--color-text-muted: #6b5560;
--color-primary: #ff4d6d;
--color-accent: #9ec9e8;
--color-sticker: #fff27a;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 2px 2px 0 #1a1a1a;
--shadow-md: 4px 4px 0 #1a1a1a;
--shadow-lg: 6px 6px 0 #1a1a1a;
/* font */
--font-sans: 'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif;
--font-display: 'Permanent Marker', 'Caveat', cursive;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: harsh scrawled black border on soft pastel — a hard-edged hand-drawn
ring juxtaposed against candy-pink surfaces, plus a faded-photo grain filter */
--scrawl-border: 3px solid #1a1a1a;
--faded-photo: sepia(0.15) contrast(0.92) brightness(1.04) saturate(1.1);
}

/* ============================================================
Base component classes — traumacore
Signature move: a thick hand-scrawled black border + hard offset shadow
(no blur) slams against soft pastel surfaces — the juxtaposition of
childlike softness and blunt, distressed line-work repeats everywhere.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--scrawl-border); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--scrawl-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(1px,1px); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); border: var(--scrawl-border);
filter: var(--faded-photo);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--scrawl-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-sticker);
color: #1a1a1a; border: 2px solid #1a1a1a; transform: rotate(-3deg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/traumacore.md */
```

### Variables

```
--bg: #f5e1ea, --fg: #1a1a1a, --accent: #ff4d6d, --surface: #fdf3f7, --radius: 4px, --spacing: 16px, --font-display: 'Permanent Marker', 'Caveat', cursive, --font-body: 'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f5e1ea

#fdf3f7

#efd0de

#1a1a1a

Secondary

#1a1a1a

#6b5560

#ff4d6d

#9ec9e8

#fff27a

### Effects

Childlike imagery (stickers, pastel) + heavy text, Faded nostalgic photos, Juxtaposition of innocence and distress, Emotionally raw, shadow

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

- **Name:** Traumacore
- **Type:** claude-artisan/niche
- **Keywords:** Traumacore, traumcore, Childlike imagery (stickers, pastel) + heavy text, Faded nostalgic photos, Juxtaposition of innocence and distress, Emotionally raw, niche
- **Era:** 2020–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f5e1ea, surface: #fdf3f7, surface-strong: #efd0de, border: #1a1a1a
- **Secondary:** text: #1a1a1a, text-muted: #6b5560, primary: #ff4d6d, accent: #9ec9e8, sticker: #fff27a

## Visual Effects

Childlike imagery (stickers, pastel) + heavy text, Faded nostalgic photos, Juxtaposition of innocence and distress, Emotionally raw, shadow

## AI Visual Direction

Traumacore, Childlike imagery (stickers, pastel) + heavy text, Faded nostalgic photos, Juxtaposition of innocence and distress, Emotionally raw, Traumacore edits (sensitive-content subculture).

## CSS Technical

```css
/* Traumacore — design tokens */
/* 2020–present | Bittersweet childhood-nostalgia-with-pain aesthetic, condensed */
:root {
/* color */
--color-bg: #f5e1ea;
--color-surface: #fdf3f7;
--color-surface-strong: #efd0de;
--color-border: #1a1a1a;
--color-text: #1a1a1a;
--color-text-muted: #6b5560;
--color-primary: #ff4d6d;
--color-accent: #9ec9e8;
--color-sticker: #fff27a;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 2px 2px 0 #1a1a1a;
--shadow-md: 4px 4px 0 #1a1a1a;
--shadow-lg: 6px 6px 0 #1a1a1a;
/* font */
--font-sans: 'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif;
--font-display: 'Permanent Marker', 'Caveat', cursive;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: harsh scrawled black border on soft pastel — a hard-edged hand-drawn
ring juxtaposed against candy-pink surfaces, plus a faded-photo grain filter */
--scrawl-border: 3px solid #1a1a1a;
--faded-photo: sepia(0.15) contrast(0.92) brightness(1.04) saturate(1.1);
}

/* ============================================================
Base component classes — traumacore
Signature move: a thick hand-scrawled black border + hard offset shadow
(no blur) slams against soft pastel surfaces — the juxtaposition of
childlike softness and blunt, distressed line-work repeats everywhere.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--scrawl-border); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--scrawl-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(1px,1px); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); border: var(--scrawl-border);
filter: var(--faded-photo);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--scrawl-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-sticker);
color: #1a1a1a; border: 2px solid #1a1a1a; transform: rotate(-3deg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/traumacore.md */
```

## Design System Variables

```css
--bg: #f5e1ea, --fg: #1a1a1a, --accent: #ff4d6d, --surface: #fdf3f7, --radius: 4px, --spacing: 16px, --font-display: 'Permanent Marker', 'Caveat', cursive, --font-body: 'Comic Neue', 'Chalkboard', 'Comic Sans MS', sans-serif
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

[![Weirdcore](https://designmd.app/images/library/752.png) Claude Artisan · Subculturas & estéticas de nicho ### Weirdcore](https://designmd.app/library/weirdcore)[![Kidcore](https://designmd.app/images/library/664.png) Claude Artisan · Subculturas & estéticas de nicho ### Kidcore](https://designmd.app/library/kidcore)

Last synced: 8/30/2026
