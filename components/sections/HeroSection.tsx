"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Star,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

const HEADLINE_WORDS = ["Business Cards", "Banners", "Signage", "Branding", "Frosted Vinyl"];

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; opacity: number; speed: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  /* Rotating words */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % HEADLINE_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* Floating particles */
  useEffect(() => {
    const items = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 15 + 8,
    }));
    setParticles(items);
  }, []);

  const whatsappLink = formatWhatsAppLink(
    siteConfig.contact.whatsapp,
    siteConfig.whatsappMessages.quote
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-mesh"
      aria-label="Hero section"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold-DEFAULT/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-green"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
            }}
            transition={{
              duration: particle.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-gold-DEFAULT" />
              <span className="text-white/90 text-sm font-ui font-medium">
                Dubai&apos;s #1 Premium Printing Company
              </span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-gold-DEFAULT fill-gold-DEFAULT" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-4"
          >
            Premium
            <br />
            <span className="relative inline-block">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="gradient-text-gold inline-block"
              >
                {HEADLINE_WORDS[currentWord]}
              </motion.span>
            </span>
            <br />
            <span className="text-white">in Dubai</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Trusted by <span className="text-white font-semibold">500+ businesses</span> across the UAE.
            Same-day delivery, premium quality, unbeatable pricing — from business cards
            to full vehicle branding.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            {/* Primary CTA */}
            <Link
              href="/get-quote"
              className="group relative inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-2xl font-ui font-bold text-base hover:bg-brand-green-dark transition-all duration-300 shadow-button overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            </Link>

            {/* WhatsApp CTA */}
            <a
              href={formatWhatsAppLink(siteConfig.contact.whatsapp, siteConfig.whatsappMessages.quote)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-ui font-bold text-base hover:bg-[#1DB954] transition-all duration-300 shadow-button-gold w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>

            {/* Phone */}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-3 glass text-white px-6 py-4 rounded-2xl font-ui font-medium text-base hover:bg-white/15 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 text-brand-green-light" />
              <span className="hidden sm:block">Call Now</span>
              <span className="sm:hidden">{siteConfig.contact.phone}</span>
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {[
              "Same Day Delivery",
              "Free Design Support",
              "Best Price Guarantee",
              "Dubai-Wide Delivery",
              "15+ Years Experience",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-green-light flex-shrink-0" />
                <span className="text-white/70 text-sm font-ui">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero floating cards */}
        <div className="hidden xl:block">
          {/* Left floating card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 glass rounded-2xl p-4 max-w-[180px]"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-brand-green/20 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-gold-DEFAULT fill-gold-DEFAULT" />
              </div>
              <div>
                <p className="text-white font-display font-bold text-lg leading-none">4.9</p>
                <p className="text-white/60 text-xs">Google Rating</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold-DEFAULT fill-gold-DEFAULT" />
              ))}
            </div>
            <p className="text-white/60 text-xs mt-1">127 reviews</p>
          </motion.div>

          {/* Right floating card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute right-0 top-1/3 glass rounded-2xl p-4 max-w-[200px]"
            style={{ animation: "float 5s ease-in-out infinite 1s" }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-brand-green-light rounded-full animate-pulse" />
              <span className="text-white/80 text-xs font-ui font-medium">Same Day Ready</span>
            </div>
            <p className="text-white font-display font-bold text-sm">
              Business Cards, Banners & More
            </p>
            <p className="text-brand-green-light text-xs font-ui mt-1">
              Order before 12 PM →
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-ui uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
