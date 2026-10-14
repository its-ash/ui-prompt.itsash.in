You are a Senior Frontend Engineer and Expert UI Designer. Your mission: build a complete, production-ready landing page in the **"Utopian Solarpunk"** theme — optimistic, green, futuristic-organic, set in a near-future sustainable utopia. Deliver the full final code in your first response; do not ask clarifying questions. **All user-facing copy, comments, labels, and class names must be written in English.**

---

## 0. DESIGN BRIEF & THEME TOKENS

**0.1 Mood & Keywords**
Solarpunk, utopian, green technology, organic architecture, sustainable, lush, botanical, optimistic future, community, renewable energy. The page should feel like a living, sunlit garden city — warm, hopeful, and technologically advanced.

**0.2 Color System** — bind every color to a CSS variable; no hard-coded hex values outside `:root`:

| Token | Light Mode ("Daylight Garden") | Dark Mode ("Night Garden") |
|---|---|---|
| `--primary` | `#2D6A4F` Verdant Green | `#52B788` Moss |
| `--secondary` | `#FFB703` Solar Gold | `#FFB703` Solar Gold |
| `--accent-sky` | `#219EBC` Sky Blue | `#6FC6E5` |
| `--accent-lavender` | `#C7B8EA` Soft Lavender | `#C7B8EA` |
| `--bg-primary` | `#FFF8E7` Warm White | `#0C2016` Deep Forest |
| `--bg-secondary` | `#F2F8E8` Pale Botanical | `#143524` Bioluminescent Panel |
| `--text-primary` | `#1B4332` Deep Forest Green | `#FFF8E7` Warm White |
| `--text-secondary` | `#6B4226` Earth Brown | `#A9C6AE` Pale Moss |
| `--text-success` | `#2D6A4F` | `#52B788` |
| `--text-error` | `#C1440E` Terracotta | `#FF9E6B` Brightened Terracotta |
| `--border-default` | `#52B788` Moss | `#3E7A5A` |
| `--border-success` / `--border-error` | `#52B788` / `#C1440E` | `#52B788` / `#FF9E6B` |
| `--gradient-sky` | `linear-gradient(180deg, #87CEEB, #FFF8E7)` | `linear-gradient(180deg, #0F2B3D, #0C2016)` |
| `--glass-bg` | `rgba(255,248,231,0.6)` | `rgba(20,53,36,0.55)` |

* **Contrast pairing:** every light background token pairs with a dark text token and vice versa — enforced in **both** themes. Solar Gold, Sky Blue, and Moss backgrounds must **always** carry dark text (`--text-primary`); never place white text on gold.
* **Never use `#ffffff`.** The theme's white is Warm White `#FFF8E7`; if a stark surface is truly needed, use `#fefefe`.
* Verify all text/background pairs reach ≥ 4.5:1 in both modes.

**0.3 Typography & Icons**
* Font: **Nunito** (Google Fonts, weights 400/600/700/800/900), bound to `--font-base: 'Nunito', sans-serif`. Used for all headings and body text.
* Icons: **Google Material Symbols** (Rounded variant). Suggested: `eco`, `solar_power`, `recycling`, `volunteer_activism`, `energy_savings_leaf`, `water_drop`, `check_circle`, `expand_more`, `close`, `format_quote`, `light_mode`, `dark_mode`.

**0.4 Signature Visual Effects** — all implemented in pure CSS:
* **Gradient skies:** hero and Final CTA use `var(--gradient-sky)` with `background-blend-mode: overlay` over a subtle botanical pattern layer.
* **Organic vine borders:** `border: 2px solid var(--border-default); border-radius: var(--radius-lg)` with vine/leaf flourishes built from `::before`/`::after` pseudo-elements (curved gradients, leaf shapes via `border-radius`).
* **Solar flare animation:** `@keyframes solar-pulse` (4s ease-in-out infinite) — a soft ambient glow breathing on the hero sun disc and gold accents via animated `box-shadow`/`opacity`.
* **Leaf particle effects:** 8–10 static `span.leaf` elements (`aria-hidden="true"`, CSS leaf shapes or Material Symbol `eco`/`spa`) drifting across the hero via `@keyframes leaf-drift` with varied durations/delays. No JS required.
* **Curved glass panels:** `backdrop-filter: blur(8px)`, `background: var(--glass-bg)`, `border-radius: 20px+`.
* **Soft ambient glow:** `--shadow-md: 0 8px 24px rgba(45,106,79,0.15)`; `--shadow-sm: 0 4px 12px rgba(45,106,79,0.10)`.
* **Living architecture patterns:** subtle `repeating-radial-gradient` textures on alternating section backgrounds.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* **No Inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** all design properties, layout rules, and states are targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML stays clean, semantic (HTML5 landmarks), and styling-agnostic — changing the look must only require editing `style.css`.

