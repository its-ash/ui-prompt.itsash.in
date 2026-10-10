# Estilo Suíço Artístico

- Source: <https://designmd.app/library/estilo-suico-artistico>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:02:50.331Z

Minimalismo & Swiss2026+ Arte e Design

# Estilo Suíço Artístico

Design an artistic and clean Swiss Style landing page for a modern art gallery. Ideal for landing pages, modern websites. AI-ready template.

art gallerymodern artcontemporaryartisticcleanstructuredminimalistelegantvisualcurated

Use case: Landing pages, Modern websites

![Estilo Suíço Artístico](https://designmd.app/images/library/207.png)

## Historical Context

The white cube didn't happen by accident. Brian O'Doherty wrote about it in 1976 — that sealed, pristine gallery space where walls disappear and art floats in controlled nothingness. Swiss design had been doing the same thing on paper since the 1950s. Müller-Brockmann, Ruder, the whole Zurich school: they understood that negative space isn't empty. It's structural. It holds tension. Translating this to the web means accepting a radical premise — the interface should vanish. No chrome competing with the work. No decorative flourishes announcing themselves. Just typography doing its job, generous whitespace creating breathing room, and content given the dignity of silence around it. The gallery wall becomes the viewport. The frame becomes the grid. This is harder than it looks. Restraint requires confidence. Every pixel you don't place is a decision. The Swiss approach to art platforms isn't about doing less out of laziness — it's about doing less because you trust the work to carry itself. The design becomes invisible precisely so the art becomes unavoidable.

## When to Use

When the content is the product. Art galleries, museum collections, contemporary art platforms, photography portfolios where the work needs zero competition from the interface. Also strong for auction houses, artist residency programs, and cultural institutions that want gravitas without pretension. Skip this if your client needs warmth, playfulness, or heavy e-commerce conversion patterns — Swiss minimalism rewards contemplation, not impulse.

## Design Principles

- Negative space as primary compositional element — margins aren't padding, they're architecture
- Typographic hierarchy through weight and size alone, never decoration. One sans-serif family, deployed with surgical precision
- Grid as religion: strict columns, mathematical spacing, alignment that you feel before you see
- Monochrome or near-monochrome palette — color enters only through the artwork itself, never the UI
- Transitions measured in 300-400ms with linear or cubic-bezier easing — movement should feel like a gallery door opening, not a curtain dropping

## DESIGN.md

```
---
version: "alpha"
name: "Estilo Suíço Artístico"
description: "Design an artistic and clean Swiss Style landing page for a modern art gallery. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#FFFFFF"
secondary: "#000000"
tertiary: "#333333"
neutral: "#E0E0E0"
surface: "#800020"
accent: "#008080"
typography:
h1:
fontFamily: Avenir
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Avenir
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an artistic and clean Swiss Style landing page for a modern art gallery. Ideal for landing pages, modern websites. AI-ready template. The white cube didn't happen by accident. Brian O'Doherty wrote about it in 1976 — that sealed, pristine gallery space where walls disappear and art floats in controlled nothingness. Swiss design had been doing the same thing on paper since the 1950s. Müller-Brockmann, Ruder, the whole Zurich school: they understood that negative space isn't empty. It's structural. It holds tension.

Translating this to the web means accepting a radical premise — the interface should vanish. No chrome competing with the work. No decorative flourishes announcing themselves. Just typography doing its job, generous whitespace creating breathing room, and content given the dignity of silence around it. The gallery wall becomes the viewport. The frame becomes the grid.

This is harder than it looks. Restraint requires confidence. Every pixel you don't place is a decision. The Swiss approach to art platforms isn't about doing less out of laziness — it's about doing less because you trust the work to carry itself. The design becomes invisible precisely so the art becomes unavoidable.

- Density: 3/10 — Airy
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Artistic, Clean, Structured
- **Keywords:** art gallery, modern art, contemporary, artistic, clean, structured, minimalist, elegant, visual, curated
- **Era:** 2026+ Arte e Design
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto** (#000000) — Dark surface, primary background
- **Cinza Escuro** (#333333) — Dark surface, primary background
- **Cinza Claro** (#E0E0E0) — Secondary text, borders, muted elements
- **Vermelho Borgonha** (#800020) — Error states, destructive actions
- **Azul Petróleo** (#008080) — Secondary accent
- **Verde Oliva** (#6B8E23) — Success states, positive indicators
- **Amarelo Ocre** (#CC7722) — Warning states, attention indicators

## Typography

- **Display / Hero:** Avenir — Weight 700, tight tracking, used for headline impact
- **Body:** Avenir — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Avenir — 0.875rem, weight 500, slight letter-spacing
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

Layouts de grid que destacam obras de arte, tipografia sans-serif limpa e discreta, imagens de arte em alta resolução com foco na composição, uso de espaço em branco para emoldurar o conteúdo, micro-interações de hover com informações da obra, transições de galeria suaves e focadas.

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
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Layouts de grid para arte
- Do Tipografia sans-serif discreta
- Do Imagens de arte em alta resolução
- Do Espaço em branco para emoldurar
- Do Micro-interações de informações da obra
- Do Transições de galeria suaves.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/estilo-suico-artistico/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #000000, border-left: 1px solid #C0C0C0, font-family: "Avenir, sans-serif", letter-spacing: 0.02em, transition: all 0.3s ease-in-out, .art-grid, .artwork-info-overlay, .gallery-nav.
```

### Variables

```
--white-bg: #FFFFFF, --black-text: #000000, --dark-grey-text: #333333, --light-grey-border: #E0E0E0, --font-main: "Avenir, sans-serif", --letter-spacing-tight: 0.02em, --grid-padding: 30px.
```

### Checklist

☐ Layouts de grid para arte, ☐ Tipografia sans-serif discreta, ☐ Imagens de arte em alta resolução, ☐ Espaço em branco para emoldurar, ☐ Micro-interações de informações da obra, ☐ Transições de galeria suaves.

## Colors

Primary

#FFFFFF

#000000

#333333

#E0E0E0

Secondary

#800020

#008080

#6B8E23

#CC7722

### Effects

Layouts de grid que destacam obras de arte, tipografia sans-serif limpa e discreta, imagens de arte em alta resolução com foco na composição, uso de espaço em branco para emoldurar o conteúdo, micro-interações de hover com informações da obra, transições de galeria suaves e focadas.

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

- **Name:** Estilo Suíço Artístico
- **Type:** Artistic, Clean, Structured
- **Keywords:** art gallery, modern art, contemporary, artistic, clean, structured, minimalist, elegant, visual, curated
- **Era:** 2026+ Arte e Design
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Branco #FFFFFF, Preto #000000, Cinza Escuro #333333, Cinza Claro #E0E0E0
- **Secondary:** Vermelho Borgonha #800020, Azul Petróleo #008080, Verde Oliva #6B8E23, Amarelo Ocre #CC7722

## Visual Effects

Layouts de grid que destacam obras de arte, tipografia sans-serif limpa e discreta, imagens de arte em alta resolução com foco na composição, uso de espaço em branco para emoldurar o conteúdo, micro-interações de hover com informações da obra, transições de galeria suaves e focadas.

## AI Visual Direction

Design an artistic and clean Swiss Style landing page for a modern art gallery. Use: grid layouts highlighting artworks, clean discreet sans-serif typography, high-resolution art images focusing on composition, white space framing content, artwork info hover micro-interactions, smooth focused gallery transitions, minimalist and elegant feel.

## CSS Technical

```css
background: #FFFFFF, color: #000000, border-left: 1px solid #C0C0C0, font-family: "Avenir, sans-serif", letter-spacing: 0.02em, transition: all 0.3s ease-in-out, .art-grid, .artwork-info-overlay, .gallery-nav.
```

## Design System Variables

```css
--white-bg: #FFFFFF, --black-text: #000000, --dark-grey-text: #333333, --light-grey-border: #E0E0E0, --font-main: "Avenir, sans-serif", --letter-spacing-tight: 0.02em, --grid-padding: 30px.
```

## Implementation Checklist

- ☐ Layouts de grid para arte
- ☐ Tipografia sans-serif discreta
- ☐ Imagens de arte em alta resolução
- ☐ Espaço em branco para emoldurar
- ☐ Micro-interações de informações da obra
- ☐ Transições de galeria suaves.

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

[![Estilo Suíço Científico](https://designmd.app/images/library/206.png) Minimalismo & Swiss ### Estilo Suíço Científico](https://designmd.app/library/estilo-suico-cientifico)[![Estilo Suíço Corporativo](https://designmd.app/images/library/204.png) Minimalismo & Swiss ### Estilo Suíço Corporativo](https://designmd.app/library/estilo-suico-corporativo)[![Estilo Suíço Premium](https://designmd.app/images/library/205.png) Minimalismo & Swiss ### Estilo Suíço Premium](https://designmd.app/library/estilo-suico-premium)[![Estilo Suíço Educacional](https://designmd.app/images/library/208.png) Minimalismo & Swiss ### Estilo Suíço Educacional](https://designmd.app/library/estilo-suico-educacional)[![Minimalismo Fotográfico Elegante](https://designmd.app/images/library/190.png) Minimalismo & Swiss ### Minimalismo Fotográfico Elegante](https://designmd.app/library/minimalismo-fotografico-elegante)

Last synced: 4/1/2026
