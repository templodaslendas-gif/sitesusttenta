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
- Merge e produção foram autorizados explicitamente após a homologação e concluídos sem `force push`.
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

## Fase 3 — produção

- autorização recebida para merge, push normal e produção no projeto Vercel existente;
- merge aplicado por fast-forward: `main` avançou de `55c5847` para `ad7cca3`;
- histórico preservado; nenhum `force push`;
- deployment Vercel: `dpl_684Nmh5TMLQE8EcwkcvZ6nEHg9ja`;
- ambiente confirmado: `Production`;
- status confirmado: `Ready`;
- domínio atual confirmado: `https://www.susttenta.com.br/`;
- origem confirmada: branch `main`, commit `ad7cca3`;
- home: canonical oficial, `index, follow`, Open Graph e JSON-LD confirmados;
- mídia: 32 imagens sem falha e vídeo sem erro;
- conversão: 14 links de WhatsApp presentes;
- responsividade básica: sem overflow horizontal no viewport validado;
- console: nenhum erro ou aviso originado de `susttenta.com.br`;
- rotas `/privacidade`, `/cookies`, `/termos`, `/robots.txt`, `/sitemap.xml` e `/llms.txt` carregadas em produção;
- conteúdo visual e comercial preservado.

## Pendências futuras não executadas

- preencher razão social, CNPJ e e-mail específico de privacidade quando essas informações forem formalmente disponibilizadas;
- avaliar com cautela as atualizações incompatíveis da cadeia de desenvolvimento Vinext/Cloudflare/Vite, sem `npm audit fix --force`.

## Fase 4 — Search Console e alinhamento jurídico (prévia concluída)

- propriedade de domínio `susttenta.com.br` criada e verificada no Google Search Console por registro TXT específico no DNS;
- nenhum registro A, CNAME, MX, SPF, DKIM, DMARC, nameserver ou outro domínio foi alterado;
- sitemap oficial enviado como `https://www.susttenta.com.br/sitemap.xml`; após a leitura inicial transitória, o Search Console confirmou status `Processado`, tipo `Sitemap`, data de leitura em 24/10/2026 e quatro páginas encontradas;
- branch local: `site/politicas-lgpd-susttenta-2026-10-24`;
- políticas de Privacidade/LGPD, Cookies e Termos ampliadas sem alterar layout, cores, tipografia, imagens, vídeos ou conteúdo comercial;
- dados empresariais não confirmados não foram inventados; o canal público confirmado para solicitações de titulares é o WhatsApp oficial;
- auditoria do código não identificou ferramenta ativa de analytics, publicidade ou perfilamento; a documentação agora declara esse estado e exige renovação do consentimento antes de eventual ativação futura;
- validação local concluída: lint aprovado, TypeScript aprovado, 35/35 testes aprovados, build Next.js aprovado com sete rotas públicas e `git diff --check` limpo;
- o sitemap público foi verificado diretamente com HTTP 200 e `Content-Type: application/xml`; o `robots.txt` aponta para a URL canônica correta;
- commit remoto da implementação: `e76eab86cf2df2062d44c9dd656a31365ff0ea5f` (`feat: alinhar políticas de privacidade e cookies`);
- branch publicada: `site/politicas-lgpd-susttenta-2026-10-24`;
- deployment de prévia: `dpl_De7U5BY3BQEwx4tGPM8zm9bhJNz3`;
- URL da prévia: `https://sitesusttenta-j0kvbq94a-templodaslendas-gifs-projects.vercel.app/`;
- Vercel confirmou origem na branch jurídica, commit correto, ambiente de prévia (`target: null`) e status `READY`;
- `/privacidade`, `/cookies` e `/termos` foram abertas na prévia autenticada e tiveram títulos, data, estrutura semântica, canal de WhatsApp e conteúdo novo confirmados;
- painel de preferências aberto na prévia: necessários ativos, categorias de análise e marketing identificadas como inativas e controles preservados;
- a proteção da prévia foi mantida; nenhum domínio de produção foi atribuído e `main` não foi alterada.

## Estado ao encerrar a fase

Search Console concluído e prévia jurídica pronta para homologação. A produção técnica continua no commit `d240d24`; não há autorização para merge ou produção desta fase jurídica.
