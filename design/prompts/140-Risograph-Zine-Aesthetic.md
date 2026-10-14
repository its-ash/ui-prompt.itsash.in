# Landing Page Build Specification — "Risograph Zine Aesthetic"

**Role & Objective:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality, single-page marketing site on the first attempt. Every rule below is mandatory unless explicitly marked as an exception clause. All user-facing copy must be written in English.

---

## 0. Project Brief & Creative Direction

**0.1 Theme & Brand**
- **Aesthetic:** Risograph Zine — tactile, retro-intellectual, approachable. Indie-print era. Keywords: risograph, zine, print, overlay, texture, grain, multiply, ink.
- **Fictional product:** Brand the page as "MISPRINT CLUB" — a risograph print studio and zine-making community. Keep the name, voice, and imagery coherent across every section. Tone: witty, warm, print-nerdy.

**0.2 Required Sections (in this order)**
1. Sticky Header (wordmark, anchor nav, theme toggle, CTA button)
2. Hero
3. Features (3 cards)
4. How It Works (3 steps)
5. Testimonials (3 quotes)
6. Pricing (3 tiers)
7. FAQ (accordion)
8. Final CTA (email capture form)
9. Footer with secondary links

**0.3 Copy Rules**
- Write real, on-theme English copy for every section — headlines, body text, feature descriptions, testimonial quotes, pricing details, FAQ questions/answers, footer labels. Lorem ipsum is forbidden.

**0.4 Signature Riso Techniques (all implemented in CSS — no images, no SVG markup)**
- **Offset misregistration:** Display headlines get a 2–3px offset duplicate "ink pass" via `text-shadow` in Riso Blue at 50–65% opacity.
- **Multiply blending:** Overlapping decorative ink layers use `mix-blend-mode: multiply` (light theme) — switched to `screen` in dark mode so inks stay visible on dark stock.
- **Coarse paper grain:** Full-viewport fixed texture overlay at 4–6% opacity (implementation defined in 2.1).
- **Ink bleed:** Decorative shapes are built as two stacked layers — a blurred, slightly larger, lower-opacity "bleed" pass beneath a crisp shape.
- **Rough stamp edges:** Wobbly hand-drawn corners via `--radius-stamp`, 2px solid ink borders, and slight rotations (−2° to 2°) on cards, badges, and stickers.
- **Print filter:** `filter: contrast(120%) brightness(90%)` applies to decorative artwork layers only — never to containers holding body text.

---

## 1. Strict Rules & Architecture

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- All design properties, layout rules, and states are applied exclusively via class or ID selectors.
- HTML remains semantic and style-agnostic: retheming the entire site must require editing `style.css` only, never the markup.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`, then override under `.dark`:

| Token | Light "Paper" | Dark "Night Press" | Usage |
|---|---|---|---|
| `--bg-primary` | `#FDFBF6` | `#14143A` | Page background (never `#ffffff`) |
| `--bg-secondary` | `#F7F1E4` | `#1D1D4A` | Cards, panels |
| `--text-primary` | `#1C1C5E` | `#FDFBF6` | Headings, body |
| `--text-secondary` | `#4B4B8F` | `#C9C6F0` | Supporting copy |
| `--primary` | `#E63E85` | `#FF6FA5` | Accent ink — display text ≥24px, borders, decoration |
| `--primary-deep` | `#C2186D` | `#FF6FA5` | Filled buttons, small accent text (AA-safe) |
| `--secondary` | `#0078BF` | `#4FC3FF` | Links, focus rings, misregistration pass |
| `--riso-yellow` | `#FFE800` | `#FFE800` | Fill chips/highlights paired with `--text-primary`; never text on light backgrounds |
| `--riso-mint` | `#00A95C` | `#3DDC84` | Decorative ink |
| `--text-success` | `#006B39` | `#3DDC84` | Success text |
| `--text-error` | `#C0272D` | `#FF7A70` | Error text |
| `--border-default` | `#1C1C5E` | `#FDFBF6` | 2px ink borders |
| `--border-success` / `--border-error` | `#006B39` / `#C0272D` | `#3DDC84` / `#FF7A70` | State borders |
| `--shadow-ink` / `--shadow-ink-accent` | `#0078BF` / `#E63E85` | `#4FC3FF` / `#FF6FA5` | Hard offset shadow colors |

