import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, MessageCircle, ArrowRight } from "lucide-react";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blog";
import { siteConfig } from "@/lib/config";
import { formatWhatsAppLink } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? post.excerpt,
    keywords: post.seo?.keywords ?? post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category, 3);
  const whatsapp = formatWhatsAppLink(siteConfig.contact.whatsapp, siteConfig.whatsappMessages.quote);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    url: `${siteConfig.url}/blog/${slug}`,
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24">
        <div className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-ui mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-ui font-semibold bg-brand-green/20 text-brand-green-light px-3 py-1.5 rounded-full">
              {post.category}
            </span>
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs text-gray-400 font-ui">
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg mb-6 leading-relaxed">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 font-ui">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {post.publishedAt}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime} min read
            </div>
            <div className="flex items-center gap-1.5">
              By {post.author.name}
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="container max-w-3xl py-12">
        {/* Article image placeholder */}
        <div className="w-full h-64 bg-brand-green-50 rounded-2xl mb-10 flex items-center justify-center">
          <span className="text-gray-400 text-sm font-ui">Article featured image</span>
        </div>

        {/* Prose content */}
        <div
          className="prose prose-gray max-w-none text-gray-700 leading-relaxed
            prose-h2:font-display prose-h2:font-bold prose-h2:text-navy prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:font-display prose-h3:font-semibold prose-h3:text-navy prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
            prose-p:mb-4 prose-p:leading-relaxed
            prose-li:mb-1 prose-li:leading-relaxed
            prose-strong:text-navy prose-strong:font-semibold
            prose-a:text-brand-green prose-a:no-underline hover:prose-a:underline
            prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
        />

        {/* In-article CTA */}
        <div className="mt-12 bg-navy rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="font-display font-bold text-white text-xl mb-2">Need Printing in Dubai?</h3>
          <p className="text-gray-400 mb-5 text-sm">Get a free quote from Fajer Al Madina — same-day printing available.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-3 rounded-xl font-ui font-bold text-sm hover:bg-brand-green-dark transition-colors"
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-ui font-bold text-sm hover:bg-[#1DB954] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="container max-w-3xl">
            <h2 className="font-display font-bold text-xl text-navy mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 p-4 hover:border-brand-green/30 hover:shadow-card transition-all"
                >
                  <span className="text-xs font-ui font-semibold text-brand-green mb-1.5 block">{rp.category}</span>
                  <h3 className="text-sm font-display font-bold text-navy group-hover:text-brand-green transition-colors leading-snug line-clamp-2">{rp.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
