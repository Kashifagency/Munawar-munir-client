import type { Metadata } from "next";
import { site } from "./site";

const DEFAULT_IMAGE = { url: "/images/hero-living.jpg", alt: "Premium Dubai living room" };

/**
 * Full metadata for a page. Next.js replaces (not merges) a parent's openGraph
 * object when a page sets its own, so every page goes through here to keep
 * site_name, locale, url and images consistent.
 *
 * `title` is used as-is in <title>; keep it ≤ 60 characters.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string };
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AE",
      siteName: site.name,
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
