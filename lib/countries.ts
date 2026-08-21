import { europeCountries } from "@/data/europa";

export type CountryTenant = {
  code: string;
  slug: string;
  name: string;
  country: string;
  domain: string;
  locale: string;
  status: string;
  operationalStatus: string;
  year: string;
  href: string;
};

const countryTenants = europeCountries.filter(
  (country): country is CountryTenant =>
    typeof country.code === "string" &&
    typeof country.domain === "string"
);

export function getCountryTenants(): CountryTenant[] {
  return countryTenants;
}

export function resolveCountryBySlug(
  slug: string
): CountryTenant | undefined {
  return countryTenants.find(
    (country) => country.slug === slug
  );
}

export function resolveCountryByDomain(
  domain: string
): CountryTenant | undefined {
  const normalizedDomain = domain
    .toLowerCase()
    .trim()
    .replace(/^www\./, "");

  return countryTenants.find(
    (country) =>
      country.domain.toLowerCase() === normalizedDomain
  );
}

export function resolveCountryByCode(
  code: string
): CountryTenant | undefined {
  const normalizedCode = code.toUpperCase().trim();

  return countryTenants.find(
    (country) => country.code === normalizedCode
  );
}
