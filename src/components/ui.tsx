import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";

type Tone = "light" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

export function CallButton({ tone = "light", label = "Call now", className = "" }: { tone?: Tone; label?: string; className?: string }) {
  const styles =
    tone === "dark"
      ? "bg-cream text-ink hover:bg-white"
      : "bg-forest text-cream hover:bg-forest-600 shadow-soft";
  return (
    <a href={site.telHref} className={`${base} ${styles} ${className}`}>
      <Icon name="phone" className="size-[18px]" />
      {label}
    </a>
  );
}

export function WhatsAppButton({
  label = "WhatsApp us",
  message,
  className = "",
}: {
  label?: string;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-whatsapp text-white hover:brightness-110 shadow-soft ${className}`}
    >
      <WhatsAppIcon className="size-[18px]" />
      {label}
    </a>
  );
}

export function QuoteButton({ tone = "light", className = "" }: { tone?: Tone; className?: string }) {
  const styles =
    tone === "dark"
      ? "border border-cream/30 text-cream hover:bg-cream/10"
      : "border border-ink/15 text-ink hover:border-ink/40 hover:bg-white";
  return (
    <Link href="/contact#quote" className={`${base} ${styles} ${className}`}>
      Get a free quote
      <Icon name="arrow" className="size-4" />
    </Link>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-brass-300" : "text-brass"
      }`}
    >
      <span className="h-px w-6 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: Tone;
  align?: "left" | "center";
}) {
  return (
    <div className={`reveal max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-3xl leading-[1.1] font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          tone === "dark" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${tone === "dark" ? "text-cream/70" : "text-stone"}`}>{intro}</p>
      )}
    </div>
  );
}

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function CheckList({ items, tone = "light", columns = 2 }: { items: string[]; tone?: Tone; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
              tone === "dark" ? "bg-brass/25 text-brass-300" : "bg-forest/10 text-forest"
            }`}
          >
            <Icon name="check" className="size-3.5" strokeWidth={2.5} />
          </span>
          <span className={tone === "dark" ? "text-cream/85" : "text-ink/85"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
