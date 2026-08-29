"use client";

import { useCallback, useEffect, useState } from "react";
import { BrandRepresentationCards, FAQ, FinalCTA, PedroAuthority } from "@/components/site/closing-sections";
import { Hero } from "@/components/site/hero";
import { Footer, Header } from "@/components/site/site-chrome";
import { SolutionsCarousel } from "@/components/site/solutions-carousel";
import { EmbiofertSection, EmbioProducts, TechnicalChallenges } from "@/components/site/technical-sections";
import { Testimonials } from "@/components/site/testimonials";
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
  return <><Header /><main><Hero /><SolutionsCarousel /><TechnicalChallenges /><EmbiofertSection /><EmbioProducts /><TlcEcomaxSection onOpen={setActiveMedia} /><BrandRepresentationCards /><Testimonials onOpen={setActiveMedia} /><FAQ /><PedroAuthority /><FinalCTA /></main><Footer /><VideoModal item={activeMedia} onClose={closeModal} /></>;
}
