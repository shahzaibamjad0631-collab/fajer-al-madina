import type { Metadata } from "next";
import { PortfolioPageClient } from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio | Printing & Advertising Work | Fajer Al Madina Dubai",
  description:
    "View our portfolio of premium printing and advertising projects in Dubai. Business cards, vehicle branding, frosted vinyl, exhibition printing, and more.",
  alternates: { canonical: "https://www.fajeralmadinadubai.com/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
