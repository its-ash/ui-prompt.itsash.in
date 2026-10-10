# Cohere Enterprise Serif

- Source: <https://designmd.app/library/cohere-enterprise-serif>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:07:59.309Z

Minimalismo & Swiss2024-2026 Enterprise AI

# Cohere Enterprise Serif

Cohere-inspired enterprise landing page. Ideal for enterprise ai, infraestrutura de dados, plataformas b2b, apis corporativas. AI-ready template.

cohereenterpriseserif display22px radiusghost buttonspurple bandscool graysinteraction blueuppercase code labels

Use case: Enterprise AI, Infraestrutura de dados, Platforms B2B, APIs corporativas

![Cohere Enterprise Serif](https://designmd.app/images/library/389.png)

## Historical Context

The enterprise serif has always carried weight — literally and figuratively. From the dense columns of financial broadsheets to the masthead of every institution that wanted to signal permanence, serif display faces were the typography of authority. They said: we were here before you, and we'll be here after. What Cohere does with this lineage is strip it back to the Swiss grid. No ornamental flourishes, no nostalgic warmth. Just the structural bones of a serif — the bracketed terminals, the modulated stroke contrast — placed with the spatial discipline of Müller-Brockmann. It's a deliberate tension: the humanist history of serif letterforms against the mechanical precision of International Typographic Style. The result reads as confident without being cold, institutional without being dusty. This pairing works because it refuses the false choice between "modern sans-serif startup" and "traditional serif corporation." Enterprise AI needs to communicate both technical sophistication and established credibility. Cohere's typographic identity threads that needle — it borrows gravitas from editorial tradition while maintaining the clarity and restraint that Swiss design demands.

## When to Use

Deploy this system when your product serves decision-makers who distrust anything that looks like it shipped last Tuesday. B2B platforms handling sensitive data, professional services firms positioning against cheaper alternatives, enterprise AI products that need to feel inevitable rather than experimental. The serif display anchors headlines with authority while Swiss spacing keeps interfaces scannable. Avoid if your audience skews under-30 consumer or if your brand voice is playful — this system has zero sense of humor, and that's the point.

## Design Principles

- Structural contrast over decorative detail — let stroke weight and spacing do the work, never add what the grid doesn't demand
- Authority through restraint — fewer elements at larger scale signals confidence; cluttered layouts signal insecurity
- Typographic hierarchy as information architecture — the serif display commands attention at headline scale, then steps aside for functional sans in body and UI
- Negative space as a trust signal — generous whitespace communicates that you don't need to shout, which enterprise buyers read as competence
- Systematic color austerity — one accent maximum, deployed with the precision of a scalpel, never a paintbrush

## DESIGN.md

```
---
version: "alpha"
name: "Cohere Enterprise Serif"
description: "Cohere-inspired enterprise landing page. Ideal for enterprise ai, infraestrutura de dados, plataformas b2b, apis corporativas. AI-ready template."
colors:
primary: "#000000"
secondary: "#ffffff"
tertiary: "#1863dc"
neutral: "#d9d9dd"
surface: "#212121"
accent: "#93939f"
typography:
h1:
fontFamily: Georgia
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Georgia
fontSize: 1rem
fontWeight: 400
rounded:
sm: 22px
md: 44px
lg: 66px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Cohere-inspired enterprise landing page. Ideal for enterprise ai, infraestrutura de dados, plataformas b2b, apis corporativas. AI-ready template. The enterprise serif has always carried weight — literally and figuratively. From the dense columns of financial broadsheets to the masthead of every institution that wanted to signal permanence, serif display faces were the typography of authority. They said: we were here before you, and we'll be here after.

What Cohere does with this lineage is strip it back to the Swiss grid. No ornamental flourishes, no nostalgic warmth. Just the structural bones of a serif — the bracketed terminals, the modulated stroke contrast — placed with the spatial discipline of Müller-Brockmann. It's a deliberate tension: the humanist history of serif letterforms against the mechanical precision of International Typographic Style. The result reads as confident without being cold, institutional without being dusty.

This pairing works because it refuses the false choice between "modern sans-serif startup" and "traditional serif corporation." Enterprise AI needs to communicate both technical sophistication and established credibility. Cohere's typographic identity threads that needle — it borrows gravitas from editorial tradition while maintaining the clarity and restraint that Swiss design demands.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 8/10 — Cinematic

- **Style:** Enterprise, Serif Display, 22px Radius, Ghost Buttons, Purple Bands
- **Keywords:** cohere, enterprise, serif display, 22px radius, ghost buttons, purple bands, cool grays, interaction blue, uppercase code labels
- **Era:** 2024-2026 Enterprise AI
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Preto** (#000000) — Dark surface, primary background
- **Branco** (#ffffff) — Light surface, card backgrounds
- **Azul Interação** (#1863dc) — Accent highlight, links and focus states
- **Cinza Cool** (#d9d9dd) — Secondary text, borders, muted elements
- **Quase Preto** (#212121) — Deep contrast surface
- **Slate** (#93939f) — Extended palette, decorative use
- **Cinza Claro** (#f2f2f2) — Secondary text, borders, muted elements
- **Borda** (#e5e7eb) — Extended palette, decorative use

## Typography

- **Display / Hero:** Georgia — Weight 700, tight tracking, used for headline impact
- **Accent:** system-ui for body — Used for decorative or emphasis text
- **Body:** Georgia — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Georgia — 0.875rem, weight 500, slight letter-spacing
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

Canvas branco brilhante com bordas cool gray. Border-radius 22px como assinatura visual em todos os cards primários. Serif display para headlines com tracking negativo (-1.44px em 72px). Botões ghost/transparentes que mudam para azul (#1863dc) no hover. Seções full-width em roxo profundo para showcases de produto. Labels monospace uppercase com letter-spacing positivo. Paleta quase sem cor — preto, branco, cinzas cool.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 22px. See rounded tokens in front matter for the full scale.

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Canvas branco com bordas cool gray
- Do Radius 22px assinatura
- Do Serif display headlines
- Do Ghost buttons → azul no hover
- Do Seções roxo profundo
- Do Labels monospace uppercase
- Do Responsivo

## Use Case

Enterprise AI, Infraestrutura de dados, Platforms B2B, APIs corporativas
```

[Download DESIGN.md](https://designmd.app/library/cohere-enterprise-serif/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #ffffff; color: #000000; accent: #1863dc; border: 1px solid #f2f2f2; border-radius: 22px cards, 9999px pills; font-family: Georgia, serif for display; font-family: system-ui for body; letter-spacing: -1.44px at 72px
```

### Variables

```
--bg: #ffffff; --text: #000000; --accent: #1863dc; --border-light: #f2f2f2; --border-cool: #d9d9dd; --muted: #93939f; --radius-signature: 22px; --radius-pill: 9999px
```

### Checklist

☐ Canvas branco com bordas cool gray, ☐ Radius 22px assinatura, ☐ Serif display headlines, ☐ Ghost buttons → azul no hover, ☐ Seções roxo profundo, ☐ Labels monospace uppercase, ☐ Responsivo

## Colors

Primary

#000000

#ffffff

#1863dc

#d9d9dd

Secondary

#212121

#93939f

#f2f2f2

#e5e7eb

### Effects

Canvas branco brilhante com bordas cool gray. Border-radius 22px como assinatura visual em todos os cards primários. Serif display para headlines com tracking negativo (-1.44px em 72px). Botões ghost/transparentes que mudam para azul (#1863dc) no hover. Seções full-width em roxo profundo para showcases de produto. Labels monospace uppercase com letter-spacing positivo. Paleta quase sem cor — preto, branco, cinzas cool.

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

- **Name:** Cohere Enterprise Serif
- **Type:** Enterprise, Serif Display, 22px Radius, Ghost Buttons, Purple Bands
- **Keywords:** cohere, enterprise, serif display, 22px radius, ghost buttons, purple bands, cool grays, interaction blue, uppercase code labels
- **Era:** 2024-2026 Enterprise AI
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Color Palette

- **Primary:** Preto #000000, Branco #ffffff, Azul Interação #1863dc, Cinza Cool #d9d9dd
- **Secondary:** Quase Preto #212121, Slate #93939f, Cinza Claro #f2f2f2, Borda #e5e7eb

## Visual Effects

Canvas branco brilhante com bordas cool gray. Border-radius 22px como assinatura visual em todos os cards primários. Serif display para headlines com tracking negativo (-1.44px em 72px). Botões ghost/transparentes que mudam para azul (#1863dc) no hover. Seções full-width em roxo profundo para showcases de produto. Labels monospace uppercase com letter-spacing positivo. Paleta quase sem cor — preto, branco, cinzas cool.

## AI Visual Direction

Design a Cohere-inspired enterprise landing page. Bright white canvas with cool gray borders (#d9d9dd). Signature 22px border-radius on all primary cards and containers. Serif display font for headlines at 72px with -1.44px letter-spacing. Ghost/transparent buttons that shift to Interaction Blue (#1863dc) on hover. Deep purple full-width sections for product showcases. Monospace uppercase labels with 0.28px letter-spacing. Nearly colorless palette — black, white, cool grays only.

## CSS Technical

```css
background: #ffffff; color: #000000; accent: #1863dc; border: 1px solid #f2f2f2; border-radius: 22px cards, 9999px pills; font-family: Georgia, serif for display; font-family: system-ui for body; letter-spacing: -1.44px at 72px
```

## Design System Variables

```css
--bg: #ffffff; --text: #000000; --accent: #1863dc; --border-light: #f2f2f2; --border-cool: #d9d9dd; --muted: #93939f; --radius-signature: 22px; --radius-pill: 9999px
```

## Implementation Checklist

- ☐ Canvas branco com bordas cool gray
- ☐ Radius 22px assinatura
- ☐ Serif display headlines
- ☐ Ghost buttons → azul no hover
- ☐ Seções roxo profundo
- ☐ Labels monospace uppercase
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

[![Stripe Fintech Elegance](https://designmd.app/images/library/385.png) Futurista & Tech ### Stripe Fintech Elegance](https://designmd.app/library/stripe-fintech-elegance)[![Expo Luminous Developer](https://designmd.app/images/library/393.png) Futurista & Tech ### Expo Luminous Developer](https://designmd.app/library/expo-luminous-developer)[![Zapier Warm Automation](https://designmd.app/images/library/399.png) Flat & Soft UI ### Zapier Warm Automation](https://designmd.app/library/zapier-warm-automation)[![Composio Cyber Nocturnal](https://designmd.app/images/library/402.png) Futurista & Tech ### Composio Cyber Nocturnal](https://designmd.app/library/composio-cyber-nocturnal)[![HashiCorp Infra Dual](https://designmd.app/images/library/407.png) Temas & Verticais ### HashiCorp Infra Dual](https://designmd.app/library/hashicorp-infra-dual)

Last synced: 4/1/2026
