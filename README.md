# TakeJunk Dubai — furniture & junk removal website (takejunkfurnituredubai.com)

Next.js 16 (App Router) + Tailwind CSS v4. Every page is statically generated (51 pages).

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the build
```

## Where things live

| What | File |
| --- | --- |
| Brand name, phone, hours, domain | `src/lib/site.ts` |
| Services (10 furniture + 3 junk, set by `category`) — copy, FAQs, images, SEO titles | `src/data/services.ts` |
| Service areas (28) — local copy, nearby links | `src/data/areas.ts` |
| Homepage FAQs | `src/data/faqs.ts` |
| Homepage | `src/app/page.tsx` |
| Service / area page templates | `src/app/services/[slug]`, `src/app/areas/[slug]` |
| Sitemap / robots | `src/app/sitemap.ts`, `src/app/robots.ts` |

Adding a service or area to the data files automatically creates its page, nav/footer links and sitemap entry.

## Before going live

- Canonical domain is https://www.takejunkfurnituredubai.com (`src/lib/site.ts`). The bare domain 301-redirects to www (`next.config.ts`). Add both domains to your host.
- Brand name ("TakeJunk Dubai") and domain live in `src/lib/site.ts`; the logo is `src/components/Logo.tsx`.
- Swap stock photos in `public/images/` (Unsplash, free licence) for real job photos when available.
- Add genuine Google reviews / ratings once available — none are invented on the site.
