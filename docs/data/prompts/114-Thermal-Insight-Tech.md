## ROLE & OBJECTIVE

Act as a **Senior Frontend Engineer and Expert UI Designer**. Your task is to code a complete, production-ready landing page for **"Thermal Insight Tech"** — an industrial thermal-imaging and infrared analytics platform — **on the first attempt**: fully styled, fully interactive, no placeholders, no TODOs, no follow-up questions. Aesthetic: **Future Industrial** — analytical, authoritative, dark thermal-console HUD with infrared spectrum gradients. Output category: Dark Tech & Cyber. All user-facing copy must be written in **English**.

---

## 0. PROJECT SPECIFICATION — "THERMAL INSIGHT TECH"

### 0.1 Theme Identity
- Mental model: an infrared camera HUD / thermal analysis console. Every section should read like a calibrated instrument: monospaced telemetry labels, crosshair reticles, spectrum temperature bars, emissive glows, wireframe overlays.

### 0.2 Color Palette & Token Mapping (bind these exact values in `:root`)

**Core tokens:**
- `--primary: #FFC800` — thermal amber. CTAs, highlights, focus rings, HUD labels.
- `--secondary: #0000FF` — cool blue. **Decorative only** (gradient stops, spectrum bars, glows). Never use as text color on the dark background — it fails contrast.
- `--bg-primary: #050B26` — deep space navy. The only page background.
- `--bg-secondary: #0A1238` — elevated card/panel surface (derived lighter navy; must keep light-text pairing).
- `--text-primary: #FFFFFF` · `--text-secondary: #A9B4D8` (muted copy, ≥4.5:1 on both bg tokens).
- `--text-success: #00FF00` (mid green — ~14:1 on dark, safe for text/icons) · `--text-error: #FF5C5C` (accessible hot-red variant for text/icons; raw `#FF0000` stays decorative).
- `--border-default: rgba(255,255,255,0.14)` · `--border-error: #FF5C5C` · `--border-success: #00FF00`.

**Spectrum tokens (decorative):**
- `--spectrum-cool: #0000FF`, `--spectrum-mid: #00FF00`, `--spectrum-hot: #FF0000`.
- `--spectrum-gradient: linear-gradient(90deg, #0000FF, #00FF00, #FF0000)` — for divider bars, card top-borders, temperature scales, gradient borders.
- `--spectrum-gradient-text: linear-gradient(90deg, #4D7CFF, #00FF66, #FF4D4D)` — **Accessibility exception:** the spec's raw `#0000FF → #00FF00 → #FF0000` gradient is kept verbatim for decorative bars/borders, but when clipped to text the cool/hot stops are brightened to preserve the mandatory ≥3:1 large-text contrast rule.

**Glow, depth, motion, stacking, type (all mandatory in `:root`):**
- `--glow-primary: 0 0 24px rgba(255,200,0,0.25)` · `--glow-spectrum: 0 0 24px rgba(0,255,127,0.20)`
- `--radius-sm: 4px` · `--radius-md: 8px` · `--radius-lg: 16px`
- `--shadow-sm: 0 2px 8px rgba(0,0,0,0.40)` · `--shadow-md: 0 8px 32px rgba(0,0,0,0.50)`
- `--spacing-gap: 1.5rem` · `--transition-fast: 150ms` · `--transition-normal: 300ms` · `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100` · `--z-modal: 200` · `--z-toast: 300`
- `--font-base: 'Share Tech Mono', 'Courier New', monospace`

