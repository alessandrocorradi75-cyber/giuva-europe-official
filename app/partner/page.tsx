import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { italyPartnerAreas } from "@/data/italia";

export const metadata: Metadata = {
  title: "Partner | GIUVA APS Italia",
  description: "Collaborazioni, protocolli e progetti condivisi per GIUVA APS Italia."
};

export default function ItalyPartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner"
        title="Collaborazioni pubbliche, private e sociali."
        text="GIUVA APS Italia Ã¨ disponibile a sviluppare collaborazioni, protocolli e progetti condivisi con soggetti pubblici e privati nel rispetto della normativa vigente."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {italyPartnerAreas.map((area) => (
            <article key={area} className="card interactive-card p-6">
              <Building2 className="text-[#16825d]" size={32} />
              <h2 className="mt-4 text-2xl font-black capitalize text-[#081f3a]">{area}</h2>
              <p className="mt-3 leading-7 text-slate-600">Ambito aperto a dialogo, progettazione condivisa e formalizzazione futura.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

