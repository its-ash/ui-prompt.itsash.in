Act as a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready Landing Page on the first attempt. Do not ask clarifying questions — where this specification is silent, make expert decisions consistent with the rules below.

**PROJECT BRIEF**
- **Theme:** Corporate Radial Process — professional, structured, organizational; Modern Corporate era; flat, vector-clean, matte finish.
- **Visual direction:** corporate landing page, radial process visualization, clean near-white background, teal accent, structured layout, flat design.
- **Product context:** a fictional B2B SaaS for business process orchestration/automation. Invent a coherent brand name and write realistic, specific English marketing copy — lorem ipsum is prohibited.
- **Sections (in order):** Sticky Header/Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials (3 cards), Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
- **Output category:** Corporate & SaaS.

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in `index.html`.
- Target every design property, layout rule, and state via class or ID selectors only.
- HTML must remain semantic and style-agnostic: re-theming the site requires editing only `style.css`, never the markup.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`:
- **Colors:** `--primary: #008B8B`, `--secondary: #20B2AA`, `--bg-primary`, `--bg-secondary` (near-white, subtly teal-tinted surface), `--text-primary: #333333`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- **Process segment tokens:** `--segment-1: #008B8B`, `--segment-2: #20B2AA`, `--segment-3: #48D1CC`.
- **Radius/Shadows:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md` (keep shadows minimal — matte, flat finish).
- **Spacing/Motion:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- **Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Typography:** `--font-base` bound to `'Open Sans'`.
- **Contrast pairing:** every light background token pairs with a dark text token and every dark background token pairs with a light text token — enforced in every theme, not just the default.
- **Exception clause (background):** the source palette requests `#FFFFFF`; per mandatory token rules, use `#FEFEFE` for `--bg-primary` — pure `#FFFFFF` is prohibited.

**1.3 Mandatory Dark Mode**
- Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class: deep teal-charcoal surfaces (e.g., `#0C1B1A`/`#122524` range), light text (`#EAF5F4` range), and brightened teal accents (e.g., `#4FD1C5` range) so the 1→2→3 segment progression remains recognizable and contrast-compliant.
- Background and text variables must switch with zero HTML restructuring.
- Persist the user's choice in `localStorage`, falling back to `prefers-color-scheme` on first visit; render a visible toggle in the header with correct `aria-pressed` and `aria-label` state.
- **Exception clause (dark mode):** the source spec flags dark mode as unsupported ("✓ Full / ✗ No"); dark mode is mandatory under these architecture rules and must be fully implemented regardless.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structure with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- Mobile-first: rows collapse to columns on small viewports; no horizontal scrolling at any width from 320px up.
- Circular/radial elements use `border-radius: 50%` with `display: flex; align-items: center; justify-content: center`, per the source CSS technical.

