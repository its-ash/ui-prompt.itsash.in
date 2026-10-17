Generate a complete, production-ready landing page for a fictional payments brand inspired by the Mollie style reference. Do NOT use the name "Mollie" or any of its trademarks, logos, or product names anywhere in the page — invent an original fictional brand name, product name, and copy. Build a single-page site with these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable.

CSS-First Architecture & Zero Inline CSS: keep all styling strictly inside `style.css`. Forbid the `style="..."` attribute in HTML. Target all design properties, layout rules, and states via class or ID selectors. Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS only.

CSS Variables & Theme Tokens: store all visual tokens inside `:root` and theme classes. Required color tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Map the Mollie palette into these tokens plus the reference tokens (`--color-paper`, `--color-ink`, `--color-near-black`, `--color-quiet-graphite`, `--color-soft-gray`, `--color-oat-surface`, `--color-ledger-brown`, `--color-espresso-panel`, `--color-copper-link`, `--color-terracotta-disc`, `--color-active-green`, `--color-active-green-surface`, `--color-pending-ochre`, `--color-expiry-red`, `--color-harbor-depth-gradient`). Enforce contrast pairing for every theme: light backgrounds pair with dark text, dark backgrounds pair with light text. Light mode background must not be pure white; use `#fefefe` where a near-white is needed. Radius/shadow tokens: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`. Spacing/transition tokens: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation tokens: `--z-dropdown`, `--z-modal`, `--z-toast`.

Mandatory Dark Mode: define dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Switch background/text variables seamlessly without HTML restructuring. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

Flexbox Layout & Mobile-First: build all layouts with Flexbox. Every flex container must default to `align-items: center` unless an explicitly justified exception exists. All flex layouts must be mobile-responsive (rows convert to columns on small viewports). Prevent horizontal scrolling.

Framework: use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. Map all utility classes back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

Typography & Icons: strictly Google Fonts for text and icons. Text fonts: Inter (400, 500, 600, 700) and IBM Plex Mono (400, 500), loaded via `<link>`/`@import` and bound to `--font-base`/`--font-mono`. Use Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files. Adamina is not available on Google Fonts; use Georgia, serif as the substitute for testimonial copy.

Type scale tokens to define: `--text-media-label` (IBM Plex Mono 400, 11px, 1.0 line-height, 0.11px tracking), `--text-body` (Inter 400, 13px, 1.3 line-height, -0.325px tracking), `--text-eyebrow` (IBM Plex Mono 500, 13px, 1.3 line-height, 0 tracking), `--text-nav` (Inter 500, 14px, 1.3 line-height, -0.322px tracking), `--text-testimonial` (Georgia 400, 16px, 1.3 line-height, -0.096px tracking), `--text-section-heading` (Inter 600, 18px, 1.4 line-height, -0.396px tracking), `--text-display` (Inter 400, 82px, 1.0 line-height, -2.378px tracking). Apply OpenType features `"cv02", "cv03", "cv04", "cv08", "cv10", "cv12", "cv13", "dlig", "ss03"` to Inter display/variable usage.

Spacing & shapes: base unit 4px. Spacing scale tokens `--spacing-4` (4px), `--spacing-8` (8px), `--spacing-12` (12px), `--spacing-16` (16px), `--spacing-20` (20px), `--spacing-24` (24px), `--spacing-32` (32px), `--spacing-36` (36px), `--spacing-40` (40px), `--spacing-56` (56px), `--spacing-60` (60px), `--spacing-80` (80px), `--spacing-100` (100px), `--spacing-120` (120px). Border radius: cards 16px, links 32px, media 24px, pills 9999px, badges 9999px, images 16px, buttons 9999px, icon controls 28px. Shadows: subtle `rgb(245, 242, 240) 0px 0px 0px 1px`, subtle-2 through subtle-4 as inset white highlights. Section gap 32px, card padding 40px, element gap 10px. Avoid floating-card elevation; separate light surfaces through Oat Surface fills, 16px corners, and occasional 1px #f5f2f0 outlines; dark buttons use a faint inset white highlight rather than a cast shadow.

Component specifications to enforce:

Public Navigation Bar: 54px-high Paper bar, wordmark left, Inter 14px/500 nav links at 18.2px line-height and -0.32px tracking, Ledger Brown 9999px sign-up pill right. Include theme toggle.

Display Hero: Ink Inter Variable display at 82px/400, 82px line-height, -2.4px tracking. Supporting paragraph Quiet Graphite Inter 16px/400 at 20.8px line-height and -0.4px tracking. Content above a wide 16px-radius photo/payment demonstration. Ledger Brown and Oat Surface pill buttons.

Monospace Eyebrow: IBM Plex Mono 13px/500 uppercase, 16.9px line-height, Ink on light surfaces. Media labels IBM Plex Mono 11px/400 uppercase, 11px line-height, +0.11px tracking, Paper.

Ledger Brown Pill Button: Ledger Brown background, Paper label, 9999px radius, 16px 24px padding, Inter 16px/500, 19.2px line-height, -0.2px tracking, subtle inset top highlight `rgba(255, 255, 255, 0.08) 0 1px 0`.

Oat Surface Pill Button: Oat Surface background, Ink text, 9999px radius, 16px 24px padding, Inter 16px/500, 19.2px line-height, -0.2px tracking.

Product Category Cell: Paper grid cell, fine #f7f4f1 separator, 22px padding all sides, small monochrome line icon + compact Ink text, two rows of five equal cells inside a lightly rounded 16px outer frame.

Cream Product Feature Card: Oat Surface, 16px radius, no shadow, 40px top padding. IBM Plex Mono uppercase category label, Ink product title, Copper Link inline link, product imagery anchored at card bottom.

Espresso Product Demo Card: Espresso Panel, 16px radius, no shadow. Paper interface chrome/transactional data/small controls. IBM Plex Mono 11px/400 uppercase labels. Positive-state text in Active Green.

Hero Media Frame: natural-color payment photography in contained 16px-radius frame. Small Paper or translucent dark controls without external drop shadows. Dark media may carry IBM Plex Mono 11px uppercase labels.

Payment Approval Toast: compact rounded dark overlay over imagery, small outlined approval icon, Paper text, visually secondary to photo, same dark espresso family.

Customer Story Carousel Card: contained 16px-radius customer photo, centered brand mark, Adamina (Georgia substitute) 16px/400 testimonial at 20.8px line-height. Isolated circular arrow controls with 28px radius over media.

Status Label: Active Green for active states, Pending Ochre for setup/forthcoming, Expiry Red for expired. Compact; optional Active Green Surface dot.

Terracotta Graphic Disc: #d66733 circular surface, 50% radius, no shadow, large isolated visual punctuation only.

Button component states (via CSS classes): Default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target); Hover (brightness/shadow shift, cursor pointer); Focus (distinct focus ring via CSS variables); Active/Pressed (transform scale 0.97); Loading (disable interactions, prevent double-clicks, CSS spinner or animated Google Icon without distorting dimensions); Disabled (opacity 0.5, greyscale, cursor not-allowed); Success/Error (temporary feedback via --text-success/--text-error).

Card component states (if interactive): Default (flex layout, subtle borders/elevation via --bg-secondary and CSS variables); Hover (elevation/shadow shift or translateY(-2px)); Focus-within (highlight card borders when child link/button receives focus); Loading (skeleton shimmer animation in CSS, no layout jumps); Empty State (structured fallback with Google Icon and clear guidance text).

Form & Input (for any inputs, e.g. email capture/FAQ search): states Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input field, dedicated error feedback container.

Modal/Popup (if used): states Opening, Open, Loading, Success/Error, Closing (CSS transitions). Centered flex container (align-items center), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

Core UX & micro-interactions: responsive by default, fluid sizing, responsive breakpoints, no horizontal overflow. Smooth animations via CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`. Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback (form errors, toasts, loading). Mandatory visual feedback on every click/hover/submission. Destructive actions visually distinct in both themes.

