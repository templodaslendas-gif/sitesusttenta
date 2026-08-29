import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductVideoGallery } from "./product-video-gallery";
import { productVideos } from "./site-data";
import { WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

const stages = ["Aeração", "Homogeneização", "Distribuição dos microrganismos", "Degradação da matéria orgânica"];
export function EmbiofertSection() {
  const videos = productVideos.filter((item) => item.product === "embiofert");
  return <section id="embiofert" className="embiofert-primary"><div className="container">
    <header className="embiofert-heading" data-reveal><div><p className="section-label">Principal solução Susttenta + Embio</p><h2>Tratamento Embiofert</h2><p className="embiofert-subtitle">Embio 3000 e Propulsor Embio trabalhando de forma integrada</p></div><Image src="/media/embio-official/embio-logo-original.png" alt="Embio" width={150} height={56} /></header>
    <div className="embiofert-feature"><div className="embiofert-media" data-reveal><div className="embiofert-rings" aria-hidden="true" /><Image src="/media/embio-official/embiofert.webp" alt="Embio 3000 e Propulsor Embio em conjunto oficial" width={900} height={900} sizes="(max-width: 900px) 92vw, 46vw" /><span>Imagem oficial Embio</span></div><div className="embiofert-copy" data-reveal><h3>Tratamento biológico apoiado por circulação e oxigenação</h3><p>O Tratamento Embiofert combina o Embio 3000 ao Propulsor Embio para apoiar o manejo de lagoas e sistemas de tratamento com dejetos bovinos e suínos. O equipamento movimenta o conteúdo, promove aeração e favorece a homogeneização do volume tratado.</p><p>Com o sistema em movimento, os microrganismos são distribuídos de forma mais uniforme e encontram condições mais adequadas para atuar sobre a matéria orgânica. Conforme o cenário, o processo pode contribuir para reduzir o acúmulo de sedimentos, auxiliar no controle de odores e melhorar condições relacionadas à proliferação de moscas.</p><aside><strong>A implantação começa pela avaliação.</strong> Volume, carga orgânica, geometria da lagoa, rotina de manejo e estrutura disponível orientam aplicação, dosagem e configuração. Não existe protocolo universal.</aside><WhatsAppLink message={whatsappMessages.embiofert} ariaLabel="Falar com o especialista sobre o Tratamento Embiofert pelo WhatsApp" className="button button-yellow whatsapp-pulse">Falar com o especialista<ArrowRight size={18} /></WhatsAppLink></div></div>
    <div className="embiofert-process" data-reveal>{stages.map((stage, index) => <div key={stage}><span>{String(index + 1).padStart(2, "0")}</span><CheckCircle2 /><strong>{stage}</strong></div>)}</div>
    <div className="video-block-heading" data-reveal><p className="section-label">Demonstração técnica</p><h3>Estrutura pronta para o futuro vídeo oficial</h3></div><ProductVideoGallery items={videos} compact />
  </div></section>;
}
