import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Printer,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappLink = formatWhatsAppLink(
    siteConfig.contact.whatsapp,
    siteConfig.whatsappMessages.default
  );

  return (
    <footer className="bg-navy text-white relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-DEFAULT/5 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Main Footer */}
      <div className="relative container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-green rounded-xl">
                <Printer className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-display font-bold text-base text-white leading-none">
                  Fajer Al Madina
                </span>
                <span className="block text-[10px] font-ui tracking-widest uppercase text-gold-DEFAULT mt-0.5">
                  Advertising LLC
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Dubai&apos;s premium printing and advertising partner. Quality print solutions
              delivered fast, trusted by 500+ businesses across the UAE.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
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
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-green text-gray-400 hover:text-white transition-all duration-200 border border-white/10 hover:border-brand-green"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-ui font-semibold text-sm text-white uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-green-light transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-ui font-semibold text-sm text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-green-light transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-ui font-semibold text-sm text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-brand-green flex-shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-brand-green flex-shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-green flex-shrink-0" />
                  <span>{siteConfig.contact.address}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 mt-0.5 text-brand-green flex-shrink-0" />
                <span>{siteConfig.contact.workingHours}</span>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-xl text-sm font-ui font-semibold hover:bg-[#1DB954] transition-all duration-200 w-fit"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
