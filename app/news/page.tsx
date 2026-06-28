import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "News | GIUVA APS Italia",
  description: "News e aggiornamenti futuri di GIUVA APS Italia."
};

export default function ItalyNewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Aggiornamenti e storie GIUVA Italia."
        text="La sezione news Ã¨ predisposta per comunicati, storie di comunitÃ , report di progetto e aggiornamenti istituzionali."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto max-w-4xl">
          <article className="card p-7 md:p-8">
            <BookOpen className="text-[#16825d]" size={34} />
            <h2 className="mt-4 text-3xl font-black text-[#081f3a]">Area editoriale in preparazione</h2>
            <p className="section-text">
              Qui potranno essere pubblicati articoli, comunicati, campagne, aggiornamenti sui programmi e storie di volontariato.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

