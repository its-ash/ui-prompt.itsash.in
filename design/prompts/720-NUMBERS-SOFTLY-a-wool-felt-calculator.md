# BUILD BRIEF FOR CODING AI — Landing Page: "NUMBERS, SOFTLY — a wool felt calculator"

**Your Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page described in this document in a single attempt. Every rule below is mandatory. All user-facing copy must be authored in English, on-theme, and concrete — no lorem ipsum, no "TODO" filler.

**Product narrative:** NUMBERS, SOFTLY is a web calculator whose interface feels like pressed wool felt — extruded soft keycaps, a warm cream surface, gentle ambient glow, a faint grain — rendered entirely in modern CSS Neumorphism (2020s Digital). The landing page sells that feeling.

---

## 1. Theme Identity & Visual Direction

**1.1 Style Core:** Neumorphism (soft/extruded/pressed surfaces), wool-felt warmth, animated, gradient washes, grain overlay, CSS-Grid keypad, glow accents. Everything must look touchable and soft — never sharp, never flat.

**1.2 Color Token Mapping (Light mode, in `:root`):**
- `--primary: #8b8680` (wool gray — accents, focus rings, icon chips)
- `--secondary: #98938c` (muted mid-tone — gradients, dividers)
- `--text-primary: #3f3c38` (darkened wool-charcoal derived from `#767170` — REQUIRED to guarantee AA 4.5:1 body-text contrast on cream)
- `--text-secondary: #767170` (secondary text; large sizes only if AA is verified)
- `--bg-primary: #efe8d8` (felt cream — main page background; NEVER pure white)
- `--bg-secondary: #e6ddcc` (deeper cream — alternating section bands, inset wells)
- `--border-default: #d8cfc0` (hairlines, card edges)
- `--bg-blush: #d8cfc0` and `--bg-felt: #a49e96` (gradient stops, glow layers)
- `--text-success: #46694a` / `--border-success` variant; `--text-error: #a1443a` / `--border-error` variant (muted felted green / clay red — must pass AA on cream; adjust if verification fails)
- Where a near-white is needed anywhere, use `#fefefe`, never `#ffffff`.
- **Contrast pairing law:** every light background token pairs with a dark text token, every dark background token pairs with a light text token — enforced in every theme, not just the default.

**1.3 Neumorphic Shadow Tokens (the heart of this theme):**
- `--neu-light: rgba(254, 254, 254, 0.9)` and `--neu-dark: rgba(118, 113, 112, 0.35)`
- Raised (outset): `--shadow-out-sm: -4px -4px 10px var(--neu-light), 4px 4px 10px var(--neu-dark)`; `--shadow-out-md` at `-8px -8px 18px / 8px 8px 18px`; `--shadow-out-lg` at `-12px -12px 28px / 12px 12px 28px`
- Pressed (inset): `--shadow-in-sm: inset 3px 3px 7px var(--neu-dark), inset -3px -3px 7px var(--neu-light)`; `--shadow-in-md` at `5px 5px 12px` equivalents
- Also define generic `--shadow-sm` / `--shadow-md` for standard elevation.
- **Surface rule:** any element using neumorphic shadows must share the background color family of `--bg-primary` so the dual-shadow illusion reads correctly.

**1.4 Glow, Gradients & Grain:**
- **Glow:** soft radial-gradient layers built from `#d8cfc0`/`#efe8d8` with `filter: blur(40px+)`, placed behind the hero calculator and around the featured pricing tier; animate with a slow opacity pulse (0.6 → 0.9). Use `mix-blend-mode` (multiply/overlay) and `isolation: isolate` on blend containers so text is never affected.
- **Gradients:** page background = layered `linear-gradient` wash from `#efe8d8` toward `#e4dbc9` plus fixed warm radial washes; gradient-clipped headline text is allowed ONLY if AA contrast holds in both themes.
- **Grain/Noise:** pure-CSS noise only — layered `repeating-radial-gradient`/`repeating-conic-gradient` at 2–3px scale as additional backgrounds on `body` (preferred, avoids stacking issues) or a fixed `body::after` overlay at `opacity: 0.04–0.08` with `pointer-events: none` and an optional slow position-shift keyframe. **Forbidden:** image assets, data-URI SVGs, inline SVGs for texture. Grain must never materially harm text contrast.

