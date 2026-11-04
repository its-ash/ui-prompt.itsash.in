# CODING AGENT PROMPT — Build the "70s Psychedelic Flower Power" Landing Page

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-ready Landing Page **on the first attempt** — no clarifying questions, no stubs, no TODOs. Every rule in this document is mandatory. Generate the final code immediately after reading it.

**Objective:** A single-page, fully responsive landing page in the **70s Psychedelic Flower Power** style (Playful, Whimsical, Educational), containing: **Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links**, plus a sticky header with anchor navigation and a theme toggle.

---

## 0. THEME SPECIFICATION & DESIGN DIRECTION

**0.1 Mood & Keywords**
70s, psychedelic, retro, flower, groovy, wavy, colorful, hippie. Bright retro colors, groovy typography, wavy lines, hippie aesthetic, flat vector illustration feel.

**0.2 Color Palette & Token Mapping**

Light mode — "Sunshine Commune" (default):

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#FFF9C4` | Page background (butter yellow — never pure white) |
| `--bg-secondary` | `#fefefe` | Card/surface background (use `#fefefe`, never `#ffffff`) |
| `--text-primary` | `#2A0A4A` | Headings & body text (deep purple) |
| `--text-secondary` | `rgba(42, 10, 74, 0.75)` | Supporting text |
| `--primary` | `#FF6E40` | Sunset Orange — CTAs, borders, highlights |
| `--secondary` | `#9C27B0` | Purple Haze — fills, focus rings, hard shadows |
| `--accent-green` | `#69F0AE` | Groovy Green — **decorative only in light mode** (too light for text on light backgrounds) |
| `--accent-yellow` | `#FFD740` | Sunshine Yellow — badges, fills, rainbow strips |
| `--text-success` | `#1B5E20` | Readable success text |
| `--text-error` | `#B71C1C` | Readable error text |
| `--border-default` | `rgba(42, 10, 74, 0.2)` | Standard borders |
| `--border-success` | `#1B5E20` | Valid input borders |
| `--border-error` | `#B71C1C` | Invalid input borders |

Dark mode — "Midnight Haze" (mandatory, see §1.3):

| Token | Value |
|---|---|
| `--bg-primary` | `#1A0B2E` (midnight purple) |
| `--bg-secondary` | `#2A1244` |
| `--text-primary` | `#FFF9C4` |
| `--text-secondary` | `rgba(255, 249, 196, 0.75)` |
| `--primary` | `#FF6E40` |
| `--secondary` | `#CE93D8` (lightened Purple Haze for text/border legibility; keep `#9C27B0` for fills) |
| `--accent-green` | `#69F0AE` (now also valid as success text) |
| `--accent-yellow` | `#FFD740` |
| `--text-success` | `#69F0AE` |
| `--text-error` | `#FF8A80` |
| `--border-default` | `rgba(255, 249, 196, 0.25)` |
| `--border-success` | `#69F0AE` |
| `--border-error` | `#FF8A80` |

**0.3 Typography**
- `--font-display: 'Chewy', cursive` (Google Fonts) — logo, all headings, buttons.
- `--font-base: 'Quicksand', sans-serif` (Google Fonts, weights 400–700) — body copy for legibility; Chewy is display-only.
- Fluid sizing via `clamp()`; strict `h1 → h2 → h3` hierarchy.

**0.4 Icons**
- Use **Google Material Symbols Rounded** (FILL 1) loaded via Google Fonts `<link>`.
- Suggested glyphs: `filter_vintage`, `local_florist`, `emoji_nature`, `wb_sunny`, `self_improvement`, `favorite`, `star`, `check_circle`, `celebration`, `music_note`, `mail`, `arrow_forward`, `expand_more`, `light_mode`, `dark_mode`, `menu`, `close`.
- **Forbidden:** inline SVGs, local icon files, emoji-as-icons, any non-Google icon source.

**0.5 Signature 70s Visual Language (CSS-only)**
- **Organic blob shapes:** `border-radius: 50% 20% / 10% 40%` (token `--radius-blob`); vary corner values per card for a handmade feel.
- **Thick groovy borders:** `5px solid` accent colors (token `--border-groovy: 5px solid var(--primary)`).
- **Wavy rainbow borders/dividers:** build from `repeating-linear-gradient` strips (orange → yellow → green → purple) and scalloped edges via `radial-gradient` or layered pseudo-elements — pure CSS, no images.
- **Daisies, mushrooms, peace motifs:** CSS-drawn (box-shadow petal trick, border-radius blobs) and/or Material Symbols glyphs.
- **Flat vector feel:** solid fills, hard offset shadows (e.g., `box-shadow: 6px 6px 0 var(--secondary)`), no photorealism, no glossy gradients.
- Subtle dot/flower background texture via `repeating-radial-gradient` is allowed.

