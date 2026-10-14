# BUILD PROMPT — "HOROLOGÉ — Time, considered." Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page specified below **on the first attempt**. All code, comments, and user-facing copy must be written in **English**.

**Mission:** A single-page marketing site for HOROLOGÉ, a contemporary (2020s) horological brand. Aesthetic: quiet luxury — warm ivory surfaces, ink-black typography, brass-gold accents, soft neumorphic depth, blurred gradient glows. Motion must feel slow, deliberate, and mechanical, like a well-made watch. Author all copy in this brand voice: short, precise, considered sentences.

---

## 1. THEME & DESIGN DIRECTION

**1.1 Concept & Mood**
- The page sells *time considered*: precision, patience, permanence. The signature element is a **live CSS-only analog clock** in the hero, its hands animated purely by CSS keyframes, surrounded by a pulsing gold glow.
- Brand voice example: hero H1 is the tagline itself — **"Time, considered."** Write every headline, feature, step, testimonial, pricing label, FAQ answer, and footer line in this restrained voice. **No lorem ipsum anywhere** — author original, in-theme English copy.

**1.2 Color System — Map Exactly to These Tokens**
Light theme (default), defined in `:root`:
- `--primary: #0B0B0D` (ink — primary buttons, strong surfaces) · `--secondary: #3E3B36` (warm graphite) · `--accent: #C9A96A` (brass gold — CTAs, focus, glow)
- `--bg-primary: #EDE8E0` (warm ivory page background — **never pure white**) · `--bg-secondary: #F4F1EB` (elevated cards) · `--bg-inverse: #131316` (dramatic bands: Final CTA, Footer)
- `--text-primary: #0B0B0D` · `--text-secondary: #3E3B36` · `--text-muted: #9B968E` · `--text-on-primary: #EDE8E0` · `--text-on-accent: #0B0B0D` · `--text-on-inverse: #EDE8E0`
- `--text-success: #4E7A5A` · `--text-error: #B4443C` · `--border-default: #D8D2C6` · `--border-strong: #9B968E` · `--border-success: #4E7A5A` · `--border-error: #B4443C`
- `--glow: rgba(201,169,106,0.45)` · `--gradient-gold: linear-gradient(135deg, #D9B87E 0%, #C9A96A 45%, #AE8A50 100%)`
- Neumorphic pair (light): `--neu-light: rgba(254,254,254,0.9)` · `--neu-dark: rgba(62,59,54,0.28)`

Dark theme, defined under `.dark` (and mirrored in `@media (prefers-color-scheme: dark)`):
- `--primary: #EDE8E0` · `--secondary: #9B968E` · `--accent: #C9A96A` (unchanged)
- `--bg-primary: #0B0B0D` · `--bg-secondary: #131316` · `--bg-inverse: #17171A` (elevated band with a low-opacity gold radial-gradient overlay)
- `--text-primary: #EDE8E0` · `--text-secondary: #9B968E` · `--text-muted: #6E6A62` · `--text-on-primary: #0B0B0D` · `--text-on-accent: #0B0B0D` · `--text-on-inverse: #EDE8E0`
- `--text-success: #7FB08A` · `--text-error: #E08A80` · `--border-default: #2E2B26` · `--border-strong: #3E3B36` · `--border-error: #E08A80` · `--border-success: #7FB08A`
- `--neu-light: rgba(255,255,255,0.04)` · `--neu-dark: rgba(0,0,0,0.55)`
- **Contrast pairing is mandatory in both themes:** every light background token pairs only with dark text tokens and vice versa. Gold `#C9A96A` is never used as text on ivory (fails contrast); on gold surfaces use `--text-on-accent`. Gold text is permitted only on ink/inverse surfaces. Never use `#ffffff`; if a near-white is required, use `#fefefe`. All pairings must meet WCAG AA (4.5:1 body, 3:1 large text / UI). In dark mode, favor soft shadows + gold glow over heavy neumorphism to preserve contrast.

**1.3 Typography — Google Fonts Only**
- `--font-display: "Playfair Display"` (weights 500–700) for headlines and the wordmark; `--font-base: "Inter"` (400–600) for body and UI. Load both via Google Fonts `<link>` tags (with `preconnect`).
- Wordmark "HOROLOGÉ": display font, uppercase, `letter-spacing: 0.35em`. H1: `clamp(2.5rem, 6vw, 4.5rem)`. Body: `1rem / 1.7`. Keep H1 ink-on-ivory; gold italic accents are allowed **only** on dark/inverse surfaces.

