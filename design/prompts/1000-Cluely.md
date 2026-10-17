# Build a Complete Responsive Landing Page — Cluely-Inspired Visual Style Only

You are a coding AI. Build a complete, responsive landing page using the visual style of the provided Cluely reference, but **invent a fictional brand, product, copy, testimonials, pricing, and FAQ content**. Never use the real brand name “Cluely,” its logo, trademarks, product names, or any real company logos. Use generic Material Symbols or abstract CSS shapes wherever icons or integration marks are needed.

The page must include exactly these sections: **Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links**, plus a **Top Navigation** and an accessible **Dark Mode toggle**. Default to light mode.

---

## 1. Strict Rules & Architecture to Enforce

### 1.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling in a dedicated `style.css` file.
- **No inline CSS:** Never use `style="..."` attributes in HTML.
- **Class/ID selectors only:** All design properties, layout rules, and states must be targeted through class or ID selectors.
- Keep HTML semantic, clean, and agnostic of visual styling so the entire look can change by editing CSS only.
- Use separate files: `index.html`, `style.css`, and `script.js`.
- Do not use inline `<script>` blocks except one deferred entry-point reference to `script.js`.

### 1.2 CSS Variables (`var(--...)`) & Theme Tokens
Store all visual tokens in `:root` and theme classes. Required tokens include:

**Meta-required color tokens**
- `--primary`
- `--secondary`
- `--bg-primary`
- `--bg-secondary`
- `--text-primary`
- `--text-secondary`
- `--text-success`
- `--text-error`
- `--border-default`
- `--border-error`
- `--border-success`

**Meta-required shape/spacing/motion tokens**
- `--radius-sm`
- `--radius-md`
- `--radius-lg`
- `--shadow-sm`
- `--shadow-md`
- `--spacing-gap`
- `--transition-fast`
- `--transition-normal`
- `--ease-standard`
- `--z-dropdown`
- `--z-modal`
- `--z-toast`

**Cluely-inspired color tokens (light mode)**
- `--color-signal-blue: #3c83f6`
- `--color-deep-dusk: #022c70`
- `--color-azure-crest: #0544a5`
- `--color-hover-glow: #81b6ff`
- `--color-ink-black: #000000`
- `--color-carbon: #18181b`
- `--color-slate: #2e3038`
- `--color-steel: #5e616e`
- `--color-fog: #777a88`
- `--color-mist: #afb3c4`
- `--color-vapor: #edeef2`
- `--color-frost: #f3f8ff`
- `--color-chalk: #ffffff` *(exception only — see below)*
- `--color-near-white: #fefefe`
- `--color-bone: #e4e4e7`
- `--color-ash: #d7d7d7`
- `--color-neon: #00ff26`
- `--color-cyan-veil: #7df0f8`
- `--color-success-muted: #15803d`
- `--color-error: #dc2626`

**Map meta tokens to the theme**
- `--primary: var(--color-signal-blue)`
- `--secondary: var(--color-azure-crest)`
- `--bg-primary: var(--color-chalk)` *(exception only)*
- `--bg-secondary: var(--color-frost)`
- `--text-primary: var(--color-carbon)`
- `--text-secondary: var(--color-steel)`
- `--text-success: var(--color-success-muted)`
- `--text-error: var(--color-error)`
- `--border-default: var(--color-bone)`
- `--border-error: var(--color-error)`
- `--border-success: var(--color-success-muted)`

**Radius tokens**
- `--radius-sm: 4px`
- `--radius-md: 8px`
- `--radius-lg: 12px`
- `--radius-button: 4px`
- `--radius-input: 8px`
- `--radius-card: 12px`
- `--radius-feature-card: 24px`
- `--radius-mockup: 16px`
- `--radius-pill: 9999px`

