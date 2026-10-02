import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CtaBand, PageHero, TrustStrip } from "@/components/blocks";
import { CheckList, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "About TakeJunk | Furniture & Junk Removal Dubai",
  description:
    "TakeJunk Dubai: furniture removal specialists who clear the junk too. Careful crews, upfront pricing and responsible disposal for villas, homes and offices.",
  path: "/about",
  image: { url: "/images/apartment.jpg", alt: "Styled Dubai living room with leather sofa" },
});

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
                We price from photos so you know the cost upfront, we turn up when we say we will, and we leave your
                space clean — taking the boxes, appliances and clutter along with the furniture. Whatever we collect is donated, recycled or responsibly disposed of.
              </p>
            </div>
            <div className="mt-8">
              <CheckList
                items={[
                  "Uniformed, trained crews",
                  "Fixed, upfront prices",
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
