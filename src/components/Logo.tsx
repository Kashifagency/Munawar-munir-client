import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span
        className={`grid size-10 place-items-center rounded-xl ${dark ? "bg-cream text-forest" : "bg-forest text-cream"}`}
      >
        {/* Armchair silhouette monogram */}
        <svg viewBox="0 0 32 32" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 15V10a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5" />
          <path d="M5 17a2.5 2.5 0 0 1 5 0v2h12v-2a2.5 2.5 0 0 1 5 0v6H5z" />
          <path d="M8 23v3M24 23v3" />
          <circle cx="16" cy="13" r="1.2" fill="#d8bb8c" stroke="none" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-xl font-semibold tracking-tight ${dark ? "text-cream" : "text-ink"}`}>
          {site.shortName}
        </span>
        <span className={`mt-1 block text-[10px] font-bold tracking-[0.28em] uppercase ${dark ? "text-brass-300" : "text-brass"}`}>
          Dubai
        </span>
      </span>
    </Link>
  );
}
