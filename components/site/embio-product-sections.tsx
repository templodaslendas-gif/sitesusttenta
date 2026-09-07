import Image from "next/image";
import { ArrowRight, Droplets, ShieldAlert, Wind } from "lucide-react";
import { ProductVideoGallery } from "./product-video-gallery";
import { productVideos } from "./site-data";
import { WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function Embio3100Section() {
  const videos = productVideos.filter((item) => item.product === "embio-3100");
  return <section id="embio-3100" className="section embio-product embio-product-3100"><div className="container">
    <div className="embio-product-layout" data-reveal>
      <div className="embio-product-copy">
        <p className="section-label">Instalações de suínos</p>
        <h2>Embio 3100</h2>
        <p className="lead">Aplicação em instalações de suínos, orientada para apoiar a ambiência e o manejo dentro do barracão.</p>
        <ul className="technical-list">
          <li><Wind />Apoio à ambiência interna, com auxílio no controle de gases e odores.</li>
          <li><Droplets />Apoio no manejo do cascão e na rotina de limpeza.</li>
          <li><ShieldAlert />Atuação sobre condições relacionadas a larvas e moscas.</li>
        </ul>
      </div>
      <div className="embio-product-media">
        <div className="embio-product-stage">
          <Image src="/media/embio-official/embio-3100-frasco.webp" alt="Frasco oficial do Embio 3100, linha suínos, 450g" width={334} height={792} sizes="(max-width: 900px) 66vw, 34vw" />
        </div>
      </div>
      <aside className="biodigester-warning embio-product-warning"><strong>Atenção ao destino dos dejetos.</strong> O Embio 3100 não é a principal indicação quando o dejeto segue diretamente para o biodigestor. Nesse caso, a avaliação deve considerar o Embio 6000.</aside>
    </div>
    <div className="embio-product-report" data-reveal>
      <p className="section-label">Relato de campo</p>
      <ProductVideoGallery items={videos} variant="stack" />
    </div>
    <div className="embio-product-cta" data-reveal>
      <WhatsAppLink message={whatsappMessages.embio3100} ariaLabel="Consultar aplicação do Embio 3100 pelo WhatsApp" className="button button-primary whatsapp-pulse">Consultar o Embio 3100<ArrowRight size={18} /></WhatsAppLink>
    </div>
  </div></section>;
}

export function Embio6000Section() {
  const videos = productVideos.filter((item) => item.product === "embio-6000");
  return <section id="embio-6000" className="section embio-product embio-product-6000"><div className="container">
    <div className="embio-product-layout is-reversed" data-reveal>
      <div className="embio-product-copy">
        <p className="section-label">Instalações ligadas ao biodigestor</p>
        <h2>Embio 6000</h2>
        <p className="lead">Aplicação em instalações que enviam os dejetos ao biodigestor e precisam trabalhar o manejo da ambiência sem antecipar a degradação da matéria orgânica destinada ao biogás.</p>
        <ul className="technical-list">
          <li><Wind />Manejo da ambiência, com auxílio no controle de gases e odores.</li>
          <li><ShieldAlert />Atuação sobre condições relacionadas a larvas e moscas.</li>
          <li><Droplets />Preservação da matéria orgânica destinada ao biogás, considerando a destinação posterior dos dejetos ao processo anaeróbio.</li>
        </ul>
      </div>
      <div className="embio-product-media">
        <div className="embio-product-stage">
          <Image src="/media/embio-official/embio-6000-frasco.webp" alt="Frasco oficial do Embio 6000, linha suínos, 450g, produto em pó" width={612} height={1376} sizes="(max-width: 900px) 66vw, 34vw" />
        </div>
      </div>
      <aside className="biodigester-warning embio-product-warning"><strong>Avaliação obrigatória.</strong> O produto não representa garantia de aumento da produção de biogás. Estrutura, fluxo e rotina operacional precisam ser compreendidos antes da aplicação.</aside>
    </div>
    <div className="embio-product-report" data-reveal>
      <p className="section-label">Relatos de campo</p>
      <ProductVideoGallery items={videos} variant="duo" />
    </div>
    <div className="embio-product-cta" data-reveal>
      <WhatsAppLink message={whatsappMessages.embio6000} ariaLabel="Consultar aplicação do Embio 6000 pelo WhatsApp" className="button button-yellow whatsapp-pulse">Consultar o Embio 6000<ArrowRight size={18} /></WhatsAppLink>
    </div>
  </div></section>;
}
