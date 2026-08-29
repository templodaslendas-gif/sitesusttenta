# Arquitetura da interface

`app/site-client.tsx` apenas coordena o estado compartilhado do modal de vídeo e a entrada progressiva por scroll. A página foi dividida por responsabilidade em `components/site/`:

- `hero.tsx`: primeira dobra e composição estática de produtos oficiais;
- `solutions-carousel.tsx`: carrossel Embla e acesso às duas linhas representadas;
- `technical-sections.tsx`: desafios, Embiofert e comparação Embio 3100/6000;
- `tlc-section.tsx`: produto Ecomax, fluxo de captura e demonstração;
- `testimonials.tsx` e `video-modal.tsx`: relatos oficiais, carregamento sob interação e modal acessível;
- `closing-sections.tsx`: cards das marcas, FAQ, Pedro e CTA final;
- `site-chrome.tsx`: cabeçalho, rodapé, ícone/links de WhatsApp e consentimento;
- `site-data.ts` e `whatsapp.ts`: conteúdo estruturado e contratos comerciais.

As interações usam React, CSS e Embla já presente no projeto. Não foram adicionadas bibliotecas de animação. Conteúdo essencial permanece no HTML; efeitos respeitam `prefers-reduced-motion`.
