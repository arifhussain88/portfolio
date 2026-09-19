import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { CustomCursor } from "@/components/effects/CustomCursor";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
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
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
