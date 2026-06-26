# Fajer Al Madina Advertising LLC — Website

**Premium Next.js 15 website for Dubai printing and advertising company.**

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
fajer-al-madina/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Homepage
│   ├── about/                  # About page
│   ├── services/
│   │   ├── page.tsx            # Services listing
│   │   └── [slug]/page.tsx     # Individual service pages (36+ pages)
│   ├── industries/
│   │   └── [slug]/page.tsx     # Industry landing pages
│   ├── portfolio/              # Portfolio gallery
│   ├── get-quote/              # Quote request form
│   ├── contact/                # Contact page + map
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog posts
│   ├── faq/                    # FAQ page
│   ├── privacy-policy/         # Privacy policy
│   ├── terms/                  # Terms of service
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── robots.ts               # Robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav + mega menu + mobile drawer
│   │   └── Footer.tsx          # 4-col footer
│   ├── sections/
│   │   ├── HeroSection.tsx     # Full-screen animated hero
│   │   ├── StatsSection.tsx    # Animated counters
│   │   ├── ServicesSection.tsx # 9 service cards grid
│   │   ├── WhyChooseUs.tsx     # 6 feature cards
│   │   ├── TestimonialsSection.tsx # Slider with Google badge
│   │   └── HomeSections.tsx    # All other homepage sections
│   └── shared/
│       └── WhatsAppFloat.tsx   # All floating/shared components
│
├── data/
│   ├── services.ts             # 18 services with full SEO metadata
│   ├── testimonials.ts         # 8 client reviews
│   ├── blog.ts                 # 5 blog posts
│   ├── faqs.ts                 # 15 FAQs with categories
│   └── industries.ts           # 8 industry verticals
│
├── lib/
│   ├── config.ts               # Site config, nav links, contact info
│   └── utils.ts                # Utility functions
│
├── types/index.ts              # TypeScript types
└── styles/globals.css          # Design system CSS
```

---

## 🌐 Deployment to Vercel (Recommended)

### Option A: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Link to your Vercel account
# - Set project name: fajer-al-madina
# - Use auto-detected Next.js settings

# Deploy to production
vercel --prod
```

### Option B: Vercel Dashboard

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Fajer Al Madina website"
git remote add origin https://github.com/YOUR_USERNAME/fajer-al-madina.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Done! Site is live in ~2 minutes.

### Custom Domain Setup (Vercel)

1. Go to your project → Settings → Domains
2. Add: `www.fajeralmadinadubai.com`
3. Add DNS records at your domain registrar:
   - CNAME `www` → `cname.vercel-dns.com`
   - A record `@` → `76.76.21.21`
4. Wait 5–30 minutes for DNS propagation

---

## 🔧 Customization Guide

### Update Contact Info
Edit `/lib/config.ts`:
```ts
contact: {
  phone: "+971 50 XXX XXXX",      // ← Your actual phone
  whatsapp: "97150XXXXXXX",       // ← WhatsApp number (no +, no spaces)
  email: "info@yoursite.com",     // ← Your email
  address: "Your address here",
}
```

### Update Google Map
In `/app/contact/ContactPageClient.tsx`, replace the Google Maps embed URL:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE" />
```
Get your embed code: Google Maps → Share → Embed a map → Copy HTML

### Add Real Portfolio Images
Replace placeholder divs in `/app/portfolio/PortfolioPageClient.tsx` with:
```tsx
import Image from "next/image";
<Image src="/images/portfolio/project1.jpg" alt="Project name" fill className="object-cover" />
```

### Add Google Analytics

In `/app/layout.tsx`, add before `</body>`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
<Script id="gtag">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');`}
</Script>
```

### Google Search Console Verification
In `/app/layout.tsx`, update:
```ts
verification: {
  google: "your-actual-google-verification-code",  // From Search Console
}
```

### Contact Form Backend
The form currently logs to console. To receive emails, integrate:

**Option 1: Formspree (Free)**
```bash
npm install @formspree/react
```
Sign up at formspree.io, get your form ID, then update the `onSubmit` in `QuotePageClient.tsx`.

**Option 2: EmailJS (Free)**
```bash
npm install @emailjs/browser
```

**Option 3: Resend + API Route**
```bash
npm install resend
```
Create `/app/api/quote/route.ts` and handle form submissions server-side.

---

## 📈 SEO Checklist

- [x] Title & meta descriptions on every page
- [x] OpenGraph tags for social sharing
- [x] JSON-LD structured data (LocalBusiness, FAQPage, Article, Product)
- [x] XML sitemap at `/sitemap.xml`
- [x] Robots.txt at `/robots.txt`
- [x] Canonical URLs on every page
- [x] Semantic HTML (h1, article, nav, main, header, footer)
- [x] Alt text on images (add when replacing placeholders)
- [x] Mobile-first responsive design
- [ ] Google Analytics / GA4 (add your tracking ID)
- [ ] Google Search Console (add verification code)
- [ ] Google Business Profile (link to website)

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Brand Green | `#006B3C` |
| Navy | `#0F172A` |
| Gold | `#F5B700` |
| Display Font | Space Grotesk |
| Body Font | Inter |
| UI Font | Poppins |
| Sub Font | Manrope |

---

## 📞 Project Contact

Built for Fajer Al Madina Advertising LLC, Dubai.
For technical questions about this codebase, contact your developer.
