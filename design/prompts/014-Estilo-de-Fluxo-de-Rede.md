# BUILD SPECIFICATION — "NETWORK FLOW" CORPORATE SAAS LANDING PAGE

**Role & Mission:** You are a Senior Frontend Engineer and Expert UI Designer. Code a complete, production-quality landing page in a single attempt — no stubs, no placeholder content, no follow-up questions.

**Product Context:** A Corporate & SaaS landing page for "NexaFlow," a fictional enterprise network-connectivity platform. Theme: **Network Flow Style** — *Robust, Connected, Efficient*; era: *2026+ Ubiquitous Connectivity*. The source style specification was written in Portuguese — translate every keyword, label, and description into English before use. **All user-facing copy must be written in English.**

**Page Order:** Skip link → Sticky Header → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **Forbidden:** `style="..."` attributes, inline event handlers (`onclick`, etc.), and presentational attributes.
* Target every rule via class or ID selectors. HTML must remain semantic and style-agnostic — re-skinning the page must require editing `style.css` only, never the markup.
* Use semantic HTML5 landmarks: `header`, `nav`, `main`, `section` (each with `aria-labelledby`), `footer`.

**1.2 CSS Variables & Theme Tokens**

Define all tokens in `:root` (light) and override for dark mode (see 1.3). Required tokens and this theme's values:

| Token | Light Mode Value | Notes |
|---|---|---|
| `--primary` | `#005691` | Connectivity Blue — buttons, links, active states |
| `--primary-bright` | `#6EB5E8` | Blue accents/links on dark surfaces |
| `--secondary` | `#FFA500` | Orange — badges/highlights; decorative or dark-surface use only |
| `--accent-cyan` / `--accent-green` | `#00FFFF` / `#00FF00` | **Decorative only** (glows, animated packets) |
| `--bg-primary` | `#FEFEFE` | Replace the spec's `#FFFFFF` with `#FEFEFE` per architecture rules |
| `--bg-secondary` | `#F4F5F7` | Light grey card surface |
| `--text-primary` / `--text-secondary` | `#333333` / `#595959` | `#CCCCCC` is reserved for borders, never text |
| `--text-success` / `--text-error` | `#0E7A0E` / `#C0392B` | Accessible derivatives (raw neon green fails AA as text) |
| `--border-default` / `--border-success` / `--border-error` | `#CCCCCC` / `#0E7A0E` / `#C0392B` | |
| `--hero-bg` / `--hero-text` | `#1E1E1E` / `#F2F2F2` | Hero/CTA/footer are dark panels in both modes |
| `--radius-sm` / `--radius-md` / `--radius-lg` | `4px` / `8px` / `16px` | |
| `--shadow-sm` / `--shadow-md` | `0 2px 5px rgba(0,0,0,0.08)` / `0 10px 30px rgba(0,86,145,0.15)` | Per spec; MD is a blue-tinted glow |
| `--spacing-gap` | `1.5rem` | |
| `--transition-fast` / `--transition-normal` / `--ease-standard` | `150ms` / `300ms` / `ease-in-out` | Express the spec's `transition: all 0.3s ease-in-out` through these variables; transition specific properties, not `all` |
| `--z-header` / `--z-dropdown` / `--z-modal` / `--z-toast` | `50` / `100` / `200` / `300` | Prevent layered-component conflicts |
| `--font-base` | `'Open Sans', sans-serif` | |

* **Contrast pairing (mandatory in both themes):** every light background token pairs with dark text tokens and every dark background token pairs with light text tokens. The neon values `#00FF00`, `#00FFFF`, and `#FFA500` must **never** appear as text on light backgrounds — reserve them for glows, animated packets, and dark-surface accents; use accessible derivatives whenever these colors must carry meaning.

**1.3 Mandatory Dark Mode Support**
* Define dark tokens **both** under `@media (prefers-color-scheme: dark)` (flash-free system default) **and** a `.dark` class on `<html>` (manual override, higher specificity). Provide a `.light` class to force light mode when the system is dark.
* Dark overrides: `--bg-primary: #141414`, `--bg-secondary: #1F1F1F`, `--text-primary: #F2F2F2`, `--text-secondary: #B3B3B3`, `--border-default: #3A3A3A`, `--hero-bg: #141414`, `--text-success: #00C853`, `--text-error: #FF6B6B`, deeper shadows, and more prominent neon glows.
* Visible toggle in the header: Material Symbols `dark_mode`/`light_mode` icon button with correct `aria-pressed` and dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").
* Persistence: store the choice in `localStorage`; on load, apply the stored choice, falling back to `prefers-color-scheme` on first visit. Switching themes must never require HTML restructuring.
* **Exception clause:** the source style spec requested light-mode-only ("Light: Full / Dark: No"); dark mode is a mandatory architectural requirement — implement it fully, using the theme's dark-grey visual direction as the dark-mode design language.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout structure with Flexbox (`display: flex`). **Every flex container defaults to `align-items: center`**; any deviation (e.g., card content columns at `flex-start`) must be an explicit, commented exception.
* Mobile-first: single-column by default; enhance to rows at ~768px and ~1024px. Zero horizontal scrolling from 320px up. All interactive targets ≥ 44×44px.
* Card grids: `display: flex; flex-wrap: wrap; gap: var(--spacing-gap)` with children `flex: 1 1 300px` (3-across desktop, 1-across mobile).

