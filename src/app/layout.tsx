import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stack Breach — Shadow AI Detection for SMBs",
  description:
    "Find every AI tool in your stack before the auditor does. Built for IT managers who don't have a compliance team.",
  openGraph: {
    title: "Stack Breach — Shadow AI Detection for SMBs",
    description:
      "Find every AI tool in your stack before the auditor does. Built for IT managers who don't have a compliance team.",
    url: "https://stackbreach.ashketing.com",
    siteName: "Stack Breach",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
