export type IconName =
  | "home"
  | "sofa"
  | "mattress"
  | "bed"
  | "wardrobe"
  | "dining"
  | "gem"
  | "office"
  | "villa"
  | "truck"
  | "trash"
  | "appliance"
  | "box";

export type Faq = { q: string; a: string };

export type ServiceCategory = "furniture" | "junk";

export type Service = {
  slug: string;
  name: string;
  /** Used in compact lists and nav. */
  shortName: string;
  category: ServiceCategory;
  icon: IconName;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  /** One line for cards. */
  excerpt: string;
  headline: string;
  intro: string[];
  /** What we take away under this service. */
  items: string[];
  highlights: { title: string; text: string }[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    shortName: "Furniture Removal",
    category: "furniture",
    icon: "home",
    image: "/images/furniture-removal.jpg",
    imageAlt: "Modern Dubai living room with grey sofas ready for furniture removal",
    metaTitle: "Furniture Removal Dubai | Same-Day Pickup & Disposal",
    metaDescription:
      "Furniture removal in Dubai for apartments, villas and offices. Single items or full rooms, same-day slots, careful handling and responsible disposal.",
    excerpt: "Single pieces or whole rooms, lifted, loaded and cleared the same day.",
    headline: "Furniture removal in Dubai, handled properly",
    intro: [
      "Whether you're moving out, redecorating or simply reclaiming a room, our furniture removal team takes the heavy lifting off your hands. We remove single items or entire households from apartments, townhouses and villas across Dubai.",
      "Every job is priced upfront from a few photos on WhatsApp. On the day, a uniformed crew arrives with blankets, straps and tools, dismantles where needed, protects your floors, lifts and corridors, and leaves the space swept and clear.",
      "Items in good condition are routed to donation and resale partners where possible, and everything else goes to licensed recycling and disposal facilities — never dumped.",
    ],
    items: [
      "Sofas, sectionals and armchairs",
      "Beds, bed frames and mattresses",
      "Wardrobes, dressers and cabinets",
      "Dining tables and chairs",
      "TV units, bookshelves and side tables",
      "Outdoor and garden furniture",
      "Kids' furniture and bunk beds",
      "Office desks and chairs",
    ],
    highlights: [
      { title: "Upfront WhatsApp pricing", text: "Send photos, get a clear price before we arrive. No surprises on the day." },
      { title: "Floor & wall protection", text: "Corner guards, blankets and runners to protect marble, parquet and lifts." },
      { title: "Dismantling included", text: "Beds, wardrobes and modular units taken apart safely by our crew." },
      { title: "Donate, recycle, dispose", text: "Reusable pieces get a second life; the rest is disposed of responsibly." },
    ],
    faqs: [
      { q: "How quickly can you remove furniture in Dubai?", a: "We usually offer same-day or next-day slots across our service areas. Message us on WhatsApp with photos and your preferred time and we'll confirm availability straight away." },
      { q: "How is furniture removal priced?", a: "Pricing depends on the number and size of items, access (floor, lift, parking) and whether dismantling is needed. We give a fixed price upfront from photos so you know the cost before we arrive." },
      { q: "Do I need to be home during the removal?", a: "Not always. Many clients arrange access through building security, a concierge or a neighbour. We'll send photos when the job is complete." },
      { q: "Do you handle building permits and lift bookings?", a: "We'll guide you on what your building or community requires and work within booked lift slots and permitted hours." },
    ],
    related: ["sofa-removal", "villa-furniture-clearance", "furniture-pickup-disposal", "wardrobe-cabinet-removal"],
  },
  {
    slug: "sofa-removal",
    name: "Sofa Removal",
    shortName: "Sofa Removal",
    category: "furniture",
    icon: "sofa",
    image: "/images/sofa.jpg",
    imageAlt: "Tan leather three-seater sofa prepared for sofa removal in Dubai",
    metaTitle: "Sofa Removal Dubai | Couch & Sectional Pickup",
    metaDescription:
      "Sofa removal in Dubai: couches, sectionals, sofa beds, recliners and armchairs. Careful carrying through tight lifts and stairwells. Same-day pickup.",
    excerpt: "Couches, L-shaped sectionals, sofa beds and recliners removed with care.",
    headline: "Sofa and couch removal across Dubai",
    intro: [
      "Sofas are bulky, awkward and often heavier than they look — especially recliners, sofa beds and large L-shaped sectionals. Our crew removes them without scuffing walls, door frames or lift interiors.",
      "We detach legs and modules, wrap upholstery to keep things clean on the way out, and navigate tight corridors, service lifts and villa staircases with the right technique and equipment.",
      "Leather and fabric sofas in good condition are prioritised for donation, while worn pieces are taken to recycling and disposal facilities.",
    ],
    items: [
      "Two- and three-seater sofas",
      "L-shaped and U-shaped sectionals",
      "Sofa beds and futons",
      "Electric and manual recliners",
      "Armchairs and accent chairs",
      "Ottomans, footstools and poufs",
      "Outdoor lounge sets",
      "Majlis seating",
    ],
    highlights: [
      { title: "Sectionals made simple", text: "Modules separated and carried individually to protect your home." },
      { title: "Tight-space specialists", text: "Experience with narrow lifts, spiral stairs and high-rise service routes." },
      { title: "Clean exit", text: "Upholstery wrapped so dust and debris stay out of corridors." },
      { title: "Second life first", text: "Usable sofas are routed to donation partners where possible." },
    ],
    faqs: [
      { q: "Can you remove a sofa that doesn't fit in the lift?", a: "Yes. We'll dismantle what can be dismantled and, where the building allows, use the service stairs. We'll assess from your photos and plan the route before arriving." },
      { q: "Do you remove recliners with electric mechanisms?", a: "Yes. We disconnect power safely and remove the full unit, including heavy motorised recliners and cinema seating." },
      { q: "Will you take a sofa in poor condition?", a: "Absolutely. Torn, stained or broken sofas are taken for responsible disposal and recycling." },
    ],
    related: ["furniture-removal", "mattress-removal", "luxury-furniture-removal", "furniture-pickup-disposal"],
  },
  {
    slug: "mattress-removal",
    name: "Mattress Removal",
    shortName: "Mattress Removal",
    category: "furniture",
    icon: "mattress",
    image: "/images/mattress.jpg",
    imageAlt: "Neatly made double bed and mattress in a Dubai apartment bedroom",
    metaTitle: "Mattress Removal Dubai | Old Mattress Pickup & Disposal",
    metaDescription:
      "Hygienic mattress removal in Dubai. Single to super-king mattresses bagged, removed and disposed of responsibly. Same-day pickup available.",
    excerpt: "Old mattresses bagged, removed and disposed of hygienically.",
    headline: "Hygienic mattress removal and disposal",
    intro: [
      "Old mattresses are heavy, floppy and difficult to dispose of yourself. We remove mattresses of every size — from single and cot mattresses to king and super-king — and handle them hygienically from bedroom to truck.",
      "Mattresses are sealed in protective covers before they leave the room, keeping your corridors and lifts clean and making building management happy.",
      "We separate materials for recycling where facilities allow, so foam, springs and fabric don't all end up in landfill.",
    ],
    items: [
      "Single and twin mattresses",
      "Double and queen mattresses",
      "King and super-king mattresses",
      "Memory foam and hybrid mattresses",
      "Cot and crib mattresses",
      "Mattress toppers and box springs",
      "Floor and guest mattresses",
      "Hotel and serviced-apartment mattresses in bulk",
    ],
    highlights: [
      { title: "Sealed & sanitary", text: "Mattresses bagged before they're moved through shared spaces." },
      { title: "Any size, any quantity", text: "From one cot mattress to a full building refresh." },
      { title: "Recycling-first", text: "Foam, steel and textiles separated where facilities allow." },
      { title: "Pair with bed removal", text: "Remove the frame, base and headboard in the same visit." },
    ],
    faqs: [
      { q: "Do you remove stained or damaged mattresses?", a: "Yes. We remove mattresses in any condition. They are sealed in protective covers before being carried out." },
      { q: "Can you remove multiple mattresses at once?", a: "Yes — we regularly handle bulk mattress removal for villas, staff accommodation, holiday homes and serviced apartments." },
      { q: "Can you take the bed frame too?", a: "Of course. Most clients book mattress and bed removal together; we'll dismantle the frame on site." },
    ],
    related: ["bed-removal", "furniture-removal", "furniture-pickup-disposal", "villa-furniture-clearance"],
  },
  {
    slug: "bed-removal",
    name: "Bed Removal",
    shortName: "Bed Removal",
    category: "furniture",
    icon: "bed",
    image: "/images/bed.jpg",
    imageAlt: "Upholstered king bed with tufted headboard and bench in a villa bedroom",
    metaTitle: "Bed Removal Dubai | Bed Frame Dismantling & Disposal",
    metaDescription:
      "Bed removal in Dubai including dismantling of king, queen, bunk, storage and ottoman beds. Headboards, bases and mattresses removed in one visit. Book today.",
    excerpt: "Frames, headboards, bunks and storage beds dismantled and removed.",
    headline: "Bed and bed frame removal in Dubai",
    intro: [
      "Beds rarely leave a room in one piece. Our team dismantles king, queen, single, bunk, storage and ottoman beds on site, bags the hardware and removes everything — frame, base, headboard and mattress — in a single visit.",
      "Hydraulic storage beds and upholstered frames are handled carefully to avoid damage to walls and flooring, and we can work around fitted wardrobes and tight bedroom layouts.",
      "Perfect when you're upgrading your bedroom, preparing a rental for new tenants or clearing a guest room.",
    ],
    items: [
      "King, queen and double bed frames",
      "Single, bunk and loft beds",
      "Ottoman and hydraulic storage beds",
      "Upholstered and tufted headboards",
      "Divan bases and box springs",
      "Kids' beds and cots",
      "Bedside tables",
      "Mattresses (any size)",
    ],
    highlights: [
      { title: "On-site dismantling", text: "Tools, bags for fixings and careful takedown included." },
      { title: "Hydraulics handled", text: "Gas-lift storage beds made safe before removal." },
      { title: "Room left clear", text: "We sweep up after the frame is out." },
      { title: "One visit", text: "Frame, base, headboard and mattress in the same trip." },
    ],
    faqs: [
      { q: "Do I need to dismantle the bed before you arrive?", a: "No. Dismantling is included — just remove bedding and personal items." },
      { q: "Can you remove a bed fixed to the wall?", a: "We can detach wall-mounted headboards. Minor wall touch-ups after removal aren't included, but we'll leave fixings neatly." },
      { q: "Do you remove bunk beds and loft beds?", a: "Yes, including metal and timber bunk and loft beds of all sizes." },
    ],
    related: ["mattress-removal", "wardrobe-cabinet-removal", "furniture-removal", "villa-furniture-clearance"],
  },
  {
    slug: "wardrobe-cabinet-removal",
    name: "Wardrobe & Cabinet Removal",
    shortName: "Wardrobes & Cabinets",
    category: "furniture",
    icon: "wardrobe",
    image: "/images/wardrobe.jpg",
    imageAlt: "Tall timber wardrobe cabinet with open shelving against a blush wall",
    metaTitle: "Wardrobe & Cabinet Removal Dubai | Dismantling Included",
    metaDescription:
      "Wardrobe and cabinet removal in Dubai: wardrobes, sliding-door units, dressers, display cabinets and storage units, dismantled and removed safely.",
    excerpt: "Wardrobes, dressers and display cabinets dismantled and cleared.",
    headline: "Wardrobe and cabinet removal",
    intro: [
      "Large wardrobes and cabinets are among the hardest items to move — tall, heavy and often assembled inside the room they're in. We dismantle them panel by panel, remove mirrored and glass doors safely, and carry everything out without scraping walls or ceilings.",
      "From IKEA-style flat-pack units to solid wood armoires and glass display cabinets, our team brings the right tools and packing materials for each piece.",
      "We can also detach freestanding storage from walls (anti-tip fixings) and leave the space ready for your new furniture.",
    ],
    items: [
      "Two-, three- and four-door wardrobes",
      "Sliding and mirrored-door wardrobes",
      "Chests of drawers and dressers",
      "Display and glass cabinets",
      "TV and media cabinets",
      "Shoe cabinets and storage units",
      "Bookcases and shelving",
      "Sideboards and buffets",
    ],
    highlights: [
      { title: "Glass & mirror safe", text: "Doors and panels removed and wrapped before carrying." },
      { title: "Panel-by-panel", text: "Flat-pack and solid wood units dismantled with care." },
      { title: "Anti-tip fixings removed", text: "Wall brackets detached neatly." },
      { title: "Ceiling-height pieces", text: "Tall units lowered safely without damage." },
    ],
    faqs: [
      { q: "Do you remove built-in wardrobes?", a: "Our service covers freestanding and fitted units that can be unscrewed and removed. Joinery that is part of the building structure may need a fit-out contractor — send photos and we'll advise." },
      { q: "Should I empty the wardrobe first?", a: "Yes please — clothes and contents should be removed. If you have items you want to dispose of too, let us know and we'll include them in the price." },
      { q: "Can you remove a very heavy solid wood armoire?", a: "Yes. We assess weight and access in advance and send enough crew to carry it safely." },
    ],
    related: ["bed-removal", "dining-table-chair-removal", "furniture-removal", "villa-furniture-clearance"],
  },
  {
    slug: "dining-table-chair-removal",
    name: "Dining Table & Chair Removal",
    shortName: "Dining Sets",
    category: "furniture",
    icon: "dining",
    image: "/images/dining.jpg",
    imageAlt: "Round dining table with green velvet chairs in a bright Dubai home",
    metaTitle: "Dining Table & Chair Removal Dubai | Dining Set Pickup",
    metaDescription:
      "Dining table and chair removal in Dubai. Glass, marble and solid wood tables, extending tables and full dining sets removed safely. Same-day pickup available.",
    excerpt: "Glass, marble and solid wood dining sets removed without a scratch.",
    headline: "Dining table and chair removal",
    intro: [
      "Dining tables come in every shape and material — heavy marble tops, tempered glass, extending timber tables and pedestal bases. We remove tops and legs separately, wrap glass and stone, and carry each component safely.",
      "Chairs, benches, sideboards and bar stools can all go in the same visit, so your dining area is cleared in one go.",
      "Good-condition dining sets are often in demand for donation and resale, so we route them for reuse whenever we can.",
    ],
    items: [
      "Marble and stone dining tables",
      "Glass and tempered-glass tables",
      "Solid wood and extending tables",
      "Dining chairs and benches",
      "Bar tables and bar stools",
      "Breakfast and bistro sets",
      "Sideboards and buffets",
      "Outdoor dining sets",
    ],
    highlights: [
      { title: "Stone & glass handling", text: "Heavy tops wrapped and carried upright by a full crew." },
      { title: "Bases separated", text: "Pedestals and legs removed to fit lifts and doorways." },
      { title: "Whole set, one visit", text: "Table, chairs, stools and sideboard cleared together." },
      { title: "Reuse where possible", text: "Quality sets routed to donation and resale." },
    ],
    faqs: [
      { q: "Can you remove a heavy marble dining table?", a: "Yes. Marble tops can weigh well over 100 kg; we send an appropriately sized crew and protective materials to carry the top separately from the base." },
      { q: "Do you take just the chairs?", a: "Yes — single items like a set of chairs or a few bar stools are no problem." },
      { q: "Is outdoor dining furniture included?", a: "Yes. Garden and terrace dining sets, including rattan and metal sets, are part of this service." },
    ],
    related: ["furniture-removal", "wardrobe-cabinet-removal", "luxury-furniture-removal", "sofa-removal"],
  },
  {
    slug: "luxury-furniture-removal",
    name: "Luxury Furniture Removal",
    shortName: "Luxury Furniture",
    category: "furniture",
    icon: "gem",
    image: "/images/luxury.jpg",
    imageAlt: "Luxury bedroom with channel-tufted bed, gold chandelier and designer furnishings",
    metaTitle: "Luxury Furniture Removal Dubai | White-Glove Service",
    metaDescription:
      "White-glove luxury furniture removal in Dubai. Designer sofas, marble tables and high-value pieces handled with care in villas and penthouses.",
    excerpt: "White-glove handling for designer, marble and high-value pieces.",
    headline: "White-glove luxury furniture removal",
    intro: [
      "Designer sofas, Italian marble tables, lacquered cabinetry and statement lighting deserve more than a standard removal. Our luxury service uses extra crew, premium wrapping and a slower, more deliberate process to protect both the pieces and your home.",
      "We're used to working in Palm Jumeirah villas, Downtown penthouses and Emirates Hills residences — respecting community rules, concierge procedures and your privacy.",
      "If you're selling or consigning, we can deliver pieces to your chosen consignment store, storage unit or new address instead of disposal.",
    ],
    items: [
      "Designer and Italian sofas",
      "Marble, onyx and stone tables",
      "Lacquered and high-gloss cabinetry",
      "Statement lighting and chandeliers (detached)",
      "Large mirrors and framed artwork",
      "Leather and velvet seating",
      "Antique and heritage pieces",
      "Pianos and specialist items (on request)",
    ],
    highlights: [
      { title: "Premium wrapping", text: "Soft blankets, corner guards and stretch wrap for every finish." },
      { title: "Discreet, uniformed crew", text: "Experienced handlers who respect privacy and community rules." },
      { title: "Relocate or consign", text: "Deliver to storage, consignment or a new home rather than disposal." },
      { title: "Photo documentation", text: "Before-and-after photos of each piece on request." },
    ],
    faqs: [
      { q: "Can you deliver luxury furniture to a consignment store instead of disposing of it?", a: "Yes. We can transport pieces to a consignment store, storage facility or new address within Dubai." },
      { q: "Do you remove chandeliers?", a: "We can take down and remove decorative lighting. Electrical disconnection should be done by a qualified electrician — we're happy to coordinate timing with yours." },
      { q: "Are you experienced with gated communities?", a: "Yes. We regularly work in gated villa communities and premium towers and follow their access and working-hour rules." },
    ],
    related: ["villa-furniture-clearance", "sofa-removal", "dining-table-chair-removal", "furniture-removal"],
  },
  {
    slug: "office-furniture-removal",
    name: "Office Furniture Removal",
    shortName: "Office Furniture",
    category: "furniture",
    icon: "office",
    image: "/images/office.jpg",
    imageAlt: "Bright open-plan office lounge with chairs, desks and shelving",
    metaTitle: "Office Furniture Removal Dubai | Desks & Workstations",
    metaDescription:
      "Office furniture removal in Dubai: desks, workstations, chairs, meeting tables and filing cabinets. After-hours and weekend clearances available.",
    excerpt: "Workstations, chairs and meeting rooms cleared — after hours if needed.",
    headline: "Office furniture removal and clearance",
    intro: [
      "Relocating, downsizing or refitting? We clear office furniture from single rooms to full floors across Business Bay, DIFC, Trade Centre and beyond — with minimal disruption to your team.",
      "We work after hours and at weekends to fit around your schedule and building management rules, dismantling workstations, removing seating and clearing storage efficiently.",
      "Where possible, reusable office furniture is donated or resold, helping your business reduce waste and meet sustainability goals.",
    ],
    items: [
      "Desks and bench workstations",
      "Office and task chairs",
      "Meeting and boardroom tables",
      "Filing cabinets and pedestals",
      "Reception desks and lounge seating",
      "Partitions and pods (freestanding)",
      "Shelving and storage units",
      "Pantry and breakout furniture",
    ],
    highlights: [
      { title: "After-hours service", text: "Evening and weekend clearances so work isn't interrupted." },
      { title: "Building-compliant", text: "We work within service lift bookings and loading bay slots." },
      { title: "Scalable crews", text: "From a single office to full-floor decommissioning." },
      { title: "Sustainable outcomes", text: "Reuse and recycling prioritised over landfill." },
    ],
    faqs: [
      { q: "Can you work outside office hours?", a: "Yes. Most commercial clearances happen in the evening or at weekends, subject to your building's rules." },
      { q: "Do you provide documentation for building management?", a: "We can provide the details building management typically requests, such as crew names and vehicle information, ahead of the job." },
      { q: "Do you remove IT equipment too?", a: "We focus on furniture. If you have a small amount of non-data equipment we can include it — ask us when you send photos." },
    ],
    related: ["furniture-removal", "furniture-pickup-disposal", "dining-table-chair-removal", "wardrobe-cabinet-removal"],
  },
  {
    slug: "villa-furniture-clearance",
    name: "Villa Furniture Clearance",
    shortName: "Villa Clearance",
    category: "furniture",
    icon: "villa",
    image: "/images/villa.jpg",
    imageAlt: "Contemporary white Dubai villa with swimming pool and terrace",
    metaTitle: "Villa Furniture Clearance Dubai | Full House Clearance",
    metaDescription:
      "Full villa furniture clearance in Dubai: every room, majlis, maid's room, garden and garage. Ideal for move-outs, renovations and landlords.",
    excerpt: "Whole-villa clearances: every room, terrace, garden and garage.",
    headline: "Full villa furniture clearance",
    intro: [
      "Clearing an entire villa is a big job — multiple bedrooms, majlis and living areas, maid's room, garden furniture and a garage that's been collecting things for years. We plan and execute full clearances in a single day for most villas.",
      "Ideal for end-of-tenancy move-outs, landlords preparing a property, pre-renovation clear-outs and estate clearances. We can sort items into keep, donate and dispose, so nothing you want goes by mistake.",
      "We work across Dubai's villa communities — Arabian Ranches, Emirates Hills, Dubai Hills Estate, The Meadows, The Springs, Jumeirah Islands, Tilal Al Ghaf and more — and follow each community's access and working-hour requirements.",
    ],
    items: [
      "Living room, majlis and family room furniture",
      "All bedroom furniture and mattresses",
      "Dining and kitchen furniture",
      "Maid's room and driver's room furniture",
      "Garden, pool and terrace furniture",
      "Garage and storeroom contents",
      "Kids' playroom furniture",
      "Home gym equipment (freestanding)",
    ],
    highlights: [
      { title: "Single-day clearances", text: "Right-sized crews and trucks to finish most villas in a day." },
      { title: "Keep / donate / dispose", text: "We tag and sort so nothing important is lost." },
      { title: "Landlord-ready", text: "Ideal before handovers, inspections and new tenancies." },
      { title: "Community-compliant", text: "Gate passes, working hours and access rules respected." },
    ],
    faqs: [
      { q: "How long does a villa clearance take?", a: "Most 3–5 bedroom villas are cleared in one day. Larger properties or those with full garages and storerooms may need longer — we'll confirm when quoting." },
      { q: "Can you clear a villa while I'm abroad?", a: "Yes. Many owners and landlords arrange access remotely. We share photos and a video walkthrough before and after the clearance." },
      { q: "Do you clear garden and pool furniture?", a: "Yes — loungers, umbrellas, outdoor dining sets, planters and garden furniture are all included." },
      { q: "Can you leave certain items behind?", a: "Of course. Just mark or tell us what stays, and we'll clear everything else." },
    ],
    related: ["luxury-furniture-removal", "garage-storeroom-clearance", "junk-removal", "furniture-pickup-disposal"],
  },
  {
    slug: "furniture-pickup-disposal",
    name: "Furniture Pickup & Disposal",
    shortName: "Pickup & Disposal",
    category: "furniture",
    icon: "truck",
    image: "/images/pickup.jpg",
    imageAlt: "Green velvet sofa in an empty room awaiting furniture pickup",
    metaTitle: "Furniture Pickup & Disposal Dubai | Responsible Disposal",
    metaDescription:
      "Furniture pickup and disposal in Dubai. Unwanted furniture collected from any room and donated, recycled or disposed of at licensed facilities.",
    excerpt: "Unwanted pieces collected and donated, recycled or responsibly disposed of.",
    headline: "Furniture pickup and responsible disposal",
    intro: [
      "Got a single piece of furniture you need gone? Our pickup service collects unwanted furniture from inside your home, balcony, garage or building lobby — no need to drag it downstairs yourself.",
      "We sort every load: usable furniture is donated or passed to resale partners, materials like metal and timber are recycled where facilities allow, and only what's left goes to licensed disposal sites.",
      "It's the easy, eco-conscious way to get rid of old furniture in Dubai without hiring a full moving company.",
    ],
    items: [
      "Single furniture items",
      "Balcony and outdoor furniture",
      "Garage and storeroom furniture",
      "Broken or damaged furniture",
      "Flat-pack furniture (assembled or not)",
      "Rugs and carpets",
      "Small appliances alongside furniture",
      "Lobby and kerbside pickups",
    ],
    highlights: [
      { title: "From any room", text: "We carry it out — you don't lift a thing." },
      { title: "Single items welcome", text: "No job is too small for a pickup." },
      { title: "Sorted responsibly", text: "Donation and recycling before disposal." },
      { title: "Flexible timing", text: "Morning, afternoon and evening slots." },
    ],
    faqs: [
      { q: "Do you pick up just one item?", a: "Yes. Single-item pickups are one of our most popular services." },
      { q: "Where does my furniture go?", a: "Reusable pieces go to donation and resale partners; recyclable materials are separated where facilities allow; the remainder goes to licensed disposal facilities." },
      { q: "Can you collect from the lobby or parking?", a: "Yes — if you've already moved items down, we can collect from the lobby, parking or kerbside where the building permits." },
    ],
    related: ["furniture-removal", "junk-removal", "appliance-removal", "sofa-removal"],
  },
  {
    slug: "junk-removal",
    name: "Junk Removal",
    shortName: "Junk Removal",
    category: "junk",
    icon: "trash",
    image: "/images/junk.jpg",
    imageAlt: "Colour-coded waste and recycling bins for sorted junk disposal",
    metaTitle: "Junk Removal Dubai | Same-Day Household & Office Pickup",
    metaDescription:
      "Junk removal in Dubai for homes, villas and offices. Clutter, boxes, old items and renovation leftovers collected, sorted and disposed of responsibly.",
    excerpt: "Household clutter, boxes and mixed junk collected and sorted.",
    headline: "Junk removal in Dubai, sorted responsibly",
    intro: [
      "Furniture is rarely the only thing that needs to go. Alongside sofas and beds, most homes have boxes of clutter, broken items, old toys, renovation leftovers and things that have quietly piled up in cupboards and balconies. We clear all of it in the same visit.",
      "Our crew does the lifting and loading from wherever the junk is — inside the home, on balconies, in storerooms or in the garden — so you don't have to carry anything down to the bins.",
      "Every load is sorted. Usable items go to donation, recyclables like cardboard, metal and plastics are separated where facilities allow, and only the rest goes to licensed disposal facilities.",
    ],
    items: [
      "Household clutter and boxes",
      "Old toys, bikes and sports gear",
      "Broken and unwanted household items",
      "Bags of clothes and textiles",
      "Cardboard and packaging after a move",
      "Renovation and fit-out leftovers (non-hazardous)",
      "Garden waste and old planters",
      "Office junk and archive boxes",
    ],
    highlights: [
      { title: "One visit for everything", text: "Furniture and junk cleared together — no second booking." },
      { title: "We do the lifting", text: "Collected from any room, balcony, roof or garden." },
      { title: "Sorted, not dumped", text: "Donation, recycling and licensed disposal only." },
      { title: "Priced by volume", text: "Fixed price from photos based on how much there is." },
    ],
    faqs: [
      { q: "What kind of junk do you remove?", a: "General household and office junk — boxes, clutter, broken items, textiles, packaging, garden waste and non-hazardous renovation leftovers. Send photos and we'll confirm." },
      { q: "Is there anything you can't take?", a: "We don't take hazardous materials such as chemicals, paint, gas cylinders, asbestos or medical waste. These need specialist licensed handlers." },
      { q: "Can you remove junk and furniture in the same visit?", a: "Yes — most clients combine both. We price everything together so it's one booking and one price." },
      { q: "How is junk removal priced?", a: "Mainly by volume and access. A few photos on WhatsApp are enough for a fixed price." },
    ],
    related: ["garage-storeroom-clearance", "appliance-removal", "furniture-pickup-disposal", "villa-furniture-clearance"],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    shortName: "Appliances",
    category: "junk",
    icon: "appliance",
    image: "/images/appliance.jpg",
    imageAlt: "Front-loading washing machine in a laundry room ready for appliance removal",
    metaTitle: "Appliance Removal Dubai | Fridge & Washing Machine Pickup",
    metaDescription:
      "Appliance removal in Dubai: fridges, freezers, washing machines, dryers, ovens and AC units collected and recycled responsibly. Same-day pickup.",
    excerpt: "Fridges, washing machines, ovens and more — disconnected and recycled.",
    headline: "Old appliance removal and recycling",
    intro: [
      "Large appliances are heavy, awkward and can't simply be left by the bins. We remove old fridges, freezers, washing machines, dryers, cookers, dishwashers and more from kitchens, laundry rooms and storerooms across Dubai.",
      "Our crew carries appliances out carefully, protecting floors and door frames, and loads them securely. Please make sure water and gas connections are safely shut off before we arrive — we're happy to advise.",
      "Appliances contain metals and components that can be recovered, so we route them to recycling wherever facilities allow rather than general disposal.",
    ],
    items: [
      "Fridges and freezers",
      "Washing machines and dryers",
      "Dishwashers",
      "Cookers, ovens and hobs (freestanding)",
      "Microwaves and small kitchen appliances",
      "Water dispensers and coolers",
      "Portable and window AC units",
      "TVs and home electronics",
    ],
    highlights: [
      { title: "Heavy-item crews", text: "Two or more movers for fridges and American-style units." },
      { title: "Floor protection", text: "Runners and sliders so heavy units don't mark floors." },
      { title: "Recycling-first", text: "Metals and components recovered where facilities allow." },
      { title: "Add it to any job", text: "Combine with furniture or junk removal in one visit." },
    ],
    faqs: [
      { q: "Do you disconnect appliances?", a: "We can unplug and carry appliances out. Plumbed-in water and gas connections should be safely disconnected beforehand by you or a qualified technician." },
      { q: "Do you take broken appliances?", a: "Yes. Working or not, we'll collect it. Working appliances in good condition may be donated." },
      { q: "Can you remove a large double-door fridge?", a: "Yes. We send enough crew and check the route (doorways, lift size) from your photos beforehand." },
    ],
    related: ["junk-removal", "garage-storeroom-clearance", "furniture-pickup-disposal", "furniture-removal"],
  },
  {
    slug: "garage-storeroom-clearance",
    name: "Garage & Storeroom Clearance",
    shortName: "Garage & Storeroom",
    category: "junk",
    icon: "box",
    image: "/images/storeroom.jpg",
    imageAlt: "Cardboard storage boxes representing a garage and storeroom clear-out",
    metaTitle: "Garage & Storeroom Clearance Dubai | Villa Junk Clear-Outs",
    metaDescription:
      "Garage, storeroom, balcony and maid's room clearance in Dubai. Boxes, old furniture, junk and appliances cleared in one visit and sorted for recycling.",
    excerpt: "Garages, storerooms, balconies and roof spaces cleared in one visit.",
    headline: "Garage and storeroom clearance",
    intro: [
      "Garages and storerooms are where things go to be forgotten — old furniture, boxes from the last move, broken appliances, kids' bikes and leftover building materials. We clear them out in one organised visit.",
      "We'll work through the space with you (or from your instructions), setting aside anything you want to keep and taking everything else. It's ideal before selling or renting out a villa, after a renovation, or just to reclaim the space.",
      "Everything we remove is sorted: usable items are donated, recyclables separated where facilities allow, and the remainder disposed of at licensed facilities.",
    ],
    items: [
      "Garage clear-outs",
      "Storeroom and maid's room clear-outs",
      "Balcony and roof clearance",
      "Boxes and stored household items",
      "Old furniture and mattresses",
      "Broken appliances",
      "Bikes, toys and sports equipment",
      "Leftover tiles, wood and fit-out materials (non-hazardous)",
    ],
    highlights: [
      { title: "Keep / donate / dispose", text: "We sort as we go so nothing you need is lost." },
      { title: "Villa-ready crews", text: "Right-sized team and truck for big garages." },
      { title: "Swept and clear", text: "Space left empty and swept, ready to use." },
      { title: "Remote-friendly", text: "Owners abroad get photos before and after." },
    ],
    faqs: [
      { q: "Do I need to sort the garage before you arrive?", a: "No. Just tell us (or mark) what you want to keep, and we'll handle the rest." },
      { q: "Can you clear a storeroom in an apartment building?", a: "Yes — including basement storage units, as long as building access is arranged." },
      { q: "What about paint tins and chemicals?", a: "Hazardous materials like paint, chemicals and gas cylinders can't go with general junk. We'll leave them aside and advise on specialist disposal." },
    ],
    related: ["junk-removal", "villa-furniture-clearance", "appliance-removal", "furniture-pickup-disposal"],
  },
];

export const furnitureServices = services.filter((s) => s.category === "furniture");
export const junkServices = services.filter((s) => s.category === "junk");

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
