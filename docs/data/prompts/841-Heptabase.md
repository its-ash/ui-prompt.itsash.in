# Landing Page — Heptabase-Inspired "Sunlit Research Desk" Theme (Fictional Brand)

Build a complete, responsive landing page for a fictional brand and product. Do NOT use the name "Heptabase", its logo, trademarks, or product names anywhere in the output. Invent a fictional brand name, product name, and all copy. All user-facing copy must be in English.

## 1. Architecture & CSS Rules

- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Use class/ID selectors only. Keep HTML semantic and styling-agnostic.
- **CSS Variables:** Define all tokens in `:root` (and `.dark`/`@media (prefers-color-scheme: dark)`). Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`. Map the Heptabase tokens below into these.
- **Contrast Pairing:** Light backgrounds pair with dark text tokens; dark backgrounds pair with light text tokens in every theme.
- **Light Mode Background:** Use Eggshell Canvas `#fdfcfb`, not pure white. Where near-white is needed, use `#fefefe`.
- **Dark Mode:** Mandatory. Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Seamless variable switching. Persist choice via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox:** All layouts use `display: flex`. Default `align-items: center` unless justified. Mobile-first, responsive, no horizontal scroll.
- **Framework:** Tailwind CSS or clean custom CSS via `@layer`/`@apply`. Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts mandatory. Text: Instrument Sans (500) and Inter (400/500/600/700) plus ui-monospace. Icons: Google Material Symbols/Icons. No inline SVGs or local icon files.

## 2. Heptabase Theme Tokens

Colors:
- `--color-eggshell-canvas`: `#fdfcfb` (page bg, nav, cards, light buttons)
- `--color-cloud-surface`: `#f7f7f7` (secondary fills, muted panels)
- `--color-paper-beige`: `#f0f0ea` (feature boxes, warm insets)
- `--color-whiteboard-gray`: `#eeeded` (product canvas)
- `--color-linen-border`: `#e4ded3` (hairline borders, badges)
- `--color-graphite`: `#2e2e2e` (primary text, logo, dark buttons, chrome)
- `--color-charcoal-copy`: `#454545` (secondary text, icons)
- `--color-quiet-gray`: `#6a6972` (tertiary links, helper copy)
- `--color-disabled-ash`: `#a8a8a8` (disabled, low-emphasis)
- `--color-research-blue`: `#207dff` (editorial links, active accents only)

Map: `--bg-primary` → eggshell; `--bg-secondary` → cloud; `--text-primary` → graphite; `--text-secondary` → charcoal/quiet; `--primary` → graphite (conversion); accent links → research blue.

Typography:
- Instrument Sans 500: 36px (lh 1.30, ls -0.54px), 44px (ls -1.45px), 48px (ls -1.58px). Display/section headings.
- Inter 400/450/500/600/700: 12,13,14,16,17,18,20px. Nav, body, buttons, cards.
- ui-monospace 400 13px (lh 1.60) for technical metadata.
- Type scale tokens: `--text-utility` (Inter 400 12px lh1.5), `--text-segmented-control` (Inter 500 13px lh1), `--text-caption` (Inter 400 14px lh1.5), `--text-body-nav` (Inter 400 16px lh1.5), `--text-body-strong` (Inter 600 16px lh1.5), `--text-card-heading` (Inter 500 20px lh1.5), `--text-section-heading` (Instrument Sans 500 36px lh1.3 ls -0.54px), `--text-hero-display` (Instrument Sans 500 48px lh1.3 ls -1.58px).

Spacing: base 4px. Scale: 4,8,12,16,20,24,28,32,36,40,48,52,60,64,80,128px. Section gap 128px. Card padding 16px. Element gap 8px.

Radius: cards 12px, links 0px, pills 9999px, badges 6px, images 12px, inputs 6px, buttons 6px, featureCards 8px.

Shadows: `--shadow-sm` etc. Floating product preview: `0 0 4px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.04), 0 16px 26px rgba(0,0,0,0.05)`. Pill switcher: `0 1px 2px rgba(0,0,0,0.05)`.

## 3. Component Specs

