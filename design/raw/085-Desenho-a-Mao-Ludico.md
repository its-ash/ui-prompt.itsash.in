# Desenho à Mão Lúdico

- Source: <https://designmd.app/library/desenho-a-mao-ludico>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:02:58.303Z

Arte & Ilustracao2026+ Criatividade Artesanal

# Desenho à Mão Lúdico

Playful and organic hand-drawn landing page for a children's illustrator blog. Ideal for landing pages, modern websites. AI-ready template.

hand-drawnillustrationchildrenstoriesplayfulorganicartisticuniquewarmfriendly

Use case: Landing pages, Modern websites

![Desenho à Mão Lúdico](https://designmd.app/images/library/214.png)

## Historical Context

Before screens existed for children, picture books did all the heavy lifting. Wobbly lines, uneven fills, visible brushstrokes — these weren't flaws. They were invitations. A child sees a perfectly rendered sphere and thinks "object." A child sees a lopsided circle with crayon texture and thinks "mine." Digital products for kids spent years chasing vector perfection. Flat design made everything clean, scalable, lifeless. Then studios like Toca Boca and Sago Mini proved what illustrators always knew: imperfection is warmth. A hand-drawn button feels touchable in a way a rounded rectangle never will. The slight wobble of a line communicates safety — someone human made this, for you. The resurgence isn't nostalgia. It's developmental psychology dressed as aesthetics. Young brains respond to organic shapes, irregular edges, visible process. When a character looks like it could have been drawn by an older sibling, the interface stops being software and starts being a companion. That's the gap hand-drawn fills — not decoration, but emotional architecture.

## When to Use

When your audience is under ten and trust matters more than efficiency. Children's apps where delight drives engagement. Educational platforms that need to feel like play, not homework. Parenting brands competing against clinical medical aesthetics. Any product where a parent's first impression needs to say "gentle" before it says "functional." Skip it for dashboards, data-heavy interfaces, or anywhere credibility depends on precision.

## Design Principles

- Embrace line weight variation — uniform strokes read as mechanical, not handmade. Let thickness breathe.
- Limit your palette to 4-6 colors max, slightly desaturated. Children's illustration doesn't mean rainbow explosion — it means considered warmth.
- Build texture into fills, not onto them. Grain, paper noise, and visible brush overlap should feel structural, not filtered on after.
- Scale imperfection with intent — wobbly at small sizes feels charming, wobbly at hero scale feels broken. Calibrate the shake.
- Leave negative space generous. Hand-drawn elements need room to breathe or they collapse into visual noise fast.

## DESIGN.md

```
---
version: "alpha"
name: "Desenho à Mão Lúdico"
description: "Playful and organic hand-drawn landing page for a children's illustrator blog. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#FDFDFD"
secondary: "#87CEEB"
tertiary: "#7CFC00"
neutral: "#FFD700"
surface: "#FFB6C1"
accent: "#FFA07A"
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

Playful and organic hand-drawn landing page for a children's illustrator blog. Ideal for landing pages, modern websites. AI-ready template. Before screens existed for children, picture books did all the heavy lifting. Wobbly lines, uneven fills, visible brushstrokes — these weren't flaws. They were invitations. A child sees a perfectly rendered sphere and thinks "object." A child sees a lopsided circle with crayon texture and thinks "mine."

Digital products for kids spent years chasing vector perfection. Flat design made everything clean, scalable, lifeless. Then studios like Toca Boca and Sago Mini proved what illustrators always knew: imperfection is warmth. A hand-drawn button feels touchable in a way a rounded rectangle never will. The slight wobble of a line communicates safety — someone human made this, for you.

The resurgence isn't nostalgia. It's developmental psychology dressed as aesthetics. Young brains respond to organic shapes, irregular edges, visible process. When a character looks like it could have been drawn by an older sibling, the interface stops being software and starts being a companion. That's the gap hand-drawn fills — not decoration, but emotional architecture.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Playful, Organic, Artistic
- **Keywords:** hand-drawn, illustration, children, stories, playful, organic, artistic, unique, warm, friendly
- **Era:** 2026+ Criatividade Artesanal
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Branco Giz** (#FDFDFD) — Light surface, card backgrounds
- **Azul Céu** (#87CEEB) — Accent highlight, links and focus states
- **Verde Grama** (#7CFC00) — Supporting palette color
- **Amarelo Sol** (#FFD700) — Warning states, attention indicators
- **Rosa Pastel** (#FFB6C1) — Decorative accent, highlight elements
- **Laranja Suave** (#FFA07A) — Warm accent, call-to-action secondary
- **Marrom Claro** (#D2B48C) — Extended palette, decorative use
- **Cinza Lápis** (#A9A9A9) — Secondary text, borders, muted elements

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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Ilustrações desenhadas à mão como elementos principais, tipografia que simula escrita manual, texturas de papel e giz, bordas irregulares, micro-interações de hover com animações de rabisco, transições de seção com efeito de "virar página" de caderno.

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

- Do Ilustrações desenhadas à mão
- Do Tipografia escrita manual
- Do Texturas de papel/giz
- Do Bordas irregulares
- Do Micro-interações de rabisco
- Do Transições de "virar página" de caderno.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/desenho-a-mao-ludico/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FDFDFD, color: #333333, border: 1px dashed #A9A9A9, font-family: "Permanent Marker, cursive", transition: all 0.5s ease-in-out, .hand-drawn-illustration, .scribble-animation, .paper-texture.
```

### Variables

```
--chalk-white: #FDFDFD, --sky-blue: #87CEEB, --grass-green: #7CFC00, --sun-yellow: #FFD700, --font-handwritten: "Permanent Marker, cursive", --paper-texture-bg: url('paper-texture.png'), --border-dashed: 1px dashed #A9A9A9.
```

### Checklist

☐ Ilustrações desenhadas à mão, ☐ Tipografia escrita manual, ☐ Texturas de papel/giz, ☐ Bordas irregulares, ☐ Micro-interações de rabisco, ☐ Transições de "virar página" de caderno.

## Colors

Primary

#FDFDFD

#87CEEB

#7CFC00

#FFD700

Secondary

#FFB6C1

#FFA07A

#D2B48C

#A9A9A9

### Effects

Ilustrações desenhadas à mão como elementos principais, tipografia que simula escrita manual, texturas de papel e giz, bordas irregulares, micro-interações de hover com animações de rabisco, transições de seção com efeito de "virar página" de caderno.

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

- **Name:** Desenho à Mão Lúdico
- **Type:** Playful, Organic, Artistic
- **Keywords:** hand-drawn, illustration, children, stories, playful, organic, artistic, unique, warm, friendly
- **Era:** 2026+ Criatividade Artesanal
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Branco Giz #FDFDFD, Azul Céu #87CEEB, Verde Grama #7CFC00, Amarelo Sol #FFD700
- **Secondary:** Rosa Pastel #FFB6C1, Laranja Suave #FFA07A, Marrom Claro #D2B48C, Cinza Lápis #A9A9A9

## Visual Effects

Ilustrações desenhadas à mão como elementos principais, tipografia que simula escrita manual, texturas de papel e giz, bordas irregulares, micro-interações de hover com animações de rabisco, transições de seção com efeito de "virar página" de caderno.

## AI Visual Direction

Design a playful and organic hand-drawn landing page for a children's illustrator blog. Use: hand-drawn illustrations as main elements, handwritten-style typography, paper and chalk textures, irregular borders, scribble animation hover micro-interactions, notebook page-turn section transitions, sky blue and grass green accents, warm and friendly feel.

## CSS Technical

```css
background: #FDFDFD, color: #333333, border: 1px dashed #A9A9A9, font-family: "Permanent Marker, cursive", transition: all 0.5s ease-in-out, .hand-drawn-illustration, .scribble-animation, .paper-texture.
```

## Design System Variables

```css
--chalk-white: #FDFDFD, --sky-blue: #87CEEB, --grass-green: #7CFC00, --sun-yellow: #FFD700, --font-handwritten: "Permanent Marker, cursive", --paper-texture-bg: url('paper-texture.png'), --border-dashed: 1px dashed #A9A9A9.
```

## Implementation Checklist

- ☐ Ilustrações desenhadas à mão
- ☐ Tipografia escrita manual
- ☐ Texturas de papel/giz
- ☐ Bordas irregulares
- ☐ Micro-interações de rabisco
- ☐ Transições de "virar página" de caderno.

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

[![Artesanato Orgânico e Acolhedor](https://designmd.app/images/library/215.png) Arte & Ilustracao ### Artesanato Orgânico e Acolhedor](https://designmd.app/library/artesanato-organico-e-acolhedor)[![Café Artesanal Aconchegante](https://designmd.app/images/library/216.png) Arte & Ilustracao ### Café Artesanal Aconchegante](https://designmd.app/library/cafe-artesanal-aconchegante)[![Aprendizado Criativo Artesanal](https://designmd.app/images/library/218.png) Arte & Ilustracao ### Aprendizado Criativo Artesanal](https://designmd.app/library/aprendizado-criativo-artesanal)[![Criatividade Artesanal e Pessoal](https://designmd.app/images/library/217.png) Arte & Ilustracao ### Criatividade Artesanal e Pessoal](https://designmd.app/library/criatividade-artesanal-e-pessoal)[![Claymation 3D](https://designmd.app/images/library/86.png) Retro & Pop ### Claymation 3D](https://designmd.app/library/claymation-3d)

Last synced: 4/1/2026
