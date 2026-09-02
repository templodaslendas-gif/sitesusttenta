import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const files = ["app/site-client.tsx", "components/site/hero.tsx", "components/site/embio-overview.tsx", "components/site/embiofert-section.tsx", "components/site/embio-product-sections.tsx", "components/site/tlc-section.tsx", "components/site/closing-sections.tsx", "components/site/site-chrome.tsx", "components/site/product-video-gallery.tsx", "components/site/video-modal.tsx", "components/site/site-data.ts"];
const source = (await Promise.all(files.map((file) => readFile(`${root}/${file}`, "utf8")))).join("\n");

test("keeps the first viewport exclusively focused on Susttenta and Embio", async () => {
  const heroSource = await readFile(`${root}/components/site/hero.tsx`, "utf8");
  assert.match(heroSource, /REPRESENTANTE EMBIO/);
  assert.match(heroSource, /Tecnologia Embio com orientação especializada para o campo/);
  assert.doesNotMatch(heroSource, /TLC|Ecomax|ecomax/i);
  assert.match(heroSource, /videoSrc: null/);
});

test("implements every required section", () => {
  for (const id of ["embio", "embiofert", "embio-3100", "embio-6000", "outras-solucoes", "tlc-agro", "pedro", "faq", "contato"]) assert.match(source, new RegExp(`id=\\"${id}\\"`));
  assert.doesNotMatch(source, /BrandRepresentationCards|SolutionsCarousel|TechnicalChallenges|Testimonials/);
});

test("keeps TLC media inside the independent TLC section", () => {
  assert.match(source, /Controle de moscas com estratégia de campo/);
  assert.match(source, /productVideos\.filter\(\(item\) => item\.product === "tlc"/);
  assert.match(source, /Relato publicado pela TLC Agro/);
  assert.match(source, /Inseticida Híbrido EcoMax/);
  assert.match(source, /Cenários rurais e agroindustriais/);
  assert.match(source, /Produto sem planejamento não resolve a operação/);
});

test("keeps brand contexts separated and describes the Embio 6000 flow correctly", () => {
  assert.match(source, /destinação posterior dos dejetos ao processo anaeróbio/);
  assert.doesNotMatch(source, /fluxo posterior ao processo anaeróbio/);
  assert.match(source, /message=\{whatsappMessages\.ecomax\} ariaLabel="Falar sobre a linha Ecomax/);
  assert.doesNotMatch(source, /Produtos Embio e linha Ecomax/);
});

test("renders accessible future video cards without empty players", () => {
  assert.match(source, /Vídeo em breve/);
  assert.match(source, /status === "coming-soon"/);
  assert.match(source, /if \(!item\?\.videoSrc\) return null/);
});

test("preserves accessible FAQ, WhatsApp and developer credit", () => {
  assert.match(source, /aria-expanded=\{active\}/);
  assert.match(source, /aria-controls=\{`faq-panel-/);
  assert.match(source, /ariaLabel="Falar com a Susttenta pelo WhatsApp"/);
  assert.match(source, /Desenvolvido por FFR do Brasil Technology/);
  assert.match(source, /br-flag\.svg/);
});

test("uses the safe Pedro placeholder and no invented credentials", () => {
  assert.match(source, /Foto profissional em atualização/);
  assert.match(source, /Falar diretamente com Pedro/);
  assert.doesNotMatch(source, /anos de experiência|clientes atendidos|certificad[oa]/i);
});
