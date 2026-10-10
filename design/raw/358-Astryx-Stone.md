# Astryx Stone

- Source: <https://designmd.app/library/astryx-stone>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:10:04.321Z

Design System Themes2026 Meta

# Astryx Stone

Warm stone and slate theme from Meta Astryx Design System. Montserrat + Figtree typography with mineral-inspired palette.

stoneslategraymineralmontserratcorporatesolidelegantwarm-grayastryx

Use case: Architecture firms, real estate platforms, professional services, luxury minimalism, construction tech, and premium B2B.

![Astryx Stone](https://designmd.app/images/library/460.png)

## Historical Context

Astryx Stone draws from mineral and geological inspiration — warm grays and slate tones that feel grounded and substantial. Montserrat headings add geometric precision.

## When to Use

Apply to projects that demand visual authority and mineral sophistication. High-level corporate sites, architecture portfolios, executive dashboards, and real estate interfaces need stone and warm slate tones that Montserrat anchors with geometric stability. Choose this theme when the brand needs to communicate solidity, permanence, and discreet refinement — no ornament, no exuberance, just presence.

## Design Principles

- Use Montserrat in varied weights for the entire typographic hierarchy
- Limit the palette to the stone-slate spectrum with consistent warm undertones
- Build elevation with subtle warm gray gradations, not dramatic shadows
- Reserve color accents only for critical data or primary actions
- Keep rigid alignments and geometric grid — this theme does not tolerate casual asymmetry

## DESIGN.md

```
---
version: "alpha"
name: "Astryx Stone"
description: "Warm stone and slate theme from Meta Astryx Design System. Montserrat + Figtree typography with mineral-inspired palette."
colors:
primary: "#647685"
secondary: "#8494A3"
tertiary: "#2C3640"
neutral: "#F4F2EF"
surface: "#FFFFFF"
typography:
h1:
fontFamily: Montserrat
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
backgroundColor: "{colors.tertiary}"
textColor: "{colors.neutral}"
rounded: "{rounded.md}"
padding: 12px
---

## Overview

Warm stone and slate theme from Meta Astryx Design System. Montserrat + Figtree typography with mineral-inspired palette. Astryx Stone draws from mineral and geological inspiration — warm grays and slate tones that feel grounded and substantial. Montserrat headings add geometric precision.

## Colors
- **Stone Gray:** #647685
- **Slate:** #8494A3
- **Warm Dark:** #2C3640
- **Light Stone:** #B8C4CE
- **Background:** #F4F2EF (warm white)
- **Charcoal:** #1E272F

## Typography
- **Heading:** Montserrat 600/700 (geométrica bold)
- **Body:** Figtree 400/500
- **Code:** SF Mono
- **Scale:** base 14px (0.875rem), ratio 1.2

## Layout
- **Spacing scale:** 0/2/4/6/8/12/16/20/24/28/32/36/40/44/48 px
- **Radius:** inner 8px, element 12px, container 16px, page 32px
- **Element sizes:** sm 28px, md 32px, lg 36px

## Elevation & Depth
- Sombras com tom slate frio-quente.
- Camadas diferenciadas por intensidade de cinza.
- Borders em light stone para separação suave.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components
- Buttons em charcoal #2C3640 com texto warm white
- Cards com surface branca e sombra stone
- Headlines em Montserrat bold para peso visual

## Do's and Don'ts
- ✓ Use Montserrat bold para impacto em headlines
- ✓ Mantenha hierarquia com tons de cinza
- ✗ Não adicione cores vibrantes à paleta
- ✗ Não use Montserrat light (perde o caráter)

## Use Case

Architecture firms, real estate platforms, professional services, luxury minimalism, construction tech, and premium B2B.
```

[Download DESIGN.md](https://designmd.app/library/astryx-stone/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Figtree', sans-serif; --display-font: 'Montserrat', sans-serif; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); background: #F4F2EF; color: #2C3640;
```

### Variables

```
--bg: #F4F2EF, --fg: #2C3640, --accent: #647685, --radius: 12px, --spacing: 1.5rem, --font-display: 'Montserrat', --font-body: 'Figtree'
```

### Checklist

1. Importar Montserrat e Figtree do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Testar contraste slate sobre fundos claros 7. Validar modo light e dark 8. Usar Montserrat em peso bold para headlines

## Colors

Primary

#647685

#8494A3

#2C3640

Secondary

#B8C4CE

#F4F2EF

#1E272F

### Effects

Transições com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Texturas minerais sutis e sombras com tom slate.

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

- **Name:** Astryx Stone
- **Type:** Mineral elegante com tipografia geométrica bold e superfícies em tons de pedra
- **Keywords:** stone, slate, gray, mineral, montserrat, corporate, solid, elegant, warm-gray, astryx
- **Era:** 2026 Meta
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Stone Gray #647685, Slate #8494A3, Warm Dark #2C3640
- **Secondary:** Light stone #B8C4CE, Warm white #F4F2EF, Charcoal #1E272F

## Visual Effects

Transições com cubic-bezier(0.24, 1, 0.4, 1), motion fast 175ms, medium 410ms. Texturas minerais sutis e sombras com tom slate.

## AI Visual Direction

stone slate warm gray UI, mineral elegant interface, corporate sophisticated design, architecture portfolio aesthetic, warm gray executive dashboard

## CSS Technical

```css
font-family: 'Figtree', sans-serif; --display-font: 'Montserrat', sans-serif; border-radius: 12px; transition: all 410ms cubic-bezier(0.24, 1, 0.4, 1); background: #F4F2EF; color: #2C3640;
```

## Design System Variables

```css
--bg: #F4F2EF, --fg: #2C3640, --accent: #647685, --radius: 12px, --spacing: 1.5rem, --font-display: 'Montserrat', --font-body: 'Figtree'
```

## Implementation Checklist

- 1. Importar Montserrat e Figtree do Google Fonts 2. Configurar escala tipográfica base 14px ratio 1.2 3. Aplicar radius scale (8/12/16/32px) 4. Implementar tokens de spacing (0-48px) 5. Configurar motion tokens (175ms/410ms/975ms) 6. Testar contraste slate sobre fundos claros 7. Validar modo light e dark 8. Usar Montserrat em peso bold para headlines

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
