# HANDOFF — Site Susttenta

Última atualização: 24 de outubro de 2026

## Escopo vigente

Atualização exclusivamente técnica. O visual publicado — layout, cores, tipografia, textos comerciais, ordem das seções, imagens, vídeos e animações — deve permanecer inalterado.

## Fase 1 — auditoria técnica

- Repositório: `templodaslendas-gif/sitesusttenta`
- Produção: `https://www.susttenta.com.br/`
- Projeto de hospedagem existente: `sitesusttenta` na Vercel
- Branch de produção: `main`
- Base da missão: `55c5847`
- Estado inicial: GitHub, produção e clone local sincronizados; worktree limpo
- Deploy da base: status Vercel `success`
- Validação inicial: lint, TypeScript, 29 testes e `next build` aprovados
- Achados principais: Next.js vulnerável; `robots.txt` e `sitemap.xml` ausentes; canonical, imagem social e JSON-LD ausentes; cabeçalhos defensivos incompletos; comentário técnico oculto no HTML
- Segurança do repositório: nenhum `.env`, chave privada ou padrão evidente de secret rastreado

## Fase 2 — implementação técnica

Branch: `site/auditoria-tecnica-2026-10-24`

Implementado sem tocar nos componentes visuais ou no CSS:

- metadados canônicos e sociais;
- JSON-LD factual de `Organization` e `WebSite`;
- `robots.txt`, `sitemap.xml` e `llms.txt`;
- bloqueio de indexação exclusivo para deploys de prévia Vercel;
- cabeçalhos HTTP de segurança;
- remoção do comentário técnico oculto;
- instalação determinística na Vercel com `npm ci`;
- testes de contrato para SEO e segurança;
- atualização mínima das dependências afetadas pela auditoria.

## Limites preservados

- Nenhuma alteração em Supabase, banco, autenticação, APIs, DNS, e-mails ou secrets.
- Nenhuma alteração visual autorizada ou executada.
- Merge e produção não autorizados.
- Dados jurídicos não foram inventados; identificação formal do controlador, CNPJ e e-mail de privacidade continuam pendentes de confirmação.

## Validação e prévia

### Validação local concluída

- `npm ci`: aprovado;
- `npm run lint`: aprovado;
- `npx tsc --noEmit`: aprovado;
- `npm test`: 32/32 testes aprovados;
- `npx next build`: aprovado, com 7 rotas estáticas e a rota técnica de `not-found`;
- `npm audit --omit=dev --audit-level=high`: 0 vulnerabilidades nas dependências de produção;
- `git diff --check`: aprovado;
- respostas locais: `/`, páginas legais, `robots.txt`, `sitemap.xml` e `llms.txt` retornaram HTTP 200;
- cabeçalhos defensivos confirmados e cabeçalho `X-Powered-By` ausente;
- build simulado com `VERCEL_ENV=preview`: `noindex, nofollow` no HTML e `Disallow: /` no `robots.txt`;
- nenhum diff em `app/globals.css` ou `components/site`.

Observação: a auditoria completa, incluindo ferramentas apenas de desenvolvimento, ainda aponta avisos cuja correção automática exige atualizações incompatíveis de Vinext/Cloudflare/Vite. Eles não entram no bundle de produção e não foram forçados nesta fase.

### Prévia Vercel

- commit técnico remoto: `96eca78c1300701d366fd07d4fc14df4cf94832f`;
- check GitHub/Vercel: `success`;
- status no painel Vercel: `Ready`;
- ambiente: `Preview`;
- origem confirmada: branch `site/auditoria-tecnica-2026-10-24` e commit `96eca78`;
- domínio estável da branch: `https://sitesusttenta-git-site-aud-d59212-templodaslendas-gifs-projects.vercel.app/`;
- deployment inicial imutável: `https://sitesusttenta-rlbno8by2-templodaslendas-gifs-projects.vercel.app/`;
- atribuição de domínios personalizados: `Skipped`; produção não alterada;
- acesso externo: protegido pela autenticação da Vercel. A proteção não foi desativada nem contornada;
- validação do conteúdo: realizada no build local equivalente de produção e no build simulado de prévia; a verificação remota confirmou a conclusão do build, mas a navegação pública automatizada é bloqueada pela proteção da Vercel.

## Próximo passo autorizado

Criar commits, fazer push desta branch e validar somente a prévia Vercel. Não fazer merge na `main` nem publicar em produção.
