# Operate-Style Landing Page — Coding Prompt

Build a complete, responsive landing page in a **separate `index.html`, `style.css`, and `script.js`** file structure. The visual language must follow the Operate style: a sage paper canvas, flat hairlined components, compact instrument-like density, mono-green palette, and chart-as-page composition. Invent a fictional brand name, product name, and all user-facing copy; never use the real brand name “Operate,” its logo, trademarks, or product names anywhere in the page. All copy must be written in English.

## 1. Project Scope & Architecture

- **Files:** Create `index.html`, `style.css`, and `script.js`. Do not use inline `<script>` blocks beyond a single deferred entry-point reference to `script.js`.
- **CSS-First / Zero Inline CSS:** Keep all styling in `style.css`. Forbid the `style="..."` attribute. Target all design properties through class or ID selectors only. Keep HTML semantic and visual-agnostic so the look can change by editing CSS alone.
- **Framework:** Use Tailwind CSS for layout/spacing utilities if available; otherwise replicate equivalent utility classes in `style.css`. All utility classes must map back to CSS variables or reusable component classes such as `.btn`, `.card`, `.input-group`.
- **Naming:** Use one consistent BEM naming convention across the entire deliverable. Do not mix naming systems.
- **Fonts & Icons:** Use Google Fonts only. Include `<link>` tags for Inter, IBM Plex Mono, and JetBrains Mono. Use Google Material Symbols for icons. Forbid raw inline SVGs and local icon files.
- **Dark Mode:** Dark mode is mandatory. Implement tokens under both `@media (prefers-color-scheme: dark)` and a `.dark`/`.light` class strategy so a visible toggle can override the system preference.
- **Theme Persistence:** Persist the user’s theme choice in `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle with correct `aria-pressed` and `aria-label`.
- **White Rule Exception Note:** The source specifies Bone White as `#ffffff`; to satisfy the global no-pure-white rule, use `#fefefe` for all white/near-white surfaces, including cards and reverse text backgrounds.

## 2. Theme Tokens & Dark Mode

Define all tokens in `:root` for light mode and override them for dark mode. Maintain contrast pairing in every theme: light backgrounds pair with dark text; dark backgrounds pair with light text.

### Light Mode Tokens

| Token | Value | Role |
|---|---|---|
| `--color-forest-ink` | `#09352e` | Primary text, icons, chart strokes |
| `--color-bone-white` | `#fefefe` | Card surfaces, data point fills, reverse text |
| `--color-sage-paper` | `#e0e0e0` | Page canvas and large background fields |
| `--color-ash-gray` | `#e5e5e5` | Alternate nested surface tone |
| `--color-muted-sage` | `#77aa83` | Soft fill washes and decorative tints |
| `--color-lichen` | `#cad3d2` | Hairlines, dotted gridlines, chart axes |
| `--color-slate-smoke` | `#6c7a79` | Secondary metadata and captions |
| `--color-charcoal-bark` | `#29211e` | Deep text, heavy borders, dark panels |
| `--color-moss` | `#85c093` | Single filled action color |
| `--color-deep-fern` | `#007010` | Green text accent for links and tags |
| `--color-pine` | `#117025` | Green text accent for links and tags |
| `--color-emerald` | `#008023` | Data-mark fill and emphasis background |
| `--color-indigo-accent` | `#433787` | Rare punctuation accent, maximum once per page |

Required semantic tokens:

| Token | Light Value |
|---|---|
| `--primary` | `#85c093` |
| `--secondary` | `#007010` |
| `--bg-primary` | `#e0e0e0` |
| `--bg-secondary` | `#e5e5e5` |
| `--bg-card` | `#fefefe` |
| `--text-primary` | `#09352e` |
| `--text-secondary` | `#6c7a79` |
| `--text-success` | `#008023` |
| `--text-error` | `#9f2d2d` |
| `--border-default` | `#cad3d2` |
| `--border-error` | `#9f2d2d` |
| `--border-success` | `#008023` |

