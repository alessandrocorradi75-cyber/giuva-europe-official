import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { ItalyHeroVisual } from "@/components/ItalyHeroVisual";
import { italyBrand } from "@/data/italia";

export const metadata: Metadata = {
  title: "GIUVA APS Italy | Connecting Communities Across Europe",
  description:
    "GIUVA APS Italy develops resilient, inclusive and supportive communities through volunteering, prevention, civic education and European cooperation."
};

export default function ItalyEnglishPage() {
  return (
    <>
      <section className="home-hero px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <span className="eyebrow">GIUVA APS Italy</span>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-[#081f3a] md:text-7xl">GIUVA APS Italy</h1>
            <p className="mt-4 text-xl font-black uppercase tracking-[0.12em] text-[#16825d]">{italyBrand.fullName}</p>
            <p className="mt-6 max-w-3xl text-3xl font-black leading-tight text-[#081f3a] md:text-5xl">Connecting Communities Across Europe</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Volunteering, community, prevention and solidarity for an Italy more connected to Europe.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/volontariato" className="btn btn-primary hero-primary-cta">
                Become a volunteer
                <ArrowRight size={19} />
              </Link>
              <Link href="/programmi" className="btn btn-blue">
                Explore programs
              </Link>
              <Link href="/partner" className="btn btn-ghost">
                Partner with GIUVA
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
              title: "Civic identity",
              text: "An Italian social promotion association with European openness, focused on prevention, inclusion and community development."
            },
            {
              title: "Common values",
              text: "Volunteering, solidarity, civic participation, education and responsible cooperation."
            },
            {
              title: "Clear boundary",
              text: "GIUVA is not a healthcare, emergency or public authority service and does not replace public institutions."
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
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">GIUVA Europe</span>
            <h2 className="section-title mt-5">A European network of autonomous communities, united by shared values.</h2>
            <p className="section-text">GIUVA Italy and GIUVA Romania are autonomous entities coordinated by a common European vision.</p>
          </div>
          <div className="card p-7 md:p-8">
            {["GIUVA Europe", "GIUVA Italy APS", "GIUVA Romania", "Future GIUVA Spain, Hungary, Austria"].map((item) => (
              <div key={item} className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-b-0">
                <Globe2 className="shrink-0 text-[#1f5fbf]" size={26} />
                <span className="text-xl font-black text-[#081f3a]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