**Shadow tokens**
- `--shadow-sm: rgb(12, 68, 161) 0px 0px 0px 0.5px, rgb(2, 44, 112) 0px -1px 0px 0px`
- `--shadow-md: rgba(207, 226, 255, 0.24) 0px 0px 0px 1px, rgba(255, 255, 255, 0.25) 0px -1px 0px 0px`
- `--shadow-cta-hover: 0 0 0 0.5px #0544a9, inset 0 -1px 0 0 #022c70, inset 0 0.5px 0 0 #81b6ff`
- `--shadow-mockup: 0 0 0 1px rgba(207, 226, 255, 0.24), inset 0 -0.5px 0 0 rgba(255, 255, 255, 0.8)`
- `--shadow-input-inset: inset 0 2px 20px -1px rgba(0, 0, 0, 0.05)`
- `--shadow-highlighted: 20px 20px 24px 0 rgba(148, 172, 243, 0.4), inset -3px -3px 4px 0 rgba(191, 229, 251, 0.4), inset 4px 4px 4px 0 rgba(19, 26, 228, 0.1)`

**Spacing tokens**
- `--spacing-4: 4px`
- `--spacing-5: 5px`
- `--spacing-6: 6px`
- `--spacing-7: 7px`
- `--spacing-8: 8px`
- `--spacing-9: 9px`
- `--spacing-10: 10px`
- `--spacing-12: 12px`
- `--spacing-14: 14px`
- `--spacing-16: 16px`
- `--spacing-18: 18px`
- `--spacing-20: 20px`
- `--spacing-28: 28px`
- `--spacing-32: 32px`
- `--spacing-40: 40px`
- `--spacing-73: 73px`
- `--spacing-gap: 8px`
- `--section-gap: 64px`
- `--card-padding: 24px`
- `--element-gap: 8px`

**Motion tokens**
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`

**Stacking tokens**
- `--z-dropdown: 100`
- `--z-modal: 200`
- `--z-toast: 300`

**Typography tokens**
- `--font-base: 'Geist', 'Inter', system-ui, sans-serif`
- `--font-display: 'EB Garamond', 'Playfair Display', serif`
- `--font-mono: ui-monospace, 'SF Mono', 'JetBrains Mono', monospace`
- `--text-caption: 10px`
- `--text-body: 16px`
- `--text-subheading: 20px`
- `--text-heading-sm: 28px`
- `--text-heading: 36px`
- `--text-heading-lg: 48px`
- `--text-display: 80px`

**Contrast pairing rule:** Every light background token must pair with a dark text token, and every dark background token must pair with a light text token. Apply this pairing in both light and dark themes, not only the default theme.

**Exception clause:** The Cluely reference explicitly specifies `#ffffff` for the Chalk/page background and card surfaces. This is the only permitted pure-white usage in light mode. All other near-white surfaces must use `#fefefe` (`--color-near-white`).

### 1.3 Mandatory Dark Mode Support
- Dark mode must always be defined using both `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed` and `aria-label` state.
- Dark mode must preserve the same variable names and contrast pairing. Use deep navy/charcoal backgrounds, light text, and the same Signal Blue accent.

**Suggested dark-mode token values**
- `--bg-primary: #0b0f1a`
- `--bg-secondary: #111827`
- `--text-primary: #f5f7fa`
- `--text-secondary: #a1a1aa`
- `--border-default: #27272a`
- Keep `--primary: #3c83f6`

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build layout structures with Flexbox (`display: flex`).
- **Every flex container must default to `align-items: center`** unless there is an explicitly justified exception.
- All layouts must be mobile-responsive out of the box, converting rows to columns on smaller viewports.
- Prevent horizontal scrolling at all breakpoints.

### 1.5 Framework Default & Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer` / `@apply` directives) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names such as `.btn`, `.card`, and `.input-group`.
- Do not create one-off visual utility classes that bypass the token system.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Use Google Fonts for text and icons.
- Include Google Font links or `@import` tags for **EB Garamond** and **Geist**; bind them to `--font-display` and `--font-base`. Use Inter as a fallback only if Geist is unavailable.
- Use **Google Material Symbols/Icons** for all icons.
- Explicitly forbid raw inline SVGs or local icon files.

---

## 2. Component Design Specifications to Enforce

### 2.1 Button Component Requirements
Style all states through CSS classes. Use `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`, and `.btn-pill`.

