# Light Academia

- Source: <https://designmd.app/library/light-academia>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:22.314Z

Claude Artisan · Subculturas & estéticas de nicho2020–present

# Light Academia

Reference for subculturas & estéticas de nicho Light Academia. Optimistic counterpart to dark academia.

Light Academialight academicWarm creams, beige, soft gold, sageSunlit libraries, linen, pastoral scholarshipSerif type, gentle and airyHopeful, romantic learningniche

Use case: hero, superfície, conteúdo e grade responsiva; Warm creams, beige, soft gold, sage; Sunlit libraries, linen, pastoral scholarship

![Light Academia](https://designmd.app/images/library/667.png)

## Historical Context

Optimistic counterpart to dark academia. Example: Light academia moodboards; cottage-scholar aesthetics..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Light Academia"
description: "Light Academia visual system, translated from the Claude Artisan catalog for use in digital products. Warm creams, beige, soft gold, sage; Sunlit libraries, linen, pastoral scholarship"
colors:
primary: "#a97142"
background: "#f7f0e3"
surface: "#fffdf7"
text: "#3b3226"
accent: "#7c8b5f"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Playfair Display', 'Cormorant Garamond', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Lora', 'Cormorant Garamond', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Lora', 'Cormorant Garamond', Georgia, serif"
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

Light Academia visual system, translated from the Claude Artisan catalog for use in digital products. Warm creams, beige, soft gold, sage; Sunlit libraries, linen, pastoral scholarship

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Optimistic counterpart to dark academia.
- **Reference:** Light academia moodboards; cottage-scholar aesthetics.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Warm creams, beige, soft gold, sage
- Sunlit libraries, linen, pastoral scholarship
- Serif type, gentle and airy
- Hopeful, romantic learning

## Colors

- **bg** — #f7f0e3
- **surface** — #fffdf7
- **surface-strong** — #efe4c9
- **border** — #d8c9a3
- **text** — #3b3226
- **text-muted** — #7a6d55
- **primary** — #a97142
- **accent** — #7c8b5f
- **gold** — #c9a24a

## Typography

- Display: 'Playfair Display', 'Cormorant Garamond', serif
- Body: 'Lora', 'Cormorant Garamond', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Warm creams, beige, soft gold, sage; Sunlit libraries, linen, pastoral scholarship; Serif type, gentle and airy; Hopeful, romantic learning; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/light-academia/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Light Academia — design tokens */
/* 2020–present | Optimistic counterpart to dark academia, condensed */
:root {
/* color */
--color-bg: #f7f0e3;
--color-surface: #fffdf7;
--color-surface-strong: #efe4c9;
--color-border: #d8c9a3;
--color-text: #3b3226;
--color-text-muted: #7a6d55;
--color-primary: #a97142;
--color-accent: #7c8b5f;
--color-gold: #c9a24a;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(59,50,38,0.10);
--shadow-md: 0 6px 16px rgba(59,50,38,0.12);
--shadow-lg: 0 14px 32px rgba(59,50,38,0.14);
/* font */
--font-sans: 'Lora', 'Cormorant Garamond', Georgia, serif;
--font-display: 'Playfair Display', 'Cormorant Garamond', serif;
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
/* extra: a sunlit radial glow + a thin gold hairline are the signature move */
--bg-image: radial-gradient(70% 50% at 50% 0%, rgba(201,162,74,0.16) 0%, transparent 65%), var(--color-bg);
--gold-rule: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}

/* ============================================================
Base component classes — light academia
Signature move: a thin gold hairline rule under headers/nav, paired with
a warm serif display face — sunlit-library restraint, repeated on nav
(bottom rule) and card (top rule).
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-6); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); position: relative; }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: var(--gold-rule); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
cursor: pointer; transition: border-color .2s var(--ease-standard), background .2s var(--ease-standard); }
.btn:hover { border-color: var(--color-gold); background: var(--color-surface-strong); }
.btn:active { background: var(--color-surface-strong); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fffdf7; border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); padding: var(--space-8); position: relative; }
.card::before { content: ""; position: absolute; top: 0; left: var(--space-8); right: var(--space-8); height: 2px;
background: var(--gold-rule); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-color: var(--color-gold);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-gold) 20%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); letter-spacing: .04em;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-primary); border: 1px solid var(--color-gold); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/light-academia.md */
```

### Variables

```
--bg: #f7f0e3, --fg: #3b3226, --accent: #a97142, --surface: #fffdf7, --radius: 4px, --spacing: 16px, --font-display: 'Playfair Display', 'Cormorant Garamond', serif, --font-body: 'Lora', 'Cormorant Garamond', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f7f0e3

#fffdf7

#efe4c9

#d8c9a3

Secondary

#3b3226

#7a6d55

#a97142

#7c8b5f

#c9a24a

### Effects

Warm creams, beige, soft gold, sage, Sunlit libraries, linen, pastoral scholarship, Serif type, gentle and airy, Hopeful, romantic learning, shadow

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

- **Name:** Light Academia
- **Type:** claude-artisan/niche
- **Keywords:** Light Academia, light academic, Warm creams, beige, soft gold, sage, Sunlit libraries, linen, pastoral scholarship, Serif type, gentle and airy, Hopeful, romantic learning, niche
- **Era:** 2020–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f7f0e3, surface: #fffdf7, surface-strong: #efe4c9, border: #d8c9a3
- **Secondary:** text: #3b3226, text-muted: #7a6d55, primary: #a97142, accent: #7c8b5f, gold: #c9a24a

## Visual Effects

Warm creams, beige, soft gold, sage, Sunlit libraries, linen, pastoral scholarship, Serif type, gentle and airy, Hopeful, romantic learning, shadow

## AI Visual Direction

Light Academia, Warm creams, beige, soft gold, sage, Sunlit libraries, linen, pastoral scholarship, Serif type, gentle and airy, Hopeful, romantic learning, Light academia moodboards; cottage-scholar aesthetics.

## CSS Technical

```css
/* Light Academia — design tokens */
/* 2020–present | Optimistic counterpart to dark academia, condensed */
:root {
/* color */
--color-bg: #f7f0e3;
--color-surface: #fffdf7;
--color-surface-strong: #efe4c9;
--color-border: #d8c9a3;
--color-text: #3b3226;
--color-text-muted: #7a6d55;
--color-primary: #a97142;
--color-accent: #7c8b5f;
--color-gold: #c9a24a;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(59,50,38,0.10);
--shadow-md: 0 6px 16px rgba(59,50,38,0.12);
--shadow-lg: 0 14px 32px rgba(59,50,38,0.14);
/* font */
--font-sans: 'Lora', 'Cormorant Garamond', Georgia, serif;
--font-display: 'Playfair Display', 'Cormorant Garamond', serif;
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
/* extra: a sunlit radial glow + a thin gold hairline are the signature move */
--bg-image: radial-gradient(70% 50% at 50% 0%, rgba(201,162,74,0.16) 0%, transparent 65%), var(--color-bg);
--gold-rule: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}

/* ============================================================
Base component classes — light academia
Signature move: a thin gold hairline rule under headers/nav, paired with
a warm serif display face — sunlit-library restraint, repeated on nav
(bottom rule) and card (top rule).
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-6); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); position: relative; }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: var(--gold-rule); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
cursor: pointer; transition: border-color .2s var(--ease-standard), background .2s var(--ease-standard); }
.btn:hover { border-color: var(--color-gold); background: var(--color-surface-strong); }
.btn:active { background: var(--color-surface-strong); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fffdf7; border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-md); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); padding: var(--space-8); position: relative; }
.card::before { content: ""; position: absolute; top: 0; left: var(--space-8); right: var(--space-8); height: 2px;
background: var(--gold-rule); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: none; border-color: var(--color-gold);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-gold) 20%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); letter-spacing: .04em;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-primary); border: 1px solid var(--color-gold); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/light-academia.md */
```

## Design System Variables

```css
--bg: #f7f0e3, --fg: #3b3226, --accent: #a97142, --surface: #fffdf7, --radius: 4px, --spacing: 16px, --font-display: 'Playfair Display', 'Cormorant Garamond', serif, --font-body: 'Lora', 'Cormorant Garamond', Georgia, serif
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

[![Dark Academia](https://designmd.app/images/library/617.png) Claude Artisan · Subculturas & estéticas de nicho ### Dark Academia](https://designmd.app/library/dark-academia)[![Cottagecore](https://designmd.app/images/library/605.png) Claude Artisan · Subculturas & estéticas de nicho ### Cottagecore](https://designmd.app/library/cottagecore)

Last synced: 8/30/2026
