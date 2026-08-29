"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "./site-data";
import { WhatsAppIcon, WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

function BrandCard({ variant, children }: { variant: string; children: React.ReactNode }) {
  const move = (event: React.PointerEvent<HTMLElement>) => { if (event.pointerType !== "mouse") return; const rect = event.currentTarget.getBoundingClientRect(); const x = ((event.clientX - rect.left) / rect.width - .5) * 7; const y = ((event.clientY - rect.top) / rect.height - .5) * -7; event.currentTarget.style.setProperty("--rx", `${y}deg`); event.currentTarget.style.setProperty("--ry", `${x}deg`); };
  const reset = (event: React.PointerEvent<HTMLElement>) => { event.currentTarget.style.setProperty("--rx", "0deg"); event.currentTarget.style.setProperty("--ry", "0deg"); };
  return <article className={`brand-representation-card ${variant}`} onPointerMove={move} onPointerLeave={reset} data-reveal tabIndex={0}>{children}</article>;
}

export function BrandRepresentationCards() {
  return <section id="marcas" className="section brands-section"><div className="container"><header className="section-heading" data-reveal><p className="section-label">Marcas representadas</p><h2>Representação com conhecimento técnico e orientação de campo</h2><p>A Susttenta representa tecnologias Embio e TLC Agro com atendimento próximo ao produtor, análise de aplicação e direcionamento adequado para cada realidade operacional.</p></header><div className="brand-representation-grid">
    <BrandCard variant="brand-embio"><div className="brand-visual"><Image src="/media/embio-official/embiofert.webp" alt="Produtos Embio representados pela Susttenta" fill sizes="(max-width: 800px) 100vw, 42vw" /></div><Image className="represented-logo" src="/media/embio-official/embio-logo-original.png" alt="Embio" width={132} height={48} /><h3>Biotecnologia ambiental aplicada ao manejo</h3><ul><li>Tratamento Embiofert</li><li>Embio 3100</li><li>Embio 6000</li></ul><a href="#embiofert">Conhecer soluções Embio<ArrowRight size={18} /></a></BrandCard>
    <BrandCard variant="brand-tlc"><div className="brand-visual"><Image src="/media/tlc-official/images/ecomax-produtos.webp" alt="Produtos Ecomax da TLC Agro" fill sizes="(max-width: 800px) 100vw, 42vw" /></div><Image className="represented-logo" src="/media/tlc-official/images/tlc-logo-original.svg" alt="TLC Agro" width={132} height={48} /><h3>Controle estratégico de moscas no ambiente rural</h3><ul><li>Linha Ecomax</li><li>Armadilha</li><li>Atrativo orgânico</li></ul><a href="#tlc-agro">Conhecer linha Ecomax<ArrowRight size={18} /></a></BrandCard>
  </div></div></section>;
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return <section id="faq" className="section faq-section"><div className="container faq-layout"><header data-reveal><p className="section-label">Perguntas frequentes</p><h2>Clareza técnica antes de qualquer recomendação</h2><p>As respostas ajudam a diferenciar aplicações. A orientação final considera a estrutura e a rotina de cada propriedade.</p><Image src="/media/tlc-official/images/tlc-faq.webp" alt="Ambiente rural apresentado no FAQ oficial da TLC Agro" width={820} height={760} /></header><div className="faq-list" data-reveal>{faqItems.map((item, index) => { const active = open === index; return <article key={item.question} className={active ? "is-open" : ""}><h3><button type="button" aria-expanded={active} aria-controls={`faq-panel-${index}`} id={`faq-control-${index}`} onClick={() => setOpen(active ? -1 : index)}>{item.question}<ChevronDown /></button></h3><div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-control-${index}`} aria-hidden={!active} className="faq-panel"><div><p>{item.answer}</p></div></div></article>; })}</div></div></section>;
}

export function PedroAuthority() {
  return <section id="pedro" className="pedro-section"><div className="pedro-flow" aria-hidden="true" /><div className="container pedro-layout"><div className="pedro-mark" data-reveal><Image src="/favicon-master-1024.png" alt="Símbolo da Susttenta" width={320} height={320} /><span>Atendimento conduzido pela própria Susttenta</span></div><div data-reveal><p className="section-label">Atendimento próximo ao produtor</p><h2>Orientação técnica começa por compreender a realidade da operação</h2><p>A Susttenta é conduzida por Pedro com atendimento próximo ao produtor, análise cuidadosa de cada cenário e direcionamento responsável das soluções Embio e TLC Agro. Antes de recomendar um produto, o trabalho começa pela compreensão do sistema, do ambiente e dos desafios encontrados no campo.</p><p>Essa proximidade permite indicar caminhos mais coerentes com a estrutura, o manejo e o objetivo de cada propriedade.</p><WhatsAppLink message={whatsappMessages.pedro} ariaLabel="Falar diretamente com Pedro pelo WhatsApp" className="button button-yellow"><WhatsAppIcon size={20} />Falar diretamente com Pedro<ArrowRight size={18} /></WhatsAppLink></div></div></section>;
}

export function FinalCTA() {
  return <section className="final-cta"><div className="container" data-reveal><h2>Vamos compreender sua operação antes de indicar uma solução.</h2><p>Conte o cenário, o tipo de instalação e o principal desafio. A Susttenta ajuda a direcionar o próximo passo.</p><WhatsAppLink message={whatsappMessages.general} ariaLabel="Iniciar atendimento com a Susttenta pelo WhatsApp" className="button button-primary"><WhatsAppIcon size={20} />Iniciar atendimento<ArrowRight size={18} /></WhatsAppLink></div></section>;
}
