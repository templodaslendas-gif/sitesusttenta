"use client";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ProductVideo } from "./site-data";

export type MediaItem = ProductVideo;
export function VideoModal({ item, onClose }: { item: MediaItem | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null); const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!item?.videoSrc) return;
    const previous = document.activeElement as HTMLElement | null;
    const pageElements = Array.from(document.body.children).filter((element) => !element.contains(panelRef.current) && !element.hasAttribute("inert"));
    pageElements.forEach((element) => element.setAttribute("inert", ""));
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const focusable = Array.from(panelRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), video[controls]') ?? []); const first = focusable[0]; const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", onKey); document.body.classList.add("modal-open"); closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.classList.remove("modal-open"); pageElements.forEach((element) => element.removeAttribute("inert")); previous?.focus(); };
  }, [item, onClose]);
  if (!item?.videoSrc) return null;
  return <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="video-modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div ref={panelRef} className="video-modal-panel"><button ref={closeRef} type="button" className="video-modal-close" onClick={onClose} aria-label="Fechar vídeo"><X /></button><div className="video-modal-copy"><span>{item.eyebrow}</span><h2 id="video-modal-title">{item.title}</h2></div><video controls autoPlay playsInline preload="metadata" poster={item.posterSrc}><source src={item.videoSrc} type="video/mp4" />Seu navegador não oferece suporte a vídeo HTML5.</video></div></div>;
}
