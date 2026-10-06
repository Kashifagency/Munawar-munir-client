# Content Rules — TakeJunk Dubai

The rulebook for everything written on www.takejunkfurnituredubai.com: service pages, area pages, blog posts, FAQs, meta tags and button text.

Read this **before** writing. Check your work against [`content-qa.md`](./content-qa.md) **before** publishing. Use the page templates in [`content-structure.md`](./content-structure.md) and the keyword map in [`keywords.md`](./keywords.md).

---

## 1. Who we write for

| Reader | What they want | What reassures them |
| --- | --- | --- |
| Villa owners & tenants (Arabian Ranches, Emirates Hills, The Meadows…) | Clear a whole house, garage and garden before a move or renovation | One-day clearance, sorting keep/donate/dispose, community rules handled |
| Apartment residents (Marina, Downtown, JVC…) | Get rid of a sofa, mattress or wardrobe without fighting the lift | Lift booking, permits, careful carrying, quick slot |
| Owners of high-value furniture (Palm, Emirates Hills, Downtown penthouses) | Move or remove designer, marble or lacquered pieces safely | Specific handling methods, discretion, consignment/storage delivery |
| Landlords & holiday-home operators | Clear between tenants, refresh mattresses in bulk | Remote access, photos before/after, bulk handling |
| Offices (Business Bay, DIFC, JLT) | Clear workstations without disrupting work | After-hours, building compliance, scalable crews |

Most readers are **expats**, often **on a mobile phone**, often **moving soon**. Write for someone who is busy and slightly stressed.

---

## 2. Positioning — the one thing to remember

> **We are furniture specialists who also clear the junk.**
> Premium, careful and clear. Not a generic "rubbish truck".

Every page should show at least one of:

- **Furniture know-how:** dismantling, wrapping, carrying through lifts and stairs, protecting floors.
- **Dubai know-how:** service lifts, building permits/NOCs, gate passes, community working hours, summer heat.
- **Responsible disposal:** donate → recycle → licensed disposal, in that order.
- **Easy booking:** photos on WhatsApp → fixed price → same-day or next-day slot.

---

## 3. Voice and tone

| Do | Don't |
| --- | --- |
| Calm, confident, practical | Hype, shouting, exclamation marks!!! |
| Plain English, short sentences | Jargon, filler ("in today's fast-paced world…") |
| "We" and "you" | "The customer", "clients shall" |
| Specific: "we take the bed apart in the room" | Vague: "we provide top-quality solutions" |
| Warm but professional | Slang, emojis in body copy |

**Spelling: British English** (colour, neighbour, organise, metre, programme). The whole site uses it — stay consistent.

**Reading level:** aim for UK Year 8 / US grade 8. Most sentences under 20 words. Paragraphs of 1–4 sentences.

### Words and phrases

| Use | Avoid |
| --- | --- |
| furniture removal, junk removal, clearance, pickup, collection, disposal | "rubbish" as the main term (fine as a synonym), "trash" (US) |
| fixed price, upfront price, price from photos | "quote" / "free quote" / "get a quote" — **removed sitewide at the client's request** |
| Book now, WhatsApp us, Call now | Submit, Click here |
| responsible disposal, donated, recycled where facilities allow | "100% recycled", "zero waste", "eco-certified" (unless proven) |
| same-day slots available | "guaranteed same-day" |
| maid's room, majlis, service lift, gate pass, community, tower | — |

---

## 4. Accuracy rules (non-negotiable)

Google rewards trustworthy content, and our reputation depends on it. **If we can't prove it, we don't publish it.**

### Never invent

- ❌ Reviews, testimonials, star ratings, customer names
- ❌ Statistics ("5,000+ jobs", "80% recycled", "#1 in Dubai")
- ❌ Prices or price ranges — **only publish prices the client has confirmed in writing**
- ❌ Licences, certifications, insurance, awards, partnerships
- ❌ Years in business, team size, fleet size
- ❌ Named charities, recyclers or partners we haven't confirmed we work with
- ❌ Specific laws, fines or government procedures we haven't verified

