# Astryx Matcha

- Source: <https://designmd.app/library/astryx-matcha>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:10:00.311Z

Design System Themes2026 Meta

# Astryx Matcha

Earthy green theme from Meta Astryx Design System. Natural palette with Figtree typography for sustainable brands.

matchagreenearthynaturefigtreewellnessorganicfreshvibrantastryx

Use case: Sustainability platforms, health and wellness, organic products, eco-tech, gardening apps, and nature-focused brands.

![Astryx Matcha](https://designmd.app/images/library/459.png)

## Historical Context

Astryx Matcha brings organic energy to the system through earthy greens and warm neutrals. Named after the Japanese tea, it balances vitality with calm — ideal for health-conscious products.

## When to Use

Apply to interfaces that communicate health, nature, and balance without falling into generic eco clichés. Wellness apps, sustainability dashboards, natural product sites, and meditation apps need vibrant greens over warm neutral surfaces that Figtree complements with modern readability. Choose this theme when the product needs to feel fresh and alive while maintaining professionalism — not childish or hippie.

## Design Principles

- Use vibrant green as accent over warm neutral surfaces — never as dominant background
- Limit to Figtree for all typography, varying weight to create hierarchy
- Prioritize warm off-white backgrounds over pure white to maintain thermal cohesion
- Reserve high green saturation for CTAs and positive progress indicators
- Keep icons and illustrations aligned with the geometric simplicity of the font

## DESIGN.md

```
---
version: "alpha"
name: "Astryx Matcha"
description: "Earthy green theme from Meta Astryx Design System. Natural palette with Figtree typography for sustainable brands."
colors:
primary: "#0D8626"
secondary: "#0B991F"
tertiary: "#24BB5E"
neutral: "#F8F5F0"
surface: "#FFFFFF"
typography:
h1:
fontFamily: Figtree
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: Figtree
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: Figtree
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

Earthy green theme from Meta Astryx Design System. Natural palette with Figtree typography for sustainable brands. Astryx Matcha brings organic energy to the system through earthy greens and warm neutrals. Named after the Japanese tea, it balances vitality with calm — ideal for health-conscious products.

## Colors
- **Primary Green:** #0D8626
- **Bright Green:** #0B991F
- **Light Green:** #24BB5E
- **Background:** Earthy warm neutrals
- **Surface:** #FFFFFF (light)
- **Text:** Escuro sobre claro

## Typography
- **Heading:** Figtree 600/700
- **Body:** Figtree 400/500
- **Code:** SF Mono
- **Scale:** base 14px (0.875rem), ratio 1.2

## Layout
- **Spacing scale:** 0/2/4/6/8/12/16/20/24/28/32/36/40/44/48 px
- **Radius:** inner 8px, element 12px, container 16px, page 32px
- **Element sizes:** sm 28px, md 32px, lg 36px

## Elevation & Depth
- Sombras neutras com leve tom quente.
- Cards elevados com superfície branca sobre background cream.
- Borders sutis para separação.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components
- Buttons primários em verde #0D8626 com texto branco
- Cards com superfície branca e accent verde em ícones/badges
- Progress bars e indicadores em gradiente verde

## Do's and Don'ts
- ✓ Use verde como accent para ações e destaques
- ✓ Mantenha superfícies neutras como base
- ✗ Não faça backgrounds inteiros em verde
- ✗ Não misture verdes frios com a paleta quente

## Use Case

Sustainability platforms, health and wellness, organic products, eco-tech, gardening apps, and nature-focused brands.
```

[Download DESIGN.md](https://designmd.app/library/astryx-matcha/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Figtree', sans-serif; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); --accent: #0D8626; background: #F8F5F0; color: #1A1A1A;
```

### Variables

```
--bg: #F8F5F0, --fg: #1A1A1A, --accent: #0D8626, --radius: 12px, --spacing: 1.5rem, --font-display: 'Figtree', --font-body: 'Figtree'
```

### Checklist

1. Importar Figtree do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Testar contraste verde sobre fundos claros e escuros 7. Validar modo light e dark 8. Usar verde como accent, não como cor dominante de superfície

## Colors

Primary

#0D8626

#0B991F

#24BB5E

### Effects

Transições com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Verdes vibrantes como accent sobre fundos neutros quentes.

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

- **Name:** Astryx Matcha
- **Type:** Verde terroso com tipografia system-first e superfícies neutras aquecidas
- **Keywords:** matcha, green, earthy, nature, figtree, wellness, organic, fresh, vibrant, astryx
- **Era:** 2026 Meta
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Green #0D8626, Bright Green #0B991F, Light Green #24BB5E
- **Secondary:** Earthy warm neutrals, cream surfaces, muted olive tones

## Visual Effects

Transições com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Verdes vibrantes como accent sobre fundos neutros quentes.

## AI Visual Direction

matcha green earthy UI, nature wellness interface, green accent warm neutral, organic fresh design, health app aesthetic, sustainable dashboard

## CSS Technical

```css
font-family: 'Figtree', sans-serif; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); --accent: #0D8626; background: #F8F5F0; color: #1A1A1A;
```

## Design System Variables

```css
--bg: #F8F5F0, --fg: #1A1A1A, --accent: #0D8626, --radius: 12px, --spacing: 1.5rem, --font-display: 'Figtree', --font-body: 'Figtree'
```

## Implementation Checklist

- 1. Importar Figtree do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Testar contraste verde sobre fundos claros e escuros 7. Validar modo light e dark 8. Usar verde como accent
- não como cor dominante de superfície

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
