"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronRight, Factory, Headphones, Leaf, Menu, MessageCircle, Play, ShieldCheck, Sparkles, Sprout, Waves, X } from "lucide-react";
import { CookieConsent } from "@/components/cookie-consent";

const navigation = [["Início", "#inicio"], ["Embiofert", "#embiofert"], ["Soluções", "#solucoes"], ["Produtos", "#produtos"], ["Atendimento", "#contato"]];
const trustItems = [
  { icon: Leaf, title: "Linha Embio", text: "Soluções para diferentes necessidades" },
  { icon: Headphones, title: "Orientação técnica", text: "Análise de cada cenário" },
  { icon: MessageCircle, title: "Atendimento direto", text: "Contato simples e consultivo" },
  { icon: Factory, title: "Campo e indústria", text: "Granjas, lagoas e efluentes" },
];
const products = [
  { tag: "MANEJO EM GRANJAS", title: "Embio 3100", subtitle: "Tratamento biológico para o ambiente das instalações.", description: "Auxilia no equilíbrio microbiológico do ambiente, no manejo de odores e na rotina sanitária de instalações de produção animal.", image: "/media/embio3100.jpg", benefits: ["Apoio ao manejo de odores", "Rotina de limpeza", "Ambiente produtivo", "Aplicação orientada"] },
  { tag: "GRANJAS COM BIODIGESTOR", title: "Embio 6000", subtitle: "Manejo de gases e odores sem comprometer o processo.", description: "Solução direcionada a propriedades que utilizam biodigestores e precisam conciliar o cuidado com as instalações e a eficiência do sistema.", image: "/media/embio6000.jpg", benefits: ["Aplicação em granjas", "Manejo de gases", "Apoio sanitário", "Uso acompanhado"] },
  { tag: "EFLUENTES INDUSTRIAIS", title: "Embio 8000", subtitle: "Tratamento biológico para sistemas com maior carga orgânica.", description: "Indicado para análises envolvendo lagoas e efluentes de operações como laticínios e frigoríficos, sempre conforme avaliação técnica.", image: "/media/embio8000.jpg", benefits: ["Lagoas industriais", "Carga orgânica", "Tratamento biológico", "Diagnóstico técnico"] },
];

function ContactLink({ children, className = "", ariaLabel }: { children: React.ReactNode; className?: string; ariaLabel?: string }) {
  return <a href="#contato" className={className} aria-label={ariaLabel}>{children}</a>;
}

