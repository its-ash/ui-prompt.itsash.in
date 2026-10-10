# MongoDB Forest Neon

- Source: <https://designmd.app/library/mongodb-forest-neon>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:08:40.308Z

Futurista & Tech2024-2026 Document Database

# MongoDB Forest Neon

MongoDB-inspired forest-dark landing page. Ideal for databases, infraestrutura de dados, plataformas developer, apis de dados. AI-ready template.

mongodbforestneon greenteal-blackserif heroSource Code Prowide tracking labelsdual-modeLeafyGreenpill buttonsbioluminescent

Use case: Databases, Infraestrutura de dados, Platforms developer, APIs de dados

![MongoDB Forest Neon](https://designmd.app/images/library/413.png)

## Historical Context

The marriage of deep forest greens with electric neon emerged from a very specific moment in developer culture — when terminal aesthetics stopped being purely functional and became identity. MongoDB's leaf green wasn't arbitrary; it signaled organic growth, documents branching like trees rather than locking into rigid table structures. That botanical metaphor stuck. Neon green on dark backgrounds carries decades of CRT phosphor memory. It's the color of data in motion, of cursors blinking at 2am, of systems that never sleep. When you layer that electric charge over forest depths, you get something that feels both ancient and impossibly fast — old-growth timber humming with fiber optics. This palette found its real footing around 2018-2021 as developer tools embraced dark-first design and needed accent colors that could cut through without feeling corporate. Neon green became the anti-blue — a rejection of enterprise blandness in favor of something that felt alive, dangerous even. It said: this tool has teeth.

## When to Use

Deploy this when your product lives in the terminal-adjacent space — database dashboards, query builders, infrastructure monitoring, CLI companions with a GUI layer. It works when your users self-identify as builders and expect interfaces that respect their technical fluency. Avoid it for consumer-facing products or anything targeting non-technical stakeholders. This palette demands dark mode as its native habitat; forcing it into light themes kills the phosphor magic entirely.

## Design Principles

- Neon green is a scalpel, not a paintbrush — reserve it for interactive states, live data indicators, and success confirmations. The moment it covers more than 8% of any viewport, it becomes noise.
- Forest tones build depth through layered dark surfaces. Use 3-4 green-black values to create elevation hierarchy without relying on drop shadows or borders.
- Typography stays neutral and monospaced where data lives. The palette is loud enough — let type be the calm structural backbone that keeps everything readable at 14px.
- Motion should reference data flow: pulses for live connections, horizontal sweeps for queries in transit. Never bounce, never ease-out-back. This isn't playful — it's precise.
- Contrast ratios matter more here than anywhere. Neon on dark passes WCAG easily, but neon on mid-green fails catastrophically. Test every combination — your users stare at these screens for 10-hour stretches.

## DESIGN.md

```
---
version: "alpha"
name: "MongoDB Forest Neon"
description: "MongoDB-inspired forest-dark landing page. Ideal for databases, infraestrutura de dados, plataformas developer, apis de dados. AI-ready template."
colors:
primary: "#001e2b"
secondary: "#00ed64"
tertiary: "#00684a"
neutral: "#ffffff"
surface: "#006cfa"
accent: "#3860be"
typography:
h1:
fontFamily: Georgia for hero
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: Georgia for hero
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: Georgia for hero
fontSize: 0.75rem
fontWeight: 500
rounded:
sm: 100px
md: 200px
lg: 300px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

MongoDB-inspired forest-dark landing page. Ideal for databases, infraestrutura de dados, plataformas developer, apis de dados. AI-ready template. The marriage of deep forest greens with electric neon emerged from a very specific moment in developer culture — when terminal aesthetics stopped being purely functional and became identity. MongoDB's leaf green wasn't arbitrary; it signaled organic growth, documents branching like trees rather than locking into rigid table structures. That botanical metaphor stuck.

Neon green on dark backgrounds carries decades of CRT phosphor memory. It's the color of data in motion, of cursors blinking at 2am, of systems that never sleep. When you layer that electric charge over forest depths, you get something that feels both ancient and impossibly fast — old-growth timber humming with fiber optics.

This palette found its real footing around 2018-2021 as developer tools embraced dark-first design and needed accent colors that could cut through without feeling corporate. Neon green became the anti-blue — a rejection of enterprise blandness in favor of something that felt alive, dangerous even. It said: this tool has teeth.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Teal-Black Forest, Neon Green Accent, Serif Hero, Source Code Pro Labels, Dual-Mode
- **Keywords:** mongodb, forest, neon green, teal-black, serif hero, Source Code Pro, wide tracking labels, dual-mode, LeafyGreen, pill buttons, bioluminescent
- **Era:** 2024-2026 Document Database
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Forest Black** (#001e2b) — Dark surface, primary background
- **Verde MongoDB** (#00ed64) — Secondary surface or text color
- **Verde Escuro** (#00684a) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Azul Ação** (#006cfa) — Secondary accent
- **Azul Hover** (#3860be) — Secondary accent
- **Cinza Teal** (#b8c4c2) — Secondary text, borders, muted elements
- **Cinza Cool** (#5c6c75) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Georgia for hero — Weight 700, tight tracking, used for headline impact
- **Body:** Georgia for hero — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Georgia for hero — 0.875rem, weight 500, slight letter-spacing
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

Canvas teal-black (#001e2b) evocando floresta profunda — não preto espacial. Verde neon (#00ed64) como acento bioluminescente elétrico e orgânico. Serif para hero headlines (96px weight 400) criando autoridade editorial. Source Code Pro uppercase com tracking largo (1px-3px) para labels técnicos como campos de database. Sombras teal-tinted (rgba(0,30,43,0.12)). Dual-mode: seções dark teal + seções white. Botões pill (100px) com bordas verdes (#00684a). Underlines verdes como decoração assinatura.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 100px. See rounded tokens in front matter for the full scale.

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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Canvas teal-black #001e2b
- Do Verde neon #00ed64 como acento
- Do Serif hero 96px
- Do Source Code Pro uppercase labels
- Do Sombras teal-tinted
- Do Dual-mode dark/light
- Do Pill buttons 100px
- Do Body weight 300
- Do Responsivo

## Use Case

Databases, Infraestrutura de dados, Platforms developer, APIs de dados
```

[Download DESIGN.md](https://designmd.app/library/mongodb-forest-neon/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background:#001e2b;color:#ffffff;accent:#00ed64;functional-green:#00684a;box-shadow:rgba(0,30,43,0.12) 0px 26px 44px;border-radius:100px pills,16px cards;font-family:Georgia for hero,system-ui for body,Source Code Pro for labels;font-weight:300 body
```

### Variables

```
--bg-dark:#001e2b;--bg-light:#ffffff;--text-dark:#000000;--text-light:#ffffff;--green:#00ed64;--green-dark:#00684a;--blue:#006cfa;--border-light:#b8c4c2;--border-dark:#3d4f58;--shadow:rgba(0,30,43,0.12);--radius-pill:100px
```

### Checklist

☐ Canvas teal-black #001e2b, ☐ Verde neon #00ed64 como acento, ☐ Serif hero 96px, ☐ Source Code Pro uppercase labels, ☐ Sombras teal-tinted, ☐ Dual-mode dark/light, ☐ Pill buttons 100px, ☐ Body weight 300, ☐ Responsivo

## Colors

Primary

#001e2b

#00ed64

#00684a

#ffffff

Secondary

#006cfa

#3860be

#b8c4c2

#5c6c75

### Effects

Canvas teal-black (#001e2b) evocando floresta profunda — não preto espacial. Verde neon (#00ed64) como acento bioluminescente elétrico e orgânico. Serif para hero headlines (96px weight 400) criando autoridade editorial. Source Code Pro uppercase com tracking largo (1px-3px) para labels técnicos como campos de database. Sombras teal-tinted (rgba(0,30,43,0.12)). Dual-mode: seções dark teal + seções white. Botões pill (100px) com bordas verdes (#00684a). Underlines verdes como decoração assinatura.

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

- **Name:** MongoDB Forest Neon
- **Type:** Teal-Black Forest, Neon Green Accent, Serif Hero, Source Code Pro Labels, Dual-Mode
- **Keywords:** mongodb, forest, neon green, teal-black, serif hero, Source Code Pro, wide tracking labels, dual-mode, LeafyGreen, pill buttons, bioluminescent
- **Era:** 2024-2026 Document Database
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Forest Black #001e2b, Verde MongoDB #00ed64, Verde Escuro #00684a, Branco #ffffff
- **Secondary:** Azul Ação #006cfa, Azul Hover #3860be, Cinza Teal #b8c4c2, Cinza Cool #5c6c75

## Visual Effects

Canvas teal-black (#001e2b) evocando floresta profunda — não preto espacial. Verde neon (#00ed64) como acento bioluminescente elétrico e orgânico. Serif para hero headlines (96px weight 400) criando autoridade editorial. Source Code Pro uppercase com tracking largo (1px-3px) para labels técnicos como campos de database. Sombras teal-tinted (rgba(0,30,43,0.12)). Dual-mode: seções dark teal + seções white. Botões pill (100px) com bordas verdes (#00684a). Underlines verdes como decoração assinatura.

## AI Visual Direction

Design a MongoDB-inspired forest-dark landing page. Teal-black canvas (#001e2b) — forest-dark, not space-dark. Neon MongoDB Green (#00ed64) as singular electric accent for highlights and underlines. Serif display font at 96px weight 400 for hero headlines. Source Code Pro uppercase labels with 1px-3px letter-spacing. Teal-tinted shadows (rgba(0,30,43,0.12) 0px 26px 44px). Dual-mode: dark teal hero + white content sections. Pill buttons (100px radius) with #00684a green borders. Body text at weight 300 (light).

## CSS Technical

```css
background:#001e2b;color:#ffffff;accent:#00ed64;functional-green:#00684a;box-shadow:rgba(0,30,43,0.12) 0px 26px 44px;border-radius:100px pills,16px cards;font-family:Georgia for hero,system-ui for body,Source Code Pro for labels;font-weight:300 body
```

## Design System Variables

```css
--bg-dark:#001e2b;--bg-light:#ffffff;--text-dark:#000000;--text-light:#ffffff;--green:#00ed64;--green-dark:#00684a;--blue:#006cfa;--border-light:#b8c4c2;--border-dark:#3d4f58;--shadow:rgba(0,30,43,0.12);--radius-pill:100px
```

## Implementation Checklist

- ☐ Canvas teal-black #001e2b
- ☐ Verde neon #00ed64 como acento
- ☐ Serif hero 96px
- ☐ Source Code Pro uppercase labels
- ☐ Sombras teal-tinted
- ☐ Dual-mode dark/light
- ☐ Pill buttons 100px
- ☐ Body weight 300
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

[![Supabase Dark Emerald](https://designmd.app/images/library/381.png) Futurista & Tech ### Supabase Dark Emerald](https://designmd.app/library/supabase-dark-emerald)[![NVIDIA Power Green](https://designmd.app/images/library/394.png) Futurista & Tech ### NVIDIA Power Green](https://designmd.app/library/nvidia-power-green)[![VoltAgent Terminal Emerald](https://designmd.app/images/library/395.png) Futurista & Tech ### VoltAgent Terminal Emerald](https://designmd.app/library/voltagent-terminal-emerald)[![Sanity Neon Structured](https://designmd.app/images/library/403.png) Futurista & Tech ### Sanity Neon Structured](https://designmd.app/library/sanity-neon-structured)[![ClickHouse Neon Volt](https://designmd.app/images/library/406.png) Futurista & Tech ### ClickHouse Neon Volt](https://designmd.app/library/clickhouse-neon-volt)

Last synced: 4/1/2026
