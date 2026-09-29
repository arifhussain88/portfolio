import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arif Hussain — Senior software engineer",
  description:
    "Senior software engineer in Karachi. Laravel, React, and Next.js, from the screen through to the database. Open to senior roles.",
  keywords: [
    "Arif Hussain",
    "Senior software engineer",
    "Laravel",
    "React",
    "Next.js",
    "Karachi",
  ],
  authors: [{ name: "Arif Hussain" }],
  openGraph: {
    title: "Arif Hussain — Senior software engineer",
    description:
      "Senior software engineer in Karachi. Laravel, React, and Next.js, from the screen through to the database.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${sourceSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
