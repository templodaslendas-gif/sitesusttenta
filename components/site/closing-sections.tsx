"use client";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "./site-data";
import { WhatsAppIcon, WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function PedroAuthority() {
  const areas = ["Manejo de dejetos suínos e bovinos", "Controle integrado de moscas", "Controle de roedores", "Ambiência em granjas de suínos", "Bovinos, equinos e caprinos"];
  return <section id="pedro" className="pedro-section"><div className="pedro-flow" aria-hidden="true" /><div className="container pedro-layout"><figure className="pedro-portrait" data-reveal><Image src="/media/embio-2026/images/pedro-luis-schmidt.webp" alt="Pedro Luís Schmidt, responsável pelo atendimento técnico da Susttenta" fill sizes="(max-width: 760px) 88vw, 34vw" /><figcaption><span>Pedro Luís Schmidt</span><small>Atendimento técnico Susttenta</small></figcaption></figure><div data-reveal><p className="section-label">Experiência que orienta a recomendação</p><h2>28 anos ao lado de quem produz</h2><p>Pedro Luís Schmidt reúne 28 anos de experiência em assistência técnica na suinocultura, com atuação prática em manejo de dejetos suínos e bovinos, controle integrado de moscas e roedores e avaliação de sistemas de ambiência em granjas.</p><p>Essa vivência também abrange desafios sanitários e operacionais em propriedades com bovinos, equinos e caprinos. Na Susttenta, o conhecimento de campo vem antes da indicação: cada recomendação começa pela leitura da estrutura, do manejo e do objetivo da operação.</p><div className="pedro-areas">{areas.map((area) => <span key={area}>{area}</span>)}</div><WhatsAppLink message={whatsappMessages.pedro} ariaLabel="Falar diretamente com Pedro pelo WhatsApp" className="button button-yellow whatsapp-pulse"><WhatsAppIcon size={20} />Falar diretamente com Pedro<ArrowRight size={18} /></WhatsAppLink></div></div></section>;
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return <section id="faq" className="section faq-section"><div className="container faq-layout"><header data-reveal><p className="section-label">Perguntas frequentes</p><h2>Clareza para escolher o próximo passo</h2><p>As respostas organizam as diferenças entre as aplicações. A recomendação final depende da leitura de cada operação.</p><div className="faq-mark" aria-hidden="true">SUSTTENTA<span>diagnóstico · orientação · aplicação</span></div></header><div className="faq-list" data-reveal>{faqItems.map((item, index) => { const active = open === index; return <article key={item.question} className={active ? "is-open" : ""}><h3><button type="button" aria-expanded={active} aria-controls={`faq-panel-${index}`} id={`faq-control-${index}`} onClick={() => setOpen(active ? -1 : index)}>{item.question}<ChevronDown /></button></h3><div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-control-${index}`} aria-hidden={!active} className="faq-panel"><div><p>{item.answer}</p></div></div></article>; })}</div></div></section>;
}

export function FinalCTA() {
  return <section id="contato" className="final-cta"><div className="container" data-reveal><p className="section-label">Converse com a Susttenta</p><h2>Uma recomendação coerente começa por compreender sua operação.</h2><p>Conte o tipo de instalação, o desafio observado e o destino dos dejetos ou efluentes. A Susttenta ajuda a direcionar a solução Embio adequada.</p><WhatsAppLink message={whatsappMessages.embio} ariaLabel="Iniciar atendimento sobre soluções Embio pelo WhatsApp" className="button button-primary whatsapp-pulse"><WhatsAppIcon size={20} />Falar com um especialista<ArrowRight size={18} /></WhatsAppLink></div></section>;
}
