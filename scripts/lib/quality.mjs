// Automated design-brief gates for generated demo pages (Playwright).
// Returns a list of human-readable issues; empty list = page passes.

const DESKTOP = { width: 1280, height: 800 };
const MOBILE = { width: 390, height: 844 };

export async function createQuality(browser) {
  const desk = await browser.newContext({ viewport: DESKTOP, colorScheme: 'light', reducedMotion: 'reduce' });
  const mob = await browser.newContext({ viewport: MOBILE, colorScheme: 'light', reducedMotion: 'reduce', hasTouch: true });

  async function inspect(file) {
    const issues = [];
    const dp = await desk.newPage();
    const errors = [];
    dp.on('pageerror', (e) => errors.push(e.message));
    try {
      await dp.goto(`file://${file}`, { waitUntil: 'networkidle', timeout: 20000 }).catch(() => {});
      await dp.waitForTimeout(800);
      const d = await dp.evaluate(() => {
        const vis = (el) => {
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05;
        };
        const main = document.querySelector('main') ?? document.body;
        const hero = document.querySelector('#hero, .hero, [class^="hero"], [class*=" hero"]') ?? main.querySelector('section, header + *') ?? main;
        const ctas = [...hero.querySelectorAll('a, button')].filter(
          (e) => vis(e) && !e.closest('header, nav') && e.id !== 'theme-toggle' && (e.textContent ?? '').trim().length > 1
        );
        const firstCta = ctas[0]?.getBoundingClientRect().bottom ?? null;
        const h1 = document.querySelector('h1');
        const usesSymbols = [...document.querySelectorAll('[class*="material-symbols"], [class*="material-icons"]')]
          .map((e) => [...e.classList].find((c) => /^material-(symbols|icons)/.test(c)))
          .filter(Boolean);
        const links = [...document.querySelectorAll('link[href*="fonts.googleapis.com"]')].map((l) => l.href.toLowerCase());
        const missingFonts = [...new Set(usesSymbols)].filter((c) => {
          const fam = c.replace(/-/g, '+').replace('material+symbols+', 'material+symbols+').toLowerCase();
          return !links.some((h) => h.includes(fam.replace('material+icons', 'material+icons')));
        });
        // An icon-font glyph renders ~1em wide; a raw ligature word in a fallback font is much wider.
        const rawIcons = [...document.querySelectorAll('[class*="material-symbols"], [class*="material-icons"]')]
          .filter((e) => {
            const t = (e.textContent ?? '').trim();
            const fs = parseFloat(getComputedStyle(e).fontSize) || 16;
            if (t.length < 4 || !/^[a-z0-9_]+$/.test(t)) return false;
            const r = document.createRange();
            r.selectNodeContents(e);
            return r.getBoundingClientRect().width > fs * 1.6;
          })
          .map((e) => e.textContent.trim());
        return {
          rawIcons: [...new Set(rawIcons)].slice(0, 4),
          firstCta,
          h1: !!h1,
          h1Height: h1 ? h1.getBoundingClientRect().height : 0,
          missingFonts,
          year: /20(1\d|2[0-5])\b/.test(document.querySelector('footer')?.innerText ?? ''),
          scrollCue: /\bscroll( down| to explore)?\b/i.test(document.body.innerText.slice(0, 1500)),
        };
      });
      if (!d.h1) issues.push('there is no <h1> in the hero');
      if (d.firstCta === null) issues.push('the hero has no visible CTA button');
      else if (d.firstCta > DESKTOP.height) issues.push(`the hero CTA ends at ${Math.round(d.firstCta)}px, below the 800px first viewport; shorten the hero (headline max 2-3 lines, smaller display size, less top padding)`);
      if (d.rawIcons.length) issues.push(`icon ligatures render as raw words (${d.rawIcons.join(', ')}); load the exact icon font family via <link> and use its class, or use inline SVG icons`);
      if (d.missingFonts.length) issues.push(`icon classes ${d.missingFonts.join(', ')} are used but their Google Fonts <link> is missing, so raw ligature words show`);
      if (d.year) issues.push('footer copyright year must be 2026');
      if (d.scrollCue) issues.push('remove the scroll cue in the hero');
    } finally {
      await dp.close();
    }

    const mp = await mob.newPage();
    mp.on('pageerror', (e) => errors.push(e.message));
    try {
      await mp.goto(`file://${file}`, { waitUntil: 'networkidle', timeout: 20000 }).catch(() => {});
      await mp.waitForTimeout(600);
      const m = await mp.evaluate(() => {
        const vis = (el) => {
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none';
        };
        const header = document.querySelector('header') ?? document.querySelector('nav')?.parentElement ?? document.body;
        const navLinks = [...header.querySelectorAll('nav a')];
        const hiddenNav = navLinks.length > 0 && navLinks.every((a) => !vis(a));
        const menuBtn = [...header.querySelectorAll('button')].find((b) => vis(b) && b.hasAttribute('aria-expanded'));
        return { overflow: document.documentElement.scrollWidth - innerWidth, hiddenNav, menuBtn: !!menuBtn };
      });
      if (m.overflow > 2) issues.push(`horizontal scroll at 390px (page is ${m.overflow}px too wide); make every multi-column and absolute element collapse on mobile`);
      if (m.hiddenNav && !m.menuBtn) issues.push('at 390px the nav links are hidden and there is no visible menu button with aria-expanded to open them');
      if (m.hiddenNav && m.menuBtn) {
        const btn = mp.locator('header button[aria-expanded], nav button[aria-expanded], button[aria-expanded][aria-controls]').filter({ visible: true }).first();
        await btn.click({ timeout: 2000 }).catch(() => {});
        await mp.waitForTimeout(400);
        const ctrl = await btn.getAttribute('aria-controls').catch(() => null);
        const opened = await mp.evaluate((id) => {
          const shown = (a) => a.getBoundingClientRect().height > 0 && getComputedStyle(a).visibility !== 'hidden';
          const scope = id && document.getElementById(id);
          const links = scope ? [...scope.querySelectorAll('a')] : [...document.querySelectorAll('header a, nav a, [role="dialog"] a')];
          return links.filter(shown).length >= 2;
        }, ctrl);
        if (!opened) issues.push('the mobile menu button does not reveal the nav links');
      }
    } finally {
      await mp.close();
    }

    if (errors.length) issues.push(`JavaScript errors: ${[...new Set(errors)].slice(0, 2).join(' | ').slice(0, 200)} (declare each variable once; scripts share global scope)`);
    return issues;
  }

  return { inspect, close: () => Promise.all([desk.close(), mob.close()]) };
}

