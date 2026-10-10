# Frosted Glass Landing Page — Build Specification

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready Landing Page on the first attempt, following this specification exactly. All user-facing copy must be written in **English**.

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in a dedicated `style.css` file. **Forbidden:** the `style="..."` attribute anywhere in HTML.
- All design properties, layout rules, and states are targeted via class or ID selectors only.
- HTML stays clean, semantic, and style-agnostic — changing the look requires editing only the CSS file.

**1.2 CSS Variables & Theme Tokens**
Store all tokens in `:root`, using the Frosted Glass palette:
- **Colors:** `--color-bg: #7c8a99`, `--color-bg-photo-a: #93a2b0`, `--color-bg-photo-b: #5c6b7a`, `--color-surface: rgba(255,255,255,0.55)`, `--color-surface-strong: rgba(255,255,255,0.72)`, `--color-border: rgba(255,255,255,0.4)`, `--color-text: #16202b`, `--color-text-muted: #3d4a58`, `--color-primary: #1f6feb`, `--color-accent: #1a1f26`.
- **Background:** `--bg-image: linear-gradient(160deg, var(--color-bg-photo-a) 0%, var(--color-bg-photo-b) 100%)` applied to `body` with `background-attachment: fixed`. This is a plain photo-toned diagonal gradient — **not** a vivid glassmorphism gradient.
- **Radius:** `--radius-sm: 8px`, `--radius-md: 14px`, `--radius-lg: 20px`, `--radius-pill: 999px`.
- **Shadows:** `--shadow-sm: 0 2px 8px rgba(10,16,24,0.18)`, `--shadow-md: 0 6px 20px rgba(10,16,24,0.22)`, `--shadow-lg: 0 14px 36px rgba(10,16,24,0.26)`.
- **Blur:** `--blur-backdrop: 12px` — moderate, uniform, legibility-only. No refraction, no edge lighting, no gradient fills inside panels.
- **Spacing:** `--space-1` through `--space-24` (4/8/12/16/24/32/48/64/96px).
- **Type scale:** `--text-xs` through `--text-5xl` as defined in the reference tokens.
- **Motion:** `--ease-standard: cubic-bezier(0.2, 0, 0, 1)`, `--transition-fast: .18s`, `--transition-normal: .28s`.
- **Stacking:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.
- **Contrast pairing:** every light surface token pairs with `--color-text` / `--color-text-muted`; dark surfaces (`.badge`, dark scrim) pair with `#ffffff` text. Enforce in both light and dark themes.

**1.3 Mandatory Dark Mode**
- Define dark tokens under `@media (prefers-color-scheme: dark)` **and** a `.dark` class on `<html>`: dark photo-toned gradient backdrop (deep slate, e.g. `#232c36` → `#141a21`), dark scrim surfaces `rgba(20,26,33,0.6)` / `rgba(20,26,33,0.78)`, light text `#e8edf3` / muted `#aeb9c6`, border `rgba(255,255,255,0.14)`. Keep `--color-primary: #1f6feb` (pair with `#ffffff` text).
- Theme toggle button in the nav with a Google Material Symbol icon (`light_mode` / `dark_mode`), correct `aria-pressed` and `aria-label` ("Toggle dark mode").
- Persist choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Switching themes must not require any HTML restructuring.
- Validate legibility in **both** light and dark before finishing — the source spec does not declare modes, so both must be verified.

**1.4 Flexbox Layout & Mobile-First**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an explicitly justified exception is documented in a CSS comment.
- Mobile-first: nav collapses, card grids and pricing tiers stack into a single column on small viewports, rows convert to columns. No horizontal scrolling at any width from 320px up.

**1.5 Framework**
- Use Tailwind CSS via CDN **or** clean custom CSS — either way, all component styling must be driven by the generic class names defined below (`.btn`, `.card`, `.input`, `.badge`, `.nav`). Do not mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Google Fonts** via `<link>`: **Inter** for body text and **Sora** (or **Poppins**) for display headings. Bind to `--font-base` / `--font-display`. Do not use SF Pro system font stacks as the primary font.
- Icons: **Google Material Symbols** only. Forbidden: raw inline SVGs, local icon files, emoji icons.

## 2. FROSTED GLASS MATERIAL RULES (Signature Move)

Every raised surface is a **flat semi-opaque scrim + `backdrop-filter: blur(var(--blur-backdrop))`** — one uniform "frosted pane" material repeated identically on nav, cards, buttons, and inputs:
- `background: var(--color-surface)` (or `--surface-strong` for inputs), `border: 1px solid var(--color-border)`, `backdrop-filter: blur(12px)` with `-webkit-` fallback.
- **No** tinted gradients inside panels, **no** edge highlight lines, **no** refraction effects. Blur exists purely for content legibility.
- Include fallbacks: `@supports not (backdrop-filter: blur(1px))` → solid `#eef2f6` (dark: `#232c36`); `@media (prefers-reduced-transparency: reduce)` → same solid fallbacks with `backdrop-filter: none`.
- Respect `@media (prefers-reduced-motion: reduce)` — disable transitions/animations.

