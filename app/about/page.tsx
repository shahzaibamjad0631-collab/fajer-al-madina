import type { Metadata } from "next";
import type { Viewport } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Fajer Al Madina Advertising LLC | Dubai Printing Company",
  description:
    "15+ years of premium printing in Dubai. Learn about Fajer Al Madina Advertising LLC — our story, values, team, and commitment to print excellence in the UAE.",
  alternates: { canonical: "https://www.fajeralmadinadubai.com/about" },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