**1.4 Iconography — Google Material Symbols (Rounded)**
- Load via Google `<link>`; configure `font-variation-settings` for fill/weight. Required icons across the page: `schedule`, `settings`, `diamond`, `all_inclusive`, `touch_app`, `straighten`, `workspace_premium`, `star`, `expand_more`, `arrow_forward`, `menu`, `close`, `light_mode`, `dark_mode`, `check`, `check_circle`, `error`, `progress` (spinner).
- **Forbidden:** inline `<svg>` elements, local icon fonts/files, emoji-as-icons.

**1.5 Visual Effects — All Must Appear**
- **Blur:** frosted sticky header (`backdrop-filter: blur(14px) saturate(1.2)` over translucent ivory/ink); 2–3 large blurred radial-gradient orbs (`filter: blur(70px)`) behind the hero.
- **Glow:** pulsing gold halo on the clock dial (animated `box-shadow` with `--glow`); gold edge-glow on the featured pricing card; gold focus glow on interactive elements.
- **Neumorphism:** ivory cards with dual soft shadows (`--neu-light` top-left, `--neu-dark` bottom-right) at `--radius-lg`; icon medallions in neumorphic circles.
- **Gradients:** `--gradient-gold` on gold buttons and tier badges; hairline gold section dividers (`linear-gradient(90deg, transparent, #C9A96A, transparent)`); subtle radial ivory tint on the page background.
- **3D/Parallax:** hero orbs + clock drift with pointer movement (`translate3d`, rAF-throttled JS) and scroll parallax; featured pricing card tilts on hover (`perspective(900px)`, max 4deg). All parallax **disabled** under `prefers-reduced-motion`.
- **Hover effects:** buttons `brightness(1.06)` + shadow shift; cards `translateY(-2px)`; nav links get a gold underline that grows via `::after` width transition.
- **Keyframe animations:** clock hands, glow pulse, skeleton shimmer, spinner rotation, toast slide-in, scroll-reveal fade-up.

---

## 2. STRICT ARCHITECTURE RULES

