// Blog model + helpers. Each article lives in its own file in ./posts.
// Body blocks are rendered by ArticleBody. Inline syntax inside text:
// [link text](/path) and **bold**. Full URLs open in a new tab.
import type { Faq } from "./services";
import mattress from "./posts/how-to-get-rid-of-an-old-mattress-in-dubai";
import villaChecklist from "./posts/villa-move-out-clearance-checklist-dubai";
import sellDonate from "./posts/sell-donate-or-dispose-old-furniture-dubai";
import apartmentPrep from "./posts/prepare-apartment-for-furniture-removal-dubai";
import luxury from "./posts/how-to-move-luxury-furniture-without-damage";
import garage from "./posts/garage-storeroom-declutter-guide";
import municipalityBulkyWaste from "./posts/dubai-municipality-bulky-waste-collection";
import furnitureDisposal from "./posts/how-to-dispose-of-furniture-in-dubai";
import sofaDisposal from "./posts/how-to-dispose-of-an-old-sofa-in-dubai";
import donateFurniture from "./posts/where-to-donate-furniture-in-dubai";
import fridgeDisposal from "./posts/how-to-dispose-of-a-fridge-in-dubai";
import moveOutPermits from "./posts/move-out-permit-service-lift-guide-dubai";
import leavingUae from "./posts/leaving-uae-what-to-do-with-furniture";
import chooseJunkRemoval from "./posts/how-to-choose-junk-removal-company-dubai";
import officeChecklist from "./posts/office-clearance-checklist-dubai";
import landlordFurniture from "./posts/landlord-furniture-removal-between-tenants-dubai";
import holidayHomeRefresh from "./posts/holiday-home-furniture-refresh-dubai";
import wardrobeDismantle from "./posts/how-to-dismantle-wardrobe-for-moving-dubai";
import gardenFurniture from "./posts/dispose-sun-damaged-garden-furniture-dubai";
import waterDamaged from "./posts/water-damaged-furniture-disposal-dubai";
import summerHeat from "./posts/moving-furniture-dubai-summer-heat";
import bedDismantle from "./posts/how-to-dismantle-and-dispose-of-a-bed-frame-in-dubai";
import diningTableDisposal from "./posts/how-to-dispose-of-a-dining-table-and-chairs-in-dubai";
import balconyClearance from "./posts/balcony-furniture-clearance-dubai";
import furnitureRecycling from "./posts/furniture-recycling-dubai";
import estateClearance from "./posts/estate-clearance-dubai-guide";
import sameDayFurniture from "./posts/same-day-furniture-removal-dubai";
import gardenWasteCollection from "./posts/dubai-municipality-garden-waste-collection";
import cardboardRecycling from "./posts/cardboard-box-recycling-dubai";
import whatJunkRemovalTakes from "./posts/what-junk-removal-companies-take-in-dubai";
import washingMachineDisposal from "./posts/how-to-dispose-of-a-washing-machine-in-dubai";
import gymEquipmentRemoval from "./posts/gym-equipment-removal-dubai";
import carpetDisposal from "./posts/carpet-disposal-dubai";
import airConditionerDisposal from "./posts/how-to-dispose-of-an-air-conditioner-in-dubai";
import tvDisposal from "./posts/how-to-dispose-of-an-old-tv-in-dubai";
import woodWasteDisposal from "./posts/wood-waste-disposal-dubai";
import waterHeaterDisposal from "./posts/how-to-dispose-of-a-water-heater-in-dubai";
import colourCodedBins from "./posts/colour-coded-bins-dubai";
import howWasteCollectionWorks from "./posts/how-waste-collection-works-in-dubai";
import cookingRangeDisposal from "./posts/how-to-dispose-of-a-cooking-range-in-dubai";
import dishwasherDisposal from "./posts/how-to-dispose-of-a-dishwasher-in-dubai";
import renovationWasteDisposal from "./posts/renovation-waste-disposal-dubai";
import officeFurnitureDisposal from "./posts/how-to-dispose-of-office-furniture-in-dubai";
import bbqDisposal from "./posts/how-to-dispose-of-a-bbq-grill-in-dubai";
import glassMirrorDisposal from "./posts/glass-and-mirror-disposal-dubai";
import pianoRemoval from "./posts/piano-removal-and-disposal-dubai";
import trampolineRemoval from "./posts/trampoline-and-play-equipment-removal-dubai";
import curtainBlindRemoval from "./posts/curtain-and-blind-removal-dubai";
import poolTableRemoval from "./posts/pool-table-removal-and-disposal-dubai";
import plantPotDisposal from "./posts/plant-pot-and-planter-disposal-dubai";
import gazeboRemoval from "./posts/gazebo-and-pergola-removal-dubai";
import gardenShedRemoval from "./posts/garden-shed-removal-dubai";
import aquariumRemoval from "./posts/aquarium-and-fish-tank-removal-dubai";
import safeRemoval from "./posts/safe-removal-and-disposal-dubai";
import bookshelfRemoval from "./posts/bookshelf-and-bookcase-removal-dubai";
import patioUmbrellaDisposal from "./posts/patio-umbrella-and-parasol-disposal-dubai";
import babyCribRemoval from "./posts/baby-crib-and-nursery-furniture-removal-dubai";
import massageChairRemoval from "./posts/massage-chair-removal-and-disposal-dubai";
import sunLoungerDisposal from "./posts/sun-lounger-and-daybed-disposal-dubai";
import dressingTableDisposal from "./posts/dressing-table-and-vanity-removal-dubai";
import tvUnitRemoval from "./posts/tv-unit-and-media-console-removal-dubai";
import coffeeTableDisposal from "./posts/coffee-table-and-side-table-disposal-dubai";
import shoeCabinetRemoval from "./posts/shoe-cabinet-and-entryway-storage-removal-dubai";

