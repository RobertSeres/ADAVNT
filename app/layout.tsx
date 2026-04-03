import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const familjenGrotesk = localFont({
  src: "../public/fonts/FamiljenGrotesk-Variable.woff2",
  variable: "--font-familjen-grotesk",
  weight: "100 900", // Standard range for variable fonts
});

export const metadata: Metadata = {
  title: "Advant - Digital Systems",
  description: "High-performance digital ecosystems for modern business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${familjenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
