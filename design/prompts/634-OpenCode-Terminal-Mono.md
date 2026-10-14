# BUILD PROMPT — "OpenCode Terminal Mono" Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Produce a complete, production-quality landing page in a single first attempt. Do not ask questions — ship the full build.

**Product context:** A marketing landing page for **opencode**, an open-source, terminal-native AI coding agent (2024–2026 open-source AI coding era). The design language is **OpenCode Terminal Mono**: monospace-only typography, warm dark surfaces, Apple HIG semantic colors, sharp 4px corners, underlined links, a single button variant, and a terminal window as the hero's primary visual.

**Sections (in this order):** sticky header/nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. **The `style="..."` attribute is forbidden in the HTML.**
- Every visual property, layout rule, and state is applied via class/ID selectors only.
- HTML stays semantic and style-agnostic: retheming the page must require editing `style.css` only, never the markup.

### 1.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (light) and override under `.dark` and `@media (prefers-color-scheme: dark)`. Every light background token pairs with a dark text token and vice versa — in both modes:

| Token | Light mode | Dark mode |
|---|---|---|
| `--bg-primary` | `#fdfcfc` | `#201d1d` |
| `--bg-secondary` (elevated: cards, panels) | `#f4f2f1` | `#2a2626` |
| `--bg-inverted` (button fill) | `#201d1d` | `#fdfcfc` |
| `--text-primary` | `#201d1d` | `#fdfcfc` |
| `--text-secondary` | `#6d6a6a` | `#9a9898` |
| `--text-inverted` | `#fdfcfc` | `#201d1d` |
| `--link` (small link text, AA-safe) | `#0066cc` | `#409cff` |
| `--text-success` | `#1e8e3e` | `#30d158` |
| `--text-error` | `#d70015` | `#ff3b30` |
| `--text-warning` | `#b25000` | `#ff9f0a` |
| `--border-default` | `rgba(15,0,0,0.12)` | `rgba(253,252,252,0.14)` |
| `--border-error` / `--border-success` | match mode-scoped error/success values | match mode-scoped error/success values |

- `--primary: #007aff` — reserved for accents, focus rings, large text, and UI chrome. Pure `#007aff` is only ~4:1 on both surfaces, so **never** use it for small body-link text; small links use `--link`.
- The spec gray `#9a9898` fails AA on light backgrounds — use it only in dark mode; the light mode uses the darkened warm gray above.
- `--radius-sm`, `--radius-md`, `--radius-lg`: **all `4px`**. Hard rule: no border-radius exceeds 4px anywhere; pill shapes are forbidden.
- `--shadow-sm: 0 1px 2px rgba(15,0,0,0.10)`; `--shadow-md: 0 6px 16px rgba(15,0,0,0.16)`. Elevation is expressed primarily through `--bg-secondary` + hairline borders, not shadows (flat terminal aesthetic).
- `--spacing-gap: 1rem`; `--spacing-section: clamp(4rem, 10vw, 7rem)`; `--transition-fast: 120ms`; `--transition-normal: 200ms`; `--ease-standard: cubic-bezier(0.2, 0, 0, 1)` (snappy, terminal-like).
- `--z-nav: 50`; `--z-dropdown: 100`; `--z-modal: 200`; `--z-toast: 300`.
- `--font-base: 'Berkeley Mono', 'IBM Plex Mono', ui-monospace, Menlo, monospace` — the generic fallback must be `monospace`; `sans-serif`/`serif` must never appear in any font stack.

### 1.3 Mandatory Dark Mode Support
- Dark is the theme's signature mode; both modes are fully first-class. Implement dark tokens under both `.dark` and `@media (prefers-color-scheme: dark)` (the class wins when both apply).
- First visit follows `prefers-color-scheme`; an explicit toggle choice persists in `localStorage`; switching re-renders instantly with zero HTML restructuring. Set `color-scheme` per mode.
- Toggle: a visible icon button in the header using Material Symbols (`dark_mode` / `light_mode`) with correct `aria-pressed` and `aria-label` ("Toggle dark mode"); the icon swaps with the theme.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Flexbox for all single-axis structures (header bar, hero row, CTA rows, footer bars, terminal title bar). **Every flex container defaults to `align-items: center`** unless an exception is justified in a CSS comment (justified exceptions here: card content columns and terminal output lines use `flex-start`/`stretch` for top-aligned text).
- CSS grid only for equal-column card collections (features, steps, testimonials, pricing): `repeat(3, 1fr)` at ≥1024px, collapsing to one column below — never horizontal scrolling.
- Mobile-first: base styles are single-column; container max-width ~1080px with 1–1.25rem side padding; nothing may overflow horizontally at 320px.

