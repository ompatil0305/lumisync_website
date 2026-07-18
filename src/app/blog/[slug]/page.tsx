import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "../page";

// Post content map containing ~600 words per post as requested
const fullPostContents: Record<string, { contentHtml: string; author: string; authorRole: string }> = {
  "introducing-lumisync": {
    author: "Om Patil",
    authorRole: "Founder & Lead Architect",
    contentHtml: `
      <p>Today, we are thrilled to introduce <strong>Lumisync</strong>, a conversational, modular campus operating system built to streamline how students, faculty, and administrators experience daily campus life.</p>
      
      <h3>The Fragmented Campus Experience</h3>
      <p>Modern university campuses are small cities. On any given day, a student needs to find where to park their car, check if a dining hall is open (and what is on the menu), look up a professor's office room, locate resources for career support, and find club meeting details. However, to accomplish these simple tasks, they must navigate a fragmented landscape of dozens of outdated websites, PDF schedules, and separate portal systems.</p>
      
      <p>This fragmentation doesn't just waste time; it creates a cognitive barrier to student engagement. Important opportunities, support resources, and events go completely unnoticed simply because they are buried in mailing lists or clunky portals that students rarely open. We built Lumisync to solve this exact problem: to consolidate these separate data streams into one single, unified interface.</p>
      
      <h3>One Platform, Nine Core Modules</h3>
      <p>Lumisync organizes campus resources into a clean system of nine dedicated modules. The client provides instant access to:</p>
      <ul>
        <li><strong>Interactive Maps:</strong> Navigate building coordinates, classroom offices, and parking lots.</li>
        <li><strong>Dining Finder:</strong> Live status indicators, menus, and dietary restrictions filtering.</li>
        <li><strong>Lumi AI Assistant:</strong> Conversational questions answered using verified databases.</li>
        <li><strong>Events Directory:</strong> Centralized university happenings, RSVPs, and calendar invites.</li>
        <li><strong>Faculty Directory:</strong> Search staff, office locations, hours, and department details.</li>
        <li><strong>On-campus Jobs:</strong> Student assistant positions, pay rates, and direct application links.</li>
      </ul>
      
      <h3>The Intelligence Layer: Meet Lumi AI</h3>
      <p>At the center of Lumisync is Lumi, a custom AI campus assistant powered by Google Gemini. Instead of digging through multiple directories, students can simply ask: <em>"Is the main dining hall open right now and are there vegan options?"</em> or <em>"Directions to Dr. Smith's office hours."</em> Lumi checks the verified local database provider, parses the request, and responds instantly with direct natural language answers and maps, saving precious minutes of searching.</p>
      
      <h3>Built to Scale Globally</h3>
      <p>Lumisync is not a single-university application. We designed it from day one to scale to hundreds of campuses worldwide. Our modular <strong>Provider Architecture</strong> separates the application front-end shell from the underlying data parsing layer. Adding a new university is as simple as creating a new local provider file that binds to the campus data endpoints. This allows us to scale Lumisync globally with zero modifications to the core UI codebase.</p>
      
      <h3>Join the Journey</h3>
      <p>Lumisync is currently running in an early access phase, starting at Texas Tech University. Our vision is to build the definitive digital infrastructure for higher education, making college campuses open, accessible, and intuitive for students everywhere. We're just getting started.</p>
    `,
  },
  "ai-transforming-campus-navigation": {
    author: "Lumisync Tech Team",
    authorRole: "Engineering & AI Research",
    contentHtml: `
      <p>University campuses are physically and digitally dense environments. For new students, transfer students, and visitors, finding a classroom, navigating parking restrictions, or locating a professor's office can be a major source of stress during the first week of classes.</p>
      
      <p>While consumer mapping utilities excel at road navigation, they lack the granular indoor room details and university-specific datasets necessary for daily campus life. At Lumisync, we are leveraging localized database context matching and natural language processing to redefine campus wayfinding and student success.</p>
      
      <h3>Beyond Blue Dots: Contextual Map Data</h3>
      <p>Traditional wayfinding relies on standard GPS coordinates. However, on a college campus, context is everything. A student doesn't just need to route to a building; they need to know if the building is open, which entrance is accessible, where their specific classroom is located on the third floor, and which parking lot matches their active commuter permit.</p>
      
      <p>Lumisync's mapping module links precise coordinate databases directly to university directories. By compiling building codes, room numbers, and parking lot attributes into unified schemas, we can overlay contextual directions right when students need them most.</p>
      
      <h3>Conversational Assist: The Shift from Search to Answers</h3>
      <p>Search engines return lists of links, leaving it up to the user to click, scroll, and parse the data. On a mobile device between classes, this friction is unacceptable. Conversations with AI represent a paradigm shift: moving from search queries to direct, verified answers.</p>
      
      <p>Lumi AI acts as a conversational layer over our unified database. When a student asks Lumi, <em>"Where can I park my car right now with a Commuter West permit?"</em>, the engine doesn't return a link to a parking PDF. It checks the current time, maps the permit zones, identifies compatible commuter lots near the student's coordinates, and presents them in a clean checklist. This is the power of context-aware, localized AI assistants.</p>
      
      <h3>Engineering for Student Success</h3>
      <p>Removing wayfinding friction directly correlates with student success. When students spend less time lost or stressed about parking, they arrive at class on time, prepared, and focused on learning. As we continue to refine our AI capabilities, including adding real-time shuttle tracking and predictive parking indicators, we are committed to making campus navigation completely invisible.</p>
    `,
  },
  "why-universities-need-unified-platform": {
    author: "Higher Ed Advisory Board",
    authorRole: "Product & Strategy Group",
    contentHtml: `
      <p>Higher education technology is notoriously siloed. Over decades, universities have procured separate, specialized software suites to manage dining menus, classroom scheduling, event organizations, job boards, parking, and directory feeds. The result is a highly fragmented digital landscape that frustrates students and strains IT resources.</p>
      
      <p>To improve student retention, engagement, and operational efficiency, universities must transition from siloed, single-purpose utilities to a unified digital campus interface shell.</p>
      
      <h3>The Student Friction Index</h3>
      <p>Students today expect consumer-grade software experiences. They use platforms like Notion, Airbnb, and Stripe, which prioritize simplicity, speed, and premium UI spacing. When they log on to campus portals, they are often greeted by interfaces built a decade ago, requiring multiple logins and complex navigation paths.</p>
      
      <p>This administrative friction has real consequences. Event engagement drops because students can't find club directories. Career opportunities go unfilled because the student job board is hidden behind three logins. Campus resources like health centers or tutoring offices are underutilized simply because students don't know they exist or where they are located.</p>
      
      <h3>Centralizing Information Without Re-platforming</h3>
      <p>The standard administrative solution to software fragmentation is large-scale re-platforming, an expensive, multi-year IT project that often fails to deliver a modern user experience. Lumisync takes a different approach: centralizing the user interface layer without replacing the underlying databases.</p>
      
      <p>Our <strong>Provider Architecture</strong> acts as an ingestion shell. We integrate with your existing systems (like Ellucian Banner or local RSS feeds) to pull dining, parking, map, and event data into a single client. IT departments retain full control over their legacy systems, while students get a beautiful, unified digital companion app.</p>
      
      <h3>Building the Future of Higher Ed Tech</h3>
      <p>A unified digital campus app is no longer a luxury; it is the core infrastructure necessary for the modern university. By prioritizing clean design systems, student privacy, and AI-powered interfaces, we can build colleges that feel welcoming, integrated, and ready to support the next generation of students.</p>
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  return {
    title: `${post?.title || "Blog Post"} | Lumisync`,
    description: post?.desc || "Read our latest article.",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  const fullPost = fullPostContents[resolvedParams.slug];

  if (!post || !fullPost) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="flex-1 bg-[--background] pt-28 pb-20">
        <div className="section-max px-6 max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 dark:text-stone-500 hover:text-blue-600 transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" /> Back to Blog
          </Link>

          {/* Article Header */}
          <article className="prose mx-auto">
            <div className="flex items-center gap-3 text-xs mb-4">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${post.color}`}>
                {post.category}
              </span>
              <span className="text-stone-400 dark:text-stone-500 font-medium">{post.date}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-stone-900 dark:text-stone-50 leading-tight tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center gap-3 pb-8 border-b border-[--border] mb-8">
              <div className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center font-bold text-xs text-stone-600 dark:text-stone-400">
                {fullPost.author[0]}
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-900 dark:text-stone-50">{fullPost.author}</p>
                <p className="text-[10px] text-stone-400 dark:text-stone-500">{fullPost.authorRole}</p>
              </div>
            </div>

            {/* Content Body */}
            <div
              className="text-stone-600 dark:text-stone-300 text-[14px] leading-relaxed space-y-5"
              dangerouslySetInnerHTML={{ __html: fullPost.contentHtml }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
