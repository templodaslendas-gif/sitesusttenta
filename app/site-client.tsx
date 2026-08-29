"use client";

import { useCallback, useEffect, useState } from "react";
import { FAQ, FinalCTA, PedroAuthority } from "@/components/site/closing-sections";
import { EmbioOverview } from "@/components/site/embio-overview";
import { Embio3100Section, Embio6000Section, OtherEmbioSolutions } from "@/components/site/embio-product-sections";
import { EmbiofertSection } from "@/components/site/embiofert-section";
import { Hero } from "@/components/site/hero";
import { Footer, Header } from "@/components/site/site-chrome";
import { TlcEcomaxSection } from "@/components/site/tlc-section";
import { VideoModal, type MediaItem } from "@/components/site/video-modal";

export function SiteClient() {
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);
  const closeModal = useCallback(() => setActiveMedia(null), []);
  useEffect(() => {
    document.documentElement.classList.add("reveal-enabled");
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .08, rootMargin: "0px 0px -6%" });
    elements.forEach((element) => observer.observe(element));
    return () => { observer.disconnect(); document.documentElement.classList.remove("reveal-enabled"); };
  }, []);
  return <><Header /><main><Hero /><EmbioOverview /><EmbiofertSection /><Embio3100Section /><Embio6000Section /><OtherEmbioSolutions /><TlcEcomaxSection onOpen={setActiveMedia} /><PedroAuthority /><FAQ /><FinalCTA /></main><Footer /><VideoModal item={activeMedia} onClose={closeModal} /></>;
}
