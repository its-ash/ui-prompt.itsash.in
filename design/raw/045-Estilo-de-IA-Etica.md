# Estilo de IA Ética

- Source: <https://designmd.app/library/estilo-de-ia-etica>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:59:49.334Z

Futurista & Tech2026+ Responsible AI

# Estilo de IA Ética

Clean and trustworthy landing page for a safe conversational AI. Ideal for landing pages, modern websites. AI-ready template.

AIethical AIsafe AIconversational AItrustworthythoughtfulcleanminimalistresponsiblesecure

Use case: Landing pages, Modern websites

![Estilo de IA Ética](https://designmd.app/images/library/139.png)

## Historical Context

The first wave of AI ethics organizations faced an impossible design brief: look trustworthy without looking like you're trying to look trustworthy. Early attempts leaned hard into blue gradients and shield iconography — borrowed credibility from fintech and cybersecurity. It felt hollow. The visual language of 'responsible AI' was indistinguishable from the companies it claimed to hold accountable. What emerged next was more interesting. Organizations like the Partnership on AI and Montreal AI Ethics Institute started developing identities that prioritized legibility over mystique. Open typography. Generous whitespace. Diagrams that actually explained something instead of decorating a hero section. The shift was philosophical: if your mission is transparency, your design language can't hide behind abstraction. The real tension persists today. How do you communicate futurism — because AI is genuinely novel — without the techno-utopian aesthetic that erodes trust? The best work in this space threads that needle by grounding speculative technology in human-scale design decisions. Readable type. Honest color. Structure that invites scrutiny rather than deflecting it.

## When to Use

Reach for this when the product needs to signal accountability without sacrificing forward-thinking energy. AI safety orgs, governance dashboards, responsible AI tooling, trust & safety platforms — anywhere the audience is skeptical by profession and allergic to hype. Also works for internal AI ethics review tools where clarity isn't optional, it's the entire point. Skip it if you want spectacle. This style earns trust through restraint, not performance.

## Design Principles

- Transparency as structure — information architecture does the trust-building, not decorative elements
- Grounded futurism — forward-looking without floating into abstraction or techno-utopianism
- Legibility over mystique — if it can't be read quickly and understood clearly, it fails the mission
- Honest color — muted, purposeful palettes that avoid both corporate blue washing and startup neon
- Human-scale typography — type choices that center readability and invite scrutiny rather than overwhelm

## DESIGN.md

```
---
version: "alpha"
name: "Estilo de IA Ética"
description: "Clean and trustworthy landing page for a safe conversational AI. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#1A73E8"
secondary: "#FFFFFF"
tertiary: "#F8F9FA"
neutral: "#3C4043"
surface: "#34A853"
accent: "#FBBC05"
typography:
h1:
fontFamily: Roboto
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Roboto
fontSize: 1rem
fontWeight: 400
rounded:
sm: 8px
md: 16px
lg: 24px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Clean and trustworthy landing page for a safe conversational AI. Ideal for landing pages, modern websites. AI-ready template. The first wave of AI ethics organizations faced an impossible design brief: look trustworthy without looking like you're trying to look trustworthy. Early attempts leaned hard into blue gradients and shield iconography — borrowed credibility from fintech and cybersecurity. It felt hollow. The visual language of 'responsible AI' was indistinguishable from the companies it claimed to hold accountable.

What emerged next was more interesting. Organizations like the Partnership on AI and Montreal AI Ethics Institute started developing identities that prioritized legibility over mystique. Open typography. Generous whitespace. Diagrams that actually explained something instead of decorating a hero section. The shift was philosophical: if your mission is transparency, your design language can't hide behind abstraction.

The real tension persists today. How do you communicate futurism — because AI is genuinely novel — without the techno-utopian aesthetic that erodes trust? The best work in this space threads that needle by grounding speculative technology in human-scale design decisions. Readable type. Honest color. Structure that invites scrutiny rather than deflecting it.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Clean, Trustworthy, Thoughtful
- **Keywords:** AI, ethical AI, safe AI, conversational AI, trustworthy, thoughtful, clean, minimalist, responsible, secure
- **Era:** 2026+ Responsible AI
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Azul Ético** (#1A73E8) — Accent highlight, links and focus states
- **Branco** (#FFFFFF) — Light surface, card backgrounds
- **Cinza Claro** (#F8F9FA) — Secondary text, borders, muted elements
- **Cinza Escuro** (#3C4043) — Dark surface, primary background
- **Verde** (#34A853) — Success states, positive indicators
- **Amarelo** (#FBBC05) — Warning states, attention indicators
- **Vermelho** (#EA4335) — Error states, destructive actions
- **Ciano** (#00BCD4) — Extended palette, decorative use

## Typography

- **Display / Hero:** Roboto — Weight 700, tight tracking, used for headline impact
- **Body:** Roboto — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Roboto — 0.875rem, weight 500, slight letter-spacing
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

Visualizações de fluxo de conversação, diagramas de segurança de IA, brilhos sutis em elementos de confiança, tipografia limpa e legível (sans-serif), micro-interações de feedback de segurança, elementos modulares, animações de progresso de pesquisa ética.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (8px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (8px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.

## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Visualizações de fluxo de conversação
- Do Diagramas de segurança de IA
- Do Brilhos de confiança
- Do Tipografia legível
- Do Micro-interações de feedback de segurança
- Do Animações de pesquisa ética.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/estilo-de-ia-etica/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #3C4043, box-shadow: 0 2px 8px rgba(0,0,0,0.1), border-radius: 8px, font-family: "Roboto, Arial, sans-serif", transition: all 0.3s ease-in-out, background-image: linear-gradient(to bottom, #F8F9FA, #FFFFFF), .conversation-flow-animation, .ai-safety-diagram.
```

### Variables

```
--ethical-blue: #1A73E8, --white: #FFFFFF, --light-grey: #F8F9FA, --dark-grey: #3C4043, --trust-glow: rgba(26,115,232,0.3), --font-legible: "Roboto, Arial, sans-serif", --shadow-light: 0 2px 8px rgba(0,0,0,0.1).
```

### Checklist

☐ Visualizações de fluxo de conversação, ☐ Diagramas de segurança de IA, ☐ Brilhos de confiança, ☐ Tipografia legível, ☐ Micro-interações de feedback de segurança, ☐ Animações de pesquisa ética.

## Colors

Primary

#1A73E8

#FFFFFF

#F8F9FA

#3C4043

Secondary

#34A853

#FBBC05

#EA4335

#00BCD4

### Effects

Visualizações de fluxo de conversação, diagramas de segurança de IA, brilhos sutis em elementos de confiança, tipografia limpa e legível (sans-serif), micro-interações de feedback de segurança, elementos modulares, animações de progresso de pesquisa ética.

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

- **Name:** Estilo de IA Ética
- **Type:** Clean, Trustworthy, Thoughtful
- **Keywords:** AI, ethical AI, safe AI, conversational AI, trustworthy, thoughtful, clean, minimalist, responsible, secure
- **Era:** 2026+ Responsible AI
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Azul Ético #1A73E8, Branco #FFFFFF, Cinza Claro #F8F9FA, Cinza Escuro #3C4043
- **Secondary:** Verde #34A853, Amarelo #FBBC05, Vermelho #EA4335, Ciano #00BCD4

## Visual Effects

Visualizações de fluxo de conversação, diagramas de segurança de IA, brilhos sutis em elementos de confiança, tipografia limpa e legível (sans-serif), micro-interações de feedback de segurança, elementos modulares, animações de progresso de pesquisa ética.

## AI Visual Direction

Design a clean and trustworthy landing page for a safe conversational AI. Use: ethical blue accents, white and light grey palette, conversation flow visualizations, AI safety diagrams, subtle trust glows, clean legible typography, security feedback micro-interactions, modular elements, ethical research progress animations, responsible and thoughtful AI feel.

## CSS Technical

```css
background: #FFFFFF, color: #3C4043, box-shadow: 0 2px 8px rgba(0,0,0,0.1), border-radius: 8px, font-family: "Roboto, Arial, sans-serif", transition: all 0.3s ease-in-out, background-image: linear-gradient(to bottom, #F8F9FA, #FFFFFF), .conversation-flow-animation, .ai-safety-diagram.
```

## Design System Variables

```css
--ethical-blue: #1A73E8, --white: #FFFFFF, --light-grey: #F8F9FA, --dark-grey: #3C4043, --trust-glow: rgba(26,115,232,0.3), --font-legible: "Roboto, Arial, sans-serif", --shadow-light: 0 2px 8px rgba(0,0,0,0.1).
```

## Implementation Checklist

- ☐ Visualizações de fluxo de conversação
- ☐ Diagramas de segurança de IA
- ☐ Brilhos de confiança
- ☐ Tipografia legível
- ☐ Micro-interações de feedback de segurança
- ☐ Animações de pesquisa ética.

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

[![Estilo de Inteligência Generativa](https://designmd.app/images/library/138.png) Futurista & Tech ### Estilo de Inteligência Generativa](https://designmd.app/library/estilo-de-inteligencia-generativa)[![Estilo Material AI](https://designmd.app/images/library/122.png) Futurista & Tech ### Estilo Material AI](https://designmd.app/library/estilo-material-ai)[![Estilo Fluent AI](https://designmd.app/images/library/123.png) Futurista & Tech ### Estilo Fluent AI](https://designmd.app/library/estilo-fluent-ai)[![Estilo de Elegância Fintech](https://designmd.app/images/library/137.png) Futurista & Tech ### Estilo de Elegância Fintech](https://designmd.app/library/estilo-de-elegancia-fintech)[![Estilo Deep Learning High-Tech](https://designmd.app/images/library/120.png) Futurista & Tech ### Estilo Deep Learning High-Tech](https://designmd.app/library/estilo-deep-learning-high-tech)

Last synced: 4/1/2026