**0.6 Section Map & Content Requirements**
Define **one coherent fictional product concept** (e.g., "Flower Power Academy — a playful online course platform teaching 70s art, music & culture") and write all copy consistently around it.
1. **Header (sticky):** Chewy text wordmark, anchor links (Features, How It Works, Pricing, FAQ), theme toggle, CTA button. Mobile: hamburger → dropdown panel (`--z-dropdown`, `aria-expanded`, closes on `Esc` and on link click).
2. **Hero:** eyebrow badge, `h1` headline, subcopy, primary + secondary CTA, CSS flower-field decoration, wavy bottom divider; optional slow-floating daisies (reduced-motion safe).
3. **Features:** exactly 3 cards — Material Symbol icon, title, 2–3 sentence description.
4. **How It Works:** 3 numbered steps (01/02/03) joined by a wavy dashed CSS connector; stacks vertically on mobile.
5. **Testimonials:** 3 cards — quote, star rating (Material `star` icons + `aria-label="Rated 5 out of 5 stars"`), avatar as **initials in a groovy gradient circle** (no external images), name + role.
6. **Pricing:** 3 tiers; middle tier featured (`.card--featured`) with rainbow border, "Most Groovy" badge, slight scale; per-tier feature list with `check_circle` icons; each tier CTA enters loading state on click, then confirms via toast.
7. **FAQ:** 5–6 items using native `<details>/<summary>` (styled) or `button` + `aria-expanded`; rotating chevron; fully keyboard operable.
8. **Final CTA:** rainbow-bordered banner with newsletter email form (§2.3); success → button success state + success modal (§2.4) and/or toast.
9. **Footer:** brand blurb, secondary link groups (About, Resources, Legal), social links (text links or generic Material icons with `aria-label` — brand logos are forbidden), copyright, back-to-top link.

All user-facing copy: original, on-theme **English** (groovy, warm, clear). **No lorem ipsum.**

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **Explicitly forbidden:** `style="..."` attributes anywhere in the HTML.
- Target everything via class or ID selectors only.
- HTML remains clean, semantic, and style-agnostic — re-theming the site must require CSS edits only, never markup changes.

**1.2 CSS Variables & Theme Tokens**
- Store all tokens in `:root` (and theme overrides). Mandatory set: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast` — plus theme extensions `--font-display`, `--font-base`, `--accent-green`, `--accent-yellow`, `--radius-blob`, `--border-groovy`.
- Suggested values: `--radius-sm: 8px; --radius-md: 18px; --radius-lg: 32px; --spacing-gap: 1.5rem; --transition-fast: 150ms; --transition-normal: 300ms; --ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55)` (groovy overshoot); `--z-dropdown: 100; --z-modal: 200; --z-toast: 300`; hard 70s shadows (`--shadow-md: 6px 6px 0 …`) overridden per theme.
- **Contrast pairing rule:** every light background token pairs with a dark text token and vice versa — enforced in **both** themes, not just the default.
- Never use `#ffffff`; use `#fefefe` where a near-white is needed.

**1.3 Mandatory Dark Mode**
- Define dark tokens under **both** `@media (prefers-color-scheme: dark)` **and** a `.dark` class; provide a `.light` class override so an explicit user choice always wins.
- Include a visible toggle (Material `light_mode`/`dark_mode` icon) with correct `aria-pressed` and `aria-label` state; persist choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; switching themes must require zero HTML restructuring.
- **Exception note:** the source style spec listed dark mode as "✗ No" — this is overridden: dark mode is a mandatory deliverable, delivered as the "Midnight Haze" variant (§0.2) with polish equal to light mode.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. **Every flex container defaults to `align-items: center`** unless an explicitly justified exception is documented in a CSS comment.
- Mobile-first: rows convert to columns on small viewports; **zero horizontal scrolling** at any width; fluid `clamp()` sizing throughout.

