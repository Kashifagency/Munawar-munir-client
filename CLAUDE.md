@AGENTS.md

## Writing content (blog articles, service/area pages)

Before writing or editing any content, read and follow all of these:

- `docs/content/content-rules.md` — voice, accuracy, SEO rules (British English, no invented facts/prices/reviews, no "quote" wording, no Deira/Karama)
- `docs/content/keywords-map.md` — pick the keyword (status "Planned") and its target; never reuse a keyword another page owns
- `docs/content/content-structure.md` — template for the page type; blog articles are 2,000+ words with key takeaways, 8–14 H2s, 5–8 FAQs, 2+ service links and 1+ blog link in the body
- `docs/content/content-qa.md` — checklist to run before finishing

New blog article = new file `src/data/posts/[slug].ts` (copy an existing one) + one import in `src/data/blog.ts`.

Verify any Dubai fact (government services, rules) against an official source with WebSearch/WebFetch and link it; stop and ask the user for anything only the client knows (prices, services offered, partner organisations).

Done means: `npx eslint src scripts`, `npm run build` and `npm run seo:audit` all pass, and `keywords-map.md` status is updated to Live.
