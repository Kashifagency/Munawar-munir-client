# Content Structure — TakeJunk Dubai

Templates for every type of page on the site, mapped to the exact fields in the code. Follow these so every page is complete, consistent and built to rank.

- Rules for **how** to write → [`content-rules.md`](./content-rules.md)
- **Which** keyword each page targets → [`keywords-map.md`](./keywords-map.md) (top 100) and [`keywords.md`](./keywords.md) (strategy)
- Checks **before** publishing → [`content-qa.md`](./content-qa.md)

---

## 1. Site architecture

```
/                                   Homepage — head terms (furniture & junk removal Dubai)
├── /services                       All services hub
│   ├── /services/[service]         13 service pages (10 furniture + 3 junk)
├── /areas                          All areas hub
│   ├── /areas/[area]               28 area pages
├── /blog                           Blog hub
│   ├── /blog/[post]                Articles (guides, checklists, comparisons)
├── /about                          Trust / E-E-A-T
└── /contact                        Booking
```

**Linking model (topic clusters):**

```
           Homepage
        ┌──────┼──────────┐
   Services hub  Areas hub  Blog hub
        │          │          │
  Service page ◄──► Area page │
        ▲                     │
        └──── Blog post ──────┘   (every post links up to 2+ service pages)
```

- Service pages link to related services + all areas.
- Area pages link to popular services + nearby areas.
- Blog posts link to services (money pages) and to each other.
- Nothing is more than **3 clicks** from the homepage.

### Where content lives in the code

| Page type | Edit this file | New entry creates |
| --- | --- | --- |
| Service | `src/data/services.ts` | Page, nav menu item, footer link, sitemap entry |
| Area | `src/data/areas.ts` | Page, footer link, area pills, sitemap entry |
| Blog post | `src/data/posts/[slug].ts` + one import in `src/data/blog.ts` | Page, blog listing card, sitemap entry |
| Homepage FAQs | `src/data/faqs.ts` | FAQ items + FAQ schema |
| Phone / hours / brand | `src/lib/site.ts` | Updates everywhere |

---

## 2. Service page template

**URL:** `/services/[keyword-slug]` · **Length:** 600–1,000 words of unique copy · **Schema:** Service + FAQPage + BreadcrumbList (automatic)

| Field (`services.ts`) | What to write | Limits / example |
| --- | --- | --- |
| `slug` | Primary keyword, no "dubai" (the folder already implies it) | `sofa-removal` |
| `name` | Service name, Title Case | Sofa Removal |
| `shortName` | 1–3 words for compact lists | Sofa Removal |
| `category` | `furniture` or `junk` | `furniture` |
| `metaTitle` | Primary keyword + Dubai + benefit | ≤ 60 chars · "Sofa Removal Dubai \| Couch & Sectional Pickup" |
| `metaDescription` | Keyword, what we take, key benefit, CTA. Also used as the hero intro. | 120–158 chars |
| `excerpt` | One-line card summary | ≤ 90 chars |
| `headline` | H2-style headline for the hero | "Sofa and couch removal across Dubai" |
| `intro` | 3 paragraphs: ① the problem + what we do ② how we do it (method, protection) ③ responsible disposal | 50–90 words each |
| `items` | What we remove — specific item types people search for | 8 items |
| `highlights` | Why choose us for **this** service — `{ title, text }` | 4 items; title ≤ 5 words, text ≤ 15 words |
| `faqs` | Real questions people ask (use Google "People also ask") | 3–5; answers 25–60 words |
| `related` | Slugs of related services | 4 |
| `image` / `imageAlt` | Relevant photo + descriptive alt | Alt ≤ 125 chars |

**Page outline (rendered by the template):**

```
H1  [Service] in Dubai — headline
    Hero intro (metaDescription) + WhatsApp / Call / Book buttons
H2  [Service] in Dubai          → intro paragraphs
H2  What we remove              → items checklist
H2  Why clients choose us…      → highlights
H2  [Service] across Dubai      → all area links
H2  [Service] FAQs              → faqs (+ FAQPage schema)
    Sidebar: booking card + other services
H2  Related services            → related cards
    CTA band
```

---

## 3. Area page template

**URL:** `/areas/[area-slug]` · **Length:** 150–250 words of **unique** area copy (the template adds the rest) · **Schema:** Service (areaServed) + FAQPage + BreadcrumbList (automatic)

