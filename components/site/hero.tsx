"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon, WhatsAppLink } from "./site-chrome";
import { whatsappMessages } from "./whatsapp";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduce.matches) {
      video.removeAttribute("autoplay");
      video.pause();
      video.currentTime = 0;
      video.load();
    }

    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (!reduce.matches && !userPausedRef.current) {
        void video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      void video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  };

  return (
    <section id="inicio" className="hero hero-cinema">
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
          poster="/media/embio-2026/posters/embiofert-propulsor-hero.webp"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src="/media/embio-2026/videos/embiofert-propulsor-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-cinema-shade" />
      </div>
      <button type="button" className="hero-video-control visually-hidden-focusable" onClick={togglePlayback}>
        {playing ? "Pausar vídeo da hero" : "Reproduzir vídeo da hero"}
      </button>
      <div className="container hero-cinema-content">
        <div className="hero-copy" data-reveal>
          <p className="hero-mark">SUSTTENTA <span aria-hidden="true">|</span> REPRESENTANTE AUTORIZADO EMBIO</p>
          <h1>Especialista em tratamento de dejetos suínos e bovinos</h1>
          <p className="hero-summary">Tecnologia Embio e orientação técnica aplicadas à realidade de cada operação.</p>
          <div className="hero-actions">
            <a className="button button-yellow" href="#embiofert">Conhecer o Tratamento Embiofert<ArrowDown size={18} /></a>
            <WhatsAppLink message={whatsappMessages.embio} ariaLabel="Falar com um especialista da Susttenta pelo WhatsApp" className="button button-ghost-light whatsapp-pulse"><WhatsAppIcon size={20} />Falar com um especialista<ArrowRight size={18} /></WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
