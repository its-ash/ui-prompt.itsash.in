# OpenCode Terminal Mono

- Source: <https://designmd.app/library/opencode-terminal-mono>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:08:32.312Z

Brutalismo2024-2026 Open Source AI Coding

# OpenCode Terminal Mono

Design an OpenCode-inspired terminal-native landing page. Ideal for agentes de código ai, clis, ferramentas open-source, editores de terminal. AI-ready template.

opencodeterminalBerkeley Monomonospace onlywarm darkApple HIGminimal radiusunderlined linkssingle button variantcode-first

Use case: Agentes de código AI, CLIs, Tools open-source, Editores de terminal

![OpenCode Terminal Mono](https://designmd.app/images/library/409.png)

## Historical Context

The terminal never left. It just waited for designers to stop pretending GUIs solved everything. OpenCode Terminal Mono exists in the lineage of systems that refused decoration — from the raw phosphor glow of VT100 screens to the deliberate austerity of Plan 9's acme editor. Berkeley Mono gave monospace type a backbone again after decades of neutered programmer fonts optimized for "readability" at the expense of character. This system takes that foundation and strips it further. Brutalism in interface design isn't an aesthetic choice — it's a political one. It says: the tool is the interface. No chrome, no padding theater, no hover states that exist to reassure product managers. OpenCode inherits from the same impulse that made Unix pipes composable and man pages sufficient. The CLI-first movement of the 2020s — tools like lazygit, helix, zellij — proved that developers don't need to be coddled. They need density, predictability, and respect for their attention. This system codifies that conviction into a repeatable language. Every decision serves the person typing, not the person watching over their shoulder.

## When to Use

When your users live in the terminal and resent being pulled out of it. CLI tools that need documentation sites without betraying their own philosophy. Open-source projects where the README energy should carry through to the marketing page. Developer utilities that would feel dishonest wrapped in gradients and illustrations. Any context where typographic density signals competence rather than intimidation — where your audience reads man pages voluntarily.

## Design Principles

- Monospace is not a constraint — it's a grid system. Every character cell is a layout unit. Embrace the rigidity instead of fighting it.
- No element exists without function. If it doesn't communicate state, hierarchy, or action, it's decoration and it goes.
- Contrast is binary. Foreground/background. Active/inactive. Present/absent. Reject the middle ground of subtle grays and 0.6 opacity placeholders.
- The terminal cursor is your only animation. Movement implies state change. Anything else is theater.
- Density is generosity. Showing more information in less space respects the user's time and intelligence. Whitespace is earned, not defaulted.

## DESIGN.md

```
---
version: "alpha"
name: "OpenCode Terminal Mono"
description: "Design an OpenCode-inspired terminal-native landing page. Ideal for agentes de código ai, clis, ferramentas open-source, editores de terminal. AI-ready template."
colors:
primary: "#201d1d"
secondary: "#fdfcfc"
tertiary: "#9a9898"
neutral: "#007aff"
surface: "#ff3b30"
accent: "#30d158"
typography:
h1:
fontFamily: Berkeley Mono
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Berkeley Mono
fontSize: 1rem
fontWeight: 400
rounded:
sm: 4px
md: 8px
lg: 12px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Design an OpenCode-inspired terminal-native landing page. Ideal for agentes de código ai, clis, ferramentas open-source, editores de terminal. AI-ready template. The terminal never left. It just waited for designers to stop pretending GUIs solved everything. OpenCode Terminal Mono exists in the lineage of systems that refused decoration — from the raw phosphor glow of VT100 screens to the deliberate austerity of Plan 9's acme editor. Berkeley Mono gave monospace type a backbone again after decades of neutered programmer fonts optimized for "readability" at the expense of character. This system takes that foundation and strips it further.

Brutalism in interface design isn't an aesthetic choice — it's a political one. It says: the tool is the interface. No chrome, no padding theater, no hover states that exist to reassure product managers. OpenCode inherits from the same impulse that made Unix pipes composable and man pages sufficient. The CLI-first movement of the 2020s — tools like lazygit, helix, zellij — proved that developers don't need to be coddled. They need density, predictability, and respect for their attention.

This system codifies that conviction into a repeatable language. Every decision serves the person typing, not the person watching over their shoulder.

- Density: 8/10 — Dense
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Terminal-Native, Berkeley Mono Only, Warm Dark, Apple HIG Colors, Minimal Radius
- **Keywords:** opencode, terminal, Berkeley Mono, monospace only, warm dark, Apple HIG, minimal radius, underlined links, single button variant, code-first
- **Era:** 2024-2026 Open Source AI Coding
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Escuro Quente** (#201d1d) — Dark surface, primary background
- **Claro Quente** (#fdfcfc) — Secondary surface or text color
- **Cinza Médio** (#9a9898) — Secondary text, borders, muted elements
- **Azul Acento** (#007aff) — Accent highlight, links and focus states
- **Vermelho** (#ff3b30) — Error states, destructive actions
- **Verde** (#30d158) — Success states, positive indicators
- **Laranja** (#ff9f0a) — Warm accent, call-to-action secondary
- **Borda** (rgba(15,0,0,0.12)) — Extended palette, decorative use

## Typography

- **Display / Hero:** Berkeley Mono — Weight 700, tight tracking, used for headline impact
- **Body:** Berkeley Mono — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Berkeley Mono — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Berkeley Mono — Used for code, metadata, and technical values

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

Berkeley Mono como ÚNICA fonte — monospace em tudo, sem sans-serif ou serif. Escuro quente (#201d1d) com subtom avermelhado-marrom, não preto puro. Texto off-white quente (#fdfcfc). Radius mínimo 4px — cantos utilitários afiados. Cores semânticas Apple HIG (azul #007aff, vermelho #ff3b30, verde #30d158, laranja #ff9f0a). Bordas transparentes quentes (rgba(15,0,0,0.12)). Links com underline como estilo padrão. Único variante de botão: fundo escuro, texto claro, padding tight (4px 20px). Terminal hero como elemento visual principal.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (4px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (4px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Berkeley Mono única fonte
- Do Escuro quente #201d1d
- Do Texto off-white #fdfcfc
- Do Radius 4px
- Do Cores Apple HIG
- Do Bordas quentes
- Do Links underlined
- Do Terminal hero
- Do Responsivo

## Use Case

Agentes de código AI, CLIs, Tools open-source, Editores de terminal
```

[Download DESIGN.md](https://designmd.app/library/opencode-terminal-mono/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background:#201d1d;color:#fdfcfc;accent:#007aff;border:1px solid rgba(15,0,0,0.12);border-radius:4px;font-family:'Berkeley Mono',monospace;font-weight:700 headings,500 body,400 text;line-height:1.50
```

### Variables

```
--bg:#201d1d;--text:#fdfcfc;--muted:#9a9898;--accent:#007aff;--danger:#ff3b30;--success:#30d158;--warning:#ff9f0a;--border:rgba(15,0,0,0.12);--radius:4px
```

### Checklist

☐ Berkeley Mono única fonte, ☐ Escuro quente #201d1d, ☐ Texto off-white #fdfcfc, ☐ Radius 4px, ☐ Cores Apple HIG, ☐ Bordas quentes, ☐ Links underlined, ☐ Terminal hero, ☐ Responsivo

## Colors

Primary

#201d1d

#fdfcfc

#9a9898

#007aff

Secondary

#ff3b30

#30d158

#ff9f0a

### Effects

Berkeley Mono como ÚNICA fonte — monospace em tudo, sem sans-serif ou serif. Escuro quente (#201d1d) com subtom avermelhado-marrom, não preto puro. Texto off-white quente (#fdfcfc). Radius mínimo 4px — cantos utilitários afiados. Cores semânticas Apple HIG (azul #007aff, vermelho #ff3b30, verde #30d158, laranja #ff9f0a). Bordas transparentes quentes (rgba(15,0,0,0.12)). Links com underline como estilo padrão. Único variante de botão: fundo escuro, texto claro, padding tight (4px 20px). Terminal hero como elemento visual principal.

### Light/Dark

✗ Not Recommended / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** OpenCode Terminal Mono
- **Type:** Terminal-Native, Berkeley Mono Only, Warm Dark, Apple HIG Colors, Minimal Radius
- **Keywords:** opencode, terminal, Berkeley Mono, monospace only, warm dark, Apple HIG, minimal radius, underlined links, single button variant, code-first
- **Era:** 2024-2026 Open Source AI Coding
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Color Palette

- **Primary:** Escuro Quente #201d1d, Claro Quente #fdfcfc, Cinza Médio #9a9898, Azul Acento #007aff
- **Secondary:** Vermelho #ff3b30, Verde #30d158, Laranja #ff9f0a, Borda rgba(15,0,0,0.12)

## Visual Effects

Berkeley Mono como ÚNICA fonte — monospace em tudo, sem sans-serif ou serif. Escuro quente (#201d1d) com subtom avermelhado-marrom, não preto puro. Texto off-white quente (#fdfcfc). Radius mínimo 4px — cantos utilitários afiados. Cores semânticas Apple HIG (azul #007aff, vermelho #ff3b30, verde #30d158, laranja #ff9f0a). Bordas transparentes quentes (rgba(15,0,0,0.12)). Links com underline como estilo padrão. Único variante de botão: fundo escuro, texto claro, padding tight (4px 20px). Terminal hero como elemento visual principal.

## AI Visual Direction

Design an OpenCode-inspired terminal-native landing page. Berkeley Mono as the ONLY typeface — monospace everywhere. Warm near-black background (#201d1d) with reddish-brown undertone. Warm off-white text (#fdfcfc). Minimal 4px border-radius. Apple HIG semantic colors (blue #007aff, red #ff3b30, green #30d158, orange #ff9f0a). Warm transparent borders (rgba(15,0,0,0.12)). Underlined links as default. Single button variant: dark bg, light text, 4px 20px padding. Terminal hero as primary visual.

## CSS Technical

```css
background:#201d1d;color:#fdfcfc;accent:#007aff;border:1px solid rgba(15,0,0,0.12);border-radius:4px;font-family:'Berkeley Mono',monospace;font-weight:700 headings,500 body,400 text;line-height:1.50
```

## Design System Variables

```css
--bg:#201d1d;--text:#fdfcfc;--muted:#9a9898;--accent:#007aff;--danger:#ff3b30;--success:#30d158;--warning:#ff9f0a;--border:rgba(15,0,0,0.12);--radius:4px
```

## Implementation Checklist

- ☐ Berkeley Mono única fonte
- ☐ Escuro quente #201d1d
- ☐ Texto off-white #fdfcfc
- ☐ Radius 4px
- ☐ Cores Apple HIG
- ☐ Bordas quentes
- ☐ Links underlined
- ☐ Terminal hero
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

[![Ollama Pure Grayscale](https://designmd.app/images/library/390.png) Minimalismo & Swiss ### Ollama Pure Grayscale](https://designmd.app/library/ollama-pure-grayscale)[![NVIDIA Power Green](https://designmd.app/images/library/394.png) Futurista & Tech ### NVIDIA Power Green](https://designmd.app/library/nvidia-power-green)[![VoltAgent Terminal Emerald](https://designmd.app/images/library/395.png) Futurista & Tech ### VoltAgent Terminal Emerald](https://designmd.app/library/voltagent-terminal-emerald)[![xAI Brutalist Monospace](https://designmd.app/images/library/400.png) Brutalismo ### xAI Brutalist Monospace](https://designmd.app/library/xai-brutalist-monospace)[![ClickHouse Neon Volt](https://designmd.app/images/library/406.png) Futurista & Tech ### ClickHouse Neon Volt](https://designmd.app/library/clickhouse-neon-volt)

Last synced: 4/1/2026
