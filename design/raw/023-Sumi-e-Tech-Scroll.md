# Sumi-e Tech Scroll

- Source: <https://designmd.app/library/sumi-e-tech-scroll>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:01:33.301Z

Arte & IlustracaoTraditional/Modern Fusion

# Sumi-e Tech Scroll

Sumi-e style landing, ink wash painting, rice paper texture, red seal accent, isometric tech details, east asian aesthetic. Ideal for landing pages, modern websites. AI-ready template.

sumi-einkasiantraditionallandscapetechisometricred accent

Use case: Landing pages, Modern websites

![Sumi-e Tech Scroll](https://designmd.app/images/library/159.png)

## Historical Context

Sumi-e didn't arrive in digital design through some trend cycle. It seeped in. The practice — born in Tang Dynasty China, refined into spiritual discipline by Japanese monks — was never about depicting reality. It was about capturing essence in a single, irreversible stroke. No undo button. No layers panel. Just ink, water, and breath. That philosophy translates to interfaces more honestly than most designers admit. The controlled imperfection of a brush loaded with varying ink density maps directly to how we think about visual weight and hierarchy. A thick downstroke commands attention the way a bold headline does. A trailing whisper of dry brush creates the same tension as generous whitespace around a call to action. The relationship between mark and void — that's layout theory distilled to its oldest form. What makes sumi-e genuinely useful as a design reference isn't the aesthetic (though it's gorgeous). It's the underlying constraint: say more with less. Ma — the Japanese concept of negative space as active, breathing presence — predates every minimalism manifesto by centuries. Empty space isn't absence. It's architecture.

## When to Use

Reach for this when the brand needs to feel unhurried. Meditation apps, tea ceremonies gone digital, wellness platforms that actually want calm instead of performing it. Japanese heritage brands that refuse to look like every other sans-serif-and-gradient SaaS page. Cultural institutions presenting Asian art or philosophy. Any project where the brief says 'minimal' but means it — where whitespace carries meaning and every element earns its place on screen.

## Design Principles

- Ma as structure — treat empty space as a load-bearing element, not leftover canvas
- Single-stroke commitment — each UI element should feel intentional and irreversible, no visual hedging
- Ink gradation hierarchy — use opacity and weight variation the way a brush uses water-to-ink ratio
- Asymmetric balance — reject centered symmetry in favor of dynamic tension between elements
- Wabi-sabi tolerance — allow controlled imperfection in textures, edges, and organic shapes

## DESIGN.md

```
---
version: "alpha"
name: "Sumi-e Tech Scroll"
description: "Sumi-e style landing, ink wash painting, rice paper texture, red seal accent, isometric tech details, east asian aesthetic. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#F4F1E8"
secondary: "#0D0D0D"
tertiary: "#8A1C15"
neutral: "#000000"
surface: "#808080"
accent: "#F4F1E8"
typography:
h1:
fontFamily: Noto Serif JP
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Noto Serif JP
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Sumi-e style landing, ink wash painting, rice paper texture, red seal accent, isometric tech details, east asian aesthetic. Ideal for landing pages, modern websites. AI-ready template. Sumi-e didn't arrive in digital design through some trend cycle. It seeped in. The practice — born in Tang Dynasty China, refined into spiritual discipline by Japanese monks — was never about depicting reality. It was about capturing essence in a single, irreversible stroke. No undo button. No layers panel. Just ink, water, and breath.

That philosophy translates to interfaces more honestly than most designers admit. The controlled imperfection of a brush loaded with varying ink density maps directly to how we think about visual weight and hierarchy. A thick downstroke commands attention the way a bold headline does. A trailing whisper of dry brush creates the same tension as generous whitespace around a call to action. The relationship between mark and void — that's layout theory distilled to its oldest form.

What makes sumi-e genuinely useful as a design reference isn't the aesthetic (though it's gorgeous). It's the underlying constraint: say more with less. Ma — the Japanese concept of negative space as active, breathing presence — predates every minimalism manifesto by centuries. Empty space isn't absence. It's architecture.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Cultural, Artistic, Fused
- **Keywords:** sumi-e, ink, asian, traditional, landscape, tech, isometric, red accent
- **Era:** Traditional/Modern Fusion
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#F4F1E8) — Primary background surface
- **Text** (#0D0D0D) — Primary text color
- **Accent** (#8A1C15) — Primary accent, CTAs and interactive elements
- **Ink Black** (#000000) — Deep contrast surface
- **Wash Grey** (#808080) — Secondary text, borders, muted elements
- **Paper Cream** (#F4F1E8) — Secondary surface

## Typography

- **Display / Hero:** Noto Serif JP — Weight 700, tight tracking, used for headline impact
- **Body:** Noto Serif JP — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Noto Serif JP — 0.875rem, weight 500, slight letter-spacing
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

Traditional ink wash landscapes mixed with modern isometric technical diagrams, aged rice paper grain, ink bleed.

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

- Do Rice paper texture background
- Do Ink wash (sumi-e) visual elements
- Do Red stamp/seal accents
- Do Isometric/Tech overlays on traditional art
- Do Brush stroke borders

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/sumi-e-tech-scroll/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background-color: #F4F1E8; color: #0D0D0D; font-family: 'Noto Serif JP', serif; background-image: url('https://www.transparenttextures.com/patterns/rice-paper.png'); border-left: 5px solid #8A1C15;
```

