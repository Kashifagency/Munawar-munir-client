import { HomeLink } from "./HomeLink";
import { site } from "@/lib/site";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <HomeLink className="flex items-center gap-2.5">
      {/* Truck carrying a sofa — same mark as src/app/icon.svg */}
      <svg
        viewBox="0 0 64 64"
        className={`size-10 shrink-0 ${dark ? "ring-1 ring-cream/15 rounded-xl" : ""}`}
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="14" fill="#1d3a31" />
        <g fill="#d8bb8c">
          <rect x="9" y="21" width="22" height="7" rx="2.5" />
          <rect x="7" y="25" width="5" height="9" rx="2" />
          <rect x="28" y="25" width="5" height="9" rx="2" />
          <rect x="11" y="28" width="18" height="6" rx="1" />
        </g>
        <path
          fill="#fbf8f3"
          d="M5 35h33V24h9.5a3 3 0 0 1 2.4 1.2l6.4 8.6a3 3 0 0 1 .7 1.9V44a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
        />
        <path fill="#1d3a31" d="M41 27h6l4.5 6H41z" />
        <circle cx="15" cy="46" r="6" fill="#fbf8f3" stroke="#1d3a31" strokeWidth="3" />
        <circle cx="47" cy="46" r="6" fill="#fbf8f3" stroke="#1d3a31" strokeWidth="3" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-xl font-semibold tracking-tight ${dark ? "text-cream" : "text-ink"}`}>
          {site.shortName}
        </span>{" "}
        <span className={`mt-1 block text-[10px] font-bold tracking-[0.28em] uppercase ${dark ? "text-brass-300" : "text-brass"}`}>
          Dubai
        </span>
      </span>
    </HomeLink>
  );
}
