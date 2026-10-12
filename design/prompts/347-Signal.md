# BUILD PROMPT — "SIGNAL" LANDING PAGE (Senior Frontend Engineer, First Attempt, Production-Grade)

You are a Senior Frontend Engineer and Expert UI Designer. Produce the complete, final Landing Page code in a single attempt — no explanations, no TODOs, no partial output. All user-facing copy must be written in English.

---

## 0. PROJECT BRIEF & THEME DEFINITION

**0.1 Product & Tone**
Build a landing page for **"Signal"** — an institutional research-intelligence platform (verified data provenance, threshold briefings, audit-ready reporting for universities, policy institutes, and enterprises). Copy must sound institutional, scholarly, trustworthy, and restrained: declarative sentences, concrete claims, zero marketing hyperbole, zero exclamation marks.

**0.2 Style Identity**
- **Name:** Signal · **Era:** Timeless Classic · **Mood:** Institutional, weighty, polished, trustworthy, scholarly.
- **Visual signature:** Deep navy full-bleed sections alternating with bone paper sections; muted gold used **only** for rules and highlights; serif display type; near-square corners; subtle lift shadows; dense grid with compact `1.2rem` gaps.

**0.3 Color Palette (mandated)**
| Token role | Value | Notes |
|---|---|---|
| Deep navy (primary bg) | `#1c2644` | Hero, How It Works, Pricing, Header, Footer |
| Alt navy | `#232f55` | Final CTA band; dark-mode paper surface |
| Bone foreground | `#e2dcd0` | Text/icons on all navy surfaces |
| Muted gold accent | `#c8a870` | **Rules and highlights only** (see Gold Law, 1.2) |
| Gold ink (paper surfaces) | `#7d5f33` | Gold-safe-for-text variant on bone backgrounds |
| Bone paper (light bg) | `#f0ece3` | Features, Testimonials, FAQ sections |
| Near-white (cards on paper) | `#fefefe` | Use `#fefefe`, never `#ffffff` |

**0.4 Typography & Data (Google Fonts only)**
- **Display:** `Source Serif 4` (weights 400/600/700 + italic) — hero H1, section H2s, card H3s, testimonial quotes.
- **Body:** `DM Sans` (400/500/700) — paragraphs, buttons, nav.
- **Data:** `IBM Plex Mono` (400/500) — prices, step numerals (`01 02 03`), stats, eyebrow labels, microcopy.

**0.5 Section Rhythm (alternation is the design system)**
| Section | Light-mode surface | Dark-mode surface |
|---|---|---|
| Header (sticky) | Navy `#1c2644` (both themes) | Navy `#1c2644` |
| Hero | Navy `--bg-primary` | Navy |
| Features | Bone paper | Alt navy `#232f55` |
| How It Works | Navy | Navy |
| Testimonials | Bone paper | Alt navy |
| Pricing | Navy | Navy |
| FAQ | Bone paper | Alt navy |
| Final CTA | Alt navy `--bg-alt` | Navy (keep alternation intact) |
| Footer | Navy | Navy |

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in `index.html`.
- **Class Selectors Only:** All design properties, layout rules, and states are targeted via class selectors in `style.css`.
- **Minimal HTML Modifications:** HTML stays clean, semantic, and style-agnostic — a full retheme must be achievable by editing `style.css` only.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` in `style.css`. Translate every literal from the source CSS spec into a token (e.g., the supplied `border-top: 1px solid #c8a870` must be written as `border-top: 1px solid var(--accent)`).

