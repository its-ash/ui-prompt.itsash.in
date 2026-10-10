# Caramelo Quente Premium

- Source: <https://designmd.app/library/caramelo-quente-premium>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:06:18.406Z

Temas & VerticaisModern Artisanal

# Caramelo Quente Premium

Warm, inviting, and artisanal UI with a premium feel. Ideal for cafeterias artesanais, padarias premium, marcas de lifestyle, restaurantes acolhedores, e-commerce de produtos naturais. AI-ready template.

Warminvitingartisanalcozypremiumnaturalcoffeebaked goodsrusticsophisticated

Use case: Cafeterias artesanais, Padarias premium, Brands de lifestyle, Restaurantes acolhedores, E-commerce de products naturais

![Caramelo Quente Premium](https://designmd.app/images/library/331.png)

## Historical Context

Caramel and golden warm tones have operated as a premium design shorthand long before digital interfaces existed. Think of the amber glow of aged whiskey labels, the burnished gold leaf on Venetian storefronts, the deliberate warmth of craft coffee packaging that signals slow-roasted, small-batch care. These tones tap into something primal — fire, hearth, bread crust — and translate that into a visual promise of comfort without sacrificing sophistication. The modern revival owes a debt to the third-wave coffee movement and artisanal bakery boom of the 2010s, where brands rejected the cold minimalism of tech aesthetics in favor of warmth that felt human and handmade. Caramel became the anti-corporate color — rich enough to feel premium, warm enough to feel approachable. It says "someone made this with their hands" even when they didn't. What makes golden warmth work as a premium language is restraint. It's not yellow's optimism or orange's energy — it's the quiet confidence of aged materials, patina, and things that improve with time. Used well, it communicates heritage without stuffiness and luxury without distance.

## When to Use

Reach for this palette when your brand needs to feel handcrafted, intimate, and premium without cold detachment. It's ideal for coffee roasters, artisan bakeries, comfort-forward luxury goods, and any product where the selling point is warmth, care, and human touch. Works beautifully for brands that want to signal quality through restraint rather than flash — the neighborhood spot that happens to be world-class. Avoid if your product needs to feel clinical, fast, or tech-forward.

## Design Principles

- Anchor on deep caramel (#8B5E3C range) as your primary — never let golden tones drift into cheap mustard or fast-food yellow territory
- Pair warm tones with generous whitespace and matte textures; warmth without breathing room becomes suffocating and cheap
- Typography should lean serif or humanist sans — geometric typefaces fight the organic warmth and create tonal dissonance
- Use golden highlights sparingly as accent, not flood; the moment everything is warm, nothing feels warm anymore
- Ground the palette with deep espresso browns or charcoal rather than pure black — maintain the warm ecosystem end to end

## DESIGN.md

```
---
version: "alpha"
name: "Caramelo Quente Premium"
description: "Warm, inviting, and artisanal UI with a premium feel. Ideal for cafeterias artesanais, padarias premium, marcas de lifestyle, restaurantes acolhedores, e-commerce de produtos naturais. AI-ready template."
colors:
primary: "#C77A23"
secondary: "#E8D8C6"
tertiary: "#3A2F2B"
neutral: "#D2691E"
surface: "#D3D3D3"
accent: "#F0C98D"
typography:
h1:
fontFamily: Lora
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Lora
fontSize: 1rem
fontWeight: 400
rounded:
sm: 10px
md: 20px
lg: 30px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Warm, inviting, and artisanal UI with a premium feel. Ideal for cafeterias artesanais, padarias premium, marcas de lifestyle, restaurantes acolhedores, e-commerce de produtos naturais. AI-ready template. Caramel and golden warm tones have operated as a premium design shorthand long before digital interfaces existed. Think of the amber glow of aged whiskey labels, the burnished gold leaf on Venetian storefronts, the deliberate warmth of craft coffee packaging that signals slow-roasted, small-batch care. These tones tap into something primal — fire, hearth, bread crust — and translate that into a visual promise of comfort without sacrificing sophistication.

The modern revival owes a debt to the third-wave coffee movement and artisanal bakery boom of the 2010s, where brands rejected the cold minimalism of tech aesthetics in favor of warmth that felt human and handmade. Caramel became the anti-corporate color — rich enough to feel premium, warm enough to feel approachable. It says "someone made this with their hands" even when they didn't.

What makes golden warmth work as a premium language is restraint. It's not yellow's optimism or orange's energy — it's the quiet confidence of aged materials, patina, and things that improve with time. Used well, it communicates heritage without stuffiness and luxury without distance.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Artisanal & Cozy
- **Keywords:** Warm, inviting, artisanal, cozy, premium, natural, coffee, baked goods, rustic, sophisticated
- **Era:** Modern Artisanal
- **Light/Dark:** ✓ Full

## Colors

- **Warm Caramel Brown** (#C77A23) — Primary surface or dominant color
- **Creamy Latte** (#E8D8C6) — Light surface, card backgrounds
- **Dark Roast** (#3A2F2B) — Dark surface, primary background
- **Cinnamon Spice** (#D2691E) — Extended palette, decorative use
- **Linen Grey** (#D3D3D3) — Secondary text, borders, muted elements
- **Golden Croissant** (#F0C98D) — Premium accent, decorative highlights

## Typography

- **Display / Hero:** Lora — Weight 700, tight tracking, used for headline impact
- **Accent:** Roboto — Used for decorative or emphasis text
- **Body:** Lora — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Lora — 0.875rem, weight 500, slight letter-spacing
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

Soft, diffused lighting, subtle texture overlays (linen, wood grain), elegant serif typography for headlines, warm sans-serif for body, gentle shadows, focus on natural materials and comfort, smooth transitions

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 10px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (10px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (10px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Warm Caramel Brown primary #C77A23
- Do Earthy and cozy color palette
- Do Elegant serif typography for headlines
- Do Soft
- Do gentle shadows
- Do Natural textures (e.g.
- Do linen
- Do coffee beans)
- Do Responsive design for all devices

## Use Case

Cafeterias artesanais, Padarias premium, Brands de lifestyle, Restaurantes acolhedores, E-commerce de products naturais
```

[Download DESIGN.md](https://designmd.app/library/caramelo-quente-premium/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Lora', serif; --font-body: 'Roboto', sans-serif; color: #C77A23; background-color: #E8D8C6; border-radius: 10px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: all 0.4s ease-in-out;
```

### Variables

```
--color-caramel: #C77A23; --color-latte: #E8D8C6; --color-dark-roast: #3A2F2B; --font-serif-primary: 'Lora', serif; --font-sans-body: 'Roboto', sans-serif; --border-radius-lg: 10px; --shadow-medium: 0 6px 15px rgba(0,0,0,0.15);
```

### Checklist

☐ Warm Caramel Brown primary #C77A23, ☐ Earthy and cozy color palette, ☐ Elegant serif typography for headlines, ☐ Soft, gentle shadows, ☐ Natural textures (e.g., linen, coffee beans), ☐ Responsive design for all devices

## Colors

Primary

#C77A23

#E8D8C6

#3A2F2B

Secondary

#D2691E

#D3D3D3

#F0C98D

### Effects

Soft, diffused lighting, subtle texture overlays (linen, wood grain), elegant serif typography for headlines, warm sans-serif for body, gentle shadows, focus on natural materials and comfort, smooth transitions

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

- **Name:** Caramelo Quente Premium
- **Type:** Artisanal & Cozy
- **Keywords:** Warm, inviting, artisanal, cozy, premium, natural, coffee, baked goods, rustic, sophisticated
- **Era:** Modern Artisanal
- **Light/Dark:** ✓ Full

## Color Palette

- **Primary:** Warm Caramel Brown #C77A23, Creamy Latte #E8D8C6, Dark Roast #3A2F2B
- **Secondary:** Cinnamon Spice #D2691E, Linen Grey #D3D3D3, Golden Croissant #F0C98D

## Visual Effects

Soft, diffused lighting, subtle texture overlays (linen, wood grain), elegant serif typography for headlines, warm sans-serif for body, gentle shadows, focus on natural materials and comfort, smooth transitions

## AI Visual Direction

Create a warm, inviting, and artisanal UI with a premium feel. Use warm caramel brown (#C77A23) as the primary accent, complemented by creamy latte and dark roast tones. Incorporate subtle natural textures like linen and wood, elegant serif typography for headlines, and a cozy, comfortable layout. Focus on soft lighting and gentle shadows to evoke a sense of warmth and quality.

## CSS Technical

```css
font-family: 'Lora', serif; --font-body: 'Roboto', sans-serif; color: #C77A23; background-color: #E8D8C6; border-radius: 10px; box-shadow: 0 6px 15px rgba(0,0,0,0.15); transition: all 0.4s ease-in-out;
```

## Design System Variables

```css
--color-caramel: #C77A23; --color-latte: #E8D8C6; --color-dark-roast: #3A2F2B; --font-serif-primary: 'Lora', serif; --font-sans-body: 'Roboto', sans-serif; --border-radius-lg: 10px; --shadow-medium: 0 6px 15px rgba(0,0,0,0.15);
```

## Implementation Checklist

- ☐ Warm Caramel Brown primary #C77A23
- ☐ Earthy and cozy color palette
- ☐ Elegant serif typography for headlines
- ☐ Soft
- gentle shadows
- ☐ Natural textures (e.g.
- linen
- coffee beans)
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

[![Laranja Queimado Premium](https://designmd.app/images/library/330.png) Temas & Verticais ### Laranja Queimado Premium](https://designmd.app/library/laranja-queimado-premium)[![Roxo Veludo Real](https://designmd.app/images/library/332.png) Temas & Verticais ### Roxo Veludo Real](https://designmd.app/library/roxo-veludo-real)[![Organic Biophilic](https://designmd.app/images/library/42.png) Temas & Verticais ### Organic Biophilic](https://designmd.app/library/organic-biophilic)[![Minimalismo Sereno de Bem-Estar](https://designmd.app/images/library/192.png) Minimalismo & Swiss ### Minimalismo Sereno de Bem-Estar](https://designmd.app/library/minimalismo-sereno-de-bem-estar)[![Culinária Afetiva Brasileira](https://designmd.app/images/library/251.png) Brasil ### Culinária Afetiva Brasileira](https://designmd.app/library/culinaria-afetiva-brasileira)

Last synced: 4/1/2026
