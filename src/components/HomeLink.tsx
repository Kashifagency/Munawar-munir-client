"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Logo link: navigates home from other pages; on the homepage itself it
// scrolls back to the top (a same-URL Link would otherwise do nothing).
export function HomeLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={className}
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        if (window.location.hash) history.replaceState(null, "", "/");
      }}
    >
      {children}
    </Link>
  );
}
