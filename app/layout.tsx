import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/lib/profile";
import "./globals.css";

const display = localFont({
  src: "../public/fonts/display.woff2",
  weight: "300",
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: "../public/fonts/body.woff2",
  weight: "400",
  variable: "--font-body",
  display: "swap",
});
const mono = localFont({
  src: "../public/fonts/mono.woff2",
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — Ingeniero de Software`,
  description:
    "Backend, datos e infraestructura. Conoce a Enzo Briones y los proyectos que está construyendo.",
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Software que funciona de verdad`,
    description:
      "Desde donde viven los datos hasta lo que ves en pantalla.",
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#171d27",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
