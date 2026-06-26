"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp, X, ChevronUp } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";
import { cn } from "@/lib/utils";

/* ================================================================
   WHATSAPP FLOATING BUTTON
   ================================================================ */
export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = formatWhatsAppLink(
    siteConfig.contact.whatsapp,
    siteConfig.whatsappMessages.quote
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="bg-white rounded-2xl shadow-card-hover p-4 max-w-[220px] border border-gray-100"
              >
                <p className="text-xs font-ui font-semibold text-gray-800 mb-1">
                  Chat with us!
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Get instant quotes and answers via WhatsApp.
                </p>
                <div className="mt-3 flex gap-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white text-xs font-ui font-semibold py-2 px-3 rounded-lg text-center hover:bg-[#1DB954] transition-colors"
                  >
                    Start Chat
                  </a>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="whatsapp-float"
            aria-label="Open WhatsApp chat"
          >
            <MessageCircle className="w-6 h-6 text-white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================================================================
   CUSTOM CURSOR
   ================================================================ */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    /* Only on desktop with fine pointer */
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let animId: number;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setDotPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);
    };

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.12,
        y: prev.y + (targetY - prev.y) * 0.12,
      }));
      animId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={cn("custom-cursor", isHovering && "hovering")}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: dotPosition.x,
          top: dotPosition.y,
        }}
      />
    </>
  );
}

/* ================================================================
   SCROLL PROGRESS BAR
   ================================================================ */
export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}

/* ================================================================
   BACK TO TOP BUTTON
   ================================================================ */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="back-to-top visible"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-gray-600 group-hover:text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ================================================================
   COOKIE CONSENT BANNER
   ================================================================ */
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="cookie-banner"
          role="dialog"
          aria-label="Cookie consent"
          aria-modal="true"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-ui font-semibold text-gray-800 mb-1">
                We use cookies 🍪
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                We use cookies to improve your experience. By continuing, you
                agree to our{" "}
                <Link href="/privacy-policy" className="text-brand-green underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-xs font-ui font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-xs font-ui font-semibold bg-brand-green text-white rounded-lg hover:bg-brand-green-dark transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================================================================
   SCHEMA.ORG STRUCTURED DATA
   ================================================================ */
export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Al Quoz Industrial Area 3",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "25.1514",
          longitude: "55.2181",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        sameAs: Object.values(siteConfig.social),
        priceRange: "$$",
        currenciesAccepted: "AED",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "25.2048",
            longitude: "55.2708",
          },
          geoRadius: "50000",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
