import Image from "next/image";
import type { Metadata } from "next";
import { CtaBand, PageHero, TrustStrip } from "@/components/blocks";
import { CheckList, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us — Dubai Furniture & Junk Removal Specialists",
  description:
    "TakeJunk Dubai is a furniture-focused removal team that also clears household junk, serving Dubai villas, apartments and offices with careful handling, upfront pricing and responsible disposal.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Furniture specialists for Dubai homes"
        intro="We started TakeJunk with one idea: furniture removal should feel as considered as the furniture itself. No rushed loading, no damaged walls, no surprise charges."
        image="/images/apartment.jpg"
        imageAlt="Styled Dubai living room with leather sofa"
        crumbs={[{ name: "About", href: "/about" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Furniture specialists who clear the junk too</h2>
            <div className="prose-copy mt-6 text-lg leading-relaxed text-ink/80">
              <p>
                Most removal companies treat a designer sofa the same as a bag of rubbish. We don&apos;t. Our crews are
                trained specifically in dismantling, wrapping and carrying furniture — from flat-pack wardrobes to
                marble dining tables — through Dubai&apos;s towers, townhouses and villas.
              </p>
              <p>
                We quote from photos so you know the price upfront, we turn up when we say we will, and we leave your
                space clean — taking the boxes, appliances and clutter along with the furniture. Whatever we collect is donated, recycled or responsibly disposed of.
              </p>
            </div>
            <div className="mt-8">
              <CheckList
                items={[
                  "Uniformed, trained crews",
                  "Fixed, upfront quotes",
                  "Dismantling included",
                  "Floor & wall protection",
                  "7 days a week",
                  "Donation & recycling first",
                ]}
              />
            </div>
          </div>
          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src="/images/bed.jpg" alt="Elegant bedroom with upholstered bed" fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-14">
        <Container>
          <TrustStrip />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
