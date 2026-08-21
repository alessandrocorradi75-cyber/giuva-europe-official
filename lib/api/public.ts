export const API_BASE_URL =
  process.env.GIUVA_API_BASE_URL || "http://127.0.0.1:8100/api/v1";

export type PublicProject = {
  id: string;
  code: string;
  title: string;
  description: string | null;
  status: string;
  country_code: string | null;
  city: string | null;
  starts_at: string | null;
  ends_at: string | null;
  featured: boolean;
};

export type PublicDiscipline = {
  id: string;
  code: string;
  name: string;
  description: string | null;
  country_availability: string[];
  featured: boolean;
};

export type PublicEvent = {
  id: string;
  title: string;
  description: string | null;
  event_type: string;
  status: string;
  starts_at: string;
  ends_at: string | null;
  country_code: string | null;
  city: string | null;
  location: string | null;
  max_participants: number | null;
  featured: boolean;
};

async function fetchPublic<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `GIUVA Public API error ${response.status}: ${path}`
    );
  }

  return response.json() as Promise<T>;
}

export async function fetchProjects(
  domain: string,
  featuredOnly = false
): Promise<PublicProject[]> {
  const query = featuredOnly ? "?featured_only=true" : "";

  return fetchPublic<PublicProject[]>(
    `/public/platform/${encodeURIComponent(domain)}/projects${query}`
  );
}

export async function fetchDisciplines(
  domain: string,
  featuredOnly = false
): Promise<PublicDiscipline[]> {
  const query = featuredOnly ? "?featured_only=true" : "";

  return fetchPublic<PublicDiscipline[]>(
    `/public/platform/${encodeURIComponent(domain)}/disciplines${query}`
  );
}

export async function fetchEvents(
  domain: string,
  options: {
    featuredOnly?: boolean;
    upcomingOnly?: boolean;
  } = {}
): Promise<PublicEvent[]> {
  const params = new URLSearchParams();

  if (options.featuredOnly) {
    params.set("featured_only", "true");
  }

  if (options.upcomingOnly) {
    params.set("upcoming_only", "true");
  }

  const query = params.toString();

  return fetchPublic<PublicEvent[]>(
    `/public/platform/${encodeURIComponent(domain)}/events${
      query ? `?${query}` : ""
    }`
  );
}
