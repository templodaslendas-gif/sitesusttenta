import Image from "next/image";
import { Factory, MessageCircleMore, ScanSearch, Sprout } from "lucide-react";
import { ProductVideoGallery } from "./product-video-gallery";
import { productVideos, type ProductVideo } from "./site-data";

const highlights = [
  { icon: Sprout, title: "Linha completa Embio", text: "Orientação para diferentes aplicações no campo e na agroindústria." },
  { icon: ScanSearch, title: "Atendimento especializado", text: "Análise do cenário antes da recomendação e apoio na escolha da solução." },
  { icon: MessageCircleMore, title: "Compra pelo WhatsApp", text: "Contato direto para consultar disponibilidade, aplicação e aquisição." },
  { icon: Factory, title: "Campo e indústria", text: "Soluções voltadas a propriedades rurais, granjas, confinamentos, biodigestores e operações agroindustriais." },
];

export function EmbioOverview({ onOpen }: { onOpen: (item: ProductVideo) => void }) {
  const videos = productVideos.filter((item) => item.product === "embio");
  return <section id="embio" className="section embio-overview"><div className="container">
    <div className="embio-overview-lead" data-reveal><div><p className="section-label">Portfólio principal</p><h2>Biotecnologia conectada à realidade da operação</h2><p>A Embio combina desenvolvimento, fabricação, conhecimento técnico e experiência prática no campo. A Susttenta transforma esse portfólio em uma recomendação coerente com o sistema produtivo, o destino dos dejetos e o objetivo de cada propriedade.</p></div><div className="embio-overview-image embio-overview-photo"><Image src="/media/embio-2026/images/embio-apresentacao.webp" alt="Apresentação Embio com aplicação em propriedades rurais e sistemas de produção animal" fill sizes="(max-width: 900px) 92vw, 46vw" /></div></div>
    <div className="embio-highlight-grid">{highlights.map(({ icon: Icon, title, text }) => <article key={title} data-reveal><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
    <div className="embio-technology-story"><div data-reveal><Image src="/media/embio-2026/images/embio-tecnologia.webp" alt="Tecnologia Embio: ação biológica e mecânica no manejo da matéria orgânica" width={1600} height={900} sizes="(max-width: 900px) 92vw, 55vw" /></div><div><p className="section-label">Da pesquisa à aplicação</p><h3>Estrutura técnica para apoiar decisões de campo</h3><p>O trabalho integra bioestimuladores, soluções mecânicas, orientação de aplicação e acompanhamento. Veja como a Embio apresenta sua estrutura de desenvolvimento, laboratório e fabricação.</p><ProductVideoGallery items={videos} onOpen={onOpen} compact /></div></div>
  </div></section>;
}
