import type { Metadata } from "next";
import { Inter, Montserrat, Orbitron, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { defaultMetadata, baseUrl } from "@/lib/metadata";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Leadora Systems Private Limited",
  alternateName: "Leadora Systems",
  url: baseUrl,
  logo: `${baseUrl}/leadora-logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXXXX-XXXXX",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jayabheri Silicon Towers, Sreebagh Colony",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500084",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/company/leadora-systems",
    "https://twitter.com/leadorasystems",
    "https://instagram.com/leadorasystems",
    "https://facebook.com/leadorasystems",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Leadora Systems",
  url: baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/services?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
