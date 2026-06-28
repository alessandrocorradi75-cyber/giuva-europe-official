import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "GIUVA Europa | GIUVA APS Italia",
  description: "GIUVA Italia e GIUVA Romania come entitÃ  autonome coordinate da una visione comune europea."
};

export default function ItalyEuropePage() {
  return (
    <>
      <PageHero
        eyebrow="GIUVA Europa"
        title="Una rete europea di comunitÃ  autonome, unite da valori comuni."
        text="GIUVA Italia e GIUVA Romania sono entitÃ  autonome, coordinate da una visione comune europea orientata a volontariato, prevenzione, inclusione e solidarietÃ ."
      />
      <section className="bg-white px-5 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="card grid gap-4 p-7 text-center md:p-10">
            {["GIUVA Europa", "GIUVA Italia APS", "GIUVA Romania", "Future GIUVA Spain, Hungary, Austria"].map((node, index) => (
              <div key={node} className="grid justify-items-center gap-4">
                <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-5 text-2xl font-black text-[#081f3a]">
                  {node}
                </div>
                {index < 3 ? <ArrowDown className="text-[#16825d]" size={28} /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

