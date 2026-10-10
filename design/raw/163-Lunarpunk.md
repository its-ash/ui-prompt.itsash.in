# Lunarpunk

- Source: <https://designmd.app/library/lunarpunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:34.318Z

Claude Artisan · Retrofuturismo & ficção especulativa2020s–present

# Lunarpunk

Reference for retrofuturismo & ficção especulativa Lunarpunk. Emerged online ~2020s as the nocturnal, mystical counterpart to solarpunk within eco-futurist communities.

Lunarpunknight solarpunkmoonpunkdark solarpunkMoonlit bioluminescence over deep indigo/blackDark botanical and celestial motifs (moths, moonflowers, star charts)Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinerySoft glowing edges instead of hard neon; mystical over corporateretrofuturism

Use case: shell de aplicação com navegação e cartões; Moonlit bioluminescence over deep indigo/black; Dark botanical and celestial motifs (moths, moonflowers, star charts)

![Lunarpunk](https://designmd.app/images/library/674.png)

## Historical Context

Emerged online ~2020s as the nocturnal, mystical counterpart to solarpunk within eco-futurist communities. Example: Lunarpunk art communities on Tumblr/DeviantArt; 'nocturnal eco-futurism' zine covers..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Lunarpunk"
description: "Lunarpunk visual system, translated from the Claude Artisan catalog for use in digital products. Moonlit bioluminescence over deep indigo/black; Dark botanical and celestial motifs (moths, moonflowers, star charts)"
colors:
primary: "#2dd4bf"
background: "#0a0e1a"
surface: "#12182b"
text: "#e8ecf7"
accent: "#a78bfa"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cormorant Garamond', 'Spectral', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Spectral', 'Cormorant Garamond', system-ui, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Spectral', 'Cormorant Garamond', system-ui, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "16px"
lg: "28px"
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

Lunarpunk visual system, translated from the Claude Artisan catalog for use in digital products. Moonlit bioluminescence over deep indigo/black; Dark botanical and celestial motifs (moths, moonflowers, star charts)

- **Category:** retrofuturism
- **Era:** 2020s–present
- **Origin:** Emerged online ~2020s as the nocturnal, mystical counterpart to solarpunk within eco-futurist communities.
- **Reference:** Lunarpunk art communities on Tumblr/DeviantArt; 'nocturnal eco-futurism' zine covers.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Moonlit bioluminescence over deep indigo/black
- Dark botanical and celestial motifs (moths, moonflowers, star charts)
- Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinery
- Soft glowing edges instead of hard neon; mystical over corporate

## Colors

- **bg** — #0a0e1a
- **surface** — #12182b
- **surface-2** — #1a2340
- **text** — #e8ecf7
- **text-muted** — #9aa4c4
- **primary** — #2dd4bf
- **accent** — #a78bfa
- **moonsilver** — #c7d2e0
- **nightbloom** — #5b4b8a

## Typography

- Display: 'Cormorant Garamond', 'Spectral', serif
- Body: 'Spectral', 'Cormorant Garamond', system-ui, serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Moonlit bioluminescence over deep indigo/black; Dark botanical and celestial motifs (moths, moonflowers, star charts); Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinery; Soft glowing edges instead of hard neon; mystical over corporate; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/lunarpunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Lunarpunk — design tokens */
/* 2020s–present | Nocturnal, mystical counterpart to solarpunk */
:root {
/* color */
--color-bg: #0a0e1a;
--color-surface: #12182b;
--color-surface-2: #1a2340;
--color-text: #e8ecf7;
--color-text-muted: #9aa4c4;
--color-primary: #2dd4bf;
--color-accent: #a78bfa;
--color-moonsilver: #c7d2e0;
--color-nightbloom: #5b4b8a;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-glow-teal: 0 0 24px rgba(45,212,191,0.35), 0 8px 24px rgba(0,0,0,0.4);
--shadow-glow-violet: 0 0 20px rgba(167,139,250,0.30), 0 8px 20px rgba(0,0,0,0.4);
/* blur */
--blur-soft: 18px;
/* font */
--font-sans: 'Spectral', 'Cormorant Garamond', system-ui, serif;
--font-display: 'Cormorant Garamond', 'Spectral', serif;
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
--ease-standard: cubic-bezier(0.22, 0.61, 0.36, 1);
/* extra: bioluminescent glow + moonlight wash */
--moonlight-gradient: radial-gradient(circle at 80% 0%, rgba(199,210,224,0.18), transparent 45%);
--bioluminescent-veil: linear-gradient(180deg, rgba(45,212,191,0.08), rgba(167,139,250,0.08));
--bg-image: radial-gradient(120% 90% at 85% -10%, #1a2340 0%, #0a0e1a 55%, #060811 100%);
}

/* ============================================================
Base component classes — Lunarpunk
Signature move: soft, feathered bioluminescent glow (teal/violet)
over a deep indigo-black night ground, never a hard neon edge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-nightbloom);
box-shadow: 0 1px 0 rgba(45,212,191,0.15);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-moonsilver);
cursor: pointer; transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-glow-violet); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-moonsilver); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: #0a0e1a; font-weight: 700;
border: 1px solid var(--color-primary); box-shadow: var(--shadow-glow-teal);
}
.btn--primary:hover { box-shadow: 0 0 32px rgba(45,212,191,0.5), 0 10px 28px rgba(0,0,0,0.45); }
.card {
background: var(--color-surface); background-image: var(--moonlight-gradient);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-surface-2); box-shadow: var(--shadow-glow-violet);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-nightbloom);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-glow-teal); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-primary); color: var(--color-primary);
box-shadow: inset 0 0 12px rgba(45,212,191,0.15);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/lunarpunk.md */
```

### Variables

```
--bg: #0a0e1a, --fg: #e8ecf7, --accent: #2dd4bf, --surface: #12182b, --radius: 16px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Spectral', serif, --font-body: 'Spectral', 'Cormorant Garamond', system-ui, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0e1a

#12182b

#1a2340

#e8ecf7

Secondary

#9aa4c4

#2dd4bf

#a78bfa

#c7d2e0

#5b4b8a

### Effects

Moonlit bioluminescence over deep indigo/black, Dark botanical and celestial motifs (moths, moonflowers, star charts), Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinery, Soft glowing edges instead of hard neon; mystical over corporate, shadow, blur

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

- **Name:** Lunarpunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Lunarpunk, night solarpunk, moonpunk, dark solarpunk, Moonlit bioluminescence over deep indigo/black, Dark botanical and celestial motifs (moths, moonflowers, star charts), Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinery, Soft glowing edges instead of hard neon; mystical over corporate, retrofuturism
- **Era:** 2020s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0e1a, surface: #12182b, surface-2: #1a2340, text: #e8ecf7
- **Secondary:** text-muted: #9aa4c4, primary: #2dd4bf, accent: #a78bfa, moonsilver: #c7d2e0, nightbloom: #5b4b8a

## Visual Effects

Moonlit bioluminescence over deep indigo/black, Dark botanical and celestial motifs (moths, moonflowers, star charts), Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinery, Soft glowing edges instead of hard neon; mystical over corporate, shadow, blur

## AI Visual Direction

Lunarpunk, Moonlit bioluminescence over deep indigo/black, Dark botanical and celestial motifs (moths, moonflowers, star charts), Appropriate-tech-at-night: solar batteries, glow-lanterns, quiet machinery, Soft glowing edges instead of hard neon; mystical over corporate, Lunarpunk art communities on Tumblr/DeviantArt; 'nocturnal eco-futurism' zine covers.

## CSS Technical

```css
/* Lunarpunk — design tokens */
/* 2020s–present | Nocturnal, mystical counterpart to solarpunk */
:root {
/* color */
--color-bg: #0a0e1a;
--color-surface: #12182b;
--color-surface-2: #1a2340;
--color-text: #e8ecf7;
--color-text-muted: #9aa4c4;
--color-primary: #2dd4bf;
--color-accent: #a78bfa;
--color-moonsilver: #c7d2e0;
--color-nightbloom: #5b4b8a;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-glow-teal: 0 0 24px rgba(45,212,191,0.35), 0 8px 24px rgba(0,0,0,0.4);
--shadow-glow-violet: 0 0 20px rgba(167,139,250,0.30), 0 8px 20px rgba(0,0,0,0.4);
/* blur */
--blur-soft: 18px;
/* font */
--font-sans: 'Spectral', 'Cormorant Garamond', system-ui, serif;
--font-display: 'Cormorant Garamond', 'Spectral', serif;
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
--ease-standard: cubic-bezier(0.22, 0.61, 0.36, 1);
/* extra: bioluminescent glow + moonlight wash */
--moonlight-gradient: radial-gradient(circle at 80% 0%, rgba(199,210,224,0.18), transparent 45%);
--bioluminescent-veil: linear-gradient(180deg, rgba(45,212,191,0.08), rgba(167,139,250,0.08));
--bg-image: radial-gradient(120% 90% at 85% -10%, #1a2340 0%, #0a0e1a 55%, #060811 100%);
}

/* ============================================================
Base component classes — Lunarpunk
Signature move: soft, feathered bioluminescent glow (teal/violet)
over a deep indigo-black night ground, never a hard neon edge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-nightbloom);
box-shadow: 0 1px 0 rgba(45,212,191,0.15);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-moonsilver);
cursor: pointer; transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-glow-violet); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-moonsilver); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: #0a0e1a; font-weight: 700;
border: 1px solid var(--color-primary); box-shadow: var(--shadow-glow-teal);
}
.btn--primary:hover { box-shadow: 0 0 32px rgba(45,212,191,0.5), 0 10px 28px rgba(0,0,0,0.45); }
.card {
background: var(--color-surface); background-image: var(--moonlight-gradient);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-surface-2); box-shadow: var(--shadow-glow-violet);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-nightbloom);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-glow-teal); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-primary); color: var(--color-primary);
box-shadow: inset 0 0 12px rgba(45,212,191,0.15);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/lunarpunk.md */
```

## Design System Variables

```css
--bg: #0a0e1a, --fg: #e8ecf7, --accent: #2dd4bf, --surface: #12182b, --radius: 16px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Spectral', serif, --font-body: 'Spectral', 'Cormorant Garamond', system-ui, serif
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

[![Solarpunk](https://designmd.app/images/library/719.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Solarpunk](https://designmd.app/library/solarpunk)[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)[![Dreampunk](https://designmd.app/images/library/625.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Dreampunk](https://designmd.app/library/dreampunk)

Last synced: 8/30/2026
