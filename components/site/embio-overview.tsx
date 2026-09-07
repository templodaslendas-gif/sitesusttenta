import Image from "next/image";
import { EmbioHighlights } from "./embio-highlights";
import { type ProductVideo } from "./site-data";

export function EmbioOverview({ onOpen }: { onOpen: (item: ProductVideo) => void }) {
  return <section id="embio" className="section embio-overview"><div className="container">
    <div className="embio-overview-lead" data-reveal><div><p className="section-label">Portfólio principal</p><h2>Biotecnologia conectada à realidade da operação</h2><p>A Embio combina desenvolvimento, fabricação, conhecimento técnico e experiência prática no campo. A Susttenta transforma esse portfólio em uma recomendação coerente com o sistema produtivo, o destino dos dejetos e o objetivo de cada propriedade.</p></div><div className="embio-overview-image embio-overview-photo"><Image src="/media/embio-2026/images/embio-apresentacao.webp" alt="Apresentação Embio com aplicação em propriedades rurais e sistemas de produção animal" fill sizes="(max-width: 900px) 92vw, 46vw" unoptimized /></div></div>
    <EmbioHighlights />
    <div className="laboratory-story" data-reveal>
      <header><p className="section-label">Pesquisa, controle e qualidade</p><h3>Conheça nosso laboratório</h3><p>A Embio conduz desenvolvimento e fabricação em estrutura própria, com procedimentos técnicos, controle de processos, higiene, rastreabilidade e boas práticas compatíveis com a rotina laboratorial. É desse ambiente que nasce a tecnologia levada ao campo pela Susttenta.</p></header>
      <button type="button" className="laboratory-video" onClick={() => onOpen({ id: "embio-tecnologia", product: "embio", status: "available", eyebrow: "Estrutura Embio", title: "Tecnologia, laboratório e presença no campo", description: "Uma visão da estrutura que conecta desenvolvimento, fabricação, conhecimento técnico e acompanhamento da aplicação.", videoSrc: "/media/embio-2026/videos/embio-tecnologia-e-laboratorio.mp4", posterSrc: "/media/embio-2026/posters/embio-tecnologia-e-laboratorio.webp" })} aria-label="Assistir ao vídeo Conheça nosso laboratório">
        <Image src="/media/embio-2026/posters/embio-tecnologia-e-laboratorio.webp" alt="Laboratório e estrutura técnica da Embio" fill sizes="(max-width: 900px) 100vw, 1180px" />
        <span>Assistir ao vídeo completo</span>
      </button>
    </div>
  </div></section>;
}