### 1.5 Framework — Clean Custom CSS in `@layer`
- No Tailwind, no framework CDN. Write clean custom CSS organized into native cascade layers mirroring Tailwind's architecture: `@layer tokens, base, components, utilities`. All component styling is class-driven; keep the utilities layer minimal (`.container`, `.visually-hidden`).

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Text:** Load Google Fonts `IBM Plex Mono` (weights 400, 500, 700) via `<link>`; bind to `--font-base`.
- **Exception clause (Berkeley Mono):** Berkeley Mono is a commercial typeface unavailable on Google Fonts. Keep `'Berkeley Mono'` first in `--font-base` so a licensed, self-hosted `@font-face` copy is honored if present, with Google Fonts' IBM Plex Mono as the drop-in monospace substitute. Never load Berkeley Mono from a third-party CDN.
- **Weights & rhythm:** headings 700; body/labels/buttons 500; long-form paragraph text 400; `line-height: 1.5` everywhere. Type scale: h1 `clamp(2rem, 5vw, 3.25rem)`; h2 `clamp(1.5rem, 3vw, 2rem)`; h3 `1.125rem`; body `1rem`. Monospace only — no letter-spacing tricks.
- **Icons:** Google Material Symbols (Outlined) via Google Fonts link. Raw inline SVGs and local icon files are forbidden. **Exception clause (favicon only):** a data-URI SVG favicon shaped as a `>` glyph is the sole permitted inline SVG.

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button — Single Variant `.btn`
- Exactly **one** button variant exists on this page. No outline/ghost/secondary variants.
- Default: `display:flex; align-items:center; justify-content:center; gap:0.5rem;` padding `4px 20px` (theme-mandated tight padding), weight 500, radius 4px, background `--bg-inverted`, color `--text-inverted` — dark fill in light mode, warm-white fill in dark mode; the inversion preserves the "dark button" identity and contrast in both themes.
- Touch target: the visual box is ~32px tall; meet the 44px minimum by extending the hit area with an absolutely-positioned `::after { inset: -6px }` overlay — do not inflate the visual padding.
- Hover: brightness shift + `cursor: pointer`. Focus-visible: `outline: 2px solid var(--primary); outline-offset: 2px`. Active: `transform: scale(0.97)`.
- `.btn--loading`: `pointer-events: none`, blocks double-clicks, renders a CSS border spinner (currentColor, fixed 1em box) that never changes button dimensions.
- `[disabled]`: opacity 0.5, grayscale, `cursor: not-allowed`.
- `.btn--success` / `.btn--error`: temporary feedback tinted by `--text-success` / `--text-error`, always paired with a Material Symbol (`check_circle` / `error`) — never color alone.
- No destructive actions exist on this page; do not invent any.

### 2.2 Card
- Default: flex column, `--bg-secondary`, 1px `--border-default`, radius 4px, generous padding, gap via `--spacing-gap`.
- Hover: `translateY(-2px)` + border brightens toward `--primary` at low alpha + `--shadow-md`.
- Focus-within: border-color `--primary` (cards containing links/buttons).
- Define `.card--skeleton` (shimmer, no layout jump) and `.card--empty` (Material Symbol + guidance text) patterns in CSS even if unused on this static page.

### 2.3 Form & Input (only if you add an email capture to the Final CTA — optional)
- If included: flex column wrapping `<label>`, `<input>`, and a dedicated error container. States: empty, focused (2px `--primary` ring), filled, valid (`--border-success` + check icon), invalid (`--border-error` + `--text-error` message + error icon), disabled, read-only. All dynamic feedback announced via `aria-live`. If no form is added, omit entirely — do not add forms elsewhere.

