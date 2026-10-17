# UI/UX Coding-AI Prompt — Complete Landing Page (Obscura Style Reference)

## 1. Role & Objective

You are a frontend coding agent. Build a complete, production-ready landing page as a fictional brand inspired by the "Obscura" style reference (8-bit arcade floating on cloud paper). **Do NOT use the real brand name "Obscura" or any of its trademarks, logos, or product names anywhere in the page.** Invent a fictional brand name, product, and all copy. All user-facing copy must be written in English. Deliver three separate files: `index.html`, `style.css`, `script.js`.

## 2. Strict Architectural Rules

### 2.1 CSS-First Architecture & Zero Inline CSS
- All styling lives strictly in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors only. Keep HTML clean, semantic, and styling-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required tokens:
- Colors: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Map the Obscura palette: `--color-signal-orange: #ff5e24`, `--color-ember-crust: #6c3200`, `--color-cloud-mist: #e3f1fe`, `--color-graphite-ink: #232629`, `--color-paper-white: #ffffff` (use `#fefefe` where near-white is needed), `--color-slate-pencil: #5c6066`, `--color-ash-mist: #989ea4`, `--color-blush-shadow: #dbced0`, `--color-midnight-ink: #101828`.
- Radius/shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Enforce contrast pairing: light backgrounds pair with dark text, dark backgrounds with light text, in every theme.
- Light-mode background must not be pure white; use `#e3f1fe` (Cloud Mist) as the page canvas.

### 2.3 Mandatory Dark Mode
- Provide dark-mode color tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class.
- Theme variables switch seamlessly without HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox & Mobile-First
- Use Flexbox (`display: flex`) for all layouts.
- Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows → columns on small viewports). No horizontal scrolling.

### 2.5 Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS via `@layer`/`@apply`). All utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Text: Jersey 10 (display/headings 36px+) and Manrope (body/UI). Include Google Font `<link>`/`@import` and bind to `--font-base`/`--font-display`.
- Icons: Google Material Symbols only. No raw inline SVGs or local icon files.

## 3. Component & Section Specifications

### 3.1 Navigation Bar
- Sticky top bar: logo left (Manrope 700 lowercase), centered nav links (Manrope 500 14px), right cluster with ghost "Manage Account" link + orange CTA "Get Started" (6px radius).
- Active nav item: orange ring inset shadow. Transparent/white background, no border.

### 3.2 Hero Section
- Centered stack on Cloud Mist canvas. Jersey 10 96px/60px two-line headline (first line Graphite Ink, second Signal Orange). Manrope 400 16px Slate Pencil body, max-width ~560px. Centered orange CTA below. Pixel cloud sprites float in negative space (left/right), never cropped.

### 3.3 Features (3 Cards)
- White surface, 12px radius, 16px padding, 1px Cloud Mist border, 4-layer blue-tinted shadow. Jersey 10 heading 36-48px Graphite Ink, Manrope body Slate Pencil. Pixel illustration/icon above heading.

### 3.4 How It Works (3 Steps)
- Numbered steps with pixel-art icons, Manrope body copy, subtle connectors. Responsive collapse to single column on mobile.

### 3.5 Testimonials
- Card-based quotes with avatar (pixel mascot or initial), name, role, Manrope body. Cloud Mist border, soft shadow.

### 3.6 Pricing (3 Tiers)
- Three cards: Free/Starter/Pro. Middle tier highlighted with orange border/ring. Feature lists with check icons. CTA per tier (primary for highlighted, secondary for others).

### 3.7 FAQ
- Accordion with expand/collapse, keyboard accessible, `aria-expanded`. Jersey 10 for question, Manrope for answer.

### 3.8 Final CTA
- Centered band with pixel headline, short body, single orange CTA. Cloud sprites in corners.

### 3.9 Footer
- Full-width Ember Crust (#6c3200) background. White/warm-cream Manrope 400-500 14px links. Secondary links, logo, copyright. 48px vertical padding.

## 4. Component State Requirements

### 4.1 Buttons
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disabled interactions, CSS spinner, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.

### 4.2 Cards
- Default: flex layout, subtle borders, elevation via `--bg-secondary` + variables.
- Hover: shadow shift or `translateY(-2px)`.
- Focus-within: highlight border on child focus.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.

### 4.3 Forms & Inputs (if any)
- States: Empty, Focused, Filled, Valid, Invalid, Disabled, Read-only.
- Structure: flex container with label, input, error feedback.

### 4.4 Modals (if any)
- Opening/Open/Loading/Success/Error/Closing animated via CSS. Centered flex, backdrop, Google Icon close button, Esc/overlay close, focus trapping.

## 5. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes, never color-only state, semantic HTML5, correct ARIA, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- Pixel art: flat 8-bit blocks, 1-3 colors per object, 1px darker outline, no anti-aliasing, no gradients. Cloud sprites 2-3 per section in corners, never centered/behind text/larger than ~120px.

## 6. Deliverables
- Files: `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point.
- Naming: one consistent convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only where real copy/labels were supplied; placeholders only where content genuinely unspecified.
- All copy in English. Fictional brand name, product, and copy — never the real brand's name/logo/trademarks.

## 7. Edit Mode (N/A — this is a from-scratch build)
Not applicable; building from scratch. If you need to add markup to achieve a style, do so freely within the component structure above.
