You are an expert front-end coding agent. Build a complete, responsive landing page as three separate files: `index.html`, `style.css`, and `script.js`. Do not include explanations, commentary, or markdown outside the deliverable. The page must reuse the “Portal” visual language below, but invent a fictional brand name, product, and all copy. Never use the real brand name “Portal,” its logo, trademarks, or product names in any user-facing content. The only permitted use of “Portal” is as the internal style-reference label in this prompt.

## 1. Mandatory Architecture

### 1.1 CSS-First Architecture & Zero Inline CSS
- Keep all styling in `style.css`.
- Do not use `style="..."` anywhere in the HTML.
- Use semantic HTML5 elements and keep markup agnostic of visual styling.
- Use Tailwind CSS utility classes for layout, spacing, and responsive behavior.
- Define reusable component classes (`.btn`, `.card`, `.nav-capsule`, `.badge`, etc.) in `style.css` using `@layer components`.
- Do not introduce a second naming convention such as BEM alongside Tailwind.

### 1.2 CSS Variables & Theme Tokens
Define all tokens in `:root` and theme classes. Use these exact token names:

**Colors**
- `--color-signal-blue: #007aff;`
- `--color-ink-black: #000000;`
- `--color-graphite: #3e3e3e;`
- `--color-smoke: #636363;`
- `--color-paper-white: #ffffff;`
- `--color-ash-mist: #f7f7f7;`
- `--color-dusk-gradient: linear-gradient(180deg, #4a7ff2 0%, #7b7ed8 30%, #c98ab5 65%, #e8a87c 100%);`

**Required aliases**
- `--primary: var(--color-signal-blue);`
- `--secondary: var(--color-graphite);`
- `--bg-primary: var(--color-ash-mist);`
- `--bg-secondary: var(--color-paper-white);`
- `--text-primary: var(--color-ink-black);`
- `--text-secondary: var(--color-graphite);`
- `--text-muted: var(--color-smoke);`
- `--text-success: var(--color-signal-blue);`
- `--text-error: #ff3b30;`
- `--border-default: var(--color-ash-mist);`
- `--border-strong: var(--color-ink-black);`
- `--border-error: #ff3b30;`
- `--border-success: var(--color-signal-blue);`

**Typography**
- `--font-display: "Playfair Display", Georgia, serif;`
- `--font-body: "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;`
- `--font-system: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;`
- `--font-base: var(--font-body);`
- Apply OpenType features to display and body text: `"blwf", "cv03", "cv04", "cv09", "cv11"`.
- Implement the type scale as tokens/classes: `--text-micro` (10px), `--text-caption` (12px), `--text-body-sm` (14px), `--text-body` (16px), `--text-heading-sm` (18px), `--text-heading` (36px), `--text-display` (48px), with matching line heights and letter spacing.

**Spacing**
- `--spacing-4: 4px;`
- `--spacing-5: 5px;`
- `--spacing-6: 6px;`
- `--spacing-8: 8px;`
- `--spacing-10: 10px;`
- `--spacing-12: 12px;`
- `--spacing-14: 14px;`
- `--spacing-16: 16px;`
- `--spacing-20: 20px;`
- `--spacing-24: 24px;`
- `--spacing-36: 36px;`
- `--spacing-40: 40px;`
- `--spacing-45: 45px;`
- `--spacing-60: 60px;`
- `--spacing-80: 80px;`
- `--spacing-100: 100px;`
- `--spacing-gap: 10px;`
- `--section-gap: clamp(80px, 10vw, 120px);`

**Radius**
- `--radius-sm: 16px;`
- `--radius-md: 22px;`
- `--radius-lg: 30px;`
- `--radius-nav: 22px;`
- `--radius-card: 24px;`
- `--radius-image: 32px;`
- `--radius-button: 50px;`
- `--radius-badge: 50px;`

**Shadows / Elevation**
- `--shadow-subtle: rgb(247, 247, 247) 0px 0px 0px 5px;`
- `--shadow-subtle-4: rgb(247, 247, 247) 0px 0px 0px 1px;`
- Define the remaining subtle shadow tokens with equally soft, low-contrast values.
- Cards and mockups use `0px 0px 0px 5px #f7f7f7` as the primary elevation technique.
- Filled buttons use `inset 0 1px 0 0 #ffffff, 0 0 0 1px rgba(0,0,0,0.15), 0 3px 2px 0 rgba(0,0,0,0.06)`.

**Z-index**
- `--z-nav: 900;`
- `--z-dropdown: 1000;`
- `--z-modal: 1040;`
- `--z-toast: 1080;`

