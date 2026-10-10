# Zen / Wabi-Sabi / Ma

- Source: <https://designmd.app/library/zen-wabisabi>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:21:06.309Z

Claude Artisan · Minimal, maximal & orgânicoTraditional Japanese → modern

# Zen / Wabi-Sabi / Ma

Reference for minimal, maximal & orgânico Zen / Wabi-Sabi / Ma. Japanese aesthetics of imperfection (wabi-sabi) and negative space (ma).

Zen / Wabi-Sabi / Mawabi-sabimaJapanese minimalismEmbraces imperfection, age, asymmetryGenerous negative space ('ma')Muted natural, earthen tonesCalm, contemplative, handmademinimal-organic

Use case: hero, superfície, conteúdo e grade responsiva; Embraces imperfection, age, asymmetry; Generous negative space ('ma')

![Zen / Wabi-Sabi / Ma](https://designmd.app/images/library/759.png)

## Historical Context

Japanese aesthetics of imperfection (wabi-sabi) and negative space (ma). Example: Traditional tea-ceremony aesthetics; MUJI..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Zen / Wabi-Sabi / Ma"
description: "Zen / Wabi-Sabi / Ma visual system, translated from the Claude Artisan catalog for use in digital products. Embraces imperfection, age, asymmetry; Generous negative space ('ma')"
colors:
primary: "#7a4f36"
background: "#f2ede4"
surface: "#e9e1d2"
text: "#33302a"
accent: "#566349"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Shippori Mincho', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "3px"
md: "10px"
lg: "18px"
spacing:
sm: "12px"
md: "28px"
lg: "56px"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "28px"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "28px"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "40px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "28px"
---
## Overview

Zen / Wabi-Sabi / Ma visual system, translated from the Claude Artisan catalog for use in digital products. Embraces imperfection, age, asymmetry; Generous negative space ('ma')

- **Category:** minimal-organic
- **Era:** Traditional Japanese → modern
- **Origin:** Japanese aesthetics of imperfection (wabi-sabi) and negative space (ma).
- **Reference:** Traditional tea-ceremony aesthetics; MUJI.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Embraces imperfection, age, asymmetry
- Generous negative space ('ma')
- Muted natural, earthen tones
- Calm, contemplative, handmade

## Colors

- **bg** — #f2ede4
- **surface** — #e9e1d2
- **surface-strong** — #ded2ba
- **border** — #c9bea9
- **text** — #33302a
- **text-muted** — #71685c
- **primary** — #7a4f36
- **accent** — #566349
- **ink** — #4a4740

## Typography

- Display: 'Shippori Mincho', serif
- Body: 'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Embraces imperfection, age, asymmetry; Generous negative space ('ma'); Muted natural, earthen tones; Calm, contemplative, handmade; sombras e elevação

## Shapes

- Radius scale: 3px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/zen-wabisabi/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Zen / Wabi-Sabi / Ma — design tokens (generated from style_catalog.json) */
/* Traditional Japanese → modern | Japanese aesthetics of imperfection (wabi-sabi) and negative space (ma). */
:root {
/* color */
--color-bg: #f2ede4;
--color-surface: #e9e1d2;
--color-surface-strong: #ded2ba;
--color-border: #c9bea9;
--color-text: #33302a;
--color-text-muted: #71685c;
--color-primary: #7a4f36;
--color-accent: #566349;
--color-ink: #4a4740;
/* radius */
--radius-sm: 3px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(51, 48, 42, 0.08);
--shadow-md: 0 3px 10px rgba(51, 48, 42, 0.10);
--shadow-lg: 0 6px 20px rgba(51, 48, 42, 0.12);
--shadow-none: none;
/* font */
--font-sans: 'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif;
--font-display: 'Shippori Mincho', serif;
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
--space-1: 6px;
--space-2: 12px;
--space-3: 18px;
--space-4: 28px;
--space-6: 40px;
--space-8: 56px;
--space-12: 80px;
--space-16: 112px;
--space-24: 160px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-entrance: cubic-bezier(0, 0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
/* extra: an imperfect, hand-thrown asymmetric corner radius (no two corners
equal, like a raku bowl) paired with generous "ma" negative-space padding —
repeated on card and nav so nothing reads as machine-perfect */
--organic-radius: 22px 6px 26px 4px / 14px 20px 8px 24px;
--organic-radius-inverse: 6px 22px 4px 26px / 20px 14px 24px 8px;
--hairline-crack: 1px solid var(--color-border);
}

/* ============================================================
Base component classes — Zen / Wabi-Sabi / Ma
Signature move: an imperfect, hand-thrown asymmetric corner radius (no two
corners match) and unusually generous negative-space padding ("ma") —
repeated on nav, card, and input so surfaces feel handmade, not gridded.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); line-height: 1.6; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-radius: var(--organic-radius); box-shadow: var(--shadow-sm); }
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--organic-radius-inverse);
background: var(--color-surface); border: var(--hairline-crack);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { box-shadow: var(--shadow-sm); transform: translateY(0); }
.btn:focus-visible { outline: 1px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f2ede4; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--organic-radius);
box-shadow: var(--shadow-md); padding: var(--space-8); border: var(--hairline-crack);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: var(--color-bg); border: none; border-bottom: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: transparent;
color: var(--color-accent); border: 1px solid var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/zen-wabisabi.md */
```

### Variables

```
--bg: #f2ede4, --fg: #33302a, --accent: #7a4f36, --surface: #e9e1d2, --radius: 10px, --spacing: 28px, --font-display: 'Shippori Mincho', serif, --font-body: 'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f2ede4

#e9e1d2

#ded2ba

#c9bea9

Secondary

#33302a

#71685c

#7a4f36

#566349

#4a4740

### Effects

Embraces imperfection, age, asymmetry, Generous negative space ('ma'), Muted natural, earthen tones, Calm, contemplative, handmade, shadow

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

- **Name:** Zen / Wabi-Sabi / Ma
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Zen / Wabi-Sabi / Ma, wabi-sabi, ma, Japanese minimalism, Embraces imperfection, age, asymmetry, Generous negative space ('ma'), Muted natural, earthen tones, Calm, contemplative, handmade, minimal-organic
- **Era:** Traditional Japanese → modern
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f2ede4, surface: #e9e1d2, surface-strong: #ded2ba, border: #c9bea9
- **Secondary:** text: #33302a, text-muted: #71685c, primary: #7a4f36, accent: #566349, ink: #4a4740

## Visual Effects

Embraces imperfection, age, asymmetry, Generous negative space ('ma'), Muted natural, earthen tones, Calm, contemplative, handmade, shadow

## AI Visual Direction

Zen / Wabi-Sabi / Ma, Embraces imperfection, age, asymmetry, Generous negative space ('ma'), Muted natural, earthen tones, Calm, contemplative, handmade, Traditional tea-ceremony aesthetics; MUJI.

## CSS Technical

```css
/* Zen / Wabi-Sabi / Ma — design tokens (generated from style_catalog.json) */
/* Traditional Japanese → modern | Japanese aesthetics of imperfection (wabi-sabi) and negative space (ma). */
:root {
/* color */
--color-bg: #f2ede4;
--color-surface: #e9e1d2;
--color-surface-strong: #ded2ba;
--color-border: #c9bea9;
--color-text: #33302a;
--color-text-muted: #71685c;
--color-primary: #7a4f36;
--color-accent: #566349;
--color-ink: #4a4740;
/* radius */
--radius-sm: 3px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(51, 48, 42, 0.08);
--shadow-md: 0 3px 10px rgba(51, 48, 42, 0.10);
--shadow-lg: 0 6px 20px rgba(51, 48, 42, 0.12);
--shadow-none: none;
/* font */
--font-sans: 'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif;
--font-display: 'Shippori Mincho', serif;
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
--space-1: 6px;
--space-2: 12px;
--space-3: 18px;
--space-4: 28px;
--space-6: 40px;
--space-8: 56px;
--space-12: 80px;
--space-16: 112px;
--space-24: 160px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-entrance: cubic-bezier(0, 0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
/* extra: an imperfect, hand-thrown asymmetric corner radius (no two corners
equal, like a raku bowl) paired with generous "ma" negative-space padding —
repeated on card and nav so nothing reads as machine-perfect */
--organic-radius: 22px 6px 26px 4px / 14px 20px 8px 24px;
--organic-radius-inverse: 6px 22px 4px 26px / 20px 14px 24px 8px;
--hairline-crack: 1px solid var(--color-border);
}

/* ============================================================
Base component classes — Zen / Wabi-Sabi / Ma
Signature move: an imperfect, hand-thrown asymmetric corner radius (no two
corners match) and unusually generous negative-space padding ("ma") —
repeated on nav, card, and input so surfaces feel handmade, not gridded.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); line-height: 1.6; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-radius: var(--organic-radius); box-shadow: var(--shadow-sm); }
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--organic-radius-inverse);
background: var(--color-surface); border: var(--hairline-crack);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { box-shadow: var(--shadow-sm); transform: translateY(0); }
.btn:focus-visible { outline: 1px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f2ede4; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--organic-radius);
box-shadow: var(--shadow-md); padding: var(--space-8); border: var(--hairline-crack);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: var(--color-bg); border: none; border-bottom: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: transparent;
color: var(--color-accent); border: 1px solid var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/zen-wabisabi.md */
```

## Design System Variables

```css
--bg: #f2ede4, --fg: #33302a, --accent: #7a4f36, --surface: #e9e1d2, --radius: 10px, --spacing: 28px, --font-display: 'Shippori Mincho', serif, --font-body: 'Shippori Mincho', 'Noto Serif JP', 'Iowan Old Style', Georgia, serif
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

[![Japandi](https://designmd.app/images/library/298.png) Minimalismo & Swiss ### Japandi](https://designmd.app/library/japandi)[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)

Last synced: 8/30/2026
