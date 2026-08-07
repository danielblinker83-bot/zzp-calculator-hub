import type { MetadataRoute } from "next";
import { SITE, TOOLS } from "@/lib/site";
import { ARTIKELEN } from "@/lib/kennisbank";

export default function sitemap(): MetadataRoute.Sitemap {
  const statisch = ["", "/privacybeleid", "/disclaimer", "/contact", "/over-ons", "/kennisbank"];
  const toolUrls = TOOLS.map((t) => `/${t.slug}`);
  const artikelUrls = ARTIKELEN.map((a) => `/kennisbank/${a.slug}`);
  return [...statisch, ...toolUrls, ...artikelUrls].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
