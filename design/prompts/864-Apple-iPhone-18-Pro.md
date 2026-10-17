# Generated Coding-AI Prompt — Fictional-Brand Landing Page in Apple Visual Style

You are an expert frontend engineer. Build a complete, production-ready landing page for a **fictional** consumer-hardware brand. The visual language must follow the "Apple" style reference supplied below, but you must invent a fictional brand name, product name, copy, and imagery descriptions. **Never use the real brand name "Apple", its logo, trademarks, or product names (e.g., iPhone, SF Pro, etc.) anywhere in the markup, copy, or assets.** Use only generic, invented names.

## 1. Architecture & Rules (Mandatory)

**1.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target via class/ID selectors only. Keep HTML semantic and style-agnostic.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)` block. Required color tokens (map to the reference palette):
- `--color-obsidian: #000000`
- `--color-graphite: #0e0e0e`
- `--color-carbon: linear-gradient(#1d1d1f, #000000 288px)`
- `--color-steel: #333336`
- `--color-slate: #6e6e73`
- `--color-ash: #86868b`
- `--color-porcelain: #f5f5f7`
- `--color-white: #fefefe` (use #fefefe, never #ffffff, where a near-white is needed)
- `--color-accent-blue: #0071e3`
- `--color-link-dark: #2997ff`
- `--color-link-light: #0066cc`
- `--color-copper-new: #b64400`
- `--color-optical-yellow: #ffd500`

Also define: `--radius-sm`, `--radius-md`, `--radius-lg` (28px for cards/media/tiles), `--shadow-subtle`, `--shadow-subtle-2`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.

Contrast pairing: every light background pairs with dark text and vice versa, in both light and dark themes.

Light-mode background must not be pure white; use a muted tone. Dark mode is mandatory.

**1.3 Dark Mode**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark`.
- Seamless variable switching, no HTML restructuring.
- Persist user choice via `localStorage`, fallback to `prefers-color-scheme` on first visit.
- Visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- Use Flexbox for all layouts. Default `align-items: center` on every flex container unless explicitly justified.
- Mobile-responsive, no horizontal scroll. Rows become columns on small viewports.

**1.5 Tailwind CSS Integration**
- Use Tailwind (or clean custom CSS via `@layer`/`@apply`). Utility classes must map to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: load Google Font "Inter" (substitute for SF Pro) via `<link>`/`@import`, bind to `--font-base`.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 2. Typography Scale (Inter substitute)

Define type tokens:
- `--text-utility-nav`: 400, 12px, 1.33, -0.12px
- `--text-body`: 400, 14px, 1.29, -0.224px
- `--text-body-strong`: 600, 14px, 1.29, -0.224px
- `--text-section-nav`: 500, 17px, 1.47, -0.374px
- `--text-product-label`: 600, 19px, 1.21, 0.228px
- `--text-feature-stat`: 600, 28px, 1.00, 0.196px
- `--text-hero-product-name`: 600, 32px, 1.13, 0.128px
- `--text-display`: 600, 80px, 1.05, -1.2px
- `--text-display-xl`: 600, 96px, 1.04, -1.44px

## 3. Spacing & Shapes

Spacing scale: 4,6,7,8,10,12,14,16,20,24,28,32,48,90,144,210 (px). Border radius: cards 28px, links 10px, pills 9999px, images 28px, inputs 980px, buttons 170px, navigation 20px, compact buttons 36px. Section gap 24px, card padding 16px, element gap 4px. Shadows: `--shadow-subtle: rgb(40,40,40) 0px 0px 0px 1px`, `--shadow-subtle-2: rgb(110,110,115) 0px 0px 0px 1px`.

## 4. Component Specifications

**Global Utility Nav:** 44px-tall bar, #000000, compact 12px/400 text, rgba(255,255,255,0.8) labels, logo/glyphs #cccccc. Opened dark nav uses #161617 with 20px radius.

**Upgrade Announcement Strip:** #1d1d1f, 14px/400, #f5f5f7, 20px line-height, -0.224px tracking, links in #2997ff.

**Product Section Nav:** #0e0e0e contained bar, 20px radius, 1px #282828 keyline. Product name 19px/600 #f5f5f7; section links 17px/500, 25px line-height, -0.374px.

**Blue Purchase Pill:** #0071e3 fill, white 12px/400, 16px line-height, -0.12px, 170px radius. Compact: 7px vertical / 14px horizontal padding.

**Dark Pricing Capsule:** rgba(66,66,69,0.72) fill, rgba(255,255,255,0.8) text, 36px radius. Pair beside Blue Purchase Pill.

**Outlined Explore Pill:** transparent, #f5f5f7 text, 1px #6e6e73 outline, 9999px radius, 12px/400, 16px line-height, -0.12px.

**Hero Product Stage:** full-bleed #000000, photorealistic hardware (invented product), #f5f5f7 product name 32px/600/36px line-height/0.128px, display statement 80px/600/84px line-height/-1.2px. Pricing controls along lower edge.

**Highlights Media Frame:** contained cinematic media, 28px radius, no shadow. #f5f5f7 display messaging over dark imagery; pagination in translucent #333336 pill.

**Feature Metric Tile:** #000000 fill, 28px radius, no shadow. Centered crop/icon, #f5f5f7 28px/600/28px line-height/0.196px, supporting #86868b text.

**Upgrade Comparison Panel:** #1d1d1f, 28px radius, no shadow. #f5f5f7 40px+ section text, #86868b support, multi-column grid of black 28px feature tiles.

**Device Selector Input:** rgba(255,255,255,0.04) fill, 1px #6e6e73 border, #f5f5f7 text, 980px radius, 24px left / 45px right padding. Focus: 1px #0071e3 outline, 1px offset.

**New Release Marker:** text-only #b64400, 12px/600, 16px line-height, -0.12px. No badge container.

**Pale Comparison Card:** #ffffff (use #fefefe) fill, #1d1d1f text, 28px radius, no shadow, 16px internal spacing, links #0066cc.

## 5. Component State Requirements (Buttons, Cards, Forms, Modals)

Follow the meta-prompt's state specs: buttons (default/hover/focus/active/loading/disabled/success-error), cards (default/hover/focus-within/loading-skeleton/empty), forms (empty/focused/filled/valid/invalid/disabled/readonly), modals (opening/open/loading/success-error/closing with backdrop, Esc/overlay close, focus trap). Minimum 44x44px touch targets.

## 6. UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 7. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry reference.
- One consistent class-naming convention (BEM) throughout.
- No lorem-ipsum-only where real copy is implied; placeholders only where genuinely unspecified.
- All user-facing copy in English.

## 8. Landing Page Sections

Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. Use invented fictional brand/product/copy. Include dark-mode toggle, responsive nav, and accessible forms where applicable. No real brand names, logos, or trademarks.You are an expert frontend engineer. Build a complete, production-ready landing page for a fictional consumer-hardware brand. The visual language must follow the "Apple" style reference supplied below, but you must invent a fictional brand name, product name, copy, and imagery descriptions. Never use the real brand name "Apple", its logo, trademarks, or product names (e.g., iPhone, SF Pro, etc.) anywhere in the markup, copy, or assets. Use only generic, invented names.

## 1. Architecture & Rules (Mandatory)

1.1 CSS-First, Zero Inline CSS: All styling lives in style.css. No style="..." attributes in HTML. Target via class/ID selectors only. Keep HTML semantic and style-agnostic.

1.2 CSS Variables & Theme Tokens: Define all tokens in :root and a .dark class / @media (prefers-color-scheme: dark) block. Required color tokens (map to the reference palette):
--color-obsidian: #000000
--color-graphite: #0e0e0e
--color-carbon: linear-gradient(#1d1d1f, #000000 288px)
--color-steel: #333336
--color-slate: #6e6e73
--color-ash: #86868b
--color-porcelain: #f5f5f7
--color-white: #fefefe (use #fefefe, never #ffffff, where a near-white is needed)
--color-accent-blue: #0071e3
--color-link-dark: #2997ff
--color-link-light: #0066cc
--color-copper-new: #b64400
--color-optical-yellow: #ffd500
Also define: --radius-sm, --radius-md, --radius-lg (28px for cards/media/tiles), --shadow-subtle, --shadow-subtle-2, --spacing-gap, --transition-fast, --transition-normal, --ease-standard, --z-dropdown, --z-modal, --z-toast, --font-base.
Contrast pairing: every light background pairs with dark text and vice versa, in both light and dark themes. Light-mode background must not be pure white; use a muted tone. Dark mode is mandatory.

1.3 Dark Mode: Provide dark tokens under @media (prefers-color-scheme: dark) and/or .dark. Seamless variable switching, no HTML restructuring. Persist user choice via localStorage, fallback to prefers-color-scheme on first visit. Visible toggle with correct aria-pressed/aria-label.

1.4 Flexbox & Mobile-First: Use Flexbox for all layouts. Default align-items: center on every flex container unless explicitly justified. Mobile-responsive, no horizontal scroll. Rows become columns on small viewports.

1.5 Tailwind CSS Integration: Use Tailwind (or clean custom CSS via @layer/@apply). Utility classes must map to CSS variables or reusable class names (.btn, .card, .input-group).

1.6 Typography & Icons (Google Fonts Mandatory): Text: load Google Font "Inter" (substitute for SF Pro) via <link>/@import, bind to --font-base. Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 2. Typography Scale (Inter substitute)

Define type tokens:
--text-utility-nav: 400, 12px, 1.33, -0.12px
--text-body: 400, 14px, 1.29, -0.224px
--text-body-strong: 600, 14px, 1.29, -0.224px
--text-section-nav: 500, 17px, 1.47, -0.374px
--text-product-label: 600, 19px, 1.21, 0.228px
--text-feature-stat: 600, 28px, 1.00, 0.196px
--text-hero-product-name: 600, 32px, 1.13, 0.128px
--text-display: 600, 80px, 1.05, -1.2px
--text-display-xl: 600, 96px, 1.04, -1.44px

## 3. Spacing & Shapes

Spacing scale: 4,6,7,8,10,12,14,16,20,24,28,32,48,90,144,210 (px). Border radius: cards 28px, links 10px, pills 9999px, images 28px, inputs 980px, buttons 170px, navigation 20px, compact buttons 36px. Section gap 24px, card padding 16px, element gap 4px. Shadows: --shadow-subtle: rgb(40,40,40) 0px 0px 0px 1px, --shadow-subtle-2: rgb(110,110,115) 0px 0px 0px 1px.

## 4. Component Specifications

Global Utility Nav: 44px-tall bar, #000000, compact 12px/400 text, rgba(255,255,255,0.8) labels, logo/glyphs #cccccc. Opened dark nav uses #161617 with 20px radius.

Upgrade Announcement Strip: #1d1d1f, 14px/400, #f5f5f7, 20px line-height, -0.224px tracking, links in #2997ff.

Product Section Nav: #0e0e0e contained bar, 20px radius, 1px #282828 keyline. Product name 19px/600 #f5f5f7; section links 17px/500, 25px line-height, -0.374px.

Blue Purchase Pill: #0071e3 fill, white 12px/400, 16px line-height, -0.12px, 170px radius. Compact: 7px vertical / 14px horizontal padding.

Dark Pricing Capsule: rgba(66,66,69,0.72) fill, rgba(255,255,255,0.8) text, 36px radius. Pair beside Blue Purchase Pill.

Outlined Explore Pill: transparent, #f5f5f7 text, 1px #6e6e73 outline, 9999px radius, 12px/400, 16px line-height, -0.12px.

Hero Product Stage: full-bleed #000000, photorealistic hardware (invented product), #f5f5f7 product name 32px/600/36px line-height/0.128px, display statement 80px/600/84px line-height/-1.2px. Pricing controls along lower edge.

Highlights Media Frame: contained cinematic media, 28px radius, no shadow. #f5f5f7 display messaging over dark imagery; pagination in translucent #333336 pill.

Feature Metric Tile: #000000 fill, 28px radius, no shadow. Centered crop/icon, #f5f5f7 28px/600/28px line-height/0.196px, supporting #86868b text.

Upgrade Comparison Panel: #1d1d1f, 28px radius, no shadow. #f5f5f7 40px+ section text, #86868b support, multi-column grid of black 28px feature tiles.

Device Selector Input: rgba(255,255,255,0.04) fill, 1px #6e6e73 border, #f5f5f7 text, 980px radius, 24px left / 45px right padding. Focus: 1px #0071e3 outline, 1px offset.

New Release Marker: text-only #b64400, 12px/600, 16px line-height, -0.12px. No badge container.

Pale Comparison Card: #ffffff (use #fefefe) fill, #1d1d1f text, 28px radius, no shadow, 16px internal spacing, links #0066cc.

## 5. Component State Requirements (Buttons, Cards, Forms, Modals)

Follow the state specs: buttons (default/hover/focus/active/loading/disabled/success-error), cards (default/hover/focus-within/loading-skeleton/empty), forms (empty/focused/filled/valid/invalid/disabled/readonly), modals (opening/open/loading/success-error/closing with backdrop, Esc/overlay close, focus trap). Minimum 44x44px touch targets.

## 6. UX & Micro-Interactions

Responsive by default, fluid sizing, no horizontal overflow. CSS transitions on state changes (transition: var(--transition-normal)), respect prefers-reduced-motion. Accessibility: sufficient contrast both themes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; keyboard operability; aria-live for dynamic feedback. Mandatory visual feedback on every interaction. Destructive actions visually distinct in both themes.

## 7. Deliverables

Separate index.html, style.css, script.js. No inline <script> beyond a single deferred entry reference. One consistent class-naming convention (BEM) throughout. No lorem-ipsum-only where real copy is implied; placeholders only where genuinely unspecified. All user-facing copy in English.

## 8. Landing Page Sections

Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. Use invented fictional brand/product/copy. Include dark-mode toggle, responsive nav, and accessible forms where applicable. No real brand names, logos, or trademarks.
