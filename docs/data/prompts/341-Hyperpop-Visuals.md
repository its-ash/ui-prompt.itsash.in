# CODING-AI BUILD PROMPT — "HYPERPOP VISUALS" LANDING PAGE

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-grade landing page in a single response — full HTML, full CSS, full JS. No questions, no partial output, no TODOs.

**Theme Definition:** **Hyperpop Visuals** (2019–present) — oversaturated candy colors + glitch chaos, 3D chrome type, distorted display headlines, motion blur, and ironic, maximal, internet-native energy. Reference vibe: 100 gecs / SOPHIE-adjacent visuals. Tone: playful & youth, loud, fast, chaotic. The signature move is an **RGB chromatic-aberration split** (cyan/magenta double outline or shadow) repeated on the nav border, card shadows, and headline text-shadows. Chaos is decorative — readability and accessibility always win.

**Source Baseline:** The design-token CSS provided in the reference spec (`references/00-flagship-implementation-specs/hyperpop.md`) is your baseline. Keep its values, class vocabulary (`.nav`, `.btn`, `.btn--primary`, `.card`, `.input`, `.badge`), chromatic shadows, candy gradient, and glitch text-shadow — but rename its `--color-*` tokens to the canonical names in Rule 1.2 and extend it per the rules below.

---

## 1. STRICT ARCHITECTURE RULES

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. **Forbidden:** `style="..."` attributes, inline `<style>` blocks, and presentation attributes.
* Target all design properties, layout rules, and states via **class or ID selectors only**.
* HTML must remain clean, semantic, and style-agnostic — restyling the site must never require touching the markup.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` (light theme) and theme overrides (dark). Canonical tokens — **required names**, dark-theme values from the source palette:

* `--bg-primary: #0d0018` · `--bg-secondary: #1a0330` · `--bg-tertiary: #290548`
* `--text-primary: #fbf3ff` · `--text-secondary: #d6a9f0`
* `--primary: #ff2fd0` · `--secondary: #2ff3ff` · `--lime: #c6ff2f`
* `--border-default: #ff2fd0`
* `--text-success / --border-success: #c6ff2f` (lime reads on dark)
* `--text-error / --border-error:` a hot red (e.g., `#ff5d5d`) that is **visually distinct from `--primary` magenta**

**Light theme (derived — the source spec does not declare modes, so you must create it):**
* `--bg-primary:` near-white with a magenta/lavender tint (e.g., `#fef6ff`); `#fefefe` is the acceptable neutral baseline — **never `#ffffff`**.
* `--bg-secondary: #f4eaff` · `--bg-tertiary: #ead9fb`
* `--text-primary: #1a0330` · `--text-secondary: #6b2fa8`
* Keep `--primary`, `--secondary`, `--lime` saturated for borders, buttons, and gradients.
* `--text-success: #4d7c0f` · `--text-error: #c9184a` (saturated hues fail AA as text on light backgrounds).
* **Saturated-text rule:** if a candy hue fails WCAG AA when used as text, keep the base token for surfaces/borders and add a `-text` variant (e.g., `--primary-text: #c100a3`, `--secondary-text: #0087a8`). Never dull the base candy tokens.

**Contrast pairing (mandatory, per theme):** every light background token pairs with dark text tokens and every dark background token pairs with light text tokens. Candy-gradient surfaces always pair with `#0d0018` text in **both** themes.

**Supplementary tokens (keep from source, both themes):** `--radius-sm: 4px`, `--radius-md: 10px`, `--radius-lg: 18px`, `--radius-pill: 999px`; chromatic-aberration shadows `--shadow-sm/md/lg` (cyan/magenta split; in light mode keep the split but reduce glow alphas ~50%); `--spacing-gap: 16px` plus the `--space-1…24` scale; `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.68, -0.55, 0.27, 1.55)`; `--z-nav: 40`, `--z-dropdown: 50`, `--z-modal: 100`, `--z-toast: 200`; `--font-base: 'Space Grotesk'`, `--font-display: 'Rubik'`, `--font-mono: 'JetBrains Mono'` with the `--text-xs…5xl` scale (use `clamp()` for display sizes); `--candy-gradient: linear-gradient(120deg, var(--primary), var(--secondary) 50%, var(--lime))`; `--glitch-text-shadow: -1px 0 var(--secondary), 1px 0 var(--primary)`.