### 2.4 Modal / Popup — Not Applicable
- This page requires no modals or popups. **Do not add any.** The FAQ uses accessible native accordions (5.7); dynamic feedback uses inline states + `aria-live`, not dialogs.

## 3. CORE UX & MICRO-INTERACTION RULES
- Responsive by default; zero horizontal overflow from 320px up.
- Every state change transitions with `transition: var(--transition-normal) var(--ease-standard)`; all animations (cursor blink, typing, shimmer, menu slide) are neutralized under `prefers-reduced-motion`.
- **a11y:** WCAG AA contrast in both modes using the mode-scoped tokens exactly as defined in 1.2; never communicate state by color alone; semantic landmarks (`header`/`main`/`section`/`footer`, `aria-labelledby` per section); logical heading order h1→h2→h3; a skip-to-content link; full keyboard operability (nav menu, FAQ, copy button); visible focus on every interactive element; `aria-live` regions for dynamic feedback.
- **Links:** underlined by default in every state (`text-decoration: underline; text-underline-offset: 3px`); hover shifts color to `--link` and thickens the underline to 2px. No link is styled as a button and no button is styled as a link.
- Every click/hover produces visible feedback; style `::selection` with `--primary`.
- Anchor navigation uses `scroll-margin-top` for the sticky header; smooth scrolling disabled under reduced motion.

## 4. DELIVERABLE & OUTPUT FORMAT
- Exactly three files: `index.html`, `style.css`, `script.js`. Opening `index.html` runs the page with no build step.
- `<html lang="en">`, viewport meta, `<title>`, and meta description are required.
- Scripts: one `<script src="script.js" defer>` reference. **Exception clause:** a ≤6-line inline `<head>` bootstrap is permitted solely to apply the stored/`prefers-color-scheme` theme class before first paint (FOUC prevention). No other inline JS.
- `script.js` scope: theme toggle + persistence, mobile menu, clipboard copy + `aria-live` feedback, optional single-open FAQ behavior, optional IntersectionObserver reveals (reduced-motion aware). Nothing else.
- Naming: **BEM only** (`.site-header`, `.terminal__dot`, `.pricing-card--featured`, `.btn--loading`). Never mix conventions.
- Copy: all user-facing copy in **English** (the source style spec is Portuguese — direct all copy to English). No lorem ipsum; write real, plausible content per Section 6. No emoji anywhere.
- No unrequested components: no modals, carousels, chat widgets, cookie banners, or analytics.

## 5. PAGE BUILD SPECIFICATION — SECTION BY SECTION

### 5.1 Header (sticky)
- Solid `--bg-primary`, 1px bottom border, ~64px, flex row `justify-between`, `align-items: center`. Flat — no blur, no shadow.
- Left: text logo `❯ opencode` (700; the `❯` in `--text-success`), linking to `#top`.
- Nav (`aria-label="Primary"`): Features, How it works, Pricing, FAQ — underlined anchors.
- Right cluster: theme toggle (1.3), GitHub text link, `.btn` "Get started".
- Mobile <768px: links hide behind a Material Symbol `menu` button toggling a full-width dropdown panel (`--z-dropdown`, stacked links). Esc closes; outside click closes; `aria-expanded` + `aria-controls`; focus moves into the panel on open and returns to the button on close.

### 5.2 Hero — Terminal as Primary Visual
- Desktop: two columns (copy | terminal), stacking copy-first on mobile.
- Copy: eyebrow line in `--text-secondary` (e.g., `open source · MIT · v1.0`); h1 (700), e.g., "The AI coding agent that lives in your terminal."; sub-paragraph (400, `--text-secondary`); CTA row: `.btn` "Get started" + underlined text link "Read the docs".
- `.terminal` window: bg `#201d1d`, 1px `--border-default`, radius 4px, `--shadow-md` — **it stays warm-dark in both themes** (terminals are dark; scope fixed colors inside `.terminal`).
  - Title bar: flex, `align-items: center`; three 10px dots in `#ff3b30` / `#ff9f0a` / `#30d158`; centered title `~/project — opencode` in `--text-secondary`; hairline bottom border.
  - Body: monospace session lines — `$` prompt in `--text-success`, commands in `--text-primary`, flags in `#409cff`, a green `✓ tests passed` line, an orange warning line, a red error demo line; the final line ends with a block cursor `▌` blinking via a `steps(1)` CSS animation (static under reduced motion). Optional CSS typing animation on the first command, also disabled under reduced motion.
  - Wrap in `<figure>` with an aria-label ("Terminal session demo"); content remains real text.