### Facts about Dubai

- Verify against an **official source** (dm.gov.ae, dubai.ae, rta.ae, dewa.gov.ae, dubailand.gov.ae) or a reputable publication (Gulf News, Khaleej Times, The National).
- Government services change — write "at the time of writing" and add the date, or link to the official page instead of repeating details like phone numbers and hours.
- **Dubai Municipality bulky waste service:** free, covers household furniture/appliances, **excludes real-estate development zones and free zones** (dm.gov.ae, 2022). Mention it honestly — it builds trust. Never call it bad; explain when a private service is the better fit (faster, any area, dismantling, carrying from inside the home, mixed loads).
- Building rules (permits, lift bookings, NOCs, deposits) **vary by building** — always say "check with your building management".

### Safety and compliance

- We **do not** collect hazardous waste: chemicals, paint, gas cylinders, asbestos, medical waste, car batteries. Always say so where relevant.
- Electrical disconnection (chandeliers, wired appliances) and gas/water disconnection are for **qualified technicians**, not our crew.
- **Never mention Deira or Karama** as service areas (client brief).

### Business details — single source of truth

Phone, hours, brand and domain live in `src/lib/site.ts`. **Never type them into content by hand.** In data files use `site.phoneDisplay` / `site.hours`; in blog text, link to `/contact` instead of writing the number.

Current values (for reference only): **TakeJunk Dubai · +971 52 420 5370 · 7 days a week, 6:00 AM – 11:00 PM**.

---

## 5. SEO writing rules

### 5.1 One page = one search intent = one primary keyword

- Take the primary keyword from [`keywords-map.md`](./keywords-map.md) (top 100, with target URLs). If a page already targets it, **improve that page** instead of creating a new one.
- New keyword ideas go into `keywords-map.md` first, with a target URL.

### 5.2 Where the primary keyword goes

| Element | Rule |
| --- | --- |
| `<title>` (metaTitle) | Keyword near the start. **≤ 60 characters.** End with `| TakeJunk` when it fits. |
| Meta description | Keyword + benefit + call to action. **70–158 characters.** Unique on every page. |
| H1 | Contains the keyword (or a close variant). **Exactly one H1** per page. |
| URL slug | Lowercase, hyphens, keyword-led, no dates or stop words: `/services/sofa-removal`, `/blog/how-to-dispose-of-a-sofa-in-dubai` |
| First 100 words | Keyword or close variant appears naturally. |
| H2s | At least one H2 uses a secondary keyword or a question people search. |
| Image alt text | Describes the image; include the keyword only if it's genuinely relevant. |

### 5.3 Keyword use — natural, not stuffed

- Write for people first. Read it aloud — if it sounds robotic, rewrite it.
- Use **variations and related terms** (sofa / couch / sectional; disposal / removal / pickup / collection) rather than repeating one phrase.
- No hidden text, no keyword lists, no "Dubai Marina, JLT, JBR, Palm…" spam paragraphs.
- Rough guide: the primary keyword 2–5 times in a 1,000-word article, including title and H1.

### 5.4 Search intent

| Intent | Example query | What the page must do |
| --- | --- | --- |
| Commercial | "sofa removal dubai" | Explain the service, show what we take, how it works, why us, FAQ, clear booking buttons |
| Local | "furniture removal JVC" | Area-specific details (property type, access, nearby areas) + service links |
| Informational | "how to dispose of a mattress in dubai" | Answer fully and fairly, list all options (including free ones), then link to our service as one option |
| Comparison | "sell or donate furniture dubai" | Balanced pros and cons, a clear decision guide |

Answer the main question **in the first 2–3 sentences** (helps featured snippets and AI overviews), then expand.

### 5.5 Internal linking

- Every blog post links to **at least 2 service pages** and **1 other blog post** in the body text.
- Every service page is linked from **at least 1 blog post**.
- Use **descriptive anchor text** ("our [mattress removal](/services/mattress-removal) service"), never "click here" or the raw URL.
- Link the first relevant mention only; don't link the same URL twice in one section.
- Link to an area page when an article mentions a specific community.
- Update older posts to link to new ones.

