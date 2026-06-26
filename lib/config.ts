/**
 * Site Configuration
 * Fajer Al Madina Advertising LLC
 * Central configuration for all site-wide constants
 */

export const siteConfig = {
  name: "Fajer Al Madina Advertising LLC",
  shortName: "Fajer Al Madina",
  tagline: "Premium Printing & Advertising Solutions in Dubai",
  description:
    "Dubai's leading printing and advertising company. Business cards, banners, vehicle branding, frosted vinyl, signage, and more. Same-day printing available. Trusted by 500+ businesses across UAE.",
  url: "https://www.fajeralmadinadubai.com",
  ogImage: "/images/og-image.jpg",
  locale: "en_AE",
  country: "UAE",
  city: "Dubai",

  /* Contact Information */
  contact: {
    phone: "+971 50 123 4567",
    phoneRaw: "971501234567",
    whatsapp: "971501234567",
    email: "info@fajeralmadinadubai.com",
    address: "Al Quoz Industrial Area 3, Dubai, UAE",
    addressShort: "Al Quoz, Dubai, UAE",
    mapUrl: "https://maps.google.com/?q=Al+Quoz+Industrial+Area+Dubai",
    workingHours: "Saturday – Thursday: 8:00 AM – 8:00 PM",
    workingHoursShort: "Sat–Thu: 8AM–8PM",
  },

  /* Social Media */
  social: {
    instagram: "https://instagram.com/fajeralmadinadubai",
    facebook: "https://facebook.com/fajeralmadinadubai",
    linkedin: "https://linkedin.com/company/fajeralmadinadubai",
    tiktok: "https://tiktok.com/@fajeralmadinadubai",
    youtube: "https://youtube.com/@fajeralmadinadubai",
    twitter: "https://twitter.com/fajeralmadinadubai",
  },

  /* Key Statistics */
  stats: [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 5000, suffix: "+", label: "Projects Completed" },
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 4.9, suffix: "★", label: "Google Rating" },
    { value: 20, suffix: "+", label: "Industries Served" },
  ],

  /* SEO */
  seo: {
    keywords: [
      "printing company dubai",
      "business cards dubai",
      "flyer printing dubai",
      "banner printing dubai",
      "frosted vinyl dubai",
      "vehicle branding dubai",
      "same day printing dubai",
      "acrylic signage dubai",
      "exhibition printing dubai",
      "roll up banner dubai",
      "sticker printing dubai",
      "office branding dubai",
      "printing services uae",
      "advertising company dubai",
      "large format printing dubai",
    ],
  },

  /* WhatsApp Message Templates */
  whatsappMessages: {
    default:
      "Hello! I'm interested in your printing services. Could you please provide more information?",
    quote:
      "Hello! I'd like to get a free quote for my printing requirements.",
    businessCards:
      "Hello! I need business cards printed. Please let me know the options and pricing.",
    banner:
      "Hello! I need banner printing for my business. What sizes and materials do you offer?",
  },
};

/**
 * Navigation Links
 */
export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    megaMenu: true,
    children: [
      {
        category: "Print & Marketing",
        items: [
          { label: "Business Cards", href: "/services/business-cards-dubai" },
          { label: "Flyers & Leaflets", href: "/services/flyers-printing-dubai" },
          { label: "Brochures", href: "/services/brochures-dubai" },
          { label: "Roll-Up Banners", href: "/services/roll-up-banners-dubai" },
          { label: "Outdoor Banners", href: "/services/outdoor-banners-dubai" },
          { label: "Stickers & Labels", href: "/services/stickers-dubai" },
        ],
      },
      {
        category: "Signage & Branding",
        items: [
          { label: "Frosted Vinyl", href: "/services/frosted-vinyl-dubai" },
          { label: "Vehicle Branding", href: "/services/vehicle-branding-dubai" },
          { label: "Acrylic Signage", href: "/services/acrylic-signage-dubai" },
          { label: "LED Signage", href: "/services/led-signage-dubai" },
          { label: "Office Branding", href: "/services/office-branding-dubai" },
          { label: "Window Graphics", href: "/services/window-graphics-dubai" },
        ],
      },
      {
        category: "Speciality Printing",
        items: [
          { label: "UV Printing", href: "/services/uv-printing-dubai" },
          { label: "Laser Cutting", href: "/services/laser-cutting-dubai" },
          { label: "Packaging Boxes", href: "/services/packaging-dubai" },
          { label: "Exhibition Printing", href: "/services/exhibition-printing-dubai" },
          { label: "Canvas Printing", href: "/services/canvas-printing-dubai" },
          { label: "Corporate Gifts", href: "/services/corporate-gifts-dubai" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Restaurants & Cafes", href: "/industries/restaurants" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Construction", href: "/industries/construction" },
      { label: "Events & Exhibitions", href: "/industries/events" },
      { label: "Retail & Hospitality", href: "/industries/retail" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/**
 * Footer Links
 */
export const footerLinks = {
  services: [
    { label: "Business Cards", href: "/services/business-cards-dubai" },
    { label: "Banner Printing", href: "/services/outdoor-banners-dubai" },
    { label: "Frosted Vinyl", href: "/services/frosted-vinyl-dubai" },
    { label: "Vehicle Branding", href: "/services/vehicle-branding-dubai" },
    { label: "Acrylic Signage", href: "/services/acrylic-signage-dubai" },
    { label: "Exhibition Printing", href: "/services/exhibition-printing-dubai" },
    { label: "Corporate Gifts", href: "/services/corporate-gifts-dubai" },
    { label: "UV Printing", href: "/services/uv-printing-dubai" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
