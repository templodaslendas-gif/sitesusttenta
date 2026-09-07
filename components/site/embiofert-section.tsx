import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductVideoGallery } from "./product-video-gallery";
import { productVideos, type ProductVideo } from "./site-data";
import { WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

const stages = ["Aeração", "Homogeneização", "Distribuição dos microrganismos", "Degradação da matéria orgânica"];
export function EmbiofertSection({ onOpen }: { onOpen: (item: ProductVideo) => void }) {
  const videos = productVideos.filter((item) => item.product === "embiofert");
  return <section id="embiofert" className="embiofert-primary"><div className="container">
    <header className="embiofert-heading" data-reveal><div><p className="section-label">Principal solução Susttenta + Embio</p><h2>Tratamento Embiofert</h2><p className="embiofert-subtitle">Embio 3000 e Propulsor Embio trabalhando de forma integrada</p></div><Image src="/media/embio-official/embio-logo-original.png" alt="Embio" width={150} height={56} /></header>
    <div className="embiofert-feature"><div className="embiofert-media embiofert-official-media" data-reveal><Image src="/media/embio-2026/images/embiofert-tratamento-integrado.webp" alt="Apresentação oficial do Tratamento Embiofert com Embio 3000 e Propulsor Embio" width={1600} height={900} sizes="(max-width: 900px) 92vw, 46vw" /><span>Material fornecido pela Embio</span></div><div className="embiofert-copy" data-reveal><h3>Tratamento biológico apoiado por circulação e oxigenação</h3><p>O Tratamento Embiofert combina o Embio 3000 ao Propulsor Embio para apoiar o manejo de lagoas e sistemas de tratamento com dejetos bovinos e suínos. O equipamento movimenta o conteúdo, promove aeração e favorece a homogeneização do volume tratado.</p><p>Com o sistema em movimento, os microrganismos são distribuídos de forma mais uniforme e encontram condições mais adequadas para atuar sobre a matéria orgânica. Conforme o cenário, o processo pode contribuir para reduzir crostas e acúmulos, facilitar o bombeamento e auxiliar no manejo de odores.</p><aside><strong>A implantação começa pela avaliação.</strong> Volume, carga orgânica, geometria da lagoa, rotina de manejo e estrutura disponível orientam aplicação, dosagem e configuração. Não existe protocolo universal.</aside><WhatsAppLink message={whatsappMessages.embiofert} ariaLabel="Falar com o especialista sobre o Tratamento Embiofert pelo WhatsApp" className="button button-yellow whatsapp-pulse">Falar com o especialista<ArrowRight size={18} /></WhatsAppLink></div></div>
    <div className="embiofert-process" data-reveal>{stages.map((stage, index) => <div key={stage}><span>{String(index + 1).padStart(2, "0")}</span><CheckCircle2 /><strong>{stage}</strong></div>)}</div>
    <div className="video-block-heading" data-reveal><p className="section-label">Operação e relatos de campo</p><h3>Veja o sistema funcionando e experiências apresentadas pela Embio</h3><p>Os vídeos mostram contextos reais. Cada operação exige avaliação própria; os relatos não constituem garantia de resultado.</p></div><ProductVideoGallery items={videos} onOpen={onOpen} />
  </div></section>;
}
