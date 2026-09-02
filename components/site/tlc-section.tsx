import Image from "next/image";
import { ArrowRight, ClipboardCheck, LogIn, Magnet, MapPinned, RefreshCw, ShieldCheck } from "lucide-react";
import { ProductVideoGallery } from "./product-video-gallery";
import { productVideos, type ProductVideo } from "./site-data";
import { WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

const tlcProducts = [
  { name: "Atrativo Biológico EcoMax", eyebrow: "Captura de moscas adultas", description: "Formulação orgânica usada com a armadilha EcoMax para criar pontos de atração e captura em áreas externas da operação.", image: "/media/tlc-official/images/ecomax-produtos.webp", alt: "Embalagens oficiais do Atrativo Biológico EcoMax", fit: "contain" },
  { name: "Armadilha EcoMax", eyebrow: "Entrada e retenção", description: "Estrutura desenvolvida para receber o atrativo e reter as moscas capturadas. Pode ser posicionada no solo ou suspensa, conforme avaliação do local.", image: "/media/tlc-official/images/ecomax-armadilha-oficial.webp", alt: "Armadilha EcoMax em material oficial da TLC Agro", fit: "cover" },
  { name: "Inseticida Híbrido EcoMax", eyebrow: "Manejo complementar", description: "Alternativa complementar para insetos em ambientes internos e áreas específicas. A seleção, o modo de uso e os cuidados devem seguir o rótulo e a orientação técnica.", image: "/media/tlc-official/catalog-2026/ecomax-inseticida-hibrido.webp", alt: "Linha oficial do Inseticida Híbrido EcoMax", fit: "contain" },
] as const;

const tlcApplications = [
  { title: "Pecuária", description: "Currais, confinamentos, áreas de ordenha e pontos externos com pressão de moscas.", image: "/media/tlc-official/catalog-2026/aplicacao-pecuaria.webp", alt: "Operação de ordenha representando aplicações em pecuária" },
  { title: "Avicultura", description: "Perímetro de aviários e áreas externas onde o manejo integrado exige monitoramento contínuo.", image: "/media/tlc-official/catalog-2026/aplicacao-avicultura.webp", alt: "Granja avícola representando aplicações da linha EcoMax" },
  { title: "Suinocultura", description: "Entorno de instalações e áreas produtivas com acúmulo de matéria orgânica e circulação de moscas.", image: "/media/tlc-official/catalog-2026/aplicacao-suinocultura.webp", alt: "Suínos representando aplicações da linha EcoMax" },
  { title: "Indústrias alimentícias", description: "Áreas externas, recepção e pontos críticos definidos após leitura técnica da operação.", image: "/media/tlc-official/catalog-2026/aplicacao-industria.webp", alt: "Ambiente industrial alimentício representando aplicações da linha EcoMax" },
  { title: "Haras e equinos", description: "Estábulos, baias e áreas externas onde o conforto dos animais depende de manejo consistente.", image: "/media/tlc-official/catalog-2026/aplicacao-equinos.webp", alt: "Equinos em estábulo representando aplicações da linha EcoMax" },
] as const;

export function TlcEcomaxSection({ onOpen }: { onOpen: (item: ProductVideo) => void }) {
  const tlcVideos = productVideos.filter((item) => item.product === "tlc");

  return (
    <section id="tlc-agro" className="tlc-section">
      <div className="brand-transition" aria-hidden="true"><span>Uma linha complementar, uma apresentação independente</span></div>

      <div className="container tlc-intro">
        <div data-reveal>
          <Image className="tlc-section-logo" src="/media/tlc-official/images/tlc-logo-original.svg" alt="TLC Agro" width={170} height={70} />
          <p className="section-label">Linha complementar representada pela Susttenta</p>
          <h2>Controle de moscas com estratégia de campo</h2>
          <p className="lead">Linha EcoMax para captura, monitoramento e manejo complementar</p>
          <p>A Susttenta orienta a escolha e o posicionamento das soluções TLC Agro de acordo com o ambiente, a origem da pressão de moscas e a rotina da propriedade ou indústria. O trabalho combina produto, leitura do local, acompanhamento e boas práticas de higiene.</p>
          <div className="use-list">{["Granjas", "Currais", "Estábulos", "Haras", "Confinamentos", "Indústrias", "Áreas externas"].map((place) => <span key={place}>{place}</span>)}</div>
          <WhatsAppLink message={whatsappMessages.ecomax} ariaLabel="Conhecer a linha Ecomax pelo WhatsApp" className="button button-dark whatsapp-pulse">Falar sobre a linha Ecomax<ArrowRight size={18} /></WhatsAppLink>
        </div>
        <div className="tlc-product-stage" data-reveal>
          <div className="tlc-bottle"><Image src="/media/tlc-official/images/ecomax-produtos.webp" alt="Atrativo Ecomax em embalagem oficial" width={620} height={494} /></div>
          <div className="tlc-trap"><Image src="/media/tlc-official/images/ecomax-armadilha-oficial.webp" alt="Armadilha Ecomax em demonstração oficial" fill sizes="(max-width: 900px) 62vw, 24vw" /></div>
          <span>Materiais oficiais fornecidos pela TLC Agro</span>
        </div>
      </div>

      <div className="container tlc-portfolio" id="tlc-produtos">
        <header className="tlc-block-heading" data-reveal><p className="section-label">Portfólio EcoMax</p><h3>Uma solução para cada etapa do manejo</h3><p>Atrativo, armadilha e manejo complementar ocupam funções diferentes. A recomendação depende do diagnóstico do ambiente e deve respeitar as instruções de cada produto.</p></header>
        <div className="tlc-product-grid">
          {tlcProducts.map((product) => <article key={product.name} data-reveal>
            <div className="tlc-card-media"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: product.fit }} /></div>
            <div className="tlc-card-copy"><span>{product.eyebrow}</span><h4>{product.name}</h4><p>{product.description}</p></div>
          </article>)}
        </div>
      </div>

      <div className="container capture-story" data-reveal>
        <div><Magnet /><span>01</span><h3>Atração</h3><p>O atrativo cria um ponto de interesse para moscas adultas na área monitorada.</p></div>
        <div><LogIn /><span>02</span><h3>Entrada</h3><p>A geometria da armadilha permite a entrada das moscas atraídas.</p></div>
        <div><ShieldCheck /><span>03</span><h3>Retenção</h3><p>O reservatório retém as moscas capturadas e precisa de inspeção e manejo periódicos.</p></div>
      </div>

      <div className="tlc-applications" id="tlc-aplicacoes">
        <div className="container">
          <header className="tlc-block-heading is-light" data-reveal><p className="section-label">Onde a linha pode ser aplicada</p><h3>Cenários rurais e agroindustriais</h3><p>Os materiais da TLC Agro apresentam aplicações em cinco contextos. Em todos eles, distância, quantidade e posição das armadilhas devem ser definidas após avaliação da área.</p></header>
          <div className="tlc-application-grid">
            {tlcApplications.map((application, index) => <article key={application.title} data-reveal>
              <Image src={application.image} alt={application.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1020px) 50vw, 33vw" />
              <div><span>{String(index + 1).padStart(2, "0")}</span><h4>{application.title}</h4><p>{application.description}</p></div>
            </article>)}
          </div>
        </div>
      </div>

      <div className="container tlc-planning" data-reveal>
        <div className="tlc-planning-intro"><p className="section-label">Orientação Susttenta</p><h3>Produto sem planejamento não resolve a operação</h3><p>O controle deve fazer parte de um manejo integrado. Antes de recomendar a linha, avaliamos o cenário informado pelo produtor e orientamos uma implantação coerente com a rotina do local.</p></div>
        <ol>
          <li><MapPinned /><div><strong>Leitura da área</strong><span>Identificação de pontos críticos, fluxo e ambiente.</span></div></li>
          <li><ClipboardCheck /><div><strong>Escolha da solução</strong><span>Definição do conjunto mais adequado ao objetivo.</span></div></li>
          <li><ShieldCheck /><div><strong>Posicionamento</strong><span>Instalação orientada, sem receita única para todos os locais.</span></div></li>
          <li><RefreshCw /><div><strong>Monitoramento</strong><span>Inspeção, manejo e ajustes conforme a resposta em campo.</span></div></li>
        </ol>
      </div>

      <div className="container tlc-media-section">
        <header className="video-block-heading" data-reveal><p className="section-label">Materiais oficiais TLC Agro</p><h3>Veja a montagem, o funcionamento e relatos publicados</h3><p>Os vídeos abaixo foram publicados pela fabricante. Os participantes não são apresentados como clientes da Susttenta e não recebem identificação ou resultados que não estejam confirmados na fonte.</p></header>
        <ProductVideoGallery items={tlcVideos} onOpen={onOpen} />
        <div className="tlc-closing-cta" data-reveal><div><strong>Quer dimensionar a linha EcoMax para sua operação?</strong><span>Envie o tipo de atividade e o principal ponto de infestação para uma orientação inicial.</span></div><WhatsAppLink message={whatsappMessages.ecomax} ariaLabel="Falar sobre a linha Ecomax com a Susttenta pelo WhatsApp" className="button button-dark whatsapp-pulse">Falar com a Susttenta<ArrowRight size={18} /></WhatsAppLink></div>
      </div>
    </section>
  );
}
