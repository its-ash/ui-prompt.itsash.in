# Generated Coding-AI Prompt — Invisibletech-Themed Landing Page

You are an expert front-end developer. Build a complete, production-ready landing page following the design system and architectural rules below. Output three separate files: `index.html`, `style.css`, and `script.js`. Do not write any inline CSS (`style="..."` is forbidden). All styling must live in `style.css` and be applied via class/ID selectors only. Use Tailwind CSS utility classes where appropriate, but every utility must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`). Keep HTML semantic, clean, and agnostic of visual styling so that changing the look requires editing only CSS.

## 1. Architecture & Theming Rules

**1.1 CSS-First, Zero Inline CSS**
- All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
- No inline `style` attributes anywhere in the markup.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables. Define at minimum:

Colors:
- `--color-carbon-ink: #0f0f0f;`
- `--color-graphite: #222222;`
- `--color-iron: #4c4c4c;`
- `--color-steel: #606060;`
- `--color-slate: #898989;`
- `--color-fog: #9d9d9d;`
- `--color-silver: #b2b2b2;`
- `--color-pewter: #c6c6c6;`
- `--color-ash: #dbdbdb;`
- `--color-mist: #efefef;`
- `--color-canvas-white: #fefefe;` (use `#fefefe`, never `#ffffff`, for near-white surfaces)
- `--color-ice-blue: #e6f1ff;`
- `--color-cobalt-spark: #0c76fe;`
- `--color-lime-glow: #dcf58f;`

Generic theme tokens (required by the meta-architecture):
- `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

Map the brand colors into the generic tokens sensibly (e.g., `--bg-primary: var(--color-canvas-white)`, `--text-primary: var(--color-carbon-ink)`, `--border-default: var(--color-ash)`). Enforce contrast pairing: any light background token pairs with a dark text token and vice versa, in every theme.

Spacing & shapes:
- Base unit 4px. Spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 72, 80, 120, 160, 240 (as `--spacing-4` … `--spacing-240`).
- Radii: nav/pills/badges/buttons `9999px`; cards/panels `12px` (as `--radius-sm: 12px`, `--radius-lg: 9999px`).
- Page max-width `1280px`, section gap `80px`, card padding `24px`, element gap `24px`.

Typography tokens:
- `--font-base` (Apk Galeria substitute): use Google Font **Newsreader** (weights 400, 500) as the closest open substitute, or system serif fallback.
- `--font-categorical` (Apkpraktikal substitute): use Google Font **Space Mono** (weights 400, 700) as the closest open substitute.
- `--font-karla`: Google Font **Karla** (weight 400) for the 16px body case.
- Type scale tokens: `--text-caption` (12px/1.4), `--text-body-sm` (14px/1.43), `--text-body` (16px/1.5), `--text-subheading` (18px/1.4, -0.16px), `--text-heading-sm` (24px/1.2, -0.24px), `--text-heading` (36px/1.2, -0.5px), `--text-heading-lg` (48px/1.1, -0.86px), `--text-display` (64px/1.0, -1.92px).
- Letter-spacing rules: Apk Galeria substitute gets progressively tighter tracking above 18px (-0.009em at 18–22px up to -0.030em at 64px); categorical font gets wide tracking (0.12–0.14em at 14–16px, 0.05em at 13px, 0.04em at 12px) and must be uppercase.
- OpenType features: `"liga" on, "kern" on` for the display font; `"tnum" on` for the categorical font.

**1.3 Mandatory Dark Mode**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Background/text variables must switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label` state.

**1.4 Flexbox Layout & Mobile-First**
- Use Flexbox (`display: flex`) for all layout structures.
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All layouts must be mobile-responsive out of the box (rows become columns on small viewports). Prevent horizontal scrolling.

**1.5 Framework**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Font `<link>`/`@import` tags for Newsreader, Space Mono, Karla, and Google Material Symbols/Icons.
- Bind fonts to `--font-base` and `--font-categorical`.
- Use Google Material Symbols for all icons. Forbid raw inline SVGs or local icon files.

## 2. Component State Requirements

**2.1 Buttons**
Style all states via CSS classes:
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success`/`--text-error`.

Button variants required:
- Primary Lime CTA: pill (`9999px`), `#dcf58f` background, `#0f0f0f` text, categorical font 13px weight 700 uppercase 0.05em tracking, padding 10px 20px, no border, no shadow. Use at most once per viewport.
- Secondary Black CTA: pill, `#0f0f0f` background, `#fefefe` text, same typography. Used as the primary in-page action.
- Ghost Text Link: no background, no border; text `#0c76fe` (links) or `#0f0f0f` (section actions), display font 14–16px weight 400, often paired with a small ↗ or → glyph in `#0c76fe`.

