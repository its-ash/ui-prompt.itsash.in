**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready **"Kawaii Pastel Pop" landing page** in a single first attempt. Generate the full final code immediately — no clarifying questions, no partial drafts, no TODOs.

**Theme Definition — Kawaii Pastel Pop**
- **Style:** Playful, Whimsical, Cute — Harajuku Pop era
- **Keywords:** kawaii, pastel, cute, pop, soft, pink, cloud, sparkle
- **Visual Effects (all implemented in pure CSS):** rainbow gradients, fluffy cloud motifs, sparkle embellishments, cute mascots, soft airbrushed gradients, glossy highlights
- **AI Visual Direction:** kawaii landing page, pastel pink background, cute aesthetic, soft shapes, sparkles, Japanese pop culture, fluffy clouds
- **CSS Baseline (from spec — express exclusively via tokens/classes, never inline):** `background-color: #FFD1DC; color: #222222; font-family: 'Varela Round', sans-serif; border-radius: 20px; box-shadow: 0 4px 10px rgba(255,105,180,0.3);`

**Sections (in DOM order):** Sticky header/nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ (accordion) → Final CTA (with email capture) → Footer with secondary links.

**Copy Direction:** Invent one coherent fictional product (suggested: "PuffyPal," a cute habit-tracker & digital sticker-book app) and write ALL user-facing copy in English with a playful, sweet, encouraging kawaii tone. Write real headlines, feature descriptions, 3 testimonial quotes with names/roles, 3 pricing tiers with feature lists, 5–6 genuine FAQ answers, and footer link labels. Lorem ipsum is forbidden.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
- **Minimal HTML Modifications:** HTML must remain clean, semantic (using `header`, `nav`, `main`, `section`, `footer`), and agnostic of visual styling — re-theming the page must require editing only `style.css`.

### 1.2 CSS Variables & Theme Tokens
Store all visual tokens in `:root` and override them in the dark theme class. Use exactly this token sheet:

| Token | Light "Daydream" | Dark "Kawaii Night" |
|---|---|---|
| `--bg-primary` | `#FFD1DC` | `#2E2238` |
| `--bg-secondary` | `#FFF9C4` | `#3B2C4A` |
| `--bg-surface` | `#fefefe` (never `#ffffff`) | `#473658` |
| `--text-primary` | `#222222` | `#FFF0F6` |
| `--text-secondary` | `#6B5573` | `#DCC6E6` |
| `--primary` | `#9D84B6` | `#C9ADE8` |
| `--primary-strong` | `#7B5F96` (filled buttons, white text) | `#C9ADE8` (filled buttons invert: lavender fill + `#2E2238` text) |
| `--secondary` | `#FFB7C9` | `#F2A9C4` |
| `--accent-blue` | `#B3E5FC` | `#A8DFF7` |
| `--accent-mint` | `#B9F6CA` | `#A9F0C3` |
| `--accent-cream` | `#FFF9C4` | `#FFE9A8` |
| `--text-success` | `#2E7D4F` | `#7BE8A6` |
| `--text-error` | `#C13A56` | `#FF8FA8` |
| `--border-default` | `#F2B8CE` | `#57426A` |
| `--border-success` | `#2E7D4F` | `#7BE8A6` |
| `--border-error` | `#C13A56` | `#FF8FA8` |

Non-color tokens: `--radius-sm: 12px; --radius-md: 20px; --radius-lg: 32px; --radius-pill: 999px; --shadow-sm: 0 2px 6px rgba(255,105,180,0.20); --shadow-md: 0 4px 10px rgba(255,105,180,0.30);` (dark mode overrides shadows to `rgba(0,0,0,0.35)` / `rgba(0,0,0,0.45)`); `--spacing-gap: 1.5rem; --transition-fast: 150ms; --transition-normal: 300ms; --ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1)` (bouncy kawaii easing); `--z-dropdown: 10; --z-modal: 100; --z-toast: 200; --font-base: 'Varela Round', sans-serif; --font-display: 'Baloo 2', sans-serif;`