export function SiteClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12, rootMargin: "0px 0px -8%" });
    elements.forEach((element) => observer.observe(element));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return <>
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <a className="brand" href="#inicio" aria-label="Susttenta — início"><Image unoptimized className="brand__symbol" src="/favicon-master-1024.png" alt="" width={56} height={56} priority /><Image unoptimized className="brand__wordmark" src="/logo-susttenta-wordmark.png" alt="Susttenta" width={150} height={22} priority /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <ContactLink className="header-cta"><MessageCircle size={17} /> Falar com especialista</ContactLink>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel">{navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
    </header>

    <main>
      <section id="inicio" className="hero">
        <video className="hero__video hero__video--desktop" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/media/hero-desktop.mp4" type="video/mp4" /></video>
        <video className="hero__video hero__video--mobile" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/media/hero-mobile.mp4" type="video/mp4" /></video>
        <div className="hero__overlay" />
        <div className="hero__content">
          <div className="eyebrow hero__eyebrow"><span /> Soluções com tecnologia Embio</div>
          <h1>Tratamento de dejetos,<br />granjas e lagoas <small>com tecnologia <em>Embio</em></small></h1>
          <p className="hero__lead">Soluções para transformar o manejo de dejetos em um processo mais eficiente, estável e orientado tecnicamente.</p>
          <p className="hero__support">Atendimento para propriedades rurais, granjas, biodigestores, lagoas e operações agroindustriais.</p>
          <ContactLink className="primary-button"><MessageCircle size={20} /> Fale com um especialista <ArrowRight size={18} /></ContactLink>
        </div>
        <div className="hero__scroll"><span /> Role para conhecer</div>
      </section>

      <section className="trust-strip" aria-label="Diferenciais de atendimento"><div className="container trust-grid">
        {trustItems.map(({ icon: Icon, title, text }) => <article key={title} className="trust-item"><span className="trust-icon"><Icon size={21} /></span><div><strong>{title}</strong><span>{text}</span></div></article>)}
      </div></section>

      <section id="embiofert" className="section embiofert-section"><div className="orb orb--green" /><div className="container">
        <header className="section-heading section-heading--center" data-reveal><span className="pill"><Sparkles size={14} /> Tratamento integrado</span><h2>De dejeto a recurso para a propriedade</h2><p>Embio 3000 e Propulsor Embio em uma solução voltada ao equilíbrio, à aeração e ao manejo das lagoas.</p></header>
        <div className="feature-layout">
          <div className="image-frame image-frame--wide" data-reveal><Image unoptimized src="/media/embiofert-banner.png" alt="Apresentação do tratamento Embiofert" width={1774} height={887} sizes="(max-width: 900px) 100vw, 58vw" /><span className="temporary-media">Mídia temporária</span></div>
          <div className="feature-copy" data-reveal><div className="eyebrow"><span /> Tratamento Embiofert</div><h3>Uma abordagem completa para o manejo de dejetos</h3><p>O tratamento combina produtos e orientação técnica para apoiar a compostagem líquida, a homogeneização e o controle do ambiente das lagoas.</p>
            <div className="benefit-grid">{["Apoio à aeração", "Manejo de odores", "Homogeneização", "Menor sedimentação", "Aplicação orientada", "Uso no campo"].map((item) => <span key={item}><Check size={14} /> {item}</span>)}</div>
            <ContactLink className="text-button">Entender a solução <ArrowRight size={17} /></ContactLink>
          </div>
        </div>
      </div></section>

      <section id="solucoes" className="section field-section"><div className="container">
        <header className="section-heading" data-reveal><div className="eyebrow"><span /> Aplicação no campo</div><h2>Tratamento que acompanha a realidade de cada operação</h2><p>O ponto de partida é compreender o sistema existente, a origem dos dejetos e o resultado esperado.</p></header>
        <div className="media-carousel" data-reveal>
          <article className="media-card"><video controls preload="none" poster="/media/campo-01.jpg"><source src="/media/campo-01.mp4" type="video/mp4" /></video><div className="media-card__copy"><span>TRATAMENTO EM LAGOA</span><h3>Aplicação e acompanhamento em campo</h3><p>Registro temporário para demonstrar o espaço reservado aos novos vídeos.</p></div></article>
          <article className="media-card"><div className="poster-card"><Image unoptimized src="/media/campo-02.jpg" alt="Vista aérea de lagoa em tratamento" fill sizes="(max-width: 760px) 86vw, 420px" /><span className="play-button"><Play size={23} fill="currentColor" /></span></div><div className="media-card__copy"><span>RESULTADO VISUAL</span><h3>Acompanhamento do processo</h3><p>Área preparada para receber as fotos e os registros definitivos da Susttenta.</p></div></article>
          <article className="media-card"><video controls preload="none" poster="/media/depoimento-01.jpg"><source src="/media/depoimento-01.mp4" type="video/mp4" /></video><div className="media-card__copy"><span>DEPOIMENTO</span><h3>Experiência de quem aplica</h3><p>Vídeo temporário que será substituído pelo depoimento aprovado do cliente.</p></div></article>
        </div><p className="drag-hint"><ChevronRight size={16} /> Arraste para o lado para ver mais</p>
      </div></section>

      <section id="produtos" className="section products-section"><div className="container">
        <header className="section-heading section-heading--center" data-reveal><div className="eyebrow"><span /> Linha de soluções</div><h2>Produtos Embio para diferentes cenários</h2><p>A indicação correta depende das condições da propriedade e deve ser acompanhada por orientação técnica.</p></header>
        <div className="products-list">{products.map((product, index) => <article className={`product-block ${index % 2 ? "product-block--reverse" : ""}`} key={product.title} data-reveal>
          <div className="product-image"><Image unoptimized src={product.image} alt={`Apresentação do ${product.title}`} width={1536} height={1024} sizes="(max-width: 900px) 100vw, 48vw" /><span className="temporary-media">Mídia temporária</span></div>
          <div className="product-copy"><span className="product-tag">{product.tag}</span><h3>{product.title}</h3><strong>{product.subtitle}</strong><p>{product.description}</p><div className="product-benefits">{product.benefits.map((benefit) => <span key={benefit}><Check size={14} /> {benefit}</span>)}</div><ContactLink className="text-button">Falar sobre {product.title} <ArrowRight size={17} /></ContactLink></div>
        </article>)}</div>
      </div></section>

      <section className="dark-cta"><div className="dark-cta__grid" /><div className="container dark-cta__content" data-reveal><span className="eyebrow eyebrow--light"><span /> Análise antes da indicação</span><h2>O produto certo começa com um bom diagnóstico</h2><p>Converse com a Susttenta para avaliar as características da sua operação e definir o caminho mais adequado.</p><ContactLink className="primary-button"><MessageCircle size={20} /> Solicitar atendimento <ArrowRight size={18} /></ContactLink></div></section>

      <section id="contato" className="section consultant-section"><div className="container consultant-grid">
        <div className="consultant-image" data-reveal><Image unoptimized src="/media/consultor-temporario.jpg" alt="Atendimento técnico em propriedade rural — imagem temporária" fill sizes="(max-width: 900px) 100vw, 48vw" /><span className="temporary-media">Foto a substituir</span></div>
        <div className="consultant-copy" data-reveal><div className="eyebrow"><span /> Atendimento Susttenta</div><h2>Orientação técnica para transformar manejo em resultado</h2><p className="consultant-lead">Cada propriedade possui condições diferentes. Por isso, a recomendação começa pela análise do cenário, e não por uma indicação genérica.</p><div className="consultant-points"><span><ShieldCheck size={20} /> Entendimento da necessidade</span><span><Waves size={20} /> Avaliação do sistema existente</span><span><Sprout size={20} /> Orientação de aplicação</span></div><div className="contact-placeholder"><strong>Atendimento comercial e técnico</strong><p>Converse com nossa equipe para avaliar a necessidade da sua operação.</p></div></div>
      </div></section>
    </main>

    <footer className="site-footer"><div className="footer-accent" /><div className="container footer-grid"><div className="footer-brand"><div className="footer-brand__lockup"><Image unoptimized src="/favicon-master-1024.png" alt="" width={64} height={64} /><Image unoptimized src="/logo-susttenta-wordmark.png" alt="Susttenta" width={180} height={26} /></div><p>Soluções para tratamento de dejetos, granjas, lagoas e operações agroindustriais com tecnologia Embio.</p></div><div><strong>Navegação</strong>{navigation.slice(1).map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><div><strong>Legal</strong><Link href="/privacidade">Privacidade e LGPD</Link><Link href="/cookies">Política de Cookies</Link><Link href="/termos">Termos de Uso</Link><button onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>Gerenciar cookies</button></div></div><div className="container footer-bottom"><span>© 2026 Susttenta. Todos os direitos reservados.</span><a href="https://novositeffrdobrasil.vercel.app/" target="_blank" rel="noreferrer">Produzido por FFR Technology</a></div></footer>
    <ContactLink className="floating-contact" ariaLabel="Ir para o atendimento"><MessageCircle size={29} /></ContactLink>
    <CookieConsent />
  </>;
}
