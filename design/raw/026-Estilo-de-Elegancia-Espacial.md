# Estilo de Elegância Espacial

- Source: <https://designmd.app/library/estilo-de-elegancia-espacial>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:58:46.309Z

Futurista & Tech2026+ Spatial Computing

# Estilo de Elegância Espacial

Minimalist premium landing page for a spatial computing device. Ideal for landing pages, modern websites. AI-ready template.

spatial computingeleganceinnovationseamlessintuitivepremiumminimalistfuturisticimmersivesleek

Use case: Landing pages, Modern websites

![Estilo de Elegância Espacial](https://designmd.app/images/library/121.png)

## Historical Context

Spatial computing didn't invent depth. But it forced us to reckon with it. Before Apple Vision Pro shipped in early 2024, most "3D interfaces" were glorified parallax tricks — flat layers stacked with drop shadows pretending to occupy space. Vision Pro changed the conversation. Suddenly glass wasn't a metaphor. It was a material system: specular highlights responding to real light, surfaces refracting the world behind them, elements floating at actual distances from your eyes. The design language that emerged owes more to architecture than graphic design. Elegance in 3D space is a fundamentally different problem than elegance on a screen. In 2D, you control every pixel. In spatial UI, the environment talks back. Your glass panel picks up the color of whatever room the user sits in. Your typography casts subtle shadows that shift with head movement. Restraint becomes structural — not just aesthetic. You can't hide behind a grid when your interface literally surrounds someone. The material system that defines this era — glass, depth, light — isn't decorative. It's functional. Glass communicates hierarchy through opacity. Depth separates actions from content. Light provides orientation. These aren't style choices. They're the physics of a new medium.

## When to Use

Reach for this when you're designing interfaces that exist in space — not on a rectangle. XR and VR products where users physically inhabit the UI. Spatial apps that need to feel premium without feeling heavy. Innovation labs prototyping the next interaction paradigm. Also works beautifully for 2D products that want to signal forward-thinking tech credibility: AI dashboards, developer tools, anything where "we live in the future" is part of the brand promise. Skip it for anything warm, human, or approachable — this system is deliberately cool and precise.

## Design Principles

- Glass as hierarchy — opacity and blur encode importance, not decoration. Background panels recede; active surfaces clarify.
- Depth is information — z-axis position communicates relationship. Close means urgent. Far means ambient. Never arbitrary.
- Light responds, never performs — specular highlights and subtle reflections ground elements in space. No gratuitous glow.
- Restraint at every layer — spatial interfaces amplify visual noise exponentially. Every element earns its presence or gets cut.
- Motion proves physics — transitions follow spatial logic. Elements don't fade; they approach, recede, settle. Movement confirms the world is real.

## DESIGN.md

```
---
version: "alpha"
name: "Estilo de Elegância Espacial"
description: "Minimalist premium landing page for a spatial computing device. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#1C1C1E"
secondary: "#E0E0E0"
tertiary: "#FFFFFF"
neutral: "#000080"
surface: "#F0EAD6"
accent: "#E8C3BA"
typography:
h1:
fontFamily: "-apple-system"
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: "-apple-system"
fontSize: 1rem
fontWeight: 400
rounded:
sm: 12px
md: 24px
lg: 36px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Minimalist premium landing page for a spatial computing device. Ideal for landing pages, modern websites. AI-ready template. Spatial computing didn't invent depth. But it forced us to reckon with it. Before Apple Vision Pro shipped in early 2024, most "3D interfaces" were glorified parallax tricks — flat layers stacked with drop shadows pretending to occupy space. Vision Pro changed the conversation. Suddenly glass wasn't a metaphor. It was a material system: specular highlights responding to real light, surfaces refracting the world behind them, elements floating at actual distances from your eyes. The design language that emerged owes more to architecture than graphic design.

Elegance in 3D space is a fundamentally different problem than elegance on a screen. In 2D, you control every pixel. In spatial UI, the environment talks back. Your glass panel picks up the color of whatever room the user sits in. Your typography casts subtle shadows that shift with head movement. Restraint becomes structural — not just aesthetic. You can't hide behind a grid when your interface literally surrounds someone.

The material system that defines this era — glass, depth, light — isn't decorative. It's functional. Glass communicates hierarchy through opacity. Depth separates actions from content. Light provides orientation. These aren't style choices. They're the physics of a new medium.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Minimalist, Premium, Futuristic
- **Keywords:** spatial computing, elegance, innovation, seamless, intuitive, premium, minimalist, futuristic, immersive, sleek
- **Era:** 2026+ Spatial Computing
- **Light/Dark:** ✓ Full / ✗ No (com elementos adaptáveis)

## Colors

- **Cinza Espacial** (#1C1C1E) — Secondary text, borders, muted elements
- **Prata** (#E0E0E0) — Secondary surface or text color
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Azul Meia-Noite** (#000080) — Accent highlight, links and focus states
- **Luz Estelar** (#F0EAD6) — Extended palette, decorative use
- **Areia Rosa** (#E8C3BA) — Decorative accent, highlight elements
- **Roxo Profundo** (#581845) — Primary background surface
- **Vermelho Produto** (#FF3B30) — Error states, destructive actions

## Typography

- **Display / Hero:** -apple-system — Weight 700, tight tracking, used for headline impact
- **Body:** -apple-system — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** -apple-system — 0.875rem, weight 500, slight letter-spacing
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

Vidro fosco (frosted glass), paralaxe suave, micro-interações táteis, tipografia limpa e espaçada, elementos flutuantes, transições fluidas, profundidade sutil, foco na experiência do usuário.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (12px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (12px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Efeito de vidro fosco
- Do Paralaxe suave
- Do Tipografia limpa
- Do Elementos flutuantes
- Do Transições fluidas
- Do Foco na experiência imersiva.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/estilo-de-elegancia-espacial/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: linear-gradient(135deg, #1C1C1E, #000000), color: #E0E0E0, backdrop-filter: blur(20px) saturate(1.5), -webkit-backdrop-filter: blur(20px) saturate(1.5), transform: translateZ(0), font-family: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif", transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), border-radius: 12px, box-shadow: 0 10px 30px rgba(0,0,0,0.3).
```

### Variables

```
--space-grey: #1C1C1E, --silver: #E0E0E0, --white: #FFFFFF, --midnight-blue: #000080, --frosted-blur: 20px, --border-radius-lg: 12px, --font-system-sans: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif".
```

### Checklist

☐ Efeito de vidro fosco, ☐ Paralaxe suave, ☐ Tipografia limpa, ☐ Elementos flutuantes, ☐ Transições fluidas, ☐ Foco na experiência imersiva.

## Colors

Primary

#1C1C1E

#E0E0E0

#FFFFFF

#000080

Secondary

#F0EAD6

#E8C3BA

#581845

#FF3B30

### Effects

Vidro fosco (frosted glass), paralaxe suave, micro-interações táteis, tipografia limpa e espaçada, elementos flutuantes, transições fluidas, profundidade sutil, foco na experiência do usuário.

### Light/Dark

✓ Full / ✗ No (com elementos adaptáveis)

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Estilo de Elegância Espacial
- **Type:** Minimalist, Premium, Futuristic
- **Keywords:** spatial computing, elegance, innovation, seamless, intuitive, premium, minimalist, futuristic, immersive, sleek
- **Era:** 2026+ Spatial Computing
- **Light/Dark:** ✓ Full / ✗ No (com elementos adaptáveis)

## Color Palette

- **Primary:** Cinza Espacial #1C1C1E, Prata #E0E0E0, Branco #FFFFFF, Azul Meia-Noite #000080
- **Secondary:** Luz Estelar #F0EAD6, Areia Rosa #E8C3BA, Roxo Profundo #581845, Vermelho Produto #FF3B30

## Visual Effects

Vidro fosco (frosted glass), paralaxe suave, micro-interações táteis, tipografia limpa e espaçada, elementos flutuantes, transições fluidas, profundidade sutil, foco na experiência do usuário.

## AI Visual Direction

Design a minimalist premium landing page for a spatial computing device. Use: frosted glass effects, space grey and silver palette, seamless parallax, clean typography, floating elements, fluid transitions, subtle depth, intuitive user experience, futuristic and elegant feel.

## CSS Technical

```css
background: linear-gradient(135deg, #1C1C1E, #000000), color: #E0E0E0, backdrop-filter: blur(20px) saturate(1.5), -webkit-backdrop-filter: blur(20px) saturate(1.5), transform: translateZ(0), font-family: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif", transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), border-radius: 12px, box-shadow: 0 10px 30px rgba(0,0,0,0.3).
```

## Design System Variables

```css
--space-grey: #1C1C1E, --silver: #E0E0E0, --white: #FFFFFF, --midnight-blue: #000080, --frosted-blur: 20px, --border-radius-lg: 12px, --font-system-sans: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif".
```

## Implementation Checklist

- ☐ Efeito de vidro fosco
- ☐ Paralaxe suave
- ☐ Tipografia limpa
- ☐ Elementos flutuantes
- ☐ Transições fluidas
- ☐ Foco na experiência imersiva.

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

[![Estilo de Inovação em Dispositivos Móveis](https://designmd.app/images/library/131.png) Futurista & Tech ### Estilo de Inovação em Dispositivos Móveis](https://designmd.app/library/estilo-de-inovacao-em-dispositivos-moveis)[![Estilo de IA Criativa](https://designmd.app/images/library/132.png) Futurista & Tech ### Estilo de IA Criativa](https://designmd.app/library/estilo-de-ia-criativa)[![Estilo de Futuro Autônomo](https://designmd.app/images/library/135.png) Futurista & Tech ### Estilo de Futuro Autônomo](https://designmd.app/library/estilo-de-futuro-autonomo)[![Estilo de Realidade Virtual Social](https://designmd.app/images/library/125.png) Futurista & Tech ### Estilo de Realidade Virtual Social](https://designmd.app/library/estilo-de-realidade-virtual-social)[![Estilo de Inteligência Generativa](https://designmd.app/images/library/138.png) Futurista & Tech ### Estilo de Inteligência Generativa](https://designmd.app/library/estilo-de-inteligencia-generativa)

Last synced: 4/1/2026
