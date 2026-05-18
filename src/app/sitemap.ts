import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const routes = ["/", "/servicios", "/nosotros", "/contacto"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