- **Default:** Flex layout with `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`. Minimum touch target of `44x44px`.
- **Primary CTA style:** Signal Blue (`#3c83f6`) background, white text, Geist 16px weight 500, 4px border-radius, `10px 20px` padding. If this padding does not reach the 44px touch target, increase vertical padding or `min-height` without changing the intended visual style.
- **Hover:** Visual shift using brightness/shadow, `cursor: pointer`. Primary CTA gains the layered shadow stack: `0 0 0 0.5px #0544a9, inset 0 -1px 0 0 #022c70, inset 0 0.5px 0 0 #81b6ff`.
- **Focus:** Distinct focus ring using CSS variables (`outline` / `box-shadow`) for keyboard navigation.
- **Active/Pressed:** Click transform feedback (`transform: scale(0.97)`).
- **Loading:** Disable interactions, prevent double-clicks, and render a CSS spinner or animated Google Icon without distorting button dimensions. Use `aria-busy="true"`.
- **Disabled:** Reduced opacity (`opacity: 0.5`), greyscale, and `cursor: not-allowed`.
- **Success/Error:** Temporary feedback state styles driven by `--text-success` or `--text-error`.
- **Destructive actions:** `.btn-danger` must be visually distinct in both light and dark themes.

### 2.2 Card Component Requirements
- **Default:** Flexible Flexbox layout, styled with subtle borders and elevation using `--bg-secondary` and CSS variables.
- **Hover:** Elevation/shadow shift or subtle transform (`transform: translateY(-2px)`). Do not use drop shadows on cards except where explicitly specified.
- **Focus-within:** Highlight card borders when a child link or button receives focus.
- **Loading (Skeleton):** Shimmer animation styling defined in CSS to prevent layout jumps.
- **Empty State:** Structured fallback layout featuring a Google Icon and clear guidance text.

**Cluely card variants**
- **Feature Card — Blue Variant:** 24px border-radius, Frost (`#f3f8ff`) background, 24px padding, no shadow. Heading in Geist 20px weight 500 in Carbon. Body in Geist 16px weight 400 in Steel.
- **Feature Card — White Variant:** 24px border-radius for feature cards, or 12px for grid cards, pure white background with 1px Bone (`#e4e4e7`) border, 24px padding, no shadow. Same typography as the blue variant.
- **Three-Column Feature Grid:** Three equal-width cards in a row, each with 12px border-radius, white background, 1px Bone border, product mockup area above a bold heading (Geist 18px weight 600) and body copy. Gap of 24–32px between cards.

### 2.3 Form & Input Requirements
- **States:** Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- **Structure:** Flex container wrapping a label, input field, and dedicated error feedback container.
- **Public input style:** 8px border-radius, 12px padding, 1px Bone border, Geist 14–16px text.
- **Product-mockup input style:** Dark-themed, 8px border-radius, 12px padding, inset shadow `inset 0 2px 20px -1px rgba(0,0,0,0.05)`, placeholder in muted gray, circular Signal Blue send button with a white arrow icon.
- Use `aria-live` regions for dynamic validation feedback.

### 2.4 Modal / Popup Requirements
- **States:** Opening, Open, Loading, Success/Error, Closing, all animated via CSS transitions.
- **UX Features:** Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, and support for closing via `Esc` or overlay clicks.

---

## 3. Core UX & Micro-Interaction Rules to Enforce

- **Responsive by Default:** Fluid sizing and responsive breakpoints without horizontal overflow.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility (a11y):** Sufficient contrast in both light and dark modes. Never rely solely on color to communicate state. Require semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, and `aria-live` regions for dynamic feedback.
- **Mandatory Visual Feedback:** Every user click, hover, or submission must trigger a visible state change.
- **Destructive Actions:** Generic `.btn-danger` or delete actions must be visually distinct in both light and dark themes.

---

## 4. Deliverable & Output Format

