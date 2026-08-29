import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Susttenta | Biotecnologia para o campo",
  description: "Soluções biotecnológicas para granjas, propriedades rurais, lagoas, biodigestores e controle de moscas. Representante Embio e TLC Agro.",
  applicationName: "Susttenta",
  manifest: "/site.webmanifest",
  keywords: ["Susttenta", "Embio", "TLC Agro", "Ecomax", "tratamento de dejetos", "controle de moscas", "biodigestor", "granjas"],
  openGraph: {
    title: "Susttenta | Biotecnologia para o campo",
    description: "Soluções Embio e TLC Agro com orientação para granjas, lagoas, biodigestores e controle de moscas.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
