# Arquitetura da interface

`app/site-client.tsx` apenas coordena a entrada progressiva por scroll (`IntersectionObserver`). Não há mais estado global de modal. A página foi dividida por responsabilidade em `components/site/`:

- `hero.tsx`: primeira dobra com o vídeo do Propulsor Embio (`embiofert-propulsor-hero.mp4`, derivação recortada sem a legenda queimada) como fundo cinematográfico em tela cheia (~100svh menos o cabeçalho), camada escura para leitura e conteúdo reduzido ao posicionamento, resumo e dois caminhos de ação. Vídeo decorativo, automático, mudo e em loop; `prefers-reduced-motion` mostra o poster sem autoplay; pausa quando a aba fica oculta; controle de pausa acessível para teclado/leitor de tela, visualmente oculto até receber foco. Identificação editorial "SUSTTENTA | REPRESENTANTE AUTORIZADO EMBIO" acima do título, sem cápsula/botão;
- `embiofert-section.tsx`: primeira seção após a hero — principal solução comercial, cabeçalho centralizado, vídeo de operação inline, explicação em largura ampla sem peça promocional duplicada, processo e dois relatos em cartões largos;
- `embio-overview.tsx`: visão geral da linha Embio seguida diretamente do laboratório apresentado em vídeo inline;
- `embio-product-sections.tsx`: seções independentes `Embio3100Section`, `Embio6000Section` e `Embio8000Section`. Grid de áreas (`copy` / `media` / `warning`) equilibra as duas colunas no desktop e lineariza no celular (título → texto → produto → aviso → conteúdo complementar → CTA), sem alturas forçadas. Os frascos são artes com fundo transparente (`*-frasco.webp`) sobre um "palco" com fundo coerente, base e sombra de contato em CSS — nada de retângulo branco. 3100 usa palco claro esverdeado, 6000 usa azul técnico e 8000 usa verde industrial. O 8000 não possui depoimentos e recebe somente apresentação técnica e CTA;
- `tlc-section.tsx`: seção independente TLC Agro, abrindo com faixa de marca em verde-escuro e o logo TLC branco em destaque, depois o portfólio EcoMax, aplicações e vídeos oficiais (galeria de cards verticais, um por linha no celular);
- `inline-video.tsx`: componente de vídeo inline reutilizável — mostra o poster com botão de play central ("Assistir ao vídeo"), troca para `<video controls playsInline preload="metadata">` no próprio espaço ao clicar (sem modal, sem nova janela), oculta o play ao iniciar. A proporção vem de `item.aspectRatio` (medida real do arquivo: Embio 16 / 9, TLC/EcoMax 9 / 16), nunca de uma altura rígida; `data-orientation` expõe landscape/portrait/square para o tema;
- `product-video-gallery.tsx`: grade de cartões que usa `inline-video.tsx`, com `variant` (`grid` responsivo respeitando vídeos verticais, `duo` dois cards largos para o Embio 6000, `stack` um card amplo para o Embio 3100);
- `closing-sections.tsx`: perfil e experiência de Pedro, FAQ e CTA final;
- `site-chrome.tsx`: cabeçalho com faixa de marcas representadas, rodapé reforçado, nova identidade Susttenta, ícone/links de WhatsApp e consentimento;
- `site-data.ts` e `whatsapp.ts`: conteúdo estruturado e contratos comerciais.

Ordem das seções: hero → Tratamento Embiofert → visão geral Embio → laboratório → Embio 3100 → Embio 6000 → Embio 8000 → TLC Agro → Pedro → FAQ → contato → rodapé.

Os vídeos Embio e TLC usam o contrato `ProductVideo` centralizado em `site-data.ts`; itens `coming-soon` ou sem `videoSrc` não renderizam player. Nenhum vídeo pesado é carregado antes da interação do visitante. As interações usam React e CSS, sem nova biblioteca de animação. Conteúdo essencial permanece no HTML e os efeitos respeitam `prefers-reduced-motion`.
