import CountryHome from "@/components/CountryHome";
import {
  fetchDisciplines,
  fetchEvents,
  fetchProjects,
} from "@/lib/api/public";
import { resolveCountryBySlug } from "@/lib/countries";
import { notFound } from "next/navigation";

export default async function ItalyPage() {
  const tenant = resolveCountryBySlug("italy");

  if (!tenant) {
    notFound();
  }

  const [projects, disciplines, events] = await Promise.all([
    fetchProjects(tenant.domain),
    fetchDisciplines(tenant.domain),
    fetchEvents(tenant.domain, { upcomingOnly: true }),
  ]);

  return (
    <CountryHome
      tenant={tenant}
      projects={projects}
      disciplines={disciplines}
      events={events}
    />
  );
}
