"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { furnitureServices, junkServices } from "@/data/services";
import { site, whatsappHref } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icon";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "All services" },
  { href: "/areas", label: "Areas we cover" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact & booking" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Close the panel whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <Icon name="menu" />
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-50 flex flex-col bg-cream transition duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-line px-4 sm:px-6">
          <span className="font-display text-xl font-semibold">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid size-11 place-items-center rounded-full border border-line bg-white"
            aria-label="Close menu"
          >
            <Icon name="close" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium hover:bg-sand">
                  {l.label}
                  <Icon name="arrow" className="size-4 text-stone" />
                </Link>
              </li>
            ))}
          </ul>
          {[
            { title: "Furniture removal", list: furnitureServices },
            { title: "Junk removal", list: junkServices },
          ].map((group) => (
            <div key={group.title}>
              <p className="mt-8 mb-3 px-3 text-xs font-bold tracking-[0.18em] text-brass uppercase">{group.title}</p>
              <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {group.list.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-sand">
                      <Icon name={s.icon} className="size-5 text-forest" />
                      <span className="font-medium">{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="grid grid-cols-2 gap-3 border-t border-line p-4">
          <a href={site.telHref} className="flex items-center justify-center gap-2 rounded-full bg-forest py-3.5 font-semibold text-cream">
            <Icon name="phone" className="size-4" /> Call
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3.5 font-semibold text-white"
          >
            <WhatsAppIcon className="size-4" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