**2.2 Cards**
- Default: flexible flexbox layout, subtle borders and elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- Focus-within: highlights card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with a Google Icon and clear guidance text.

Card variants required:
- Ice Blue Feature Panel: `#e6f1ff` background, 12px radius, 24px padding, heading in display font 18–22px `#0f0f0f`, inline link in `#0c76fe`. No border, no shadow.
- Product Card: white or `#e6f1ff` card, 12px radius, 1px `#dbdbdb` border, 24px padding. Title display font 20–24px weight 500, body 14–16px `#4c4c4c`. Includes a nested mock window with a 3-dot traffic-light header.
- Mock Window Frame: outer `#fefefe` card 12px radius, 1px `#dbdbdb` border, 24px padding; inner window 8px radius, 1px `#e0e0e0` border, header strip with three small circles in `#dbdbdb`.

**2.3 Forms & Inputs**
Account for states: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input field, and dedicated error feedback container.

**2.4 Modal / Popup**
Account for states: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions). UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` or overlay click.

## 3. Core UX & Micro-Interactions

- Responsive by default: fluid sizing and breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions (`.btn-danger`) visually distinct in both themes.
- No box-shadows or drop-shadows anywhere — elevation via tonal contrast, 1px hairlines, and typography only.
- No gradients.
- Never use `#000000`; deepest tone is `#0f0f0f`.
- Never use `#dcf58f` as decoration, background, icon, or hover — conversion only.
- Never use `#0c76fe` as a button fill or large surface — wayfinding accent only.
- Two-tone headline pattern: one phrase in `#0f0f0f`, the following phrase in `#898989` or `#4c4c4c`, same weight and size.
- Section eyebrow: 6px `#0c76fe` dot + categorical font 12–13px uppercase 0.12–0.14em tracking `#0f0f0f`, ~16px gap below to the heading.
- Client logos: grayscale only, `#0f0f0f` or `#4c4c4c`.
- Decorative hand-drawn illustrations: flat, limited palette `#0c76fe`, `#dcf58f`, warm peach/skin tones, single ink outline. Use CSS/SVG-free placeholders (colored blocks or emoji-free icon glyphs) — do not embed real photography or 3D.

## 4. Deliverables & Naming

- File structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content is genuinely unspecified.

## 5. Fictional Brand Requirement (Mandatory)

The source style describes a real brand. You must **invent a fictional brand name, product, and copy**. Never use the real brand name "Invisibletech", its logo, trademarks, or product names anywhere in the page, markup, alt text, or comments. All user-facing copy must be in English. Use the visual style only.

## 6. Page Structure to Build

Build a complete landing page with these sections, in order:

1. **Top Navigation Bar** — sticky white bar ~64px tall, full-width. Left: logo mark (12px square + wordmark in display font 18px). Center: 5–6 text links in display font 14px `#0f0f0f`, each with a small ↗ icon (Material Symbol). Right: a text link + Lime Glow CTA button.
2. **Hero** — left-aligned on white canvas with faint dot-grid background. Two-tone headline (display font 64px weight 500, first phrase `#0f0f0f`, second phrase `#898989`, line-height 1.0, letter-spacing -1.92px, max-width 900px). Supporting body in `#4c4c4c`. Primary CTA (Lime Glow) + Secondary Black CTA (not in same row — pick one per action group; use the lime as the single high-intent action). Decorative illustration placeholders scattered asymmetrically.
3. **Features** — eyebrow + two-tone heading, then 3 Product Cards in a 2-column-friendly layout (fewer, larger modules). Each card: title, body, nested mock window with traffic-light header.
4. **How It Works** — eyebrow + heading, then 3 steps. Each step: number, title, body, optional icon.
5. **Testimonials** — 2–3 quote cards with author name/role, display font for quotes.
6. **Pricing** — 3 tiers. Each tier: name, price, feature list, CTA button. Highlight one tier with `#e6f1ff` surface.
7. **FAQ** — accordion-style Q&A, keyboard accessible, `aria-expanded`/`aria-controls`.
8. **Final CTA** — Ice Blue Feature Panel or dark surface with a strong headline and a single Lime Glow CTA.
9. **Footer** — secondary links, client logo strip (grayscale), copyright. No mega-menu.

## 7. Output

Output only the three files' contents in clearly labeled code blocks (`index.html`, `style.css`, `script.js`). No preamble, no closing commentary. Ensure the page renders correctly when opened directly in a browser with no build step. Include the theme toggle, dot-grid hero background, and all component states defined above. All user-facing copy in English. Invent a fictional brand name and product throughout.
