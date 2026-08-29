# Arquitetura da interface

`app/site-client.tsx` apenas coordena o estado compartilhado do modal de vídeo e a entrada progressiva por scroll. A página foi dividida por responsabilidade em `components/site/`:

- `hero.tsx`: primeira dobra Susttenta + Embio e fallback estático preparado para futura mídia horizontal;
- `embio-overview.tsx`: visão geral exclusiva da linha principal;
- `embiofert-section.tsx`: solução comercial principal e processo técnico;
- `embio-product-sections.tsx`: seções independentes do Embio 3100, Embio 6000 e bloco secundário 5000+/8000;
- `tlc-section.tsx`: seção independente TLC Agro, produto Ecomax e os três vídeos oficiais;
- `product-video-gallery.tsx` e `video-modal.tsx`: cartões futuros sem player vazio, carregamento sob interação e modal acessível;
- `closing-sections.tsx`: Pedro, FAQ e CTA final;
- `site-chrome.tsx`: cabeçalho, rodapé, ícone/links de WhatsApp e consentimento;
- `site-data.ts` e `whatsapp.ts`: conteúdo estruturado e contratos comerciais.

Os vídeos disponíveis e futuros usam o contrato `ProductVideo` centralizado em `site-data.ts`. As interações usam React e CSS, sem nova biblioteca de animação. Conteúdo essencial permanece no HTML e os efeitos respeitam `prefers-reduced-motion`.
