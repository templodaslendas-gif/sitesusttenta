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

test("defines the five approved fields of operation with unique destinations", async () => {
  const { solutionSlides } = await vite.ssrLoadModule(
    "/components/site/site-data.ts",
  );

  assert.equal(solutionSlides.length, 5);
  assert.equal(new Set(solutionSlides.map(({ id }) => id)).size, 5);
  assert.deepEqual(
    solutionSlides.map(({ title }) => title),
    [
      "Tratamento biológico de lagoas e dejetos",
      "Ambiência em granjas de suínos",
      "Soluções para instalações com biodigestor",
      "Controle estratégico de moscas",
      "Atendimento técnico e orientação de aplicação",
    ],
  );
});

test("defines every approved technical challenge without a decorative index", async () => {
  const { technicalChallenges } = await vite.ssrLoadModule(
    "/components/site/site-data.ts",
  );

  assert.deepEqual(
    technicalChallenges.map(({ title }) => title),
    [
      "Acúmulo de sólidos",
      "Gases e odores",
      "Larvas e moscas",
      "Baixa homogeneização",
      "Sistemas com biodigestor",
    ],
  );
  assert.equal(
    technicalChallenges.every((challenge) => !("number" in challenge)),
    true,
  );
});

test("defines all eight FAQ questions and keeps the biodigester distinction explicit", async () => {
  const { faqItems } = await vite.ssrLoadModule(
    "/components/site/site-data.ts",
  );

  assert.equal(faqItems.length, 8);
  assert.equal(new Set(faqItems.map(({ question }) => question)).size, 8);
  assert.match(
    faqItems.find(({ question }) => question.includes("biodigestor"))?.answer ?? "",
    /Embio 6000/i,
  );
});

test("classifies TLC videos without claiming they are Susttenta testimonials", async () => {
  const { mediaItems } = await vite.ssrLoadModule(
    "/components/site/site-data.ts",
  );

  assert.deepEqual(
    mediaItems.map(({ kind }) => kind),
    ["demonstration", "tlc-report", "tlc-report"],
  );
  assert.equal(mediaItems.every(({ preload }) => preload === "none"), true);
  assert.equal(mediaItems.some(({ title }) => /Susttenta/i.test(title)), false);
});
