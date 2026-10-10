# Lowbrow / Pop Surrealism

- Source: <https://designmd.app/library/lowbrow-pop-surrealism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:32.309Z

Claude Artisan · Subculturas & estéticas de nichoLate 20th century–present

# Lowbrow / Pop Surrealism

Reference for subculturas & estéticas de nicho Lowbrow / Pop Surrealism. Late-20th-century Southern California gallery art movement (the Robert Williams / Mark Ryden circle) fusing hot-rod kustom-kulture linework, underground comix, and cartoon-surrealist illustration into fine-art gallery painting.

Lowbrow / Pop Surrealismpop surrealismlowbrow artkustom-kulture illustrationcartoon surrealismHyper-detailed cartoon-surrealist illustration with glossy airbrushed renderingPlayful-but-unsettling juxtapositions (cute rendering, uncanny subject)Candy-bright palette against a dark or muted groundKustom-kulture/hot-rod-adjacent thick black linework (keyline)niche

Use case: hero, superfície, conteúdo e grade responsiva; Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering; Playful-but-unsettling juxtapositions (cute rendering, uncanny subject)

![Lowbrow / Pop Surrealism](https://designmd.app/images/library/672.png)

## Historical Context

Late-20th-century Southern California gallery art movement (the Robert Williams / Mark Ryden circle) fusing hot-rod kustom-kulture linework, underground comix, and cartoon-surrealist illustration into fine-art gallery painting. Example: Robert Williams' 'Juxtapoz'-era hot-rod paintings; Mark Ryden's candy-bright porcelain-doll surrealism..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Lowbrow / Pop Surrealism"
description: "Lowbrow / Pop Surrealism visual system, translated from the Claude Artisan catalog for use in digital products. Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering; Playful-but-unsettling juxtapositions (cute rendering, uncanny subject)"
colors:
primary: "#ff5fa2"
background: "#17151f"
surface: "#201c2c"
text: "#f4eefc"
accent: "#4fd8e0"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Bungee', 'Baloo 2', 'Arial Rounded MT Bold', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Baloo 2', 'Nunito', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Baloo 2', 'Nunito', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "16px"
lg: "32px"
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

Lowbrow / Pop Surrealism visual system, translated from the Claude Artisan catalog for use in digital products. Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering; Playful-but-unsettling juxtapositions (cute rendering, uncanny subject)

- **Category:** niche
- **Era:** Late 20th century–present
- **Origin:** Late-20th-century Southern California gallery art movement (the Robert Williams / Mark Ryden circle) fusing hot-rod kustom-kulture linework, underground comix, and cartoon-surrealist illustration into fine-art gallery painting.
- **Reference:** Robert Williams' 'Juxtapoz'-era hot-rod paintings; Mark Ryden's candy-bright porcelain-doll surrealism.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering
- Playful-but-unsettling juxtapositions (cute rendering, uncanny subject)
- Candy-bright palette against a dark or muted ground
- Kustom-kulture/hot-rod-adjacent thick black linework (keyline)

## Colors

- **bg** — #17151f
- **surface** — #201c2c
- **surface-2** — #2c2740
- **text** — #f4eefc
- **text-muted** — #b8aed0
- **primary** — #ff5fa2
- **accent** — #4fd8e0
- **gold** — #ffcc33
- **lineweight** — #0e0c14

## Typography

- Display: 'Bungee', 'Baloo 2', 'Arial Rounded MT Bold', sans-serif
- Body: 'Baloo 2', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering; Playful-but-unsettling juxtapositions (cute rendering, uncanny subject); Candy-bright palette against a dark or muted ground; Kustom-kulture/hot-rod-adjacent thick black linework (keyline); sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 16px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/lowbrow-pop-surrealism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Lowbrow / Pop Surrealism — design tokens */
/* Late 20th century–present | Cartoon-surrealist gallery movement (Robert Williams / Mark Ryden circle) */
:root {
/* color */
--color-bg: #17151f;
--color-surface: #201c2c;
--color-surface-2: #2c2740;
--color-text: #f4eefc;
--color-text-muted: #b8aed0;
--color-primary: #ff5fa2;
--color-accent: #4fd8e0;
--color-gold: #ffcc33;
--color-lineweight: #0e0c14;
/* radius */
--radius-sm: 6px;
--radius-md: 16px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-glossy: 0 10px 30px rgba(255,95,162,0.25), 0 2px 0 var(--color-lineweight);
--shadow-glossy-sm: 0 4px 14px rgba(79,216,224,0.25), 0 1px 0 var(--color-lineweight);
/* font */
--font-sans: 'Baloo 2', 'Nunito', system-ui, sans-serif;
--font-display: 'Bungee', 'Baloo 2', 'Arial Rounded MT Bold', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.4, 0.3, 1);
/* extra: airbrushed candy sheen + kustom-kulture outline */
--candy-sheen: radial-gradient(60% 45% at 30% 20%, rgba(255,255,255,0.35), transparent 60%);
--keyline-outline: 0 0 0 3px var(--color-lineweight);
--bg-image: radial-gradient(120% 90% at 80% -10%, #2c2740 0%, #17151f 55%, #0e0c14 100%);
}

/* ============================================================
Base component classes — Lowbrow / Pop Surrealism
Signature move: a glossy airbrushed candy sheen laid over a
thick black kustom-kulture keyline, candy-bright fills on a
dark ground. Repeat the sheen + keyline pair everywhere raised.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-lineweight);
box-shadow: var(--shadow-glossy-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-2); box-shadow: var(--keyline-outline);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--keyline-outline), var(--shadow-glossy-sm); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 3px solid var(--color-gold); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: var(--keyline-outline); }
.btn--primary {
background: var(--color-primary); background-image: var(--candy-sheen);
color: var(--color-lineweight); font-weight: 800; box-shadow: var(--keyline-outline), var(--shadow-glossy);
}
.btn--primary:hover { box-shadow: var(--keyline-outline), 0 14px 36px rgba(255,95,162,0.35); }
.card {
background: var(--color-surface); background-image: var(--candy-sheen);
border-radius: var(--radius-lg); padding: var(--space-6);
box-shadow: var(--keyline-outline), var(--shadow-glossy);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-2); box-shadow: var(--keyline-outline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: 0 0 0 3px var(--color-accent), var(--keyline-outline); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-display);
padding: .35em .85em; border-radius: var(--radius-pill);
background: var(--color-accent); background-image: var(--candy-sheen); color: var(--color-lineweight);
box-shadow: var(--keyline-outline);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/lowbrow-pop-surrealism.md */
```

### Variables

```
--bg: #17151f, --fg: #f4eefc, --accent: #ff5fa2, --surface: #201c2c, --radius: 16px, --spacing: 16px, --font-display: 'Bungee', 'Baloo 2', 'Arial Rounded MT Bold', sans-serif, --font-body: 'Baloo 2', 'Nunito', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#17151f

#201c2c

#2c2740

#f4eefc

Secondary

#b8aed0

#ff5fa2

#4fd8e0

#ffcc33

#0e0c14

### Effects

Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering, Playful-but-unsettling juxtapositions (cute rendering, uncanny subject), Candy-bright palette against a dark or muted ground, Kustom-kulture/hot-rod-adjacent thick black linework (keyline), shadow, blur

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

- **Name:** Lowbrow / Pop Surrealism
- **Type:** claude-artisan/niche
- **Keywords:** Lowbrow / Pop Surrealism, pop surrealism, lowbrow art, kustom-kulture illustration, cartoon surrealism, Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering, Playful-but-unsettling juxtapositions (cute rendering, uncanny subject), Candy-bright palette against a dark or muted ground, Kustom-kulture/hot-rod-adjacent thick black linework (keyline), niche
- **Era:** Late 20th century–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #17151f, surface: #201c2c, surface-2: #2c2740, text: #f4eefc
- **Secondary:** text-muted: #b8aed0, primary: #ff5fa2, accent: #4fd8e0, gold: #ffcc33, lineweight: #0e0c14

## Visual Effects

Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering, Playful-but-unsettling juxtapositions (cute rendering, uncanny subject), Candy-bright palette against a dark or muted ground, Kustom-kulture/hot-rod-adjacent thick black linework (keyline), shadow, blur

## AI Visual Direction

Lowbrow / Pop Surrealism, Hyper-detailed cartoon-surrealist illustration with glossy airbrushed rendering, Playful-but-unsettling juxtapositions (cute rendering, uncanny subject), Candy-bright palette against a dark or muted ground, Kustom-kulture/hot-rod-adjacent thick black linework (keyline), Robert Williams' 'Juxtapoz'-era hot-rod paintings; Mark Ryden's candy-bright porcelain-doll surrealism.

## CSS Technical

```css
/* Lowbrow / Pop Surrealism — design tokens */
/* Late 20th century–present | Cartoon-surrealist gallery movement (Robert Williams / Mark Ryden circle) */
:root {
/* color */
--color-bg: #17151f;
--color-surface: #201c2c;
--color-surface-2: #2c2740;
--color-text: #f4eefc;
--color-text-muted: #b8aed0;
--color-primary: #ff5fa2;
--color-accent: #4fd8e0;
--color-gold: #ffcc33;
--color-lineweight: #0e0c14;
/* radius */
--radius-sm: 6px;
--radius-md: 16px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-glossy: 0 10px 30px rgba(255,95,162,0.25), 0 2px 0 var(--color-lineweight);
--shadow-glossy-sm: 0 4px 14px rgba(79,216,224,0.25), 0 1px 0 var(--color-lineweight);
/* font */
--font-sans: 'Baloo 2', 'Nunito', system-ui, sans-serif;
--font-display: 'Bungee', 'Baloo 2', 'Arial Rounded MT Bold', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.4, 0.3, 1);
/* extra: airbrushed candy sheen + kustom-kulture outline */
--candy-sheen: radial-gradient(60% 45% at 30% 20%, rgba(255,255,255,0.35), transparent 60%);
--keyline-outline: 0 0 0 3px var(--color-lineweight);
--bg-image: radial-gradient(120% 90% at 80% -10%, #2c2740 0%, #17151f 55%, #0e0c14 100%);
}

/* ============================================================
Base component classes — Lowbrow / Pop Surrealism
Signature move: a glossy airbrushed candy sheen laid over a
thick black kustom-kulture keyline, candy-bright fills on a
dark ground. Repeat the sheen + keyline pair everywhere raised.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-lineweight);
box-shadow: var(--shadow-glossy-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-2); box-shadow: var(--keyline-outline);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--keyline-outline), var(--shadow-glossy-sm); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 3px solid var(--color-gold); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: var(--keyline-outline); }
.btn--primary {
background: var(--color-primary); background-image: var(--candy-sheen);
color: var(--color-lineweight); font-weight: 800; box-shadow: var(--keyline-outline), var(--shadow-glossy);
}
.btn--primary:hover { box-shadow: var(--keyline-outline), 0 14px 36px rgba(255,95,162,0.35); }
.card {
background: var(--color-surface); background-image: var(--candy-sheen);
border-radius: var(--radius-lg); padding: var(--space-6);
box-shadow: var(--keyline-outline), var(--shadow-glossy);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-2); box-shadow: var(--keyline-outline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: 0 0 0 3px var(--color-accent), var(--keyline-outline); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-display);
padding: .35em .85em; border-radius: var(--radius-pill);
background: var(--color-accent); background-image: var(--candy-sheen); color: var(--color-lineweight);
box-shadow: var(--keyline-outline);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/lowbrow-pop-surrealism.md */
```

## Design System Variables

```css
--bg: #17151f, --fg: #f4eefc, --accent: #ff5fa2, --surface: #201c2c, --radius: 16px, --spacing: 16px, --font-display: 'Bungee', 'Baloo 2', 'Arial Rounded MT Bold', sans-serif, --font-body: 'Baloo 2', 'Nunito', system-ui, sans-serif
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

[![Pop Art](https://designmd.app/images/library/315.png) Arte & Ilustracao ### Pop Art](https://designmd.app/library/pop-art)[![Psychedelic Art](https://designmd.app/images/library/703.png) Claude Artisan · Movimentos históricos ### Psychedelic Art](https://designmd.app/library/psychedelic)[![Dreamcore](https://designmd.app/images/library/624.png) Claude Artisan · Subculturas & estéticas de nicho ### Dreamcore](https://designmd.app/library/dreamcore)

Last synced: 8/30/2026
