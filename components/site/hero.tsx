"use client";

import { ArrowDown, ArrowRight, BadgeCheck, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon, WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    videoRef.current?.pause();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return <section id="inicio" className="hero embio-hero embio-video-hero">
    <div className="hero-orbit" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-copy" data-reveal>
        <div className="partner-seal"><BadgeCheck size={18} /><span>REPRESENTANTE EMBIO</span></div>
        <p className="hero-kicker">Susttenta · conhecimento técnico aplicado ao campo</p>
        <h1>Biotecnologia Embio com experiência de campo</h1>
        <p className="hero-summary">Soluções para tratamento de dejetos, ambiência, biodigestores e efluentes, indicadas a partir da realidade de cada operação.</p>
        <p className="hero-signature">Diagnóstico, orientação e acompanhamento para aplicar a tecnologia certa no lugar certo.</p>
        <div className="hero-actions">
          <WhatsAppLink message={whatsappMessages.embio} ariaLabel="Falar com Pedro sobre as soluções Embio pelo WhatsApp" className="button button-yellow whatsapp-pulse"><WhatsAppIcon size={20} />Falar com Pedro<ArrowRight size={18} /></WhatsAppLink>
          <a className="button button-ghost" href="#embio">Conhecer as soluções<ArrowDown size={18} /></a>
        </div>
      </div>
      <div className="hero-video-card" data-reveal>
        <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster="/media/embio-2026/posters/embiofert-propulsor-em-operacao.webp" aria-label="Propulsor Embio em funcionamento em uma lagoa de dejetos" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
          <source src="/media/embio-2026/videos/embiofert-propulsor-em-operacao.mp4" type="video/mp4" />
        </video>
        <button type="button" className="hero-video-control" onClick={togglePlayback} aria-label={isPlaying ? "Pausar vídeo da hero" : "Reproduzir vídeo da hero"}>{isPlaying ? <Pause /> : <Play fill="currentColor" />}</button>
      </div>
    </div>
  </section>;
}
