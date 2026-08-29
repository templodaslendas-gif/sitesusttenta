"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { COOKIE_STORAGE_KEY, DEFAULT_COOKIE_PREFERENCES, createCookieConsentRecord, parseCookieConsent, type CookiePreferences } from "@/components/cookie-preferences";

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [banner, setBanner] = useState(false);
  const [settings, setSettings] = useState(false);
  const [hasStoredConsent, setHasStoredConsent] = useState(false);
  const [savedPreferences, setSavedPreferences] = useState<CookiePreferences>(DEFAULT_COOKIE_PREFERENCES);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_COOKIE_PREFERENCES);
  const openSettings = () => { setPreferences(savedPreferences); setBanner(false); setSettings(true); };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const saved = parseCookieConsent(localStorage.getItem(COOKIE_STORAGE_KEY));
      if (saved) {
        const next = { necessary: true, analytics: saved.analytics, marketing: saved.marketing } as const;
        setSavedPreferences(next);
        setPreferences(next);
        setHasStoredConsent(true);
      } else {
        localStorage.removeItem(COOKIE_STORAGE_KEY);
        setBanner(true);
      }
      setReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const open = () => { setPreferences(savedPreferences); setBanner(false); setSettings(true); };
    window.addEventListener("open-cookie-settings", open);
    const legalButton = document.getElementById("legal-cookie-settings");
    legalButton?.addEventListener("click", open);
    return () => { window.removeEventListener("open-cookie-settings", open); legalButton?.removeEventListener("click", open); };
  }, [savedPreferences]);

  const save = (next: CookiePreferences) => {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(createCookieConsentRecord(next)));
    setSavedPreferences(next); setPreferences(next); setHasStoredConsent(true); setBanner(false); setSettings(false);
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: next }));
  };

  if (!ready) return null;
  return <>
    {banner && <aside className="cookie-banner" aria-label="Aviso de cookies">
      <div className="cookie-banner__icon"><Cookie size={24} /></div>
      <div className="cookie-banner__copy"><strong>Sua privacidade importa</strong><p>Usamos cookies necessários para o funcionamento do site. Com sua autorização, também podemos usar cookies de análise e marketing. Leia a <Link href="/cookies">Política de Cookies</Link> e a <Link href="/privacidade">Política de Privacidade</Link>.</p></div>
      <div className="cookie-banner__actions"><button className="cookie-button cookie-button--ghost" onClick={openSettings}>Personalizar</button><button className="cookie-button cookie-button--outline" onClick={() => save({ necessary: true, analytics: false, marketing: false })}>Recusar não essenciais</button><button className="cookie-button cookie-button--primary" onClick={() => save({ necessary: true, analytics: true, marketing: true })}>Aceitar todos</button></div>
    </aside>}

    <Dialog open={settings} onOpenChange={(next) => { setSettings(next); if (!next) { setPreferences(savedPreferences); if (!hasStoredConsent) setBanner(true); } }}>
      <DialogContent className="cookie-dialog sm:max-w-[620px]">
        <DialogHeader><span className="cookie-dialog__seal"><ShieldCheck size={22} /></span><DialogTitle>Preferências de cookies</DialogTitle><DialogDescription>Escolha quais categorias podem ser utilizadas. Os cookies necessários permanecem ativos para o funcionamento básico do site.</DialogDescription></DialogHeader>
        <div className="cookie-options">
          <div><div><strong>Cookies necessários</strong><p>Garantem recursos essenciais, segurança e armazenamento da sua escolha.</p></div><Switch checked disabled aria-label="Cookies necessários sempre ativos" /></div>
          <div><div><strong>Análise e desempenho</strong><p>Ajudam a compreender o uso do site de forma agregada e a melhorar a experiência.</p></div><Switch checked={preferences.analytics} onCheckedChange={(checked) => setPreferences((current) => ({ ...current, analytics: checked }))} aria-label="Permitir cookies de análise" /></div>
          <div><div><strong>Marketing</strong><p>Podem medir campanhas e personalizar comunicações, quando esses recursos estiverem ativos.</p></div><Switch checked={preferences.marketing} onCheckedChange={(checked) => setPreferences((current) => ({ ...current, marketing: checked }))} aria-label="Permitir cookies de marketing" /></div>
        </div>
        <DialogFooter className="cookie-dialog__footer"><button className="cookie-button cookie-button--outline" onClick={() => save({ necessary: true, analytics: false, marketing: false })}>Recusar não essenciais</button><button className="cookie-button cookie-button--primary" onClick={() => save(preferences)}>Salvar preferências</button></DialogFooter>
      </DialogContent>
    </Dialog>
  </>;
}
