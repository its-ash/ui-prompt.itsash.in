# Pulp Magazine Cover Art

- Source: <https://designmd.app/library/pulp-magazine>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:31.304Z

Claude Artisan · Subculturas & estéticas de nicho1930s–1950s (revival ongoing)

# Pulp Magazine Cover Art

Reference for subculturas & estéticas de nicho Pulp Magazine Cover Art. Cheap American pulp-fiction magazine cover illustration — mass-market newsstand paperbacks and digests printed on cheap wood-pulp paper, sold to move copies fast.

Pulp Magazine Cover Artpulp fiction cover artpulp illustrationlurid pulp paintingnewsstand pulpDramatic, high-contrast painted single-image illustration (not sequential panels)Saturated primary colors against heavy black shadowBold slab/condensed masthead display typeLurid, melodramatic newsstand energyniche

Use case: hero, superfície, conteúdo e grade responsiva; Dramatic, high-contrast painted single-image illustration (not sequential panels); Saturated primary colors against heavy black shadow

![Pulp Magazine Cover Art](https://designmd.app/images/library/704.png)

## Historical Context

Cheap American pulp-fiction magazine cover illustration — mass-market newsstand paperbacks and digests printed on cheap wood-pulp paper, sold to move copies fast. Example: 'Weird Tales', 'Amazing Stories', 'Black Mask' cover paintings; Norman Saunders and Margaret Brundage newsstand cover art..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Pulp Magazine Cover Art"
description: "Pulp Magazine Cover Art visual system, translated from the Claude Artisan catalog for use in digital products. Dramatic, high-contrast painted single-image illustration (not sequential panels); Saturated primary colors against heavy black shadow"
colors:
primary: "#d4361f"
background: "#1a1210"
surface: "#241a17"
text: "#f5e6d3"
accent: "#f2b705"
on-primary: "#FFFFFF"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Anton', 'Oswald', 'Arial Black', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'PT Sans', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'PT Sans', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "10px"
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

Pulp Magazine Cover Art visual system, translated from the Claude Artisan catalog for use in digital products. Dramatic, high-contrast painted single-image illustration (not sequential panels); Saturated primary colors against heavy black shadow

- **Category:** niche
- **Era:** 1930s–1950s (revival ongoing)
- **Origin:** Cheap American pulp-fiction magazine cover illustration — mass-market newsstand paperbacks and digests printed on cheap wood-pulp paper, sold to move copies fast.
- **Reference:** 'Weird Tales', 'Amazing Stories', 'Black Mask' cover paintings; Norman Saunders and Margaret Brundage newsstand cover art.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dramatic, high-contrast painted single-image illustration (not sequential panels)
- Saturated primary colors against heavy black shadow
- Bold slab/condensed masthead display type
- Lurid, melodramatic newsstand energy

## Colors

- **bg** — #1a1210
- **surface** — #241a17
- **surface-2** — #33231e
- **text** — #f5e6d3
- **text-muted** — #c9ad8f
- **primary** — #d4361f
- **accent** — #f2b705
- **pulp-blue** — #1c4f8c
- **shadow-ink** — #0c0806

## Typography

- Display: 'Anton', 'Oswald', 'Arial Black', sans-serif
- Body: 'PT Sans', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dramatic, high-contrast painted single-image illustration (not sequential panels); Saturated primary colors against heavy black shadow; Bold slab/condensed masthead display type; Lurid, melodramatic newsstand energy; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 4px, 10px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/pulp-magazine/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Pulp Magazine Cover Art — design tokens */
/* 1930s–1950s (revival ongoing) | Cheap American pulp-fiction magazine cover illustration */
:root {
/* color */
--color-bg: #1a1210;
--color-surface: #241a17;
--color-surface-2: #33231e;
--color-text: #f5e6d3;
--color-text-muted: #c9ad8f;
--color-primary: #d4361f;
--color-accent: #f2b705;
--color-pulp-blue: #1c4f8c;
--color-shadow-ink: #0c0806;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 10px;
--radius-pill: 999px;
/* shadow */
--shadow-lurid: 6px 6px 0 var(--color-shadow-ink);
--shadow-lurid-sm: 3px 3px 0 var(--color-shadow-ink);
/* font */
--font-sans: 'PT Sans', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Anton', 'Oswald', 'Arial Black', sans-serif;
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
--ease-standard: cubic-bezier(0.5, 0, 0.15, 1);
/* extra: painted-cover vignette + masthead ink shadow */
--painted-vignette: radial-gradient(120% 90% at 50% 20%, rgba(212,54,31,0.22), transparent 60%), radial-gradient(140% 100% at 50% 100%, rgba(0,0,0,0.55), transparent 55%);
--masthead-shadow: 4px 4px 0 var(--color-shadow-ink), 8px 8px 0 rgba(0,0,0,0.25);
--bg-image: linear-gradient(180deg, #241a17 0%, #1a1210 60%, #0c0806 100%);
}

/* ============================================================
Base component classes — Pulp Magazine Cover Art
Signature move: a hard black offset shadow (like cheap
four-color misregistration) behind saturated primary-color
masses, plus a painted vignette wash. Repeat everywhere.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-image: var(--painted-vignette), var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-primary);
box-shadow: var(--shadow-lurid-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-text-muted);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-lurid-sm); }
.btn:active { transform: translate(0,0); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-text); border: 2px solid var(--color-shadow-ink);
box-shadow: var(--shadow-lurid); font-weight: 800;
}
.btn--primary:hover { transform: translate(-3px, -3px); box-shadow: 9px 9px 0 var(--color-shadow-ink); }
.card {
background: var(--color-surface); background-image: var(--painted-vignette);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 2px solid var(--color-surface-2); box-shadow: var(--shadow-lurid);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-lurid-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs)/1 var(--font-display); letter-spacing: .05em;
padding: .35em .85em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-shadow-ink);
box-shadow: var(--shadow-lurid-sm);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .btn--primary:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/pulp-magazine.md */
```

### Variables

```
--bg: #1a1210, --fg: #f5e6d3, --accent: #d4361f, --surface: #241a17, --radius: 4px, --spacing: 16px, --font-display: 'Anton', 'Oswald', 'Arial Black', sans-serif, --font-body: 'PT Sans', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1a1210

#241a17

#33231e

#f5e6d3

Secondary

#c9ad8f

#d4361f

#f2b705

#1c4f8c

#0c0806

### Effects

Dramatic, high-contrast painted single-image illustration (not sequential panels), Saturated primary colors against heavy black shadow, Bold slab/condensed masthead display type, Lurid, melodramatic newsstand energy, shadow, blur

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

- **Name:** Pulp Magazine Cover Art
- **Type:** claude-artisan/niche
- **Keywords:** Pulp Magazine Cover Art, pulp fiction cover art, pulp illustration, lurid pulp painting, newsstand pulp, Dramatic, high-contrast painted single-image illustration (not sequential panels), Saturated primary colors against heavy black shadow, Bold slab/condensed masthead display type, Lurid, melodramatic newsstand energy, niche
- **Era:** 1930s–1950s (revival ongoing)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1a1210, surface: #241a17, surface-2: #33231e, text: #f5e6d3
- **Secondary:** text-muted: #c9ad8f, primary: #d4361f, accent: #f2b705, pulp-blue: #1c4f8c, shadow-ink: #0c0806

## Visual Effects

Dramatic, high-contrast painted single-image illustration (not sequential panels), Saturated primary colors against heavy black shadow, Bold slab/condensed masthead display type, Lurid, melodramatic newsstand energy, shadow, blur

## AI Visual Direction

Pulp Magazine Cover Art, Dramatic, high-contrast painted single-image illustration (not sequential panels), Saturated primary colors against heavy black shadow, Bold slab/condensed masthead display type, Lurid, melodramatic newsstand energy, 'Weird Tales', 'Amazing Stories', 'Black Mask' cover paintings; Norman Saunders and Margaret Brundage newsstand cover art.

## CSS Technical

```css
/* Pulp Magazine Cover Art — design tokens */
/* 1930s–1950s (revival ongoing) | Cheap American pulp-fiction magazine cover illustration */
:root {
/* color */
--color-bg: #1a1210;
--color-surface: #241a17;
--color-surface-2: #33231e;
--color-text: #f5e6d3;
--color-text-muted: #c9ad8f;
--color-primary: #d4361f;
--color-accent: #f2b705;
--color-pulp-blue: #1c4f8c;
--color-shadow-ink: #0c0806;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 10px;
--radius-pill: 999px;
/* shadow */
--shadow-lurid: 6px 6px 0 var(--color-shadow-ink);
--shadow-lurid-sm: 3px 3px 0 var(--color-shadow-ink);
/* font */
--font-sans: 'PT Sans', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Anton', 'Oswald', 'Arial Black', sans-serif;
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
--ease-standard: cubic-bezier(0.5, 0, 0.15, 1);
/* extra: painted-cover vignette + masthead ink shadow */
--painted-vignette: radial-gradient(120% 90% at 50% 20%, rgba(212,54,31,0.22), transparent 60%), radial-gradient(140% 100% at 50% 100%, rgba(0,0,0,0.55), transparent 55%);
--masthead-shadow: 4px 4px 0 var(--color-shadow-ink), 8px 8px 0 rgba(0,0,0,0.25);
--bg-image: linear-gradient(180deg, #241a17 0%, #1a1210 60%, #0c0806 100%);
}

/* ============================================================
Base component classes — Pulp Magazine Cover Art
Signature move: a hard black offset shadow (like cheap
four-color misregistration) behind saturated primary-color
masses, plus a painted vignette wash. Repeat everywhere.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-image: var(--painted-vignette), var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-primary);
box-shadow: var(--shadow-lurid-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-text-muted);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-lurid-sm); }
.btn:active { transform: translate(0,0); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-text); border: 2px solid var(--color-shadow-ink);
box-shadow: var(--shadow-lurid); font-weight: 800;
}
.btn--primary:hover { transform: translate(-3px, -3px); box-shadow: 9px 9px 0 var(--color-shadow-ink); }
.card {
background: var(--color-surface); background-image: var(--painted-vignette);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 2px solid var(--color-surface-2); box-shadow: var(--shadow-lurid);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-lurid-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs)/1 var(--font-display); letter-spacing: .05em;
padding: .35em .85em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-shadow-ink);
box-shadow: var(--shadow-lurid-sm);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .btn--primary:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/pulp-magazine.md */
```

## Design System Variables

```css
--bg: #1a1210, --fg: #f5e6d3, --accent: #d4361f, --surface: #241a17, --radius: 4px, --spacing: 16px, --font-display: 'Anton', 'Oswald', 'Arial Black', sans-serif, --font-body: 'PT Sans', 'Helvetica Neue', system-ui, sans-serif
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

[![Comic / Manga](https://designmd.app/images/library/602.png) Claude Artisan · Textura, material & renderização ### Comic / Manga](https://designmd.app/library/comic)[![Film Noir](https://designmd.app/images/library/637.png) Claude Artisan · Movimentos históricos ### Film Noir](https://designmd.app/library/film-noir)[![Halftone](https://designmd.app/images/library/656.png) Claude Artisan · Textura, material & renderização ### Halftone](https://designmd.app/library/halftone)

Last synced: 8/30/2026