Gradients: `--gradient-rainbow` (decorative surfaces): `linear-gradient(100deg, #FF9EC4, #FFD1DC 30%, #FFF9C4 50%, #B9F6CA 65%, #B3E5FC 80%, #9D84B6)`. For gradient headline text, use `--gradient-rainbow-text` with darkened stops that keep ≥3:1 contrast for large text: light mode `linear-gradient(90deg, #C2185B, #B26A00 28%, #2E7D4F 52%, #1E7FA0 74%, #7B5F96)`; dark mode `linear-gradient(90deg, #FF7EB3, #FFC24B 28%, #7BE8A6 52%, #7CD1FF 74%, #C9ADE8)`. Glossy highlight token: `--gloss: linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.15) 45%, rgba(255,255,255,0) 60%)` (reduce alpha in dark mode).

- **Contrast Pairing:** Every light background token pairs with dark text tokens and every dark background token pairs with light text tokens — enforce in both themes. Body text ≥4.5:1, large text/UI ≥3:1. Pastel-on-pastel text is forbidden for body copy; accent-colored text must use darkened variants.
- **Light Mode Background:** Never pure white; the page background is `#FFD1DC`, and any near-white surface uses `#fefefe`.

### 1.3 Mandatory Dark Mode — "Kawaii Night"
- **Implementation:** Define dark tokens under both a `.dark` class on `<html>` and an `@media (prefers-color-scheme: dark)` fallback, switching only CSS variables — no HTML restructuring.
- **Persistence:** Store the choice in `localStorage` (e.g., key `kawaii-theme`); on first visit fall back to `prefers-color-scheme`. Provide a visible toggle button in the header using Material Symbols (`clear_day` / `bedtime`), with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode") that updates dynamically.
- **Exception clause:** The source style spec listed dark mode as unsupported — dark mode is nevertheless architecturally mandatory; implement it as the "Kawaii Night" palette above so the pastel mood survives after dark.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an explicitly justified exception exists (e.g., card columns stretching).
- Mobile-first: rows of cards/steps/testimonials stack into single columns below 768px; the header nav collapses to a hamburger menu. No horizontal scrolling at any viewport width; use a centered `max-width: 1140px` container with fluid padding.

