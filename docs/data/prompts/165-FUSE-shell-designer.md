# BUILD PROMPT — "FUSE — Shell Designer" Glassmorphism Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-grade landing page on the first attempt.

**Objective:** Create a single-page marketing site for **FUSE**, a browser-based design studio for shell/terminal prompts. The visual language is **Glassmorphism (2020s Digital)**: translucent frosted-glass panels floating over soft gradient aurora backgrounds with subtle "firework" spark accents. Keywords: firework, shell, studio, glass, translucent, gradient, blur. **Light mode is the designed default theme** (per style spec ✓ Light / ○ Dark); Dark Mode remains **mandatory** and fully implemented per Rule 1.3.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is **forbidden** anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and styling-agnostic. Changing the site's entire look must only require editing `style.css`.

### 1.2 CSS Variables (`var(--...)`) & Theme Tokens
Store **all** visual tokens in `:root` and override them in the dark theme. Use exactly this token sheet:

| Token | Light (default) | Dark |
|---|---|---|
| `--primary` | `#0a1020` | `#d8e2f0` |
| `--primary-contrast` (text on primary) | `#e8eef8` | `#060a14` |
| `--secondary` | `#6a82a8` | `#6a82a8` |
| `--bg-primary` | `#e8eef8` | `#060a14` |
| `--bg-secondary` | `#d8e2f0` | `#0c1424` |
| `--bg-elevated` | `#fefefe` | `#0a1020` |
| `--text-primary` | `#060a14` | `#e8eef8` |
| `--text-secondary` | `#4d6180` | `#a9bdd8` |
| `--text-success` | `#1a7f4b` | `#6fd39a` |
| `--text-error` | `#b3261e` | `#ff8f8a` |
| `--border-default` | `rgba(106,130,168,.35)` | `rgba(216,226,240,.16)` |
| `--border-error` / `--border-success` | `#b3261e` / `#1a7f4b` | `#ff8f8a` / `#6fd39a` |
| `--glass-bg` | `rgba(255,255,255,.45)` | `rgba(255,255,255,.06)` |
| `--glass-bg-strong` | `rgba(255,255,255,.62)` | `rgba(255,255,255,.10)` |
| `--glass-border` | `rgba(255,255,255,.65)` | `rgba(255,255,255,.14)` |
| `--gradient-accent` | `linear-gradient(135deg,#6a82a8,#0a1020)` | `linear-gradient(135deg,#a9bdd8,#6a82a8)` |
| `--font-base` / `--font-display` / `--font-mono` | Inter / Space Grotesk / JetBrains Mono | same |
| `--radius-sm / -md / -lg / -xl` | `8px / 16px / 24px / 32px` | same |
| `--shadow-sm / -md / -glass` | soft ambient shadows tuned per theme | same |
| `--spacing-gap` | `1.5rem` (section rhythm: 96–128px desktop, 64px mobile) | same |
| `--transition-fast / -normal` | `150ms / 300ms` | same |
| `--ease-standard` | `cubic-bezier(.4,0,.2,1)` | same |
| `--z-dropdown / -nav / -modal / -toast` | `100 / 200 / 1000 / 1100` | same |

* **Contrast Pairing:** Every light background token pairs with a dark text token and vice versa — enforce in **both** themes. `#6a82a8` is reserved for icons, large display text, and decorative accents only; body copy uses `--text-secondary` (AA-compliant derivative) as defined above.
* **Light Mode Background:** Never use `#ffffff` as a page background. Base is `#e8eef8`; where near-white is needed, use `#fefefe`.

