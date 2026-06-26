"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Printer,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, navLinks } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  /* Close on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const whatsappLink = formatWhatsAppLink(
    siteConfig.contact.whatsapp,
    siteConfig.whatsappMessages.default
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-nav border-b border-gray-100"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="container">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label={`${siteConfig.name} - Home`}
            >
              <div className={cn(
                "flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                isScrolled
                  ? "bg-brand-green text-white"
                  : "bg-white/10 text-white border border-white/20"
              )}>
                <Printer className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <span className={cn(
                  "block font-display font-bold text-base leading-none transition-colors duration-300",
                  isScrolled ? "text-navy" : "text-white"
                )}>
                  Fajer Al Madina
                </span>
                <span className={cn(
                  "block text-[10px] font-ui tracking-widest uppercase transition-colors duration-300 mt-0.5",
                  isScrolled ? "text-brand-green" : "text-gold-DEFAULT"
                )}>
                  Advertising LLC
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={menuRef}
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.megaMenu || link.children ? (
                    <button
                      onClick={() =>
                        setActiveMenu(activeMenu === link.href ? null : link.href)
                      }
                      onMouseEnter={() => setActiveMenu(link.href)}
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-ui font-medium transition-all duration-200",
                        isScrolled
                          ? "text-gray-700 hover:text-brand-green hover:bg-brand-green-50"
                          : "text-white/90 hover:text-white hover:bg-white/10",
                        pathname.startsWith(link.href) && link.href !== "/" &&
                          (isScrolled ? "text-brand-green bg-brand-green-50" : "text-white bg-white/10")
                      )}
                      aria-expanded={activeMenu === link.href}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeMenu === link.href && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3.5 py-2 rounded-lg text-sm font-ui font-medium transition-all duration-200 block",
                        isScrolled
                          ? "text-gray-700 hover:text-brand-green hover:bg-brand-green-50"
                          : "text-white/90 hover:text-white hover:bg-white/10",
                        pathname === link.href &&
                          (isScrolled ? "text-brand-green bg-brand-green-50" : "text-white bg-white/10")
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Mega Menu / Dropdown */}
                  <AnimatePresence>
                    {activeMenu === link.href && link.children && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onMouseLeave={() => setActiveMenu(null)}
                        className={cn(
                          "absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-card-hover border border-gray-100 z-50 overflow-hidden",
                          link.megaMenu ? "w-[680px]" : "w-52"
                        )}
                      >
                        {link.megaMenu && Array.isArray(link.children) ? (
                          /* Mega Menu Grid */
                          <div className="p-6">
                            <div className="grid grid-cols-3 gap-6">
                              {(link.children as Array<{ category: string; items: Array<{ label: string; href: string }> }>).map(
                                (group) => (
                                  <div key={group.category}>
                                    <p className="text-xs font-ui font-semibold text-brand-green uppercase tracking-wider mb-3">
                                      {group.category}
                                    </p>
                                    <ul className="space-y-1.5">
                                      {group.items.map((item) => (
                                        <li key={item.href}>
                                          <Link
                                            href={item.href}
                                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-green transition-colors duration-150 group/item py-0.5"
                                          >
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -ml-4 group-hover/item:ml-0 transition-all duration-200" />
                                            {item.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                Need something specific?
                              </span>
                              <Link
                                href="/get-quote"
                                className="inline-flex items-center gap-2 bg-brand-green text-white px-4 py-2 rounded-lg text-sm font-ui font-medium hover:bg-brand-green-dark transition-colors duration-200"
                              >
                                Get Free Quote
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        ) : (
                          /* Simple Dropdown */
                          <div className="py-2">
                            {(link.children as Array<{ label: string; href: string }>).map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-brand-green hover:bg-brand-green-50 transition-colors duration-150"
                              >
                                <ArrowRight className="w-3 h-3" />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-ui font-medium transition-all duration-200",
                  isScrolled ? "text-gray-700 hover:text-brand-green" : "text-white/90 hover:text-white"
                )}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:block">{siteConfig.contact.phone}</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-xl text-sm font-ui font-semibold hover:bg-[#1DB954] transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link
                href="/get-quote"
                className="flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-xl text-sm font-ui font-semibold hover:bg-brand-green-dark transition-all duration-200 shadow-button"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={cn(
                "lg:hidden p-2.5 rounded-xl transition-all duration-200",
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[360px] bg-white shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-9 h-9 bg-brand-green rounded-xl">
                    <Printer className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-navy leading-none">
                      Fajer Al Madina
                    </p>
                    <p className="text-[10px] text-brand-green font-ui uppercase tracking-wider mt-0.5">
                      Advertising LLC
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="p-4" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between w-full py-3.5 px-4 rounded-xl text-sm font-ui font-medium transition-all duration-200 mb-1",
                        pathname === link.href
                          ? "bg-brand-green-50 text-brand-green"
                          : "text-gray-700 hover:bg-gray-50 hover:text-brand-green"
                      )}
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="p-4 mt-auto border-t border-gray-100 space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 rounded-xl font-ui font-semibold text-sm hover:bg-[#1DB954] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
                <Link
                  href="/get-quote"
                  className="flex items-center justify-center gap-2 w-full bg-brand-green text-white py-3.5 rounded-xl font-ui font-semibold text-sm hover:bg-brand-green-dark transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-gray-50 text-gray-700 py-3.5 rounded-xl font-ui font-medium text-sm hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
