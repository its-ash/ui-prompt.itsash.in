You are a senior frontend engineer. Build a complete, responsive landing page in **English** using a fictional brand name, product, and copy — never use "Buy Me a Coffee", its logo, trademarks, or product names. Reuse only the visual style described below.

## Deliverables
- Separate `index.html`, `style.css`, `script.js` files.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable.

## Architecture Rules (Mandatory)
1. **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Target via class/ID selectors only. HTML stays semantic and styling-agnostic.
2. **CSS Variables & Theme Tokens:** Store all visual tokens in `:root` (and theme classes). Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
3. **Contrast Pairing:** Every light background token pairs with a dark text token; every dark background token pairs with a light text token — enforce for every theme.
4. **Light Mode Background:** Do not default to pure white. Use `#fefefe` where a near-white is needed.
5. **Mandatory Dark Mode:** Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.
6. **Flexbox, Mobile-First:** Use Flexbox for layouts. Every flex container defaults to `align-items: center` unless explicitly justified. Convert rows to columns on small viewports. No horizontal scrolling.
7. **Tailwind CSS Integration:** Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`), mapping utilities to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
8. **Google Fonts Mandatory:** Load Google Fonts via `<link>`/`@import`. Bind to `--font-base`. Use Google Material Symbols/Icons — no raw inline SVGs or local icon files.

## Style Tokens (Buymeacoffee-inspired, fictional brand)
- Canvas: `#faf8f0` (cream paper) — universal page background.
- Card White: `#ffffff` — card surfaces, modals.
- Hairline Gray: `#e5e7eb` — borders, dividers.
- Ink Black: `#000000` — primary text, icons.
- Charcoal: `#222222` — body/heading text.
- Fog Gray: `#717171` — muted helper text, small-caps labels.
- Marigold: `#ffdd00` — creator-facing signup CTA only.
- Buttercup: `#f7d046` — decorative yellow wash only.
- Terracotta: `#d8573f` — supporter payment actions only.
- Blush Border: `#f5d5cf` — warm notification borders.
- Fonts: Circular (substitute with Inter/Manrope/Plus Jakarta Sans via Google Fonts). Bold (700) for display (96px, -4px tracking; 64px, -2.7px), Medium (500) for subheads, Regular (400) for body (14-16px), Book (400) for section titles.
- Radius: tags/buttons 9999px, cards 24px, modals 32px, hero-cards 40px, small 8px.
- Shadow (single recipe): `rgba(0,0,0,0.15) 0px 0px 2px 0px, rgba(0,0,0,0.04) 0px 8px 40px 0px, rgba(0,0,0,0.05) 0px 2px 5px 0px`.
- Spacing base 4px; comfortable density. Section gap 80px. Card padding 24px. Element gap 16px. Max-width 1200px.
- Type scale: caption 10px, body 14px, body-lg 16px (-0.34px), subheading 20px (-0.6px), heading-sm 24px (-0.5px), heading 30px (-0.63px), heading-lg 40px (-1.24px), display 64px (-2.7px), hero 96px (-4px).

## Component States (Mandatory)
- **Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, spinner/icon, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (via --text-success/--text-error).
- **Cards:** default (flex, subtle border, elevation), hover (translateY(-2px) or shadow shift), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance text).
- **Forms/Inputs:** empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, icon), disabled, read-only. Flex container wrapping label, input, error feedback.
- **Modal:** opening/open/loading/success-error/closing (CSS transitions), centered flex, backdrop, Google Icon close button, focus trap, Esc/overlay close.

## UX Rules (Global)
- Responsive by default, no horizontal overflow.
- CSS transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely on color alone; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## Page Sections (in order)
1. **Hero:** centered headline stack — green star row (trust signal) → 96px bold headline → 16px subtext → marigold pill CTA → micro-copy. Creator profile cards floating at slight rotations (±2-4°) on left/right margins (scrapbook effect).
2. **Features:** 3 cards (white surface, 24px radius, three-layer shadow).
3. **How It Works:** 3 steps.
4. **Testimonials:** polaroid-style floating cards.
5. **Pricing:** 3 tiers.
6. **FAQ:** accordion.
7. **Final CTA:** marigold pill button.
8. **Footer:** secondary links.

