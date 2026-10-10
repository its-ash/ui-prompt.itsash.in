# Minimalismo Sereno de Bem-Estar

- Source: <https://designmd.app/library/minimalismo-sereno-de-bem-estar>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:02:23.302Z

Minimalismo & Swiss2026+ Bem-Estar Digital

# Minimalismo Sereno de Bem-Estar

Calm and minimalist landing page for a meditation and wellness app. Ideal for landing pages, modern websites. AI-ready template.

meditationwellnesscalmminimalistserenepeacefulintuitivemindfulhealthbalanced

Use case: Landing pages, Modern websites

![Minimalismo Sereno de Bem-Estar](https://designmd.app/images/library/192.png)

## Historical Context

Before Headspace launched in 2012, nobody thought a meditation app needed a design language. Then Andy Puddicombe and his team proved that rounded shapes, muted palettes, and generous whitespace could actually lower your heart rate before you even pressed play. Calm followed with their dark blues and nature textures — a different bet on the same thesis: the interface itself is the first breath. This wasn't accidental. The digital well-being movement emerged as a direct counter to attention-economy design. Where social platforms weaponized red notification badges and infinite scroll, wellness brands stripped everything back. No urgency. No visual noise. Every pixel earned its place by contributing to a feeling of spaciousness. The Swiss grid found new purpose here — not as corporate rationalism, but as structured calm. What makes this lineage interesting is the constraint. You're designing for people in vulnerable states. Anxiety. Insomnia. Burnout. The typography can't shout. The transitions can't jar. Even the onboarding has to feel like permission to slow down. It's minimalism with emotional intelligence — form following feeling, not just function.

## When to Use

When your product exists to reduce cognitive load, not add to it. Meditation apps, therapy platforms, sleep tools, yoga studios, breathwork brands — anything where the user arrives already overwhelmed. Also works for wellness e-commerce and health journaling. Skip this if your product needs energy, urgency, or dense information architecture. This system whispers. If you need to shout, look elsewhere.

## Design Principles

- Breathing space as a feature — margins and padding aren't empty, they're active rest for the eye. Let content float in generous negative space rather than filling every available pixel.
- Muted palette with intention — soft sage, warm sand, diluted lavender. Never pure white (too clinical) or pure black (too heavy). Every color should feel like it's been softened by morning light.
- Typography that exhales — lightweight sans-serifs at comfortable sizes. Generous line-height. No uppercase headings, no bold calls-to-action screaming at stressed users. Let the words arrive gently.
- Motion as meditation — transitions are slow, eased, purposeful. Elements fade in rather than snap. Scroll feels like flowing water, not clicking through slides. If an animation doesn't calm, cut it.
- Radical reduction — one action per screen. One message per moment. Strip features until only the essential remains, then strip again. The interface should feel like it's already done the hard work of deciding what matters.

## DESIGN.md

```
---
version: "alpha"
name: "Minimalismo Sereno de Bem-Estar"
description: "Calm and minimalist landing page for a meditation and wellness app. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#FFFFFF"
secondary: "#FDF6E3"
tertiary: "#A8DADC"
neutral: "#E0E0E0"
surface: "#87CEEB"
accent: "#E6E6FA"
typography:
h1:
fontFamily: Nunito
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Nunito
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

Calm and minimalist landing page for a meditation and wellness app. Ideal for landing pages, modern websites. AI-ready template. Before Headspace launched in 2012, nobody thought a meditation app needed a design language. Then Andy Puddicombe and his team proved that rounded shapes, muted palettes, and generous whitespace could actually lower your heart rate before you even pressed play. Calm followed with their dark blues and nature textures — a different bet on the same thesis: the interface itself is the first breath.

This wasn't accidental. The digital well-being movement emerged as a direct counter to attention-economy design. Where social platforms weaponized red notification badges and infinite scroll, wellness brands stripped everything back. No urgency. No visual noise. Every pixel earned its place by contributing to a feeling of spaciousness. The Swiss grid found new purpose here — not as corporate rationalism, but as structured calm.

What makes this lineage interesting is the constraint. You're designing for people in vulnerable states. Anxiety. Insomnia. Burnout. The typography can't shout. The transitions can't jar. Even the onboarding has to feel like permission to slow down. It's minimalism with emotional intelligence — form following feeling, not just function.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Calm, Minimalist, Serene
- **Keywords:** meditation, wellness, calm, minimalist, serene, peaceful, intuitive, mindful, health, balanced
- **Era:** 2026+ Bem-Estar Digital
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Bege Claro** (#FDF6E3) — Secondary surface or text color
- **Verde Água** (#A8DADC) — Supporting palette color
- **Cinza Suave** (#E0E0E0) — Secondary text, borders, muted elements
- **Azul Céu** (#87CEEB) — Secondary accent
- **Lavanda** (#E6E6FA) — Extended palette, decorative use
- **Verde Menta** (#98FB98) — Success states, positive indicators
- **Marrom Claro** (#D2B48C) — Extended palette, decorative use

## Typography

- **Display / Hero:** Nunito — Weight 700, tight tracking, used for headline impact
- **Body:** Nunito — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Nunito — 0.875rem, weight 500, slight letter-spacing
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

Layouts arejados com muito espaço em branco, tipografia suave e arredondada, ilustrações minimalistas de natureza, animações de fundo sutis (ondas, nuvens), micro-interações de feedback tátil, transições fluidas e relaxantes.

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
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Layouts arejados
- Do Tipografia suave
- Do Ilustrações minimalistas
- Do Animações de fundo sutis
- Do Micro-interações táteis
- Do Transições relaxantes.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/minimalismo-sereno-de-bem-estar/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #333333, box-shadow: 0 1px 3px rgba(0,0,0,0.03), border-radius: 8px, font-family: "Nunito, sans-serif", transition: all 0.4s ease-in-out, .hero-animation-subtle, .illustration-minimal, .testimonial-card-soft.
```

### Variables

```
--white-bg: #FFFFFF, --light-beige-bg: #FDF6E3, --aqua-green: #A8DADC, --soft-grey: #E0E0E0, --border-radius-md: 8px, --font-main: "Nunito, sans-serif", --shadow-calm: 0 1px 3px rgba(0,0,0,0.03).
```

### Checklist

☐ Layouts arejados, ☐ Tipografia suave, ☐ Ilustrações minimalistas, ☐ Animações de fundo sutis, ☐ Micro-interações táteis, ☐ Transições relaxantes.

## Colors

Primary

#FFFFFF

#FDF6E3

#A8DADC

#E0E0E0

Secondary

#87CEEB

#E6E6FA

#98FB98

#D2B48C

### Effects

Layouts arejados com muito espaço em branco, tipografia suave e arredondada, ilustrações minimalistas de natureza, animações de fundo sutis (ondas, nuvens), micro-interações de feedback tátil, transições fluidas e relaxantes.

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

- **Name:** Minimalismo Sereno de Bem-Estar
- **Type:** Calm, Minimalist, Serene
- **Keywords:** meditation, wellness, calm, minimalist, serene, peaceful, intuitive, mindful, health, balanced
- **Era:** 2026+ Bem-Estar Digital
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Branco #FFFFFF, Bege Claro #FDF6E3, Verde Água #A8DADC, Cinza Suave #E0E0E0
- **Secondary:** Azul Céu #87CEEB, Lavanda #E6E6FA, Verde Menta #98FB98, Marrom Claro #D2B48C

## Visual Effects

Layouts arejados com muito espaço em branco, tipografia suave e arredondada, ilustrações minimalistas de natureza, animações de fundo sutis (ondas, nuvens), micro-interações de feedback tátil, transições fluidas e relaxantes.

## AI Visual Direction

Design a calm and minimalist landing page for a meditation and wellness app. Use: airy layouts, abundant white space, soft rounded typography, minimalist nature illustrations, subtle background animations (waves, clouds), tactile feedback micro-interactions, fluid and relaxing transitions, serene and balanced feel.

## CSS Technical

```css
background: #FFFFFF, color: #333333, box-shadow: 0 1px 3px rgba(0,0,0,0.03), border-radius: 8px, font-family: "Nunito, sans-serif", transition: all 0.4s ease-in-out, .hero-animation-subtle, .illustration-minimal, .testimonial-card-soft.
```

## Design System Variables

```css
--white-bg: #FFFFFF, --light-beige-bg: #FDF6E3, --aqua-green: #A8DADC, --soft-grey: #E0E0E0, --border-radius-md: 8px, --font-main: "Nunito, sans-serif", --shadow-calm: 0 1px 3px rgba(0,0,0,0.03).
```

## Implementation Checklist

- ☐ Layouts arejados
- ☐ Tipografia suave
- ☐ Ilustrações minimalistas
- ☐ Animações de fundo sutis
- ☐ Micro-interações táteis
- ☐ Transições relaxantes.

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

[![Minimalismo Funcional B2B](https://designmd.app/images/library/189.png) Minimalismo & Swiss ### Minimalismo Funcional B2B](https://designmd.app/library/minimalismo-funcional-b2b)[![Minimalismo Fotográfico Elegante](https://designmd.app/images/library/190.png) Minimalismo & Swiss ### Minimalismo Fotográfico Elegante](https://designmd.app/library/minimalismo-fotografico-elegante)[![Minimalismo Chic de Luxo](https://designmd.app/images/library/191.png) Minimalismo & Swiss ### Minimalismo Chic de Luxo](https://designmd.app/library/minimalismo-chic-de-luxo)[![Minimalismo Confiável Financeiro](https://designmd.app/images/library/193.png) Minimalismo & Swiss ### Minimalismo Confiável Financeiro](https://designmd.app/library/minimalismo-confiavel-financeiro)[![Estilo de Elegância Espacial](https://designmd.app/images/library/121.png) Futurista & Tech ### Estilo de Elegância Espacial](https://designmd.app/library/estilo-de-elegancia-espacial)

Last synced: 4/1/2026
