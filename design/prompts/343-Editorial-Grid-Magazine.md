**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-quality Landing Page in the **Editorial Grid / Magazine** style (Luxury & Editorial category) on the first attempt. Follow every rule in this document exactly. All user-facing copy must be written in English.

**Objective:** A single-page landing site with a sticky header (navigation + theme toggle), then: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, and Footer with secondary links. Design language: print-inspired magazine — asymmetric grid, editorial typography, pull quotes, drop caps, multi-column text, bylines, section dividers, generous white space.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
All styling must live in a dedicated `style.css` file:

* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML. Inline event-handler attributes (`onclick="..."`, etc.) are also forbidden.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be applied via class or ID selectors defined in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and style-agnostic. Changing the site's look must only require editing the CSS file, never the markup.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store all visual tokens in `:root` (and theme overrides) as CSS variables:

* **Required Color Tokens:** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
* **Concrete Palette (Light Mode):** `--bg-primary: #fefefe` (paper — **never `#ffffff`**), `--bg-secondary: #F4F1EC` (warm paper gray), `--text-primary: #0A0A0A` (near-black ink; pure `#000000` permitted for text and max-contrast accents), `--text-secondary: #55524C`, `--primary: #9B1B30` (oxblood editorial accent), `--secondary: #8A8578` (muted taupe), `--border-default: #E3DED6`.
* **Concrete Palette (Dark Mode):** `--bg-primary: #0E0D0B` (ink), `--bg-secondary: #171512`, `--text-primary: #F5F2EC`, `--text-secondary: #A8A29A`, `--primary: #D0627A` (brightened accent — verify ≥ 4.5:1 contrast on dark surfaces and adjust lightness if needed), `--border-default: #2E2A25`.
* **Contrast Pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token — enforce this pairing in **both** themes, not just the default.
* **Radius & Shadows:** `--radius-sm: 2px`, `--radius-md: 4px`, `--radius-lg: 8px`, `--shadow-sm`, `--shadow-md` (keep shadows restrained — editorial/print aesthetics favor hairline borders over heavy elevation).
* **Spacing & Transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
* **Elevation/Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast` to prevent overlap conflicts between the sticky header, mobile menu, and any overlays.
* **Typography Tokens:** `--font-display` (headline serif), `--font-base` (body serif), `--font-sans` (UI labels), plus `--gap-sm`, `--gap-md`, `--gap-lg` for the asymmetric gap variations.

**1.3 Mandatory Dark Mode Support**
Dark Mode must always be defined:

* **Implementation:** Provide dark mode tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class selector; the class must take precedence over the media query.
* **Theme Switching:** Background and text variables must swap seamlessly with no HTML restructuring.
* **Persistence:** Persist the user's choice in `localStorage` (e.g., key `"theme"`), falling back to `prefers-color-scheme` on first visit. The single deferred `script.js` must apply the stored theme immediately on execution to minimize flash-of-wrong-theme.
* **Toggle Control:** A visible theme toggle button in the header using a Google Material Symbol (`dark_mode` / `light_mode`), with correct `aria-pressed` state and a dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").

**1.4 Layout Standards — Grid (Macro) + Flexbox (Micro), Mobile-First**

* **Macro Editorial Grid:** Build each major section with `display: grid` and `grid-template-areas` (named areas), redefining the areas at breakpoints; all grids must collapse to a single column on small viewports.
* **Flexbox Default Alignment Rule:** Every flex container must default to `align-items: center` unless there is an explicitly justified exception (e.g., `stretch` for equal-height pricing cards).
* **Explicit Exception Clause:** CSS Grid is authorized for macro page/section layout because this editorial specification demands named-area asymmetric grids; Flexbox remains mandatory for all component-internal alignment.
* **Mobile-Friendly First:** All layouts must be responsive out of the box with no horizontal scrolling at any viewport. Use fluid type via `clamp()` and a body text measure of ~65–75ch.

**1.5 CSS Architecture**
Use clean custom CSS driven by Tailwind's `@layer` discipline: organize `style.css` into cascade layers (`@layer tokens, base, layout, components, utilities`). Editorial techniques (`::first-letter`, `column-count`, `grid-template-areas`) require native CSS — do not substitute utility-class soup. All reusable patterns must be generic classes (`.btn`, `.card`, `.input-group`, `.section`, `.lede`) mapped to CSS variables.

**1.6 Typography & Icons (Google Fonts Mandatory)**

* **Text:** Load via Google Fonts `<link>` with `preconnect`: **Fraunces** (display serif for headlines), **Newsreader** (body serif), **Inter** (sans for labels, buttons, nav). Bind them to `--font-display`, `--font-base`, `--font-sans`.
* **Icons:** Use Google Material Symbols (Outlined) exclusively. Raw inline SVGs, local icon files, and emoji-as-icons are forbidden.
* **Editorial Typographic Devices:** Drop caps via `::first-letter` on designated `.lede` paragraphs (floated, ~3–4em display serif, accent color). Pull quotes styled as `blockquote` with an oversized quotation glyph via `::before` content and a byline `cite`/`figcaption`. Multi-column body text via `column-count: 2` with `column-gap` and an optional `column-rule: 1px solid var(--border-default)`; collapse to one column below 640px. All imagery wrapped in `figure` / `figcaption`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
Style all states via CSS classes (`.btn`, `.btn--primary` solid ink: black-on-paper in light mode, paper-on-ink in dark mode; `.btn--ghost` outlined; `.btn--accent`; `.btn--danger`):

* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; uppercase, letter-spaced sans label.
* **Hover:** Visual shift (brightness/offset shadow) with `cursor: pointer`.
* **Focus:** Distinct visible focus ring using CSS variables (`box-shadow`/`outline`) for keyboard navigation.
* **Active/Pressed:** `transform: scale(0.97)` click feedback.
* **Loading:** Disables interaction, prevents double-clicks, and renders a CSS spinner or rotating Google Material Symbol without distorting button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** Temporary feedback state styles driven by `--text-success` / `--text-error`, announced via an `aria-live` region.

**2.2 Card Component** (Features, Pricing tiers, Testimonials)

* **Default:** Flexible grid/flex layout styled with `--bg-secondary` or paper surfaces, hairline `--border-default` borders, `--shadow-sm`. Features cards must **not** render as a uniform equal-width row on desktop — stagger or offset them per the asymmetric editorial grid.
* **Hover:** `transform: translateY(-2px)` with a subtle shadow shift.
* **Focus-within:** Card border highlights when a child link/button receives focus.
* **Loading (Skeleton):** Shimmer animation defined in CSS, reserving dimensions to prevent layout jumps, for any asynchronously loaded imagery.
* **Empty State:** Structured fallback layout (Material Symbol + clear guidance text) defined for any dynamically loaded region.

**2.3 Form & Input Requirements** (Final CTA newsletter signup)

* **Structure:** Flex container `.input-group` wrapping a `<label>`, an `<input type="email">`, and a dedicated error-feedback element.
* **States:** Empty, Focused (outline ring), Filled, Valid (success border + check icon), Invalid (error border, `--text-error` message text, error icon), Disabled, Read-only.
* **Behavior:** JS validation with `aria-live="polite"` feedback; never rely on color alone (icon + text). Submit shows loading → success state on the button.

**2.4 FAQ Accordion**

* Use the `<button aria-expanded>` + controlled region pattern with `aria-controls`; chevron Material Symbol rotates on toggle; expansion animated in CSS (e.g., `grid-template-rows: 0fr → 1fr`); fully keyboard operable with visible focus states.

**2.5 Modal / Popup** (conditional — only if used, e.g., pricing detail overlays)

* **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
* **UX Features:** Centered flex container (`align-items: center`), backdrop overlay, Google Material Symbol close button, keyboard focus trapping, `aria-modal`, close via `Esc` or overlay click, and focus restoration on close.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Fluid sizing and breakpoints with zero horizontal overflow; all grids/flex rows convert to columns on small viewports.
* **Smooth Scroll:** `scroll-behavior: smooth` with `scroll-margin-top` on anchored sections (offsetting the sticky header); revert to `auto` under `prefers-reduced-motion`.
* **Reveal on Scroll:** `IntersectionObserver` toggles an `.is-visible` class; CSS transitions with staggered delays. Content must be fully visible without JavaScript (progressive enhancement — never hide content by default in CSS alone).
* **Parallax Images:** Subtle `translateY` drift on hero/section imagery via a `requestAnimationFrame` scroll listener; disabled under `prefers-reduced-motion`.
* **Text Animations:** Masked line-reveal or fade-up on the hero headline, CSS-driven, with a reduced-motion fallback.
* **Page-Flip Transitions:** Testimonials render as a 3D `rotateY` page-flip viewer cycling through quotes, with prev/next buttons, keyboard support, and an `aria-live` region announcing the current quote; fall back to a simple fade under reduced motion.
* **Smooth Animations:** All state changes use `transition: var(--transition-normal)` / `var(--ease-standard)`; a global `prefers-reduced-motion: reduce` override must neutralize all animations, transitions, parallax, and smooth scrolling.
* **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes (≥ 4.5:1 for body text). Never rely solely on color to communicate state. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, a skip-to-content link, and `aria-live` regions for dynamic feedback (form errors, testimonial changes, loading states).
* **Mandatory Visual Feedback:** Every click, hover, or submission triggers a visible state change.
* **Destructive Actions:** Any `.btn--danger` / delete action must be visually distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer>`).
* **Naming Convention:** BEM (`block__element--modifier`) consistently across the entire deliverable — never mix conventions.
* **No Unrequested Placeholders:** Write realistic, on-brand luxury-editorial copy in English throughout — invent a fitting brand name, headlines, bylines, testimonial names/roles, FAQ Q&A pairs, and pricing tier names and features. Lorem-ipsum-only submissions are prohibited. Imagery may use `https://picsum.photos/seed/<seed>/<width>/<height>.jpg` placeholders with descriptive `alt` text and real `figcaption` captions.
* Deliver complete, runnable code on the first attempt.

