# That Girl / Clean Girl

- Source: <https://designmd.app/library/that-girl>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:28.306Z

Claude Artisan · Subculturas & estéticas de nicho2021–present

# That Girl / Clean Girl

Reference for subculturas & estéticas de nicho That Girl / Clean Girl. Wellness/productivity lifestyle aesthetic.

That Girl / Clean Girlclean girlcleanfluencerAiry neutrals: beige, white, sageMinimal, clean, aspirational-wellnessSoft serif + clean sansMatcha, journaling, gym, 'wellness'niche

Use case: hero, superfície, conteúdo e grade responsiva; Airy neutrals: beige, white, sage; Minimal, clean, aspirational-wellness

![That Girl / Clean Girl](https://designmd.app/images/library/738.png)

## Historical Context

Wellness/productivity lifestyle aesthetic. Example: 'That Girl' TikTok routines..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "That Girl / Clean Girl"
description: "That Girl / Clean Girl visual system, translated from the Claude Artisan catalog for use in digital products. Airy neutrals: beige, white, sage; Minimal, clean, aspirational-wellness"
colors:
primary: "#9caf88"
background: "#f7f3ec"
surface: "#ffffff"
text: "#4a4238"
accent: "#c99f7a"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Fraunces', 'Georgia', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Inter', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "16px"
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

That Girl / Clean Girl visual system, translated from the Claude Artisan catalog for use in digital products. Airy neutrals: beige, white, sage; Minimal, clean, aspirational-wellness

- **Category:** niche
- **Era:** 2021–present
- **Origin:** Wellness/productivity lifestyle aesthetic.
- **Reference:** 'That Girl' TikTok routines.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Airy neutrals: beige, white, sage
- Minimal, clean, aspirational-wellness
- Soft serif + clean sans
- Matcha, journaling, gym, 'wellness'

## Colors

- **bg** — #f7f3ec
- **surface** — #ffffff
- **surface-strong** — #f0ebe1
- **border** — #e4dcc9
- **text** — #4a4238
- **text-muted** — #8a7f6d
- **primary** — #9caf88
- **accent** — #c99f7a

## Typography

- Display: 'Fraunces', 'Georgia', serif
- Body: 'Inter', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Airy neutrals: beige, white, sage; Minimal, clean, aspirational-wellness; Soft serif + clean sans; Matcha, journaling, gym, 'wellness'; sombras e elevação

## Shapes

- Radius scale: 10px, 16px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/that-girl/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* That Girl / Clean Girl — design tokens */
/* 2021–present | Wellness/productivity lifestyle aesthetic, condensed */
:root {
/* color */
--color-bg: #f7f3ec;
--color-surface: #ffffff;
--color-surface-strong: #f0ebe1;
--color-border: #e4dcc9;
--color-text: #4a4238;
--color-text-muted: #8a7f6d;
--color-primary: #9caf88;
--color-accent: #c99f7a;
/* radius */
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(74,66,56,0.05);
--shadow-md: 0 8px 24px rgba(74,66,56,0.08);
--shadow-lg: 0 16px 40px rgba(74,66,56,0.10);
/* font */
--font-sans: 'Inter', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Fraunces', 'Georgia', serif;
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
/* extra: airy neutral wash — a near-invisible sage/beige gradient breathes across
every large surface, plus generous whitespace is the real signature */
--air-wash: linear-gradient(180deg, #fbf9f4 0%, #f7f3ec 100%);
--sage-ring: 0 0 0 3px rgba(156,175,136,0.18);
}

/* ============================================================
Base component classes — that-girl
Signature move: airy neutral wash + generous whitespace + ultra-soft shadows
instead of borders. Repeats on nav, card, and input — nothing shouts.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--air-wash); }
.nav { display: flex; gap: var(--space-6); align-items: center; padding: var(--space-4) var(--space-8);
background: var(--color-surface); border-radius: var(--radius-pill); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: none; box-shadow: var(--sage-ring); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-8); border: 1px solid var(--color-border);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--sage-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-text-muted); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/that-girl.md */
```

### Variables

```
--bg: #f7f3ec, --fg: #4a4238, --accent: #9caf88, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Fraunces', 'Georgia', serif, --font-body: 'Inter', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f7f3ec

#ffffff

#f0ebe1

#e4dcc9

Secondary

#4a4238

#8a7f6d

#9caf88

#c99f7a

### Effects

Airy neutrals: beige, white, sage, Minimal, clean, aspirational-wellness, Soft serif + clean sans, Matcha, journaling, gym, 'wellness', shadow

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

- **Name:** That Girl / Clean Girl
- **Type:** claude-artisan/niche
- **Keywords:** That Girl / Clean Girl, clean girl, cleanfluencer, Airy neutrals: beige, white, sage, Minimal, clean, aspirational-wellness, Soft serif + clean sans, Matcha, journaling, gym, 'wellness', niche
- **Era:** 2021–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f7f3ec, surface: #ffffff, surface-strong: #f0ebe1, border: #e4dcc9
- **Secondary:** text: #4a4238, text-muted: #8a7f6d, primary: #9caf88, accent: #c99f7a

## Visual Effects

Airy neutrals: beige, white, sage, Minimal, clean, aspirational-wellness, Soft serif + clean sans, Matcha, journaling, gym, 'wellness', shadow

## AI Visual Direction

That Girl / Clean Girl, Airy neutrals: beige, white, sage, Minimal, clean, aspirational-wellness, Soft serif + clean sans, Matcha, journaling, gym, 'wellness', 'That Girl' TikTok routines.

## CSS Technical

```css
/* That Girl / Clean Girl — design tokens */
/* 2021–present | Wellness/productivity lifestyle aesthetic, condensed */
:root {
/* color */
--color-bg: #f7f3ec;
--color-surface: #ffffff;
--color-surface-strong: #f0ebe1;
--color-border: #e4dcc9;
--color-text: #4a4238;
--color-text-muted: #8a7f6d;
--color-primary: #9caf88;
--color-accent: #c99f7a;
/* radius */
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(74,66,56,0.05);
--shadow-md: 0 8px 24px rgba(74,66,56,0.08);
--shadow-lg: 0 16px 40px rgba(74,66,56,0.10);
/* font */
--font-sans: 'Inter', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Fraunces', 'Georgia', serif;
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
/* extra: airy neutral wash — a near-invisible sage/beige gradient breathes across
every large surface, plus generous whitespace is the real signature */
--air-wash: linear-gradient(180deg, #fbf9f4 0%, #f7f3ec 100%);
--sage-ring: 0 0 0 3px rgba(156,175,136,0.18);
}

/* ============================================================
Base component classes — that-girl
Signature move: airy neutral wash + generous whitespace + ultra-soft shadows
instead of borders. Repeats on nav, card, and input — nothing shouts.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--air-wash); }
.nav { display: flex; gap: var(--space-6); align-items: center; padding: var(--space-4) var(--space-8);
background: var(--color-surface); border-radius: var(--radius-pill); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: none; box-shadow: var(--sage-ring); }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-8); border: 1px solid var(--color-border);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--sage-ring); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-text-muted); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/that-girl.md */
```

## Design System Variables

```css
--bg: #f7f3ec, --fg: #4a4238, --accent: #9caf88, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Fraunces', 'Georgia', serif, --font-body: 'Inter', 'Helvetica Neue', system-ui, sans-serif
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

[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)[![Light Academia](https://designmd.app/images/library/667.png) Claude Artisan · Subculturas & estéticas de nicho ### Light Academia](https://designmd.app/library/light-academia)

Last synced: 8/30/2026