### Dark Mode Tokens

Override the same tokens under `@media (prefers-color-scheme: dark)` and `.dark`:

| Token | Dark Value |
|---|---|
| `--bg-primary` | `#1a191a` |
| `--bg-secondary` | `#29211e` |
| `--bg-card` | `#2f2e2c` |
| `--text-primary` | `#e8f0ec` |
| `--text-secondary` | `#cad3d2` |
| `--primary` | `#85c093` |
| `--secondary` | `#77aa83` |
| `--text-success` | `#7fd39a` |
| `--text-error` | `#ff6b6b` |
| `--border-default` | `#3a4a48` |
| `--border-error` | `#ff6b6b` |
| `--border-success` | `#7fd39a` |

Keep `--color-forest-ink`, `--color-charcoal-bark`, and other source colors available in dark mode where used for inverse panels or strong borders.

### Radius, Shadows, Spacing, Transitions, Elevation

- `--radius-sm`: `4px`
- `--radius-md`: `12px`
- `--radius-lg`: `24px`
- `--radius-pill`: `9999px`
- `--shadow-sm`: `rgba(9, 53, 45, 0.05) 0px 5px 6px -4px, rgba(174, 202, 197, 0.08) 0px 1px 1px 0.5px`
- `--shadow-md`: `rgba(8, 18, 17, 0.01) 0px 0px 16px -1px, rgba(8, 18, 17, 0.04) 0px 0px 0px 0.5px`
- `--shadow-subtle`: `rgb(202, 211, 210) 0px 0px 0px 0.5px inset`
- `--shadow-subtle-2`: `rgb(64, 68, 66) 0px 0px 0px 0.5px inset`
- `--shadow-subtle-3`: `rgb(224, 229, 229) 0px -0.5px 0px 0px inset`
- `--spacing-4`: `4px`
- `--spacing-8`: `8px`
- `--spacing-12`: `12px`
- `--spacing-16`: `16px`
- `--spacing-20`: `20px`
- `--spacing-24`: `24px`
- `--spacing-32`: `32px`
- `--spacing-40`: `40px`
- `--spacing-48`: `48px`
- `--spacing-52`: `52px`
- `--spacing-56`: `56px`
- `--spacing-60`: `60px`
- `--spacing-64`: `64px`
- `--spacing-72`: `72px`
- `--spacing-80`: `80px`
- `--spacing-100`: `100px`
- `--spacing-gap`: `8px`
- `--spacing-section`: `64px`
- `--spacing-card`: `20px`
- `--transition-fast`: `150ms ease`
- `--transition-normal`: `250ms ease`
- `--ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown`: `1000`
- `--z-modal`: `1050`
- `--z-toast`: `1100`

## 3. Typography

Use Google Fonts only:

- Inter, weights 400 and 500, for `--font-denim`
- IBM Plex Mono, weights 400 and 500, for `--font-muoto`
- JetBrains Mono, weight 400, for `--font-cinetype`

Bind them as:

- `--font-denim`: `"Inter", system-ui, sans-serif`
- `--font-muoto`: `"IBM Plex Mono", ui-monospace, monospace`
- `--font-cinetype`: `"JetBrains Mono", ui-monospace, monospace`

Apply `font-feature-settings: "liga" 0;` globally.

Use this type scale:

| Role | Family | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| caption | muoto | 400 | 11px | 1.38 | -0.132px |
| body | denim | 400 | 14px | 1.5 | 0.168px |
| body-lg | denim | 400 | 16px | 1.44 | 0.192px |
| subheading | denim | 500 | 18px | 1.4 | 0px |
| heading-sm | denim | 500 | 20px | 1.35 | 0px |
| heading | denim | 500 | 32px | 1.17 | 0px |
| display | denim | 500 | 48px | 1.11 | 0px |

Pairing rules:

