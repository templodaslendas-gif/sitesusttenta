# Arquitetura da interface

`app/site-client.tsx` apenas coordena a entrada progressiva por scroll (`IntersectionObserver`). Não há mais estado global de modal. A página foi dividida por responsabilidade em `components/site/`:

- `hero.tsx`: primeira dobra com o vídeo do Propulsor Embio (`embiofert-propulsor-hero.mp4`, derivação recortada sem a legenda queimada) como fundo cinematográfico em tela cheia (~100svh menos o cabeçalho), camada escura para leitura. Vídeo decorativo, automático, mudo e em loop; `prefers-reduced-motion` mostra o poster sem autoplay; pausa quando a aba fica oculta; controle de pausa acessível para teclado/leitor de tela, visualmente oculto até receber foco. Identificação editorial "SUSTTENTA | REPRESENTANTE AUTORIZADO EMBIO" acima do título, sem cápsula/botão;
- `embiofert-section.tsx`: primeira seção após a hero — principal solução comercial, cabeçalho centralizado (sem logo solto), vídeo de operação inline, explicação, processo e relatos de campo;
- `embio-overview.tsx`: visão geral da linha Embio seguida diretamente do laboratório apresentado em vídeo inline;
- `embio-product-sections.tsx`: seções independentes `Embio3100Section` e `Embio6000Section`, cada uma com layout de duas colunas (imagem + conteúdo), depoimentos reproduzidos inline e CTA por WhatsApp. Fundos distintos (3100 claro, 6000 azul-escuro). Sem alturas forçadas;
- `tlc-section.tsx`: seção independente TLC Agro, abrindo com faixa de marca em verde-escuro e o logo TLC branco em destaque, depois o portfólio EcoMax, aplicações e vídeos oficiais;
- `inline-video.tsx`: componente de vídeo inline reutilizável — mostra o poster com botão de play central ("Assistir ao vídeo"), troca para `<video controls playsInline preload="metadata">` no próprio espaço ao clicar (sem modal, sem nova janela), oculta o play ao iniciar e mantém a proporção do card;
- `product-video-gallery.tsx`: grade de cartões de vídeo que usa `inline-video.tsx`;
- `closing-sections.tsx`: perfil e experiência de Pedro, FAQ e CTA final;
- `site-chrome.tsx`: cabeçalho, rodapé reforçado, ícone/links de WhatsApp e consentimento;
- `site-data.ts` e `whatsapp.ts`: conteúdo estruturado e contratos comerciais.

Ordem das seções: hero → Tratamento Embiofert → visão geral Embio → laboratório → Embio 3100 → Embio 6000 → TLC Agro → Pedro → FAQ → contato → rodapé.

Os vídeos Embio e TLC usam o contrato `ProductVideo` centralizado em `site-data.ts`; itens `coming-soon` ou sem `videoSrc` não renderizam player. Nenhum vídeo pesado é carregado antes da interação do visitante. As interações usam React e CSS, sem nova biblioteca de animação. Conteúdo essencial permanece no HTML e os efeitos respeitam `prefers-reduced-motion`.
