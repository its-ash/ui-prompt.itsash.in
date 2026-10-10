# CODING AGENT PROMPT — Build the "Kraken Purple Exchange" Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality, single-page landing page for a Kraken-inspired crypto exchange ("Kraken Purple Exchange") on the first attempt. Follow every rule in this document exactly. Output the full, runnable code.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling must live in a dedicated `style.css` file. **Explicitly forbidden:** any `style="..."` attribute in the HTML.
- Target every design property, layout rule, and state via class or ID selectors only.
- HTML must remain clean, semantic, and styling-agnostic — changing the site's look must require editing only the CSS file, never the markup.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store all visual tokens in `:root` (and in the `.dark` theme class):

- **Colors:** `--primary: #7132f5` (Kraken Purple), `--primary-dark: #5741d8`, `--primary-deep: #5b1ecf`, `--primary-subtle: rgba(133,91,251,0.16)`, `--bg-primary`, `--bg-secondary`, `--text-primary: #101114` (Near Black), `--text-secondary: #686b82` (Cool Gray), `--text-muted: #9497a9` (Silver Blue), `--text-success: #149e61` (Green), `--text-error` (define a clear red, e.g., `#d92d20`), `--success-subtle: rgba(20,158,97,0.16)`, `--border-default: #dedee5`, `--border-error`, `--border-success`.
- **Light canvas:** `--bg-primary: #fefefe` (page canvas) and `--bg-secondary: #ffffff` (elevated card surfaces). *Exception clause: the source spec lists `#ffffff` as the canvas — per mandatory architecture, the page canvas uses near-white `#fefefe`, while pure `#ffffff` is reserved for card/surface backgrounds.*
- **Contrast pairing:** every light background token must pair with a dark text token and every dark background token with a light text token — enforce for every theme, not just the default.
- **Radius & shadows:** `--radius-sm: 8px`, `--radius-md: 12px` (the signature Kraken radius — rounded, never pill), `--radius-lg: 16px`, `--shadow-sm: 0 4px 24px rgba(0,0,0,0.03)` (whisper shadow), `--shadow-md: 0 8px 32px rgba(0,0,0,0.06)`.
- **Spacing & transitions:** `--spacing-gap`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- **Elevation:** `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 1100` — layered components must never conflict.

**1.3 Mandatory Dark Mode Support**
- Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class: `--bg-primary: #101114`, `--bg-secondary: #17181d`, `--text-primary: #f4f4f7`, `--text-secondary: #9497a9`, `--border-default: #26272e`. Keep `#7132f5` for fills/surfaces; you may lighten the purple for text usage in dark mode (e.g., `#9d7bff`) to preserve WCAG AA. Dark-mode shadows must be re-tuned (e.g., `rgba(0,0,0,0.5)` or a subtle purple glow `rgba(113,50,245,0.25)`).
- Provide a visible theme toggle (Google Material Symbol `dark_mode`/`light_mode`) with correct `aria-pressed` and `aria-label`. Persist choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Switching themes must require zero HTML restructuring.
- *Exception clause: the source style spec marks dark mode as "Not Recommended" — dark mode remains mandatory per architecture. Ship light mode as the default experience and implement dark mode as a "Dark Tech & Cyber" variant (near-black `#101114` canvas, glowing purple accents).*

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox (`display: flex` / Tailwind flex utilities). Every flex container must default to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- Mobile-first and responsive out of the box: multi-column rows must collapse to columns on small viewports. **Prevent any horizontal scrolling.** Use a fluid max-width container (e.g., 1200px) with side padding.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply`). All utility classes must map back to the CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons — Google Fonts Mandatory**
- Load Google Fonts via `<link>`: a **display/brand font** — `Space Grotesk` (weights 500, 700) bound to `--font-display` — and a **product/UI font** — `Inter` (weights 400, 500, 600, 700) bound to `--font-base`. Optionally add `Roboto Mono` for tickers/stat numerals.
- **Dual font system:** display headings at 48px, weight 700, `letter-spacing: -1px` (use `clamp()` for fluid responsive sizing); body/UI text at 16px, weights 400–600.
- Icons: Google Material Symbols (Rounded set) via the official stylesheet, using ligature names. **Explicitly forbidden:** raw inline SVGs and local icon files.
- *Exception clause: the source spec lists `system-ui` as the font — Google Fonts are mandatory per architecture; `system-ui` may appear only as the final fallback in the font stacks.*

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
Style all states via CSS classes (BEM):
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, padding ~0.75rem 1.5rem, `border-radius: 12px`, weight 600.
- **Variants:** `.btn--primary` (bg `--primary`, white text; hover shifts to `--primary-dark` with a shadow lift), `.btn--subtle` (bg `rgba(133,91,251,0.16)`, text `--primary-dark`; hover deepens the tint), `.btn--outline` (1px `--border-default`), `.btn--danger` (visually distinct red in both themes).
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct focus ring via CSS variables (`outline` or `box-shadow`) for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** disables interactions, prevents double-clicks, renders a spinning Material Symbol (`progress_activity`) or CSS spinner **without distorting button dimensions**.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback states driven by `--text-success` / `--text-error`.

**2.2 Card Component**
- **Default:** flexible Flexbox layout, `--bg-secondary` surface, 1px `--border-default` border, 12px radius, whisper shadow (`--shadow-sm`).
- **Hover (interactive cards only):** `transform: translateY(-2px)` plus shadow shift to `--shadow-md`.
- **Focus-within:** card border highlights to `--primary` when a child link/button receives focus.
- **Loading (skeleton):** shimmer animation defined purely in CSS to prevent layout jumps.
- **Empty state:** structured fallback with a Google Icon and clear guidance text.

**2.3 Form & Input Requirements**
- **States:** empty, focused (outline ring), filled, valid (success border + check Material Symbol), invalid (error border, red text, error icon), disabled, read-only.
- **Structure:** flex container wrapping a `<label>`, the input, and a dedicated error feedback container wired to `aria-live="polite"`.
- Apply to the email capture in the Final CTA and/or footer newsletter signup.

**2.4 Modal / Popup Requirements**
Applies to the mobile navigation drawer and any overlay (e.g., an optional "Watch demo" modal):
- **States:** opening, open, loading, success/error, closing — all animated via CSS transitions (opacity + translateY/scale).
- **UX:** centered flex container (`align-items: center`), backdrop overlay, Google Symbol `close` button, keyboard focus trapping, close via `Esc` and overlay click, `role="dialog"` + `aria-modal="true"`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, responsive breakpoints, zero horizontal overflow.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; fully respect `prefers-reduced-motion`.
- **Accessibility (a11y):** WCAG AA contrast in both modes (verify `#686b82` body text on `#fefefe`; darken to ~`#55586e` if it fails 4.5:1). Never rely on color alone — pair every state with an icon and/or text. Semantic HTML5 elements, correct ARIA roles/labels on custom widgets (accordion buttons with `aria-expanded` + regions), logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** `.btn--danger` must be visually distinct in both light and dark themes.
- **Micro-interactions:** tasteful hover lifts, animated accordion expansion, optional scroll-reveal via `IntersectionObserver` (disabled under reduced motion).

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline styles anywhere.
- **Naming convention:** BEM (`block__element--modifier`) exclusively — never mix conventions.
- **No unrequested placeholders:** write real, finished English copy for every section; lorem ipsum is prohibited.
- **Assets:** Google Fonts + Material Symbols via `<link>` tags only.