| Field (`areas.ts`) | What to write | Rules |
| --- | --- | --- |
| `slug` | Area name, lowercase, hyphens | `jumeirah-village-circle` |
| `name` | Official name as residents say it | "Jumeirah Village Circle" |
| `propertyType` | `villa` · `apartment` · `mixed` · `commercial` | Drives hero image, access notes and FAQs |
| `summary` | One line describing the area's homes | ≤ 80 chars |
| `body` | What removals are like **in this area**: property types, access (gates, towers, lifts, parking), typical jobs | 60–120 words, **must be unique** — never copy another area's text with the name swapped |
| `popular` | 3 most relevant service slugs | e.g. villa areas → villa clearance first |
| `nearby` | 4 nearby area slugs (real neighbours) | Builds internal links |

**Uniqueness rule:** thin, swapped-name area pages are a common reason sites get demoted. Each `body` must include at least **two** details specific to that area (property style, access, typical layout, nearby landmark). If you can't write two true specifics, don't create the page yet.

**Never** create pages for Deira or Karama.

---

## 4. Blog post templates

**URL:** `/blog/[keyword-slug]` · **Schema:** BlogPosting + FAQPage + BreadcrumbList (automatic)

### 4.1 Where posts live

Each article is its own file: `src/data/posts/[slug].ts`, exporting a `Post`. Register it by adding one import line to the `posts` array in `src/data/blog.ts`. Copy an existing post file as your starting point.

### 4.2 Required fields

| Field | Rules |
| --- | --- |
| `slug` | Primary keyword phrase: `how-to-dispose-of-a-sofa-in-dubai` |
| `title` | H1, Title Case, contains the keyword, ≤ 70 chars |
| `metaTitle` | ≤ 60 chars, keyword first, ends `\| TakeJunk` if it fits |
| `description` | 120–158 chars; answers "what will I learn?" |
| `keyword` | The primary keyword, copied exactly from [`keywords-map.md`](./keywords-map.md). Output in schema `keywords`. |
| `category` | `Guides` · `Moving out` · `Junk removal` · `Furniture care` |
| `date` | Publish date `YYYY-MM-DD` |
| `updated` | *(optional)* Date of the last **meaningful** content update. Shown as "Updated …" and used for `dateModified`. Don't bump it for typo fixes. |
| `image` / `imageAlt` | Relevant image + descriptive alt |
| `services` | 2–3 service slugs for the "Related services" sidebar |
| `takeaways` | **3–5** one-sentence answers for the "Key takeaways" box at the top |
| `body` | Blocks: `{ p }` `{ h2 }` `{ h3 }` `{ ul }` `{ ol }` `{ tip }` — inline `[text](/path)` and `**bold**` |
| `faqs` | **5–8** `{ q, a }` — rendered as the "Frequently asked questions" section with FAQPage schema and added to the table of contents |

### 4.3 Length: 2,000+ words

