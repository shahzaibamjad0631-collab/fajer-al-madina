"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle, ArrowRight, MessageCircle, Phone,
  Clock, Tag, Star, ChevronRight
} from "lucide-react";
import type { Service } from "@/types";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";
import { getFeaturedServices } from "@/data/services";

interface Props {
  service: Service;
}

const SCHEMA_TYPE_MAP: Record<string, string> = {
  "print-marketing": "Product",
  "signage-branding": "Product",
  "specialty-printing": "Product",
  "corporate-gifts": "Product",
};

export function ServiceDetailClient({ service }: Props) {
  const whatsapp = formatWhatsAppLink(
    siteConfig.contact.whatsapp,
    `Hello! I'm interested in ${service.title}. Could you please provide more information and a quote?`
  );

  const related = getFeaturedServices().filter((s) => s.id !== service.id).slice(0, 3);

  /* JSON-LD for this service */
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: service.title,
    description: service.description,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: {
      "@type": "Offer",
      priceCurrency: "AED",
      price: service.startingPrice?.replace(/[^0-9.]/g, "") ?? "0",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: siteConfig.name },
    },
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-ui text-gray-400">
            <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-brand-green transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600">{service.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              {service.badge && (
                <span className="inline-block mb-4 text-xs font-ui font-semibold bg-gold-DEFAULT/15 text-gold-DEFAULT border border-gold-DEFAULT/30 px-3 py-1.5 rounded-full">
                  {service.badge}
                </span>
              )}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-5 leading-tight">
                {service.title}
              </h1>
              <p className="text-white/70 text-xl mb-8 leading-relaxed">{service.description}</p>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {service.startingPrice && (
                  <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                    <Tag className="w-4 h-4 text-gold-DEFAULT" />
                    <span className="text-white text-sm font-ui">From {service.startingPrice}</span>
                  </div>
                )}
                {service.deliveryTime && (
                  <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                    <Clock className="w-4 h-4 text-brand-green-light" />
                    <span className="text-white text-sm font-ui">{service.deliveryTime}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-ui">4.9★ Google Rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-7 py-4 rounded-xl font-ui font-bold hover:bg-brand-green-dark transition-colors shadow-button"
                >
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-4 rounded-xl font-ui font-bold hover:bg-[#1DB954] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: features + description */}
            <div className="lg:col-span-2 space-y-10">
              {/* What's included */}
              {service.features && service.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display font-bold text-navy mb-5">What&apos;s Included</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-ui">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Long description */}
              {service.longDescription && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display font-bold text-navy mb-4">About This Service</h2>
                  <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
                    {service.longDescription}
                  </div>
                </motion.div>
              )}

              {/* Use cases */}
              {service.useCases && service.useCases.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-display font-bold text-navy mb-4">Popular Use Cases</h2>
                  <ul className="space-y-2">
                    {service.useCases.map((uc) => (
                      <li key={uc} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Right: CTA sidebar */}
            <div className="lg:col-span-1 space-y-5">
              {/* Quote card */}
              <div className="bg-navy rounded-2xl p-6 sticky top-28">
                <h3 className="font-display font-bold text-white text-lg mb-1">Get a Free Quote</h3>
                <p className="text-gray-400 text-sm mb-5">Response within 30 minutes during business hours.</p>
                <div className="space-y-3">
                  <Link
                    href="/get-quote"
                    className="flex items-center justify-center gap-2 w-full bg-brand-green text-white py-3.5 rounded-xl font-ui font-bold text-sm hover:bg-brand-green-dark transition-colors"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 rounded-xl font-ui font-bold text-sm hover:bg-[#1DB954] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp (Fastest)
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-white/10 text-white py-3.5 rounded-xl font-ui font-medium text-sm hover:bg-white/15 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.contact.phone}
                  </a>
                </div>
                {/* Trust points */}
                <div className="mt-5 pt-5 border-t border-white/10 space-y-2.5">
                  {["Free design review", "No minimum order", "Same-day available", "Dubai-wide delivery"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green-light flex-shrink-0" />
                      <span className="text-gray-400 text-xs font-ui">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-display font-bold text-navy mb-8">You May Also Need</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-brand-green/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <h3 className="font-display font-bold text-sm text-navy mb-1.5 group-hover:text-brand-green transition-colors">
                    {s.shortTitle}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed truncate-2">{s.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-brand-green text-xs font-ui font-semibold">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
