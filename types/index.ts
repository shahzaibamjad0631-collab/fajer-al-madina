/**
 * Global TypeScript Types
 * Fajer Al Madina Advertising LLC
 */

/* ── Service Types ── */
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription?: string;
  icon: string;
  category: ServiceCategory;
  featured: boolean;
  badge?: string;
  startingPrice?: string;
  deliveryTime?: string;
  image?: string;
  features?: string[];
  useCases?: string[];
  specifications?: Record<string, string>;
  relatedServices?: string[];
  seo?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export type ServiceCategory =
  | "print-marketing"
  | "signage-branding"
  | "specialty-printing"
  | "digital-services"
  | "corporate-gifts";

/* ── Industry Types ── */
export interface Industry {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  services: string[];
  benefits?: string[];
  clients?: string[];
}

/* ── Portfolio Types ── */
export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  tags?: string[];
  image: string;
  beforeImage?: string;
  afterImage?: string;
  client?: string;
  featured: boolean;
  completedAt?: string;
}

/* ── Testimonial Types ── */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  source?: "google" | "facebook" | "direct";
  featured: boolean;
  date?: string;
}

/* ── Blog Types ── */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: string;
  tags: string[];
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  readTime?: number;
  featured: boolean;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

/* ── FAQ Types ── */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  featured?: boolean;
}

/* ── Form Types ── */
export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  quantity?: string;
  deadline?: string;
  message: string;
  file?: File;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/* ── Navigation Types ── */
export interface NavLink {
  label: string;
  href: string;
  megaMenu?: boolean;
  children?: NavLinkGroup[] | NavLink[];
}

export interface NavLinkGroup {
  category: string;
  items: NavLink[];
}

/* ── Stat Types ── */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

/* ── Pricing Types ── */
export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

/* ── Page Props ── */
export interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}

/* ── Component Props ── */
export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimatedProps {
  delay?: number;
  duration?: number;
  once?: boolean;
}

/* ── API Response Types ── */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
