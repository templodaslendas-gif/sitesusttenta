import Image from "next/image";
import { ArrowDown, ArrowRight, LogIn, Magnet, Play, ShieldCheck } from "lucide-react";
import { mediaItems } from "./site-data";
import type { MediaItem } from "./video-modal";
import { WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function TlcEcomaxSection({ onOpen }: { onOpen: (item: MediaItem) => void }) {
  const demo = mediaItems[0];
  return <section id="tlc-agro" className="tlc-section"><div className="container tlc-intro"><div data-reveal><p className="section-label">TLC Agro e linha Ecomax</p><h2>Atração, entrada e retenção em uma estratégia de manejo</h2><p>O Ecomax combina atrativo orgânico e armadilha para capturar moscas em pontos externos ou bem ventilados. O desempenho depende de montagem, posicionamento, monitoramento e manutenção adequados; a solução não substitui higiene e manejo ambiental.</p><div className="use-list">{["Granjas", "Currais", "Estábulos", "Haras", "Confinamentos", "Áreas externas"].map((place) => <span key={place}>{place}</span>)}</div><WhatsAppLink message={whatsappMessages.ecomax} ariaLabel="Solicitar orientação sobre a linha Ecomax pelo WhatsApp" className="button button-dark">Receber orientação sobre Ecomax<ArrowRight size={18} /></WhatsAppLink></div>
    <div className="tlc-product-stage" data-reveal><div className="tlc-bottle"><Image src="/media/tlc-official/images/ecomax-produtos.webp" alt="Embalagem oficial do atrativo Ecomax" width={620} height={494} /></div><div className="tlc-trap"><Image src="/media/tlc-official/images/ecomax-armadilha-oficial.webp" alt="Armadilha Ecomax em demonstração oficial da TLC Agro" fill sizes="(max-width: 900px) 62vw, 24vw" /></div><span>Produto e demonstração publicados no domínio oficial da TLC Agro</span></div></div>
    <div className="container capture-story" data-reveal><div><Magnet /><span>1</span><h3>Atração</h3><p>O atrativo preparado atua como ponto de interesse para as moscas no ambiente monitorado.</p></div><ArrowDown className="story-arrow" /><div><LogIn /><span>2</span><h3>Entrada</h3><p>A geometria da armadilha permite a entrada das moscas atraídas pelo conjunto.</p></div><ArrowDown className="story-arrow" /><div><ShieldCheck /><span>3</span><h3>Retenção</h3><p>As moscas permanecem no reservatório, que precisa ser acompanhado e manejado conforme a condição de uso.</p></div></div>
    <div className="container tlc-video-feature" data-reveal><button type="button" data-video-trigger={demo.id} onClick={() => onOpen(demo)} aria-label="Reproduzir demonstração oficial de funcionamento do Ecomax"><Image src={demo.poster} alt="Demonstração oficial do Ecomax" fill sizes="(max-width: 900px) 100vw, 52vw" /><span className="play-button"><Play fill="currentColor" /></span></button><div><span>{demo.eyebrow}</span><h3>{demo.title}</h3><p>{demo.description}</p><button type="button" onClick={() => onOpen(demo)}>Assistir demonstração <ArrowRight size={17} /></button></div></div>
  </section>;
}
