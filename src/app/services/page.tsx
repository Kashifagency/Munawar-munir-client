import type { Metadata } from "next";
import { furnitureServices, junkServices } from "@/data/services";
import { CtaBand, PageHero, ServiceCard, TrustStrip } from "@/components/blocks";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Furniture & Junk Removal Services in Dubai",
  description:
    "All our Dubai furniture and junk removal services: sofa, mattress, bed, wardrobe and dining removal, luxury and office furniture, villa clearance, junk removal, appliance removal and garage clear-outs.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Furniture & junk removal services in Dubai"
        intro="Specialist services for every kind of furniture — plus the household junk, appliances and garage clutter that come with it. Fixed prices, dismantling included, responsible disposal."
        image="/images/living-bright.jpg"
        imageAlt="Bright living room with tufted sofa and coffee table"
        crumbs={[{ name: "Services", href: "/services" }]}
      />
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Furniture" title="Furniture removal" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {furnitureServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-sand py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Junk"
            title="Junk removal"
            intro="Book on its own or add it to any furniture job — one visit, one price."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {junkServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
      <section className="border-b border-line bg-white py-14">
        <Container>
          <TrustStrip />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
