# Construtivismo Arquitetônico

- Source: <https://designmd.app/library/construtivismo-arquitetonico>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:02:37.304Z

Arte & Ilustracao2026+ Design Urbano

# Construtivismo Arquitetônico

Precise and structured constructivist landing page for a modern architecture firm. Ideal for landing pages, modern websites. AI-ready template.

architecturemoderninnovativeprecisestructuredgeometricfunctionalcleanprofessionaldynamic

Use case: Landing pages, Modern websites

![Construtivismo Arquitetônico](https://designmd.app/images/library/200.png)

## Historical Context

Tatlin's Monument to the Third International never got built. That's almost the point. The 1920 proposal — a leaning double helix of iron and glass, taller than the Eiffel Tower — was pure structural ambition rendered visible. No ornament. No apology. The skeleton was the building. Russian Constructivism treated architecture as ideology made physical. Rodchenko's graphics, Melnikov's workers' clubs, the Vesnin brothers' competition entries — they shared a conviction that form should expose its own logic. Diagonal tension. Asymmetric balance. Materials doing exactly what materials do, nothing more. This translates to digital design more directly than most historical movements. When you strip a UI to its structural bones — visible grid lines, exposed hierarchy, type that announces its own weight — you're working in the same territory. The Constructivists didn't decorate structure. They made structure the entire visual argument. That honesty hits different in an era of gratuitous blur and floating cards.

## When to Use

Reach for this when the project demands intellectual weight. Architecture firms presenting monolithic concrete. Urban planning dashboards where data density is a feature, not a problem. Construction companies that want to look like they actually build things. Design studios tired of the same rounded-corner softness. It works when your client's work involves real materials, real forces, real engineering — and the visual language should reflect that seriousness without becoming cold.

## Design Principles

- Expose the grid. Let structural lines remain visible — they're not scaffolding to hide, they're the composition itself.
- Diagonal tension over static symmetry. Angled elements create movement and ideological urgency that centered layouts cannot.
- Material honesty in color. Raw concrete grays, iron oxide reds, industrial black. No gradients pretending to be something they're not.
- Typography as architecture. Bold geometric sans-serifs at extreme scale become load-bearing elements, not decoration.
- Functional asymmetry. Weight distributed unevenly but deliberately — every element earns its position through visual counterbalance.

## DESIGN.md

```
---
version: "alpha"
name: "Construtivismo Arquitetônico"
description: "Precise and structured constructivist landing page for a modern architecture firm. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#607D8B"
secondary: "#FFFFFF"
tertiary: "#212121"
neutral: "#263238"
surface: "#FF5722"
accent: "#4CAF50"
typography:
h1:
fontFamily: Montserrat
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Montserrat
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Precise and structured constructivist landing page for a modern architecture firm. Ideal for landing pages, modern websites. AI-ready template. Tatlin's Monument to the Third International never got built. That's almost the point. The 1920 proposal — a leaning double helix of iron and glass, taller than the Eiffel Tower — was pure structural ambition rendered visible. No ornament. No apology. The skeleton was the building.

Russian Constructivism treated architecture as ideology made physical. Rodchenko's graphics, Melnikov's workers' clubs, the Vesnin brothers' competition entries — they shared a conviction that form should expose its own logic. Diagonal tension. Asymmetric balance. Materials doing exactly what materials do, nothing more.

This translates to digital design more directly than most historical movements. When you strip a UI to its structural bones — visible grid lines, exposed hierarchy, type that announces its own weight — you're working in the same territory. The Constructivists didn't decorate structure. They made structure the entire visual argument. That honesty hits different in an era of gratuitous blur and floating cards.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Precise, Structured, Modern
- **Keywords:** architecture, modern, innovative, precise, structured, geometric, functional, clean, professional, dynamic
- **Era:** 2026+ Design Urbano
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Cinza Concreto** (#607D8B) — Secondary text, borders, muted elements
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Preto** (#212121) — Dark surface, primary background
- **Azul Escuro** (#263238) — Dark surface, primary background
- **Laranja Queimado** (#FF5722) — Warm accent, call-to-action secondary
- **Verde Floresta** (#4CAF50) — Success states, positive indicators
- **Amarelo Ouro** (#FFC107) — Warning states, attention indicators
- **Cinza Claro** (#B0BEC5) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Montserrat — Weight 700, tight tracking, used for headline impact
- **Body:** Montserrat — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Montserrat — 0.875rem, weight 500, slight letter-spacing
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

Grids complexos e sobrepostos, formas geométricas que guiam o olhar, tipografia sans-serif limpa e técnica, fotografias de arquitetura com ângulos dramáticos, micro-interações de hover com expansão de elementos, transições de seção com efeito de "construção".

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

- Do Grids complexos/sobrepostos
- Do Formas geométricas
- Do Tipografia sans-serif técnica
- Do Fotos de arquitetura
- Do Micro-interações de expansão
- Do Transições de "construção".

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/construtivismo-arquitetonico/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #212121, border-left: 5px solid #FF5722, transform: skewY(3deg), font-family: "Montserrat, sans-serif", transition: all 0.4s ease-in-out, .geometric-grid, .architecture-photo, .building-transition.
```

### Variables

```
--concrete-grey: #607D8B, --white-bg: #FFFFFF, --dark-text: #212121, --dark-blue: #263238, --accent-orange: #FF5722, --border-accent: 5px solid #FF5722, --font-main: "Montserrat, sans-serif", --skew-angle: 3deg.
```

### Checklist

☐ Grids complexos/sobrepostos, ☐ Formas geométricas, ☐ Tipografia sans-serif técnica, ☐ Fotos de arquitetura, ☐ Micro-interações de expansão, ☐ Transições de "construção".

## Colors

Primary

#607D8B

#FFFFFF

#212121

#263238

Secondary

#FF5722

#4CAF50

#FFC107

#B0BEC5

### Effects

Grids complexos e sobrepostos, formas geométricas que guiam o olhar, tipografia sans-serif limpa e técnica, fotografias de arquitetura com ângulos dramáticos, micro-interações de hover com expansão de elementos, transições de seção com efeito de "construção".

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

- **Name:** Construtivismo Arquitetônico
- **Type:** Precise, Structured, Modern
- **Keywords:** architecture, modern, innovative, precise, structured, geometric, functional, clean, professional, dynamic
- **Era:** 2026+ Design Urbano
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Cinza Concreto #607D8B, Branco #FFFFFF, Preto #212121, Azul Escuro #263238
- **Secondary:** Laranja Queimado #FF5722, Verde Floresta #4CAF50, Amarelo Ouro #FFC107, Cinza Claro #B0BEC5

## Visual Effects

Grids complexos e sobrepostos, formas geométricas que guiam o olhar, tipografia sans-serif limpa e técnica, fotografias de arquitetura com ângulos dramáticos, micro-interações de hover com expansão de elementos, transições de seção com efeito de "construção".

## AI Visual Direction

Design a precise and structured constructivist landing page for a modern architecture firm. Use: complex overlapping grids, geometric shapes guiding the eye, clean technical sans-serif typography, dramatic architectural photography, element expansion hover micro-interactions, section transition animations with a "building" effect, concrete grey and dark blue accents, professional and dynamic feel.

## CSS Technical

```css
background: #FFFFFF, color: #212121, border-left: 5px solid #FF5722, transform: skewY(3deg), font-family: "Montserrat, sans-serif", transition: all 0.4s ease-in-out, .geometric-grid, .architecture-photo, .building-transition.
```

## Design System Variables

```css
--concrete-grey: #607D8B, --white-bg: #FFFFFF, --dark-text: #212121, --dark-blue: #263238, --accent-orange: #FF5722, --border-accent: 5px solid #FF5722, --font-main: "Montserrat, sans-serif", --skew-angle: 3deg.
```

## Implementation Checklist

- ☐ Grids complexos/sobrepostos
- ☐ Formas geométricas
- ☐ Tipografia sans-serif técnica
- ☐ Fotos de arquitetura
- ☐ Micro-interações de expansão
- ☐ Transições de "construção".

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

[![Construtivismo Dinâmico Tech](https://designmd.app/images/library/199.png) Arte & Ilustracao ### Construtivismo Dinâmico Tech](https://designmd.app/library/construtivismo-dinamico-tech)[![Construtivismo de Dados Dinâmicos](https://designmd.app/images/library/201.png) Arte & Ilustracao ### Construtivismo de Dados Dinâmicos](https://designmd.app/library/construtivismo-de-dados-dinamicos)[![Construtivismo de Eventos Dinâmicos](https://designmd.app/images/library/202.png) Arte & Ilustracao ### Construtivismo de Eventos Dinâmicos](https://designmd.app/library/construtivismo-de-eventos-dinamicos)[![Construtivismo Literário Experimental](https://designmd.app/images/library/203.png) Arte & Ilustracao ### Construtivismo Literário Experimental](https://designmd.app/library/construtivismo-literario-experimental)[![Bossa Nova Lounge](https://designmd.app/images/library/240.png) Brasil ### Bossa Nova Lounge](https://designmd.app/library/bossa-nova-lounge)

Last synced: 4/1/2026
