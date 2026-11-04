# BUILD SPECIFICATION — LANDING PAGE: "VINTAGE LITHOGRAPH / VICTORIAN"

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Deliver a complete, production-quality landing page in a **single attempt** — final code only, no drafts, no TODOs, no stubs.

**Concept:** A single-page marketing site rendered as an 1800s Victorian lithograph: hand-drawn ornament, ribbon banners, vignette borders, parchment grain, watercolor washes, ink stipple, and decorative scrollwork — all achieved in CSS. Invent one coherent fictional brand (e.g., a Victorian printing atelier or artisan studio) and write every string of copy in its voice, in **English**.

**Page order:** Skip link → Sticky Header → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.

---

## DESIGN BRIEF & ART DIRECTION

**Aesthetic keywords:** hand-drawn lithograph, ornamental ribbons, vignette borders, parchment grain, watercolor wash, ink stipple, antiquated, scholarly, art nouveau, 1800s Victorian Revival.

**CSS-rendered effects (no image assets):**
- **Parchment grain:** layered radial/repeating gradients and/or a data-URI noise texture declared in `style.css`.
- **Ink stipple:** fields of tiny radial-gradient dots on section edges, medallions, and dividers.
- **Watercolor washes:** large blurred radial-gradients on overlay layers using `mix-blend-mode: multiply`.
- **Vignette:** fixed full-viewport `radial-gradient` overlay darkening the page edges.
- **Ribbon banners:** CSS shapes (`clip-path` + pseudo-elements) for section headers and the pricing badge.
- **Scrollwork & fleuron dividers:** ornamental rules between sections; corner flourishes framing the hero.
- **Soft diffuse daylight:** broad warm gradients as the base light.
- **Scroll reveals:** elements fade/rise and ribbons "unfurl" as they enter the viewport.

**Theme tokens — Light (default), declared in `:root`:**

| Token | Value | Use |
|---|---|---|
| `--primary` | `#E85D35` Vermillion | CTA fills, ribbons, accents |
| `--secondary` | `#223A70` Navy | Links, featured pricing, focus rings |
| `--bg-primary` | `#F0E3CE` Aged Parchment | Page background |
| `--bg-secondary` | `#E9DABF` Deeper Parchment | Cards, panels, header |
| `--text-primary` | `#0D0D15` Ink Black | Headings, body |
| `--text-secondary` | `#4A4A4A` Charcoal | Muted copy |
| `--text-success` | `#4F6B45` Botanical Green | Success states |
| `--text-error` | `#8E2B2B` Oxblood | Error states (distinct from Vermillion) |
| `--border-default` | `#8B7355` Warm Brown | Ornamental borders |
| `--border-error` / `--border-success` | `#8E2B2B` / `#4F6B45` | State borders |

Supplementary decorative tokens: `--accent-tan: #D4A574`, `--accent-brown: #8B7355` (washes, highlights, stipple).

**Theme tokens — Dark (`.dark`):** `--bg-primary: #14110B` (deep sepia ink — never pure black), `--bg-secondary: #1F1A12`, `--text-primary: #F0E3CE`, `--text-secondary: #C9B694`, `--primary: #F0703F`, `--secondary: #8FA6D9`, `--text-success: #8FB573`, `--text-error: #E08A76`, `--border-default: #9A8464`, with `--border-error`/`--border-success` matched to their text tokens. Re-tune textures in dark mode: reduce grain opacity, soften washes, deepen the vignette, lighten stipple flecks.

**Contrast guidance:** Vermillion is a fill/border accent — text placed on Vermillion fills must be Ink Black; Vermillion used *as text* only at large display sizes (darken to `#C7481F` for small accents). Verify ≥ 4.5:1 for body text and ≥ 3:1 for large text/UI in **both** themes.

**Typography (Google Fonts only):** `--font-display: 'Playfair Display'` (headings, prices), `--font-base: 'Cormorant Garamond'` (all body text binds here), `--font-script: 'Great Vibes'` (eyebrows, signatures, drop caps). Load via `<link>` with preconnect.

**Icons:** Google Material Symbols (Rounded), ink-colored, classic glyphs (`history_edu`, `auto_stories`, `draw`, `workspace_premium`, `mail`, `check`, `expand_more`, `close`, `south`, `light_mode`/`dark_mode`).

