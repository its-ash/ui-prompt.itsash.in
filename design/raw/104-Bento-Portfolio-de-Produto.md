# Bento Portfólio de Produto

- Source: <https://designmd.app/library/bento-portfolio-de-produto>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:03:26.211Z

Editorial & Tipografia2026+ Design Centrado no Usuário

# Bento Portfólio de Produto

Visual and organized Bento Style landing page for a product designer portfolio. Ideal for landing pages, modern websites. AI-ready template.

product designportfoliovisualorganizedmoderncleanintuitivedetailedcuratedprofessional

Use case: Landing pages, Modern websites

![Bento Portfólio de Produto](https://designmd.app/images/library/231.png)

## Historical Context

Apple's product pages changed everything. Before 2012, portfolios were slideshows — linear, predictable, forgettable. Then Cupertino started breaking features into discrete visual moments: a camera module gets its own full-bleed block, a chip gets a dark cinematic panel, battery life gets breathing room. Each section fought for attention independently. Designers noticed. The bento grid became the natural translation of that philosophy into portfolio work. Instead of forcing products into uniform cards, you give each piece the container it deserves. A hero shot spans two columns. A detail crop sits tight in a square. Typography anchors the negative space between. The grid isn't decorative — it's editorial hierarchy applied to product storytelling. What makes this different from a generic masonry layout: intentionality. Every cell size is a decision about importance. The large panel says "this is the headline." The small ones say "context, texture, proof." Product portfolios finally started feeling like magazine spreads instead of image dumps.

## When to Use

When your product needs to breathe. Feature presentations where each capability deserves its own moment. Design portfolios that need to show range without visual monotony. Product showcases where you're selling craft, not just listing specs. Particularly effective when you have mixed media — photography alongside typography alongside data — and need them to coexist without hierarchy collapse. Skip it for single-product landing pages with one story to tell linearly.

## Design Principles

- Cell size encodes hierarchy — the grid is your editorial voice, not a neutral container. Large panels are headlines, small panels are supporting evidence.
- Let typography do structural work. A bold type-only cell between product shots creates rhythm breaks that prevent visual fatigue across the grid.
- Maintain consistent gutter width religiously. The white space between cells is what makes bento feel intentional rather than broken — 16px or 24px, pick one, never mix.
- Contrast density across cells. Pair a visually dense product photograph against a minimal text-only block. The tension between full and empty is what creates the magazine quality.
- Limit your palette to three cell aspect ratios maximum. Square, 2:1 landscape, and 1:2 portrait cover every product storytelling need without the grid feeling chaotic.

## DESIGN.md

```
---
version: "alpha"
name: "Bento Portfólio de Produto"
description: "Visual and organized Bento Style landing page for a product designer portfolio. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#F0F2F5"
secondary: "#FFFFFF"
tertiary: "#333333"
neutral: "#6495ED"
surface: "#98FB98"
accent: "#FFDAB9"
typography:
h1:
fontFamily: Inter
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Inter
fontSize: 1rem
fontWeight: 400
rounded:
sm: 10px
md: 20px
lg: 30px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Visual and organized Bento Style landing page for a product designer portfolio. Ideal for landing pages, modern websites. AI-ready template. Apple's product pages changed everything. Before 2012, portfolios were slideshows — linear, predictable, forgettable. Then Cupertino started breaking features into discrete visual moments: a camera module gets its own full-bleed block, a chip gets a dark cinematic panel, battery life gets breathing room. Each section fought for attention independently. Designers noticed.

The bento grid became the natural translation of that philosophy into portfolio work. Instead of forcing products into uniform cards, you give each piece the container it deserves. A hero shot spans two columns. A detail crop sits tight in a square. Typography anchors the negative space between. The grid isn't decorative — it's editorial hierarchy applied to product storytelling.

What makes this different from a generic masonry layout: intentionality. Every cell size is a decision about importance. The large panel says "this is the headline." The small ones say "context, texture, proof." Product portfolios finally started feeling like magazine spreads instead of image dumps.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Visual, Organized, Modern
- **Keywords:** product design, portfolio, visual, organized, modern, clean, intuitive, detailed, curated, professional
- **Era:** 2026+ Design Centrado no Usuário
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Cinza Claro** (#F0F2F5) — Secondary text, borders, muted elements
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto** (#333333) — Dark surface, primary background
- **Azul Médio** (#6495ED) — Accent highlight, links and focus states
- **Verde Menta** (#98FB98) — Success states, positive indicators
- **Laranja Pêssego** (#FFDAB9) — Warm accent, call-to-action secondary
- **Roxo Lavanda** (#E6E6FA) — Accent color, emphasis elements
- **Cinza Escuro** (#6C757D) — Deep contrast surface

## Typography

- **Display / Hero:** Bento — Weight 700, tight tracking, used for headline impact
- **Accent:** Inter — Used for decorative or emphasis text
- **Body:** Bento — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Bento — 0.875rem, weight 500, slight letter-spacing
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

Layouts de grid "Bento" para apresentação de projetos, cards com miniaturas de projetos e descrições concisas, tipografia sans-serif limpa, ícones de processo minimalistas, micro-interações de hover com pré-visualização de projeto, transições de elementos suaves e focadas, foco na organização e detalhes do projeto.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 10px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (10px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (10px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Layouts de grid "Bento" para projetos
- Do Cards com miniaturas/descrições
- Do Tipografia sans-serif limpa
- Do Ícones de processo minimalistas
- Do Micro-interações de pré-visualização
- Do Transições suaves e focadas.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/bento-portfolio-de-produto/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #333333, border-radius: 10px, box-shadow: 0 2px 6px rgba(0,0,0,0.04), font-family: "Inter, sans-serif", transition: all 0.3s ease-in-out, .bento-project-card, .project-thumbnail, .preview-hover.
```

### Variables

```
--light-grey-bg: #F0F2F5, --white-bg: #FFFFFF, --dark-text: #333333, --medium-blue: #6495ED, --border-radius-lg: 10px, --shadow-project: 0 2px 6px rgba(0,0,0,0.04), --font-main: "Inter, sans-serif".
```

### Checklist

☐ Layouts de grid "Bento" para projetos, ☐ Cards com miniaturas/descrições, ☐ Tipografia sans-serif limpa, ☐ Ícones de processo minimalistas, ☐ Micro-interações de pré-visualização, ☐ Transições suaves e focadas.

## Colors

Primary

#F0F2F5

#FFFFFF

#333333

#6495ED

Secondary

#98FB98

#FFDAB9

#E6E6FA

#6C757D

### Effects

Layouts de grid "Bento" para apresentação de projetos, cards com miniaturas de projetos e descrições concisas, tipografia sans-serif limpa, ícones de processo minimalistas, micro-interações de hover com pré-visualização de projeto, transições de elementos suaves e focadas, foco na organização e detalhes do projeto.

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

- **Name:** Bento Portfólio de Produto
- **Type:** Visual, Organized, Modern
- **Keywords:** product design, portfolio, visual, organized, modern, clean, intuitive, detailed, curated, professional
- **Era:** 2026+ Design Centrado no Usuário
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Cinza Claro #F0F2F5, Branco #FFFFFF, Preto #333333, Azul Médio #6495ED
- **Secondary:** Verde Menta #98FB98, Laranja Pêssego #FFDAB9, Roxo Lavanda #E6E6FA, Cinza Escuro #6C757D

## Visual Effects

Layouts de grid "Bento" para apresentação de projetos, cards com miniaturas de projetos e descrições concisas, tipografia sans-serif limpa, ícones de processo minimalistas, micro-interações de hover com pré-visualização de projeto, transições de elementos suaves e focadas, foco na organização e detalhes do projeto.

## AI Visual Direction

Design a visual and organized Bento Style landing page for a product designer portfolio. Use: Bento grid layouts for project presentation, cards with project thumbnails and concise descriptions, clean sans-serif typography, minimalist process icons, project preview hover micro-interactions, smooth focused element transitions, light grey and medium blue accents, detailed and professional feel.

## CSS Technical

```css
background: #FFFFFF, color: #333333, border-radius: 10px, box-shadow: 0 2px 6px rgba(0,0,0,0.04), font-family: "Inter, sans-serif", transition: all 0.3s ease-in-out, .bento-project-card, .project-thumbnail, .preview-hover.
```

## Design System Variables

```css
--light-grey-bg: #F0F2F5, --white-bg: #FFFFFF, --dark-text: #333333, --medium-blue: #6495ED, --border-radius-lg: 10px, --shadow-project: 0 2px 6px rgba(0,0,0,0.04), --font-main: "Inter, sans-serif".
```

## Implementation Checklist

- ☐ Layouts de grid "Bento" para projetos
- ☐ Cards com miniaturas/descrições
- ☐ Tipografia sans-serif limpa
- ☐ Ícones de processo minimalistas
- ☐ Micro-interações de pré-visualização
- ☐ Transições suaves e focadas.

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

[![Bento Notícias Curadas](https://designmd.app/images/library/232.png) Editorial & Tipografia ### Bento Notícias Curadas](https://designmd.app/library/bento-noticias-curadas)[![Bento Produtividade Flexível](https://designmd.app/images/library/229.png) Editorial & Tipografia ### Bento Produtividade Flexível](https://designmd.app/library/bento-produtividade-flexivel)[![Bento Eventos Dinâmicos](https://designmd.app/images/library/233.png) Editorial & Tipografia ### Bento Eventos Dinâmicos](https://designmd.app/library/bento-eventos-dinamicos)[![Bento Dados Estruturados](https://designmd.app/images/library/230.png) Editorial & Tipografia ### Bento Dados Estruturados](https://designmd.app/library/bento-dados-estruturados)[![Editorial de Portfólio Criativo](https://designmd.app/images/library/211.png) Editorial & Tipografia ### Editorial de Portfólio Criativo](https://designmd.app/library/editorial-de-portfolio-criativo)

Last synced: 4/1/2026
