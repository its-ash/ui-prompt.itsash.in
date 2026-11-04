You are an expert frontend engineer. Build a complete, production-ready Landing Page using a dark, cinematic, gallery-projection aesthetic inspired by the supplied style reference. **Do not use the real brand name "BAM Photographers", its logo, trademarks, or product names anywhere in the page.** Invent a fictional photography-studio brand name, product names, and all copy.

## 1. Project Deliverables
- Separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions; use realistic fictional copy for all sections.

## 2. CSS-First Architecture & Zero Inline CSS
- Keep all styling strictly inside `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

## 3. CSS Variables & Theme Tokens
Store all visual tokens inside `:root` (and theme classes) using CSS variables. Required tokens:

Colors:
- `--color-gallery-black: #000000` (page background, navigation field, gallery gutters, media-stage canvas)
- `--color-projection-white: #ffffff` (navigation, editorial labels, captions, logo lettering, image-overlay text)
- `--color-index-gray: #999999` (muted secondary index text and subdued metadata)
- `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` mapped to the above palette with correct contrast pairing (light bg → dark text, dark bg → light text).

Typography:
- `--font-helveesti` with substitute `Inter` (Google Font, weights 400 only).
- `--text-navigation-and-editorial-label`: 14px / 1.3 line-height / 0.84px letter-spacing, weight 400, uppercase.
- `--font-base` bound to the Google Font link.

Spacing & Shapes:
- Base unit 8px. Spacing scale: `--spacing-15: 15px`, `--spacing-20: 20px`, `--spacing-25: 25px`, `--spacing-72: 72px`, `--spacing-144: 144px`.
- `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 15px` (featured media only).
- `--shadow-sm`, `--shadow-md` (kept minimal/none per elevation rules).
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

Contrast pairing: every light background token must pair with a dark text token and vice versa for every theme. Light mode background must not default to pure white; where white/near-white is needed use `#fefefe`.

## 4. Mandatory Dark Mode
- Dark mode must always be defined under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

## 5. Flexbox Layout & Mobile-First Alignment
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- All layouts must be mobile-responsive out of the box (rows → columns on small viewports). Prevent horizontal scrolling.

## 6. Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind `@layer`/`@apply`) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

## 7. Typography & Icons
- Strictly use Google Fonts for text and icons. Include Google Font `<link>`/`@import` (Inter as substitute for Helveesti) and bind to `--font-base`.
- Use Google Material Symbols/Icons. Forbid raw inline SVGs or local icon files.

## 8. Component Design Specifications

