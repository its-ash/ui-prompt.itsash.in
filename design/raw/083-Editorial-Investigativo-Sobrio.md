# Editorial Investigativo Sóbrio

- Source: <https://designmd.app/library/editorial-investigativo-sobrio>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:02:57.304Z

Editorial & Tipografia2026+ Informação Crítica

# Editorial Investigativo Sóbrio

Serious and informative editorial landing page for an investigative journalism platform. Ideal for landing pages, modern websites. AI-ready template.

investigative journalismnewsanalysisauthoritativeinformativeseriouscleanstructureddeeptrustworthy

Use case: Landing pages, Modern websites

![Editorial Investigativo Sóbrio](https://designmd.app/images/library/212.png)

## Historical Context

Investigative journalism has always demanded a visual language that says: trust this. The tradition runs deep — from the broadsheet gravity of the early New York Times to the stark, almost clinical layouts ProPublica pioneered in the digital era. These publications understood something fundamental: when you're asking readers to spend forty minutes with a corruption exposé, the design cannot compete with the content. It must recede. It must signal rigor. The Guardian's 2018 redesign crystallized this thinking for the web age. Egyptian Slab headlines. Generous whitespace. A type hierarchy so clear you could navigate a 6,000-word investigation without ever feeling lost. The Intercept pushed further — monospaced accents, document-style callouts, layouts that evoked declassified files. Every choice whispered authenticity. What connects these approaches isn't minimalism for its own sake. It's restraint as editorial position. The sobriety of the page becomes an argument: we did the work, we have the evidence, we don't need to shout. Typography carries the weight that sensationalism refuses to.

## When to Use

When the content demands credibility above all else. Investigative pieces, data-driven analysis, long-form reporting where readers need to sustain attention across thousands of words. News organizations building institutional trust. Any context where visual noise would undermine editorial authority — court document analysis, financial investigations, political accountability journalism. Not for breaking news tickers or opinion columns that benefit from personality. This is the quiet room where facts speak.

## Design Principles

- Hierarchy through type scale alone — let size and weight do the structural work, not color or decoration
- Whitespace as credibility signal — generous margins and paragraph spacing communicate that you respect the reader's time and attention
- Restrained palette anchored in near-black text on warm white — color enters only for data visualization or sourcing indicators
- Document-inspired elements (pull quotes, sidebars, footnote patterns) that reference the physicality of evidence and primary sources
- Progressive disclosure in layout — lead with the thesis, layer complexity gradually, never overwhelm the opening viewport

## DESIGN.md

```
---
version: "alpha"
name: "Editorial Investigativo Sóbrio"
description: "Serious and informative editorial landing page for an investigative journalism platform. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#2C3E50"
secondary: "#FFFFFF"
tertiary: "#8B0000"
neutral: "#000000"
surface: "#001F3F"
accent: "#6B8E23"
typography:
h1:
fontFamily: Merriweather
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Merriweather
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Serious and informative editorial landing page for an investigative journalism platform. Ideal for landing pages, modern websites. AI-ready template. Investigative journalism has always demanded a visual language that says: trust this. The tradition runs deep — from the broadsheet gravity of the early New York Times to the stark, almost clinical layouts ProPublica pioneered in the digital era. These publications understood something fundamental: when you're asking readers to spend forty minutes with a corruption exposé, the design cannot compete with the content. It must recede. It must signal rigor.

The Guardian's 2018 redesign crystallized this thinking for the web age. Egyptian Slab headlines. Generous whitespace. A type hierarchy so clear you could navigate a 6,000-word investigation without ever feeling lost. The Intercept pushed further — monospaced accents, document-style callouts, layouts that evoked declassified files. Every choice whispered authenticity.

What connects these approaches isn't minimalism for its own sake. It's restraint as editorial position. The sobriety of the page becomes an argument: we did the work, we have the evidence, we don't need to shout. Typography carries the weight that sensationalism refuses to.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Serious, Informative, Authoritative
- **Keywords:** investigative journalism, news, analysis, authoritative, informative, serious, clean, structured, deep, trustworthy
- **Era:** 2026+ Informação Crítica
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Cinza Escuro** (#2C3E50) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Vermelho Escuro** (#8B0000) — Dark surface, primary background
- **Preto** (#000000) — Dark surface, primary background
- **Azul Marinho** (#001F3F) — Secondary accent
- **Verde Oliva** (#6B8E23) — Success states, positive indicators
- **Amarelo Ocre** (#CC7722) — Warning states, attention indicators
- **Cinza Claro** (#E0E0E0) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Merriweather — Weight 700, tight tracking, used for headline impact
- **Body:** Merriweather — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Merriweather — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, and technical values

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem

## Layout

- **Grid:** CSS Grid primary. Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Tipografia serifada clássica para títulos e sans-serif para corpo, layouts de coluna de jornal, imagens em preto e branco ou com tons sépios, elementos gráficos de infográficos e dados, micro-interações de destaque de texto importante, transições de seção diretas e sem distrações.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Subtly rounded (0.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Subtly rounded (0.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.

## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Tipografia serifada/sans-serif
- Do Layouts de coluna de jornal
- Do Imagens P&B/sépia
- Do Infográficos/dados
- Do Micro-interações de destaque de texto
- Do Transições diretas.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/editorial-investigativo-sobrio/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #2C3E50, border-bottom: 1px solid #C0C0C0, font-family: "Merriweather, serif", line-height: 1.8, transition: all 0.3s ease-in-out, .report-column, .infographic-element, .text-highlight-subtle.
```

### Variables

```
--dark-grey-bg: #2C3E50, --white-text: #FFFFFF, --dark-red: #8B0000, --black-text: #000000, --font-serif-news: "Merriweather, serif", --font-sans-body: "Roboto, sans-serif", --line-height-body: 1.8, --border-subtle: 1px solid #C0C0C0.
```

### Checklist

☐ Tipografia serifada/sans-serif, ☐ Layouts de coluna de jornal, ☐ Imagens P&B/sépia, ☐ Infográficos/dados, ☐ Micro-interações de destaque de texto, ☐ Transições diretas.

## Colors

Primary

#2C3E50

#FFFFFF

#8B0000

#000000

Secondary

#001F3F

#6B8E23

#CC7722

#E0E0E0

### Effects

Tipografia serifada clássica para títulos e sans-serif para corpo, layouts de coluna de jornal, imagens em preto e branco ou com tons sépios, elementos gráficos de infográficos e dados, micro-interações de destaque de texto importante, transições de seção diretas e sem distrações.

### Light/Dark

✓ Full / ✗ No

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Editorial Investigativo Sóbrio
- **Type:** Serious, Informative, Authoritative
- **Keywords:** investigative journalism, news, analysis, authoritative, informative, serious, clean, structured, deep, trustworthy
- **Era:** 2026+ Informação Crítica
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Cinza Escuro #2C3E50, Branco #FFFFFF, Vermelho Escuro #8B0000, Preto #000000
- **Secondary:** Azul Marinho #001F3F, Verde Oliva #6B8E23, Amarelo Ocre #CC7722, Cinza Claro #E0E0E0

## Visual Effects

Tipografia serifada clássica para títulos e sans-serif para corpo, layouts de coluna de jornal, imagens em preto e branco ou com tons sépios, elementos gráficos de infográficos e dados, micro-interações de destaque de texto importante, transições de seção diretas e sem distrações.

## AI Visual Direction

Design a serious and informative editorial landing page for an investigative journalism platform. Use: classic serif typography for headlines, sans-serif for body, newspaper-like column layouts, black and white/sepia images, infographic and data graphic elements, important text highlight micro-interactions, direct distraction-free section transitions, dark grey and deep red accents, authoritative and trustworthy feel.

## CSS Technical

```css
background: #FFFFFF, color: #2C3E50, border-bottom: 1px solid #C0C0C0, font-family: "Merriweather, serif", line-height: 1.8, transition: all 0.3s ease-in-out, .report-column, .infographic-element, .text-highlight-subtle.
```

## Design System Variables

```css
--dark-grey-bg: #2C3E50, --white-text: #FFFFFF, --dark-red: #8B0000, --black-text: #000000, --font-serif-news: "Merriweather, serif", --font-sans-body: "Roboto, sans-serif", --line-height-body: 1.8, --border-subtle: 1px solid #C0C0C0.
```

## Implementation Checklist

- ☐ Tipografia serifada/sans-serif
- ☐ Layouts de coluna de jornal
- ☐ Imagens P&B/sépia
- ☐ Infográficos/dados
- ☐ Micro-interações de destaque de texto
- ☐ Transições diretas.

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

[![Editorial Interativo Digital](https://designmd.app/images/library/213.png) Editorial & Tipografia ### Editorial Interativo Digital](https://designmd.app/library/editorial-interativo-digital)[![Editorial de Portfólio Criativo](https://designmd.app/images/library/211.png) Editorial & Tipografia ### Editorial de Portfólio Criativo](https://designmd.app/library/editorial-de-portfolio-criativo)[![Editorial Contemporâneo](https://designmd.app/images/library/209.png) Editorial & Tipografia ### Editorial Contemporâneo](https://designmd.app/library/editorial-contemporaneo)[![Editorial de Viagem Sofisticado](https://designmd.app/images/library/210.png) Editorial & Tipografia ### Editorial de Viagem Sofisticado](https://designmd.app/library/editorial-de-viagem-sofisticado)[![Estilo Suíço Científico](https://designmd.app/images/library/206.png) Minimalismo & Swiss ### Estilo Suíço Científico](https://designmd.app/library/estilo-suico-cientifico)

Last synced: 4/1/2026
