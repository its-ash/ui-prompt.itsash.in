**ROLE & MISSION**

Act as a Senior Frontend Engineer and Expert UI Designer. Code a complete, production-ready landing page on the first attempt — final, full file contents, no drafts, no clarifying questions.

**Project:** "CRM Copper Sand" — a single-page marketing site for a fictional modern SaaS CRM (invent a consistent brand name, e.g., "Copperline", and use it throughout).
**Aesthetic (2020s Modern SaaS CRM):** Clean and analytical; Geist typography; modular light cards floating on a warm sand canvas; a copper header with strong contrast; simple CSS-drawn charts; a consistent line-icon system for actions, statuses, and navigation; focus on commercial activity (pipeline, contacts, deals).
**Sections (in this order):** Sticky Header + Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
**Language:** Write ALL user-facing copy in English.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **Forbidden:** `style="..."` attributes, `<style>` blocks, and presentational markup.
- Target everything via class/ID selectors only.
- Keep HTML semantic and visually agnostic: restyling the site must never require markup changes.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`, then theme overrides (see 1.3). Bind every color, radius, shadow, spacing, and motion value to a variable — no raw hex values outside the token block.

```css
:root {
  --font-base: 'Geist', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --primary: #C08532;            /* copper */
  --on-primary: #111827;         /* FIXED graphite text on copper — never flips with theme */
  --secondary: #111827;          /* graphite */
  --bg-primary: #F2F1ED;         /* sand page background — never pure white */
  --bg-secondary: #FEFEFE;       /* card surfaces — use #fefefe, never #ffffff */
  --bg-inverse: #111827;         /* footer band */
  --text-primary: #111827;
  --text-secondary: #4B5563;
  --text-muted: #6B7280;         /* placeholders, meta, disabled ONLY — never body copy */
  --text-on-inverse: #F2F1ED;
  --text-success: #16A34A;
  --text-error: #DC2626;
  --border-default: #E5E1D8;     /* sand-tinted soft border */
  --border-success: #16A34A;
  --border-error: #DC2626;
  --radius-sm: 8px; --radius-md: 14px; --radius-lg: 20px;
  --radius-card: var(--radius-md);        /* spec alias */
  --shadow-sm: 0 6px 16px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 18px 45px rgba(15, 23, 42, 0.08);  /* spec shadow */
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  /* Optional aliases honoring source-spec names: --crm-primary: var(--primary); --crm-neutral: var(--bg-primary); */
}
```

- **Contrast pairing (mandatory, both themes):** every light background token pairs only with dark text tokens, every dark background token only with light text tokens. Copper (`#C08532`) is a midtone: any fixed copper surface (header, CTA band, badges, primary buttons) must always use `--on-primary` (graphite) text in BOTH themes. `#9CA3AF` is never body text.
- **Global typography:** `letter-spacing: -0.15px` on body; headings may tighten to `-0.02em` at display sizes.