Do's: Paper as dominant canvas; Oat Surface for contained cards and secondary pill controls. Display headlines Inter Variable 82px/400, 82px line-height, -2.4px tracking. IBM Plex Mono uppercase labels 13px/500, 16.9px line-height above product/media content. Ledger Brown only for filled public pill buttons with 9999px radius and 16px 24px padding. Product cards and media frames 16px radius; 24px only for larger image/media treatments. Copper Link for inline product-card links and small commerce-oriented highlights. Default page rhythm on 4px base unit, 10px element gaps, 32px section gaps.

Don'ts: no blue #0040ff or browser-default #0000ee as brand/button color. Do not turn Ledger Brown filled treatment into a square button; conversion controls use 9999px radius. No heavy outer drop shadows on cards; no shadow, rely on Oat Surface fills, borders, rounded media. Do not use bold 600-700 for 82px display; retain Inter Variable 400. Do not replace IBM Plex Mono uppercase labels with Inter body text. Do not apply Terracotta Disc as broad page background or universal action color. Do not use status colors outside compact payment/account-state contexts.

Imagery: central and product-adjacent — hands using phones, countertop terminals, retail environments, customer scenes as warm natural-color crops. Wide, contained, softly rounded at 16px, with occasional dark translucent payment overlays or circular arrow controls on the image. Text-led between media moments; customer logos and sparse monochrome line icons for non-photographic layer. Dark product demonstrations use realistic interface fragments, data, device screens.

