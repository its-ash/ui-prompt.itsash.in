# Street Art / Graffiti

- Source: <https://designmd.app/library/street-art-graffiti>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:11.313Z

Claude Artisan · Subculturas & estéticas de nicho1970s–present

# Street Art / Graffiti

Reference for subculturas & estéticas de nicho Street Art / Graffiti. Spray-can wall art and wildstyle lettering culture, born on New York City subway cars and handball courts in the 1970s, spreading into a global writer culture of tags, throw-ups, and burners.

Street Art / Graffitigraffiti artwildstyle letteringspray-can artwriter cultureBold interlocking outlined 'bubble' or 'wildstyle' letterformsDrip and spray-can grain textureHigh-contrast fill colors with hard black keyline outlinesEnergetic, tagging-inspired composition on a concrete-grey groundniche

Use case: superfície material com conteúdo em camadas; Bold interlocking outlined 'bubble' or 'wildstyle' letterforms; Drip and spray-can grain texture

![Street Art / Graffiti](https://designmd.app/images/library/727.png)

## Historical Context

Spray-can wall art and wildstyle lettering culture, born on New York City subway cars and handball courts in the 1970s, spreading into a global writer culture of tags, throw-ups, and burners. Example: NYC subway car pieces of the 1970s–80s; contemporary legal wall 'burners' and yard productions..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Street Art / Graffiti"
description: "Street Art / Graffiti visual system, translated from the Claude Artisan catalog for use in digital products. Bold interlocking outlined 'bubble' or 'wildstyle' letterforms; Drip and spray-can grain texture"
colors:
primary: "#ff3b3b"
background: "#2b2b2b"
surface: "#383838"
text: "#f5f5f0"
accent: "#ffd400"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Titan One', 'Archivo Black', 'Impact', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Archivo Black', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Archivo Black', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "8px"
lg: "18px"
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

Street Art / Graffiti visual system, translated from the Claude Artisan catalog for use in digital products. Bold interlocking outlined 'bubble' or 'wildstyle' letterforms; Drip and spray-can grain texture

- **Category:** niche
- **Era:** 1970s–present
- **Origin:** Spray-can wall art and wildstyle lettering culture, born on New York City subway cars and handball courts in the 1970s, spreading into a global writer culture of tags, throw-ups, and burners.
- **Reference:** NYC subway car pieces of the 1970s–80s; contemporary legal wall 'burners' and yard productions.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Bold interlocking outlined 'bubble' or 'wildstyle' letterforms
- Drip and spray-can grain texture
- High-contrast fill colors with hard black keyline outlines
- Energetic, tagging-inspired composition on a concrete-grey ground

## Colors

- **bg** — #2b2b2b
- **surface** — #383838
- **surface-2** — #454545
- **text** — #f5f5f0
- **text-muted** — #b8b8b0
- **primary** — #ff3b3b
- **accent** — #ffd400
- **cyan** — #26c6da
- **keyline** — #0a0a0a

## Typography

- Display: 'Titan One', 'Archivo Black', 'Impact', sans-serif
- Body: 'Archivo Black', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold interlocking outlined 'bubble' or 'wildstyle' letterforms; Drip and spray-can grain texture; High-contrast fill colors with hard black keyline outlines; Energetic, tagging-inspired composition on a concrete-grey ground; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 8px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/street-art-graffiti/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Street Art / Graffiti — design tokens */
/* 1970s–present | Spray-can wall art and wildstyle lettering culture */
:root {
/* color */
--color-bg: #2b2b2b;
--color-surface: #383838;
--color-surface-2: #454545;
--color-text: #f5f5f0;
--color-text-muted: #b8b8b0;
--color-primary: #ff3b3b;
--color-accent: #ffd400;
--color-cyan: #26c6da;
--color-keyline: #0a0a0a;
/* radius */
--radius-sm: 2px;
--radius-md: 8px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-spray: 0 0 0 4px var(--color-keyline), 0 10px 24px rgba(0,0,0,0.45);
--shadow-drip: 0 8px 0 -2px rgba(255,59,59,0.35), 0 12px 4px -4px rgba(0,0,0,0.4);
/* font */
--font-sans: 'Archivo Black', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Titan One', 'Archivo Black', 'Impact', sans-serif;
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
--ease-standard: cubic-bezier(0.3, 0.9, 0.4, 1.2);
/* extra: spray-can texture + wildstyle keyline + concrete ground */
--spray-texture: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0, transparent 3%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.04) 0, transparent 4%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 0, transparent 3%);
--wildstyle-outline: 0 0 0 3px var(--color-keyline), 0 0 0 5px var(--color-accent);
--bg-image: linear-gradient(165deg, #383838 0%, #2b2b2b 55%, #1f1f1f 100%);
}

