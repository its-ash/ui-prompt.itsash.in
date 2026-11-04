# Coding AI Prompt — Aker-Themed Landing Page (Fictional Brand)

## 1. Project Overview & Mandatory Architecture

You are building a complete, responsive landing page for a **fictional brand** (invent the brand name, product, and all copy — never use "Aker" or any real trademark). The visual style must follow the Aker design system described below. The page must be delivered as three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere in the HTML.

**Framework:** Tailwind CSS (via CDN or `@layer`/`@apply` directives in `style.css`) is acceptable, but all utility classes must map back to CSS variables or reusable component classes (`.btn`, `.card`, `.input-group`). Prefer clean custom CSS driven by CSS variables.

**Single naming convention:** Use BEM throughout (e.g., `.hero__wordmark`, `.nav-pill`, `.feature-card__title`). Never mix conventions.

---

## 2. CSS Variables & Theme Tokens (define in `:root`)

```css
:root {
  /* Colors */
  --color-ink: #000000;
  --color-paper: #ffffff;
  --color-char: #1c1c1c;
  --color-midnight: #070707;
  --color-iron: #262626;
  --color-slate: #38464a;
  --color-mist: #e5e4e4;
  --color-smoke: #8d8d8d;
  --color-pewter: #666666;
  --color-ember: #b75928;
  --color-pine: #193f32;
  --color-tide: #002934;
  --color-driftwood: #537179;
  --color-cedar: #776157;
  --color-coral: #df6a6b;
  --color-primary-action-fill: #494949;

  /* Semantic aliases */
  --primary: var(--color-ember);
  --secondary: var(--color-char);
  --bg-primary: var(--color-paper);
  --bg-secondary: var(--color-mist);
  --text-primary: var(--color-ink);
  --text-secondary: var(--color-pewter);
  --text-success: #2e7d32;
  --text-error: #c62828;
  --border-default: var(--color-mist);
  --border-error: var(--color-coral);
  --border-success: #2e7d32;

  /* Typography */
  --font-base: 'Proxima Nova', 'Montserrat', sans-serif;
  --font-serif: 'Lora', serif;

  /* Radius */
  --radius-sm: 3.2px;
  --radius-md: 8px;
  --radius-lg: 80px;
  --radius-pill: 1584px;

  /* Shadows (none by design — elevation via surface color) */
  --shadow-sm: none;
  --shadow-md: none;

  /* Spacing */
  --spacing-gap: 16px;
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-index */
  --z-dropdown: 100;
  --z-modal: 200;
  --z-toast: 300;
}
```

**Dark mode:** Implement under `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`. In dark mode, flip `--bg-primary` to `--color-char`/`--color-midnight`, `--text-primary` to `--color-paper`, `--border-default` to `--color-iron`, etc. Ensure contrast pairing: light backgrounds pair with dark text, dark backgrounds with light text. Provide a visible theme toggle button with `aria-pressed` and `aria-label`, persisting choice via `localStorage` (fallback to `prefers-color-scheme` on first visit).

**Note:** The Aker theme is fundamentally light. Dark mode should invert surfaces gracefully but maintain the same component structure.

---

## 3. Typography (Google Fonts Mandatory)

Include Google Fonts `<link>` tags in `<head>`:
- **Text:** Montserrat (substitute for Proxima Nova) — weights 300, 400, 500, 600. Also Lora — weight 400.
- **Icons:** Google Material Symbols (Outlined).

Bind `--font-base` to Montserrat, `--font-serif` to Lora.

**Type scale (define as utility classes or CSS variables):**

| Token | Size | Line Height | Letter Spacing | Weight |
|-------|------|-------------|----------------|--------|
| `--text-body` | 15px | 1.50 | 0.0100em | 400 |
| `--text-subheading` | 18px | 1.50 | 0.0100em | 400 |
| `--text-heading-sm` | 22px | 1.25 | -0.0200em | 400 |
| `--text-heading` | 36px | 1.20 | -0.0200em | 300/400 |
| `--text-heading-lg` | 62px | 1.10 | -0.0250em | 300 |
| `--text-display` | 168px | 0.80 | -0.0250em | 300 |

---

## 4. Layout & Flexbox Rules

- All layout via Flexbox (`display: flex`). Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first: rows become columns on small viewports. No horizontal scrolling. Page max-width 1200px centered. Full-bleed sections at 100vw.
- Section gap: 80px vertical.
- Card padding: 16px. Element gap: 16px.

---

## 5. Component Specifications

### 5.1 Navigation Pill
- Fixed top-right, 24px margin. Height 32px, auto width, 13px horizontal padding, radius 1584px, background `--color-char`.
- Brand text "invented brand name" in Montserrat weight 500, 12px, letter-spacing 0.12px, color `--color-paper`, followed by hamburger icon (Material Symbols `menu`, 16px, `--color-paper`).
- Opens a dropdown (z-index `--z-dropdown`) revealing a 2-column grid of Navigation Cards (Char background, 8px radius, 4:3 image left, text block right: title 15px weight 400 Paper, description 12px weight 400 Mist, right-arrow icon 14px Paper). Two cards per row.

### 5.2 Hero Section (Full-Bleed)
- 100vw, 100vh height. Muted landscape/cityscape photograph as background (use a placeholder image URL). No border-radius.
- Brand wordmark: Montserrat weight 300, 168px, line-height 0.80, letter-spacing -4.2px, color `--color-paper`, positioned bottom-left with 40px padding.
- Intro paragraph top-left: Montserrat weight 400, 15px, line-height 1.50, color `--color-paper`, max-width 400px.
- Navigation pill top-right.

