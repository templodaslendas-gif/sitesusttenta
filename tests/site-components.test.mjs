import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const files = ["app/site-client.tsx", "components/site/hero.tsx", "components/site/embio-overview.tsx", "components/site/embiofert-section.tsx", "components/site/embio-product-sections.tsx", "components/site/tlc-section.tsx", "components/site/closing-sections.tsx", "components/site/site-chrome.tsx", "components/site/product-video-gallery.tsx", "components/site/inline-video.tsx", "components/site/site-data.ts"];
const source = (await Promise.all(files.map((file) => readFile(`${root}/${file}`, "utf8")))).join("\n");

test("keeps the hero copy focused on Susttenta and Embio", async () => {
  const heroSource = await readFile(`${root}/components/site/hero.tsx`, "utf8");
  assert.match(heroSource, /SUSTTENTA/);
  assert.match(heroSource, /REPRESENTANTE AUTORIZADO EMBIO/);
  assert.doesNotMatch(heroSource, /representante exclusivo|distribuidor exclusivo|exclusividade/i);
  assert.match(heroSource, /Especialista em tratamento de dejetos suínos e bovinos/);
  assert.doesNotMatch(heroSource, /TLC|Ecomax|ecomax/i);
  assert.match(heroSource, /embiofert-propulsor-hero\.mp4/);
  assert.match(heroSource, /prefers-reduced-motion/);
  assert.match(heroSource, /visibilitychange/);
  assert.match(heroSource, /Pausar vídeo da hero/);
  assert.match(heroSource, /visually-hidden-focusable/);
  assert.match(heroSource, /href="#embiofert"/);
  assert.doesNotMatch(heroSource, /Tratamento responsável começa/);
});

test("implements every required section", () => {
  for (const id of ["embio", "embiofert", "embio-3100", "embio-6000", "embio-8000", "tlc-agro", "pedro", "faq", "contato"]) assert.match(source, new RegExp(`id=\\"${id}\\"`));
  assert.doesNotMatch(source, /BrandRepresentationCards|SolutionsCarousel|TechnicalChallenges|Testimonials|EmbioHighlights/);
});

test("keeps the approved section order after the hero", async () => {
  const clientSource = await readFile(`${root}/app/site-client.tsx`, "utf8");
  const order = ["<Hero", "<EmbiofertSection", "<EmbioOverview", "<Embio3100Section", "<Embio6000Section", "<Embio8000Section", "<TlcEcomaxSection", "<PedroAuthority", "<FAQ", "<FinalCTA"];
  const positions = order.map((token) => clientSource.indexOf(token));
  assert.ok(positions.every((position) => position >= 0), "every section is rendered");
  assert.deepEqual(positions, [...positions].sort((a, b) => a - b), "sections stay in order");
});

test("removes video modals in favour of inline playback", async () => {
  const clientSource = await readFile(`${root}/app/site-client.tsx`, "utf8");
  const inlineSource = await readFile(`${root}/components/site/inline-video.tsx`, "utf8");
  assert.doesNotMatch(clientSource, /VideoModal|activeMedia|onOpen/);
  assert.doesNotMatch(source, /VideoModal|role="dialog"/);
  assert.match(inlineSource, /<video/);
  assert.match(inlineSource, /controls/);
  assert.match(inlineSource, /playsInline/);
  assert.match(inlineSource, /preload="metadata"/);
  assert.match(inlineSource, /setPlaying\(true\)/);
});

test("presents Embio 3100, Embio 6000 and Embio 8000 as separate sections", async () => {
  const solutions = await readFile(`${root}/components/site/embio-product-sections.tsx`, "utf8");
  assert.match(solutions, /export function Embio3100Section/);
  assert.match(solutions, /export function Embio6000Section/);
  assert.match(solutions, /export function Embio8000Section/);
  assert.doesNotMatch(solutions, /EmbioSolutionsSection|embio-solutions-grid/);
  assert.match(solutions, /id="embio-3100"/);
  assert.match(solutions, /id="embio-6000"/);
  assert.match(solutions, /id="embio-8000"/);
  assert.ok(solutions.indexOf("Embio3100Section") < solutions.indexOf("Embio6000Section"));
  assert.match(solutions, /não é a principal indicação quando o dejeto segue diretamente para o biodigestor/);
  assert.match(solutions, /não representa garantia de aumento da produção de biogás/);
  assert.doesNotMatch(solutions, /Embio 5000\+/);
});

