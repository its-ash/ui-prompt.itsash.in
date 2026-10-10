# ElevenLabs Ethereal Voice

- Source: <https://designmd.app/library/elevenlabs-ethereal-voice>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:08:38.392Z

Minimalismo & Swiss2024-2026 Voice AI Premium

# ElevenLabs Ethereal Voice

Design an ElevenLabs-inspired ethereal landing page. Ideal for voice ai, plataformas de áudio, text-to-speech, ferramentas de mídia. AI-ready template.

elevenlabsetherealvoice AIWaldenburgweight 300warm stonemulti-layer shadowspill buttonswhisper shadowsaudio waveform

Use case: Voice AI, Platforms de áudio, Text-to-speech, Tools de mídia

![ElevenLabs Ethereal Voice](https://designmd.app/images/library/410.png)

## Historical Context

ElevenLabs didn't just build a voice AI product — they built a visual language that treats sound as sacred space. Their design system draws heavily from Swiss minimalism, but filtered through the lens of audio engineering: precise, clinical, yet somehow warm. The waveform becomes ornament, the only decorative element permitted in an otherwise ruthlessly stripped-back interface. The ethereal quality comes from restraint. Where competitors clutter their UIs with skeuomorphic audio metaphors — fake mixing boards, gratuitous equalizer animations — ElevenLabs lets negative space do the talking. Typography is tight, grids are rigid, and color is rationed like it costs money. The waveform visualizations float in generous whitespace, breathing the way good Swiss poster design breathes. This approach has roots in Dieter Rams by way of Müller-Brockmann. The grid isn't decorative; it's structural. Every element earns its pixel. The result feels less like a tech product and more like an instrument — something designed to disappear behind the work it enables.

## When to Use

Deploy this system when your product deals in invisible output — voice, audio, synthesis — and needs visual credibility without visual noise. It works when your users are creators who respect craft and distrust flash. Ideal for voice AI platforms, speech synthesis tools, podcast production software, or any audio product where the interface should feel like a professional instrument rather than a toy. Skip it if your audience needs hand-holding or your product requires dense information architecture.

## Design Principles

- Waveform as the singular ornament — no other decorative elements permitted; the audio visualization itself is the design statement
- Swiss grid discipline applied to temporal media — columns and baselines aren't suggestions, they're load-bearing structure for content that exists in time
- Negative space as acoustic metaphor — whitespace isn't empty, it's silence between notes, giving each UI element room to resonate
- Monochromatic restraint with single-accent punctuation — one color does all the signaling work, everything else recedes to grayscale
- Typography carries hierarchy alone — no boxes, no cards, no containers; type weight and scale create all the spatial relationships you need

## DESIGN.md

```
---
version: "alpha"
name: "ElevenLabs Ethereal Voice"
description: "Design an ElevenLabs-inspired ethereal landing page. Ideal for voice ai, plataformas de áudio, text-to-speech, ferramentas de mídia. AI-ready template."
colors:
primary: "#ffffff"
secondary: "#f5f5f5"
tertiary: "#000000"
neutral: "#4e4e4e"
surface: "#777169"
accent: "#e5e5e5"
typography:
h1:
fontFamily: system-ui for display
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: system-ui for display
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: system-ui for display
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

Design an ElevenLabs-inspired ethereal landing page. Ideal for voice ai, plataformas de áudio, text-to-speech, ferramentas de mídia. AI-ready template. ElevenLabs didn't just build a voice AI product — they built a visual language that treats sound as sacred space. Their design system draws heavily from Swiss minimalism, but filtered through the lens of audio engineering: precise, clinical, yet somehow warm. The waveform becomes ornament, the only decorative element permitted in an otherwise ruthlessly stripped-back interface.

The ethereal quality comes from restraint. Where competitors clutter their UIs with skeuomorphic audio metaphors — fake mixing boards, gratuitous equalizer animations — ElevenLabs lets negative space do the talking. Typography is tight, grids are rigid, and color is rationed like it costs money. The waveform visualizations float in generous whitespace, breathing the way good Swiss poster design breathes.

This approach has roots in Dieter Rams by way of Müller-Brockmann. The grid isn't decorative; it's structural. Every element earns its pixel. The result feels less like a tech product and more like an instrument — something designed to disappear behind the work it enables.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Near-White Canvas, Waldenburg Light 300, Multi-Layer Shadows, Warm Stone Pills, Audio Aesthetic
- **Keywords:** elevenlabs, ethereal, voice AI, Waldenburg, weight 300, warm stone, multi-layer shadows, pill buttons, whisper shadows, audio waveform
- **Era:** 2024-2026 Voice AI Premium
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Colors

- **Branco** (#ffffff) — Light surface, card backgrounds
- **Cinza Claro** (#f5f5f5) — Secondary text, borders, muted elements
- **Preto** (#000000) — Dark surface, primary background
- **Stone Quente** (rgba(245,242,239,0.8)) — Supporting palette color
- **Cinza Escuro** (#4e4e4e) — Deep contrast surface
- **Cinza Quente** (#777169) — Secondary text, borders, muted elements
- **Borda** (#e5e5e5) — Extended palette, decorative use
- **Sombra Quente** (rgba(78,50,23,0.04)) — Extended palette, decorative use

## Typography

- **Display / Hero:** system-ui for display — Weight 700, tight tracking, used for headline impact
- **Body:** system-ui for display — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** system-ui for display — 0.875rem, weight 500, slight letter-spacing
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

Canvas near-white com subtom quente (#f5f5f5, #f5f2ef). Waldenburg weight 300 (light) para headlines — tipografia etérea como ondas sonoras. Inter com letter-spacing positivo (+0.14px a +0.18px) para body arejado. Sombras multi-camada em opacidade sub-0.1 (inset + outline + elevation). Botões pill (9999px) com fundo warm stone translúcido. Sombras warm-tinted (rgba(78,50,23,0.04)). WaldenburgFH bold uppercase para CTAs específicos. Bordas inset half-pixel (0px 0px 0px 0.5px inset).

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Canvas near-white com subtom quente
- Do Headlines weight 300 etéreas
- Do Inter com tracking positivo
- Do Sombras multi-camada sub-0.1
- Do Pill buttons 9999px
- Do Warm stone CTA
- Do Bordas inset half-pixel
- Do Responsivo

## Use Case

Voice AI, Platforms de áudio, Text-to-speech, Tools de mídia
```

[Download DESIGN.md](https://designmd.app/library/elevenlabs-ethereal-voice/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background:#ffffff;color:#000000;border:1px solid #e5e5e5;box-shadow:rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset,rgba(0,0,0,0.06) 0px 0px 0px 1px,rgba(0,0,0,0.04) 0px 4px 4px;font-family:system-ui for display,Inter for body;font-weight:300 display;border-radius:9999px pills,20px cards
```

### Variables

```
--bg:#ffffff;--bg-secondary:#f5f5f5;--text:#000000;--text-secondary:#4e4e4e;--text-muted:#777169;--warm-stone:rgba(245,242,239,0.8);--border:#e5e5e5;--shadow-warm:rgba(78,50,23,0.04);--radius-pill:9999px;--radius-card:20px
```

### Checklist

☐ Canvas near-white com subtom quente, ☐ Headlines weight 300 etéreas, ☐ Inter com tracking positivo, ☐ Sombras multi-camada sub-0.1, ☐ Pill buttons 9999px, ☐ Warm stone CTA, ☐ Bordas inset half-pixel, ☐ Responsivo

## Colors

Primary

#ffffff

#f5f5f5

#000000

Secondary

#4e4e4e

#777169

#e5e5e5

### Effects

Canvas near-white com subtom quente (#f5f5f5, #f5f2ef). Waldenburg weight 300 (light) para headlines — tipografia etérea como ondas sonoras. Inter com letter-spacing positivo (+0.14px a +0.18px) para body arejado. Sombras multi-camada em opacidade sub-0.1 (inset + outline + elevation). Botões pill (9999px) com fundo warm stone translúcido. Sombras warm-tinted (rgba(78,50,23,0.04)). WaldenburgFH bold uppercase para CTAs específicos. Bordas inset half-pixel (0px 0px 0px 0.5px inset).

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

- **Name:** ElevenLabs Ethereal Voice
- **Type:** Near-White Canvas, Waldenburg Light 300, Multi-Layer Shadows, Warm Stone Pills, Audio Aesthetic
- **Keywords:** elevenlabs, ethereal, voice AI, Waldenburg, weight 300, warm stone, multi-layer shadows, pill buttons, whisper shadows, audio waveform
- **Era:** 2024-2026 Voice AI Premium
- **Light/Dark:** ✓ Full / ✗ Not Recommended

## Color Palette

- **Primary:** Branco #ffffff, Cinza Claro #f5f5f5, Preto #000000, Stone Quente rgba(245,242,239,0.8)
- **Secondary:** Cinza Escuro #4e4e4e, Cinza Quente #777169, Borda #e5e5e5, Sombra Quente rgba(78,50,23,0.04)

## Visual Effects

Canvas near-white com subtom quente (#f5f5f5, #f5f2ef). Waldenburg weight 300 (light) para headlines — tipografia etérea como ondas sonoras. Inter com letter-spacing positivo (+0.14px a +0.18px) para body arejado. Sombras multi-camada em opacidade sub-0.1 (inset + outline + elevation). Botões pill (9999px) com fundo warm stone translúcido. Sombras warm-tinted (rgba(78,50,23,0.04)). WaldenburgFH bold uppercase para CTAs específicos. Bordas inset half-pixel (0px 0px 0px 0.5px inset).

## AI Visual Direction

Design an ElevenLabs-inspired ethereal landing page. Near-white canvas (#ffffff, #f5f5f5) with warm undertones. Waldenburg weight 300 (light) for display headings at 48px, line-height 1.08, letter-spacing -0.96px. Inter body with positive letter-spacing (+0.14px to +0.18px). Multi-layer shadows at sub-0.1 opacity: inset border (rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset) + outline ring (rgba(0,0,0,0.06) 0px 0px 0px 1px) + soft elevation (rgba(0,0,0,0.04) 0px 4px 4px). Pill buttons (9999px). Warm stone CTA: rgba(245,242,239,0.8) background with warm shadow rgba(78,50,23,0.04) 0px 6px 16px.

## CSS Technical

```css
background:#ffffff;color:#000000;border:1px solid #e5e5e5;box-shadow:rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset,rgba(0,0,0,0.06) 0px 0px 0px 1px,rgba(0,0,0,0.04) 0px 4px 4px;font-family:system-ui for display,Inter for body;font-weight:300 display;border-radius:9999px pills,20px cards
```

## Design System Variables

```css
--bg:#ffffff;--bg-secondary:#f5f5f5;--text:#000000;--text-secondary:#4e4e4e;--text-muted:#777169;--warm-stone:rgba(245,242,239,0.8);--border:#e5e5e5;--shadow-warm:rgba(78,50,23,0.04);--radius-pill:9999px;--radius-card:20px
```

## Implementation Checklist

- ☐ Canvas near-white com subtom quente
- ☐ Headlines weight 300 etéreas
- ☐ Inter com tracking positivo
- ☐ Sombras multi-camada sub-0.1
- ☐ Pill buttons 9999px
- ☐ Warm stone CTA
- ☐ Bordas inset half-pixel
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

[![Apple Premium Cinematic](https://designmd.app/images/library/380.png) Minimalismo & Swiss ### Apple Premium Cinematic](https://designmd.app/library/apple-premium-cinematic)[![Claude Warm Parchment](https://designmd.app/images/library/382.png) Editorial & Tipografia ### Claude Warm Parchment](https://designmd.app/library/claude-warm-parchment)[![Stripe Fintech Elegance](https://designmd.app/images/library/385.png) Futurista & Tech ### Stripe Fintech Elegance](https://designmd.app/library/stripe-fintech-elegance)[![Cohere Enterprise Serif](https://designmd.app/images/library/389.png) Minimalismo & Swiss ### Cohere Enterprise Serif](https://designmd.app/library/cohere-enterprise-serif)[![Lovable Cream Humanist](https://designmd.app/images/library/392.png) Flat & Soft UI ### Lovable Cream Humanist](https://designmd.app/library/lovable-cream-humanist)

Last synced: 4/1/2026
