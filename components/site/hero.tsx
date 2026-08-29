import Image from "next/image";
import { ArrowDown, ArrowRight, BadgeCheck } from "lucide-react";
import { WhatsAppIcon, WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

const heroMedia = {
  // Substituir por vídeo horizontal oficial, poster e versão mobile quando forem fornecidos.
  videoSrc: null,
  posterSrc: null,
  fallbackImage: "/media/embio-official/embiofert.webp",
} as const;

export function Hero() {
  return <section id="inicio" className="hero embio-hero">
    <div className="hero-orbit" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-copy" data-reveal>
        <div className="partner-seal"><BadgeCheck size={18} /><span>REPRESENTANTE EMBIO</span></div>
        <p className="hero-kicker">Susttenta · orientação para o campo e a agroindústria</p>
        <h1>Tecnologia Embio com orientação especializada para o campo</h1>
        <p className="hero-summary">A Susttenta oferece atendimento consultivo para aplicação das soluções Embio em propriedades rurais, granjas, sistemas de tratamento, instalações com biodigestor e operações agroindustriais.</p>
        <p className="hero-signature">Biotecnologia aplicada para reduzir perdas, aumentar a eficiência e ampliar o potencial de resultado no campo.</p>
        <div className="hero-actions">
          <WhatsAppLink message={whatsappMessages.embio} ariaLabel="Falar com um especialista sobre as soluções Embio pelo WhatsApp" className="button button-yellow whatsapp-pulse"><WhatsAppIcon size={20} />Falar com um especialista<ArrowRight size={18} /></WhatsAppLink>
          <a className="button button-ghost" href="#embio">Conhecer as soluções Embio<ArrowDown size={18} /></a>
        </div>
      </div>
      <div className="hero-product" data-reveal>
        <div className="hero-product-halo" aria-hidden="true" />
        <Image src={heroMedia.fallbackImage} alt="Conjunto oficial do Tratamento Embiofert com Embio 3000 e Propulsor Embio" width={900} height={900} priority sizes="(max-width: 900px) 92vw, 48vw" />
        <div className="hero-product-note"><Image src="/media/embio-official/embio-logo-original.png" alt="Embio" width={110} height={42} /><span>Linha principal representada pela Susttenta</span></div>
      </div>
    </div>
  </section>;
}
