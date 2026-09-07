import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { InlineVideo } from "./inline-video";
import { ProductVideoGallery } from "./product-video-gallery";
import { productVideos } from "./site-data";
import { WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

const stages = ["Aeração", "Homogeneização", "Distribuição biológica", "Manejo da matéria orgânica"];

export function EmbiofertSection() {
  const videos = productVideos.filter((item) => item.product === "embiofert");
  return <section id="embiofert" className="embiofert-primary"><div className="container">
    <header className="embiofert-heading" data-reveal>
      <p className="section-label">Principal solução Susttenta + Embio</p>
      <h2>Tratamento Embiofert</h2>
      <p className="embiofert-subtitle">Embio 3000 e Propulsor Embio trabalhando de forma integrada</p>
    </header>
    <InlineVideo item={videos[0]} className="inline-video-cinema" playLabel="Assistir ao tratamento em operação" priority />
    <div className="embiofert-feature"><div className="embiofert-media embiofert-official-media" data-reveal><Image src="/media/embio-2026/images/embiofert-tratamento-integrado.webp" alt="Apresentação oficial do Tratamento Embiofert com Embio 3000 e Propulsor Embio" width={1600} height={900} sizes="(max-width: 900px) 92vw, 42vw" /></div><div className="embiofert-copy" data-reveal><h3>Biologia, circulação e oxigenação trabalhando juntas</h3><p>O Tratamento Embiofert combina o Embio 3000 ao Propulsor Embio para apoiar o manejo de lagoas e sistemas com dejetos bovinos e suínos. O equipamento movimenta o conteúdo, promove aeração e favorece a homogeneização do volume tratado.</p><p>Com o sistema em movimento, os microrganismos se distribuem melhor e encontram condições adequadas para atuar sobre a matéria orgânica. Conforme o cenário, o processo pode contribuir para reduzir crostas e acúmulos, facilitar o bombeamento e auxiliar no manejo de odores.</p><aside><strong>A implantação começa pela avaliação.</strong> Volume, carga orgânica, geometria da lagoa, rotina de manejo e estrutura disponível orientam a aplicação. Não existe protocolo universal.</aside><WhatsAppLink message={whatsappMessages.embiofert} ariaLabel="Falar com o especialista sobre o Tratamento Embiofert pelo WhatsApp" className="button button-yellow whatsapp-pulse">Quero avaliar minha operação<ArrowRight size={18} /></WhatsAppLink></div></div>
    <div className="embiofert-process" data-reveal>{stages.map((stage) => <div key={stage}><CheckCircle2 /><strong>{stage}</strong></div>)}</div>
    <div className="video-block-heading video-block-heading-strong" data-reveal><p className="section-label">Operação real. Vozes do campo.</p><h3>Veja o Embiofert trabalhando e ouça quem acompanhou essa transformação</h3><p>São registros de contextos reais apresentados pela Embio. Cada operação exige avaliação própria; os relatos não constituem garantia de resultado.</p></div>
    <ProductVideoGallery items={videos.slice(1)} />
  </div></section>;
}
