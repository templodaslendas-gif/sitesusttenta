# Arquitetura da interface

`app/site-client.tsx` apenas coordena o estado compartilhado do modal de vídeo e a entrada progressiva por scroll. A página foi dividida por responsabilidade em `components/site/`:

- `hero.tsx`: primeira dobra com o vídeo do Propulsor Embio como fundo cinematográfico em tela cheia (~100svh menos o cabeçalho), camada escura para leitura, botão de pausa/play e respeito a `prefers-reduced-motion` (poster, sem autoplay). Selo "Representante autorizado Embio";
- `embiofert-section.tsx`: primeira seção após a hero — principal solução comercial, abrindo com operação em vídeo, seguida por explicação, processo e relatos de campo;
- `embio-overview.tsx`: visão geral da linha Embio, carrossel editorial de diferenciais e o vídeo de tecnologia e laboratório;
- `embio-product-sections.tsx`: seção única `EmbioSolutionsSection` — Embio 3100 e Embio 6000 lado a lado no desktop (cartões de mesma altura, âncoras `#embio-3100` e `#embio-6000`) e empilhados no celular;
- `tlc-section.tsx`: seção independente TLC Agro, produto Ecomax e os três vídeos oficiais;
- `product-video-gallery.tsx` e `video-modal.tsx`: cartões de mídia com botão de play central sempre visível (`VideoPlayBadge`), camada escura sobre o poster, estados de hover/foco e modal acessível;
- `closing-sections.tsx`: perfil e experiência de Pedro, FAQ e CTA final;
- `site-chrome.tsx`: cabeçalho, rodapé, ícone/links de WhatsApp e consentimento;
- `site-data.ts` e `whatsapp.ts`: conteúdo estruturado e contratos comerciais.

Ordem das seções: hero com vídeo em tela cheia → Tratamento Embiofert → tecnologia e laboratório (visão geral Embio) → Embio 3100 e Embio 6000 lado a lado → TLC Agro → Pedro → FAQ → contato.

Os vídeos Embio e TLC usam o contrato `ProductVideo` centralizado em `site-data.ts`. A hero carrega apenas metadados e uma versão otimizada; as demais mídias são iniciadas depois da interação do visitante. As interações usam React e CSS, sem nova biblioteca de animação. Conteúdo essencial permanece no HTML e os efeitos respeitam `prefers-reduced-motion`.
