You are an expert front-end developer. Build a complete, production-ready Landing Page for a fictional brand (invent the brand name, product name, and all marketing copy; never use the real brand name "Anything", its logo, trademarks, or product names) styled according to the "Anything" design reference below. Deliver three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (no `style="..."` attributes). All styling lives in `style.css` via class/ID selectors.

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. Forbid the `style="..."` attribute in HTML. Require all design properties, layout rules, and states to be targeted via class or ID selectors. Keep HTML clean, semantic, and agnostic of visual styling so changing the look requires modifying only CSS.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
- Store all visual tokens inside `:root` (light) and theme classes using CSS variables. Required color tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Map the Anything palette to these plus the spec's named tokens (`--color-ink-black`, `--color-charcoal`, `--color-slate-mid`, `--color-steel`, `--color-ash`, `--color-fog`, `--color-mist`, `--color-pebble`, `--color-cloud`, `--color-snow`, `--color-paper`, `--color-fern`, `--color-mint-wash`).
- Contrast pairing: any light background token must pair with a dark text token, and any dark background token must pair with a light text token — enforce for every theme, not just default.
- Light mode background: do not default to pure white; pick a background fitting the theme mood. Where a white/near-white is needed, use `#fefefe` instead of `#ffffff`. Exception: the Anything canvas token is explicitly `#ffffff` per spec; retain `#ffffff` for `--bg-primary` / page canvas and use `#fefefe` only for unspecified near-white surfaces.
- Border radius & shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.
- Spacing & transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode Support**
- Dark Mode must always be defined. Provide dark color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector. Background and text variables must switch seamlessly without HTML restructuring. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label` state. Derive dark-mode tokens that preserve the monochrome + single-green-accent mood with proper contrast pairing (e.g., dark canvas `#0a0a0a`–`#111111`, light text `#f5f5f5`, accent `#6fc47a`).

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build layouts with Flexbox (`display: flex`). Every flex container must default to `align-items: center` unless an explicitly justified exception. Mobile-responsive out of the box (rows → columns on small viewports). Prevent horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS or clean custom CSS driven by Tailwind's `@layer`/`@apply` directives unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Strictly use Google Fonts for text and icons. Include Google Font `<link>`/`@import` for Instrument Serif, Inter, and Instrument Sans (substitutes: Cormorant Garamond Italic/Playfair Display Italic; DM Sans/IBM Plex Sans; Inter Tight/General Sans) and bind to `--font-base`/`--font-heading`/`--font-display`. Icons: Google Material Symbols only. Forbid raw inline SVGs or local icon files.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements**
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), minimum touch target 44×44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables (`outline`/`box-shadow`).
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders a CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback states driven by `--text-success`/`--text-error`.
- Dark Pill CTA: filled `#000000`/`#18191b`, `9999px` radius, 10–12px vertical / 16–20px horizontal padding, white Inter 14px weight 500. The only action element — no colored filled CTA exists.
- Pebble Disabled Button: `#dbdbdb` background, `9999px` radius, 10px vertical padding, Inter 14px weight 500 in `#acadae`.
- Ghost Nav Link: Inter 14px weight 400, no background/border, `#6a6a6c` text (or white on dark), hover shifts to `#18191b` or subtle underline.

**2.2 Card Component Requirements**
- Default: flexible Flexbox layout, subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with a Google Icon and clear guidance text.
- Soft Card: `20px` radius, `#f9f9f9` background, `1px #c4c4c4` border, 20–24px padding, soft shadow `rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px` when elevated. Never bold borders or hard edges.

**2.3 Form & Input Requirements**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, and dedicated error feedback container.
- Hero Search Input: white, `20px` radius, 16–20px padding, Inter 16px placeholder in `#6a6a6c`, spans ~640–720px, centered below hero headline, right-aligned circular submit button with up-arrow Google Icon.

