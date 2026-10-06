import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, site, whatsappHref } from "@/lib/site";
import { FAQ_ID, formatDate, getPost, headings, posts, readingMinutes, sortedPosts, wordCount } from "@/data/blog";
import { getService } from "@/data/services";
import { ArticleBody } from "@/components/ArticleBody";
import { Breadcrumbs, CtaBand, FaqList, JsonLd } from "@/components/blocks";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { PostCard } from "@/components/PostCard";
import { Container } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const meta = pageMetadata({
    title: post.metaTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: { url: post.image, alt: post.imageAlt },
  });
  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      section: post.category,
    },
  };
}

function TocList({ items }: { items: { id: string; text: string }[] }) {
  return (
    <ol className="space-y-2.5 text-[15px] leading-snug">
      {items.map((h) => (
        <li key={h.id}>
          <a href={`#${h.id}`} className="text-ink/75 transition hover:text-forest">
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = headings(post);
  const relatedServices = post.services.map(getService).filter((s) => s !== undefined);
  const morePosts = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const modified = post.updated ?? post.date;

  return (
    <>
      <article>
        <header className="bg-ink">
          <Container className="pt-14 pb-28 sm:pt-20 sm:pb-36">
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <div className="hero-in mt-8 max-w-3xl">
              <p className="mb-4 text-xs font-bold tracking-[0.18em] text-brass-300 uppercase">{post.category}</p>
              <h1 className="font-display text-4xl leading-[1.08] font-medium tracking-tight text-cream sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-cream/75">{post.description}</p>
              <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-cream/70">
                <span className="flex items-center gap-2">
                  <Icon name="calendar" className="size-4 text-brass-300" />
                  {post.updated ? (
                    <>
                      Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                    </>
                  ) : (
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  )}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="clock" className="size-4 text-brass-300" />
                  {readingMinutes(post)} min read
                </span>
                <span>By the {site.name} team</span>
              </p>
            </div>
          </Container>
        </header>

        <Container className="-mt-20 sm:-mt-24">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[21/9]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              fetchPriority="high"
              loading="eager"
              sizes="(min-width: 1280px) 1216px, 94vw"
              className="object-cover"
            />
          </div>
        </Container>

        <div className="py-14 sm:py-20">
          <Container className="grid gap-12 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              <section
                aria-labelledby="key-takeaways"
                className="mb-10 rounded-3xl border border-line border-l-4 border-l-forest bg-white p-6 sm:p-8"
              >
                <h2 id="key-takeaways" className="text-xs font-bold tracking-[0.18em] text-brass uppercase">
                  Key takeaways
                </h2>
                <ul className="mt-4 space-y-3">
                  {post.takeaways.map((t) => (
                    <li key={t} className="flex gap-3 leading-relaxed text-ink/85">
                      <Icon name="check" className="mt-1 size-4 shrink-0 text-forest" strokeWidth={2.5} />
                      {t}
                    </li>
                  ))}
                </ul>
              </section>

              {toc.length > 2 && (
                <nav aria-label="In this article" className="mb-10 rounded-3xl border border-line bg-white p-6 lg:hidden">
                  <p className="mb-3 text-xs font-bold tracking-[0.18em] text-brass uppercase">In this article</p>
                  <TocList items={toc} />
                </nav>
              )}

              <ArticleBody blocks={post.body} />

              {post.faqs.length > 0 && (
                <section aria-labelledby={FAQ_ID} className="mt-14 scroll-mt-32">
                  <h2 id={FAQ_ID} className="mb-7 scroll-mt-32 font-display text-[1.75rem] font-medium sm:text-[2rem]">
                    Frequently asked questions
                  </h2>
                  <FaqList faqs={post.faqs} />
                </section>
              )}

              <div className="mt-14 rounded-[2rem] bg-forest p-7 text-cream sm:p-10">
                <h2 className="font-display text-2xl font-medium sm:text-3xl">Want us to handle it?</h2>
                <p className="mt-3 leading-relaxed text-cream/75">
                  Send a few photos on WhatsApp and we&apos;ll reply with a fixed price. Same-day pickups across Dubai,{" "}
                  {site.hours}.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={whatsappHref(`Hi TakeJunk, I read "${post.title}" and would like to book a pickup.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
                  >
                    <WhatsAppIcon className="size-[18px]" /> WhatsApp us
                  </a>
                  <a
                    href={site.telHref}
                    className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-semibold text-ink transition hover:bg-white"
                  >
                    <Icon name="phone" className="size-[18px]" /> {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-36">
                {toc.length > 2 && (
                  <nav aria-label="Table of contents" className="hidden rounded-3xl border border-line bg-white p-6 lg:block">
                    <p className="mb-3 text-xs font-bold tracking-[0.18em] text-brass uppercase">In this article</p>
                    <TocList items={toc} />
                  </nav>
                )}

                {relatedServices.length > 0 && (
                  <nav aria-label="Related services" className="rounded-3xl border border-line bg-white p-6">
                    <p className="mb-3 text-xs font-bold tracking-[0.18em] text-brass uppercase">Related services</p>
                    <ul className="divide-y divide-line">
                      {relatedServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="group flex items-center gap-3 py-3 text-[15px] font-medium hover:text-forest"
                          >
                            <Icon name={s.icon} className="size-5 text-stone group-hover:text-forest" />
                            <span className="flex-1">{s.name}</span>
                            <Icon name="arrow" className="size-4 opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            </aside>
          </Container>
        </div>
      </article>

      {morePosts.length > 0 && (
        <section className="cv-auto bg-sand py-16 sm:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-medium">More from the blog</h2>
              <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-forest">
                All articles <Icon name="arrow" className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {morePosts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: absoluteUrl(post.image),
          datePublished: post.date,
          dateModified: modified,
          articleSection: post.category,
          keywords: post.keyword,
          wordCount: wordCount(post),
          inLanguage: "en-AE",
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": `${site.url}/#business` },
        }}
      />
    </>
  );
}
