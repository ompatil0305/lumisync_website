import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Lumisync",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="flex-1 bg-[--background] flex items-center justify-center pt-28 pb-20 min-h-[70vh]">
        <div className="section-max px-6 text-center max-w-md flex flex-col items-center">
          {/* Large Status */}
          <div className="text-stone-300 dark:text-stone-700 text-7xl font-bold tracking-tight font-display mb-4">
            404
          </div>
          
          {/* Header */}
          <h1 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-50 mb-2">
            Page Not Found
          </h1>
          <p className="text-sm text-[--text-secondary] leading-relaxed mb-8">
            The page you're looking for doesn't exist or has been moved. Were you looking for one of these instead?
          </p>

          {/* Quick links */}
          <div className="w-full flex flex-col gap-3">
            {[
              { label: "Home Dashboard", href: "/" },
              { label: "Platform Features", href: "/features" },
              { label: "Campus Map & Navigation", href: "/map" },
              { label: "Contact Support", href: "/contact" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="card p-4 flex items-center justify-between text-xs font-semibold text-stone-900 dark:text-stone-100 hover:text-blue-600 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight size={14} className="text-stone-400" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
