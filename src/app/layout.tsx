import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ractor Labs",
    template: "%s · Ractor Labs",
  },
  description:
    "Hardware-level orchestration for the next generation of agents.",
  applicationName: "Ractor Labs",
  keywords: [
    "Ractor Labs",
    "AI agents",
    "orchestration",
    "runtime",
    "infrastructure",
    "autonomous systems",
  ],
  themeColor: "#ffffff",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Ractor Labs",
    description:
      "Hardware-level orchestration for the next generation of agents.",
    url: "/",
    siteName: "Ractor Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Ractor Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ractor Labs",
    description:
      "Hardware-level orchestration for the next generation of agents.",
    images: ["/vercel.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
