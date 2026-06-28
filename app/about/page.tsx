import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { europeBrand, ideaPathway } from "@/data/europa";

export const metadata: Metadata = { title: "About", description: "About GIUVA Europe, its community mission and European civic identity." };

export default function AboutPage() {
  return <><PageHero eyebrow="About" title="GIUVA is a community platform for Europe." subtitle={europeBrand.fullName} text={europeBrand.description} /><section className="bg-white px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2"><article className="card p-7 md:p-8"><h2 className="text-3xl font-black text-[#081f3a]">Mission</h2><p className="section-text">Connect people who want to be useful, help ideas grow into local action and support communities through inclusive, practical and responsible programmes.</p></article><article className="card p-7 md:p-8"><h2 className="text-3xl font-black text-[#081f3a]">Vision</h2><p className="section-text">A European network of communities where volunteering, preparedness, social impact, youth, travel, agriculture and civic innovation work together.</p></article>{ideaPathway.map((item) => <article key={item.title} className="card p-7 md:p-8"><h2 className="text-3xl font-black text-[#081f3a]">{item.title}</h2><p className="section-text">{item.text}</p></article>)}<article className="card border-l-4 border-l-[#16825d] p-7 md:p-8 lg:col-span-2"><h2 className="text-3xl font-black text-[#081f3a]">Legal and safety boundary</h2><p className="section-text">{europeBrand.legalBoundary}</p></article></div></section></>;
}
