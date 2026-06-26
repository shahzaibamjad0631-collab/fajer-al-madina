"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award, Users, Target, Heart, CheckCircle, ArrowRight, Printer
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

const TIMELINE = [
  { year: "2009", title: "Founded in Dubai", description: "Fajer Al Madina started as a small print shop in Al Quoz, serving local businesses with passion and precision." },
  { year: "2013", title: "Fleet Branding Division", description: "Expanded into vehicle branding and large-format signage, partnering with major construction firms and logistics companies." },
  { year: "2017", title: "Digital Printing Upgrade", description: "Invested in state-of-the-art HP and Mimaki digital printing equipment, enabling same-day production at scale." },
  { year: "2020", title: "Online Ordering Launched", description: "Launched online quote system and WhatsApp ordering, making it easier than ever for clients to request prints." },
  { year: "2023", title: "500+ Clients Milestone", description: "Celebrated serving 500+ businesses across the UAE, from solo entrepreneurs to large corporations and government entities." },
  { year: "2024", title: "Premium Branding Packages", description: "Launched full-service branding packages combining print, signage, vehicle wraps, and digital for complete brand presence." },
];

const VALUES = [
  { icon: Award, title: "Uncompromising Quality", description: "We never cut corners on materials or process. Every print leaves our facility at the highest standard." },
  { icon: Users, title: "Client-First Always", description: "Your deadline is our deadline. Your problem is our problem. We build long-term partnerships, not just transactions." },
  { icon: Target, title: "Precision in Everything", description: "From file preparation to final delivery — every step is handled with attention to detail and accuracy." },
  { icon: Heart, title: "Pride in Our Craft", description: "Printing is not just a business for us. We take genuine pride in every job, big or small." },
];

const STATS = [
  { value: "15+", label: "Years in Dubai" },
  { value: "500+", label: "Happy Clients" },
  { value: "5,000+", label: "Projects Delivered" },
  { value: "4.9★", label: "Google Rating" },
];

export function AboutPageClient() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true });

  const whatsapp = formatWhatsAppLink(siteConfig.contact.whatsapp, siteConfig.whatsappMessages.default);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-DEFAULT/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label mb-5 inline-flex">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Dubai&apos;s Most Trusted
              <br />
              <span className="gradient-text-gold">Printing Partner</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              For 15+ years, Fajer Al Madina has been delivering premium printing and advertising solutions to businesses across the UAE — with quality you can see and service you can count on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-brand-green py-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <p className="text-4xl font-display font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-sm font-ui mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4 inline-flex">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy mb-6">
                From a Small Shop to
                <span className="gradient-text"> Dubai&apos;s Premier</span>
                <br />Print Partner
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Fajer Al Madina Advertising LLC was founded in 2009 in the heart of Al Quoz — Dubai&apos;s creative and industrial hub. We started with a simple mission: deliver print quality that exceeded expectations at prices that made sense for UAE businesses.
                </p>
                <p>
                  Over 15 years, we&apos;ve grown from a single printing machine to a full-service print and advertising partner with digital presses, large-format plotters, cutting plotters, and a dedicated vehicle branding bay. But our culture hasn&apos;t changed — we still treat every order like it&apos;s our most important one.
                </p>
                <p>
                  Today, we serve 500+ businesses across the UAE — from solo freelancers getting their first business cards to large corporations managing multi-site branding campaigns. What unites all our clients is a demand for quality and a need for reliability. We deliver both, every time.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-ui font-semibold text-sm hover:bg-brand-green-dark transition-colors"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-ui font-semibold text-sm hover:border-brand-green hover:text-brand-green transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>

            {/* Right visual placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-square bg-brand-green-50 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-green rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Printer className="w-12 h-12 text-white" />
                  </div>
                  <p className="font-display font-bold text-2xl text-navy">Fajer Al Madina</p>
                  <p className="text-brand-green font-ui text-sm mt-1">Est. 2009 · Dubai, UAE</p>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white border border-gray-100 rounded-2xl shadow-card p-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-ui font-bold text-xs text-navy">15+ Years</p>
                    <p className="text-gray-400 text-xs">In Dubai</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-gray-100 rounded-2xl shadow-card p-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-green-50 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-ui font-bold text-xs text-navy">500+ Clients</p>
                    <p className="text-gray-400 text-xs">Across UAE</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50" ref={valuesRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="section-label mb-4 inline-flex">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy">
              What Drives
              <span className="gradient-text"> Everything We Do</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-12 h-12 bg-brand-green-50 border border-brand-green/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="font-display font-bold text-base text-navy mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white" ref={timelineRef}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy">
              15 Years of
              <span className="gradient-text"> Print Excellence</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-green via-brand-green/40 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start sm:pl-16 relative"
                >
                  {/* Dot */}
                  <div className="hidden sm:flex absolute left-0 w-12 h-12 bg-brand-green rounded-xl items-center justify-center flex-shrink-0 shadow-button">
                    <span className="text-white font-display font-bold text-xs">{item.year.slice(2)}</span>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-brand-green font-ui font-bold text-sm sm:hidden">{item.year}</span>
                      <span className="font-display font-bold text-navy">{item.title}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Join 500+ businesses who trust Fajer Al Madina for their printing and advertising needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-ui font-bold hover:bg-brand-green-dark transition-colors"
            >
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-2xl font-ui font-semibold hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
