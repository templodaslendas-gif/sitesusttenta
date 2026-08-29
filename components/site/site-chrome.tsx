"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CookieConsent } from "@/components/cookie-consent";
import { navigationItems } from "./site-data";
import { createWhatsAppUrl, whatsappMessages } from "./whatsapp";

export function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return <svg aria-hidden="true" viewBox="0 0 32 32" width={size} height={size} fill="currentColor"><path d="M16.04 3A12.9 12.9 0 0 0 4.88 22.38L3 29l6.8-1.79A12.98 12.98 0 1 0 16.04 3Zm0 23.6c-2.1 0-4.15-.57-5.93-1.64l-.42-.25-4.04 1.06 1.08-3.93-.27-.43A10.6 10.6 0 1 1 16.04 26.6Zm5.82-7.93c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58a9.57 9.57 0 0 1-1.76-2.19c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.25-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" /></svg>;
}

export function WhatsAppLink({ message, children, className, ariaLabel }: { message: string; children: React.ReactNode; className?: string; ariaLabel: string }) {
  return <a href={createWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={className}>{children}</a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-top container">
      <button className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <a className="site-logo" href="#inicio" aria-label="Susttenta, página inicial"><Image src="/favicon-master-1024.png" alt="" width={54} height={54} priority /><Image src="/logo-susttenta-wordmark.png" alt="Susttenta" width={178} height={25} priority /></a>
      <WhatsAppLink message={whatsappMessages.embio} ariaLabel="Falar com a Susttenta pelo WhatsApp" className="header-whatsapp whatsapp-pulse"><WhatsAppIcon size={19} /><span>Falar com a Susttenta</span></WhatsAppLink>
    </div>
    <nav className="desktop-navigation" aria-label="Navegação principal">{navigationItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <nav id="mobile-navigation" className={`mobile-navigation ${open ? "is-open" : ""}`} aria-label="Navegação móvel" hidden={!open}>{navigationItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<WhatsAppLink message={whatsappMessages.embio} ariaLabel="Solicitar orientação pelo WhatsApp" className="whatsapp-pulse">Solicitar orientação</WhatsAppLink></nav>
  </header>;
}

export function Footer() {
  const manageCookies = () => window.dispatchEvent(new Event("open-cookie-settings"));
  return <>
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-summary"><a className="footer-logo" href="#inicio"><Image src="/favicon-master-1024.png" alt="" width={52} height={52} /><Image src="/logo-susttenta-wordmark.png" alt="Susttenta" width={164} height={23} /></a><p>Representante Embio com orientação para tratamento biológico, ambiência, biodigestores e efluentes.</p><a className="footer-phone" href="tel:+5546999259777">+55 (46) 99925-9777</a></div>
        <div><strong>Produtos Embio</strong><a href="#embiofert">Tratamento Embiofert</a><a href="#embio-3100">Embio 3100</a><a href="#embio-6000">Embio 6000</a><a href="#outras-solucoes">Embio 5000+ e 8000</a></div>
        <div><strong>TLC Agro e Ecomax</strong><a href="#tlc-agro">Conhecer a linha Ecomax</a><WhatsAppLink message={whatsappMessages.ecomax} ariaLabel="Falar sobre a linha Ecomax pelo WhatsApp">WhatsApp Ecomax</WhatsAppLink><strong className="footer-subheading">Acesso rápido</strong><a href="#pedro">Sobre Pedro</a><a href="#faq">Perguntas frequentes</a></div>
        <div><strong>Privacidade</strong><Link href="/privacidade">Política de Privacidade</Link><Link href="/cookies">Política de Cookies</Link><Link href="/termos">Termos de Uso</Link><button type="button" onClick={manageCookies}>Gerenciar preferências</button></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Susttenta. Todos os direitos reservados.</span><a href="https://novositeffrdobrasil.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Desenvolvido por FFR do Brasil Technology, Brasil"><Image src="/media/brand/br-flag.svg" alt="" width={22} height={15} />Desenvolvido por FFR do Brasil Technology</a></div>
    </footer>
    <WhatsAppLink message={whatsappMessages.embio} ariaLabel="Falar com a Susttenta pelo WhatsApp" className="floating-whatsapp whatsapp-pulse"><WhatsAppIcon size={29} /></WhatsAppLink>
    <CookieConsent />
  </>;
}
