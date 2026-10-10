# Fitness App de Treinos

- Source: <https://designmd.app/library/fitness-app-de-treinos>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:01:11.300Z

Temas & Verticais2020s Fitness

# Fitness App de Treinos

Fitness app landing, workouts, before-after, progress tracking, red and orange, energetic, mobile app, gym, health. Ideal for landing pages, modern websites. AI-ready template.

fitness app landingworkoutsbefore-afterprogress trackingred and orangeenergeticmobile appgymhealth

Use case: Landing pages, Modern websites

![Fitness App de Treinos](https://designmd.app/images/library/147.png)

## Historical Context

Peloton changed the game. Not because the workouts were better—plenty of apps had interval timers and rep counters before 2018—but because they treated motivation as a design material. Dark backgrounds, neon accents, leaderboards that pulse. Suddenly fitness UI wasn't about utility anymore. It was about energy. Nike Training Club went minimal. Strava went data-dense. Both worked, but for completely different psychological reasons. Nike said: "just show me what to do next." Strava said: "show me everything I've done." The split matters. Motivation-driven UI leans on emotion—big type, progress rings, celebration states. Utility-driven UI leans on information density—splits, zones, weekly volume. Then there's the dark-mode-with-energy-colors pattern that became the fitness default. Black canvas, electric green or hot coral as the action color. It's not arbitrary—dark backgrounds make progress bars and data visualizations pop harder. The screen becomes a dashboard, not a document. Every serious fitness app since 2019 has riffed on this palette, and for good reason: it works at 5am on a treadmill when your eyes are half-open.

## When to Use

Reach for this when you're building anything where physical progress is the core loop. Workout apps, obviously—but also gym membership platforms, personal training marketplaces, health tracking dashboards, and before-after transformation showcases. It fits whenever users need to feel momentum. If your product tracks reps, calories, streaks, or body composition, this vertical gives you the visual language to make numbers feel like achievements rather than spreadsheet cells.

## Design Principles

- Dark canvas, energy accents — black or near-black backgrounds with one high-saturation action color that makes progress indicators impossible to ignore
- Motion as motivation — animate progress rings, streak counters, and completion states so the UI itself feels like a reward
- Data hierarchy over data density — show the one number that matters big, tuck the rest behind a tap; don't overwhelm mid-workout
- Before-after as narrative structure — design transformation flows that tell a story across time, not just side-by-side static comparisons
- Celebration states earn their drama — confetti and haptics on a PR hit different than on a Tuesday check-in; scale feedback to actual achievement

## DESIGN.md

```
---
version: "alpha"
name: "Fitness App de Treinos"
description: "Fitness app landing, workouts, before-after, progress tracking, red and orange, energetic, mobile app, gym, health. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#E53E3E"
secondary: "#FF6B00"
tertiary: "#1A1A1A"
neutral: "#FFFFFF"
surface: "#F7FAFC"
accent: "#FFC107"
typography:
h1:
fontFamily: Poppins
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Poppins
fontSize: 1rem
fontWeight: 400
rounded:
sm: 12px
md: 24px
lg: 36px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Fitness app landing, workouts, before-after, progress tracking, red and orange, energetic, mobile app, gym, health. Ideal for landing pages, modern websites. AI-ready template. Peloton changed the game. Not because the workouts were better—plenty of apps had interval timers and rep counters before 2018—but because they treated motivation as a design material. Dark backgrounds, neon accents, leaderboards that pulse. Suddenly fitness UI wasn't about utility anymore. It was about energy.

Nike Training Club went minimal. Strava went data-dense. Both worked, but for completely different psychological reasons. Nike said: "just show me what to do next." Strava said: "show me everything I've done." The split matters. Motivation-driven UI leans on emotion—big type, progress rings, celebration states. Utility-driven UI leans on information density—splits, zones, weekly volume.

Then there's the dark-mode-with-energy-colors pattern that became the fitness default. Black canvas, electric green or hot coral as the action color. It's not arbitrary—dark backgrounds make progress bars and data visualizations pop harder. The screen becomes a dashboard, not a document. Every serious fitness app since 2019 has riffed on this palette, and for good reason: it works at 5am on a treadmill when your eyes are half-open.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Energetic, Bold, Motivational
- **Keywords:** fitness app landing, workouts, before-after, progress tracking, red and orange, energetic, mobile app, gym, health
- **Era:** 2020s Fitness
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Red** (#E53E3E) — Error states, destructive actions
- **Orange** (#FF6B00) — Warm accent, call-to-action secondary
- **Dark** (#1A1A1A) — Dark surface, primary background
- **White** (#FFFFFF) — Secondary surface
- **Light Grey** (#F7FAFC) — Secondary text, borders, muted elements
- **Yellow** (#FFC107) — Warning states, attention indicators

## Typography

- **Display / Hero:** Poppins — Weight 700, tight tracking, used for headline impact
- **Body:** Poppins — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Poppins — 0.875rem, weight 500, slight letter-spacing
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

Hero com grande CTA para download, cards de planos com destaque, slider antes/depois (CSS/JS), animações de números de progresso, layout modular mobile-first.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (12px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (12px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Navbar + Hero
- Do Benefícios + Planos
- Do Progresso/Resultados + App Preview
- Do CTA download
- Do Meta tags SEO
- Do Tom motivacional PT-BR
- Do Ícones SVG (treinos
- Do alimentação)
- Do Animações suaves
- Do Overlays em imagens para legibilidade.

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/fitness-app-de-treinos/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #1A1A1A, border-radius: 12px, box-shadow: 0 4px 12px rgba(0,0,0,0.1), font-family: 'Poppins, sans-serif', gradient CTAs red-to-orange, counter animations, before/after slider CSS.
```

### Variables

```
--red: #E53E3E, --orange: #FF6B00, --dark: #1A1A1A, --white: #FFFFFF, --radius-card: 12px, --font-fitness: 'Poppins, sans-serif'.
```

### Checklist

☐ Navbar + Hero, ☐ Benefícios + Planos, ☐ Progresso/Resultados + App Preview, ☐ CTA download, ☐ Meta tags SEO, ☐ Tom motivacional PT-BR, ☐ Ícones SVG (treinos, alimentação), ☐ Animações suaves, ☐ Overlays em imagens para legibilidade.

## Colors

Primary

#E53E3E

#FF6B00

#1A1A1A

Secondary

#FFFFFF

#F7FAFC

#FFC107

### Effects

Hero com grande CTA para download, cards de planos com destaque, slider antes/depois (CSS/JS), animações de números de progresso, layout modular mobile-first.

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

- **Name:** Fitness App de Treinos
- **Type:** Energetic, Bold, Motivational
- **Keywords:** fitness app landing, workouts, before-after, progress tracking, red and orange, energetic, mobile app, gym, health
- **Era:** 2020s Fitness
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Red #E53E3E, Orange #FF6B00, Dark #1A1A1A
- **Secondary:** White #FFFFFF, Light Grey #F7FAFC, Yellow #FFC107

## Visual Effects

Hero com grande CTA para download, cards de planos com destaque, slider antes/depois (CSS/JS), animações de números de progresso, layout modular mobile-first.

## AI Visual Direction

fitness app landing, workouts, before-after, progress tracking, red and orange, energetic, mobile app, gym, health.

## CSS Technical

```css
background: #FFFFFF, color: #1A1A1A, border-radius: 12px, box-shadow: 0 4px 12px rgba(0,0,0,0.1), font-family: 'Poppins, sans-serif', gradient CTAs red-to-orange, counter animations, before/after slider CSS.
```

## Design System Variables

```css
--red: #E53E3E, --orange: #FF6B00, --dark: #1A1A1A, --white: #FFFFFF, --radius-card: 12px, --font-fitness: 'Poppins, sans-serif'.
```

## Implementation Checklist

- ☐ Navbar + Hero
- ☐ Benefícios + Planos
- ☐ Progresso/Resultados + App Preview
- ☐ CTA download
- ☐ Meta tags SEO
- ☐ Tom motivacional PT-BR
- ☐ Ícones SVG (treinos
- alimentação)
- ☐ Animações suaves
- ☐ Overlays em imagens para legibilidade.

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
