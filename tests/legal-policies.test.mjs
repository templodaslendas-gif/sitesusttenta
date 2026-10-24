import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const read = (path) => readFile(`${root}/${path}`, "utf8");

test("documents the confirmed LGPD channel without inventing company data", async () => {
  const privacy = await read("app/privacidade/page.tsx");
  assert.match(privacy, /WhatsApp oficial \+55 \(46\) 99925-9777/);
  assert.match(privacy, /Autoridade Nacional de Proteção de Dados \(ANPD\)/);
  assert.match(privacy, /não realiza decisões automatizadas/i);
  assert.doesNotMatch(privacy, /CNPJ[:\s]+\d/);
  assert.doesNotMatch(privacy, /privacidade@/);
});

test("states the current cookie reality and requires renewed consent for future tools", async () => {
  const [cookies, consent] = await Promise.all([
    read("app/cookies/page.tsx"),
    read("components/cookie-consent.tsx"),
  ]);
  assert.match(cookies, /Nenhuma ferramenta dessa categoria foi identificada como ativa nesta versão/);
  assert.match(cookies, /A versão do consentimento será renovada/);
  assert.match(cookies, /susttenta_cookie_consent_v1/);
  assert.match(consent, /não estão ativas atualmente/);
  assert.match(consent, /consentimento será solicitado novamente/);
});

test("keeps the terms institutional and excludes unsupported checkout claims", async () => {
  const terms = await read("app/termos/page.tsx");
  assert.match(terms, /não se conclui automaticamente neste site/);
  assert.match(terms, /ausência de garantia/i);
  assert.doesNotMatch(terms, /Lastlink|checkout|preço de assinatura/i);
});
