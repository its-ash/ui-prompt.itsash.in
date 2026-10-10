# Astryx Butter

- Source: <https://designmd.app/library/astryx-butter>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:56.312Z

Design System Themes2026 Meta

# Astryx Butter

Golden buttery theme from Meta Astryx Design System. Warm surfaces with blue accents and Sarina + Outfit typography.

buttergoldenwarmyellowsarinaoutfitblue-accentplayfulmetaastryx

Use case: Creative portfolios, lifestyle brands, food and wellness apps, editorial platforms, and warm consumer products.

![Astryx Butter](https://designmd.app/images/library/456.png)

## Historical Context

Astryx Butter brings warmth to the Meta design system with golden yellows and playful Sarina display type. Designed for products that need personality without sacrificing usability.

## When to Use

Apply to interfaces that need to convey warmth and creative energy without becoming generic. Creative product landing pages, design portfolios, premium e-commerce, and food & lifestyle sites benefit from golden surfaces with vibrant blue accents. Display typography gives personality to headlines. Choose this theme when the brand needs strong visual presence and the audience expects a sensory experience — not functional and cold.

## Design Principles

- Use golden surfaces as base and vibrant blue only as focal accent
- Limit display typography to headlines and CTAs — body text stays readable and neutral
- Explore temperature contrasts between warm gold and cool blue
- Reserve pure white backgrounds for breathing sections between dense visual blocks
- Keep at most two display font weights per page

## DESIGN.md

```
---
version: "alpha"
name: "Astryx Butter"
description: "Golden buttery theme from Meta Astryx Design System. Warm surfaces with blue accents and Sarina + Outfit typography."
colors:
primary: "#E2A400"
secondary: "#0064E0"
tertiary: "#D69804"
neutral: "#FFFFFF"
surface: "#FBCE03"
typography:
h1:
fontFamily: Sarina
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: Outfit
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: Outfit
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
backgroundColor: "{colors.secondary}"
textColor: "{colors.neutral}"
rounded: "{rounded.md}"
padding: 12px
---

## Overview

Golden buttery theme from Meta Astryx Design System. Warm surfaces with blue accents and Sarina + Outfit typography. Astryx Butter brings warmth to the Meta design system with golden yellows and playful Sarina display type. Designed for products that need personality without sacrificing usability.

## Colors
- **Primary Gold:** #E2A400
- **Bright Yellow:** #FBCE03
- **Dark Gold:** #D69804
- **Blue Accent:** #0064E0
- **Light Blue:** #2694FE
- **Surface:** Warm whites

## Typography
- **Display:** Sarina (cursive, apenas títulos grandes)
- **Body:** Outfit 400/500/600/700
- **Code:** SF Mono
- **Scale:** base 14px (0.875rem), ratio 1.2

## Layout
- **Spacing scale:** 0/2/4/6/8/12/16/20/24/28/32/36/40/44/48 px
- **Radius:** inner 8px, element 12px, container 16px, page 32px
- **Element sizes:** sm 28px, md 32px, lg 36px

## Elevation & Depth
- Sombras sutis com tom dourado. Profundidade por camadas de saturação.
- Cards elevados com background mais claro sobre superfície golden.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components
- Buttons primários em azul #0064E0 sobre fundo dourado
- Cards com superfície branca e border dourada sutil
- Headlines em Sarina para impacto visual

## Do's and Don'ts
- ✓ Use Sarina apenas para display/hero text
- ✓ Mantenha azul para CTAs e ações
- ✗ Não use Sarina em corpo de texto
- ✗ Não combine múltiplos tons de amarelo sem hierarquia

## Use Case

Creative portfolios, lifestyle brands, food and wellness apps, editorial platforms, and warm consumer products.
```

[Download DESIGN.md](https://designmd.app/library/astryx-butter/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Outfit', sans-serif; --display-font: 'Sarina', cursive; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); background: #FBCE03; accent-color: #0064E0;
```

### Variables

```
--bg: #FBCE03, --fg: #15110C, --accent: #0064E0, --radius: 12px, --spacing: 1.5rem, --font-display: 'Sarina', --font-body: 'Outfit'
```

### Checklist

1. Importar Sarina e Outfit do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Testar contraste sobre superfícies douradas 7. Validar modo light e dark 8. Equilibrar uso de Sarina (apenas display) com Outfit (body)

## Colors

Primary

#E2A400

#FBCE03

#D69804

Secondary

#0064E0

#2694FE

### Effects

Transições suaves com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Superfícies douradas com contraste azul vibrante.

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

- **Name:** Astryx Butter
- **Type:** Warm golden com tipografia display expressiva e acentos azuis complementares
- **Keywords:** butter, golden, warm, yellow, sarina, outfit, blue-accent, playful, meta, astryx
- **Era:** 2026 Meta
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Golden #E2A400, Bright Yellow #FBCE03, Dark Gold #D69804
- **Secondary:** Blue Accent #0064E0, Light Blue #2694FE, Surface warm whites

## Visual Effects

Transições suaves com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Superfícies douradas com contraste azul vibrante.

## AI Visual Direction

golden butter warm UI, yellow surface design, blue accent on gold, playful display typography, warm premium interface, food lifestyle aesthetic

## CSS Technical

```css
font-family: 'Outfit', sans-serif; --display-font: 'Sarina', cursive; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); background: #FBCE03; accent-color: #0064E0;
```

## Design System Variables

```css
--bg: #FBCE03, --fg: #15110C, --accent: #0064E0, --radius: 12px, --spacing: 1.5rem, --font-display: 'Sarina', --font-body: 'Outfit'
```

## Implementation Checklist

- 1. Importar Sarina e Outfit do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Testar contraste sobre superfícies douradas 7. Validar modo light e dark 8. Equilibrar uso de Sarina (apenas display) com Outfit (body)

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
