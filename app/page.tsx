import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { EuropeHeroVisual } from "@/components/EuropeHeroVisual";
import { EuropeProgramCards } from "@/components/EuropeProgramCards";
import { communityGroups, europeBrand, europeCountries, europeCtas, europeProjectAreas, ideaPathway } from "@/data/europa";

export const metadata: Metadata = {
  title: "GIUVA Europe | Your Community. Your Ideas. Your Impact.",
  description: "GIUVA Europe is a European community platform connecting people, volunteers and local initiatives to create real social impact."
};

export default function EuropeHomePage() {
  return (
    <>
      <section className="home-hero px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <span className="eyebrow">European community platform</span>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-[#081f3a] md:text-7xl">GIUVA Europe</h1>
            <p className="mt-4 max-w-2xl break-words text-base font-black uppercase leading-7 tracking-[0.12em] text-[#16825d] md:text-xl">{europeBrand.fullName}</p>
            <p className="mt-6 max-w-3xl text-3xl font-black leading-tight text-[#081f3a] md:text-5xl">{europeBrand.claim}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{europeBrand.subtitle}</p>
            <p className="mt-5 max-w-2xl rounded-xl border border-[#1f5fbf]/15 bg-white/80 p-4 text-base font-black leading-7 text-[#081f3a]">GIUVA is not just volunteering. GIUVA is community. Your community.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={europeCtas.join.href} className="btn btn-primary hero-primary-cta">{europeCtas.join.label}<ArrowRight size={19} aria-hidden="true" /></Link>
              <Link href={europeCtas.programmes.href} className="btn btn-blue">{europeCtas.programmes.label}</Link>
              <Link href={europeCtas.initiative.href} className="btn btn-ghost">{europeCtas.initiative.label}</Link>
            </div>
          </div>
          <EuropeHeroVisual />
        </div>
      </section>

      <section className="bg-white px-5 py-16"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {[{ title: "What is GIUVA?", text: "A European platform where people, volunteers, ideas and local initiatives meet." }, { title: "Why it matters", text: "People can belong, contribute and turn useful ideas into community action." }, { title: "Clear boundary", text: "GIUVA is civic and complementary. It does not replace public institutions or emergency services." }].map((item) => <article key={item.title} className="card interactive-card flex min-h-56 flex-col justify-between p-6"><span className="eyebrow self-start">{item.title}</span><p className="mt-5 text-lg font-bold leading-8 text-slate-700">{item.text}</p></article>)}
      </div></section>

      <section className="bg-[#f6f8fb] px-5 py-20"><div className="mx-auto max-w-7xl"><div className="max-w-4xl"><span className="eyebrow">Community for everyone</span><h2 className="section-title mt-5">A place where different people can meet, share and build.</h2><p className="section-text">GIUVA is designed for young people, seniors, families, professionals, volunteers, motorcyclists, social partners and civic institutions.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{communityGroups.map((group) => <div key={group} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-[#081f3a] shadow-sm">{group}</div>)}</div></div></section>

      <section className="bg-white px-5 py-20"><div className="mx-auto max-w-7xl"><div className="max-w-4xl"><span className="eyebrow">From ideas to impact</span><h2 className="section-title mt-5">From a coffee to a community project.</h2><p className="section-text">GIUVA turns simple human encounters into practical local action.</p></div><div className="mt-10 grid gap-5 md:grid-cols-4">{ideaPathway.map((step) => { const Icon = step.icon; return <article key={step.title} className="card interactive-card p-6"><Icon className="text-[#16825d]" size={32} aria-hidden="true" /><h2 className="mt-4 text-2xl font-black text-[#081f3a]">{step.title}</h2><p className="mt-3 leading-7 text-slate-600">{step.text}</p></article>; })}</div></div></section>

      <section className="bg-[#f6f8fb] px-5 py-20"><div className="mx-auto max-w-7xl"><div className="max-w-4xl"><span className="eyebrow">Programmes</span><h2 className="section-title mt-5">One platform, many ways to be useful.</h2><p className="section-text">Each programme has its own identity, while remaining coordinated by the same European community vision.</p></div><div className="mt-10"><EuropeProgramCards limit={6} /></div></div></section>

      <section className="bg-white px-5 py-20"><div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div><span className="eyebrow">Development areas</span><h2 className="section-title mt-5">Community, youth, preparedness, travel and solidarity.</h2><p className="section-text">GIUVA Europe presents future development areas carefully, without fake partnerships or unauthorized operational claims.</p></div><div className="grid gap-5 sm:grid-cols-2">{europeProjectAreas.map((area) => { const Icon = area.icon; return <article key={area.title} className="card p-6"><Icon className="text-[#1f5fbf]" size={30} aria-hidden="true" /><h2 className="mt-4 text-xl font-black text-[#081f3a]">{area.title}</h2><p className="mt-3 leading-7 text-slate-600">{area.text}</p></article>; })}</div></div></section>

      <section className="bg-[#f6f8fb] px-5 py-20"><div className="mx-auto max-w-7xl"><div className="max-w-4xl"><span className="eyebrow">Countries</span><h2 className="section-title mt-5">GIUVA.eu is the umbrella. National sites are local implementations.</h2><p className="section-text">The European network can grow through autonomous communities sharing a common identity, values and public language.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{europeCountries.map((country) => <article key={country.name} className="card interactive-card p-6"><h2 className="text-2xl font-black text-[#081f3a]">{country.name}</h2><p className="mt-3 font-bold text-[#16825d]">{country.status}</p><p className="mt-2 text-sm font-black uppercase tracking-[0.12em] text-slate-500">{country.year}</p></article>)}</div></div></section>

      <section className="navy-band px-5 py-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]"><div><span className="eyebrow bg-white/10 text-white">Become part of GIUVA</span><h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Do you have an idea? Do you want to help? Do you want to build something for your community?</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">GIUVA is the place where your idea can grow into responsible local and European impact.</p></div><div className="card bg-white p-7 md:p-8">{["I can belong here.", "I can contribute here.", "My idea can become useful here.", "This is my community."].map((item) => <div key={item} className="flex items-center gap-3 border-b border-slate-100 py-4 last:border-b-0"><CheckCircle2 className="shrink-0 text-[#16825d]" size={24} aria-hidden="true" /><span className="text-xl font-black text-[#081f3a]">{item}</span></div>)}<Link href="/contact" className="btn btn-primary mt-6 w-full">Contact GIUVA Europe</Link></div></div></section>
    </>
  );
}

