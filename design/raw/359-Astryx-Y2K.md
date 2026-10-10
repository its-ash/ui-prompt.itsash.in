# Astryx Y2K

- Source: <https://designmd.app/library/astryx-y2k>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:10:04.339Z

Design System Themes2026 Meta

# Astryx Y2K

Playful Y2K pop theme from Meta Astryx Design System. Periwinkle and holographic accents with Poppins + Crimson Text.

y2kperiwinklepurpleholographicpinkplayfulpoppinsretroiridescentastryx

Use case: Gen-Z consumer products, social apps, creative platforms, NFT marketplaces, fashion brands, and playful SaaS.

![Astryx Y2K](https://designmd.app/images/library/461.png)

## Historical Context

Astryx Y2K channels the optimistic digital aesthetics of the early 2000s — periwinkle purples, iridescent pink accents, and the playful geometry of Poppins. A nostalgic-futurist theme for bold brands.

## When to Use

Apply when the audience is gen-Z and the interface needs pop energy without apology. Social apps, creative product landing pages, creator platforms, and youth fashion sites demand periwinkle purples and holographic pink that rounded typography amplifies. Choose this theme when the brand embraces Y2K nostalgia with contemporary irony — the visual is loud, saturated, and deliberately anti-corporate.

## Design Principles

- Use rounded typography for headlines and UI — angularity breaks Y2K cohesion
- Limit the palette to periwinkle purple and holographic pink as dominant duo
- Explore soft gradients between key colors instead of solid blocks
- Reserve dark surfaces only for punctual contrast — the theme lives in the light
- Keep generous rounded corners on all interactive components

## DESIGN.md

```
---
version: "alpha"
name: "Astryx Y2K"
description: "Playful Y2K pop theme from Meta Astryx Design System. Periwinkle and holographic accents with Poppins + Crimson Text."
colors:
primary: "#7B61FF"
secondary: "#F351C0"
tertiary: "#9081FF"
neutral: "#F8F5FF"
surface: "#FFFFFF"
typography:
h1:
fontFamily: Poppins
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: Crimson Text
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: Crimson Text
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

Playful Y2K pop theme from Meta Astryx Design System. Periwinkle and holographic accents with Poppins + Crimson Text. Astryx Y2K channels the optimistic digital aesthetics of the early 2000s — periwinkle purples, iridescent pink accents, and the playful geometry of Poppins. A nostalgic-futurist theme for bold brands.

## Colors
- **Periwinkle:** #7B61FF
- **Purple:** #9081FF
- **Hot Pink:** #F351C0
- **Background:** #F8F5FF (lavender white)
- **Surface:** #FFFFFF
- **Text:** Deep purple #2D1B69

## Typography
- **Heading:** Poppins 600/700 (geométrica arredondada)
- **Body:** Crimson Text 400/500 (serif elegante)
- **Code:** SF Mono
- **Scale:** base 14px (0.875rem), ratio 1.2

## Layout
- **Spacing scale:** 0/2/4/6/8/12/16/20/24/28/32/36/40/44/48 px
- **Radius:** inner 8px, element 12px, container 16px, page 32px
- **Element sizes:** sm 28px, md 32px, lg 36px

## Elevation & Depth
- Sombras com tom purple sutil.
- Efeitos holográficos/iridescentes em hover.
- Gradientes purple-to-pink para profundidade.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components
- Buttons em periwinkle #7B61FF com hover gradiente
- Cards com sombra lavender e border iridescente sutil
- Badges e chips com gradiente purple-pink

## Do's and Don'ts
- ✓ Use gradientes purple-to-pink com moderação
- ✓ Mantenha Crimson Text para corpo legível
- ✗ Não exagere nos efeitos holográficos
- ✗ Não use todas as cores simultaneamente em um componente

## Use Case

Gen-Z consumer products, social apps, creative platforms, NFT marketplaces, fashion brands, and playful SaaS.
```

[Download DESIGN.md](https://designmd.app/library/astryx-y2k/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Crimson Text', serif; --display-font: 'Poppins', sans-serif; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); background: #F8F5FF; color: #2D1B69; --accent: #7B61FF;
```

### Variables

```
--bg: #F8F5FF, --fg: #2D1B69, --accent: #7B61FF, --radius: 12px, --spacing: 1.5rem, --font-display: 'Poppins', --font-body: 'Crimson Text'
```

### Checklist

1. Importar Poppins e Crimson Text do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Implementar gradientes purple-to-pink 7. Validar modo light e dark 8. Adicionar efeitos holográficos sutis em hover states

## Colors

Primary

#7B61FF

#9081FF

#F351C0

### Effects

Transições com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Efeitos holográficos/iridescentes sutis, gradientes purple-to-pink.

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

- **Name:** Astryx Y2K
- **Type:** Pop Y2K com tipografia arredondada, cores periwinkle e efeitos holográficos
- **Keywords:** y2k, periwinkle, purple, holographic, pink, playful, poppins, retro, iridescent, astryx
- **Era:** 2026 Meta
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Periwinkle #7B61FF, Purple #9081FF, Hot Pink #F351C0
- **Secondary:** Holographic iridescent accents, lavender tones, soft white surfaces

## Visual Effects

Transições com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Efeitos holográficos/iridescentes sutis, gradientes purple-to-pink.

## AI Visual Direction

Y2K pop aesthetic UI, periwinkle purple interface, holographic iridescent design, playful gen-z app, pink purple gradient, retro 2000s modern design

## CSS Technical

```css
font-family: 'Crimson Text', serif; --display-font: 'Poppins', sans-serif; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); background: #F8F5FF; color: #2D1B69; --accent: #7B61FF;
```

## Design System Variables

```css
--bg: #F8F5FF, --fg: #2D1B69, --accent: #7B61FF, --radius: 12px, --spacing: 1.5rem, --font-display: 'Poppins', --font-body: 'Crimson Text'
```

## Implementation Checklist

- 1. Importar Poppins e Crimson Text do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Implementar gradientes purple-to-pink 7. Validar modo light e dark 8. Adicionar efeitos holográficos sutis em hover states

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