Global tokens:
- **Colors:** `--primary: #1c2644`, `--secondary: #232f55`, `--accent: #c8a870`, `--accent-ink: #7d5f33`, `--bg-primary: #1c2644`, `--bg-secondary: #f0ece3`, `--bg-alt: #232f55`, `--text-primary: #e2dcd0`, `--text-secondary: #a9b0c4`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- **Surface scoping:** Because sections alternate, implement a `.section--paper` scope class that remaps the contextual tokens (`--text-primary` → `#1c2644`, `--text-secondary` → `#4a5470`, `--border-default` → `rgba(28,38,68,0.18)`, `--text-success` → `#3f6b4f`, `--text-error` → `#a34428`) so every component consumes one set of token names. Base `:root` values pair with navy surfaces: `--text-success: #8fb996`, `--text-error: #e5927c`, `--border-default: rgba(226,220,208,0.16)`.
- **Card surfaces:** `--surface-card` scoped per section: bone `#f0ece3` cards on navy sections; `#fefefe` cards on paper sections (light) / `#2a3560` (dark).
- **Contrast Pairing (mandatory, both themes):** bone/near-white surfaces carry only navy ink; navy surfaces carry only bone ink. Gold `#c8a870` must **never** be used as text or icon color on paper surfaces — use `--accent-ink` there. Verify ≥ 4.5:1 for all text.
- **Gold Law:** `#c8a870` appears exclusively as thin rules (1–2px borders, dividers, section-header accents), small icon highlights, featured-tier labels, and the small solid primary CTA button (navy text on gold — permitted as a compact highlight). Never as a large background fill, band, or panel.
- **Radius & Shadows:** `--radius-sm: 2px`, `--radius-md: 3px`, `--radius-lg: 4px` (institutional, near-square), `--shadow-sm: 0 1px 2px rgba(8,12,26,0.28)`, `--shadow-md: 0 8px 20px rgba(8,12,26,0.32)` (subtle lift).
- **Spacing & Transitions:** `--spacing-gap: 1.2rem` (dense), `--transition-fast: 200ms`, `--transition-normal: 250ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- **Elevation:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.
- **Fonts:** `--font-display: 'Source Serif 4', Georgia, serif`, `--font-base: 'DM Sans', Arial, sans-serif`, `--font-mono: 'IBM Plex Mono', monospace`.

**1.3 Mandatory Dark Mode Support**
- **Implementation:** Provide dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`: `--bg-secondary: #232f55`, paper-scoped cards `#2a3560`, `--accent-ink: #c8a870`, success/error revert to navy-surface values. The source spec labels dark support "partial" — override: dark mode **must** still be fully token-defined for every section, preserving the alternation rhythm via the two navy tones.
- **Theme Switching:** No HTML restructuring — only token remapping under `.dark`.
- **Persistence:** Store choice in `localStorage` (`"signal-theme"`); first visit falls back to `prefers-color-scheme`. Header includes a visible toggle button with a Material Symbol (`dark_mode` / `light_mode`), correct `aria-pressed` and `aria-label` ("Switch to dark mode" / "Switch to light mode").
- **Explicit exception clause:** One minimal inline `<script>` in `<head>` (≤ 5 lines, no other logic) is permitted solely to apply the stored theme class before first paint. All other JS lives in `script.js`.

**1.4 Flexbox Layout & Mobile-First Alignment**
- **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an exception is justified in a CSS comment (e.g., `stretch` for equal-height pricing cards).
- **Mobile-Friendly First:** All grids/rows collapse to single columns on small viewports; multi-column layouts begin at ≥ 640px. Prevent horizontal scrolling by design — never by masking overflow.

**1.5 Framework Decision & Naming Convention**
- **Framework:** The source specification supplies a raw hand-authored CSS architecture; therefore build with **plain, hand-authored CSS** (no Tailwind, no framework). Layout via Flexbox and CSS Grid only.
- **Single Convention:** BEM naming exclusively (`.card`, `.card--paper`, `.card--featured`, `.faq-item__trigger`, `.site-header__nav`, etc.). Never mix conventions.

