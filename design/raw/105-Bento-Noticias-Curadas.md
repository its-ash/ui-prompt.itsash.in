# Bento Notícias Curadas

- Source: <https://designmd.app/library/bento-noticias-curadas>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:03:26.299Z

Editorial & Tipografia2026+ Consumo de Notícias Inteligente

# Bento Notícias Curadas

Personalized and organized Bento Style landing page for a curated news platform. Ideal for landing pages, modern websites. AI-ready template.

personalized newscontent curationbento gridorganizedinformativecleanintuitivemodernrelevantengaging

Use case: Landing pages, Modern websites

![Bento Notícias Curadas](https://designmd.app/images/library/232.png)

## Historical Context

Flipboard changed everything in 2010. Before it, news aggregation meant reverse-chronological lists — dense, undifferentiated, exhausting. Their magazine-style card layout proved something radical: editorial hierarchy could be algorithmic. A lead story gets the full-width hero. Supporting pieces tile beneath in smaller cards. The grid itself communicates importance without a single editor writing a headline slug. Apple News refined this further, introducing the bento approach where card sizes aren't just aesthetic choices — they're semantic. A two-column span means "this matters more." A thumbnail card means "here's context if you want it." The density varies by section: politics gets breathing room, sports packs tight with scores and updates. Google Discover took it mobile-native, proving that a single-column bento with varied card heights could feel curated even when fully automated. What makes bento grids work for news specifically is the tension between uniformity and surprise. The grid provides predictability — you know where to look. The varied card sizes provide editorial voice — someone (or something) decided this story deserves more space. That tension is the entire design problem.

## When to Use

When your content has natural hierarchy but unpredictable volume. Bento grids for news work when you need to surface 15-40 items without making them feel like a database dump. They're ideal when stories vary in importance, when you mix media types (video, longform, quick hits), and when users scan rather than read sequentially. Skip this pattern if every item has equal weight — use a masonry or uniform grid instead. The bento earns its complexity only when editorial judgment (human or algorithmic) assigns meaning to size.

## Design Principles

- Size encodes hierarchy — a card's dimensions are its headline before the headline. Never make all cards equal unless you genuinely mean equal importance.
- Typography does the heavy lifting across card sizes. Your largest card needs display type that rewards attention; your smallest needs a tight, scannable style. Design at least three distinct typographic treatments, not one scaled up and down.
- Whitespace between cards is editorial punctuation. Tight gutters say 'these stories are related.' A gap says 'new section.' Don't uniform-gutter your way into visual monotony.
- Content density should shift by context — breaking news sections pack tighter, feature sections breathe. A single rigid density across all content types flattens the reading experience.
- The grid must degrade gracefully when content is missing or sparse. Design the 4-item state and the 40-item state. If your layout only looks good at exactly 12 cards, it's a poster, not a system.

## DESIGN.md

```
---
version: "alpha"
name: "Bento Notícias Curadas"
description: "Personalized and organized Bento Style landing page for a curated news platform. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#001F3F"
secondary: "#FFFFFF"
tertiary: "#FFDAB9"
neutral: "#F5F5F5"
surface: "#2ECC40"
accent: "#E6E6FA"
typography:
h1:
fontFamily: Roboto
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Roboto
fontSize: 1rem
fontWeight: 400
rounded:
sm: 8px
md: 16px
lg: 24px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Personalized and organized Bento Style landing page for a curated news platform. Ideal for landing pages, modern websites. AI-ready template. Flipboard changed everything in 2010. Before it, news aggregation meant reverse-chronological lists — dense, undifferentiated, exhausting. Their magazine-style card layout proved something radical: editorial hierarchy could be algorithmic. A lead story gets the full-width hero. Supporting pieces tile beneath in smaller cards. The grid itself communicates importance without a single editor writing a headline slug.

Apple News refined this further, introducing the bento approach where card sizes aren't just aesthetic choices — they're semantic. A two-column span means "this matters more." A thumbnail card means "here's context if you want it." The density varies by section: politics gets breathing room, sports packs tight with scores and updates. Google Discover took it mobile-native, proving that a single-column bento with varied card heights could feel curated even when fully automated.

What makes bento grids work for news specifically is the tension between uniformity and surprise. The grid provides predictability — you know where to look. The varied card sizes provide editorial voice — someone (or something) decided this story deserves more space. That tension is the entire design problem.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Personalized, Organized, Informative
- **Keywords:** personalized news, content curation, bento grid, organized, informative, clean, intuitive, modern, relevant, engaging
- **Era:** 2026+ Consumo de Notícias Inteligente
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Azul Marinho** (#001F3F) — Accent highlight, links and focus states
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Laranja Suave** (#FFDAB9) — Warm accent, call-to-action secondary
- **Cinza Claro** (#F5F5F5) — Secondary text, borders, muted elements
- **Verde Esmeralda** (#2ECC40) — Success states, positive indicators
- **Roxo Lavanda** (#E6E6FA) — Accent color, emphasis elements
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Preto** (#333333) — Deep contrast surface

## Typography

- **Display / Hero:** Bento — Weight 700, tight tracking, used for headline impact
- **Accent:** Roboto — Used for decorative or emphasis text
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

Layouts de grid "Bento" para artigos de notícias, cards com manchetes e miniaturas, tipografia sans-serif legível, ícones de categoria minimalistas, micro-interações de hover com resumo de artigo, transições de elementos suaves e focadas, foco na personalização e relevância.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (8px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (8px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Layouts de grid "Bento" para notícias
- Do Cards com manchetes/miniaturas
- Do Tipografia sans-serif legível
- Do Ícones de categoria minimalistas
- Do Micro-interações de resumo de artigo
- Do Transições suaves e focadas.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/bento-noticias-curadas/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #001F3F, border-radius: 8px, box-shadow: 0 2px 5px rgba(0,0,0,0.03), font-family: "Roboto, sans-serif", transition: all 0.3s ease-in-out, .bento-news-card, .article-thumbnail, .summary-hover.
```

### Variables

```
--navy-blue: #001F3F, --white-bg: #FFFFFF, --soft-orange: #FFDAB9, --light-grey-bg: #F5F5F5, --border-radius-md: 8px, --shadow-news: 0 2px 5px rgba(0,0,0,0.03), --font-main: "Roboto, sans-serif".
```

### Checklist

☐ Layouts de grid "Bento" para notícias, ☐ Cards com manchetes/miniaturas, ☐ Tipografia sans-serif legível, ☐ Ícones de categoria minimalistas, ☐ Micro-interações de resumo de artigo, ☐ Transições suaves e focadas.

## Colors

Primary

#001F3F

#FFFFFF

#FFDAB9

#F5F5F5

Secondary

#2ECC40

#E6E6FA

#FFD700

#333333

### Effects

Layouts de grid "Bento" para artigos de notícias, cards com manchetes e miniaturas, tipografia sans-serif legível, ícones de categoria minimalistas, micro-interações de hover com resumo de artigo, transições de elementos suaves e focadas, foco na personalização e relevância.

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

- **Name:** Bento Notícias Curadas
- **Type:** Personalized, Organized, Informative
- **Keywords:** personalized news, content curation, bento grid, organized, informative, clean, intuitive, modern, relevant, engaging
- **Era:** 2026+ Consumo de Notícias Inteligente
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Azul Marinho #001F3F, Branco #FFFFFF, Laranja Suave #FFDAB9, Cinza Claro #F5F5F5
- **Secondary:** Verde Esmeralda #2ECC40, Roxo Lavanda #E6E6FA, Amarelo Sol #FFD700, Preto #333333

## Visual Effects

Layouts de grid "Bento" para artigos de notícias, cards com manchetes e miniaturas, tipografia sans-serif legível, ícones de categoria minimalistas, micro-interações de hover com resumo de artigo, transições de elementos suaves e focadas, foco na personalização e relevância.

## AI Visual Direction

Design a personalized and organized Bento Style landing page for a curated news platform. Use: Bento grid layouts for news articles, cards with headlines and thumbnails, legible sans-serif typography, minimalist category icons, article summary hover micro-interactions, smooth focused element transitions, navy blue and soft orange accents, relevant and engaging feel.

## CSS Technical

```css
background: #FFFFFF, color: #001F3F, border-radius: 8px, box-shadow: 0 2px 5px rgba(0,0,0,0.03), font-family: "Roboto, sans-serif", transition: all 0.3s ease-in-out, .bento-news-card, .article-thumbnail, .summary-hover.
```

## Design System Variables

```css
--navy-blue: #001F3F, --white-bg: #FFFFFF, --soft-orange: #FFDAB9, --light-grey-bg: #F5F5F5, --border-radius-md: 8px, --shadow-news: 0 2px 5px rgba(0,0,0,0.03), --font-main: "Roboto, sans-serif".
```

## Implementation Checklist

- ☐ Layouts de grid "Bento" para notícias
- ☐ Cards com manchetes/miniaturas
- ☐ Tipografia sans-serif legível
- ☐ Ícones de categoria minimalistas
- ☐ Micro-interações de resumo de artigo
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

[![Bento Portfólio de Produto](https://designmd.app/images/library/231.png) Editorial & Tipografia ### Bento Portfólio de Produto](https://designmd.app/library/bento-portfolio-de-produto)[![Bento Produtividade Flexível](https://designmd.app/images/library/229.png) Editorial & Tipografia ### Bento Produtividade Flexível](https://designmd.app/library/bento-produtividade-flexivel)[![Bento Dados Estruturados](https://designmd.app/images/library/230.png) Editorial & Tipografia ### Bento Dados Estruturados](https://designmd.app/library/bento-dados-estruturados)[![Bento Eventos Dinâmicos](https://designmd.app/images/library/233.png) Editorial & Tipografia ### Bento Eventos Dinâmicos](https://designmd.app/library/bento-eventos-dinamicos)[![Flat Design Produtivo](https://designmd.app/images/library/224.png) Flat & Soft UI ### Flat Design Produtivo](https://designmd.app/library/flat-design-produtivo)

Last synced: 4/1/2026
