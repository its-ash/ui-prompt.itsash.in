# Astryx Chocolate

- Source: <https://designmd.app/library/astryx-chocolate>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:56.220Z

Design System Themes2026 Meta

# Astryx Chocolate

Warm brown theme from Meta Astryx Design System. Cozy beige surfaces with Fraunces + Albert Sans typography.

chocolatebrownwarmbeigefrauncesorganiccozyearthyartisanalastryx

Use case: Coffee shops, artisanal brands, bookstores, cozy e-commerce, editorial blogs, and warm lifestyle products.

![Astryx Chocolate](https://designmd.app/images/library/457.png)

## Historical Context

Astryx Chocolate channels warm materiality through rich brown tones and the editorial elegance of Fraunces serif type. Built for brands that value craft and tactile warmth.

## When to Use

Apply when the project demands organic sophistication and visual warmth. Coffee shop sites, chocolateries, artisan portfolios, and natural product landing pages need warm brown tones and beige that convey materiality and care. Fraunces typography delivers editorial personality without artifice. Choose this theme for brands that sell sensory experience, craft, and authenticity — not speed or technology.

## Design Principles

- Use Fraunces for headlines and editorial elements — never for small UI
- Limit the palette to the brown-beige spectrum with a single contrast accent
- Prioritize subtle textures and warm surfaces over flat cold backgrounds
- Reserve pure white only for content cards over beige backgrounds
- Keep generous spacing — the theme breathes with calm, not with haste

## DESIGN.md

```
---
version: "alpha"
name: "Astryx Chocolate"
description: "Warm brown theme from Meta Astryx Design System. Cozy beige surfaces with Fraunces + Albert Sans typography."
colors:
primary: "#965E03"
secondary: "#6B2203"
tertiary: "#D4A574"
neutral: "#FFFFFF"
surface: "#F5F1E8"
typography:
h1:
fontFamily: Fraunces
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: Albert Sans
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: Albert Sans
fontSize: 0.75rem
fontWeight: 500
rounded:
sm: 8px
md: 12px
lg: 16px
spacing:
sm: 1.0rem
md: 1.5rem
lg: 2.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.md}"
padding: 12px
---

## Overview

Warm brown theme from Meta Astryx Design System. Cozy beige surfaces with Fraunces + Albert Sans typography. Astryx Chocolate channels warm materiality through rich brown tones and the editorial elegance of Fraunces serif type. Built for brands that value craft and tactile warmth.

## Colors
- **Primary Brown:** #965E03
- **Dark Brown:** #6B2203
- **Beige Surface:** #F5F1E8
- **Cream:** #FFFFFF
- **Amber accent:** tons muted de amber

## Typography
- **Heading:** Fraunces 600/700 (serif orgânica)
- **Body:** Albert Sans 400/500
- **Code:** SF Mono
- **Scale:** base 14px (0.875rem), ratio 1.2

## Layout
- **Spacing scale:** 0/2/4/6/8/12/16/20/24/28/32/36/40/44/48 px
- **Radius:** inner 8px, element 12px, container 16px, page 32px
- **Element sizes:** sm 28px, md 32px, lg 36px

## Elevation & Depth
- Sombras quentes com tom marrom. Profundidade por camadas de beige.
- Separação por diferença de temperatura de cor.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components
- Buttons em marrom #965E03 com texto branco
- Cards com fundo cream sobre superfície beige
- Headlines em Fraunces para elegância orgânica

## Do's and Don'ts
- ✓ Use Fraunces para headlines e destaques
- ✓ Mantenha hierarquia com saturação de marrom
- ✗ Não use tons frios que quebrem a paleta
- ✗ Não combine muitos pesos de Fraunces

## Use Case

Coffee shops, artisanal brands, bookstores, cozy e-commerce, editorial blogs, and warm lifestyle products.
```

[Download DESIGN.md](https://designmd.app/library/astryx-chocolate/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Albert Sans', sans-serif; --display-font: 'Fraunces', serif; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); background: #F5F1E8; color: #6B2203;
```

### Variables

```
--bg: #F5F1E8, --fg: #6B2203, --accent: #965E03, --radius: 12px, --spacing: 1.5rem, --font-display: 'Fraunces', --font-body: 'Albert Sans'
```

### Checklist

1. Importar Fraunces e Albert Sans do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Testar contraste marrom sobre beige 7. Validar modo light e dark 8. Usar Fraunces com optical size para headlines

## Colors

Primary

#965E03

#6B2203

#F5F1E8

### Effects

Transições suaves com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Texturas visuais orgânicas e sombras quentes.

### Light/Dark

✓ Full / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Astryx Chocolate
- **Type:** Warm earthy com tipografia serifada orgânica e superfícies beige acolhedoras
- **Keywords:** chocolate, brown, warm, beige, fraunces, organic, cozy, earthy, artisanal, astryx
- **Era:** 2026 Meta
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Brown #965E03, Dark Brown #6B2203, Beige Surface #F5F1E8
- **Secondary:** Warm cream, dark chocolate tones, muted amber accents

## Visual Effects

Transições suaves com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Texturas visuais orgânicas e sombras quentes.

## AI Visual Direction

chocolate brown warm UI, beige organic interface, artisanal cozy design, earthy tones dashboard, warm serif typography, natural materials aesthetic

## CSS Technical

```css
font-family: 'Albert Sans', sans-serif; --display-font: 'Fraunces', serif; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); background: #F5F1E8; color: #6B2203;
```

## Design System Variables

```css
--bg: #F5F1E8, --fg: #6B2203, --accent: #965E03, --radius: 12px, --spacing: 1.5rem, --font-display: 'Fraunces', --font-body: 'Albert Sans'
```

## Implementation Checklist

- 1. Importar Fraunces e Albert Sans do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Testar contraste marrom sobre beige 7. Validar modo light e dark 8. Usar Fraunces com optical size para headlines

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

[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)[![E-Ink / Paper](https://designmd.app/images/library/56.png) Minimalismo & Swiss ### E-Ink / Paper](https://designmd.app/library/e-ink-paper)[![Happy Art Tropical](https://designmd.app/images/library/236.png) Brasil ### Happy Art Tropical](https://designmd.app/library/happy-art-tropical)[![Bossa Nova Lounge](https://designmd.app/images/library/240.png) Brasil ### Bossa Nova Lounge](https://designmd.app/library/bossa-nova-lounge)

Last synced: 6/26/2026
