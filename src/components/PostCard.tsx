import Image from "next/image";
import Link from "next/link";
import { formatDate, readingMinutes, type Post } from "@/data/blog";
import { Icon } from "./Icon";

function Meta({ post }: { post: Post }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-stone">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{readingMinutes(post)} min read</span>
    </p>
  );
}

function Category({ post }: { post: Post }) {
  return (
    <span className="inline-block self-start rounded-full bg-sand px-3 py-1 text-xs font-bold tracking-wide text-brass uppercase">
      {post.category}
    </span>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="reveal group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Category post={post} />
        <h3 className="mt-3 font-display text-xl leading-snug font-medium text-ink">{post.title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-stone">{post.description}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <Meta post={post} />
          <Icon name="arrow" className="size-4 shrink-0 text-forest transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft transition duration-300 hover:shadow-lift lg:grid-cols-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-96">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          fetchPriority="high"
          loading="eager"
          sizes="(min-width: 1024px) 45vw, 92vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
        <div className="flex items-center gap-3">
          <Category post={post} />
          <span className="text-xs font-bold tracking-wide text-forest uppercase">Latest</span>
        </div>
        <h2 className="mt-4 font-display text-3xl leading-tight font-medium text-ink sm:text-4xl">{post.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-stone">{post.description}</p>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
          <Meta post={post} />
          <span className="inline-flex items-center gap-2 font-semibold text-forest">
            Read article <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