/* ============================================================
Base component classes — Street Art / Graffiti
Signature move: bold interlocking bubble/wildstyle letterforms
with a hard black keyline plus a thin color pinstripe, spray-can
grain texture over a concrete-grey ground. Repeat everywhere.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-image: var(--spray-texture), var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 4px solid var(--color-keyline);
box-shadow: 0 2px 0 var(--color-accent);
}
.btn {
font: 800 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); box-shadow: 0 0 0 3px var(--color-keyline);
cursor: pointer; transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: rotate(-1deg) translateY(-2px); box-shadow: var(--wildstyle-outline); }
.btn:active { transform: rotate(0) translateY(0); }
.btn:focus-visible { outline: 3px solid var(--color-cyan); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: 0 0 0 3px var(--color-keyline); }
.btn--primary {
background: var(--color-primary); color: var(--color-text); font-weight: 900;
box-shadow: var(--wildstyle-outline);
}
.btn--primary:hover { box-shadow: var(--wildstyle-outline), var(--shadow-drip); }
.card {
background: var(--color-surface); background-image: var(--spray-texture);
border-radius: var(--radius-lg); padding: var(--space-6);
box-shadow: var(--shadow-spray);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); box-shadow: 0 0 0 3px var(--color-keyline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: 0 0 0 3px var(--color-keyline), 0 0 0 5px var(--color-cyan); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs)/1 var(--font-display); letter-spacing: .04em;
padding: .35em .85em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-keyline);
box-shadow: 0 0 0 3px var(--color-keyline);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/street-art-graffiti.md */
```

### Variables

```
--bg: #2b2b2b, --fg: #f5f5f0, --accent: #ff3b3b, --surface: #383838, --radius: 8px, --spacing: 16px, --font-display: 'Titan One', 'Archivo Black', 'Impact', sans-serif, --font-body: 'Archivo Black', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#2b2b2b

#383838

#454545

#f5f5f0

Secondary

#b8b8b0

#ff3b3b

#ffd400

#26c6da

#0a0a0a

### Effects

Bold interlocking outlined 'bubble' or 'wildstyle' letterforms, Drip and spray-can grain texture, High-contrast fill colors with hard black keyline outlines, Energetic, tagging-inspired composition on a concrete-grey ground, shadow, blur

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

- **Name:** Street Art / Graffiti
- **Type:** claude-artisan/niche
- **Keywords:** Street Art / Graffiti, graffiti art, wildstyle lettering, spray-can art, writer culture, Bold interlocking outlined 'bubble' or 'wildstyle' letterforms, Drip and spray-can grain texture, High-contrast fill colors with hard black keyline outlines, Energetic, tagging-inspired composition on a concrete-grey ground, niche
- **Era:** 1970s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #2b2b2b, surface: #383838, surface-2: #454545, text: #f5f5f0
- **Secondary:** text-muted: #b8b8b0, primary: #ff3b3b, accent: #ffd400, cyan: #26c6da, keyline: #0a0a0a

## Visual Effects

Bold interlocking outlined 'bubble' or 'wildstyle' letterforms, Drip and spray-can grain texture, High-contrast fill colors with hard black keyline outlines, Energetic, tagging-inspired composition on a concrete-grey ground, shadow, blur

## AI Visual Direction

Street Art / Graffiti, Bold interlocking outlined 'bubble' or 'wildstyle' letterforms, Drip and spray-can grain texture, High-contrast fill colors with hard black keyline outlines, Energetic, tagging-inspired composition on a concrete-grey ground, NYC subway car pieces of the 1970s–80s; contemporary legal wall 'burners' and yard productions.

