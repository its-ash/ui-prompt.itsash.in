# Coding-AI Prompt: Ambrook-Themed Landing Page

## 1. Role & Objective
You are an expert front-end developer. Build a complete, responsive landing page in the **Ambrook** visual style — warm parchment canvas, ink-dark type, honey-amber primary accent, desaturated olive/wheat/bark palette, editorial typography with restrained weight-500 headlines, and documentary photography. **Invent a fictional brand name, product, and copy.** Never use the real brand name "Ambrook," its logo, trademarks, or product names anywhere in the page. Use only the visual language described below.

## 2. Architecture & Rules (Mandatory)

**2.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML. Target via class/ID selectors only. Keep HTML semantic and styling-agnostic.

**2.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)` for dark mode):
- Colors: `--color-parchment: #fcfaf1`, `--color-bone: #efe9e0`, `--color-pure-white: #ffffff`, `--color-loam: #c7bcaf`, `--color-bark: #96897b`, `--color-saddle: #50463c`, `--color-ink: #211b15`, `--color-charcoal-olive: #252a23`, `--color-deep-olive: #434f40`, `--color-sage: #7a9779`, `--color-honey-amber: #e8b672`, `--color-wheat: #f0c891`.
- Map to generic tokens: `--primary: var(--color-honey-amber)`, `--bg-primary: var(--color-parchment)`, `--bg-secondary: var(--color-bone)`, `--text-primary: var(--color-ink)`, `--text-secondary: var(--color-saddle)`, `--text-muted: var(--color-bark)`, `--border-default: var(--color-loam)`, `--border-strong: var(--color-ink)`, `--border-subtle: var(--color-bone)`.
- Contrast pairing: light backgrounds pair with dark text tokens; dark backgrounds (charcoal olive) pair with parchment text.
- Light mode background must be `#fcfaf1` (parchment), never pure white. Use `#fefefe` only where near-white is needed.
- Radius: `--radius-sm: 3.75px`, `--radius-md: 7.5px`, `--radius-pill: 9999px`.
- Spacing: `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-40: 40px`, `--spacing-60: 60px`, `--spacing-68: 68px`, `--spacing-120: 120px`.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`. No drop shadows anywhere — hierarchy via surface color and hairline borders only.

**2.3 Mandatory Dark Mode**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Invert parchment ↔ charcoal olive, ink ↔ parchment text, honey amber stays accent. Add a visible toggle with `aria-pressed`/`aria-label`. Persist choice via `localStorage`, falling back to `prefers-color-scheme`.

**2.4 Flexbox & Mobile-First**
- All layouts use `display: flex`. Default `align-items: center` on every flex container unless explicitly justified. Mobile-responsive: rows become columns on small viewports. No horizontal scroll.

**2.5 Framework**
- Use Tailwind CSS (or clean custom CSS with `@layer`/`@apply`). Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`). No mixed naming conventions — use BEM throughout.

**2.6 Typography & Icons**
- Google Fonts mandatory. Text: Lateral (substitute Inter), Lateral Display (substitute Source Serif Pro / Tiempos Text), Lateral Narrow (substitute Inter condensed). Bind to `--font-lateral`, `--font-lateral-display`, `--font-lateral-narrow`.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.
- Type scale tokens: `--text-caption: 11px`, `--text-eyebrow: 13px`, `--text-body: 15px`, `--text-body-lg: 17px`, `--text-subheading: 19px`, `--text-heading-sm: 30px`, `--text-heading: 38px`, `--text-heading-lg: 53px`, `--text-display: 68px`. Eyebrow: letter-spacing 0.058em, uppercase. Display headlines: weight 500, letter-spacing -0.011em, line-height 1.0–1.14.

## 3. Page Sections (Build All)

