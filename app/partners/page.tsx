import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { europePartnerAreas } from "@/data/europa";

export const metadata: Metadata = { title: "Partners", description: "GIUVA Europe partnership areas for community projects and civic cooperation." };

export default function PartnersPage() {
  return <><PageHero eyebrow="Partners" title="Cooperation without implicit partnership claims." text="GIUVA Europe can collaborate with civic, social, educational and community partners where objectives, roles and legal boundaries are clear." /><section className="bg-white px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">{europePartnerAreas.map((area) => <article key={area} className="card interactive-card p-6"><h2 className="text-2xl font-black capitalize text-[#081f3a]">{area}</h2><p className="mt-3 leading-7 text-slate-600">Potential cooperation area for future documented projects. No active partnership is implied unless formally published.</p></article>)}</div></section></>;
}
