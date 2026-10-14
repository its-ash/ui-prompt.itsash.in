**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-ready Landing Page on the first attempt — full files, no partial output, no follow-up questions.

**Project Brief:** A landing page for **StoryTrail**, a fictional app that turns journeys and ideas into hand-painted narrative maps. Theme: **Ghibli-Inspired Narrative Map** — nostalgic, whimsical, soft, anime-fantasy era. The page must feel like a hand-painted story map: digital watercolor washes, soft outlines, character vignettes, organic connecting paths, soft diffuse natural light, and a warm ambient glow.

**Required sections (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. A slim sticky site header is permitted as page chrome (it houses the anchor nav and the mandatory theme toggle).

---

## 0. THEME DIRECTION & VISUAL LANGUAGE

**0.1 Art Direction Summary**
Ghibli-style landing page, watercolor background, narrative map, whimsical design, soft colors, hand-painted look, nature-inspired. All decorative artwork must be drawn with **pure CSS** — layered radial gradients, blurred pseudo-element blobs, asymmetric `border-radius` shapes, and soft box-shadow glows. Any element carrying decorative painted layers must use `position: relative` (per the locked spec) so its pseudo-elements anchor correctly.

**0.2 Locked Design Tokens (bind exactly to CSS variables)**
- Body defaults: `background-color: #FAF8F2; color: #2B2B2B; font-family: 'Quicksand', sans-serif;`
- Elevation: `--shadow-md: 0 4px 15px rgba(0,0,0,0.1);` Rounding: `--radius-md: 15px;`
- Full token set in `:root`: `--primary: #212635` (deep indigo accent), `--secondary: #7CB342` (grass green), `--accent-sky: #4FC3F7`, `--accent-pink: #F48FB1`, `--bg-primary: #FAF8F2` (warm paper cream — never pure white; use `#fefefe` if a near-white is required), `--bg-secondary` (slightly deeper cream, e.g. `#F4EFE4`), `--text-primary: #2B2B2B`, `--text-secondary` (warm muted gray, e.g. `#6E675C`), `--text-success` (darkened green, e.g. `#558B2F`), `--text-error` (warm red, e.g. `#C62828`), `--border-default` (e.g. `rgba(43,43,43,0.14)`), `--border-success`, `--border-error`.
- Shape & motion: `--radius-sm: 8px; --radius-lg: 26px;` plus one organic blob radius for decorative shapes; `--shadow-sm: 0 2px 8px rgba(43,43,43,0.08); --spacing-gap; --transition-fast: 150ms; --transition-normal: 300ms; --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);`
- Stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**0.3 Watercolor Techniques (CSS-only)**
- Backgrounds: layered translucent `radial-gradient` washes in green, sky blue, and soft pink over the cream base.
- Painted blobs: pseudo-elements with asymmetric `border-radius` and `filter: blur()` at low opacity.
- Warm ambient glow: one large soft radial gradient of warm light (sun-like) in the hero and final CTA.
- Soft outlines: 1–2px low-opacity borders only — never hard black lines.
- **Contrast guard:** `#4FC3F7` and `#F48FB1` are decorative-only (washes, icon badges, large shapes) — never body text. Use darkened variants (e.g. `#0277BD`) for any text-level blue.

**0.4 Narrative Map Motif**
- The page reads as a journey: an organic **dashed trail** (dashed borders on curved pseudo-elements) visually connects the Hero → the How It Works waypoints → the Final CTA.
- Testimonials are "traveler's notes": slightly rotated cards with circular initial-based avatars framed by watercolor gradient rings.

**0.5 Typography & Icons**
- Google Fonts: **Quicksand** (weights 400–700) as `--font-base` for all text. One optional accent Google Font (e.g., Caveat) strictly for small hand-lettered map labels and signatures.
- Icons: **Google Material Symbols — Rounded** style only (e.g., `map`, `explore`, `forest`, `eco`, `auto_awesome`, `cloud`, `edit_note`, `favorite`, `check_circle`, `chevron_right`). Explicitly forbidden: inline SVGs, local icon files, emoji used as icons.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- **No Inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** all design properties, layout rules, and states are targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML stays semantic and styling-agnostic; re-theming the site must require editing only the CSS file.

**1.2 CSS Variables & Theme Tokens**
- All visual tokens live in `:root` (and theme classes) exactly as listed in Section 0.2.
- **Contrast Pairing:** every light background token pairs with a dark text token and every dark background token pairs with a light text token — enforced for every theme, not just the default.
- **Light Mode Background:** the warm cream `#FAF8F2` is the default; never `#ffffff` — use `#fefefe` where a near-white is genuinely needed.

**1.3 Mandatory Dark Mode Support**
- Define dark tokens under `@media (prefers-color-scheme: dark)` **and** a `.dark` class; both switch all `--bg-*` / `--text-*` variables seamlessly with zero HTML restructuring.
- **Persistence:** store the user's choice in `localStorage`, fall back to `prefers-color-scheme` on first visit, and expose a visible toggle with correct `aria-pressed` / `aria-label` state.
- Dark palette direction — "Moonlit Forest": deep indigo paper derived from `#212635` (e.g., `--bg-primary: #1B2130; --bg-secondary: #252C3F; --text-primary: #F5F0E4; --text-secondary: #BDB7A9;` borders `rgba(245,240,228,0.14)`), with softened watercolor washes and a cool moonlit glow — never harsh black.
- **Exception clause:** the source style spec marks dark mode "✗ No"; dark mode remains mandatory per project standards, but it must be implemented as this gentle moonlit variant, with the cream light mode as the default presentation.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. Every flex container **defaults to `align-items: center`** unless an exception is explicitly justified in the CSS.
- Mobile-first: rows collapse to columns on small viewports, wrapping is allowed, and horizontal scrolling is impossible at any viewport width.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS composed with `@layer` / `@apply`). All utilities must map back to CSS variables or generic reusable class names: `.btn`, `.card`, `.input-group`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Fonts `<link>` / `@import` tags for Quicksand (plus the optional accent font), bound to `--font-base`.
- Use Google Material Symbols for every icon. Inline SVGs and local icon files are explicitly forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
Style all states via CSS classes:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` with a minimum touch target of 44×44px.
- **Hover:** brightness/shadow shift plus a soft warm glow shadow, with `cursor: pointer`.
- **Focus:** distinct focus ring built from CSS variables (`outline` / `box-shadow`), clearly visible for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)` click feedback.
- **Loading:** disables interactions, prevents double-clicks, and renders a CSS spinner or animated Material Symbol without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback states driven by `--text-success` / `--text-error`.
- **Variants:** `.btn--primary` (indigo `#212635` bg, cream text), `.btn--secondary` (soft outlined), `.btn--danger` (visually distinct in both light and dark themes).