1. **Top Nav** — wordmark left, center links, Log In / Sign Up (ghost outline button) right. Minimal, no shadow.
2. **Hero** — parchment canvas. Eyebrow "ACCOUNTING SOFTWARE" style label → display headline (68px, weight 500) → subtext (17px, saddle) → email capture input (ink border, 3.75px radius, placeholder "Enter your email" in bark) with embedded amber submit button (arrow → after label) → trust signal row (flex, 8px gap, 13px ink, thin-stroke monochrome icons: "30-day free trial", "Live onboarding", "US-based support", "4.7 Trustpilot").
3. **Documentary Photo Collage** — 5–6 overlapping photos, 2–4px parchment border, slight rotation (-3° to +3°), no radius. Candid full-sun subjects (welder, rancher, trucker, farmer, mechanic). Use placeholder images.
4. **Features (3 cards)** — 3-column grid, each card: 1px bone border, no background, padding 45px 30px, monochrome line-art illustration (tractor/cow/crane style in ink stroke ~1.5px), industry/name label 15px weight 500 + → arrow. No shadows.
5. **How It Works (3 steps)** — numbered steps with eyebrow + heading + body, flex row on desktop, column on mobile.
6. **Testimonials** — centered quote, author name/role, subtle bone underline. No card backgrounds.
7. **Pricing (3 tiers)** — 3-column grid, middle tier highlighted with honey-amber border or bone background. Each: tier name eyebrow, price display, feature list with check icons, CTA button (primary for recommended, ghost for others).
8. **FAQ** — accordion with ink borders, expand/collapse via CSS/JS, chevron icon rotation.
9. **Final CTA** — centered headline + subtext + amber button.
10. **Footer** — bone background band, link columns, footer links (13px saddle, 1px bone underline, 15px row gap), secondary links.

## 4. Component State Requirements

**Buttons:**
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled, CSS spinner, no dimension distortion.
- Disabled: opacity 0.5, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.
- Primary: honey amber bg, ink text, 3.75px radius, 15px 30px padding, weight 500, arrow → after label. No shadow. Hover darkens amber.
- Ghost: transparent bg, 1px ink border, ink text, 3.75px radius, 9px 15px padding.

**Cards:** default flex layout, bone border, no shadow; hover `translateY(-2px)` + border shift; focus-within highlights border; skeleton shimmer; empty state with icon + guidance text.

**Forms/Inputs:** empty, focused (ink border, no color shift), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Modal:** opening/open/loading/success/error/closing animated; centered flex, backdrop, icon close button, Esc/overlay close, focus trap.

## 5. Core UX & Micro-Interactions (Global)
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes, never color-only state communication, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions where real copy is implied; placeholders only where genuinely unspecified.
- Use placeholder images (e.g., `https://placehold.co`) for documentary photos and product screenshots.

## 7. Edit Mode
Not applicable — this is a from-scratch build.

## 8. Output
Output only the three files' contents as instructed. No preamble.# Coding-AI Prompt: Ambrook-Themed Landing Page

## 1. Role & Objective
You are an expert front-end developer. Build a complete, responsive landing page in the **Ambrook** visual style — warm parchment canvas, ink-dark type, honey-amber primary accent, desaturated olive/wheat/bark palette, editorial typography with restrained weight-500 headlines, and documentary photography. **Invent a fictional brand name, product, and copy.** Never use the real brand name "Ambrook," its logo, trademarks, or product names anywhere in the page. Use only the visual language described below.

## 2. Architecture & Rules (Mandatory)

**2.1 CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML. Target via class/ID selectors only. Keep HTML semantic and styling-agnostic.

**2.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)` for dark mode):
- Colors: `--color-parchment: #fcfaf1`, `--color-bone: #efe9e0`, `--color-pure-white: #ffffff`, `--color-loam: #c7bcaf`, `--color-bark: #96897b`, `--color-saddle: #50463c`, `--color-ink: #211b15`, `--color-charcoal-olive: #252a23`, `--color-deep-olive: #434f40`, `--color-sage: #7a9779`, `--color-honey-amber: #e8b672`, `--color-wheat: #f0c891`.
- Map to generic tokens: `--primary: var(--color-honey-amber)`, `--bg-primary: var(--color-parchment)`, `--bg-secondary: var(--color-bone)`, `--text-primary: var(--color-ink)`, `--text-secondary: var(--color-saddle)`, `--text-muted: var(--color-bark)`, `--border-default: var(--color-loam)`, `--border-strong: var(--color-ink)`, `--border-subtle: var(--color-bone)`.
- Contrast pairing: light backgrounds pair with dark text tokens; dark backgrounds (charcoal olive) pair with parchment text.
- Light mode background must be `#fcfaf1` (parchment), never pure white. Use `#fefefe` only where near-white is needed.
- Radius: `--radius-sm: 3.75px`, `--radius-md: 7.5px`, `--radius-pill: 9999px`.
- Spacing: `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-40: 40px`, `--spacing-60: 60px`, `--spacing-68: 68px`, `--spacing-120: 120px`.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`. No drop shadows anywhere — hierarchy via surface color and hairline borders only.

**2.3 Mandatory Dark Mode**
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Invert parchment ↔ charcoal olive, ink ↔ parchment text, honey amber stays accent. Add a visible toggle with `aria-pressed`/`aria-label`. Persist choice via `localStorage`, falling back to `prefers-color-scheme`.

**2.4 Flexbox & Mobile-First**
- All layouts use `display: flex`. Default `align-items: center` on every flex container unless explicitly justified. Mobile-responsive: rows become columns on small viewports. No horizontal scroll.

**2.5 Framework**
- Use Tailwind CSS (or clean custom CSS with `@layer`/`@apply`). Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`). No mixed naming conventions — use BEM throughout.

