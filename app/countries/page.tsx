import type { Metadata } from "next";
import { Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { europeCountries } from "@/data/europa";

export const metadata: Metadata = { title: "Countries", description: "GIUVA Europe country network and local implementations." };

export default function CountriesPage() {
  return <><PageHero eyebrow="Countries" title="One European platform, local communities." text="GIUVA.eu is the umbrella platform. National GIUVA sites are local implementations adapted to their communities and legal contexts." /><section className="bg-white px-5 pb-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">{europeCountries.map((country) => <article key={country.name} className="card interactive-card p-6"><Globe2 className="text-[#1f5fbf]" size={30} aria-hidden="true" /><h2 className="mt-4 text-2xl font-black text-[#081f3a]">{country.name}</h2><p className="mt-3 font-bold text-[#16825d]">{country.status}</p><p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-slate-500">{country.year}</p></article>)}</div></section></>;
}