---

## 5. THEME SPECIFICATION — "KRAKEN PURPLE EXCHANGE"

- **Mood/Era:** 2024–2026 crypto trading. Clean white canvas, commanding Kraken Purple brand accent, cool blue-gray neutral scale, whisper shadows, 12px radius everywhere ("rounded but not pill"), green success badges, purple-subtle tinted buttons.
- **Signature effects:** whisper shadows `rgba(0,0,0,0.03) 0px 4px 24px`; success badges as `rgba(20,158,97,0.16)` background with `#149e61` text + check icon; subtle buttons on `rgba(133,91,251,0.16)`; a full-bleed purple gradient band (`#7132f5 → #5741d8`) for the Final CTA; a subtle low-opacity purple radial glow behind the hero (pure CSS, no images/SVG).
- **Output category — "Dark Tech & Cyber":** while light mode is the default, carry a precise, tech-forward aesthetic throughout — crisp 1px borders, mono-style stat numerals, and a glowing purple-on-near-black dark variant.

---

## 6. PAGE STRUCTURE & CONTENT (all user-facing copy in English)

1. **Header (sticky):** "Kraken" wordmark in the display font; anchor links (Features, How It Works, Pricing, FAQ); `.btn--subtle` "Sign In"; `.btn--primary` "Get Started"; theme toggle; hamburger → modal drawer on mobile.
2. **Hero:** green success-style live badge (e.g., "Live — 24/7 global trading"); display headline at 48px/700/-1px tracking (e.g., "Trade crypto with confidence on the exchange built for pros"); supporting subcopy; primary CTA "Create Free Account" + subtle CTA "Explore Markets"; trust bar with stats (e.g., "$207B quarterly volume", "200+ supported assets", "10M+ clients", "24/7 support"). Include a CSS-built trading panel visual (gradient chart bars, ticker rows) — no SVG.
3. **Features — 3 cards:** Security & Custody (icon `shield`/`lock`), Deep Liquidity & Pro Execution (icon `trending_up`/`bolt`), Low Transparent Fees (icon `payments`). Follow spec 2.2; each icon sits in a purple-subtle tinted badge.
4. **How It Works — 3 steps:** 1) Create & verify your account, 2) Deposit fiat or crypto, 3) Trade with pro-grade tools. Purple numbered markers with a connector line; collapse to a column on mobile.
5. **Testimonials:** 3 quote cards with 5-star Material Symbol ratings, CSS initial-circle avatars, English names and roles.
6. **Pricing — 3 tiers:** Starter (Free), Pro (highlighted with a purple "Most Popular" badge), Institutional. Included features get green `#149e61` check icons; excluded features are muted. Per-tier CTA buttons.
7. **FAQ:** accessible accordion with 5–6 real Q&As (fees, security, deposit methods, supported assets, support, regulation) — keyboard operable, `aria-expanded`, animated panels.
8. **Final CTA:** full-bleed purple gradient band, white display headline, white button with purple text, optional email input following spec 2.3.
9. **Footer:** brand + tagline; secondary link columns (Product, Company, Support, Legal); social icons via Material Symbols; copyright; a short crypto-risk disclaimer in muted text.

---

## 7. COPY & LOCALE

- **All user-facing copy must be written in English.** The source specification contained Portuguese guidance — translate and apply it as English copy instructions. Keep all CSS variable names, class names, and file names in English/ASCII. Write realistic, polished exchange copy with plausible numbers — no placeholder text.

**Final instruction:** deliver the complete, runnable `index.html`, `style.css`, and `script.js` in one attempt, fully implementing every rule above.