**2.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css` only. The `style="..."` attribute is **forbidden** anywhere in the HTML. Presentation attributes (`border`, `align`, `bgcolor`, etc.) are also forbidden; sizing and ratio go through CSS (`aspect-ratio`, `clamp()`).
- Style exclusively via class and ID selectors. Keep the HTML semantic and style-agnostic: `header`, `nav`, `main`, `section` (with `aria-labelledby`), `article`, `h1–h3` hierarchy, lists as `ul/ol`, real `button`/`a` elements.

**2.2 CSS Variables & Theme Tokens**
- Define **all** tokens from Section 1.2 plus: `--font-display`, `--font-base`, `--radius-sm: 8px`, `--radius-md: 14px`, `--radius-lg: 24px`, `--shadow-sm`, `--shadow-md` (tuned per theme), `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`, `--z-dropdown: 1000`, `--z-modal: 2000`, `--z-toast: 3000`.
- Set `color-scheme` per theme on `:root`/`.dark` so native controls and scrollbars match.

**2.3 Mandatory Dark Mode — Light Is the Default (Exception Clause)**
- *Exception clause: the source specification marks Light as the default theme, so the page loads in Light — but a complete, fully designed Dark theme must still be implemented and toggleable.*
- Define dark tokens under a `.dark` class on `<html>` **and** mirror them inside `@media (prefers-color-scheme: dark)` so OS-dark users get a correct first paint before JS runs; JS then applies the stored preference if it differs.
- Provide a **visible toggle** in the header: Material icon (`light_mode`/`dark_mode`), correct `aria-pressed` state, and `aria-label` ("Switch to dark theme" / "Switch to light theme"). Persist choice in `localStorage` key `"horologe-theme"`; first visit falls back to `prefers-color-scheme`. Theme switching must swap CSS variables only — **no HTML restructuring**.

**2.4 Layout — CSS Grid (Macro) + Flexbox (Components), Mobile-First**
- *Exception clause: the source spec explicitly requests CSS Grid — use CSS Grid for the page macro-layout and card grids; Flexbox remains the standard inside every component.*
- **Every flex container must default to `align-items: center`** unless a stretch is required (comment the exception in CSS, e.g., stacked form labels).
- Breakpoints (min-width, mobile-first): base ≥320px single column; ≥720px two-column grids; ≥1024px three-column grids and the two-column hero. No horizontal scrolling at any width. Container: `max-width: 1200px`, `padding-inline: clamp(1.25rem, 5vw, 3rem)`. Section rhythm: `padding-block: clamp(4.5rem, 10vw, 8rem)`; `scroll-margin-top` set for anchor offsets.

**2.5 Styling Convention — BEM Only**
- Pure custom CSS in `style.css`, organized with native cascade layers: `@layer tokens, base, layout, components, utilities;`
- **One naming convention: BEM** (`block__element--modifier`, e.g., `.hero__clock-hand--second`, `.card--feature`, `.pricing-card--featured`). Reusable base classes required: `.btn`, `.card`, `.input-group`, `.section`, `.container`. Do not mix conventions; if you introduce Tailwind, it may only appear via `@apply` inside BEM component classes — never as scattered utilities in markup.

**2.6 Fonts & Icons Delivery**
- Google Fonts and Material Symbols loaded via `<link>` in `<head>` with `preconnect`. Bind fonts to `--font-base`/`--font-display`. No self-hosted fonts, no inline SVGs, no local icon files.

---

## 3. COMPONENT DESIGN SPECIFICATIONS — All States Styled via CSS Classes

**3.1 Buttons (`.btn`)**
- **Base:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target **44×44px**; padding `0.75rem 1.75rem`; `--radius-md`; font-weight 600; `cursor: pointer`; transition `var(--transition-fast)`.
- **Variants:** `.btn--primary` (`--primary` bg, `--text-on-primary`), `.btn--gold` (`--gradient-gold` bg, `--text-on-accent`, soft gold glow shadow), `.btn--ghost` (transparent, 1px `--border-strong`, `--text-primary`), `.btn--danger` (error-tinted bg/border — visually distinct in **both** themes).
- **Hover:** `filter: brightness(1.06)` + `--shadow-md`; gold variant intensifies its glow.
- **Focus-visible:** distinct gold ring — `outline: 2px solid var(--accent); outline-offset: 3px;` plus glow. Never remove focus outlines.
- **Active/pressed:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables interaction, **prevents double-clicks** (JS guard + `pointer-events: none`), and swaps the leading icon for a spinning Material `progress` icon **without changing button dimensions** (no layout shift).
- **Disabled (`[disabled]`):** `opacity: 0.5`, `filter: grayscale(0.6)`, `cursor: not-allowed`, no hover/active transforms.
- **Success/Error:** `.is-success` / `.is-error` temporarily restyle the button with `--text-success`/`--border-success` (gold-tinted check icon) or `--text-error`/`--border-error` (error icon) — used after form submissions; never color-only (always pair with an icon and text change).

**3.2 Cards (`.card`)**
- **Base:** `--bg-secondary` background, 1px `--border-default`, `--radius-lg`, flex column with `gap: var(--spacing-gap)`, neumorphic shadows in light mode (subtle in dark).
- **Hover (interactive cards):** `transform: translateY(-2px)` + elevation shift, `transition: var(--transition-normal)`.
- **Focus-within:** border shifts to `--accent` with a gold glow ring when a child link/button receives focus.
- **Skeleton (`.card--skeleton`):** shimmer blocks (animated `linear-gradient` keyframes, `--radius-sm`) sized to match real content so the skeleton→content swap causes **zero layout jump**; toggled with `aria-busy`.
- **Empty state (`.card--empty`):** centered fallback layout — large gold Material icon, short heading, one guidance sentence; wired as the fallback for the testimonials area.

**3.3 Forms & Inputs (`.input-group`)**
- **Structure:** flex **column** (stretch — comment this exception to the center rule) wrapping: `<label for>`, the control, and a dedicated `.input-group__error` feedback container (`aria-live="polite"`).
- **States — all styled:** empty, focused (gold ring: `box-shadow: 0 0 0 3px var(--glow)` + `--accent` border), filled, valid (`.is-valid`: `--border-success` + trailing check icon), invalid (`.is-invalid`: `--border-error`, red text via `--text-error`, error icon, message text in the error container), disabled, read-only.
- JS validates email (regex + empty check); errors are **never color-only** (icon + written message). Used in: Final CTA newsletter form and the modal reservation form.

**3.4 Modal (`.modal`) — "Reserve a Private Viewing"**
- **Structure:** `.modal-backdrop` (fixed, `inset: 0`, ink rgba overlay + `backdrop-filter: blur(8px)`) → `.modal` centered in a fixed flex container (`align-items: center; justify-content: center`), max-width 480px, `--bg-primary`, `--radius-lg`, `--shadow-md`, `--z-modal`.
- **States — all animated via CSS:** opening (fade + `scale(0.96)→1`), open, loading (submit), success (gold `check_circle` + confirmation copy) / error, closing (reverse transition).
- **UX:** Material icon close button (top-right, gold, `aria-label="Close dialog"`); `role="dialog"`, `aria-modal="true"`, `aria-labelledby`; **keyboard focus trap**; close via `Esc` and backdrop click; focus restored to the trigger on close. Opened by the pricing CTAs and Final CTA button.

**3.5 FAQ Accordion**
- Each item: `<h3><button class="faq__question" aria-expanded="false" aria-controls="…">` + answer region, animated with the `grid-template-rows: 0fr → 1fr` technique; chevron (`expand_more`) rotates 180°. State changes never rely on color alone.

**3.6 Toast (`.toast`)**
- Fixed bottom position, `--z-toast`, `role="status"` with `aria-live="polite"`, slide-up keyframe, auto-dismiss ~4s, success/error variants driven by `--text-success`/`--text-error`.

---

## 4. PAGE SECTIONS — Build All, in Order

**4.1 Header (sticky)**
- Wordmark HOROLOGÉ left (tracked display font, the "É" in gold); nav anchors (Features, How It Works, Testimonials, Pricing, FAQ); theme toggle (per 2.3); mobile menu button below ~720px opening an accessible dropdown panel (`--z-dropdown`, `aria-expanded`, closes on Esc / link click / outside click, keyboard operable).
- On 8px scroll, the header gains `backdrop-filter` blur + a hairline gold bottom border.

**4.2 Hero (`min-height: 100svh`)**
- CSS Grid: copy left, clock right (≥1024px); stacked and centered below.
- Copy: small-caps eyebrow ("A Study in Time"), H1 **"Time, considered."**, a two-sentence supporting paragraph, CTAs: `.btn--gold` "Explore the Collection" (scrolls to Pricing) + `.btn--ghost` "How It Works".
- **The clock (CSS-only):** ivory neumorphic dial, `aspect-ratio: 1`, `width: clamp(280px, 42vw, 520px)`; chapter ring drawn with `repeating-conic-gradient` ticks (60 minor / 12 major); three tapered hands (`:where` hour/minute/second elements) with `transform-origin: bottom center`, animated by keyframes — second hand 60s with `steps(60)` (mechanical tick) in gold with a counterweight, minute 3600s linear, hour 43200s linear; gold center cap; pulsing gold halo (`box-shadow` keyframes ~4s). Under `prefers-reduced-motion`, hands freeze in the classic **10:10** marketing pose.
- Blurred gold/ivory orbs behind the dial, parallax per 1.5. A subtle animated scroll cue at the bottom.

**4.3 Features — "Considered by design" (3 cards)**
- Grid 3→1 columns; `.card--feature` each: gold Material icon in a neumorphic circle, H3, two-sentence copy. Themes: **Precision Movements** (`settings`), **Hand-Finished Detail** (`diamond`), **A Lifetime of Service** (`all_inclusive`). Hover lift + glow; staggered scroll-reveal (80ms offsets).

**4.4 How It Works (3 steps)**
- Oversized gold display numerals **01 / 02 / 03**; horizontal gold hairline connector ≥1024px, vertical when stacked. Steps: "Choose your piece" (`touch_app`), "A personal fitting" (`straighten`), "Kept for a lifetime" (`workspace_premium`) — icon, H3, one supporting sentence each; staggered reveal.

**4.5 Testimonials (3 cards)**
- `.card--quote`: five gold Material star icons (`aria-hidden` + visually hidden "Rated 5 out of 5"), an italic display-font quote, a gold-ring monogram avatar (initials, pure CSS — **no images**), and an invented-but-realistic name + role.
- On first view, render **skeleton shimmer cards** for a simulated ~600ms async load, then cross-fade to content (`aria-busy` toggled). Content must be present and readable without JS. Implement the `.card--empty` fallback for this area.

**4.6 Pricing (3 tiers, middle featured)**
- Tiers: "The Classic", "The Signature" (**featured** — gold border, gold edge-glow, `--gradient-gold` badge reading "Most Considered", slight elevation), "The Atelier" ("Enquire" for bespoke). Featured card tilts subtly on hover per 1.5.
- Each: display-font tier name, price line you author (sensible USD values, note on included lifetime servicing), 4–5 item checklist with Material check icons, and a CTA — featured uses `.btn--gold` "Reserve a Viewing" (opens the modal), others `.btn--primary`/`.btn--ghost`.

**4.7 FAQ (5–6 items)**
- Accordion per 3.5. Author real Q&As: movement accuracy, water resistance, servicing intervals, engraving, returns/exchanges, warranty & shipping.

**4.8 Final CTA — Inverse Band**
- Full-width `--bg-inverse` band (ink in light mode; elevated charcoal with a gold radial glow in dark mode), centered flex column: H2 (author it, e.g., "Begin your consideration."), one supporting sentence, newsletter `.input-group` (email) + `.btn--gold` "Join the Registry". On submit: button loading → success state, inline `aria-live` confirmation, and a success toast. Blurred gold orbs behind.

**4.9 Footer**
- Continues the inverse band; wordmark + one-line brand sentence; 3–4 columns of **secondary links** (Collection, Company, Care & Service, Legal — point to existing section anchors where applicable); a social row of Material icons with `aria-label`s; bottom bar: © 2025 HOROLOGÉ, Privacy/Terms links, and a small "Made with time." credit.

---

## 5. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` sizing, no horizontal overflow, all tap targets ≥44px.
- **Smooth animations:** every state change transitions with `var(--transition-fast)`/`var(--transition-normal)` and `var(--ease-standard)`; scroll reveals via `IntersectionObserver` adding `.is-visible` — gate all reveal/entrance animations behind a `.js` class added by the script so content is fully visible without JavaScript.
- **Reduced motion:** under `prefers-reduced-motion`, disable parallax, pulsing glow, spinning, and hover transforms; hands rest at 10:10.
- **Accessibility (a11y):** AA contrast in both themes; semantic HTML5 landmarks and heading hierarchy; a skip-to-content link; correct ARIA on the menu, accordion, modal, and toggle; logical DOM/focus order; **full keyboard operability** for every interactive element; `aria-live` regions for form errors, toasts, and loading states; states are never communicated by color alone; visible gold `:focus-visible` styles everywhere.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** define `.btn--danger` (per 3.1) distinct in both themes, even if lightly used.

