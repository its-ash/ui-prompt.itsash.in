# Maracatu Tech

- Source: <https://designmd.app/library/maracatu-tech>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:03:40.305Z

BrasilTradição Afro-Brasileira Digital

# Maracatu Tech

Maracatu percussion-inspired tech landing page. Ideal for landing pages culturais, projetos afro-brasileiros, sites energéticos. AI-ready template.

maracatupercussionrhythmboldculturalenergeticcarnivalPernambucodrumstribalgeometric patternsAfrican-Brazilianvibrantpowerful

Use case: Cultural landing pages, Afro-Brazilian projects, Energetic websites

![Maracatu Tech](https://designmd.app/images/library/241.png)

## Historical Context

Maracatu is not folklore frozen in amber. It's a living system — polyrhythmic, layered, built on centuries of Afro-Brazilian resistance in Pernambuco. The alfaias thunder in patterns that repeat but never feel mechanical. The abês cut through with metallic precision. Every carnival in Recife, these nações move as coordinated organisms: dozens of percussionists locked into interlocking cycles that would make any UX choreographer jealous. So when we talk about maracatu meeting technology, we're not slapping tribal patterns on a dashboard. We're studying how complex rhythmic systems communicate hierarchy, timing, and emphasis without words. The visual culture surrounding maracatu — the rich indigos, the gold leaf on caboclos de lança, the geometric beadwork — carries information density that digital interfaces rarely achieve. Color isn't decoration; it signals role, lineage, spiritual alignment. The translation to digital isn't literal. It's structural. How do you build an interface that breathes with the same polyrhythmic confidence? That layers information the way a batuque layers sound — each element independent yet inseparable from the whole?

## When to Use

Reach for Maracatu Tech when you're building anything that needs to feel rhythmic without being predictable. Music technology platforms. Brazilian cultural projects that refuse to be sanitized. Rhythm-based apps where timing and pulse matter more than static layout. Afro-Brazilian brands that want visual identity rooted in tradition but absolutely contemporary. Works beautifully for interfaces with repeating modular elements — cards, timelines, sequencers — where the grid itself becomes percussive.

## Design Principles

- Polyrhythmic layering — multiple visual rhythms coexist without competing. Your grid, your type scale, your color cadence each follow their own cycle, syncing at key downbeats.
- Density without clutter — maracatu packs dozens of instruments into a unified wall of sound. Your interface should carry rich information density while maintaining absolute clarity of hierarchy.
- Cyclic repetition with variation — elements repeat but transform. No two cards identical, yet all unmistakably part of the same nação. Use modular components that shift weight, color, or proportion across instances.
- Warm saturation as structure — deep indigos, burnt golds, oxblood reds aren't accents. They're load-bearing. Color does architectural work, defining zones and signaling function the way costume colors identify roles in the cortejo.
- Collective pulse over individual flourish — no single element showboats. The power comes from coordination. Micro-interactions, transitions, and scroll behaviors should feel like ensemble timing, not solo virtuosity.

## DESIGN.md

```
---
version: "alpha"
name: "Maracatu Tech"
description: "Maracatu percussion-inspired tech landing page. Ideal for landing pages culturais, projetos afro-brasileiros, sites energéticos. AI-ready template."
colors:
primary: "#C41E3A"
secondary: "#DAA520"
tertiary: "#0D0D0D"
neutral: "#002FA7"
surface: "#009B3A"
accent: "#6A0DAD"
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

Maracatu percussion-inspired tech landing page. Ideal for landing pages culturais, projetos afro-brasileiros, sites energéticos. AI-ready template. Maracatu is not folklore frozen in amber. It's a living system — polyrhythmic, layered, built on centuries of Afro-Brazilian resistance in Pernambuco. The alfaias thunder in patterns that repeat but never feel mechanical. The abês cut through with metallic precision. Every carnival in Recife, these nações move as coordinated organisms: dozens of percussionists locked into interlocking cycles that would make any UX choreographer jealous.

So when we talk about maracatu meeting technology, we're not slapping tribal patterns on a dashboard. We're studying how complex rhythmic systems communicate hierarchy, timing, and emphasis without words. The visual culture surrounding maracatu — the rich indigos, the gold leaf on caboclos de lança, the geometric beadwork — carries information density that digital interfaces rarely achieve. Color isn't decoration; it signals role, lineage, spiritual alignment.

The translation to digital isn't literal. It's structural. How do you build an interface that breathes with the same polyrhythmic confidence? That layers information the way a batuque layers sound — each element independent yet inseparable from the whole?

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Rhythmic, Bold, Cultural, Energetic
- **Keywords:** maracatu, percussion, rhythm, bold, cultural, energetic, carnival, Pernambuco, drums, tribal, geometric patterns, African-Brazilian, vibrant, powerful
- **Era:** Tradição Afro-Brasileira Digital
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Vermelho Intenso** (#C41E3A) — Error states, destructive actions
- **Dourado Imperial** (#DAA520) — Premium accent, decorative highlights
- **Preto Profundo** (#0D0D0D) — Primary background surface
- **Azul Royal** (#002FA7) — Accent highlight, links and focus states
- **Verde Bandeira** (#009B3A) — Success states, positive indicators
- **Roxo Majestade** (#6A0DAD) — Accent color, emphasis elements
- **Laranja Fogo** (#FF4500) — Warm accent, call-to-action secondary
- **Branco Puro** (#FFFFFF) — Secondary surface

## Typography

- **Display / Hero:** Bebas Neue — Weight 700, tight tracking, used for headline impact
- **Accent:** Oswald — Used for decorative or emphasis text
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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Padrões geométricos tribais repetitivos como backgrounds e bordas, tipografia bold e impactante com peso visual forte, layouts rítmicos com alternância de blocos grandes e pequenos, elementos decorativos inspirados em estandartes e bandeiras de maracatu, animações pulsantes que remetem a batidas de tambor, gradientes dramáticos de cores intensas, bordas douradas ornamentais, texturas de tecido ou couro.

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

- Do Padrões geométricos tribais
- Do Tipografia bold impactante
- Do Layouts rítmicos
- Do Estandartes de maracatu
- Do Animações pulsantes
- Do Bordas douradas ornamentais.

## Use Case

Cultural landing pages, Afro-Brazilian projects, Energetic websites
```

[Download DESIGN.md](https://designmd.app/library/maracatu-tech/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Bebas Neue', 'Oswald', sans-serif for headings, 'Roboto', sans-serif for body, background: repeating-linear-gradient and repeating-conic-gradient for tribal patterns, color: #FFFFFF on dark backgrounds, border: 3px solid #DAA520 for golden borders, box-shadow: 0 0 20px rgba(218,165,32,0.3) for golden glow, animation: pulse 2s ease-in-out infinite for rhythmic elements, text-transform: uppercase, letter-spacing: 0.15em.
```

### Variables

```
--color-intense-red: #C41E3A, --color-imperial-gold: #DAA520, --color-deep-black: #0D0D0D, --color-royal-blue: #002FA7, --color-flag-green: #009B3A, --color-majesty-purple: #6A0DAD, --font-heading: 'Bebas Neue', sans-serif, --font-body: 'Roboto', sans-serif, --border-golden: 3px solid #DAA520, --glow-gold: 0 0 20px rgba(218,165,32,0.3), --animation-pulse: pulse 2s ease-in-out infinite.
```

### Checklist

☐ Padrões geométricos tribais, ☐ Tipografia bold impactante, ☐ Layouts rítmicos, ☐ Estandartes de maracatu, ☐ Animações pulsantes, ☐ Bordas douradas ornamentais.

## Colors

Primary

#C41E3A

#DAA520

#0D0D0D

#002FA7

Secondary

#009B3A

#6A0DAD

#FF4500

#FFFFFF

### Effects

Padrões geométricos tribais repetitivos como backgrounds e bordas, tipografia bold e impactante com peso visual forte, layouts rítmicos com alternância de blocos grandes e pequenos, elementos decorativos inspirados em estandartes e bandeiras de maracatu, animações pulsantes que remetem a batidas de tambor, gradientes dramáticos de cores intensas, bordas douradas ornamentais, texturas de tecido ou couro.

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

- **Name:** Maracatu Tech
- **Type:** Rhythmic, Bold, Cultural, Energetic
- **Keywords:** maracatu, percussion, rhythm, bold, cultural, energetic, carnival, Pernambuco, drums, tribal, geometric patterns, African-Brazilian, vibrant, powerful
- **Era:** Tradição Afro-Brasileira Digital
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** Vermelho Intenso #C41E3A, Dourado Imperial #DAA520, Preto Profundo #0D0D0D, Azul Royal #002FA7
- **Secondary:** Verde Bandeira #009B3A, Roxo Majestade #6A0DAD, Laranja Fogo #FF4500, Branco Puro #FFFFFF

## Visual Effects

Padrões geométricos tribais repetitivos como backgrounds e bordas, tipografia bold e impactante com peso visual forte, layouts rítmicos com alternância de blocos grandes e pequenos, elementos decorativos inspirados em estandartes e bandeiras de maracatu, animações pulsantes que remetem a batidas de tambor, gradientes dramáticos de cores intensas, bordas douradas ornamentais, texturas de tecido ou couro.

## AI Visual Direction

Design a Maracatu percussion-inspired tech landing page. Use: repetitive tribal geometric patterns as backgrounds and borders, bold impactful typography with strong visual weight, rhythmic layouts alternating large and small blocks, decorative elements inspired by maracatu banners and flags, pulsating animations reminiscent of drum beats, dramatic intense color gradients, ornamental golden borders, fabric or leather textures, deep red and royal blue with gold accents, powerful energetic African-Brazilian aesthetic.

## CSS Technical

```css
font-family: 'Bebas Neue', 'Oswald', sans-serif for headings, 'Roboto', sans-serif for body, background: repeating-linear-gradient and repeating-conic-gradient for tribal patterns, color: #FFFFFF on dark backgrounds, border: 3px solid #DAA520 for golden borders, box-shadow: 0 0 20px rgba(218,165,32,0.3) for golden glow, animation: pulse 2s ease-in-out infinite for rhythmic elements, text-transform: uppercase, letter-spacing: 0.15em.
```

## Design System Variables

```css
--color-intense-red: #C41E3A, --color-imperial-gold: #DAA520, --color-deep-black: #0D0D0D, --color-royal-blue: #002FA7, --color-flag-green: #009B3A, --color-majesty-purple: #6A0DAD, --font-heading: 'Bebas Neue', sans-serif, --font-body: 'Roboto', sans-serif, --border-golden: 3px solid #DAA520, --glow-gold: 0 0 20px rgba(218,165,32,0.3), --animation-pulse: pulse 2s ease-in-out infinite.
```

## Implementation Checklist

- ☐ Padrões geométricos tribais
- ☐ Tipografia bold impactante
- ☐ Layouts rítmicos
- ☐ Estandartes de maracatu
- ☐ Animações pulsantes
- ☐ Bordas douradas ornamentais.

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

[![Cordel Digital](https://designmd.app/images/library/239.png) Brasil ### Cordel Digital](https://designmd.app/library/cordel-digital)[![Bossa Nova Lounge](https://designmd.app/images/library/240.png) Brasil ### Bossa Nova Lounge](https://designmd.app/library/bossa-nova-lounge)[![Tropicalismo Indígena Autêntico](https://designmd.app/images/library/245.png) Brasil ### Tropicalismo Indígena Autêntico](https://designmd.app/library/tropicalismo-indigena-autentico)[![Pop Art](https://designmd.app/images/library/315.png) Arte & Ilustracao ### Pop Art](https://designmd.app/library/pop-art)[![Graffiti](https://designmd.app/images/library/317.png) Arte & Ilustracao ### Graffiti](https://designmd.app/library/graffiti)

Last synced: 4/1/2026