### Button
- Default: flex layout, `align-items: center`, `justify-content: center`, gap 0.5rem, min touch target 44x44px.
- Hover: visual shift (brightness/shadow), `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles via `--text-success`/`--text-error`.
- Destructive actions use a distinct `.btn-danger` in both light and dark themes.

### Card
- Default: flexible flexbox, subtle borders/elevation via `--bg-secondary` and CSS variables.
- Hover: elevation/shadow shift or `transform: translateY(-2px)`.
- Focus-within: highlight card borders when child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.

### Form & Input
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, dedicated error feedback container.

### Modal / Popup
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 9. Core UX & Micro-Interactions
- Responsive by default: fluid sizing and breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both Light and Dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, or submission.
- Destructive actions visually distinct in both themes.

## 10. Landing Page Sections & Content
Build the following sections with fictional copy:

1. **Hero** — Full-viewport Gallery Black opening with a blurred grayscale photographic field fading into black and an oversized centered Projection White custom high-contrast serif display wordmark (the fictional brand name). Do not use Helveesti for the display mark. Include a smaller Helveesti 14px uppercase descriptor beneath. No backing panel or shadow.

2. **Features** — 3 cards on Gallery Black, 0px internal padding, no borders/shadows, 15px radius only if featured media. Use Google Material Icons. Each card: title, short description, icon.

3. **How It Works** — 3 steps, numbered, using Helveesti 14px uppercase labels with 0.84px tracking, 72px separation between major groups.

4. **Testimonials** — Bare Projection White text on Gallery Black, no backing chip or translucent panel. Include author name and role in Index Gray.

5. **Pricing** — 3 tiers. Dark theme cards flush to Gallery Black, no shadows/borders. Highlight recommended tier via subtle border or underline only. Use `.btn` styles.

6. **FAQ** — Accordion-style, keyboard operable, `aria-expanded`/`aria-controls`, smooth CSS transitions.

7. **Final CTA** — Centered call-to-action with button, Gallery Black background, Projection White text.

8. **Footer** — Secondary links, minimal, Helveesti 14px uppercase, 0px radius, no filled buttons.

## 11. Style-Specific Rules (BAM Photographers Aesthetic)
- Use Gallery Black `#000000` as the uninterrupted page, navigation, and gallery-gutter background.
- Set measured interface text in Helveesti (Inter substitute) 14px, weight 400, 18.2px line-height, 0.84px letter-spacing.
- Transform navigation, captions, and project identifiers to uppercase.
- Use 25px horizontal navigation padding and 15px vertical navigation padding within the 48px top bar.
- Four-column top navigation spanning full width, 48px tall band, distribute four nav groups across full width.
- Active nav label: same Projection White Helveesti 14px/18.2px uppercase, thin white underline directly beneath, transparent background, 0px radius.
- Inactive nav labels: transparent, no border, 0px radius, Projection White Helveesti 14px/18.2px, 0.84px tracking. No filled nav buttons.
- Gallery cards: 0px internal padding; 15px radius only to clip featured image containers.
- 20px standard caption inset and immediate element gap; 72px separation between major gallery groups.
- Photo overlays: bare Projection White text, no backing chip or translucent panel.
- No light page canvas or off-white card surface.
- No colored accents, gradients, semantic badges, or filled conversion buttons.
- No interface labels below or above measured 14px Helveesti treatment.
- No heavy font weights for navigation/captions/labels; keep weight 400.
- No rounding on nav controls, captions, or ordinary gallery tiles; reserve 15px rounding for clipped featured media.
- No card borders, drop shadows, or floating surface layers around photographs.
- Do not replace the oversized display mark with the Helveesti interface font.
- Surfaces stay flush to Gallery Black; images gain separation through black gutters, crop, and occasional 15px clipping rather than shadows/borders/raised panels.
- Photography is primary content: oversized, nearly edge-to-edge, no decorative frames; featured pairs contained by a single 15px rounded outer crop with hard internal image edges.
- First visual treated as abstracted blurred grayscale atmosphere; portfolio photography raw and cinematic.
- White, widely tracked labels sit directly on media as project identifiers.

## 12. Top Navigation
- 48px Gallery Black top navigation bar, 15px vertical padding, 25px horizontal edge padding.
- Four widely distributed Helveesti labels in Projection White, 14px weight 400, 18.2px line-height, 0.84px tracking, uppercase.
- Underline only the active label.
- Include theme toggle with `aria-pressed`/`aria-label`.

## 13. Featured Portfolio Pair (Hero-adjacent)
- Two tall edge-to-edge campaign photographs with narrow Gallery Black gutter and one shared 15px rounded outer crop.
- Overlay bare Projection White project labels in Helveesti 14px weight 400, 0.84px tracking.
- Centered identity overlay above featured images: white display lockup + smaller Projection White Helveesti descriptor at 14px/18.2px, uppercase, 0.84px tracking; no backing panel or shadow.

## 14. Accessibility Requirements
- Sufficient contrast in both Light and Dark modes.
- Never rely solely on color to communicate state.
- Semantic HTML5 elements, correct ARIA roles/labels on custom widgets.
- Logical DOM/focus order, full keyboard operability.
- `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Respect `prefers-reduced-motion`.

## 15. Edit Mode (Not Applicable)
This is a from-scratch build; standard construction rules apply. If any requested style change cannot be achieved without adding markup, stop and ask the user what they want instead of silently inserting new HTML.

## 16. Output
Output only the finished code files' content as specified. No preamble, no closing commentary. Mirror the structure above. If a request conflicts with a mandatory rule, keep the mandatory rule and add a one-line explicit exception clause rather than silently dropping the rule. All user-facing copy must be in English. Translate any non-English source guidance into English. Keep all CSS variable names, class names, and file names in English/ASCII.
