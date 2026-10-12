# Coding Agent Task — Landing Page: Scandinavian Design

**Your role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build the complete landing page described below in a single attempt. Follow every rule in this document literally; where a rule and a personal habit conflict, the rule wins.

---

## Project Brief & Page Structure

**Design language:** Scandinavian / Nordic — calm, monochrome, spacious, restrained, "quiet UI." The entire visual hierarchy is built from a black ink opacity ladder over a near-white canvas. No gradients, no decorative shadows, no all-caps text, left-aligned text everywhere, sentence case everywhere, one filled primary action per section.

**Product concept:** Invent one coherent fictional product for the copy (e.g., a calm focus/writing/workspace tool with a Nordic-inspired name such as "Nordlys" or "Hviske"). Keep the name, tone, and terminology consistent across all sections. Write all user-facing copy in **English**, concise and calm. Lorem ipsum is forbidden — author realistic copy.

**Sections, in DOM order:**

* **Sticky header:** Text-only brand wordmark (weight 600), inline anchor nav ("Features", "How it works", "Pricing", "FAQ"), the theme toggle button, and one small filled primary button ("Get started"). On viewports < 640px, hide the nav links (the same anchors must exist in the footer). Background `var(--bg-primary)`, 1px bottom border `var(--border-default)`, `z-index: var(--z-dropdown)`.
* **Hero:** Small sentence-case intro line in secondary ink, display headline (weight 600, letter-spacing -0.01em, max-width ~18–22ch, line-height 1.1), supporting paragraph (secondary ink, max-width 55–68ch), one filled primary CTA and one ghost/outline secondary CTA. Optionally include a single photograph from `https://picsum.photos` rendered monochrome via `filter: grayscale(1)` — otherwise keep the hero purely typographic. Left-aligned.
* **Features — 3 cards:** Section heading + one-paragraph intro, then three cards in a wrapping flex row. Each card: one Google Material Symbol inside a quiet 44px tile (hover applies `var(--fill-hover)`), card title (weight 600, sentence case), description in secondary ink (max 3 lines of measure).
* **How it works — 3 steps:** Steps numbered 01 / 02 / 03 in tertiary ink, each with a title and short description. Separate steps with a 1px top border `var(--border-default)`. Stack vertically on mobile.
* **Testimonials — 3 quotes:** Each a `blockquote` with the quote in primary ink and a `figcaption`/cite line (name + role) in secondary ink. Thin 1px top border per quote; optional subtle "format_quote" Material Symbol in tertiary ink.
* **Pricing — 3 tiers:** Each tier card: plan name, price (weight 600, large), billing period, feature list with small "check" Material Symbols, and a CTA. The middle tier is featured: `border-color: var(--primary)`, a small sentence-case "Most popular" badge (filled `var(--primary)` background, `var(--bg-primary)` text, `--radius-sm`), and the only filled primary button in the section; the other two tiers use ghost/outline buttons.
* **FAQ — 5 accordion items:** Accessible accordion (see 2.4). First item open by default.
* **Final CTA:** Display heading, supporting paragraph, and an email capture form (see 2.3). This section holds the single filled primary action for the chapter (the form submit button).
* **Footer:** Top area: brand + one-line description plus 2–3 link columns ("Product", "Company", "Resources") containing the same section anchors plus secondary links. Bottom bar: copyright line and secondary links ("Privacy", "Terms", "Contact"). 1px top border; link hover applies `var(--fill-hover)` with `--radius-sm`.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**

* **No inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID selectors only:** All design properties, layout rules, and states are applied via class or ID selectors in `style.css`. No presentational attributes.
* **Minimal HTML modifications:** HTML stays semantic and clean (`header`, `main`, `section`, `nav`, `footer`, `h1`–`h3` in logical order). Every section gets `aria-labelledby` pointing to its heading. Include a "Skip to content" link as the first focusable element.

**1.2 CSS Variables & Theme Tokens**

All visual tokens live in `:root` (and the dark overrides of 1.3) in `style.css`. Define exactly these names plus the values shown:

```css
:root {
  /* Ink opacity ladder — light mode */
  --primary: #000000;                  /* primary ink / primary action fill */
  --secondary: rgba(0, 0, 0, 0.64);   /* secondary ink */
  --bg-primary: #fefefe;               /* canvas */
  --bg-secondary: #f6f6f6;             /* quiet fills: inputs, skeleton blocks */
  --text-primary: #000000;
  --text-secondary: rgba(0, 0, 0, 0.64);
  --text-tertiary: rgba(0, 0, 0, 0.44); /* numerals, micro-copy, large text only */
  --text-success: #1e6b4f;
  --text-error: #b3261e;
  --border-default: rgba(0, 0, 0, 0.10);
  --border-strong: rgba(0, 0, 0, 0.24);
  --border-error: #b3261e;
  --border-success: #1e6b4f;
  --fill-hover: rgba(0, 0, 0, 0.05);
  --fill-pressed: rgba(0, 0, 0, 0.09);

  --font-base: 'Inter', sans-serif;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --shadow-sm: none;   /* flat design: shadows stay none for this theme */
  --shadow-md: none;
  --spacing-gap: 24px;
  --transition-fast: 150ms ease-out;
  --transition-normal: 240ms ease-out;
  --ease-standard: ease-out;
  --z-dropdown: 40;
  --z-modal: 60;
  --z-toast: 80;
}
```

