import Image from "next/image";
import { InlineVideo } from "./inline-video";
import { productVideos } from "./site-data";

const labVideo = productVideos.find((item) => item.id === "embio-tecnologia")!;

export function EmbioOverview() {
  return <section id="embio" className="section embio-overview"><div className="container">
    <div className="embio-overview-lead" data-reveal><div><p className="section-label">Portfólio principal</p><h2>Biotecnologia conectada à realidade da operação</h2><p>A Embio combina desenvolvimento, fabricação, conhecimento técnico e experiência prática no campo. A Susttenta transforma esse portfólio em uma recomendação coerente com o sistema produtivo, o destino dos dejetos e o objetivo de cada propriedade.</p></div><div className="embio-overview-image embio-overview-photo"><Image src="/media/embio-2026/images/embio-apresentacao.webp" alt="Apresentação Embio com aplicação em propriedades rurais e sistemas de produção animal" fill sizes="(max-width: 900px) 92vw, 46vw" unoptimized /></div></div>
    <div className="laboratory-story" data-reveal>
      <header><p className="section-label">Pesquisa, controle e qualidade</p><h3>Laboratório e fabricação própria do início ao fim do processo</h3><p>A Embio conduz desenvolvimento e fabricação em estrutura própria, com procedimentos técnicos, controle de processos, higiene, rastreabilidade e boas práticas compatíveis com a rotina laboratorial. É desse ambiente que nasce a tecnologia levada ao campo pela Susttenta.</p></header>
      <InlineVideo item={labVideo} className="inline-video-cinema" playLabel="Assistir ao vídeo completo" />
    </div>
  </div></section>;
}
