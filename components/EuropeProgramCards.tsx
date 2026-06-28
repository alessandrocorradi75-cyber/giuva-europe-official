import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { europeProgrammes } from "@/data/europa";

export function EuropeProgramCards({ limit }: { limit?: number }) {
  const programmes = typeof limit === "number" ? europeProgrammes.slice(0, limit) : europeProgrammes;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {programmes.map((programme) => {
        const Icon = programme.icon;
        return (
          <article key={programme.slug} className="card interactive-card discipline-card flex h-full flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${programme.accent} text-white shadow-sm`}>
                <Icon size={27} aria-hidden="true" />
              </div>
              <span className="status-pill">programme</span>
            </div>
            <h2 className="mt-7 text-2xl font-black leading-tight text-[#081f3a]">{programme.name}</h2>
            <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{programme.description}</p>
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-slate-600">{programme.color}</span>
              <Link href={`/programmes#${programme.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-[#16825d]" aria-label={`Discover ${programme.name}`}>
                Discover
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
