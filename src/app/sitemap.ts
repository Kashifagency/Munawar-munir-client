import type { MetadataRoute } from "next";
import { areas } from "@/data/areas";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/areas"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...areas.map((a) => ({
      url: absoluteUrl(`/areas/${a.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
