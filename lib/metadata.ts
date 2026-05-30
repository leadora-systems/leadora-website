import type { Metadata } from "next";
import { site } from "@/content/site";

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leadorasystems.com";

const defaultTitle = `${site.legalName} | IT Consulting & Software Development`;
const defaultDescription =
  "Leadora Systems delivers scalable enterprise software, cloud infrastructure on Azure, Spring Boot microservices, React web apps, mobile development, and AI integration — trusted by businesses across India and globally.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: defaultTitle,
    template: `%s | Leadora Systems`,
  },

  description: defaultDescription,

  keywords: [
    "IT company Hyderabad",
    "IT company India",
    "software development company India",
    "enterprise software development",
    "Spring Boot development India",
    "React development company",
    "Azure cloud solutions India",
    "mobile app development India",
    "AI integration services",
    "digital transformation India",
    "web development company Hyderabad",
    "cloud infrastructure services",
    "Java microservices development",
    "ecommerce development India",
    "IT consulting India",
    "Leadora Systems",
  ],

  authors: [{ name: site.legalName, url: baseUrl }],
  creator: site.legalName,
  publisher: site.legalName,

  alternates: {
    canonical: baseUrl,
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: site.legalName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Leadora Systems — Enterprise IT Consulting & Software Development",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@leadorasystems",
    creator: "@leadorasystems",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${baseUrl}/og-image.png`],
  },

  icons: {
    icon: "/leadora-logo.png",
    shortcut: "/leadora-logo.png",
    apple: "/leadora-logo.png",
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },

  category: "technology",
};

export function pageMetadata(
  title: string,
  description: string,
  options?: {
    keywords?: string[];
    canonical?: string;
    noIndex?: boolean;
  }
): Metadata {
  const url = options?.canonical ? `${baseUrl}${options.canonical}` : undefined;

  return {
    title,
    description,
    ...(options?.keywords ? { keywords: options.keywords } : {}),
    ...(url ? { alternates: { canonical: url } } : {}),
    robots: options?.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_IN",
      siteName: site.legalName,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${title} | Leadora Systems`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}
