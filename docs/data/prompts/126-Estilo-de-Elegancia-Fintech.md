# BUILD SPECIFICATION — "FINTECH ELEGANCE" LANDING PAGE (GLOBAL PAYMENTS PLATFORM)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Deliver a complete, production-quality landing page on the first attempt — every section built, every interactive state styled, dark mode fully functional. No stubs, no TODOs, no "left as an exercise."

---

## 0. PROJECT BRIEF

- **Product:** A fictional global payments platform for developers. Brand name: **Fluxpay**.
- **Theme:** "Fintech Elegance" — clean, professional, developer-friendly. Category: Corporate & SaaS.
- **Keywords:** fintech, payments, global, developer, API, secure, scalable, professional, minimalist, efficient.
- **Mood / Era:** 2026+ global payments. Clean data-focused layouts, modular elements, modern technical typography, subtle security glows, transaction status micro-interactions, API flow diagrams, money flow animations.
- **Light/Dark:** Full light + dark mode support (mandatory — see §1.3).
- **Copy:** All user-facing copy in **English**. Write real, thematic, professional copy — lorem ipsum is prohibited. No external image files: build all visuals from CSS, Google Material Symbols, and text (testimonial avatars = initials circles).

### 0.1 Required Page Sections (in this order)

1. **Sticky Header** — Brand mark (Material Symbol + "Fluxpay" wordmark), nav links (Features, How It Works, Pricing, FAQ), theme toggle (§1.3), "Get started" primary button, mobile hamburger (`aria-expanded`, slide-down panel at `--z-dropdown`). Include a "Skip to main content" skip link.
2. **Hero** — Chip badge ("Now supporting 135+ currencies"), H1 (e.g., "Global payments, one API."), supporting subheadline, dual CTAs ("Start integrating" primary / "Read the docs" secondary), trust stat chips (99.99% uptime · 135+ currencies · PCI DSS Level 1), and a visual cluster: an **API flow diagram card** (nodes: Your app → Fluxpay API → Global payout, connected by animated lines — class `.api-flow-animation`) plus a **transaction status card** (class `.transaction-status-indicator`, see §3.6) showing a mono-font amount cycling Processing → Payment successful.
3. **Features (3 cards)** — Global Coverage (icon: `public`), Developer-First API (icon: `code`), Bank-Grade Security (icon: `shield` — apply the subtle security glow, §3.6). Each: icon, title, real descriptive copy.
4. **How It Works (3 steps)** — Numbered steps (Create your account → Integrate in an afternoon → Go live globally) connected by a flow line with traveling dots (money flow animation, §3.6). Horizontal on desktop, vertical on mobile.
5. **Testimonials (3)** — Quote cards with 5-star ratings (Material Symbol `star`, yellow `#FFC700`, with `aria-label`), initials avatar circles, name, role, company.
6. **Pricing (3 tiers)** — Starter (pay-as-you-go, secondary CTA), Growth (highlighted "Most popular" badge, primary CTA, elevated border/shadow), Enterprise (custom, "Contact sales" — opens modal per §2.4 or falls back to a `mailto:` anchor; never a dead button). Feature lists use `check_circle` icons.
7. **FAQ (5–6 items)** — Accordion (§2.5): integration time, supported countries/currencies, security compliance, fees, refunds/disputes, support.
8. **Final CTA** — Primary-tinted gradient band, headline ("Start accepting payments in minutes"), **email capture form** (§2.3) with submit button demonstrating loading → success/error states.
9. **Footer** — Brand + tagline, four link columns (Product, Developers, Company, Legal — `href="#"` stubs permitted for non-existent pages), "All systems operational" status chip with pulsing green dot, dynamic copyright year. Dark inverted treatment (`#242424` bg, light text) in light mode; near-black surface in dark mode.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
- **Minimal, Semantic HTML:** Use semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`) with a clean heading hierarchy (one `h1`, `h2` per section, `h3` for cards). Markup must remain agnostic of visual styling.

### 1.2 CSS Variables & Theme Tokens
Store **all** visual tokens in `:root` and override them in the dark theme blocks (§1.3). Never hardcode hex values in component rules.

**Colors (Light mode):**

| Token | Value | Notes |
|---|---|---|
| `--primary` | `#635BFF` | Fintech blue; white button text on it passes AA (~4.6:1) — verify |
| `--primary-hover` | `#524AE6` | Darkened hover variant |
| `--primary-soft` | `rgba(99,91,255,0.10)` | Tinted surfaces, chips, focus wash |
| `--secondary` | `#00C48C` | Green; indicators, borders, glows |
| `--accent-warning` | `#FFC700` | Pending status, stars; pair with dark text on chips |
| `--bg-primary` | `#FFFFFF` | **Explicit exception:** normally near-white must be `#fefefe`, but this theme's source spec mandates `#FFFFFF` — permitted for light mode only |
| `--bg-secondary` | `#F9F9F9` | Alternating section surfaces |
| `--text-primary` | `#242424` | Dark gray |
| `--text-secondary` | `#5B5B66` | Muted copy; verify AA |
| `--text-success` | `#00795A` | AA-safe on light; vivid `#00C48C` reserved for non-text indicators |
| `--text-error` | `#D9263C` | AA-safe on light; `#FF4B4B` reserved for borders/indicators |
| `--border-default` | `#E6E6E6` | Light gray |
| `--border-success` | `#00C48C` | |
| `--border-error` | `#FF4B4B` | |
| `--color-black` | `#000000` | Reserved: footer/deepest surfaces |

