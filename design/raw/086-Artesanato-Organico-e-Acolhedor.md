# Artesanato Orgânico e Acolhedor

- Source: <https://designmd.app/library/artesanato-organico-e-acolhedor>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:03:03.257Z

Arte & Ilustracao2026+ Valor Artesanal

# Artesanato Orgânico e Acolhedor

Design an organic and warm hand-drawn landing page for an online craft store. Ideal for landing pages, modern websites. AI-ready template.

handmadecraftartisanorganicwarmauthenticuniquenaturalcozyfriendly

Use case: Landing pages, Modern websites

![Artesanato Orgânico e Acolhedor](https://designmd.app/images/library/215.png)

## Historical Context

The handmade web didn't arrive with a manifesto. It seeped in through Etsy storefronts circa 2008—sellers who refused templated perfection, opting instead for photographed kraft paper textures, hand-lettered logos exported as slightly-rough PNGs, and color palettes pulled from drying ceramics. This was a deliberate rejection. While SaaS companies chased pixel-perfect minimalism, artisan sellers built pages that felt touched. Imperfect. Warm. The aesthetic codified quickly: organic shapes over geometric grids, muted earth tones over corporate blue, visible texture over flat planes. Typography leaned into serifs with personality—not Didot-elegant but Vollkorn-sturdy, or hand-drawn scripts that wobbled just enough. Illustrations replaced stock photography. Borders got rounded past comfortable into blob territory. What matters historically is the intent: these weren't lo-fi choices born from limitation. They were anti-industrial statements. Every uneven edge said 'a person made this.' Every warm shadow said 'this isn't Amazon.' The craft web proved that digital interfaces could carry material honesty—that screens could feel like they smelled of linseed oil and sawdust.

## When to Use

When the brand's entire value proposition rests on human hands. Artisan marketplaces, ceramics studios, independent makers, craft workshop bookings, small-batch food producers. Anywhere the customer needs to feel the opposite of factory-line efficiency. Also works for creative portfolios that want approachability over intimidation. Avoid if speed, scale, or technical authority matter more than warmth—this aesthetic actively fights against feeling 'professional' in the corporate sense.

## Design Principles

- Embrace visible imperfection — wobbly lines, uneven spacing, hand-drawn elements signal human origin over machine precision
- Ground the palette in materials — pull colors from clay, undyed linen, aged wood, dried flowers; never from a corporate brand guide
- Let texture breathe — paper grain, canvas weave, watercolor bleeds as backgrounds; flat color reads as factory-made in this context
- Typography carries craft through weight and warmth — pair a sturdy organic serif with a hand-lettered accent; avoid geometric sans-serifs entirely
- Composition should feel arranged, not computed — asymmetric layouts, overlapping elements, slight rotations mimic a workshop table rather than a spreadsheet

## DESIGN.md

```
---
version: "alpha"
name: "Artesanato Orgânico e Acolhedor"
description: "Design an organic and warm hand-drawn landing page for an online craft store. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#F5F5DC"
secondary: "#6B8E23"
tertiary: "#CC5500"
neutral: "#FFFFFF"
surface: "#87CEEB"
accent: "#E0BBE4"
typography:
h1:
fontFamily: Dancing Script
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Dancing Script
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an organic and warm hand-drawn landing page for an online craft store. Ideal for landing pages, modern websites. AI-ready template. The handmade web didn't arrive with a manifesto. It seeped in through Etsy storefronts circa 2008—sellers who refused templated perfection, opting instead for photographed kraft paper textures, hand-lettered logos exported as slightly-rough PNGs, and color palettes pulled from drying ceramics. This was a deliberate rejection. While SaaS companies chased pixel-perfect minimalism, artisan sellers built pages that felt touched. Imperfect. Warm.

The aesthetic codified quickly: organic shapes over geometric grids, muted earth tones over corporate blue, visible texture over flat planes. Typography leaned into serifs with personality—not Didot-elegant but Vollkorn-sturdy, or hand-drawn scripts that wobbled just enough. Illustrations replaced stock photography. Borders got rounded past comfortable into blob territory.

What matters historically is the intent: these weren't lo-fi choices born from limitation. They were anti-industrial statements. Every uneven edge said 'a person made this.' Every warm shadow said 'this isn't Amazon.' The craft web proved that digital interfaces could carry material honesty—that screens could feel like they smelled of linseed oil and sawdust.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Organic, Warm, Authentic
- **Keywords:** handmade, craft, artisan, organic, warm, authentic, unique, natural, cozy, friendly
- **Era:** 2026+ Valor Artesanal
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Bege** (#F5F5DC) — Primary surface or dominant color
- **Verde Oliva** (#6B8E23) — Secondary surface or text color
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Azul Celeste** (#87CEEB) — Secondary accent
- **Rosa Antigo** (#E0BBE4) — Decorative accent, highlight elements
- **Marrom Terra** (#8B4513) — Extended palette, decorative use
- **Cinza Pedra** (#A9A9A9) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Dancing Script — Weight 700, tight tracking, used for headline impact
- **Body:** Dancing Script — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Dancing Script — 0.875rem, weight 500, slight letter-spacing
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

Elementos de design que simulam texturas naturais (madeira, tecido), tipografia que remete a caligrafia, ilustrações orgânicas e imperfeitas, bordas com acabamento manual, micro-interações de hover com efeito de "toque artesanal", transições de seção suaves e naturais.

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

- Do Texturas naturais
- Do Tipografia caligráfica
- Do Ilustrações orgânicas
- Do Bordas com acabamento manual
- Do Micro-interações de "toque artesanal"
- Do Transições suaves e naturais.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/artesanato-organico-e-acolhedor/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #F5F5DC, color: #333333, border: 1px solid #D2B48C, font-family: "Dancing Script, cursive", transition: all 0.6s ease-in-out, .natural-texture-bg, .organic-illustration, .handmade-border.
```

### Variables

```
--beige-bg: #F5F5DC, --olive-green: #6B8E23, --burnt-orange: #CC5500, --white-text: #FFFFFF, --font-calligraphy: "Dancing Script, cursive", --wood-texture-bg: url('wood-texture.png'), --border-natural: 1px solid #D2B48C.
```

### Checklist

☐ Texturas naturais, ☐ Tipografia caligráfica, ☐ Ilustrações orgânicas, ☐ Bordas com acabamento manual, ☐ Micro-interações de "toque artesanal", ☐ Transições suaves e naturais.

## Colors

Primary

#F5F5DC

#6B8E23

#CC5500

#FFFFFF

Secondary

#87CEEB

#E0BBE4

#8B4513

#A9A9A9

### Effects

Elementos de design que simulam texturas naturais (madeira, tecido), tipografia que remete a caligrafia, ilustrações orgânicas e imperfeitas, bordas com acabamento manual, micro-interações de hover com efeito de "toque artesanal", transições de seção suaves e naturais.

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

- **Name:** Artesanato Orgânico e Acolhedor
- **Type:** Organic, Warm, Authentic
- **Keywords:** handmade, craft, artisan, organic, warm, authentic, unique, natural, cozy, friendly
- **Era:** 2026+ Valor Artesanal
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Bege #F5F5DC, Verde Oliva #6B8E23, Laranja Queimado #CC5500, Branco #FFFFFF
- **Secondary:** Azul Celeste #87CEEB, Rosa Antigo #E0BBE4, Marrom Terra #8B4513, Cinza Pedra #A9A9A9

## Visual Effects

Elementos de design que simulam texturas naturais (madeira, tecido), tipografia que remete a caligrafia, ilustrações orgânicas e imperfeitas, bordas com acabamento manual, micro-interações de hover com efeito de "toque artesanal", transições de seção suaves e naturais.

## AI Visual Direction

Design an organic and warm hand-drawn landing page for an online craft store. Use: natural textures (wood, fabric), calligraphy-style typography, organic imperfect illustrations, hand-finished borders, "handmade touch" hover micro-interactions, smooth natural section transitions, olive green and burnt orange accents, authentic and cozy feel.

## CSS Technical

```css
background: #F5F5DC, color: #333333, border: 1px solid #D2B48C, font-family: "Dancing Script, cursive", transition: all 0.6s ease-in-out, .natural-texture-bg, .organic-illustration, .handmade-border.
```

## Design System Variables

```css
--beige-bg: #F5F5DC, --olive-green: #6B8E23, --burnt-orange: #CC5500, --white-text: #FFFFFF, --font-calligraphy: "Dancing Script, cursive", --wood-texture-bg: url('wood-texture.png'), --border-natural: 1px solid #D2B48C.
```

## Implementation Checklist

- ☐ Texturas naturais
- ☐ Tipografia caligráfica
- ☐ Ilustrações orgânicas
- ☐ Bordas com acabamento manual
- ☐ Micro-interações de "toque artesanal"
- ☐ Transições suaves e naturais.

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

[![Desenho à Mão Lúdico](https://designmd.app/images/library/214.png) Arte & Ilustracao ### Desenho à Mão Lúdico](https://designmd.app/library/desenho-a-mao-ludico)[![Café Artesanal Aconchegante](https://designmd.app/images/library/216.png) Arte & Ilustracao ### Café Artesanal Aconchegante](https://designmd.app/library/cafe-artesanal-aconchegante)[![Criatividade Artesanal e Pessoal](https://designmd.app/images/library/217.png) Arte & Ilustracao ### Criatividade Artesanal e Pessoal](https://designmd.app/library/criatividade-artesanal-e-pessoal)[![Aprendizado Criativo Artesanal](https://designmd.app/images/library/218.png) Arte & Ilustracao ### Aprendizado Criativo Artesanal](https://designmd.app/library/aprendizado-criativo-artesanal)[![Retro Boutique Vintage](https://designmd.app/images/library/220.png) Retro & Pop ### Retro Boutique Vintage](https://designmd.app/library/retro-boutique-vintage)

Last synced: 4/1/2026
