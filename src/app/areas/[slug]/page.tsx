import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { areas, getArea, propertyTypeLabel, type Area, type PropertyType } from "@/data/areas";
import { getService, services } from "@/data/services";
import { absoluteUrl, site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { AreaPills, CtaBand, FaqList, JsonLd, PageHero, ServiceCard } from "@/components/blocks";
import { CheckList, Container, Eyebrow } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

const heroImage: Record<PropertyType, { src: string; alt: string }> = {
  villa: { src: "/images/villa-evening.jpg", alt: "Contemporary villa exterior at dusk in a Dubai community" },
  apartment: { src: "/images/hero-living.jpg", alt: "High-rise apartment living room in Dubai" },
  mixed: { src: "/images/villa.jpg", alt: "Modern Dubai residence with pool" },
  commercial: { src: "/images/office.jpg", alt: "Bright office space with lounge furniture" },
};

const accessNotes: Record<PropertyType, string[]> = {
  villa: [
    "Gate passes and community access arranged in advance",
    "Trucks positioned to avoid blocking neighbours",
    "Gardens, terraces and garages cleared",
    "Staircases and double-height spaces handled safely",
  ],
  apartment: [
    "Service lift booked and protected",
    "Loading bay and basement access coordinated",
    "Corridors and door frames guarded",
    "Concierge and security procedures followed",
  ],
  mixed: [
    "Crew size matched to villa or apartment",
    "Gate passes and lift bookings coordinated",
    "Floors, walls and lifts protected",
    "Garden, balcony and storeroom items included",
  ],
  commercial: [
    "After-hours and weekend slots",
    "Loading bay and service lift bookings",
    "Building management paperwork supported",
    "Phased clearances to avoid disruption",
  ],
};

function areaFaqs(area: Area) {
  return [
    {
      q: `Do you offer same-day furniture and junk removal in ${area.name}?`,
      a: `Yes — we regularly have same-day and next-day slots in ${area.name}. WhatsApp us photos of the items and your preferred time and we'll confirm availability straight away.`,
    },
    {
      q: `How much does furniture removal cost in ${area.name}?`,
      a: `Price depends on the items, access and whether dismantling is needed. We give a fixed quote upfront from photos, so you'll know the exact cost for your ${area.name} property before we arrive.`,
    },
    area.propertyType === "apartment" || area.propertyType === "commercial"
      ? {
          q: `Can you work with my building's lift and loading bay rules in ${area.name}?`,
          a: `Yes. We work within booked service-lift slots and loading-bay times, and follow concierge and security procedures common in ${area.name} towers.`,
        }
      : {
          q: `Can you clear a full villa in ${area.name}?`,
          a: `Yes. Full villa clearances in ${area.name} — bedrooms, living and majlis areas, maid's room, garden and garage — are usually completed in a single day.`,
        },
    {
      q: `What happens to furniture collected in ${area.name}?`,
      a: "Usable furniture is donated or resold, recyclable materials are separated where facilities allow, and the remainder goes to licensed disposal facilities.",
    },
  ];
}

export async function generateMetadata({ params }: PageProps<"/areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const title = `Furniture & Junk Removal ${area.name} | Same-Day Pickup`;
  const description = `Furniture and junk removal in ${area.name}, Dubai — sofas, beds, mattresses, wardrobes, appliances, household junk and full ${
    area.propertyType === "villa" ? "villa clearances" : "home and office clearances"
  }. Fixed quotes from photos, same-day slots. Call or WhatsApp ${site.phoneDisplay}.`;
  return {
    title: { absolute: `${title} | TakeJunk` },
    description,
    alternates: { canonical: `/areas/${area.slug}` },
    openGraph: { title, description, url: `/areas/${area.slug}`, images: [heroImage[area.propertyType].src] },
  };
}

export default async function AreaPage({ params }: PageProps<"/areas/[slug]">) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const popular = area.popular.map(getService).filter((s) => s !== undefined);
  const rest = services.filter((s) => !area.popular.includes(s.slug));
  const nearby = area.nearby.map(getArea).filter((a) => a !== undefined);
  const faqs = areaFaqs(area);
  const hero = heroImage[area.propertyType];

  return (
    <>
      <PageHero
        eyebrow={`${propertyTypeLabel[area.propertyType]} · Dubai`}
        title={<>Furniture &amp; junk removal in {area.name}</>}
        intro={`${area.summary} Fast, careful furniture and junk removal, clearance and pickup for ${area.name} residents and businesses — with fixed quotes from photos.`}
        image={hero.src}
        imageAlt={hero.alt}
        crumbs={[
          { name: "Areas", href: "/areas" },
          { name: area.name, href: `/areas/${area.slug}` },
        ]}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <Eyebrow>Local service</Eyebrow>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Your {area.name} furniture &amp; junk removal team</h2>
            <div className="prose-copy mt-6 text-lg leading-relaxed text-ink/80">
              <p>{area.body}</p>
              <p>
                Whether it&apos;s a single sofa, a bedroom refresh, a garage full of junk or a complete clearance, we quote upfront from photos,
                dismantle on site, protect your property throughout and leave the space clear. Usable pieces are donated
                where possible and everything else is disposed of responsibly.
              </p>
            </div>
          </div>
          <div className="reveal lg:col-span-5">
            <div className="rounded-3xl bg-sand p-7 sm:p-9">
              <h3 className="font-display text-2xl font-medium">How we work in {area.name}</h3>
              <div className="mt-6">
                <CheckList items={accessNotes[area.propertyType]} columns={1} />
              </div>
              <div className="mt-7 flex items-center gap-3 border-t border-line pt-6 text-sm text-stone">
                <Icon name="clock" className="size-5 text-forest" />
                {site.hours}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="reveal font-display text-3xl font-medium sm:text-4xl">Most requested in {area.name}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((s) => (
              <ServiceCard key={s.slug} service={s} areaName={area.name} />
            ))}
          </div>
          <h3 className="mt-14 mb-5 text-lg font-semibold">More services available in {area.name}</h3>
          <ul className="flex flex-wrap gap-2.5">
            {rest.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium hover:border-forest hover:text-forest"
                >
                  <Icon name={s.icon} className="size-4 text-brass" />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="reveal font-display text-3xl font-medium sm:text-4xl">{area.name} FAQs</h2>
            <div className="reveal mt-10">
              <h3 className="mb-4 text-sm font-bold tracking-[0.16em] text-brass uppercase">Nearby areas we cover</h3>
              <AreaPills items={nearby} />
              <Link href="/areas" className="mt-6 inline-flex items-center gap-2 font-semibold text-forest">
                All service areas <Icon name="arrow" className="size-4" />
              </Link>
            </div>
          </div>
          <div className="reveal lg:col-span-7">
            <FaqList faqs={faqs} />
          </div>
        </Container>
      </section>

      <section id="quote" className="scroll-mt-28 bg-sand py-16 sm:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Free quote</Eyebrow>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Get a quote for your {area.name} property</h2>
            <p className="mt-4 text-lg leading-relaxed text-stone">
              Your area is pre-selected. Add the items and we&apos;ll pick it up on WhatsApp.
            </p>
          </div>
          <div className="rounded-[2rem] border border-line bg-white p-6 shadow-lift sm:p-10 lg:col-span-7">
            <QuoteForm defaultArea={area.name} />
          </div>
        </Container>
      </section>

      <CtaBand title={`Furniture & junk removal in ${area.name}, today`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Furniture & Junk Removal in ${area.name}`,
          serviceType: "Furniture Removal",
          url: absoluteUrl(`/areas/${area.slug}`),
          provider: { "@id": `${site.url}/#business` },
          areaServed: { "@type": "Place", name: `${area.name}, Dubai, United Arab Emirates` },
        }}
      />
    </>
  );
}
