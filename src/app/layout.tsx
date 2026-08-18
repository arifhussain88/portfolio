import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { CustomCursor } from "@/components/effects/CustomCursor";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arif Hussain — Senior Software Engineer",
  description:
    "Senior software engineer building modern, reliable web applications from frontend to backend. Deep expertise in Laravel, JavaScript, APIs, databases, and cloud infrastructure.",
  keywords: [
    "Senior Software Engineer",
    "Full Stack Developer",
    "Laravel",
    "Vue.js",
    "React",
    "AWS",
    "Karachi",
  ],
  authors: [{ name: "Arif Hussain" }],
  openGraph: {
    title: "Arif Hussain — Senior Software Engineer",
    description:
      "Building modern, reliable web applications from frontend to backend.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
