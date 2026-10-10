# Laranja Queimado Premium

- Source: <https://designmd.app/library/laranja-queimado-premium>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:06:16.406Z

Temas & VerticaisTimeless Organic Modern

# Laranja Queimado Premium

Warm, earthy, and elegant UI with a premium feel. Ideal for marcas orgânicas, cafeterias premium, produtos artesanais, restaurantes farm-to-table, lifestyle natural. AI-ready template.

Warmearthynaturalpremiumelegantautumnalrichsophisticatedorganiccozy

Use case: Brands orgânicas, Cafeterias premium, Products artesanais, Restaurantes farm-to-table, Lifestyle natural

![Laranja Queimado Premium](https://designmd.app/images/library/330.png)

## Historical Context

Burnt orange sits at the intersection of earth and fire — a color that humans have trusted since we first ground ochre pigments into cave walls. There's nothing accidental about its resurgence in premium contexts. While cooler palettes dominated the minimalist decade, burnt orange quietly held its ground in architecture, ceramics, and haute couture where material authenticity matters more than trend cycles. The color communicates something specific: that warmth isn't weakness. In a market saturated with clinical whites and safe navy blues, burnt orange signals confidence in craft. It reads as aged leather, terracotta, spice markets, kiln-fired glazes — all things that gain value through process and time. Hermès understood this decades ago. So did every Scandinavian architect who paired it with raw concrete. What makes burnt orange work at the premium tier is its inherent imperfection. Unlike pure orange (which screams retail energy), the burnt variant absorbs light rather than reflecting it. It feels considered rather than loud. It tells your audience you chose depth over safety, substance over sterility.

## When to Use

Reach for burnt orange when your brand needs to feel rooted without feeling rustic. It's the right call for autumn product launches, natural and organic positioning, artisan goods that justify their price through craft narrative, and any luxury context where warmth needs to replace coldness without sacrificing sophistication. Avoid it for clinical, tech-forward, or youth-energy contexts — it carries too much gravity for that.

## Design Principles

- Pair with deep neutrals (charcoal, warm black, raw linen) — never with other warm saturated hues that compete for attention
- Use as an accent at 15-25% ratio maximum; burnt orange commands a room and needs negative space to breathe
- Desaturate slightly for large surface areas, reserve full saturation for typographic details and interactive states
- Ground it with texture references — matte finishes, grain overlays, natural fiber photography — to reinforce its material origins
- Avoid pairing with cool greys or blue-whites that make it look muddy; stick to warm-neutral companions that share its undertone

## DESIGN.md

```
---
version: "alpha"
name: "Laranja Queimado Premium"
description: "Warm, earthy, and elegant UI with a premium feel. Ideal for marcas orgânicas, cafeterias premium, produtos artesanais, restaurantes farm-to-table, lifestyle natural. AI-ready template."
colors:
primary: "#994C27"
secondary: "#224229"
tertiary: "#F5F5DC"
neutral: "#B8860B"
surface: "#5C4033"
accent: "#F0E68C"
typography:
h1:
fontFamily: Playfair Display
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: Playfair Display
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: Playfair Display
fontSize: 0.75rem
fontWeight: 500
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

Warm, earthy, and elegant UI with a premium feel. Ideal for marcas orgânicas, cafeterias premium, produtos artesanais, restaurantes farm-to-table, lifestyle natural. AI-ready template. Burnt orange sits at the intersection of earth and fire — a color that humans have trusted since we first ground ochre pigments into cave walls. There's nothing accidental about its resurgence in premium contexts. While cooler palettes dominated the minimalist decade, burnt orange quietly held its ground in architecture, ceramics, and haute couture where material authenticity matters more than trend cycles.

The color communicates something specific: that warmth isn't weakness. In a market saturated with clinical whites and safe navy blues, burnt orange signals confidence in craft. It reads as aged leather, terracotta, spice markets, kiln-fired glazes — all things that gain value through process and time. Hermès understood this decades ago. So did every Scandinavian architect who paired it with raw concrete.

What makes burnt orange work at the premium tier is its inherent imperfection. Unlike pure orange (which screams retail energy), the burnt variant absorbs light rather than reflecting it. It feels considered rather than loud. It tells your audience you chose depth over safety, substance over sterility.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Natural Elegance
- **Keywords:** Warm, earthy, natural, premium, elegant, autumnal, rich, sophisticated, organic, cozy
- **Era:** Timeless Organic Modern
- **Light/Dark:** ✓ Full

## Colors

- **Burnt Orange** (#994C27) — Warm accent, call-to-action secondary
- **Deep Forest Green** (#224229) — Secondary surface or text color
- **Cream Beige** (#F5F5DC) — Light surface, card backgrounds
- **Muted Gold** (#B8860B) — Secondary text, borders, muted elements
- **Dark Brown** (#5C4033) — Deep contrast surface
- **Soft Yellow** (#F0E68C) — Warning states, attention indicators

## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Accent:** Open Sans — Used for decorative or emphasis text
- **Body:** Playfair Display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Playfair Display — 0.875rem, weight 500, slight letter-spacing
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

Soft gradients, subtle natural textures (wood, linen), elegant serif typography for headings, clean sans-serif for body, minimal and diffused shadows, focus on natural light and depth, smooth transitions

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Burnt Orange primary #994C27
- Do Earthy and natural color palette
- Do Elegant serif typography for headings
- Do Soft
- Do diffused shadows
- Do Organic textures (e.g.
- Do wood grain
- Do linen)
- Do Responsive design for all devices

## Use Case

Brands orgânicas, Cafeterias premium, Products artesanais, Restaurantes farm-to-table, Lifestyle natural
```

[Download DESIGN.md](https://designmd.app/library/laranja-queimado-premium/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Playfair Display', serif; --font-body: 'Open Sans', sans-serif; color: #994C27; background-color: #F5F5DC; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: all 0.3s ease-in-out;
```

### Variables

```
--color-burnt-orange: #994C27; --color-deep-green: #224229; --color-cream-beige: #F5F5DC; --font-serif-primary: 'Playfair Display', serif; --font-sans-body: 'Open Sans', sans-serif; --border-radius-md: 8px; --shadow-soft: 0 4px 10px rgba(0,0,0,0.1);
```

### Checklist

☐ Burnt Orange primary #994C27, ☐ Earthy and natural color palette, ☐ Elegant serif typography for headings, ☐ Soft, diffused shadows, ☐ Organic textures (e.g., wood grain, linen), ☐ Responsive design for all devices

## Colors

Primary

#994C27

#224229

#F5F5DC

Secondary

#B8860B

#5C4033

#F0E68C

### Effects

Soft gradients, subtle natural textures (wood, linen), elegant serif typography for headings, clean sans-serif for body, minimal and diffused shadows, focus on natural light and depth, smooth transitions

### Light/Dark

✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Laranja Queimado Premium
- **Type:** Natural Elegance
- **Keywords:** Warm, earthy, natural, premium, elegant, autumnal, rich, sophisticated, organic, cozy
- **Era:** Timeless Organic Modern
- **Light/Dark:** ✓ Full

## Color Palette

- **Primary:** Burnt Orange #994C27, Deep Forest Green #224229, Cream Beige #F5F5DC
- **Secondary:** Muted Gold #B8860B, Dark Brown #5C4033, Soft Yellow #F0E68C

## Visual Effects

Soft gradients, subtle natural textures (wood, linen), elegant serif typography for headings, clean sans-serif for body, minimal and diffused shadows, focus on natural light and depth, smooth transitions

## AI Visual Direction

Create a warm, earthy, and elegant UI with a premium feel. Use burnt orange (#994C27) as the primary accent, complemented by deep forest greens and creamy beige neutrals. Incorporate subtle natural textures, sophisticated typography (serif for headlines, clean sans-serif for body), and soft, diffused lighting effects. The overall aesthetic should be rich, organic, and inviting.

## CSS Technical

```css
font-family: 'Playfair Display', serif; --font-body: 'Open Sans', sans-serif; color: #994C27; background-color: #F5F5DC; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: all 0.3s ease-in-out;
```

## Design System Variables

```css
--color-burnt-orange: #994C27; --color-deep-green: #224229; --color-cream-beige: #F5F5DC; --font-serif-primary: 'Playfair Display', serif; --font-sans-body: 'Open Sans', sans-serif; --border-radius-md: 8px; --shadow-soft: 0 4px 10px rgba(0,0,0,0.1);
```

## Implementation Checklist

- ☐ Burnt Orange primary #994C27
- ☐ Earthy and natural color palette
- ☐ Elegant serif typography for headings
- ☐ Soft
- diffused shadows
- ☐ Organic textures (e.g.
- wood grain
- linen)
- ☐ Responsive design for all devices

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

[![Caramelo Quente Premium](https://designmd.app/images/library/331.png) Temas & Verticais ### Caramelo Quente Premium](https://designmd.app/library/caramelo-quente-premium)[![Roxo Veludo Real](https://designmd.app/images/library/332.png) Temas & Verticais ### Roxo Veludo Real](https://designmd.app/library/roxo-veludo-real)[![Organic Biophilic](https://designmd.app/images/library/42.png) Temas & Verticais ### Organic Biophilic](https://designmd.app/library/organic-biophilic)[![Nature Distilled](https://designmd.app/images/library/61.png) Minimalismo & Swiss ### Nature Distilled](https://designmd.app/library/nature-distilled)[![Minimalismo Sereno de Bem-Estar](https://designmd.app/images/library/192.png) Minimalismo & Swiss ### Minimalismo Sereno de Bem-Estar](https://designmd.app/library/minimalismo-sereno-de-bem-estar)

Last synced: 4/1/2026
