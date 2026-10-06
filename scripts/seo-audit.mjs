// SEO + content audit over the production build.
// Usage: npm run build && npm run seo:audit
// Exits with code 1 if any ERROR is found (warnings don't fail).
import fs from "node:fs";
import path from "node:path";

const ROOT = ".next/server/app";
if (!fs.existsSync(ROOT)) {
  console.error("No build found. Run `npm run build` first.");
  process.exit(1);
}

const files = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
})(ROOT);

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
const text = (html) =>
  decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, " ")
      .replace(/<style[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " "),
  );

const pages = files
  .map((file) => {
    const html = fs.readFileSync(file, "utf8");
    const route = "/" + path.relative(ROOT, file).split(path.sep).join("/").replace(/\.html$/, "").replace(/^index$/, "");
    const m = (re) => (html.match(re) || [])[1];
    return {
      route,
      html,
      title: decode(m(/<title>(.*?)<\/title>/) || ""),
      desc: decode(m(/<meta name="description" content="([^"]*)"/) || ""),
      canonical: m(/<link rel="canonical" href="([^"]*)"/),
      h1: (html.match(/<h1[\s>]/g) || []).length,
      og: {
        title: m(/property="og:title" content="([^"]*)"/),
        image: m(/property="og:image" content="([^"]*)"/),
        url: m(/property="og:url" content="([^"]*)"/),
        site: m(/property="og:site_name" content="([^"]*)"/),
      },
      imgsNoAlt: (html.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length,
      jsonld: [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((x) => {
        try {
          return JSON.parse(x[1])["@type"];
        } catch {
          return "INVALID";
        }
      }),
      links: [...html.matchAll(/href="(\/[^"#?]*)/g)].map((x) => x[1]),
      body: text(html),
    };
  })
  .filter((p) => !/_not-found|_global-error/.test(p.route));

const routes = new Set(pages.map((p) => p.route));
const ASSETS = /^\/(_next|images|favicon|icon|apple-icon|sitemap|robots)/;

// Words the content rules ban from visible copy.
const BANNED = [
  [/\bfree quote\b|\bget a quote\b|\bquote\b/i, "quote wording (use 'fixed price' / 'Book now')"],
  [/\bDeira\b|\bKarama\b/, "Deira/Karama (excluded areas)"],
  [/\bcheap\b/i, "'cheap' (use 'affordable')"],
  [/#1\b|number one in dubai|best in dubai/i, "unprovable superlative"],
  [/\bguaranteed\b/i, "'guaranteed' (unprovable promise)"],
  [/565993691|56 599 3691/, "old phone number"],
];

const errors = [];
const warnings = [];
const err = (route, msg) => errors.push(`${route}  ${msg}`);
const warn = (route, msg) => warnings.push(`${route}  ${msg}`);

for (const p of pages) {
  if (!p.title) err(p.route, "missing <title>");
  else if (p.title.length > 60) err(p.route, `title ${p.title.length} chars (max 60): "${p.title}"`);
  if (!p.desc) err(p.route, "missing meta description");
  else if (p.desc.length > 160) err(p.route, `description ${p.desc.length} chars (max 160)`);
  else if (p.desc.length < 70) warn(p.route, `description only ${p.desc.length} chars`);
  if (!p.canonical) err(p.route, "missing canonical");
  if (p.h1 !== 1) err(p.route, `${p.h1} <h1> tags (need exactly 1)`);
  if (!p.og.title || !p.og.image || !p.og.url || !p.og.site) err(p.route, "incomplete Open Graph tags");
  if (p.imgsNoAlt) err(p.route, `${p.imgsNoAlt} image(s) without alt`);
  if (p.jsonld.includes("INVALID")) err(p.route, "invalid JSON-LD");
  for (const l of p.links) {
    const r = l.replace(/\/$/, "") || "/";
    if (!routes.has(r) && !ASSETS.test(r)) err(p.route, `broken internal link ${l}`);
  }
  for (const [re, label] of BANNED) if (re.test(p.body)) err(p.route, `banned: ${label}`);
}

for (const key of ["title", "desc"]) {
  const seen = new Map();
  for (const p of pages) seen.set(p[key], [...(seen.get(p[key]) || []), p.route]);
  for (const [value, list] of seen) if (value && list.length > 1) err(list.join(", "), `duplicate ${key}: "${value.slice(0, 60)}"`);
}

const blog = pages.filter((p) => p.route.startsWith("/blog/"));
for (const p of blog) {
  // Count what the reader reads: key takeaways + article body + FAQ section
  // (everything between the takeaways box and the booking box).
  const start = p.html.indexOf('id="key-takeaways"');
  const end = p.html.indexOf("Want us to handle it?");
  const readable = start > -1 && end > start ? p.html.slice(start, end).replace(/<nav[\s\S]*?<\/nav>/g, " ") : "";
  const words = text(readable).split(/\s+/).filter(Boolean).length;
  // Internal links inside the article body only (not sidebar/nav/footer).
  const article = (p.html.match(/<div class="article">([\s\S]*?)<section aria-labelledby="faq"/) || [])[1] || "";
  const bodyServiceLinks = new Set([...article.matchAll(/href="(\/services\/[^"#?]+)"/g)].map((m) => m[1]));
  const bodyBlogLinks = new Set([...article.matchAll(/href="(\/blog\/[^"#?]+)"/g)].map((m) => m[1]));

  if (!p.jsonld.includes("BlogPosting")) err(p.route, "missing BlogPosting schema");
  if (!p.jsonld.includes("FAQPage")) err(p.route, "missing FAQ section / FAQPage schema");
  if (start === -1) err(p.route, "missing Key takeaways box");
  if (!p.html.includes('aria-label="Table of contents"')) err(p.route, "missing table of contents");
  if (words < 2000) err(p.route, `~${words} words (articles must be 2,000+ words incl. takeaways and FAQs)`);
  if (bodyServiceLinks.size < 2) err(p.route, `only ${bodyServiceLinks.size} service link(s) in the article body (need 2+)`);
  if (bodyBlogLinks.size < 1) err(p.route, "no link to another blog post in the article body (need 1+)");
  if (!/"dateModified"/.test(p.html)) warn(p.route, "no dateModified in schema");
}

console.log(`Audited ${pages.length} pages (${blog.length} blog posts).\n`);
if (warnings.length) console.log(`WARNINGS (${warnings.length})\n  ` + warnings.join("\n  ") + "\n");
if (errors.length) {
  console.log(`ERRORS (${errors.length})\n  ` + errors.join("\n  "));
  process.exit(1);
}
console.log("✓ No errors.");
