# Brutalismo Urbano Expressivo

- Source: <https://designmd.app/library/brutalismo-urbano-expressivo>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:02:35.302Z

Brutalismo2026+ Cultura de Rua

# Brutalismo Urbano Expressivo

Design an edgy and expressive brutalist landing page for an urban art and streetwear store. Ideal for landing pages, modern websites. AI-ready template.

streetwearurban artgraffitiedgyexpressiverawboldauthenticdisruptiveunique

Use case: Landing pages, Modern websites

![Brutalismo Urbano Expressivo](https://designmd.app/images/library/198.png)

## Historical Context

Graffiti never asked for permission. It showed up on concrete walls, train cars, shuttered storefronts — raw, loud, unapologetic. When streetwear brands started building websites in the early 2000s, the smart ones didn't sanitize that energy. They brought the grit straight to the screen. Stüssy's early web presence felt like a zine. Supreme treated their site like a wheat-paste poster. The typography was aggressive, the layouts were deliberately off-kilter, and whitespace was something that happened to other people. Urban brutalism in digital design isn't about being ugly — it's about being honest. It borrows from the same impulse that drives a writer to tag a wall at 3am: the need to mark territory, to exist loudly in a space that wasn't designed for you. The aesthetic pulls from hand-drawn lettering, spray-paint texture, photocopy degradation, and the chaotic layering you see on a construction site hoarding covered in six months of posters. This approach rejects the polished minimalism that dominates most e-commerce. It says: our audience doesn't want calm. They want energy. They want something that feels like the street smells — diesel, paint, concrete dust.

## When to Use

When your brand lives in the margins. Streetwear drops, skate shop lookbooks, hip-hop event pages, urban art collectives, zine publishers. Any project where polish equals death and your audience reads authenticity in the imperfections. Works best when the content itself is bold enough to survive the visual noise — weak messaging gets eaten alive by this aesthetic. Not for brands that need to whisper. This is for brands that shout.

## Design Principles

- Layer like a wall — stack elements with overlap, collision, and intentional visual tension. Nothing sits politely in its box.
- Typography is territory — use type as a weapon. Oversized, distorted, hand-drawn, stenciled. Mix weights and styles like a wall covered in competing tags.
- Texture is non-negotiable — grain, noise, spray-paint spatter, concrete, photocopy artifacts. If it looks too clean, you've failed.
- Color hits hard or stays out — high-contrast palettes pulled from spray cans. Neon on black. Red on raw concrete. No pastels, no gradients, no comfort.
- Embrace the unfinished — exposed grids, visible construction marks, elements that bleed off-screen. The design should feel like it's still happening.

## DESIGN.md

```
---
version: "alpha"
name: "Brutalismo Urbano Expressivo"
description: "Design an edgy and expressive brutalist landing page for an urban art and streetwear store. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#000000"
secondary: "#FFFFFF"
tertiary: "#CC5500"
neutral: "#00BFFF"
surface: "#39FF14"
accent: "#6A0DAD"
typography:
h1:
fontFamily: Permanent Marker
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Permanent Marker
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an edgy and expressive brutalist landing page for an urban art and streetwear store. Ideal for landing pages, modern websites. AI-ready template. Graffiti never asked for permission. It showed up on concrete walls, train cars, shuttered storefronts — raw, loud, unapologetic. When streetwear brands started building websites in the early 2000s, the smart ones didn't sanitize that energy. They brought the grit straight to the screen. Stüssy's early web presence felt like a zine. Supreme treated their site like a wheat-paste poster. The typography was aggressive, the layouts were deliberately off-kilter, and whitespace was something that happened to other people.

Urban brutalism in digital design isn't about being ugly — it's about being honest. It borrows from the same impulse that drives a writer to tag a wall at 3am: the need to mark territory, to exist loudly in a space that wasn't designed for you. The aesthetic pulls from hand-drawn lettering, spray-paint texture, photocopy degradation, and the chaotic layering you see on a construction site hoarding covered in six months of posters.

This approach rejects the polished minimalism that dominates most e-commerce. It says: our audience doesn't want calm. They want energy. They want something that feels like the street smells — diesel, paint, concrete dust.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Edgy, Expressive, Urban
- **Keywords:** streetwear, urban art, graffiti, edgy, expressive, raw, bold, authentic, disruptive, unique
- **Era:** 2026+ Cultura de Rua
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary
- **Azul Elétrico** (#00BFFF) — Accent highlight, links and focus states
- **Verde Neon** (#39FF14) — Success states, positive indicators
- **Roxo Grafite** (#6A0DAD) — Accent color, emphasis elements
- **Amarelo Mostarda** (#FFD700) — Warning states, attention indicators
- **Cinza Concreto** (#A9A9A9) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Permanent Marker — Weight 700, tight tracking, used for headline impact
- **Body:** Permanent Marker — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Permanent Marker — 0.875rem, weight 500, slight letter-spacing
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

Texturas de parede de concreto, tipografia de stencil e grafite, imagens de arte de rua em grande escala, elementos de interface com "rasgos" ou "desgastes", micro-interações de hover com efeitos de spray, animações de transição de elementos bruscas.

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

- Do Texturas de concreto
- Do Tipografia de stencil/grafite
- Do Imagens de arte de rua
- Do Elementos com "rasgos"
- Do Micro-interações de spray
- Do Transições bruscas.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/brutalismo-urbano-expressivo/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: url("concrete-texture.jpg") #A9A9A9, color: #FFFFFF, border: 5px solid #000000, box-shadow: 10px 10px 0px #CC5500, font-family: "Permanent Marker, cursive", text-shadow: 2px 2px #000000, .graffiti-text, .distressed-button, .spray-hover.
```

### Variables

```
--black-bg: #000000, --white-text: #FFFFFF, --burnt-orange: #CC5500, --electric-blue: #00BFFF, --border-heavy: 5px solid #000000, --shadow-urban: 10px 10px 0px #CC5500, --font-graffiti: "Permanent Marker, cursive".
```

### Checklist

☐ Texturas de concreto, ☐ Tipografia de stencil/grafite, ☐ Imagens de arte de rua, ☐ Elementos com "rasgos", ☐ Micro-interações de spray, ☐ Transições bruscas.

## Colors

Primary

#000000

#FFFFFF

#CC5500

#00BFFF

Secondary

#39FF14

#6A0DAD

#FFD700

#A9A9A9

### Effects

Texturas de parede de concreto, tipografia de stencil e grafite, imagens de arte de rua em grande escala, elementos de interface com "rasgos" ou "desgastes", micro-interações de hover com efeitos de spray, animações de transição de elementos bruscas.

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

- **Name:** Brutalismo Urbano Expressivo
- **Type:** Edgy, Expressive, Urban
- **Keywords:** streetwear, urban art, graffiti, edgy, expressive, raw, bold, authentic, disruptive, unique
- **Era:** 2026+ Cultura de Rua
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Preto #000000, Branco #FFFFFF, Laranja Queimado #CC5500, Azul Elétrico #00BFFF
- **Secondary:** Verde Neon #39FF14, Roxo Grafite #6A0DAD, Amarelo Mostarda #FFD700, Cinza Concreto #A9A9A9

## Visual Effects

Texturas de parede de concreto, tipografia de stencil e grafite, imagens de arte de rua em grande escala, elementos de interface com "rasgos" ou "desgastes", micro-interações de hover com efeitos de spray, animações de transição de elementos bruscas.

## AI Visual Direction

Design an edgy and expressive brutalist landing page for an urban art and streetwear store. Use: concrete wall textures, stencil and graffiti typography, large-scale street art images, UI elements with "tears" or "distress" effects, spray paint hover micro-interactions, abrupt element transition animations, burnt orange and electric blue accents, raw and authentic feel.

## CSS Technical

```css
background: url("concrete-texture.jpg") #A9A9A9, color: #FFFFFF, border: 5px solid #000000, box-shadow: 10px 10px 0px #CC5500, font-family: "Permanent Marker, cursive", text-shadow: 2px 2px #000000, .graffiti-text, .distressed-button, .spray-hover.
```

## Design System Variables

```css
--black-bg: #000000, --white-text: #FFFFFF, --burnt-orange: #CC5500, --electric-blue: #00BFFF, --border-heavy: 5px solid #000000, --shadow-urban: 10px 10px 0px #CC5500, --font-graffiti: "Permanent Marker, cursive".
```

## Implementation Checklist

- ☐ Texturas de concreto
- ☐ Tipografia de stencil/grafite
- ☐ Imagens de arte de rua
- ☐ Elementos com "rasgos"
- ☐ Micro-interações de spray
- ☐ Transições bruscas.

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

[![Neobrutalismo Ousado](https://designmd.app/images/library/194.png) Brutalismo ### Neobrutalismo Ousado](https://designmd.app/library/neobrutalismo-ousado)[![Brutalismo Sonoro Glitch](https://designmd.app/images/library/195.png) Brutalismo ### Brutalismo Sonoro Glitch](https://designmd.app/library/brutalismo-sonoro-glitch)[![Brutalismo Artístico Abstrato](https://designmd.app/images/library/196.png) Brutalismo ### Brutalismo Artístico Abstrato](https://designmd.app/library/brutalismo-artistico-abstrato)[![Neobrutalismo Crítico](https://designmd.app/images/library/197.png) Brutalismo ### Neobrutalismo Crítico](https://designmd.app/library/neobrutalismo-critico)[![Retro Boutique Vintage](https://designmd.app/images/library/220.png) Retro & Pop ### Retro Boutique Vintage](https://designmd.app/library/retro-boutique-vintage)

Last synced: 4/1/2026