**1.3 Mandatory Dark Mode & Theme Switching**
* Dark mode **must always be defined**: `:root` holds light tokens; the `.dark` class **and** `@media (prefers-color-scheme: dark)` hold the dark tokens (the media query covers no-JS/first visit; the class overrides it once JS runs). Add `<meta name="color-scheme" content="light dark">`.
* Theme switching swaps CSS variables only — **no HTML restructuring**.
* Persist the user's choice in `localStorage` (key `hyperpop-theme`); fall back to `prefers-color-scheme` on first visit.
* Ship a visible pill-shaped toggle in the nav with a Google Material Symbols icon (`dark_mode`/`light_mode`), correct `aria-pressed`, and a dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").
* The source spec explicitly notes: *the source does not declare modes — validate the page in both light and dark before publishing.* Do so.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox. Every flex container **defaults to `align-items: center`** unless there is a documented exception (note it in a CSS comment).
* Mobile-first: rows convert to columns at small viewports (≤768px), content wraps, and **horizontal scrolling never occurs** (wrap any marquee in `overflow: hidden`).

**1.5 Framework: Tailwind CSS**
* Use Tailwind CSS (Play CDN acceptable) for layout/spacing/responsive utilities only. All component styling must live in `style.css` inside `@layer components`, bound to CSS variables and generic reusable class names: `.nav`, `.btn` (+ variants), `.card`, `.input`, `.input-group`, `.badge`, `.faq`, `.modal`, `.toast`, `.skeleton`. Never style components with long anonymous utility chains.

**1.6 Typography & Icons — Google Only**
* Load via `<link>`: **Space Grotesk** (base, 400–700), **Rubik** (display, up to 900), **JetBrains Mono** (labels/microcopy, 400/700). Bind to `--font-base`, `--font-display`, `--font-mono`.
* Icons: **Google Material Symbols (Rounded)** only. **Forbidden:** inline SVGs, local icon files, emoji-as-icons.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons**
* **Default:** `.btn` per source baseline — flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, pill radius, 800-weight Rubik uppercase, minimum touch target **44×44px**. Variants: `.btn--primary` (candy gradient, `#0d0018` text), `.btn--secondary` (surface-strong bg, primary border), `.btn--danger` (defined and visually distinct in both themes).
* **Hover:** `scale(1.04) rotate(-1deg)` + `--shadow-md`, `cursor: pointer`. **Focus:** `:focus-visible` — 3px lime outline, 3px offset. **Active:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** CSS spinner via `::after` or animated Material icon; `pointer-events: none`; `aria-busy="true"`; button dimensions must not change.
* **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
* **Success/Error (`.is-success` / `.is-error`):** temporary feedback using `--text-success`/`--text-error` **plus an icon and/or text — never color alone**.

**2.2 Cards**
* **Default:** `.card` per source — flex column, `--bg-secondary`, 2px `--border-default`, `--radius-lg`, chromatic `--shadow-md`, `--space-6` padding.
* **Hover:** `translateY(-2px)` + `--shadow-lg` on interactive cards. **Focus-within:** border shifts to `--secondary` when a child link/button receives focus.
* **Loading:** define `.skeleton` shimmer keyframes in CSS to prevent layout jumps. **Empty state:** define a `.card--empty` fallback pattern (Material icon + guidance text).

**2.3 Forms & Inputs**
* The Final CTA email capture uses `.input-group`: a flex container wrapping a `<label>`, `<input class="input">`, and a dedicated error `<p>` wired to `aria-live="polite"` and `aria-describedby`.
* **States:** empty, `:focus` (primary border + `--shadow-sm` ring), filled, `.is-valid` (success border + check icon), `.is-invalid` (error border + error icon + message, `aria-invalid="true"`), disabled, read-only. Validate email in JS; never communicate validity by color alone.