**1.5 Framework & Naming Convention**
- Use clean custom CSS in `style.css` (optionally organized via Tailwind's `@layer`/`@apply` if introduced). All reusable classes (`.btn`, `.card`, `.input-group`, `.process-arc`) must map back to the CSS variables above.
- One naming convention only: BEM (`.block__element--modifier`). Never mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load `'Open Sans'` (weights 400, 600, 700) via a Google Fonts `<link>` and bind it to `--font-base`.
- All icons and glyphs are Google Material Symbols — including the white glyphs inside the process arc segments. Raw inline SVGs and local icon files are forbidden.
- **Exception clause (vector aesthetic):** the spec's "flat vector" look must be achieved with CSS-drawn shapes (conic-gradient arcs, circles, borders) and Material Symbols; inline SVG remains prohibited.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. Primary = solid `--primary` with light text; secondary = teal outline.
- **Hover:** brightness/shadow shift with `cursor: pointer`. **Focus:** distinct ring via `outline`/`box-shadow` using CSS variables. **Active:** `transform: scale(0.97)`.
- **Loading:** disables interaction, prevents double-clicks, renders a CSS spinner or animated Material Icon without distorting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success`/`--text-error`, announced via `aria-live`.
- `.btn-danger` must be visually distinct in both light and dark themes.

**2.2 Cards (`.card` — Features, Testimonials, Pricing)**
- **Default:** flexible Flexbox layout, `--bg-secondary` surface, 1px `--border-default`, `--radius-md`, `--shadow-sm` — flat and matte, no gloss or heavy gradients.
- **Hover:** `translateY(-2px)` and/or shadow step-up. **Focus-within:** border highlight when a child control receives focus.
- **Loading (skeleton):** shimmer animation defined in CSS, sized to prevent layout jumps. **Empty state:** Material Icon plus clear guidance text.
- **Pricing variant:** `.card--featured` (middle tier) with `--primary` border, a "Most popular" badge, and elevated shadow — must stand out in both themes.

**2.3 Forms & Inputs (`.input-group`)**
- The Final CTA includes an email capture: a flex container wrapping a `<label>`, `<input type="email">`, and a dedicated error feedback element.
- Style all states: empty, focused (outline ring), filled, valid (success border + Material check icon), invalid (error border, error text, error icon), disabled, read-only.
- Errors are announced in an `aria-live` region; never rely on color alone — pair color with icon and text.

**2.4 Modal / Popup**
- Include at least one modal ("Book a demo"), with states for opening, open, loading, success/error, and closing — all animated via CSS transitions.
- Centered flex container (`align-items: center`), backdrop overlay, Material Icon close button, keyboard focus trapping, and closing via `Esc` or overlay click.

**2.5 Section-by-Section Requirements**
- **Header (sticky):** logo (Material Symbol + wordmark), anchor navigation to all sections, theme toggle (per 1.3), compact "Get started" `.btn--primary`.
- **Hero:** eyebrow badge, H1 with one teal-accented word, supporting subcopy, dual CTAs (primary + secondary), and a CSS-built radial motif (a partial ring echoing the three segment colors) as the visual anchor — decorative, `aria-hidden`.
- **Features:** 3 cards, each with a circular teal-tinted Material Symbol token (`border-radius: 50%`), title, and description.
- **How It Works (signature component):** a semi-circular segmented process arc built in pure CSS (e.g., `conic-gradient` with hard color stops masked into a ring, or three rotated arc segments), with Segment 1 `#008B8B`, Segment 2 `#20B2AA`, Segment 3 `#48D1CC`, each containing a simple white Material Symbol glyph, and step numbers 01/02/03 positioned along the arc. The arc is decorative (`aria-hidden`); the same three steps must also render as an accessible, keyboard-readable ordered list with title and description per step. On mobile, the arc scales fluidly or converts to a vertical timeline using the three segment colors as node accents — no overflow, no horizontal scroll.
- **Testimonials:** 3 cards with a Material "format_quote" icon, quote, name, role/company, and a circular avatar token (Material "person" icon inside a `border-radius: 50%` circle tinted with the teal scale — no external images required).
- **Pricing:** 3 tiers, each with price, feature list (Material "check" icons), and a CTA; the middle tier uses `.card--featured`.
- **FAQ:** accessible accordion — each question is a `<button>` with `aria-expanded` and `aria-controls`, panels animated via CSS, fully keyboard operable.
- **Final CTA:** full-width band on `--primary` with light text (contrast pairing enforced), headline, and the email capture form from 2.3 with visible success/error feedback.
- **Footer:** secondary link columns (Product, Company, Resources, Legal), social icons as Material Symbols, copyright line; links use `--text-secondary` with visible hover/focus states.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type and spacing, standard breakpoints, zero horizontal overflow from 320px up.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; fully respect `prefers-reduced-motion`.
- **Accessibility (a11y):** AA contrast in both light and dark modes; never rely on color alone to communicate state; semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`); correct ARIA roles/labels on the theme toggle, accordion, modal, and form feedback; logical DOM/focus order with a skip-to-content link; full keyboard operability; `aria-live` regions for all dynamic feedback (form errors, loading, success).
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Flat matte finish throughout:** minimal shadows, clean vector-like edges, no glossy surfaces.

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** separate `index.html`, `style.css`, and `script.js` — complete and runnable. No inline `<script>` blocks beyond a single deferred entry point (`<script src="script.js" defer>`); no inline styles; no inline event handlers.
- **script.js scope:** theme toggle with `localStorage` persistence, accordion behavior, modal open/close with focus trap, form validation states with `aria-live` feedback, button loading states, and reduced-motion-aware smooth anchor scrolling.
- **Copy:** all user-facing copy in English, realistic and specific to the fictional process-automation SaaS — no lorem ipsum.
- **Naming:** consistent BEM across all files; all CSS variable names, class names, and file names in English/ASCII.
- Generate the final code immediately, on the first attempt, with no placeholders for any content specified above.
