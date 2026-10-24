import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (file) => readFile(`${root}/${file}`, "utf8");

test("publishes canonical metadata, social previews and structured data", async () => {
  const [layout, home, seo] = await Promise.all([
    read("app/layout.tsx"),
    read("app/page.tsx"),
    read("app/seo.ts"),
  ]);

  assert.match(layout, /metadataBase/);
  assert.match(layout, /VERCEL_ENV === "preview"/);
  assert.match(layout, /index: !isPreview/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /summary_large_image/);
  assert.match(home, /alternates:\s*\{ canonical: SITE_URL \}/);
  assert.match(seo, /https:\/\/www\.susttenta\.com\.br/);
  assert.match(seo, /"@type": "Organization"/);
  assert.match(seo, /"@type": "WebSite"/);
  assert.doesNotMatch(layout, /THESIS:|OWN-WORLD:|SEED:/);
});

test("provides crawl controls and an explicit sitemap", async () => {
  const [robots, sitemap, llms] = await Promise.all([
    read("app/robots.ts"),
    read("app/sitemap.ts"),
    read("public/llms.txt"),
  ]);

  assert.match(robots, /sitemap\.xml/);
  assert.match(robots, /userAgent: "\*"/);
  assert.match(robots, /disallow: "\/"/);
  assert.match(sitemap, /\/privacidade/);
  assert.match(sitemap, /\/cookies/);
  assert.match(sitemap, /\/termos/);
  assert.match(llms, /Relatos de campo são experiências individuais/);
});

test("applies baseline response security headers", async () => {
  const config = await read("next.config.ts");

  for (const header of [
    "Content-Security-Policy",
    "Cross-Origin-Opener-Policy",
    "Referrer-Policy",
    "Permissions-Policy",
    "X-Content-Type-Options",
    "X-Frame-Options",
  ]) assert.match(config, new RegExp(header));
  assert.match(config, /poweredByHeader: false/);
});
