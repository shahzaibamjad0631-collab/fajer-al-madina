"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/config";

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = getFeaturedTestimonials();

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);

  const active = testimonials[activeIndex];

  return (
    <section
      ref={ref}
      className="section bg-gray-50"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">Client Reviews</span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy mb-4"
          >
            Trusted by
            <span className="gradient-text"> 500+ Businesses</span>
            <br />Across Dubai
          </h2>

          {/* Google Rating Badge */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-card">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                {/* Google G icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1">
                  <span className="font-display font-bold text-navy text-lg leading-none">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-gray-500 text-xs font-ui">127 Google Reviews</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Active testimonial card */}
          <div className="bg-navy rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-6">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-DEFAULT/8 rounded-full -translate-x-1/2 translate-y-1/2" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Quote icon */}
                <Quote className="w-12 h-12 text-brand-green/30 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-white text-lg sm:text-xl leading-relaxed mb-8 font-body">
                  &ldquo;{active.content}&rdquo;
                </blockquote>

                {/* Reviewer info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-white text-lg">
                      {active.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">{active.name}</p>
                    <p className="text-gray-400 text-sm font-ui">
                      {active.role} — {active.company}
                    </p>
                  </div>
                  {active.source === "google" && (
                    <div className="ml-auto flex items-center gap-1 text-gray-400 text-xs font-ui">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Google Review
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === activeIndex
                      ? "w-8 h-2.5 bg-brand-green"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl hover:border-brand-green hover:text-brand-green transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center bg-brand-green text-white rounded-xl hover:bg-brand-green-dark transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href={siteConfig.contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-green transition-colors font-ui"
          >
            <ExternalLink className="w-4 h-4" />
            View all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