**1.5 Styling Approach & Naming Convention**
* Framework: none — the source specification's technical CSS implies hand-authored vanilla CSS. Do not add Tailwind or any other framework.
* Use **BEM exclusively and consistently** across all files (`.btn`, `.btn--primary`, `.card`, `.card__title`, `.card--featured`). Never mix conventions. The two spec-mandated effect classes **`.network-diagram-animation`** and **`.data-flow-effect`** must exist verbatim.
* No `!important` except to override genuine third-party defaults.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Open Sans** (weights 400, 600, 700, 800) via Google Fonts `<link>` and bind to `--font-base`. Robust typography: headings 700–800 with tight letter-spacing (`-0.02em`), fluid sizing via `clamp()` (h1 ≈ 2rem–3.5rem); body 400 / line-height 1.6.
* Icons: **Google Material Symbols (Outlined)** via `<link>`. **Forbidden:** raw inline SVGs, local icon files, emoji-as-icons, other icon fonts. Suggested symbols: `hub`, `router`, `dns`, `security`, `cloud_sync`, `monitoring`, `plug_connect`, `alt_route`, `trending_up`, `check_circle`, `verified_user`, `star`, `expand_more`, `menu`, `close`, `dark_mode`, `light_mode`, `mail`, `error`, `progress`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button** — `.btn` with modifiers `.btn--primary`, `.btn--ghost`, `.btn--danger` (define even if unused), and state classes `.is-loading`, `.is-disabled`, `.btn--success`, `.btn--error`.
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px; `border-radius: var(--radius-md)`.
* **Hover:** brightness shift + `box-shadow: var(--shadow-md)` glow; `cursor: pointer`.
* **Focus-visible:** distinct ring — `outline: 2px solid var(--primary-bright); outline-offset: 2px`. Never remove outlines.
* **Active:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** swap label for a CSS border-spinner or animated Material Symbol `progress`; `pointer-events: none` to block double-clicks; button dimensions must not change.
* **Disabled:** `opacity: 0.5; filter: grayscale(1); cursor: not-allowed`.
* **Success/Error:** temporary feedback tinted by `--text-success` / `--text-error`.
* `.btn--danger`: red-tinted, visually distinct in **both** themes.

**2.2 Card** — `.card`, `.card--interactive`, `.card--featured`, `.card--skeleton`, `.card--empty`.
* **Default:** flex column (`align-items: flex-start` — commented exception), `background: var(--bg-secondary); border: 1px solid var(--border-default); border-radius: var(--radius-md); box-shadow: var(--shadow-sm)`.
* **Hover (interactive):** `transform: translateY(-2px)` + shadow elevation; icon tile gains a cyan/blue connection glow.
* **Focus-within:** border shifts to `--primary` when a child link/button receives focus.
* **Skeleton:** shimmer keyframes (gradient sweep) defined in CSS to prevent layout jumps.
* **Empty:** fallback layout with a Material Symbol + one-line guidance text.

**2.3 Form & Input** — used for the Final CTA email capture.
* **Structure:** `.form-group` (flex column) wrapping a `<label for>`, the `<input type="email">`, and a dedicated `.form-error` container (`aria-live="polite"`).
* **States (all class-driven):** empty; focused (outline ring via `--primary`); filled; valid (`--border-success` + `check_circle` icon); invalid (`--border-error`, error text in `--text-error` + `error` icon, linked via `aria-describedby`); disabled; read-only.
* Validate on submit and blur. On success, replace the form with a confirmation state (icon + message) announced via `aria-live`. Never rely on color alone — pair every state with icon + text.

**2.4 Modal / Popup** — used for the Hero "Watch the Network in Action" demo.
* **States:** opening (fade + scale-in, ~300ms), open, loading (skeleton/spinner while content mounts), success/error, closing — all animated via CSS transitions.
* **Overlay:** fixed, `display: flex; align-items: center; justify-content: center;` backdrop `rgba(0,0,0,0.6)` with subtle blur; `z-index: var(--z-modal)`.
* `role="dialog"`, `aria-modal="true"`, `aria-labelledby` → modal title.
* Close via Material Symbols `close` button (44×44), `Esc` key, and overlay click. Trap Tab focus inside while open; return focus to the trigger on close; lock body scroll.