---

## 5. PROJECT SPECIFICATION — EDITORIAL GRID / MAGAZINE

**5.1 Design Direction**
Asymmetric grid, pull quotes, drop caps, multi-column text, large imagery, bylines, section dividers (hairline rules plus oversized folio numerals like "01 — Features"), print-inspired typography, clear article hierarchy, and deliberate white-space balance. Era: 2020s Editorial Digital. Luxury restraint: sharp corners, hairline borders, generous margins, high-contrast ink-on-paper surfaces.

**5.2 Sections (build order)**

1. **Header (sticky):** Masthead-style brand name in display serif; anchor navigation (Features, How It Works, Testimonials, Pricing, FAQ); theme toggle; accessible mobile hamburger menu (Material Symbol `menu`/`close`, keyboard operable, closes on `Esc` and overlay tap, managed focus).
2. **Hero:** Named-area asymmetric grid combining an oversized display headline (`clamp()` up to ~7rem), kicker eyebrow, byline line, issue-style metadata ("Issue No. 01 — 2025"), a drop-cap `.lede` paragraph, a large `figure`/`figcaption` feature image, and two CTAs (`.btn--primary`, `.btn--ghost`).
3. **Features — 3 cards:** Editorial "departments" on an asymmetric grid (e.g., 7/5 column split with offset rows); each card pairs a numeral or Material Symbol, title, measured body text, and a hairline divider.
4. **How It Works — 3 steps:** Oversized display-serif folio numerals ("01", "02", "03"), step titles, descriptions, connected by hairline dividers; vertical stack on mobile.
5. **Testimonials:** Pull-quote `blockquote`s with oversized quote glyphs, display-serif italic quotes, and bylines (name — role); optional round avatar imagery; page-flip carousel through three quotes.
6. **Pricing — 3 tiers:** Print-inspired rate card; equal-height grid with the middle tier highlighted (accent border/fill, "Most Popular" tag); each tier includes name, price, feature list with `check` Material Symbols, and a CTA button; stacks on mobile.
7. **FAQ:** Accordion with 5–6 realistic Q&A pairs per Section 2.4.
8. **Final CTA:** Full-bleed inverted ink section (swap `--bg-*`/`--text-*` token pairing via a `.section--inverse` class so contrast pairing holds in both themes), a large display-serif statement, and the newsletter `.input-group` with `.btn--primary` submit.
9. **Footer:** Secondary link columns (Company, Resources, Legal), social icons via Material Symbols, a colophon line ("Set in Fraunces & Newsreader"), and a copyright line with a dynamically generated year.

**5.3 CSS Technical Requirements**

* `display: grid` with `grid-template-areas` for the hero and all major sections; media queries redefine the named areas per breakpoint.
* `column-count: 2` (with `column-gap` and `column-rule`) for long-form text blocks; single column below 640px.
* `::first-letter` drop caps on `.lede` paragraphs.
* Styled `blockquote` pull quotes; `figure` / `figcaption` for all imagery.
* Gap variations: asymmetric section gaps via `--gap-sm` / `--gap-md` / `--gap-lg`.
* Serif body (`--font-base: Newsreader`), display-serif headlines (`--font-display: Fraunces`), sans labels (`--font-sans: Inter`); fluid sizes via `clamp()`; variable widths with a ~65–75ch measure.

**5.4 Color & Contrast Enforcement**

* Palette: ink black `#000000` (text and max-contrast accents; near-black `#0A0A0A` for large dark surfaces), paper `#fefefe` (**never `#ffffff`**), oxblood accent `#9B1B30` (light) / brightened `#D0627A` (dark), muted taupe secondary, warm paper-gray secondary background.
* Enforce light/dark token pairing in both themes. Where the accent fails 4.5:1 as text on a given surface, restrict it to borders, underlines, and large display type only.
