import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | Fajer Al Madina Advertising LLC",
  description: "Privacy policy for Fajer Al Madina Advertising LLC. How we collect, use, and protect your personal data.",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-navy py-16">
        <div className="container">
          <span className="section-label mb-4 inline-flex">Legal</span>
          <h1 className="text-4xl font-display font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-400 mt-2 text-sm font-ui">Last updated: November 2024</p>
        </div>
      </div>

      <div className="container py-12 max-w-3xl">
        <div className="prose prose-gray max-w-none">
          <h2>1. Information We Collect</h2>
          <p>When you use our website or services, we may collect:</p>
          <ul>
            <li>Name, email address, phone number when you submit a quote or contact form</li>
            <li>Company name and business details for order processing</li>
            <li>Artwork and design files you share with us for print production</li>
            <li>Technical data like IP address and browser type when you visit our website</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and deliver your printing orders</li>
            <li>Respond to quote requests and enquiries</li>
            <li>Send order updates and delivery notifications</li>
            <li>Improve our website and services</li>
            <li>Send occasional marketing emails (you can unsubscribe at any time)</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>We take appropriate measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your artwork and design files are stored securely and only accessed by staff involved in your order.</p>

          <h2>4. Data Sharing</h2>
          <p>We do not sell, trade, or share your personal information with third parties except as required to fulfil your order (e.g., delivery partners) or as required by UAE law.</p>

          <h2>5. Cookies</h2>
          <p>Our website uses cookies to improve your browsing experience. You can choose to decline non-essential cookies via the cookie banner when you first visit our site.</p>

          <h2>6. Your Rights</h2>
          <p>Under applicable data protection laws, you have the right to access, correct, or request deletion of your personal data. Contact us at {siteConfig.contact.email} to exercise these rights.</p>

          <h2>7. Contact</h2>
          <p>For any privacy-related questions, please contact us at:</p>
          <p>
            <strong>{siteConfig.name}</strong><br />
            {siteConfig.contact.address}<br />
            Email: {siteConfig.contact.email}<br />
            Phone: {siteConfig.contact.phone}
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link href="/" className="text-brand-green text-sm font-ui hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
