You are a senior front-end engineer. Build a complete, production-ready landing page for a **fictional brand** (invent a brand name, product name, and all copy — never use "Apple", Apple trademarks, logos, product names, or any real Apple property). The visual language must follow the Apple España style reference below, reusing only the style, never the brand.

## Deliverables
- Separate `index.html`, `style.css`, `script.js` files.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- No inline CSS (`style="..."` forbidden). All styling in `style.css` via class/ID selectors.
- One consistent class-naming convention (BEM) throughout. Never mix conventions.
- Use Tailwind CSS via CDN plus custom CSS driven by `@layer`/`@apply` where useful; all utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## CSS-First Architecture & Theme Tokens
Define all visual tokens in `:root` and a `.dark` class plus `@media (prefers-color-scheme: dark)`. Required variables:
- Colors: `--primary` (#0071e3), `--secondary` (#0066cc), `--bg-primary` (#f5f5f7), `--bg-secondary` (#ffffff), `--text-primary` (#1d1d1f), `--text-secondary` (#707070), `--text-success` (#03aa49), `--text-error` (#ed6300), `--border-default` (#d6d6d6), `--border-error` (#ed6300), `--border-success` (#03aa49), plus accent tokens `--color-iris-violet` (#8668ff), `--color-deep-teal` (#00a1b3), `--color-concrete` (#e2e2e5), `--color-smoke` (#777779), `--color-slate` (#333336), `--color-absolute` (#000000).
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- Light mode background must not be pure white; use #f5f5f7 canvas and #fefefe where near-white is needed.
- Radius: `--radius-sm` (10px), `--radius-md` (28px), `--radius-lg` (980px).
- Shadows: `--shadow-sm`, `--shadow-md` (defined but cards/buttons use none — tonal contrast only).
- Spacing: `--spacing-gap` (10px), plus scale tokens `--spacing-4`…`--spacing-160` per spec.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

## Mandatory Dark Mode
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark`.
- Theme switching must not require HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

## Typography & Icons
- Google Fonts only: Inter (substitute for SF Pro) via `<link>`/`@import`, bound to `--font-base` (SF Pro Text role) and `--font-display` (SF Pro Display role). Load weights 400, 600, 700.
- Google Material Symbols/Icons only. No raw inline SVGs or local icon files.
- Type scale tokens `--text-caption`…`--text-display` per spec, with tight letter-spacing and line-heights.

## Flexbox & Mobile-First
- All layouts use Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-first responsive; convert rows to columns on small viewports; prevent horizontal scrolling.

## Component States (enforce for all interactive elements)
- Buttons: default, hover (brightness/shadow + cursor pointer), focus (distinct focus ring via CSS vars), active (scale 0.97), loading (disabled, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, not-allowed), success/error (temp feedback via `--text-success`/`--text-error`).
- Cards: default, hover (translateY(-2px)), focus-within, loading skeleton (shimmer), empty state (icon + guidance text).
- Forms/inputs: empty, focused, filled, valid, invalid, disabled, read-only; flex wrapper with label, input, error container.
- Modals: opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## Core UX Rules
- Responsive by default, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## Page Sections (in this order)
1. **Promo Banner** — thin announcement strip above nav, centered single line, dismissible.
2. **Global Nav Bar** — sticky, 44px, backdrop blur 60% white, hairline bottom border, logo + links + search/bag icons.
3. **Hero** — full-bleed cinematic, ~85vh, bottom-left editorial text cluster: eyebrow label (icon + ALL-CAPS 12px/600, 3px gap), headline (SF Pro Display 40-56px/600 white, tight tracking, ending with period), CTA cluster with primary pill button + pricing chip.
4. **Features** — 3 product feature cards on #f5f5f7, white surface, 28px radius, no shadow, tonal contrast.
5. **How It Works** — 3 steps, vertical stack of icon-pills or split layout.
6. **Testimonials** — cards on #f5f5f7.
7. **Pricing** — 3 tiers.
8. **FAQ** — accordion rows (28px radius pills, active state dark fill).
9. **Final CTA** — section with headline ending in period + primary button.
10. **Footer** — minimal, single column, centered, secondary links.

## Style Directives (Apple España)
- Canvas #f5f5f7, card surface #ffffff, border #d6d6d6, link #0066cc, primary action #0071e3 filled.
- Section headlines: SF Pro Display 48-56px/600 #1d1d1f, letter-spacing -0.005em, left-aligned, ending with a period.
- Body: SF Pro Text 17px/400 #1d1d1f, line-height 1.47; secondary 14px.
- Radius: 28px for cards/accordions/chips; 980px only for pill buttons; 10px for links.
- No drop shadows anywhere — tonal contrast only.
- No #000000 body text; use #1d1d1f.
- Activity-ring accents (green/orange/violet/teal) decorative only, never CTA.
- Never end a headline without a period; never use question marks.
- Never use #0066cc as button fill.
- Never border-radius below 10px or above 28px for containers.
- Keep body paragraphs to a single 17px sentence per line.
- Google Fonts substitute Inter for SF Pro.

## Edit/Behavior Notes
- No JavaScript for form validation, popups/modals, or utility helpers unless essential for theme toggle and accordion; ask before adding. Theme toggle + accordion open/close + FAQ toggle are permitted as minimal JS.
- No new HTML elements beyond those needed; clarify before assuming.

## Output
Output only the finished prompt itself, no preamble or closing commentary. Mirror numbered headers and bolded sub-rules. All copy in English (convert any non-English source copy to English). All CSS variables, class names, file names in English/ASCII.You are a senior front-end engineer. Build a complete, production-ready landing page for a **fictional brand** (invent a brand name, product name, and all copy — never use "Apple", Apple trademarks, logos, product names, or any real Apple property). The visual language must follow the Apple España style reference below, reusing only the style, never the brand.

## Deliverables
- Separate `index.html`, `style.css`, `script.js` files.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- No inline CSS (`style="..."` forbidden). All styling in `style.css` via class/ID selectors.
- One consistent class-naming convention (BEM) throughout. Never mix conventions.
- Use Tailwind CSS via CDN plus custom CSS driven by `@layer`/`@apply` where useful; all utility classes must map back to CSS variables or reusable class names (`.btn`, `.card`, `.input-group`).

## CSS-First Architecture & Theme Tokens
Define all visual tokens in `:root` and a `.dark` class plus `@media (prefers-color-scheme: dark)`. Required variables:
- Colors: `--primary` (#0071e3), `--secondary` (#0066cc), `--bg-primary` (#f5f5f7), `--bg-secondary` (#ffffff), `--text-primary` (#1d1d1f), `--text-secondary` (#707070), `--text-success` (#03aa49), `--text-error` (#ed6300), `--border-default` (#d6d6d6), `--border-error` (#ed6300), `--border-success` (#03aa49), plus accent tokens `--color-iris-violet` (#8668ff), `--color-deep-teal` (#00a1b3), `--color-concrete` (#e2e2e5), `--color-smoke` (#777779), `--color-slate` (#333336), `--color-absolute` (#000000).
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
- Light mode background must not be pure white; use #f5f5f7 canvas and #fefefe where near-white is needed.
- Radius: `--radius-sm` (10px), `--radius-md` (28px), `--radius-lg` (980px).
- Shadows: `--shadow-sm`, `--shadow-md` (defined but cards/buttons use none — tonal contrast only).
- Spacing: `--spacing-gap` (10px), plus scale tokens `--spacing-4`…`--spacing-160` per spec.
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

## Mandatory Dark Mode
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark`.
- Theme switching must not require HTML restructuring.
- Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed`/`aria-label`.

## Typography & Icons
- Google Fonts only: Inter (substitute for SF Pro) via `<link>`/`@import`, bound to `--font-base` (SF Pro Text role) and `--font-display` (SF Pro Display role). Load weights 400, 600, 700.
- Google Material Symbols/Icons only. No raw inline SVGs or local icon files.
- Type scale tokens `--text-caption`…`--text-display` per spec, with tight letter-spacing and line-heights.

## Flexbox & Mobile-First
- All layouts use Flexbox (`display: flex`).
- Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-first responsive; convert rows to columns on small viewports; prevent horizontal scrolling.

## Component States (enforce for all interactive elements)
- Buttons: default, hover (brightness/shadow + cursor pointer), focus (distinct focus ring via CSS vars), active (scale 0.97), loading (disabled, CSS spinner, no dimension distortion), disabled (opacity 0.5, greyscale, not-allowed), success/error (temp feedback via `--text-success`/`--text-error`).
- Cards: default, hover (translateY(-2px)), focus-within, loading skeleton (shimmer), empty state (icon + guidance text).
- Forms/inputs: empty, focused, filled, valid, invalid, disabled, read-only; flex wrapper with label, input, error container.
- Modals: opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## Core UX Rules
- Responsive by default, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## Page Sections (in this order)
1. **Promo Banner** — thin announcement strip above nav, centered single line, dismissible.
2. **Global Nav Bar** — sticky, 44px, backdrop blur 60% white, hairline bottom border, logo + links + search/bag icons.
3. **Hero** — full-bleed cinematic, ~85vh, bottom-left editorial text cluster: eyebrow label (icon + ALL-CAPS 12px/600, 3px gap), headline (SF Pro Display 40-56px/600 white, tight tracking, ending with period), CTA cluster with primary pill button + pricing chip.
4. **Features** — 3 product feature cards on #f5f5f7, white surface, 28px radius, no shadow, tonal contrast.
5. **How It Works** — 3 steps, vertical stack of icon-pills or split layout.
6. **Testimonials** — cards on #f5f5f7.
7. **Pricing** — 3 tiers.
8. **FAQ** — accordion rows (28px radius pills, active state dark fill).
9. **Final CTA** — section with headline ending in period + primary button.
10. **Footer** — minimal, single column, centered, secondary links.

## Style Directives (Apple España)
- Canvas #f5f5f7, card surface #ffffff, border #d6d6d6, link #0066cc, primary action #0071e3 filled.
- Section headlines: SF Pro Display 48-56px/600 #1d1d1f, letter-spacing -0.005em, left-aligned, ending with a period.
- Body: SF Pro Text 17px/400 #1d1d1f, line-height 1.47; secondary 14px.
- Radius: 28px for cards/accordions/chips; 980px only for pill buttons; 10px for links.
- No drop shadows anywhere — tonal contrast only.
- No #000000 body text; use #1d1d1f.
- Activity-ring accents (green/orange/violet/teal) decorative only, never CTA.
- Never end a headline without a period; never use question marks.
- Never use #0066cc as button fill.
- Never border-radius below 10px or above 28px for containers.
- Keep body paragraphs to a single 17px sentence per line.
- Google Fonts substitute Inter for SF Pro.

## Edit/Behavior Notes
- No JavaScript for form validation, popups/modals, or utility helpers unless essential for theme toggle and accordion; ask before adding. Theme toggle + accordion open/close + FAQ toggle are permitted as minimal JS.
- No new HTML elements beyond those needed; clarify before assuming.

## Output
Output only the finished prompt itself, no preamble or closing commentary. Mirror numbered headers and bolded sub-rules. All copy in English (convert any non-English source copy to English). All CSS variables, class names, file names in English/ASCII.
