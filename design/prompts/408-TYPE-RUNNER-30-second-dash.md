# BUILD DIRECTIVE — LANDING PAGE: "TYPE RUNNER — 30 SECOND DASH"

## 0. ROLE & MISSION

You are a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-grade landing page in a single pass — first attempt, no follow-up questions, no unresolved placeholders**. The page markets **TYPE RUNNER**, a browser-based typing-speed game where players race a **30-second typing sprint** ("the dash"), post their WPM to global leaderboards, and replay ghost runs. Every rule, state, and section below is mandatory. **All user-facing copy must be written in English.**

## 1. THEME BRIEF & VISUAL DIRECTION

**1.1 Identity**
- Style name: **TYPE RUNNER — 30 second dash** · Type: **Brutalism** · Era: **2010s Web Brutalism**.
- Keywords: `brutal, typography, speedrun, brutalism, animated, blur, grid-layout`.
- Mood: raw, loud, fast. Oversized typography against an exposed structural grid, harsh ink-on-cream contrast, one signal red for urgency, and constant motion — blinking carets, marquee tickers, blurred speed streaks — as if the page itself is mid-dash.

**1.2 Art Direction (Brutalist Interpretation)**
- **Grid exposed:** page scaffolding uses CSS Grid with visible structural lines (thin `rgba` grid via repeating `linear-gradient` backgrounds) — the skeleton is the aesthetic.
- **Type as the hero:** uppercase display headings (`clamp()`-sized, tight leading) with hard offset `text-shadow`; monospace for data, stats, and labels.
- **Hard shadows, zero radius:** all corners `0px`; elevation is hard-edged offset shadow (no blur); buttons "press" by translating into their shadow.
- **Neumorphism (scoped):** reserved for instrument surfaces only — hero demo terminal, input fields, and toggle switches. Soft dual shadows (one dark, one light) on cream/`#fefefe` surfaces. Never apply neumorphic shadows to ink surfaces; in Dark Mode, substitute subtle inset shadow + 1px light highlight border.
- **Blur (scoped):** `backdrop-filter: blur()` on the sticky header (with solid-color fallback); decorative blurred ink/red "speed streaks" (skewed rectangles, `filter: blur(40px)`, keyframe-animated) in the hero. All decorative elements: `aria-hidden="true"`, `pointer-events: none`.
- **Micro-animations:** blinking block caret in the wordmark, self-typing demo line, infinite marquee, count-up stats, hover/press snaps, accordion sweeps — all degrading gracefully under `prefers-reduced-motion`.

**1.3 Required CSS Techniques (all mandatory):** CSS Grid, Flexbox, CSS Filters, Keyframe Animations, Transitions, Transforms, Box Shadows, Text Shadows.

**1.4 Color Mood:** cream paper `#f2efe6`, ink `#141414`, near-opaque ink veil `#141414f0`, signal red `#e32636`. Exact token mapping lives in §2.2 — **never hardcode hex values outside `:root`/theme blocks.**

## 2. STRICT RULES & ARCHITECTURE

**2.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in **`style.css`**. **Forbidden:** the `style="..."` attribute, inline `<style>` blocks, presentational markup.
- Style exclusively via **class/ID selectors**. HTML stays semantic and theme-agnostic: a full re-skin must be achievable by editing `style.css` only.

**2.2 CSS Variables & Theme Tokens**
Define in `:root` (Light default), override in `.dark`:

| Token | Light | Dark |
|---|---|---|
| `--primary` | `#141414` | `#f2efe6` |
| `--secondary` | `#e32636` | `#ff4d5c` (same hue, lightened for contrast) |
| `--bg-primary` | `#f2efe6` | `#141414` |
| `--bg-secondary` | `#fefefe` | `#1e1e1c` |
| `--bg-inverted` | `#141414` | `#f2efe6` |
| `--text-primary` | `#141414` | `#f2efe6` |
| `--text-secondary` | `rgba(20,20,20,0.72)` | `rgba(242,239,230,0.72)` |
| `--text-success` | `#1a7f4b` | `#4ade80` |
| `--text-error` | `#e32636` | `#ff4d5c` |
| `--border-default` | `#141414` | `#f2efe6` |
| `--border-error` | `#e32636` | `#ff4d5c` |
| `--border-success` | `#1a7f4b` | `#4ade80` |
| `--overlay` | `#141414f0` (use exactly as given) | `rgba(0,0,0,0.8)` |

