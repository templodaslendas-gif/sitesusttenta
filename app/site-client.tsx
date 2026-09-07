"use client";

import { useEffect } from "react";
import { FAQ, FinalCTA, PedroAuthority } from "@/components/site/closing-sections";
import { EmbioOverview } from "@/components/site/embio-overview";
import { Embio3100Section, Embio6000Section } from "@/components/site/embio-product-sections";
import { EmbiofertSection } from "@/components/site/embiofert-section";
import { Hero } from "@/components/site/hero";
import { Footer, Header } from "@/components/site/site-chrome";
import { TlcEcomaxSection } from "@/components/site/tlc-section";

export function SiteClient() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-enabled");
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .08, rootMargin: "0px 0px -6%" });
    elements.forEach((element) => observer.observe(element));
    return () => { observer.disconnect(); document.documentElement.classList.remove("reveal-enabled"); };
  }, []);
  return <><Header /><main><Hero /><EmbiofertSection /><EmbioOverview /><Embio3100Section /><Embio6000Section /><TlcEcomaxSection /><PedroAuthority /><FAQ /><FinalCTA /></main><Footer /></>;
}
