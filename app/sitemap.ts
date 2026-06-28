import type { MetadataRoute } from "next";

const baseUrl = "https://www.giuva.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/programmes", "/countries", "/community", "/projects", "/partners", "/news", "/contact", "/transparency", "/governance"];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
