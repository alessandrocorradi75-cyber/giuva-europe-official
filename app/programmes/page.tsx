import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EuropeProgramCards } from "@/components/EuropeProgramCards";
import { europeProgrammes } from "@/data/europa";

export const metadata: Metadata = { title: "Programmes", description: "GIUVA Europe programmes for community, preparedness, youth, journey, food solidarity and social impact." };

export default function ProgrammesPage() {
  return <><PageHero eyebrow="Programmes" title="GIUVA programmes connect people with practical ways to be useful." text="Each programme is independent in identity and coordinated through one European community platform." /><section className="bg-white px-5 pb-20"><div className="mx-auto max-w-7xl"><EuropeProgramCards /><div className="mt-10 grid gap-5">{europeProgrammes.map((program) => <article key={program.slug} id={program.slug} className="card p-7 md:p-8"><span className="eyebrow">{program.color}</span><h2 className="mt-4 text-3xl font-black text-[#081f3a]">{program.name}</h2><p className="section-text">{program.description}</p></article>)}</div></div></section></>;
}
