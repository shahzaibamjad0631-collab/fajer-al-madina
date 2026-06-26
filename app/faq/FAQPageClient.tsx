"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { faqs, FAQ_CATEGORIES } from "@/data/faqs";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

export function FAQPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>("1");

  const filtered = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const whatsapp = formatWhatsAppLink(siteConfig.contact.whatsapp, siteConfig.whatsappMessages.default);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 inline-flex">FAQ</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Frequently Asked
              <span className="gradient-text-gold"> Questions</span>
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              Everything you need to know about our printing services in Dubai.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-12 max-w-4xl">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-ui font-medium transition-all",
                activeCategory === cat
                  ? "bg-brand-green text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          <AnimatePresence>
            {filtered.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className={cn(
                  "bg-white rounded-2xl border overflow-hidden transition-all duration-200",
                  openId === faq.id ? "border-brand-green/30 shadow-card" : "border-gray-100"
                )}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openId === faq.id}
                >
                  <div className="flex items-start gap-3">
                    {faq.category && (
                      <span className="hidden sm:inline-block mt-0.5 text-xs font-ui font-semibold text-brand-green bg-brand-green-50 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        {faq.category}
                      </span>
                    )}
                    <span className="font-ui font-semibold text-sm sm:text-base text-navy leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0 mt-0.5">
                    {openId === faq.id
                      ? <Minus className="w-4 h-4 text-brand-green" />
                      : <Plus className="w-4 h-4 text-gray-400" />
                    }
                  </div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-gray-100 bg-gray-50">
                        <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Still have questions */}
        <div className="mt-12 bg-navy rounded-3xl p-8 text-center">
          <h2 className="font-display font-bold text-xl text-white mb-2">Still Have Questions?</h2>
          <p className="text-gray-400 mb-6 text-sm">Our team is happy to help. Message us and we&apos;ll respond right away.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-ui font-bold text-sm hover:bg-[#1DB954] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl font-ui font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Contact Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
