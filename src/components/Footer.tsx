import Link from "next/link";
import { areas } from "@/data/areas";
import { furnitureServices, junkServices } from "@/data/services";
import { site, whatsappHref } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-cream/70 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm leading-relaxed">
              Specialist furniture and junk removal, clearance and pickup for Dubai homes, villas and offices. Careful crews,
              upfront quotes and responsible disposal.
            </p>
            <div className="mt-6 space-y-3">
              <a href={site.telHref} className="flex items-center gap-3 font-semibold text-cream hover:text-brass-300">
                <Icon name="phone" className="size-5 text-brass-300" />
                {site.phoneDisplay}
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-semibold text-cream hover:text-brass-300"
              >
                <WhatsAppIcon className="size-5 text-brass-300" />
                WhatsApp {site.phoneDisplay}
              </a>
              <p className="flex items-center gap-3">
                <Icon name="clock" className="size-5 text-brass-300" />
                {site.hours}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 text-sm font-bold tracking-[0.16em] text-cream uppercase">Furniture removal</h2>
            <ul className="space-y-2.5 text-[15px]">
              {furnitureServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-cream">
                    {s.name} Dubai
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 mb-4 text-sm font-bold tracking-[0.16em] text-cream uppercase">Junk removal</h2>
            <ul className="space-y-2.5 text-[15px]">
              {junkServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-cream">
                    {s.name} Dubai
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h2 className="mb-4 text-sm font-bold tracking-[0.16em] text-cream uppercase">Areas we cover</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[15px] sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="hover:text-cream">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/services" className="hover:text-cream">Services</Link>
            <Link href="/areas" className="hover:text-cream">Areas</Link>
            <Link href="/about" className="hover:text-cream">About</Link>
            <Link href="/contact" className="hover:text-cream">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
