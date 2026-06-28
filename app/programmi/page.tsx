import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ItalyProgramCards } from "@/components/ItalyProgramCards";
import { italyPrograms } from "@/data/italia";

export const metadata: Metadata = {
  title: "Programmi | GIUVA APS Italia",
  description: "Le aree civiche di GIUVA APS Italia: comunitÃ , prevenzione, DAE, food solidarity, agricoltura comunitaria e progetti europei."
};

export default function ItalyProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programmi"
        title="Le discipline GIUVA per l'Italia."
        text="Ogni programma nasce per essere chiaro, accessibile, civico e scalabile: persone, comunitÃ , prevenzione, inclusione e solidarietÃ ."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <ItalyProgramCards />
          <div className="mt-10 grid gap-5">
            {italyPrograms.map((program) => (
              <article key={program.slug} id={program.slug} className="card p-7 md:p-8">
                <span className="eyebrow">{program.color}</span>
                <h2 className="mt-4 text-3xl font-black text-[#081f3a]">{program.name}</h2>
                <p className="section-text">{program.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

