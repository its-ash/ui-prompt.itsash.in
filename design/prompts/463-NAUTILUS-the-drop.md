# BUILD SPECIFICATION — "NAUTILUS — the drop" Glassmorphism Landing Page

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-ready landing page on the first attempt — full HTML, CSS, and JS. No partial deliveries, no "the rest can be added on request."

**Objective:** Build the marketing landing page for **NAUTILUS — the drop** — a glassmorphism page themed around a bathyscaphe's descent through the water column. The page must read as a slow, elegant dive: the hero sits in sunlit, misty surface water; each section deepens the atmosphere; the footer rests on the abyss floor.

---

## 0. THEME & ART DIRECTION

- **Name:** NAUTILUS — the drop
- **Style:** Glassmorphism · Era: 2020s Digital
- **Keywords:** bathyscaphe, descent, glass, translucent, gradient, blur
- **Concept:** Translucent glass panels float over layered aquatic gradients; soft teal glows behave like filtered light shafts in deep water; every card, button, and panel is a porthole of frosted glass.
- **Color Palette:**
  - **Primary:** `#d8e4f0` (surface mist) · `#0a2028` (abyss navy) · `#4aa0b8` (ocean teal)
  - **Secondary:** `#0a3a4a` (deep teal) · `#051820` (midnight teal) · `#02060c` (abyss black)
- **Required Visual Effects:** Blur (`backdrop-filter`), Glow, Glass Effect, Gradients, Hover Effects
- **Required CSS Techniques:** Flexbox, Backdrop Filter (include the `-webkit-` prefix and an `@supports` fallback with a solid translucent background), CSS Filters (`brightness`, `saturate`, `drop-shadow`), Transitions, Transforms, Gradients, Box Shadows, Border Radius

**Token Mapping (mandated):**

| Token | Light (default) | Dark |
|---|---|---|
| `--primary` | `#4aa0b8` | `#4aa0b8` |
| `--secondary` | `#0a3a4a` | `#d8e4f0` (muted) |
| `--bg-primary` | `#d8e4f0` | `#02060c` |
| `--bg-secondary` (glass) | `rgba(254,254,254,0.45)` | `rgba(10,58,74,0.35)` |
| `--text-primary` | `#0a2028` | `#d8e4f0` |
| `--text-secondary` | `rgba(10,32,40,0.72)` | `rgba(216,228,240,0.72)` |
| `--border-default` | `rgba(10,32,40,0.12)` | `rgba(216,228,240,0.16)` |

Define all remaining mandatory tokens: `--text-success`, `--text-error`, `--border-success`, `--border-error`, `--radius-sm/md/lg`, `--shadow-sm/md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`, `--font-heading`. Add theme extensions: `--glass-blur`, `--glass-border`, `--glow` (e.g., `0 0 40px rgba(74,160,184,0.35)`), and `--gradient-*` tokens for surface-to-depth background layers.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** All design properties, layout rules, and states are targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** Keep markup semantic and style-agnostic — glass surfaces, gradients, glow orbs, and all decorative effects must be achievable by editing CSS only. Prefer `::before`/`::after` pseudo-elements for decorative orbs/bubbles so the HTML stays clean.

### 1.2 CSS Variables (`var(--...)`) & Theme Tokens
- **All tokens live in `:root`** (light theme) and are overridden in a `.dark` class scope, using exactly the names in the table above plus the mandatory list.
- **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa, in both themes. `#4aa0b8` is an accent for gradients, glows, large icons, and decorative surfaces only — never for body text on light backgrounds (it fails AA); use `--secondary` or `--text-primary` for interactive text.
- **Light Mode Background:** Never default to pure white. The light surface is built from misty `#d8e4f0` gradient layers. Where a near-white is genuinely needed, use `#fefefe`, never `#ffffff`.

