# CRM Copper Sand

- Source: <https://designmd.app/library/crm-copper-sand>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:06:46.316Z

General2020s Modern SaaS CRM

# CRM Copper Sand

Modern CRM landing + dashboard-style UI using Geist font, a warm copper primary color (#C08532), and a soft neutral background (#F2F1ED). Ideal for plataformas crm, painéis de vendas, ferramentas de gestão comercial, dashboards saas. AI-ready template.

dashboard CRMGeistcards modularesfoco em atividade comercialícones Hugeiconsvisual limpo e analítico

Use case: CRM platforms, Sales panels, Commercial management tools, SaaS dashboards

![CRM Copper Sand](https://designmd.app/images/library/347.png)

## Historical Context

For years, CRM dashboards defaulted to the same sterile blue-gray palette that screamed 'enterprise software nobody wants to open.' The implicit message was clear: this is work, not craft. Salesforce set that tone in the early 2000s and everyone followed like lemmings. The shift toward warm neutrals — copper, sand, terracotta — started gaining traction around 2021 when designers finally admitted that people who stare at dashboards eight hours a day deserve something that doesn't feel like a hospital waiting room. Copper tones carry warmth without sacrificing professionalism. Sand grounds the interface. Together they signal confidence and approachability, which is exactly what a sales team needs from their daily tool. This palette choice isn't decorative. It's functional empathy. Warm neutrals reduce perceived cognitive load, make data feel less intimidating, and subtly communicate that the software was designed by humans who understand the monotony of pipeline management. The best modern CRMs — Folk, Attio, Clay — understood this instinctively.

## When to Use

Reach for this system when building CRM tools, sales dashboards, or any business platform where users live inside the interface daily. It works particularly well for startups positioning against cold enterprise incumbents — the warm palette immediately signals 'we're different.' Also strong for client-facing portals where you want prospects to feel welcomed rather than processed. Avoid if your brand already leans cool or if the product handles sensitive financial data where warmth might undermine perceived seriousness.

## Design Principles

- Geist as the typographic backbone — its geometric clarity prevents warm tones from feeling soft or unserious. Let the font do the structural work so color can do the emotional work.
- Modular cards with generous padding and subtle sand-toned borders. No harsh dividers. Separation through whitespace and value shifts, not lines.
- Copper as accent, never as dominant. Reserve it for interactive states, key metrics, and CTAs. Sand owns the background and card surfaces.
- Data density through hierarchy, not compression. Warm palettes fall apart when you cram — give every metric room to breathe or the whole thing turns muddy.
- Depth through value, not shadow. Use 2-3 sand tones stepping from light to mid to create layering. Drop shadows feel alien in this palette — opt for tonal separation instead.

## DESIGN.md

```
---
version: "alpha"
name: "CRM Copper Sand"
description: "Modern CRM landing + dashboard-style UI using Geist font, a warm copper primary color (#C08532), and a soft neutral background (#F2F1ED). Ideal for plataformas crm, painéis de vendas, ferramentas de gestão comercial, dashboards saas. AI-ready template."
colors:
primary: "#C08532"
secondary: "#F2F1ED"
tertiary: "#111827"
neutral: "#9CA3AF"
surface: "#16A34A"
accent: "#DC2626"
typography:
h1:
fontFamily: Geist
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Geist
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Modern CRM landing + dashboard-style UI using Geist font, a warm copper primary color (#C08532), and a soft neutral background (#F2F1ED). Ideal for plataformas crm, painéis de vendas, ferramentas de gestão comercial, dashboards saas. AI-ready template. For years, CRM dashboards defaulted to the same sterile blue-gray palette that screamed 'enterprise software nobody wants to open.' The implicit message was clear: this is work, not craft. Salesforce set that tone in the early 2000s and everyone followed like lemmings.

The shift toward warm neutrals — copper, sand, terracotta — started gaining traction around 2021 when designers finally admitted that people who stare at dashboards eight hours a day deserve something that doesn't feel like a hospital waiting room. Copper tones carry warmth without sacrificing professionalism. Sand grounds the interface. Together they signal confidence and approachability, which is exactly what a sales team needs from their daily tool.

This palette choice isn't decorative. It's functional empathy. Warm neutrals reduce perceived cognitive load, make data feel less intimidating, and subtly communicate that the software was designed by humans who understand the monotony of pipeline management. The best modern CRMs — Folk, Attio, Clay — understood this instinctively.

- Density: 8/10 — Dense
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** General
- **Keywords:** dashboard CRM, Geist, cards modulares, foco em atividade comercial, ícones Hugeicons, visual limpo e analítico
- **Era:** 2020s Modern SaaS CRM
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Primária cobre** (#C08532) — Metallic accent, decorative detail
- **Neutro areia** (#F2F1ED) — Secondary surface or text color
- **Cinza grafite** (#111827) — Secondary text, borders, muted elements
- **Cinza médio** (#9CA3AF) — Secondary text, borders, muted elements
- **Verde sucesso** (#16A34A) — Success states, positive indicators
- **Vermelho alerta** (#DC2626) — Error states, destructive actions

## Typography

- **Display / Hero:** Geist — Weight 700, tight tracking, used for headline impact
- **Accent:** Segoe UI — Used for decorative or emphasis text
- **Body:** Geist — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Geist — 0.875rem, weight 500, slight letter-spacing
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

Cards claros sobre fundo quase branco, header em cobre com contraste forte, gráficos simples, bordas suaves, uso consistente de ícones Hugeicons para estados e ações

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (var(--radius-card)) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (var(--radius-card)) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Usar Geist como fonte principal em toda a interface
- Do Aplicar letter-spacing -0.15px em títulos
- Do labels e navegação
- Do Fundo neutro #F2F1ED com cards brancos levemente elevados
- Do Cor primária #C08532 em CTAs
- Do indicadores e gráficos
- Do Utilizar ícones Hugeicons em navegação
- Do botões e legendas de status
- Do Layout com cards de pipeline
- Do contatos
- Do negócios e atividades recente visíveis

## Use Case

CRM platforms, Sales panels, Commercial management tools, SaaS dashboards
```

[Download DESIGN.md](https://designmd.app/library/crm-copper-sand/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Geist', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: -0.15px; color: #111827; background-color: #F2F1ED; --crm-primary: #C08532; --crm-neutral: #F2F1ED; --radius-card: 14px; box-shadow: 0 18px 45px rgba(15,23,42,0.08); border-radius: var(--radius-card);
```

### Variables

```
--font-family-base: 'Geist', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; --letter-spacing-tight: -0.15px; --color-primary: #C08532; --color-neutral: #F2F1ED; --color-surface: #FFFFFF; --color-text-main: #111827; --color-border-subtle: #E5E7EB; --color-success: #16A34A; --color-danger: #DC2626; --radius-sm: 8px; --radius-md: 14px; --radius-lg: 20px; --shadow-soft: 0 18px 45px rgba(15,23,42,0.08);
```

### Checklist

☐ Usar Geist como fonte principal em toda a interface, ☐ Aplicar letter-spacing -0.15px em títulos, labels e navegação, ☐ Fundo neutro #F2F1ED com cards brancos levemente elevados, ☐ Cor primária #C08532 em CTAs, indicadores e gráficos, ☐ Utilizar ícones Hugeicons em navegação, botões e legendas de status, ☐ Layout com cards de pipeline, contatos, negócios e atividades recente visíveis

## Colors

Primary

#C08532

#F2F1ED

Secondary

#111827

#9CA3AF

#16A34A

#DC2626

### Effects

Cards claros sobre fundo quase branco, header em cobre com contraste forte, gráficos simples, bordas suaves, uso consistente de ícones Hugeicons para estados e ações

### Light/Dark

✓ Full / ◐ Partial

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** CRM Copper Sand
- **Type:** General
- **Keywords:** dashboard CRM, Geist, cards modulares, foco em atividade comercial, ícones Hugeicons, visual limpo e analítico
- **Era:** 2020s Modern SaaS CRM
- **Light/Dark:** ✓ Full / ◐ Partial

## Color Palette

- **Primary:** Primária cobre #C08532, Neutro areia #F2F1ED
- **Secondary:** Cinza grafite #111827, Cinza médio #9CA3AF, Verde sucesso #16A34A, Vermelho alerta #DC2626

## Visual Effects

Cards claros sobre fundo quase branco, header em cobre com contraste forte, gráficos simples, bordas suaves, uso consistente de ícones Hugeicons para estados e ações

## AI Visual Direction

Design a modern CRM landing + dashboard-style UI using Geist font, a warm copper primary color (#C08532), and a soft neutral background (#F2F1ED). Use compact letter spacing (-0.15px) for all headings and labels, modular cards for pipeline, contacts, and activities, and Hugeicons as the main icon set for actions, statuses, and navigation.

## CSS Technical

```css
font-family: 'Geist', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: -0.15px; color: #111827; background-color: #F2F1ED; --crm-primary: #C08532; --crm-neutral: #F2F1ED; --radius-card: 14px; box-shadow: 0 18px 45px rgba(15,23,42,0.08); border-radius: var(--radius-card);
```

## Design System Variables

```css
--font-family-base: 'Geist', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; --letter-spacing-tight: -0.15px; --color-primary: #C08532; --color-neutral: #F2F1ED; --color-surface: #FFFFFF; --color-text-main: #111827; --color-border-subtle: #E5E7EB; --color-success: #16A34A; --color-danger: #DC2626; --radius-sm: 8px; --radius-md: 14px; --radius-lg: 20px; --shadow-soft: 0 18px 45px rgba(15,23,42,0.08);
```

## Implementation Checklist

- ☐ Usar Geist como fonte principal em toda a interface
- ☐ Aplicar letter-spacing -0.15px em títulos
- labels e navegação
- ☐ Fundo neutro #F2F1ED com cards brancos levemente elevados
- ☐ Cor primária #C08532 em CTAs
- indicadores e gráficos
- ☐ Utilizar ícones Hugeicons em navegação
- botões e legendas de status
- ☐ Layout com cards de pipeline
- contatos
- negócios e atividades recente visíveis

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

[![Glass Gradient Creative](https://designmd.app/images/library/343.png) General ### Glass Gradient Creative](https://designmd.app/library/glass-gradient-creative)[![Coastal Mist](https://designmd.app/images/library/344.png) General ### Coastal Mist](https://designmd.app/library/coastal-mist)[![Coastal Commerce](https://designmd.app/images/library/345.png) General ### Coastal Commerce](https://designmd.app/library/coastal-commerce)[![Modern Minimalist](https://designmd.app/images/library/337.png) Minimalismo & Swiss ### Modern Minimalist](https://designmd.app/library/modern-minimalist)[![High-Contrast Tech](https://designmd.app/images/library/338.png) Futurista & Tech ### High-Contrast Tech](https://designmd.app/library/high-contrast-tech)

Last synced: 4/1/2026