// Replace em-dashes in visible copy (models ignore the ban); keeps code/CSS untouched.
export function stripEmDashes(html) {
  const fix = (t) => t.replace(/\s*(—|&mdash;)\s*/g, (m, d, off, str) => (/\d/.test(str[off - 1] ?? '') && /\d/.test(str[off + m.length] ?? '') ? '-' : ', '));
  return html
    .replace(/<title>([^<]*)<\/title>/i, (m, t) => `<title>${t.replace(/\s*(—|&mdash;)\s*/g, ' - ')}</title>`)
    .replace(/>([^<>]*?)</g, (m, t) => (/(—|&mdash;)/.test(t) ? `>${fix(t)}<` : m))
    .replace(/(aria-label|alt|title|placeholder)="([^"]*)"/g, (m, a, v) => `${a}="${fix(v)}"`);
}

const BRAND_SVG = {
  twitter: '<path d="M4 4l16 16M20 4L4 20"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  github: '<path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5.1 5.1 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.5 0C6 2.3 4.9 2.6 4.9 2.6a4.8 4.8 0 0 0-.1 3.6A5.1 5.1 0 0 0 3.4 9.8c0 5.1 3 6.3 6 6.6A3 3 0 0 0 8.5 18.8V22"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  facebook: '<path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5v.01"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
  discord: '<path d="M8 17c-3 0-5-2-5-2 0-5 2-9 2-9a10 10 0 0 1 4-1.5l.5 1.5h5L15 4.5A10 10 0 0 1 19 6s2 4 2 9c0 0-2 2-5 2l-1-2M9 12v.01M15 12v.01"/>',
  dribbble: '<circle cx="12" cy="12" r="9"/><path d="M4 9c6 0 11 2 15 7M8 4c4 4 6 10 7 16M3.5 14c5-3 11-4 17-2"/>',
  mastodon: '<path d="M18 13c0 3-3 4-6 4s-6-1-6-4V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3zM10 13V9M14 13V9"/>',
};
const FONT_LINK = {
  'material-symbols-outlined': 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block',
  'material-symbols-rounded': 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block',
  'material-symbols-sharp': 'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block',
  'material-icons': 'https://fonts.googleapis.com/icon?family=Material+Icons',
  'material-icons-outlined': 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined',
  'material-icons-round': 'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
};