**2.6 Typography & Icons**
- Google Fonts mandatory. Text: Lateral (substitute Inter), Lateral Display (substitute Source Serif Pro / Tiempos Text), Lateral Narrow (substitute Inter condensed). Bind to `--font-lateral`, `--font-lateral-display`, `--font-lateral-narrow`.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.
- Type scale tokens: `--text-caption: 11px`, `--text-eyebrow: 13px`, `--text-body: 15px`, `--text-body-lg: 17px`, `--text-subheading: 19px`, `--text-heading-sm: 30px`, `--text-heading: 38px`, `--text-heading-lg: 53px`, `--text-display: 68px`. Eyebrow: letter-spacing 0.058em, uppercase. Display headlines: weight 500, letter-spacing -0.011em, line-height 1.0–1.14.

## 3. Page Sections (Build All)

1. **Top Nav** — wordmark left, center links, Log In / Sign Up (ghost outline button) right. Minimal, no shadow.
2. **Hero** — parchment canvas. Eyebrow "ACCOUNTING SOFTWARE" style label → display headline (68px, weight 500) → subtext (17px, saddle) → email capture input (ink border, 3.75px radius, placeholder "Enter your email" in bark) with embedded amber submit button (arrow → after label) → trust signal row (flex, 8px gap, 13px ink, thin-stroke monochrome icons: "30-day free trial", "Live onboarding", "US-based support", "4.7 Trustpilot").
3. **Documentary Photo Collage** — 5–6 overlapping photos, 2–4px parchment border, slight rotation (-3° to +3°), no radius. Candid full-sun subjects (welder, rancher, trucker, farmer, mechanic). Use placeholder images.
4. **Features (3 cards)** — 3-column grid, each card: 1px bone border, no background, padding 45px 30px, monochrome line-art illustration (tractor/cow/crane style in ink stroke ~1.5px), industry/name label 15px weight 500 + → arrow. No shadows.
5. **How It Works (3 steps)** — numbered steps with eyebrow + heading + body, flex row on desktop, column on mobile.
6. **Testimonials** — centered quote, author name/role, subtle bone underline. No card backgrounds.
7. **Pricing (3 tiers)** — 3-column grid, middle tier highlighted with honey-amber border or bone background. Each: tier name eyebrow, price display, feature list with check icons, CTA button (primary for recommended, ghost for others).
8. **FAQ** — accordion with ink borders, expand/collapse via CSS/JS, chevron icon rotation.
9. **Final CTA** — centered headline + subtext + amber button.
10. **Footer** — bone background band, link columns, footer links (13px saddle, 1px bone underline, 15px row gap), secondary links.

## 4. Component State Requirements

**Buttons:**
- Default: flex, `align-items: center`, `justify-content: center`, gap 0.5rem, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disabled, CSS spinner, no dimension distortion.
- Disabled: opacity 0.5, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success`/`--text-error`.
- Primary: honey amber bg, ink text, 3.75px radius, 15px 30px padding, weight 500, arrow → after label. No shadow. Hover darkens amber.
- Ghost: transparent bg, 1px ink border, ink text, 3.75px radius, 9px 15px padding.

**Cards:** default flex layout, bone border, no shadow; hover `translateY(-2px)` + border shift; focus-within highlights border; skeleton shimmer; empty state with icon + guidance text.

**Forms/Inputs:** empty, focused (ink border, no color shift), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Modal:** opening/open/loading/success/error/closing animated; centered flex, backdrop, icon close button, Esc/overlay close, focus trap.

## 5. Core UX & Micro-Interactions (Global)
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes, never color-only state communication, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 6. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point.
- BEM naming convention throughout.
- No lorem-ipsum-only submissions where real copy is implied; placeholders only where genuinely unspecified.
- Use placeholder images (e.g., `https://placehold.co`) for documentary photos and product screenshots.

## 7. Edit Mode
Not applicable — this is a from-scratch build.

## 8. Output
Output only the three files' contents as instructed. No preamble.
