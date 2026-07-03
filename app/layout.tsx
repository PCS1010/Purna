import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Purna Chandra Sekhar | Portfolio",
  description: "Personal portfolio of Purna Chandra Sekhar, a Full Stack Developer & AI Enthusiast specializing in React, Next.js, Python, ML, and GIS Systems.",
  keywords: [
    "Purna Chandra Sekhar",
    "Portfolio",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "Python Developer",
    "GIS Developer",
    "Andhra Pradesh",
  ],
  authors: [{ name: "Purna Chandra Sekhar" }],
  creator: "Purna Chandra Sekhar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://purnachandrasekhar.dev",
    title: "Purna Chandra Sekhar | Portfolio",
    description: "Personal portfolio of Purna Chandra Sekhar, a Full Stack Developer & AI Enthusiast specializing in React, Next.js, Python, ML, and GIS Systems.",
    siteName: "Purna Chandra Sekhar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purna Chandra Sekhar | Portfolio",
    description: "Personal portfolio of Purna Chandra Sekhar, a Full Stack Developer & AI Enthusiast specializing in React, Next.js, Python, ML, and GIS Systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0f] text-[#f3f4f6] font-['Space_Grotesk'] antialiased">
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
