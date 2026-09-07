"use client";

import { ArrowDown, ArrowRight, BadgeCheck, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon, WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      video.pause();
      video.currentTime = 0;
      video.load();
    }
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

  return <section id="inicio" className="hero hero-cinema">
    <div className="hero-orbit" aria-hidden="true" />
    <div className="hero-cinema-stage" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-cinema-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/embio-2026/posters/embiofert-propulsor-em-operacao.webp"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/media/embio-2026/videos/embiofert-propulsor-em-operacao.mp4" type="video/mp4" />
      </video>
      <div className="hero-cinema-shade" />
    </div>
    <button
      type="button"
      className="hero-video-control"
      onClick={togglePlayback}
      aria-label={isPlaying ? "Pausar vídeo da hero" : "Reproduzir vídeo da hero"}
    >
      {isPlaying ? <Pause /> : <Play fill="currentColor" />}
    </button>
    <div className="container hero-cinema-content">
      <div className="hero-copy" data-reveal>
        <div className="partner-seal"><BadgeCheck size={18} /><span>REPRESENTANTE AUTORIZADO EMBIO</span></div>
        <h1>Especialista em tratamento de dejetos suínos e bovinos</h1>
        <p className="hero-summary">A Susttenta une tecnologia Embio, diagnóstico técnico e experiência de campo para orientar soluções adequadas à realidade de cada operação.</p>
        <p className="hero-signature">Tratamento responsável começa pela compreensão do sistema, do manejo e do destino dos dejetos.</p>
        <div className="hero-actions">
          <a className="button button-yellow" href="#embiofert">Conhecer o Tratamento Embiofert<ArrowDown size={18} /></a>
          <WhatsAppLink message={whatsappMessages.embio} ariaLabel="Falar com um especialista da Susttenta pelo WhatsApp" className="button button-ghost-light whatsapp-pulse"><WhatsAppIcon size={20} />Falar com um especialista<ArrowRight size={18} /></WhatsAppLink>
        </div>
      </div>
    </div>
  </section>;
}
