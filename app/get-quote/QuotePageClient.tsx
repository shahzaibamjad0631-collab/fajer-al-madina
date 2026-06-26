"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  CheckCircle, Upload, MessageCircle, Phone,
  Send, Loader2, ArrowRight, Zap
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

/* ── Zod Schema ── */
const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[+\d\s()-]+$/, "Invalid phone number format"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  quantity: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().min(10, "Please provide more details (min 10 characters)").max(1000),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const SERVICES = [
  "Business Cards",
  "Flyers & Leaflets",
  "Brochures & Catalogues",
  "Roll-Up Banners",
  "Outdoor Vinyl Banners",
  "Frosted Vinyl",
  "Vehicle Branding / Car Wrap",
  "Acrylic Signage",
  "LED Signage",
  "Window Graphics",
  "Office Branding",
  "Exhibition Printing",
  "Stickers & Labels",
  "UV Printing",
  "Laser Cutting",
  "Packaging & Paper Bags",
  "Corporate Gifts",
  "Canvas Printing",
  "Custom T-Shirts & Caps",
  "ID Cards & Lanyards",
  "Other / Multiple Services",
];

const DEADLINES = [
  "Same day (urgent)",
  "Within 24 hours",
  "2-3 days",
  "Within a week",
  "No rush",
];

export function QuotePageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsLoading(true);
    /* Simulate API call — replace with actual form submission */
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Quote form submitted:", data);
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  const whatsappLink = formatWhatsAppLink(
    siteConfig.contact.whatsapp,
    siteConfig.whatsappMessages.quote
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="section-label mb-4 inline-flex">Free Quote</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-navy mb-4">
              Get Your Free
              <span className="gradient-text"> Printing Quote</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Fill in the form below and we&apos;ll respond with a detailed quote within
              30 minutes during business hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Quick contact options */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 space-y-4"
            >
              {/* WhatsApp option */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-5 hover:bg-[#25D366]/15 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-ui font-bold text-sm text-navy mb-0.5">
                    WhatsApp (Fastest)
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Chat directly with our team for instant quotes. Response in under 5 minutes.
                  </p>
                  <span className="text-[#1DB954] text-xs font-ui font-semibold mt-1.5 flex items-center gap-1">
                    Chat now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>

              {/* Phone option */}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="group flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-5 hover:bg-blue-100/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-ui font-bold text-sm text-navy mb-0.5">Call Us</p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {siteConfig.contact.phone}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {siteConfig.contact.workingHoursShort}
                  </p>
                </div>
              </a>

              {/* Fast quote badge */}
              <div className="bg-navy rounded-2xl p-5 text-center">
                <Zap className="w-8 h-8 text-gold-DEFAULT mx-auto mb-2" />
                <p className="font-display font-bold text-white text-sm mb-1">
                  30-Minute Response
                </p>
                <p className="text-gray-400 text-xs">
                  We guarantee a detailed quote within 30 minutes during business hours.
                </p>
              </div>

              {/* Trust points */}
              <div className="space-y-3">
                {[
                  "No commitment required",
                  "Free artwork review",
                  "Transparent pricing",
                  "Same-day options available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="text-gray-600 text-sm font-ui">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Quote Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                /* Success State */
                <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-card text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-20 h-20 bg-brand-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-brand-green" />
                  </motion.div>
                  <h2 className="font-display font-bold text-2xl text-navy mb-3">
                    Quote Request Received!
                  </h2>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Thank you! Our team will review your requirements and send you a detailed quote within 30 minutes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-ui font-semibold text-sm hover:bg-[#1DB954] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Follow up on WhatsApp
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-ui font-medium text-sm hover:bg-gray-50 transition-colors"
                    >
                      Submit Another Quote
                    </button>
                  </div>
                </div>
              ) : (
                /* Form */
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-card"
                  noValidate
                >
                  <h2 className="font-display font-bold text-xl text-navy mb-6">
                    Tell us about your project
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        type="text"
                        placeholder="Ahmed Al Rashidi"
                        autoComplete="name"
                        className={cn(
                          "w-full px-4 py-3 border rounded-xl text-sm font-body bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all duration-200 outline-none",
                          errors.name ? "border-red-300" : "border-gray-200"
                        )}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="ahmed@company.ae"
                        autoComplete="email"
                        className={cn(
                          "w-full px-4 py-3 border rounded-xl text-sm font-body bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all duration-200 outline-none",
                          errors.email ? "border-red-300" : "border-gray-200"
                        )}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("phone")}
                        id="phone"
                        type="tel"
                        placeholder="+971 50 123 4567"
                        autoComplete="tel"
                        className={cn(
                          "w-full px-4 py-3 border rounded-xl text-sm font-body bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all duration-200 outline-none",
                          errors.phone ? "border-red-300" : "border-gray-200"
                        )}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                        Company Name <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        {...register("company")}
                        id="company"
                        type="text"
                        placeholder="Your Company LLC"
                        autoComplete="organization"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all duration-200 outline-none"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("service")}
                        id="service"
                        className={cn(
                          "w-full px-4 py-3 border rounded-xl text-sm font-body bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all duration-200 outline-none",
                          errors.service ? "border-red-300" : "border-gray-200"
                        )}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>
                      )}
                    </div>

                    {/* Quantity */}
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                        Quantity <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        {...register("quantity")}
                        id="quantity"
                        type="text"
                        placeholder="e.g. 500 cards, 10 banners"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all duration-200 outline-none"
                      />
                    </div>

                    {/* Deadline */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                        When do you need it?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {DEADLINES.map((d) => (
                          <label key={d} className="cursor-pointer">
                            <input
                              {...register("deadline")}
                              type="radio"
                              value={d}
                              className="sr-only"
                            />
                            <span className="block px-4 py-2 border border-gray-200 rounded-xl text-sm font-ui text-gray-600 hover:border-brand-green hover:text-brand-green transition-all duration-200 cursor-pointer peer-checked:border-brand-green peer-checked:bg-brand-green-50 peer-checked:text-brand-green">
                              {d}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        rows={4}
                        placeholder="Please describe your requirements: size, material, design details, and any special requirements..."
                        className={cn(
                          "w-full px-4 py-3 border rounded-xl text-sm font-body bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all duration-200 outline-none resize-none",
                          errors.message ? "border-red-300" : "border-gray-200"
                        )}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {/* File upload note */}
                    <div className="sm:col-span-2">
                      <div className="border border-dashed border-gray-200 rounded-xl p-4 flex items-center gap-3 bg-gray-50">
                        <Upload className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-ui font-medium text-gray-600">
                            Have artwork files?
                          </p>
                          <p className="text-xs text-gray-400">
                            Send them via WhatsApp after submitting. We accept PDF, AI, PSD, PNG (300 DPI+)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 flex items-center justify-center gap-2 bg-brand-green text-white py-4 px-8 rounded-xl font-ui font-bold text-base hover:bg-brand-green-dark disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-button"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Request Free Quote
                        </>
                      )}
                    </button>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 rounded-xl font-ui font-bold text-sm hover:bg-[#1DB954] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Instead
                    </a>
                  </div>

                  <p className="text-xs text-gray-400 mt-4 text-center font-ui">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-brand-green underline">
                      Privacy Policy
                    </Link>
                    . We never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
