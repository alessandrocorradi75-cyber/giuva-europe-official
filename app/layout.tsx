import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { italyBrand, italySeoKeywords } from "@/data/italia";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.giuva.it"),
  title: {
    default: "GIUVA APS Italia | Connecting Communities Across Europe",
    template: "%s | GIUVA APS Italia"
  },
  description:
    "GIUVA APS Italia sviluppa comunità resilienti, inclusive, sostenibili e solidali attraverso volontariato, prevenzione, educazione e cooperazione europea.",
  keywords: italySeoKeywords,
  openGraph: {
    title: "GIUVA APS Italia",
    description: italyBrand.description,
    url: "https://www.giuva.it",
    siteName: "GIUVA APS Italia",
    locale: "it_IT",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className="site-shell">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