**1.3 Mandatory Dark Mode (FULL support — upgrade the spec's "Full/Partial" to Full)**
- Define dark tokens via this cascade so there is no first-paint flash and no inline scripts:
  1. `:root { color-scheme: light; …light tokens… }`
  2. `@media (prefers-color-scheme: dark) { :root { color-scheme: dark; …dark tokens… } }`
  3. `:root.light { …light tokens… }` and `:root.dark { …dark tokens… }` (higher specificity — user choice wins)
- Dark palette: `--bg-primary: #111827; --bg-secondary: #1F2937; --bg-inverse: #0B1220; --text-primary: #F2F1ED; --text-secondary: #9CA3AF; --text-muted: #9CA3AF; --border-default: #374151; --shadow-md: 0 18px 45px rgba(0,0,0,0.5);` Keep `--primary: #C08532` and `--on-primary: #111827` unchanged.
- **Theme switch:** visible toggle button in the header (`dark_mode` / `light_mode` icons, `aria-pressed`, `aria-label="Toggle dark mode"`); persists via `localStorage`; falls back to `prefers-color-scheme` on first visit. Theme switching must require zero HTML restructuring.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout with Flexbox. **Every flex container defaults to `align-items: center`** unless a documented exception applies (permitted exceptions: `stretch` for full-width stacked card/form content, `flex-end` for chart bar baselines — comment each exception).
- Mobile-first: rows wrap or collapse to columns below ~768px; **zero horizontal scrolling at any width down to 320px**.

**1.5 Framework Default**
- Use clean custom CSS only — no Tailwind, no external CSS frameworks, no CDNs. All reusable classes (`.btn`, `.card`, `.input-group`) are driven by the tokens above.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Fonts via Google Fonts `<link>` tags with preconnect: `family=Geist:wght@300..800` and `family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,300..600,0..1,0`. Bind `--font-base: 'Geist'`.
- Icons: Material Symbols Rounded with `font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`; usage: `<span class="material-symbols-rounded" aria-hidden="true">icon_name</span>`.
- **Icon Exception (one-line):** The source spec names "Hugeicons"; per the Google Fonts/Icons mandate, use Google Material Symbols Rounded exclusively — outlined, weight-400 glyphs whose clean geometry approximates the Hugeicons look; inline SVGs, icon packages, and local icon files are forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons** — `.btn`, `.btn--primary` (copper bg + `--on-primary` text), `.btn--secondary` (graphite bg + sand text), `.btn--ghost`, `.btn--inverse` (graphite bg + sand text, for the copper CTA band), `.btn--danger` (red `#DC2626`, distinct in BOTH themes — define even if unused).
- **Default:** flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min touch target 44×44px.
- **Hover:** darken/brightness shift + `--shadow-sm`, `cursor: pointer`. **Focus-visible:** 2px outline, 2px offset, using a ring color that contrasts the surface (copper ring on light/dark cards; graphite ring on copper header). **Active:** `transform: scale(0.97)`.
- **Loading:** `.btn--loading` + `aria-busy="true"` — disables interaction, prevents double-clicks, renders a CSS spinner that never changes button dimensions.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`. **Success/Error:** temporary `.btn--success` / `.btn--error` states with `check_circle` / `error` icons in `--text-success` / `--text-error`.

**2.2 Cards** — `.card`: `--bg-secondary`, 1px `--border-default`, `var(--radius-card)`, `--shadow-sm`.
- **Hover:** `--shadow-md` + `translateY(-2px)`. **Focus-within:** border shifts to copper when a child control is focused. **Skeleton:** `.card--skeleton` shimmer animation (safe under `prefers-reduced-motion`). **Empty state:** `.card__empty` with a Material icon + guidance text. **Highlight:** `.card--highlight` (2px copper border + "Most popular" copper badge with `--on-primary` text) for the featured pricing tier.

**2.3 Forms & Inputs** — `.input-group`: flex column (`align-items: stretch` — documented exception) wrapping `<label>`, `<input>`, and a dedicated error container with `aria-live="polite"` (icon + text; never color-only).
- **States:** empty, focused (copper ring), filled, valid (`--border-success` + `check_circle`), invalid (`--border-error`, `--text-error`, `error` icon + message), disabled, read-only. Used by the footer newsletter form and the demo modal form.

**2.4 Modal / Popup** — "Book a demo" modal: fixed overlay (graphite-tinted backdrop, `--z-modal`), centered flex container.
- **States:** opening (fade + scale from 0.96), open, loading (submit button enters loading state), success panel (`check_circle` + confirmation copy), error, closing — all via CSS transitions.
- **UX:** `role="dialog"`, `aria-modal="true"`, icon close button (44px, top-right), focus trapping, focus restored to trigger on close, close via `Esc` and overlay click, body scroll locked.

**2.5 FAQ Accordion** — each item: trigger `<button aria-expanded aria-controls>` + panel region; `expand_more` chevron rotates; panel opens/closes via CSS height/opacity transitions; fully keyboard operable; state never signaled by color alone.

**2.6 Header, Mobile Menu, Theme Toggle** — sticky `.header` with **fixed copper background and `--on-primary` graphite text in both themes** (strong contrast per spec); wordmark logo (Material icon + brand name); anchor nav links (Features, How It Works, Pricing, FAQ) with `scroll-margin-top` compensation and smooth scrolling (auto under reduced motion); header CTA opens the demo modal.
- Mobile: hamburger (`menu`/`close` icons) toggles a panel at `--z-dropdown`; `aria-expanded`, closes on `Esc` and link selection, manages focus in/out.

**2.7 CSS Charts (Hero mockup)** — pure CSS/flex bar charts: flex row of `.chart__bar` divs with percentage heights, `align-items: flex-end` (documented exception), bars animate growth on reveal (skipped under reduced motion); each bar carries an `aria-label` with its value — never color-only data.

---

## 3. LANDING PAGE SECTION REQUIREMENTS

**3.1 Hero** — Two-part layout: copy block (eyebrow, H1, subheadline, primary CTA "Start free trial" → scrolls to Pricing, secondary CTA "Book a demo" → opens modal) beside a **dashboard-style preview mockup** built from modular cards on the sand background: a Pipeline card (stages with deal counts + progress bars), an Activities feed card, and a Revenue chart card (CSS bars). Add a compact stats row (e.g., win-rate lift, active teams, average response time). On page load, the activities card shows `.card--skeleton` shimmer ~800ms, then populates from a mock array in `script.js`; if the array is empty, render the `.card__empty` pattern (icon + "No activity yet" guidance).

**3.2 Features (3 cards)** — Equal-height flex/grid row (documented `stretch` exception), collapsing to a column on mobile. Three CRM pillars matching the spec: **Pipeline Management** (`view_kanban`), **Contact Intelligence** (`contacts`), **Activity Tracking & Analytics** (`monitoring`). Each card: circular copper-tinted icon chip, H3 title, realistic description, hover lift.

**3.3 How It Works (3 steps)** — Steps 01/02/03 with icon badges (`upload` → `view_kanban` → `insights`), titles, and descriptions; a connector line between steps on desktop, vertical stack on mobile.

**3.4 Testimonials** — 3 cards: `format_quote` icon, 5-star row using `star` icons with `aria-label="Rated 5 out of 5"`, quote text, CSS initials-avatar circle (no external images), name + role/company. Realistic English quotes about pipeline visibility and closing more deals.

**3.5 Pricing (3 tiers)** — Segmented Monthly/Annual toggle (`aria-pressed` on each button, ~20% annual discount) with an `aria-live="polite"` region announcing price changes. Three tier cards (e.g., Starter $19, Professional $49 — `.card--highlight` with "Most popular" badge, Enterprise $99 or "Custom"); per-user/month labels; feature lists with `check_circle` icons in `--text-success`; each tier CTA wires to trial scroll or demo modal.

**3.6 FAQ** — 5–6 realistic Q&As (free trial, data import/migration, integrations, security, cancellation, support) using the 2.5 accordion.

**3.7 Final CTA** — Full-width copper band: `--on-primary` graphite heading + subcopy, `.btn--inverse` primary action, and an underlined "Book a demo" secondary link (graphite). Strong contrast in both themes.

**3.8 Footer** — `--bg-inverse` graphite band with `--text-on-inverse` sand text. Four secondary-link columns (Product, Company, Resources, Legal), a newsletter `.input-group` with validation + `aria-live` feedback and a loading-state submit button, accessible icon-only social buttons using available Material Symbols (e.g., `alternate_email`, `rss_feed`, `public`) with `aria-label`s, and a copyright line.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, breakpoints at ~480/768/1024px, no horizontal overflow.
- **Smooth motion:** all state changes use `transition: var(--transition-normal) var(--ease-standard)`; **every animation (shimmer, chart growth, accordion, modal) is disabled under `prefers-reduced-motion`.**
- **Accessibility:** skip link; semantic landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`); single H1 with logical h2→h3 hierarchy; contrast ≥ 4.5:1 body / ≥ 3:1 large text in BOTH themes; state never communicated by color alone (icons + text everywhere); visible `:focus-visible` rings on all interactive elements; full keyboard operability; `aria-live` regions for form feedback, price changes, and loading states.
- **Mandatory feedback:** every click, hover, and submission produces a visible state change.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js` (vanilla ES6, no dependencies, defensive null checks). `index.html` includes: `lang="en"`, viewport + title + meta description, preconnect + Google Fonts links (Geist, Material Symbols Rounded), and exactly ONE script reference — `<script src="script.js" defer></script>`. No other inline scripts.
- **Naming:** strict BEM (`block__element--modifier`) everywhere. Only permitted non-BEM classes: `.dark`, `.light`, `.material-symbols-rounded`, `.visually-hidden`.
- **Copy:** realistic, specific English marketing copy — lorem ipsum is prohibited; invent all unspecified content coherently.
- **Output:** the complete contents of all three files in a single response, on the first attempt.