Structural tokens: `--spacing-gap: 1.5rem`; `--transition-fast: 120ms`; `--transition-normal: 240ms`; `--ease-standard: cubic-bezier(0.2, 0, 0, 1)`; `--z-dropdown: 100`; `--z-modal: 1000`; `--z-toast: 1100`.
Theme tokens: `--radius-sm/--radius-md/--radius-lg: 0px` (single documented exception in §3.4); `--shadow-sm: 3px 3px 0 0 var(--primary)`; `--shadow-md: 6px 6px 0 0 var(--primary)`; `--shadow-neu` (per-mode dual-shadow values); fonts per §2.6.

- **Contrast pairing is mandatory in both modes:** every light background pairs with dark text and every dark background with light text. `--bg-inverted` sections must flip text color accordingly (Light mode: ink block → cream text; Dark mode: cream block → ink text).
- **Never use `#ffffff`.** Elevated near-white surfaces use `#fefefe`; the default page background is cream, never pure white.
- Since `--secondary` and `--text-error` share a hue, error/success states must **never rely on color alone** — always pair with icon + message text.

**2.3 Mandatory Dark Mode**
- Provide Dark tokens under **both** `@media (prefers-color-scheme: dark)` (first visit, no stored preference) and a **`.dark` class** on `<html>`. Theme switching must require **zero HTML restructuring** — variable remapping only.
- **Persistence:** read `localStorage` ("theme"); fall back to `prefers-color-scheme` on first visit. A visible header toggle (44×44px, Material Symbols `dark_mode`/`light_mode`) must expose correct `aria-pressed` and `aria-label="Toggle dark mode"`, and announce changes via the live region.
- **Exception Clause:** the source style spec selects Light mode only (✓ Light / ○ Dark) — Light is the default theme, but the full Dark Mode token set, toggle, and persistence above remain mandatory and must be delivered in full.

**2.4 Layout: CSS Grid + Flexbox, Mobile-First**
- Section scaffolding: CSS Grid (raw, exposed). Component internals: Flexbox.
- Every flex container defaults to `align-items: center` unless an exception is justified in a CSS comment (e.g., form groups use `stretch` for full-width inputs).
- Mobile-first: single column by default, expanding at `768px`/`1024px`. **No horizontal overflow at any viewport (320px minimum).**

**2.5 Tailwind CSS Integration**
- Use Tailwind (Play CDN) for structural utilities only (`flex`, `grid`, `gap-*`, responsive prefixes). Any utility touching color/typography must reference tokens via arbitrary values (e.g., `text-[var(--text-primary)]`, `bg-[var(--bg-primary)]`).
- Component identity lives in `style.css` as reusable classes: `.btn`, `.card`, `.input-group`, etc. Do **not** use Tailwind `dark:` variants — theming is exclusively variable-driven via `.dark`.

**2.6 Typography & Icons — Google Only**
- Google Fonts via `<link>` (with `preconnect`): **Archivo Black** (display → `--font-heading`), **Space Grotesk** (body → `--font-base`), **Space Mono** (data/stats → `--font-mono`). All `font-family` declarations resolve to these variables.
- Icons: **Google Material Symbols (Outlined)** only. **Forbidden:** raw inline SVGs, local icon files, emoji as UI glyphs.

## 3. COMPONENT DESIGN SPECIFICATIONS