### 0.3 Signature Visual Effects (pure CSS — no images, no inline SVG)
- **Thermal spectrum gradient text:** required for the hero H1 — implement once as a reusable `.text-spectrum` class: `background-image: var(--spectrum-gradient-text); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent;`.
- **HUD overlays:** corner brackets on cards/panels via `::before`/`::after` (no extra HTML); a faint fixed grid backdrop on the body via `repeating-linear-gradient` at ~3% white opacity; small uppercase telemetry labels (e.g., `MODULE 01 // CAPABILITIES`, `ΔT +42.6°C`, `SCAN 00:12:47`) — always `aria-hidden="true"` when decorative.
- **Wireframe crosshairs:** reticle crosshairs and `+` markers on the hero visual via pseudo-elements.
- **Emissive glow:** `box-shadow`/`text-shadow` using `--glow-primary` / `--glow-spectrum` on hover, focus, badges, and the featured pricing tier.
- **Thermal readout panel (hero visual):** a simulated thermal scan built from layered `radial-gradient`s (hot red core → green mid → cool blue field) inside a `.hud-panel` with scan grid, crosshair, readout rows, and a horizontal temperature scale bar using `--spectrum-gradient` with tick labels (20°C → 120°C).
- **Polish:** `::selection { background: var(--primary); color: #050B26; }`.

### 0.4 Required Sections (build in this order; author realistic English marketing copy for each — lorem ipsum is forbidden)

0. **Header (sticky nav):** translucent `--bg-primary` + `backdrop-filter: blur`, bottom border. Text logo (`THERMAL//INSIGHT`, `.text-spectrum` on part of the wordmark). Anchor links: Features, Process, Pricing, FAQ. Primary CTA button. Mobile: Material Symbol `menu` button toggling a dropdown panel (`--z-dropdown`) with `aria-expanded`/`aria-controls`, closing on `Esc` and link click. Include a "Skip to main content" skip link.
1. **Hero:** full-viewport flex column. Eyebrow telemetry tag (`INFRARED INTELLIGENCE PLATFORM // v4.2`). H1 in `.text-spectrum` (e.g., "SEE THE HEAT. KNOW THE TRUTH."). Subheadline in `--text-secondary`. CTA row: `.btn--primary` "Start Free Analysis" + `.btn--ghost` "View Live Demo" (opens the demo modal, §2.4). The thermal readout `.hud-panel` (§0.3). Stats strip: 3–4 mono stats (`2.4M SCANS`, `99.7% ACCURACY`, `38 COUNTRIES`).
2. **Features (3 cards):** section header pattern — eyebrow (`MODULE 01 // CAPABILITIES`), H2, one-line subcopy. Three `.card`s — Real-Time Thermal Capture (`sensors`), AI Anomaly Detection (`psychology`), Predictive Maintenance Alerts (`notification_important`) — each with a 3px `--spectrum-gradient` top border, HUD corner brackets, icon, title, copy. Flex row on desktop, single column on mobile.
3. **How It Works (3 steps):** eyebrow `MODULE 02 // PROCESS`. Steps `01 CAPTURE`, `02 ANALYZE`, `03 ACT` — large mono numerals, icon, title, copy, connected by a horizontal `--spectrum-gradient` line on desktop (hidden or vertical on mobile).
4. **Testimonials:** eyebrow `MODULE 03 // FIELD REPORTS`. Three quote cards styled as analysis logs: header row with a CSS monogram avatar (initials in a circle — no external images), name, role/company; `format_quote` icon; quote; a `VERIFIED` badge (`check_circle` icon + text — never color alone).
5. **Pricing (3 tiers):** eyebrow `MODULE 04 // ACCESS LEVELS`. Tiers: `SCOUT` (free), `ANALYST` (featured), `ENTERPRISE` (custom). Included features use `check_circle` in `--text-success`; excluded use `cancel` in muted `--text-secondary` plus strikethrough. Featured tier: `--primary` border, `--glow-primary`, subtle elevation, text badge `RECOMMENDED`. Per-tier CTAs (`.btn--primary` featured, `.btn--ghost` elsewhere). Optional monthly/annual toggle — if included, fully functional with `aria-pressed` and an `aria-live` price update.
6. **FAQ:** eyebrow `MODULE 05 // KNOWLEDGE BASE`. 5–6 questions as an accessible accordion (§2.5).
7. **Final CTA:** full-width panel with a `--spectrum-gradient` border (padding-box/border-box double-background technique), H2, subcopy, and an email capture `.input-group` (§2.3) with the full state machine: idle → loading (button spinner, ~1.2s simulated) → success (`--text-success` message + icon) or error (invalid email: `--border-error`, icon, message). Microcopy: "No credit card required. 14-day full-spectrum trial."
8. **Footer:** brand block (logo, tagline), grouped secondary links (Product, Company, Resources, Legal), contact/social links using Material Symbols (`mail`, `rss_feed`, `public`) or text labels — inline SVG brand logos are forbidden. Bottom bar: `© 2025 Thermal Insight Tech. All rights reserved.` plus a decorative `SYS STATUS: OPERATIONAL` readout. All footer links get hover + `:focus-visible` styles.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML. Inline event-handler attributes (`onclick`, etc.) are equally forbidden.
- **Class/ID selectors only:** every design property, layout rule, and state lives in `style.css`, targeted via class or ID selectors.
- **Minimal HTML modifications:** markup stays semantic and style-agnostic (landmarks: `header`, `nav`, `main`, `section`, `footer`; one `h1`; `h2` per section; `h3` for cards). Re-theming the site must require editing `style.css` only.

