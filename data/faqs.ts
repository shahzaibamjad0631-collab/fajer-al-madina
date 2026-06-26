import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Do you offer same-day printing in Dubai?",
    answer:
      "Yes! We offer same-day printing for most products including business cards, flyers, roll-up banners, stickers, and outdoor vinyl banners. Orders placed before 12 PM are typically ready for delivery by evening. Contact us on WhatsApp for urgent requirements and we'll confirm availability immediately.",
    category: "Delivery & Turnaround",
    featured: true,
  },
  {
    id: "2",
    question: "What is the minimum order quantity?",
    answer:
      "We have no minimum order for most products — you can order from 1 piece! However, bulk orders get significantly better pricing. Business cards start from 50 pieces, flyers from 100 pieces for best value. For banners and signage, we can handle single units.",
    category: "Orders & Pricing",
    featured: true,
  },
  {
    id: "3",
    question: "Do you provide free design services?",
    answer:
      "Yes, we offer free basic design support with every order. Our in-house designers can create or refine your artwork based on your brief. For complex branding projects such as full corporate identity packages or large exhibition designs, we charge a small design fee — contact us for a quote.",
    category: "Design & Artwork",
    featured: true,
  },
  {
    id: "4",
    question: "Do you deliver across all of Dubai?",
    answer:
      "Absolutely! We deliver to all areas of Dubai including DIFC, Business Bay, Downtown, Deira, Bur Dubai, JLT, JBR, Al Quoz, Jumeirah, Dubai Silicon Oasis, Dubai Investment Park, and all free zones. Free delivery on orders above AED 200.",
    category: "Delivery & Turnaround",
    featured: true,
  },
  {
    id: "5",
    question: "What file formats do you accept for printing?",
    answer:
      "We accept PDF (preferred), AI, EPS, CDR, PSD, and high-resolution JPG/PNG files. For best print results, files should be in CMYK color mode, 300 DPI resolution, with 3mm bleed on all sides. Our team will check your artwork and advise if any adjustments are needed — completely free.",
    category: "Design & Artwork",
    featured: true,
  },
  {
    id: "6",
    question: "Do you offer frosted vinyl for clinic and office windows?",
    answer:
      "Yes! Frosted vinyl is one of our specialties. We supply and install MOHAP-compliant frosted window film for clinics, hospitals, and medical centers. We also provide custom-cut frosted vinyl with logos and designs for offices and retail spaces. Our team can visit your site for measurements and installation.",
    category: "Services",
    featured: true,
  },
  {
    id: "7",
    question: "Can you brand my entire vehicle fleet?",
    answer:
      "Absolutely. We handle full fleet branding from single cars to trucks, buses, and vans. We use premium 3M and Avery vinyl materials with a professional installation team. Pricing is highly competitive for fleet orders and we offer volume discounts. We'll visit your location for vehicle inspection before quoting.",
    category: "Services",
    featured: false,
  },
  {
    id: "8",
    question: "How do I get a quote?",
    answer:
      "Getting a quote is easy — WhatsApp us, call us, or fill out our online quote form. Tell us what you need (product, size, quantity, deadline) and we'll respond with detailed pricing within 30 minutes during business hours. For urgent quotes, WhatsApp is the fastest channel.",
    category: "Orders & Pricing",
    featured: false,
  },
  {
    id: "9",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfer, cheque, and all major credit/debit cards. For corporate clients, we offer net payment terms upon application. Online card payments are also available. A 50% advance is required for orders above AED 500.",
    category: "Orders & Pricing",
    featured: false,
  },
  {
    id: "10",
    question: "Do you have a physical shop I can visit?",
    answer:
      "Yes! Our main office and production facility is located in Al Quoz Industrial Area 3, Dubai. You're welcome to visit Saturday to Thursday, 8AM–8PM. You can also see print samples and material swatches in person. Please call or WhatsApp ahead if you'd like a meeting with our design team.",
    category: "General",
    featured: false,
  },
  {
    id: "11",
    question: "Can you handle large format printing for exhibitions?",
    answer:
      "Absolutely. We specialize in exhibition printing including large fabric backdrops, tension systems, pop-up displays, hanging banners, table throws, and complete booth branding. We've handled GITEX, Arab Health, Cityscape, and hundreds of smaller exhibitions. Speak to us early — we recommend booking 5-7 days ahead for large exhibition orders.",
    category: "Services",
    featured: false,
  },
  {
    id: "12",
    question: "How long does vehicle branding take?",
    answer:
      "A full car wrap typically takes 1-2 days for production and installation. Van or truck wraps may take 2-3 days. Partial wraps and decals can often be done same day or next day. We'll confirm exact timelines when you get a quote, as it depends on the size and complexity of your design.",
    category: "Delivery & Turnaround",
    featured: false,
  },
  {
    id: "13",
    question: "Do you print in Arabic?",
    answer:
      "Yes! We print in both English and Arabic. Our designers are experienced with Arabic typography and right-to-left layout for printed materials. We can also help translate your content if needed — just ask when you request a quote.",
    category: "Design & Artwork",
    featured: false,
  },
  {
    id: "14",
    question: "What is your refund or reprint policy?",
    answer:
      "We stand behind our quality. If there's a printing error on our end or a quality defect, we'll reprint at no cost. If you approved the artwork proof and later want changes, reprints are charged at a discounted rate. We always send a digital proof for approval before printing — please review carefully before confirming.",
    category: "Orders & Pricing",
    featured: false,
  },
  {
    id: "15",
    question: "Do you serve clients outside Dubai?",
    answer:
      "Yes! While our main delivery zone is Dubai, we regularly ship to Abu Dhabi, Sharjah, Ajman, and other Emirates. For GCC countries, we can arrange courier delivery. International shipping is available for small orders. Contact us to discuss logistics for your specific location.",
    category: "Delivery & Turnaround",
    featured: false,
  },
];

export const getFeaturedFAQs = () => faqs.filter((f) => f.featured);
export const getFAQsByCategory = (category: string) =>
  faqs.filter((f) => f.category === category);
export const FAQ_CATEGORIES = [
  "All",
  "General",
  "Orders & Pricing",
  "Design & Artwork",
  "Services",
  "Delivery & Turnaround",
];
