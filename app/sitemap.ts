import type { MetadataRoute } from "next";
import { SITE, TOOLS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const statisch = ["", "/privacybeleid", "/disclaimer", "/contact", "/over-ons"];
  const toolUrls = TOOLS.map((t) => `/${t.slug}`);
  return [...statisch, ...toolUrls].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
