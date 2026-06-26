import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Printing Tips & Dubai Business Insights | Fajer Al Madina",
  description:
    "Expert printing guides, marketing tips, and advertising insights for Dubai businesses. Business cards, signage, vehicle branding, MOHAP compliance, and more.",
  alternates: { canonical: "https://www.fajeralmadinadubai.com/blog" },
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const regular = blogPosts.filter((p) => !p.featured);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container text-center">
          <span className="section-label mb-5 inline-flex">Our Blog</span>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Printing Tips &
            <span className="text-gold-DEFAULT"> Business Insights</span>
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto">
            Expert advice on printing, branding, and advertising for UAE businesses.
          </p>
        </div>
      </section>

      <div className="container py-12">
        {/* Featured posts */}
        <h2 className="text-xl font-display font-bold text-navy mb-6">Featured Articles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {featured.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-green-50 to-brand-green-100" />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-ui font-semibold text-brand-green bg-brand-green-50 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs font-ui">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                  </div>
                </div>
                <h3 className="font-display font-bold text-base text-navy mb-2 group-hover:text-brand-green transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs border-t border-gray-100 pt-3">
                  <span className="text-gray-400 font-ui">{post.publishedAt}</span>
                  <span className="text-brand-green font-ui font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All posts */}
        {regular.length > 0 && (
          <>
            <h2 className="text-xl font-display font-bold text-navy mb-6">More Articles</h2>
            <div className="space-y-4">
              {regular.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex gap-5 bg-white rounded-2xl border border-gray-100 p-5 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-brand-green-50 rounded-xl flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-ui font-semibold text-brand-green bg-brand-green-50 px-2 py-0.5 rounded-full">{post.category}</span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs font-ui">
                        <BookOpen className="w-3 h-3" />
                        {post.readTime} min
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-sm text-navy mb-1 group-hover:text-brand-green transition-colors line-clamp-1">{post.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-green flex-shrink-0 self-center transition-colors" />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
