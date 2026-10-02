import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { areas } from "@/data/areas";
import { furnitureServices, junkServices } from "@/data/services";
import { generalFaqs } from "@/data/faqs";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { BookingForm } from "@/components/BookingForm";
import { AreaPills, FaqList, ServiceCard, TrustStrip } from "@/components/blocks";
import { CallButton, CheckList, Container, Eyebrow, BookButton, SectionHeading, WhatsAppButton } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Furniture & Junk Removal Dubai | Same-Day Pickup | TakeJunk",
  description: `Furniture & junk removal in Dubai: sofas, beds, wardrobes, appliances and full villa clearances. Same-day pickup, fixed prices. Call ${site.phoneDisplay}.`,
  path: "/",
});

const villaAreas = areas.filter((a) => a.propertyType === "villa");

const steps = [
  { icon: "camera", title: "Send photos", text: "WhatsApp a few pictures of the furniture, your area and access details." },
  { icon: "check", title: "Get a fixed price", text: "We reply with a clear, all-inclusive price — usually within minutes." },
  { icon: "calendar", title: "Pick a slot", text: "Same-day, next-day or a time that suits you, 7 days a week." },
  { icon: "truck", title: "We clear it", text: "Our crew dismantles, protects, lifts and removes. Space left swept." },
];

