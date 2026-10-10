# Café Artesanal Aconchegante

- Source: <https://designmd.app/library/cafe-artesanal-aconchegante>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:03:04.301Z

Arte & Ilustracao2026+ Charme Local

# Café Artesanal Aconchegante

Cozy and rustic hand-drawn landing page for an artisanal coffee shop and bakery. Ideal for landing pages, modern websites. AI-ready template.

coffee shopbakeryhandmadecozyrusticauthenticwarminvitinglocalfriendly

Use case: Landing pages, Modern websites

![Café Artesanal Aconchegante](https://designmd.app/images/library/216.png)

## Historical Context

Third-wave coffee didn't just change how we drink — it rewired how we expect small businesses to look online. Before 2010, most café websites were clip-art disasters or over-templated WordPress themes. Then came the pour-over revolution, and with it, a visual language borrowed from letterpress printing, kraft paper packaging, and the deliberate imperfection of hand-drawn type. Suddenly every roaster needed a site that felt like their shop smelled. The aesthetic crystallized around warmth. Muted earth tones, textured backgrounds that mimicked recycled stock, illustrations that looked sketched on a napkin during a slow morning shift. Photography went moody — steam rising, flour-dusted hands, latte art captured mid-pour. The digital experience had to feel analog. Cozy. Like you could almost hear the grinder. What's interesting is how this language scaled beyond coffee into bakeries, artisan food shops, and neighborhood businesses that trade on craft and proximity. The visual vocabulary says: we made this by hand, we care about the details, come sit down for a while.

## When to Use

When the brand identity lives in tactile, handmade qualities — the kind of business where the owner's hands are in the product. Coffee shops, bakeries, small-batch food producers, local cafés that compete on atmosphere rather than price. Works best when you want visitors to feel warmth before they read a single word. Not appropriate for scale-focused brands or anything that needs to communicate speed and efficiency over craft.

## Design Principles

- Texture over flatness — layer paper grains, subtle noise, and organic shapes to break the sterility of screens
- Illustration as personality — hand-drawn elements signal human involvement in ways photography alone cannot
- Warm palette discipline — stay within browns, creams, terracotta, and muted greens; one accent color maximum
- Imperfect typography — slightly irregular letterforms, hand-lettered headers, serif body text that reads like a printed menu
- Breathing room with intention — generous whitespace that feels like an empty café table, not a minimalist statement

## DESIGN.md

```
---
version: "alpha"
name: "Café Artesanal Aconchegante"
description: "Cozy and rustic hand-drawn landing page for an artisanal coffee shop and bakery. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#6F4E37"
secondary: "#FFFDD0"
tertiary: "#98FB98"
neutral: "#FFFFFF"
surface: "#FFDAB9"
accent: "#87CEEB"
typography:
h1:
fontFamily: Caveat
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Caveat
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Cozy and rustic hand-drawn landing page for an artisanal coffee shop and bakery. Ideal for landing pages, modern websites. AI-ready template. Third-wave coffee didn't just change how we drink — it rewired how we expect small businesses to look online. Before 2010, most café websites were clip-art disasters or over-templated WordPress themes. Then came the pour-over revolution, and with it, a visual language borrowed from letterpress printing, kraft paper packaging, and the deliberate imperfection of hand-drawn type. Suddenly every roaster needed a site that felt like their shop smelled.

The aesthetic crystallized around warmth. Muted earth tones, textured backgrounds that mimicked recycled stock, illustrations that looked sketched on a napkin during a slow morning shift. Photography went moody — steam rising, flour-dusted hands, latte art captured mid-pour. The digital experience had to feel analog. Cozy. Like you could almost hear the grinder.

What's interesting is how this language scaled beyond coffee into bakeries, artisan food shops, and neighborhood businesses that trade on craft and proximity. The visual vocabulary says: we made this by hand, we care about the details, come sit down for a while.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Cozy, Rustic, Authentic
- **Keywords:** coffee shop, bakery, handmade, cozy, rustic, authentic, warm, inviting, local, friendly
- **Era:** 2026+ Charme Local
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Marrom Café** (#6F4E37) — Primary surface or dominant color
- **Bege Creme** (#FFFDD0) — Secondary surface or text color
- **Verde Menta** (#98FB98) — Supporting palette color
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Laranja Pêssego** (#FFDAB9) — Warm accent, call-to-action secondary
- **Azul Céu** (#87CEEB) — Secondary accent
- **Vermelho Cereja** (#DC143C) — Error states, destructive actions
- **Cinza Ardósia** (#708090) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Caveat — Weight 700, tight tracking, used for headline impact
- **Body:** Caveat — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Caveat — 0.875rem, weight 500, slight letter-spacing
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

Ilustrações de grãos de café e pães, tipografia que simula escrita em lousa, texturas de madeira e juta, bordas com efeito de carimbo, micro-interações de hover com aroma visual, transições de seção suaves e orgânicas.

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

- Do Ilustrações de café/pão
- Do Tipografia de lousa
- Do Texturas de madeira/juta
- Do Bordas com efeito de carimbo
- Do Micro-interações de aroma visual
- Do Transições suaves e orgânicas.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/cafe-artesanal-aconchegante/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFDD0, color: #6F4E37, border: 2px dashed #D2B48C, font-family: "Caveat, cursive", transition: all 0.7s ease-in-out, .coffee-illustration, .chalkboard-text, .jute-texture-bg.
```

### Variables

```
--coffee-brown: #6F4E37, --cream-beige: #FFFDD0, --mint-green: #98FB98, --white-bg: #FFFFFF, --font-chalkboard: "Caveat, cursive", --wood-texture-bg: url('wood-texture.png'), --border-dashed-brown: 2px dashed #D2B48C.
```

### Checklist

☐ Ilustrações de café/pão, ☐ Tipografia de lousa, ☐ Texturas de madeira/juta, ☐ Bordas com efeito de carimbo, ☐ Micro-interações de aroma visual, ☐ Transições suaves e orgânicas.

## Colors

Primary

#6F4E37

#FFFDD0

#98FB98

#FFFFFF

Secondary

#FFDAB9

#87CEEB

#DC143C

#708090

### Effects

Ilustrações de grãos de café e pães, tipografia que simula escrita em lousa, texturas de madeira e juta, bordas com efeito de carimbo, micro-interações de hover com aroma visual, transições de seção suaves e orgânicas.

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

- **Name:** Café Artesanal Aconchegante
- **Type:** Cozy, Rustic, Authentic
- **Keywords:** coffee shop, bakery, handmade, cozy, rustic, authentic, warm, inviting, local, friendly
- **Era:** 2026+ Charme Local
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Marrom Café #6F4E37, Bege Creme #FFFDD0, Verde Menta #98FB98, Branco #FFFFFF
- **Secondary:** Laranja Pêssego #FFDAB9, Azul Céu #87CEEB, Vermelho Cereja #DC143C, Cinza Ardósia #708090

## Visual Effects

Ilustrações de grãos de café e pães, tipografia que simula escrita em lousa, texturas de madeira e juta, bordas com efeito de carimbo, micro-interações de hover com aroma visual, transições de seção suaves e orgânicas.

## AI Visual Direction

Design a cozy and rustic hand-drawn landing page for an artisanal coffee shop and bakery. Use: coffee bean and bread illustrations, chalkboard-style typography, wood and burlap textures, stamp-effect borders, visual aroma hover micro-interactions, smooth organic section transitions, coffee brown and cream beige accents, warm and inviting feel.

## CSS Technical

```css
background: #FFFDD0, color: #6F4E37, border: 2px dashed #D2B48C, font-family: "Caveat, cursive", transition: all 0.7s ease-in-out, .coffee-illustration, .chalkboard-text, .jute-texture-bg.
```

## Design System Variables

```css
--coffee-brown: #6F4E37, --cream-beige: #FFFDD0, --mint-green: #98FB98, --white-bg: #FFFFFF, --font-chalkboard: "Caveat, cursive", --wood-texture-bg: url('wood-texture.png'), --border-dashed-brown: 2px dashed #D2B48C.
```

## Implementation Checklist

- ☐ Ilustrações de café/pão
- ☐ Tipografia de lousa
- ☐ Texturas de madeira/juta
- ☐ Bordas com efeito de carimbo
- ☐ Micro-interações de aroma visual
- ☐ Transições suaves e orgânicas.

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

[![Artesanato Orgânico e Acolhedor](https://designmd.app/images/library/215.png) Arte & Ilustracao ### Artesanato Orgânico e Acolhedor](https://designmd.app/library/artesanato-organico-e-acolhedor)[![Desenho à Mão Lúdico](https://designmd.app/images/library/214.png) Arte & Ilustracao ### Desenho à Mão Lúdico](https://designmd.app/library/desenho-a-mao-ludico)[![Criatividade Artesanal e Pessoal](https://designmd.app/images/library/217.png) Arte & Ilustracao ### Criatividade Artesanal e Pessoal](https://designmd.app/library/criatividade-artesanal-e-pessoal)[![Aprendizado Criativo Artesanal](https://designmd.app/images/library/218.png) Arte & Ilustracao ### Aprendizado Criativo Artesanal](https://designmd.app/library/aprendizado-criativo-artesanal)[![Vernacular Acolhedor Brasileiro](https://designmd.app/images/library/248.png) Brasil ### Vernacular Acolhedor Brasileiro](https://designmd.app/library/vernacular-acolhedor-brasileiro)

Last synced: 4/1/2026