**1.6 Typography & Icons (Google Only)**
- **Text:** Load Source Serif 4, DM Sans, and IBM Plex Mono via Google Fonts `<link>` tags with `preconnect`. Bind to `--font-display`, `--font-base`, `--font-mono`.
- **Icons:** Google Material Symbols (Outlined) via `<link>`. **Raw inline SVGs and local icon files are forbidden.** Configure `font-variation-settings` for the icon font once in CSS.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component** (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--navy`)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` min 44×44px. DM Sans 600, uppercase, `0.8125rem`, `letter-spacing: 0.08em`, `border-radius: var(--radius-sm)`. `.btn--primary`: solid gold, navy text (both themes). `.btn--secondary`: transparent, 1px bone/navy hairline border per surface scope. `.btn--navy`: solid navy, bone text (on paper cards).
- **Hover:** 200ms shift — `filter: brightness(1.05)` plus `--shadow-sm`; `cursor: pointer`.
- **Focus:** Distinct `:focus-visible` ring via `outline: 2px solid` using `--accent` (navy surfaces) / `--accent-ink` (paper surfaces), `outline-offset: 2px`.
- **Active:** `transform: scale(0.97)` press feedback.
- **Loading:** `.is-loading` + `aria-busy="true"` — pointer events disabled (prevents double-clicks), renders a CSS spinner (`<span class="btn__spinner">` border-top animation) or rotating `progress_activity` Material Symbol; button dimensions must not change.
- **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`.
- **Success/Error:** `.is-success` / `.is-error` transient states on the form submit button driven by `--text-success` / `--text-error`.

**2.2 Card Component** (`.card`, `.card--paper`, `.card--featured`)
- **Default:** Flexible Flexbox column, `gap: var(--spacing-gap)`, `border: 1px solid var(--border-default)`, `border-radius: var(--radius-md)`, subtle `--shadow-sm`, surface per section scope.
- **Hover:** `transform: translateY(-2px)` + `--shadow-md`, 200ms — subtle lift.
- **Focus-within:** Border shifts to `var(--accent)` when a child link/button is focused.
- **Loading (Skeleton):** Define `.skeleton` shimmer (linear-gradient sweep keyframes) with fixed aspect ratios to prevent layout jumps — required in CSS even if not initially rendered.
- **Empty State:** Define `.card--empty` pattern: centered Material Symbol + one line of guidance text.
- **Featured (pricing middle tier):** `border-top: 2px solid var(--accent)` + IBM Plex Mono uppercase gold label "RECOMMENDED".

**2.3 Form & Input** (Final CTA email capture)
- **Structure:** `.input-group` flex container wrapping: `<label>` ("Work email"), `<input type="email">`, and a dedicated error container with `aria-live="polite"` and reserved `min-height` (no layout jump).
- **States:** Empty; Focus (2px ring, per-scope accent); Filled; Valid (`--border-success` + `check` icon); Invalid (`--border-error`, error text `--text-error`, `error` icon, message: "Enter a valid work email address."); Disabled; Read-only. Input: transparent background, 1px bone/navy hairline per scope, `--radius-sm`, min-height 44px.
- **Behavior:** On submit — button enters loading (~900ms) → success state; inline success message with `check` icon: "Request received. Our team will reach out within one business day." Feedback is never color-only.

**2.4 Modal / Popup Policy**
- **No modal is required** for this page; the FAQ must be an in-page accordion, not a popup.
- **Conditional clause:** If any overlay is ever introduced, it must use a centered flex overlay, backdrop, Material Symbol close button, focus trapping, `Esc`/overlay-click closing, and 250ms open/close transitions per `--z-modal`.

---

## 3. PAGE SECTIONS & CONTENT SPECIFICATION

Global section pattern: container `max-width: 72rem`, `padding-inline: clamp(1rem, 5vw, 2rem)`, `padding-block: clamp(4rem, 8vw, 6.5rem)`; every section header uses the signature treatment — IBM Plex Mono uppercase gold eyebrow with `border-top: 1px solid var(--accent)` (`--accent-ink` on paper), `padding-top: 0.75rem`, followed by a Source Serif 4 H2. All grids: `gap: var(--spacing-gap)` (dense). Write real, specific copy per the direction below — lorem ipsum is prohibited.

**3.0 Site Header (sticky, navy, both themes)**
Serif wordmark "Signal"; nav links (Features, Method, Pricing, FAQ) with gold hover underline 200ms; theme toggle; compact `.btn--primary` "Request Access". 1px gold bottom hairline. Mobile: Material `menu` button opens an accessible disclosure panel (`aria-expanded`, closes on `Esc`). Include a visually-hidden-until-focused "Skip to main content" link. `scroll-margin-top: 5rem` on all anchored sections; `scroll-behavior: smooth` (disabled under reduced motion).

**3.1 Hero (navy, full-bleed, purely typographic — no photos)**
Mono gold eyebrow "INSTITUTIONAL RESEARCH INTELLIGENCE"; H1 in Source Serif 4 600 (`clamp(2.5rem, 6vw, 4rem)`), bone: *"Every signal, held to an institutional standard."*; subcopy in `--text-secondary` (max ~60ch): *"Signal verifies provenance, audits every source, and delivers a daily briefing your institution can defend."*; CTAs: `.btn--primary` "Request Access" (anchors to Final CTA) + `.btn--secondary` "See the Method". Below: a dense mono data strip — "240+ member institutions", "12.8B verified records", "99.98% uptime", "SOC 2 Type II" — separated by 1px gold hairlines, flex-wrapped.

**3.2 Features (paper, 3 cards)**
Header eyebrow "CAPABILITIES", H2 "Built to survive an audit." Dense 3-column grid (1-col mobile) of `.card--paper` (`#fefefe`, navy ink): each with a gold-ink Material icon (`fact_check`, `tune`, `lock`) inside a 1px-bordered square, serif H3 ("Provenance Ledger", "Threshold Briefings", "Private by Architecture"), DM Sans body, and a "Learn more" text link with gold underline on hover.

**3.3 How It Works (navy, 3 steps)**
Header eyebrow "THE METHOD", H2 "Three steps. No ambiguity." Desktop: 3 columns joined by continuous 1px gold connector rules; each step: IBM Plex Mono large gold numeral (`01` / `02` / `03`), serif H3 bone ("Integrate", "Calibrate", "Brief"), body `--text-secondary`. Mobile: vertical stack with a 1px gold left border rail.

**3.4 Testimonials (paper, 3 cards)**
Header eyebrow "ON THE RECORD", H2 "Trusted where scrutiny is standard." Dense 3-card grid of `.card--paper`: gold-ink `format_quote` Material icon; quote in **Source Serif 4 italic**, navy ink; attribution row — serif monogram initials inside a 1px gold-bordered square (no avatar photos) — name and role in DM Sans, institution in IBM Plex Mono. Realistic, varied examples (e.g., "Dr. Elena Marsh, Director of Research, Northgate University").

**3.5 Pricing (navy, 3 tiers, bone paper cards — the signature card moment)**
Header eyebrow "TERMS", H2 "Priced for institutions, not experiments." Dense 3-column grid of `.card--paper` (bone `#f0ece3`, navy ink): tier name (serif), large price in IBM Plex Mono ($49 / $149 / $399) with muted "/seat · month" mono microcopy ("billed annually"), 4–5 feature rows with gold `check` icons, per-tier CTA — middle "Briefing" tier is `.card--featured` (2px gold top rule + mono "RECOMMENDED" gold label + `.btn--primary`; outer tiers use `.btn--navy`). Equal-height cards (`align-items: stretch`, justified exception).

**3.6 FAQ (paper, accordion — not a modal)**
Header eyebrow "QUESTIONS", H2 "Answered in full." Five `.faq-item`s: full-width flex trigger (`space-between`, `align-items: center`) with serif H3 question in navy, Material `add` icon that rotates to `45deg`/swaps on open; panel animates via the `grid-template-rows: 0fr → 1fr` technique (250ms). ARIA: `aria-expanded`, `aria-controls`, panel `role="region"` + `aria-labelledby`. Keyboard operable; hover tint on trigger 200ms. Cover: provenance verification, data storage/tenancy, connecting existing systems, onboarding, cancellation.

**3.7 Final CTA (alt navy `--bg-alt`, full-bleed, centered flex column)**
Thin gold rule above the block; serif H2 bone "Put your briefing on the record."; one supporting line; the email capture form per **2.3** (transparent input, bone hairline, gold focus ring, `.btn--primary` "Request Access"); mono microcopy below: "No commitment · SOC 2 Type II · Cancel anytime".

**3.8 Footer (navy, 1px gold top border)**
Four dense columns: brand (serif wordmark, mission line "Research intelligence, held to an institutional standard.", mono "EST. MMXXV"); Product (Features, Method, Pricing, FAQ — anchor to sections); Institution (About, Security, Compliance, Contact); Resources (Documentation, Status, Changelog, Support). Secondary links in `--text-secondary`, hover → gold underline 200ms. Bottom bar: "© 2025 Signal Systems, Inc." + Privacy / Terms links, separated by gold hairline.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** Fluid `clamp()` typography; breakpoints ≥ 640px and ≥ 1024px; zero horizontal overflow on any viewport from 320px up.
- **Smooth Animations:** All state changes use `transition: var(--transition-fast|normal) var(--ease-standard)` (200–250ms per theme). Honor `prefers-reduced-motion`: disable transforms, shimmer, accordion animation, and smooth scrolling.
- **Accessibility (a11y):** AA contrast (≥ 4.5:1) in both themes — gold never as text on paper. Never color-only state (FAQ icon + `aria-expanded`; input error icon + text). Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), one H1, logical heading order, logical DOM/focus order, full keyboard operability (nav, toggle, FAQ, form), `aria-live` regions for all dynamic feedback. `::selection` styled gold with navy text as a finishing touch.
- **Mandatory Visual Feedback:** Every hover, click, focus, and submission produces a visible state change.
- **Destructive Actions:** None exist on this page; if one is ever added, it must use a `.btn-danger` class visually distinct in both themes.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **File Structure:** Three separate files — `index.html`, `style.css`, `script.js` (referenced once, with `defer`). No inline `<style>` blocks; no inline `<script>` beyond the single permitted head theme-snippet exception (1.3).
- **script.js scope:** Theme toggle + persistence, mobile nav disclosure, FAQ accordion (ARIA wiring), email validation + loading/success flow, auto-set footer year. Nothing more.
- **Naming Convention:** BEM everywhere, in both HTML and CSS — never mixed.
- **Copy:** All user-facing copy in English, real and specific to the Signal brand per Section 3 — lorem ipsum and unrequested placeholder content are prohibited (input placeholder attributes are permitted).
- **Output:** Generate the complete final code for all three files in one attempt, immediately, with no commentary before or after.