const reasons = [
  { icon: "sofa", title: "Furniture specialists", text: "Furniture is our core skill, so our crews know how to dismantle, wrap and carry every type of piece — and clear the junk around it too." },
  { icon: "tools", title: "Dismantling included", text: "Beds, wardrobes, sectionals, dining tables and workstations taken apart on site at no extra charge." },
  { icon: "shield", title: "Home protection", text: "Blankets, corner guards and floor runners protect marble, parquet, walls and lift interiors." },
  { icon: "pin", title: "Community-savvy", text: "We work within gate-pass, lift-booking and working-hour rules across Dubai's towers and villa communities." },
  { icon: "camera", title: "Transparent pricing", text: "Fixed prices from photos. The price we give is what you pay — no surprises on the day." },
  { icon: "leaf", title: "Eco-conscious", text: "Usable furniture is donated or resold, materials are recycled where possible, and only the rest is disposed of." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/hero-living.jpg"
          alt="Elegant Dubai living room with sofa and designer furniture"
          fill
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/20" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink/60 to-transparent" aria-hidden="true" />

        <Container className="grid items-center gap-12 pt-16 pb-28 sm:pt-24 lg:grid-cols-12 lg:pt-28 lg:pb-36">
          <div className="hero-in lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-ink/40 px-4 py-1.5 text-[13px] font-medium text-cream/85">
              <span className="size-2 rounded-full bg-whatsapp" aria-hidden="true" />
              Same-day pickups available across Dubai
            </p>
            <h1 className="font-display text-[2.6rem] leading-[1.02] font-medium tracking-tight text-cream sm:text-6xl lg:text-7xl">
              Furniture &amp; junk removal in Dubai,{" "}
              <em className="font-normal text-brass-300">handled with care.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75 sm:text-xl">
              Sofas, beds, wardrobes, appliances, household junk and full villa clearances — dismantled, lifted and cleared by a
              careful crew. Fixed prices from photos, responsible disposal, 7 days a week.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppButton label="WhatsApp us" />
              <CallButton tone="dark" label={`Call ${site.phoneDisplay}`} />
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-cream/75">
              {["Upfront, fixed prices", "Furniture + junk in one visit", "Villas, apartments & offices"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="size-4 text-brass-300" strokeWidth={2.5} />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-in-delay hidden lg:col-span-5 lg:block">
            <div className="ml-auto max-w-sm rounded-3xl border border-cream/10 bg-ink/80 p-7 text-cream shadow-lift">
              <p className="text-xs font-bold tracking-[0.18em] text-brass-300 uppercase">Book in minutes</p>
              <ol className="mt-5 space-y-5">
                {steps.slice(0, 3).map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cream/10 font-display text-brass-300">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{s.title}</span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-cream/65">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Link
                href="/contact#book"
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-cream py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Book now <Icon name="arrow" className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section aria-label="Why clients choose us" className="relative z-10 -mt-14">
        <Container>
          <div className="rounded-3xl border border-line bg-white p-7 shadow-lift sm:p-9">
            <TrustStrip />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our services"
              title="Every kind of furniture, removed properly"
              intro="From a single armchair to a six-bedroom villa, we specialise in furniture — the bulky, heavy and delicate pieces that need real know-how to move — and clear the junk that comes with it."
            />
            <Link href="/services" className="reveal inline-flex shrink-0 items-center gap-2 font-semibold text-forest hover:gap-3 transition-all">
              View all services <Icon name="arrow" className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {furnitureServices.slice(0, 8).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {furnitureServices.slice(8).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="reveal group relative flex min-h-64 overflow-hidden rounded-3xl"
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 92vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" aria-hidden="true" />
                <div className="relative mt-auto p-7">
                  <span className="mb-4 grid size-11 place-items-center rounded-xl bg-white/95 text-forest">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="font-display text-2xl text-cream">{s.name}</h3>
                  <p className="mt-1.5 text-cream/75">{s.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Junk removal */}
          <div id="junk-removal" className="reveal mt-16 grid scroll-mt-28 gap-10 rounded-[2rem] border border-line bg-white p-6 shadow-soft sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <Eyebrow>Junk removal too</Eyebrow>
              <h3 className="font-display text-3xl leading-tight font-medium sm:text-4xl">Clearing more than just furniture</h3>
              <p className="mt-4 leading-relaxed text-stone">
                Household clutter, old appliances, boxes and garage junk — cleared in the same visit as your furniture,
                and sorted for donation and recycling.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/services/junk-removal"
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-semibold text-cream transition hover:bg-forest-600"
                >
                  Junk removal <Icon name="arrow" className="size-4" />
                </Link>
                <WhatsAppButton label="WhatsApp" message="Hi TakeJunk, I'd like to book junk removal in Dubai." />
              </div>
            </div>
            <ul className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
              {junkServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 92vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 grid size-10 place-items-center rounded-xl bg-white/95 text-forest shadow-soft">
                        <Icon name={s.icon} className="size-[18px]" />
                      </span>
                    </div>
                    <h4 className="mt-4 flex items-center gap-2 font-display text-lg font-medium text-ink">
                      {s.name}
                      <Icon name="arrow" className="size-4 text-forest transition group-hover:translate-x-1" />
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{s.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Villa & residential focus */}
      <section className="bg-sand py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/villa-garden.jpg"
                alt="Family villa with garden and pool in a Dubai community"
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-2 -bottom-6 max-w-[15rem] rounded-2xl bg-white p-5 shadow-lift sm:-right-6">
              <p className="font-display text-3xl font-medium text-forest">1 day</p>
              <p className="mt-1 text-sm leading-snug text-stone">to clear most 3–5 bedroom villas, garden and garage included.</p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Villas & residences"
              title="Built for Dubai villas and family homes"
              intro="Villa clearances are our home ground. Multiple bedrooms, majlis, maid's room, terraces and garages — planned in advance and cleared in a single, organised visit."
            />
            <div className="reveal mt-8">
              <CheckList
                items={[
                  "End-of-tenancy and move-out clearances",
                  "Pre-renovation room-by-room clear-outs",
                  "Landlord and holiday-home turnovers",
                  "Garden, pool and terrace furniture",
                  "Keep / donate / dispose sorting",
                  "Gate passes and community rules handled",
                ]}
              />
            </div>
            <div className="reveal mt-9">
              <p className="mb-3 text-sm font-semibold text-ink">Villa communities we serve</p>
              <AreaPills items={villaAreas.slice(0, 10)} />
            </div>
            <div className="reveal mt-9 flex flex-wrap gap-3">
              <Link
                href="/services/villa-furniture-clearance"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-semibold text-cream transition hover:bg-forest-600"
              >
                Villa clearance service <Icon name="arrow" className="size-4" />
              </Link>
              <WhatsAppButton label="Plan my clearance" message="Hi TakeJunk, I'd like to book a full villa furniture clearance." />
            </div>
          </div>
        </Container>
      </section>

      {/* Luxury */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-cream sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="White-glove service"
              title={<>Luxury furniture deserves <em className="font-normal text-brass-300">museum-grade</em> care</>}
              intro="Designer sofas, marble dining tables, lacquered cabinetry and statement pieces — handled by experienced crews with premium wrapping and a slower, more deliberate process."
            />
            <div className="reveal mt-8">
              <CheckList
                tone="dark"
                columns={1}
                items={[
                  "Soft-wrap, corner guards and stone-safe carrying",
                  "Discreet, uniformed crews for villas and penthouses",
                  "Deliver to consignment, storage or a new home",
                  "Photo documentation of every piece on request",
                ]}
              />
            </div>
            <div className="reveal mt-9 flex flex-wrap gap-3">
              <Link
                href="/services/luxury-furniture-removal"
                className="inline-flex items-center gap-2 rounded-full bg-brass-300 px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-cream"
              >
                Explore luxury removals <Icon name="arrow" className="size-4" />
              </Link>
              <CallButton tone="dark" />
            </div>
          </div>
          <div className="reveal grid grid-cols-6 gap-4 lg:col-span-7">
            <div className="relative col-span-4 aspect-[4/5] overflow-hidden rounded-3xl">
              <Image src="/images/luxury.jpg" alt="Luxury bedroom with tufted bed and gold chandelier" fill sizes="(min-width: 1024px) 38vw, 60vw" className="object-cover" />
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              <div className="relative flex-1 overflow-hidden rounded-3xl">
                <Image src="/images/dining.jpg" alt="Designer dining set with velvet chairs" fill sizes="(min-width: 1024px) 18vw, 30vw" className="object-cover" />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-3xl">
                <Image src="/images/apartment.jpg" alt="Styled living room with leather sofa and accent chairs" fill sizes="(min-width: 1024px) 18vw, 30vw" className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="From photo to empty room in four steps"
            intro="No site visits, no guesswork. Most clients book within minutes of their first message."
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal relative rounded-3xl border border-line bg-white p-7">
                <span className="font-display text-5xl font-light text-brass/40">0{i + 1}</span>
                <span className="mt-4 grid size-12 place-items-center rounded-2xl bg-forest text-cream">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-stone">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Why us */}
      <section className="bg-white py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-36">
              <SectionHeading
                eyebrow="Why TakeJunk"
                title="Furniture specialists who clear the junk too"
                intro="Furniture is heavy, awkward and often valuable. It deserves a team that knows how to handle it — and that can take the clutter away in the same trip."
              />
              <div className="reveal mt-8">
                <BookButton />
              </div>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((r) => (
              <div key={r.title} className="reveal rounded-3xl border border-line bg-cream p-7 transition hover:border-brass/50">
                <span className="grid size-12 place-items-center rounded-2xl bg-white text-forest shadow-soft">
                  <Icon name={r.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-stone">{r.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Areas */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Areas we cover"
              title="Across Dubai's homes, towers and villa communities"
              intro="From Palm Jumeirah to Arabian Ranches, our crews are on the road every day. Don't see your community? Message us — we likely cover it."
            />
            <div className="reveal relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl">
              <Image src="/images/dubai.jpg" alt="Aerial view of the Dubai coastline" fill sizes="(min-width: 1024px) 38vw, 92vw" className="object-cover" />
            </div>
          </div>
          <div className="reveal lg:col-span-7 lg:pt-4">
            <AreaPills items={areas} />
            <Link href="/areas" className="mt-8 inline-flex items-center gap-2 font-semibold text-forest">
              See all service areas <Icon name="arrow" className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Responsible disposal */}
      <section className="bg-forest py-20 text-cream sm:py-24">
        <Container>
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Responsible by default"
            title="Your old furniture and junk don't end up just anywhere"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Donate & reuse", d: "Furniture in good condition is passed to donation and resale partners to find a second home." },
              { n: "02", t: "Recycle", d: "Timber, metal, foam and fabrics are separated for recycling wherever facilities allow." },
              { n: "03", t: "Dispose responsibly", d: "What remains goes only to licensed disposal facilities. No dumping, ever." },
            ].map((x) => (
              <div key={x.n} className="reveal rounded-3xl border border-cream/10 bg-cream/5 p-8">
                <span className="font-display text-sm text-brass-300">{x.n}</span>
                <h3 className="mt-3 font-display text-2xl">{x.t}</h3>
                <p className="mt-3 leading-relaxed text-cream/70">{x.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQs"
              title="Questions, answered"
              intro="Can't find what you're looking for? We're a WhatsApp message away."
            />
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <WhatsAppButton label="Ask on WhatsApp" />
            </div>
          </div>
          <div className="reveal lg:col-span-8">
            <FaqList faqs={generalFaqs} />
          </div>
        </Container>
      </section>

      {/* Booking */}
      <section id="book" className="scroll-mt-28 bg-sand py-20 sm:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Book now</Eyebrow>
            <h2 className="font-display text-3xl leading-tight font-medium sm:text-5xl">Tell us what needs to go</h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              Fill in the basics and we&apos;ll continue on WhatsApp — add photos there for a fixed price. Prefer to
              talk? Call us directly.
            </p>
            <div className="mt-8 space-y-4">
              <a href={site.telHref} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft transition hover:shadow-lift">
                <span className="grid size-12 place-items-center rounded-xl bg-forest text-cream">
                  <Icon name="phone" />
                </span>
                <span>
                  <span className="block text-sm text-stone">Call or WhatsApp</span>
                  <span className="block text-lg font-semibold">{site.phoneDisplay}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft">
                <span className="grid size-12 place-items-center rounded-xl bg-forest text-cream">
                  <Icon name="clock" />
                </span>
                <span>
                  <span className="block text-sm text-stone">Working hours</span>
                  <span className="block text-lg font-semibold">{site.hours}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-line bg-white p-6 shadow-lift sm:p-10 lg:col-span-7">
            <BookingForm />
          </div>
        </Container>
      </section>
    </>
  );
}
