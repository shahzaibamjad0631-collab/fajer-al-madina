"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap, Award, Clock, MapPin, Palette, Shield,
  TrendingUp, HeartHandshake
} from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Same Day Printing",
    description:
      "Urgent orders accepted! Order before 12 PM and get your prints delivered the same day, anywhere in Dubai.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We use only the highest-grade materials, inks, and equipment to deliver prints that impress every time.",
    color: "text-brand-green",
    bg: "bg-brand-green/10",
    border: "border-brand-green/20",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description:
      "Get enterprise-level print quality at prices that make sense for businesses of all sizes. No hidden fees.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Palette,
    title: "Free Design Support",
    description:
      "Our in-house designers help you create artwork that's print-ready. Free basic design support with every order.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: MapPin,
    title: "Dubai-Wide Delivery",
    description:
      "Free delivery across Dubai. We cover all areas including JLT, DIFC, Business Bay, Al Quoz, Deira, and more.",
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description:
      "Your personal account manager handles every order from start to delivery. Available on WhatsApp, 7 days a week.",
    color: "text-gold-DEFAULT",
    bg: "bg-gold-DEFAULT/10",
    border: "border-gold-DEFAULT/20",
  },
];

export function WhyChooseUsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section bg-gray-50"
      id="why-us"
      aria-labelledby="why-heading"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">Why Choose Us</span>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy mb-4"
          >
            The Fajer Al Madina
            <br />
            <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            15+ years of printing excellence, trusted by real estate firms, restaurants,
            hospitals, corporates, and SMEs across the UAE.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.bg} border ${feature.border} rounded-xl mb-5`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg text-navy mb-3 group-hover:text-brand-green transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated bottom border */}
                <div className={`mt-5 h-0.5 rounded-full bg-gradient-to-r from-transparent via-current to-transparent ${feature.color} w-0 group-hover:w-full transition-all duration-500 opacity-40`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 bg-navy rounded-3xl p-8 sm:p-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "TRN Registered", sub: "Government Compliant" },
              { label: "100% Halal", sub: "Ethical Business" },
              { label: "ISO Standards", sub: "Print Quality" },
              { label: "5-Star Rated", sub: "Google Reviews" },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-brand-green/20 border border-brand-green/30 rounded-xl mb-3">
                  <Shield className="w-5 h-5 text-brand-green-light" />
                </div>
                <p className="font-display font-bold text-white text-sm">{badge.label}</p>
                <p className="text-gray-400 text-xs mt-0.5 font-ui">{badge.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
