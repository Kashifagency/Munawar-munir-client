// Blog model + helpers. Each article lives in its own file in ./posts.
// Body blocks are rendered by ArticleBody. Inline syntax inside text:
// [link text](/path) and **bold**. Full URLs open in a new tab.
import type { Faq } from "./services";
import mattress from "./posts/how-to-get-rid-of-an-old-mattress-in-dubai";
import villaChecklist from "./posts/villa-move-out-clearance-checklist-dubai";
import sellDonate from "./posts/sell-donate-or-dispose-old-furniture-dubai";
import apartmentPrep from "./posts/prepare-apartment-for-furniture-removal-dubai";
import luxury from "./posts/how-to-move-luxury-furniture-without-damage";
import garage from "./posts/garage-storeroom-declutter-guide";

export type Block =
  | { h2: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { tip: string };

export type Post = {
  slug: string;
  /** H1. Contains the primary keyword. */
  title: string;
  /** <title> tag — ≤ 60 characters. */
  metaTitle: string;
  /** Meta description and card excerpt — 120–158 characters. */
  description: string;
  /** Primary keyword from docs/content/keywords-map.md. */
  keyword: string;
  category: "Guides" | "Moving out" | "Junk removal" | "Furniture care";
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** ISO date of the last meaningful content update, if any. */
  updated?: string;
  image: string;
  imageAlt: string;
  /** Service slugs linked in the "Related services" box. */
  services: string[];
  /** 3–5 one-sentence answers shown in the "Key takeaways" box. */
  takeaways: string[];
  body: Block[];
  /** 5–8 questions; rendered as an FAQ section with FAQPage schema. */
  faqs: Faq[];
};

export const posts: Post[] = [mattress, villaChecklist, sellDonate, apartmentPrep, luxury, garage];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

const strip = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");

/** Words in takeaways + body + FAQs (what the reader actually reads). */
export function wordCount(post: Post) {
  const body = post.body.flatMap((b) => ("ul" in b ? b.ul : "ol" in b ? b.ol : [Object.values(b)[0] as string]));
  const faqs = post.faqs.flatMap((f) => [f.q, f.a]);
  return strip([...post.takeaways, ...body, ...faqs].join(" ")).split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(post: Post) {
  return Math.max(1, Math.round(wordCount(post) / 220));
}

export function slugify(text: string) {
  return strip(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const FAQ_ID = "faq";

/** Table of contents: every H2, plus the FAQ section. */
export function headings(post: Post) {
  const h2s = post.body.flatMap((b) => ("h2" in b ? [{ id: slugify(b.h2), text: strip(b.h2) }] : []));
  return post.faqs.length ? [...h2s, { id: FAQ_ID, text: "Frequently asked questions" }] : h2s;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Newest first. */
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
