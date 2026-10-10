# Dreampunk

- Source: <https://designmd.app/library/dreampunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:09.298Z

Claude Artisan · Retrofuturismo & ficção especulativa2010s–present

# Dreampunk

Reference for retrofuturismo & ficção especulativa Dreampunk. Surreal, dream-logic offshoot of vaporwave/ambient.

Dreampunkoneiric aestheticHazy, ethereal, foggy gradientsSoft glow, indistinct formsLiminal, otherworldly calmAmbient, hypnagogicretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Hazy, ethereal, foggy gradients; Soft glow, indistinct forms

![Dreampunk](https://designmd.app/images/library/625.png)

## Historical Context

Surreal, dream-logic offshoot of vaporwave/ambient. Example: Dreampunk music visuals; 2814 album art..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Dreampunk"
description: "Dreampunk visual system, translated from the Claude Artisan catalog for use in digital products. Hazy, ethereal, foggy gradients; Soft glow, indistinct forms"
colors:
primary: "#7c9cff"
background: "#171b2e"
surface: "#171b2e"
text: "#eef1ff"
accent: "#9df0e0"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Quicksand', 'Nunito Sans', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Nunito Sans', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Nunito Sans', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "12px"
md: "20px"
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

Dreampunk visual system, translated from the Claude Artisan catalog for use in digital products. Hazy, ethereal, foggy gradients; Soft glow, indistinct forms

- **Category:** retrofuturism
- **Era:** 2010s–present
- **Origin:** Surreal, dream-logic offshoot of vaporwave/ambient.
- **Reference:** Dreampunk music visuals; 2814 album art.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Hazy, ethereal, foggy gradients
- Soft glow, indistinct forms
- Liminal, otherworldly calm
- Ambient, hypnagogic

## Colors

- **bg** — #171b2e
- **surface** — rgba(255, 255, 255, 0.06)
- **surface-strong** — rgba(255, 255, 255, 0.11)
- **border** — rgba(180, 200, 255, 0.22)
- **text** — #eef1ff
- **text-muted** — rgba(238, 241, 255, 0.68)
- **primary** — #7c9cff
- **accent** — #9df0e0

## Typography

- Display: 'Quicksand', 'Nunito Sans', sans-serif
- Body: 'Nunito Sans', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Hazy, ethereal, foggy gradients; Soft glow, indistinct forms; Liminal, otherworldly calm; Ambient, hypnagogic; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 12px, 20px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/dreampunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Dreampunk — design tokens */
/* 2010s–present | Surreal, dream-logic offshoot of vaporwave/ambient, condensed */
:root {
/* color */
--color-bg: #171b2e;
--color-surface: rgba(255, 255, 255, 0.06);
--color-surface-strong: rgba(255, 255, 255, 0.11);
--color-border: rgba(180, 200, 255, 0.22);
--color-text: #eef1ff;
--color-text-muted: rgba(238, 241, 255, 0.68);
--color-primary: #7c9cff;
--color-accent: #9df0e0;
/* radius */
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 14px rgba(90, 110, 220, 0.20);
--shadow-md: 0 10px 40px rgba(90, 110, 220, 0.28);
--shadow-lg: 0 24px 70px rgba(90, 110, 220, 0.34);
/* blur */
--blur-backdrop: 22px;
/* font */
--font-sans: 'Nunito Sans', system-ui, sans-serif;
--font-display: 'Quicksand', 'Nunito Sans', sans-serif;
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
--ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
/* extra: signature = foggy ambient gradient field + heavy blur on every surface (no grain, cool + calm) */
--bg-fog: radial-gradient(90% 70% at 15% 10%, #33407a 0%, transparent 55%),
radial-gradient(80% 60% at 85% 90%, #1f5f66 0%, transparent 55%), var(--color-bg);
--fog-fill: linear-gradient(160deg, rgba(124,156,255,0.14), rgba(157,240,224,0.06));
}

/* ============================================================
Base component classes — Dreampunk
Signature move: every surface is a heavily blurred, indistinct fog
panel (backdrop-filter blur + soft fog gradient fill, no hard border)
evoking hypnagogic, liminal, otherworldly calm.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-fog); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-pill); box-shadow: var(--shadow-sm); }
.btn { font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-pill); padding: var(--space-3) var(--space-6);
cursor: pointer; transition: box-shadow .4s var(--ease-standard), transform .4s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: color-mix(in srgb, var(--color-primary) 40%, transparent); border-color: color-mix(in srgb, var(--color-primary) 55%, transparent); }
.card { background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); border: 1px solid var(--color-border);
border-radius: var(--radius-md); padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); color: var(--color-text);
background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); border: 1px solid var(--color-border);
border-radius: var(--radius-pill); padding: .3em .8em; }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card, .btn, .input, .badge { background: #232a4a; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dreampunk.md */
```

### Variables

```
--bg: #171b2e, --fg: #eef1ff, --accent: #7c9cff, --surface: #171b2e, --radius: 20px, --spacing: 16px, --font-display: 'Quicksand', 'Nunito Sans', sans-serif, --font-body: 'Nunito Sans', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#171b2e

Secondary

#eef1ff

#7c9cff

#9df0e0

### Effects

Hazy, ethereal, foggy gradients, Soft glow, indistinct forms, Liminal, otherworldly calm, Ambient, hypnagogic, shadow, blur

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

- **Name:** Dreampunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Dreampunk, oneiric aesthetic, Hazy, ethereal, foggy gradients, Soft glow, indistinct forms, Liminal, otherworldly calm, Ambient, hypnagogic, retrofuturism
- **Era:** 2010s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #171b2e, surface: rgba(255, 255, 255, 0.06), surface-strong: rgba(255, 255, 255, 0.11), border: rgba(180, 200, 255, 0.22)
- **Secondary:** text: #eef1ff, text-muted: rgba(238, 241, 255, 0.68), primary: #7c9cff, accent: #9df0e0

## Visual Effects

Hazy, ethereal, foggy gradients, Soft glow, indistinct forms, Liminal, otherworldly calm, Ambient, hypnagogic, shadow, blur

## AI Visual Direction

Dreampunk, Hazy, ethereal, foggy gradients, Soft glow, indistinct forms, Liminal, otherworldly calm, Ambient, hypnagogic, Dreampunk music visuals; 2814 album art.

## CSS Technical

```css
/* Dreampunk — design tokens */
/* 2010s–present | Surreal, dream-logic offshoot of vaporwave/ambient, condensed */
:root {
/* color */
--color-bg: #171b2e;
--color-surface: rgba(255, 255, 255, 0.06);
--color-surface-strong: rgba(255, 255, 255, 0.11);
--color-border: rgba(180, 200, 255, 0.22);
--color-text: #eef1ff;
--color-text-muted: rgba(238, 241, 255, 0.68);
--color-primary: #7c9cff;
--color-accent: #9df0e0;
/* radius */
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 14px rgba(90, 110, 220, 0.20);
--shadow-md: 0 10px 40px rgba(90, 110, 220, 0.28);
--shadow-lg: 0 24px 70px rgba(90, 110, 220, 0.34);
/* blur */
--blur-backdrop: 22px;
/* font */
--font-sans: 'Nunito Sans', system-ui, sans-serif;
--font-display: 'Quicksand', 'Nunito Sans', sans-serif;
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
--ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
/* extra: signature = foggy ambient gradient field + heavy blur on every surface (no grain, cool + calm) */
--bg-fog: radial-gradient(90% 70% at 15% 10%, #33407a 0%, transparent 55%),
radial-gradient(80% 60% at 85% 90%, #1f5f66 0%, transparent 55%), var(--color-bg);
--fog-fill: linear-gradient(160deg, rgba(124,156,255,0.14), rgba(157,240,224,0.06));
}

/* ============================================================
Base component classes — Dreampunk
Signature move: every surface is a heavily blurred, indistinct fog
panel (backdrop-filter blur + soft fog gradient fill, no hard border)
evoking hypnagogic, liminal, otherworldly calm.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-fog); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-pill); box-shadow: var(--shadow-sm); }
.btn { font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-pill); padding: var(--space-3) var(--space-6);
cursor: pointer; transition: box-shadow .4s var(--ease-standard), transform .4s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: color-mix(in srgb, var(--color-primary) 40%, transparent); border-color: color-mix(in srgb, var(--color-primary) 55%, transparent); }
.card { background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base) var(--font-sans); color: var(--color-text);
background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); border: 1px solid var(--color-border);
border-radius: var(--radius-md); padding: var(--space-3) var(--space-4); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); color: var(--color-text);
background: var(--fog-fill); backdrop-filter: blur(var(--blur-backdrop)); border: 1px solid var(--color-border);
border-radius: var(--radius-pill); padding: .3em .8em; }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card, .btn, .input, .badge { background: #232a4a; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dreampunk.md */
```

## Design System Variables

```css
--bg: #171b2e, --fg: #eef1ff, --accent: #7c9cff, --surface: #171b2e, --radius: 20px, --spacing: 16px, --font-display: 'Quicksand', 'Nunito Sans', sans-serif, --font-body: 'Nunito Sans', system-ui, sans-serif
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

[![Dreamcore](https://designmd.app/images/library/624.png) Claude Artisan · Subculturas & estéticas de nicho ### Dreamcore](https://designmd.app/library/dreamcore)

Last synced: 8/30/2026
