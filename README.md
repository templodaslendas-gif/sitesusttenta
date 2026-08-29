# Susttenta

Site institucional e comercial da Susttenta, representante prioritária da linha Embio para tratamento biológico, ambiência, manejo de dejetos e efluentes. A TLC Agro integra o portfólio como linha complementar em uma apresentação independente.

## Stack

- Next.js 16, React 19 e TypeScript
- CSS responsivo próprio
- Componentes React e interações leves sem biblioteca adicional de animação
- Testes com `node:test`
- Consentimento granular de cookies persistido localmente

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior e npm.

```bash
npm ci
npm run dev
```

Em Windows, quando o PowerShell bloquear `npm.ps1`, use `npm.cmd`. Como o script `dev` define uma variável no formato POSIX para a integração de hospedagem, a prévia Next.js pode ser iniciada diretamente com `npx.cmd next dev`. O script de build da hospedagem usa Bash; Git Bash ou ambiente compatível é necessário para executá-lo localmente.

## Validação

```bash
npm run lint
npx next build
npm test
git diff --check
```

As fontes e transformações das mídias oficiais são registradas em [`docs/MEDIA-SOURCES.md`](docs/MEDIA-SOURCES.md). A arquitetura da página está resumida em [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Publicação

O projeto possui configuração de hospedagem existente. Não crie outro projeto e não faça push ou deploy sem autorização expressa do responsável pela Susttenta.
