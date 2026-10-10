# Ollama Pure Grayscale

- Source: <https://designmd.app/library/ollama-pure-grayscale>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:08:00.352Z

Minimalismo & Swiss2024-2026 Radical CLI Minimalism

# Ollama Pure Grayscale

Radically minimal Ollama-inspired landing page. Ideal for ferramentas cli, open-source, plataformas developer minimalistas, modelos de ia local. AI-ready template.

ollamagrayscaleradical minimalismpill geometryzero shadowsSF Pro Roundedbinary radiusdeveloper CLImonochrome

Use case: CLI tools, Open-source, Platforms developer minimalist, Modelos de IA local

![Ollama Pure Grayscale](https://designmd.app/images/library/390.png)

## Historical Context

The Swiss International Style never needed color to command authority. When Müller-Brockmann set Akzidenz-Grotesk against a white field in the 1950s, he proved that typographic hierarchy alone could carry an entire communication system. Ollama's pure grayscale approach isn't retro nostalgia — it's a direct continuation of that lineage, filtered through the terminal aesthetic that developers already inhabit daily. Stripping color entirely is a radical act in 2024's interface landscape. While every SaaS product drowns in gradient blobs and purple-to-blue CTAs, a grayscale system declares that the content is the interface. There's no decoration to hide behind. Every pixel of spacing, every weight choice, every contrast ratio becomes load-bearing structure. This is design for people who read man pages voluntarily. The Ollama model — local-first, open-source, no-account-required — demands a visual language equally free of corporate polish. Grayscale communicates honesty. It says: we spent our time on the model weights, not the marketing site. That alignment between product philosophy and visual identity is where real design systems earn trust.

## When to Use

Deploy this when your users think in monospace. Developer tools, CLI companions, open-source projects where credibility matters more than conversion metrics. It works when your product's value proposition is technical depth, not visual seduction. Terrible for consumer apps, e-commerce, or anything requiring emotional color associations. Perfect when you want your interface to feel like well-typeset documentation — authoritative, scannable, and completely out of the way.

## Design Principles

- Hierarchy through weight and scale only — if you need color to distinguish elements, your typography is broken
- Generous whitespace as structural element, not empty space — every margin is a deliberate decision about content relationships
- Maximum two typefaces: one grotesque for UI, one monospace for data — anything more is indulgence
- Contrast ratios at WCAG AAA minimum — grayscale systems have zero excuse for accessibility failures
- Motion restricted to functional feedback only — no decorative transitions, no scroll-triggered animations, no parallax theater

## DESIGN.md

```
---
version: "alpha"
name: "Ollama Pure Grayscale"
description: "Radically minimal Ollama-inspired landing page. Ideal for ferramentas cli, open-source, plataformas developer minimalistas, modelos de ia local. AI-ready template."
colors:
primary: "#000000"
secondary: "#ffffff"
tertiary: "#e5e5e5"
neutral: "#fafafa"
surface: "#262626"
accent: "#737373"
typography:
h1:
fontFamily: SF Pro Rounded
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: SF Pro Rounded
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: SF Pro Rounded
fontSize: 0.75rem
fontWeight: 500
rounded:
sm: 9999px
md: 19998px
lg: 29997px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Radically minimal Ollama-inspired landing page. Ideal for ferramentas cli, open-source, plataformas developer minimalistas, modelos de ia local. AI-ready template. The Swiss International Style never needed color to command authority. When Müller-Brockmann set Akzidenz-Grotesk against a white field in the 1950s, he proved that typographic hierarchy alone could carry an entire communication system. Ollama's pure grayscale approach isn't retro nostalgia — it's a direct continuation of that lineage, filtered through the terminal aesthetic that developers already inhabit daily.

Stripping color entirely is a radical act in 2024's interface landscape. While every SaaS product drowns in gradient blobs and purple-to-blue CTAs, a grayscale system declares that the content is the interface. There's no decoration to hide behind. Every pixel of spacing, every weight choice, every contrast ratio becomes load-bearing structure. This is design for people who read man pages voluntarily.

The Ollama model — local-first, open-source, no-account-required — demands a visual language equally free of corporate polish. Grayscale communicates honesty. It says: we spent our time on the model weights, not the marketing site. That alignment between product philosophy and visual identity is where real design systems earn trust.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Radical Minimalism, Pure Grayscale, Pill Geometry, Zero Shadows, SF Pro Rounded
- **Keywords:** ollama, grayscale, radical minimalism, pill geometry, zero shadows, SF Pro Rounded, binary radius, developer CLI, monochrome
- **Era:** 2024-2026 Radical CLI Minimalism
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Cinza Claro** (#e5e5e5) — Secondary text, borders, muted elements
- **Snow** (#fafafa) — Light surface, card backgrounds
- **Quase Preto** (#262626) — Deep contrast surface
- **Stone** (#737373) — Extended palette, decorative use
- **Silver** (#a3a3a3) — Extended palette, decorative use
- **Escuro** (#090909) — Deep contrast surface

## Typography

- **Display / Hero:** SF Pro Rounded — Weight 700, tight tracking, used for headline impact
- **Body:** SF Pro Rounded — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** SF Pro Rounded — 0.875rem, weight 500, slight letter-spacing
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

Zero cor cromática — paleta 100% grayscale. Zero sombras em qualquer elemento. Geometria pill (9999px) em TUDO interativo — botões, tabs, inputs, tags. Containers com 12px radius — o único radius não-pill. SF Pro Rounded para headlines criando suavidade distintiva. Profundidade apenas via mudanças de cor de fundo e bordas 1px. Conteúdo extremamente restrito — cada seção apresenta uma ideia clara.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 9999px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Pill-shaped (9999px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Pill-shaped (9999px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Paleta 100% grayscale
- Do Zero sombras
- Do Pill 9999px em tudo interativo
- Do 12px em containers
- Do SF Pro Rounded headlines
- Do Profundidade via cor/bordas
- Do Conteúdo restrito
- Do Responsivo

## Use Case

CLI tools, Open-source, Platforms developer minimalist, Modelos de IA local
```

[Download DESIGN.md](https://designmd.app/library/ollama-pure-grayscale/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #ffffff; color: #000000; border: 1px solid #e5e5e5; border-radius: 9999px interactive, 12px containers; box-shadow: none; font-family: 'SF Pro Rounded', system-ui; font-weight: 500 headlines, 400 body
```

### Variables

```
--bg: #ffffff; --text: #000000; --surface: #fafafa; --border: #e5e5e5; --text-secondary: #737373; --text-muted: #a3a3a3; --radius-pill: 9999px; --radius-container: 12px; --shadow: none
```

### Checklist

☐ Paleta 100% grayscale, ☐ Zero sombras, ☐ Pill 9999px em tudo interativo, ☐ 12px em containers, ☐ SF Pro Rounded headlines, ☐ Profundidade via cor/bordas, ☐ Conteúdo restrito, ☐ Responsivo

## Colors

Primary

#000000

#ffffff

#e5e5e5

#fafafa

Secondary

#262626

#737373

#a3a3a3

#090909

### Effects

Zero cor cromática — paleta 100% grayscale. Zero sombras em qualquer elemento. Geometria pill (9999px) em TUDO interativo — botões, tabs, inputs, tags. Containers com 12px radius — o único radius não-pill. SF Pro Rounded para headlines criando suavidade distintiva. Profundidade apenas via mudanças de cor de fundo e bordas 1px. Conteúdo extremamente restrito — cada seção apresenta uma ideia clara.

### Light/Dark

✓ Full / ✗ Not Recommended

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Ollama Pure Grayscale
- **Type:** Radical Minimalism, Pure Grayscale, Pill Geometry, Zero Shadows, SF Pro Rounded
- **Keywords:** ollama, grayscale, radical minimalism, pill geometry, zero shadows, SF Pro Rounded, binary radius, developer CLI, monochrome
- **Era:** 2024-2026 Radical CLI Minimalism
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Color Palette

- **Primary:** Preto #000000, Branco #ffffff, Cinza Claro #e5e5e5, Snow #fafafa
- **Secondary:** Quase Preto #262626, Stone #737373, Silver #a3a3a3, Escuro #090909

## Visual Effects

Zero cor cromática — paleta 100% grayscale. Zero sombras em qualquer elemento. Geometria pill (9999px) em TUDO interativo — botões, tabs, inputs, tags. Containers com 12px radius — o único radius não-pill. SF Pro Rounded para headlines criando suavidade distintiva. Profundidade apenas via mudanças de cor de fundo e bordas 1px. Conteúdo extremamente restrito — cada seção apresenta uma ideia clara.

## AI Visual Direction

Design a radically minimal Ollama-inspired landing page. Pure grayscale only — zero chromatic color. Zero shadows on any element. Pill-shaped (9999px) radius on ALL interactive elements. 12px radius on containers only. SF Pro Rounded for display headlines at 48px weight 500. Depth through background color shifts and 1px borders only. Extremely restrained content — each section presents one clear idea. Binary radius system: 12px containers or 9999px interactive.

## CSS Technical

```css
background: #ffffff; color: #000000; border: 1px solid #e5e5e5; border-radius: 9999px interactive, 12px containers; box-shadow: none; font-family: 'SF Pro Rounded', system-ui; font-weight: 500 headlines, 400 body
```

## Design System Variables

```css
--bg: #ffffff; --text: #000000; --surface: #fafafa; --border: #e5e5e5; --text-secondary: #737373; --text-muted: #a3a3a3; --radius-pill: 9999px; --radius-container: 12px; --shadow: none
```

## Implementation Checklist

- ☐ Paleta 100% grayscale
- ☐ Zero sombras
- ☐ Pill 9999px em tudo interativo
- ☐ 12px em containers
- ☐ SF Pro Rounded headlines
- ☐ Profundidade via cor/bordas
- ☐ Conteúdo restrito
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

[![Apple Premium Cinematic](https://designmd.app/images/library/380.png) Minimalismo & Swiss ### Apple Premium Cinematic](https://designmd.app/library/apple-premium-cinematic)[![Vercel Geist Minimal](https://designmd.app/images/library/386.png) Minimalismo & Swiss ### Vercel Geist Minimal](https://designmd.app/library/vercel-geist-minimal)[![VoltAgent Terminal Emerald](https://designmd.app/images/library/395.png) Futurista & Tech ### VoltAgent Terminal Emerald](https://designmd.app/library/voltagent-terminal-emerald)[![xAI Brutalist Monospace](https://designmd.app/images/library/400.png) Brutalismo ### xAI Brutalist Monospace](https://designmd.app/library/xai-brutalist-monospace)[![OpenCode Terminal Mono](https://designmd.app/images/library/409.png) Brutalismo ### OpenCode Terminal Mono](https://designmd.app/library/opencode-terminal-mono)

Last synced: 4/1/2026