**Colors (Dark mode overrides):** `--primary: #7B74FF` (lightened for text/links; solid fills may keep `#635BFF` with white text), `--primary-hover: #8F89FF`, `--primary-soft: rgba(123,116,255,0.16)`, `--secondary: #00D496`, `--bg-primary: #0E0E14`, `--bg-secondary: #17171F`, `--text-primary: #F5F5F7`, `--text-secondary: #A6A6B3`, `--text-success: #00C48C`, `--text-error: #FF6B6B`, `--border-default: #2B2B36`, `--border-error: #FF6B6B`.

**Contrast Pairing (mandatory in every theme):** Every light background token must pair with a dark text token and every dark background token with a light text token. Verify WCAG AA (4.5:1 text, 3:1 large text/UI) in **both** modes.

**Structure tokens:**
- `--radius-sm: 4px`, `--radius-md: 6px`, `--radius-lg: 14px`
- `--shadow-sm: 0 2px 8px rgba(0,0,0,0.10)`, `--shadow-md: 0 12px 32px rgba(0,0,0,0.12)` (dark: raise alphas to 0.45/0.55)
- `--glow-primary: 0 0 24px rgba(99,91,255,0.28)`, `--glow-success: 0 0 24px rgba(0,196,140,0.28)` (dark: alpha 0.40)
- `--spacing-xs: 0.5rem`, `--spacing-gap: 1rem`, `--spacing-md: 1.5rem`, `--spacing-lg: 2rem`, `--spacing-xl: 4rem`
- `--transition-fast: 0.15s ease-in-out`, `--transition-normal: all 0.3s ease-in-out`, `--ease-standard: ease-in-out`
- `--z-header: 100`, `--z-dropdown: 1000`, `--z-modal: 2000`, `--z-toast: 3000`
- `--font-base: 'Inter', sans-serif`, `--font-mono: 'JetBrains Mono', monospace`
- `--gradient-surface: linear-gradient(to bottom, #F9F9F9, #FFFFFF)` (dark: `linear-gradient(to bottom, #17171F, #0E0E14)`)

**Source CSS spec compliance:** The following values from the source spec must be embedded via the tokens above: background `#FFFFFF`, text `#242424`, `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`, `border-radius: 6px`, Inter font, `transition: all 0.3s ease-in-out`, the `#F9F9F9 → #FFFFFF` gradient, and the class names `.api-flow-animation` and `.transaction-status-indicator` (which must exist verbatim).

