import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Transparency", description: "GIUVA Europe transparency, GDPR, policies and public accountability placeholders." };

export default function TransparencyPage() {
  const docs = ["Transparency framework", "Privacy and GDPR", "Cookie Policy", "Safeguarding", "Partnership principles", "Impact reporting"];
  return <><PageHero eyebrow="Transparency" title="Trust is built before growth." text="GIUVA Europe publishes clear boundaries, governance principles and public accountability documents as the platform develops." /><section className="bg-white px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{docs.map((doc) => <article key={doc} className="card p-6"><h2 className="text-2xl font-black text-[#081f3a]">{doc}</h2><p className="mt-3 leading-7 text-slate-600">Prepared for public Release 1.0 documentation. Detailed documents will be published only when approved and validated.</p></article>)}</div></section></>;
}