- `denim` carries all readable information, body copy, headings, and UI text.
- `muoto` carries labels, axis ticks, tags, captions, and chrome, typically 11–13px and never above 14px.
- `cinetype` is reserved exclusively for uppercase decorative labels, axis titles, and stamp-like badges. Never use it in lowercase or sentence case.
- Never pair `cinetype` with `muoto` on the same line.
- Use `cinetype` at `+0.30em` letter-spacing for uppercase specimen-style labels.
- Use `muoto` at `-0.009em` to `-0.012em` tracking.
- Use `denim` at `+0.012em` tracking at body sizes and near-zero tracking at display sizes.

## 4. Layout & Responsiveness

- Build mobile-first using Flexbox. Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- Use responsive breakpoints and convert row layouts to columns on small viewports.
- Prevent horizontal scrolling at all widths.
- Use a full-bleed sage canvas. Content may use an implied maximum width of `1280px`, but data elements such as scatter points and axis labels may drift to canvas edges.
- Do not introduce a white page background anywhere. The sage canvas is structural.
- Use `64px` between sections, `8px` between inline elements, and `20px` inside cards.
- Keep the layout reading as a single instrument panel rather than stacked bands separated by background-color changes.

## 5. Component Specifications

### Button

Style all states through CSS classes:

- **Base:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` with a minimum touch target of `44x44px`.
- **Variants:** `.btn--primary` uses Moss fill with Forest Ink text; `.btn--secondary` uses transparent background with a `0.5px` Forest Ink inset border; `.btn--ghost` uses transparent background with Deep Fern text; `.btn--danger` uses a distinct red treatment in both light and dark themes.
- **Hover:** Visual shift through brightness or shadow, with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disable interactions, prevent double-clicks, and render a CSS spinner or animated Material Symbol without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, and `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles driven by `--text-success` or `--text-error`.
- Use Moss fill for at most one primary action in the initial viewport; use outlined or ghost variants elsewhere.

### Card

- **Base:** Flexible Flexbox layout, `--bg-card` background, `12px` radius, `20px` padding, `0.5px` inset hairline border in `--border-default`, no drop shadow.
- **Hover:** Subtle elevation shift or `transform: translateY(-2px)`.
- **Focus-within:** Highlight card borders when a child link or button receives focus.
- **Loading (Skeleton):** Shimmer animation defined in CSS to prevent layout jumps.
- **Empty State:** Structured fallback layout with a Material Symbol and clear guidance text.
- Feature, pricing, and testimonial cards must all inherit the base card and vary only through modifiers.

### Form & Input (if used)

Account for empty, focused, filled, valid, invalid, disabled, and read-only states. Structure each field as a flex container wrapping a label, input, and dedicated error feedback container. If a newsletter or contact form is included, implement all specified states.

### Modal / Popup (if used)

If any modal or popup is used, implement opening, open, loading, success/error, and closing states animated through CSS transitions. Include a centered flex container, backdrop overlay, Material Symbol close button, keyboard focus trapping, and closing via `Esc` or overlay click.

### Operate-Specific Components

- **Pill Tag:** `4px` radius, transparent or very light fill, `1px` border in Forest Ink or Lichen, `cinetype` at `12px`, weight 400, `+0.30em` letter-spacing, uppercase, Forest Ink text, padding `4px 10px`.
- **Floating Round Chip:** Forest Ink or Charcoal Bark background, Bone White text, `9999px` radius, padding `6px 12px`, `muoto` at `12px` weight 500. Position absolutely over data visualization.
- **Axis Bracket Label:** `muoto` at `12px` weight 500, Forest Ink text, leading bracket glyph such as `[ Chaos ]` or `[ Clarity ]`, tight `-0.01em` tracking. Use at top and bottom margins of major sections.
- **Timeline Node:** Bone White filled circle, `10px` diameter, `0.5px` Forest Ink border, connected by a `1px` Forest Ink hairline path.
- **Scatter Data Point:** Two states: hollow circle with `1px` Forest Ink stroke and transparent fill at `8px` diameter, and filled circle with Bone White or Emerald fill at `6–8px`. Optional inner dot for highlighted points. Always sit directly on the sage canvas; never place them on a card.
- **Hairline Section Divider:** `1px` or `0.5px` line in Lichen, often dotted. No heavy rules.
- **Dark Inverse Panel:** Charcoal Bark or `#1a191a` background, Bone White text, `12px` radius, `20px` padding, no shadows.
- **Version Stamp:** `muoto` at `11px`, Forest Ink text, rotated `90°`, positioned at the extreme left or right margin. Carries build date, section ID, or page version.

