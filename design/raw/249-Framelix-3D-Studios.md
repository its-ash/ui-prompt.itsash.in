# Framelix 3D Studios

- Source: <https://designmd.app/library/framelix-3d-studios>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:07:12.304Z

Arte & Ilustracao2024-2026 Creative Studio

# Framelix 3D Studios

Cinematic 3D studio page with pure black background. Ideal for estúdios 3d, agências de motion design, produtoras de vídeo, portfólios de animação. AI-ready template.

3Dcinematicmotion studiomarquee bannermúltiplos vídeosFramer MotionInter fontpreto purolavanda acentoticket iconseções com vídeo

Use case: Studios 3D, Agencies de motion design, Produtoras de vídeo, Portfolios de animação

![Framelix 3D Studios](https://designmd.app/images/library/362.png)

## Historical Context

The dark, cinematic aesthetic in digital design didn't emerge from web trends — it came from film titles and VFX pipelines. Saul Bass understood contrast. Kyle Cooper made Se7en's opening a cultural reset. When 3D studios started building their own websites in the early 2000s, they brought that same sensibility: deep blacks, controlled light, typography that breathes in negative space. The portfolio wasn't just showing work — it was the work. What we're seeing now is the maturation of that lineage. Studios like Framelix operate in a space where the website IS a reel. Every scroll is a camera move. Every transition is a render. The dark canvas isn't decorative — it's functional. It eliminates distraction so dimensional work can exist with the same fidelity it had in the viewport. This is design that respects the craft it represents, refusing to flatten cinematic work into a generic SaaS grid.

## When to Use

When your work lives in 3D space and your site needs to honor that dimensionality. Ideal for motion studios, VFX houses, and creative production companies where the portfolio IS the product. Use this when clients expect to feel the work before they brief it — when your competitive advantage is craft, not copy. Not appropriate for studios that need heavy text content or complex service taxonomies. This is a showcase system, not an information architecture.

## Design Principles

- Black canvas as lighting rig — the background isn't empty, it's a deliberate absence that makes dimensional work pop forward with correct perceived luminance
- Motion as navigation language — transitions aren't decorative, they communicate spatial relationships between projects the same way a camera move establishes geography in film
- Typography at cinematic scale — headlines sized for impact, body text minimal and precise, treating the screen like a title sequence where every word earns its frame
- Depth through restraint — resist the temptation to over-animate or over-light; the best 3D portfolios let one hero element command attention while everything else recedes
- Loading as performance — treat asset loading and reveal sequences as choreographed moments, not technical debt; the wait is part of the experience when handled with intention

## DESIGN.md

```
---
version: "alpha"
name: "Framelix 3D Studios"
description: "Cinematic 3D studio page with pure black background. Ideal for estúdios 3d, agências de motion design, produtoras de vídeo, portfólios de animação. AI-ready template."
colors:
primary: "#000000"
secondary: "#FFFFFF"
tertiary: "#A6A4FF"
neutral: "#EAEAEA"
surface: "#000000"
accent: "#6B7280"
typography:
h1:
fontFamily: Inter
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Inter
fontSize: 1rem
fontWeight: 400
spacing:
sm: 60.0px
md: 120.0px
lg: 240.0px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Cinematic 3D studio page with pure black background. Ideal for estúdios 3d, agências de motion design, produtoras de vídeo, portfólios de animação. AI-ready template. The dark, cinematic aesthetic in digital design didn't emerge from web trends — it came from film titles and VFX pipelines. Saul Bass understood contrast. Kyle Cooper made Se7en's opening a cultural reset. When 3D studios started building their own websites in the early 2000s, they brought that same sensibility: deep blacks, controlled light, typography that breathes in negative space. The portfolio wasn't just showing work — it was the work.

What we're seeing now is the maturation of that lineage. Studios like Framelix operate in a space where the website IS a reel. Every scroll is a camera move. Every transition is a render. The dark canvas isn't decorative — it's functional. It eliminates distraction so dimensional work can exist with the same fidelity it had in the viewport. This is design that respects the craft it represents, refusing to flatten cinematic work into a generic SaaS grid.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Creative, 3D, Cinematic, Marquee Banner, Multi-Video Sections
- **Keywords:** 3D, cinematic, motion studio, marquee banner, múltiplos vídeos, Framer Motion, Inter font, preto puro, lavanda acento, ticket icon, seções com vídeo
- **Era:** 2024-2026 Creative Studio
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Preto Puro** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Lavanda Acento** (#A6A4FF) — Supporting palette color
- **Cinza Claro** (#EAEAEA) — Secondary text, borders, muted elements
- **Preto Texto** (#000000) — Deep contrast surface
- **Cinza Muted** (#6B7280) — Secondary text, borders, muted elements
- **Preto Botão** (#000000) — Deep contrast surface
- **Branco Muted** (rgba(255,255,255,0.6)) — Secondary surface

## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
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

VÍDEO: Dois vídeos distintos: (1) Hero: showreel cinematográfico de motion design 3D com cenas de animações, renders e efeitos visuais em alta qualidade sobre fundo preto. Full-width (w-full h-auto object-cover) com overlays de texto animados via Framer Motion. (2) Shipping: demonstração de produto 3D em formato quadrado (800x800px), mostrando um objeto ou cena 3D rotacionando ou em animação, sobre fundo cinza claro (#EAEAEA) com cantos arredondados. | EFEITOS CSS: Múltiplas seções com vídeos (hero full-width + shipping 800x800px), marquee banner infinito CSS translateX 20s linear infinite em fundo lavanda #A6A4FF com texto preto, navbar 3 colunas de links empilhados e ícone ticket SVG, hero com vídeo full-width e overlays de texto absolutos animados com Framer Motion fade+slide, seção shipping fundo cinza #EAEAEA cantos arredondados inferiores 40px, Inter font com brightness-0 invert no logo

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Fundo preto com múltiplos vídeos
- Do Hero vídeo full-width overlays animados
- Do Marquee banner lavanda infinito
- Do Navbar 3 colunas + ticket SVG
- Do Seção shipping cinza cantos 40px
- Do Vídeo 800x800 shipping
- Do Framer Motion fade+slide
- Do Inter font logo invertido
- Do Responsivo

## Use Case

Studios 3D, Agencies de motion design, Produtoras de vídeo, Portfolios de animação
```

[Download DESIGN.md](https://designmd.app/library/framelix-3d-studios/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Inter', background: #000000 / #EAEAEA, video: w-full h-auto object-cover, animation: marquee translateX(0) to translateX(-50%) 20s linear infinite, border-radius: 0 0 40px 40px, Framer Motion: fade+slide 0.8s, filter: brightness(0) invert(1), gap: 60px marquee
```

### Variables

```
--bg-hero: #000000, --bg-shipping: #EAEAEA, --color-lavender: #A6A4FF, --text-primary: #FFFFFF, --text-dark: #000000, --font-primary: 'Inter', --marquee-speed: 20s, --shipping-radius: 40px, --video-size: 800px
```

### Checklist

☐ Fundo preto com múltiplos vídeos, ☐ Hero vídeo full-width overlays animados, ☐ Marquee banner lavanda infinito, ☐ Navbar 3 colunas + ticket SVG, ☐ Seção shipping cinza cantos 40px, ☐ Vídeo 800x800 shipping, ☐ Framer Motion fade+slide, ☐ Inter font logo invertido, ☐ Responsivo

## Colors

Primary

#000000

#FFFFFF

#A6A4FF

#EAEAEA

Secondary

#000000

#6B7280

### Effects

VÍDEO: Dois vídeos distintos: (1) Hero: showreel cinematográfico de motion design 3D com cenas de animações, renders e efeitos visuais em alta qualidade sobre fundo preto. Full-width (w-full h-auto object-cover) com overlays de texto animados via Framer Motion. (2) Shipping: demonstração de produto 3D em formato quadrado (800x800px), mostrando um objeto ou cena 3D rotacionando ou em animação, sobre fundo cinza claro (#EAEAEA) com cantos arredondados. | EFEITOS CSS: Múltiplas seções com vídeos (hero full-width + shipping 800x800px), marquee banner infinito CSS translateX 20s linear infinite em fundo lavanda #A6A4FF com texto preto, navbar 3 colunas de links empilhados e ícone ticket SVG, hero com vídeo full-width e overlays de texto absolutos animados com Framer Motion fade+slide, seção shipping fundo cinza #EAEAEA cantos arredondados inferiores 40px, Inter font com brightness-0 invert no logo

### Light/Dark

✓ Full / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Framelix 3D Studios
- **Type:** Creative, 3D, Cinematic, Marquee Banner, Multi-Video Sections
- **Keywords:** 3D, cinematic, motion studio, marquee banner, múltiplos vídeos, Framer Motion, Inter font, preto puro, lavanda acento, ticket icon, seções com vídeo
- **Era:** 2024-2026 Creative Studio
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Preto Puro #000000, Branco #FFFFFF, Lavanda Acento #A6A4FF, Cinza Claro #EAEAEA
- **Secondary:** Preto Texto #000000, Branco Muted rgba(255,255,255,0.6), Cinza Muted #6B7280, Preto Botão #000000

## Visual Effects

VÍDEO: Dois vídeos distintos: (1) Hero: showreel cinematográfico de motion design 3D com cenas de animações, renders e efeitos visuais em alta qualidade sobre fundo preto. Full-width (w-full h-auto object-cover) com overlays de texto animados via Framer Motion. (2) Shipping: demonstração de produto 3D em formato quadrado (800x800px), mostrando um objeto ou cena 3D rotacionando ou em animação, sobre fundo cinza claro (#EAEAEA) com cantos arredondados. | EFEITOS CSS: Múltiplas seções com vídeos (hero full-width + shipping 800x800px), marquee banner infinito CSS translateX 20s linear infinite em fundo lavanda #A6A4FF com texto preto, navbar 3 colunas de links empilhados e ícone ticket SVG, hero com vídeo full-width e overlays de texto absolutos animados com Framer Motion fade+slide, seção shipping fundo cinza #EAEAEA cantos arredondados inferiores 40px, Inter font com brightness-0 invert no logo

## AI Visual Direction

Design a cinematic 3D studio page with pure black background. Multiple video sections: hero full-width with absolute text overlays animated Framer Motion. Marquee banner lavender #A6A4FF, black text, infinite CSS translateX 20s. Navbar 3 columns stacked links and ticket SVG icon. Shipping section light grey #EAEAEA, rounded bottom corners 40px, centered 800x800 video. Inter font. Buy Now and Explore buttons.

## CSS Technical

```css
font-family: 'Inter', background: #000000 / #EAEAEA, video: w-full h-auto object-cover, animation: marquee translateX(0) to translateX(-50%) 20s linear infinite, border-radius: 0 0 40px 40px, Framer Motion: fade+slide 0.8s, filter: brightness(0) invert(1), gap: 60px marquee
```

## Design System Variables

```css
--bg-hero: #000000, --bg-shipping: #EAEAEA, --color-lavender: #A6A4FF, --text-primary: #FFFFFF, --text-dark: #000000, --font-primary: 'Inter', --marquee-speed: 20s, --shipping-radius: 40px, --video-size: 800px
```

## Implementation Checklist

- ☐ Fundo preto com múltiplos vídeos
- ☐ Hero vídeo full-width overlays animados
- ☐ Marquee banner lavanda infinito
- ☐ Navbar 3 colunas + ticket SVG
- ☐ Seção shipping cinza cantos 40px
- ☐ Vídeo 800x800 shipping
- ☐ Framer Motion fade+slide
- ☐ Inter font logo invertido
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

[![Bold Portfolio Hero](https://designmd.app/images/library/355.png) Arte & Ilustracao ### Bold Portfolio Hero](https://designmd.app/library/bold-portfolio-hero)[![Logoisum Video Agency Hero](https://designmd.app/images/library/363.png) Arte & Ilustracao ### Logoisum Video Agency Hero](https://designmd.app/library/logoisum-video-agency-hero)[![New Era Bold Hero](https://designmd.app/images/library/350.png) Editorial & Tipografia ### New Era Bold Hero](https://designmd.app/library/new-era-bold-hero)[![Dark Portfolio Hero](https://designmd.app/images/library/364.png) Arte & Ilustracao ### Dark Portfolio Hero](https://designmd.app/library/dark-portfolio-hero)[![Glassmorphism Agency Hero](https://designmd.app/images/library/354.png) Futurista & Tech ### Glassmorphism Agency Hero](https://designmd.app/library/glassmorphism-agency-hero)

Last synced: 4/1/2026