- **Non-color tokens:** `--font-base: 'Work Sans'`; `--font-display: 'Archivo Black'`; `--radius-sm: 2px`; `--radius-md: 4px`; `--radius-lg: 10px`; `--radius-stamp: 255px 15px 225px 15px / 15px 225px 15px 255px`; `--shadow-sm: 3px 3px 0 var(--shadow-ink)`; `--shadow-md: 6px 6px 0 var(--shadow-ink)` (hard offset "misprint" shadows only — no blur on component shadows); `--spacing-gap: 1.5rem`; `--transition-fast: 120ms`; `--transition-normal: 240ms`; `--ease-standard: cubic-bezier(0.22, 0.61, 0.36, 1)`; `--ease-stamp: cubic-bezier(0.34, 1.56, 0.64, 1)`; `--z-dropdown: 1000`; `--z-modal: 2000`; `--z-toast: 3000`; `--z-grain: 4000`.
- **Contrast pairing (enforced in both themes):** Yellow is never used as text on light backgrounds. Pink `#E63E85` on light paper is reserved for display text ≥24px (or ≥18.66px bold), borders, and decoration; small text and filled buttons use `--primary-deep`. Every light background token pairs with dark text and vice versa.
- Set `color-scheme: light` / `dark` per theme so native controls match.

**1.3 Mandatory Dark Mode — "Night Press" Edition**
- Dark mode must be fully defined via both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`, with all tokens from 1.2 overridden.
- **Toggle:** A visible header button using Material Symbols (`dark_mode` / `light_mode`) with correct `aria-pressed` and `aria-label`. Choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit. All logic lives in `script.js`.
- **Blend-mode inversion:** Under `.dark`, decorative layers switch `mix-blend-mode: multiply` → `screen`.
- **Exception clause:** The source style specification requests a light-only experience; therefore the light "Paper" theme is the default and primary look, and dark mode is delivered as the "Night Press" variant (dark indigo stock, fluorescent inks) rather than omitted.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox (Tailwind flex utilities or custom flex classes).
- Every flex container defaults to `align-items: center` (`items-center`) unless an exception is explicitly justified in a CSS comment.
- Mobile-first: multi-column rows collapse to single columns at breakpoints; zero horizontal scrolling at any viewport from 320px up.

**1.5 Framework Default: Tailwind CSS**
- Use Tailwind CSS with custom component classes defined via `@layer components` and `@apply`, all mapping back to the CSS variables above. Reusable classes required: `.btn` (+ `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-danger`), `.card`, `.input-group`, `.badge-stamp`, `.section`, `.container-zine`.
- Repeated visual patterns must become component classes — no one-off utility soup.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load via Google Fonts `<link>`: **Work Sans** (400, 500, 700, 900) as `--font-base` for body copy; **Archivo Black** (400) as `--font-display` for zine masthead headlines.
- Icons: Google Material Symbols (Rounded style). Inline `<svg>` elements and local icon files are forbidden.
- Decorative riso shapes (circles, halftone dot fields, ink blobs, stamps) must be drawn with CSS only (gradients, `border-radius`, pseudo-elements, `box-shadow`).
- **Exception clause:** The paper-grain texture may use a single `feTurbulence` SVG data-URI assigned as a `background-image` inside `style.css` (a CSS background, not DOM markup); otherwise grain is pure CSS halftone gradients.

---

## 2. Component & Section Design Specifications

**2.1 Global Riso Treatment**
- Body base: `background-color: var(--bg-primary); color: var(--text-primary); font-family: var(--font-base)`.
- **Grain overlay:** fixed, full-viewport, `pointer-events: none`, `z-index: var(--z-grain)`, 4–6% opacity, implemented per 1.6 — it must never intercept clicks.
- **Halftone fields:** `repeating-radial-gradient` dot patterns in ink colors as section backgrounds and accents.
- Display headings: Archivo Black with the blue misregistration `text-shadow` from 0.4.
- Cards/badges carry slight rotations; they straighten to 0° on hover/focus for tactile feedback.

**2.2 Button Component**
All states as CSS classes:
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, 2px solid ink border, hard offset shadow, bold Work Sans label.
- **Hover:** shadow offset grows (3px → 6px) with `translate(-2px, -2px)`; `cursor: pointer`.
- **Focus:** distinct 3px outline in `--secondary` with 2px offset, visible in both themes.
- **Active/Pressed:** `transform: scale(0.97)`; shadow collapses to zero offset.
- **Loading:** `aria-busy="true"`, interactions blocked to prevent double-clicks, Material Symbol `progress_activity` rotating via CSS animation — button dimensions must not change.
- **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`.
- **Success/Error:** temporary state classes driven by `--text-success` / `--text-error`, announced via `aria-live`.

**2.3 Card Component (Features, Testimonials, Pricing)**
- **Default:** `--bg-secondary` paper, 2px `--border-default` border, `--shadow-sm` hard offset, `--radius-stamp` or `--radius-md`, slight rotation.
- **Hover:** `translateY(-2px)`, rotation → 0°, shadow offset grows.
- **Focus-within:** border shifts to `--secondary` when a child link/button receives focus.
- **Loading:** CSS shimmer skeleton that prevents layout jumps.
- **Empty state:** Material Symbol plus clear guidance text.

