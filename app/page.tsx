import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";

export const metadata: Metadata = {
  title: `${siteConfig.name} | #1 Printing Company in Dubai`,
  description:
    "Dubai's leading printing and advertising company. Business cards, banners, frosted vinyl, vehicle branding, signage, and more. Same-day printing available. Trusted by 500+ businesses. Get a free quote now!",
  keywords: [
    "printing company dubai",
    "best printing company dubai",
    "business cards dubai",
    "banner printing dubai",
    "frosted vinyl dubai",
    "vehicle branding dubai",
    "same day printing dubai",
    "advertising company dubai",
  ],
  openGraph: {
    title: `${siteConfig.name} | Premium Printing & Advertising Dubai`,
    description:
      "Dubai's leading printing and advertising company. Same-day printing, premium quality, trusted by 500+ businesses.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Fajer Al Madina - Premium Printing Dubai",
      },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero: Full-screen dark hero with animated mesh and strong CTA */}
      <HeroSection />

      {/* 2 — Client logos ticker: Social proof above fold */}
      <ClientLogosSection />

      {/* 3 — Stats: Animated counter stats */}
      <StatsSection />

      {/* 4 — Services: 9 featured service cards with icons */}
      <ServicesSection />

      {/* 5 — Why Choose Us: 6 premium feature cards */}
      <WhyChooseUsSection />

      {/* 6 — Industries: Served sectors with icons */}
      <IndustriesSection />

      {/* 7 — Portfolio: Filterable gallery preview */}
      <PortfolioSection />

      {/* 8 — Process: How we work - 4 steps */}
      <ProcessSection />

      {/* 9 — Testimonials: Google reviews slider */}
      <TestimonialsSection />

      {/* 10 — Mid-page CTA Banner */}
      <CTABannerSection />

      {/* 11 — FAQ: SEO-rich accordion */}
      <FAQSection />

      {/* 12 — Blog Preview: 3 latest articles */}
      <BlogPreviewSection />
    </>
  );
}
