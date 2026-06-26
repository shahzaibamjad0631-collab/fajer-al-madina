import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Fajer Al Madina Advertising LLC | Dubai Printing",
  description:
    "Contact Fajer Al Madina Advertising LLC in Dubai. Visit us in Al Quoz, call, email, or WhatsApp. Get a free printing quote in 30 minutes.",
  alternates: { canonical: "https://www.fajeralmadinadubai.com/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
