import Link from "next/link";
import { furnitureServices, junkServices, type Service } from "@/data/services";
import { site, whatsappHref } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";

export const navLinks = [
  { href: "/services/villa-furniture-clearance", label: "Villa Clearance" },
  { href: "/services/junk-removal", label: "Junk Removal" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function MenuItem({ service: s }: { service: Service }) {
  return (
    <Link href={`/services/${s.slug}`} className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-sand">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-forest/8 text-forest">
        <Icon name={s.icon} className="size-[18px]" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink">{s.name}</span>
        <span className="mt-0.5 block text-xs leading-snug text-stone">{s.excerpt}</span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="hidden bg-ink text-cream/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[13px] lg:px-8">
          <p className="flex items-center gap-2">
            <Icon name="clock" className="size-4 text-brass-300" />
            Open {site.hours} · Same-day pickups across Dubai
          </p>
          <div className="flex items-center gap-6">
            <a href={site.telHref} className="flex items-center gap-2 hover:text-cream">
              <Icon name="phone" className="size-4 text-brass-300" />
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cream"
            >
              <WhatsAppIcon className="size-4 text-brass-300" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-line/80 bg-cream">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <div className="group relative">
              <Link
                href="/services"
                className="flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-ink/80 hover:text-ink"
              >
                Services
                <Icon name="chevron" className="size-4 transition group-hover:rotate-180 group-has-focus-visible:rotate-180" />
              </Link>
              <div className="invisible absolute top-full left-0 w-[880px] -translate-x-1/4 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-has-focus-visible:visible group-has-focus-visible:opacity-100">
                <div className="grid grid-cols-3 gap-2 rounded-2xl border border-line bg-white p-3 shadow-lift">
                  <div className="col-span-2">
                    <p className="px-3 pt-2 pb-1 text-[11px] font-bold tracking-[0.18em] text-brass uppercase">Furniture removal</p>
                    <div className="grid grid-cols-2 gap-1">
                      {furnitureServices.map((s) => (
                        <MenuItem key={s.slug} service={s} />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-sand/60 p-1">
                    <p className="px-3 pt-2 pb-1 text-[11px] font-bold tracking-[0.18em] text-brass uppercase">Junk removal</p>
                    {junkServices.map((s) => (
                      <MenuItem key={s.slug} service={s} />
                    ))}
                    <Link
                      href="/services"
                      className="mt-2 flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-forest hover:bg-white"
                    >
                      All services <Icon name="arrow" className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-ink/80 hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.telHref}
              className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest-600 sm:inline-flex"
            >
              <Icon name="phone" className="size-4" />
              <span className="hidden xl:inline">{site.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:inline-flex"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