### 1.3 Mandatory Dark Mode Support
- **Implementation:** Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`; the dark theme is the abyss palette — backgrounds built from `#02060c` → `#051820` → `#0a3a4a`, with `#d8e4f0` text and `#4aa0b8` glows.
- **Theme Switching:** Background and text variables must flip seamlessly with no HTML restructuring.
- **Persistence:** Persist the choice in `localStorage`, fall back to `prefers-color-scheme` on first visit, and provide a visible toggle button (Material Symbols `light_mode` / `dark_mode`) with correct `aria-pressed` and `aria-label` state.
- **Theme Exception Clause:** This theme is light-first by mood, so Light is the default presentation on first visit — but full Dark Mode support remains mandatory and must be built to the same polish as Light.

### 1.4 Flexbox Layout & Mobile-First Alignment
- **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an exception is explicitly justified in CSS comments.
- **Mobile-Friendly First:** All multi-column rows (features, steps, testimonials, pricing, footer) wrap into a single column below `768px`; prevent horizontal scrolling at every viewport width down to `320px`; all touch targets are at least 44×44px.

### 1.5 Framework Default
- Use clean custom CSS in `style.css` (this theme requires bespoke glassmorphism effects). If Tailwind is used, it may only appear via `@layer`/`@apply` utilities that map back to the CSS variables. Never mix conventions — one system only.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load **Space Grotesk** (headings) and **Inter** (body) via Google Fonts `<link>`; bind them to `--font-heading` and `--font-base`.
- **Icons:** Use **Google Material Symbols (Rounded)** via the Google Fonts link. Raw inline SVGs and local icon files are forbidden. Suggested icon names: `water_drop`, `waves`, `anchor`, `visibility`, `bolt`, `shield`, `check`, `close`, `expand_more`, `format_quote`, `star`, `workspace_premium`, `arrow_downward`, `arrow_upward`, `arrow_forward`, `light_mode`, `dark_mode`, `person`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn`, variants `.btn--primary`, `.btn--glass`)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px, `--radius-md`.
- **Hover:** Brightness/shadow shift plus intensified `--glow`; `cursor: pointer`.
- **Focus:** Distinct focus ring built from CSS variables (`box-shadow` ring) for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interaction, prevents double-clicks, and renders an animated Material Symbol (`progress_activity`) spinner without changing button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles driven by `--text-success` / `--text-error` (used by the Final CTA form).

### 2.2 Card Component (`.card` — used by Features, Testimonials, Pricing)
- **Default:** Flexbox glass panel using `--bg-secondary`, `--glass-border`, `backdrop-filter: var(--glass-blur)`, `--radius-lg`, `--shadow-md`.
- **Hover:** `transform: translateY(-2px)` plus glow elevation shift.
- **Focus-within:** Card border highlights when any child link/button receives focus.
- **Loading (Skeleton):** Define a `.card--skeleton` shimmer animation (CSS keyframes, no layout shift) in the stylesheet.
- **Empty State:** Define a `.card--empty` fallback layout with a Google Icon and guidance text.

### 2.3 Form & Input Requirements (Final CTA email capture)
- **States:** Empty, Focused (outline ring), Filled, Valid (`--border-success` + check icon), Invalid (`--border-error`, red text, error icon), Disabled, Read-only.
- **Structure:** `.input-group` flex container wrapping a real `<label>`, the input, and a dedicated error feedback container wired to `aria-live="polite"`. Validate the email in JS; on submit show the button loading state, then an inline success message (`role="status"`).

### 2.4 Accordion (FAQ)
- Use native `<details>`/`<summary>` styled with BEM classes, or a `button` + region pattern with `aria-expanded`/`aria-controls` — keyboard operable in either case.
- Chevron (`expand_more`) rotates on open; the open state is communicated by both the icon rotation and ARIA, never color alone. Animate open/close with a CSS height/grid transition; respect `prefers-reduced-motion`.

### 2.5 Modal / Popup
- **None of the requested sections require a modal — do not add one.** (For reference only: any future modal must implement a centered flex overlay, backdrop, icon close button, `Esc`/overlay-click closing, focus trap, and animated open/close.)

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid type and spacing; no horizontal overflow at any width.
- **Smooth Animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes; fully disable transforms/animations under `prefers-reduced-motion: reduce`.
- **Accessibility (a11y):** WCAG AA contrast in both Light and Dark modes (glass panels must never compromise text legibility — increase surface opacity until AA passes). Semantic HTML5 landmarks (`header`, `main`, `section` with `aria-labelledby`, `footer`), exactly one `<h1>`, logical DOM/focus order, a skip link, visible `:focus-visible` styles on every interactive element, `aria-hidden="true"` on decorative orbs/gradients, full keyboard operability, and `aria-live` regions for all dynamic feedback.
- **Mandatory Visual Feedback:** Every click, hover, focus, and submission triggers a visible state change.
- **Destructive Actions:** None are present; if one is ever introduced, style it with a distinct `.btn--danger` that reads clearly in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Three files — `index.html` (semantic, `<html lang="en">`, viewport meta, Google Fonts links, one `<link>` to `style.css`, exactly one `<script src="script.js" defer>` — no inline scripts), `style.css` (all styling, ordered: tokens → base → layout → components → sections → utilities), `script.js` (theme toggle + persistence, accordion behavior, email form validation with loading/success feedback, and an optional `IntersectionObserver` scroll-reveal that respects reduced motion).
- **Naming Convention:** BEM only (`.hero__title`, `.feature-card__icon`, `.btn--primary`) — never mix conventions.
- **No Unrequested Placeholders:** Author original, coherent English marketing copy throughout — lorem ipsum is forbidden. Write realistic testimonials (names, roles, 5-star ratings), consistent pricing, and substantive FAQ answers. Do not add sections or components beyond those specified below.
- **Self-Contained Visuals:** No external raster images. Build all backgrounds from CSS gradients, glow orbs, and glass panels; avatars are initials inside gradient circles.
- **Acceptance Checklist:** zero inline styles; both themes toggle and persist; both themes pass AA; no horizontal scroll at 320px; the page is fully operable by keyboard alone.

---

## 5. PAGE SECTION REQUIREMENTS & CONTENT DIRECTION

0. **Glass Header (fixed):** Slim translucent bar with backdrop blur hosting the brand ("NAUTILUS" + `water_drop` icon), anchor links to each section, and the mandatory theme toggle.
1. **Hero (surface zone):** Misty `#d8e4f0` gradient with teal glow orbs; kicker, one `<h1>` with a gradient-text treatment using the palette, subcopy, a primary CTA ("Begin the Descent") and a glass ghost CTA anchoring to Features; three floating glass stat pills; an animated `arrow_downward` scroll cue (`aria-hidden`).
2. **Features — 3 glass cards:** Each with a glowing glass icon chip (`waves`, `anchor`, `visibility`), title, and copy framing the product's deep-focus benefits (e.g., pressure-tested focus, depth controls, silence). Cards lift and glow on hover; stack on mobile.
3. **How It Works — 3 numbered steps:** "01 / 02 / 03" in glass circles with a connecting descent line, each with title and copy (surface check → ballast release → full descent); column layout on mobile.
4. **Testimonials — 3 glass cards:** `format_quote` icon, authored quote, initials avatar, name, role, and a 5-star `star` icon row with `aria-label="Rated 5 out of 5"`.
5. **Pricing — 3 tiers:** "Shallows" (free), "Midwater" (featured — glow border, `workspace_premium` "Most Popular" badge, primary button), "Abyss" (premium, glass button). Feature lists use `check` icons; columns stack on mobile.
6. **FAQ — 5 questions:** Realistic product Q&A in the accordion pattern from Section 2.4.
7. **Final CTA:** Full-width glass panel with a strong teal glow; headline, supporting line, and the `.input-group` email capture from Section 2.3 ("Get your invite") with loading → success flow and `aria-live` feedback.
8. **Footer (abyss zone):** Darkest surface of the page — in Light mode it uses the dark teal panel (`#0a2028`/`#0a3a4a`) with `#d8e4f0` text (dark background + light text pairing enforced); brand block with tagline, two to three columns of secondary links, social icons, copyright, and a "Back to surface" link with `arrow_upward`.
