# Arquitetura da interface

`app/site-client.tsx` apenas coordena o estado compartilhado do modal de vídeo e a entrada progressiva por scroll. A página foi dividida por responsabilidade em `components/site/`:

- `hero.tsx`: primeira dobra Susttenta + Embio, vídeo real do Propulsor, controle de reprodução e prova de autoridade de Pedro;
- `embio-overview.tsx`: visão geral exclusiva da linha principal e conteúdo sobre tecnologia/laboratório;
- `embiofert-section.tsx`: solução comercial principal, processo técnico, operação e relatos de campo;
- `embio-product-sections.tsx`: seções independentes do Embio 3100 e Embio 6000 com evidências visuais e relatos, além do bloco secundário 5000+/8000;
- `tlc-section.tsx`: seção independente TLC Agro, produto Ecomax e os três vídeos oficiais;
- `product-video-gallery.tsx` e `video-modal.tsx`: cartões de mídia com carregamento sob interação e modal acessível;
- `closing-sections.tsx`: perfil e experiência de Pedro, FAQ e CTA final;
- `site-chrome.tsx`: cabeçalho, rodapé, ícone/links de WhatsApp e consentimento;
- `site-data.ts` e `whatsapp.ts`: conteúdo estruturado e contratos comerciais.

Os vídeos Embio e TLC usam o contrato `ProductVideo` centralizado em `site-data.ts`. A hero carrega apenas metadados e uma versão otimizada; as demais mídias são iniciadas depois da interação do visitante. As interações usam React e CSS, sem nova biblioteca de animação. Conteúdo essencial permanece no HTML e os efeitos respeitam `prefers-reduced-motion`.
