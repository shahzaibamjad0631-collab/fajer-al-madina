import type { Metadata } from "next";
import { ServicesPageClient } from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Printing Services Dubai | Business Cards, Banners, Signage & More",
  description:
    "36+ premium printing and advertising services in Dubai. Business cards, banners, frosted vinyl, vehicle branding, acrylic signage, exhibition printing, and more. Same-day available.",
  keywords: [
    "printing services dubai",
    "business cards dubai",
    "banner printing dubai",
    "frosted vinyl dubai",
    "vehicle branding dubai",
    "signage dubai",
    "exhibition printing dubai",
  ],
  alternates: { canonical: "https://www.fajeralmadinadubai.com/services" },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
