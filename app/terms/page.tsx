import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service | Fajer Al Madina Advertising LLC",
  description: "Terms of service for Fajer Al Madina Advertising LLC printing and advertising services in Dubai.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="bg-navy py-16">
        <div className="container">
          <span className="section-label mb-4 inline-flex">Legal</span>
          <h1 className="text-4xl font-display font-bold text-white">Terms of Service</h1>
          <p className="text-gray-400 mt-2 text-sm font-ui">Last updated: November 2024</p>
        </div>
      </div>

      <div className="container py-12 max-w-3xl">
        <div className="prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By placing an order or using the services of {siteConfig.name} ("we", "us", "our"), you agree to these Terms of Service. These terms govern the relationship between you (the client) and us for all printing and advertising services.</p>

          <h2>2. Order Placement & Approval</h2>
          <ul>
            <li>All orders require written confirmation (WhatsApp, email, or quote form)</li>
            <li>A digital proof will be sent for approval before printing begins</li>
            <li>Once you approve the proof, we are not responsible for errors present in the approved design</li>
            <li>We reserve the right to decline orders that contain offensive or illegal content</li>
          </ul>

          <h2>3. Payment Terms</h2>
          <ul>
            <li>A 50% deposit is required for orders above AED 500</li>
            <li>Full payment is required before delivery for orders under AED 500</li>
            <li>Corporate clients may apply for net payment terms upon approval</li>
            <li>We accept cash, bank transfer, cheque, and credit/debit cards</li>
          </ul>

          <h2>4. Delivery & Turnaround</h2>
          <ul>
            <li>Delivery timelines begin from proof approval, not from order placement</li>
            <li>Same-day delivery is subject to availability and must be confirmed</li>
            <li>We are not liable for delays caused by factors outside our control</li>
            <li>Delivery charges apply for orders outside our standard delivery zone</li>
          </ul>

          <h2>5. Quality & Reprints</h2>
          <ul>
            <li>We guarantee our print quality meets professional standards</li>
            <li>If a printing error occurs on our end, we will reprint at no cost</li>
            <li>Claims for defective products must be raised within 48 hours of delivery</li>
            <li>Colour variation of up to 10% from screen preview is considered acceptable in printing</li>
            <li>We are not responsible for errors in client-supplied approved artwork</li>
          </ul>

          <h2>6. Artwork & Intellectual Property</h2>
          <ul>
            <li>You confirm that you own the rights to all artwork, logos, and images submitted for printing</li>
            <li>We may use printed samples of your work in our portfolio unless you request otherwise</li>
            <li>We will not reproduce your artwork for any third party without your written consent</li>
          </ul>

          <h2>7. Limitation of Liability</h2>
          <p>Our liability is limited to the value of the print order in question. We are not liable for indirect losses, lost profits, or consequential damages arising from printing services.</p>

          <h2>8. Governing Law</h2>
          <p>These terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the jurisdiction of Dubai courts.</p>

          <h2>9. Contact</h2>
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
