import Link from "next/link";
import type { Block } from "@/data/blog";
import { slugify } from "@/data/blog";
import { Icon } from "./Icon";

// Renders inline [text](/path) links and **bold** inside a string.
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={i} href={href}>
              {label}
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          );
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i}>{bold[1]}</strong>;
        return part;
      })}
    </>
  );
}

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="article">
      {blocks.map((b, i) => {
        if ("h2" in b)
          return (
            <h2 key={i} id={slugify(b.h2)}>
              <Inline text={b.h2} />
            </h2>
          );
        if ("h3" in b)
          return (
            <h3 key={i}>
              <Inline text={b.h3} />
            </h3>
          );
        if ("p" in b)
          return (
            <p key={i}>
              <Inline text={b.p} />
            </p>
          );
        if ("ul" in b)
          return (
            <ul key={i}>
              {b.ul.map((item) => (
                <li key={item}>
                  <Inline text={item} />
                </li>
              ))}
            </ul>
          );
        if ("ol" in b)
          return (
            <ol key={i}>
              {b.ol.map((item) => (
                <li key={item}>
                  <Inline text={item} />
                </li>
              ))}
            </ol>
          );
        return (
          <aside key={i} className="article-tip">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brass-300/40 text-forest">
              <Icon name="sparkle" className="size-[18px]" />
            </span>
            <p>
              <strong>Tip: </strong>
              <Inline text={b.tip} />
            </p>
          </aside>
        );
      })}
    </div>
  );
}
