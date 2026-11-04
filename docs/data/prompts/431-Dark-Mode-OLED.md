# Landing Page Build Prompt — "Dark Mode (OLED)" Theme

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality Landing Page on the first attempt. Follow every rule below exactly. Do not ask clarifying questions.

**Theme:** Dark Mode (OLED) — Dark, High-Contrast, Eye-Friendly, Power-Efficient. 2020s Modern. Dark mode only (no light mode toggle — see exception clause in 1.3).

**Sections Required (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. **No `style="..."` attributes anywhere in the HTML.**
- Target everything via class or ID selectors only.
- HTML must remain semantic and agnostic of visual styling.

### 1.2 CSS Variables & Theme Tokens
Define all tokens in `:root`:
- **Colors:** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- **OLED palette mapping:** `--bg-primary: #000000`, `--bg-secondary: #121212`, midnight blue `#0A0E27` for section alternation/depth. Text: `--text-primary: #FFFFFF`, `--text-secondary: #E0E0E0`. Vibrant accents: Neon Green `#39FF14`, Electric Blue `#0080FF`, Gold `#FFD700`, Plasma Purple `#BF00FF` — assign one accent per section type (e.g., green for success/CTA, blue for links, gold for pricing highlight, purple for testimonials) so the page feels cohesive, not rainbow-noise.
- **Contrast pairing:** Dark backgrounds always pair with light text tokens. Verify WCAG AA contrast for all text.
- **Radius/Shadows:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- **Spacing/Transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- **Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.
- Set `color-scheme: dark` on `:root`.

### 1.3 Dark Mode — Exception Clause
This project is **dark-only by explicit user request**. Do NOT build a light theme, a `.dark` class, or a theme toggle. However, still define all colors via CSS variables (never hardcode hex values in component rules) so a theme could be added later. Skip the `localStorage` theme-persistence requirement — it does not apply.

### 1.4 Flexbox Layout & Mobile-First
- Build all layouts with Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-first: card grids (Features, Pricing, Testimonials) stack in a single column on small viewports and expand to 3-column rows via `flex-wrap` and media queries. No horizontal scrolling at any viewport width.

### 1.5 Framework Default
Use clean custom CSS in `style.css` organized with logical comment sections (tokens, base, layout, components, sections, responsive). All component styles must use reusable class names (`.btn`, `.card`, `.section`, `.container`). Do not use Tailwind unless it maps utilities back to the CSS variables above.

### 1.6 Typography & Icons
- **Fonts:** Google Fonts — use **Inter** (headings and body) via `<link>` tag; bind to `--font-base`.
- **Icons:** Google Material Symbols only, loaded via the official `<link>`. **No inline SVGs, no local icon files.**

---

## 2. COMPONENT SPECIFICATIONS

### 2.1 Buttons
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` Minimum 44x44px touch target. Primary CTA uses the neon green accent with black text (high contrast on OLED).
- **Hover:** Subtle brightness/glow shift (`text-shadow: 0 0 10px` accent color used sparingly) with `cursor: pointer`.
- **Focus:** Distinct visible focus ring (2px accent outline with offset) — mandatory for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interaction, shows a CSS spinner or animated Google Icon without changing button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Feedback states using `--text-success` / `--text-error`.
- **Danger variant:** `.btn-danger` must be visually distinct (red border/text on dark).

### 2.2 Cards (Features, Pricing, Testimonials)
- **Default:** Flexbox layout, `--bg-secondary: #121212` background, subtle `--border-default` border, `--radius-lg`, `--shadow-sm`.
- **Hover:** `transform: translateY(-2px)` with shadow/glow shift.
- **Focus-within:** Border highlights when a child link/button receives focus.
- **Skeleton:** Define shimmer animation CSS (even if unused on a static page, include the class).
- **Empty state:** Define a fallback layout class with a Google Icon and guidance text.
- **Pricing highlight:** The middle tier gets a distinct treatment — gold accent border, "Most Popular" badge, slightly elevated shadow.

### 2.3 Forms & Inputs (FAQ search or Final CTA email capture, if included)
- **States:** Empty, Focused (outline ring), Filled, Valid (success border + icon), Invalid (error border, error text, error icon), Disabled, Read-only.
- **Structure:** Flex container wrapping label, input, and a dedicated error feedback element with `aria-live="polite"`.

### 2.4 Modals / FAQ Accordions
- FAQ items: use `<details>`/`<summary>` or ARIA-compliant custom accordion with keyboard operability, animated open/close via CSS transitions, visible focus on the toggle, and a rotating chevron Google Icon.
- If any modal exists: centered flex container, backdrop overlay, Google Icon close button, focus trapping, `Esc` and overlay-click closing, animated opening/closing states.

---

## 3. UX & MICRO-INTERACTION RULES

- **Responsive by default:** Fluid sizing, no horizontal overflow, breakpoints at ~480px, ~768px, ~1024px.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes. Respect `prefers-reduced-motion: reduce` by disabling transforms and glow animations.
- **Accessibility:** WCAG AA contrast in all text. Never rely on color alone to communicate state. Semantic HTML5 (`header`, `main`, `section`, `nav`, `footer`, `h1`–`h3` hierarchy), ARIA labels on custom widgets, logical focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- **Visual feedback:** Every interactive element (buttons, links, FAQ toggles, pricing buttons) shows a visible state change on hover/focus/active.
- **Glow discipline:** `text-shadow: 0 0 10px <accent>` used sparingly — hero headline accent word, primary CTA hover, and pricing badge only. Body text stays glow-free for eye comfort and OLED power efficiency.
- **OLED optimization:** True black `#000000` for the main background (maximizes power savings on OLED panels), `#121212` for elevated surfaces, `#0A0E27` for section depth alternation. Avoid large low-contrast grey-on-grey areas.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — fully separated. No inline `<script>` beyond one deferred `<script src="script.js" defer></script>` reference. No inline styles.
- **Naming:** BEM convention consistently (`.card`, `.card__title`, `.card--featured`, `.pricing__tier`, `.faq__item`). Never mix conventions.
- **Copy:** Write all user-facing copy in **English**. No lorem ipsum — write real, theme-appropriate marketing copy for a dark-mode/OLED-optimized product (e.g., an app or service whose brand identity is "built for the night"). Each section needs a real headline and supporting copy.
- **Content requirements:**
  - **Hero:** Headline with one glow-accented word, subheadline, primary CTA + secondary CTA.
  - **Features:** 3 cards, each with a Material Symbol icon, title, and description.
  - **How It Works:** 3 numbered steps with connecting visual flow.
  - **Testimonials:** 3 quotes with names/roles.
  - **Pricing:** 3 tiers (Free, Pro/featured, Team) with feature lists and buttons.
  - **FAQ:** 5–6 accordion items.
  - **Final CTA:** Full-width dark section with strong headline and button.
  - **Footer:** Brand, secondary link columns, social links (Material Symbol icons), copyright.
- **JS scope:** Only minimal, progressive-enhancement JS (e.g., FAQ accordion behavior, smooth scroll, current-year in footer). No frameworks, no build tools.