## 6. Page Sections & Content

Invent realistic fictional copy for all sections. Use Material Symbols where icons are needed.

### Hero

- Full-bleed sage canvas with a decorative scatter-plot layer of hollow and filled circles positioned absolutely and marked `aria-hidden="true"`.
- Top-left axis label: `[ Chaos ]`; top-right axis label: `[ Clarity ]`.
- A small Bone Card in the upper-right quadrant containing a short heading, one or two sentences, and a secondary action.
- A floating round chip in the lower-left quadrant, such as a “What’s new?” status ping.
- Main headline using `display` or `heading` size, a supporting `body-lg` paragraph, and a primary or outlined CTA depending on the global primary-action rule.
- Optional version stamp in the left or right margin.

### Features (3 Cards)

- Three feature cards in a responsive row.
- Each card includes a Material Symbol, `heading-sm` title, `body` description, and optional pill tag.
- Separate cards with hairlines rather than background-color changes.

### How It Works (3 Steps)

- Three steps connected by a timeline with nodes and hairline paths.
- Each step includes a step marker, `heading-sm` title, and `body` description.
- Convert horizontal timeline to a vertical timeline on small viewports.

### Testimonials

- Three testimonial cards in a responsive grid.
- Each includes a quote, name, role, and a simple monogram or Material Symbol avatar. Do not use human faces or lifestyle photography.

### Pricing (3 Tiers)

- Three pricing cards in a responsive row.
- Each includes tier name, price, feature list, and CTA.
- Highlight the recommended tier with a Forest Ink border and a pill tag labeled “Recommended.”
- Use outlined buttons for all pricing CTAs unless the global primary-action rule assigns the primary fill to this section.

### FAQ

- Five to six accessible accordion items.
- Use semantic disclosure elements or buttons with `aria-expanded` and `aria-controls`.
- Separate items with hairline dividers.

### Final CTA

- Use a Dark Inverse Panel for emphasis.
- Include a strong heading, supporting text, and one CTA.
- If this is the designated primary action, use the Moss-filled button; otherwise use an outlined button.

### Footer

- Secondary link columns, copyright text, version stamp, and the theme toggle.
- Top border as a hairline divider.
- Include a compact theme toggle in the footer utility row.

## 7. Interactions & Accessibility

- Implement theme toggling in `script.js` with `localStorage` persistence and `prefers-color-scheme` fallback.
- Implement FAQ accordion behavior in `script.js`.
- Add smooth CSS transitions to all state changes, respecting `prefers-reduced-motion`.
- Ensure sufficient contrast in both light and dark modes.
- Never rely solely on color to communicate state.
- Use semantic HTML5 elements, correct ARIA roles and labels, logical DOM and focus order, and full keyboard operability.
- Include an `aria-live="polite"` region for dynamic status feedback.
- Ensure every click, hover, or submission produces a visible state change.
- Keep destructive actions visually distinct in both themes.

## 8. Deliverables

- Deliver `index.html`, `style.css`, and `script.js`.
- No inline CSS.
- Use BEM naming consistently.
- Include Google Font and Material Symbols links in `index.html`.
- Do not use lorem-ipsum-only submissions where realistic copy can be invented; placeholders are allowed only where content is genuinely unspecified.
- Do not introduce new HTML elements, components, or DOM nodes if modifying existing markup; this prompt assumes a from-scratch build.
