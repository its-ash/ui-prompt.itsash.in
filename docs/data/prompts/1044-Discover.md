# UI/UX Coding Prompt — Discover Landing Page

You are a senior front-end engineer. Build a complete, responsive landing page using the "Discover" visual theme described below. Invent a fictional brand name, product, and copy — never use "Fonts Ninja", "Aeonik", or any real brand/trademark; substitute the typeface with Inter (Google Fonts). Deliver separate `index.html`, `style.css`, and `script.js` files. No inline `style="..."` attributes anywhere.

## 1. CSS-First Architecture & Tokens
- All styling lives in `style.css`. HTML stays semantic and class-driven.
- Define all tokens in `:root` and a `.dark` class, plus `@media (prefers-color-scheme: dark)`. Dark mode is mandatory; persist choice in `localStorage` with a visible toggle (`aria-pressed`, `aria-label`), falling back to `prefers-color-scheme`.
- Required color tokens (light): `--color-ink: #121212`, `--color-canvas: #ffffff`, `--color-fog: #dbdada`, `--color-slate: #8e8e93`, `--color-obsidian: #000000`, `--color-signal-coral: #ee585a`. Map to generic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, etc. Light bg must not be pure white where a near-white is needed — use `#fefefe` for any white/near-white surface token. Dark mode must re-pair light bg with dark text and dark bg with light text.
- Radius/shadow/spacing/transition tokens: `--radius-sm`, `--radius-md`, `--radius-lg` (32px for cards/buttons), `--shadow-sm`, `--shadow-md` (single shadow `rgba(72,72,74,0.16) 0px 2px 32px 0px`), `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: Google Font Inter (weights 400/500/700) bound to `--font-base`, letter-spacing `-0.011em` globally. Type scale tokens: `--text-caption` 12px, `--text-body-sm` 14px, `--text-body` 16px, `--text-subheading` 24px, `--text-heading-sm` 32px, `--text-heading` 44px, `--text-display` 120px. Line heights 1.0–1.5.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 2. Layout & Responsiveness
- Flexbox-first, mobile-first. Every flex container defaults to `align-items: center`. Convert rows to columns on small viewports; no horizontal scroll.
- Page max-width 1320px centered. Section gap 48px. Card padding 24px. Element gap 10px. Spacing scale: 6/8/10/16/24/32/48/56/66px.
- 3-column responsive grid for feature/testimonial/pricing cards, 24px gutters.

## 3. Component States (enforce all)
- Buttons: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow, pointer), focus (ring via tokens), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (coral/ink feedback).
- Cards: default (flex, subtle border, elevation), hover (translateY -2px), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance).
- Forms/inputs: empty, focused, filled, valid, invalid, disabled, read-only with error container.
- Modals: opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, Esc/overlay close, focus trap.

## 4. Theme Visual Rules
- Near-monochrome: ink-on-paper UI; Signal Coral `#ee585a` only for filled CTAs, inline text links, notification dot, floating filter pill. Never as background wash or large surface.
- 32px border-radius on cards, buttons, containers. Sharp corners forbidden.
- Single shadow token only on cards and floating elements. No text/nav/inline shadows.
- Ink `#121212` for all text/borders (never pure `#000000` for body text).
- Tight `-0.011em` tracking on all type.
- No gradients, textures, decorative imagery. Typographic specimens dominate.

## 5. Sections to Build
Hero (monumental wordmark ~120px, notification dot, body paragraph with coral inline link), Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 6. Accessibility & UX
- Semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback. Sufficient contrast both modes. Never rely on color alone. Respect `prefers-reduced-motion`. Smooth transitions via `var(--transition-normal)`.

## 7. Deliverables
- `index.html`, `style.css`, `script.js`. Consistent class naming (BEM). No lorem-ipsum where real copy fits; placeholders only where unspecified. No new elements beyond existing structure if editing.

Output only the finished prompt.# UI/UX Coding Prompt — Discover Landing Page

You are a senior front-end engineer. Build a complete, responsive landing page using the "Discover" visual theme described below. Invent a fictional brand name, product, and copy — never use "Fonts Ninja", "Aeonik", or any real brand/trademark; substitute the typeface with Inter (Google Fonts). Deliver separate `index.html`, `style.css`, and `script.js` files. No inline `style="..."` attributes anywhere.

## 1. CSS-First Architecture & Tokens
- All styling lives in `style.css`. HTML stays semantic and class-driven.
- Define all tokens in `:root` and a `.dark` class, plus `@media (prefers-color-scheme: dark)`. Dark mode is mandatory; persist choice in `localStorage` with a visible toggle (`aria-pressed`, `aria-label`), falling back to `prefers-color-scheme`.
- Required color tokens (light): `--color-ink: #121212`, `--color-canvas: #ffffff`, `--color-fog: #dbdada`, `--color-slate: #8e8e93`, `--color-obsidian: #000000`, `--color-signal-coral: #ee585a`. Map to generic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, etc. Light bg must not be pure white where a near-white is needed — use `#fefefe` for any white/near-white surface token. Dark mode must re-pair light bg with dark text and dark bg with light text.
- Radius/shadow/spacing/transition tokens: `--radius-sm`, `--radius-md`, `--radius-lg` (32px for cards/buttons), `--shadow-sm`, `--shadow-md` (single shadow `rgba(72,72,74,0.16) 0px 2px 32px 0px`), `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: Google Font Inter (weights 400/500/700) bound to `--font-base`, letter-spacing `-0.011em` globally. Type scale tokens: `--text-caption` 12px, `--text-body-sm` 14px, `--text-body` 16px, `--text-subheading` 24px, `--text-heading-sm` 32px, `--text-heading` 44px, `--text-display` 120px. Line heights 1.0–1.5.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 2. Layout & Responsiveness
- Flexbox-first, mobile-first. Every flex container defaults to `align-items: center`. Convert rows to columns on small viewports; no horizontal scroll.
- Page max-width 1320px centered. Section gap 48px. Card padding 24px. Element gap 10px. Spacing scale: 6/8/10/16/24/32/48/56/66px.
- 3-column responsive grid for feature/testimonial/pricing cards, 24px gutters.

## 3. Component States (enforce all)
- Buttons: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow, pointer), focus (ring via tokens), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (coral/ink feedback).
- Cards: default (flex, subtle border, elevation), hover (translateY -2px), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance).
- Forms/inputs: empty, focused, filled, valid, invalid, disabled, read-only with error container.
- Modals: opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, Esc/overlay close, focus trap.

## 4. Theme Visual Rules
- Near-monochrome: ink-on-paper UI; Signal Coral `#ee585a` only for filled CTAs, inline text links, notification dot, floating filter pill. Never as background wash or large surface.
- 32px border-radius on cards, buttons, containers. Sharp corners forbidden.
- Single shadow token only on cards and floating elements. No text/nav/inline shadows.
- Ink `#121212` for all text/borders (never pure `#000000` for body text).
- Tight `-0.011em` tracking on all type.
- No gradients, textures, decorative imagery. Typographic specimens dominate.

## 5. Sections to Build
Hero (monumental wordmark ~120px, notification dot, body paragraph with coral inline link), Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 6. Accessibility & UX
- Semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback. Sufficient contrast both modes. Never rely on color alone. Respect `prefers-reduced-motion`. Smooth transitions via `var(--transition-normal)`.

## 7. Deliverables
- `index.html`, `style.css`, `script.js`. Consistent class naming (BEM). No lorem-ipsum where real copy fits; placeholders only where unspecified. No new elements beyond existing structure if editing.
