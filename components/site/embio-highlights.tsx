"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";

const highlights = [
  { title: "Linha completa Embio", text: "Orientação para diferentes aplicações no campo e na agroindústria." },
  { title: "Atendimento especializado", text: "Análise do cenário antes da recomendação e apoio na escolha da solução." },
  { title: "Compra pelo WhatsApp", text: "Contato direto para consultar disponibilidade, aplicação e aquisição." },
  { title: "Campo e indústria", text: "Soluções voltadas a propriedades rurais, granjas, confinamentos, biodigestores e operações agroindustriais." },
];

const AUTOPLAY_MS = 6500;
const SWIPE_THRESHOLD = 45;
const total = highlights.length;

export function EmbioHighlights() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % total) + total) % total);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % total), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, index]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    }
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setPaused(true);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null) return;
    const delta = (event.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(delta) > SWIPE_THRESHOLD) go(index + (delta < 0 ? 1 : -1));
  };

  return (
    <div
      className="embio-highlights"
      data-reveal
      role="region"
      aria-roledescription="carrossel"
      aria-label="Diferenciais da representação Embio pela Susttenta"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="embio-highlights-viewport">
        <ul className="embio-highlights-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {highlights.map((item, position) => (
            <li
              key={item.title}
              className="embio-highlights-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${position + 1} de ${total} — ${item.title}`}
              aria-hidden={position !== index}
            >
              <span className="embio-highlights-index">{String(position + 1).padStart(2, "0")} <i aria-hidden="true" /> {String(total).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="embio-highlights-controls">
        <div className="embio-highlights-nav">
          <button type="button" onClick={() => go(index - 1)} aria-label="Diferencial anterior">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Próximo diferencial">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <div className="embio-highlights-dots">
          {highlights.map((item, position) => (
            <button
              key={item.title}
              type="button"
              className={position === index ? "is-active" : undefined}
              aria-label={`Ver: ${item.title}`}
              aria-current={position === index ? "true" : undefined}
              onClick={() => go(position)}
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      <p className="embio-highlights-status" aria-live="polite">
        {`Diferencial ${index + 1} de ${total}: ${highlights[index].title}`}
      </p>
    </div>
  );
}
