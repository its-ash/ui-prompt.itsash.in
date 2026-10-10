# Tidalpunk

- Source: <https://designmd.app/library/tidalpunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:34.358Z

Claude Artisan · Retrofuturismo & ficção especulativa2019–present

# Tidalpunk

Reference for retrofuturismo & ficção especulativa Tidalpunk. Ocean-focused optimistic offshoot of solarpunk.

TidalpunkoceanpunkOcean tech: wave/tidal energy, kelp, coralBlues, teals, salvaged materialsSustainable seafaring futureHopeful, aquatic, resourcefulretrofuturism

Use case: superfície material com conteúdo em camadas; Ocean tech: wave/tidal energy, kelp, coral; Blues, teals, salvaged materials

![Tidalpunk](https://designmd.app/images/library/740.png)

## Historical Context

Ocean-focused optimistic offshoot of solarpunk. Example: Tidalpunk art community..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Tidalpunk"
description: "Tidalpunk visual system, translated from the Claude Artisan catalog for use in digital products. Ocean tech: wave/tidal energy, kelp, coral; Blues, teals, salvaged materials"
colors:
primary: "#22b8a3"
background: "#0a3d3f"
surface: "#0f4d4f"
text: "#e8f6f3"
accent: "#d9a441"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Space Grotesk', 'Poppins', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "14px"
lg: "22px"
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

Tidalpunk visual system, translated from the Claude Artisan catalog for use in digital products. Ocean tech: wave/tidal energy, kelp, coral; Blues, teals, salvaged materials

- **Category:** retrofuturism
- **Era:** 2019–present
- **Origin:** Ocean-focused optimistic offshoot of solarpunk.
- **Reference:** Tidalpunk art community.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Ocean tech: wave/tidal energy, kelp, coral
- Blues, teals, salvaged materials
- Sustainable seafaring future
- Hopeful, aquatic, resourceful

## Colors

- **bg** — #0a3d3f
- **surface** — #0f4d4f
- **surface-strong** — #145e60
- **border** — #2f8b83
- **text** — #e8f6f3
- **text-muted** — #a9d6cf
- **primary** — #22b8a3
- **accent** — #d9a441
- **kelp** — #3f7d4a

## Typography

- Display: 'Space Grotesk', 'Poppins', sans-serif
- Body: 'Space Grotesk', 'Inter', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Ocean tech: wave/tidal energy, kelp, coral; Blues, teals, salvaged materials; Sustainable seafaring future; Hopeful, aquatic, resourceful; sombras e elevação

## Shapes

- Radius scale: 8px, 14px, 22px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/tidalpunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Tidalpunk — design tokens */
/* 2019–present | Ocean-focused optimistic offshoot of solarpunk, condensed */
:root {
/* color */
--color-bg: #0a3d3f;
--color-surface: #0f4d4f;
--color-surface-strong: #145e60;
--color-border: #2f8b83;
--color-text: #e8f6f3;
--color-text-muted: #a9d6cf;
--color-primary: #22b8a3;
--color-accent: #d9a441;
--color-kelp: #3f7d4a;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.25);
--shadow-md: 0 8px 20px rgba(0,0,0,0.30);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.35);
/* font */
--font-sans: 'Space Grotesk', 'Inter', system-ui, sans-serif;
--font-display: 'Space Grotesk', 'Poppins', sans-serif;
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
/* extra: tidal wave-crest edge — a repeating scalloped gradient stands in for
salvaged-material grain, teal-to-gold like sunlit kelp forests */
--wave-crest: radial-gradient(circle at 10px -6px, transparent 8px, var(--color-primary) 9px) 0 0/20px 12px repeat-x;
--kelp-fade: linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%);
}

/* ============================================================
Base component classes — tidalpunk
Signature move: a scalloped "wave crest" line (a repeating radial-gradient
arc pattern) tops every raised surface, teal fading to a driftwood gold
accent — the recurring tideline motif of the whole system.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--kelp-fade); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-radius: 0 0 var(--radius-lg) var(--radius-lg);
box-shadow: var(--shadow-sm); position: relative; }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -8px; height: 8px;
background: var(--wave-crest); opacity: .8; }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #04211f; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative;
border: 1px solid var(--color-border);
}
.card::before { content: ""; position: absolute; left: var(--space-6); right: var(--space-6); top: -6px; height: 6px;
background: var(--wave-crest); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(34,184,163,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-kelp);
color: #eafaf0; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/tidalpunk.md */
```

### Variables

```
--bg: #0a3d3f, --fg: #e8f6f3, --accent: #22b8a3, --surface: #0f4d4f, --radius: 14px, --spacing: 16px, --font-display: 'Space Grotesk', 'Poppins', sans-serif, --font-body: 'Space Grotesk', 'Inter', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a3d3f

