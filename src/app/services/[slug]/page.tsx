import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getService, services } from "@/data/services";
import { areas } from "@/data/areas";
import { absoluteUrl, site, whatsappHref } from "@/lib/site";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { AreaPills, CtaBand, FaqList, JsonLd, PageHero, ServiceCard } from "@/components/blocks";
import { CheckList, Container, Eyebrow } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related.map(getService).filter((s) => s !== undefined);
  const others = services.filter((s) => s.slug !== service.slug);
  const waMessage = `Hi TakeJunk, I'd like a quote for ${service.name.toLowerCase()} in Dubai.`;

  return (
    <>
      <PageHero
        eyebrow={`${service.name} · Dubai`}
        title={service.headline}
        intro={service.metaDescription}
        image={service.image}
        imageAlt={service.imageAlt}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-8">
            <div className="reveal">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="font-display text-3xl font-medium sm:text-4xl">{service.name} in Dubai</h2>
              <div className="prose-copy mt-6 text-lg leading-relaxed text-ink/80">
                {service.intro.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </div>

            <div className="reveal rounded-3xl border border-line bg-white p-7 sm:p-10">
              <h2 className="font-display text-2xl font-medium sm:text-3xl">What we remove</h2>
              <p className="mt-2 mb-7 text-stone">Not on the list? Send a photo — we can almost certainly take it.</p>
              <CheckList items={service.items} />
            </div>

            <div>
              <h2 className="reveal font-display text-2xl font-medium sm:text-3xl">Why clients choose us for {service.shortName.toLowerCase()}</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <div key={h.title} className="reveal rounded-3xl bg-sand p-7">
                    <span className="grid size-10 place-items-center rounded-xl bg-forest text-cream">
                      <Icon name="check" className="size-5" strokeWidth={2.2} />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{h.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-stone">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <h2 className="font-display text-2xl font-medium sm:text-3xl">{service.name} across Dubai</h2>
              <p className="mt-3 mb-6 text-stone">
                We provide {service.name.toLowerCase()} in the following communities. Select your area for local details.
              </p>
              <AreaPills items={areas} />
            </div>

            <div className="reveal">
              <h2 className="mb-7 font-display text-2xl font-medium sm:text-3xl">{service.name} FAQs</h2>
              <FaqList faqs={service.faqs} />
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-36">
              <div className="overflow-hidden rounded-3xl bg-forest text-cream shadow-lift">
                <div className="relative aspect-[16/9]">
                  <Image src={service.image} alt="" fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
                </div>
                <div className="p-7">
                  <h2 className="font-display text-2xl">Get a fixed quote</h2>
                  <p className="mt-2 text-cream/70">Send photos on WhatsApp — most quotes are back within minutes.</p>
                  <div className="mt-6 grid gap-3">
                    <a
                      href={whatsappHref(waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3.5 font-semibold text-white transition hover:brightness-110"
                    >
                      <WhatsAppIcon className="size-5" /> WhatsApp quote
                    </a>
                    <a
                      href={site.telHref}
                      className="flex items-center justify-center gap-2 rounded-full bg-cream py-3.5 font-semibold text-ink transition hover:bg-white"
                    >
                      <Icon name="phone" className="size-4" /> {site.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <nav aria-label="Other services" className="rounded-3xl border border-line bg-white p-6">
                <h2 className="mb-3 text-sm font-bold tracking-[0.16em] text-brass uppercase">Other services</h2>
                <ul className="divide-y divide-line">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="group flex items-center gap-3 py-3 text-[15px] font-medium hover:text-forest">
                        <Icon name={s.icon} className="size-5 text-stone group-hover:text-forest" />
                        <span className="flex-1">{s.name}</span>
                        <Icon name="arrow" className="size-4 opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-sand py-16 sm:py-24">
        <Container>
          <h2 className="reveal font-display text-3xl font-medium sm:text-4xl">Related services</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={`Book ${service.name.toLowerCase()} today`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${service.name} Dubai`,
          serviceType: service.name,
          description: service.metaDescription,
          url: absoluteUrl(`/services/${service.slug}`),
          image: absoluteUrl(service.image),
          provider: { "@id": `${site.url}/#business` },
          areaServed: areas.map((a) => ({ "@type": "Place", name: `${a.name}, Dubai` })),
        }}
      />
    </>
  );
}