**1.5 Typography & Icons (Google-only):**
- Google Fonts via `<link>` + preconnect: **Quicksand** (500/600/700) for display/headings → `--font-display`; **Nunito Sans** (400/500/600/700) for body → `--font-base`.
- Icons: **Google Material Symbols (Rounded variant) only** — no inline SVGs, no local icon fonts, no emoji. Expect to use: `calculate`, `touch_app`, `visibility`, `lock`, `arrow_forward`, `star`, `check`, `close`, `chevron`/`expand_more`, `light_mode`, `dark_mode`, `add`, `remove`, `close`, `percent`, `backspace`, `equal`, `person`, `favorite`, `progress_activity`.
- Calculator readout digits: `font-variant-numeric: tabular-nums`.

**1.6 Shape & Motion Language:** Generous radii — `--radius-sm: 10px`, `--radius-md: 18px`, `--radius-lg: 28px`; pill (999px) allowed for primary CTAs. Easing: `--ease-standard: cubic-bezier(0.25, 0.8, 0.3, 1)` with `--transition-fast: 120ms`, `--transition-normal: 240ms`. Required keyframes: hero float, glow pulse, key press-flash, skeleton shimmer, scroll reveal fade-up — ALL ambient/looping keyframes wrapped in `@media (prefers-reduced-motion: no-preference)`.

---

## 2. Strict Rules & Architecture

**2.1 CSS-First & Zero Inline CSS:** All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML. All design properties, layout rules, and states are targeted exclusively via class/ID selectors. HTML stays semantic, clean, and visually agnostic — restyling the site must require touching CSS only.

**2.2 CSS Variable System:** All tokens in `:root` per §1.2–1.3, plus: `--spacing-gap: clamp(1rem, 2.5vw, 1.5rem)`, `--spacing-section: clamp(4rem, 10vw, 7rem)`, `--z-dropdown: 10`, `--z-modal: 50`, `--z-toast: 60` (plus `--z-header: 40` for the sticky bar). No hardcoded color or shadow values inside component rules — reference tokens.

**2.3 Mandatory Dark Mode:**
- Define dark tokens under BOTH `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>` (class wins). Dark palette: warm charcoal family — `--bg-primary: #262220`, `--bg-secondary: #2d2825`, `--text-primary: #ece5d8`, `--text-secondary: #b3aca0`, `--border-default: #3d3630`, neumorphic shadows flip (`--neu-light: rgba(255,255,255,0.07)`, `--neu-dark: rgba(0,0,0,0.55)`), success/error retuned for AA on charcoal. Include `<meta name="color-scheme" content="light dark">`.
- **Toggle:** visible theme toggle in the header (`light_mode`/`dark_mode` Material Symbol) with correct `aria-pressed` and descriptive `aria-label`. Persist choice via `localStorage`, fall back to `prefers-color-scheme` on first visit. `script.js` must apply the stored theme as its very first action. Background/text variables must swap seamlessly with zero HTML restructuring.
- **Exception clause:** Although the source style designates Light mode as the sole intended presentation, the mandatory Dark Mode tokens and toggle above remain required; Light mode must be the default theme on first visit.

**2.4 Layout Standards — Flexbox First, Grid Where Called For:**
- Flexbox is the default container model; **every flex container must default to `align-items: center`** unless an exception is justified in a CSS comment.
- CSS Grid (per the style spec) is required for: the hero calculator keypad (4 columns), feature cards (3-col), steps (3-col), testimonials (3-col), and pricing (3-col) — each collapsing to one column below 768px.
- **Mobile-first:** base styles are single-column; scale up with `min-width` media queries. Fluid type via `clamp()`. No horizontal scrolling at any viewport from 320px to 1920px.

**2.5 Framework Decision:** Clean, hand-authored custom CSS (no Tailwind) — the spec's technique list (blend modes, filters, keyframes, layered shadows) demands it. All components must be reusable generic classes (`.btn`, `.card`, `.input-group`, `.faq__item`, …) driven by CSS variables.

**2.6 Naming Convention:** **BEM only** — `block__element--modifier` (e.g., `.hero__title`, `.feature-card__icon`, `.pricing__card--featured`, `.faq__question`, `.input-group__error`). Never mix conventions; no utility-class soup.

---

## 3. Component Design Specifications

