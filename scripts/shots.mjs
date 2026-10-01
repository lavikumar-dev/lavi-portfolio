/**
 * scripts/shots.mjs
 * Playwright screenshot harness for all 6 themes × 3 viewports × 5 sections.
 * Also builds a 3×2 contact-sheet of hero screenshots at 1366×768.
 *
 * Usage: npm run shots
 * Output: screenshots/<theme>-<viewport>-<section>.png
 *         screenshots/contact-sheet-hero.png
 */

import { chromium } from "playwright";
import fs from "fs/promises";
import path from "path";

const THEMES = ["ocean", "midnight", "emerald", "light", "blossom", "crimson"];
const VIEWPORTS = [
  { label: "1920x1080", width: 1920, height: 1080 },
  { label: "1366x768", width: 1366, height: 768 },
  { label: "390x844", width: 390, height: 844 },
];
const SECTIONS = ["home", "about", "projects", "skills", "contact"];

// Theme keyboard shortcuts (keys 1-6)
const THEME_KEY = {
  ocean: "1",
  midnight: "2",
  emerald: "3",
  light: "4",
  blossom: "5",
  crimson: "6",
};

const SCREENSHOTS_DIR = path.resolve("screenshots");
const TRANSITION_WAIT = 1200; // ms — wait for theme transition + animation settle
const ANIM_SETTLE = 800;       // ms — wait after scroll for animations to settle

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function switchTheme(page, theme) {
  await page.keyboard.press(THEME_KEY[theme]);
  await page.waitForTimeout(TRANSITION_WAIT);
}

async function scrollToSection(page, section) {
  if (section === "home") {
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  } else {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    }, section);
  }
  await page.waitForTimeout(ANIM_SETTLE);
}

async function takeShot(page, filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await page.screenshot({ path: filePath, fullPage: false });
}

async function buildContactSheet(heroShots) {
  // heroShots: array of { theme, file } for viewport 1366x768
  // Assemble as 3×2 grid using canvas-style approach via browser page
  // We'll use a separate headless page to do the compositing
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1366 * 3, height: 768 * 2 } });
  const page = await ctx.newPage();

  // Build an HTML page that lays out the 6 screenshots in a 3×2 grid
  const imgTags = heroShots.map(({ theme, file }, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    return `<img src="${file}" style="position:absolute;left:${col * 1366}px;top:${row * 768}px;width:1366px;height:768px;object-fit:cover" alt="${theme}" />
            <div style="position:absolute;left:${col * 1366 + 12}px;top:${row * 768 + 12}px;background:rgba(0,0,0,.55);color:#fff;font:700 13px/1 monospace;padding:4px 8px;border-radius:4px;">${theme}</div>`;
  }).join("\n");

  const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#000;width:${1366 * 3}px;height:${768 * 2}px;overflow:hidden;position:relative;">${imgTags}</body></html>`;

  // Write temp HTML
  const tmpHtml = path.resolve("screenshots/_contact_sheet_tmp.html");
  await fs.writeFile(tmpHtml, html);

  await page.goto(`file://${tmpHtml.replace(/\\/g, "/")}`);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.resolve("screenshots/contact-sheet-hero.png"), fullPage: false });
  await browser.close();

  // Remove temp file
  try { await fs.unlink(tmpHtml); } catch { /* ok */ }
}

async function main() {
  await ensureDir(SCREENSHOTS_DIR);

  const browser = await chromium.launch();
  const heroShots1366 = [];

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      reducedMotion: "no-preference",
    });
    const page = await ctx.newPage();

    // Navigate to the dev server
    const BASE_URL = process.env.SHOTS_URL ?? "http://localhost:5173";
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    for (const theme of THEMES) {
      console.log(`  📸  ${theme} @ ${vp.label} …`);
      await switchTheme(page, theme);

      for (const section of SECTIONS) {
        await scrollToSection(page, section);

        const filePath = path.join(
          SCREENSHOTS_DIR,
          `${theme}-${vp.label}-${section}.png`
        );
        await takeShot(page, filePath);

        if (section === "home" && vp.label === "1366x768") {
          heroShots1366.push({ theme, file: path.resolve(filePath) });
        }
      }
    }

    await ctx.close();
  }

  await browser.close();

  console.log("\n🗂  Building contact sheet …");
  await buildContactSheet(heroShots1366);

  console.log("\n✅  All screenshots saved to screenshots/");
  console.log("    Contact sheet: screenshots/contact-sheet-hero.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
