"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

const FILTERS = ["All", "Business Cards", "Banners", "Vehicle Branding", "Frosted Vinyl", "Signage", "Exhibition", "Gifts"];

const ITEMS = [
  { id: "1", title: "Spot UV Premium Cards — Finance Co.", cat: "Business Cards", color: "bg-emerald-100", size: "col-span-1" },
  { id: "2", title: "Fleet Branding — Al Noor Logistics", cat: "Vehicle Branding", color: "bg-blue-100", size: "col-span-2" },
  { id: "3", title: "MOHAP Frosted Vinyl — Shifa Clinic", cat: "Frosted Vinyl", color: "bg-purple-100", size: "col-span-1" },
  { id: "4", title: "GITEX Exhibition Booth — TechCorp", cat: "Exhibition", color: "bg-amber-100", size: "col-span-1" },
  { id: "5", title: "Restaurant Window Graphics — Café Arabica", cat: "Signage", color: "bg-rose-100", size: "col-span-1" },
  { id: "6", title: "Outdoor Banners — Grand Opening Event", cat: "Banners", color: "bg-teal-100", size: "col-span-2" },
  { id: "7", title: "Corporate Gift Set — Dubai Holdings", cat: "Gifts", color: "bg-indigo-100", size: "col-span-1" },
  { id: "8", title: "Acrylic Reception Sign — Law Firm", cat: "Signage", color: "bg-orange-100", size: "col-span-1" },
  { id: "9", title: "Vehicle Wrap — Real Estate Agency", cat: "Vehicle Branding", color: "bg-cyan-100", size: "col-span-1" },
  { id: "10", title: "Matte Foil Cards — Design Studio", cat: "Business Cards", color: "bg-pink-100", size: "col-span-1" },
  { id: "11", title: "Step & Repeat Banner — Award Ceremony", cat: "Banners", color: "bg-lime-100", size: "col-span-1" },
  { id: "12", title: "Office Interior Branding — Tech Hub", cat: "Frosted Vinyl", color: "bg-violet-100", size: "col-span-2" },
];

export function PortfolioPageClient() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? ITEMS
    : ITEMS.filter((i) => i.cat === active);

  const whatsapp = formatWhatsAppLink(siteConfig.contact.whatsapp, "Hello! I'd like to discuss a printing project similar to your portfolio work.");

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 inline-flex">Our Portfolio</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-5">
              Work That Speaks
              <span className="gradient-text-gold"> for Itself</span>
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              A selection of printing and advertising projects delivered for businesses across Dubai and the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-ui font-medium transition-all duration-200",
                active === f
                  ? "bg-brand-green text-white shadow-button"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={cn("group relative rounded-2xl overflow-hidden cursor-pointer", item.color, "aspect-[4/3]")}
              >
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-end p-5">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-full">
                    <p className="text-white font-display font-bold text-sm mb-1">{item.title}</p>
                    <span className="inline-block text-xs bg-brand-green text-white px-2.5 py-1 rounded-full font-ui">{item.cat}</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-ui px-2.5 py-1 rounded-full">{item.cat}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-14 text-center bg-gray-50 rounded-3xl p-10 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy mb-3">
            Want Results Like These?
          </h2>
          <p className="text-gray-500 mb-7 max-w-md mx-auto">
            Get in touch and let&apos;s discuss your project. Free quote, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-xl font-ui font-bold text-sm hover:bg-brand-green-dark transition-colors shadow-button"
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-ui font-bold text-sm hover:bg-[#1DB954] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
