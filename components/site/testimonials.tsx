import Image from "next/image";
import { Play } from "lucide-react";
import { mediaItems } from "./site-data";
import type { MediaItem } from "./video-modal";

export function Testimonials({ onOpen }: { onOpen: (item: MediaItem) => void }) {
  const reports = mediaItems.slice(1);
  return <section id="depoimentos" className="section testimonials-section"><div className="container"><header className="section-heading" data-reveal><p className="section-label">Experiências e demonstrações verificáveis</p><h2>Veja o que dizem sobre a Susttenta e as soluções que representamos</h2><p>Experiências de produtores, parceiros e aplicações reais ajudam a mostrar como o atendimento técnico e a escolha correta da solução fazem diferença na operação.</p></header><div className="testimonial-categories"><span>Depoimentos sobre a Susttenta</span><span>Relatos sobre produtos Embio</span><span className="is-active">Relatos sobre TLC Agro e Ecomax</span><span>Demonstrações técnicas</span></div><div className="testimonial-grid">{reports.map((item) => <article key={item.id} data-reveal><button type="button" data-video-trigger={item.id} onClick={() => onOpen(item)} aria-label={`Reproduzir ${item.title}`}><Image src={item.poster} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" /><span className="play-button"><Play fill="currentColor" /></span></button><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}<article className="future-testimonial" data-reveal><div><span>SUSTTENTA</span></div><h3>Espaço preparado para futuros depoimentos próprios da Susttenta</h3><p>Este bloco será substituído apenas quando houver autorização, identificação e contexto verificáveis. Nenhuma fala provisória é apresentada como depoimento.</p></article></div></div></section>;
}