### 1.2 CSS Variables & Theme Tokens
- All tokens in §0.2 must be defined in `:root` and consumed via `var(--...)`. No raw hex values in component rules — only inside `:root` and gradients composed from tokens.
- **Contrast pairing:** every dark background token pairs with light text tokens; every light-filled element (amber buttons, badges, monogram avatars) carries dark text (`#050B26`). Verify ≥4.5:1 for body text, ≥3:1 for large text and UI components.
- **Light-mode background rule (`#fefefe`):** void for this theme — see the dark-only exception in §1.3.

### 1.3 Mandatory Dark Mode Support — Dark-Only Exception
- Dark mode is mandatory and fully satisfied here: the dark thermal palette is the single, unconditional global theme defined in `:root`, with `color-scheme: dark` declared so native controls and scrollbars match.
- **Exception (per style spec: Light ✗ / Dark ✓ Full):** this theme is dark-only. Do not define light-mode tokens, a theme toggle, or `localStorage` persistence. The page must render identically regardless of the OS `prefers-color-scheme`.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures with Flexbox. **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
- **Mobile-first:** single-column stacks by default; row layouts added at `min-width` breakpoints (~768px, ~1024px). No horizontal scrolling at any viewport from 320px up. Fluid type via `clamp()`. Content container: max-width ~1200px, centered.
- Anchor targets get `scroll-margin-top` so the sticky header never covers section headings.

### 1.5 Framework & Styling Approach
- Use Tailwind CSS **or** clean custom CSS organized with Tailwind-style `@layer`/`@apply` conventions. Given this theme's bespoke HUD effects, hand-authored component CSS in `style.css` is the expected approach.
- Utilities must map back to CSS variables; generic reusable classes `.btn`, `.card`, `.input-group` must exist and be reused across all instances.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** load `Share Tech Mono` from Google Fonts via `<link>` (with `preconnect`) and bind it to `--font-base`. Headings, body copy, and HUD labels all use it (fallback: `'Courier New', monospace`). Any additional typeface must also come from Google Fonts.
- **Icons:** Google Material Symbols (Outlined) via the official Google Fonts stylesheet. Usage: `<span class="material-symbols-outlined" aria-hidden="true">thermostat</span>`. **Inline SVGs and local icon files are forbidden.**

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn` + BEM modifiers)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; `--radius-md`; uppercase mono label with letter-spacing.
- **Variants:** `.btn--primary` (amber `--primary` bg + `#050B26` text), `.btn--ghost` (transparent, `--border-default` border, light text), `.btn--danger` (visually distinct in the dark theme: `--border-error` with red-tinted glow — define it even if unused).
- **Hover:** brightness/glow shift (`--glow-primary` on primary) + `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring built from CSS variables (`outline: 2px solid var(--primary); outline-offset: 2px;`) — never removed.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables pointer events to prevent double-clicks, renders a CSS spinner or animated Material Symbol, and must not change button dimensions.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error` (used by the Final CTA form).