**2.5 FAQ Accordion**
* 6 items. Use native `<details>`/`<summary>` styled, or a button + region pattern with `aria-expanded` / `aria-controls`. Either way: full keyboard operability, visible focus ring, `expand_more` chevron rotating 180° on open, smooth height animation (grid-template-rows `0fr→1fr`), one-open-at-a-time via JS.

**2.6 Header & Mobile Navigation**
* Sticky header: `background: var(--bg-primary); color: var(--text-primary); border-bottom: 1px solid var(--border-default); box-shadow: 0 2px 5px rgba(0,0,0,0.08)` (per spec).
* Contents (flex, `align-items: center`): logo (`hub` icon + "NexaFlow" wordmark), anchor nav links (Features, How It Works, Testimonials, Pricing, FAQ) with an animated "data-flow" underline on hover, theme toggle, primary CTA "Get Started".
* Mobile (<768px): nav collapses behind a `menu` icon button; panel is a flex-column dropdown (`z-index: var(--z-dropdown)`) that slides/fades in; `aria-expanded` on the trigger; closes on `Esc`, link click, and outside click; focus moves into the panel when opened.
* Anchor navigation: `scroll-behavior: smooth` (disabled under reduced motion) + `scroll-margin-top` on sections to offset the sticky header.

**2.7 Billing Toggle (Pricing)**
* Segmented "Monthly" / "Yearly" control; active segment filled with `--primary`; `aria-pressed` on each option; "Save 20%" badge on the yearly segment.
* On switch: prices cross-fade via CSS transition; the change is announced through an `aria-live="polite"` region.

---

## 3. CORE UX & MICRO-INTERACTION RULES

**3.1 Signature Visual Effects (theme-critical; all CSS-only — no SVG, no images)**
* **Network diagram (Hero):** nodes = circular divs containing Material Symbols (`hub`, `router`, `dns`, `security`, `cloud_sync`); edges = thin divs/pseudo-elements with gradient backgrounds; packets = small glowing dots traveling along edges via CSS keyframes (transform or `offset-path`), staggered delays, colors cycling `--accent-cyan`, `--accent-green`, `--primary-bright`. The container carries the exact class `.network-diagram-animation`; edges/packets carry `.data-flow-effect`.
* **Interactivity:** hovering/focusing a node scales it up, intensifies its glow, and highlights connected edges (CSS `:hover`/`:focus-within` with structural selectors, or a JS class toggle).
* **Connection glows:** low-alpha cyan/green/blue `box-shadow` halos on edges, icon tiles, and status dots.
* **Status micro-interactions:** pulsing green status dot + "All systems operational" pill (Hero and Footer); latency/uptime chips ("~12 ms", "99.99%") on feature cards.
* **Traffic animations:** animated dashed connector lines (background-position loop) linking the How-It-Works steps, with a traveling packet dot.
* **Modular elements:** subtle circuit-grid background pattern on dark panels via repeating CSS gradients; consistent card tiles.
* **Reduced motion:** under `@media (prefers-reduced-motion: reduce)`, disable all packet travel, pulses, transforms, and smooth scroll; render static diagrams. Decorative diagrams are `aria-hidden="true"`.

**3.2 Global UX Rules**
* Responsive by default: fluid type (`clamp()`), flexible widths, zero horizontal overflow from 320px upward.
* Every state change transitions with `var(--transition-normal)` / `var(--transition-fast)`.
* **Mandatory visual feedback:** every click, hover, focus, and submission produces a visible state change.
* **Accessibility:** WCAG AA contrast in both themes; never color alone to communicate state; semantic HTML; logical DOM/focus order; full keyboard operability; `aria-live` regions for all dynamic feedback (form results, billing toggle); skip-to-content link as the first focusable element.
* `.btn--danger` defined and distinct in both themes even though this page contains no destructive action.

---

## 4. PAGE STRUCTURE & SECTION-BY-SECTION SPECIFICATIONS

**4.0 Global Shell** — skip link → sticky header (2.6) → `<main>` → footer. Exactly one `h1` (Hero); every section titled with an `h2` bound via `aria-labelledby`.

**4.1 Hero** — Dark panel (`--hero-bg`) with circuit-grid background; two-column flex (copy left, diagram right; stacks on mobile).
* Eyebrow chip ("2026 · Ubiquitous Connectivity"), `h1` (e.g., "Enterprise networking built for the ubiquitous-connectivity era" — write polished final copy), 1–2 sentence subhead, status pill (pulsing dot + "All systems operational").
* CTAs: `.btn--primary` "Start Free Trial" + `.btn--ghost` "Watch the Network in Action" (opens the 2.4 modal containing an enlarged animated network diagram).
* Stat strip: 4 modular tiles — 99.99% uptime SLA · ~12 ms global latency · 40+ edge regions · SOC 2 Type II.
* Right column: the interactive network diagram (3.1); simplify/scale on mobile — never overflow.