### 5.6 External links

- Link to official sources when citing facts (Dubai Municipality, RTA, DEWA).
- External links open in a new tab (the renderer handles this for full URLs).
- Never link to competitors.

### 5.7 E-E-A-T (Experience, Expertise, Authority, Trust)

Google's quality guidelines reward content that shows real experience. Add it wherever possible:

- **Experience:** specific, practical details only a crew would know ("measure the inside depth of the service lift", "carry marble tops on edge"). Ask the client for real job anecdotes and use them.
- **Real photos:** replace stock images with real job photos as soon as possible (with customer permission, no faces or house numbers).
- **Author:** posts are bylined "the TakeJunk Dubai team". If the client wants a named author, use a real person with a short bio.
- **Freshness:** update the post date only when the content genuinely changes; review every post at least every 12 months.

### 5.8 AI-assisted writing

AI tools may be used for outlines and drafts. Every piece must still be **fact-checked, edited for our voice, and add real value** a generic page doesn't. Never publish unedited AI output. Google ranks helpful content, not how it was made — but generic, unverified content performs badly.

---

## 6. Formatting rules

- **Headings:** H2 for main sections, H3 for sub-points. Never skip levels. Sentence case ("How to prepare your apartment"), except titles which use Title Case.
- **Lists:** bullets for unordered items, numbers for steps. 3–8 items per list.
- **Tips:** one or two `tip` boxes per article, maximum.
- **Bold:** for the key phrase in a list item or a crucial warning — not for random emphasis.
- **Numbers:** numerals for 10 and above, words for one to nine (except measurements, prices and times).
- **Dates:** 6 October 2026. **Times:** 6:00 AM – 11:00 PM. **Currency:** AED 250 (only client-confirmed prices).
- **Phone:** +971 52 420 5370 — but use `site.phoneDisplay` in code, never hard-code it.
- No walls of text: break up anything over ~300 words without a heading.

### Article length and structure

- **Every blog article is at least 2,000 words** (key takeaways + body + FAQs). The audit fails anything shorter.
- Length comes from **completeness**: every option, every step, every scenario and the real questions people ask. Never pad, repeat points or stretch sentences to hit the number — Google rewards helpfulness, not word count.
- Every article opens with **3–5 key takeaways**, has a **table of contents** (automatic from H2s), and ends with **5–8 FAQs** (rendered with FAQPage schema).
- Use semantic, descriptive H2s that match how people search ("How to get a mattress out of a tower"), not clever headings ("Up, up and away").

---

## 7. Calls to action

- Every page ends with a clear next step (WhatsApp / Call / Book now).
- Blog posts: helpful first, sales second. One natural mention of the service in the body plus the standard booking box at the end. No pushy CTAs in the opening paragraphs of an informational post.
- Use the existing button components (`WhatsAppButton`, `CallButton`, `BookButton`) — don't create new styles.

---

## 8. Legal and ethical

- Only use images we have the rights to (our own photos, or properly licensed stock like Unsplash).
- Real customer photos and stories need written permission. Remove faces, number plates, villa numbers and personal documents.
- Don't make claims about competitors.
- Don't promise outcomes we can't control ("guaranteed same day", "guaranteed deposit back").

---

## 9. Quick reference — the 11 rules

1. Furniture specialists who clear the junk too.
2. British English, short sentences, write for mobile.
3. Never invent reviews, numbers, prices, licences or partners.
4. Verify Dubai facts with an official source; date them.
5. No "quote" wording — use "fixed price", "Book now".
6. One page, one intent, one primary keyword (from `keywords-map.md`).
7. Title ≤ 60 characters, description ≤ 158 characters, one H1.
8. Link to 2+ service pages and 1+ blog post with descriptive anchors.
9. No hazardous waste, no Deira or Karama.
10. Articles are 2,000+ words with key takeaways, a table of contents and 5–8 FAQs.
11. Run the QA checklist (and `npm run seo:audit`) before every publish.
