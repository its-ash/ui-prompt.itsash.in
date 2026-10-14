import crypto from 'node:crypto';
import { chromium } from 'playwright';

const VIEW = { width: 1280, height: 800 };
const DARK_MAX = 0.42;
const MIN_DELTA = 0.15;
export const TOGGLES = [
  '#theme-toggle',
  '#themeToggle',
  '.theme-toggle',
  '[data-theme-toggle]',
  'button[aria-label*="theme" i]',
  'button[aria-label*="dark" i]',
  'button[aria-label*="light" i]',
  'button[aria-label*="mode" i]',
  '[aria-pressed]',
];

export const hash = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 12);

// Whole-page brightness must move clearly; colorful heroes keep their brand colors in dark mode.
const flipped = (a, b) => Math.abs(a - b) > MIN_DELTA;

async function luminance(meter, page) {
  const b64 = (await page.screenshot({ type: 'jpeg', quality: 50, fullPage: true })).toString('base64');
  return meter.evaluate(async (data) => {
    const img = new Image();
    img.src = `data:image/jpeg;base64,${data}`;
    await img.decode();
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = Math.max(8, Math.min(400, Math.round((img.height / img.width) * 64)));
    const g = c.getContext('2d');
    g.drawImage(img, 0, 0, c.width, c.height);
    const px = g.getImageData(0, 0, c.width, c.height).data;
    let sum = 0;
    for (let i = 0; i < px.length; i += 4) sum += (0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2]) / 255;
    return sum / (px.length / 4);
  }, b64);
}

async function open(page, file) {
  await page.goto(`file://${file}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.evaluate(() => localStorage.clear()).catch(() => {});
  await page.reload({ waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(500);
}

// One checker per worker: separate contexts so localStorage theme flags never leak between pages.
export async function createChecker(browser) {
  const ctx = (colorScheme) => browser.newContext({ viewport: VIEW, deviceScaleFactor: 0.25, reducedMotion: 'reduce', colorScheme });
  const [lc, dc] = [await ctx('light'), await ctx('dark')];
  const [lp, dp, meter] = [await lc.newPage(), await dc.newPage(), await lc.newPage()];

  async function check(file) {
    await open(lp, file);
    const l0 = await luminance(meter, lp);
    const base = l0 < DARK_MAX ? 'dark' : 'light';
    for (const sel of TOGGLES) {
      const btn = lp.locator(sel).filter({ visible: true }).first();
      if (!(await btn.count())) continue;
      await btn.click({ timeout: 2000 }).catch(() => {});
      await lp.waitForTimeout(450);
      if (flipped(l0, await luminance(meter, lp))) return { base, dark: true, how: 'toggle' };
    }
    await open(dp, file);
    if (flipped(l0, await luminance(meter, dp))) return { base, dark: true, how: 'media' };
    return { base, dark: base === 'dark', how: base === 'dark' ? 'dark-only' : 'none' };
  }

  return { check, close: () => Promise.all([lc.close(), dc.close()]) };
}

export const launch = () => chromium.launch();