### 1.5 Framework Default & Tailwind CSS Integration
Use Tailwind CSS (Play CDN acceptable) for layout utilities, plus a dedicated `style.css` holding all tokens and component classes — or clean custom CSS organized in Tailwind-style `@layer`/`@apply` blocks. Either way, all utilities must map back to CSS variables or generic reusable classes (`.btn`, `.card`, `.input-group`).

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load Google Fonts via `<link>` with `preconnect`: `Varela Round` bound to `--font-base` (body) and `Baloo 2` bound to `--font-display` (hero headline, section titles, prices).
- **Icons:** Use Google Material Symbols (Rounded variant — fits the kawaii mood). Sparkles = `auto_awesome`/`star`; clouds = `cloud`; hearts = `favorite`; checks = `check`; close = `close`; menu = `menu`; chevron = `expand_more`; spinner = `progress_activity`. Inline SVGs, local icon files, and emoji-as-icons are forbidden.
- **No image assets:** All decorative art (clouds, sparkles, mascots, blobs) must be CSS-composed shapes or Material Symbols glyphs. Decorative elements must carry `aria-hidden="true"` and `pointer-events: none`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` pill radius, `min-height: 44px; min-width: 44px`, `position: relative; overflow: hidden` with a `::before` glossy overlay using `--gloss`.
- **Hover:** `filter: brightness(1.05)`, `translateY(-2px)`, `--shadow-md`, `cursor: pointer`.
- **Focus:** `:focus-visible` ring — `outline: 3px solid var(--primary); outline-offset: 2px` — clearly visible in both themes.
- **Active/Pressed:** `transform: scale(0.97)` with `var(--ease-standard)`.
- **Loading (`.btn--loading`):** disables interaction and double-clicks (`pointer-events: none`, `aria-busy="true"`), renders a rotating Material Symbol `progress_activity` spinner without changing button dimensions.
- **Disabled:** `opacity: 0.5`, `filter: grayscale(0.6)`, `cursor: not-allowed`.
- **Success/Error:** temporary `.btn--success` / `.btn--error` feedback styles driven by `--text-success` / `--text-error` (used on form submission).
- **`.btn--danger`:** soft red fill, visually distinct in both light and dark themes.

### 2.2 Card Component (`.card`)
- **Default:** Flexbox column layout, `background: var(--bg-secondary)`, `border: 1px solid var(--border-default)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-sm)`, generous padding.
- **Hover:** `transform: translateY(-2px)` plus `--shadow-md` shift.
- **Focus-within:** border color changes to `var(--primary)` when a child link/button receives focus.
- **Loading (Skeleton):** `.card--skeleton` with a shimmer keyframe (sweeping gradient) preserving final dimensions to prevent layout jumps.
- **Empty State:** `.card--empty` fallback layout with a Material Symbol and clear guidance text, should any dynamic area render empty.

### 2.3 Form & Input (`.input-group`)
- **Structure:** Flex column wrapping a `<label>`, an `<input>` (`.input-group__input`, min-height 44px, `--radius-md`, 2px border, `--bg-surface` background), and a dedicated error feedback container with reserved `min-height` to prevent layout shift.
- **States:** Empty, Focused (border `--primary` + soft ring shadow), Filled, Valid (`.is-valid`: `--border-success` + `check` icon), Invalid (`.is-invalid`: `--border-error`, error icon, red text message — never color alone), Disabled, Read-only.
- **Feedback:** Error container uses `aria-live="assertive"`; validate the email on submit in `script.js`.

### 2.4 Modal / Popup (`.modal`)
- **Trigger:** Each Pricing "Choose Plan" button opens a plan-confirmation modal showing the selected tier.
- **States:** Opening (fade + scale from 0.95), Open, Loading (spinner while "processing"), Success (check icon + confirmation message), Closing (fade out) — all animated via CSS transitions.
- **UX:** Fixed backdrop (`rgba(46,34,56,0.6)`), centered flex container (`align-items: center; justify-content: center`), `z-index: var(--z-modal)`, Material Symbol `close` button (44px target), `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, keyboard focus trapping, close via `Esc` and overlay click, and focus returned to the triggering button.

### 2.5 FAQ Accordion (`.faq-item`)
- Question is a full-width `<button>` (`display: flex; align-items: center; justify-content: space-between;` min-height 44px) with `aria-expanded` and `aria-controls`; answer panel has `role="region"` and `aria-labelledby`; `expand_more` chevron rotates 180° when open; smooth height transition; one-panel-open-at-a-time behavior; fully keyboard operable.

### 2.6 Toast (`.toast`)
- Fixed bottom-center, `z-index: var(--z-toast)`, `role="status"` with `aria-live="polite"`, slide-in animation, auto-dismiss after ~4s, Material Symbol close button. Used for newsletter success confirmation.

---

## 3. SECTION-BY-SECTION BUILD SPECIFICATION

### 3.1 Header
Sticky, translucent (`rgba(255,209,220,0.85)` light / `rgba(46,34,56,0.85)` dark) with `backdrop-filter: blur(10px)`. CSS cloud logo mark + wordmark in `--font-display`. Nav links get a wavy underline (`text-decoration: underline wavy`) on hover/focus. Contains the theme toggle (per 1.3) and a primary CTA. Below 768px, collapses to a hamburger (`menu` icon) toggling a dropdown panel (`z-index: var(--z-dropdown)`) with `aria-expanded` state.

