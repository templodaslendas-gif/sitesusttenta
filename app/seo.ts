export const SITE_URL = "https://www.susttenta.com.br";

export const SITE_NAME = "Susttenta";

export const SITE_DESCRIPTION =
  "Tecnologias Embio e TLC Agro com orientação para tratamento biológico, ambiência, manejo de dejetos, efluentes e controle estratégico de moscas.";

export const SOCIAL_IMAGE = {
  url: "/media/brand/susttenta-logo-2026.webp",
  width: 1254,
  height: 1254,
  alt: "Susttenta — Gerando Resultados com Sustentabilidade",
} as const;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}${SOCIAL_IMAGE.url}`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-46-99925-9777",
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
} as const;
