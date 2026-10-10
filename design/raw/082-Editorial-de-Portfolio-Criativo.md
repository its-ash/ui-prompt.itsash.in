# Editorial de Portfólio Criativo

- Source: <https://designmd.app/library/editorial-de-portfolio-criativo>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:02:57.215Z

Editorial & Tipografia2026+ Expressão Criativa

# Editorial de Portfólio Criativo

Design an artistic and visual editorial landing page for a graphic design portfolio. Ideal for landing pages, modern websites. AI-ready template.

graphic designportfoliocreativevisualdetailedartisticsophisticatedcuratedprofessionalexpressive

Use case: Landing pages, Modern websites

![Editorial de Portfólio Criativo](https://designmd.app/images/library/211.png)

## Historical Context

The designer portfolio as editorial object has roots in the printed book — the monograph, the process zine, the self-published catalog. Designers like Alexey Brodovitch didn't just show work; they sequenced it. Pacing mattered. A spread could breathe or confront. When portfolios moved to screens, most of that intelligence was lost to grids of thumbnails. The good ones kept it. Editorial portfolio design treats each project as a magazine feature. There's a headline hierarchy. There's a lede. White space isn't empty — it's punctuation. Case studies become narrative pieces with rhythm: full-bleed image, then tight caption cluster, then a pull quote that earns its size. The work isn't just displayed, it's argued for. This approach gained traction as designers realized clients don't evaluate craft in isolation — they evaluate storytelling. An editorial portfolio says: I think about sequence, about context, about how ideas land. That's the real portfolio piece.

## When to Use

When the work needs context to hit. When you're showing process, not just output. When your audience is creative directors who read layouts instinctively — they'll notice the column breaks, the type choices, the pacing decisions. Use this for portfolios that need to feel authored, not aggregated. For agencies pitching sophisticated clients. For art directors whose medium is already editorial. Skip it if you just need a fast gallery.

## Design Principles

- Sequence is argument — order your projects like magazine features, each transition intentional, building a narrative arc across the entire portfolio
- Typography carries voice — your type choices, scale contrasts, and text placement ARE the design opinion before anyone reads a word
- White space as editorial device — generous margins and breathing room signal confidence; cramped layouts signal insecurity about the work
- Full-bleed moments earn their drama — not every image gets the hero treatment; restraint makes the big moments land harder
- Case studies over screenshots — present work as authored narrative with setup, tension, and resolution rather than flat image dumps

## DESIGN.md

```
---
version: "alpha"
name: "Editorial de Portfólio Criativo"
description: "Design an artistic and visual editorial landing page for a graphic design portfolio. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#2D2D2D"
secondary: "#FFFFFF"
tertiary: "#00FFFF"
neutral: "#FF00FF"
surface: "#FFFF00"
accent: "#32CD32"
typography:
h1:
fontFamily: Bodoni Moda
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Bodoni Moda
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an artistic and visual editorial landing page for a graphic design portfolio. Ideal for landing pages, modern websites. AI-ready template. The designer portfolio as editorial object has roots in the printed book — the monograph, the process zine, the self-published catalog. Designers like Alexey Brodovitch didn't just show work; they sequenced it. Pacing mattered. A spread could breathe or confront. When portfolios moved to screens, most of that intelligence was lost to grids of thumbnails. The good ones kept it.

Editorial portfolio design treats each project as a magazine feature. There's a headline hierarchy. There's a lede. White space isn't empty — it's punctuation. Case studies become narrative pieces with rhythm: full-bleed image, then tight caption cluster, then a pull quote that earns its size. The work isn't just displayed, it's argued for.

This approach gained traction as designers realized clients don't evaluate craft in isolation — they evaluate storytelling. An editorial portfolio says: I think about sequence, about context, about how ideas land. That's the real portfolio piece.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Artistic, Visual, Detailed
- **Keywords:** graphic design, portfolio, creative, visual, detailed, artistic, sophisticated, curated, professional, expressive
- **Era:** 2026+ Expressão Criativa
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Cinza Escuro** (#2D2D2D) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Ciano** (#00FFFF) — Supporting palette color
- **Magenta** (#FF00FF) — Decorative accent, highlight elements
- **Amarelo** (#FFFF00) — Warning states, attention indicators
- **Verde Limão** (#32CD32) — Success states, positive indicators
- **Azul Elétrico** (#00BFFF) — Secondary accent
- **Preto** (#000000) — Deep contrast surface

## Typography

- **Display / Hero:** Bodoni Moda — Weight 700, tight tracking, used for headline impact
- **Body:** Bodoni Moda — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Bodoni Moda — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Layouts de revista com grids flexíveis, tipografia serifada e sans-serif para hierarquia, imagens de projetos em grande escala com detalhes, elementos gráficos decorativos (linhas, formas), micro-interações de hover com informações do projeto, transições de galeria de projetos com efeito de "passar página".

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

- Do Layouts de revista com grids
- Do Tipografia serifada/sans-serif
- Do Imagens de projetos em grande escala
- Do Elementos gráficos decorativos
- Do Micro-interações de informações do projeto
- Do Transições de galeria "passar página".

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/editorial-de-portfolio-criativo/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #2D2D2D, border-bottom: 2px solid #00FFFF, font-family: "Bodoni Moda, serif", transition: all 0.4s ease-in-out, .project-spread, .graphic-element-decor, .gallery-page-turn.
```

### Variables

```
--dark-grey-bg: #2D2D2D, --white-text: #FFFFFF, --cyan-accent: #00FFFF, --magenta-accent: #FF00FF, --font-serif-display: "Bodoni Moda, serif", --font-sans-body: "Inter, sans-serif", --border-accent: 2px solid #00FFFF, --page-turn-duration: 0.4s.
```

### Checklist

☐ Layouts de revista com grids, ☐ Tipografia serifada/sans-serif, ☐ Imagens de projetos em grande escala, ☐ Elementos gráficos decorativos, ☐ Micro-interações de informações do projeto, ☐ Transições de galeria "passar página".

## Colors

Primary

#2D2D2D

#FFFFFF

#00FFFF

#FF00FF

Secondary

#FFFF00

#32CD32

#00BFFF

#000000

### Effects

Layouts de revista com grids flexíveis, tipografia serifada e sans-serif para hierarquia, imagens de projetos em grande escala com detalhes, elementos gráficos decorativos (linhas, formas), micro-interações de hover com informações do projeto, transições de galeria de projetos com efeito de "passar página".

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

- **Name:** Editorial de Portfólio Criativo
- **Type:** Artistic, Visual, Detailed
- **Keywords:** graphic design, portfolio, creative, visual, detailed, artistic, sophisticated, curated, professional, expressive
- **Era:** 2026+ Expressão Criativa
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Cinza Escuro #2D2D2D, Branco #FFFFFF, Ciano #00FFFF, Magenta #FF00FF
- **Secondary:** Amarelo #FFFF00, Verde Limão #32CD32, Azul Elétrico #00BFFF, Preto #000000

## Visual Effects

Layouts de revista com grids flexíveis, tipografia serifada e sans-serif para hierarquia, imagens de projetos em grande escala com detalhes, elementos gráficos decorativos (linhas, formas), micro-interações de hover com informações do projeto, transições de galeria de projetos com efeito de "passar página".

## AI Visual Direction

Design an artistic and visual editorial landing page for a graphic design portfolio. Use: magazine-like layouts with flexible grids, contrasting serif and sans-serif typography for hierarchy, large-scale project images with details, decorative graphic elements (lines, shapes), project info hover micro-interactions, page-turn gallery transitions, dark grey and vibrant cyan/magenta accents, sophisticated and expressive feel.

## CSS Technical

```css
background: #FFFFFF, color: #2D2D2D, border-bottom: 2px solid #00FFFF, font-family: "Bodoni Moda, serif", transition: all 0.4s ease-in-out, .project-spread, .graphic-element-decor, .gallery-page-turn.
```

## Design System Variables

```css
--dark-grey-bg: #2D2D2D, --white-text: #FFFFFF, --cyan-accent: #00FFFF, --magenta-accent: #FF00FF, --font-serif-display: "Bodoni Moda, serif", --font-sans-body: "Inter, sans-serif", --border-accent: 2px solid #00FFFF, --page-turn-duration: 0.4s.
```

## Implementation Checklist

- ☐ Layouts de revista com grids
- ☐ Tipografia serifada/sans-serif
- ☐ Imagens de projetos em grande escala
- ☐ Elementos gráficos decorativos
- ☐ Micro-interações de informações do projeto
- ☐ Transições de galeria "passar página".

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

[![Editorial de Viagem Sofisticado](https://designmd.app/images/library/210.png) Editorial & Tipografia ### Editorial de Viagem Sofisticado](https://designmd.app/library/editorial-de-viagem-sofisticado)[![Editorial Interativo Digital](https://designmd.app/images/library/213.png) Editorial & Tipografia ### Editorial Interativo Digital](https://designmd.app/library/editorial-interativo-digital)[![Editorial Contemporâneo](https://designmd.app/images/library/209.png) Editorial & Tipografia ### Editorial Contemporâneo](https://designmd.app/library/editorial-contemporaneo)[![Editorial Investigativo Sóbrio](https://designmd.app/images/library/212.png) Editorial & Tipografia ### Editorial Investigativo Sóbrio](https://designmd.app/library/editorial-investigativo-sobrio)[![Bento Portfólio de Produto](https://designmd.app/images/library/231.png) Editorial & Tipografia ### Bento Portfólio de Produto](https://designmd.app/library/bento-portfolio-de-produto)

Last synced: 4/1/2026