**2.4 Modal / Popup Requirements**
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` or overlay click.

## 3. CORE UX & MICRO-INTERACTION RULES

- Responsive by default: fluid sizing and breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): sufficient contrast in both Light and Dark modes. Never rely solely on color to communicate state. Semantic HTML5, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Mandatory visual feedback: every click, hover, or submission triggers a visible state change.
- Destructive actions: visually distinct in both light and dark themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- File structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Naming convention: enforce one consistent convention (BEM or a fixed utility set) across the entire deliverable — never mix.
- No unrequested placeholders: prohibit lorem-ipsum-only where real copy is supplied; placeholders allowed only where content was genuinely unspecified.

## 5. THEME TOKENS — "Anything"

**Colors**
- Ink Black `#000000` — primary headings, body text, icon fills on light surfaces. Do not promote to primary CTA color.
- Charcoal `#18191b` — secondary text, heading color, deep UI surfaces.
- Slate Mid `#6a6a6c` — body text, helper copy, muted descriptions.
- Steel `#7d7f80` — de-emphasized headings, inactive labels.
- Ash `linear-gradient(90deg, rgb(172,173,174) 0%, rgb(172,173,174) 30%, rgb(109,192,120) 35%, rgb(153,183,250) 40%, rgb(172,173,174) 45%, rgb(172,173,174) 100%)` — icon strokes, subtle heading tint, decorative divider gradient (silver base with brief green + periwinkle flash at 35–40%).
- Fog `#bbbbbb` — hairline borders.
- Mist `#c4c4c4` — card borders, softer structural lines.
- Pebble `#dbdbdb` — disabled button background, lightest non-surface gray.
- Cloud `#f2f2f2` — elevated surface tier, button borders, subtle fills.
- Snow `#f9f9f9` — card surface background.
- Paper `#ffffff` — page canvas, input fields, icon fills, reversed text on dark elements.
- Fern `#448f52` — accent text, decorative punctuation, gradient flash color. The only chromatic voice, rationed carefully.
- Mint Wash `#dbeddf` — pale green surface tint, decorative wash blocks.

**Typography**
- Inter (primary UI): weights 300/400/500/600/700; sizes 12/13/14/16/18/29px; line heights 1.33/1.40/1.43/1.50/1.56; letter spacing 0.02em. Role: body, nav links, buttons, inputs, captions, subheadings. Apply 0.02em tracking on all Inter text at 14px and below.
- Instrument Serif (wordmark/editorial): weights 400/500; sizes 16/24px; line heights 1.00/1.40/1.50. Role: wordmark and editorial accents. The italic wordmark is the system's signature — never replace with a sans-serif variant.
- Instrument Sans (display/headings): weights 400/600; sizes 16/24/42px; line heights 1.20/1.40/1.50. Role: display and headings; 42px weight 600 carries the hero headline.
- Type scale: caption 12px/1.5; body 14px/1.56; heading-sm 18px/1.5; heading 24px/1.4; heading-lg 29px/1.33; display 42px/1.2.

**Spacing & Shapes**
- Density: comfortable. Spacing scale: 4, 6, 8, 12, 15, 16, 18, 20, 22, 24, 25, 30, 32, 40, 50, 64px.
- Border radius: cards 20px, small 8px, images 20px, inputs 20px, buttons 9999px.
- Shadows: only `rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`. No deeper shadows.
- Layout: page max-width 1200px; section gap 64px; card padding 20–24px; element gap 12–16px.

**Components**
- Floating Glass Nav Bar: translucent pill bar floating at top over full-bleed imagery. White frosted-glass background, 20px radius, 12px vertical padding, horizontally centered, max-width ~960px. Instrument Serif italic wordmark left, Inter nav links center, dark Pill CTA right.
- Dark Pill CTA: see 2.1.
- Hero Search Input: see 2.3.
- Soft Card: see 2.2.
- Rounded Image: 20px standard radius, occasionally 31px for feature imagery. No decorative frames/shadows around standalone images.
- Serif Italic Wordmark: Instrument Serif italic at 24px (nav) and scaled up for hero.
- Ghost Nav Link: see 2.1.
- Shimmer Gradient Divider: 1–2px line using the shimmer gradient (silver 0–30%, fern green 35%, periwinkle 40%, silver 45–100%). Decorative separator/progress/text fill only — never background or large surface.
- Pebble Disabled Button: see 2.1.
- Mint Wash Block: full-bleed or contained `#dbeddf` pale green block. Sparingly as tonal break between white sections — the only place color fills a surface rather than a line of text.

**Do's**
- Use 20px radius for all cards, images, and inputs — the system's structural signature.
- Use 9999px radius exclusively for buttons — pills all the way.
- Set wordmark in Instrument Serif italic — never substitute a bold sans-serif logo.
- Keep CTA dark (`#000000`/`#18191b`) on white — no colored filled buttons.
- Apply 0.02em letter-spacing on all Inter text at 14px and below.
- Use shimmer gradient only for decorative dividers and text fills.
- Reach for `#448f52` only in body text or gradient flash points — one chromatic word per paragraph at most.

**Don'ts**
- No colored CTA buttons — dark pill is the only CTA.
- No hard 0px/4px corners on cards or images.
- No heavy borders or thick dividers — 1px `#c4c4c4`/`#bbbbbb` is max structural weight.
- No new accent hues — monochrome plus one green.
- No display weights above 600.
- No replacing Instrument Serif with a generic italic.
- No strong shadows beyond the specified soft pattern.

