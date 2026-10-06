# Content QA — TakeJunk Dubai

Run this checklist **before every publish** (new page, new post or a significant edit). Copy the checklist into your PR or task, tick every box, and don't publish with an unticked **🔴 Must** item.

Related: [`content-rules.md`](./content-rules.md) · [`content-structure.md`](./content-structure.md) · [`keywords-map.md`](./keywords-map.md) · [`keywords.md`](./keywords.md)

**Legend:** 🔴 Must (blocks publishing) · 🟡 Should (fix unless there's a good reason) · ⚪ Nice to have

---

## 1. Automated checks (run first)

```bash
npx eslint src          # code quality
npm run build           # must succeed — catches broken data and type errors
npm run seo:audit       # SEO + content audit over every built page
```

`npm run seo:audit` checks every page for:

| Check | Level |
| --- | --- |
| `<title>` present and ≤ 60 characters | 🔴 error |
| Meta description present and ≤ 160 characters (warns under 70) | 🔴 error |
| Canonical URL present | 🔴 error |
| Exactly one `<h1>` | 🔴 error |
| Complete Open Graph tags (title, image, url, site name) | 🔴 error |
| Every image has alt text | 🔴 error |
| Valid JSON-LD structured data | 🔴 error |
| No broken internal links | 🔴 error |
| No duplicate titles or descriptions across pages | 🔴 error |
| Banned wording: "quote", Deira/Karama, "cheap", "#1"/"best in Dubai", "guaranteed", old phone number | 🔴 error |
| Blog: BlogPosting schema present | 🔴 error |
| Blog: FAQ section with FAQPage schema | 🔴 error |
| Blog: Key takeaways box present | 🔴 error |
| Blog: table of contents present | 🔴 error |
| Blog: **2,000+ words** (takeaways + body + FAQs) | 🔴 error |
| Blog: 2+ service links **inside the article body** | 🔴 error |
| Blog: 1+ link to another blog post inside the body | 🔴 error |
| Blog: `dateModified` in schema | 🟡 warning |

✅ The audit must end with **"✓ No errors."** before you publish.

---

## 2. Keyword and intent

- [ ] 🔴 The primary keyword comes from [`keywords-map.md`](./keywords-map.md) and **no other page targets it**
- [ ] 🔴 The page matches the search intent (commercial page sells, informational post answers fully)
- [ ] 🔴 Primary keyword in: `<title>`, H1, URL slug, first 100 words
- [ ] 🟡 At least one H2 uses a secondary keyword or a real search question
- [ ] 🟡 Related terms and variations used (sofa/couch, disposal/removal/pickup)
- [ ] 🔴 No keyword stuffing — reads naturally out loud
- [ ] 🟡 Main question answered in the first 2–3 sentences

## 3. Accuracy and trust

- [ ] 🔴 No invented reviews, ratings, statistics, prices, licences, insurance, awards or partners
- [ ] 🔴 Every Dubai fact (government service, rule, procedure) checked against an official or reputable source — link it
- [ ] 🔴 Time-sensitive facts dated ("at the time of writing, October 2026") or linked rather than copied
- [ ] 🔴 Building rules described as "varies by building — check with building management"
- [ ] 🔴 Hazardous waste exclusions stated where relevant
- [ ] 🔴 No Deira or Karama
- [ ] 🔴 Prices only if confirmed by the client in writing
- [ ] 🔴 Phone/hours come from `site.ts` (`site.phoneDisplay` / `site.hours`), not typed by hand
- [ ] 🟡 Includes at least one practical, experience-based detail (how the crew actually does it)

## 4. Writing quality

- [ ] 🔴 British English spelling throughout
- [ ] 🔴 No "quote" / "free quote" / "get a quote" — use "fixed price", "Book now"
- [ ] 🟡 Sentences mostly under 20 words; paragraphs 1–4 sentences
- [ ] 🟡 No filler intros, no hype, no exclamation marks
- [ ] 🔴 Spell-check and grammar pass done (e.g. Grammarly / LanguageTool)
- [ ] 🟡 Read aloud once — fix anything that sounds robotic
- [ ] 🔴 If AI-assisted: fully fact-checked and rewritten in our voice

## 5. Structure (per [`content-structure.md`](./content-structure.md))

- [ ] 🔴 All required fields filled in the data file
- [ ] 🔴 Headings in order (H2 → H3), no skipped levels
- [ ] 🔴 Blog: **2,000+ words** of genuinely useful content (no padding)
- [ ] 🔴 Blog: 3–5 key takeaways, 8–14 H2 sections, several lists, 1–2 tips
- [ ] 🔴 Blog: 5–8 FAQs using real search questions ("People also ask", Search Console)
- [ ] 🔴 Blog: `keyword` field matches the primary keyword in `keywords-map.md`
- [ ] 🟡 Blog: `updated` date set only after a meaningful content change
- [ ] 🟡 Service: 8 items, 4 highlights, 3–5 FAQs, 4 related services
- [ ] 🔴 Area: `body` is unique, with 2+ area-specific details (not a name-swapped copy)
- [ ] 🟡 Service pages 600–1,000 words of unique copy

## 6. Links

- [ ] 🔴 Blog: links to 2+ service pages and 1+ other blog post in the body
- [ ] 🔴 Anchor text is descriptive (no "click here", no raw URLs)
- [ ] 🟡 Link to an area page when a community is mentioned
- [ ] 🟡 External facts link to official sources; no competitor links
- [ ] 🟡 1–2 **older** posts updated to link to the new page

## 7. Meta and social

- [ ] 🔴 `metaTitle` ≤ 60 characters, keyword first, unique
- [ ] 🔴 Description 120–158 characters, unique, includes keyword + benefit
- [ ] 🟡 Check how it looks in a SERP preview tool (title not cut off)
- [ ] 🟡 Share preview checked (WhatsApp / LinkedIn) — correct title and image

## 8. Images

- [ ] 🔴 We have the rights to every image
- [ ] 🔴 Alt text describes the image (≤ 125 characters)
- [ ] 🔴 No faces, villa numbers, number plates or documents
- [ ] 🟡 Descriptive file name (`sofa-removal-dubai-marina.jpg`)
- [ ] 🟡 Real job photo used where available

## 9. Visual check (local or preview)

```bash
npm run build && npm start   # then open http://localhost:3000
```

- [ ] 🔴 Page renders correctly on **mobile** (~390px) and desktop
- [ ] 🔴 No horizontal scrolling on mobile
- [ ] 🔴 WhatsApp and Call buttons work (WhatsApp message pre-filled correctly)
- [ ] 🟡 Table of contents links jump to the right sections (blog)
- [ ] 🟡 Images look sharp and relevant

## 10. Performance (spot-check monthly or after big changes)

- [ ] 🟡 PageSpeed Insights (https://pagespeed.web.dev) — mobile Performance ≥ 90, Accessibility / Best Practices / SEO = 100
- [ ] 🟡 Core Web Vitals: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms (Search Console → Core Web Vitals once data exists)

Lab scores vary by a few points between runs — test 2–3 times and use the median.

## 11. After publishing

- [ ] 🔴 Live URL loads (200) on `https://www.takejunkfurnituredubai.com/...`
- [ ] 🔴 Search Console → URL Inspection → **Request indexing**
- [ ] 🟡 Page appears in `https://www.takejunkfurnituredubai.com/sitemap.xml`
- [ ] 🟡 Validate structured data in the Rich Results Test (https://search.google.com/test/rich-results)
- [ ] 🟡 Update [`keywords-map.md`](./keywords-map.md) — status Planned → Live
- [ ] ⚪ Share on Google Business Profile as a post (for guides)

---

## 12. Recurring audits

| When | What |
| --- | --- |
| **Weekly** | Search Console → Pages: any new "not indexed" errors? Fix or request indexing. |
| **Monthly** | Performance → Queries: new long-tail terms → add to `keywords.md`, refresh the matching page. Check pages losing clicks. Run PageSpeed on the homepage + one service + one post. |
| **Quarterly** | Re-run keyword research (section 1 of `keywords.md`). Review competitor topics. Refresh the 3 weakest posts. Check all external links still work. |
| **Yearly** | Review every post for outdated facts (government services, building rules). Update or remove. Re-check brand/trademark status. |

### Content refresh rule

A page that ranks positions **8–20** for its primary keyword is the best refresh candidate: improve the intro answer, add missing questions from "People also ask", add internal links and a real photo, then request indexing again.

---

## 13. Sign-off

| Role | Name | Date | ✓ |
| --- | --- | --- | --- |
| Writer | | | |
| Editor / fact-check | | | |
| Client approval (prices, claims, new services or areas) | | | |
