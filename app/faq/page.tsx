import type { Metadata } from "next";
import { FAQPageClient } from "./FAQPageClient";

export const metadata: Metadata = {
  title: "FAQ | Printing Questions Answered | Fajer Al Madina Dubai",
  description:
    "Answers to the most common questions about printing in Dubai. Same-day delivery, file formats, minimum orders, MOHAP vinyl, pricing, and more.",
  alternates: { canonical: "https://www.fajeralmadinadubai.com/faq" },
};

export default function FAQPage() {
  return <FAQPageClient />;
}
