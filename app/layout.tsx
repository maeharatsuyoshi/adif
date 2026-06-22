import type { Metadata } from "next";
import { Anton, Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/language";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asia Defense Innovation Fund",
  description:
    "ADIF is Japan's first defense-focused fund. We invest in Japanese defense-tech startups addressing operational needs.",
  openGraph: {
    title: "Asia Defense Innovation Fund",
    description:
      "ADIF is Japan's first defense-focused fund. We invest in Japanese defense-tech startups addressing operational needs.",
    type: "website",
    siteName: "Asia Defense Innovation Fund",
    images: [
      {
        url: "/white-horizontal.png",
        width: 680,
        height: 252,
        alt: "ADIF — Asia Defense Innovation Fund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asia Defense Innovation Fund",
    description:
      "ADIF is Japan's first defense-focused fund. We invest in Japanese defense-tech startups addressing operational needs.",
    images: ["/white-horizontal.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${montserrat.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
