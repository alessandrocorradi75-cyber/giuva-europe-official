import type {
  PublicDiscipline,
  PublicEvent,
  PublicProject,
} from "@/lib/api/public";
import type { CountryTenant } from "@/lib/countries";

type CountryHomeProps = {
  tenant: CountryTenant;
  projects: PublicProject[];
  disciplines: PublicDiscipline[];
  events: PublicEvent[];
};

export default function CountryHome({
  tenant,
  projects,
  disciplines,
  events,
}: CountryHomeProps) {
  return (
    <main className="bg-[#f6f8fb] text-[#102033]">
      <section className="bg-[#071f3d] px-5 py-20 text-white">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-xs font-black uppercase tracking-[.16em] text-[#ffd84d]">
            {tenant.name}
          </p>

          <h1 className="mt-3 text-[clamp(3rem,6vw,5.5rem)] font-black leading-[.95]">
            Local action.
            <span className="block text-[#ffd84d]">
              One European community.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Discover GIUVA projects, disciplines and upcoming activities in {tenant.country}.
          </p>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-4xl font-black text-[#071f3d]">
              Projects in {tenant.country}
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-2xl border border-slate-200 bg-[#f6f8fb] p-6"
                >
                  <h3 className="text-2xl font-black text-[#071f3d]">
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                  )}

                  <p className="mt-4 text-sm font-bold text-slate-500">
                    {[project.city, project.country_code]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {disciplines.length > 0 && (
        <section className="px-5 py-16">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-4xl font-black text-[#071f3d]">
              GIUVA disciplines
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {disciplines.map((discipline) => (
                <article
                  key={discipline.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-2xl font-black text-[#071f3d]">
                    {discipline.name}
                  </h3>

                  {discipline.description && (
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {discipline.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {events.length > 0 && (
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-[1180px]">
            <h2 className="text-4xl font-black text-[#071f3d]">
              Upcoming events
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event.id}
                  className="rounded-2xl border border-slate-200 bg-[#f6f8fb] p-6"
                >
                  <h3 className="text-2xl font-black text-[#071f3d]">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-sm font-bold text-slate-500">
                    {[event.city, event.country_code]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