## Do's and Don'ts
- Do use `#faf8f0` as universal page background.
- Do reserve `#ffdd00` exclusively for creator-facing signup CTA.
- Do use `#d8573f` only for supporter payment actions.
- Do apply 9999px radius to buttons, tags, pill inputs.
- Do use three-layer shadow stack on floating cards/modals.
- Do write section labels as uppercase Circular Bold 12px with 0.125em tracking.
- Don't use accent colors for body text, links, borders, or decorative fills.
- Don't apply sharp corners (0-4px) to cards/buttons.
- Don't use colored shadows or glows.
- Don't introduce new accent colors beyond Marigold, Terracotta, Blush Border.
- Don't set body text below 14px or above 18px.
- Don't use bold/black weights for long-form body copy.
- Don't fill cream canvas with pure white sections — alternate cream bands with white cards.

## Imagery & Icons
- Illustration-driven, playful hand-drawn quality. Coffee-cup mascot and coffee-bean icons in warm yellows/terracotta. Circular avatars 40-100px with thin white ring. No photography on marketing surfaces. Icons: 2px-stroke line art in `#000000` or `#717171`, occasionally filled for active states. Use Google Material Symbols only.

## Layout
- Max-width 1200px centered; hero breaks to full-bleed. Hero: centered headline stack with floating creator cards at margins. Below: full-width cream bands separated by 80px gaps. Each section: small-caps label → centered description → visual demo. Navigation: minimal top bar, no sticky. Spacious, unhurried rhythm — 24-40px internal padding, wide external margins.

## Dark Mode Notes
- Invert canvas to a warm dark tone; cards to a slightly lighter dark surface; keep contrast pairing. Accent colors remain action-only. Preserve three-layer shadow (adjust alpha if needed).

## Output
Produce only the three files. No placeholders where real copy is supplied; invent fictional brand name, product, and copy. Ensure all user-facing copy is in English.You are a senior frontend engineer. Build a complete, responsive landing page in **English** using a fictional brand name, product, and copy — never use "Buy Me a Coffee", its logo, trademarks, or product names. Reuse only the visual style described below.

## Deliverables
- Separate `index.html`, `style.css`, `script.js` files.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable.

## Architecture Rules (Mandatory)
1. **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Target via class/ID selectors only. HTML stays semantic and styling-agnostic.
2. **CSS Variables & Theme Tokens:** Store all visual tokens in `:root` (and theme classes). Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
3. **Contrast Pairing:** Every light background token pairs with a dark text token; every dark background token pairs with a light text token — enforce for every theme.
4. **Light Mode Background:** Do not default to pure white. Use `#fefefe` where a near-white is needed.
5. **Mandatory Dark Mode:** Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.
6. **Flexbox, Mobile-First:** Use Flexbox for layouts. Every flex container defaults to `align-items: center` unless explicitly justified. Convert rows to columns on small viewports. No horizontal scrolling.
7. **Tailwind CSS Integration:** Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer`/`@apply`), mapping utilities to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
8. **Google Fonts Mandatory:** Load Google Fonts via `<link>`/`@import`. Bind to `--font-base`. Use Google Material Symbols/Icons — no raw inline SVGs or local icon files.

## Style Tokens (Buymeacoffee-inspired, fictional brand)
- Canvas: `#faf8f0` (cream paper) — universal page background.
- Card White: `#ffffff` — card surfaces, modals.
- Hairline Gray: `#e5e7eb` — borders, dividers.
- Ink Black: `#000000` — primary text, icons.
- Charcoal: `#222222` — body/heading text.
- Fog Gray: `#717171` — muted helper text, small-caps labels.
- Marigold: `#ffdd00` — creator-facing signup CTA only.
- Buttercup: `#f7d046` — decorative yellow wash only.
- Terracotta: `#d8573f` — supporter payment actions only.
- Blush Border: `#f5d5cf` — warm notification borders.
- Fonts: Circular (substitute with Inter/Manrope/Plus Jakarta Sans via Google Fonts). Bold (700) for display (96px, -4px tracking; 64px, -2.7px), Medium (500) for subheads, Regular (400) for body (14-16px), Book (400) for section titles.
- Radius: tags/buttons 9999px, cards 24px, modals 32px, hero-cards 40px, small 8px.
- Shadow (single recipe): `rgba(0,0,0,0.15) 0px 0px 2px 0px, rgba(0,0,0,0.04) 0px 8px 40px 0px, rgba(0,0,0,0.05) 0px 2px 5px 0px`.
- Spacing base 4px; comfortable density. Section gap 80px. Card padding 24px. Element gap 16px. Max-width 1200px.
- Type scale: caption 10px, body 14px, body-lg 16px (-0.34px), subheading 20px (-0.6px), heading-sm 24px (-0.5px), heading 30px (-0.63px), heading-lg 40px (-1.24px), display 64px (-2.7px), hero 96px (-4px).

