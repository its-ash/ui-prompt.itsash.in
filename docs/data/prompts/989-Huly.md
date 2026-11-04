1. Role and Objective
You are an expert frontend coding AI. Build a complete, production-ready landing page for a fictional brand inspired by the supplied "Huly" style reference. Invent a fictional brand name, product name, logo concept, and all copy. Never use the real brand name "Huly", its logo, trademarks, or product names anywhere in the page, assets, alt text, or metadata. Reuse only the visual style, tokens, layout rhythm, and component language.

2. Mandatory Architecture Rules
2.1 CSS-First Architecture and Zero Inline CSS
- Keep all styling in a dedicated style.css file.
- Do not use style="..." anywhere in HTML.
- Target all design properties, layout rules, and states through class or ID selectors only.
- Keep HTML semantic, clean, and visually agnostic so the look can change by editing CSS only.

2.2 CSS Variables and Theme Tokens
Store all visual tokens in :root and theme classes using CSS variables. Include at minimum:
Colors: --primary, --secondary, --bg-primary, --bg-secondary, --text-primary, --text-secondary, --text-success, --text-error, --border-default, --border-error, --border-success.
Huly-inspired color tokens: --color-obsidian-canvas: #303236; --color-void: #090a0c; --color-charcoal-card: #111111; --color-slate-edge: #4a4b50; --color-iron-veil: #6b6c6d; --color-smoke: #95979e; --color-ash: #a9a9aa; --color-frost: #d1d1d1; --color-linen: #e5e5e7; --color-snow: #fefefe; --color-electric-iris: #5683da; --color-ember-pulse: #ff8964; --color-molasses: #5a250a.
Typography: --font-base, --font-display, --text-caption, --text-body, --text-body-lg, --text-subheading, --text-heading-sm, --text-heading, --text-display-sm, --text-display.
Radius and shadows: --radius-sm, --radius-md, --radius-lg, --shadow-sm, --shadow-md, --shadow-xl, --shadow-subtle.
Spacing and transitions: --spacing-gap, --transition-fast, --transition-normal, --ease-standard.
Elevation/stacking: --z-dropdown, --z-modal, --z-toast.
Enforce contrast pairing in every theme: light backgrounds pair with dark text, dark backgrounds pair with light text. Do not use pure white as the default light background; use #fefefe where a near-white is needed. Use #ffffff only where the Huly style specifically calls for it as a foreground or light-section canvas.

2.3 Mandatory Dark Mode Support
- Provide dark mode tokens under @media (prefers-color-scheme: dark) and/or a .dark class selector.
- Switch background and text variables seamlessly without HTML restructuring.
- Persist the user's theme choice in localStorage, falling back to prefers-color-scheme on first visit.
- Provide a visible theme toggle with correct aria-pressed and aria-label states.

2.4 Flexbox Layout and Mobile-First Alignment
- Build all layout structures with Flexbox.
- Every flex container must default to align-items: center unless there is an explicitly justified exception.
- Make all flex layouts mobile-responsive, converting rows to columns on smaller viewports.
- Prevent horizontal scrolling.

2.5 Framework and Tailwind CSS Integration
- Use Tailwind CSS or clean custom CSS driven by Tailwind @layer and @apply directives.
- Map all utility classes back to CSS variables or reusable component classes such as .btn, .card, and .input-group.
- Enforce one consistent class-naming convention, such as BEM, across the entire deliverable. Never mix conventions.

2.6 Typography and Icons
- Use Google Fonts for text and icons only.
- Load Inter for functional UI text and a display substitute such as Sora or General Sans for hero/display moments, binding them to --font-base and --font-display.
- Use Google Material Symbols/Icons. Do not use raw inline SVGs or local icon files.

3. Theme and Visual Direction
- Atmosphere: cosmic workspace with near-black canvas, violet-to-amber aurora, layered graphite surfaces.
- Use Electric Iris (#5683da) as the primary action color and Ember Pulse (#ff8964) as warm punctuation.
- Use pill geometry (9999px radius) for buttons, tags, and pill controls.
- Use 12px radius for cards, 4px for inputs, and 30px for panels.
- Reserve the display font for 28px and above; never use it for body, nav, or anything below 22px.
- Apply the aurora gradient as a narrow vertical or radial beam, never as a full background fill.
- Alternate dark and light sections with 96px vertical gaps.
- Use borders and color contrast for elevation on dark cards; avoid drop shadows on dark cards.
- Use monochrome line icons only.

4. Component Design Specifications
4.1 Button Component Requirements
Style all states via CSS classes:
- Default: flex layout, align-items: center, justify-content: center, gap: 0.5rem, minimum 44x44px touch target.
- Hover: visual shift with cursor: pointer.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: transform: scale(0.97).
- Loading: disable interactions, prevent double-clicks, render a CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: opacity: 0.5, greyscale, cursor: not-allowed.
- Success/Error: temporary feedback styles using --text-success or --text-error.
- Include Primary Pill, Ghost Pill, White Pill, and Danger variants.

4.2 Card Component Requirements
- Default: flexible Flexbox layout, subtle borders, elevation using CSS variables.
- Hover: elevation/shadow shift or subtle transform: translateY(-2px).
- Focus-within: highlight card borders when a child link or button receives focus.
- Loading: skeleton shimmer animation without layout jumps.
- Empty state: Google Icon plus clear guidance text.
- Include Feature Card, MetaBrain Card, Product Screenshot Frame, and Kanban/Inbox preview cards.

4.3 Form and Input Requirements
- States: Empty, Focused, Filled, Valid, Invalid, Disabled, Read-only.
- Structure: flex container wrapping label, input field, and dedicated error feedback container.
- Use success/error borders, icons, and text.

4.4 Modal and Popup Requirements
- States: Opening, Open, Loading, Success/Error, Closing, all animated via CSS transitions.
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close on Esc and overlay click.

5. Core UX and Micro-Interaction Rules
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth CSS transitions on all state changes, respecting prefers-reduced-motion.
- Accessibility: sufficient contrast in both light and dark modes, semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, aria-live regions for dynamic feedback.
- Never rely solely on color to communicate state.
- Every click, hover, or submission must trigger visible feedback.
- Destructive actions must be visually distinct in both themes.

6. Deliverables
- Separate index.html, style.css, and script.js files.
- No inline script blocks beyond a single deferred entry-point reference.
- Consistent class naming across the entire deliverable.
- No lorem-ipsum-only submissions where real copy/labels are expected; placeholders only where content is genuinely unspecified.

7. Landing Page Sections to Build
Build these sections in order:
- Hero with aurora background, display headline, supporting copy, primary CTA, secondary CTA, and product screenshot frame.
- Features section with 3 cards.
- How It Works section with 3 steps.
- Testimonials section.
- Pricing section with 3 tiers.
- FAQ section.
- Final CTA section.
- Footer with secondary links.

8. Implementation Notes for the Coding AI
- Decide each section's background mode first: dark canvas for product-heavy sections, white or linen for editorial sections. Do not blend modes within one component.
- Use a max-width 1200px content area below the full-bleed hero.
- Use 96px section gaps.
- Use 24px card padding and 12px element gaps.
- Use the aurora gradient once per page as a narrow vertical beam.
- Use radial card glows sparingly and at low opacity.
- Ensure all user-facing copy is in English.
- Do not include any real brand references or trademarked names.

Output only the finished coding prompt. No preamble and no closing commentary.
