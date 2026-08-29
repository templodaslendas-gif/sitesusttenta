import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (file) => readFile(`${root}/${file}`, "utf8");

test("defines the Susttenta identity and required metadata in current source", async () => {
  const [layout, manifest, source] = await Promise.all([
    read("app/layout.tsx"),
    read("public/site.webmanifest"),
    read("app/site-client.tsx"),
  ]);

  assert.match(layout, /Susttenta \| Soluções biotecnológicas para o campo/);
  assert.match(layout, /site\.webmanifest/);
  assert.match(manifest, /Susttenta/);
  assert.match(source, /<EmbiofertSection/);
  assert.match(source, /<TlcEcomaxSection/);
  assert.doesNotMatch(`${layout}\n${source}`, /Ana Castela/i);
});