**1.2 CSS Variables & Theme Tokens**
* All tokens from Section 0.2 live in `:root`; dark mode overrides live in both `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
* Also define: `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 20px`, `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`, `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 1100`, `--font-base`.

**1.3 Mandatory Dark Mode Support**
* **Implementation:** full "Night Garden" token set (Section 0.2) under `@media (prefers-color-scheme: dark)` and `.dark`; switching variables must restyle the page with zero HTML restructuring.
* **Persistence:** store the user's choice in `localStorage`; fall back to `prefers-color-scheme` on first visit. Provide a visible toggle (header) with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode"), swapping Material Symbols `light_mode`/`dark_mode`.
* **Exception (source-spec override):** the source style spec marks Dark Mode as "No" — this is explicitly overridden: Dark Mode is mandatory and must ship as the "Night Garden" theme.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox (`display: flex`).
* **Default Alignment Rule:** every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* **Mobile-Friendly First:** all flex rows convert to columns on small viewports (breakpoints ~640px/768px/1024px); no horizontal scrolling at any width.

**1.5 CSS Architecture**
* **No CSS framework.** Use clean, hand-written custom CSS (the permitted alternative to Tailwind) — the organic effects demand bespoke keyframes and pseudo-elements. Organize `style.css` with native `@layer reset, base, components, utilities` and commented section dividers.
* All themed components are generic reusable classes bound to CSS variables: `.btn`, `.card`, `.input-group`, etc.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Include the Google Fonts `<link>` for Nunito and the Material Symbols stylesheet; bind Nunito to `--font-base`.
* **Inline SVGs and local icon files are forbidden.**
* **Exception (decorative illustration):** although the visual direction calls for "botanical illustrations," the no-SVG rule stands — all botanical decoration (leaves, vines, sun, patterns) must be crafted in CSS (pseudo-elements, gradients, `border-radius`, `box-shadow`) or rendered with Material Symbols.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component** — `.btn` base + BEM modifiers; all states styled via CSS classes:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px.
* **Variants:** `.btn--primary` (Verdant Green bg, Warm White text), `.btn--secondary` (Solar Gold bg, dark text), `.btn--ghost` (transparent, 2px Moss border), `.btn--danger` (Terracotta bg, white text).
* **Hover:** brightness/shadow shift with `cursor: pointer`.
* **Focus:** distinct focus ring via `outline`/`box-shadow` using CSS variables — visible in both themes.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading:** disables interactions, prevents double-clicks, renders a CSS spinner or animated Material Symbol without changing button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.

**2.2 Card Component** — applies to feature, testimonial, and pricing cards:
* **Default:** flexible flex layout, `--bg-secondary` surface, 2px `--border-default`, `--radius-lg`, `--shadow-sm`.
* **Hover:** elevation shift to `--shadow-md` and/or `transform: translateY(-2px)`.
* **Focus-within:** card border highlights to Solar Gold when a child link/button receives focus.
* **Loading (Skeleton):** shimmer `@keyframes` defined in CSS, preserving layout dimensions.
* **Empty State:** structured fallback with a Material Symbol and clear guidance text.

**2.3 Form & Input Requirements** — used in the Join modal (name + email):
* **States:** Empty, Focused (outline ring), Filled, Valid (success border + `check_circle` icon), Invalid (error border, error text, error icon), Disabled, Read-only.
* **Structure:** `.input-group` flex container wrapping a `<label>`, the input, and a dedicated error feedback container.

**2.4 Modal / Popup Requirements** — the "Join the Community" modal:
* **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
* **UX Features:** centered flex overlay (`align-items: center; justify-content: center`), blurred backdrop, Material Symbol `close` button, keyboard focus trapping, close via `Esc` and overlay click, `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, focus returned to the trigger on close, stacked at `--z-modal`.