- **File Structure:** Separate `index.html`, `style.css`, and `script.js` files.
- **Naming Convention:** Use one consistent class-naming convention (BEM or a fixed utility set) across the entire deliverable. Never mix conventions.
- **No Unrequested Placeholders:** Do not submit lorem-ipsum-only content where real copy/labels are expected. Write concise, original, fictional copy for every section. Placeholders are allowed only where content was genuinely left unspecified.
- **No real brand usage:** Invent all names, labels, testimonials, pricing plans, and FAQ content. Do not use “Cluely,” real logos, trademarks, or product names.

---

## 5. Cluely-Inspired Theme Specification (Visual Style Only)

### 5.1 Overall Visual Direction
- Atmospheric SaaS aesthetic with a dramatic blue gradient hero.
- Pair a large editorial serif display headline (EB Garamond at 80px) with a precise modern sans-serif (Geist) for all functional UI.
- One vivid blue accent (`#3c83f6`) powers the primary CTA; everything else stays achromatic with soft cool-gray neutrals.
- Components are compact and lightweight: 4px-radius buttons, 12–24px-radius cards, hairline borders in `#e4e4e7`, and no decorative shadows.
- Product screenshots are presented as floating, slightly tilted laptop frames; the app is the hero, not abstractions.

### 5.2 Typography Rules
- **Display headline:** EB Garamond, 80px, weight 500, white text over the blue gradient, line-height 1.02, letter-spacing `-0.012em`, centered. Use this only for the hero h1.
- **Section headings:** Geist, 36–48px, weight 500, Carbon (`#18181b`), tight negative letter-spacing (`-0.031em` at 36px, `-0.036em` at 48px), line-height 1.20–1.13.
- **Subheadings:** Geist, 18–20px, weight 400, Steel (`#5e616e`).
- **Body:** Geist, 16px, weight 400, Carbon or Steel, line-height 1.5, letter-spacing `-0.01em`.
- **Captions/labels:** Geist, 10–12px, weight 500, Fog or Mist, uppercase where appropriate with `0.15em` tracking.
- **Monospace:** `ui-monospace`, 10px, weight 400, only for technical labels inside product mockups.
- Do not use EB Garamond for anything except the 80px hero display headline.

### 5.3 Color & Surface Rules
- Use `#e4e4e7` (Bone) for all hairline borders at 1px. Step to `#d7d7d7` only for secondary dividers.
- Apply tight negative letter-spacing at large sizes.
- Use Frost (`#f3f8ff`) for the first card or band after the hero to carry atmospheric blue downward.
- Show product screenshots inside 16px-radius laptop frames, floating without drop shadows. The dark app UI inside the frame is the focal point.
- Use the blue gradient only for the hero and primary CTA shadow base, never for full-page backgrounds.
- Do not introduce additional saturated colors beyond Signal Blue.
- Do not use Neon green (`#00ff26`) as a functional status color; it is decorative only. For success states, use a muted green or bordered tag.
- Do not use card border-radius values outside 12–24px for content cards. 4px is for buttons only; 32px+ is for pill shapes.
- Do not use white-on-white surfaces without a border or tint.

### 5.4 Gradient & Imagery
- Hero gradient: radial or linear blue gradient from sky blue (`#73a8e8` / `#1e82e0`) through deep blue (`#1c38ea`) to mountain-indigo (`#022c70` / `#0544a5`).
- Add a subtle mountain landscape illustration overlay using CSS gradients/shapes only. Do not use external images or inline SVG icons.
- Product mockup frames: slightly perspective-tilted laptop frame with 16px border-radius, containing a dark-themed product UI mockup built with CSS. No external images.
- No lifestyle photography, stock imagery, or abstract decorative graphics beyond the gradient and product frames.

### 5.5 Layout
- Page centered at max-width `1200px` with full-bleed sections.
- Hero is a full-viewport atmospheric gradient with centered serif headline and a product mockup floating in the lower half.
- Below the hero, transition to a white workspace with alternating card-based sections.
- Sections separated by 64px vertical gaps.
- Top nav is minimal: logo left, 3 links center, CTA right. Transparent over hero, switching to white on scroll.
- Content density is compact: cards have 24px padding, elements have 8–12px gaps.

