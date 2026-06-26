"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  CreditCard, FileText, AlignLeft, Layers, Truck,
  Star, Gift, Package, Sun, Flag, ArrowRight, Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeaturedServices } from "@/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  CreditCard, FileText, AlignLeft, Layers, Truck,
  Star, Gift, Package, Sun, Flag, Zap,
};

const CARD_COLORS = [
  "from-green-900/40 to-green-800/20 border-brand-green/20",
  "from-slate-800/60 to-slate-700/30 border-white/10",
  "from-amber-900/30 to-amber-800/20 border-gold-DEFAULT/20",
  "from-green-900/40 to-green-800/20 border-brand-green/20",
  "from-slate-800/60 to-slate-700/30 border-white/10",
  "from-amber-900/30 to-amber-800/20 border-gold-DEFAULT/20",
  "from-green-900/40 to-green-800/20 border-brand-green/20",
  "from-slate-800/60 to-slate-700/30 border-white/10",
  "from-amber-900/30 to-amber-800/20 border-gold-DEFAULT/20",
];

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const featuredServices = getFeaturedServices();

  return (
    <section
      ref={ref}
      className="section bg-white"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy mb-4"
          >
            Everything You Need to
            <br />
            <span className="gradient-text">Print & Brand</span> Your Business
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From business cards to full vehicle wraps — we deliver premium printing
            solutions that make your brand impossible to ignore.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Star;
            const colorClass = CARD_COLORS[index % CARD_COLORS.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full bg-navy rounded-2xl border overflow-hidden card-hover"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  {/* Gradient background */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-300 group-hover:opacity-100",
                    colorClass.split(" ").slice(0, 2).join(" ")
                  )} />

                  {/* Card Content */}
                  <div className="relative p-6">
                    {/* Top row: icon + badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center justify-center w-12 h-12 bg-brand-green/10 border border-brand-green/20 rounded-xl group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300">
                        <Icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors duration-300" />
                      </div>
                      {service.badge && (
                        <span className="bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 text-gold-DEFAULT text-xs font-ui font-semibold px-2.5 py-1 rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-green-light transition-colors duration-300">
                      {service.shortTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5 truncate-3">
                      {service.description}
                    </p>

                    {/* Footer: price + CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        {service.startingPrice && (
                          <span className="text-xs text-gray-500 font-ui">
                            From{" "}
                            <span className="text-brand-green font-semibold">
                              {service.startingPrice}
                            </span>
                          </span>
                        )}
                        {service.deliveryTime && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-brand-green-light rounded-full" />
                            <span className="text-xs text-gray-500 font-ui">
                              {service.deliveryTime}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-green text-sm font-ui font-semibold group-hover:gap-2.5 transition-all duration-300">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green via-brand-green-light to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 border-2 border-brand-green text-brand-green px-8 py-4 rounded-2xl font-ui font-bold text-base hover:bg-brand-green hover:text-white transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-400 text-sm mt-3 font-ui">
            36+ printing and advertising services available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
