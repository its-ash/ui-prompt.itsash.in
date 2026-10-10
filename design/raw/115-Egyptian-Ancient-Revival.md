# Egyptian / Ancient Revival

- Source: <https://designmd.app/library/egyptian-revival>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:17.297Z

Claude Artisan · Movimentos históricos1820s & 1920s revivals

# Egyptian / Ancient Revival

Reference for movimentos históricos Egyptian / Ancient Revival. Egyptomania after Napoleon's campaigns and Tutankhamun (1922).

Egyptian / Ancient RevivalhieroglyphicEgyptomaniaHieroglyph and papyrus motifs, lotus, scarabGold, lapis blue, terracottaBold slab 'Egyptian' typefacesMonumental, symmetric, ancienthistorical

Use case: hero, superfície, conteúdo e grade responsiva; Hieroglyph and papyrus motifs, lotus, scarab; Gold, lapis blue, terracotta

![Egyptian / Ancient Revival](https://designmd.app/images/library/630.png)

## Historical Context

Egyptomania after Napoleon's campaigns and Tutankhamun (1922). Example: Art Deco Egyptian revival; museum branding..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Egyptian / Ancient Revival"
description: "Egyptian / Ancient Revival visual system, translated from the Claude Artisan catalog for use in digital products. Hieroglyph and papyrus motifs, lotus, scarab; Gold, lapis blue, terracotta"
colors:
primary: "#1b3f6b"
background: "#efe2c0"
surface: "#f7ecd3"
text: "#241a0e"
accent: "#b8860b"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cinzel', 'Trajan Pro', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Trajan Pro', 'Cinzel', 'Georgia', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Trajan Pro', 'Cinzel', 'Georgia', serif"
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

Egyptian / Ancient Revival visual system, translated from the Claude Artisan catalog for use in digital products. Hieroglyph and papyrus motifs, lotus, scarab; Gold, lapis blue, terracotta

- **Category:** historical
- **Era:** 1820s & 1920s revivals
- **Origin:** Egyptomania after Napoleon's campaigns and Tutankhamun (1922).
- **Reference:** Art Deco Egyptian revival; museum branding.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Hieroglyph and papyrus motifs, lotus, scarab
- Gold, lapis blue, terracotta
- Bold slab 'Egyptian' typefaces
- Monumental, symmetric, ancient

## Colors

- **bg** — #efe2c0
- **surface** — #f7ecd3
- **surface-strong** — #e6d3a3
- **border** — #b8860b
- **text** — #241a0e
- **text-muted** — #5a4527
- **primary** — #1b3f6b
- **accent** — #b8860b
- **terracotta** — #a3441f

## Typography

- Display: 'Cinzel', 'Trajan Pro', serif
- Body: 'Trajan Pro', 'Cinzel', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Hieroglyph and papyrus motifs, lotus, scarab; Gold, lapis blue, terracotta; Bold slab 'Egyptian' typefaces; Monumental, symmetric, ancient; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/egyptian-revival/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Egyptian / Ancient Revival — design tokens */
/* 1820s & 1920s revivals | Egyptomania after Napoleon's campaigns and Tutankhamun (1922), condensed */
:root {
/* color */
--color-bg: #efe2c0;
--color-surface: #f7ecd3;
--color-surface-strong: #e6d3a3;
--color-border: #b8860b;
--color-text: #241a0e;
--color-text-muted: #5a4527;
--color-primary: #1b3f6b;
--color-accent: #b8860b;
--color-terracotta: #a3441f;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 4px rgba(36,26,14,0.2);
--shadow-md: 0 6px 16px rgba(36,26,14,0.24);
--shadow-lg: 0 16px 36px rgba(36,26,14,0.3);
/* font */
--font-sans: 'Trajan Pro', 'Cinzel', 'Georgia', serif;
--font-display: 'Cinzel', 'Trajan Pro', serif;
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
/* extra: signature = repeating gold key-pattern border stripe + lapis/terracotta banding */
--key-pattern: repeating-linear-gradient(90deg, var(--color-accent) 0 8px, transparent 8px 10px, var(--color-accent) 10px 18px, transparent 18px 24px);
--banded-border: 4px solid var(--color-accent);
}

/* ============================================================
Base component classes — Egyptian / Ancient Revival
Signature move: a repeating gold key-pattern (Greek-key/hieroglyph
inspired) border stripe runs along the nav's base and every card's
top edge — monumental, symmetric, gold on papyrus cream.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border-bottom: var(--banded-border); position: relative; }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -6px; height: 4px; background-image: var(--key-pattern); }
.btn { font: 700 var(--text-sm)/1 var(--font-display); letter-spacing: .04em; color: var(--color-text);
background: var(--color-surface-strong); border: 2px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6); cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f7ecd3; border-color: var(--color-accent); }
.card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; background-image: var(--key-pattern); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
color: #f7ecd3; background: var(--color-terracotta); border-radius: var(--radius-pill); padding: .3em .9em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/egyptian-revival.md */
```

### Variables

```
--bg: #efe2c0, --fg: #241a0e, --accent: #1b3f6b, --surface: #f7ecd3, --radius: 4px, --spacing: 16px, --font-display: 'Cinzel', 'Trajan Pro', serif, --font-body: 'Trajan Pro', 'Cinzel', 'Georgia', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#efe2c0

#f7ecd3

#e6d3a3

#b8860b

Secondary

#241a0e

#5a4527

#1b3f6b

#b8860b

#a3441f

### Effects

Hieroglyph and papyrus motifs, lotus, scarab, Gold, lapis blue, terracotta, Bold slab 'Egyptian' typefaces, Monumental, symmetric, ancient, shadow

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

- **Name:** Egyptian / Ancient Revival
- **Type:** claude-artisan/historical
- **Keywords:** Egyptian / Ancient Revival, hieroglyphic, Egyptomania, Hieroglyph and papyrus motifs, lotus, scarab, Gold, lapis blue, terracotta, Bold slab 'Egyptian' typefaces, Monumental, symmetric, ancient, historical
- **Era:** 1820s & 1920s revivals
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #efe2c0, surface: #f7ecd3, surface-strong: #e6d3a3, border: #b8860b
- **Secondary:** text: #241a0e, text-muted: #5a4527, primary: #1b3f6b, accent: #b8860b, terracotta: #a3441f

## Visual Effects

Hieroglyph and papyrus motifs, lotus, scarab, Gold, lapis blue, terracotta, Bold slab 'Egyptian' typefaces, Monumental, symmetric, ancient, shadow

## AI Visual Direction

Egyptian / Ancient Revival, Hieroglyph and papyrus motifs, lotus, scarab, Gold, lapis blue, terracotta, Bold slab 'Egyptian' typefaces, Monumental, symmetric, ancient, Art Deco Egyptian revival; museum branding.

## CSS Technical

```css
/* Egyptian / Ancient Revival — design tokens */
/* 1820s & 1920s revivals | Egyptomania after Napoleon's campaigns and Tutankhamun (1922), condensed */
:root {
/* color */
--color-bg: #efe2c0;
--color-surface: #f7ecd3;
--color-surface-strong: #e6d3a3;
--color-border: #b8860b;
--color-text: #241a0e;
--color-text-muted: #5a4527;
--color-primary: #1b3f6b;
--color-accent: #b8860b;
--color-terracotta: #a3441f;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 4px rgba(36,26,14,0.2);
--shadow-md: 0 6px 16px rgba(36,26,14,0.24);
--shadow-lg: 0 16px 36px rgba(36,26,14,0.3);
/* font */
--font-sans: 'Trajan Pro', 'Cinzel', 'Georgia', serif;
--font-display: 'Cinzel', 'Trajan Pro', serif;
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
/* extra: signature = repeating gold key-pattern border stripe + lapis/terracotta banding */
--key-pattern: repeating-linear-gradient(90deg, var(--color-accent) 0 8px, transparent 8px 10px, var(--color-accent) 10px 18px, transparent 18px 24px);
--banded-border: 4px solid var(--color-accent);
}

/* ============================================================
Base component classes — Egyptian / Ancient Revival
Signature move: a repeating gold key-pattern (Greek-key/hieroglyph
inspired) border stripe runs along the nav's base and every card's
top edge — monumental, symmetric, gold on papyrus cream.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border-bottom: var(--banded-border); position: relative; }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -6px; height: 4px; background-image: var(--key-pattern); }
.btn { font: 700 var(--text-sm)/1 var(--font-display); letter-spacing: .04em; color: var(--color-text);
background: var(--color-surface-strong); border: 2px solid var(--color-border); border-radius: var(--radius-md);
padding: var(--space-3) var(--space-6); cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f7ecd3; border-color: var(--color-accent); }
.card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; }
.card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 6px; background-image: var(--key-pattern); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--color-surface); border: 2px solid var(--color-border); border-radius: var(--radius-sm);
padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
color: #f7ecd3; background: var(--color-terracotta); border-radius: var(--radius-pill); padding: .3em .9em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/egyptian-revival.md */
```

## Design System Variables

```css
--bg: #efe2c0, --fg: #241a0e, --accent: #1b3f6b, --surface: #f7ecd3, --radius: 4px, --spacing: 16px, --font-display: 'Cinzel', 'Trajan Pro', serif, --font-body: 'Trajan Pro', 'Cinzel', 'Georgia', serif
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

[![Art Deco](https://designmd.app/images/library/304.png) Arte & Ilustracao ### Art Deco](https://designmd.app/library/art-deco)

Last synced: 8/30/2026
