**ROLE & OBJECTIVE**

You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete Landing Page on the first attempt — no clarifying questions, no partial deliverables. Every design decision is specified below; follow it exactly.

**Project:** A premium-product landing page in the **Premium Swiss Style** — elegant, minimalist, high-end — with a **2026+ Quiet Luxury** sensibility.

**Design Direction (binding):**
- Clean, strictly symmetrical layouts on a precise grid with generous whitespace
- Neo-grotesque sans-serif typography with exact spacing; uppercase micro-labels
- High-resolution product imagery focused on detail
- Minimal color usage: charcoal ink on near-white paper, restrained soft-gold accents only
- Subtle hover micro-interactions that reveal or highlight information — never flashy
- Smooth, controlled section transitions

**Color Palette → Token Mapping (Light mode is the default experience):**
- `--primary: #2F4F4F` (Charcoal Slate — principal ink: headings, buttons, nav)
- `--secondary: #B8860B` (Soft Gold — the only accent: hairline dividers, hover highlights, featured elements)
- `--bg-primary: #fefefe` (near-white "paper"; per mandatory token rules this replaces the palette's raw `#FFFFFF`)
- `--bg-secondary: #F5F5DC` (Beige — alternating section bands, card surfaces)
- `--text-primary: #2F4F4F` · `--text-secondary: #6B6B6B` (muted neutral derived from the ink)
- `--text-success: #006400` (Dark Green) · `--text-error: #A52A2A` (Brick Brown)
- `--border-default: rgba(47,79,79,0.15)` · `--border-error: #A52A2A` · `--border-success: #006400`
- Navy `#000080` is a reserved deep accent — use at most once in the entire page (see §5.6); all other color stays charcoal / gold / beige.

**Signature spec elements (must appear verbatim in the CSS):**
- `border-top: 2px solid #B8860B` — the gold hairline, implemented as `.section-divider-minimal`, separating every section
- `letter-spacing: 0.05em` — applied to all uppercase labels, buttons, and nav links
- `transition: all 0.4s ease-in-out` — the global motion baseline, bound to `--transition-normal`
- Required class names: `.product-detail-grid`, `.image-focus`, `.section-divider-minimal`

**Typography & Icons:** Univers / Akzidenz-Grotesk are not available on Google Fonts — load **Inter** (weights 400, 500, 600) via Google Fonts `<link>` as the mandated neo-grotesque substitute, bound to `--font-base` with fallback `'Inter', 'Helvetica Neue', Arial, sans-serif`. Build hierarchy through weight and scale only (600 headings, 400 body, 500 labels); large display headings may tighten tracking slightly for optical balance. Icons: Google Material Symbols (Outlined) exclusively — inline SVGs and emoji are forbidden.

**Copy & Imagery:** Write all user-facing copy in English. Invent one coherent fictional premium brand (e.g., precision timepieces, leather goods, fragrance) and write complete, original, sophisticated copy for it — lorem ipsum is prohibited. Use seeded `https://picsum.photos` URLs for imagery, wrapped in `.image-focus` frames with descriptive `alt` text.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute, inline `<style>` blocks, and inline event handlers (`onclick`, etc.) are forbidden — all behavior is attached via `addEventListener` in `script.js`.
- Target all design properties, layout rules, and states via class/ID selectors.
- HTML stays semantic and style-agnostic: retheming the page must require editing `style.css` only, never the markup.

**1.2 CSS Variables & Theme Tokens**
- Define in `:root` every token from the palette mapping above, plus: `--radius-sm: 2px`, `--radius-md: 2px`, `--radius-lg: 4px` (Swiss precision = near-square corners), `--shadow-sm`, `--shadow-md` (very subtle, e.g., `0 8px 24px rgba(0,0,0,0.06)`), `--spacing-gap: 2rem`, `--transition-fast: all 0.2s ease-in-out`, `--transition-normal: all 0.4s ease-in-out`, `--ease-standard: ease-in-out`, `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 1100`.
- Contrast pairing is mandatory in every theme: light background tokens pair with dark text tokens, dark backgrounds with light text — verified at ≥ 4.5:1 for body text in both themes.

**1.3 Mandatory Dark Mode Support**
- Define a full dark token set under a `.dark` class on `<html>`, with an `@media (prefers-color-scheme: dark)` fallback: `--bg-primary: #101414`, `--bg-secondary: #1A2020`, `--text-primary: #F5F5DC` (beige-tinted light), `--text-secondary: #A8A89E`, gold lightened to `#D4A017` wherever it appears as text, borders `rgba(245,245,220,0.14)`.
- Ship a visible toggle in the header (Material Symbol sun/moon) with correct `aria-pressed` and `aria-label`; persist the choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Switching must never require HTML restructuring.
- **Source-spec exception:** the client requested a light-only presentation — Light mode is the default and primary experience; Dark Mode remains mandatory and must ship as a discreet "quiet luxury" variant that never compromises the Swiss aesthetic.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all structural layout with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment (e.g., `stretch` for equal-height pricing cards).
- `.product-detail-grid` is implemented as a flex container (row on desktop, column below 768px) — despite the name, do not use CSS Grid.
- Mobile-first media queries; rows wrap to columns on small screens; no horizontal scrolling at any viewport from 320px upward.

**1.5 Styling Approach**
- Use clean custom CSS organized in `@layer` blocks (`tokens`, `base`, `components`, `sections`, `utilities`) — no utility-class soup. Reusable classes (`.btn`, `.card`, `.input-group`) must map exclusively to CSS variables.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Google Fonts via `<link>` tags with `preconnect` (no `@import`). Material Symbols Outlined via the Google icon link, tuned with `font-variation-settings` to a light weight.
- Inline SVGs, local icon files, and emoji icons are forbidden.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button (`.btn`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target; uppercase label with `letter-spacing: 0.05em`.
- **Variants:** `.btn-primary` (charcoal fill, near-white text), `.btn-secondary` (ghost: 1px charcoal border, transparent background), `.btn-danger` (`#A52A2A` fill — visually distinct in both themes).
- **Hover:** brightness shift and/or gold hairline reveal; `cursor: pointer`. **Focus-visible:** 2px gold outline with 3px offset. **Active:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables interaction, blocks double-clicks, renders a CSS spinner (or rotating Material Symbol) without changing button dimensions.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`. **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.

**2.2 Card (`.card`)**
- **Default:** flex column, `--bg-secondary` or paper surface, 1px `--border-default`, `--radius-md`, subtle `--shadow-sm`.
- **Hover:** `translateY(-2px)` + elevation shift + the gold top hairline animating in (ties to the `border-top: 2px solid #B8860B` signature).
- **Focus-within:** gold border highlight when a child link/button receives focus.
- **Skeleton (`.is-loading`):** shimmer animation with no layout jumps. **Empty state:** Material Symbol + clear guidance text. Define both as part of the card system.

**2.3 Form & Input (`.input-group`)**
- **Structure:** flex container wrapping a `<label>`, the input, and a dedicated error-feedback element with `aria-live="polite"`.
- **States (via classes):** empty, focused (gold ring), filled, valid (success border + check icon), invalid (`--border-error`, error text + icon — never color-only), disabled, read-only.
- Used in the Final CTA email capture and the footer newsletter mini-form.

**2.4 Modal / Overlay (`.modal`)**
- **Trigger:** the hero's "View details" affordance opens a product-detail lightbox (enlarged `.image-focus` image + spec copy).
- **States:** opening, open, loading, success/error, closing — all animated purely with CSS transitions.
- **UX:** centered flex container (`align-items: center`), dimmed backdrop, close button using a Material Symbol, keyboard focus trap, closes via `Esc` and backdrop click, `--z-modal` stacking, correct `role="dialog"` / `aria-modal` / labelled title.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` typography; breakpoints without horizontal overflow.
- **Smooth, controlled motion:** every state change uses `transition: var(--transition-normal)`. Nav/inline links get a gold underline that grows left→right on hover. Feature cards reveal one additional detail line on hover **and** `:focus-within` (never hover-only). `.image-focus` frames scale imagery to 1.02–1.03 with a subtle desaturation shift on hover.
- **Section transitions:** `IntersectionObserver` adds `.is-visible`; CSS fades sections in with a controlled 12px rise and staggered children; fully disabled under `prefers-reduced-motion`.
- **Accessibility:** skip link, semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), logical heading order, full keyboard operability, visible focus, `aria-live` for all dynamic feedback (form errors, confirmations, loading), never color-only state communication, contrast ≥ 4.5:1 in both themes.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive/distinct actions:** `.btn-danger` remains distinct in both light and dark themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- Exactly three files: `index.html`, `style.css`, `script.js` — complete and runnable by opening `index.html`. A single `<script src="script.js" defer></script>` reference; no inline script blocks.
- One naming convention everywhere: lowercase hyphenated block classes (`.btn`, `.btn-primary`, `.card`, `.pricing-card`, `.faq-item`, `.input-group`, `.section-divider-minimal`, `.product-detail-grid`, `.image-focus`) with `.is-*` state prefixes (`.is-visible`, `.is-open`, `.is-loading`). Never mix conventions.
- `script.js` is limited to: theme toggle + persistence, mobile nav, FAQ accordion, scroll-reveal observer, modal open/close + focus trap, form validation, smooth anchor scrolling, and button loading simulation. All motion lives in CSS; JS only toggles classes.
- No lorem ipsum and no placeholder-only sections — all copy is real, on-brand English. Placeholders are permitted only for imagery (seeded picsum URLs).
- Final self-check before output: zero inline styles, zero inline SVGs, zero horizontal overflow at 320px, keyboard-only pass, both themes verified for contrast.

## 5. PAGE SECTIONS — REQUIRED STRUCTURE & BEHAVIOR

Every section is separated by `.section-divider-minimal` (`border-top: 2px solid var(--secondary)`) and opens with an uppercase micro-label (`letter-spacing: 0.05em`) followed by an `<h2>`.

**5.1 Sticky Header:** text wordmark, anchor nav (Features, Process, Testimonials, Pricing, FAQ), theme toggle, mobile hamburger (Material Symbol) opening a flex-column menu; a gold hairline border-bottom appears on scroll.

**5.2 Hero:** `min-height: 90vh`, strictly symmetric; eyebrow label, `<h1>` (largest type on the page), supporting paragraph, two CTAs (`.btn-primary` + `.btn-secondary`); hero product image in `.image-focus` with a "View details" trigger opening the modal (§2.4). Use `.product-detail-grid` for the copy/image split, wrapping to a single column below 768px.

**5.3 Features — 3 cards:** three equal `.card` components (flex row → column): thin Material Symbol icon, `<h3>`, description, plus the hover/focus-reveal detail line (§3).

**5.4 How It Works — 3 steps:** oversized light-weight numerals `01 / 02 / 03`, step title + copy, thin connecting hairline between steps (horizontal on desktop, vertical on mobile).

**5.5 Testimonials:** beige band (`--bg-secondary`); three quotes with typographic quote marks, quote text, name, and role; subtle hover lift.

**5.6 Pricing — 3 tiers:** flex row → column; each tier a `.card` with plan name, price, feature list (Material Symbol `check` per item), and a `.btn` CTA that enters `.is-loading` on click, then a success state. Middle tier featured: gold 2px top border, "Selected" micro-label (the single permitted use of Navy `#000080`), higher elevation.

**5.7 FAQ:** accordion of 5–6 items; each item is a `<button aria-expanded>` plus a panel (`role="region"`, `aria-labelledby`); one-open-at-a-time; chevron Material Symbol rotates; height animates via CSS; Enter/Space operable.

**5.8 Final CTA:** centered `<h2>` + email-capture `.input-group` (label, email input, `.btn-primary`); client-side validation with inline `aria-live` errors and a success confirmation (green check + message).

**5.9 Footer:** opens with the gold `border-top: 2px solid #B8860B` signature; brand blurb, secondary link groups (Company / Support / Legal — real labels), newsletter mini-form (reuses `.input-group`), social icons (Material Symbols with `aria-label`), copyright line; all links use the gold underline hover.

Deliver the complete code for all three files now.
