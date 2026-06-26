"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  Send, Loader2, CheckCircle, Instagram, Facebook, Linkedin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const CONTACT_CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.phone,
    sub: "Fastest — reply in minutes",
    href: formatWhatsAppLink(siteConfig.contact.whatsapp, siteConfig.whatsappMessages.default),
    bg: "bg-[#25D366]/10",
    border: "border-[#25D366]/20",
    iconBg: "bg-[#25D366]",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    sub: siteConfig.contact.workingHoursShort,
    href: `tel:${siteConfig.contact.phone}`,
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-600",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    sub: "Response within 2 hours",
    href: `mailto:${siteConfig.contact.email}`,
    bg: "bg-purple-50",
    border: "border-purple-100",
    iconBg: "bg-purple-600",
    external: false,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: siteConfig.contact.addressShort,
    sub: siteConfig.contact.workingHours,
    href: siteConfig.contact.mapUrl,
    bg: "bg-red-50",
    border: "border-red-100",
    iconBg: "bg-red-500",
    external: true,
  },
];

export function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Contact form:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        </div>
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label mb-5 inline-flex">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              We&apos;d Love to Hear
              <span className="gradient-text-gold"> From You</span>
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              Get a free quote, ask a question, or just say hello. Our team responds within 30 minutes during business hours.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-14">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: contact channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <h2 className="font-display font-bold text-xl text-navy mb-5">Contact Channels</h2>
            {CONTACT_CHANNELS.map((ch) => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.external ? "_blank" : undefined}
                  rel={ch.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "flex items-start gap-4 rounded-2xl p-5 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card group",
                    ch.bg, ch.border
                  )}
                >
                  <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0", ch.iconBg)}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-ui font-bold text-sm text-navy mb-0.5">{ch.label}</p>
                    <p className="text-gray-700 text-sm font-medium">{ch.value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{ch.sub}</p>
                  </div>
                </a>
              );
            })}

            {/* Social */}
            <div className="pt-2">
              <p className="text-xs font-ui font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-green hover:border-brand-green/30 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-brand-green" />
                <h3 className="font-ui font-semibold text-sm text-navy">Business Hours</h3>
              </div>
              <div className="space-y-1.5 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Saturday – Thursday</span>
                  <span className="font-medium">8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Friday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-12 text-center">
                <div className="w-16 h-16 bg-brand-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-brand-green" />
                </div>
                <h2 className="font-display font-bold text-xl text-navy mb-2">Message Received!</h2>
                <p className="text-gray-500 mb-6">We&apos;ll get back to you within 30 minutes during business hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-green text-sm font-ui font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-3xl border border-gray-100 shadow-card p-6 sm:p-8"
                noValidate
              >
                <h2 className="font-display font-bold text-xl text-navy mb-6">Send Us a Message</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("name")}
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className={cn(
                        "w-full px-4 py-3 border rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all",
                        errors.name ? "border-red-300" : "border-gray-200"
                      )}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className={cn(
                        "w-full px-4 py-3 border rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all",
                        errors.email ? "border-red-300" : "border-gray-200"
                      )}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      {...register("phone")}
                      id="phone"
                      type="tel"
                      placeholder="+971 50 123 4567"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("subject")}
                      id="subject"
                      type="text"
                      placeholder="What can we help with?"
                      className={cn(
                        "w-full px-4 py-3 border rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all",
                        errors.subject ? "border-red-300" : "border-gray-200"
                      )}
                    />
                    {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-ui font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={5}
                      placeholder="Tell us more about your requirements..."
                      className={cn(
                        "w-full px-4 py-3 border rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all resize-none",
                        errors.message ? "border-red-300" : "border-gray-200"
                      )}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-brand-green text-white py-4 rounded-xl font-ui font-bold text-base hover:bg-brand-green-dark disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-button"
                >
                  {loading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </button>
              </form>
            )}

            {/* Map embed */}
            <div className="mt-6 rounded-3xl overflow-hidden border border-gray-100 shadow-card h-64 bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.7!2d55.218!3d25.151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA5JzAzLjYiTiA1NcKwMTMnMDQuOCJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fajer Al Madina Advertising LLC location on Google Maps"
                aria-label="Map showing Fajer Al Madina location in Al Quoz, Dubai"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