### 1.3 Mandatory Dark Mode Support
- **Implementation:** Define light tokens in `:root`; duplicate the identical dark token block inside both `.dark {}` (applied to `<html>`) and `@media (prefers-color-scheme: dark) { :root:not(.light) { … } }`. Background and text variables must switch seamlessly with zero HTML restructuring.
- **Persistence:** `script.js` reads `localStorage` (e.g., key `fluxpay-theme`) on execution; falls back to `prefers-color-scheme` on first visit. All theme logic lives in the single deferred `script.js` — **do not add inline scripts** (a brief first-paint flash following the media query is acceptable).
- **Toggle Control:** A visible toggle button in the header with correct `aria-pressed` state, dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode"), and Material Symbol icon swap (`dark_mode` / `light_mode`).

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures with Flexbox. **Every flex container must default to `align-items: center`** unless an exception is explicitly justified in a CSS comment (e.g., card content columns using `stretch` for full-width children).
- Mobile-first: author base styles for small screens, enhance upward (e.g., 640px / 768px / 1024px). Hero, features grid, steps, pricing tiers, and footer columns stack vertically on mobile and become rows on desktop. **No horizontal scrolling at any viewport (test at 320px).** Use `clamp()` for fluid typography; container max-width ~1152px.

### 1.5 Styling Approach & Naming Convention
- Use clean, framework-free custom CSS in `style.css` (the source spec supplies raw custom CSS tokens; no CSS framework is requested). Generic reusable classes (`.btn`, `.card`, `.container`, `.section`) must map back to the CSS variables.
- **One naming convention: BEM** (`block__element--modifier`) across the entire deliverable. **Explicit exception:** the two source-mandated class names `.api-flow-animation` and `.transaction-status-indicator` must be kept verbatim.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load Google Fonts via `<link>` with preconnect: **Inter** (400/500/600/700/800) bound to `--font-base`, plus **JetBrains Mono** (400/500) bound to `--font-mono` for code snippets, API keys, amounts, and stats.
- **Icons:** Google Material Symbols (pick one style — Rounded or Outlined — and use it consistently). **Inline SVGs and local icon files are forbidden.**
- Suggested icons: `public`, `code`, `shield`, `key`, `rocket_launch`, `check_circle`, `error`, `schedule`, `star`, `dark_mode`/`light_mode`, `menu`/`close`, `expand_more`, `arrow_forward`, `progress_activity` (loading spinner).

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Buttons
All states via CSS classes; base `.btn`: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target **44×44px**, `border-radius: var(--radius-md)`, font-weight 600, `transition: var(--transition-normal)`.
- **Variants:** `.btn--primary` (bg `--primary`, white text), `.btn--secondary` (transparent bg, `1px solid var(--border-default)`, `--text-primary` text, hover bg `--bg-secondary`), `.btn--danger` if ever needed.
- **Hover:** brightness shift or `--primary-hover` + shadow elevation; `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring (`outline: 2px solid var(--primary); outline-offset: 2px`) visible in both themes.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables interaction, prevents double-clicks, renders a rotating Material Symbol `progress_activity` (CSS keyframe spin) **without changing button dimensions**; set `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback states (e.g., form submit → green check + "Submitted", or red error styling) driven by `--text-success` / `--text-error`, always paired with an icon and text — never color alone.

### 2.2 Cards
- **Default:** Flexbox layout, `background: var(--bg-primary)`, `1px solid var(--border-default)`, `border-radius: var(--radius-md)`, `box-shadow: var(--shadow-sm)`, padding via spacing tokens.
- **Hover:** `transform: translateY(-2px)` + `--shadow-md` (only on cards that are genuinely interactive or visually elevated, e.g., the highlighted pricing tier).
- **Focus-within:** border shifts to `--primary` with `--glow-primary` when a child link/button receives focus.
- **Loading (Skeleton):** define a `.skeleton` shimmer keyframe animation for the hero transaction card's initial render — no layout jumps.
- **Empty State:** if any dynamic area (e.g., transaction feed) can be empty, provide a fallback layout with a Material Symbol and clear guidance text.

### 2.3 Forms & Inputs (Final CTA email capture)
- **Structure:** Flex container wrapping a `<label>`, `<input type="email">`, and a dedicated error feedback element with `aria-live="polite"`.
- **States (all via classes):** empty, focused (border `--primary` + `box-shadow` ring using `--primary-soft`), filled, valid (`--border-success` + `check_circle` icon), invalid (`--border-error`, `--text-error` message, `error` icon, `aria-invalid="true"` + `aria-describedby`), disabled, read-only.
- **Behavior:** `script.js` performs client-side email validation on submit and blur, `preventDefault()`, simulates async submit (button → loading → success check + inline confirmation message, or error feedback). No page reload.