**2.5 Accordion (FAQ)**
* Use native `<details>`/`<summary>` styled with BEM classes, or a button pattern with `aria-expanded`/`aria-controls`.
* Chevron (`expand_more`) rotates via CSS; open/close animated in CSS; fully keyboard operable.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** fluid sizing (`clamp()` for headings), responsive breakpoints, zero horizontal overflow.
* **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; under `prefers-reduced-motion: reduce`, disable `solar-pulse`, leaf drift, shimmer, smooth scrolling, and accordion height animations.
* **Accessibility (a11y):** ≥ 4.5:1 contrast in both Light and Dark modes; never rely on color alone (errors = border + icon + text); semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`); correct ARIA roles/labels on the theme toggle, mobile nav, accordion, and modal; logical DOM/focus order; full keyboard operability; `aria-live="polite"` region announcing form errors, loading, and success feedback.
* **Mandatory Visual Feedback:** every click, hover, and submission triggers a visible state change.
* **Destructive Actions:** `.btn--danger` (Terracotta) must be visually distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single `<script src="script.js" defer>` reference; no inline styles.
* **Naming Convention:** BEM exclusively (`block__element--modifier`) for every custom class — never mix conventions.
* **No Unrequested Placeholders:** write original, on-theme English copy for all content — brand name (invent one, e.g., "Evergrow"), hero headline/subhead, 3 features, 3 steps, 3 testimonials (fictional names + roles), 3 pricing tiers (realistic prices and feature lists), 5–6 FAQ Q&As, CTA text, and footer labels. **Lorem ipsum is forbidden.**

---

## 5. PAGE STRUCTURE — SECTION-BY-SECTION SPECIFICATIONS

**5.1 Sticky Header:** brand (Material Symbol `eco` in a Moss circle + wordmark), anchor nav (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle (per Rule 1.3), compact `.btn--primary` CTA. On scroll, the header becomes a curved glass panel. Mobile: nav collapses behind a hamburger (`aria-expanded`, `aria-controls`) at `--z-dropdown`. Anchor links use smooth scrolling (disabled under reduced motion).

**5.2 Hero:** near-full-viewport flex-centered section over `var(--gradient-sky)` with `background-blend-mode: overlay`; a CSS sun disc (radial Solar Gold gradient) pulsing with `solar-pulse`; leaf particles per Rule 0.4; content inside a curved glass panel: eyebrow label, `<h1>`, subhead, and a CTA row — `.btn--primary` "Join the Community" (opens the modal) + `.btn--ghost` "Explore How It Works" (anchor link).

**5.3 Features (3 cards):** section heading (eyebrow + `<h2>` + lede), then a 3-column grid (stacked on mobile) of `.card--feature`: icon badge (Moss circle with `solar_power` / `recycling` / `volunteer_activism`), `<h3>`, paragraph. Full card states per Rule 2.2.

**5.4 How It Works (3 steps):** three `.step` items connected on desktop by a CSS "vine" connector (gradient line with leaf nodes); stacked with a vertical vine on mobile. Each step: gold number badge (01/02/03), Material Symbol icon, `<h3>`, description.

**5.5 Testimonials:** three `.card--testimonial` blocks: `format_quote` icon, quote text, and a footer row with a CSS avatar circle (initials on Moss/Gold/Lavender backgrounds), fictional name, and role.

**5.6 Pricing (3 tiers):** tiers named "Seedling" (free), "Grove", "Canopy" (invent realistic prices). Featured middle tier: Solar Gold "Most Popular" pill badge, `--shadow-md`, slight desktop elevation. Each card: tier name, price, feature list with `check_circle` icons, and a CTA — featured tier uses `.btn--primary`, others `.btn--ghost`; every pricing CTA shows its loading state, then opens the Join modal.

**5.7 FAQ:** 5–6 `<details>` items per Rule 2.5, wrapped in a curved glass or vine-bordered panel.

**5.8 Final CTA:** full-width panel over `var(--gradient-sky)` with a curved glass card: `<h2>`, supporting copy, and `.btn--primary` "Join the Community" opening the modal.

**5.9 Footer:** deep-green band (`--primary` background, Warm White text in light mode; `--bg-secondary` in dark). Flex-wrap layout: brand block (logo + tagline), three secondary link groups (Community: About, Events, Volunteer / Resources: Guides, Blog, FAQ / Company: Contact, Privacy, Terms), social icon row (Material Symbols with `aria-label`), and a bottom bar with copyright (dynamic year via JS) — links may use section anchors or `href="#"` stubs.

**5.10 "Join the Community" Modal:** per Rules 2.3–2.4 — name + email fields with full state coverage, inline validation (email format), simulated submit (loading spinner ~1.2s → success state with `check_circle` and a welcome message, or error state with field-level messages), all feedback announced via `aria-live`.
