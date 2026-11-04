# 1. STRICT RULES & ARCHITECTURE TO ENFORCE

## 1.1 CSS-First Architecture & Zero Inline CSS
- Build the deliverable as separate `index.html`, `style.css`, and `script.js` files.
- Do not use the `style="..."` attribute anywhere in HTML.
- Target all design properties, layout rules, and states through class or ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling; changing the site look must require editing CSS only.
- Do not include inline `<script>` blocks beyond a single deferred entry-point reference to `script.js`.

## 1.2 CSS Variables (`var(--...)`) & Theme Tokens
- Store all visual tokens in `:root` and theme overrides in `.dark` and/or `@media (prefers-color-scheme: dark)`.
- Define the required semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-subtle`, `--border-error`, `--border-success`.
- Define the supplied palette tokens with neutral names that do not use third-party brand names: `--color-void-canvas`, `--color-midnight-panel`, `--color-deep-slate`, `--color-steel-outline`, `--color-blue-steel`, `--color-muted-fog`, `--color-pale-frost`, `--color-signal-white`, `--color-signal-green`, `--color-link-a`, `--color-link-b`, `--color-link-c`.
- Map semantic tokens to palette tokens, for example `--bg-primary: var(--color-void-canvas);`, `--bg-secondary: var(--color-midnight-panel);`, `--text-primary: var(--color-signal-white);`, `--text-secondary: var(--color-muted-fog);`, `--primary: var(--color-signal-green);`, and `--secondary: var(--color-pale-frost);`.
- Enforce contrast pairing in every theme: light backgrounds must pair with dark text, and dark backgrounds must pair with light text.
- Do not default to pure white backgrounds; use `#fefefe` only where a near-white surface is genuinely required.
- Define `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, and `--z-toast`.
- Define the supplied spacing, radius, and shadow tokens, then alias them to the required generic tokens.
- Elevation must be rendered as exact 1px perimeter or inset rings, never as blurred or offset shadows.

## 1.3 Mandatory Dark Mode Support
- Dark mode must always be defined.
- Provide dark color tokens under `.dark` and/or `@media (prefers-color-scheme: dark)`.
- Switch background and text variables seamlessly without changing HTML structure.
- Persist the user's theme choice in `localStorage`; on first visit, fall back to `prefers-color-scheme`.
- Include a visible theme toggle with correct `aria-pressed` and `aria-label` states.
- The default visual identity is the supplied dark palette; provide an accessible light-mode token set derived from the same blue-black hue family.

## 1.4 Flexbox Layout & Mobile-First Alignment
- Build layout structures with Flexbox.
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- Use mobile-first responsive behavior, convert rows to columns on small viewports, and prevent horizontal scrolling.

## 1.5 Framework Default & Tailwind CSS Integration
- Use Tailwind CSS where useful, loaded as an external resource; all project-specific tokens and component styles must remain in `style.css`.
- All utility classes must map back to CSS variables or generic reusable class names such as `.btn`, `.card`, and `.input-group`.
- Use one consistent class-naming convention across the deliverable; BEM is recommended. Do not mix conventions.

## 1.6 Typography & Icons (Google Fonts Mandatory)
- Use Google Fonts for text and Google Material Symbols/Icons for icons.
- Include Public Sans via Google Fonts and bind it to `--font-public-sans` and `--font-base`.
- Do not use raw inline SVGs or local icon files.
- Exception: code text may use the specified system monospace stack instead of a Google Font: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`.

# 2. COMPONENT DESIGN SPECIFICATIONS TO ENFORCE

## 2.1 Button Component Requirements
- Default state: flex layout with `align-items: center`, `justify-content: center`, and `gap: 0.5rem`; minimum touch target of 44x44px.
- Hover state: visible brightness/shadow shift and `cursor: pointer`.
- Focus state: distinct focus ring using CSS variables for keyboard navigation.
- Active/pressed state: click feedback using `transform: scale(0.97)`.
- Loading state: disable interactions, prevent double-clicks, and render a CSS spinner or animated Google Icon without distorting button dimensions.
- Disabled state: `opacity: 0.5`, greyscale treatment, and `cursor: not-allowed`.
- Success/error states: temporary feedback styles driven by `--text-success` and `--text-error`.
- Destructive actions must be visually distinct in both light and dark themes.

## 2.2 Card Component Requirements
- Default state: flexible Flexbox layout with subtle borders and elevation using `--bg-secondary` and CSS variables.
- Hover state: elevation/shadow shift or subtle transform such as `transform: translateY(-2px)`.
- Focus-within state: highlight card borders when a child link or button receives focus.
- Loading state: CSS shimmer skeleton styling that prevents layout jumps.
- Empty state: structured fallback layout with a Google Icon and clear guidance text.

## 2.3 Form & Input Requirements
- Account for empty, focused, filled, valid, invalid, disabled, and read-only states.
- Use a flex container wrapping a label, input field, and dedicated error feedback container.
- Valid states use success border/icon treatment; invalid states use error border, error text, and error icon treatment.
- Include accessible labels, `aria-invalid`, and `aria-describedby` relationships for error feedback.

