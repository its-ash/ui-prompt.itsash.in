You are an expert UI/UX coding agent. Build a complete, production-quality landing page inspired by the "Advene" editorial fashion spread aesthetic, but for a **fictional** brand (invent a brand name, product, and copy — never use "Advene", its logo, trademarks, or product names). Output three separate files: `index.html`, `style.css`, `script.js`. No inline CSS (`style="..."`) anywhere. No inline `<script>` blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) throughout.

## 1. Theme & Tokens
Light, editorial, warm-parchment aesthetic. Store all tokens in `:root` and a `.dark` class / `@media (prefers-color-scheme: dark)`. Required color tokens: `--primary` (oxblood `#66040c`), `--secondary` (olive khaki `#9a9260`), `--bg-primary` (parchment stone `#dfe0db`), `--bg-secondary` (bone white `#eeefea`), `--text-primary` (`#000000`), `--text-secondary` (`#3c3c3b`), `--text-success`, `--text-error`, `--border-default` (`#000000`), `--border-error`, `--border-success`, plus `--bg-white` (`#ffffff`), `--bg-buttercream` (`#f7dc99`), `--bg-sage` (`#c1c19f`), `--text-ash` (`#808080`), `--cobalt` (`#007aff`). Ensure contrast pairing in both themes. Dark mode tokens must invert surfaces/text. Also define `--radius-sm: 20px`, `--radius-md: 20px`, `--radius-lg: 41px`, `--shadow-sm`, `--shadow-md` (keep shadows minimal/none per aesthetic), `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base` (Signifier substitute: "Lora" or "GT Super" fallback to serif), `--font-mono` (Pitch substitute: "JetBrains Mono"), `--font-ui` (system-ui). Use `#fefefe` where near-white is needed. No drop shadows on cards/buttons/nav — depth via surface color shifts only.

## 2. Typography
Google Fonts only. Load Signifier substitute (e.g. Lora) weights 400, italic 400, and JetBrains Mono 400/700, plus Material Symbols. Bind to `--font-base` / `--font-mono`. Type scale tokens: `--text-caption` (11px, lh 1.7, ls 0.7px), `--text-body-sm` (14px, lh 1.67), `--text-body` (18px, lh 1.5), `--text-subheading` (24px, lh 1.3), `--text-heading-sm` (28px, lh 1.2, ls 0.5px), `--text-heading` (36px, lh 1.15, ls 0.8px). Monospace micro-labels use 11px with 0.064em tracking. Pair roman + italic within single headings (editorial device).

## 3. Layout & Flexbox
Mobile-first, flexbox everywhere, default `align-items: center` on flex containers. Page max-width 1440px for non-hero sections; hero is full-bleed 50/50 split occupying full viewport height. Section gaps 80–120px. No horizontal scroll. Convert rows to columns on small viewports. Cards/images sharp-cornered (0px radius). Only interactive elements use radii: 20px (buttons/links) and 41px (primary hero CTA pill).

## 4. Dark Mode
Implement via `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice in `localStorage`, fall back to `prefers-color-scheme` on first visit. Visible toggle button with correct `aria-pressed`/`aria-label`. Seamless variable switching, no HTML restructuring.

## 5. Components & States
- **Buttons**: default (flex, center, gap 0.5rem, min 44x44px touch target), hover (brightness/shadow + cursor pointer), focus (distinct ring via variables), active (scale 0.97), loading (disabled, spinner, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (via success/error tokens). Two radii: 41px pill for primary hero CTA, 20px for secondary outlined (cobalt border, transparent bg).
- **Cards**: default (flex, subtle border, surface bg), hover (translateY(-2px)), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + text).
- **Forms/Inputs**: empty, focused ring, filled, valid, invalid (error border/text/icon), disabled, read-only. Flex wrapper with label, input, error container.
- **Modal**: opening/open/loading/success-error/closing animated; centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.
- **Announcement bar**: buttercream bg, ~36px, centered Pitch 11px tracked, right-aligned × close.
- **Header nav**: white bg, 1px carbon bottom border, ~60px; left links (Shop, About) 14px Signifier; centered spaced-caps wordmark ~18px; right utility (Account, currency, Cart) 14px; text graphite.
- **Vertical side tab**: right edge, ~30px, rotated "Discover" Pitch 11px, oxblood on parchment.
- **Arrow link**: 14px Signifier carbon + →, no underline default, underline/color shift hover.
- **Halftone image treatment**: coarse dot pattern in warm tone on editorial images only, not product shots.

## 6. Required Sections
Hero (split 50/50 full-bleed with overlaid pill CTA bottom-left), Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links. Invent fictional copy for all. No lorem-ipsum-only where real copy is supplied; placeholders only where genuinely unspecified.

## 7. Accessibility
Semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback, sufficient contrast both themes, never color-only state communication, respect `prefers-reduced-motion`.

## 8. Micro-interactions
CSS transitions on all state changes (`transition: var(--transition-normal)`), smooth animations, mandatory visual feedback on every click/hover/submission, distinct `.btn-danger` for destructive actions in both themes.

## 9. Deliverables
Separate `index.html`, `style.css`, `script.js`. No inline scripts beyond single deferred entry point. BEM naming. No unrequested placeholders.

Output only the finished prompt. No preamble, no closing commentary. Mirror numbered headers and bolded sub-rules. Translate any non-English copy guidance to English; if source demands non-English user-facing copy, instruct coding AI to write all user-facing copy in English. Keep CSS vars, class names, file names in English/ASCII. If request conflicts with mandatory rule, keep rule and add one-line exception clause.
