import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest product news, campus technology insights, and articles from the Lumisync team.",
};

export const blogPosts = [
  {
    slug: "introducing-lumisync",
    title: "Introducing Lumisync: The AI Operating System for Universities",
    desc: "We are releasing Lumisync, a modular digital campus platform designed to unify maps, dining, parking, and events into a single intelligent interface.",
    date: "July 15, 2025",
    readTime: "5 min read",
    category: "Product",
    color: "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 border-blue-200 dark:border-blue-900",
  },
  {
    slug: "ai-transforming-campus-navigation",
    title: "How AI Is Transforming Campus Navigation and Student Success",
    desc: "Fuzzy search, localized databases context matching, and natural language model helpers can save students hours of friction during class starts.",
    date: "July 10, 2025",
    readTime: "7 min read",
    category: "Technology",
    color: "bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400 border-green-200 dark:border-green-900",
  },
  {
    slug: "why-universities-need-unified-platform",
    title: "Why Universities Need a Unified Digital Campus Platform",
    desc: "Looking at the fragmented software stacks in higher education and arguing why a unified interface shell is better for students and administrators.",
    date: "July 5, 2025",
    readTime: "6 min read",
    category: "Education",
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border-amber-200 dark:border-amber-900",
  },
];

export default function BlogPage() {
  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);

  return (
    <>
      <Navigation />
      <main className="flex-1 bg-[--background]">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 text-center border-b border-[--border]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(29,78,216,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="section-max px-6 flex flex-col items-center">
            <span className="section-label mb-4">Lumisync Blog</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">
              Campus technology. Redefined.
            </h1>
            <p className="mt-4 text-lg text-[--text-secondary] max-w-xl">
              Latest product updates, technical insights, and articles from the team building the AI Operating System for university campuses.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-py">
          <div className="section-max px-6 max-w-4xl">
            {/* Featured Post */}
            <div className="card p-8 md:p-10 mb-10 flex flex-col justify-between min-h-[340px] border-l-4 border-l-blue-600">
              <div>
                <div className="flex items-center gap-3 text-xs mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${featured.color}`}>
                    {featured.category}
                  </span>
                  <span className="text-[var(--text-muted)] dark:text-[var(--text-muted)] font-medium flex items-center gap-1">
                    <Calendar size={12} /> {featured.date}
                  </span>
                  <span className="text-[var(--text-muted)] dark:text-[var(--text-muted)] font-medium flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="text-sm text-[--text-secondary] leading-relaxed mb-6 max-w-2xl">
                  {featured.desc}
                </p>
              </div>
              <Link href={`/blog/${featured.slug}`} className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
                Read Article <ArrowRight size={14} />
              </Link>
            </div>

            {/* Remaining Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {remaining.map((post, i) => (
                <div key={i} className="card p-8 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="flex items-center gap-3 text-xs mb-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${post.color}`}>
                        {post.category}
                      </span>
                      <span className="text-[var(--text-muted)] dark:text-[var(--text-muted)] font-medium flex items-center gap-1">
                        <Calendar size={12} /> {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-display text-[var(--text-primary)] dark:text-stone-50 mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs text-[--text-secondary] leading-relaxed mb-6">
                      {post.desc}
                    </p>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 text-xs font-semibold flex items-center gap-1">
                    Read Article <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