**3.1 Buttons (`.btn`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — minimum touch target **44×44px**. Variants: `.btn--primary` (ink fill), `.btn--accent` (red fill), `.btn--outline` (transparent + hard shadow), and a defined `.btn--danger` (distinct red treatment, clearly visible in both themes) even if unused on this page.
- **Hover:** brightness shift + shadow step-up; `cursor: pointer`.
- **Focus:** distinct ring from variables (`box-shadow: 0 0 0 3px var(--bg-primary), 0 0 0 6px var(--secondary)`). Never remove focus indicators.
- **Active/Pressed:** `transform: scale(0.97)` combined with the brutalist press (translate ~2px into the shrinking hard shadow).
- **Loading (`.btn--loading`):** block pointer events (no double submission), keep exact dimensions, render a CSS spinner (rotating border square or animated Material `progress_activity`) via keyframes; set `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`, no hover transforms.
- **Success/Error:** temporary feedback styling driven by `--text-success` / `--text-error` with a matching Material icon.

**3.2 Cards (`.card`)**
- **Default:** flexible Flexbox layout, background `--bg-secondary`, `2px solid var(--border-default)`, elevation from shadow tokens — all values from variables, never hardcoded.
- **Hover:** `transform: translateY(-2px)` + shadow step-up + red border accent.
- **Focus-within:** border highlight when a child control is focused.
- **Skeleton (`.card--skeleton`):** CSS shimmer keyframe (gradient sweep) with geometry matching final content — zero layout shift.
- **Empty state (`.empty-state`):** centered Material icon + one line of guidance text.

**3.3 Forms & Inputs (`.input-group`)**
- Flex container wrapping a `<label>`, the input, and a **dedicated error feedback element** (`aria-live="polite"`, linked via `aria-describedby`).
- States (all styled): empty, focused (variable-driven ring), filled, valid (`--border-success` + check icon), invalid (`--border-error`, red message, error icon, `aria-invalid="true"` — never color alone), disabled, read-only. Inputs use the neumorphic inset treatment in Light mode per §1.2.

**3.4 Modal / Popup (`.modal`)**
- **States — all animated via CSS transitions:** opening, open, loading, success, error, closing (exit transition completes before DOM removal).
- **UX:** fixed backdrop using `--overlay`; panel centered via `display: flex; align-items: center; justify-content: center;`; close button = Material `close` icon with `aria-label="Close dialog"`; keyboard **focus trap**; close via `Esc` and overlay click; focus returned to the trigger; body scroll locked while open; `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
- **Concrete instance:** a "START YOUR DASH" modal triggered from Hero, Pricing, and Final CTA — nickname input (2–16 chars, validated per §3.3), Begin button with loading → success ("LOCKED IN." + check icon) → toast confirmation.
- **Documented radius exception:** neumorphic toggle tracks (theme switch, billing switch) may use `999px` pill radius to preserve the switch affordance; every other corner stays `0px`.

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing; zero horizontal overflow from 320px up.
- **Motion:** all state changes use `transition: var(--transition-normal)` / `var(--ease-standard)`. `prefers-reduced-motion: reduce` disables marquee, streaks, count-ups (snap to final value), typing loop (show final sentence), and entrance animations; `scroll-behavior: smooth` only when motion is allowed.
- **Accessibility:** AA contrast in Light **and** Dark (verify small red-on-cream text; embolden/darken as needed). Never communicate state by color alone. Semantic HTML5 landmarks, one `h1`, logical heading/DOM/focus order, full keyboard operability for everything, visible `:focus-visible` styles on every interactive element, and a skip-to-content link.
- **Live feedback:** a persistent toast region (`--z-toast`, `role="status"`/`alert`, 4s auto-dismiss + close button) plus `aria-live` usage for form errors, loading completion, and theme changes.
- **Mandatory visual feedback:** every hover, click, and submission triggers a visible state change. `.btn--danger`/destructive styling must remain distinct in both themes.

## 5. PAGE BLUEPRINT — REQUIRED SECTIONS

Write all copy yourself — punchy, brutalist, English, specific to the typing-speed game. **No lorem ipsum anywhere; nothing was left unspecified.**

**5.0 Header (site chrome, required to host the theme toggle):** sticky; `backdrop-filter: blur(8px)` over `--bg-primary` with solid fallback; 3px bottom border; `--z-dropdown`. Contents: wordmark "TYPE RUNNER" with animated blinking block caret (aria-hidden); anchor nav (FEATURES / HOW IT WORKS / PRICING / FAQ — collapsed below `768px`); theme toggle (§2.3); compact CTA. All anchor targets get `scroll-margin-top`.

**5.1 Hero:** exposed grid backdrop + blurred animated speed streaks (aria-hidden). Mono kicker ("// THE 30-SECOND TYPING SPRINT"); giant uppercase `h1` with hard `text-shadow`; one-line subcopy; CTA row — `.btn--accent` "START YOUR DASH" (opens §3.4 modal) + `.btn--outline` "HOW IT WORKS" (anchor). Stat strip in `--font-mono` with JS count-up on load (e.g., dashes run / avg WPM / seconds on the clock). Beside it, a neumorphic **demo terminal**: self-typing sentence loop with blinking caret, animated WPM bar, "00:30" countdown chip; decorative (`role="img"` + descriptive `aria-label`). Bottom edge: infinite CSS **marquee ticker** of brutalist slogans separated by `✕` glyphs (aria-hidden, content duplicated for a seamless loop).

**5.2 Features — exactly 3 cards:** CSS Grid, 1 → 3 columns at `768px`. Suggested beats: the 30-second dash engine; live WPM/accuracy telemetry; global leaderboards and ghost replays. Each `.card`: Material icon in a red square badge, `h3`, copy, mono micro-tag footer. Hover/focus-within per §3.2.

**5.3 How It Works — exactly 3 steps:** oversized mono numerals `01 / 02 / 03` connected by thick border lines (grid structure). Suggested beats: pick your wordset → beat the clock → post your time. Staggered scroll-reveal via IntersectionObserver — **base state fully visible** (animation enhances only; safe without JS).

**5.4 Testimonials:** client-rendered from a JS array into `.card`s (1/2/3-column grid): quote, name, handle, WPM stat chip (mono, red border). Show `.card--skeleton` shimmer briefly (~600ms) before content — skeleton and `.empty-state` styles from §3.2 must be genuinely exercised here. Container `role="list"`, items `role="listitem"`.

**5.5 Pricing — exactly 3 tiers:** STREET RUNNER (free) / DASH PRO (highlighted: `--bg-inverted`, rotated red "MOST BRUTAL" badge, slightly larger on desktop) / CREW LICENSE. Billing toggle (monthly/yearly): neumorphic segmented control with `aria-pressed` and a quick price-swap transition (+ "SAVE 17%" chip on yearly). Prices in large mono; feature lists with Material `check` icons; each CTA opens the Start Dash modal. Focus-within highlighting on all three cards.

**5.6 FAQ:** custom accordion — 5 questions covering dash rules, the scoring formula, leaderboards, keyboard support, and free-tier limits. Each item: toggle `<button>` with `aria-expanded` + `aria-controls`, panel with `role="region"` + `aria-labelledby`, Material `expand_more` icon rotating 180°, animated open/close (grid-rows or max-height technique), first item open by default. Fully keyboard operable.

**5.7 Final CTA:** full-bleed `--bg-inverted` block with a giant headline (hard red text-shadow) and an email-capture `.input-group` (§3.3): visible mono label, email input, submit button. Client-side validation → invalid: inline error + live-region announcement; valid: button loading (spinner, stable dimensions) → success state + inline confirmation ("You're on the starting line.") + toast. Reassurance microcopy ("No spam. Ever."). In Dark Mode this block inverts to cream — maintain contrast pairing.

**5.8 Footer:** ink strip (inverts in Dark Mode). Columns: wordmark + one-liner; **secondary links** (Product anchors: Features / Pricing / FAQ; Company; Legal — Privacy/Terms may point to `#` since no pages exist); Material-Symbols icon links with `aria-label`s; copyright with JS-injected year (static fallback). Include a back-to-top link.

## 6. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. HTML contains **no** inline styles and **no** inline `<script>` blocks; the only scripts are external (Tailwind CDN, plus one `<script src="script.js" defer>` entry point).
- **Naming:** strict **BEM** (`block__element--modifier`) for all component classes, consistently — never mix conventions.
- **JS (`script.js`):** modular, commented in English — theme init/toggle (§2.3); modal manager (focus trap, Esc, overlay click, focus return, scroll lock); toast system; count-up; IntersectionObserver reveals; accordion; billing toggle; testimonial skeleton render; form validation. All behavior keyboard-accessible and reduced-motion-aware.
- **Copy:** original, themed English marketing copy for every section — no lorem ipsum, no stub sections.

## 7. FINAL ACCEPTANCE CHECKLIST

- Zero inline CSS/scripts; all values token-driven; a re-skin is possible via `style.css` alone.
- Dark Mode complete: tokens, `.dark` class, media fallback, `localStorage`, working toggle with correct ARIA state.
- Every button/card/input/modal state from §3 implemented and demonstrable.
- 44px targets, full keyboard operability, focus rings, `aria-live` feedback wherever content changes dynamically.
- No horizontal scroll at 320px+; reduced-motion honored; AA contrast in both themes.
- All sections from §5 delivered in order with the exact counts requested (3 feature cards, 3 steps, 3 pricing tiers, 5 FAQs).