**2.2 Card Component**
- **Default:** flexible Flexbox layout, `--bg-secondary` fill, subtle `--border-default`, `--shadow-sm`, `--radius-md`.
- **Hover:** elevation shift plus `transform: translateY(-2px)`.
- **Focus-within:** card border highlights when a child link/button receives focus.
- **Loading (Skeleton):** shimmer animation defined purely in CSS, with no layout jumps.
- **Empty State:** structured fallback with a Google Material icon and clear guidance text.
- Feature cards each carry one unique watercolor wash (green / blue / pink), an icon badge, a title, copy, and a text link.

**2.3 Form & Input Requirements**
- **States:** empty, focused (outline ring), filled, valid (success border + check icon), invalid (error border, red text, error icon, message), disabled, read-only.
- **Structure:** a flex container wrapping a label, the input field, and a dedicated error-feedback container announced via `aria-live="polite"`.
- Applied to the Final CTA email capture (and any footer newsletter field).

**2.4 Modal / Popup Requirements**
- **States:** opening, open, loading, success/error, closing — all animated via CSS transitions.
- **UX Features:** centered flex container (`align-items: center`), backdrop overlay, Google Material icon close button, keyboard focus trapping, and closing via `Esc` or overlay clicks, layered with `--z-modal`.
- If no modal is used, the FAQ must follow the accordion pattern specified in Section 5.6.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid `clamp()` typography and breakpoints with zero horizontal overflow.
- **Smooth Animations:** `transition: var(--transition-normal)` on all state changes, fully respecting `prefers-reduced-motion` (disable lifts, shimmer, and glow pulses).
- **Accessibility (a11y):** sufficient contrast in both light and dark modes; never rely on color alone to communicate state; semantic HTML5 landmarks (`header`, `main`, `section`, `footer`) with a single `h1` and logical heading order; correct ARIA roles/labels on custom widgets (accordion, toggle, toast, mobile menu); logical DOM/focus order; full keyboard operability; `aria-live` regions for form errors, toasts, and loading states.
- **Mandatory Visual Feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive Actions:** any `.btn--danger` / delete action must be visually distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer>`). No inline styles.
- **Naming Convention:** one consistent convention — **BEM** (`block__element--modifier`, e.g., `.hero__title`, `.feature-card__icon`, `.pricing-card--featured`). Tailwind utilities may be composed via `@apply` inside `style.css` only — never scattered through the HTML. Never mix conventions.
- **JavaScript Scope:** theme toggle + `localStorage` persistence, FAQ accordion, form validation with inline feedback + toast, and the mobile menu toggle — all ARIA-correct.
- **No Unrequested Placeholders:** write real, polished, on-theme **English** copy for StoryTrail — lorem ipsum is prohibited. Placeholders are allowed only where content was genuinely left unspecified (none expected here).
- Load Google Fonts and Material Symbols in `<head>`.

---

## 5. PAGE SECTION SPECIFICATIONS

**5.0 Site Header (chrome):** sticky, translucent cream with backdrop blur; "StoryTrail" wordmark with a small `map` icon; anchor links (Features, How It Works, Testimonials, Pricing, FAQ); the theme toggle (sun/moon Material icons with `aria-pressed` / `aria-label`); collapses to a keyboard-operable hamburger menu on mobile (layered with `--z-dropdown`).

**5.1 Hero:** full-bleed watercolor wash — sky-blue upper wash, grass-green meadow lower wash, warm sun glow, blurred soft-pink blobs; `h1` headline + subheadline about turning journeys into hand-painted maps; two CTAs (`.btn--primary` "Begin Your Story", `.btn--secondary` "See How It Works"); a hand-lettered map-label accent; the dashed narrative trail begins here and flows toward the next section; a subtle scroll cue.

**5.2 Features — 3 cards:** flex row with wrap → single column on mobile; each card: unique watercolor wash, Material icon badge (`edit_note`, `map`, `auto_awesome` or similar), title, 2–3 lines of copy, text link; full hover / focus-within behavior per 2.2.

**5.3 How It Works — 3 map waypoints:** numbered circular badges (01 / 02 / 03) with Material icons, connected by a curved dashed trail (pseudo-elements; vertical on mobile); each step card offset and rotated ≤2deg for a hand-placed feel; step titles and copy (e.g., chart your world → paint your path → share your story).

**5.4 Testimonials — traveler's notes:** 3 quote cards with slight rotation; circular initial avatars framed by watercolor gradient rings; quote, name, and role; optional hand-lettered signature accent.

**5.5 Pricing — 3 tiers:** "Wanderer" (free), "Explorer" (featured), "Storyteller"; the featured tier is elevated (deeper shadow, "Most Loved" badge with pink wash, subtle scale); each card: tier name, price + period, feature list with `check_circle` icons, and a CTA button demonstrating hover / focus / active states.

**5.6 FAQ — accordion:** 5–6 questions; button + panel pattern with `aria-expanded` and `aria-controls`; chevron icon rotates on toggle; CSS-animated open/close (e.g., `grid-template-rows: 0fr → 1fr`); fully keyboard operable.

**5.7 Final CTA:** sunset watercolor wash (warm glow, pink/amber gradients); headline + supporting line; email capture form per 2.3 with inline validation, a loading button state, and success feedback (button success state + `aria-live` toast "Your map awaits!" layered with `--z-toast`).

**5.8 Footer:** deeper cream / indigo-tinted band; wordmark + tagline; secondary link groups (Product, Company, Support); Material-icon social buttons with `aria-label`s; copyright line; all links with distinct hover and focus states.

**Global:** smooth anchor scrolling with `scroll-margin-top` on sections, respecting `prefers-reduced-motion`.

**Final instruction:** generate the complete code now — `index.html`, `style.css`, `script.js` — in a single attempt, with no placeholders and no omitted sections.
