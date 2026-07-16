import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumisync.app"),
  title: {
    default: "Lumisync — Your AI-Powered Campus Companion",
    template: "%s | Lumisync",
  },
  description:
    "Lumisync supercharges your university experience. Explore dining, events, campus maps, parking, jobs, and get instant answers from Lumi — your AI campus assistant. Built for universities worldwide.",
  keywords: [
    "campus app",
    "university app",
    "AI campus assistant",
    "student productivity",
    "campus map",
    "dining finder",
    "campus events",
    "Lumisync",
    "Lumi AI",
  ],
  authors: [{ name: "Lumisync", url: "https://lumisync.app" }],
  creator: "Lumisync",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumisync.app",
    siteName: "Lumisync",
    title: "Lumisync — Your AI-Powered Campus Companion",
    description:
      "Supercharge your campus experience with AI-powered dining, events, maps, and more. Built for universities worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumisync — AI Campus Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumisync — AI Campus Companion",
    description:
      "Supercharge your campus experience with Lumi AI. Dining, events, maps, jobs — all in one app.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[--background] text-[--text-primary]">
        {children}
      </body>
    </html>
  );
}
