import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Susttenta | Tratamento de Dejetos com Tecnologia Embio",
  description: "Soluções para tratamento de dejetos, granjas, lagoas, biodigestores e operações agroindustriais com tecnologia Embio.",
  applicationName: "Susttenta",
  manifest: "/site.webmanifest",
  themeColor: "#006b2d",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
