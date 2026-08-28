import Image from "next/image";
import Link from "next/link";
import { CookieConsent } from "./cookie-consent";

export function LegalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <>
    <header className="legal-header"><Link href="/" className="legal-brand" aria-label="Voltar ao site da Susttenta"><Image unoptimized src="/favicon-master-1024.png" alt="" width={50} height={50} priority /><Image unoptimized src="/logo-susttenta-wordmark.png" alt="Susttenta" width={145} height={22} priority /></Link><Link href="/" className="legal-back">Voltar ao site</Link></header>
    <main className="legal-main"><div className="legal-hero"><span>{eyebrow}</span><h1>{title}</h1><p>{intro}</p><small>Última atualização: 28 de agosto de 2026</small></div><article className="legal-content">{children}</article></main>
    <footer className="legal-footer"><span>© 2026 Susttenta</span><nav><Link href="/privacidade">Privacidade</Link><Link href="/cookies">Cookies</Link><Link href="/termos">Termos</Link><button onClick={undefined} id="legal-cookie-settings">Preferências de cookies</button></nav></footer>
    <CookieConsent />
  </>;
}
