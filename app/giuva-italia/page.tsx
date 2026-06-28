import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { italyBrand } from "@/data/italia";

export const metadata: Metadata = {
  title: "GIUVA Italia | GIUVA APS Italia",
  description: "La presenza italiana di GIUVA come APS civica, inclusiva e orientata all'Europa."
};

export default function ItalyIdentityPage() {
  return (
    <>
      <PageHero
        eyebrow="GIUVA Italia"
        title="Una presenza italiana, una visione europea."
        subtitle={italyBrand.fullName}
        text="GIUVA APS Italia lavora per costruire programmi civici accessibili, inclusivi e utili alle comunitÃ  locali, mantenendo una forte connessione con la futura rete europea GIUVA."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            "bandiera italiana affiancata alla bandiera dell'Unione Europea",
            "stesse discipline GIUVA definite per il sistema europeo",
            "identitÃ  pubblica civica, non militare, non sanitaria e non sostitutiva delle autoritÃ "
          ].map((item) => (
            <article key={item} className="card p-6 text-lg font-bold leading-8 text-slate-700">
              {item}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

