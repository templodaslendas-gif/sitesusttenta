import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Susttenta | Soluções biotecnológicas para o campo",
  description: "Tecnologias Embio e TLC Agro com orientação para tratamento biológico, ambiência, manejo de dejetos e controle estratégico de moscas.",
  applicationName: "Susttenta",
  manifest: "/site.webmanifest",
  keywords: ["Susttenta", "Embio", "TLC Agro", "Ecomax", "tratamento de dejetos", "controle de moscas", "biodigestor", "granjas"],
  openGraph: {
    title: "Susttenta | Soluções biotecnológicas para o campo",
    description: "Soluções Embio e TLC Agro com orientação para granjas, lagoas, biodigestores e controle estratégico de moscas.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#006b2d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <template aria-hidden="true" dangerouslySetInnerHTML={{ __html: "<!-- THESIS: engenharia biológica de campo, sem estética genérica. OWN-WORLD: verdes Susttenta, amarelo funcional, azul técnico e mídia oficial. STORY: diagnóstico, tratamento, produto, prova e atendimento. FIRST VIEWPORT: logo central, selo autorizado, promessa responsável e composição Embio/Ecomax. FORM: fluxo orgânico, escala editorial, linhas operacionais e profundidade contida. FINISH: responsivo, acessível, leve e humano. SEED: 7ea7e227 -->" }} />
        {children}
      </body>
    </html>
  );
}
