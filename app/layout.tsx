import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { europeBrand, europeSeoKeywords } from "@/data/europa";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giuva.eu"),
  title: {
    default: "GIUVA Europe | Your Community. Your Ideas. Your Impact.",
    template: "%s | GIUVA Europe"
  },
  description: "GIUVA Europe is a European community platform connecting people, volunteers and local initiatives to create real social impact.",
  keywords: europeSeoKeywords,
  openGraph: {
    title: "GIUVA Europe",
    description: europeBrand.subtitle,
    url: "https://www.giuva.eu",
    siteName: "GIUVA Europe",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/brand/giuva-europe-community-platform.png", width: 2048, height: 1152, alt: "GIUVA Europe community platform" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "GIUVA Europe",
    description: europeBrand.subtitle,
    images: ["/brand/giuva-europe-community-platform.png"]
  },
  icons: { icon: "/favicon.svg" }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="site-shell">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