---

## 6. Required Page Sections & Content

### 6.1 Top Navigation
- Logo wordmark at 20px Geist weight 600.
- 3 nav links centered: Features, How It Works, Pricing.
- Primary CTA on the right at smaller scale (12px text, 4px radius).
- Transparent over hero with white text; switch to white background with Carbon text on scroll using a JS scroll class.
- Responsive mobile menu with accessible toggle button.

### 6.2 Hero
- Full-bleed blue gradient background.
- Centered EB Garamond 80px white headline (invented fictional headline).
- Geist subheading in soft white/light gray.
- Primary CTA plus secondary CTA.
- Floating product mockup frame in the lower half, slightly tilted, containing a dark CSS-built app UI.
- Optional small announcement pill above the headline.

### 6.3 Features (3 Cards)
- Three equal-width cards in a row, responsive to one column on mobile.
- Each card: 12px border-radius, white background, 1px Bone border, product mockup area, heading (Geist 18px weight 600), body copy.
- Gap of 24–32px.
- The first card may use the blue Frost variant as a highlight.

### 6.4 How It Works (3 Steps)
- Three steps in a responsive row.
- Each step has a numbered badge, Geist heading, and body copy.
- Use Frost-tinted or white cards with 12–24px radius and 24px padding.
- Include connecting visual rhythm (spacing or subtle lines) without decorative clutter.

### 6.5 Testimonials
- 3 testimonial cards in a responsive grid.
- Each includes a quote, fictional name, fictional role, and an avatar circle using initials (no photos).
- White cards with 1px Bone border and 12–24px radius.

### 6.6 Pricing (3 Tiers)
- 3 pricing cards in a responsive row.
- Each includes plan name, price, feature list with Material Symbols check icons, and CTA.
- Middle tier visually highlighted with Signal Blue border or Frost background.
- Use `.btn-primary` for the highlighted tier and `.btn-secondary` for others.

### 6.7 FAQ
- Accessible accordion using buttons with `aria-expanded` and `aria-controls`.
- Each item has a question and answer panel.
- Style with Bone borders and compact padding.
- Keyboard operable and screen-reader friendly.

### 6.8 Final CTA
- Centered section with Frost-tinted background.
- Invented headline and supporting copy.
- Primary CTA and optional secondary CTA.
- No full-page gradient.

### 6.9 Footer
- Top border in Bone.
- Columns of secondary links (Product, Company, Resources, Legal).
- Fictional logo wordmark and copyright.
- Links in Steel/Fog with hover state.
- Responsive stacking on mobile.

---

## 7. Dark Mode & Interaction Requirements for This Page

- Implement a theme toggle in the nav with `aria-pressed` and `aria-label`.
- Persist theme choice in `localStorage`; fall back to `prefers-color-scheme`.
- Add `.dark` class to `<html>` or `<body>` when active.
- Ensure all cards, borders, text, buttons, and mockups remain legible in dark mode.
- Respect `prefers-reduced-motion` for all transitions and hover effects.

---

## 8. Accessibility Requirements for This Page

- Use semantic elements: `header`, `nav`, `main`, `section`, `footer`, `button`, etc.
- Provide skip link to main content.
- Ensure focus states are visible in both themes.
- Use `aria-live` for form validation or dynamic feedback if any input is present.
- Ensure color contrast meets WCAG AA in both light and dark modes.
- Do not rely on color alone for success/error states.

---

## 9. JavaScript Requirements

- `script.js` may handle:
  - Theme toggle and persistence
  - Nav scroll state
  - Mobile menu
  - FAQ accordion
  - Modal open/close if used
- Keep JavaScript behavioral and unobtrusive.
- Do not put validation or popup logic in CSS.
- No inline scripts beyond the deferred entry-point reference.

---

## 10. Final Instruction

Generate the complete landing page as three separate files: `index.html`, `style.css`, and `script.js`. Follow every rule above. Use the Cluely-inspired visual style only; invent all brand, product, and content details. Do not use real brand names, logos, trademarks, or product names anywhere in the page.