**Transitions**
- `--transition-fast: 150ms ease;`
- `--transition-normal: 200ms ease;`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);`

### 1.3 Mandatory Dark Mode Support
- Implement dark mode under `@media (prefers-color-scheme: dark)` and a `.dark` class on the root element.
- Persist the user’s theme choice in `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible theme toggle with correct `aria-pressed` and `aria-label`.
- In dark mode, maintain contrast pairing: dark canvas, dark cards, light text, adapted borders, and adapted glow rings.
- Keep `#007aff` as the functional accent in both themes.
- Dark mode canvas should be near-black neutral, card surfaces slightly lighter, text light, muted text softer, and borders subtle. Do not alter the accent hue.

### 1.4 Flexbox Layout & Mobile-First Alignment
- Build all layouts with Flexbox.
- Every flex container must default to `align-items: center` unless a documented exception requires `stretch` or `flex-start`.
- Make all layouts mobile-first and responsive. Convert rows to columns on small viewports.
- Prevent horizontal scrolling at all breakpoints.

### 1.5 Framework Default & Tailwind CSS Integration
- Use Tailwind CSS via CDN in `index.html`.
- Use Tailwind utilities for layout, flexbox, gap, padding, responsive behavior, and visibility.
- Define theme tokens and component classes in `style.css`.
- Do not use inline styles.

### 1.6 Typography & Icons
- Load Google Fonts: Playfair Display (400), Inter (400, 500, 600), and Material Symbols Outlined.
- Use Playfair Display as the substitute for Perfectly Nineties.
- Use Material Symbols for all icons. Do not use raw inline SVGs or local icon files.
- Bind `--font-base` to Inter.

## 2. Component Design Specifications

### 2.1 Button Component
Style all states via CSS classes:
- **Default:** Flex layout, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, minimum 44x44px touch target.
- **Hover:** Visual shift, `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disable interactions, prevent double-clicks, render a CSS spinner or animated Material Symbol without changing button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles using `--text-success` or `--text-error`.
- **Destructive:** `.btn--danger` must be visually distinct in both light and dark themes.

Button variants:
- **Hero Pill Button:** White background, black text, 50px radius, padding 14px 24px, Inter 600 at 14-16px, no border. Use only on the gradient hero.
- **Ghost Pill Button:** Transparent background, 1.5px border, 50px radius, padding 12px 22px, Inter 500 at 14-16px. On the hero, use white border/text for contrast; on light surfaces, use black border/text.
- **Primary Action Button:** `#007aff` background, white text, 50px radius, Inter 600 at 14-16px. Use for all other primary CTAs.

### 2.2 Card Component
For any interactive card, include:
- **Default:** Flexible Flexbox layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- **Hover:** Elevation/shadow shift or `transform: translateY(-2px)`.
- **Focus-within:** Highlight card border when a child link or button receives focus.
- **Loading (Skeleton):** Shimmer animation defined in CSS to prevent layout jumps.
- **Empty State:** Structured fallback layout with a Material Symbol and clear guidance text.

### 2.3 Form & Input Requirements
If any input is used (including a newsletter or contact field), implement:
- Empty, Focused, Filled, Valid, Invalid, Disabled, and Read-only states.
- Flex container wrapping label, input, and dedicated error feedback container.
- Error states use `--border-error`, `--text-error`, and an error icon.

### 2.4 Modal / Popup Requirements
No modal is required. If one is added, implement opening, open, loading, success/error, and closing states with backdrop, close button, focus trapping, and `Esc`/overlay dismissal.

## 3. Core UX & Micro-Interaction Rules
- Make the page responsive by default with fluid sizing and no horizontal overflow.
- Use CSS transitions on all state changes (`transition: var(--transition-normal)`).
- Respect `prefers-reduced-motion`.
- Ensure sufficient contrast in both light and dark modes.
- Never rely solely on color to communicate state.
- Use semantic HTML5, correct ARIA roles/labels, logical focus order, full keyboard operability, and `aria-live` regions for dynamic feedback.
- Every click, hover, and submission must trigger a visible state change.
- Destructive actions must be visually distinct in both themes.

## 4. Deliverable & Output Format
- Output separate `index.html`, `style.css`, and `script.js` files.
- Include one deferred script reference in HTML: `<script src="script.js" defer></script>`.
- Use one consistent class convention across the deliverable.
- Do not use lorem ipsum. Invent concise, realistic fictional copy for every section.
- Do not use unrequested placeholders where real copy is expected.

## 5. Page Structure & Content

Build these sections in this order:

### 5.1 Floating Navigation Capsule
- 22px radius, white background, 1px border, 5px `#f7f7f7` glow ring.
- Float at top with 16-24px margin, not full-width.
- Left: gradient circular brand icon (blue-to-violet, 40px) plus fictional brand wordmark in Inter 600 18px black.
- Right: nav links such as Features, Pricing, and Contact in Inter 500 14px black, 8px horizontal padding, 4px vertical padding, no underline, hover opacity 0.6 with 200ms transition.
- Include the theme toggle in the nav capsule.