### 5.3 Features — 3 Cards
- Section h2 pattern: prefix with a comment-style `#` glyph in `--text-secondary` (e.g., `# features`) — apply this prefix consistently to all section h2s.
- Grid 3→1. Each `.card`: Material Symbol in `--primary` inside a 4px bordered chip (suggested: `keyboard`, `hub`, `lock`), h3 (700), description (400, `--text-secondary`), and a one-line inline code chip (bg `--bg-primary`, radius 4px).
- Suggested angles: keyboard-first TUI; bring-your-own models/keys; local-first privacy.

### 5.4 How It Works — 3 Steps
- `<ol>` semantics rendered as a 3→1 grid. Each step: index `01 / 02 / 03` (700, `--primary`), command-style h3 (e.g., `$ install`, `$ connect`, `$ ship`), description (400).
- Desktop connector: hairline + `>` glyph between steps; on mobile, steps stack with a left hairline timeline.

### 5.5 Testimonials
- 3→1 grid of quote cards. Each: `>` glyph in `--text-success` prefixing the quote (400), attribution row with name (500), `@handle` and role in `--text-secondary`. Attribution is plain text — do not fabricate external profile URLs.

### 5.6 Pricing — 3 Tiers
- 3→1 grid: **Free** ($0 — the open-source core), **Pro** ($20/mo, highlighted), **Team** ($40/user/mo).
- Each `.pricing-card`: tier name (700), price line (700, monospace), short description, feature list with Material Symbol `check` in `--text-success`, and one `.btn` CTA ("Download", "Start Pro", "Contact sales") — the identical variant everywhere.
- Featured tier: 1px `--primary` border + a "recommended" chip (border `--primary`, text `--link`, radius 4px). No alternate button style for the featured tier.

### 5.7 FAQ
- 5–6 native `<details>/<summary>` accordions separated by hairlines. Summary: flex row, 500 weight, Material Symbol `expand_more` rotating 180° when open, hover color shift, focus-visible ring. Body: 400, `--text-secondary`. No JS required; if you add single-open behavior, keep native semantics intact.
- Suggested topics: install requirements, supported models/providers, data privacy, license, self-hosting, what's free.

### 5.8 Final CTA
- Full-width band on `--bg-secondary` with hairline borders. h2 (700) + one-line sub + `.btn` "Get started".
- Install command bar: bordered, radius-4px row: `$ npm install -g opencode-ai` + copy button (Material Symbol `content_copy`). On copy: button enters success feedback (icon → `check`, `--text-success`) and an `aria-live="polite"` region announces "Copied to clipboard"; revert after ~2s. Keyboard operable.

### 5.9 Footer
- Link groups (grid → stacked): Product (Features, Pricing, Changelog), Resources (Docs, GitHub, Discord), Company (Blog, Contact, License). Links underlined, `--text-secondary`, hover `--link`.
- Bottom bar: flex, space-between — `© 2025 opencode · MIT License` and secondary links (Privacy, Terms, Status).
- Internal sections use real in-page anchors; external destinations use plausible top-level URLs (e.g., `https://github.com`, `https://discord.com`) with `rel="noreferrer"` — never invent deep paths.

## 6. COPY & CONTENT RULES
- All user-facing copy in English. Voice: terse, technical, code-first, confident — 2024–2026 open-source developer tone; lowercase branding ("opencode") is welcome; zero marketing fluff, zero emoji.
- Write real, plausible content for every section (testimonials, pricing, and FAQ included). No lorem ipsum, no "TODO", no stub headings.