Layout: white full-bleed editorial composition, fixed-height top nav, generous unruled white space around opening message. Hero: wide text composition — oversized left-aligned headline, narrower explanatory/conversion block to the right, then broad contained payment photograph with 16px corners. Product content moves through dark horizontal media selector, centered customer-logo strip, two-row five-column payment-capability grid, then paired cream feature cards. Customer stories: wide three-panel horizontal carousel, image-first cards, centered quote text below. Large dark product-media sections follow; footer returns to dense multi-link structure.

All user-facing copy must be in English. Use placeholder image URLs (e.g. https://placehold.co) for photography, never real brand assets. Invent a fictional brand name, product name, and all copy. Never use "Mollie" or its trademarks.

No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content genuinely unspecified.

Output only the finished prompt itself, no preamble or closing commentary. Mirror the structure of numbered headers with bolded sub-rules.Generate a complete, production-ready landing page for a fictional payments brand inspired by the Mollie style reference. Do NOT use the name "Mollie" or any of its trademarks, logos, or product names anywhere in the page — invent an original fictional brand name, product name, and copy. Build a single-page site with these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) across the entire deliverable.

CSS-First Architecture & Zero Inline CSS: keep all styling strictly inside `style.css`. Forbid the `style="..."` attribute in HTML. Target all design properties, layout rules, and states via class or ID selectors. Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS only.

CSS Variables & Theme Tokens: store all visual tokens inside `:root` and theme classes. Required color tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Map the Mollie palette into these tokens plus the reference tokens (`--color-paper`, `--color-ink`, `--color-near-black`, `--color-quiet-graphite`, `--color-soft-gray`, `--color-oat-surface`, `--color-ledger-brown`, `--color-espresso-panel`, `--color-copper-link`, `--color-terracotta-disc`, `--color-active-green`, `--color-active-green-surface`, `--color-pending-ochre`, `--color-expiry-red`, `--color-harbor-depth-gradient`). Enforce contrast pairing for every theme: light backgrounds pair with dark text, dark backgrounds pair with light text. Light mode background must not be pure white; use `#fefefe` where a near-white is needed. Radius/shadow tokens: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`. Spacing/transition tokens: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation tokens: `--z-dropdown`, `--z-modal`, `--z-toast`.

Mandatory Dark Mode: define dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Switch background/text variables seamlessly without HTML restructuring. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

Flexbox Layout & Mobile-First: build all layouts with Flexbox. Every flex container must default to `align-items: center` unless an explicitly justified exception exists. All flex layouts must be mobile-responsive (rows convert to columns on small viewports). Prevent horizontal scrolling.

Framework: use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`) unless another framework is requested. Map all utility classes back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

Typography & Icons: strictly Google Fonts for text and icons. Text fonts: Inter (400, 500, 600, 700) and IBM Plex Mono (400, 500), loaded via `<link>`/`@import` and bound to `--font-base`/`--font-mono`. Use Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files. Adamina is not available on Google Fonts; use Georgia, serif as the substitute for testimonial copy.

