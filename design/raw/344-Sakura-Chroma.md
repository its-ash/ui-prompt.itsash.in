# Sakura Chroma

- Source: <https://designmd.app/library/sakura-chroma>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:41.316Z

Retro & Pop1980s Retro

# Sakura Chroma

Sakura Chroma — Vintage Japanese cassette-package aesthetic: cream paper, diagonal rainbow ribbons, condensed bold type, JIS-style spec checkboxes. Big Shoulders Display typography. warm cream paper canvas with dark warm-brown ink and a six-colour primary palett. Best for product launch or catalogue, indie hardware or analog studio brand, music label or release schedule. AI-ready design system.

Japanese cassetterainbow ribbonsBarlow Condensedvintagekawaii-techtactileproduct-catalogue

Use case: product launch or catalogue, indie hardware or analog studio brand, music label or release schedule, creative studio annual report, magazine or zine pitch, vintage-flavored brand campaign

![Sakura Chroma](https://designmd.app/images/library/448.png)

## Historical Context

The Japanese cassette tape wasn't just a medium — it was a canvas. Throughout the 1980s and early 90s, independent labels in Tokyo and Osaka turned tape packaging into miniature graphic design exhibitions. Rainbow-spectrum gradients, holographic foils, and condensed sans-serifs crammed onto J-cards created a visual language that screamed maximalism before the word entered design discourse. These weren't accidents of taste; they were deliberate acts of rebellion against the sterile minimalism already creeping into corporate Japan. Barlow Condensed lives in that same tension — industrial bones dressed in pop clothing. It's a typeface that wants to be loud without shouting, dense without suffocating. Pair it with chromatic ribbon motifs and you get something that feels like finding a pristine City Pop cassette in a Shimokitazawa record shop. The nostalgia is real, but the energy is forward-facing. Sakura Chroma takes this lineage seriously. It doesn't cosplay as retro — it understands why those designers made those choices and translates the intent, not just the aesthetic, into a system that works on screens.

## When to Use

Reach for Sakura Chroma when the brief says "colorful" but the client means "intentional." It's built for music brands that need shelf presence in digital spaces, Japanese pop culture projects that respect their source material, and any product bold enough to use a full rainbow without looking like a children's toy. Works beautifully for audio hardware brands, vinyl reissue campaigns, festival identities, and merch lines that need to pop at thumbnail scale.

## Design Principles

- Chromatic density over whitespace — fill the frame with purpose, let color do the breathing
- Condensed type at scale creates rhythm; never set Barlow Condensed small and expect it to whisper
- Rainbow gradients must follow spectral logic — no random color stops, respect the physics of light splitting through a prism
- Ribbon motifs work as structural elements, not decoration — they divide, contain, and direct the eye
- Retro reference without retro limitation — borrow the confidence of 80s Japanese graphic design, leave the technical constraints behind

## DESIGN.md

```
---
version: "alpha"
name: "Sakura Chroma"
description: "Sakura Chroma — Vintage Japanese cassette-package aesthetic: cream paper, diagonal rainbow ribbons, condensed bold type, JIS-style spec checkboxes. Big Shoulders Display typography. warm cream paper canvas with dark warm-brown ink and a six-colour primary palett. Best for product launch or catalogue, indie hardware or analog studio brand, music label or release schedule. AI-ready design system."
colors:
primary: "#F1E6CB"
secondary: "#3A2516"
tertiary: "#E5392A"
neutral: "#E54489"
surface: "#F09131"
accent: "#F0BC2A"
typography:
h1:
fontFamily: Barlow Condensed
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Barlow Condensed
fontSize: 1rem
fontWeight: 400
spacing:
sm: 1.5rem
md: 3.0rem
lg: 6.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Sakura Chroma — Vintage Japanese cassette-package aesthetic: cream paper, diagonal rainbow ribbons, condensed bold type, JIS-style spec checkboxes. Big Shoulders Display typography. warm cream paper canvas with dark warm-brown ink and a six-colour primary palett. Best for product launch or catalogue, indie hardware or analog studio brand, music label or release schedule. AI-ready design system. The Japanese cassette tape wasn't just a medium — it was a canvas. Throughout the 1980s and early 90s, independent labels in Tokyo and Osaka turned tape packaging into miniature graphic design exhibitions. Rainbow-spectrum gradients, holographic foils, and condensed sans-serifs crammed onto J-cards created a visual language that screamed maximalism before the word entered design discourse. These weren't accidents of taste; they were deliberate acts of rebellion against the sterile minimalism already creeping into corporate Japan.

Barlow Condensed lives in that same tension — industrial bones dressed in pop clothing. It's a typeface that wants to be loud without shouting, dense without suffocating. Pair it with chromatic ribbon motifs and you get something that feels like finding a pristine City Pop cassette in a Shimokitazawa record shop. The nostalgia is real, but the energy is forward-facing.

Sakura Chroma takes this lineage seriously. It doesn't cosplay as retro — it understands why those designers made those choices and translates the intent, not just the aesthetic, into a system that works on screens.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Vintage Japanese, Tactile, Product-Catalogue, Kawaii-Tech
- **Keywords:** Japanese cassette, rainbow ribbons, Barlow Condensed, vintage, kawaii-tech, tactile, product-catalogue
- **Era:** 1980s Retro
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Paper** (#F1E6CB) — Primary surface or dominant color
- **Ink** (#3A2516) — Accent highlight, links and focus states
- **Red** (#E5392A) — Secondary accent
- **Pink** (#E54489) — Accent color, emphasis elements
- **Orange** (#F09131) — Extended palette, decorative use
- **Yellow** (#F0BC2A) — Background alternate
- **Green** (#3D9F47) — Muted text / borders
- **Blue** (#3F8BC4) — Extended palette

## Typography

- **Display / Hero:** Big Shoulders Display — Weight 700, tight tracking, used for headline impact
- **Body:** Albert Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Albert Sans — 0.875rem, weight 500, slight letter-spacing
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

display font Big Shoulders Display for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, diagonal rainbow ribbon stripes, condensed display lockups, JIS checkbox specs

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** 4px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 4px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Big Shoulders Display display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)

## Use Case

product launch or catalogue, indie hardware or analog studio brand, music label or release schedule, creative studio annual report, magazine or zine pitch, vintage-flavored brand campaign
```

[Download DESIGN.md](https://designmd.app/library/sakura-chroma/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Barlow Condensed', sans-serif; font-weight: 800; background: #F5F0E0; color: #1A1A1A; background-image: repeating-linear-gradient(45deg, transparent 0, transparent 10px, rgba(255,100,100,0.15) 10px, rgba(255,100,100,0.15) 20px)
```

### Variables

```
--bg: #F1E6CB, --fg: #3A2516, --accent: #3A2516, --font-display: 'Big Shoulders Display', --font-body: 'Albert Sans', --radius: 4px, --spacing: 1.5rem
```

### Checklist

☐ Big Shoulders Display display font loaded via Google Fonts, ☐ Color palette variables applied consistently, ☐ Typography scale: hero clamp(2.5rem,5vw,4rem), H1 2.25rem, body 1rem/1.6, ☐ WCAG AA contrast ratio verified (4.5:1 body text), ☐ Mobile responsive layout (stack below 768px)

## Colors

Primary

#F1E6CB

#3A2516

#E5392A

Secondary

#E54489

#F09131

#F0BC2A

#3D9F47

### Effects

display font Big Shoulders Display for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, diagonal rainbow ribbon stripes, condensed display lockups, JIS checkbox specs

### Light/Dark

✓ Full / ✗ None

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Sakura Chroma
- **Type:** Vintage Japanese, Tactile, Product-Catalogue, Kawaii-Tech
- **Keywords:** Japanese cassette, rainbow ribbons, Barlow Condensed, vintage, kawaii-tech, tactile, product-catalogue
- **Era:** 1980s Retro
- **Light/Dark:** ✓ Full / ✗ None

## Color Palette

- **Primary:** Paper #F1E6CB, Ink #3A2516, Red #E5392A
- **Secondary:** Pink #E54489, Orange #F09131, Yellow #F0BC2A, Green #3D9F47

## Visual Effects

display font Big Shoulders Display for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, diagonal rainbow ribbon stripes, condensed display lockups, JIS checkbox specs

## AI Visual Direction

Design a vintage Japanese cassette-package layout. Use: cream paper (#F5F0E0), diagonal rainbow ribbon stripes (CSS repeating-linear-gradient 45deg), Barlow Condensed 800 bold for all headlines, JIS-style checkbox spec blocks, primary color palette (red, blue, yellow, green). Tactile and product-catalogue.

## CSS Technical

```css
font-family: 'Barlow Condensed', sans-serif; font-weight: 800; background: #F5F0E0; color: #1A1A1A; background-image: repeating-linear-gradient(45deg, transparent 0, transparent 10px, rgba(255,100,100,0.15) 10px, rgba(255,100,100,0.15) 20px)
```

## Design System Variables

```css
--bg: #F1E6CB, --fg: #3A2516, --accent: #3A2516, --font-display: 'Big Shoulders Display', --font-body: 'Albert Sans', --radius: 4px, --spacing: 1.5rem
```

## Implementation Checklist

- ☐ Big Shoulders Display display font loaded via Google Fonts
- ☐ Color palette variables applied consistently
- ☐ Typography scale: hero clamp(2.5rem,5vw,4rem)
- H1 2.25rem
- body 1rem/1.6
- ☐ WCAG AA contrast ratio verified (4.5:1 body text)
- ☐ Mobile responsive layout (stack below 768px)

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

[![Vibrant & Block-based](https://designmd.app/images/library/6.png) Temas & Verticais ### Vibrant & Block-based](https://designmd.app/library/vibrant-block-based)[![Neubrutalism](https://designmd.app/images/library/38.png) Brutalismo ### Neubrutalism](https://designmd.app/library/neubrutalism)[![Pixel Art](https://designmd.app/images/library/52.png) Retro & Pop ### Pixel Art](https://designmd.app/library/pixel-art)[![Radial Diagram / Donut Chart](https://designmd.app/images/library/87.png) Dados & Infografico ### Radial Diagram / Donut Chart](https://designmd.app/library/radial-diagram-donut-chart)[![Art Nouveau Florido](https://designmd.app/images/library/101.png) Arte & Ilustracao ### Art Nouveau Florido](https://designmd.app/library/art-nouveau-florido)

Last synced: 5/6/2026
