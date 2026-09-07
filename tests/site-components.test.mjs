import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const files = ["app/site-client.tsx", "components/site/hero.tsx", "components/site/embio-overview.tsx", "components/site/embiofert-section.tsx", "components/site/embio-product-sections.tsx", "components/site/tlc-section.tsx", "components/site/closing-sections.tsx", "components/site/site-chrome.tsx", "components/site/product-video-gallery.tsx", "components/site/video-modal.tsx", "components/site/site-data.ts"];
const source = (await Promise.all(files.map((file) => readFile(`${root}/${file}`, "utf8")))).join("\n");

test("keeps the first viewport exclusively focused on Susttenta and Embio", async () => {
  const heroSource = await readFile(`${root}/components/site/hero.tsx`, "utf8");
  assert.match(heroSource, /REPRESENTANTE AUTORIZADO EMBIO/);
  assert.doesNotMatch(heroSource, /representante exclusivo|distribuidor exclusivo|exclusividade/i);
  assert.match(heroSource, /Especialista em tratamento de dejetos suínos e bovinos/);
  assert.doesNotMatch(heroSource, /TLC|Ecomax|ecomax/i);
  assert.match(heroSource, /embiofert-propulsor-em-operacao\.mp4/);
  assert.match(heroSource, /prefers-reduced-motion/);
  assert.match(heroSource, /Pausar vídeo da hero/);
  assert.match(heroSource, /href="#embiofert"/);
});

test("implements every required section", () => {
  for (const id of ["embio", "embiofert", "embio-3100", "embio-6000", "tlc-agro", "pedro", "faq", "contato"]) assert.match(source, new RegExp(`id=\\"${id}\\"`));
  assert.doesNotMatch(source, /BrandRepresentationCards|SolutionsCarousel|TechnicalChallenges|Testimonials/);
});

test("opens with Embiofert right after the hero", async () => {
  const clientSource = await readFile(`${root}/app/site-client.tsx`, "utf8");
  assert.match(clientSource, /<Hero \/><EmbiofertSection/);
  const heroIndex = clientSource.indexOf("<Hero");
  const embiofertIndex = clientSource.indexOf("<EmbiofertSection");
  const overviewIndex = clientSource.indexOf("<EmbioOverview");
  const solutionsIndex = clientSource.indexOf("<EmbioSolutionsSection");
  const tlcIndex = clientSource.indexOf("<TlcEcomaxSection");
  assert.ok(heroIndex < embiofertIndex && embiofertIndex < overviewIndex && overviewIndex < solutionsIndex && solutionsIndex < tlcIndex);
});

test("presents Embio 3100 and Embio 6000 as one side-by-side section", async () => {
  const solutions = await readFile(`${root}/components/site/embio-product-sections.tsx`, "utf8");
  assert.match(solutions, /Soluções Embio para diferentes destinos dos dejetos/);
  assert.match(solutions, /id="embio-3100"/);
  assert.match(solutions, /id="embio-6000"/);
  assert.doesNotMatch(solutions, /Embio3100Section|Embio6000Section/);
  assert.match(solutions, /não é a principal indicação quando o dejeto segue diretamente para o biodigestor/);
  assert.match(solutions, /não representa garantia de aumento da produção de biogás/);
  assert.doesNotMatch(solutions, /Embio 5000\+|Embio 8000/);
});

test("gives every video card a visible play affordance", async () => {
  const gallery = await readFile(`${root}/components/site/product-video-gallery.tsx`, "utf8");
  assert.match(gallery, /Assistir ao vídeo/);
  assert.match(gallery, /video-cta-ring/);
  assert.match(gallery, /aria-label=\{`Assistir ao vídeo: \$\{item\.title\}`\}/);
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

test("uses the supplied Pedro portrait and the confirmed experience statement", () => {
  assert.match(source, /pedro-luis-schmidt\.webp/);
  assert.match(source, /28 anos de experiência em assistência técnica na suinocultura/);
  assert.match(source, /Falar diretamente com Pedro/);
  assert.doesNotMatch(source, /clientes atendidos|certificad[oa]/i);
});