**4.2 Features** — Light section with `background-image: linear-gradient(to bottom, #F8F8F8, #FEFEFE)` (per spec). `h2` + intro line, then 3 `.card--interactive` items:
1. Global Mesh Connectivity (`hub`) + "40+ regions" chip.
2. Zero-Trust Edge Security (`security`) + "SOC 2" chip.
3. Real-Time Traffic Intelligence (`monitoring`) + "~12 ms" chip.
Each card: glowing icon tile, `h3` title, 2–3 sentence description, status chip; full hover/focus-within states per 2.2.

**4.3 How It Works** — 3 steps in a flex row (column on mobile) connected by animated `.data-flow-effect` connector lines with a traveling packet:
1. Connect (`plug_connect`) — plug in existing infrastructure.
2. Optimize (`alt_route`) — intelligent traffic routing and load balancing.
3. Scale (`trending_up`) — elastic global growth.
Numbered nodes (01/02/03) in `--primary` circles with glow; each step has an `h3` + 2 sentences. Connectors rotate vertical on mobile.

**4.4 Testimonials** — 3 cards: 5-star rating (filled `star` Material Symbols with `role="img"` + `aria-label="Rated 5 out of 5 stars"`), a 2–3 sentence quote in a realistic enterprise tone, initials avatar (CSS circle, `aria-hidden="true"`), name, role, company, and a `verified_user` "Verified customer" badge. Invent 3 distinct personas.

**4.5 Pricing** — `h2` + billing toggle (2.7) + 3 tier cards:
* **Starter** — $49/mo (yearly $39/mo): 4–5 features with `check_circle` icons; `.btn--ghost` "Start Free Trial".
* **Professional** — $149/mo (yearly $119/mo): `.card--featured` with "Most Popular" badge (orange chip on dark surface), `--primary` border + glow; 5–6 features; `.btn--primary` "Start Free Trial".
* **Enterprise** — Custom: compliance/SLA features; `.btn--ghost` "Contact Sales".
Prices animate on toggle; all feature lists are real copy; add a yearly-billing footnote.

**4.6 FAQ** — 6 questions per 2.5 covering: security & compliance, deployment time, integration with existing infrastructure, SLA/uptime guarantees, migration process, support tiers. Real, complete answers.

**4.7 Final CTA** — Full-width dark band with circuit-grid pattern and blue glow: `h2`, one-line subcopy, and the email capture form (2.3: label, input, `.btn--primary` "Request Your Network Assessment", error container, success confirmation state).

**4.8 Footer** — Dark (`#141414`-family): brand block (logo + tagline + status pill), 4 secondary-link columns — Product (Features, Pricing, Network Status, Changelog), Company (About, Careers, Contact), Resources (Documentation, API Reference, Community), Legal (Privacy, Terms, Security) — a social row using generic Material Symbols (`mail`, `rss_feed`, `public`) with `aria-label`s, and a bottom bar: "© 2026 NexaFlow, Inc." + legal links. Secondary links may use `href="#"` since target pages do not exist; use real anchors wherever targets do exist.

---

## 5. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, `script.js` — complete and runnable by opening `index.html`. Exactly one `<script src="script.js" defer></script>` reference; no inline script blocks, no inline styles, no inline handlers.
* **Head:** Google Fonts (Open Sans 400/600/700/800) + Material Symbols links, meta description, descriptive `<title>` ("NexaFlow — Enterprise Network Connectivity").
* **Naming:** BEM only, consistent across all three files.
* **Copy:** all user-facing copy in polished **English**, Corporate & SaaS tone. **No lorem ipsum** — every heading, feature description, testimonial, price, FAQ answer, and footer label must be final, realistic copy. `href="#"` placeholders are permitted only for footer secondary links.
* **script.js scope (vanilla JS only):** theme toggle + localStorage persistence; mobile menu; FAQ accordion; modal open/close + focus trap; email form validation + success state; billing toggle; network-diagram node hover highlighting; optional IntersectionObserver scroll-reveal (progressive enhancement — content must remain fully visible if JS fails; disabled under reduced motion).
* **Quality bar:** zero console errors; valid semantic HTML; AA contrast in both themes; fully keyboard-navigable; no horizontal scroll from 320px to 4K; every interactive element has hover, focus, and active feedback; the page must look finished and impressive on the first attempt.