### 3.2 Hero
Layered soft radial-gradient "airbrushed" background. Headline in `--font-display`, `clamp(2.5rem, 6vw, 4.5rem)`, gradient text via `--gradient-rainbow-text` with `background-clip: text` (solid `--text-primary` fallback). Subheadline in `--text-secondary`. Two CTAs (`.btn--primary` filled, `.btn--ghost` outline). A cute mascot built purely from CSS (blob `border-radius` body, blush radial-gradients, dot eyes, arc smile) with a gentle wiggle keyframe. Fluffy CSS cloud shapes (rounded rectangles + circular pseudo-elements) floating with staggered `float` keyframes (8–12s, alternate). Twinkling `auto_awesome` sparkles with staggered opacity/scale keyframes. All decorations `aria-hidden`.

### 3.3 Features — 3 Cards
Grid: 1 column mobile → 3 columns ≥768px. Each `.card` uses one accent variant (`.card--pink`, `.card--blue`, `.card--mint`) driving a 56px circular icon badge (Material Symbol, darkened icon color for contrast), a `--font-display` title, and a real description. Apply full card states per 2.2.

### 3.4 How It Works — 3 Steps
Three step cards with large number chips (01/02/03) filled with `--gradient-rainbow` and `#222222` text, an icon, title, and description. On desktop, connect steps with a dashed rainbow line (CSS border/gradient); hide connectors and stack on mobile.

### 3.5 Testimonials
Three `.card--testimonial` cards: circular avatar (accent-colored CSS circle with initial or Material Symbol `face`), five `star` symbols as rating, real quote, name, and role. Apply card states per 2.2.

### 3.6 Pricing — 3 Tiers
Three pricing cards; the middle one is `.pricing-card--featured`: 2px `--primary` border, `--shadow-md`, slight `scale(1.03)` on desktop, and an absolute "Most Popular" pill badge using `--gradient-rainbow` with `#222222` text. Each card: tier name, large price in `--font-display`, feature list with `check` icons (`--text-success`), and a CTA (featured = `.btn--primary`, others = `.btn--secondary`/`.btn--ghost`) that opens the modal per 2.4.

### 3.7 FAQ
Accordion per 2.5, centered `max-width: 800px`, 5–6 real questions and answers about the fictional product.

### 3.8 Final CTA
Full-width banner with soft `--gradient-rainbow` background, `--radius-lg`, gloss overlay, and sparkles. Headline in `--font-display`, short supporting copy, and an inline email `.input-group` + `.btn--primary` (flex row on desktop, column on mobile). On submit: button loading → success state + toast (per 2.1/2.3/2.6); invalid email shows the error state.

### 3.9 Footer
Background `#FBC9D8` (light) / `#261B30` (dark) with `#222222` / `#FFF0F6` text. Flex columns: brand + tagline, secondary link groups (About, Help Center, Privacy Policy, Terms of Service, Contact), Material Symbol social icons, and a copyright line. All links have wavy-underline hover and visible focus rings.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid `clamp()` typography, breakpoints without horizontal overflow.
- **Smooth Animations:** All state changes use `transition: var(--transition-normal) var(--ease-standard)`. Keyframes `float`, `twinkle`, `wiggle`, and `shimmer` must be disabled (or reduced to opacity-only) inside `@media (prefers-reduced-motion: reduce)`.
- **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes per the token sheet; never rely on color alone (pair every error/success with an icon + text). Semantic HTML5 elements, correct ARIA roles/labels on the toggle, accordion, modal, and toast, logical DOM/focus order, full keyboard operability, and `aria-live` regions for form errors, toasts, and loading states.
- **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
- **Destructive Actions:** `.btn--danger` must be visually distinct in both themes.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single `<script src="script.js" defer></script>`; no inline styles anywhere.
- **Naming Convention:** BEM consistently across the entire deliverable (`.card`, `.card__title`, `.card--featured`, `.faq-item__answer`) — never mix conventions.
- **No Unrequested Placeholders:** All copy must be real, on-theme English per the Copy Direction; placeholders are permitted only where content was genuinely left unspecified.
- **Completeness:** Deliver the full, working code for every section and state described above on the first attempt.
