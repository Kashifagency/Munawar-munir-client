import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { areas, propertyTypeLabel } from "@/data/areas";
import { Icon } from "@/components/Icon";
import { CtaBand, PageHero } from "@/components/blocks";
import { Container } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Areas We Cover | Furniture & Junk Removal Dubai",
  description:
    "Furniture and junk removal across Dubai: Palm Jumeirah, Emirates Hills, Arabian Ranches, Dubai Hills, Downtown, Marina, Business Bay, JVC, JLT and more.",
  path: "/areas",
  image: { url: "/images/dubai.jpg", alt: "Aerial view of the Dubai coastline" },
});

const groups = [
  { title: "Villa communities", filter: (t: string) => t === "villa" },
  { title: "Villas & apartments", filter: (t: string) => t === "mixed" },
  { title: "Apartments, towers & business districts", filter: (t: string) => t === "apartment" || t === "commercial" },
];

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Furniture & junk removal across Dubai"
        intro="Our crews cover Dubai's villa communities, waterfront towers and business districts every day. Choose your area for local details, or message us if you don't see it listed."
        image="/images/dubai.jpg"
        imageAlt="Aerial view of the Dubai coastline"
        crumbs={[{ name: "Areas", href: "/areas" }]}
      />
      <section className="py-16 sm:py-24">
        <Container className="space-y-16">
          {groups.map((g) => {
            const list = areas.filter((a) => g.filter(a.propertyType));
            return (
              <div key={g.title}>
                <h2 className="reveal font-display text-2xl font-medium sm:text-3xl">{g.title}</h2>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((a) => (
                    <li key={a.slug} className="reveal">
                      <Link
                        href={`/areas/${a.slug}`}
                        className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-forest/40 hover:shadow-soft"
                      >
                        <span className="flex items-center justify-between">
                          <span className="flex items-center gap-2 font-semibold text-ink">
                            <Icon name="pin" className="size-4 text-brass" />
                            {a.name}
                          </span>
                          <Icon name="arrow" className="size-4 text-stone transition group-hover:translate-x-1 group-hover:text-forest" />
                        </span>
                        <span className="mt-2 text-sm leading-relaxed text-stone">{a.summary}</span>
                        <span className="mt-4 text-xs font-semibold tracking-wide text-forest/70 uppercase">
                          {propertyTypeLabel[a.propertyType]}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </section>
      <CtaBand title="Don't see your area?" text="We cover most of Dubai's residential communities. Message us your location and we'll confirm in minutes." />
    </>
  );
}