### 5.2 Hero Section
- Full-bleed `--color-dusk-gradient` background.
- Render the bottom landscape silhouette with CSS-only shapes/gradients; do not use images or inline SVGs.
- Display headline in Playfair Display 400 at 48px desktop / 36px mobile, line-height 1.0, white text for contrast on the gradient.
- Body copy in Inter 400 at 16px, white or very light text for contrast on the gradient.
- Include Hero Pill Button and Ghost Pill Button (white outline on hero).
- Include a white device mockup card with 22-30px radius, 5px glow ring, and an inner screen showing a fictional product UI with project cards and status badges. The mockup overlaps the bottom landscape silhouette.
- Exception: On the gradient hero, use white text and white-outlined buttons for contrast. All headings and buttons on light surfaces remain black as specified.

### 5.3 Features Section
- Three feature cards in a responsive flex row: 3 columns desktop, 2 tablet, 1 mobile.
- Cards: white background, 22-30px radius, 20px padding, 5px glow ring.
- Each card has a Material Symbol icon, title in Inter 600 16-18px black, and body in Inter 400 14-16px graphite.
- Implement card hover, focus-within, loading skeleton, and empty state.

### 5.4 How It Works Section
- Three steps in a responsive flex layout.
- Each step: numbered circular badge in `#007aff`, title in Inter 600 16-18px black, description in Inter 400 14-16px graphite.
- Use generous spacing and no dense grids.

### 5.5 Testimonials Section
- Stacked editorial quotes, not a card grid.
- Centered text column with 640-720px max width.
- Quote in Inter 400 at 18px, graphite, line-height 1.35.
- Attribution in Inter 500 14px black with role in Inter 400 14px smoke.
- Use a Material Symbol as an avatar placeholder.

### 5.6 Pricing Section
- Three pricing tiers in a responsive flex row: 3 columns desktop, 1 mobile.
- Cards: white background, 22-30px radius, 20px padding, 5px glow ring.
- Middle tier highlighted with a `#007aff` border or accent badge.
- Price in Inter 600 36px black, billing note in Inter 400 14px smoke.
- Feature list with Material Symbol check icons.
- CTA: primary action button for highlighted tier, ghost button for others.
- Include a “Most popular” pill badge with 50px radius.

### 5.7 FAQ Section
- Single-column accordion, max width 720px.
- Use native `<details>`/`<summary>` styled as an accordion.
- Question in Inter 500 16px black.
- Answer in Inter 400 14px graphite.
- Smooth open/close animation respecting reduced motion.

### 5.8 Final CTA Section
- Centered editorial block on `#f7f7f7` canvas.
- Headline in Playfair Display 400 at 36px black, line-height 1.0.
- Body in Inter 400 at 16px graphite.
- One primary action button and one ghost button.

### 5.9 Footer
- Flex row that wraps on mobile.
- Include fictional brand mark, secondary links (Product, Pricing, FAQ, Contact, Privacy, Terms), and copyright text.
- Use Inter 400 14px smoke for links and muted text.
- Include theme toggle if not already present in nav.

## 6. Style-Specific Rules
- Use `#007aff` only for functional accents: primary CTA fills, active states, brand icon highlights, inline links, and status badges.
- Do not introduce a second chromatic accent. Error feedback may use `#ff3b30` only for validation and destructive states.
- Set display headings in Playfair Display 400 at 36-48px, line-height 1.0.
- Do not use the display serif for body, captions, buttons, or UI labels.
- Make every button a full pill at 50px radius.
- Keep body text in Inter at 14-16px, line-height 1.30-1.35, letter-spacing -0.02em.
- Round cards and images to 22-30px.
- Default page canvas to `#f7f7f7` with cards on `#ffffff`.
- Use the 5px `#f7f7f7` glow ring as the primary elevation technique instead of drop shadows.
- Use `#000000` for headings and primary borders, `#3e3e3e` for body text, and `#636363` for muted helper text.
- Do not use sharp corners below 16px on cards or 50px on buttons.
- Do not place black text directly on chromatic or gradient backgrounds.

## 7. Implementation Notes
- Use `max-width: 1200px` for the main content container.
- Use `--section-gap` between major sections.
- Use card padding of 20px and element gap of 10px.
- Ensure all flex containers default to `align-items: center`.
- Use Tailwind responsive prefixes for mobile-first behavior.
- Respect `prefers-reduced-motion` for all transitions and animations.
- Ensure keyboard accessibility for nav links, buttons, accordion, and theme toggle.
- Use `aria-live` for any dynamic feedback such as loading or form validation.
