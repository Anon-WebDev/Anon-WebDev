import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const headingFont = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Luxury Spa & Wellness`, template: `%s | ${siteConfig.name}` },
  description: "Luxury massage and skincare experiences in San Mateo. Personalized facials, therapeutic massage, and a peaceful modern studio.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} | Luxury Spa & Wellness`,
    description: "Massage, facials, and restorative wellness treatments designed around your goals.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/spa-hero.jpg", width: 1200, height: 900, alt: "Luxury spa treatment room" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Luxury Spa & Wellness`,
    description: "Book personalized massage and facial treatments in a calm, modern spa studio.",
    images: ["/images/spa-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-white font-sans text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
