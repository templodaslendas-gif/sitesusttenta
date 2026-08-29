import assert from "node:assert/strict";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({
  appType: "custom",
  configFile: false,
  root,
  resolve: { alias: { "@": root } },
  server: { middlewareMode: true, hmr: false },
});

after(async () => {
  await vite.close();
});

test("builds a WhatsApp URL for the official Susttenta number with an encoded message", async () => {
  const { createWhatsAppUrl } = await vite.ssrLoadModule(
    "/components/site/whatsapp.ts",
  );

  const url = new URL(
    createWhatsAppUrl(
      "Olá! Gostaria de receber orientação sobre o Tratamento Embiofert.",
    ),
  );

  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/5546999259777");
  assert.equal(
    url.searchParams.get("text"),
    "Olá! Gostaria de receber orientação sobre o Tratamento Embiofert.",
  );
});

test("rejects an empty WhatsApp message instead of emitting an ambiguous CTA", async () => {
  const { createWhatsAppUrl } = await vite.ssrLoadModule(
    "/components/site/whatsapp.ts",
  );

  assert.throws(() => createWhatsAppUrl("   "), /mensagem/i);
});

test("provides distinct approved messages for each commercial context", async () => {
  const { whatsappMessages } = await vite.ssrLoadModule(
    "/components/site/whatsapp.ts",
  );

  assert.deepEqual(Object.keys(whatsappMessages).sort(), [
    "ecomax",
    "embio3100",
    "embio6000",
    "embiofert",
    "general",
    "pedro",
  ]);
  assert.match(whatsappMessages.embio6000, /biodigestor/i);
  assert.match(whatsappMessages.pedro, /^Olá, Pedro!/);
});