**1.5 Framework Default**
- Use Tailwind CSS (CDN) **or** clean custom CSS driven by `@layer`/`@apply`. All utilities must map back to the CSS variables; generic reusable classes `.btn`, `.card`, `.input-group` are required regardless of approach.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load Chewy + Quicksand and Material Symbols Rounded via Google Fonts `<link>` tags in `<head>`. No other font or icon sources permitted.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
- `.btn` base: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target **44×44px**; Chewy label text; blob-ish radius; optional `--border-groovy`.
- Variants: `.btn--primary` (orange fill, `#2A0A4A` text), `.btn--secondary` (purple fill, light text), `.btn--ghost` (transparent, groovy border), `.btn--danger` (visually distinct in **both** themes).
- **Hover:** brightness/shadow shift plus a playful tilt (e.g., `rotate(-1deg)`); `cursor: pointer`.
- **Focus:** distinct focus ring via `box-shadow` using `--secondary`; visible for keyboard navigation.
- **Active:** `transform: scale(0.97)` click feedback.
- **Loading (`.is-loading`):** blocks pointer events, prevents double-clicks, renders a CSS spinner or animated Material icon **without changing button dimensions**.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error` (used on form submission).

**2.2 Card Component** (Features, Pricing tiers, Testimonials)
- **Default:** flexible Flexbox layout, `--bg-secondary` surface, `--border-default` + elevation, blob radius variants.
- **Hover:** `transform: translateY(-2px)` + shadow shift (hard shadow grows/offsets).
- **Focus-within:** card border highlights when a child link/button receives focus.
- **Loading (skeleton):** `.card--skeleton` shimmer animation defined in CSS keyframes — layout-stable, `prefers-reduced-motion` safe.
- **Empty state:** `.empty-state` pattern (Material icon + clear guidance text) defined for any dynamically filtered area.

**2.3 Form & Input Requirements** (Final CTA newsletter form)
- Structure: `.input-group` flex container wrapping a `<label>`, the `<input>`, and a **dedicated error feedback element** with `aria-live="polite"`.
- States: empty, focused (outline ring), filled, valid (success border + check icon), invalid (error border + error icon + message text), disabled, read-only.
- Validate the email with a regex in `script.js`; feedback is **never color-only** — always icon + text + border together.

**2.4 Modal / Popup Requirements** (newsletter success dialog)
- States: opening, open, loading, success/error, closing — all animated via CSS transitions (scale + fade with `--ease-standard`).
- Centered flex container (`align-items: center`), backdrop overlay, Material Symbol close button, keyboard **focus trap**, close via `Esc` or overlay click, focus returns to the trigger, `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
- **Toast:** `.toast` fixed to bottom, stacked above all layers via `--z-toast`, `aria-live` announcement, auto-dismiss, success/error variants.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, standard breakpoints, no horizontal overflow anywhere.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; `@media (prefers-reduced-motion: reduce)` disables floats, shimmer, spinners, and tilts (opacity-only fallbacks).
- **Accessibility (a11y):** ≥ 4.5:1 contrast for body text in **both** themes; never rely solely on color to communicate state; semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`, logical heading order); correct ARIA roles/labels on custom widgets (nav toggle, accordion, modal); logical DOM/focus order; full keyboard operability (no mouse-only interactions); a skip-to-content link; `aria-live` regions for form errors, toasts, and loading states.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** any destructive link (e.g., footer "Unsubscribe") must be visually distinct in both light and dark themes.
- **Theme motion:** subtle floating daisies and gentle wavy hover wiggles are encouraged — decorative animation must never block interaction or readability.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, and `script.js`. Exactly **one** `<script src="script.js" defer>` — no other inline `<script>` blocks.
- **Naming convention:** BEM consistently across the entire deliverable (`.btn`, `.btn--primary`, `.card`, `.card--featured`, `.hero__title`, `.nav__toggle`, `.faq__summary`…). Never mix conventions.
- **`<head>`:** Google Fonts + Material Symbols links, `<meta name="color-scheme" content="light dark">`, responsive viewport meta.
- **No external images:** avatars are initials in gradient circles; all illustration is CSS + Material Symbols.
- **No unrequested placeholders:** author complete, real, on-theme English copy for every section — lorem ipsum is prohibited; placeholders are allowed only where content was genuinely left unspecified (none expected here).
- **Complete first attempt:** deliver the full, runnable page in one response — all nine areas built, both themes functional, every component state in §2 implemented. No TODOs, no truncated code, no follow-up dependencies.
