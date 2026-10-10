# Neobrutalismo Crítico

- Source: <https://designmd.app/library/neobrutalismo-critico>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:02:30.304Z

Brutalismo2026+ Jornalismo Alternativo

# Neobrutalismo Crítico

Direct and bold neobrutalist landing page for a social and political critique blog. Ideal for landing pages, modern websites. AI-ready template.

social critiquepoliticalopinionbolddirectrawimpactfulhonestunfilteredstrong

Use case: Landing pages, Modern websites

![Neobrutalismo Crítico](https://designmd.app/images/library/197.png)

## Historical Context

Brutalism in architecture was never about beauty. It was about honesty — concrete left bare, structure exposed, no decorative lies. The buildings said: we refuse to perform for you. That same defiance migrated to the screen. Early web brutalism rejected the polished veneer of corporate design, but it often stopped at aesthetics. It was punk cosplay without the politics. Critical Neobrustalism picks up where that posturing left off. It treats rawness not as style but as stance. The unfinished edge, the visible grid, the refusal to round corners — these aren't choices made for novelty. They're choices made because smoothness is complicity. When every SaaS product looks like it was extruded from the same Figma template, choosing to look uncomfortable is itself a political act. This isn't anti-design. It's anti-consensus. The roughness communicates that the content matters more than the container — that you're here to read, to think, to act. Not to be soothed into scrolling past.

## When to Use

Deploy this when the message is more important than the brand. Political commentary that needs to feel urgent, not curated. Activist campaigns where polish would undermine credibility. Independent journalism that wants distance from the outlets it critiques. Zines, manifestos, grassroots organizing. If your client asks 'can we make it friendlier?' — this isn't for them. It works when discomfort is the point, when you want readers slightly on edge, paying attention.

## Design Principles

- Expose the structure — visible grids, raw borders, no decorative abstraction between content and reader
- Friction is intentional — reject smooth scrolling, soft transitions, and anything that lulls attention
- Typography carries the argument — oversized headlines, tight leading, monospace for data, serif for opinion. Let type do the shouting
- Color as signal, not decoration — high-contrast black/white as default, color only when it means something (red for urgency, yellow for caution)
- No comfort patterns — avoid rounded corners, drop shadows, gradient warmth. If it feels safe, strip it back

## DESIGN.md

```
---
version: "alpha"
name: "Neobrutalismo Crítico"
description: "Direct and bold neobrutalist landing page for a social and political critique blog. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#000000"
secondary: "#FFFFFF"
tertiary: "#CC0000"
neutral: "#36454F"
surface: "#FFD700"
accent: "#000080"
typography:
h1:
fontFamily: Roboto Condensed
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Roboto Condensed
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Direct and bold neobrutalist landing page for a social and political critique blog. Ideal for landing pages, modern websites. AI-ready template. Brutalism in architecture was never about beauty. It was about honesty — concrete left bare, structure exposed, no decorative lies. The buildings said: we refuse to perform for you. That same defiance migrated to the screen. Early web brutalism rejected the polished veneer of corporate design, but it often stopped at aesthetics. It was punk cosplay without the politics.

Critical Neobrustalism picks up where that posturing left off. It treats rawness not as style but as stance. The unfinished edge, the visible grid, the refusal to round corners — these aren't choices made for novelty. They're choices made because smoothness is complicity. When every SaaS product looks like it was extruded from the same Figma template, choosing to look uncomfortable is itself a political act.

This isn't anti-design. It's anti-consensus. The roughness communicates that the content matters more than the container — that you're here to read, to think, to act. Not to be soothed into scrolling past.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Direct, Bold, Opinionated
- **Keywords:** social critique, political, opinion, bold, direct, raw, impactful, honest, unfiltered, strong
- **Era:** 2026+ Jornalismo Alternativo
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Vermelho Alerta** (#CC0000) — Error states, destructive actions
- **Cinza Chumbo** (#36454F) — Secondary text, borders, muted elements
- **Amarelo Cuidado** (#FFD700) — Warning states, attention indicators
- **Azul Escuro** (#000080) — Deep contrast surface
- **Verde Militar** (#4B5320) — Success states, positive indicators
- **Laranja Queimado** (#CC5500) — Warm accent, call-to-action secondary

## Typography

- **Display / Hero:** Roboto Condensed — Weight 700, tight tracking, used for headline impact
- **Body:** Roboto Condensed — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Roboto Condensed — 0.875rem, weight 500, slight letter-spacing
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

Tipografia grande e em negrito, blocos de texto com bordas fortes, imagens em preto e branco com detalhes em cor, layouts de coluna rígidos, micro-interações de destaque de texto, animações de transição de página abruptas.

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

- Do Tipografia grande/negrito
- Do Blocos de texto com bordas
- Do Imagens P&B com cor
- Do Layouts de coluna rígidos
- Do Micro-interações de destaque
- Do Transições abruptas.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/neobrutalismo-critico/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #000000, border: 2px solid #CC0000, box-shadow: 3px 3px 0px #36454F, font-family: "Roboto Condensed, sans-serif", text-transform: uppercase, .headline-bold, .article-block-border, .bw-image-accent.
```

### Variables

```
--black-bg: #000000, --white-text: #FFFFFF, --alert-red: #CC0000, --lead-grey: #36454F, --border-strong: 2px solid #CC0000, --shadow-impact: 3px 3px 0px #36454F, --font-condensed: "Roboto Condensed, sans-serif".
```

### Checklist

☐ Tipografia grande/negrito, ☐ Blocos de texto com bordas, ☐ Imagens P&B com cor, ☐ Layouts de coluna rígidos, ☐ Micro-interações de destaque, ☐ Transições abruptas.

## Colors

Primary

#000000

#FFFFFF

#CC0000

#36454F

Secondary

#FFD700

#000080

#4B5320

#CC5500

### Effects

Tipografia grande e em negrito, blocos de texto com bordas fortes, imagens em preto e branco com detalhes em cor, layouts de coluna rígidos, micro-interações de destaque de texto, animações de transição de página abruptas.

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

- **Name:** Neobrutalismo Crítico
- **Type:** Direct, Bold, Opinionated
- **Keywords:** social critique, political, opinion, bold, direct, raw, impactful, honest, unfiltered, strong
- **Era:** 2026+ Jornalismo Alternativo
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Preto #000000, Branco #FFFFFF, Vermelho Alerta #CC0000, Cinza Chumbo #36454F
- **Secondary:** Amarelo Cuidado #FFD700, Azul Escuro #000080, Verde Militar #4B5320, Laranja Queimado #CC5500

## Visual Effects

Tipografia grande e em negrito, blocos de texto com bordas fortes, imagens em preto e branco com detalhes em cor, layouts de coluna rígidos, micro-interações de destaque de texto, animações de transição de página abruptas.

## AI Visual Direction

Design a direct and bold neobrutalist landing page for a social and political critique blog. Use: large bold typography, text blocks with strong borders, black and white images with color accents, rigid column layouts, text highlight micro-interactions, abrupt page transition animations, alert red and lead grey accents, impactful and unfiltered feel.

## CSS Technical

```css
background: #FFFFFF, color: #000000, border: 2px solid #CC0000, box-shadow: 3px 3px 0px #36454F, font-family: "Roboto Condensed, sans-serif", text-transform: uppercase, .headline-bold, .article-block-border, .bw-image-accent.
```

## Design System Variables

```css
--black-bg: #000000, --white-text: #FFFFFF, --alert-red: #CC0000, --lead-grey: #36454F, --border-strong: 2px solid #CC0000, --shadow-impact: 3px 3px 0px #36454F, --font-condensed: "Roboto Condensed, sans-serif".
```

## Implementation Checklist

- ☐ Tipografia grande/negrito
- ☐ Blocos de texto com bordas
- ☐ Imagens P&B com cor
- ☐ Layouts de coluna rígidos
- ☐ Micro-interações de destaque
- ☐ Transições abruptas.

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

[![Brutalismo Urbano Expressivo](https://designmd.app/images/library/198.png) Brutalismo ### Brutalismo Urbano Expressivo](https://designmd.app/library/brutalismo-urbano-expressivo)[![Neobrutalismo Ousado](https://designmd.app/images/library/194.png) Brutalismo ### Neobrutalismo Ousado](https://designmd.app/library/neobrutalismo-ousado)[![Brutalismo Artístico Abstrato](https://designmd.app/images/library/196.png) Brutalismo ### Brutalismo Artístico Abstrato](https://designmd.app/library/brutalismo-artistico-abstrato)[![Brutalismo Sonoro Glitch](https://designmd.app/images/library/195.png) Brutalismo ### Brutalismo Sonoro Glitch](https://designmd.app/library/brutalismo-sonoro-glitch)[![Ukiyo-e Woodblock Revival](https://designmd.app/images/library/161.png) Arte & Ilustracao ### Ukiyo-e Woodblock Revival](https://designmd.app/library/ukiyo-e-woodblock-revival)

Last synced: 4/1/2026
