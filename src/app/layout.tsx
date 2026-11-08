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
  title: "Arif Hussain — Senior software engineer",
  description:
    "Senior software engineer in Karachi. Laravel, React, Next.js, and React Native, from the screen through to the database. Open to senior roles.",
  keywords: [
    "Arif Hussain",
    "Senior software engineer",
    "Full-stack",
    "Laravel",
    "React",
    "Next.js",
    "React Native",
    "Karachi",
  ],
  authors: [{ name: "Arif Hussain" }],
  openGraph: {
    title: "Arif Hussain — Senior software engineer",
    description:
      "Senior software engineer in Karachi. Laravel, React, Next.js, and React Native, from the screen through to the database.",
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
