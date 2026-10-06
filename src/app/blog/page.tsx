import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";
import { sortedPosts } from "@/data/blog";
import { Breadcrumbs, CtaBand, JsonLd } from "@/components/blocks";
import { FeaturedPost, PostCard } from "@/components/PostCard";
import { Container } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Furniture & Junk Removal Tips Dubai | TakeJunk",
  description:
    "Practical guides on furniture removal, junk clearance, villa move-outs and decluttering in Dubai — from the TakeJunk team.",
  path: "/blog",
  image: { url: "/images/living-bright.jpg", alt: "Bright living room with tufted sofa" },
});

export default function BlogPage() {
  const [latest, ...rest] = sortedPosts;

  return (
    <>
      <section className="bg-ink">
        <Container className="py-14 sm:py-20">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
          <div className="hero-in mt-8 max-w-3xl">
            <p className="mb-4 text-xs font-bold tracking-[0.18em] text-brass-300 uppercase">Blog</p>
            <h1 className="font-display text-4xl leading-[1.05] font-medium tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Guides for clearing, moving &amp; decluttering
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
              Practical advice from our crews on furniture removal, junk clearance and move-outs across Dubai&apos;s
              villas, apartments and offices.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          {latest && <FeaturedPost post={latest} />}
          {rest.length > 0 && (
            <>
              <h2 className="mt-16 font-display text-2xl font-medium sm:text-3xl">More articles</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <CtaBand title="Need something cleared?" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${site.name} Blog`,
          url: absoluteUrl("/blog"),
          publisher: { "@id": `${site.url}/#business` },
          blogPost: sortedPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absoluteUrl(`/blog/${p.slug}`),
            datePublished: p.date,
          })),
        }}
      />
    </>
  );
}