### Variables

```
--rice-paper: #F4F1E8, --ink-black: #0D0D0D, --seal-red: #8A1C15, --font-serif: 'Noto Serif JP', serif, --ink-wash: rgba(0,0,0,0.1)
```

### Checklist

☐ Rice paper texture background, ☐ Ink wash (sumi-e) visual elements, ☐ Red stamp/seal accents, ☐ Isometric/Tech overlays on traditional art, ☐ Brush stroke borders

## Colors

Primary

#F4F1E8

#0D0D0D

#8A1C15

Secondary

#000000

#808080

#F4F1E8

### Effects

Traditional ink wash landscapes mixed with modern isometric technical diagrams, aged rice paper grain, ink bleed.

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

- **Name:** Sumi-e Tech Scroll
- **Type:** Cultural, Artistic, Fused
- **Keywords:** sumi-e, ink, asian, traditional, landscape, tech, isometric, red accent
- **Era:** Traditional/Modern Fusion
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Background #F4F1E8, Text #0D0D0D, Accent #8A1C15
- **Secondary:** Ink Black #000000, Wash Grey #808080, Paper Cream #F4F1E8

## Visual Effects

Traditional ink wash landscapes mixed with modern isometric technical diagrams, aged rice paper grain, ink bleed.

## AI Visual Direction

sumi-e style landing, ink wash painting, rice paper texture, red seal accent, isometric tech details, east asian aesthetic.

## CSS Technical

```css
background-color: #F4F1E8; color: #0D0D0D; font-family: 'Noto Serif JP', serif; background-image: url('https://www.transparenttextures.com/patterns/rice-paper.png'); border-left: 5px solid #8A1C15;
```

## Design System Variables

```css
--rice-paper: #F4F1E8, --ink-black: #0D0D0D, --seal-red: #8A1C15, --font-serif: 'Noto Serif JP', serif, --ink-wash: rgba(0,0,0,0.1)
```

## Implementation Checklist

- ☐ Rice paper texture background
- ☐ Ink wash (sumi-e) visual elements
- ☐ Red stamp/seal accents
- ☐ Isometric/Tech overlays on traditional art
- ☐ Brush stroke borders

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

[![Ghibli-Inspired Narrative Map](https://designmd.app/images/library/160.png) Arte & Ilustracao ### Ghibli-Inspired Narrative Map](https://designmd.app/library/ghibli-inspired-narrative-map)[![Ukiyo-e Woodblock Revival](https://designmd.app/images/library/161.png) Arte & Ilustracao ### Ukiyo-e Woodblock Revival](https://designmd.app/library/ukiyo-e-woodblock-revival)[![Thermal Insight Tech](https://designmd.app/images/library/173.png) Futurista & Tech ### Thermal Insight Tech](https://designmd.app/library/thermal-insight-tech)[![Cyberpunk Dark Mode Flow](https://designmd.app/images/library/177.png) Futurista & Tech ### Cyberpunk Dark Mode Flow](https://designmd.app/library/cyberpunk-dark-mode-flow)[![Manga Instructional Comic](https://designmd.app/images/library/179.png) Retro & Pop ### Manga Instructional Comic](https://designmd.app/library/manga-instructional-comic)

Last synced: 4/1/2026
