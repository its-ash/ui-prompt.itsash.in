# HashiCorp Infra Dual

- Source: <https://designmd.app/library/hashicorp-infra-dual>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:08:31.314Z

Temas & Verticais2024-2026 Cloud Infrastructure

# HashiCorp Infra Dual

HashiCorp-inspired infrastructure landing page. Ideal for infraestrutura cloud, devops, automação de infraestrutura, plataformas multi-produto. AI-ready template.

hashicorpinfrastructuredual modemulti-product colorsmicro-shadowsHashiCorp Sanskernterraform purplevault yellowtight headings

Use case: Infraestrutura cloud, DevOps, Automação de infraestrutura, Platforms multi-produto

![HashiCorp Infra Dual](https://designmd.app/images/library/407.png)

## Historical Context

HashiCorp didn't arrive at dual-mode theming through aesthetic preference — it was an operational necessity. When your users are staring at terminal output and infrastructure graphs for twelve-hour incident responses, the interface needs to disappear. Their design language evolved from the practical reality that DevOps engineers work across wildly different ambient conditions: bright office floors during planning, dark war rooms during outages, and everything between. The infrastructure vertical has a specific relationship with light and dark modes that consumer apps never developed. Tools like Terraform, Vault, and Consul needed interfaces that could sit alongside terminal windows without creating jarring contrast shifts. HashiCorp's approach treats the two modes not as a toggle between inverted palettes, but as two complete tonal systems — each with its own contrast ratios, elevation cues, and information hierarchy. The dark mode isn't just 'flip the background'; the entire spatial language recalibrates. This dual-system thinking influenced the broader infrastructure tooling space. Datadog, Grafana, and PagerDuty all eventually adopted similar philosophies, but HashiCorp's Helios design system codified the pattern earliest with genuine rigor around semantic color tokens that maintain meaning across both modes.

## When to Use

Reach for this pattern when building tools that live in split-screen workflows alongside terminals, code editors, or monitoring dashboards. It's essential for anything infrastructure-adjacent where users have strong mode preferences tied to working context rather than personal taste. Enterprise developer platforms, observability tools, CI/CD interfaces, and cloud management consoles all benefit from this approach. Skip it for marketing sites or content-heavy products where a single well-crafted theme serves better.

## Design Principles

- Semantic tokens over raw values — every color decision references intent, not hex codes, so mode switching is a context change rather than a find-and-replace operation
- Equal citizenship for both modes — dark isn't an afterthought bolted onto a light-first system; both are designed simultaneously with independent elevation and contrast hierarchies
- Reduced saturation in dark contexts — infrastructure data is dense, and saturated colors in dark mode create visual fatigue during extended monitoring sessions
- Consistent spatial hierarchy across modes — shadows and borders trade roles between themes, but the perceived depth and grouping relationships remain identical
- Terminal-adjacent contrast calibration — UI surfaces are tuned to sit comfortably beside monospace terminal output without competing for attention or creating eye strain at boundaries

## DESIGN.md

```
---
version: "alpha"
name: "HashiCorp Infra Dual"
description: "HashiCorp-inspired infrastructure landing page. Ideal for infraestrutura cloud, devops, automação de infraestrutura, plataformas multi-produto. AI-ready template."
colors:
primary: "#000000"
secondary: "#ffffff"
tertiary: "#15181e"
neutral: "#f1f2f3"
surface: "#7b42bc"
accent: "#ffcf25"
typography:
h1:
fontFamily: system-ui
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: system-ui
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: system-ui
fontSize: 0.75rem
fontWeight: 500
rounded:
sm: 5px
md: 10px
lg: 15px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

HashiCorp-inspired infrastructure landing page. Ideal for infraestrutura cloud, devops, automação de infraestrutura, plataformas multi-produto. AI-ready template. HashiCorp didn't arrive at dual-mode theming through aesthetic preference — it was an operational necessity. When your users are staring at terminal output and infrastructure graphs for twelve-hour incident responses, the interface needs to disappear. Their design language evolved from the practical reality that DevOps engineers work across wildly different ambient conditions: bright office floors during planning, dark war rooms during outages, and everything between.

The infrastructure vertical has a specific relationship with light and dark modes that consumer apps never developed. Tools like Terraform, Vault, and Consul needed interfaces that could sit alongside terminal windows without creating jarring contrast shifts. HashiCorp's approach treats the two modes not as a toggle between inverted palettes, but as two complete tonal systems — each with its own contrast ratios, elevation cues, and information hierarchy. The dark mode isn't just 'flip the background'; the entire spatial language recalibrates.

This dual-system thinking influenced the broader infrastructure tooling space. Datadog, Grafana, and PagerDuty all eventually adopted similar philosophies, but HashiCorp's Helios design system codified the pattern earliest with genuine rigor around semantic color tokens that maintain meaning across both modes.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Enterprise Infrastructure, Dual Light/Dark, Multi-Product Colors, Micro-Shadows, Uppercase Labels
- **Keywords:** hashicorp, infrastructure, dual mode, multi-product colors, micro-shadows, HashiCorp Sans, kern, terraform purple, vault yellow, tight headings
- **Era:** 2024-2026 Cloud Infrastructure
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Dark Charcoal** (#15181e) — Dark surface, primary background
- **Cinza Claro** (#f1f2f3) — Secondary text, borders, muted elements
- **Terraform Purple** (#7b42bc) — Accent color, emphasis elements
- **Vault Yellow** (#ffcf25) — Warning states, attention indicators
- **Waypoint Teal** (#14c6cb) — Secondary accent
- **Vagrant Blue** (#1868f2) — Secondary accent

## Typography

- **Display / Hero:** system-ui — Weight 700, tight tracking, used for headline impact
- **Body:** system-ui — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** system-ui — 0.875rem, weight 500, slight letter-spacing
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

Dual-mode: seções brancas limpas + hero/produto em dark (#15181e). Font customizada com weight 600-700 e kern habilitado. Sistema de cores multi-produto (Terraform roxo, Vault amarelo, Waypoint teal, Vagrant azul). Micro-sombras dual-layer (rgba(97,104,117,0.05)). Labels uppercase 13px weight 600 com 1.3px letter-spacing. Border-radius tight (2-8px). Profundidade via layering de cor, não sombras. Body text relaxado (line-height 1.63-1.69).

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 5px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (5px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (5px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Dual-mode light/dark
- Do Multi-product colors
- Do Kern habilitado
- Do Micro-sombras
- Do Uppercase labels 1.3px
- Do Radius tight 2-8px
- Do Hero 82px weight 600
- Do Responsivo

## Use Case

Infraestrutura cloud, DevOps, Automação de infraestrutura, Platforms multi-produto
```

[Download DESIGN.md](https://designmd.app/library/hashicorp-infra-dual/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background:#ffffff dark:#15181e;color:#000000;font-family:system-ui;font-feature-settings:'kern';font-weight:600-700 headings;box-shadow:rgba(97,104,117,0.05) 0px 1px 1px dual-layer;border-radius:5px;letter-spacing:1.3px uppercase labels
```

### Variables

```
--bg-light:#ffffff;--bg-dark:#15181e;--text:#000000;--terraform:#7b42bc;--vault:#ffcf25;--waypoint:#14c6cb;--vagrant:#1868f2;--gray-light:#f1f2f3;--shadow:rgba(97,104,117,0.05);--radius:5px
```

### Checklist

☐ Dual-mode light/dark, ☐ Multi-product colors, ☐ Kern habilitado, ☐ Micro-sombras, ☐ Uppercase labels 1.3px, ☐ Radius tight 2-8px, ☐ Hero 82px weight 600, ☐ Responsivo

## Colors

Primary

#000000

#ffffff

#15181e

#f1f2f3

Secondary

#7b42bc

#ffcf25

#14c6cb

#1868f2

### Effects

Dual-mode: seções brancas limpas + hero/produto em dark (#15181e). Font customizada com weight 600-700 e kern habilitado. Sistema de cores multi-produto (Terraform roxo, Vault amarelo, Waypoint teal, Vagrant azul). Micro-sombras dual-layer (rgba(97,104,117,0.05)). Labels uppercase 13px weight 600 com 1.3px letter-spacing. Border-radius tight (2-8px). Profundidade via layering de cor, não sombras. Body text relaxado (line-height 1.63-1.69).

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

- **Name:** HashiCorp Infra Dual
- **Type:** Enterprise Infrastructure, Dual Light/Dark, Multi-Product Colors, Micro-Shadows, Uppercase Labels
- **Keywords:** hashicorp, infrastructure, dual mode, multi-product colors, micro-shadows, HashiCorp Sans, kern, terraform purple, vault yellow, tight headings
- **Era:** 2024-2026 Cloud Infrastructure
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Preto #000000, Branco #ffffff, Dark Charcoal #15181e, Cinza Claro #f1f2f3
- **Secondary:** Terraform Purple #7b42bc, Vault Yellow #ffcf25, Waypoint Teal #14c6cb, Vagrant Blue #1868f2

## Visual Effects

Dual-mode: seções brancas limpas + hero/produto em dark (#15181e). Font customizada com weight 600-700 e kern habilitado. Sistema de cores multi-produto (Terraform roxo, Vault amarelo, Waypoint teal, Vagrant azul). Micro-sombras dual-layer (rgba(97,104,117,0.05)). Labels uppercase 13px weight 600 com 1.3px letter-spacing. Border-radius tight (2-8px). Profundidade via layering de cor, não sombras. Body text relaxado (line-height 1.63-1.69).

## AI Visual Direction

Design a HashiCorp-inspired infrastructure landing page. Dual-mode: clean white sections + dramatic dark (#15181e) hero areas. Custom font with weight 600-700 and kern enabled. Multi-product color system (Terraform purple #7b42bc, Vault yellow #ffcf25, Waypoint teal #14c6cb). Micro-shadows (rgba(97,104,117,0.05)). Uppercase labels at 13px weight 600 with 1.3px letter-spacing. Tight border-radius (2-8px). Hero at 82px weight 600. Relaxed body line-height (1.63-1.69).

## CSS Technical

```css
background:#ffffff dark:#15181e;color:#000000;font-family:system-ui;font-feature-settings:'kern';font-weight:600-700 headings;box-shadow:rgba(97,104,117,0.05) 0px 1px 1px dual-layer;border-radius:5px;letter-spacing:1.3px uppercase labels
```

## Design System Variables

```css
--bg-light:#ffffff;--bg-dark:#15181e;--text:#000000;--terraform:#7b42bc;--vault:#ffcf25;--waypoint:#14c6cb;--vagrant:#1868f2;--gray-light:#f1f2f3;--shadow:rgba(97,104,117,0.05);--radius:5px
```

## Implementation Checklist

- ☐ Dual-mode light/dark
- ☐ Multi-product colors
- ☐ Kern habilitado
- ☐ Micro-sombras
- ☐ Uppercase labels 1.3px
- ☐ Radius tight 2-8px
- ☐ Hero 82px weight 600
- ☐ Responsivo

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

[![Stripe Fintech Elegance](https://designmd.app/images/library/385.png) Futurista & Tech ### Stripe Fintech Elegance](https://designmd.app/library/stripe-fintech-elegance)[![Cohere Enterprise Serif](https://designmd.app/images/library/389.png) Minimalismo & Swiss ### Cohere Enterprise Serif](https://designmd.app/library/cohere-enterprise-serif)[![NVIDIA Power Green](https://designmd.app/images/library/394.png) Futurista & Tech ### NVIDIA Power Green](https://designmd.app/library/nvidia-power-green)[![IBM Carbon Enterprise](https://designmd.app/images/library/397.png) Dados & Infografico ### IBM Carbon Enterprise](https://designmd.app/library/ibm-carbon-enterprise)[![Together Pastel Cloud](https://designmd.app/images/library/404.png) Arte & Ilustracao ### Together Pastel Cloud](https://designmd.app/library/together-pastel-cloud)

Last synced: 4/1/2026
