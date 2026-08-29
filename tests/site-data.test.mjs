import assert from "node:assert/strict";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({ appType: "custom", configFile: false, root, resolve: { alias: { "@": root } }, server: { middlewareMode: true, hmr: false } });
after(async () => vite.close());

test("defines the approved Embio-first navigation order", async () => {
  const { navigationItems } = await vite.ssrLoadModule("/components/site/site-data.ts");
  assert.deepEqual(navigationItems.map(({ label }) => label), ["Início", "Embiofert", "Embio 3100", "Embio 6000", "Outras soluções", "TLC Agro", "Sobre Pedro", "Contato"]);
});

test("defines the eight FAQ questions in the approved commercial hierarchy", async () => {
  const { faqItems } = await vite.ssrLoadModule("/components/site/site-data.ts");
  assert.deepEqual(faqItems.map(({ question }) => question), [
    "O que é o Tratamento Embiofert?", "Como Embio 3000 e Propulsor trabalham juntos?", "Qual a diferença entre Embio 3100 e Embio 6000?", "Qual solução considerar quando existe biodigestor?", "Para que servem Embio 5000+ e Embio 8000?", "Como funciona a linha Ecomax?", "A Susttenta realiza avaliação antes da recomendação?", "Como falar diretamente com Pedro?",
  ]);
});

test("centralizes available and future videos without empty sources", async () => {
  const { productVideos } = await vite.ssrLoadModule("/components/site/site-data.ts");
  assert.equal(productVideos.filter(({ status }) => status === "available").length, 3);
  assert.equal(productVideos.filter(({ product }) => product === "embio-3100").length, 3);
  assert.equal(productVideos.filter(({ product }) => product === "embio-6000").length, 3);
  assert.equal(productVideos.some(({ videoSrc }) => videoSrc === ""), false);
  assert.equal(productVideos.filter(({ status }) => status === "coming-soon").every(({ videoSrc }) => videoSrc === null), true);
});
