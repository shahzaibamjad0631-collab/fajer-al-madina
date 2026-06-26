import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import { ServiceDetailClient } from "./ServiceDetailClient";
import { siteConfig } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = service.seo?.title ?? `${service.title} | Fajer Al Madina Dubai`;
  const description = service.seo?.description ?? service.description;
  const keywords = service.seo?.keywords ?? [];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/services/${slug}`,
      images: [{ url: service.image ?? siteConfig.ogImage, width: 1200, height: 630 }],
    },
    alternates: { canonical: `${siteConfig.url}/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetailClient service={service} />;
}
