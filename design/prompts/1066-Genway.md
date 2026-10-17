# Coding AI Prompt — Genway-Themed Complete Landing Page

## 1. Architecture & Rules (MANDATORY)

### 1.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling.

### 1.2 CSS Variables & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens include (at minimum): `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.

Map the Genway palette into these tokens:
- `--primary`: #0a0449 (Deep Indigo)
- `--secondary`: #706e87 (Slate Lavender)
- `--bg-primary`: #ffffff (Canvas White — use #fefefe where near-white is needed)
- `--bg-secondary`: #f7f6fd (Lavender Mist)
- `--text-primary`: #0a0449 (Deep Indigo)
- `--text-secondary`: #706e87 (Slate Lavender)
- `--text-success`: #2e7d32 (accessible green)
- `--text-error`: #c62828 (accessible red)
- `--border-default`: rgba(10, 1, 99, 0.08)
- `--border-error`: #c62828
- `--border-success`: #2e7d32
- `--radius-sm`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 32px
- `--shadow-sm`: rgba(4, 0, 41, 0.1) 0px 1px 8px 0px inset
- `--shadow-md`: rgba(10, 1, 99, 0.4) 0px 8px 16px -10px
- `--spacing-gap`: 8px
- `--transition-fast`: 150ms
- `--transition-normal`: 250ms
- `--ease-standard`: cubic-bezier(0.4, 0, 0.2, 1)
- `--z-dropdown`: 100
- `--z-modal`: 1000
- `--z-toast`: 2000
- `--font-base`: 'Geist', 'Inter', sans-serif (load via Google Fonts; substitute Inter if Geist unavailable)

Contrast pairing: every light background token must pair with a dark text token and vice versa in both light and dark themes.

### 1.3 Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text variables seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layouts with Flexbox. Every flex container must default to `align-items: center` unless explicitly justified.
- Mobile-responsive out of the box (rows collapse to columns on small viewports). No horizontal scrolling.

### 1.5 Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). All utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons
- Use Google Fonts for text and icons. Load Geist (substitute Inter) and Material Symbols. Forbid raw inline SVGs or local icon files.

## 2. Component Specifications

### 2.1 Button
States: Default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target), Hover (brightness/shadow, cursor pointer), Focus (distinct focus ring via CSS vars), Active/Pressed (transform: scale(0.97)), Loading (disabled, CSS spinner/animated Google Icon, no dimension distortion), Disabled (opacity 0.5, greyscale, cursor not-allowed), Success/Error (temporary feedback via `--text-success`/`--text-error`).

### 2.2 Card
States: Default (flex layout, subtle borders, elevation via `--bg-secondary` + vars), Hover (elevation/shadow shift or translateY(-2px)), Focus-within (highlight borders on child focus), Loading (skeleton shimmer in CSS), Empty State (Google Icon + guidance text).

### 2.3 Form & Input
States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input, dedicated error feedback container.

### 2.4 Modal / Popup
States: Opening, Open, Loading, Success/Error, Closing (all CSS-animated). UX: centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click.

## 3. Core UX & Micro-Interactions (Global)
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely solely on color; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions (`.btn-danger`) visually distinct in both themes.

## 4. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.

## 5. Style Reuse (Genway Theme)
Reuse the Genway visual style only. Invent a fictional brand name, product, and copy. Never use the real brand name, logo, trademarks, or product names in the page.

Apply these Genway style specifics:
- Deep Indigo (#0a0449) for all display headlines and primary text.
- Violet-tinted shadow `rgba(10, 1, 99, 0.4) 0px 8px 16px -10px` for elevated cards; never neutral gray shadows.
- Display headlines at 88px with -3.52px letter-spacing and 0.9 line-height.
- Lavender Mist (#f7f6fd) for cards separating from pure white.
- Atmospheric depth via lavender gradient washes (#e2e0f9 → #cfccf5), not solid colored backgrounds.
- Body text in Slate Lavender (#706e87), never pure gray.
- 8px and 32px as anchor card radii (8px compact, 32px hero content cards).
- No separate blue/teal accent; indigo is the brand color.
- No neutral gray shadows.
- No display headlines below 56px or above 88px.
- No line-height above 1.0 for display sizes.
- No solid vivid violet (#6b5ee0) fills; only gradient endpoint/accent fill/text.
- No borders thicker than 1px.
- No pure black (#000000) text.

## 6. Page Sections to Build
Build a complete landing page with these sections, using the Genway style:

1. **Top Navigation Bar** — minimal header: logo left in Deep Indigo at 16px SemiBold, three text links right (About, Blog, Login) in Slate Lavender at 14px Regular. No background fill/shadow/border. Height ~64px, full-width, inner max-width 1200px.

2. **Hero** — vertically split: top half white space with centered display headline (88px Geist Bold, #0a0449, -3.52px tracking, 0.9 line-height, max 2 lines) and subhead (16-18px Geist Regular, #706e87, 1.5 line-height, max-width ~600px centered). Bottom half transitions into violet gradient wash filling viewport. Content on gradient centered, white-on-violet.

3. **Features** — 3 cards on light surface. White or Lavender Mist background, 12px radius, 1px hairline border rgba(10,1,99,0.08) or transparent, 24-32px padding. Title 16-20px SemiBold in Deep Indigo. Body 14px Regular in Slate Lavender. No shadow on light surfaces.

4. **How It Works** — 3 numbered step cards on the gradient wash. Number badge (01/02/03) in 200px-radius circle, 48-56px diameter, white text on translucent white/lavender fill. Title 20-24px SemiBold white. Description 14px Regular white at 80% opacity. No card border/background — text compositions floating on gradient. 32px gap between cards, centered.

5. **Testimonials** — quote chips in a row: pill-shaped (200px radius), Lavender Mist or white fill, 12-16px horizontal / 8-12px vertical padding, 14px Regular in Slate Lavender. No border/shadow. 2-3 chips. Plus a Two-Tone Section Heading (first line Soft Mauve #a89fc7 or Slate Lavender at 36-56px, second line Deep Indigo at 36-56px Geist Bold).

6. **Pricing** — 3 tiers. Cards with white/Lavender Mist background, 12px radius, hairline border, violet-tinted shadow for elevated tier. Title 16-20px SemiBold Deep Indigo. Body 14px Regular Slate Lavender. Outline Action Button style for secondary CTA (8px radius, 1px border #706e87, transparent fill, 14px SemiBold #0a0449, padding 10px 20px, no shadow).

7. **FAQ** — accordion-style or stacked Q&A. Questions in Deep Indigo SemiBold, answers in Slate Lavender Regular. Hairline borders between items.

8. **Final CTA** — centered section on gradient wash or white with lavender radial glow. Display headline (56-88px) + subhead + primary action button.

9. **Footer** — secondary links, logo, minimal. Slate Lavender text on white or Lavender Mist. No heavy borders.

## 7. Layout & Spacing
- Full-width sections, max-width 1200px inner content.
- Section gaps 96px with generous vertical breathing room.
- Cards/product mockups centered; 3-column grid for step indicators; single-column for hero showcases.
- 60% white space overall; compact only within card internals.
- Card padding 32px; element gap 8px.

## 8. Copy Locale
Write all user-facing copy in English.

## 9. Output
Produce `index.html`, `style.css`, and `script.js` implementing the above. Use a fictional brand name and invented product/copy. Do not reference the real brand. Ensure dark mode toggle, accessibility, and all component states are implemented. No inline CSS. No inline SVGs (use Material Symbols). No lorem-ipsum-only where real copy is expected.
