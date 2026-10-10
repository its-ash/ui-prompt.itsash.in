# Ukiyo-e

- Source: <https://designmd.app/library/ukiyo-e>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:40.315Z

Claude Artisan · Movimentos históricos1603–1868

# Ukiyo-e

Reference for movimentos históricos Ukiyo-e. Edo-period Japan (Hokusai, Hiroshige).

Ukiyo-eJapanese woodblockfloating worldFlat areas of color with bold outlinesWoodblock print texture and registrationNature, waves, Mt Fuji, everyday lifeAsymmetric balance, negative spacehistorical

Use case: composição editorial com grade tipográfica; Flat areas of color with bold outlines; Woodblock print texture and registration

![Ukiyo-e](https://designmd.app/images/library/744.png)

## Historical Context

Edo-period Japan (Hokusai, Hiroshige). Example: Hokusai 'Great Wave off Kanagawa'..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Ukiyo-e"
description: "Ukiyo-e visual system, translated from the Claude Artisan catalog for use in digital products. Flat areas of color with bold outlines; Woodblock print texture and registration"
colors:
primary: "#1d4e89"
background: "#eee3c8"
surface: "#f6ecd2"
text: "#1c1a15"
accent: "#b23a2e"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Zen Old Mincho', 'Shippori Mincho', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif"
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

Ukiyo-e visual system, translated from the Claude Artisan catalog for use in digital products. Flat areas of color with bold outlines; Woodblock print texture and registration

- **Category:** historical
- **Era:** 1603–1868
- **Origin:** Edo-period Japan (Hokusai, Hiroshige).
- **Reference:** Hokusai 'Great Wave off Kanagawa'.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Flat areas of color with bold outlines
- Woodblock print texture and registration
- Nature, waves, Mt Fuji, everyday life
- Asymmetric balance, negative space

## Colors

- **bg** — #eee3c8
- **surface** — #f6ecd2
- **surface-strong** — #e6d7ac
- **border** — #1c1a15
- **text** — #1c1a15
- **text-muted** — #4a4736
- **primary** — #1d4e89
- **accent** — #b23a2e
- **wave** — #2f6f8f

## Typography

- Display: 'Zen Old Mincho', 'Shippori Mincho', serif
- Body: 'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flat areas of color with bold outlines; Woodblock print texture and registration; Nature, waves, Mt Fuji, everyday life; Asymmetric balance, negative space; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/ukiyo-e/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Ukiyo-e — design tokens */
/* 1603–1868 | Edo-period Japan (Hokusai, Hiroshige), condensed */
:root {
/* color */
--color-bg: #eee3c8;
--color-surface: #f6ecd2;
--color-surface-strong: #e6d7ac;
--color-border: #1c1a15;
--color-text: #1c1a15;
--color-text-muted: #4a4736;
--color-primary: #1d4e89;
--color-accent: #b23a2e;
--color-wave: #2f6f8f;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 2px 2px 0 rgba(28,26,21,0.15);
--shadow-md: 4px 4px 0 rgba(28,26,21,0.18);
--shadow-lg: 6px 6px 0 rgba(28,26,21,0.22);
/* font */
--font-sans: 'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif;
--font-display: 'Zen Old Mincho', 'Shippori Mincho', serif;
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
/* extra: bold flat-ink outline + a vermillion seal-stamp accent, standing in
for woodblock key-line and the artist's chop mark */
--keyline: 2.5px solid var(--color-border);
--seal-stamp: var(--color-accent);
}

/* ============================================================
Base component classes — ukiyo-e
Signature move: a bold, flat black key-line outline (the woodblock registration
line) wraps every surface with no soft shadow — plus a small vermillion "seal"
square echoing the artist's chop mark, repeated on nav and card.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: var(--keyline); position: relative; }
.nav::after { content: ""; position: absolute; top: -2px; right: -2px; width: 14px; height: 14px; background: var(--seal-stamp); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--keyline);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(1px,1px); box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f6ecd2; border-color: var(--color-border); }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); padding: var(--space-6); border: var(--keyline);
position: relative;
}
.card::before { content: ""; position: absolute; top: var(--space-3); right: var(--space-3);
width: 16px; height: 16px; background: var(--seal-stamp); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--keyline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--seal-stamp);
color: #f6ecd2; border: 1.5px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/ukiyo-e.md */
```

### Variables

```
--bg: #eee3c8, --fg: #1c1a15, --accent: #1d4e89, --surface: #f6ecd2, --radius: 2px, --spacing: 16px, --font-display: 'Zen Old Mincho', 'Shippori Mincho', serif, --font-body: 'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#eee3c8

#f6ecd2

#e6d7ac

#1c1a15

Secondary

#1c1a15

#4a4736

#1d4e89

#b23a2e

#2f6f8f

### Effects

Flat areas of color with bold outlines, Woodblock print texture and registration, Nature, waves, Mt Fuji, everyday life, Asymmetric balance, negative space, shadow

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

- **Name:** Ukiyo-e
- **Type:** claude-artisan/historical
- **Keywords:** Ukiyo-e, Japanese woodblock, floating world, Flat areas of color with bold outlines, Woodblock print texture and registration, Nature, waves, Mt Fuji, everyday life, Asymmetric balance, negative space, historical
- **Era:** 1603–1868
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #eee3c8, surface: #f6ecd2, surface-strong: #e6d7ac, border: #1c1a15
- **Secondary:** text: #1c1a15, text-muted: #4a4736, primary: #1d4e89, accent: #b23a2e, wave: #2f6f8f

## Visual Effects

Flat areas of color with bold outlines, Woodblock print texture and registration, Nature, waves, Mt Fuji, everyday life, Asymmetric balance, negative space, shadow

## AI Visual Direction

Ukiyo-e, Flat areas of color with bold outlines, Woodblock print texture and registration, Nature, waves, Mt Fuji, everyday life, Asymmetric balance, negative space, Hokusai 'Great Wave off Kanagawa'.

## CSS Technical

```css
/* Ukiyo-e — design tokens */
/* 1603–1868 | Edo-period Japan (Hokusai, Hiroshige), condensed */
:root {
/* color */
--color-bg: #eee3c8;
--color-surface: #f6ecd2;
--color-surface-strong: #e6d7ac;
--color-border: #1c1a15;
--color-text: #1c1a15;
--color-text-muted: #4a4736;
--color-primary: #1d4e89;
--color-accent: #b23a2e;
--color-wave: #2f6f8f;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 2px 2px 0 rgba(28,26,21,0.15);
--shadow-md: 4px 4px 0 rgba(28,26,21,0.18);
--shadow-lg: 6px 6px 0 rgba(28,26,21,0.22);
/* font */
--font-sans: 'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif;
--font-display: 'Zen Old Mincho', 'Shippori Mincho', serif;
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
/* extra: bold flat-ink outline + a vermillion seal-stamp accent, standing in
for woodblock key-line and the artist's chop mark */
--keyline: 2.5px solid var(--color-border);
--seal-stamp: var(--color-accent);
}

/* ============================================================
Base component classes — ukiyo-e
Signature move: a bold, flat black key-line outline (the woodblock registration
line) wraps every surface with no soft shadow — plus a small vermillion "seal"
square echoing the artist's chop mark, repeated on nav and card.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: var(--keyline); position: relative; }
.nav::after { content: ""; position: absolute; top: -2px; right: -2px; width: 14px; height: 14px; background: var(--seal-stamp); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--keyline);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(1px,1px); box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f6ecd2; border-color: var(--color-border); }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); padding: var(--space-6); border: var(--keyline);
position: relative;
}
.card::before { content: ""; position: absolute; top: var(--space-3); right: var(--space-3);
width: 16px; height: 16px; background: var(--seal-stamp); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--keyline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--seal-stamp);
color: #f6ecd2; border: 1.5px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/ukiyo-e.md */
```

## Design System Variables

```css
--bg: #eee3c8, --fg: #1c1a15, --accent: #1d4e89, --surface: #f6ecd2, --radius: 2px, --spacing: 16px, --font-display: 'Zen Old Mincho', 'Shippori Mincho', serif, --font-body: 'Zen Old Mincho', 'Noto Serif JP', 'Georgia', serif
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

[![Japandi](https://designmd.app/images/library/298.png) Minimalismo & Swiss ### Japandi](https://designmd.app/library/japandi)[![Comic / Manga](https://designmd.app/images/library/602.png) Claude Artisan · Textura, material & renderização ### Comic / Manga](https://designmd.app/library/comic)

Last synced: 8/30/2026
