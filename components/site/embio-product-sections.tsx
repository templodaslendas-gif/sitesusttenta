import Image from "next/image";
import { ArrowRight, Droplets, ShieldAlert, Wind } from "lucide-react";
import { ProductVideoGallery } from "./product-video-gallery";
import { productVideos, type ProductVideo } from "./site-data";
import { WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function Embio3100Section({ onOpen }: { onOpen: (item: ProductVideo) => void }) {
  const videos = productVideos.filter((item) => item.product === "embio-3100");
  return <section id="embio-3100" className="section embio-product-section embio-3100-section"><div className="container">
    <div className="product-opening" data-reveal><p className="section-label">Instalações de suínos</p><h2>Embio 3100</h2><p>Ambiência percebida por quem vive a rotina do barracão.</p></div>
    <ProductVideoGallery items={videos} onOpen={onOpen} compact />
    <div className="product-feature product-feature-after-video"><div className="product-stage product-stage-bottle" data-reveal><Image src="/media/embio-official/embio-3100.webp" alt="Embalagem oficial do Embio 3100" width={950} height={950} sizes="(max-width: 850px) 92vw, 42vw" /></div><div data-reveal><p className="section-label">O que ele faz</p><h3>Mais controle sobre a ambiência interna</h3><p className="lead">Aplicação orientada para apoiar a ambiência e o manejo dentro das instalações.</p><ul className="technical-list"><li><Wind />Auxílio no controle de gases e odores.</li><li><Droplets />Apoio no manejo do cascão e na rotina de limpeza.</li><li><ShieldAlert />Atuação sobre condições relacionadas a larvas e moscas.</li></ul><aside className="biodigester-warning"><strong>Atenção ao destino dos dejetos.</strong> O Embio 3100 não é a principal indicação quando o dejeto segue diretamente para biodigestor. Nesse caso, a avaliação deve considerar o Embio 6000.</aside><WhatsAppLink message={whatsappMessages.embio3100} ariaLabel="Consultar aplicação do Embio 3100 pelo WhatsApp" className="button button-primary whatsapp-pulse">Consultar o Embio 3100<ArrowRight size={18} /></WhatsAppLink></div></div>
    <div className="product-evidence" data-reveal><Image src="/media/embio-2026/images/embio-3100-comparativo-ambiencia.webp" alt="Registro comparativo de medições de amônia e dióxido de carbono apresentado para o Embio 3100" width={1200} height={480} sizes="(max-width: 850px) 92vw, 760px" /><p>Registro comparativo fornecido pela Embio. A resposta varia conforme instalação, manejo e condições de medição.</p></div>
  </div></section>;
}

export function Embio6000Section({ onOpen }: { onOpen: (item: ProductVideo) => void }) {
  const videos = productVideos.filter((item) => item.product === "embio-6000");
  return <section id="embio-6000" className="section embio-product-section embio-6000-section"><div className="container">
    <div className="product-opening" data-reveal><p className="section-label">Biodigestor e ambiência</p><h2>Embio 6000</h2><p>Primeiro, veja experiências de campo em operações conectadas à biodigestão.</p></div>
    <ProductVideoGallery items={videos} onOpen={onOpen} />
    <div className="product-feature product-feature-after-video"><div className="product-stage product-stage-6000" data-reveal><Image src="/media/embio-official/embio-6000.webp" alt="Embalagem oficial do Embio 6000" width={950} height={1900} sizes="(max-width: 850px) 92vw, 38vw" /></div><div data-reveal><p className="section-label">O que ele faz</p><h3>Ambiência sem perder de vista o biodigestor</h3><p className="lead">Indicado para instalações que enviam os dejetos ao biodigestor e precisam trabalhar a ambiência sem antecipar a degradação da matéria orgânica destinada ao biogás.</p><p>Pode auxiliar no manejo de gases, odores e condições relacionadas a larvas e moscas. Sua indicação é diferente da do Embio 3100 porque considera a destinação posterior dos dejetos ao processo anaeróbio.</p><aside><strong>Avaliação obrigatória.</strong> O produto não representa garantia de aumento de biogás. Estrutura, fluxo e rotina operacional precisam ser compreendidos antes da aplicação.</aside><WhatsAppLink message={whatsappMessages.embio6000} ariaLabel="Consultar aplicação do Embio 6000 pelo WhatsApp" className="button button-yellow whatsapp-pulse">Consultar o Embio 6000<ArrowRight size={18} /></WhatsAppLink></div></div>
    <div className="product-presentation-wide" data-reveal><Image src="/media/embio-2026/images/embio-6000-biodigestao.webp" alt="Apresentação oficial do Embio 6000 para sistemas ligados à biodigestão" width={1600} height={900} sizes="100vw" /></div>
  </div></section>;
}
