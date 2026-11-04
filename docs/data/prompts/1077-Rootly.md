# Landing Page Build Prompt — Rootly-Inspired Theme (Fictional Brand)

## 1. Project Overview & Theme

Build a complete, responsive landing page for a **fictional brand** (invent a new name, product, and copy — never use "Rootly", its logo, trademarks, or product names). The visual system is a near-monochrome, light-theme design: a barely-tinted off-white canvas (`#fbfaff`) under crisp white cards, with near-black (`#100f12`) doing the structural heavy-lifting and a single vivid violet accent (`#8d6fde`) used only in thin strokes, never as large fills. Typography is the signature: whisper-thin 200-weight display headlines paired with 500-weight body/UI copy. Every interactive element is a full pill (1440px radius).

**Required sections:** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 2. Strict Architectural Rules

### 2.1 CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors only.
- Keep HTML semantic and agnostic of visual styling so look changes require only CSS edits.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required tokens:

**Colors:**
- `--color-ink: #100f12` (primary text, dominant borders, filled CTA, badge borders)
- `--color-snow: #fbfaff` (page canvas)
- `--color-paper: #ffffff` (card surfaces)
- `--color-graphite: #44434e` (mid borders, secondary emphasis)
- `--color-slate: #65646e` (body text, helper copy)
- `--color-mist: #787685` (muted text, form outlines)
- `--color-lavender-wash: #ebe5ff` (soft highlight surfaces, tag fills)
- `--color-lilac-edge: #d9cffa` (input borders, tag outlines, hairlines)
- `--color-iris: #8d6fde` (brand accent — strokes, icons, outlined actions)
- `--color-amethyst: #4a3e8a` (pressed accent, linked labels)
- `--color-dawn-viol: linear-gradient(112deg, rgb(119, 72, 246), rgb(245, 187, 195) 80%)` (hero gradient)
- `--color-rose-drift: #f5bbc3` (gradient terminus)
- `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` (semantic tokens)

**Contrast pairing:** light backgrounds pair with dark text; dark surfaces pair with light text — enforce in every theme.

**Light mode background:** use `#fbfaff` (never pure white for canvas); use `#fefefe` where near-white is needed.

**Radius & shadows:** `--radius-sm: 6.92px`, `--radius-md: 17.3px`, `--radius-lg: 34.6px`, `--radius-pill: 1440px`; `--shadow-sm`, `--shadow-md`, `--shadow-hero`, `--shadow-floating`, `--shadow-phone`.

**Spacing & transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.

**Elevation/stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

**Typography:** `--font-base` bound to Google Font (Inter as substitute for Ppmori), weights 200, 500, 600. Type scale tokens: `--text-caption: 10px`, `--text-body: 14px`, `--text-heading: 31px`, `--text-display: 52px`, with corresponding line-heights and letter-spacing (`-0.015em` display, `-0.013em` heading, `-0.010em` body, `-0.009em` caption).

### 2.3 Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class.
- Switch background/text variables seamlessly without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible theme toggle with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox Layout & Mobile-First
- Use Flexbox for all layout structures.
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

### 2.5 Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`). All utility classes map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Include Google Font `<link>`/`@import` for Inter (weights 200, 500, 600) and bind to `--font-base`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 3. Component Specifications

### 3.1 Button Component
- **Default:** flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`; min touch target 44x44px; pill radius.
- **Hover:** brightness/shadow shift, `cursor: pointer`.
- **Focus:** distinct focus ring via CSS variables.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** disable interactions, CSS spinner or animated Google Icon, no dimension distortion.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary styles via `--text-success`/`--text-error`.

Variants: Filled CTA (`#100f12` bg, `#ffffff` text, 9px 21px or 14px 21px padding), Ghost Secondary (transparent, `#100f12` text), Outlined Brand (1.5px `#8d6fde` border, `#8d6fde` text, pressed darkens to `#4a3e8a`), Top Nav Login (ghost, 1px `#ffffff` border, pressed fills `#ebe5ff`).

