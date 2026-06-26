import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, MessageCircle, ChevronRight } from "lucide-react";
import { industries, getIndustryBySlug } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `Printing for ${industry.title} in Dubai | Fajer Al Madina`,
    description: industry.description,
    alternates: { canonical: `${siteConfig.url}/industries/${slug}` },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedServices = industry.services
    .map((s) => getServiceBySlug(s))
    .filter(Boolean)
    .slice(0, 6);

  const whatsapp = formatWhatsAppLink(
    siteConfig.contact.whatsapp,
    `Hello! I'm looking for printing services for my ${industry.title} business. Can you help?`
  );

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container py-3">
          <nav className="flex items-center gap-1.5 text-xs font-ui text-gray-400">
            <Link href="/" className="hover:text-brand-green transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-brand-green transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-600">{industry.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label mb-5 inline-flex">Industry Solutions</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-5">
              Printing Solutions for
              <br />
              <span className="gradient-text-gold">{industry.title}</span>
            </h1>
            <p className="text-white/70 text-xl mb-8 leading-relaxed">{industry.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-7 py-4 rounded-xl font-ui font-bold hover:bg-brand-green-dark transition-colors shadow-button"
              >
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-4 rounded-xl font-ui font-bold hover:bg-[#1DB954] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {industry.benefits && industry.benefits.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy mb-8">
              What We Provide for {industry.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-ui">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Relevant services */}
      {relatedServices.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy mb-8">
              Popular Services for {industry.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((service) => {
                if (!service) return null;
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="group bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-brand-green/30 hover:bg-white hover:shadow-card transition-all duration-300"
                  >
                    <h3 className="font-display font-bold text-sm text-navy mb-1.5 group-hover:text-brand-green transition-colors">
                      {service.shortTitle}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">{service.description}</p>
                    {service.startingPrice && (
                      <p className="text-xs font-ui text-gray-400">
                        From <span className="text-brand-green font-semibold">{service.startingPrice}</span>
                      </p>
                    )}
                    <div className="mt-2 flex items-center gap-1 text-brand-green text-xs font-ui font-semibold">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-3">
            Ready to Print for Your {industry.title} Business?
          </h2>
          <p className="text-white/80 mb-7 max-w-md mx-auto">
            Get a free quote tailored to your industry. Fast response, premium quality.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 bg-white text-brand-green px-8 py-4 rounded-2xl font-ui font-bold hover:bg-gray-50 transition-colors shadow-lg"
          >
            Get Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
