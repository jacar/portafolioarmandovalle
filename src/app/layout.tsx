import React from "react";
import "@/styles/globals.css";
<<<<<<< HEAD

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import NowPlaying from "@/components/NowPlaying";

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A Spotify-like app built with Next.js",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
=======
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { PageTransition } from "@/components/ui/page-transition";

export const metadata: Metadata = {
  title: "Armando Ovalle Jácome - Experto en Desarrollo Web WordPress y SEO",
  description: "Desarrollador web profesional especializado en WordPress, diseño UI/UX y optimización SEO. Más de 5 años de experiencia creando sitios web personalizados y tiendas online.",
  keywords: "desarrollo web, wordpress, diseño web, seo, tiendas online, ecommerce, diseño ui/ux, desarrollo frontend, optimización web, diseño responsivo",
  authors: [{ name: "Armando Ovalle Jácome" }],
  creator: "Armando Ovalle Jácome",
  publisher: "Armando Ovalle Jácome",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [{ rel: "icon", url: "https://pre-built-images.s3.amazonaws.com/webapp-uploads/de4bccb69ee4b23d94bd77b94912fbd6.png" }],
  openGraph: {
    title: "Armando Ovalle Jácome - Experto en Desarrollo Web WordPress y SEO",
    description: "Desarrollador web profesional especializado en WordPress, diseño UI/UX y optimización SEO. Más de 5 años de experiencia creando sitios web personalizados y tiendas online.",
    url: "https://www.webcincodev.com",
    siteName: "Armando Ovalle Jácome",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
>>>>>>> d408552 (Initial commit: Portafolio web project)
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
<<<<<<< HEAD
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body className="bg-black text-white">
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            <Header />
            <div className="p-8 pb-24">
              {children}
            </div>
          </main>
        </div>
        <NowPlaying />
=======
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
        >
          <SplashCursor colorMode="dark" />
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </ThemeProvider>
>>>>>>> d408552 (Initial commit: Portafolio web project)
      </body>
    </html>
  );
}
