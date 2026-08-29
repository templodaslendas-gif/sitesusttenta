"use client";
import { ArrowRight, ChevronDown, ImageIcon } from "lucide-react";
import { useState } from "react";
import { faqItems } from "./site-data";
import { WhatsAppIcon, WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function PedroAuthority() {
  const areas = ["Tratamento Embiofert", "Embio 3000 e Propulsor", "Ambiência em bovinos e suínos", "Instalações com biodigestor", "Controle estratégico de moscas", "Produtos Embio", "Linha Ecomax"];
  return <section id="pedro" className="pedro-section"><div className="pedro-flow" aria-hidden="true" /><div className="container pedro-layout"><div className="pedro-photo-placeholder" data-reveal role="img" aria-label="Espaço reservado para futura foto profissional de Pedro"><ImageIcon aria-hidden="true" /><span>Foto profissional em atualização</span><small>A imagem será inserida após o fornecimento do retrato oficial.</small></div><div data-reveal><p className="section-label">Atendimento Susttenta</p><h2>Atendimento técnico próximo de quem vive a realidade do campo</h2><p>Pedro é o responsável pelo atendimento da Susttenta e atua na orientação de soluções para tratamento Embiofert, ambiência em propriedades de bovinos e suínos, instalações com biodigestor e controle estratégico de moscas.</p><p>O trabalho começa pela compreensão da estrutura, do manejo e dos desafios de cada operação, permitindo direcionar a tecnologia mais adequada para cada cenário.</p><div className="pedro-areas">{areas.map((area) => <span key={area}>{area}</span>)}</div><WhatsAppLink message={whatsappMessages.pedro} ariaLabel="Falar diretamente com Pedro pelo WhatsApp" className="button button-yellow whatsapp-pulse"><WhatsAppIcon size={20} />Falar diretamente com Pedro<ArrowRight size={18} /></WhatsAppLink></div></div></section>;
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return <section id="faq" className="section faq-section"><div className="container faq-layout"><header data-reveal><p className="section-label">Perguntas frequentes</p><h2>Clareza para escolher o próximo passo</h2><p>As respostas organizam as diferenças entre as aplicações. A recomendação final depende da leitura de cada operação.</p><div className="faq-mark" aria-hidden="true">SUSTTENTA<span>diagnóstico · orientação · aplicação</span></div></header><div className="faq-list" data-reveal>{faqItems.map((item, index) => { const active = open === index; return <article key={item.question} className={active ? "is-open" : ""}><h3><button type="button" aria-expanded={active} aria-controls={`faq-panel-${index}`} id={`faq-control-${index}`} onClick={() => setOpen(active ? -1 : index)}>{item.question}<ChevronDown /></button></h3><div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-control-${index}`} aria-hidden={!active} className="faq-panel"><div><p>{item.answer}</p></div></div></article>; })}</div></div></section>;
}

export function FinalCTA() {
  return <section id="contato" className="final-cta"><div className="container" data-reveal><p className="section-label">Converse com a Susttenta</p><h2>Uma recomendação coerente começa por compreender sua operação.</h2><p>Conte o tipo de instalação, o desafio observado e o destino dos dejetos ou efluentes. A Susttenta ajuda a direcionar a solução Embio adequada.</p><WhatsAppLink message={whatsappMessages.embio} ariaLabel="Iniciar atendimento sobre soluções Embio pelo WhatsApp" className="button button-primary whatsapp-pulse"><WhatsAppIcon size={20} />Falar com um especialista<ArrowRight size={18} /></WhatsAppLink></div></section>;
}
