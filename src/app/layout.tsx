import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arif Hussain — Senior full-stack engineer",
  description:
    "Senior full-stack engineer and team lead in Karachi. Builds and runs SaaS products end to end in Laravel, Vue.js, React, and Next.js, with React Native on mobile. Open to senior roles.",
  keywords: [
    "Arif Hussain",
    "Sayed Arif Hussain",
    "Senior full-stack engineer",
    "Laravel",
    "Vue.js",
    "React",
    "Next.js",
    "React Native",
    "Karachi",
  ],
  authors: [{ name: "Sayed Arif Hussain" }],
  verification: {
    google: "An5m1AzKrDK7G-MJ7TwCTCtKwsLvcR5f-bylTFdgg7I",
  },
  openGraph: {
    title: "Arif Hussain — Senior full-stack engineer",
    description:
      "Senior full-stack engineer and team lead in Karachi. Laravel, Vue.js, React, Next.js, and React Native.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
