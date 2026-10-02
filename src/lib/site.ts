// Central business details. Change the brand, domain or phone here and it
// flows through every page, CTA, schema block and the sitemap.

const PHONE_E164 = "+971565993691";

export const site = {
  name: "TakeJunk Dubai",
  shortName: "TakeJunk",
  tagline: "Furniture & junk removal, clearance and pickup across Dubai",
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.yourdomain.ae).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.takejunkfurnituredubai.com").replace(/\/$/, ""),
  phoneDisplay: "+971 56 599 3691",
  phoneE164: PHONE_E164,
  telHref: `tel:${PHONE_E164}`,
  hours: "7 days a week, 6:00 AM – 11:00 PM",
  city: "Dubai",
  country: "AE",
  description:
    "Premium furniture and junk removal in Dubai — sofas, beds, mattresses, wardrobes, luxury pieces, office furniture, appliances, household junk and full villa clearances. Same-day pickup, careful handling and responsible disposal. Call or WhatsApp to book.",
};

export function whatsappHref(message?: string) {
  const text =
    message ??
    "Hi TakeJunk, I'd like to book furniture / junk removal in Dubai.";
  return `https://wa.me/${PHONE_E164.replace("+", "")}?text=${encodeURIComponent(text)}`;
}

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}
