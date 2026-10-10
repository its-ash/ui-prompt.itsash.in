# Portfolio Dev Full-Stack

- Source: <https://designmd.app/library/portfolio-dev-full-stack>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:00:25.224Z

Temas & Verticais2020s Developer

# Portfolio Dev Full-Stack

Developer portfolio, full-stack, projects gallery, clean layout, minimal, dark and cyan, code, tech stack, personal brand. Ideal for landing pages, modern websites. AI-ready template.

developer portfoliofull-stackprojects galleryclean layoutminimaldark and cyancodetech stackpersonal brand

Use case: Landing pages, Modern websites

![Portfolio Dev Full-Stack](https://designmd.app/images/library/145.png)

## Historical Context

Developer portfolios used to be an afterthought. A WordPress theme, maybe a Behance page if you were feeling fancy. Then GitHub became the resume. Contribution graphs, pinned repos, README aesthetics — suddenly your commit history was your portfolio. The personal site felt redundant for a while. Then the pendulum swung. Developers realized a grid of green squares doesn't communicate taste. The terminal aesthetic emerged — monospace type, dark backgrounds, blinking cursors, ASCII art headers. It was a way to say "I live in the command line" without saying it. Some went minimal to the point of hostility. Others built elaborate interactive CLIs in the browser. Both were statements. What's interesting now is the full-stack developer portfolio as proof of craft. The site itself is the project. How it loads, how it deploys, what framework it uses — recruiters might not notice, but other developers will. The portfolio became a technical flex disguised as a personal page. Your stack choices are your design choices.

## When to Use

When you're building a personal site that needs to signal technical depth without looking like a template. Ideal for developers who ship side projects and want a gallery that feels intentional, not just a grid of screenshots. Works for freelancers positioning themselves as technical partners rather than hired hands. Also fits the developer who wants their site to feel like an extension of their toolchain — terminal vibes, code references, monospace everything — without sacrificing usability for visitors who don't speak bash.

## Design Principles

- The site is the portfolio piece — performance, architecture, and deploy pipeline should be visible signals of competence
- Monospace typography and terminal references earn their place through function, not costume — use them where they aid scannability, not just for aesthetic cosplay
- Project cards need hierarchy: what you built matters more than what stack you used, but both should be discoverable
- Dark mode is the default expectation, but contrast ratios still apply — legibility over atmosphere every time
- Interactions should feel engineered, not designed — subtle state changes, keyboard navigation, reduced motion respect

## DESIGN.md

```
---
version: "alpha"
name: "Portfolio Dev Full-Stack"
description: "Developer portfolio, full-stack, projects gallery, clean layout, minimal, dark and cyan, code, tech stack, personal brand. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#000000"
secondary: "#1A1A1A"
tertiary: "#00BCD4"
neutral: "#FFFFFF"
surface: "#E0E0E0"
accent: "#333333"
typography:
h1:
fontFamily: JetBrains Mono
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: JetBrains Mono
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

Developer portfolio, full-stack, projects gallery, clean layout, minimal, dark and cyan, code, tech stack, personal brand. Ideal for landing pages, modern websites. AI-ready template. Developer portfolios used to be an afterthought. A WordPress theme, maybe a Behance page if you were feeling fancy. Then GitHub became the resume. Contribution graphs, pinned repos, README aesthetics — suddenly your commit history was your portfolio. The personal site felt redundant for a while.

Then the pendulum swung. Developers realized a grid of green squares doesn't communicate taste. The terminal aesthetic emerged — monospace type, dark backgrounds, blinking cursors, ASCII art headers. It was a way to say "I live in the command line" without saying it. Some went minimal to the point of hostility. Others built elaborate interactive CLIs in the browser. Both were statements.

What's interesting now is the full-stack developer portfolio as proof of craft. The site itself is the project. How it loads, how it deploys, what framework it uses — recruiters might not notice, but other developers will. The portfolio became a technical flex disguised as a personal page. Your stack choices are your design choices.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Minimal, Dark, Professional
- **Keywords:** developer portfolio, full-stack, projects gallery, clean layout, minimal, dark and cyan, code, tech stack, personal brand
- **Era:** 2020s Developer
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Black** (#000000) — Dark surface, primary background
- **Dark Grey** (#1A1A1A) — Dark surface, primary background
- **Cyan** (#00BCD4) — Accent highlight, links and focus states
- **White** (#FFFFFF) — Secondary surface
- **Light Grey** (#E0E0E0) — Secondary text, borders, muted elements
- **Charcoal** (#333333) — Deep contrast surface

## Typography

- **Display / Hero:** JetBrains Mono — Weight 700, tight tracking, used for headline impact
- **Body:** JetBrains Mono — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** JetBrains Mono — 0.875rem, weight 500, slight letter-spacing
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

Layout duas colunas desktop (bio/projetos), cards de projetos com tech stack badges, hover com underline animado e escala suave, CSS grid/flex para galeria.

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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Navbar + Hero (bio + CTA)
- Do Projetos + Stack/Skills
- Do Experiência + Depoimentos
- Do CTA 'Fale comigo'
- Do Meta tags SEO
- Do Background escuro legível
- Do Microinterações discretas
- Do Ícones SVG (Git
- Do terminal
- Do frameworks).

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/portfolio-dev-full-stack/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #1A1A1A, color: #FFFFFF, border-radius: 8px, box-shadow: 0 2px 10px rgba(0,0,0,0.3), font-family: 'JetBrains Mono, monospace', accent color: #00BCD4, animated underline on hover, tech badges with border.
```

### Variables

```
--black: #000000, --dark-bg: #1A1A1A, --cyan: #00BCD4, --white: #FFFFFF, --radius-card: 8px, --font-dev: 'JetBrains Mono, monospace'.
```

### Checklist

☐ Navbar + Hero (bio + CTA), ☐ Projetos + Stack/Skills, ☐ Experiência + Depoimentos, ☐ CTA 'Fale comigo', ☐ Meta tags SEO, ☐ Background escuro legível, ☐ Microinterações discretas, ☐ Ícones SVG (Git, terminal, frameworks).

## Colors

Primary

#000000

#1A1A1A

#00BCD4

Secondary

#FFFFFF

#E0E0E0

#333333

### Effects

Layout duas colunas desktop (bio/projetos), cards de projetos com tech stack badges, hover com underline animado e escala suave, CSS grid/flex para galeria.

### Light/Dark

✗ No / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Portfolio Dev Full-Stack
- **Type:** Minimal, Dark, Professional
- **Keywords:** developer portfolio, full-stack, projects gallery, clean layout, minimal, dark and cyan, code, tech stack, personal brand
- **Era:** 2020s Developer
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** Black #000000, Dark Grey #1A1A1A, Cyan #00BCD4
- **Secondary:** White #FFFFFF, Light Grey #E0E0E0, Charcoal #333333

## Visual Effects

Layout duas colunas desktop (bio/projetos), cards de projetos com tech stack badges, hover com underline animado e escala suave, CSS grid/flex para galeria.

## AI Visual Direction

developer portfolio, full-stack, projects gallery, clean layout, minimal, dark and cyan, code, tech stack, personal brand.

## CSS Technical

```css
background: #1A1A1A, color: #FFFFFF, border-radius: 8px, box-shadow: 0 2px 10px rgba(0,0,0,0.3), font-family: 'JetBrains Mono, monospace', accent color: #00BCD4, animated underline on hover, tech badges with border.
```

## Design System Variables

```css
--black: #000000, --dark-bg: #1A1A1A, --cyan: #00BCD4, --white: #FFFFFF, --radius-card: 8px, --font-dev: 'JetBrains Mono, monospace'.
```

## Implementation Checklist

- ☐ Navbar + Hero (bio + CTA)
- ☐ Projetos + Stack/Skills
- ☐ Experiência + Depoimentos
- ☐ CTA 'Fale comigo'
- ☐ Meta tags SEO
- ☐ Background escuro legível
- ☐ Microinterações discretas
- ☐ Ícones SVG (Git
- terminal
- frameworks).

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

[![Underwater Aquático Deep Sea](https://designmd.app/images/library/140.png) Temas & Verticais ### Underwater Aquático Deep Sea](https://designmd.app/library/underwater-aquatico-deep-sea)[![SaaS Enterprise Analytics](https://designmd.app/images/library/141.png) Temas & Verticais ### SaaS Enterprise Analytics](https://designmd.app/library/saas-enterprise-analytics)[![HealthTech Plataforma Clínica](https://designmd.app/images/library/142.png) Temas & Verticais ### HealthTech Plataforma Clínica](https://designmd.app/library/healthtech-plataforma-clinica)[![FinTech Plataforma Financeira](https://designmd.app/images/library/143.png) Temas & Verticais ### FinTech Plataforma Financeira](https://designmd.app/library/fintech-plataforma-financeira)[![EdTech Plataforma de Cursos](https://designmd.app/images/library/144.png) Temas & Verticais ### EdTech Plataforma de Cursos](https://designmd.app/library/edtech-plataforma-de-cursos)

Last synced: 4/1/2026
