import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { WhatsAppIcon, WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function Hero() {
  return <section id="inicio" className="hero">
    <div className="hero-flow" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-copy" data-reveal>
        <div className="partner-seal"><BadgeCheck size={18} />PARCEIRO AUTORIZADO EMBIO E TLC AGRO</div>
        <h1>Soluções biotecnológicas para uma produção mais eficiente</h1>
        <p className="hero-signature">Biotecnologia aplicada para reduzir perdas, aumentar a eficiência e ampliar o potencial de resultado no campo.</p>
        <p className="hero-support">A Susttenta conecta produtores a tecnologias Embio e TLC Agro para tratamento biológico, ambiência, manejo de dejetos e controle eficiente de moscas.</p>
        <div className="hero-actions"><WhatsAppLink message={whatsappMessages.general} ariaLabel="Conhecer as soluções da Susttenta pelo WhatsApp" className="button button-primary"><WhatsAppIcon size={20} />Conversar com a Susttenta<ArrowRight size={18} /></WhatsAppLink><a href="#susttenta" className="button button-secondary">Conhecer as soluções</a></div>
      </div>
      <div className="hero-products" data-reveal aria-label="Produtos reais das linhas Embio e TLC Agro">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-product hero-product-embio"><Image src="/media/embio-official/embiofert.webp" alt="Embio 3000 e Propulsor Embio" width={760} height={760} priority sizes="(max-width: 900px) 84vw, 44vw" /></div>
        <div className="hero-product hero-product-ecomax"><Image src="/media/tlc-official/images/ecomax-produtos.webp" alt="Atrativo Ecomax da TLC Agro" width={620} height={494} priority sizes="(max-width: 900px) 42vw, 20vw" /></div>
        <div className="hero-trap"><Image src="/media/tlc-official/images/ecomax-armadilha-oficial.webp" alt="Armadilha Ecomax em demonstração oficial" fill priority sizes="(max-width: 900px) 38vw, 16vw" /></div>
        <span className="hero-proof"><i />Produtos oficiais das marcas representadas</span>
      </div>
    </div>
  </section>;
}
