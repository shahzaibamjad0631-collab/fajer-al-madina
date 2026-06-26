"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Building2, Utensils, Home, HardHat, Stethoscope,
  PartyPopper, ShoppingBag, GraduationCap, ArrowRight,
  CheckCircle, Plus, Minus, BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

/* ================================================================
   CLIENT LOGOS SECTION (Ticker tape)
   ================================================================ */
const CLIENTS = [
  "Emaar Properties", "Dubai Mall", "DEWA", "Carrefour UAE",
  "Rove Hotels", "Al Ghurair", "Jumeirah Group", "RTA Dubai",
  "Meraas", "Dubai Health Authority", "Majid Al Futtaim", "Aldar Properties",
];

export function ClientLogosSection() {
  return (
    <div className="bg-gray-50 border-y border-gray-100 py-5 overflow-hidden">
      <div className="flex gap-0">
        {/* Two copies for seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className="ticker-tape flex-shrink-0">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="text-gray-400 font-display font-semibold text-sm uppercase tracking-widest px-6 border-r border-gray-200 last:border-0"
              >
                {client}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   INDUSTRIES SECTION
   ================================================================ */
const INDUSTRIES = [
  { icon: Building2, title: "Corporate & SME", description: "Stationery, branding packages, office signage", href: "/industries/corporate" },
  { icon: Utensils, title: "Restaurants & Cafes", description: "Menus, window graphics, outdoor banners", href: "/industries/restaurants" },
  { icon: Home, title: "Real Estate", description: "Premium business cards, brochures, hoardings", href: "/industries/real-estate" },
  { icon: HardHat, title: "Construction", description: "Safety signs, hoardings, site branding", href: "/industries/construction" },
  { icon: Stethoscope, title: "Healthcare & Clinics", description: "MOHAP vinyl, directional signs, ID cards", href: "/industries/healthcare" },
  { icon: PartyPopper, title: "Events & Exhibitions", description: "Backdrops, banners, branded displays", href: "/industries/events" },
  { icon: ShoppingBag, title: "Retail & Fashion", description: "Packaging, labels, window graphics", href: "/industries/retail" },
  { icon: GraduationCap, title: "Schools & Education", description: "ID cards, banners, wall graphics", href: "/industries/education" },
];

export function IndustriesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section bg-white" id="industries" aria-labelledby="industries-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">Industries We Serve</span>
          <h2 id="industries-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            Printing Solutions for
            <br />
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From healthcare to hospitality, real estate to retail — we understand your industry&apos;s specific needs and deliver accordingly.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Link
                  href={industry.href}
                  className="group flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:bg-brand-green-50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-ui font-semibold text-sm text-navy mb-1.5 group-hover:text-brand-green transition-colors duration-200">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed hidden sm:block">
                    {industry.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PORTFOLIO SECTION
   ================================================================ */
const PORTFOLIO_ITEMS = [
  { id: "1", title: "Restaurant Menu & Branding", category: "Print", tags: ["Menu", "Flyers"], color: "bg-emerald-100" },
  { id: "2", title: "Vehicle Fleet Branding", category: "Signage", tags: ["Car Wrap"], color: "bg-blue-100" },
  { id: "3", title: "Office Frosted Vinyl", category: "Vinyl", tags: ["Frosted", "Office"], color: "bg-purple-100" },
  { id: "4", title: "Exhibition Backdrops", category: "Exhibition", tags: ["Backdrop", "Pop-up"], color: "bg-amber-100" },
  { id: "5", title: "Premium Business Cards", category: "Print", tags: ["Spot UV", "Cards"], color: "bg-rose-100" },
  { id: "6", title: "Retail Window Graphics", category: "Signage", tags: ["Window", "Graphics"], color: "bg-teal-100" },
];

const PORTFOLIO_FILTERS = ["All", "Print", "Signage", "Vinyl", "Exhibition"];

export function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section ref={ref} className="section bg-navy" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">Our Work</span>
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Work That Speaks
            <span className="gradient-text-gold"> for Itself</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A selection of premium projects delivered for businesses across Dubai and the UAE.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PORTFOLIO_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-ui font-medium transition-all duration-200",
                activeFilter === filter
                  ? "bg-brand-green text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/15 hover:text-white"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid (placeholder cards for demo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={cn(
                "group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer",
                item.color
              )}
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-end p-5">
                <div className="w-full bg-navy/90 backdrop-blur-sm rounded-xl p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display font-bold text-white text-sm mb-1">{item.title}</h3>
                  <div className="flex gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-brand-green/20 text-brand-green-light px-2 py-0.5 rounded-full font-ui">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-ui font-semibold bg-navy/70 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-2xl font-ui font-semibold text-sm hover:bg-white/10 transition-all duration-200"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PROCESS SECTION
   ================================================================ */
const STEPS = [
  { step: "01", title: "Request a Quote", description: "Contact us via WhatsApp, call, or our online form. Tell us what you need and we&apos;ll respond within 30 minutes." },
  { step: "02", title: "Design & Approval", description: "Our team creates your artwork or refines your design. You approve the proof before we go to print." },
  { step: "03", title: "Production", description: "We print using premium equipment with the finest inks and materials. Every order goes through quality control." },
  { step: "04", title: "Delivery", description: "Your order is delivered anywhere in Dubai, often same day or within 24 hours. Quick, safe, and on time." },
];

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section bg-white" id="process" aria-labelledby="process-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">How It Works</span>
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
            From Quote to Delivery
            <br />
            <span className="gradient-text">In 4 Simple Steps</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center group"
            >
              {/* Step circle */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="w-20 h-20 rounded-full bg-brand-green-50 border-2 border-brand-green/20 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green transition-all duration-300">
                  <span className="font-display font-bold text-2xl text-brand-green group-hover:text-white transition-colors duration-300">
                    {step.step}
                  </span>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-navy mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTA BANNER SECTION
   ================================================================ */
export function CTABannerSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const whatsappLink = formatWhatsAppLink(siteConfig.contact.whatsapp, siteConfig.whatsappMessages.quote);

  return (
    <section ref={ref} className="py-16 bg-brand-green relative overflow-hidden" aria-label="Call to action">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="container relative text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          Ready to Print Something
          <br />
          <span className="text-gold-DEFAULT">Amazing?</span>
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Get a free quote in under 30 minutes. No commitment, no hassle — just great printing at great prices.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-white text-brand-green px-8 py-4 rounded-2xl font-ui font-bold text-base hover:bg-gray-50 transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-ui font-bold text-base hover:bg-white/10 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            WhatsApp Us Now
          </a>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
          {["No Minimum Order", "Free Design Review", "Same Day Available"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-white/80" />
              <span className="text-white/80 text-sm font-ui">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ================================================================
   FAQ SECTION
   ================================================================ */
const FAQS = [
  {
    q: "Do you offer same-day printing in Dubai?",
    a: "Yes! We offer same-day printing for most products including business cards, flyers, roll-up banners, and stickers. Orders placed before 12 PM are typically ready for delivery by evening. Contact us on WhatsApp for urgent requirements."
  },
  {
    q: "What is the minimum order quantity?",
    a: "We have no minimum order for most products — you can order from 1 piece! However, bulk orders get significantly better pricing. Business cards start from 50 pieces, flyers from 100 pieces for best value."
  },
  {
    q: "Do you provide free design services?",
    a: "Yes, we offer free basic design support with every order. Our in-house designers can create or refine your artwork. For complex branding projects, we charge a small design fee — contact us for details."
  },
  {
    q: "Do you deliver across all of Dubai?",
    a: "Absolutely! We deliver to all areas of Dubai including DIFC, Business Bay, Downtown, Deira, Bur Dubai, JLT, JBR, Al Quoz, Dubai Silicon Oasis, and all free zones. Free delivery on orders above AED 200."
  },
  {
    q: "What file formats do you accept for printing?",
    a: "We accept PDF (preferred), AI, EPS, CDR, PSD, and high-resolution JPG/PNG files. For best results, files should be CMYK, 300 DPI, with 3mm bleed. Our team will check your artwork and advise if changes are needed."
  },
  {
    q: "Do you offer frosted vinyl for clinic and office windows?",
    a: "Yes! Frosted vinyl is one of our specialties. We supply and install MOHAP-compliant frosted window film for clinics, hospitals, and medical centers. We also do custom-cut frosted vinyl with logos and designs for offices and retail."
  },
  {
    q: "Can you brand my entire vehicle fleet?",
    a: "Absolutely. We handle full fleet branding from single cars to trucks, buses, and vans. We use premium 3M and Avery vinyl materials with a professional installation team. Pricing is competitive for fleet orders."
  },
  {
    q: "How do I get a quote?",
    a: "Getting a quote is easy — WhatsApp us, call us, or fill out our online quote form. Tell us what you need (product, size, quantity, deadline) and we'll respond with pricing within 30 minutes during business hours."
  },
];

export function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section ref={ref} className="section bg-white" id="faq" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 inline-flex">FAQ</span>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy mb-6">
              Frequently Asked
              <br />
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Can&apos;t find your answer here? Message us on WhatsApp and our team will respond in minutes.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-brand-green font-ui font-semibold text-sm hover:gap-3 transition-all"
            >
              View all FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {FAQS.slice(0, 6).map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "border rounded-xl overflow-hidden transition-all duration-200",
                  openIndex === index ? "border-brand-green/30" : "border-gray-100"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-ui font-semibold text-sm text-navy pr-4">
                    {faq.q}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-brand-green flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="border-t border-gray-100 bg-gray-50 px-5 py-4"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   BLOG PREVIEW SECTION
   ================================================================ */
const BLOG_POSTS = [
  {
    slug: "business-card-printing-guide-dubai",
    title: "The Ultimate Guide to Business Card Printing in Dubai 2024",
    excerpt: "Everything you need to know about choosing the right paper, finish, and design for business cards that impress in the UAE market.",
    category: "Printing Guide",
    date: "Nov 20, 2024",
    readTime: "5 min read",
    color: "bg-emerald-100",
  },
  {
    slug: "frosted-vinyl-mohap-compliance-dubai",
    title: "MOHAP Frosted Vinyl Requirements for Dubai Clinics Explained",
    excerpt: "A complete guide to MOHAP regulations for window films in medical facilities. What clinics and hospitals in Dubai need to know.",
    category: "Signage Guide",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    color: "bg-blue-100",
  },
  {
    slug: "vehicle-branding-roi-dubai",
    title: "Vehicle Branding ROI: Why It&apos;s the Best Advertising in Dubai",
    excerpt: "How branded vehicles generate millions of impressions at a fraction of the cost of digital ads. The numbers behind fleet branding.",
    category: "Marketing Tips",
    date: "Nov 10, 2024",
    readTime: "4 min read",
    color: "bg-amber-100",
  },
];

export function BlogPreviewSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section bg-gray-50" id="blog" aria-labelledby="blog-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="section-label mb-3 inline-flex">Our Blog</span>
            <h2 id="blog-heading" className="text-3xl sm:text-4xl font-display font-bold text-navy">
              Printing Tips &
              <span className="gradient-text"> Marketing Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-green font-ui font-semibold text-sm hover:gap-3 transition-all flex-shrink-0"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-green/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {/* Image placeholder */}
                <div className={cn("w-full h-44", post.color)} />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-ui font-semibold text-brand-green bg-brand-green-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-400 text-xs font-ui">
                      <BookOpen className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base text-navy mb-2 group-hover:text-brand-green transition-colors duration-200 leading-snug"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <p className="text-gray-500 text-sm leading-relaxed truncate-2"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 font-ui">{post.date}</span>
                    <span className="text-xs text-brand-green font-ui font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