## Component States (Mandatory)
- **Buttons:** default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (distinct ring via CSS vars), active (scale 0.97), loading (disabled, spinner/icon, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (via --text-success/--text-error).
- **Cards:** default (flex, subtle border, elevation), hover (translateY(-2px) or shadow shift), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance text).
- **Forms/Inputs:** empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, icon), disabled, read-only. Flex container wrapping label, input, error feedback.
- **Modal:** opening/open/loading/success-error/closing (CSS transitions), centered flex, backdrop, Google Icon close button, focus trap, Esc/overlay close.

## UX Rules (Global)
- Responsive by default, no horizontal overflow.
- CSS transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both themes; never rely on color alone; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## Page Sections (in order)
1. **Hero:** centered headline stack — green star row (trust signal) → 96px bold headline → 16px subtext → marigold pill CTA → micro-copy. Creator profile cards floating at slight rotations (±2-4°) on left/right margins (scrapbook effect).
2. **Features:** 3 cards (white surface, 24px radius, three-layer shadow).
3. **How It Works:** 3 steps.
4. **Testimonials:** polaroid-style floating cards.
5. **Pricing:** 3 tiers.
6. **FAQ:** accordion.
7. **Final CTA:** marigold pill button.
8. **Footer:** secondary links.

## Do's and Don'ts
- Do use `#faf8f0` as universal page background.
- Do reserve `#ffdd00` exclusively for creator-facing signup CTA.
- Do use `#d8573f` only for supporter payment actions.
- Do apply 9999px radius to buttons, tags, pill inputs.
- Do use three-layer shadow stack on floating cards/modals.
- Do write section labels as uppercase Circular Bold 12px with 0.125em tracking.
- Don't use accent colors for body text, links, borders, or decorative fills.
- Don't apply sharp corners (0-4px) to cards/buttons.
- Don't use colored shadows or glows.
- Don't introduce new accent colors beyond Marigold, Terracotta, Blush Border.
- Don't set body text below 14px or above 18px.
- Don't use bold/black weights for long-form body copy.
- Don't fill cream canvas with pure white sections — alternate cream bands with white cards.

## Imagery & Icons
- Illustration-driven, playful hand-drawn quality. Coffee-cup mascot and coffee-bean icons in warm yellows/terracotta. Circular avatars 40-100px with thin white ring. No photography on marketing surfaces. Icons: 2px-stroke line art in `#000000` or `#717171`, occasionally filled for active states. Use Google Material Symbols only.

## Layout
- Max-width 1200px centered; hero breaks to full-bleed. Hero: centered headline stack with floating creator cards at margins. Below: full-width cream bands separated by 80px gaps. Each section: small-caps label → centered description → visual demo. Navigation: minimal top bar, no sticky. Spacious, unhurried rhythm — 24-40px internal padding, wide external margins.

## Dark Mode Notes
- Invert canvas to a warm dark tone; cards to a slightly lighter dark surface; keep contrast pairing. Accent colors remain action-only. Preserve three-layer shadow (adjust alpha if needed).

## Output
Produce only the three files. No placeholders where real copy is supplied; invent fictional brand name, product, and copy. Ensure all user-facing copy is in English.
