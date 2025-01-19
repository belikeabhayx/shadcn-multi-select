import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shadcn-multi-select.vercel.app"), // Replace with your actual domain
  title: {
    default: "Shadcn Multi Select Component - Custom Shadcn UI",
    template: "%s | Shadcn Multi Select Component",
  },
  description:
    "A versatile multi-select component built with shadcn/ui, offering seamless selection of multiple options. Enhance user experience and streamline data.",
  keywords: [
    "shadcn",
    "shadcn ui",
    "shadcn select",
    "shadcn select component",
    "multi select",
    "React component",
    "UI component",
    "React",
    "Next.js",
    "TypeScript",
    "web development",
    "UI/UX",
  ],
  authors: [
    {
      name: "Abhay Chauhan",
      url: "https://shadcn-multi-select.vercel.app",
    },
  ],
  creator: "Abhay Chauhan",
  publisher: "Abhay Chauhan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadcn-multi-select.vercel.app",
    title: "Shadcn Multi Select Component - Advanced UI Selection Tool",
    description:
      "A versatile multi-select component built with shadcn/ui, offering seamless selection of multiple options. Enhance user experience and streamline data input with this intuitive UI element.",
    siteName: "Shadcn Multi Select Component",
    images: [
      {
        url: "https://shadcn-multi-select.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Shadcn Multi Select Component Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadcn Multi Select Component - Advanced UI Selection Tool",
    description:
      "A versatile multi-select component built with shadcn/ui, offering seamless selection of multiple options. Enhance user experience and streamline data input with this intuitive UI element.",
    creator: "@belikeabhayx",
    images: ["https://shadcn-multi-select.vercel.app/og.png",],
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
  alternates: {
    canonical: "https://shadcn-multi-select.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
