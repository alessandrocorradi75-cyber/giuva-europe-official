import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Governance", description: "GIUVA Europe governance and organizational principles." };

export default function GovernancePage() {
  const roles = ["European coordination", "National communities", "Programme leads", "Safeguarding", "Transparency", "Community feedback"];
  return <><PageHero eyebrow="Governance" title="A scalable platform needs clear governance." text="GIUVA Europe is prepared for transparent, responsible and legally compliant growth across national communities." /><section className="bg-white px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{roles.map((role) => <article key={role} className="card p-6"><h2 className="text-2xl font-black text-[#081f3a]">{role}</h2><p className="mt-3 leading-7 text-slate-600">Governance area prepared for formal documentation, publication and future updates.</p></article>)}</div></section></>;
}
