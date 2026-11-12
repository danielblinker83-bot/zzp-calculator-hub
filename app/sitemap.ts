import type { MetadataRoute } from "next";
import { SITE, TOOLS } from "@/lib/site";
import { ARTIKELEN } from "@/lib/kennisbank";

export default function sitemap(): MetadataRoute.Sitemap {
  const statisch = ["", "/privacybeleid", "/disclaimer", "/contact", "/over-ons", "/kennisbank"];
  const toolUrls = TOOLS.map((t) => `/${t.slug}`);
  const basis: MetadataRoute.Sitemap = [...statisch, ...toolUrls].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  const artikelen: MetadataRoute.Sitemap = ARTIKELEN.map((artikel) => ({
    url: `${SITE.url}/kennisbank/${artikel.slug}`,
    lastModified: artikel.bijgewerkt ?? artikel.datum,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...basis, ...artikelen];
}
