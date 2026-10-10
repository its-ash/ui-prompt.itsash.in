# Símbolos Cívicos Brasileiros

- Source: <https://designmd.app/library/simbolos-civicos-brasileiros>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:04:02.302Z

Brasil2026+ Cidadania Digital

# Símbolos Cívicos Brasileiros

Design an informative and symbolic landing page for a civic education platform, inspired by Aloísio Magalhães' graphic identity. Ideal for landing pages, saas. AI-ready template.

civic educationsocial awarenessBrazilian identitysymbolicengagingmodernclearstructuredimpactfulcommunity

Use case: Landing pages, SaaS

![Símbolos Cívicos Brasileiros](https://designmd.app/images/library/252.png)

## Historical Context

Brazil's civic visual language didn't emerge from a design studio. It was forged through political rupture — the Republic's flag adopted in 1889 carried positivist philosophy literally stitched into its fabric. Green for the House of Braganza, yellow for the Habsburgs, the celestial globe frozen at a specific moment in time over Rio. These aren't arbitrary choices. They're ideological artifacts. Translating this weight into digital platforms is where most government projects fail. They flatten the symbolism into decorative stripe patterns or slap the flag on a header and call it civic design. The real opportunity is structural: how do you encode the democratic tension between order and progress into an interface that teaches citizenship? The green-yellow-blue palette carries baggage — it's been co-opted by political movements across the spectrum. A civic design system must acknowledge this complexity rather than pretend neutrality. The best Brazilian civic digital work treats national symbols as living typography — elements that carry meaning through context, not just color. Platforms like gov.br started getting this right around 2020, moving away from literal flag reproduction toward systemic use of civic color relationships.

## When to Use

Government education portals. Civic engagement platforms where citizens interact with democratic processes. Social project interfaces that need institutional trust without authoritarian aesthetics. School platforms teaching Brazilian history and civics. Voter education tools. Public consultation systems. Any context where you need to say 'this is Brazil, this is official, this matters' without wrapping everything in a flag.

## Design Principles

- Civic palette as system, not decoration — green, yellow, blue, and white function as semantic tokens (trust, action, information, space) rather than patriotic wallpaper
- Institutional gravity without rigidity — use the weight of national symbols to establish authority, then let the interface breathe with generous whitespace and clear hierarchy
- Symbol literacy over symbol display — teach what the 27 stars mean, what Ordem e Progresso implies, through interaction design rather than static illustration
- Political neutrality through design restraint — the civic palette has been weaponized by all sides; use it sparingly, structurally, letting content carry the civic message
- Accessibility as democratic principle — if civic education isn't reaching everyone regardless of ability, connection speed, or device, it's failing its own premise

## DESIGN.md

```
---
version: "alpha"
name: "Símbolos Cívicos Brasileiros"
description: "Design an informative and symbolic landing page for a civic education platform, inspired by Aloísio Magalhães' graphic identity. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#009739"
secondary: "#FFD700"
tertiary: "#002776"
neutral: "#FFFFFF"
surface: "#E4002B"
accent: "#FF8C00"
typography:
h1:
fontFamily: Montserrat
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Montserrat
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an informative and symbolic landing page for a civic education platform, inspired by Aloísio Magalhães' graphic identity. Ideal for landing pages, saas. AI-ready template. Brazil's civic visual language didn't emerge from a design studio. It was forged through political rupture — the Republic's flag adopted in 1889 carried positivist philosophy literally stitched into its fabric. Green for the House of Braganza, yellow for the Habsburgs, the celestial globe frozen at a specific moment in time over Rio. These aren't arbitrary choices. They're ideological artifacts.

Translating this weight into digital platforms is where most government projects fail. They flatten the symbolism into decorative stripe patterns or slap the flag on a header and call it civic design. The real opportunity is structural: how do you encode the democratic tension between order and progress into an interface that teaches citizenship? The green-yellow-blue palette carries baggage — it's been co-opted by political movements across the spectrum. A civic design system must acknowledge this complexity rather than pretend neutrality.

The best Brazilian civic digital work treats national symbols as living typography — elements that carry meaning through context, not just color. Platforms like gov.br started getting this right around 2020, moving away from literal flag reproduction toward systemic use of civic color relationships.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Informative, Symbolic, Engaging, Modern
- **Keywords:** civic education, social awareness, Brazilian identity, symbolic, engaging, modern, clear, structured, impactful, community
- **Era:** 2026+ Cidadania Digital
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Verde Bandeira** (#009739) — Primary surface or dominant color
- **Amarelo Ouro** (#FFD700) — Warning states, attention indicators
- **Azul Céu** (#002776) — Accent highlight, links and focus states
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Vermelho Vivo** (#E4002B) — Error states, destructive actions
- **Laranja Vibrante** (#FF8C00) — Warm accent, call-to-action secondary
- **Cinza Claro** (#F0F0F0) — Secondary text, borders, muted elements
- **Preto** (#000000) — Deep contrast surface

## Typography

- **Display / Hero:** Montserrat — Weight 700, tight tracking, used for headline impact
- **Body:** Montserrat — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Montserrat — 0.875rem, weight 500, slight letter-spacing
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

Uso de símbolos gráficos abstratos e geométricos, tipografia sans-serif limpa e impactante, infográficos e visualizações de dados claros, micro-interações de hover com destaque de informações importantes, transições de seção com efeito de "revelação" de conceito.

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

- Do Paleta de cores brasileira verificada
- Do Elementos de comunidade presentes
- Do Tipografia hierárquica clara
- Do Responsividade mobile verificada
- Do Contraste WCAG AA verificado
- Do Conteúdo em PT-BR verificado

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/simbolos-civicos-brasileiros/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #000000, border-bottom: 2px solid #009739, font-family: "Montserrat, sans-serif", transition: all 0.4s ease-in-out, .symbolic-graphic, .infographic-element, .concept-reveal-transition.
```

### Variables

```
--flag-green: #009739, --flag-yellow: #FFD700, --flag-blue: #002776, --white-bg: #FFFFFF, --black-text: #000000, --border-accent: 2px solid #009739, --font-main: "Montserrat, sans-serif", --reveal-duration: 0.4s.
```

### Checklist

☐ Paleta de cores brasileira verificada, ☐ Elementos de comunidade presentes, ☐ Tipografia hierárquica clara, ☐ Responsividade mobile verificada, ☐ Contraste WCAG AA verificado, ☐ Conteúdo em PT-BR verificado

## Colors

Primary

#009739

#FFD700

#002776

#FFFFFF

Secondary

#E4002B

#FF8C00

#F0F0F0

#000000

### Effects

Uso de símbolos gráficos abstratos e geométricos, tipografia sans-serif limpa e impactante, infográficos e visualizações de dados claros, micro-interações de hover com destaque de informações importantes, transições de seção com efeito de "revelação" de conceito.

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

- **Name:** Símbolos Cívicos Brasileiros
- **Type:** Informative, Symbolic, Engaging, Modern
- **Keywords:** civic education, social awareness, Brazilian identity, symbolic, engaging, modern, clear, structured, impactful, community
- **Era:** 2026+ Cidadania Digital
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Verde Bandeira #009739, Amarelo Ouro #FFD700, Azul Céu #002776, Branco #FFFFFF
- **Secondary:** Vermelho Vivo #E4002B, Laranja Vibrante #FF8C00, Cinza Claro #F0F0F0, Preto #000000

## Visual Effects

Uso de símbolos gráficos abstratos e geométricos, tipografia sans-serif limpa e impactante, infográficos e visualizações de dados claros, micro-interações de hover com destaque de informações importantes, transições de seção com efeito de "revelação" de conceito.

## AI Visual Direction

Design an informative and symbolic landing page for a civic education platform, inspired by Aloísio Magalhães' graphic identity. Use: abstract geometric symbols, clean impactful sans-serif typography, clear infographics and data visualizations, important information highlight hover micro-interactions, concept "reveal" section transitions, Brazilian flag colors (green, yellow, blue, white) as primary palette, engaging and modern feel.

## CSS Technical

```css
background: #FFFFFF, color: #000000, border-bottom: 2px solid #009739, font-family: "Montserrat, sans-serif", transition: all 0.4s ease-in-out, .symbolic-graphic, .infographic-element, .concept-reveal-transition.
```

## Design System Variables

```css
--flag-green: #009739, --flag-yellow: #FFD700, --flag-blue: #002776, --white-bg: #FFFFFF, --black-text: #000000, --border-accent: 2px solid #009739, --font-main: "Montserrat, sans-serif", --reveal-duration: 0.4s.
```

## Implementation Checklist

- ☐ Paleta de cores brasileira verificada
- ☐ Elementos de comunidade presentes
- ☐ Tipografia hierárquica clara
- ☐ Responsividade mobile verificada
- ☐ Contraste WCAG AA verificado
- ☐ Conteúdo em PT-BR verificado

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

[![Símbolos Políticos Brasileiros](https://designmd.app/images/library/256.png) Brasil ### Símbolos Políticos Brasileiros](https://designmd.app/library/simbolos-politicos-brasileiros)[![Símbolos Ambientais Brasileiros](https://designmd.app/images/library/253.png) Brasil ### Símbolos Ambientais Brasileiros](https://designmd.app/library/simbolos-ambientais-brasileiros)[![Flat Design Corporativo](https://designmd.app/images/library/102.png) Flat & Soft UI ### Flat Design Corporativo](https://designmd.app/library/flat-design-corporativo)[![Modernismo Jornalístico Brasileiro](https://designmd.app/images/library/238.png) Brasil ### Modernismo Jornalístico Brasileiro](https://designmd.app/library/modernismo-jornalistico-brasileiro)[![Símbolos Culturais Brasileiros](https://designmd.app/images/library/254.png) Brasil ### Símbolos Culturais Brasileiros](https://designmd.app/library/simbolos-culturais-brasileiros)

Last synced: 4/1/2026
