import Image from "next/image";
import { Factory, MessageCircleMore, ScanSearch, Sprout } from "lucide-react";

const highlights = [
  { icon: Sprout, title: "Linha completa Embio", text: "Orientação para diferentes aplicações no campo e na agroindústria." },
  { icon: ScanSearch, title: "Atendimento especializado", text: "Análise do cenário antes da recomendação e apoio na escolha da solução." },
  { icon: MessageCircleMore, title: "Compra pelo WhatsApp", text: "Contato direto para consultar disponibilidade, aplicação e aquisição." },
  { icon: Factory, title: "Campo e indústria", text: "Soluções voltadas a propriedades rurais, granjas, confinamentos, biodigestores e operações agroindustriais." },
];

export function EmbioOverview() {
  return <section id="embio" className="section embio-overview"><div className="container">
    <div className="embio-overview-lead" data-reveal><div><p className="section-label">Portfólio principal</p><h2>Soluções Embio para diferentes desafios da operação</h2><p>Da ambiência das instalações ao tratamento biológico de lagoas, dejetos e efluentes, a Susttenta orienta a escolha da solução Embio de acordo com o sistema produtivo e o objetivo de cada propriedade.</p></div><div className="embio-overview-image"><Image src="/media/embio-official/embio-logo-original.png" alt="Embio" width={230} height={88} /><Image src="/media/embio-official/embio-3100.webp" alt="Produto oficial Embio 3100" width={260} height={260} /><Image src="/media/embio-official/embio-6000.webp" alt="Produto oficial Embio 6000" width={210} height={360} /></div></div>
    <div className="embio-highlight-grid">{highlights.map(({ icon: Icon, title, text }) => <article key={title} data-reveal><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
  </div></section>;
}