#0f4d4f

#145e60

#2f8b83

Secondary

#e8f6f3

#a9d6cf

#22b8a3

#d9a441

#3f7d4a

### Effects

Ocean tech: wave/tidal energy, kelp, coral, Blues, teals, salvaged materials, Sustainable seafaring future, Hopeful, aquatic, resourceful, shadow

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

- **Name:** Tidalpunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Tidalpunk, oceanpunk, Ocean tech: wave/tidal energy, kelp, coral, Blues, teals, salvaged materials, Sustainable seafaring future, Hopeful, aquatic, resourceful, retrofuturism
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a3d3f, surface: #0f4d4f, surface-strong: #145e60, border: #2f8b83
- **Secondary:** text: #e8f6f3, text-muted: #a9d6cf, primary: #22b8a3, accent: #d9a441, kelp: #3f7d4a

## Visual Effects

Ocean tech: wave/tidal energy, kelp, coral, Blues, teals, salvaged materials, Sustainable seafaring future, Hopeful, aquatic, resourceful, shadow

## AI Visual Direction

Tidalpunk, Ocean tech: wave/tidal energy, kelp, coral, Blues, teals, salvaged materials, Sustainable seafaring future, Hopeful, aquatic, resourceful, Tidalpunk art community.

## CSS Technical

```css
/* Tidalpunk — design tokens */
/* 2019–present | Ocean-focused optimistic offshoot of solarpunk, condensed */
:root {
/* color */
--color-bg: #0a3d3f;
--color-surface: #0f4d4f;
--color-surface-strong: #145e60;
--color-border: #2f8b83;
--color-text: #e8f6f3;
--color-text-muted: #a9d6cf;
--color-primary: #22b8a3;
--color-accent: #d9a441;
--color-kelp: #3f7d4a;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 22px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.25);
--shadow-md: 0 8px 20px rgba(0,0,0,0.30);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.35);
/* font */
--font-sans: 'Space Grotesk', 'Inter', system-ui, sans-serif;
--font-display: 'Space Grotesk', 'Poppins', sans-serif;
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
/* extra: tidal wave-crest edge — a repeating scalloped gradient stands in for
salvaged-material grain, teal-to-gold like sunlit kelp forests */
--wave-crest: radial-gradient(circle at 10px -6px, transparent 8px, var(--color-primary) 9px) 0 0/20px 12px repeat-x;
--kelp-fade: linear-gradient(180deg, var(--color-surface) 0%, var(--color-bg) 100%);
}

/* ============================================================
Base component classes — tidalpunk
Signature move: a scalloped "wave crest" line (a repeating radial-gradient
arc pattern) tops every raised surface, teal fading to a driftwood gold
accent — the recurring tideline motif of the whole system.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--kelp-fade); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-radius: 0 0 var(--radius-lg) var(--radius-lg);
box-shadow: var(--shadow-sm); position: relative; }
.nav::after { content: ""; position: absolute; left: 0; right: 0; bottom: -8px; height: 8px;
background: var(--wave-crest); opacity: .8; }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #04211f; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative;
border: 1px solid var(--color-border);
}
.card::before { content: ""; position: absolute; left: var(--space-6); right: var(--space-6); top: -6px; height: 6px;
background: var(--wave-crest); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(34,184,163,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-kelp);
color: #eafaf0; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/tidalpunk.md */
```

## Design System Variables

```css
--bg: #0a3d3f, --fg: #e8f6f3, --accent: #22b8a3, --surface: #0f4d4f, --radius: 14px, --spacing: 16px, --font-display: 'Space Grotesk', 'Poppins', sans-serif, --font-body: 'Space Grotesk', 'Inter', system-ui, sans-serif
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

[![Solarpunk](https://designmd.app/images/library/719.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Solarpunk](https://designmd.app/library/solarpunk)[![Seapunk](https://designmd.app/images/library/714.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Seapunk](https://designmd.app/library/seapunk)

Last synced: 8/30/2026