### 2.4 Modal (Conditional — "Contact sales")
If a modal is implemented, it must include: **States:** opening, open, loading, success/error, closing — all animated via CSS transitions (opacity + scale). **UX:** centered flex overlay (`align-items: center; justify-content: center`), backdrop with dimming/blur, Material Symbol `close` button with `aria-label`, `role="dialog"` + `aria-modal="true"`, keyboard focus trapping, close via `Esc` and overlay click, focus restored to the trigger on close, stacking at `--z-modal`. If no modal is built, the Enterprise CTA must be a functional `mailto:` anchor.

### 2.5 FAQ Accordion
- `<button class="faq__question" aria-expanded="false" aria-controls="…">` with a rotating `expand_more` icon; panel with `role="region"` + `aria-labelledby`.
- Smooth open/close via CSS transition (suggested: `grid-template-rows: 0fr → 1fr` technique or equivalent); fully keyboard operable; state communicated by icon rotation + panel visibility, never color alone.

---

## 3. CORE UX & MICRO-INTERACTION RULES

### 3.1 Responsive by Default
Fluid sizing, responsive breakpoints, `scroll-behavior: smooth` (respecting reduced motion) with `scroll-margin-top` on anchored sections to offset the sticky header. Zero horizontal overflow.

### 3.2 Smooth Animations
Apply `transition: var(--transition-normal)` to all state changes. **Respect `prefers-reduced-motion`:** disable flow animations, pulses, transforms, and scroll reveals; provide static fallbacks.

### 3.3 Accessibility (a11y)
- Sufficient contrast in both light and dark modes (AA).
- **Never rely solely on color** — every status pairs dot/icon + text label.
- Semantic HTML5, correct ARIA roles/labels on custom widgets (toggle, mobile menu, accordion, modal), logical DOM/focus order, full keyboard operability, visible focus rings everywhere.
- `aria-live` regions for dynamic feedback: form errors/success, transaction status changes, theme toggle state.

### 3.4 Mandatory Visual Feedback
Every click, hover, and submission must trigger a visible state change.

### 3.5 Destructive Actions
None expected; if introduced, `.btn--danger` must be visually distinct in **both** themes.

### 3.6 Signature Theme Effects (required)
- **`.api-flow-animation`** — Hero diagram: nodes as flex chips (Material Symbol + label) connected by CSS connector lines with animated traveling dots (`@keyframes` on `::before`/`::after` or background-position). Vertical orientation on mobile. Static line under reduced motion.
- **`.transaction-status-indicator`** — Pulsing status dot + icon + label; the hero transaction demo cycles pending (yellow `#FFC700`, `schedule` icon, "Processing") → succeeded (green, `check_circle`, "Payment successful") every ~4 seconds via `script.js`, announced through an `aria-live="polite"` region. The footer "All systems operational" chip reuses this pattern.
- **Security Glow** — Apply `--glow-success` / `--glow-primary` subtly to the security feature card icon and security badges; tuned per theme (§1.2).
- **Money Flow Animation** — Traveling dots along the How-It-Works connector line, sharing the same keyframe system as the API flow.
- **Data-Focused Modularity** — Stat chips, mono-font amounts/keys, and a styled `<pre><code>` API snippet card in the hero (mono font, muted token colors; no JS syntax highlighter).

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** Separate `index.html`, `style.css`, `script.js`. Exactly one script reference: `<script src="script.js" defer></script>`. No inline scripts, no inline styles.
- **Naming:** BEM throughout, with the verbatim exception of `.api-flow-animation` and `.transaction-status-indicator`. Never mix conventions.
- **Copy:** Real, thematic English copy for every section — no lorem ipsum. Footer links to non-existent pages may use `href="#"` stubs.
- **Completeness:** All sections, all component states, dark mode, persistence, and every signature effect delivered in the first attempt — no placeholders, no TODOs.
- **CSS Organization:** tokens → base/reset → layout → components → sections → animations, with section comments.
- **JS Scope:** theme toggle + persistence, mobile menu, FAQ accordion, email form validation + simulated submit, transaction status cycle, optional modal, optional IntersectionObserver scroll reveal (content must be fully visible with JS disabled; reveal is enhancement only).
- **Quality Gate:** Verify zero horizontal scroll at 320px, full keyboard navigation, AA contrast in both themes, and correct `aria-pressed`/`aria-label` on the theme toggle before finishing.
