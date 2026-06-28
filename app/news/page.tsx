import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "News", description: "GIUVA Europe news, updates and community stories." };

export default function NewsPage() {
  const items = [
    { title: "GIUVA Europe platform transformation", text: "GIUVA.eu is being shaped as the umbrella community platform for national GIUVA communities." },
    { title: "Community ideas into action", text: "The platform is designed to help ideas become useful local initiatives, exchanges and social impact projects." },
    { title: "Preparedness culture", text: "GIUVA promotes AED awareness, prevention and responsible public preparedness language without replacing competent services." }
  ];
  return <><PageHero eyebrow="News" title="Stories, updates and community signals." text="The News Center is prepared for official updates, country stories and public communication across the GIUVA network." /><section className="bg-white px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{items.map((item) => <article key={item.title} className="card interactive-card p-6"><h2 className="text-2xl font-black text-[#081f3a]">{item.title}</h2><p className="mt-3 leading-7 text-slate-600">{item.text}</p></article>)}</div></section></>;
}