## 2.4 Modal / Popup Requirements
- Account for opening, open, loading, success/error, and closing states, all animated through CSS transitions.
- Use a centered flex container with `align-items: center`, a backdrop overlay, a Google Icon close button, keyboard focus trapping, and support for closing via `Esc` or overlay clicks.

## 2.5 FAQ Accordion Requirements
- Account for collapsed and expanded states.
- Make the control fully keyboard operable with visible focus.
- Use `aria-expanded` and `aria-controls` correctly.
- Animate height/opacity smoothly while respecting `prefers-reduced-motion`.

# 3. CORE UX & MICRO-INTERACTION RULES TO ENFORCE

- Make all layouts responsive by default with fluid sizing and no horizontal overflow.
- Apply CSS transitions to all state changes using `transition: var(--transition-normal)` or equivalent, while respecting `prefers-reduced-motion`.
- Ensure sufficient contrast in both light and dark modes.
- Never rely solely on color to communicate state.
- Use semantic HTML5 elements, correct ARIA roles and labels on custom widgets, logical DOM and focus order, full keyboard operability, and `aria-live` regions for dynamic feedback such as form errors, toasts, and loading states.
- Provide visible feedback for every click, hover, and submission.
- Make destructive actions visually distinct in both themes.

# 4. DELIVERABLE & OUTPUT FORMAT

- Deliver separate `index.html`, `style.css`, and `script.js` files.
- Enforce one consistent class-naming convention across the entire deliverable; do not mix conventions.
- Do not submit lorem-ipsum-only content where real copy or labels are expected; placeholders are allowed only where content was genuinely left unspecified.
- Use coherent fictional copy for all sections and components.

# 5. THEME TOKENS, TYPOGRAPHY, AND SECTION INVENTORY

## 5.1 Fictional Brand Constraint
- Invent a fictional brand name, product name, copy, metrics, testimonials, and pricing.
- Never use the real brand name, logo, trademarks, or product names from the source style.
- Ecosystem accent colors may be used only as decorative accents, not as brand or product references.
- Write all user-facing copy in English.

## 5.2 Color Tokens
| Token | Value | Role |
|---|---:|---|
| `--color-void-canvas` | `#020618` | Page background, header field, dark controls, command surfaces |
| `--color-midnight-panel` | `#080e21` | Card surfaces, code-editor body, contained product panels |
| `--color-deep-slate` | `#0f172b` | Selected dark tabs, secondary dark buttons, inset control surfaces |
| `--color-steel-outline` | `#1d293d` | Hairline card outlines, image frames, dark raised button fills |
| `--color-blue-steel` | `#314158` | Inset control rings, subdued control borders, navigation separators |
| `--color-muted-fog` | `#90a1b9` | Body copy, inactive navigation, secondary labels, supporting metadata |
| `--color-pale-frost` | `#e2e8f0` | High-emphasis navigation text, secondary button labels, light icon strokes |
| `--color-signal-white` | `#ffffff` | Display headings, selected tab labels, inverted button fills |
| `--color-signal-green` | `#00dc82` | Filled conversion buttons, release markers, logo treatment, highlighted display words |
| `--color-link-a` | `#42b883` | Decorative ecosystem accent only |
| `--color-link-b` | `#a156fe` | Decorative ecosystem accent only |
| `--color-link-c` | `#fb848e` | Decorative ecosystem accent only |

Semantic aliases must include: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--primary`, `--secondary`, `--border-default`, `--border-subtle`, `--border-error`, `--border-success`. Suggested accessible success/error colors are `#22c55e` and `#f87171`; verify contrast in both themes.

## 5.3 Typography Tokens
Use Google Fonts for Public Sans. Use the specified system monospace stack only for code text.

Public Sans roles:
- Micro-label: 500, 10px, line-height 1.2
- Caption: 400, 12px, line-height 1.33
- Nav: 500, 14px, line-height 1.43
- Feature title: 600, 14px, line-height 1.43
- Body: 400, 16px, line-height 1.5
- Body strong: 500, 16px, line-height 1.5
- Eyebrow heading: 500, 18px, line-height 1.56
- Section display: 700, 48px, line-height 1.0, letter-spacing -1.2px
- Hero display: 700, 72px, line-height 1.0, letter-spacing -1.8px

Code text:
- Family: system monospace stack
- Weight: 400
- Size: 14px
- Line height: 1.71
- Letter spacing: normal

Do not set display headings at semibold weights or positive tracking; retain Public Sans 700 with -0.025em tracking at 48px and 72px.

## 5.4 Spacing, Radius, Shadows, and Layout
- Base unit: 4px.
- Density: compact.
- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 44, 48, 64, 80, 96, 128px.
- Border radius: tabs 6px, cards 8px, pills 16777200px, images 6px, inputs 6px, buttons 6px. Use pill radius only for compact release markers and badge-like status controls.
- Shadows: use only the supplied 1px ring definitions; no blur or vertical offset.
- Page max-width: 1440px.
- Section gap: 64px.
- Card padding: 12px.
- Element gap: 8px.

