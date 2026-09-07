import Image from "next/image";
import { ArrowRight, Droplets, ShieldAlert, Wind } from "lucide-react";
import { ProductVideoGallery } from "./product-video-gallery";
import { productVideos, type ProductVideo } from "./site-data";
import { WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function EmbioSolutionsSection({ onOpen }: { onOpen: (item: ProductVideo) => void }) {
  const videos3100 = productVideos.filter((item) => item.product === "embio-3100");
  const videos6000 = productVideos.filter((item) => item.product === "embio-6000");

  return <section className="section embio-solutions"><div className="container">
    <header className="section-heading" data-reveal>
      <p className="section-label">Linha Embio</p>
      <h2>Soluções Embio para diferentes destinos dos dejetos</h2>
      <p>O Embio 3100 e o Embio 6000 atendem cenários distintos. A escolha depende de para onde o dejeto segue e de como a instalação é manejada — por isso a recomendação final sempre passa por avaliação técnica.</p>
    </header>

    <div className="embio-solutions-grid">
      <article id="embio-3100" className="embio-solution-card embio-solution-3100" data-reveal>
        <div className="embio-solution-media"><Image src="/media/embio-official/embio-3100.webp" alt="Embalagem oficial do Embio 3100" width={950} height={950} sizes="(max-width: 900px) 92vw, 46vw" /></div>
        <div className="embio-solution-body">
          <p className="section-label">Instalações de suínos</p>
          <h3>Embio 3100</h3>
          <p className="lead">Aplicação em instalações de suínos, orientada para apoiar a ambiência e o manejo dentro do barracão.</p>
          <ul className="technical-list">
            <li><Wind />Apoio à ambiência interna, com auxílio no controle de gases e odores.</li>
            <li><Droplets />Apoio no manejo do cascão e na rotina de limpeza.</li>
            <li><ShieldAlert />Atuação sobre condições relacionadas a larvas e moscas.</li>
          </ul>
          <div className="embio-solution-videos"><ProductVideoGallery items={videos3100} onOpen={onOpen} compact /></div>
          <aside className="biodigester-warning"><strong>Atenção ao destino dos dejetos.</strong> O Embio 3100 não é a principal indicação quando o dejeto segue diretamente para o biodigestor. Nesse caso, a avaliação deve considerar o Embio 6000.</aside>
          <WhatsAppLink message={whatsappMessages.embio3100} ariaLabel="Consultar aplicação do Embio 3100 pelo WhatsApp" className="button button-primary whatsapp-pulse">Consultar o Embio 3100<ArrowRight size={18} /></WhatsAppLink>
        </div>
      </article>

      <article id="embio-6000" className="embio-solution-card embio-solution-6000" data-reveal>
        <div className="embio-solution-media"><Image src="/media/embio-official/embio-6000.webp" alt="Embalagem oficial do Embio 6000" width={950} height={1900} sizes="(max-width: 900px) 92vw, 46vw" /></div>
        <div className="embio-solution-body">
          <p className="section-label">Instalações ligadas ao biodigestor</p>
          <h3>Embio 6000</h3>
          <p className="lead">Aplicação em instalações que enviam os dejetos ao biodigestor e precisam trabalhar o manejo da ambiência sem antecipar a degradação da matéria orgânica destinada ao biogás.</p>
          <ul className="technical-list">
            <li><Wind />Manejo da ambiência, com auxílio no controle de gases e odores.</li>
            <li><ShieldAlert />Atuação sobre condições relacionadas a larvas e moscas.</li>
            <li><Droplets />Preservação da matéria orgânica destinada ao biogás, considerando a destinação posterior dos dejetos ao processo anaeróbio.</li>
          </ul>
          <div className="embio-solution-videos"><ProductVideoGallery items={videos6000} onOpen={onOpen} compact /></div>
          <aside className="biodigester-warning"><strong>Avaliação obrigatória.</strong> O produto não representa garantia de aumento da produção de biogás. Estrutura, fluxo e rotina operacional precisam ser compreendidos antes da aplicação.</aside>
          <WhatsAppLink message={whatsappMessages.embio6000} ariaLabel="Consultar aplicação do Embio 6000 pelo WhatsApp" className="button button-yellow whatsapp-pulse">Consultar o Embio 6000<ArrowRight size={18} /></WhatsAppLink>
        </div>
      </article>
    </div>
  </div></section>;
}