export type Block =
  | { h2: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { tip: string };

export type Post = {
  slug: string;
  /** H1. Contains the primary keyword. */
  title: string;
  /** <title> tag — ≤ 60 characters. */
  metaTitle: string;
  /** Meta description and card excerpt — 120–158 characters. */
  description: string;
  /** Primary keyword from docs/content/keywords-map.md. */
  keyword: string;
  category: "Guides" | "Moving out" | "Junk removal" | "Furniture care";
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** ISO date of the last meaningful content update, if any. */
  updated?: string;
  image: string;
  imageAlt: string;
  /** Service slugs linked in the "Related services" box. */
  services: string[];
  /** 3–5 one-sentence answers shown in the "Key takeaways" box. */
  takeaways: string[];
  body: Block[];
  /** 5–8 questions; rendered as an FAQ section with FAQPage schema. */
  faqs: Faq[];
};

export const posts: Post[] = [
  mattress,
  villaChecklist,
  sellDonate,
  apartmentPrep,
  luxury,
  garage,
  municipalityBulkyWaste,
  furnitureDisposal,
  sofaDisposal,
  donateFurniture,
  fridgeDisposal,
  moveOutPermits,
  leavingUae,
  chooseJunkRemoval,
  officeChecklist,
  landlordFurniture,
  holidayHomeRefresh,
  wardrobeDismantle,
  gardenFurniture,
  waterDamaged,
  summerHeat,
  bedDismantle,
  diningTableDisposal,
  balconyClearance,
  furnitureRecycling,
  estateClearance,
  sameDayFurniture,
  gardenWasteCollection,
  cardboardRecycling,
  whatJunkRemovalTakes,
  washingMachineDisposal,
  gymEquipmentRemoval,
  carpetDisposal,
  airConditionerDisposal,
  tvDisposal,
  woodWasteDisposal,
  waterHeaterDisposal,
  colourCodedBins,
  howWasteCollectionWorks,
  cookingRangeDisposal,
  dishwasherDisposal,
  renovationWasteDisposal,
  officeFurnitureDisposal,
  bbqDisposal,
  glassMirrorDisposal,
  pianoRemoval,
  trampolineRemoval,
  curtainBlindRemoval,
  poolTableRemoval,
  plantPotDisposal,
  gazeboRemoval,
  gardenShedRemoval,
  aquariumRemoval,
  safeRemoval,
  bookshelfRemoval,
  patioUmbrellaDisposal,
  babyCribRemoval,
  massageChairRemoval,
  sunLoungerDisposal,
  dressingTableDisposal,
  tvUnitRemoval,
  coffeeTableDisposal,
  shoeCabinetRemoval,
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

const strip = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");

/** Words in takeaways + body + FAQs (what the reader actually reads). */
export function wordCount(post: Post) {
  const body = post.body.flatMap((b) => ("ul" in b ? b.ul : "ol" in b ? b.ol : [Object.values(b)[0] as string]));
  const faqs = post.faqs.flatMap((f) => [f.q, f.a]);
  return strip([...post.takeaways, ...body, ...faqs].join(" ")).split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(post: Post) {
  return Math.max(1, Math.round(wordCount(post) / 220));
}

export function slugify(text: string) {
  return strip(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const FAQ_ID = "faq";

/** Table of contents: every H2, plus the FAQ section. */
export function headings(post: Post) {
  const h2s = post.body.flatMap((b) => ("h2" in b ? [{ id: slugify(b.h2), text: strip(b.h2) }] : []));
  return post.faqs.length ? [...h2s, { id: FAQ_ID, text: "Frequently asked questions" }] : h2s;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Newest first. */
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
