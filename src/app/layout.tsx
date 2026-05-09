import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reduce-Wait — Physician-Led GLP-1 Weight Loss Programme",
  description:
    "A physician-led GLP-1 weight loss programme. Clinical consultation, prescription medication, and ongoing support — delivered to your door across Kerala.",
  keywords: [
    "GLP-1",
    "weight loss",
    "Kerala",
    "semaglutide",
    "tirzepatide",
    "physician-led",
    "online consultation",
  ],
  openGraph: {
    title: "Reduce-Wait — Physician-Led GLP-1 Weight Loss Programme",
    description:
      "Reduce the wait. Reduce the weight. A clinically-supervised GLP-1 programme delivered across Kerala.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
