import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/language";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cassannet = localFont({
  src: "../public/cassannet-bold.otf",
  variable: "--font-cassannet",
  display: "swap",
  weight: "700",
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
      className={`${geistSans.variable} ${cassannet.variable} ${montserrat.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