## 3. SECTIONS TO BUILD

Build all copy in English, with realistic product copy (no lorem ipsum):

1. **Sticky Frosted Nav** — logo (Material Symbol + wordmark), nav links, theme toggle, primary CTA `.btn--primary`. Frosted scrim over scrolling content.
2. **Hero** — headline, subheadline, two CTAs (primary + ghost), a frosted glass panel showcasing the product (use a styled mock UI panel, not an image), trust badges row.
3. **Features** — 3 frosted `.card`s, each with a Material Symbol icon, title, description. Hover: `transform: translateY(-2px)` + shadow shift.
4. **How It Works** — 3 numbered steps in a vertical-then-horizontal flex layout with connecting visual rhythm; each step in a frosted card.
5. **Testimonials** — 2–3 frosted cards with quote, avatar placeholder (initials in a `.badge` circle), name, role, star rating via Material Symbols (`star`).
6. **Pricing** — 3 tiers (Free / Pro highlighted / Enterprise). Highlighted tier uses `--color-primary` accent border and a `.badge` "Most Popular". Each tier: feature list with `check` icons, CTA button.
7. **FAQ** — native `<details>`/`<summary>` elements styled as frosted accordion rows, with `expand_more` Material Symbol rotating on `[open]`, focus-visible rings on summaries.
8. **Final CTA** — full-width frosted panel with headline, email capture form (`.input` + `.btn--primary`), inline success/error feedback via `aria-live="polite"`.
9. **Footer** — secondary link columns (Product, Company, Resources), social icon links (Material Symbols), copyright line, muted text.

## 4. COMPONENT STATE SPECIFICATIONS

**4.1 Buttons (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`)**
- Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` min touch target 44×44px, `--radius-pill`, frosted scrim, `--shadow-sm`, `cursor: pointer`.
- Hover: background → `--color-surface-strong`, `--shadow-md`.
- Focus-visible: `outline: 2px solid var(--color-primary); outline-offset: 2px`.
- Active: `transform: scale(0.97)`.
- Loading: class `.is-loading` — disables pointer events, swaps label for a CSS spinner (border-based) without changing button dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: `.is-success` / `.is-error` temporary feedback states using `--text-success: #1a7f37` / `--text-error: #d1242f` (dark-mode-safe variants defined).

**4.2 Cards (`.card`)**
- Default: frosted pane, `--radius-lg`, `--shadow-md`, `--space-6` padding.
- Hover (interactive cards): `translateY(-2px)` + `--shadow-lg`.
- `:focus-within`: border highlights `--color-primary`.
- Skeleton: `.card--skeleton` shimmer animation (gradient sweep) for any async content.

**4.3 Inputs (`.input`)**
- States: empty, focused (primary border + `0 0 0 3px rgba(31,111,235,0.28)` ring), filled, valid (success border + `check_circle` icon), invalid (error border, red helper text, `error` icon), disabled, read-only.
- Structure: flex column wrapping `<label>`, `<input>`, and a dedicated `.input-error` container with `aria-live="polite"`.

**4.4 Modal (used for "Try demo" or plan comparison if triggered)**
- States: opening (fade+scale), open, loading, closing — all CSS transitions.
- Centered flex overlay with dark scrim `rgba(10,16,24,0.5)` + blur, frosted panel, Material Symbol close button, focus trap, closes on `Esc` and overlay click, `role="dialog"` + `aria-modal="true"`.

## 5. CORE UX & ACCESSIBILITY

- **Responsive by default:** fluid type via `clamp()`, no horizontal overflow, breakpoints at ~640px and ~1024px.
- **Smooth animations:** `transition: background var(--transition-fast) var(--ease-standard), box-shadow …` on all interactive elements; respect `prefers-reduced-motion`.
- **A11y:** WCAG-AA contrast in both themes; never rely on color alone (pair icons/text with states); semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`); logical focus order; full keyboard operability; skip-to-content link.
- **Visual feedback:** every click/hover/submit triggers a visible state change.
- **Destructive/distinct actions:** `.btn--danger` visually distinct in both themes.

## 6. DELIVERABLE

- **Files:** `index.html`, `style.css`, `script.js` — separate files. Only a single deferred `<script src="script.js" defer>` reference in HTML; no other inline scripts.
- **Naming:** one consistent convention (BEM-style modifiers as shown: `.btn--primary`, `.card--skeleton`) across the entire deliverable.
- **JS scope:** theme toggle + persistence, mobile nav toggle, FAQ accordion polish, form validation with `aria-live` feedback, modal open/close with focus trap, smooth scroll for anchor links. No frameworks.
- **No placeholders:** write real English copy for all sections; placeholders only where content is genuinely unspecified.
- Include a comment header in `style.css` crediting the Frosted Glass reference spec (`references/00-flagship-implementation-specs/frosted-glass.md`).