### 3.2 Card Component
- **Default:** flex layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- **Hover:** elevation/shadow shift or `transform: translateY(-2px)`.
- **Focus-within:** highlight borders when child link/button receives focus.
- **Loading (Skeleton):** shimmer animation in CSS, no layout jumps.
- **Empty State:** Google Icon + guidance text.

Feature card: 17.3px radius, `#ffffff` bg, 1px border `#ebe5ff` or transparent, 28px padding, headline 31px weight 200, body 14-16px weight 500 in `#65646e`, optional icon in `#8d6fde`.

### 3.3 Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, dedicated error feedback container.
- Pill input: 1440px radius, `#ffffff` bg, 1px border `#d9cffa`, text `#100f12` 14px weight 500, placeholder `#787685`, padding 9px 17px. Focus: border 1.5px `#8d6fde`.

### 3.4 Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

### 3.5 Section Label Pill
- Pill shape, `#ebe5ff` bg, `#4a3e8a` text 10-12px weight 500, padding 3px 10px, 1440px radius.

### 3.6 Status Badge
- Pill shape, 1px border in semantic color, matching darker text 12px weight 500, padding 3px 7px. Green (resolved), amber (in-progress), red (active), blue (info) tints.

### 3.7 Hero Gradient Banner
- Full-bleed: `linear-gradient(112deg, #7748f6, #f5bbc3 80%)` with desaturated mountain photo at ~40% opacity positioned right. Hero text `#ffffff` 52px weight 200, centered-left, subtext 16px weight 500 `#ffffff` 80-85% opacity, max-width 560px. Logo cloud below in two rows of 6-8 logos at 40-60% opacity `#100f12`, 21px row gaps. Three floating product artifacts (calendar grid, incident card, phone mockup) overlapping lower third with elevation shadows.

### 3.8 Top Nav
- Sticky top bar: logo left, centered nav links (each pill, transparent bg, `#ebe5ff` on hover, `#100f12` 14px weight 500, 12px chevron, active weight 600), Login + filled CTA right.

## 4. Core UX & Micro-Interaction Rules

- Responsive by default: fluid sizing, breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely solely on color; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 5. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) across the entire deliverable — never mix.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.
- Invent fictional brand name, product, and copy. Never use "Rootly" or its trademarks.

## 6. Section-Specific Guidance

- **Hero:** Full-viewport composition with gradient + mountain photo, headline, subtext, CTA pair (filled + ghost), logo cloud, floating product artifacts.
- **Features:** 3 cards in grid, each with icon, 31px weight 200 headline, 14px body.
- **How It Works:** 3 numbered steps, left-aligned body copy.
- **Testimonials:** Cards with quote, author, role.
- **Pricing:** 3 tiers, middle tier highlighted with `#ebe5ff` wash or accent border.
- **FAQ:** Accordion-style, keyboard accessible.
- **Final CTA:** Centered headline + filled CTA.
- **Footer:** Secondary links, minimal.

## 7. Do's and Don'ts (Enforce)

- Use 200 weight at 52px for display headlines — whisper-weight is the brand voice.
- All interactive elements 1440px radius — full pills non-negotiable.
- Stack surfaces: Snow → Paper → Wash → Edge. No new surface colors.
- `#100f12` for filled CTAs and dominant borders. Violet only for outlines/accents, never large fills.
- Letter-spacing tight: -0.015em display, -0.009em body.
- Gradients hero-only. Rest flat and monochromatic.
- 1px borders in `#ebe5ff`/`#d9cffa` define cards — not shadows (shadows only on floating product artifacts).
- No weights 400/700/800. Only 200/500/600.
- No large `#8d6fde` fills. No sharp card corners below 34.6px. No letter-spacing > -0.005em. No drop shadows on flat UI. No secondary brand colors. No centered long-form body copy.

Output only the finished prompt. No preamble or closing commentary. Mirror the structure above. If any user request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. All output in English; all CSS variables, class names, file names in English/ASCII. User-facing copy must be in English.
