import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    id: "1",
    slug: "restaurants",
    title: "Restaurants & Cafes",
    description:
      "Menu printing, outdoor banners, window graphics, table displays, loyalty cards, and full interior branding for Dubai's F&B sector.",
    icon: "Utensils",
    services: ["flyers-printing-dubai", "outdoor-banners-dubai", "frosted-vinyl-dubai", "stickers-dubai", "business-cards-dubai"],
    benefits: [
      "Same-day menu reprints available",
      "Waterproof lamination for menus",
      "Window graphics & door decals",
      "Branded packaging & paper bags",
      "Loyalty card printing",
    ],
  },
  {
    id: "2",
    slug: "real-estate",
    title: "Real Estate & Property",
    description:
      "Premium business cards, high-quality property brochures, outdoor hoardings, vehicle branding, and branded office environments for UAE real estate professionals.",
    icon: "Home",
    services: ["business-cards-dubai", "brochures-dubai", "outdoor-banners-dubai", "vehicle-branding-dubai", "acrylic-signage-dubai"],
    benefits: [
      "Ultra-premium Spot UV business cards",
      "A4/A3 property brochures",
      "Site hoardings and scaffolding wraps",
      "Branded agent vehicles",
      "Office and showroom signage",
    ],
  },
  {
    id: "3",
    slug: "healthcare",
    title: "Healthcare & Clinics",
    description:
      "MOHAP-compliant frosted vinyl, directional wayfinding signs, appointment cards, ID cards, and clinical environment branding across Dubai and UAE.",
    icon: "Stethoscope",
    services: ["frosted-vinyl-dubai", "acrylic-signage-dubai", "business-cards-dubai", "stickers-dubai"],
    benefits: [
      "MOHAP-compliant window films",
      "Patient privacy frosted vinyl",
      "Directional and wayfinding signs",
      "Appointment and prescription pads",
      "Staff ID cards and lanyards",
    ],
  },
  {
    id: "4",
    slug: "construction",
    title: "Construction & Contracting",
    description:
      "Site hoardings, scaffolding wraps, safety signage, vehicle fleet branding, hard hat decals, and branded site offices for UAE construction companies.",
    icon: "HardHat",
    services: ["outdoor-banners-dubai", "vehicle-branding-dubai", "stickers-dubai", "acrylic-signage-dubai"],
    benefits: [
      "Large-format site hoardings",
      "Safety signage (Arabic & English)",
      "Fleet of vehicle branding",
      "Scaffolding wraps and mesh banners",
      "Branded site office materials",
    ],
  },
  {
    id: "5",
    slug: "events",
    title: "Events & Exhibitions",
    description:
      "Complete exhibition printing including backdrops, pop-up displays, event banners, branded merchandise, and last-minute same-day event printing.",
    icon: "PartyPopper",
    services: ["exhibition-printing-dubai", "roll-up-banners-dubai", "outdoor-banners-dubai", "corporate-gifts-dubai"],
    benefits: [
      "Same-day event printing available",
      "Fabric and vinyl backdrops",
      "Pop-up display systems",
      "Step-and-repeat banners",
      "Branded merchandise and gifts",
    ],
  },
  {
    id: "6",
    slug: "retail",
    title: "Retail & Hospitality",
    description:
      "Point-of-sale materials, window graphics, shelf talkers, packaging, loyalty cards, and full store branding for retail businesses in Dubai.",
    icon: "ShoppingBag",
    services: ["stickers-dubai", "window-graphics-dubai", "packaging-dubai", "outdoor-banners-dubai"],
    benefits: [
      "Window graphics and frosted vinyl",
      "POS displays and shelf talkers",
      "Custom packaging and bags",
      "Loyalty and gift cards",
      "Seasonal promotional printing",
    ],
  },
  {
    id: "7",
    slug: "corporate",
    title: "Corporate & SME",
    description:
      "Complete stationery packages, presentation folders, branded gifts, office signage, and digital print solutions for businesses of all sizes.",
    icon: "Building2",
    services: ["business-cards-dubai", "brochures-dubai", "corporate-gifts-dubai", "office-branding-dubai", "acrylic-signage-dubai"],
    benefits: [
      "Full stationery packages",
      "Branded corporate gifts",
      "Presentation folders and pads",
      "Reception and office signage",
      "Employee ID cards and lanyards",
    ],
  },
  {
    id: "8",
    slug: "education",
    title: "Schools & Education",
    description:
      "ID cards, lanyards, banners, notice boards, wall graphics, graduation materials, and printed educational resources for Dubai schools and universities.",
    icon: "GraduationCap",
    services: ["stickers-dubai", "outdoor-banners-dubai", "acrylic-signage-dubai", "canvas-printing-dubai"],
    benefits: [
      "Student and staff ID cards",
      "Event and graduation banners",
      "School wall art and murals",
      "Notice board graphics",
      "Branded stationery sets",
    ],
  },
];

export const getIndustryBySlug = (slug: string) =>
  industries.find((i) => i.slug === slug);
