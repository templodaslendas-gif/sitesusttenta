import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_IMAGE, structuredData } from "./seo";

const isPreview = process.env.VERCEL_ENV === "preview";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Susttenta | Soluções biotecnológicas para o campo",
    template: "%s | Susttenta",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  manifest: "/site.webmanifest",
  keywords: ["Susttenta", "Embio", "Embio 8000", "TLC Agro", "Ecomax", "tratamento de dejetos", "tratamento de efluentes", "controle de moscas", "biodigestor", "granjas"],
  openGraph: {
    title: "Susttenta | Soluções biotecnológicas para o campo",
    description: "Soluções Embio e TLC Agro com orientação para granjas, lagoas, biodigestores e controle estratégico de moscas.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Susttenta | Soluções biotecnológicas para o campo",
    description: "Soluções Embio e TLC Agro com orientação para granjas, lagoas, biodigestores e controle estratégico de moscas.",
    images: [SOCIAL_IMAGE.url],
  },
  robots: {
    index: !isPreview,
    follow: !isPreview,
    googleBot: {
      index: !isPreview,
      follow: !isPreview,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
