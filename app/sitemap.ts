import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

const routes = ["", "/privacidade", "/cookies", "/termos"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-24T00:00:00-03:00");

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.3,
  }));
}
