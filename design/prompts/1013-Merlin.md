# Coding AI Prompt — Merlin Landing Page

You are an expert front-end developer. Build a complete, production-ready landing page using the **Merlin** visual style defined below. Invent a fictional brand name, product, and copy — never use the real brand name "Merlin", its logo, trademarks, or product names anywhere in the page.

## 1. CSS-First Architecture & Zero Inline CSS

- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class/ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

## 2. CSS Variables & Theme Tokens

Define all tokens in `:root` inside `style.css`. Use the Merlin palette:

- `--color-paper-white: #f5f5f4` (page canvas)
- `--color-card-snow: #ffffff` (card surfaces, nav capsule)
- `--color-blush-mist: #fdf8f7` (accent surface)
- `--color-ink-black: #000000` (headings, strong borders)
- `--color-body-charcoal: #1c1d1f` (body text)
- `--color-steel-gray: #6a6b6c` (icons, muted UI)
- `--color-graphite: #808080` (muted headings, tertiary text)
- `--color-ash: #aaaaaa` (light borders, disabled text)
- `--color-hairline: #cccccc` (dividers)
- `--color-mist: #dddddd` (card borders)
- `--color-cloud: #eeeeee` (soft outlines)
- `--color-signal-green: #34c759` (primary CTA + handwritten annotations only)
- `--color-link-blue: #3575f8` (inline links only)
- `--color-dawn-wash: linear-gradient(180deg, rgb(150,223,255) 0%, rgb(237,237,237) 58.17%, rgb(221,221,221) 100%)`

Also define: `--font-base: 'Inter', sans-serif;`, `--radius-sm: 12.5px`, `--radius-md: 20px`, `--radius-lg: 30px`, `--radius-pill: 100px`, `--shadow-subtle`, `--shadow-sm`, `--shadow-xl`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.

Enforce contrast pairing for light/dark. Light mode background is `#f5f5f4` (not pure white). Where near-white is needed use `#fefefe`.

## 3. Mandatory Dark Mode

- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Switch background/text variables seamlessly.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

## 4. Flexbox Layout & Mobile-First

- Use Flexbox for all layouts. Default `align-items: center` on every flex container unless explicitly justified.
- Mobile-responsive out of the box; convert rows to columns on small viewports; prevent horizontal scrolling.

## 5. Framework & Tailwind

- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`). Map utility classes to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## 6. Typography & Icons

- Use Google Fonts: Inter (weights 300, 400, 500, 600) for all text. Bind to `--font-base`.
- Use Google Material Symbols/Icons. No raw inline SVGs or local icon files.
- Display headlines: Inter 60–70px, weight 400, letter-spacing -0.031em to -0.043em, line-height 1.13.
- Uppercase labels: 9–10px, weight 500, letter-spacing +0.036em.

## 7. Component Specifications

### Buttons
- **Primary CTA:** pill (100px radius), fill `#34c759`, text `#ffffff`, Inter 14px weight 500, padding 10px 20px, no border. States: hover (brightness/shadow, cursor pointer), focus (focus ring via CSS vars), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary feedback).
- **Ghost Text:** transparent, no border, text `#1c1d1f`, Inter 14px weight 400.
- **Outline Sign-Up:** transparent, 1px border `#1c1d1f`, 100px radius, text `#1c1d1f`, Inter 14px weight 500.
- Minimum touch target 44x44px.

### Cards
- Default: flex layout, subtle borders, elevation via `--bg-secondary` and CSS vars.
- Hover: elevation/shadow shift or `translateY(-2px)`.
- Focus-within: highlight borders when child link/button focused.
- Loading: shimmer animation in CSS.
- Empty state: Google Icon + guidance text.

### Forms/Inputs
- States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, error feedback container.

### Modal/Popup
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc/overlay click.

## 8. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes, never rely on color alone, semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 9. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only submissions where real copy/labels were supplied; placeholders only where genuinely unspecified.

## 10. Page Sections to Build

1. **Hero** — centered headline stack on paper-white canvas with Dawn Wash gradient bleed at top; headline, subtext, primary CTA, social proof badge (green dot + "7,000+ users"). Center-aligned.
2. **Features** — 3 cards with icon, title, description. 20px radius, no heavy shadow.
3. **How It Works** — 3 steps with number, title, description.
4. **Testimonials** — quote cards with author name/role.
5. **Pricing** — 3 tiers with feature lists and CTA buttons.
6. **FAQ** — accordion-style questions/answers.
7. **Final CTA** — centered headline + primary button.
8. **Footer** — secondary links, logo, copyright.

## 11. Merlin-Specific Rules

- Use Inter for all text; the only second voice is a handwritten script annotation in `#34c759` (~20px) for decorative labels with curved arrow connectors.
- `#34c759` exclusively for primary CTA and handwritten annotations — no other green/chromatic accent.
- 100px border-radius on all buttons and floating nav capsule.
- Page canvas `#f5f5f4`, card surfaces `#ffffff` — never invert.
- Dawn Wash gradient only at top of page as atmospheric light — never as section divider.
- Display headlines 60–70px, letter-spacing -0.031em to -0.043em, weight 400 — not 700.
- Product mockup card (if used) gets the 40px 60px deep shadow — the only dramatic elevation.
- No box-shadow on standard cards; hairline borders `#eeeeee`/`#dddddd` at 1px.
- No sharp corners below 12.5px (inputs) / 20px (cards).
- Uppercase tracking (+0.036em) reserved for 9–10px labels only.
- Floating nav capsule: white pill, 100px radius, shadow `rgb(238,238,238) 0px 3px 8px 0px`, bottom-center fixed, 24px from bottom. Contents: logo icon, ghost text links (Pricing, Manifesto), Login ghost text, outlined Sign-up button.
- Trust logo bar: "Used by professionals at" label (Inter 10px weight 500, uppercase, `#808080`, letter-spacing 0.036em), then 5 grayscale logos in `#808080`, ~20px gap.
- Feature statement block: handwritten green annotation above bold Inter 25px weight 500 statement, left-aligned, max-width 600px, no card chrome.

## 12. Fictional Brand Requirement

Invent a fictional brand name, product, and all copy. Never use "Merlin", its logo, trademarks, or product names. All user-facing copy must be in English.

## 13. Output

Produce `index.html`, `style.css`, and `script.js` as separate files. No inline `<script>` beyond a single deferred entry-point reference. Output only the finished code files.
