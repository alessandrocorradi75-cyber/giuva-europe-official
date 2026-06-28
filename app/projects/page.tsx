import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { europeProjectAreas } from "@/data/europa";

export const metadata: Metadata = { title: "Projects", description: "GIUVA Europe projects from ideas to community impact." };

export default function ProjectsPage() {
  return <><PageHero eyebrow="Projects" title="Ideas planted, cultivated and transformed into impact." text="GIUVA Europe supports future project areas with careful public language, transparent development and no fake operational claims." /><section className="bg-white px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">{europeProjectAreas.map((area) => { const Icon = area.icon; return <article key={area.title} className="card interactive-card p-7 md:p-8"><Icon className="text-[#16825d]" size={34} aria-hidden="true" /><h2 className="mt-4 text-3xl font-black text-[#081f3a]">{area.title}</h2><p className="section-text">{area.text}</p></article>; })}</div></section></>;
}
