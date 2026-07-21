import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import GlobalCursorGlow from "@/components/GlobalCursorGlow";
import { SITE_TAGLINE, SITE_DESCRIPTION } from "@/config/site";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const baseUrl = "https://lumisync-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `Lumisync — ${SITE_TAGLINE}`,
    template: "%s | Lumisync",
  },
  description: SITE_DESCRIPTION,
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
  authors: [{ name: "Lumisync", url: baseUrl }],
  creator: "Lumisync",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Lumisync",
    title: `Lumisync — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `Lumisync — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Lumisync — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
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
        <GlobalCursorGlow />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
