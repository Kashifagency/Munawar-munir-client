import Image from "next/image";
import Link from "next/link";
import type { Faq, Service } from "@/data/services";
import type { Area } from "@/data/areas";
import { absoluteUrl, site, whatsappHref } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";
import { BookButton, CallButton, Container, WhatsAppButton } from "./ui";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; escape "<" so content can't close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream p-3 lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={site.telHref} className="flex items-center justify-center gap-2 rounded-full bg-forest py-3 text-[15px] font-semibold text-cream">
          <Icon name="phone" className="size-4" /> Call now
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-[15px] font-semibold text-white"
        >
          <WhatsAppIcon className="size-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-cream/70">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-cream">{c.name}</span>
              ) : (
                <Link href={c.href} className="hover:text-cream">{c.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.href),
          })),
        }}
      />
    </>
  );
}

export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-line rounded-3xl border border-line bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="group px-6 sm:px-8">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-left text-[17px] font-semibold text-ink">
              {f.q}
              <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-sand text-forest transition duration-200">
                <Icon name="plus" className="size-4" />
              </span>
            </summary>
            <p className="-mt-2 pb-6 leading-relaxed text-stone">{f.a}</p>
          </details>
        ))}
      </div>
      {withSchema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}
    </>
  );
}

export function ServiceCard({ service, areaName }: { service: Service; areaName?: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="reveal group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 grid size-11 place-items-center rounded-xl bg-white/95 text-forest shadow-soft">
          <Icon name={service.icon} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium text-ink">
          {service.name}
          {areaName ? ` in ${areaName}` : ""}
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-stone">{service.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest">
          Learn more
          <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function AreaPills({ items, className = "" }: { items: Area[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`}>
      {items.map((a) => (
        <li key={a.slug}>
          <Link
            href={`/areas/${a.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink/80 transition hover:border-forest hover:text-forest"
          >
            <Icon name="pin" className="size-3.5 text-brass" />
            {a.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({
  title = "Ready to clear the space?",
  text = "Send a few photos on WhatsApp and get a fixed price in minutes. Same-day pickups available across Dubai.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <Image
            src="/images/villa-evening.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/40" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl leading-tight font-medium text-cream sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">{text}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppButton label="Book on WhatsApp" />
              <CallButton tone="dark" label={site.phoneDisplay} />
              <BookButton tone="dark" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  image: string;
  imageAlt: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image src={image} alt={imageAlt} fill fetchPriority="high" loading="eager" sizes="100vw" className="-z-10 object-cover opacity-45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden="true" />
      <Container className="py-14 sm:py-20 lg:py-24">
        <Breadcrumbs items={crumbs} />
        <div className="hero-in mt-8 max-w-3xl">
          <p className="mb-4 text-xs font-bold tracking-[0.18em] text-brass-300 uppercase">{eyebrow}</p>
          <h1 className="font-display text-4xl leading-[1.05] font-medium tracking-tight text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">{intro}</p>
        </div>
        <div className="hero-in-delay mt-9 flex flex-wrap gap-3">
          <WhatsAppButton />
          <CallButton tone="dark" />
          <BookButton tone="dark" />
        </div>
        {children}
      </Container>
    </section>
  );
}

export const trustPoints = [
  { icon: "clock", title: "Same-day slots", text: "Fast pickups across Dubai, 7 days a week." },
  { icon: "camera", title: "Photo-based pricing", text: "Fixed price upfront from a few WhatsApp photos." },
  { icon: "shield", title: "Careful handling", text: "Floors, walls and lifts protected as standard." },
  { icon: "leaf", title: "Responsible disposal", text: "Donate and recycle first; licensed disposal only." },
];

export function TrustStrip({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {trustPoints.map((t) => (
        <li key={t.title} className="flex items-start gap-4">
          <span
            className={`grid size-12 shrink-0 place-items-center rounded-2xl ${
              dark ? "bg-cream/10 text-brass-300" : "bg-forest/8 text-forest"
            }`}
          >
            <Icon name={t.icon} className="size-6" />
          </span>
          <span>
            <span className={`block font-semibold ${dark ? "text-cream" : "text-ink"}`}>{t.title}</span>
            <span className={`mt-1 block text-sm leading-relaxed ${dark ? "text-cream/65" : "text-stone"}`}>{t.text}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