## 5.5 Component and Section Inventory
Build a complete landing page with these sections and components:

Header:
- 64px-tall top navigation on Void Canvas with a 1px Steel Outline bottom divider.
- Brand, documentation links, utility controls, and repository count.
- Navigation at 14px/500 Public Sans in Muted Fog; reserve Pale Frost for active utility labels.
- Space compact groups on the 8px grid.

Release Announcement Pill:
- 12px/600 Public Sans in Signal Green inside a fully pill-shaped control.
- Compact 6px internal rhythm; place above the hero heading.

Hero:
- Left-aligned text block on Void Canvas.
- Public Sans 72px/72px 700 white headline at -1.8px tracking.
- Color one short phrase in Signal Green.
- Place an 8px-radius Midnight Panel code editor demonstration to the right.
- Include a small command snippet below the action row.
- Action pair: Signal Green filled button with 16px/24px Public Sans 500 Deep Slate text beside a dark outlined control with Pale Frost text and a 1px inset Blue Steel ring.

Features:
- Three feature cards.
- Use contained cards with Midnight Panel, 8px radius, and 1px Steel Outline ring.
- Each card uses a Signal Green outline icon, 14px/600 Pale Frost title, and 14px/400 Muted Fog copy.
- Keep 8px vertical separation inside each card.
- Do not add large soft cards around any additional borderless feature cells.

How It Works:
- Three steps.
- Use numbered step markers in Signal Green, concise titles, and supporting copy.
- Present steps in a responsive row that becomes a column on small viewports.

Testimonials:
- Three testimonial cards.
- Use Midnight Panel, 8px radius, and 1px Steel Outline ring.
- Include quote, author name, role, and optional avatar/icon using Google Material Symbols.

Pricing:
- Three pricing tiers.
- Use contained cards with plan name, price, feature list, and CTA.
- Visually distinguish the recommended tier with a Signal Green border or label without turning all buttons green.

FAQ:
- Use the accessible accordion component specified above.
- Include at least five questions with concise answers.

Final CTA:
- Contained panel with a strong heading, supporting copy, and the public action button pair.

Footer:
- Secondary links, optional newsletter form, copyright, and small ecosystem accent links.
- Use form and input states as specified.

Editor Demonstration Panel:
- Outer panel on Midnight Panel with 8px radius and 1px Steel Outline ring.
- Deep Slate for selected file rows, Signal White for selected labels, Muted Fog for inactive tabs.
- 14px/400 ui-monospace for code.

Editor Tab:
- 6px radius, 6px 10px padding.
- Selected tabs use Deep Slate with Signal White text.
- Unselected tabs are transparent with Muted Fog text.

Module Repository Card:
- Midnight Panel, 8px radius, 1px Steel Outline ring.
- 12px internal padding.
- 16px/500 Pale Frost package text.
- 14px/400 Muted Fog description text.
- 8px gaps between icon, title, and metrics.

Feature Capability Item:
- Flush to Void Canvas with no card fill or shadow.
- Small Signal Green outline icon.
- 14px/600 Pale Frost title.
- 14px/400 Muted Fog copy.
- 8px vertical separation.

Command Snippet:
- Void Canvas with 1px Steel Outline border and 6px radius.
- 14px/400 ui-monospace Pale Frost text.
- 8px vertical and 12px horizontal padding.
- Compact copy icon at the trailing edge.

Carousel Pagination Dot:
- Small circular markers on Void Canvas with 6px gaps.
- Active marker: Signal White.
- Inactive markers: Steel Outline.

Global Do's and Don'ts:
- Do use Void Canvas as the default page field and Midnight Panel for contained product surfaces.
- Do set display headlines in Public Sans 700 at 72px/72px or 48px/48px with -1.8px or -1.2px tracking.
- Do use Signal Green for filled conversion actions, release markers, logo treatment, and isolated headline emphasis.
- Do apply 6px radii to controls and inputs and 8px radii to standard cards.
- Do build spacing from the 4px base unit, using 8px element gaps, 12px card padding, and 64px section gaps.
- Do outline panels and controls with 1px Steel Outline or inset Blue Steel rings instead of soft cast shadows.
- Do keep body and inactive navigation copy in Muted Fog; reserve Signal White for headings and selected states.
- Do not use gradients.
- Do not round controls into 9999px pills except compact release markers and badge-like status controls.
- Do not use shadows with blur or vertical offset.
- Do not turn all buttons green; use Signal Green only for conversion-oriented public actions and use dark or white utility variants elsewhere.
- Do not introduce large soft cards around feature-grid items when using the borderless capability pattern.
- Do not set display headings at semibold weights or positive tracking.
- Do not use ecosystem accent colors as global semantic status colors.
