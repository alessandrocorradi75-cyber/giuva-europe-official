import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { italyPrograms } from "@/data/italia";

export function ItalyProgramCards({ limit }: { limit?: number }) {
  const programs = typeof limit === "number" ? italyPrograms.slice(0, limit) : italyPrograms;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {programs.map((program) => {
        const Icon = program.icon;
        return (
          <article key={program.slug} className="card interactive-card discipline-card flex h-full flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${program.accent} text-white shadow-sm`}>
                <Icon size={27} />
              </div>
              <span className="status-pill">programma</span>
            </div>
            <h2 className="mt-7 text-2xl font-black leading-tight text-[#081f3a]">{program.name}</h2>
            <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{program.description}</p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.1em] text-slate-600">
                {program.color}
              </span>
              <Link href={`/programmi#${program.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-[#16825d]">
                Scopri di piÃ¹
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