test("presents the Embio bottles as trimmed transparent artwork on a coherent stage", async () => {
  const [sections, css] = await Promise.all([
    readFile(`${root}/components/site/embio-product-sections.tsx`, "utf8"),
    readFile(`${root}/app/globals.css`, "utf8"),
  ]);
  assert.match(sections, /embio-3100-frasco\.webp/);
  assert.match(sections, /embio-6000-frasco\.webp/);
  assert.match(sections, /embio-8000-frasco\.webp/);
  assert.doesNotMatch(sections, /embio-official\/embio-3100\.webp|embio-official\/embio-6000\.webp/);
  assert.match(sections, /embio-product-stage/);
  assert.match(css, /\.embio-product-stage::after/);
  assert.match(css, /\.embio-product-stage::before/);
  await access(`${root}/public/media/embio-official/embio-3100-frasco.webp`);
  await access(`${root}/public/media/embio-official/embio-6000-frasco.webp`);
  await access(`${root}/public/media/embio-official/embio-8000-frasco.webp`);
});

test("gives the represented brands a prominent, accurate header treatment", () => {
  assert.match(source, /Representante autorizado/);
  assert.match(source, /Empresa de biotecnologia/);
  assert.match(source, /embio-logo-original\.png/);
  assert.match(source, /tlc-logo-original\.svg/);
});

test("drives video proportion from media data instead of a rigid height", async () => {
  const [data, gallery, inline] = await Promise.all([
    readFile(`${root}/components/site/site-data.ts`, "utf8"),
    readFile(`${root}/components/site/product-video-gallery.tsx`, "utf8"),
    readFile(`${root}/components/site/inline-video.tsx`, "utf8"),
  ]);
  assert.match(data, /aspectRatio\?: string/);
  assert.match(data, /"9 \/ 16"/);
  assert.match(data, /"16 \/ 9"/);
  assert.match(inline, /aspectRatio: item\.aspectRatio/);
  assert.match(gallery, /variant\?: Variant/);
  const sections = await readFile(`${root}/components/site/embio-product-sections.tsx`, "utf8");
  assert.match(sections, /variant="stack"/);
  assert.match(sections, /variant="duo"/);
});

test("gives every video a visible play affordance and inline playback", async () => {
  const inlineSource = await readFile(`${root}/components/site/inline-video.tsx`, "utf8");
  assert.match(inlineSource, /Assistir ao vídeo/);
  assert.match(inlineSource, /video-cta-ring/);
  assert.match(inlineSource, /aria-label=\{`\$\{playLabel\}: \$\{item\.title\}`\}/);
  assert.match(inlineSource, /item\.status === "coming-soon" \|\| !item\.videoSrc/);
  assert.match(inlineSource, /Vídeo em breve/);
});

test("keeps the Embiofert and EcoMax media uncluttered", async () => {
  const [embiofert, overview, tlc] = await Promise.all([
    readFile(`${root}/components/site/embiofert-section.tsx`, "utf8"),
    readFile(`${root}/components/site/embio-overview.tsx`, "utf8"),
    readFile(`${root}/components/site/tlc-section.tsx`, "utf8"),
  ]);
  assert.doesNotMatch(embiofert, /embiofert-tratamento-integrado\.webp/);
  assert.match(embiofert, /variant="duo"/);
  assert.match(overview, /Laboratório e fabricação própria do início ao fim do processo/);
  assert.match(tlc, /ecomax-inseticida-hibrido-transparente\.webp/);
  await access(`${root}/public/media/tlc-official/catalog-2026/ecomax-inseticida-hibrido-transparente.webp`);
});

test("keeps TLC media inside the independent TLC section", () => {
  assert.match(source, /Controle de moscas com estratégia de campo/);
  assert.match(source, /LINHA COMPLEMENTAR AO CONTROLE IMEDIATO DE MOSCAS/);
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

test("preserves accessible FAQ, WhatsApp and developer credit", () => {
  assert.match(source, /aria-expanded=\{active\}/);
  assert.match(source, /aria-controls=\{`faq-panel-/);
  assert.match(source, /ariaLabel="Falar com a Susttenta pelo WhatsApp"/);
  assert.match(source, /Desenvolvido por FFR do Brasil Technology/);
  assert.match(source, /br-flag\.svg/);
});

test("keeps the header WhatsApp shortcut visibly pulsing on mobile", async () => {
  const css = await readFile(`${root}/app/globals.css`, "utf8");
  assert.match(source, /className="header-whatsapp whatsapp-pulse"/);
  assert.match(css, /\.header-whatsapp\.whatsapp-pulse::before/);
  assert.match(css, /@keyframes headerWhatsappRing/);
  assert.match(css, /@keyframes headerWhatsappButtonBeat/);
  assert.match(css, /prefers-reduced-motion:reduce/);
});

test("uses the supplied Pedro portrait and the confirmed experience statement", () => {
  assert.match(source, /pedro-luis-schmidt\.webp/);
  assert.match(source, /28 anos de experiência em assistência técnica na suinocultura/);
  assert.match(source, /Falar diretamente com Pedro/);
  assert.doesNotMatch(source, /clientes atendidos|certificad[oa]/i);
});
