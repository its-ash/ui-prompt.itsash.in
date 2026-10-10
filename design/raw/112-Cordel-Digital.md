# Cordel Digital

- Source: <https://designmd.app/library/cordel-digital>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:03:39.270Z

BrasilTradição Nordestina Digital

# Cordel Digital

Brazilian cordel literature style landing page. Ideal for landing pages culturais, projetos nordestinos, sites artísticos. AI-ready template.

cordelwoodcutxylographyBrazilian folknarrativeillustratedculturalpoetichandcraftedtraditionalnortheasternsertão

Use case: Cultural landing pages, Regional Brazilian projects, Artistic websites

![Cordel Digital](https://designmd.app/images/library/239.png)

## Historical Context

Literatura de cordel is Brazil's chapbook tradition — small pamphlets sold hanging from strings (cordéis) at open-air markets across the Northeast since the late 1800s. The stories range from epic bandit tales to political satire, always printed cheap, always passed hand to hand. What makes them visually unforgettable is the xilogravura: woodcut illustrations carved into blocks with pocket knives, printed in stark black ink on rough paper. No gradients. No half-measures. Every line is a commitment. The woodcut aesthetic carries an inherent boldness that translates remarkably well to screens. High contrast, decisive marks, flattened perspective — these aren't limitations, they're a graphic language refined over a century of constraints. The carvers worked fast and small, which forced an economy of form that feels almost modernist in retrospect. Digitally, cordel woodcuts offer something rare: immediate cultural specificity without decorative excess. The style reads at any size. It carries narrative weight. It refuses to be mistaken for generic illustration. When you bring xilogravura into digital design, you're not borrowing an aesthetic — you're channeling a living tradition that still sells millions of pamphlets annually in Brazilian street markets.

## When to Use

Reach for cordel when a project needs unmistakable Brazilian identity without resorting to carnival clichés. It works beautifully for educational content about northeastern culture, packaging for regional food and craft brands, editorial illustration where you need narrative density in a single frame, and cultural institutions that want authenticity over polish. The style also pairs surprisingly well with bold typography — both traditions share that same commitment to the decisive mark.

## Design Principles

- Commit to the cut — every line should feel carved, not drawn. Avoid smoothing or anti-aliasing that softens the woodblock character.
- Honor the constraint of two values. Cordel woodcuts are binary: ink or paper. Resist adding grays, gradients, or tonal complexity that dilutes the graphic punch.
- Flatten perspective deliberately. Xilogravura uses stacked planes and symbolic scale (important figures are larger) rather than Western perspective. Lean into this.
- Let texture speak. The grain of wood, the bleed of cheap ink, the rough registration — these imperfections are the voice of the medium. Preserve them digitally rather than cleaning them away.
- Narrative over decoration. Every cordel illustration tells a story. If your element isn't advancing a narrative or conveying specific meaning, it doesn't belong in the composition.

## DESIGN.md

```
---
version: "alpha"
name: "Cordel Digital"
description: "Brazilian cordel literature style landing page. Ideal for landing pages culturais, projetos nordestinos, sites artísticos. AI-ready template."
colors:
primary: "#000000"
secondary: "#FFFFFF"
tertiary: "#F5DEB3"
neutral: "#8B4513"
surface: "#8B0000"
accent: "#4682B4"
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
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Brazilian cordel literature style landing page. Ideal for landing pages culturais, projetos nordestinos, sites artísticos. AI-ready template. Literatura de cordel is Brazil's chapbook tradition — small pamphlets sold hanging from strings (cordéis) at open-air markets across the Northeast since the late 1800s. The stories range from epic bandit tales to political satire, always printed cheap, always passed hand to hand. What makes them visually unforgettable is the xilogravura: woodcut illustrations carved into blocks with pocket knives, printed in stark black ink on rough paper. No gradients. No half-measures. Every line is a commitment.

The woodcut aesthetic carries an inherent boldness that translates remarkably well to screens. High contrast, decisive marks, flattened perspective — these aren't limitations, they're a graphic language refined over a century of constraints. The carvers worked fast and small, which forced an economy of form that feels almost modernist in retrospect.

Digitally, cordel woodcuts offer something rare: immediate cultural specificity without decorative excess. The style reads at any size. It carries narrative weight. It refuses to be mistaken for generic illustration. When you bring xilogravura into digital design, you're not borrowing an aesthetic — you're channeling a living tradition that still sells millions of pamphlets annually in Brazilian street markets.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Narrative, Illustrated, Cultural, Poetic
- **Keywords:** cordel, woodcut, xylography, Brazilian folk, narrative, illustrated, cultural, poetic, handcrafted, traditional, northeastern, sertão
- **Era:** Tradição Nordestina Digital
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Amarelo Pergaminho** (#F5DEB3) — Warning states, attention indicators
- **Marrom Rústico** (#8B4513) — Supporting palette color
- **Vermelho Sangue** (#8B0000) — Error states, destructive actions
- **Azul Sertão** (#4682B4) — Secondary accent
- **Verde Caatinga** (#556B2F) — Success states, positive indicators
- **Laranja Crepúsculo** (#CD853F) — Warm accent, call-to-action secondary

## Typography

- **Display / Hero:** Playfair Display — Weight 700, tight tracking, used for headline impact
- **Accent:** Merriweather — Used for decorative or emphasis text
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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Ilustrações em estilo xilogravura como elementos visuais principais, tipografia serifada que remete a folhetos de cordel, layouts que simulam páginas de livreto, bordas decorativas com padrões de cordel, fundos com textura de papel envelhecido, divisores de seção com motivos xilográficos, composições narrativas que contam uma história visual, elementos decorativos de moldura artesanal.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Xilogravura como elementos visuais
- Do Tipografia serifada de cordel
- Do Layout de livreto
- Do Bordas decorativas
- Do Textura de papel envelhecido
- Do Divisores xilográficos.

## Use Case

Cultural landing pages, Regional Brazilian projects, Artistic websites
```

[Download DESIGN.md](https://designmd.app/library/cordel-digital/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Playfair Display', 'Merriweather', serif for body text, 'Special Elite' or monospace for accents, color: #000000 on #F5DEB3 parchment backgrounds, border: 2-3px solid #8B4513, background: aged paper textures using CSS gradients and noise, box-shadow: inset 0 0 20px rgba(139,69,19,0.2) for paper depth, text-align: justify for body text, line-height: 1.8 for readability, decorative borders using CSS border-image or pseudo-elements.
```

### Variables

```
--color-black: #000000, --color-white: #FFFFFF, --color-parchment: #F5DEB3, --color-brown: #8B4513, --color-blood-red: #8B0000, --color-sertao-blue: #4682B4, --font-serif: 'Playfair Display', serif, --font-accent: 'Special Elite', monospace, --border-decorative: 3px solid #8B4513, --shadow-paper: inset 0 0 20px rgba(139,69,19,0.2), --line-height-reading: 1.8.
```

### Checklist

☐ Xilogravura como elementos visuais, ☐ Tipografia serifada de cordel, ☐ Layout de livreto, ☐ Bordas decorativas, ☐ Textura de papel envelhecido, ☐ Divisores xilográficos.

## Colors

Primary

#000000

#FFFFFF

#F5DEB3

#8B4513

Secondary

#8B0000

#4682B4

#556B2F

#CD853F

### Effects

Ilustrações em estilo xilogravura como elementos visuais principais, tipografia serifada que remete a folhetos de cordel, layouts que simulam páginas de livreto, bordas decorativas com padrões de cordel, fundos com textura de papel envelhecido, divisores de seção com motivos xilográficos, composições narrativas que contam uma história visual, elementos decorativos de moldura artesanal.

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

- **Name:** Cordel Digital
- **Type:** Narrative, Illustrated, Cultural, Poetic
- **Keywords:** cordel, woodcut, xylography, Brazilian folk, narrative, illustrated, cultural, poetic, handcrafted, traditional, northeastern, sertão
- **Era:** Tradição Nordestina Digital
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Preto #000000, Branco #FFFFFF, Amarelo Pergaminho #F5DEB3, Marrom Rústico #8B4513
- **Secondary:** Vermelho Sangue #8B0000, Azul Sertão #4682B4, Verde Caatinga #556B2F, Laranja Crepúsculo #CD853F

## Visual Effects

Ilustrações em estilo xilogravura como elementos visuais principais, tipografia serifada que remete a folhetos de cordel, layouts que simulam páginas de livreto, bordas decorativas com padrões de cordel, fundos com textura de papel envelhecido, divisores de seção com motivos xilográficos, composições narrativas que contam uma história visual, elementos decorativos de moldura artesanal.

## AI Visual Direction

Design a Brazilian cordel literature style landing page. Use: woodcut/xylography style illustrations as main visual elements, serif typography reminiscent of cordel booklets, layouts simulating booklet pages, decorative borders with cordel patterns, aged paper texture backgrounds, xylographic section dividers, narrative visual compositions that tell a story, handcrafted frame decorative elements, black and parchment color scheme, northeastern Brazilian folk aesthetic.

## CSS Technical

```css
font-family: 'Playfair Display', 'Merriweather', serif for body text, 'Special Elite' or monospace for accents, color: #000000 on #F5DEB3 parchment backgrounds, border: 2-3px solid #8B4513, background: aged paper textures using CSS gradients and noise, box-shadow: inset 0 0 20px rgba(139,69,19,0.2) for paper depth, text-align: justify for body text, line-height: 1.8 for readability, decorative borders using CSS border-image or pseudo-elements.
```

## Design System Variables

```css
--color-black: #000000, --color-white: #FFFFFF, --color-parchment: #F5DEB3, --color-brown: #8B4513, --color-blood-red: #8B0000, --color-sertao-blue: #4682B4, --font-serif: 'Playfair Display', serif, --font-accent: 'Special Elite', monospace, --border-decorative: 3px solid #8B4513, --shadow-paper: inset 0 0 20px rgba(139,69,19,0.2), --line-height-reading: 1.8.
```

## Implementation Checklist

- ☐ Xilogravura como elementos visuais
- ☐ Tipografia serifada de cordel
- ☐ Layout de livreto
- ☐ Bordas decorativas
- ☐ Textura de papel envelhecido
- ☐ Divisores xilográficos.

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

[![Bossa Nova Lounge](https://designmd.app/images/library/240.png) Brasil ### Bossa Nova Lounge](https://designmd.app/library/bossa-nova-lounge)[![Maracatu Tech](https://designmd.app/images/library/241.png) Brasil ### Maracatu Tech](https://designmd.app/library/maracatu-tech)[![Tropicalismo Indígena Autêntico](https://designmd.app/images/library/245.png) Brasil ### Tropicalismo Indígena Autêntico](https://designmd.app/library/tropicalismo-indigena-autentico)[![Símbolos Culturais Brasileiros](https://designmd.app/images/library/254.png) Brasil ### Símbolos Culturais Brasileiros](https://designmd.app/library/simbolos-culturais-brasileiros)[![Azulejaria Digital Moderna](https://designmd.app/images/library/237.png) Brasil ### Azulejaria Digital Moderna](https://designmd.app/library/azulejaria-digital-moderna)

Last synced: 4/1/2026