**3.1 Buttons (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`):**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target; neumorphic raised (`--shadow-out-md`) on the surface family; pill radius for primary.
- **Hover:** shadow deepens + `translateY(-1px)`, `cursor: pointer`; primary may gain a soft glow.
- **Focus:** distinct `:focus-visible` ring (`outline: 2px solid var(--primary); outline-offset: 3px`) — visible on both cream and charcoal.
- **Active/Pressed:** the keycap "sinks into felt" — swap to `--shadow-in-md` + `transform: scale(0.97)`.
- **Loading (`.is-loading`):** `aria-busy="true"`, interactions disabled to prevent double-clicks, spinner = rotating Material Symbol (`progress_activity`) or CSS ring — button dimensions must not change.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`, no hover effects.
- **Success/Error (`.is-success` / `.is-error`):** temporary feedback recoloring border/icon via `--text-success` / `--text-error`, always paired with an icon or text — never color alone.
- **`.btn--danger`:** clay-red treatment, visually distinct in both light and dark themes (defined even if unused on this page).

**3.2 Cards (`.card` + variants):**
- **Default:** raised neumorphic panel, background from the `--bg-primary` family, `--radius-lg`, padding via `--spacing-gap`, flexible flex/grid interior.
- **Hover (interactive):** `translateY(-2px)` + deepened shadow, `transition: var(--transition-normal)`.
- **Focus-within:** border/glow highlight when a child link or button receives focus.
- **Loading/Skeleton:** `.skeleton` shimmer utility (gradient-sweep keyframe) sized to final layout to prevent jumps — define it and use it for any scroll-reveal placeholder.
- **Empty State:** define the pattern — Google Icon + short heading + guidance text — as an exemplar usable in dynamic slots.

**3.3 Forms & Inputs (`.input-group`, `.input`, `.input-group__error`):**
- **Structure:** flex column wrapper containing a programmatically bound `<label for>`, a neumorphic **inset** (pressed-well) input field, and a dedicated error feedback container with `aria-live="polite"`.
- **States, all via CSS:** empty, focused (outline ring), filled, valid (`.is-valid` — success border + check icon), invalid (`.is-error` — error border, icon, human-readable message; never color alone), disabled, read-only.

**3.4 FAQ Accordion (`.faq__item`):**
- Each item: `<button class="faq__question" aria-expanded="false" aria-controls="…">` containing question text + chevron Material Symbol; answer inside a labeled region. CSS transitions height/opacity (grid-rows `0fr→1fr` or max-height) and rotates the chevron 180deg. Fully keyboard operable; JS updates `aria-expanded`; single-open-at-a-time behavior.

**3.5 Modal/Overlay (conditional — only if you introduce any overlay):** centered flex container (`align-items: center`), backdrop, Material Symbol close button, focus trapping, `Esc` + overlay-click close, animated opening/open/loading/success-error/closing states via CSS transitions, layered at `--z-modal`. Not required for this page otherwise.

---

## 4. Page Composition — Required Sections (in DOM Order)

**4.0 Global Chrome:** Skip-link ("Skip to content") as first focusable element. Slim sticky header: wordmark "NUMBERS, SOFTLY" with a `calculate` icon chip, anchor nav (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle (§2.3). Mobile: nav collapses to a labeled menu button (`aria-expanded`) revealing a flex-column panel — keyboard + Esc operable, layered at `--z-dropdown`/`--z-header`.

**4.1 Hero:** Two-column grid (copy | calculator), stacking below 768px. Copy: eyebrow, h1 ("Numbers, softly."), one-sentence value proposition, primary CTA "Start Calculating" (`arrow_forward`) + secondary CTA "See How It Works" (anchor to §4.3). **Calculator mock:** a raised neumorphic panel with an inset display (tabular-nums readout) and a 4×5 CSS-Grid keypad of neumorphic keycap buttons (digits, `add`/`remove`/`close`/`percent` operators, backspace, `equal`), every key ≥44px. This mock MUST be a functioning basic calculator (digits, + − × ÷, %, decimal, backspace, equals — safe logic, NO `eval`), with readout changes announced via `aria-live="polite"`. Ambient glow behind the calculator (§1.4). Idle animation: gentle float on the calculator plus staggered "press-flash" keyframe pulses across keys (offset via `nth-child` animation-delays), all under `prefers-reduced-motion: no-preference`.

**4.2 Features — 3 Cards:** Section heading + 3 `.card`s in a 3-col grid → 1-col. Suggested (write on-voice copy): tactile felt keycaps (`touch_app`), focus-first minimal interface (`visibility`), everything computed locally — privacy (`lock`). Each card: inset icon chip, title, two-line description. Hover lift + focus-within per §3.2.

**4.3 How It Works — 3 Steps:** 3-col grid → stacked. Each step: oversized inset number disc (01 / 02 / 03), step title, one-liner — e.g., Press (keys sink like felt), Read (a warm, calm display), Done (results stay put). Connect steps with a soft dashed gradient line via pure CSS, hidden on mobile.

**4.4 Testimonials:** 3 quote cards in a 3-col grid → 1-col: five `star` Material Symbols, quote, inset avatar chip (`person` icon) + fictional name + role. Optional scroll-reveal via IntersectionObserver adding `.is-visible` (fade-up transition, reduced-motion safe) — content must be fully visible without JS.

**4.5 Pricing — 3 Tiers:** 3-col grid → 1-col. Tiers: "Cotton" (free), "Wool" (pro — highlighted), "Merino" (team). Featured tier: elevated (`translateY(-6px)` ≥768px), glow border, badge "Most Loved" (`favorite` icon + text — not color-only). Each tier: name, monthly price, 4–5 feature rows with `check` icons, CTA (middle `.btn--primary`, sides `.btn--ghost`) anchoring to the Final CTA.

**4.6 FAQ:** 5–6 accordion items per §3.4 with on-theme questions (offline use, keyboard support, dark mode, data privacy, platform availability).

**4.7 Final CTA:** Large raised neumorphic panel: headline, one-line subcopy, email capture form (§3.3) with a "Get early access" button. On submit: validate → button loading (§3.1) → success state, with an `aria-live="polite"` inline confirmation (or inline validation errors). Simulated locally; no backend calls.

**4.8 Footer:** Brand + one-line tagline; secondary link columns (Product, Company, Support); social icon buttons (Material Symbols, `aria-label`s, 44px targets); copyright with year (JS-updated with a static fallback present in HTML). Subtle top hairline, visible link focus states, text ≥14px.

---

## 5. Core UX & Micro-Interaction Rules

- **Responsive by default:** fluid `clamp()` sizing, breakpoints without horizontal overflow, from 320px up.
- **Smooth motion:** `transition: var(--transition-normal)` on all state changes; every ambient/looping keyframe guarded by `prefers-reduced-motion: no-preference`.
- **Accessibility (a11y):** semantic HTML5 landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); strict heading hierarchy h1→h2→h3 with no skips; AA 4.5:1 text contrast in BOTH themes verified against cream and charcoal under the grain/glow overlays; state is never communicated by color alone; every interactive element is keyboard operable with visible focus in logical DOM order; `aria-live` regions for the calculator readout and all form feedback.
- **Mandatory visual feedback:** every hover, click, keypress, and submission produces a visible state change.
- **Destructive patterns:** `.btn--danger` visually distinct in both themes.
- **Blend & filter safety:** blend containers isolated (`isolation: isolate`) so text and focus rings are never visually compromised.

---

## 6. Deliverable & Output Format

- **Files:** `index.html`, `style.css`, `script.js` — nothing else. A single `<script src="script.js" defer></script>` reference; no inline `<script>` blocks, no inline styles, no `style` attributes. HTML head includes viewport meta, `color-scheme` meta, title, and meta description.
- **Naming:** BEM exclusively, per §2.6.
- **Copy:** all user-facing copy authored in English, on-theme, concrete; placeholders only where content was genuinely unspecified.
- **`script.js` scope (only):** theme init/toggle + persistence + `aria-pressed`; mobile nav toggle; FAQ accordion ARIA + single-open; hero calculator logic (safe, no `eval`, `aria-live` readout); optional IntersectionObserver reveals; email form validation simulation + loading/success/error + `aria-live`; footer year. No libraries, no frameworks, nothing beyond this list.
- **Definition of done:** opens correctly from `file://`; zero console errors; no horizontal scroll 320px→1920px; both themes toggle and persist; fully keyboard operable; reduced motion respected; all sections present in the order of §4.
