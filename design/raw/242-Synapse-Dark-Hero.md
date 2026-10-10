# Synapse Dark Hero

- Source: <https://designmd.app/library/synapse-dark-hero>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:07:02.320Z

Futurista & Tech2024-2026 SaaS Dark Premium

# Synapse Dark Hero

Pure black SaaS hero with HLS video at 100% opacity no overlay, positioned at height 80vh and absolute bottom-[35vh]. Ideal for saas de inovação, plataformas de ai, ferramentas enterprise, startups de tecnologia. AI-ready template.

SaaSpreto puroglass badgesHLS videostaggered animationsgradient borderlogo marqueeFramer Motionnavbar blurinnovation

Use case: SaaS de inovação, Platforms de AI, Tools enterprise, Startups de tecnologia

![Synapse Dark Hero](https://designmd.app/images/library/356.png)

## Historical Context

The dark hero pattern didn't emerge from aesthetic preference — it emerged from necessity. Early neural network visualization tools in the 2010s needed pure black backgrounds because researchers were staring at node graphs for hours. The contrast wasn't a style choice; it was ergonomic. When DeepMind and OpenAI started publishing papers with dark-themed diagrams, the visual language of 'intelligence' became inseparable from darkness. Synapse Dark Hero takes that lineage seriously. The pure black (#000) isn't the lazy dark mode gray that every SaaS slaps on — it's the void that makes glass badges and neural pathway animations actually register as luminous. The glassmorphism here isn't decorative. It references the layered transparency of network architecture diagrams, where you need to see through one layer to understand the connections beneath. The futuristic tech aesthetic has been done to death, but this pattern earns it. The neural motifs aren't ornamental — they're structural, guiding the eye along the same pathways that data flows through the product itself.

## When to Use

Deploy this when your product literally involves neural networks, AI inference, or machine learning pipelines. It falls flat on a project management tool that just added a ChatGPT wrapper. The pure black foundation demands content that justifies the drama — think model dashboards, training visualizations, API playgrounds for LLMs. If your hero section needs to communicate 'this product thinks,' not just 'this product exists,' Synapse is your pattern. Also works for premium-tier SaaS where the price point justifies the visual weight.

## Design Principles

- Pure black (#000000) as negative space, never dark gray — the void is the canvas, not a compromise
- Glass badges earn their blur: each translucent element must layer information, not just decoration
- Neural pathway motifs follow actual data flow hierarchy — ornament that lies about structure is noise
- Light sources are singular and motivated — every glow traces back to a logical origin point in the UI
- Typography runs high-contrast and tight: one weight for authority, one for data, nothing in between

## DESIGN.md

```
---
version: "alpha"
name: "Synapse Dark Hero"
description: "Pure black SaaS hero with HLS video at 100% opacity no overlay, positioned at height 80vh and absolute bottom-[35vh]. Ideal for saas de inovação, plataformas de ai, ferramentas enterprise, startups de tecnologia. AI-ready template."
colors:
primary: "#000000"
secondary: "#FFFFFF"
tertiary: "#FFFFFF"
neutral: "#888888"
surface: "#6B7280"
accent: "#000000"
typography:
h1:
fontFamily: System UI stack
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: System UI stack
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: System UI stack
fontSize: 0.75rem
fontWeight: 500
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Pure black SaaS hero with HLS video at 100% opacity no overlay, positioned at height 80vh and absolute bottom-[35vh]. Ideal for saas de inovação, plataformas de ai, ferramentas enterprise, startups de tecnologia. AI-ready template. The dark hero pattern didn't emerge from aesthetic preference — it emerged from necessity. Early neural network visualization tools in the 2010s needed pure black backgrounds because researchers were staring at node graphs for hours. The contrast wasn't a style choice; it was ergonomic. When DeepMind and OpenAI started publishing papers with dark-themed diagrams, the visual language of 'intelligence' became inseparable from darkness.

Synapse Dark Hero takes that lineage seriously. The pure black (#000) isn't the lazy dark mode gray that every SaaS slaps on — it's the void that makes glass badges and neural pathway animations actually register as luminous. The glassmorphism here isn't decorative. It references the layered transparency of network architecture diagrams, where you need to see through one layer to understand the connections beneath.

The futuristic tech aesthetic has been done to death, but this pattern earns it. The neural motifs aren't ornamental — they're structural, guiding the eye along the same pathways that data flows through the product itself.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** SaaS, Pure Black, Glass Badges, HLS Video, Staggered Motion
- **Keywords:** SaaS, preto puro, glass badges, HLS video, staggered animations, gradient border, logo marquee, Framer Motion, navbar blur, innovation
- **Era:** 2024-2026 SaaS Dark Premium
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Preto Puro** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Cinza Gradiente from** (#FFFFFF) — Secondary text, borders, muted elements
- **to** (#888888) — Supporting palette color
- **Cinza Muted** (#6B7280) — Secondary text, borders, muted elements
- **Preto Botão** (#000000) — Deep contrast surface
- **Vidro Badge** (rgba(255,255,255,0.1)) — Extended palette, decorative use
- **Borda Gradiente** (rgba(255,255,255,0.3)) — Extended palette, decorative use
- **Borda Branca** (rgba(255,255,255,0.2)) — Extended palette, decorative use

## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

VÍDEO: Stream HLS curto (~5s loop) com visual abstrato minimalista. Formas geométricas ou partículas sutis em movimento sobre fundo escuro. Aspect ratio ~16:9 (276x160px storyboard). Exibido em opacity 100% sem overlay, posicionado com height 80vh e absolute bottom-[35vh], flutuando atrás do conteúdo de texto. O vídeo cria profundidade visual sem competir com o conteúdo. | EFEITOS CSS: Fundo preto puro com vídeo HLS (opacity 100%, sem overlay) posicionado em height 80vh e bottom-[35vh] flutuando atrás do texto, navbar fixa com blur glassmorphism, 3 badges glassmorphism em row, headline massiva (~80px) com animação fade-in-up, botões sólido preto com borda branca e glass transparente, logo marquee estático grayscale opacity-40, animações staggered via Framer Motion

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Fundo preto puro com vídeo HLS sem overlay
- Do Vídeo h-80vh bottom-35vh
- Do Navbar fixa blur glass
- Do 3 badges glassmorphism
- Do Headline ~80px fade-in-up
- Do Botão preto + glass transparente
- Do Logo marquee grayscale
- Do Animações staggered
- Do Responsivo

## Use Case

SaaS de inovação, Platforms de AI, Tools enterprise, Startups de tecnologia
```

[Download DESIGN.md](https://designmd.app/library/synapse-dark-hero/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #000000, video: HLS opacity-100 h-[80vh] absolute bottom-[35vh], backdrop-filter: blur(12px), background: rgba(255,255,255,0.1), font-size: ~80px, animation: staggered fade-in-up, filter: grayscale(1) opacity(0.4), border: 1px solid rgba(255,255,255,0.2)
```

### Variables

```
--bg-primary: #000000, --text-primary: #FFFFFF, --text-muted: #6B7280, --glass-bg: rgba(255,255,255,0.1), --glass-border: rgba(255,255,255,0.2), --video-height: 80vh, --video-bottom: 35vh, --headline-size: 80px, --logo-opacity: 0.4
```

### Checklist

☐ Fundo preto puro com vídeo HLS sem overlay, ☐ Vídeo h-80vh bottom-35vh, ☐ Navbar fixa blur glass, ☐ 3 badges glassmorphism, ☐ Headline ~80px fade-in-up, ☐ Botão preto + glass transparente, ☐ Logo marquee grayscale, ☐ Animações staggered, ☐ Responsivo

## Colors

Primary

#000000

#FFFFFF

#888888

#6B7280

Secondary

#000000

### Effects

VÍDEO: Stream HLS curto (~5s loop) com visual abstrato minimalista. Formas geométricas ou partículas sutis em movimento sobre fundo escuro. Aspect ratio ~16:9 (276x160px storyboard). Exibido em opacity 100% sem overlay, posicionado com height 80vh e absolute bottom-[35vh], flutuando atrás do conteúdo de texto. O vídeo cria profundidade visual sem competir com o conteúdo. | EFEITOS CSS: Fundo preto puro com vídeo HLS (opacity 100%, sem overlay) posicionado em height 80vh e bottom-[35vh] flutuando atrás do texto, navbar fixa com blur glassmorphism, 3 badges glassmorphism em row, headline massiva (~80px) com animação fade-in-up, botões sólido preto com borda branca e glass transparente, logo marquee estático grayscale opacity-40, animações staggered via Framer Motion

### Light/Dark

✗ Not Recommended / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Synapse Dark Hero
- **Type:** SaaS, Pure Black, Glass Badges, HLS Video, Staggered Motion
- **Keywords:** SaaS, preto puro, glass badges, HLS video, staggered animations, gradient border, logo marquee, Framer Motion, navbar blur, innovation
- **Era:** 2024-2026 SaaS Dark Premium
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Color Palette

- **Primary:** Preto Puro #000000, Branco #FFFFFF, Cinza Gradiente from #FFFFFF to #888888, Cinza Muted #6B7280
- **Secondary:** Vidro Badge rgba(255,255,255,0.1), Borda Gradiente rgba(255,255,255,0.3), Preto Botão #000000, Borda Branca rgba(255,255,255,0.2)

## Visual Effects

VÍDEO: Stream HLS curto (~5s loop) com visual abstrato minimalista. Formas geométricas ou partículas sutis em movimento sobre fundo escuro. Aspect ratio ~16:9 (276x160px storyboard). Exibido em opacity 100% sem overlay, posicionado com height 80vh e absolute bottom-[35vh], flutuando atrás do conteúdo de texto. O vídeo cria profundidade visual sem competir com o conteúdo. | EFEITOS CSS: Fundo preto puro com vídeo HLS (opacity 100%, sem overlay) posicionado em height 80vh e bottom-[35vh] flutuando atrás do texto, navbar fixa com blur glassmorphism, 3 badges glassmorphism em row, headline massiva (~80px) com animação fade-in-up, botões sólido preto com borda branca e glass transparente, logo marquee estático grayscale opacity-40, animações staggered via Framer Motion

## AI Visual Direction

Design a pure black SaaS hero with HLS video at 100% opacity no overlay, positioned at height 80vh and absolute bottom-[35vh]. Fixed navbar with blur glass. Row of 3 glassmorphism badges. Massive headline ~80px with fade-in-up. Solid black CTA with white border and transparent glass secondary. Static grayscale logo marquee at 40% opacity. Staggered entrance animations via Framer Motion.

## CSS Technical

```css
background: #000000, video: HLS opacity-100 h-[80vh] absolute bottom-[35vh], backdrop-filter: blur(12px), background: rgba(255,255,255,0.1), font-size: ~80px, animation: staggered fade-in-up, filter: grayscale(1) opacity(0.4), border: 1px solid rgba(255,255,255,0.2)
```

## Design System Variables

```css
--bg-primary: #000000, --text-primary: #FFFFFF, --text-muted: #6B7280, --glass-bg: rgba(255,255,255,0.1), --glass-border: rgba(255,255,255,0.2), --video-height: 80vh, --video-bottom: 35vh, --headline-size: 80px, --logo-opacity: 0.4
```

## Implementation Checklist

- ☐ Fundo preto puro com vídeo HLS sem overlay
- ☐ Vídeo h-80vh bottom-35vh
- ☐ Navbar fixa blur glass
- ☐ 3 badges glassmorphism
- ☐ Headline ~80px fade-in-up
- ☐ Botão preto + glass transparente
- ☐ Logo marquee grayscale
- ☐ Animações staggered
- ☐ Responsivo

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

[![Taskora SaaS Hero](https://designmd.app/images/library/351.png) Futurista & Tech ### Taskora SaaS Hero](https://designmd.app/library/taskora-saas-hero)[![Datacore SaaS Hero](https://designmd.app/images/library/353.png) Futurista & Tech ### Datacore SaaS Hero](https://designmd.app/library/datacore-saas-hero)[![Wealth Video Hero](https://designmd.app/images/library/349.png) Futurista & Tech ### Wealth Video Hero](https://designmd.app/library/wealth-video-hero)[![AI Automation Hero](https://designmd.app/images/library/359.png) Futurista & Tech ### AI Automation Hero](https://designmd.app/library/ai-automation-hero)[![New Era Automotive Hero](https://designmd.app/images/library/357.png) Temas & Verticais ### New Era Automotive Hero](https://designmd.app/library/new-era-automotive-hero)

Last synced: 4/1/2026