### 1.3 Mandatory Dark Mode Support
* **Implementation:** Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>` (class takes precedence).
* **Theme Switching:** All surfaces, glass panels, text, and borders must flip seamlessly via variables only — no HTML restructuring.
* **Persistence:** Store the user's choice in `localStorage`; on first visit with no stored choice, fall back to `prefers-color-scheme`. Provide a visible toggle in the header using Google Material Symbols (`light_mode` / `dark_mode`) with correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode").

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structures with **Flexbox**. Every flex container defaults to `align-items: center` unless an explicitly justified exception is documented in a CSS comment.
* **Mobile-first:** All rows convert to columns on small viewports (`flex-direction: column` under ~768px). Use `flex-wrap: wrap`, `min-width: 0` on children, and `overflow-x: hidden` on body — horizontal scrolling is a defect.
* Card rows (Features, Testimonials, Pricing) use `display: flex; flex-wrap: wrap` with `flex: 1 1 300px` children — not CSS grid.

### 1.5 Framework Default
The style spec lists raw CSS techniques (Flexbox, Backdrop Filter, CSS Filters, Transitions, Transforms, Gradients, Box Shadows, Border Radius) and requests no framework: therefore use **clean, hand-written custom CSS** in `style.css` with a commented table of contents. All classes must be semantic and reusable (`.btn`, `.glass-card`, `.input-group`), bound to the CSS variables above. No build step, no frameworks, no utility-class soup.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load **Space Grotesk** (display/headings), **Inter** (body, bound to `--font-base`), and **JetBrains Mono** (all shell/code snippets, bound to `--font-mono`) via Google Fonts `<link>` with `preconnect`.
* **Icons:** Use **Google Material Symbols (Rounded)** via the official stylesheet. **Raw inline SVGs and local icon files are forbidden.** Footer social links must be text links (e.g., "GitHub", "X", "Discord") — do not use brand SVGs.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn` + modifiers `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`)
* **Default:** `display: flex; align-items: center; justify-content: center; gap: .5rem;` minimum touch target 44×44px. Primary uses `--primary` bg + `--primary-contrast` text with a subtle glass sheen; secondary uses `--glass-bg` + `--glass-border`.
* **Hover:** Brightness/elevation shift + `cursor: pointer`.
* **Focus:** Distinct `:focus-visible` ring built from `--secondary` (outline + offset) for keyboard navigation.
* **Active:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** Disables interaction, prevents double-clicks, renders a rotating Material Symbol spinner (`progress`) without changing button dimensions; set `aria-busy="true"`.
* **Disabled:** `opacity: .5; filter: grayscale(1); cursor: not-allowed;`.
* **Success/Error (`.is-success`, `.is-error`):** Temporary feedback driven by `--text-success` / `--text-error`, announced via `aria-live`.

### 2.2 Card Component (`.glass-card`)
* **Default:** Flexbox layout, `background: var(--glass-bg)`, `backdrop-filter: blur(18px) saturate(160%)`, `border: 1px solid var(--glass-border)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-glass)`. Provide an `@supports not (backdrop-filter: blur(1px))` fallback raising surface opacity to ~0.9.
* **Hover:** `transform: translateY(-2px)` + shadow elevation shift.
* **Focus-within:** Border highlights when a child link/button receives focus.
* **Loading (Skeleton):** Define a `.skeleton` shimmer utility (gradient sweep keyframes) in CSS, used for the email form's pending state and available for dynamic content.
* **Empty State:** Define a structured fallback pattern (Material Symbol + guidance text) in CSS for reuse.

### 2.3 Form & Input (`.input-group`)
* **States:** Empty, Focused (outline ring), Filled, Valid (`.is-valid`: success border + `check_circle` icon), Invalid (`.is-invalid`: error border, `--text-error` message, `error` icon), Disabled, Read-only.
* **Structure:** Flex container wrapping `<label>`, `<input>`, and a dedicated error feedback element with `aria-live="polite"`.

### 2.4 Modal / Popup (`.modal`)
* **States:** Opening, Open, Closing — all animated with CSS transitions (fade backdrop + scale/translate panel).
* **UX Features:** Centered flex overlay (`align-items: center`), blurred backdrop, Material Symbol `close` button, keyboard focus trap, focus return on close, close via `Esc` and overlay click, `role="dialog"`, `aria-modal="true"`.

---

## 3. CORE UX & MICRO-INTERACTION RULES
* **Responsive by Default:** Fluid sizing, no horizontal overflow at any viewport from 320px up.
* **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; fully respect `prefers-reduced-motion` (disable orb drift, spark twinkle, typing animation, and scroll reveals).
* **Accessibility (a11y):** AA contrast in both themes; never rely on color alone to communicate state; semantic HTML5 landmarks (`header`, `main`, `footer`, `section` with `aria-labelledby`); one `<h1>`; logical focus order; full keyboard operability; skip-to-content link; `aria-live` regions for form errors, loading, and success feedback.
* **Mandatory Visual Feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive Actions:** `.btn--danger` must be visually distinct in both themes (used only if a destructive action genuinely appears).

---

## 4. DELIVERABLE & OUTPUT FORMAT
* **File Structure:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks — a single `<script src="script.js" defer></script>` before `</body>`.
* **Naming Convention:** BEM throughout (`.nav__link`, `.btn--primary`, `.pricing-card--featured`, `.faq__item`). Never mix conventions.
* **No Unrequested Placeholders:** Write real, polished English copy for every section — lorem ipsum is forbidden. In-page nav links must anchor to real section IDs; outbound/footer links may use `href="#"`.

---

## 5. DESIGN BRIEF — "FUSE — SHELL DESIGNER" (Glassmorphism, 2020s Digital)