---

## PAGE MAP & SECTION REQUIREMENTS

- **Skip link:** first focusable element; visually hidden until focused.
- **Header (sticky):** slim bar on `--bg-secondary` with a hairline ornamental bottom rule; brand wordmark (display font), anchor links to all sections (hidden below `md`), and the theme toggle (always visible). On scroll, a JS-toggled class deepens its shadow and tightens padding.
- **Hero:** ~90vh; layered parchment + watercolor washes + vignette; script-font eyebrow on a small ribbon; display H1; supporting copy; primary filled CTA + secondary outline CTA; ornamental scrollwork frame with corner flourishes; animated scroll cue (`south` icon). Staggered load-in reveal.
- **Features:** ribbon-banner section title; 3 `.card`s (3-column → 1-column): Material Symbol inside a double-ring medallion, title, 2–3 lines of copy. Hover lift; focus-within highlight.
- **How It Works:** 3 steps with Roman numerals (I, II, III) in medallions, joined by an ornamental dotted rule (horizontal on desktop, vertical on mobile); step title + copy.
- **Testimonials:** 3 quote cards; oversized ornate quotation glyph via `::before`; italic quote; attribution with a script-font name flourish; per-card watercolor accent (Vermillion / Navy / Tan).
- **Pricing:** 3 tiers; middle tier `.card--featured`: elevated, "Most Favored" ribbon badge, distinct CTA; each tier: name, large price + billing note, feature list with `check` icons, CTA button (primary on featured, outline elsewhere). The featured tier must remain distinct in both themes.
- **FAQ:** 5–6 accessible accordion items: `<button aria-expanded>` + panel (`id` / `aria-labelledby`); `expand_more` icon rotates 180°; animated height; fully keyboard operable. No modals in this section.
- **Final CTA:** full-bleed band with the strongest wash + vignette; headline, copy, and an email-capture `.input-group` + `.btn--primary` running Loading → Success/Error feedback (see 2.1 / 2.3); microcopy beneath.
- **Footer:** 4 columns → stacked on mobile: brand + tagline; two secondary link groups (English labels, e.g., "Atelier", "Company"); social/contact row with Material Symbols; ornamental divider; copyright line. All links have visible hover/focus states.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID selectors only:** every color, layout, and state rule lives in `style.css`, targeted via class/ID selectors.
- **Minimal HTML modifications:** HTML stays semantic and style-agnostic — a full re-theme must be achievable by editing `style.css` alone.

### 1.2 CSS Variables & Theme Tokens
- Declare the full token set from the Design Brief in `:root`; override under `.dark` (and `@media (prefers-color-scheme: dark)` as the no-JS fallback).
- **Contrast pairing:** every light background token pairs with a dark text token and vice versa — enforced in both themes.
- **Light mode background** is Aged Parchment, never pure white; if a near-white is ever required, use `#fefefe`, not `#ffffff`.
- Also define: `--radius-sm: 2px`, `--radius-md: 4px`, `--radius-lg: 8px` (Victorian corners stay sharp; radii apply to pills/badges only), `--shadow-sm: 0 1px 4px rgba(13,13,21,0.10)`, `--shadow-md: 0 8px 24px rgba(13,13,21,0.16)`, `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.25, 0.8, 0.25, 1)`, and `--z-dropdown`, `--z-modal`, `--z-toast` for layered components.

### 1.3 Mandatory Dark Mode Support
- Provide dark tokens via the `.dark` class AND `@media (prefers-color-scheme: dark)`; switching themes swaps variables only — no HTML restructuring.
- Persist the user's choice in `localStorage` (fall back to `prefers-color-scheme` on first visit); initialize at the top of `script.js`, applying `.dark` to `<html>` as early as possible.
- The header carries a visible toggle (sun/moon Material Symbols) with correct `aria-pressed` and a descriptive `aria-label` that updates with state.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layout structures with Flexbox (Tailwind flex utilities or CSS flex).
- **Default alignment:** every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- **Mobile-first:** rows collapse to columns on small viewports; zero horizontal scrolling from 320px up.

