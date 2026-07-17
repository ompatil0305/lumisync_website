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
    default: "Lumisync — The AI Campus Operating System",
    template: "%s | Lumisync",
  },
  description:
    "Lumisync is the AI-powered operating system for university campuses. Dining, events, maps, parking, faculty, jobs, and Lumi AI — all in one seamless experience. Built for universities worldwide.",
  keywords: [
    "campus operating system",
    "university app",
    "AI campus assistant",
    "campus navigation",
    "student productivity",
    "campus map",
    "dining finder",
    "campus events",
    "Lumisync",
    "Lumi AI",
    "university platform",
    "higher education technology",
  ],
  authors: [{ name: "Lumisync", url: "https://lumisync.app" }],
  creator: "Lumisync",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lumisync.app",
    siteName: "Lumisync",
    title: "Lumisync — The AI Campus Operating System",
    description:
      "One platform for every campus need. Powered by AI. Built for universities worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumisync — AI Campus Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumisync — The AI Campus Operating System",
    description:
      "Dining, events, maps, parking, faculty, jobs, and Lumi AI — all in one app. Built for universities worldwide.",
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
