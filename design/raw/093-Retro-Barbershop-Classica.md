# Retro Barbershop Clássica

- Source: <https://designmd.app/library/retro-barbershop-classica>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:03:11.299Z

Retro & Pop1920s-1940s Classic

# Retro Barbershop Clássica

Classic and masculine retro landing page for a barbershop. Ideal for landing pages, modern websites. AI-ready template.

barbershopclassicvintagemasculineauthentictraditionalrefinedstylishprofessionalwelcoming

Use case: Landing pages, Modern websites

![Retro Barbershop Clássica](https://designmd.app/images/library/221.png)

## Historical Context

The barbershop aesthetic never truly disappeared — it just went underground. While the mid-century saw men's grooming reduced to fluorescent-lit chain salons, the cultural memory of the neighborhood barber persisted. Stripe poles spinning red-white-blue. Leather strops hanging from porcelain chairs. The ritual of hot towels and straight razors. What we're seeing now isn't nostalgia — it's reclamation. The modern barbershop revival that started in the early 2010s rejected disposable grooming culture entirely. It pulled from pre-war typography, apothecary labeling, and the visual language of trades that took pride in craft. Brands like Baxter of California and Blind Barber didn't just sell pomade — they sold belonging to a lineage. The design vocabulary is unmistakable: hand-lettered scripts, medallion crests, crosshatched illustrations, muted golds against deep blacks. These aren't decorative choices. They're signals of permanence in a world obsessed with the ephemeral.

## When to Use

Reach for this when the brand needs weight. Barbershops, obviously — but also whiskey bars, leather goods, heritage menswear, anything where craftsmanship is the selling point. It works when your audience values tradition over trend, when they want to feel like they're walking into something that's been there for decades even if it opened last month. Avoid it for anything targeting speed or youth. This aesthetic demands patience from the viewer.

## Design Principles

- Anchor typography in contrast — pair ornate display scripts with rigid sans-serifs. The tension between decorative and utilitarian is the whole point.
- Restrict your palette ruthlessly. Black, cream, oxblood, gold. Maybe a deep forest green. The moment you add a fourth color you've lost the plot.
- Texture is non-negotiable. Linen grain, ink bleed, subtle halftone dots. Without physical texture these layouts collapse into costume.
- Symmetry and formality in composition — centered layouts, framed elements, badge-style lockups. This is design that respects the grid like a pressed shirt respects the crease.
- Let negative space do the talking. Classic barbershop interiors were sparse by necessity. The design should breathe the same way — confident enough to leave room empty.

## DESIGN.md

```
---
version: "alpha"
name: "Retro Barbershop Clássica"
description: "Classic and masculine retro landing page for a barbershop. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#4A2C2A"
secondary: "#F5F5DC"
tertiary: "#800020"
neutral: "#B8860B"
surface: "#006400"
accent: "#000080"
typography:
h1:
fontFamily: Bebas Neue
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Bebas Neue
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Classic and masculine retro landing page for a barbershop. Ideal for landing pages, modern websites. AI-ready template. The barbershop aesthetic never truly disappeared — it just went underground. While the mid-century saw men's grooming reduced to fluorescent-lit chain salons, the cultural memory of the neighborhood barber persisted. Stripe poles spinning red-white-blue. Leather strops hanging from porcelain chairs. The ritual of hot towels and straight razors.

What we're seeing now isn't nostalgia — it's reclamation. The modern barbershop revival that started in the early 2010s rejected disposable grooming culture entirely. It pulled from pre-war typography, apothecary labeling, and the visual language of trades that took pride in craft. Brands like Baxter of California and Blind Barber didn't just sell pomade — they sold belonging to a lineage.

The design vocabulary is unmistakable: hand-lettered scripts, medallion crests, crosshatched illustrations, muted golds against deep blacks. These aren't decorative choices. They're signals of permanence in a world obsessed with the ephemeral.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Classic, Masculine, Authentic
- **Keywords:** barbershop, classic, vintage, masculine, authentic, traditional, refined, stylish, professional, welcoming
- **Era:** 1920s-1940s Classic
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Marrom Escuro** (#4A2C2A) — Dark surface, primary background
- **Creme** (#F5F5DC) — Secondary surface or text color
- **Vermelho Borgonha** (#800020) — Error states, destructive actions
- **Dourado Envelhecido** (#B8860B) — Premium accent, decorative highlights
- **Verde Garrafa** (#006400) — Success states, positive indicators
- **Azul Marinho** (#000080) — Secondary accent
- **Cinza Chumbo** (#36454F) — Secondary text, borders, muted elements
- **Branco** (#FFFFFF) — Secondary surface

## Typography

- **Display / Hero:** Bebas Neue — Weight 700, tight tracking, used for headline impact
- **Body:** Bebas Neue — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Bebas Neue — 0.875rem, weight 500, slight letter-spacing
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

Texturas de couro e madeira escura, tipografia serifada robusta e script elegante, ilustrações vintage de barbearia, bordas decorativas, micro-interações de hover com efeito de "brilho" sutil, transições de seção com efeito de "cortina" ou "rolo de filme".

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

- Do Texturas de couro/madeira
- Do Tipografia serifada/script
- Do Ilustrações vintage
- Do Bordas decorativas
- Do Micro-interações de brilho
- Do Transições de cortina/rolo de filme.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/retro-barbershop-classica/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #F5F5DC, color: #4A2C2A, border: 2px solid #B8860B, font-family: "Bebas Neue, sans-serif", text-shadow: 1px 1px 2px rgba(0,0,0,0.2), .leather-texture-bg, .vintage-illustration, .curtain-transition.
```

### Variables

```
--dark-brown: #4A2C2A, --cream-bg: #F5F5DC, --burgundy-red: #800020, --aged-gold: #B8860B, --font-serif-bold: "Bebas Neue, sans-serif", --font-script-elegant: "Great Vibes, cursive", --leather-texture-bg: url("leather.png"), --curtain-effect: transform translateY(100%).
```

### Checklist

☐ Texturas de couro/madeira, ☐ Tipografia serifada/script, ☐ Ilustrações vintage, ☐ Bordas decorativas, ☐ Micro-interações de brilho, ☐ Transições de cortina/rolo de filme.

## Colors

Primary

#4A2C2A

#F5F5DC

#800020

#B8860B

Secondary

#006400

#000080

#36454F

#FFFFFF

### Effects

Texturas de couro e madeira escura, tipografia serifada robusta e script elegante, ilustrações vintage de barbearia, bordas decorativas, micro-interações de hover com efeito de "brilho" sutil, transições de seção com efeito de "cortina" ou "rolo de filme".

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

- **Name:** Retro Barbershop Clássica
- **Type:** Classic, Masculine, Authentic
- **Keywords:** barbershop, classic, vintage, masculine, authentic, traditional, refined, stylish, professional, welcoming
- **Era:** 1920s-1940s Classic
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Marrom Escuro #4A2C2A, Creme #F5F5DC, Vermelho Borgonha #800020, Dourado Envelhecido #B8860B
- **Secondary:** Verde Garrafa #006400, Azul Marinho #000080, Cinza Chumbo #36454F, Branco #FFFFFF

## Visual Effects

Texturas de couro e madeira escura, tipografia serifada robusta e script elegante, ilustrações vintage de barbearia, bordas decorativas, micro-interações de hover com efeito de "brilho" sutil, transições de seção com efeito de "cortina" ou "rolo de filme".

## AI Visual Direction

Design a classic and masculine retro landing page for a barbershop. Use: dark leather and wood textures, robust serif and elegant script typography, vintage barbershop illustrations, decorative borders, subtle "shine" hover micro-interactions, curtain/film roll section transitions, dark brown and burgundy red accents, authentic and welcoming feel.

## CSS Technical

```css
background: #F5F5DC, color: #4A2C2A, border: 2px solid #B8860B, font-family: "Bebas Neue, sans-serif", text-shadow: 1px 1px 2px rgba(0,0,0,0.2), .leather-texture-bg, .vintage-illustration, .curtain-transition.
```

## Design System Variables

```css
--dark-brown: #4A2C2A, --cream-bg: #F5F5DC, --burgundy-red: #800020, --aged-gold: #B8860B, --font-serif-bold: "Bebas Neue, sans-serif", --font-script-elegant: "Great Vibes, cursive", --leather-texture-bg: url("leather.png"), --curtain-effect: transform translateY(100%).
```

## Implementation Checklist

- ☐ Texturas de couro/madeira
- ☐ Tipografia serifada/script
- ☐ Ilustrações vintage
- ☐ Bordas decorativas
- ☐ Micro-interações de brilho
- ☐ Transições de cortina/rolo de filme.

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

[![Retro Boutique Vintage](https://designmd.app/images/library/220.png) Retro & Pop ### Retro Boutique Vintage](https://designmd.app/library/retro-boutique-vintage)[![Retro Arcade Pixelado](https://designmd.app/images/library/219.png) Retro & Pop ### Retro Arcade Pixelado](https://designmd.app/library/retro-arcade-pixelado)[![Retro Aventura Anos 70](https://designmd.app/images/library/222.png) Retro & Pop ### Retro Aventura Anos 70](https://designmd.app/library/retro-aventura-anos-70)[![Retro Digital Anos 90](https://designmd.app/images/library/223.png) Retro & Pop ### Retro Digital Anos 90](https://designmd.app/library/retro-digital-anos-90)[![8-Bit Retro Terminal](https://designmd.app/images/library/186.png) Retro & Pop ### 8-Bit Retro Terminal](https://designmd.app/library/8-bit-retro-terminal)

Last synced: 4/1/2026
