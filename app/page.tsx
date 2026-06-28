import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import { ItalyHeroVisual } from "@/components/ItalyHeroVisual";
import { ItalyProgramCards } from "@/components/ItalyProgramCards";
import { italyBrand, italyCtas } from "@/data/italia";

export const metadata: Metadata = {
  title: "GIUVA APS Italia | Connecting Communities Across Europe",
  description:
    "GIUVA APS Italia sviluppa comunitÃ  resilienti, inclusive, sostenibili e solidali attraverso volontariato, prevenzione, educazione e cooperazione europea."
};

export default function ItalyHomePage() {
  return (
    <>
      <section className="home-hero px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <span className="eyebrow">GIUVA APS Italia</span>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-[#081f3a] md:text-7xl">GIUVA APS Italia</h1>
            <p className="mt-4 text-xl font-black uppercase tracking-[0.12em] text-[#16825d]">{italyBrand.fullName}</p>
            <p className="mt-6 max-w-3xl text-3xl font-black leading-tight text-[#081f3a] md:text-5xl">{italyBrand.claim}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{italyBrand.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={italyCtas.volunteer.href} className="btn btn-primary hero-primary-cta">
                {italyCtas.volunteer.label}
                <ArrowRight size={19} />
              </Link>
              <Link href={italyCtas.programs.href} className="btn btn-blue">
                {italyCtas.programs.label}
              </Link>
              <Link href={italyCtas.partner.href} className="btn btn-ghost">
                {italyCtas.partner.label}
              </Link>
            </div>
          </div>
          <ItalyHeroVisual />
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              title: "IdentitÃ  civica",
              text: "Un'APS italiana con visione europea, orientata a prevenzione, inclusione e sviluppo comunitario."
            },
            {
              title: "Valori comuni",
              text: "Volontariato, solidarietÃ , partecipazione civica, educazione e cooperazione responsabile."
            },
            {
              title: "Limite chiaro",
              text: "GIUVA non Ã¨ un servizio sanitario, di emergenza, di protezione civile operativa o sostituto delle autoritÃ ."
            }
          ].map((item) => (
            <article key={item.title} className="card interactive-card flex min-h-56 flex-col justify-between p-6">
              <span className="eyebrow self-start">{item.title}</span>
              <p className="mt-5 text-lg font-bold leading-8 text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="eyebrow">Programmi GIUVA</span>
            <h2 className="section-title mt-5">Aree civiche autonome, coordinate da una visione europea.</h2>
            <p className="section-text">
              Ogni programma ha una disciplina, un colore, un linguaggio chiaro e un obiettivo comunitario. Il tono resta civico,
              formativo e inclusivo.
            </p>
          </div>
          <div className="mt-10">
            <ItalyProgramCards limit={6} />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">GIUVA Europa</span>
            <h2 className="section-title mt-5">Una rete europea di comunitÃ  autonome, unite da valori comuni.</h2>
            <p className="section-text">
              GIUVA Italia e GIUVA Romania sono entitÃ  autonome, coordinate da una visione comune europea.
            </p>
          </div>
          <div className="card p-7 md:p-8">
            {["GIUVA Europa", "GIUVA Italia APS", "GIUVA Romania", "Future GIUVA Spain, Hungary, Austria"].map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-b-0">
                <Globe2 className="shrink-0 text-[#1f5fbf]" size={26} />
                <span className="text-xl font-black text-[#081f3a]">{item}</span>
                {index === 0 ? <span className="ml-auto rounded-full bg-[#1f5fbf]/10 px-3 py-1 text-xs font-black text-[#1f5fbf]">visione</span> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="card p-7 md:p-8">
            <span className="eyebrow">Posizionamento</span>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-[#081f3a] md:text-5xl">Professionale, umano, europeo.</h2>
            <p className="section-text max-w-4xl">{italyBrand.description}</p>
          </article>
          <article className="card border-l-4 border-l-[#16825d] p-7 md:p-8">
            <span className="eyebrow">Nota prudente</span>
            <p className="mt-5 text-base font-bold leading-7 text-slate-700">{italyBrand.legalBoundary}</p>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {["Area volontari", "Donazioni future", "Blog e news"].map((item) => (
            <article key={item} className="card p-6">
              <CheckCircle2 className="text-[#16825d]" size={26} />
              <h2 className="mt-4 text-2xl font-black text-[#081f3a]">{item}</h2>
              <p className="mt-3 leading-7 text-slate-600">Predisposizione futura giÃ  prevista nell'architettura del sito.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

