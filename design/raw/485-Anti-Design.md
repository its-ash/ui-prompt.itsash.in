# Anti-Design

- Source: <https://designmd.app/library/anti-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:21.313Z

Claude Artisan · Brutalismo & anti-design2016–present

# Anti-Design

Reference for brutalismo & anti-design Anti-Design. Reaction against polished 'design-by-committee' minimalism.

Anti-Designugly designundesignDeliberate rule-breaking: clashing type, misalignmentDefault/system styling embracedRejects visual hierarchy conventionsProvocative, expressive, DIYbrutalist

Use case: hero, superfície, conteúdo e grade responsiva; Deliberate rule-breaking: clashing type, misalignment; Default/system styling embraced

![Anti-Design](https://designmd.app/images/library/575.png)

## Historical Context

Reaction against polished 'design-by-committee' minimalism. Example: Balenciaga site experiments; art/fashion microsites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Anti-Design"
description: "Anti-Design visual system, translated from the Claude Artisan catalog for use in digital products. Deliberate rule-breaking: clashing type, misalignment; Default/system styling embraced"
colors:
primary: "#0000ff"
background: "#ffe600"
surface: "#ff00ff"
text: "#000000"
accent: "#ff0000"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Times New Roman', Times, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Times New Roman', Times, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
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

Anti-Design visual system, translated from the Claude Artisan catalog for use in digital products. Deliberate rule-breaking: clashing type, misalignment; Default/system styling embraced

- **Category:** brutalist
- **Era:** 2016–present
- **Origin:** Reaction against polished 'design-by-committee' minimalism.
- **Reference:** Balenciaga site experiments; art/fashion microsites.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Deliberate rule-breaking: clashing type, misalignment
- Default/system styling embraced
- Rejects visual hierarchy conventions
- Provocative, expressive, DIY

## Colors

- **bg** — #ffe600
- **surface** — #ff00ff
- **surface-strong** — #00ffff
- **border** — #000000
- **text** — #000000
- **text-muted** — #1a1a1a
- **primary** — #0000ff
- **accent** — #ff0000

## Typography

- Display: 'Comic Sans MS', 'Chalkboard SE', cursive
- Body: 'Times New Roman', Times, serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Deliberate rule-breaking: clashing type, misalignment; Default/system styling embraced; Rejects visual hierarchy conventions; Provocative, expressive, DIY; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/anti-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Anti-Design — design tokens */
/* 2016–present | Reaction against polished 'design-by-committee' minimalism, condensed */
:root {
/* color */
--color-bg: #ffe600;
--color-surface: #ff00ff;
--color-surface-strong: #00ffff;
--color-border: #000000;
--color-text: #000000;
--color-text-muted: #1a1a1a;
--color-primary: #0000ff;
--color-accent: #ff0000;
/* radius: none, deliberately harsh defaults */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: clashing double offset, mimicking mis-registered print */
--shadow-sm: 3px 3px 0 #ff0000;
--shadow-md: 5px 5px 0 #0000ff, -3px -3px 0 #00ffff;
--shadow-lg: 8px 8px 0 #ff0000, -5px -5px 0 #0000ff;
/* font: deliberately clashing default-browser choices */
--font-sans: 'Times New Roman', Times, serif;
--font-display: 'Comic Sans MS', 'Chalkboard SE', cursive;
--font-mono: 'Courier New', monospace;
/* text: default browser sizes exaggerated */
--text-xs: 0.7rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.2rem;
--text-xl: 1.6rem;
--text-2xl: 2.1rem;
--text-3xl: 2.8rem;
--text-4xl: 3.6rem;
--text-5xl: 4.8rem;
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
/* ease: abrupt, no easing */
--ease-standard: steps(1);
/* extra: intentional misregistration rotation */
--tilt-a: rotate(-1.6deg);
--tilt-b: rotate(1.1deg);
}

/* ============================================================
Base component classes — Anti-Design
Signature move: a hard, offset double drop-shadow in clashing
colors (like mis-registered print plates) plus a slight rotate
on every surface — refusing the polished, aligned grid. Repeats
on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface-strong);
border: 3px solid var(--color-border); box-shadow: var(--shadow-md);
transform: var(--tilt-a); color: var(--color-text);
}
.btn {
font: bold var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: #c0c0c0; border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: none; transform: var(--tilt-b);
}
.btn:hover { background: #d9d9d9; transform: rotate(0deg); }
.btn:active { box-shadow: none; transform: translate(3px,3px); }
.btn:focus-visible { outline: 4px dashed var(--color-primary); outline-offset: 4px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-accent); color: #000000; text-decoration: underline; }
.card {
background: var(--color-surface); color: #000000; border-radius: var(--radius-lg);
padding: var(--space-6); border: 3px solid var(--color-border); box-shadow: var(--shadow-lg);
transform: var(--tilt-a);
}
.card h3, .card p { color: #000000; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: #ffffff; border: 3px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: 4px dashed var(--color-primary); outline-offset: 2px; }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: bold var(--text-xs) var(--font-mono); text-transform: uppercase;
padding: .3em .8em; background: var(--color-primary); color: #ffff00; border: 2px solid var(--color-border);
transform: var(--tilt-b);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/anti-design.md */
```

### Variables

```
--bg: #ffe600, --fg: #000000, --accent: #0000ff, --surface: #ff00ff, --radius: 0px, --spacing: 16px, --font-display: 'Comic Sans MS', 'Chalkboard SE', cursive, --font-body: 'Times New Roman', Times, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffe600

#ff00ff

#00ffff

#000000

Secondary

#000000

#1a1a1a

#0000ff

#ff0000

### Effects

Deliberate rule-breaking: clashing type, misalignment, Default/system styling embraced, Rejects visual hierarchy conventions, Provocative, expressive, DIY, shadow

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

- **Name:** Anti-Design
- **Type:** claude-artisan/brutalist
- **Keywords:** Anti-Design, ugly design, undesign, Deliberate rule-breaking: clashing type, misalignment, Default/system styling embraced, Rejects visual hierarchy conventions, Provocative, expressive, DIY, brutalist
- **Era:** 2016–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffe600, surface: #ff00ff, surface-strong: #00ffff, border: #000000
- **Secondary:** text: #000000, text-muted: #1a1a1a, primary: #0000ff, accent: #ff0000

## Visual Effects

Deliberate rule-breaking: clashing type, misalignment, Default/system styling embraced, Rejects visual hierarchy conventions, Provocative, expressive, DIY, shadow

## AI Visual Direction

Anti-Design, Deliberate rule-breaking: clashing type, misalignment, Default/system styling embraced, Rejects visual hierarchy conventions, Provocative, expressive, DIY, Balenciaga site experiments; art/fashion microsites.

## CSS Technical

```css
/* Anti-Design — design tokens */
/* 2016–present | Reaction against polished 'design-by-committee' minimalism, condensed */
:root {
/* color */
--color-bg: #ffe600;
--color-surface: #ff00ff;
--color-surface-strong: #00ffff;
--color-border: #000000;
--color-text: #000000;
--color-text-muted: #1a1a1a;
--color-primary: #0000ff;
--color-accent: #ff0000;
/* radius: none, deliberately harsh defaults */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow: clashing double offset, mimicking mis-registered print */
--shadow-sm: 3px 3px 0 #ff0000;
--shadow-md: 5px 5px 0 #0000ff, -3px -3px 0 #00ffff;
--shadow-lg: 8px 8px 0 #ff0000, -5px -5px 0 #0000ff;
/* font: deliberately clashing default-browser choices */
--font-sans: 'Times New Roman', Times, serif;
--font-display: 'Comic Sans MS', 'Chalkboard SE', cursive;
--font-mono: 'Courier New', monospace;
/* text: default browser sizes exaggerated */
--text-xs: 0.7rem;
--text-sm: 0.9rem;
--text-base: 1rem;
--text-lg: 1.2rem;
--text-xl: 1.6rem;
--text-2xl: 2.1rem;
--text-3xl: 2.8rem;
--text-4xl: 3.6rem;
--text-5xl: 4.8rem;
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
/* ease: abrupt, no easing */
--ease-standard: steps(1);
/* extra: intentional misregistration rotation */
--tilt-a: rotate(-1.6deg);
--tilt-b: rotate(1.1deg);
}

/* ============================================================
Base component classes — Anti-Design
Signature move: a hard, offset double drop-shadow in clashing
colors (like mis-registered print plates) plus a slight rotate
on every surface — refusing the polished, aligned grid. Repeats
on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface-strong);
border: 3px solid var(--color-border); box-shadow: var(--shadow-md);
transform: var(--tilt-a); color: var(--color-text);
}
.btn {
font: bold var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: #c0c0c0; border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: none; transform: var(--tilt-b);
}
.btn:hover { background: #d9d9d9; transform: rotate(0deg); }
.btn:active { box-shadow: none; transform: translate(3px,3px); }
.btn:focus-visible { outline: 4px dashed var(--color-primary); outline-offset: 4px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-accent); color: #000000; text-decoration: underline; }
.card {
background: var(--color-surface); color: #000000; border-radius: var(--radius-lg);
padding: var(--space-6); border: 3px solid var(--color-border); box-shadow: var(--shadow-lg);
transform: var(--tilt-a);
}
.card h3, .card p { color: #000000; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: #ffffff; border: 3px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); font-style: italic; }
.input:focus { outline: 4px dashed var(--color-primary); outline-offset: 2px; }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: bold var(--text-xs) var(--font-mono); text-transform: uppercase;
padding: .3em .8em; background: var(--color-primary); color: #ffff00; border: 2px solid var(--color-border);
transform: var(--tilt-b);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/anti-design.md */
```

## Design System Variables

```css
--bg: #ffe600, --fg: #000000, --accent: #0000ff, --surface: #ff00ff, --radius: 0px, --spacing: 16px, --font-display: 'Comic Sans MS', 'Chalkboard SE', cursive, --font-body: 'Times New Roman', Times, serif
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

[![Dadaist / Collage Web](https://designmd.app/images/library/614.png) Claude Artisan · Brutalismo & anti-design ### Dadaist / Collage Web](https://designmd.app/library/dadaist-web)

Last synced: 8/30/2026