Type scale tokens to define: `--text-media-label` (IBM Plex Mono 400, 11px, 1.0 line-height, 0.11px tracking), `--text-body` (Inter 400, 13px, 1.3 line-height, -0.325px tracking), `--text-eyebrow` (IBM Plex Mono 500, 13px, 1.3 line-height, 0 tracking), `--text-nav` (Inter 500, 14px, 1.3 line-height, -0.322px tracking), `--text-testimonial` (Georgia 400, 16px, 1.3 line-height, -0.096px tracking), `--text-section-heading` (Inter 600, 18px, 1.4 line-height, -0.396px tracking), `--text-display` (Inter 400, 82px, 1.0 line-height, -2.378px tracking). Apply OpenType features `"cv02", "cv03", "cv04", "cv08", "cv10", "cv12", "cv13", "dlig", "ss03"` to Inter display/variable usage.

Spacing & shapes: base unit 4px. Spacing scale tokens `--spacing-4` (4px), `--spacing-8` (8px), `--spacing-12` (12px), `--spacing-16` (16px), `--spacing-20` (20px), `--spacing-24` (24px), `--spacing-32` (32px), `--spacing-36` (36px), `--spacing-40` (40px), `--spacing-56` (56px), `--spacing-60` (60px), `--spacing-80` (80px), `--spacing-100` (100px), `--spacing-120` (120px). Border radius: cards 16px, links 32px, media 24px, pills 9999px, badges 9999px, images 16px, buttons 9999px, icon controls 28px. Shadows: subtle `rgb(245, 242, 240) 0px 0px 0px 1px`, subtle-2 through subtle-4 as inset white highlights. Section gap 32px, card padding 40px, element gap 10px. Avoid floating-card elevation; separate light surfaces through Oat Surface fills, 16px corners, and occasional 1px #f5f2f0 outlines; dark buttons use a faint inset white highlight rather than a cast shadow.

Component specifications to enforce:

Public Navigation Bar: 54px-high Paper bar, wordmark left, Inter 14px/500 nav links at 18.2px line-height and -0.32px tracking, Ledger Brown 9999px sign-up pill right. Include theme toggle.

Display Hero: Ink Inter Variable display at 82px/400, 82px line-height, -2.4px tracking. Supporting paragraph Quiet Graphite Inter 16px/400 at 20.8px line-height and -0.4px tracking. Content above a wide 16px-radius photo/payment demonstration. Ledger Brown and Oat Surface pill buttons.

Monospace Eyebrow: IBM Plex Mono 13px/500 uppercase, 16.9px line-height, Ink on light surfaces. Media labels IBM Plex Mono 11px/400 uppercase, 11px line-height, +0.11px tracking, Paper.

Ledger Brown Pill Button: Ledger Brown background, Paper label, 9999px radius, 16px 24px padding, Inter 16px/500, 19.2px line-height, -0.2px tracking, subtle inset top highlight `rgba(255, 255, 255, 0.08) 0 1px 0`.

Oat Surface Pill Button: Oat Surface background, Ink text, 9999px radius, 16px 24px padding, Inter 16px/500, 19.2px line-height, -0.2px tracking.

Product Category Cell: Paper grid cell, fine #f7f4f1 separator, 22px padding all sides, small monochrome line icon + compact Ink text, two rows of five equal cells inside a lightly rounded 16px outer frame.

Cream Product Feature Card: Oat Surface, 16px radius, no shadow, 40px top padding. IBM Plex Mono uppercase category label, Ink product title, Copper Link inline link, product imagery anchored at card bottom.

Espresso Product Demo Card: Espresso Panel, 16px radius, no shadow. Paper interface chrome/transactional data/small controls. IBM Plex Mono 11px/400 uppercase labels. Positive-state text in Active Green.

Hero Media Frame: natural-color payment photography in contained 16px-radius frame. Small Paper or translucent dark controls without external drop shadows. Dark media may carry IBM Plex Mono 11px uppercase labels.

Payment Approval Toast: compact rounded dark overlay over imagery, small outlined approval icon, Paper text, visually secondary to photo, same dark espresso family.

