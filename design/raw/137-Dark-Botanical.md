# Dark Botanical

- Source: <https://designmd.app/library/dark-botanical>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:04:18.301Z

Temas & Verticais2024-2026 Premium Elegant

# Dark Botanical

Design an elegant, sophisticated dark landing page with artistic premium feel. Ideal for marcas de luxo, joalherias, spas premium, art galleries, vinícolas. AI-ready template.

elegantsophisticateddarkabstract shapessoft gradient circleswarm accentsCormorant serifIBM Plex Sanspremiumartisticbotanical

Use case: Luxury brands, Jewelry stores, Premium spas, Art galleries, Wineries

![Dark Botanical](https://designmd.app/images/library/261.png)

## Historical Context

Dark botanical aesthetics trace back to Dutch Golden Age still life painting — those moody, almost funereal arrangements of tulips and peonies against pitch-black backgrounds. Artists like Rachel Ruysch and Jan van Huysum weren't just painting flowers; they were painting decay, mortality, the fleeting nature of beauty. That tension between life and darkness is exactly what makes this theme so compelling in design. The revival hit fashion and interiors hard in the 2010s — House of Hackney's maximalist dark florals, Gucci's romantic gothic prints under Alessandro Michele. In digital, it matured as brands realized dark UI didn't have to mean cold and sterile. You could bring warmth through organic forms. Byredo, Aesop, and Le Labo all dance around this territory — restraint meets nature meets shadow. What separates good dark botanical work from costume-shop gothic is restraint in saturation. The flowers aren't bright. They're muted, dusty, almost bruised. The darkness isn't pure black — it's deep forest green, aubergine, charcoal with warm undertones. That subtlety is everything.

## When to Use

Reach for dark botanical when the brand needs to feel expensive without feeling corporate. It works beautifully for luxury cosmetics, niche fragrance, premium skincare — anything where the product itself is sensory and intimate. Also strong for editorial fashion, high-end floral brands, boutique hospitality, and artisanal spirits. Avoid it for anything that needs to feel accessible or cheerful. This theme whispers; it doesn't wave.

## Design Principles

- Desaturate your botanicals — bruised mauves and dusty sage over saturated greens. The flowers should feel like they've been pressed in a Victorian journal, not picked this morning.
- Layer depth through texture, not just color. Grain, noise, subtle paper textures in backgrounds prevent the dark palette from feeling flat or screen-like.
- Typography should be high-contrast and editorial — a refined serif at large scale against the darkness. Let letterforms breathe; tight tracking kills the elegance.
- Use negative space aggressively. Dark botanical gets cluttered fast. The darkness itself is a design element — protect it, don't fill it.
- Metallics (aged gold, tarnished copper) as accents only — never as primary elements. One foil-stamped detail elevates; three make it look like a wedding invitation.

## DESIGN.md

```
---
version: "alpha"
name: "Dark Botanical"
description: "Design an elegant, sophisticated dark landing page with artistic premium feel. Ideal for marcas de luxo, joalherias, spas premium, art galleries, vinícolas. AI-ready template."
colors:
primary: "#0f0f0f"
secondary: "#e8e4df"
tertiary: "#9a9590"
neutral: "#d4a574"
surface: "#e8b4b8"
accent: "#c9b896"
typography:
h1:
fontFamily: Cormorant
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Cormorant
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an elegant, sophisticated dark landing page with artistic premium feel. Ideal for marcas de luxo, joalherias, spas premium, art galleries, vinícolas. AI-ready template. Dark botanical aesthetics trace back to Dutch Golden Age still life painting — those moody, almost funereal arrangements of tulips and peonies against pitch-black backgrounds. Artists like Rachel Ruysch and Jan van Huysum weren't just painting flowers; they were painting decay, mortality, the fleeting nature of beauty. That tension between life and darkness is exactly what makes this theme so compelling in design.

The revival hit fashion and interiors hard in the 2010s — House of Hackney's maximalist dark florals, Gucci's romantic gothic prints under Alessandro Michele. In digital, it matured as brands realized dark UI didn't have to mean cold and sterile. You could bring warmth through organic forms. Byredo, Aesop, and Le Labo all dance around this territory — restraint meets nature meets shadow.

What separates good dark botanical work from costume-shop gothic is restraint in saturation. The flowers aren't bright. They're muted, dusty, almost bruised. The darkness isn't pure black — it's deep forest green, aubergine, charcoal with warm undertones. That subtlety is everything.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Elegant, Sophisticated, Artistic, Premium
- **Keywords:** elegant, sophisticated, dark, abstract shapes, soft gradient circles, warm accents, Cormorant serif, IBM Plex Sans, premium, artistic, botanical
- **Era:** 2024-2026 Premium Elegant
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Deep Black** (#0f0f0f) — Dark surface, primary background
- **Warm Text** (#e8e4df) — Primary text color
- **Muted Text** (#9a9590) — Primary text color
- **Warm Accent** (#d4a574) — Primary accent, CTAs and interactive elements
- **Soft Pink** (#e8b4b8) — Primary text color
- **Gold** (#c9b896) — Premium accent, decorative highlights
- **Terracotta** (#c4856a) — Extended palette, decorative use

## Typography

- **Display / Hero:** Cormorant — Weight 700, tight tracking, used for headline impact
- **Accent:** IBM Plex Sans — Used for decorative or emphasis text
- **Body:** Cormorant — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cormorant — 0.875rem, weight 500, slight letter-spacing
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

Abstract soft gradient circles (blurred, overlapping), warm color accents (pink, gold, terracotta), thin vertical accent lines, italic signature typography, no illustrations only abstract CSS shapes, smooth transitions 350ms

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (50%) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (50%) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.

## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Cormorant + IBM Plex Sans carregados
- Do Fundo deep black #0f0f0f
- Do Abstract gradient circles CSS
- Do Warm accents (pink
- Do gold
- Do terracotta)
- Do Thin vertical accent lines
- Do Italic signature typography
- Do Sem ilustrações
- Do apenas shapes CSS
- Do Responsivo mobile/tablet/desktop

## Use Case

Luxury brands, Jewelry stores, Premium spas, Art galleries, Wineries
```

[Download DESIGN.md](https://designmd.app/library/dark-botanical/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Cormorant' for headings, 'IBM Plex Sans' for body, background: #0f0f0f, color: #e8e4df, .abstract-circle { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.3 }, .accent-line { width: 1px; height: 80px; background: #d4a574 }, .signature-text { font-family: 'Cormorant'; font-style: italic; font-weight: 400 }
```

### Variables

```
--bg-primary: #0f0f0f, --text-primary: #e8e4df, --text-secondary: #9a9590, --accent-warm: #d4a574, --accent-pink: #e8b4b8, --accent-gold: #c9b896, --font-display: 'Cormorant', --font-body: 'IBM Plex Sans', --blur-amount: 60px, --circle-opacity: 0.3
```

### Checklist

☐ Cormorant + IBM Plex Sans carregados, ☐ Fundo deep black #0f0f0f, ☐ Abstract gradient circles CSS, ☐ Warm accents (pink, gold, terracotta), ☐ Thin vertical accent lines, ☐ Italic signature typography, ☐ Sem ilustrações, apenas shapes CSS, ☐ Responsivo mobile/tablet/desktop

## Colors

Primary

#0f0f0f

#e8e4df

#9a9590

Secondary

#d4a574

#e8b4b8

#c9b896

#c4856a

### Effects

Abstract soft gradient circles (blurred, overlapping), warm color accents (pink, gold, terracotta), thin vertical accent lines, italic signature typography, no illustrations only abstract CSS shapes, smooth transitions 350ms

### Light/Dark

✗ No / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Dark Botanical
- **Type:** Elegant, Sophisticated, Artistic, Premium
- **Keywords:** elegant, sophisticated, dark, abstract shapes, soft gradient circles, warm accents, Cormorant serif, IBM Plex Sans, premium, artistic, botanical
- **Era:** 2024-2026 Premium Elegant
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** Deep Black #0f0f0f, Warm Text #e8e4df, Muted Text #9a9590
- **Secondary:** Warm Accent #d4a574, Soft Pink #e8b4b8, Gold #c9b896, Terracotta #c4856a

## Visual Effects

Abstract soft gradient circles (blurred, overlapping), warm color accents (pink, gold, terracotta), thin vertical accent lines, italic signature typography, no illustrations only abstract CSS shapes, smooth transitions 350ms

## AI Visual Direction

Design an elegant, sophisticated dark landing page with artistic premium feel. Use Cormorant serif (400/600) for display and IBM Plex Sans (300/400) for body. Background deep black (#0f0f0f) with warm text (#e8e4df). Add abstract soft gradient circles using CSS (blurred, overlapping, warm colors). Include thin vertical accent lines. Use italic signature typography. Warm accents: pink (#e8b4b8), gold (#c9b896), terracotta. No illustrations, only abstract CSS shapes.

## CSS Technical

```css
font-family: 'Cormorant' for headings, 'IBM Plex Sans' for body, background: #0f0f0f, color: #e8e4df, .abstract-circle { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.3 }, .accent-line { width: 1px; height: 80px; background: #d4a574 }, .signature-text { font-family: 'Cormorant'; font-style: italic; font-weight: 400 }
```

## Design System Variables

```css
--bg-primary: #0f0f0f, --text-primary: #e8e4df, --text-secondary: #9a9590, --accent-warm: #d4a574, --accent-pink: #e8b4b8, --accent-gold: #c9b896, --font-display: 'Cormorant', --font-body: 'IBM Plex Sans', --blur-amount: 60px, --circle-opacity: 0.3
```

## Implementation Checklist

- ☐ Cormorant + IBM Plex Sans carregados
- ☐ Fundo deep black #0f0f0f
- ☐ Abstract gradient circles CSS
- ☐ Warm accents (pink
- gold
- terracotta)
- ☐ Thin vertical accent lines
- ☐ Italic signature typography
- ☐ Sem ilustrações
- apenas shapes CSS
- ☐ Responsivo mobile/tablet/desktop

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

[![Dark Mode (OLED)](https://designmd.app/images/library/7.png) Temas & Verticais ### Dark Mode (OLED)](https://designmd.app/library/dark-mode-oled)[![Organic Biophilic](https://designmd.app/images/library/42.png) Temas & Verticais ### Organic Biophilic](https://designmd.app/library/organic-biophilic)[![Natureza / Elementos Botânicos](https://designmd.app/images/library/90.png) Dados & Infografico ### Natureza / Elementos Botânicos](https://designmd.app/library/natureza-elementos-botanicos)[![Minimalismo Chic de Luxo](https://designmd.app/images/library/191.png) Minimalismo & Swiss ### Minimalismo Chic de Luxo](https://designmd.app/library/minimalismo-chic-de-luxo)[![Bold Signal](https://designmd.app/images/library/258.png) Temas & Verticais ### Bold Signal](https://designmd.app/library/bold-signal)

Last synced: 4/1/2026