**2.4 Form & Input (Final CTA email capture)**
- **Structure:** `.input-group` flex container wrapping `<label>`, `<input type="email">`, and a dedicated error feedback element with `aria-live="polite"`.
- **States:** empty, focused (outline ring in `--secondary`), filled, valid (`--border-success` + check icon), invalid (`--border-error`, error icon, error message text), disabled, read-only.
- **Behavior:** `script.js` validates on submit (email pattern), prevents page reload, shows inline errors and a success confirmation in an `aria-live` region.

**2.5 Modal / Popup (if any interactive detail view is used, e.g., pricing details)**
- **States:** opening, open, loading, success/error, closing — all animated via CSS transitions (scale + fade).
- **UX:** centered flex container (`align-items: center; justify-content: center`), backdrop overlay, Material Symbol `close` button, keyboard focus trapping, focus returned to trigger, closable via `Esc` and backdrop click, `role="dialog"`, `aria-modal`, `aria-labelledby`.

**2.6 Section-by-Section Specifications**
- **Header:** sticky, paper background, bottom ink border; wordmark in `--font-display`; anchor links (Features, How It Works, Testimonials, Pricing, FAQ); theme toggle per 1.3; "Start Printing" `.btn-primary`. Mobile: Material Symbol `menu` disclosure nav — keyboard operable, closes on link click and `Esc`.
- **Hero:** masthead composition — oversized Archivo Black headline with misregistration, subcopy, dual CTAs (`.btn-primary` + `.btn-secondary`), and a CSS-only riso artwork (overlapping circles, halftone fields, and blobs in pink/blue/yellow with multiply blending and bleed underlayers), plus a rotated stamp badge. Optional ink ticker strip below the hero (repeating tagline separated by Material Symbol glyphs) — must be static or paused under `prefers-reduced-motion`.
- **Features:** 3 cards; each with a Material Symbol inside a rotated riso ink chip (yellow, blue, pink respectively), a title, and 2–3 lines of copy; alternating card rotations.
- **How It Works:** 3 steps with oversized misregistered display numerals (01/02/03), a dashed ink connector line (horizontal on desktop, vertical on mobile), step titles and copy.
- **Testimonials:** 3 zine-clipping style cards (`--radius-stamp`, tape/stamp visuals via CSS), oversized quote glyph, quote, attribution with initials in an ink circle plus role.
- **Pricing:** 3 tiers with themed names (e.g., Single Sheet / Stapled Zine / Full Press Run); middle tier featured on a yellow ink panel with a rotated "BEST VALUE" stamp badge and larger shadow; each tier lists features with Material Symbol `check` in mint and a CTA (`.btn-primary` featured, `.btn-secondary` others).
- **FAQ:** accessible accordion — `<button aria-expanded>` + controlled region, Material Symbol `expand_more` rotating 180°, CSS height transition, full keyboard operability; 5–6 real questions (turnaround, paper stocks, ink colors, file prep, bulk pricing, shipping).
- **Final CTA:** full-bleed layered ink panel (pink + blue multiply layers), display headline, email capture per 2.4 with visible success/error feedback.
- **Footer:** indigo ink block with cream text in light mode (tokens inverted correctly in dark); columns of secondary links (About, Workshops, Stockists, Careers, Contact, Privacy, Terms); social icons as labeled Material Symbols; copyright line. All links show visible focus states and hover feedback.

---

## 3. Core UX & Micro-Interaction Rules

- **Responsive by default:** fluid type via `clamp()`, standard breakpoints, zero horizontal overflow from 320px up.
- **Smooth animations:** CSS transitions on all state changes using the transition tokens; under `prefers-reduced-motion`, disable the ticker, rotations, shimmer, and non-essential motion while keeping instant state changes.
- **Accessibility:** AA contrast in both themes per the pairing rules in 1.2; never rely on color alone — pair every state with an icon and/or text; semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`); logical DOM/focus order; full keyboard operability for nav, accordion, modal, and forms; a skip-to-content link; `aria-live` regions for form feedback and any toasts.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** any delete/danger action uses `.btn-danger` in riso red, visually distinct in both themes.

---

## 4. Deliverables & Output Format

- **Files:** separate `index.html`, `style.css`, and `script.js`. A single `<script src="script.js" defer>` reference in the HTML; no inline script logic, no inline styles anywhere.
- **Naming convention:** BEM (`block__element--modifier`) applied consistently across HTML, CSS, and JS hooks — never mix conventions.
- **Copy:** real English copy for every section per 0.3; placeholders only for genuinely unspecified content, clearly marked.
- **Completeness:** deliver all sections, all component states, and both themes in this single response — no stubs, no "to be continued."