**Surfaces**
- Level 1 Page Canvas `#ffffff` — base layer.
- Level 2 Soft Card `#f9f9f9` — first step off white.
- Level 3 Elevated Surface `#f2f2f2` — deeper fill for buttons, hover states, input borders.
- Level 4 Mint Wash `#dbeddf` — rare chromatic break.
- Level 5 Pebble `#dbdbdb` — disabled button background.

**Elevation**
- Soft Card: `rgba(0,0,0,0.1) 0px 10px 15px -3px, rgba(0,0,0,0.1) 0px 4px 6px -4px`.

**Imagery**
- Full-bleed atmospheric photography: dreamy skies, clouds, wildflower fields, surreal still-life (e.g., retro CRT in flowers). High-key, soft-focus, slightly overexposed; objects float in light. No product screenshots, no lifestyle people, no UI mockups. Icons absent or extremely minimal; imagery carries mood.

**Layout**
- Single full-bleed hero with floating pill nav centered at top, centered serif italic logo at viewport center, subhead and hero search input stacked beneath. One continuous atmospheric experience — no section bands, no card grids, no sidebar. Content flows vertically with generous 64px+ section gaps. Nav overlaps hero photo with frosted-glass effect. Navigation minimal: logo + 4 links + one dark CTA pill.

## 6. SECTIONS TO BUILD

Build these sections in order, all responsive and accessible:

1. **Hero**: full-bleed atmospheric photograph background (sky + flowers, use a high-quality placeholder image URL). Floating glass nav bar at top (logo + 4 ghost nav links + dark pill CTA). Centered fictional wordmark in Instrument Serif italic at display size (`#18191b`). Subtext in Inter 16px weight 400, `#6a6a6c`. Hero search input below (white, 20px radius, 16px padding, ~640–720px, Inter 16px placeholder, right-aligned circular submit button with up-arrow Google Icon). Only call to action on the page.
2. **Features**: 3 Soft Cards in a responsive flex row (stack on mobile). Each: 20px radius, `#f9f9f9` bg, 1px `#c4c4c4` border, 24px padding, soft shadow. Optional 20px-radius image at top. Heading in Instrument Sans 24px weight 600, `#18191b`. Body in Inter 14px weight 400, `#6a6a6c`. Include hover elevation and focus-within border highlight.
3. **How It Works**: 3 steps. Each step: number/label in Instrument Sans, title, short description in Inter. Use a Shimmer Gradient Divider between steps or as decorative separator. Flex layout, mobile stacks.
4. **Testimonials**: 2–3 testimonial cards (Soft Card style) with quote text, author name, role. Include empty-state fallback structure. Shimmer divider as decorative separator.
5. **Pricing**: 3 tiers. Each tier card: Soft Card style. Tier name (Instrument Sans 24px 600), price (display size), feature list with Google Icon checkmarks, CTA button (dark pill for recommended tier, ghost/pebble for others). Highlight recommended tier subtly (elevated surface `#f2f2f2` or soft shadow) — no colored borders.
6. **FAQ**: accordion. Each item: question (Inter 16px 500, `#18191b`), answer (Inter 14px 400, `#6a6a6c`). Toggle via CSS/JS with smooth height transition, `aria-expanded`, keyboard operable. No new HTML elements beyond existing structure; use button + region pattern.
7. **Final CTA**: centered section with headline (Instrument Sans 42px 600), subtext, and one dark pill CTA. Optional Mint Wash Block background for tonal break.
8. **Footer**: secondary links grouped in columns, fictional brand wordmark in Instrument Serif italic, copyright. Ghost nav link styling. No heavy borders; use 1px `#bbbbbb` hairlines max.

## 7. BRAND & COPY

- Invent a fictional brand name, product name, and all marketing copy. Never use "Anything", its logo, trademarks, or product names. Use a neutral placeholder wordmark set in Instrument Serif italic.
- Write all user-facing copy in English.
- Keep all CSS variable names, class names, and file names in English/ASCII.

## 8. INTERACTION & STATE REQUIREMENTS (GLOBAL)

- Theme toggle (light/dark) with `localStorage` persistence and `prefers-color-scheme` fallback; correct `aria-pressed`/`aria-label`.
- All buttons: hover, focus ring, active scale, loading spinner, disabled, success/error states via CSS classes.
- Cards: hover elevation, focus-within, skeleton loading, empty state.
- Inputs: all states including valid/invalid with error feedback container and `aria-live`.
- FAQ accordion: animated open/close, keyboard operable.
- Respect `prefers-reduced-motion` (disable transforms/transitions).
- No horizontal overflow at any breakpoint; mobile-first flex layouts.

Output only the three files' contents as a single cohesive deliverable (index.html, style.css, script.js), with no preamble or closing commentary. Ensure the HTML references `style.css` and `script.js` (deferred) correctly. Use Google Fonts and Google Material Symbols via `<link>` tags in `<head>`. No inline CSS or inline SVGs.