### 2.2 Card Component (`.card`)
- **Default:** flexible flexbox layout, `--bg-secondary` surface, `--border-default` border, `--radius-lg`, `--shadow-sm`, HUD corner brackets via pseudo-elements; `.card--featured` variant for the middle pricing tier.
- **Hover:** elevation/glow shift and/or `transform: translateY(-2px)`.
- **Focus-within:** card border highlights when a child link/button receives focus.
- **Loading (skeleton):** define a shimmer animation class (`.card--skeleton`) that preserves layout dimensions.
- **Empty state:** structured fallback pattern — Material Symbol + short guidance text — defined in CSS for any dynamically emptied region.

### 2.3 Form & Input (`.input-group`)
- **Structure:** flex container (column on mobile, row on desktop) wrapping a `<label>` (tied via `for`/`id`), the `<input type="email">`, and a dedicated error/success feedback container with `aria-live="polite"`.
- **States (all class-driven):** empty; focused (outline ring from `--primary`); filled; valid (`--border-success` + `check_circle` icon); invalid (`--border-error`, `--text-error` message + `error` icon — never color alone); disabled; read-only.
- **Behavior:** client-side email validation; submit runs the button's loading state, then resolves to success or error with visible feedback in the `aria-live` region. Optionally fire a `.toast` (fixed, `--z-toast`, `aria-live="polite"`) on success.

### 2.4 Modal / Popup (`.modal` — used by the Hero's "View Live Demo" button)
- **States:** opening (fade + scale via `--transition-normal`), open, loading (brief "CALIBRATING…" shimmer inside the modal), success (rendered thermal readout), closing (animated).
- **UX:** centered flex overlay (`align-items: center`) with dimmed backdrop; close button using Material Symbol `close`; keyboard **focus trap** while open; focus returns to the trigger on close; closes via `Esc` and backdrop click. `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.

### 2.5 FAQ Accordion (`.faq__item`)
- Each question is a `<button>` trigger with `aria-expanded` + `aria-controls`; answer region with `role="region"` + `aria-labelledby`.
- Chevron Material Symbol rotates via CSS on open; height animates smoothly (grid-rows or max-height technique) with `--transition-normal`.
- Fully keyboard operable (Enter/Space), visible focus ring, one-item-open-at-a-time behavior.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, no horizontal overflow, all layouts stack gracefully from 320px up.
- **Smooth animations:** every state change transitions with `var(--transition-normal)` and `var(--ease-standard)`; smooth anchor scrolling via `scroll-behavior: smooth`. All motion (scanlines, shimmer, reveals, spinners, transforms, smooth scroll) is disabled under `@media (prefers-reduced-motion: reduce)`.
- **Accessibility (a11y):** AA contrast throughout the dark theme; never rely on color alone (pair color with icons/text); semantic HTML5; correct ARIA roles/labels on all custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for form feedback and loading states; decorative HUD elements `aria-hidden="true"`; sections labeled via `aria-labelledby`.
- **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change.
- **Destructive actions:** `.btn--danger` must be visually distinct in the dark theme (define it even if the page contains no destructive action).

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, and `script.js`. The HTML contains exactly one `<script src="script.js" defer></script>` reference; no inline `<script>` or `<style>` blocks, no inline handlers.
- **Naming convention:** one convention everywhere — **BEM** (`block__element--modifier`) for components, with `.is-*` classes for JS-toggled states (`.is-open`, `.is-loading`, `.is-error`). Never mix conventions.
- **JS scope (`script.js`):** mobile menu toggle, FAQ accordion, modal lifecycle (open/close/focus trap/`Esc`), form validation + simulated submit states, and optional IntersectionObserver scroll reveals — all via `addEventListener`, with proper ARIA updates and reduced-motion respect.
- **No unrequested placeholders:** author realistic on-theme English copy for every section (headings, features, steps, testimonials, pricing, FAQ, footer). Placeholders are permitted only where content is genuinely unknowable.
- **Meta:** `lang="en"`, viewport meta, descriptive `<title>` and `<meta name="description">` for "Thermal Insight Tech".

**Execute now:** produce the complete final code for all three files in a single response — fully styled, fully interactive, first-attempt quality.