// Deterministic repairs for failures models repeat: brand ligatures, unloaded icon fonts, stale copyright year.
export function repairHtml(html) {
  let out = html.replace(
    /<(span|i)([^>]*class="[^"]*material-(?:symbols|icons)[^"]*"[^>]*)>\s*(twitter|x|github|linkedin|facebook|instagram|youtube|discord|dribbble|mastodon)\s*<\/\1>/gi,
    (m, tag, attrs, name) =>
      `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${BRAND_SVG[name.toLowerCase()]}</svg>`
  );
  // The legacy /icon endpoint only serves Material Icons; Material Symbols needs css2.
  out = out.replace(/https:\/\/fonts\.googleapis\.com\/icon\?family=Material\+Symbols\+(Outlined|Rounded|Sharp)[^"']*/g, (m, v) => FONT_LINK[`material-symbols-${v.toLowerCase()}`]);
  const used = new Set([...out.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)).filter((c) => FONT_LINK[c]));
  const links = [...out.matchAll(/<link[^>]+href="([^"]+)"/gi)].map((m) => m[1].toLowerCase().replace(/\+/g, ' '));
  const missing = [...used].filter((c) => {
    const fam = c.replace(/^material-symbols-/, 'material symbols ').replace(/^material-icons-?/, 'material icons ').trim();
    return !links.some((h) => h.includes(fam));
  });
  if (missing.length && /<\/head>/i.test(out)) {
    out = out.replace(/<\/head>/i, missing.map((c) => `<link rel="stylesheet" href="${FONT_LINK[c]}">`).join('\n') + '\n</head>');
  }
  // Parent rules like `.brand span { font-family: X }` override the icon class; force icon families back.
  if (used.size && !/id="pd-icon-fix"/.test(out) && /<\/head>/i.test(out)) {
    const fam = (c) => (c.startsWith('material-symbols-') ? `Material Symbols ${c.slice(17)[0].toUpperCase()}${c.slice(18)}` : c === 'material-icons' ? 'Material Icons' : `Material Icons ${c.slice(15)[0].toUpperCase()}${c.slice(16)}`);
    const css = [...used].map((c) => `.${c}{font-family:'${fam(c)}'!important;font-weight:normal;font-style:normal;letter-spacing:normal;text-transform:none;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga'}`).join('');
    out = out.replace(/<\/head>/i, `<style id="pd-icon-fix">${css}</style>\n</head>`);
  }
  out = out.replace(/(<footer[\s\S]*?<\/footer>)/i, (f) => f.replace(/(©|&copy;|&#169;)([^<\n]{0,24}?)\b20(0\d|1\d|2[0-5])\b/g, '$1$22026'));
  return out;
}
