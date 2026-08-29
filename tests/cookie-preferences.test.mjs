import assert from "node:assert/strict";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({ appType: "custom", configFile: false, root, resolve: { alias: { "@": root } }, server: { middlewareMode: true, hmr: false } });
after(async () => vite.close());

test("accepts only complete, current and timestamped cookie consent records", async () => {
  const { parseCookieConsent } = await vite.ssrLoadModule("/components/cookie-preferences.ts");
  const valid = JSON.stringify({ version: 1, necessary: true, analytics: true, marketing: false, updatedAt: "2026-08-29T12:00:00.000Z" });

  assert.equal(parseCookieConsent(valid)?.analytics, true);
  assert.equal(parseCookieConsent("{}"), null);
  assert.equal(parseCookieConsent("not-json"), null);
  assert.equal(parseCookieConsent(JSON.stringify({ ...JSON.parse(valid), version: 2 })), null);
  assert.equal(parseCookieConsent(JSON.stringify({ ...JSON.parse(valid), necessary: false })), null);
});

test("creates a versioned consent record without changing the selected categories", async () => {
  const { createCookieConsentRecord } = await vite.ssrLoadModule("/components/cookie-preferences.ts");
  const record = createCookieConsentRecord({ necessary: true, analytics: false, marketing: true });

  assert.equal(record.version, 1);
  assert.equal(record.necessary, true);
  assert.equal(record.analytics, false);
  assert.equal(record.marketing, true);
  assert.equal(Number.isNaN(Date.parse(record.updatedAt)), false);
});
