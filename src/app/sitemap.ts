import type { MetadataRoute } from "next";

import { catalogServices } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  "/",
  "/servicios",
  "/trabajos",
  "/nosotros",
  "/contacto",
  "/aviso-de-privacidad",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: (path === "/" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: path === "/" ? 1 : path === "/servicios" ? 0.9 : 0.8,
  }));

  const servicePages = catalogServices.map((service) => ({
    url: `${SITE_URL}/servicios/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...pages, ...servicePages];
}
