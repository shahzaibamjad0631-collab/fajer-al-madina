import type { Metadata } from "next";
import { QuotePageClient } from "./QuotePageClient";

export const metadata: Metadata = {
  title: "Get Free Quote | Fajer Al Madina Advertising LLC",
  description:
    "Request a free printing quote in Dubai. Business cards, banners, frosted vinyl, vehicle branding, and 36+ services. Fast response within 30 minutes.",
  openGraph: {
    title: "Get Free Printing Quote Dubai | Fajer Al Madina",
    description: "Request a free printing and advertising quote. We respond within 30 minutes.",
  },
  alternates: { canonical: "https://www.fajeralmadinadubai.com/get-quote" },
};

export default function GetQuotePage() {
  return <QuotePageClient />;
}