* **Exception note:** The source style sheet lists `#FFFFFF` as the canvas; per platform rules pure white is disallowed, so the near-white `#fefefe` substitutes as `--bg-primary`. All `rgba(0 0 0 / x%)` ladder values remain exactly as specified.
* **Contrast pairing:** Light canvas pairs with black ink; dark canvas (1.3) pairs with light ink. The primary button is built as `background: var(--primary); color: var(--bg-primary);` so both themes pair correctly by construction. Reserve `--text-tertiary` for large text (≥18px) or non-essential micro-copy — never body paragraphs.
* **Design tokens to enforce globally:** 8px spacing rhythm (all gaps/padding are multiples of 8); section vertical padding `clamp(4rem, 8vw, 9rem)`; radii only within 6–12px; body line-height 1.5–1.6; paragraph measure 55–68ch; font weights 400–600 only (weight 700–900 is forbidden); letter-spacing -0.01em on display sizes only.

**1.3 Mandatory Dark Mode Support (Inverted Monochrome)**

* **Token overrides:** Duplicate the full token set under `@media (prefers-color-scheme: dark) { :root { … } }` and under a `.dark` class on `<html>`. Dark values: `--primary: #fefefe; --bg-primary: #0a0a0a; --bg-secondary: #161616; --text-primary: #fefefe; --text-secondary: rgba(254, 254, 254, 0.64); --text-tertiary: rgba(254, 254, 254, 0.42); --border-default: rgba(254, 254, 254, 0.14); --border-strong: rgba(254, 254, 254, 0.30); --fill-hover: rgba(254, 254, 254, 0.06); --fill-pressed: rgba(254, 254, 254, 0.10); --text-success: #8fd3ae; --text-error: #f2b8b5; --border-error: #f2b8b5; --border-success: #8fd3ae; --secondary: rgba(254, 254, 254, 0.64)`.
* **Theme switching:** No HTML restructuring when switching; only variable values change. Light mode is the default presentation.
* **Persistence:** `script.js` reads `localStorage` ("theme" key) as the first statement on load (minimize flash), falls back to `prefers-color-scheme` on first visit, toggles `.dark` on `<html>`, and updates the toggle button's `aria-pressed` and `aria-label`. The toggle is a visible header button containing "dark_mode" and "light_mode" Material Symbols; CSS shows the correct icon per theme.

**1.4 Flexbox Layout & Mobile-First Alignment**

* **Build all layout structures with Flexbox.** Do not use CSS Grid.
* **Default alignment rule:** Every flex container defaults to `align-items: center`. Explicitly justified exceptions only: (1) multi-card rows use `align-items: stretch` for equal heights; (2) card, step, and quote interiors use `align-items: flex-start` to preserve left-aligned text; (3) column stacks may use `align-items: flex-start`. Any other deviation must be commented in CSS with its justification.
* **Mobile-friendly first:** Card/pricing/testimonial rows use `flex-wrap: wrap` with children `flex: 1 1 280px` so they collapse to a single column below ~768px with no horizontal scrolling. No fixed pixel widths on content; `img { max-width: 100%; }`.

**1.5 Styling Approach & Naming Convention**

* **Clean custom CSS path (explicit exception):** Do not load Tailwind or any framework; the source specification ships vanilla CSS, so per the clean-custom-CSS provision all styling lives in `style.css`.
* **Single convention — BEM only:** `block__element--modifier` (e.g., `.hero`, `.hero__title`, `.card`, `.card__icon`, `.btn--primary`, `.faq__item`, `.faq__trigger--open`, `.input-group__error`, `.footer__link`). Never mix conventions, never invent utility classes, never use element selectors for styling (except base resets/typography on `body`, headings, and links).

**1.6 Typography & Icons (Google Fonts Mandatory)**

* **Text:** Inter via Google Fonts, weights 400, 500, 600 only — include these tags in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet">
```

Bind to `--font-base` on `body`. Never use weights above 600.
* **Icons:** Google Material Symbols Outlined only (`<span class="material-symbols-outlined" aria-hidden="true">…</span>`). Raw inline SVGs, local icon files, emoji, and icon fonts other than Material Symbols are forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--small`)**

* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` min touch target 44×44px (`.btn--small` may keep 44px height), `border-radius: var(--radius-md)`, `font-weight: 500`, sentence-case label, `transition: var(--transition-normal)`. Primary: filled `var(--primary)` background with `var(--bg-primary)` text. Ghost: transparent background, 1px `var(--border-strong)` border, `var(--text-primary)` text.
* **Hover:** Primary darkens/dims via a translucent overlay of the same ink at ~86% opacity; Ghost gains `background: var(--fill-hover)`. `cursor: pointer` on all interactive states.
* **Focus:** Distinct `:focus-visible` ring — `outline: 2px solid var(--primary); outline-offset: 2px;` — never remove it.
* **Active/Pressed:** `background: var(--fill-pressed)` on ghost; primary keeps its fill with `transform: scale(0.97)`.
* **Loading (`.btn--loading`):** `pointer-events: none`, `aria-busy="true"` set by JS, label hidden, a 16px `currentColor` CSS border spinner shown in its place; button dimensions must not change.
* **Disabled:** `opacity: 0.5`, `filter: grayscale(1)`, `cursor: not-allowed`, no hover/focus effects.
* **Success/Error (`.btn--success`, `.btn--error`):** Temporary feedback classes using `--text-success` / `--text-error` for border and icon; state is always communicated with an icon or inline text in addition to color.

**2.2 Card Component (`.card`, `.card--featured`, `.card--skeleton`, `.card--empty`)**

* **Default:** Flexbox column, `align-items: flex-start`, `background: var(--bg-primary)`, `1px solid var(--border-default)`, `border-radius: var(--radius-lg)`, padding in the 8px rhythm. Featured pricing card: `border-color: var(--primary)` plus the badge described in the brief.
* **Hover:** `transform: translateY(-2px)` with `transition: var(--transition-normal)` — no shadow shift (shadows stay none for this theme).
* **Focus-within:** When a child link/button receives focus, the card border transitions to `var(--border-strong)`.
* **Loading (skeleton):** `.card--skeleton` blocks of `var(--bg-secondary)` with a quiet opacity pulse (between 0.5 and 1) instead of a gradient shimmer — no gradients allowed.
* **Empty state:** `.card--empty` with a muted Material Symbol and one guidance sentence in secondary ink; define the class even though the default page has no empty cards.

**2.3 Form & Input (`.input-group`, `.input-group__label`, `.input-group__field`, `.input-group__error`)**

* **Structure:** Flex column wrapping a visible `<label>`, the `<input type="email">`, and a dedicated error container (`<p class="input-group__error" aria-live="polite">`).
* **States — all styled:** Empty (1px `var(--border-default)`), Focused (`:focus-visible` outline ring as in 2.1), Filled, Valid (`--border-success` + small "check" icon), Invalid (`--border-error`, error message in `--text-error`, "error" icon — icon and text always accompany the color), Disabled (opacity 0.5, `cursor: not-allowed`), Read-only.
* **Field hover:** `background: var(--fill-hover)`.
* **Behavior:** JS validates the email on submit; invalid → invalid state + `aria-live` message; valid → button enters loading state for ~800ms, then success state plus an inline success message in an `aria-live="polite"` region. No page reload.

**2.4 FAQ Accordion (`.faq__item`, `.faq__trigger`, `.faq__answer`)**

* **Markup:** Each item is an `h3` containing a `<button class="faq__trigger" aria-expanded="…" aria-controls="…">` with the question plus an "expand_more" Material Symbol; the answer is a `<div class="faq__answer" role="region" aria-labelledby="…" hidden>`.
* **Open/close:** JS toggles `aria-expanded` and `hidden`. The answer animates via the CSS `grid-template-rows: 0fr → 1fr` technique (or `max-height`) with `transition: var(--transition-normal)`; the chevron rotates 180deg. State is communicated by chevron rotation plus expansion — never color alone.
* **Keyboard:** Fully operable via keyboard (native buttons); `Esc` closes the currently open item when focus is inside it.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** Fluid type (`clamp()`), no horizontal overflow at any width, single-column stacking below 768px.
* **Quiet motion only:** All state changes use `transition: var(--transition-fast)` or `var(--transition-normal)` (never above 300ms, always ease-out). Under `@media (prefers-reduced-motion: reduce)`, all transitions and animations become `none` (including `scroll-behavior`).
* **Accessibility:** Sufficient contrast in both themes via the token pairings in 1.2/1.3. Never rely on color alone for any state. Semantic HTML5 landmarks, logical heading order, correct ARIA roles/labels, visible focus at all times, full keyboard operability, and `aria-live` regions for form feedback. Add `@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }` for the anchor nav.
* **Mandatory visual feedback:** Every hover, click, focus, and submission triggers a visible state change (fill, transform, border, or icon swap).
* **Destructive/danger styling:** Not applicable to this page; if a `.btn--danger` class is defined for reuse, it must be visually distinct in both themes (use `--text-error` with its paired border token).

---

## 4. DELIVERABLES & OUTPUT FORMAT

* **Files:** Exactly three — `index.html`, `style.css`, `script.js`. `index.html` references `style.css` in `<head>` and contains a single `<script src="script.js" defer></script>` — no other script tags, no inline scripts, no inline styles.
* **JS scope:** `script.js` contains only: theme initialization/persistence/toggle, FAQ accordion toggling, and the email form validation/feedback. No libraries, no dead code.
* **Naming:** BEM exclusively, per 1.5. Keep class names in English/ASCII.
* **Copy:** All user-facing copy in English, sentence case, calm and concise — no lorem ipsum, no placeholder text where content was unspecified (author it), no all-caps anywhere (including nav, buttons, badges, and the footer).
* **Completion:** Ship the finished page in one pass — every section from the brief present, both themes fully working, all states from Section 2 defined and reachable.
