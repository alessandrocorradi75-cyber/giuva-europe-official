import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { italyBrand } from "@/data/italia";

export const metadata: Metadata = {
  title: "Chi siamo | GIUVA APS Italia",
  description: "IdentitÃ , valori e visione europea di GIUVA APS Italia."
};

export default function ItalyAboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="GIUVA APS Italia"
        subtitle="ComunitÃ  resilienti, inclusive, sostenibili e solidali."
        text={italyBrand.description}
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.8fr]">
          <article className="card p-7 md:p-8">
            <h2 className="text-3xl font-black text-[#081f3a]">Parte della futura rete europea GIUVA</h2>
            <p className="section-text">
              GIUVA Italia fa parte della futura rete europea GIUVA, insieme a GIUVA Romania e alle future organizzazioni
              nazionali aderenti. Ogni realtÃ  nazionale resta autonoma, ma condivide valori, identitÃ  visiva, discipline e
              linguaggio pubblico.
            </p>
          </article>
          <article className="card border-l-4 border-l-[#16825d] p-7 md:p-8">
            <h2 className="text-3xl font-black text-[#081f3a]">Cosa non siamo</h2>
            <p className="section-text">{italyBrand.legalBoundary}</p>
          </article>
        </div>
      </section>
    </>
  );
}

