"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight, Gauge, MessageCircle, Target, Waves, Wind } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { solutionSlides } from "./site-data";

const icons = { waves: Waves, wind: Wind, gauge: Gauge, target: Target, message: MessageCircle };

export function SolutionsCarousel() {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const sync = useCallback(() => embla && setSelected(embla.selectedScrollSnap()), [embla]);

  useEffect(() => { if (!embla) return; embla.on("select", sync); return () => { embla.off("select", sync); }; }, [embla, sync]);
  useEffect(() => {
    if (!embla || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => { if (!document.hidden) embla.scrollNext(); }, 7000);
    return () => window.clearInterval(timer);
  }, [embla, paused]);

  return <section id="susttenta" className="section solutions-section">
    <div className="container section-intro" data-reveal><div><p className="section-label">O que fazemos e onde atuamos</p><h2>Tecnologia direcionada à realidade de cada operação</h2></div><p>A Susttenta avalia as necessidades de cada operação e direciona tecnologias Embio e TLC Agro de acordo com o ambiente, o sistema de manejo e o objetivo do produtor. Nosso atendimento une orientação técnica, aplicação responsável e acompanhamento para tornar cada solução mais eficiente no campo.</p></div>
    <div className="carousel-shell" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false); }}>
      <div className="carousel-viewport" ref={viewportRef}><div className="carousel-track">{solutionSlides.map((slide, index) => { const Icon = icons[slide.icon]; return <article className={`solution-slide ${index === selected ? "is-active" : ""}`} key={slide.id} aria-label={`${index + 1} de ${solutionSlides.length}`}>
        <div className="solution-slide-media"><Image src={slide.image} alt="" fill sizes="(max-width: 720px) 86vw, 38vw" /></div>
        <div className="solution-slide-copy"><Icon size={24} /><h3>{slide.title}</h3><p>{slide.description}</p><a href={slide.href}>Ver solução<ArrowRight size={17} /></a></div>
      </article>; })}</div></div>
      <div className="carousel-controls"><button type="button" onClick={() => embla?.scrollPrev()} aria-label="Slide anterior"><ChevronLeft /></button><div className="carousel-progress" aria-label={`Slide ${selected + 1} de ${solutionSlides.length}`}>{solutionSlides.map((slide, index) => <button key={slide.id} type="button" className={index === selected ? "is-active" : ""} onClick={() => embla?.scrollTo(index)} aria-label={`Ir para o slide ${index + 1}`}><span /></button>)}</div><button type="button" onClick={() => embla?.scrollNext()} aria-label="Próximo slide"><ChevronRight /></button></div>
    </div>
    <div className="container brand-solution-links">
      <a href="#embiofert" data-reveal><div><Image src="/media/embio-official/embiofert.webp" alt="Embio 3000 e Propulsor Embio" fill sizes="(max-width: 720px) 100vw, 38vw" /></div><span>EMBIO</span><h3>Tratamento biológico e ambiência</h3><p>Embiofert, Embio 3100 e Embio 6000 para cenários técnicos distintos.</p><b>Conhecer linha Embio <ArrowRight size={17} /></b></a>
      <a href="#tlc-agro" data-reveal><div><Image src="/media/tlc-official/images/ecomax-produtos.webp" alt="Atrativo e produtos Ecomax" fill sizes="(max-width: 720px) 100vw, 38vw" /></div><span>TLC AGRO</span><h3>Controle estratégico de moscas</h3><p>Atrativo e armadilha trabalhando em conjunto com posicionamento adequado.</p><b>Conhecer linha Ecomax <ArrowRight size={17} /></b></a>
    </div>
  </section>;
}