### 5.3 Section Label + Heading + Body
- White background, max-width 600px, left-aligned.
- Overline label: 12px Montserrat weight 400, color `--color-smoke`, letter-spacing 0.12px. 6–8px gap below to heading.
- Heading: Montserrat weight 300, 36px, line-height 1.20, letter-spacing -0.72px, color `--color-ink`. (Use weight 300 at 62px for premium section headings.)
- Body: Montserrat weight 400, 15px, line-height 1.50, color `--color-ink`. Lora 15–18px as serif variant for brand statements only.
- 24px gap between elements.

### 5.4 Two-Column Feature Card Row (Features Section — 3 cards)
- Three cards in a responsive grid (3 columns desktop, 1 column mobile), 16px gap.
- Left-style card: `--color-mist` background, 8px radius, 24px padding. Overline label 12px `--color-smoke`. Heading Montserrat weight 300, 36px, `--color-ink`. Bottom-left ghost text-arrow button. Bottom-right decorative brand mark in `--color-ink`.
- Right-style card: full-bleed photograph, 8px radius, white overline + heading overlaid, ghost button bottom-left in `--color-paper`.
- Mix card variants for visual rhythm.

### 5.5 Text-Arrow Button
- Ghost: no fill, no border. Label 13–15px Montserrat weight 400. Color: `--color-paper` on dark photography, `--color-ink` on light. Trailing `→` at 16px. Pill variant: 80px radius, 19px vertical / 16px horizontal padding, outlined.
- All states: default, hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS variables), active (transform scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

### 5.6 Filled Dark Button
- `--color-char` fill, 80px radius, `--color-paper` text 13px weight 500, 19px vertical / 16px horizontal padding. Used sparingly.

### 5.7 Numbered List Item (How It Works — 3 steps)
- 1px hairline divider `--color-mist` above each item. Two-digit number (01, 02, 03) in Montserrat weight 400, 12px, `--color-smoke`. Label 18px Montserrat weight 400 `--color-ink`. 6px row gap, 24px vertical padding.

### 5.8 Pill Badge / Tag
- 1584px radius, 6–8px vertical / 14px horizontal padding. `--color-mist` background with `--color-ink` text, or transparent with `--color-paper` on dark. 12px Montserrat weight 500.

### 5.9 Testimonials
- Cards with `--color-mist` background, 8px radius, 16px padding. Quote text in Montserrat 15px weight 400 `--color-ink`. Author name 13px weight 500. Optional Lora serif for quote body. Include hover elevation (surface color shift, no shadow), focus-within border highlight.

### 5.10 Pricing (3 Tiers)
- Three cards in a responsive grid. Each: `--color-mist` background, 8px radius, 24px padding. Tier name 12px overline `--color-smoke`. Price in Montserrat weight 300, 48px, `--color-ink`. Feature list with check icons (Material Symbols). CTA button (text-arrow or filled dark for highlighted tier). Highlighted tier uses `--color-char` background with `--color-paper` text.

### 5.11 FAQ
- Accordion items: question in Montserrat 18px weight 500 `--color-ink`, answer in 15px weight 400 `--color-pewter`. 1px `--color-mist` divider between items. Expand/collapse via CSS (checkbox hack or JS toggle). Smooth transition. Chevron icon (Material Symbols) rotates on open.

### 5.12 Final CTA
- Full-width section with `--color-char` background. Heading in Montserrat weight 300, 62px, `--color-paper`. Subtext 15px `--color-mist`. Filled dark button (inverted: `--color-paper` fill, `--color-char` text) or text-arrow button in `--color-paper`.

### 5.13 Footer
- `--color-paper` background, top border 1px `--color-mist`. Multi-column layout (brand + links). Link text 13px Montserrat weight 400 `--color-pewter`, hover `--color-ember`. Secondary links grouped. Bottom row: copyright text 12px `--color-smoke`.

---

## 6. Core UX & Micro-Interactions

- **Responsive:** Fluid sizing, breakpoints at 640px, 768px, 1024px. No horizontal overflow.
- **Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`). Respect `prefers-reduced-motion`.
- **Accessibility:** Sufficient contrast in both modes. Semantic HTML5. ARIA roles/labels on custom widgets (nav toggle, accordion, modal). Logical DOM/focus order. Full keyboard operability. `aria-live` regions for dynamic feedback.
- **Visual feedback:** Every click/hover/submission triggers visible state change.
- **Destructive actions:** `.btn-danger` visually distinct in both themes (use `--color-coral`).
- **No drop shadows, no gradients, no center-aligned body paragraphs.** Depth via surface color and photography only.

---

## 7. Deliverables

- `index.html`, `style.css`, `script.js` — separate files.
- BEM naming throughout.
- All user-facing copy in English. Invent a fictional brand name and product. Never use "Aker" or any real trademark/logo.
- No lorem-ipsum-only submissions where real copy is expected; use realistic invented copy.
- Google Material Symbols for all icons. No inline SVGs or local icon files.
- All images: use placeholder URLs (e.g., `https://picsum.photos/...`) with appropriate aspect ratios.

---

## 8. JavaScript Requirements (script.js)

- Theme toggle: persist via `localStorage`, fallback to `prefers-color-scheme`. Update `aria-pressed` and `aria-label`.
- Navigation pill: open/close dropdown. Close on outside click and `Esc`.
- FAQ accordion: toggle open/closed, update `aria-expanded`.
- Smooth scroll for anchor links.
- No form validation JS unless forms exist (none required here, but if added, ask user how to handle).

---

Generate the complete landing page following all rules above. Output only the three files' contents clearly separated. No preamble or closing commentary.
