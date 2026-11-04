# Coding AI Prompt — Ecosia-Inspired Landing Page

You are an expert front-end developer. Build a complete, production-ready landing page inspired by the "Ecosia" visual style reference below. Invent a fictional brand name, product, and copy — never use the real brand name "Ecosia", its logo, trademarks, or product names anywhere in the page.

## 1. Architecture & Rules

**1.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. Never use `style="..."` attributes.
- Use class/ID selectors only. Keep HTML semantic and agnostic of visual styling.

**1.2 CSS Variables & Tokens**
Store all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`):
- Colors: `--primary: #d7eb80`, `--secondary: #333333`, `--bg-primary: #ffffff`, `--bg-secondary: #f8f8f6`, `--bg-tertiary: #f0f0eb`, `--text-primary: #333333`, `--text-secondary: #6c6c6c`, `--text-success`, `--text-error`, `--border-default: #bebeb9`, `--border-strong: #333333`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text; dark surfaces (hero overlay) pair with light text.
- Light mode background must not be pure white where a near-white is needed — use `#fefefe` for any secondary white surface; keep `#ffffff` only for the dominant canvas.
- Radius: `--radius-sm: 4px`, `--radius-md: 20px`, `--radius-pill: 9999px`.
- Shadow: `--shadow-xl: rgba(0, 0, 0, 0.2) 0px 11px 33px 0px` (single shadow token, used only on the hero stats card).
- Spacing: `--spacing-gap: 16px`, `--spacing-section: 80px`, `--spacing-card: 24px`.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: `--font-base` (Inter), `--font-display` (Founders Grotesk substitute — use Inter Tight or Space Grotesk from Google Fonts).

**1.3 Mandatory Dark Mode**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class.
- Switch background/text variables seamlessly. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- Use Flexbox for all layouts. Default `align-items: center` on every flex container unless explicitly justified.
- Mobile-responsive out of the box; convert rows to columns on small viewports; no horizontal scroll.

**1.5 Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by `@layer`/`@apply`). Utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Inter (400, 500, 600, 700) and Inter Tight or Space Grotesk (400, 600, 700) via Google Fonts `<link>`, bound to `--font-base` and `--font-display`. Apply Inter OpenType features `"cv11", "ss01"`.
- Icons: Google Material Symbols/Icons only. No inline SVGs or local icon files.

## 2. Component Specifications

**2.1 Buttons**
- Pill CTA (primary): `#d7eb80` background, `#333333` text, Inter 14–16px weight 600, padding 11–15px vertical / 16–24px horizontal, 9999px radius, no border. Optional 16px leading icon.
- Outlined ghost (secondary): transparent background, 1px `#333333` border, `#333333` text, Inter 14–16px weight 500, padding 11–15px / 19–24px, 9999px radius.
- States: default, hover (brightness/shadow + cursor pointer), focus (visible focus ring via CSS variables), active (scale 0.97), loading (spinner, disabled interactions), disabled (opacity 0.5, greyscale, not-allowed), success/error feedback.
- Minimum touch target 44×44px.

**2.2 Cards**
- 20px radius, soft surfaces (`#f8f8f6` / `#f0f0eb`), no borders or shadows except the single shadow token on the hero stats card.
- Hover: subtle `translateY(-2px)` elevation. Focus-within: highlight border. Loading skeleton with shimmer. Empty state with Google Icon + guidance text.

**2.3 Forms & Inputs**
- Pill input (9999px radius), white background, height ~56–64px, 16px magnifying-glass icon left, placeholder in `#6c6c6c`. States: empty, focused, filled, valid, invalid, disabled, read-only. Flex container wrapping label, input, error feedback.

**2.4 Modal / Popup**
- Opening/open/loading/success/error/closing states animated via CSS. Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interactions
- Responsive by default; fluid sizing; no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes; never rely solely on color; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 4. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM) throughout.
- No lorem-ipsum-only submissions where real copy is expected; placeholders only where content is genuinely unspecified.

## 5. Page Sections Required
Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 6. Style Application (Ecosia-Inspired)
- Single lime-green accent `#d7eb80` as the only chromatic punctuation; all other surfaces monochrome/warm neutrals.
- Hero: full-bleed nature photograph backdrop, centered Founders Grotesk 48–54px white headline, white pill search bar, dark translucent stats card (rgba(0,0,0,0.2–0.4), 20px radius, shadow `--shadow-xl`) with 2–3 stats, each with a 20px icon in `#d7eb80`.
- Section rhythm: 80px gaps; centered eyebrow (Inter 12–14px weight 700 uppercase, letter-spacing 0.1–0.15em, `#6c6c6c`) + Founders Grotesk 36–48px title.
- Cards: 20px radius, 4-column grid with 24–32px gap, full-bleed nature photo, bold Inter title, muted Inter body.
- Split content blocks: 50/50 text + 20px-radius image.
- Financial donut chart (if used): segments `#2d8c3a`, `#e44b4b`, `#f5c542`, `#3aa8e0`, `#f0a0a0`; center label in Inter 24–36px weight 700.
- Wordmark top-left (Inter 18–20px weight 700 uppercase, letter-spacing 0.05em, `#333333`); Switch CTA pill top-right (`#d7eb80`, "Switch to [Brand] — it's free").
- Chips/tags: 9999px pill, light neutral background or outlined.
- No gradients; no square corners below 10px on cards/images; no `#000000` (use `#333333`).
- All copy must be in English. Invent a fictional brand, product, and copy — never use the real brand name, logo, trademarks, or product names.
