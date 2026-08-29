import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const files = [
  "app/site-client.tsx",
  "components/site/hero.tsx",
  "components/site/site-chrome.tsx",
  "components/site/solutions-carousel.tsx",
  "components/site/technical-sections.tsx",
  "components/site/tlc-section.tsx",
  "components/site/testimonials.tsx",
  "components/site/closing-sections.tsx",
  "components/site/video-modal.tsx",
  "components/site/site-data.ts",
];
const source = (await Promise.all(files.map((file) => readFile(`${root}/${file}`, "utf8")))).join("\n");

test("contains the approved first-viewport commercial contract", () => {
  assert.match(source, /PARCEIRO AUTORIZADO EMBIO E TLC AGRO/);
  assert.match(source, /Soluções biotecnológicas para uma produção mais eficiente/);
  assert.match(source, /Biotecnologia aplicada para reduzir perdas, aumentar a eficiência e ampliar o potencial de resultado no campo\./);
  assert.match(source, /ecomax-produtos\.webp/);
  assert.doesNotMatch(source, /ecomax-hero-bg|Animais em propriedade rural/);
});

test("contains required sections and excludes obsolete product areas", () => {
  for (const id of ["susttenta", "desafios", "embiofert", "linha-embio", "tlc-agro", "marcas", "depoimentos", "faq", "pedro"]) assert.match(source, new RegExp(`id=\\"${id}\\"`));
  assert.doesNotMatch(source, /id="resultados"|Aplicações e resultados que podem ser vistos|Outras soluções Embio|Embio 5000\+|Embio 8000/);
});

test("contains accessible FAQ controls and semantic product comparison", () => {
  assert.match(source, /aria-expanded=\{active\}/);
  assert.match(source, /aria-controls=\{`faq-panel-/);
  assert.match(source, /<table aria-label="Comparação técnica entre Embio 3100 e Embio 6000"/);
  assert.match(source, /Avaliação técnica/);
  assert.match(source, /Obrigatória/);
});

test("keeps videos lazy and labels source context", () => {
  assert.match(source, /data-video-trigger/);
  assert.match(source, /if \(!item\) return null/);
  assert.match(source, /preload="metadata"/);
  assert.match(source, /Relato publicado pela TLC Agro/);
  assert.match(source, /Espaço preparado para futuros depoimentos próprios da Susttenta/);
});

test("hardens external WhatsApp links", () => {
  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noopener noreferrer"/);
  assert.match(source, /ariaLabel: string/);
  assert.match(source, /ariaLabel="Falar com a Susttenta pelo WhatsApp"/);
});

test("uses only approved Pedro copy and preserves FFR as developer", () => {
  assert.match(source, /Orientação técnica começa por compreender a realidade da operação/);
  assert.match(source, /Falar diretamente com Pedro/);
  assert.match(source, /Produzido por FFR do Brasil Technology/);
  assert.doesNotMatch(source, /anos de experiência|clientes atendidos|certificad[oa]/i);
});
