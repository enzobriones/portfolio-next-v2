import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/lib/profile";
import "./globals.css";

const body = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-body",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — Ingeniero de Software`,
  description:
    "Backend e infraestructura que aguanta producción. Conoce a Enzo Briones y los sistemas multi-tenant que está construyendo.",
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Backend e infraestructura`,
    description: "Sistemas multi-tenant, APIs y la nube donde corren.",
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f3f2f2",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
