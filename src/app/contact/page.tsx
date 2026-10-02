import type { Metadata } from "next";
import { site, whatsappHref } from "@/lib/site";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { QuoteForm } from "@/components/QuoteForm";
import { Breadcrumbs } from "@/components/blocks";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact & Free Quote — Furniture & Junk Removal Dubai",
  description: `Get a free, fixed furniture or junk removal quote in Dubai. Call or WhatsApp ${site.phoneDisplay} or send your details using our quick quote form.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative bg-ink pb-20 sm:pb-28">
      <Container className="pt-14 sm:pt-20">
        <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
        <div className="mt-10 grid items-start gap-12 lg:grid-cols-12">
          <div className="hero-in lg:col-span-5">
            <p className="mb-4 text-xs font-bold tracking-[0.18em] text-brass-300 uppercase">Contact</p>
            <h1 className="font-display text-4xl leading-[1.05] font-medium text-cream sm:text-6xl">
              Get your free quote
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              The fastest way is WhatsApp — send photos of the furniture, your area and preferred time, and we&apos;ll
              reply with a fixed price.
            </p>
            <div className="mt-10 space-y-4">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-5 text-cream transition hover:bg-cream/10"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-whatsapp text-white">
                  <WhatsAppIcon className="size-6" />
                </span>
                <span>
                  <span className="block text-sm text-cream/60">WhatsApp</span>
                  <span className="block text-lg font-semibold">{site.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={site.telHref}
                className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-5 text-cream transition hover:bg-cream/10"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-cream text-forest">
                  <Icon name="phone" className="size-6" />
                </span>
                <span>
                  <span className="block text-sm text-cream/60">Call us</span>
                  <span className="block text-lg font-semibold">{site.phoneDisplay}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 p-5 text-cream">
                <span className="grid size-12 place-items-center rounded-xl bg-cream/10 text-brass-300">
                  <Icon name="clock" className="size-6" />
                </span>
                <span>
                  <span className="block text-sm text-cream/60">Hours</span>
                  <span className="block text-lg font-semibold">{site.hours}</span>
                </span>
              </div>
            </div>
          </div>
          <div id="quote" className="hero-in-delay scroll-mt-32 rounded-[2rem] bg-white p-6 shadow-lift sm:p-10 lg:col-span-7">
            <h2 className="mb-6 font-display text-2xl font-medium">Quick quote request</h2>
            <QuoteForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