---

## 6. DELIVERABLE & OUTPUT FORMAT

- **Exactly three files:** `index.html`, `style.css`, `script.js`. Only one script reference in the HTML: `<script src="script.js" defer></script>` — **no other inline scripts**, and no `style` attributes anywhere.
- `index.html`: `lang="en"`, descriptive `<title>` ("HOROLOGÉ — Time, considered."), meta description, Google Fonts/Material Symbols links, complete semantic markup.
- `style.css`: cascade layers per 2.5, all tokens, all component states, both themes.
- `script.js` (vanilla, clean commented functions): theme toggle + persistence, mobile menu, smooth anchor scrolling, header scroll state, scroll reveals, hero parallax (rAF + reduced-motion gated), simulated testimonial load with skeleton, FAQ accordion, modal open/close + focus trap + focus restore, newsletter and reservation form validation with full state handling, toast utility. No console errors.
- **Naming:** BEM only, everywhere — never mix conventions.
- **Copy:** original, in-theme, English copy for every section — **no lorem ipsum**; no unrequested placeholder content beyond genuinely unspecified details.
- **No external images:** all visuals (clock, orbs, monograms, gradients) are CSS-drawn.
- Deliver the complete, runnable result on the **first attempt**. Where any instruction is ambiguous, choose the option that best matches quiet-luxury horology aesthetics and note the decision in a brief CSS comment.
