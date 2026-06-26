"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard, FileText, AlignLeft, Layers, Truck, Star,
  Gift, Package, Sun, Flag, BookOpen, Tag, Scissors,
  Layout, Zap, Building, Monitor, Image, ArrowRight, MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { services, getServicesByCategory } from "@/data/services";
import type { Service } from "@/types";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  CreditCard, FileText, AlignLeft, Layers, Truck, Star,
  Gift, Package, Sun, Flag, BookOpen, Tag, Scissors,
  Layout, Zap, Building, Monitor, Image,
};

const CATEGORIES = [
  { value: "all", label: "All Services" },
  { value: "print-marketing", label: "Print & Marketing" },
  { value: "signage-branding", label: "Signage & Branding" },
  { value: "specialty-printing", label: "Specialty Printing" },
  { value: "corporate-gifts", label: "Corporate Gifts" },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICON_MAP[service.icon] || Star;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-brand-green-50 border border-brand-green/20 rounded-xl flex items-center justify-center group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300">
            <Icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors duration-300" />
          </div>
          {service.badge && (
            <span className="text-xs font-ui font-semibold bg-gold-DEFAULT/10 text-gold-DEFAULT border border-gold-DEFAULT/30 px-2.5 py-1 rounded-full">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-base text-navy mb-2 group-hover:text-brand-green transition-colors">
          {service.shortTitle}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 truncate-3">
          {service.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div>
            {service.startingPrice && (
              <p className="text-xs text-gray-500 font-ui">
                From <span className="font-semibold text-brand-green">{service.startingPrice}</span>
              </p>
            )}
            {service.deliveryTime && (
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-1.5 h-1.5 bg-brand-green-light rounded-full" />
                <span className="text-xs text-gray-400 font-ui">{service.deliveryTime}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 text-brand-green text-xs font-ui font-semibold group-hover:gap-2 transition-all">
            Details <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  const whatsapp = formatWhatsAppLink(siteConfig.contact.whatsapp, siteConfig.whatsappMessages.quote);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 inline-flex">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-5">
              36+ Premium Printing &
              <br />
              <span className="gradient-text-gold">Advertising Services</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              From a single business card to a complete brand overhaul — we handle every print and signage need for Dubai businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="container py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-ui font-medium transition-all duration-200",
                activeCategory === cat.value
                  ? "bg-brand-green text-white shadow-button"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-center text-sm text-gray-400 font-ui mb-8">
          Showing <span className="text-navy font-semibold">{filtered.length}</span> services
        </p>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-navy rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-gray-400 mb-7 max-w-md mx-auto">
            We offer many more specialised services. WhatsApp us or get a quote and tell us exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-ui font-bold text-sm hover:bg-[#1DB954] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Ask on WhatsApp
            </a>
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-7 py-3.5 rounded-xl font-ui font-bold text-sm hover:bg-brand-green-dark transition-colors"
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