**2.4 Modal**
* Include one modal (Hero's "See it in action" or a Pricing plan-details dialog). **States:** opening, open, loading, success/error, closing — all animated via CSS transitions (scale + opacity).
* Fixed overlay, centered flex container (`align-items: center; justify-content: center`), backdrop tinted from `--bg-primary`; Material icon close button (`aria-label="Close"`); `role="dialog"`, `aria-modal="true"`, `aria-labelledby`; keyboard **focus trap** with focus restored to the trigger on close; closes via `Esc` and overlay click; stacked at `--z-modal`.

**2.5 Toast**
* Fixed toast at `--z-toast`, `role="status"`/`aria-live` region, success and error variants with Material icons, auto-dismiss (~4s). Use it for form success and demo action feedback.

**2.6 FAQ Accordion**
* Each item: `<button aria-expanded aria-controls>` + panel; animate open/close via CSS (`grid-template-rows: 0fr → 1fr`); icon rotates on expand; state is conveyed by icon/motion, not color alone; fully keyboard operable.

**2.7 Navigation**
* Sticky pill `.nav` per source baseline: wordmark (Rubik 900 + glitch shadow), anchor links, theme toggle, primary CTA. On mobile, collapse links behind a menu button (`aria-expanded`, `aria-controls`) toggling a dropdown panel at `--z-dropdown`. Include a skip-to-content link; smooth-scroll anchors with `scroll-margin-top` on sections.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid `clamp()` type, standard breakpoints, zero horizontal overflow.
* **Smooth animations:** every state change transitions with `var(--transition-normal)` and `var(--ease-standard)`.
* **Reduced motion:** under `prefers-reduced-motion: reduce`, disable the marquee, glitch flicker, shimmer, hover/active transforms, and smooth scrolling; keep color-based state changes.
* **Accessibility:** WCAG AA contrast in **both** modes; never rely on color alone; semantic HTML5 (`header`/`nav`/`main`/`section`/`footer`, exactly one `h1`, logical heading order); correct ARIA on the toggle, mobile menu, accordion, and modal; full keyboard operability; visible focus rings; `aria-live` regions for form errors, toasts, and loading states.
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Glitch safety:** flicker effects stay subtle (never more than 3 flashes per second — ideally a slow single twitch) and apply to decorative layers only. Body text is never distorted; distortion is reserved for display headlines.

---

## 4. PAGE SECTION BUILD SPECIFICATION

**Copy voice:** loud, ironic, internet-native, playful & youth. Short punchy Rubik-uppercase headlines; JetBrains Mono kicker labels (e.g., `// 001 — FEATURES`). Write real, original **English** copy — no lorem ipsum. Invent one coherent fictional product (e.g., a browser-based toolkit for making hyperpop-grade visuals and motion assets) and keep all copy consistent with it.

* **4.1 Header/Nav:** per Rule 2.7.
* **4.2 Hero:** badge pill ("v2.0 — NOW 200% LOUDER"); `h1` with candy gradient via `background-clip: text`, `--glitch-text-shadow`, and an optional chrome-sheen layer (CSS gradients only, no images); 1–2 sentence subhead; primary CTA + secondary "See it in action" (opens the modal). Background: layered radial candy glows (`--primary`/`--secondary`/`--lime` at low alpha). Optional marquee strip below the hero (duplicated `aria-hidden` content, `overflow: hidden`, paused under reduced motion).
* **4.3 Features (3 cards):** section header (mono kicker + `h2`); three `.card`s in a flex-wrap grid (1 column mobile → 3 columns desktop); each with a gradient icon badge + Material Symbol, `h3` with glitch shadow, and a 2–3 sentence description; hover lift + focus-within.
* **4.4 How It Works (3 steps):** mono numerals `01/02/03` in gradient badges, step title + description, connected by a dashed line on desktop that collapses gracefully on mobile.
* **4.5 Testimonials:** three `.card`s; avatar = gradient circle with initials (**no external images**); quote; name + `@handle` in mono; filled Material star icons.
* **4.6 Pricing (3 tiers):** middle tier highlighted — badge "MOST LOUD", `--shadow-lg`, slight `scale(1.03)` on desktop; each card: plan name (display font), price + "/month", feature list with Material check icons, CTA button (primary on the highlighted tier, secondary elsewhere); CTAs trigger the modal or a toast; mono microcopy ("No credit card required.").
* **4.7 FAQ:** 4–6 accordion items per Rule 2.6, with real questions about the fictional product.
* **4.8 Final CTA:** full-width panel on `--bg-tertiary` or a gradient-tinted surface; display headline; email capture form per Rule 2.3; submit flow: validate → `.is-loading` → success state + toast; mono privacy microcopy.
* **4.9 Footer:** wordmark; secondary link groups (Product, Company, Legal — `href="#"` allowed but must carry hover/focus styles); social links as Material Symbols with `aria-label`s; copyright with the current year; flex-wrap bottom bar.

---

## 5. DELIVERABLES & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, `script.js`. Exactly one `<script src="script.js" defer></script>` — no other inline scripts. Google Fonts, Material Symbols, and Tailwind `<link>` tags in `<head>` are permitted.
* **Naming:** one consistent **BEM** convention everywhere (`.btn--primary`, `.card__title`, `.faq__panel`…). Never mix conventions.
* **Copy:** all user-facing copy in **English** (the source spec's non-English notes are requirements to implement, not copy to ship). No lorem ipsum; placeholders only where content is genuinely unspecified.
* **No external image dependencies** — avatars and decorative art are CSS/gradient/initial/icon based.
* **Definition of done:** every component state in Sections 2.1–2.6 is implemented; theme toggle persists and respects OS preference; both light and dark modes validated for contrast and layout; keyboard-only pass completes nav → sections → form → modal → FAQ without traps; reduced-motion pass disables all decorative animation. Ship the complete build on the first attempt.