* **5.1 Concept:** FUSE is a studio where developers design their shell prompt — segments, colors, gradients, glyphs — in a live preview, then export a ready-to-run config. The page must feel like a design studio: precise, translucent, quietly celebratory.
* **5.2 Color System:** Deep navies (`#060a14`, `#0a1020`, `#0c1424`) anchor text and primary actions; frosty blues (`#d8e2f0`, `#e8eef8`) form the light canvas; steel blue `#6a82a8` is the connective accent for icons, gradients, and large display text.
* **5.3 Glass Surface System:** Two tiers — `--glass-bg` (cards, nav) and `--glass-bg-strong` (terminal mockup, modal, featured pricing) — each with `backdrop-filter: blur(18px) saturate(160%)`, a 1px light inner border, and a soft top-edge highlight. Limit stacked blur layers for performance.
* **5.4 Background System:** Fixed full-page gradient (`--bg-primary` → `--bg-secondary`) with 3–4 large blurred radial-gradient **aurora orbs** in `#6a82a8`/navy, slowly drifting (CSS keyframes). Add a restrained **firework motif**: small radial-gradient spark bursts (pure CSS, `aria-hidden="true"`, decorative only) with a gentle twinkle, concentrated in the Hero and Final CTA.
* **5.5 CSS Filters:** Apply `filter: saturate()/brightness()` shifts on orb hover regions and card hover states; use `filter` never where contrast is required.

---

## 6. SECTION-BY-SECTION SPECIFICATION

**6.1 Header (sticky glass nav):** Fixed nav with `backdrop-filter` blur, wordmark "FUSE" (Space Grotesk) with a `flare` Material Symbol, anchor links (Features, How It Works, Pricing, FAQ), theme toggle, and a compact "Get started" `.btn--primary`. Mobile: hamburger (`menu`/`close` icons) toggling a glass dropdown panel with `aria-expanded`.

**6.2 Hero:** Two-column flex (stacks on mobile). Left: eyebrow chip ("Shell design studio"), `<h1>` with one gradient-text word, subheadline, CTA row — primary "Start designing free" and secondary "Watch the demo" (opens the demo modal, §2.4) — plus a compact 3-stat strip (e.g., shells themed, themes shared, rating). Right: a `.glass-card--strong` **terminal mockup** — window chrome dots (`aria-hidden`), JetBrains Mono content showing a styled prompt (user@host, path, git branch in accent colors), and a small floating glass chip with theme swatches. Aurora orbs + firework sparks behind.

**6.3 Features (3 cards):** Flex-wrapped row of `.glass-card`s, each with a Material Symbol in a glass tile, title, description, and "Learn more" arrow link: **Live prompt studio** (`tune`), **Gradient engine** (`gradient`), **One-click export** (`rocket_launch` — zsh, bash, fish, PowerShell, starship configs).

**6.4 How It Works (3 steps):** Horizontal stepper (vertical on mobile) with mono-font numerals 01–03, a connecting gradient line, and glass step cards: *Pick a base theme → Design in the studio → Export & install with one command*.

**6.5 Testimonials:** 3 glass quote cards; avatar = gradient circle with initials (no external images); name, role, quote; a `star` icon row with an `aria-label` rating.

**6.6 Pricing (3 tiers):** Flex row of glass cards — **Spark** (Free), **Fuse Pro** (featured: "Most popular" badge, `--gradient-accent` border, elevated shadow, `.btn--primary`), **Atelier Studio** (teams). Each: tier name, price, blurb, check-icon feature list, CTA. Footnote line beneath.

**6.7 FAQ:** 5–6 button-based accordion items (`aria-expanded`, `aria-controls`, animated height via `max-height` transition, keyboard operable): shell compatibility, installation, theme licensing, PowerShell support, free plan limits, cancellation.

**6.8 Final CTA:** Full-width glass panel over intensified aurora + sparks. Headline, subcopy, and an **email capture form** (`.input-group` inline with button): validate format on submit, show `.is-invalid` with `aria-live` error, then `.is-loading` (button spinner, `.skeleton` on the panel) → `.is-success` confirmation message. Small print beneath.

**6.9 Footer:** Brand block (logo, one-liner) + three secondary link columns (Product, Resources, Company) + bottom bar with copyright, Privacy/Terms/Status links, and text social links (GitHub, X, Discord).

---

## 7. JAVABSCRIPT REQUIREMENTS (`script.js` only)
Implement exactly: (1) theme toggle with `localStorage` + `prefers-color-scheme` fallback; (2) mobile nav toggle; (3) FAQ accordion; (4) demo modal open/close with focus trap, `Esc`, overlay click, focus return; (5) email form validation + simulated submit (loading → success) with `aria-live`; (6) optional IntersectionObserver scroll-reveal adding `.is-visible`, disabled under `prefers-reduced-motion`. No other JS.

## 8. COPY DIRECTION
All user-facing copy in **English**. Tone: confident, technical, studio-grade — short sentences, no exclamation-mark overload, no marketing fluff. Suggested headline direction (adapt freely): *"Design a shell that sparks."* with subcopy explaining the live-preview studio and one-click export. Write realistic feature descriptions, testimonial quotes, pricing features, and FAQ answers — every string must read like a real product.