**Every article is at least 2,000 words**, counting the key takeaways, body and FAQs (the table of contents and booking box don't count). `npm run seo:audit` fails any post below 2,000.

Reach the length by covering the topic **completely** — more options, more steps, more scenarios, more real questions — never by padding, repeating or stretching sentences. If a topic genuinely can't fill 2,000 useful words, it's too narrow: merge it into a broader article or make it a section of one.

Typical split for a 2,000-word post:

| Part | Words |
| --- | ---: |
| Key takeaways (3–5) | 80–120 |
| Intro (answer first) | 80–120 |
| 8–14 H2 sections (with H3s, lists and tips) | 1,400–1,600 |
| FAQs (5–8 × 30–60 words) | 250–400 |

### 4.4 Page structure (rendered automatically)

```
<article>
  <header>   breadcrumbs · category · H1 · description · updated date · reading time · author
  cover image
  Key takeaways            (section, labelled heading)
  In this article          (mobile TOC — nav)
  Article body             (H2/H3, lists, tips, internal links)
  Frequently asked questions (section + FAQPage schema)
  Booking box              (WhatsApp / Call)
  <aside>    sticky TOC (desktop) · Related services
</article>
More from the blog · CTA band
```

**Every post must have:**

- Key takeaways (3–5) that answer the main question at a glance
- Intro (2–4 sentences) that answers the main question immediately
- 8–14 H2 sections (these become the table of contents, plus the FAQ)
- Several lists, including at least one numbered list of steps
- 1–2 `tip` blocks
- Links to **2+ service pages** and **1+ other post** inside the body
- 5–8 FAQs using real questions people search
- A short closing section with a natural link to the most relevant service (the booking box is added automatically)

### 4.5 "How to" guide

Target: `how to [dispose of / get rid of / prepare] [item] in dubai`

```
Intro — answer in 2–3 sentences
H2  When is it time to [replace/remove] X?        (optional)
H2  Your options for [X] in Dubai
    H3  1. Option (incl. free / municipality options, honestly)
    H3  2. Option
    H3  3. Book a professional [service]  → link
    tip
H2  What you can't do / common mistakes
H2  Step-by-step: getting it out of the building   (ol)
H2  Quick answers                                  (H3 questions)
Closing paragraph → link to service
```

### 4.6 Checklist

Target: `[move out / office clearance] checklist dubai`

```
Intro — who it's for, what it covers
H2  X weeks before          (ul)
H2  X days before           (ul) + tip
H2  On the day              (p / ul)
H2  After / before handover (ol)
H2  Common mistakes         (ul with **bold** lead-ins)
Closing → link to service
```

### 4.7 Comparison / decision guide

Target: `sell or donate furniture dubai`, `municipality vs private removal`

```
Intro — the decision in one sentence
H2  A quick decision test   (ol)
H2  Option A — when it makes sense
H2  Option B — when it makes sense
H2  Option C — when it makes sense
H2  Comparison table        (ul or table-style list)
H2  A simple plan           (ol)
Closing → link to service
```

### 4.8 Cost guide *(only with client-confirmed prices)*

Target: `furniture removal cost dubai`

```
Intro — typical range (client-confirmed) + "it depends on…"
H2  What affects the price  (ul: items, volume, floor/lift, dismantling, distance, timing)
H2  Example jobs            (only real, client-approved examples)
H2  How to get a fixed price (ol: photos → WhatsApp → confirm)
H2  How to keep the cost down
H2  Free options and when they work (municipality, donation)
Closing → link to service
```

### 4.9 Pillar page (cluster hub)

Target: a broad term such as `how to dispose of furniture in dubai`. 2,500–3,500 words. Summarises every option and links to each detailed post in the cluster. Every post in the cluster links back to it.

---

## 5. FAQ writing

- Use questions people actually search ("People also ask" on Google, Search Console queries, WhatsApp questions from customers).
- Start the answer with a direct "Yes", "No" or the key fact.
- 25–60 words per answer. No sales pitch in every answer.
- Don't repeat the same FAQ across many pages. Area FAQs are templated, so service FAQs must be unique.

---

## 6. Images

| Rule | Detail |
| --- | --- |
| Source | Real job photos (preferred) or licensed stock (Unsplash). Store in `public/images/`. |
| Size | Upload ~1,800 px wide JPG; Next.js serves AVIF/WebP automatically. |
| File name | Descriptive, hyphenated: `sofa-removal-dubai-marina.jpg` |
| Alt text | Describe what's in the image; ≤ 125 chars; no "image of". |
| Privacy | No faces, villa numbers, number plates or documents. |

---

## 7. Meta tag patterns (copy and adapt)

| Page | Title pattern (≤ 60) | Description pattern (≤ 158) |
| --- | --- | --- |
| Service | `[Service] Dubai \| [Benefit]` | `[Service] in Dubai — [items]. [Key benefit]. Same-day pickup available.` |
| Area | `Furniture & Junk Removal [Area] \| TakeJunk` | `Furniture & junk removal in [Area], Dubai: [items] and [villa clearances / home clear-outs]. Same-day slots, fixed prices.` |
| Blog | `[Keyword phrase] \| TakeJunk` | `[Answer/benefit in one sentence]. [What the guide covers].` |

---

## 8. Publishing workflow

1. Pick a keyword from [`keywords-map.md`](./keywords-map.md) (status Planned). Confirm no existing page targets it.
2. Research: Google the keyword, read the top 5 results, note questions and gaps. Find official sources for any facts.
3. Outline using the matching template above.
4. Write following `content-rules.md`.
5. Add the entry to the data file (`blog.ts`, `services.ts` or `areas.ts`).
6. Run the QA checklist in `content-qa.md`.
7. Publish (push → Vercel deploys automatically).
8. Search Console → URL Inspection → **Request indexing**.
9. Update the status in `keywords-map.md` to Live and add internal links from 1–2 older posts.