- **Top Nav (72px):** Eggshell canvas bar. Brand (Inter 18px/600, -0.36px tracking) + compact black H-shaped mark at left. Centered Inter 16px/400 links in Graphite. Account controls right. 8px grid.
- **Charcoal Pill Button:** Graphite fill, white Inter 16px/500-600, 9999px radius, 7px/22px padding. Never use Research Blue as fill.
- **Outlined Tool Button:** transparent, 1px solid rgba(0,0,0,0.13), Graphite text, 6px radius, 8px 10px 8px 12px padding, 6px icon-label gap.
- **Pill Segmented Switcher:** Cloud Surface track, 9999px radius. Inter 13px/500 lh13. Selected: Eggshell canvas, Graphite text, `0 1px 2px rgba(0,0,0,0.05)`. Inactive: Quiet Gray.
- **Standard Card:** Eggshell canvas, 12px radius, 24px padding, no shadow. Defined by adjacent Cloud Surface or 1px rgba(0,0,0,0.08) border.
- **Translucent Workspace Card:** rgba(252,252,252,0.5), 6px radius, 16px padding, no shadow, 1px rgba(0,0,0,0.08) dividers.
- **Paper Feature Box:** Paper Beige fill, 8px radius, 16px TB / 17px LR padding. Charcoal Copy text. No shadow.
- **Whiteboard Surface:** Whiteboard Gray, 12px outer, 10px inner padding. 1px rgba(0,0,0,0.08) separators. Graphite chrome.
- **Floating Product Preview:** Eggshell canvas frame, 12px corners, Floating Product Preview shadow, over contained muted peach/green landscape image/video.
- **Award Outline Badge:** transparent/eggshell fill, 1px Linen Border, 6px radius, 8px/12px padding. Inter 12px/600 label. Warm orange/red artwork only in badge graphic.
- **Investor Proof Row:** Inter 14px/500, 20px lh, Disabled Ash lead-in. Desaturated gray/Graphite marks, 12px+ gaps, no cards.
- **Editorial Blue Link:** Research Blue, Inter 18px/500 lh27 for prominent; inline links Inter 13px/400 Quiet Gray. Transparent bg, square corners.

## 4. Component States (enforce all)

Buttons: default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), hover (brightness/shadow, cursor pointer), focus (ring via variables), active (scale 0.97), loading (disabled, spinner/icon, no dimension change), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary, via success/error tokens).

Cards: default (flex, subtle borders/elevation via variables), hover (translateY(-2px) or shadow shift), focus-within (border highlight), loading skeleton (shimmer CSS), empty state (icon + guidance).

Forms/Inputs: empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex wrapper: label + input + error container.

Modals: opening/open/loading/success-error/closing animated. Centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 5. UX & Micro-interactions

- Responsive by default, fluid sizing, no overflow.
- CSS transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 6. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline script blocks beyond single deferred entry point.
- One consistent class-naming convention (BEM or fixed utility set) throughout.
- No lorem-ipsum-only where real copy supplied; placeholders only where genuinely unspecified.

## 7. Page Sections to Build

1. **Hero:** Centered stack on Eggshell Canvas: pill segmented switcher (2 options), Instrument Sans 48px/500 headline (62.4px lh, -1.58px tracking, Graphite), Inter 18px/400 paragraph (27px leading), Graphite 9999px pill CTA (white Inter 16px/600). Wide contained Floating Product Preview over muted peach/green landscape. Award Outline Badge + centered Investor Proof Row below preview.
2. **Features:** 3 cards. Instrument Sans 36px/500 section heading (46.8px lh, -0.54px). Paper Beige feature boxes, 8px radius, 16px padding. Standard cards flat 12px/24px/no shadow.
3. **How It Works:** 3 steps. Numbered, Inter labels, Graphite chrome, Whiteboard surface demos.
4. **Testimonials:** Cards with quotes, author, role. Eggshell/Cloud surfaces.
5. **Pricing:** 3 tiers. Cards with price, features, CTA. Charcoal pill for primary tier.
6. **FAQ:** Accordion. Inter 16px questions, charcoal copy answers. Accessible expand/collapse.
7. **Final CTA:** Centered headline + charcoal pill button on Eggshell/Cloud band.
8. **Footer:** Secondary links, brand mark, copyright. Inter 14px, Quiet Gray links.

## 8. Do/Don't (Heptabase)

Do: Eggshell canvas default; Instrument Sans 500 display with -1.58px at 48px and 62.4px lh; Graphite 9999px pills; flat 12px/24px/no-shadow cards; 4px base spacing, 8px icon-label gaps; Research Blue only for links/active accents; separate with 1px rgba(0,0,0,0.08) or Linen Border.

Don't: Research Blue as universal filled button; display headlines heavier than 500; replace 9999px pills with 6px rects; shadows on standard cards; pure white dominant canvas; compress sections below 128px gap; gradients in marketing surfaces.

## 9. Imagery & Layout

Product-showcase dominant: wide desktop workspace screenshots in rounded white windows floating over soft painterly landscape (pale sky, peach cloud, green, orange) — those hues stay in imagery only. Detailed document-heavy screenshots. Small monochrome outlined icons, occasional Research Blue emphasis. No lifestyle photography or decorative illustrations. 72px top nav, centered public nav, hero centered stack, then spaced feature sections with left-aligned Instrument Sans headlines and large workspace demos. Seven-section sequence seamless on Eggshell Canvas. No sidebar.

Output only the coding-AI prompt. No preamble or closing commentary. Mirror numbered headers and bolded sub-rules. If any request conflicts with mandatory rules, keep the rule and add a one-line explicit exception clause. All copy in English. Invent fictional brand/product names; never use "Heptabase" or its trademarks.