### 1.5 Framework Default & Tailwind CSS Integration
- Use Tailwind CSS via CDN for structural utilities only (flex, grid, gaps, responsive prefixes).
- All visual theming — colors, fonts, textures, effects, states — resolves through CSS variables and reusable component classes (`.btn`, `.card`, `.input-group`) authored in `style.css`. Never hardcode hex values in utilities.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- Load all typefaces from Google Fonts via `<link>`; bind default text to `--font-base`.
- Icons come exclusively from Google Material Symbols. Raw inline `<svg>` elements and local icon files are forbidden.
- **Exception clause:** ornamental scrollwork/flourish *decorations* may be embedded as data-URI SVGs inside `style.css` (`background-image` / `border-image`) only — never as inline `<svg>` nodes in the HTML.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn`; modifiers `.btn--primary`, `.btn--secondary`, `.btn--outline`, `.btn--danger`)
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; display font, letter-spaced small caps.
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct ring built from CSS variables (e.g., double `box-shadow` ring in `--secondary`) — visible in both themes.
- **Active:** `transform: scale(0.97)`.
- **Loading:** disables pointer events, prevents double-clicks, shows a CSS spinner or rotating Material Symbol without changing button dimensions; set `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styling driven by `--text-success` / `--text-error` (icon + label swap), announced via `aria-live`.

### 2.2 Card Component (`.card`, `.card--featured`)
- **Default:** flexbox layout on `--bg-secondary`, ornamental Warm Brown border (doubled via `box-shadow`), `--shadow-sm`.
- **Hover:** `transform: translateY(-2px)` plus shadow elevation.
- **Focus-within:** border highlights when a child link/button receives focus.
- **Loading (skeleton):** shimmer animation class defined in CSS; preserves final dimensions to prevent layout jumps.
- **Empty state:** fallback layout with a Material Symbol and clear guidance copy.

### 2.3 Form & Input (`.input-group`)
- **Structure:** flex container wrapping a `<label>`, the input, and a dedicated error-feedback element.
- **States:** empty, focused (outline ring), filled, valid (success border + `check` icon), invalid (error border, `--text-error` message + error icon), disabled, read-only.
- Errors render in an `aria-live="polite"` container tied to the input via `aria-describedby`; never color-only — always icon + text.

### 2.4 Modal / Popup (applies to any overlay introduced; the FAQ remains accordion-based)
- **States:** opening, open, loading, success/error, closing — all CSS-transitioned.
- **UX:** centered flex overlay (`align-items: center`), backdrop, Material Symbol `close` button, keyboard focus trap, close via `Esc` and backdrop click, `role="dialog"` + `aria-modal`, stacking from `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type and sizing via `clamp()`; no overflow at any viewport.
- **Smooth animations:** every state change uses `transition: var(--transition-normal)`; honor `prefers-reduced-motion` by disabling scroll reveals, the scroll-cue bob, spinner rotation, and parallax — content stays fully visible and usable.
- **Scroll reveals:** IntersectionObserver toggles a visibility class; elements are visible by default when JS is unavailable.
- **Accessibility:** AA contrast in both themes; never rely on color alone to communicate state; semantic HTML5 (`header`, `main`, `section`, `nav`, `footer`); ARIA on the accordion, theme toggle, and any custom widget; logical DOM/focus order; complete keyboard operability; `aria-live` regions for form feedback and dynamic status.
- **Mandatory visual feedback:** every click, hover, and submission produces a visible state change.
- **Destructive actions:** `.btn--danger` (Oxblood) must be visually distinct in both light and dark themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js`. The only project script tag is `<script src="script.js" defer></script>`; external CDN references (Tailwind, Google Fonts, Material Symbols) are permitted in `<head>`.
- **Naming:** one convention throughout — BEM (`block__element--modifier`, e.g., `.pricing-tier__price`, `.card--featured`). Never mix conventions.
- **Copy:** no lorem ipsum anywhere. Author real, on-theme English copy for the invented brand across all sections; placeholders only where content is genuinely unknowable.
- **Completeness:** all sections, all component states, dark mode, and every interaction delivered in this single attempt — no TODOs, no stubs, no deferred work.