## CSS Technical

```css
/* Street Art / Graffiti — design tokens */
/* 1970s–present | Spray-can wall art and wildstyle lettering culture */
:root {
/* color */
--color-bg: #2b2b2b;
--color-surface: #383838;
--color-surface-2: #454545;
--color-text: #f5f5f0;
--color-text-muted: #b8b8b0;
--color-primary: #ff3b3b;
--color-accent: #ffd400;
--color-cyan: #26c6da;
--color-keyline: #0a0a0a;
/* radius */
--radius-sm: 2px;
--radius-md: 8px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-spray: 0 0 0 4px var(--color-keyline), 0 10px 24px rgba(0,0,0,0.45);
--shadow-drip: 0 8px 0 -2px rgba(255,59,59,0.35), 0 12px 4px -4px rgba(0,0,0,0.4);
/* font */
--font-sans: 'Archivo Black', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Titan One', 'Archivo Black', 'Impact', sans-serif;
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
--ease-standard: cubic-bezier(0.3, 0.9, 0.4, 1.2);
/* extra: spray-can texture + wildstyle keyline + concrete ground */
--spray-texture: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0, transparent 3%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.04) 0, transparent 4%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 0, transparent 3%);
--wildstyle-outline: 0 0 0 3px var(--color-keyline), 0 0 0 5px var(--color-accent);
--bg-image: linear-gradient(165deg, #383838 0%, #2b2b2b 55%, #1f1f1f 100%);
}

/* ============================================================
Base component classes — Street Art / Graffiti
Signature move: bold interlocking bubble/wildstyle letterforms
with a hard black keyline plus a thin color pinstripe, spray-can
grain texture over a concrete-grey ground. Repeat everywhere.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-image: var(--spray-texture), var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 4px solid var(--color-keyline);
box-shadow: 0 2px 0 var(--color-accent);
}
.btn {
font: 800 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); box-shadow: 0 0 0 3px var(--color-keyline);
cursor: pointer; transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: rotate(-1deg) translateY(-2px); box-shadow: var(--wildstyle-outline); }
.btn:active { transform: rotate(0) translateY(0); }
.btn:focus-visible { outline: 3px solid var(--color-cyan); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: 0 0 0 3px var(--color-keyline); }
.btn--primary {
background: var(--color-primary); color: var(--color-text); font-weight: 900;
box-shadow: var(--wildstyle-outline);
}
.btn--primary:hover { box-shadow: var(--wildstyle-outline), var(--shadow-drip); }
.card {
background: var(--color-surface); background-image: var(--spray-texture);
border-radius: var(--radius-lg); padding: var(--space-6);
box-shadow: var(--shadow-spray);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); box-shadow: 0 0 0 3px var(--color-keyline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: 0 0 0 3px var(--color-keyline), 0 0 0 5px var(--color-cyan); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs)/1 var(--font-display); letter-spacing: .04em;
padding: .35em .85em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-keyline);
box-shadow: 0 0 0 3px var(--color-keyline);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/street-art-graffiti.md */
```

## Design System Variables

```css
--bg: #2b2b2b, --fg: #f5f5f0, --accent: #ff3b3b, --surface: #383838, --radius: 8px, --spacing: 16px, --font-display: 'Titan One', 'Archivo Black', 'Impact', sans-serif, --font-body: 'Archivo Black', 'Helvetica Neue', system-ui, sans-serif
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

[![Punk Zine / Cut-and-Paste](https://designmd.app/images/library/705.png) Claude Artisan · Movimentos históricos ### Punk Zine / Cut-and-Paste](https://designmd.app/library/punk-zine)[![Grunge Design](https://designmd.app/images/library/655.png) Claude Artisan · Brutalismo & anti-design ### Grunge Design](https://designmd.app/library/grunge)[![Comic / Manga](https://designmd.app/images/library/602.png) Claude Artisan · Textura, material & renderização ### Comic / Manga](https://designmd.app/library/comic)

Last synced: 8/30/2026
