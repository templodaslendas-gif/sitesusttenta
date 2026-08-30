# AGENTS.md — Site Institucional Susttenta

Instruções para agentes de IA (Claude Code, Codex e outros) que trabalham neste repositório.
Complementa `README.md`, `PRODUCT.md`, `DESIGN.md`, `docs/ARCHITECTURE.md` e `docs/MEDIA-SOURCES.md` — não os substitui.

## O que é este projeto

Site institucional e comercial da **Susttenta**, desenvolvido pela **FFR do Brasil Technology**.
A Susttenta é apresentada prioritariamente como **representante da Embio**; a **TLC Agro / Ecomax**
é linha complementar, em seção independente. Landing single-page, conteúdo estático, deploy na Vercel.

- Produção: https://sitesusttenta.vercel.app/
- Deploy automático por push na branch `main`.

## Protocolo de retomada (ler antes de qualquer alteração)

1. Ler este `AGENTS.md`, `README.md`, `PRODUCT.md`, `DESIGN.md`, `docs/ARCHITECTURE.md`.
2. `git status`; identificar branch e último commit; preservar trabalho local não commitado.
3. Antes de trocar qualquer mídia, ler `docs/MEDIA-SOURCES.md`.
4. Consultar, quando a tarefa envolver decisão de posicionamento/arquitetura já tomada, a nota
   do projeto no FFR Knowledge Vault (ver seção "FFR Knowledge Vault" abaixo) — leitura seletiva,
   nunca carregar o Vault inteiro.
5. Preservar a hierarquia comercial e a separação Embio × TLC (ver abaixo).
6. Rodar `npm run lint`, `npx next build`, `npm test`, `git diff --check` antes de concluir.
7. **Não** fazer commit, push, deploy, criar tag ou reset destrutivo sem autorização expressa
   do responsável pela Susttenta.
8. Após trabalho relevante, atualizar a documentação afetada (`README`, `PRODUCT`, `DESIGN`,
   `docs/`) e, se houver decisão durável nova, propô-la para o Knowledge Vault.

## Regras de posicionamento (não violar)

Decisão registrada e implementada no commit `fc17af2`:

- A Susttenta conduz a narrativa; a Embio é o eixo comercial principal.
- Embio e TLC Agro **não** dividem hero, cards comparativos, metades equivalentes de seção
  nem a mesma composição visual. A seção TLC só começa após uma ruptura visual explícita.
- Hierarquia comercial: Susttenta → Embio → Tratamento Embiofert → Embio 3100 → Embio 6000 →
  Embio 5000+ e Embio 8000 → TLC Agro e Ecomax → atendimento de Pedro → contato pelo WhatsApp.
- Ordem das seções em `docs/ARCHITECTURE.md`.

## Preservar sempre

- Consentimento granular de cookies e páginas jurídicas (Privacidade/LGPD, Cookies, Termos).
- Favicons, manifest e SEO da Susttenta.
- WhatsApp oficial: `+55 (46) 99925-9777` — `https://wa.me/5546999259777`.
- Acessibilidade (teclado, foco visível, alvos ≥ 44×44 px, contraste) e `prefers-reduced-motion`.
- Rodapé com crédito da FFR do Brasil e bandeira em SVG local.
- Contrato de vídeo tipado em `site-data.ts`: itens futuros não renderizam player nem `src` vazio.

## Não inventar

Dosagens, prazos, percentuais de resultado, garantias, credenciais de Pedro, depoimentos,
razão social, CNPJ ou dados jurídicos. Não atribuir os relatos da TLC Agro à Susttenta.
Onde faltar informação oficial, manter placeholder editorial.

## Mídias

`docs/MEDIA-SOURCES.md` é a fonte de verdade da procedência. Ao adicionar mídia:
preservar o original pesado fora de `public/` e do repositório; publicar versão otimizada
(WebP / H.264+AAC com `faststart`) com poster e lazy loading; registrar fonte, data e
transformações; atualizar os dados em `site-data.ts`; validar modal e mobile. Sem hotlink.

## Stack (confirmar em `package.json`, não de memória)

Next.js 16 + React 19 + TypeScript, empacotado com `vinext`/Vite. Toolchain Cloudflare presente
mas **D1/R2 desabilitados** (`.openai/hosting.json`). Sem banco de dados. Testes com `node:test`.
Node `>= 22.13`.

## FFR Knowledge Vault

A FFR do Brasil mantém um Knowledge Vault (Obsidian, repositório privado interno) com o
conhecimento permanente dos projetos. Nota principal deste projeto:
`01-Projetos/Susttenta - Site Institucional.md`; decisão de posicionamento:
`02-Decisoes/Susttenta - Embio como linha principal e TLC Agro como linha complementar.md`;
arquitetura: `03-Arquitetura/Arquitetura - Site Susttenta Embio-first.md`.

O Vault é **consulta operacional/humana**, nunca dependência de runtime: nenhum código deste
site importa, lê ou embute o Vault. O caminho local do Vault é específico de máquina e **não**
é versionado aqui. Nunca copiar conteúdo do Vault, da FFR Platform, `.obsidian/`, memórias
internas, tokens, credenciais ou caminhos absolutos para dentro deste repositório.

## Rollback

`git revert` do commit problemático, ou restauração a partir da branch de backup dedicada
(ex.: `backup/site-antes-embio-primary-2026-08-29`).
