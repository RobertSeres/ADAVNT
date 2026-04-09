import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import AIChatBot from "@/components/AIChatBot";

const familjenGrotesk = localFont({
  src: "../public/fonts/FamiljenGrotesk-Variable.woff2",
  variable: "--font-familjen-grotesk",
  weight: "100 900", // Standard range for variable fonts
});

export const metadata: Metadata = {
  title: "Advant - Growth Partner",
  description: "A te growth partnered. Stratégia, végrehajtás, eredmény. Adatvezérelt növekedés modern eszközökkel.",
  alternates: {
    canonical: "https://advant.hu",
  },
  openGraph: {
    title: "Advant - Growth Partner",
    description: "A te growth partnered. Stratégia, végrehajtás, eredmény.",
    url: "https://advant.hu",
    siteName: "Advant",
    locale: "hu_HU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Advant",
  "url": "https://advant.hu",
  "logo": "https://advant.hu/advant-logo.svg",
  "sameAs": [
    "https://facebook.com/advant",
    "https://linkedin.com/company/advant",
    "https://instagram.com/advant"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+36708856534",
    "contactType": "sales",
    "email": "hello@advant.hu"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${familjenGrotesk.variable} antialiased`}
    >
      <body className="font-sans bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
        <AIChatBot />
      </body>
    </html>
  );
}
