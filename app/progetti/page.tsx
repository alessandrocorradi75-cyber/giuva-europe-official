import type { Metadata } from "next";
import { HandHeart, HeartPulse, Leaf } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Progetti | GIUVA APS Italia",
  description: "Progetti futuri GIUVA APS Italia per comunitÃ , prevenzione, solidarietÃ  e impatto sociale."
};

export default function ItalyProjectsPage() {
  const projects = [
    {
      title: "Project Pulse Italia",
      icon: HeartPulse,
      text: "Predisposizione futura per campagne trasparenti, sostegno CSR, donazioni e rendicontazione di impatto."
    },
    {
      title: "Food Solidarity",
      icon: HandHeart,
      text: "Recupero e distribuzione solidale di beni alimentari nel rispetto della normativa vigente."
    },
    {
      title: "Community Agriculture",
      icon: Leaf,
      text: "Orti sociali, educazione ambientale e produzione agricola a finalitÃ  sociale."
    }
  ];

  return (
    <>
      <PageHero
        eyebrow="Progetti"
        title="Progetti civici ad alto impatto comunitario."
        text="La sezione progetti Ã¨ predisposta per future campagne, report, donazioni, partnership e aggiornamenti pubblici."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="card interactive-card p-6">
                <Icon className="text-[#16825d]" size={34} />
                <h2 className="mt-4 text-2xl font-black text-[#081f3a]">{project.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{project.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