Customer Story Carousel Card: contained 16px-radius customer photo, centered brand mark, Adamina (Georgia substitute) 16px/400 testimonial at 20.8px line-height. Isolated circular arrow controls with 28px radius over media.

Status Label: Active Green for active states, Pending Ochre for setup/forthcoming, Expiry Red for expired. Compact; optional Active Green Surface dot.

Terracotta Graphic Disc: #d66733 circular surface, 50% radius, no shadow, large isolated visual punctuation only.

Button component states (via CSS classes): Default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target); Hover (brightness/shadow shift, cursor pointer); Focus (distinct focus ring via CSS variables); Active/Pressed (transform scale 0.97); Loading (disable interactions, prevent double-clicks, CSS spinner or animated Google Icon without distorting dimensions); Disabled (opacity 0.5, greyscale, cursor not-allowed); Success/Error (temporary feedback via --text-success/--text-error).

Card component states (if interactive): Default (flex layout, subtle borders/elevation via --bg-secondary and CSS variables); Hover (elevation/shadow shift or translateY(-2px)); Focus-within (highlight card borders when child link/button receives focus); Loading (skeleton shimmer animation in CSS, no layout jumps); Empty State (structured fallback with Google Icon and clear guidance text).

Form & Input (for any inputs, e.g. email capture/FAQ search): states Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input field, dedicated error feedback container.

Modal/Popup (if used): states Opening, Open, Loading, Success/Error, Closing (CSS transitions). Centered flex container (align-items center), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay clicks.

Core UX & micro-interactions: responsive by default, fluid sizing, responsive breakpoints, no horizontal overflow. Smooth animations via CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`. Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback (form errors, toasts, loading). Mandatory visual feedback on every click/hover/submission. Destructive actions visually distinct in both themes.

Do's: Paper as dominant canvas; Oat Surface for contained cards and secondary pill controls. Display headlines Inter Variable 82px/400, 82px line-height, -2.4px tracking. IBM Plex Mono uppercase labels 13px/500, 16.9px line-height above product/media content. Ledger Brown only for filled public pill buttons with 9999px radius and 16px 24px padding. Product cards and media frames 16px radius; 24px only for larger image/media treatments. Copper Link for inline product-card links and small commerce-oriented highlights. Default page rhythm on 4px base unit, 10px element gaps, 32px section gaps.

Don'ts: no blue #0040ff or browser-default #0000ee as brand/button color. Do not turn Ledger Brown filled treatment into a square button; conversion controls use 9999px radius. No heavy outer drop shadows on cards; no shadow, rely on Oat Surface fills, borders, rounded media. Do not use bold 600-700 for 82px display; retain Inter Variable 400. Do not replace IBM Plex Mono uppercase labels with Inter body text. Do not apply Terracotta Disc as broad page background or universal action color. Do not use status colors outside compact payment/account-state contexts.

Imagery: central and product-adjacent — hands using phones, countertop terminals, retail environments, customer scenes as warm natural-color crops. Wide, contained, softly rounded at 16px, with occasional dark translucent payment overlays or circular arrow controls on the image. Text-led between media moments; customer logos and sparse monochrome line icons for non-photographic layer. Dark product demonstrations use realistic interface fragments, data, device screens.

Layout: white full-bleed editorial composition, fixed-height top nav, generous unruled white space around opening message. Hero: wide text composition — oversized left-aligned headline, narrower explanatory/conversion block to the right, then broad contained payment photograph with 16px corners. Product content moves through dark horizontal media selector, centered customer-logo strip, two-row five-column payment-capability grid, then paired cream feature cards. Customer stories: wide three-panel horizontal carousel, image-first cards, centered quote text below. Large dark product-media sections follow; footer returns to dense multi-link structure.

All user-facing copy must be in English. Use placeholder image URLs (e.g. https://placehold.co) for photography, never real brand assets. Invent a fictional brand name, product name, and all copy. Never use "Mollie" or its trademarks.

No lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content genuinely unspecified.

Output only the finished prompt itself, no preamble or closing commentary. Mirror the structure of numbered headers with bolded sub-rules.
